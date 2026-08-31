import { PageIntro } from "@/components/PageIntro";
import { MotionReveal } from "@/components/MotionReveal";
import { notes } from "@/lib/content";

export default function Writing() { return <><PageIntro index="05" title={<>Working<br /><em>notes.</em></>} intro="Short technical essays from the edge between prototypes and production. Drafts are clearly marked until published." /><section className="notes-list">{notes.map((note, index) => <MotionReveal key={note.title} delay={index * .08}><article className="note-row"><span>{note.date}</span><div><h2>{note.title}</h2><p>{note.excerpt}</p></div><span className="note-status">Draft / placeholder</span></article></MotionReveal>)}</section></>; }
