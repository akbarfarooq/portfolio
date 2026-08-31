import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Work", "/projects"],
  ["Services", "/skills"],
  ["Notes", "/writing"],
] as const;

export function Header() {
  return <header className="site-header"><Link className="brand" href="/">AKBAR<span>_</span></Link><nav aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="nav-cta" href="/contact">Start a project <span>↗</span></Link></nav></header>;
}
