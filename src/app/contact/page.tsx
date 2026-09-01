import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact | Akbar Farooq - Start a Conversation",
  description: "Have a workflow to automate, a product that needs a serious frontend, or an agent idea? Send the brief and let's talk.",
  openGraph: {
    title: "Contact | Akbar Farooq",
    description: "Get in touch to discuss your project: automation workflows, web products, or agentic AI systems.",
    url: "https://akbarfarooq.vercel.app/contact",
    type: "website",
  },
};

export default function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Akbar Farooq",
    url: "https://akbarfarooq.vercel.app/contact",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      email: "hello@akbarfarooq.dev",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
    mainEntity: {
      "@type": "Person",
      name: "Akbar Farooq",
      url: "https://akbarfarooq.vercel.app",
      jobTitle: ["Full Stack Developer", "AI Automation Specialist"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <PageIntro
        index="06"
        title={
          <>
            Start a<br />
            <em>conversation.</em>
          </>
        }
        intro="Have a workflow that should be automated, a product that needs a serious frontend, or an agent idea that needs boundaries? Send the brief."
      />
      <section className="contact-grid">
        <div>
          <span className="eyebrow">Best first step</span>
          <a className="contact-email" href="mailto:hello@akbarfarooq.dev">
            hello@akbarfarooq.dev
          </a>
        </div>
        <div className="contact-links">
          <span className="eyebrow">Elsewhere</span>
          <a
            href="https://github.com/akbarfarooq"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/akbarfarooq"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://fiverr.com/akbarfarooq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr ↗
          </a>
        </div>
      </section>
    </>
  );
}
