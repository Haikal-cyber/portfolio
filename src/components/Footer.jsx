import { Sparkles } from "lucide-react";
import { footer, contact } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <h2 className="footer__headline">{footer.headline}</h2>
        <p className="footer__body">{footer.body}</p>
        <a className="pill" href={`mailto:${contact.email}`}>
          {footer.cta}
        </a>
        <div className="footer__bottom">
          <span className="footer__brand">
            <Sparkles size={24} aria-hidden="true" />
          </span>
          <span className="footer__copyright">{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}