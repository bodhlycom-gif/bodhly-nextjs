import Script from "next/script";
import LeadCaptureForm from "@/components/lead-capture-form";

export default function Home() {
  const navLinks = [
    ["Features", "#features"],
    ["How It Works", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["About", "#about"],
  ];

  const logo = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md shadow-secondary/20">
        <span
          className="material-symbols-outlined text-2xl text-white"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          school
        </span>
      </div>
      <div className="leading-tight">
        <span className="block text-2xl font-bold tracking-tight text-primary dark:text-white">Bodhly</span>
        <span className="block text-xs font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
          School AI Platform
        </span>
      </div>
    </>
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.bodhly.com/#organization",
        name: "Bodhly EdTech Solutions Pvt Ltd",
        url: "https://www.bodhly.com",
        logo: "https://www.bodhly.com/logo.png",
        description:
          "AI-powered school management platform built for private schools in Kerala with automation, analytics, and communication workflows.",
        areaServed: {
          "@type": "State",
          name: "Kerala",
          containedInPlace: {
            "@type": "Country",
            name: "India",
          },
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.bodhly.com/#software",
        name: "Bodhly AI School Management Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://www.bodhly.com",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        areaServed: {
          "@type": "State",
          name: "Kerala",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.bodhly.com/#website",
        name: "Bodhly",
        url: "https://www.bodhly.com",
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <div className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <Script
        id="bodhly-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="#top" aria-label="Bodhly Home">
            {logo}
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                className="text-sm font-medium transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-background-dark"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-background-dark lg:block">
              Log In
            </button>
            <a
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-background-dark"
              href="#audit"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-6 pb-3 md:hidden">
          {navLinks.map(([label, href]) => (
            <a key={label} className="shrink-0 text-sm font-medium text-slate-600 dark:text-slate-300" href={href}>
              {label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden px-6 py-20 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_35%)]" />
          <div className="mx-auto max-w-7xl items-center lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-secondary" />
                Trusted by 50+ Kerala Private Schools
              </div>
              <h1 className="text-5xl leading-[1.1] tracking-tight text-slate-900 dark:text-white lg:text-6xl">
                Run Your School with <span className="text-secondary">AI</span> — Not Paperwork
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Modern, AI-powered school management platform designed specifically for private schools in Kerala.
                Automate complex tasks, eliminate manual errors, and gain intelligent insights to grow your
                institution.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-background-dark"
                  href="#audit"
                >
                  Book a Free Demo
                </a>
                <a
                  className="rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-secondary transition-all hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-800 dark:bg-background-dark dark:text-slate-300 dark:focus-visible:ring-offset-background-dark"
                  href="#how-it-works"
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div className="mt-16 lg:mt-0">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-secondary" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">Admin Dashboard • St. Mary&apos;s Academy</div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="col-span-2 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-bold">Attendance Trends</span>
                      <span className="text-xs font-medium text-secondary">+12% vs last month</span>
                    </div>
                    <div className="flex h-32 w-full items-end gap-2 rounded-lg bg-gradient-to-t from-secondary/20 to-secondary/5 px-2 pb-2">
                      <div className="h-1/2 w-full rounded bg-secondary/40" />
                      <div className="h-3/4 w-full rounded bg-secondary/40" />
                      <div className="h-2/3 w-full rounded bg-secondary/40" />
                      <div className="h-full w-full rounded bg-secondary" />
                      <div className="h-4/5 w-full rounded bg-secondary/40" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
                    <span className="mb-1 text-xs text-slate-500">Fee Collection</span>
                    <span className="text-2xl font-bold text-primary dark:text-white">₹4.2M</span>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-4/5 bg-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-background-dark/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Built for Indian Schools</h2>
              <p className="mt-2 text-slate-500">Secure, localized, and intelligent tools for modern education.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-background-light p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">cloud_done</span>
                </div>
                <h3 className="text-lg font-bold">Secure &amp; Cloud-Based</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Your data is encrypted and accessible anywhere. Automated backups and bank-grade security
                  protocols.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-background-light p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <h3 className="text-lg font-bold">Kerala Institutions Ready</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Built to match the specific needs of local boards (SCERT, CBSE) and local management workflow.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-background-light p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-3xl">insights</span>
                </div>
                <h3 className="text-lg font-bold">AI-Powered Analytics</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Predictive trends for student performance, financial health, and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background-light py-24 dark:bg-background-dark" id="features">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Comprehensive Tools for Every Stakeholder
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Everything you need to run your school efficiently in one single platform.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["group", "Student Management", "Centralized records for every student, from admission to graduation. Digital portfolios and document storage."],
                ["how_to_reg", "Attendance Automation", "Biometric and mobile-based tracking with instant SMS notifications to parents for absences."],
                ["payments", "Smart Fee Management", "Automated fee reminders, online payment integration, and real-time collection reports."],
                ["fact_check", "Exam & Result Analytics", "Automated grading, report card generation, and student performance trend mapping over time."],
                ["forum", "Parent Communication", "Dedicated portal and mobile app for direct engagement, homework updates, and circulars."],
                ["psychology", "AI Academic Insights", "Data-driven school improvements with predictive identifying of at-risk students before exams."],
              ].map(([icon, title, desc]) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-secondary/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent/5 py-24 dark:bg-accent/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Bodhly AI vs. Traditional Software</h2>
              <p className="mt-4 text-slate-500">Why top schools are switching to our intelligent platform.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950">
                    <th className="border-b border-slate-200 p-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800">
                      Capability
                    </th>
                    <th className="border-b border-slate-200 p-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800">
                      Traditional ERP
                    </th>
                    <th className="border-b border-slate-200 bg-accent/10 p-6 text-sm font-bold uppercase tracking-wider text-primary dark:border-slate-800">
                      Bodhly AI Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-6 font-medium">Data Entry</td>
                    <td className="p-6 text-slate-500">Manual &amp; Tedious</td>
                    <td className="bg-accent/10 p-6 font-semibold text-secondary">Automated AI Extraction</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Reporting</td>
                    <td className="p-6 text-slate-500">Static PDFs</td>
                    <td className="bg-accent/10 p-6 font-semibold text-secondary">Live Predictive Dashboards</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Fee Management</td>
                    <td className="p-6 text-slate-500">Manual Follow-ups</td>
                    <td className="bg-accent/10 p-6 font-semibold text-secondary">AI Reminder Sequences</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Insights</td>
                    <td className="p-6 text-slate-500">Hindsight only</td>
                    <td className="bg-accent/10 p-6 font-semibold text-secondary">Predictive Academic Trends</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-background-light py-24 dark:bg-slate-900/50" id="how-it-works">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-3xl font-bold text-primary dark:text-white">Get Started in 3 Simple Steps</h2>
            <div className="relative grid gap-12 md:grid-cols-3">
              <div className="absolute left-0 right-0 top-10 z-0 hidden h-0.5 bg-slate-200 dark:bg-slate-800 md:block" />
              {[
                ["1", "Setup", "Create your school profile and configure institutional parameters in minutes."],
                ["2", "Import", "Upload your existing data via bulk CSV or sync with your current legacy system."],
                ["3", "Optimize", "Let Bodhly AI start analyzing and automating your daily school operations."],
              ].map(([step, title, desc]) => (
                <div key={step} className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-secondary bg-white text-2xl font-bold text-secondary shadow-lg dark:bg-slate-800">
                    {step}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" id="audit">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-2xl lg:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-4xl font-bold">Free AI School Readiness Audit</h2>
                  <p className="mb-8 text-lg text-slate-300">
                    Not sure where to start? Get a customized report on how AI can optimize your specific school&apos;s
                    operations.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>Personalized Efficiency Score</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>Resource Optimization Map</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>Cost Reduction Estimates</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
                  <LeadCaptureForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background-light py-24 dark:bg-background-dark" id="pricing">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-primary dark:text-white">Transparent Pricing</h2>
              <p className="mt-4 text-slate-500">Scales with your school&apos;s growth.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-bold">Basic</h3>
                <p className="mt-2 text-sm text-slate-500">Essential management for small schools.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-primary dark:text-white">₹4,999</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xl text-secondary">check</span>
                    Student Information System
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xl text-secondary">check</span>
                    Basic Attendance
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="material-symbols-outlined text-xl">close</span>
                    Advanced AI Analytics
                  </li>
                </ul>
                <button className="mt-8 rounded-xl border border-primary px-6 py-3 font-bold text-primary transition-all hover:bg-primary/5">
                  Contact for Pricing
                </button>
              </div>

              <div className="relative flex flex-col rounded-2xl border-2 border-secondary bg-white p-8 shadow-2xl dark:bg-slate-900">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="mt-2 text-sm text-slate-500">The complete school management suite.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-primary dark:text-white">₹9,999</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xl text-secondary">check</span>
                    Up to 1,500 Students
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xl text-secondary">check</span>
                    Fee Management &amp; Online Payments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xl text-secondary">check</span>
                    Exam &amp; Report Card Automation
                  </li>
                </ul>
                <button className="mt-8 rounded-xl bg-secondary px-6 py-3 font-bold text-white shadow-lg shadow-secondary/20 transition-all hover:bg-secondary/90">
                  Contact for Pricing
                </button>
              </div>

              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-bold text-primary dark:text-white">AI Premium</h3>
                <p className="mt-2 text-sm text-slate-500">Unlock the full power of predictive AI.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">Custom</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xl text-secondary">check</span>
                    Unlimited Students
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold">
                    <span
                      className="material-symbols-outlined text-xl text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                    Predictive Student Analytics
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold">
                    <span
                      className="material-symbols-outlined text-xl text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                    Priority 24/7 Dedicated Support
                  </li>
                </ul>
                <button className="mt-8 rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300">
                  Contact for Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-4xl font-extrabold text-white">Transform Your School with AI</h2>
            <p className="mb-10 text-xl text-white/80">
              Join forward-thinking schools in Kerala who have already modernized their operations with Bodhly.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-primary shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                href="#audit"
              >
                Book a Free Demo Now
              </a>
              <button className="rounded-xl border-2 border-white/20 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-background-dark" id="about">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-2">
                {logo}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                Empowering Indian educational institutions through intelligent automation and data-driven insights.
                Built in Kochi, for the world.
              </p>
              <div className="flex gap-4">
                <a className="text-slate-400 transition-colors hover:text-secondary" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="text-slate-400 transition-colors hover:text-secondary" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
                <a className="text-slate-400 transition-colors hover:text-secondary" href="#">
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-primary dark:text-white">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Student Management
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Fee Automation
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Exam Management
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Communication
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-primary dark:text-white">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-secondary" href="#">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-primary dark:text-white">Newsletter</h4>
              <p className="mb-4 text-sm text-slate-500">
                Get the latest insights on school management and AI in education.
              </p>
              <div className="flex gap-2">
                <input
                  className="w-full rounded-lg border-slate-200 bg-slate-50 text-sm focus:border-secondary focus:ring-secondary dark:border-slate-800 dark:bg-slate-900"
                  placeholder="Your email"
                  type="email"
                />
                <button className="rounded-lg bg-secondary p-2 text-white transition-all hover:bg-secondary/90">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-100 pt-8 text-center text-sm text-slate-400 dark:border-slate-800">
            <p>© 2024 Bodhly EdTech Solutions Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
