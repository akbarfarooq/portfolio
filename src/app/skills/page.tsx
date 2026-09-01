import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { MotionReveal } from "@/components/MotionReveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Akbar Farooq - Web Development, Automation & Agentic AI",
  description: "Three practical entry points: Web Development, Automation, and Agentic AI Workflows. Bring your messy process or early product idea.",
  openGraph: {
    title: "Services | Akbar Farooq",
    description: "Web Development, Automation, and Agentic AI Workflows for teams with consequential problems.",
    url: "https://akbarfarooq.vercel.app/skills",
    type: "website",
  },
};

export default function Skills() { return <><PageIntro index="04" title={<>Ways to<br /><em>engage.</em></>} intro="Bring a messy process, an early product, or a serious question about agents. We will find the right technical shape." /><section className="skills-list">{services.map((service, index) => <MotionReveal key={service.code} delay={index * .08}><article className="skill-group"><div><span className="eyebrow">{service.code}</span><h2>{service.title}</h2></div><div><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></div></article></MotionReveal>)}</section></>; }
