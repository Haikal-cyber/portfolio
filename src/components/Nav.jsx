import { Sparkles } from "lucide-react";
import { nav, contact } from "../data.js";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={nav.brandLabel}>
          <Sparkles size={32} aria-hidden="true" />
        </a>
        <a className="pill" href={contact.linkedin} target="_blank" rel="noreferrer">
          {nav.cta}
        </a>
      </div>
    </header>
  );
}