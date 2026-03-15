import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bodhly.com"),
  icons: {
    icon: "/favicon.ico",
  },
  title: "Bodhly | AI-Powered School Management for Kerala Schools",
  description:
    "Bodhly is an AI-powered school management system for Kerala private schools with smart attendance, fee automation, analytics, and parent communication.",
  keywords: [
    "school management software Kerala",
    "Kerala school ERP",
    "AI school management India",
    "private school software Kerala",
    "CBSE school software Kerala",
    "SCERT school management platform",
    "school fee management Kerala",
    "attendance automation for schools",
    "school analytics platform India",
    "Bodhly",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bodhly | AI-Powered School Management for Kerala Schools",
    description:
      "Modern school ERP and AI operations platform built for Kerala institutions: attendance, fees, communication, and predictive insights.",
    url: "https://www.bodhly.com",
    siteName: "Bodhly",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodhly | AI-Powered School Management",
    description:
      "AI-powered school management for Kerala schools. Automate attendance, fees, and school operations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "aodtN7l79DkxUgxp99WhiS0ahEuas0Wlx1H2gzRIIkA",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      {/* google-site-verification=Jx8h7L1MucLgmt4sIkmgvxpyD55fLnKmM1gV55nDrdg */}
      <head>
        <meta
          name="google-site-verification"
          content="Jx8h7L1MucLgmt4sIkmgvxpyD55fLnKmM1gV55nDrdg"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${lexend.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
