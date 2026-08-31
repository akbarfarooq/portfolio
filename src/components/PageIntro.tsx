import { MotionReveal } from "./MotionReveal";
import type { ReactNode } from "react";

export function PageIntro({ index, title, intro }: { index: string; title: ReactNode; intro: string }) {
  return <MotionReveal><div className="page-intro"><span className="eyebrow">{index} / AKBAR FAROOQ</span><h1>{title}</h1><p>{intro}</p></div></MotionReveal>;
}
