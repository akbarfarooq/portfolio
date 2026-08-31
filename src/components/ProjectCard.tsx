import type { Project } from "@/lib/content";
import { MotionReveal } from "./MotionReveal";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <MotionReveal delay={index * 0.08}><article className="project-card"><div className="project-card-top"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><div className="project-detail"><div><b>Problem</b><p>{project.problem}</p></div><div><b>Approach</b><p>{project.approach}</p></div></div><div className="project-card-bottom"><span>{project.stack.join("  /  ")}</span><span>Outcome <i>{project.outcome}</i></span></div></article></MotionReveal>;
}
