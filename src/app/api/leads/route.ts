import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  schoolName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  studentCount?: string;
  challenge?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadRecord = Required<LeadPayload> & {
  createdAt: string;
  source: string;
};

function getLeadRecord(body: LeadPayload): LeadRecord {
  return {
    schoolName: body.schoolName!.trim(),
    contactName: body.contactName!.trim(),
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    studentCount: body.studentCount!.trim(),
    challenge: body.challenge!.trim(),
    createdAt: new Date().toISOString(),
    source: "public-website",
  };
}

async function sendToGoogleSheets(lead: LeadRecord) {
  const webhookUrl = process.env.LEADS_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return { configured: false, success: false };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets webhook failed: ${errorText || response.statusText}`);
  }

  return { configured: true, success: true };
}

async function sendEmailNotification(lead: LeadRecord) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.LEADS_NOTIFICATION_EMAIL;
  const fromEmail = process.env.LEADS_FROM_EMAIL ?? "Bodhly Leads <onboarding@bodhly.com>";

  if (!resendApiKey || !notificationEmail) {
    return { configured: false, success: false };
  }

  const subject = `New Bodhly Lead • ${lead.schoolName}`;
  const text = [
    "New lead submitted from Bodhly public website",
    "",
    `School: ${lead.schoolName}`,
    `Contact: ${lead.contactName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Student Count: ${lead.studentCount}`,
    `Challenge: ${lead.challenge}`,
    `Submitted At: ${lead.createdAt}`,
    `Source: ${lead.source}`,
  ].join("\n");

  const html = `
    <h2>New Bodhly Lead</h2>
    <p><strong>School:</strong> ${lead.schoolName}</p>
    <p><strong>Contact:</strong> ${lead.contactName}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
    <p><strong>Student Count:</strong> ${lead.studentCount}</p>
    <p><strong>Challenge:</strong> ${lead.challenge}</p>
    <p><strong>Submitted At:</strong> ${lead.createdAt}</p>
    <p><strong>Source:</strong> ${lead.source}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [notificationEmail],
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Email notification failed: ${errorText || response.statusText}`);
  }

  return { configured: true, success: true };
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as LeadPayload;

  const requiredFields: Array<keyof LeadPayload> = [
    "schoolName",
    "contactName",
    "email",
    "phone",
    "studentCount",
    "challenge",
  ];

  const hasMissingFields = requiredFields.some((field) => !body[field]?.trim());
  if (hasMissingFields) {
    return NextResponse.json({ message: "Please fill all required fields." }, { status: 400 });
  }

  if (!emailPattern.test(body.email!)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const leadRecord = getLeadRecord(body);

  const destinations = await Promise.allSettled([
    sendToGoogleSheets(leadRecord),
    sendEmailNotification(leadRecord),
  ]);

  const results = destinations
    .map((result) => (result.status === "fulfilled" ? result.value : null))
    .filter((result): result is { configured: boolean; success: boolean } => Boolean(result));

  const isAnyConfigured = results.some((result) => result.configured);
  const isAnySuccess = results.some((result) => result.success);

  if (!isAnyConfigured) {
    return NextResponse.json(
      {
        message:
          "Lead destination is not configured. Set LEADS_GOOGLE_SHEETS_WEBHOOK_URL and/or RESEND_API_KEY + LEADS_NOTIFICATION_EMAIL.",
      },
      { status: 500 },
    );
  }

  if (!isAnySuccess) {
    const reasons = destinations
      .map((result) => (result.status === "rejected" ? result.reason : null))
      .filter(Boolean)
      .map((reason) => (reason instanceof Error ? reason.message : "Unknown error"));

    console.error("[lead-capture] Delivery failed", { reasons, leadRecord });

    return NextResponse.json(
      { message: "Submission received but delivery failed. Please try again." },
      { status: 502 },
    );
  }

  console.info("[lead-capture] New Bodhly lead", {
    ...leadRecord,
    delivery: destinations.map((destination) => destination.status),
  });

  return NextResponse.json({
    message: "Thanks! Your request was received. Our Kerala onboarding team will reach out soon.",
  });
}
