import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { MotionReveal } from "@/components/MotionReveal";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing | Akbar Farooq - Technical Essays & Field Notes",
  description: "Short technical essays from the edge between prototypes and production. Notes on AI, automation, and systems design.",
  openGraph: {
    title: "Writing | Akbar Farooq",
    description: "Technical essays and field notes on AI workflows, automation, and systems design.",
    url: "https://akbarfarooq.vercel.app/writing",
    type: "website",
  },
};

export default function Writing() { return <><PageIntro index="05" title={<>Working<br /><em>notes.</em></>} intro="Short technical essays from the edge between prototypes and production. Drafts are clearly marked until published." /><section className="notes-list">{notes.map((note, index) => <MotionReveal key={note.title} delay={index * .08}><article className="note-row"><span>{note.date}</span><div><h2>{note.title}</h2><p>{note.excerpt}</p></div><span className="note-status">Draft / placeholder</span></article></MotionReveal>)}</section></>; }
