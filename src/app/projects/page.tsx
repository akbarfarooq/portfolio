import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Akbar Farooq - AI Workflows, Automation & Web Development",
  description: "Selected research-led builds and technical explorations: Loop Engineering, Token Budget Lab, Identity Protocol, and Agent Factory Notes.",
  openGraph: {
    title: "Projects | Akbar Farooq",
    description: "Selected research-led builds and technical explorations in AI workflows, automation, and web development.",
    url: "https://akbarfarooq.vercel.app/projects",
    type: "website",
  },
};

export default function Projects() { return <><PageIntro index="03" title={<>Selected<br /><em>work.</em></>} intro="Research-led builds and technical explorations. Project names and outcomes marked as concepts are placeholders until client work is public." /><section className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</section></>; }
