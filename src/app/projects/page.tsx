import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function Projects() { return <><PageIntro index="03" title={<>Selected<br /><em>work.</em></>} intro="Research-led builds and technical explorations. Project names and outcomes marked as concepts are placeholders until client work is public." /><section className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</section></>; }
