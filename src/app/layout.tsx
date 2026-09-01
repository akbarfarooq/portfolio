import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akbar Farooq - Full Stack & Agentic AI Developer | Portfolio",
  description: "Full stack developer specializing in agentic AI workflows, automation systems, and web products. Based in Lahore, Pakistan.",
  icons: {
    icon: "/akbar-favicon.svg",
    shortcut: "/akbar-favicon.svg",
  },
  metadataBase: new URL("https://akbarfarooq.vercel.app"),
  alternates: {
    canonical: "https://akbarfarooq.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://akbarfarooq.vercel.app",
    title: "Akbar Farooq - Full Stack & Agentic AI Developer",
    description: "Full stack developer specializing in agentic AI workflows, automation systems, and web products.",
    images: [
      {
        url: "https://akbarfarooq.vercel.app/akbar-favicon.svg",
        width: 1200,
        height: 630,
        alt: "Akbar Farooq Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Farooq - Full Stack & Agentic AI Developer",
    description: "Full stack developer specializing in agentic AI workflows, automation systems, and web products.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akbar Farooq",
    url: "https://akbarfarooq.vercel.app",
    jobTitle: ["Full Stack Developer", "AI Automation Specialist"],
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
    areaServed: "PK",
    knowsLanguage: ["en", "ur"],
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning><Header /><main className="site-main">{children}</main><Footer /></body>
    </html>
  );
}
