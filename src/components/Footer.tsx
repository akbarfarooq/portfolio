import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div><span className="eyebrow">AKBAR FAROOQ / PAKISTAN</span><p className="footer-line">Build the system<br /><em>behind the idea.</em></p></div><div className="footer-links"><Link href="/contact">Contact</Link><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://fiverr.com" target="_blank" rel="noreferrer">Fiverr ↗</a></div><small>© 2026 Akbar Farooq. Built for useful autonomy.</small></footer>;
}
