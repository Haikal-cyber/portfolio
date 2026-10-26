import { hero } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="tag">{hero.tag}</span>
          <h1 className="hero__headline" aria-label={hero.headlineLines.join(" ")}>
            {hero.headlineLines.map((line, li) => (
              <span className="hero__line" aria-hidden="true" key={line}>
                {line.split(" ").map((word, wi) => {
                  const order = hero.headlineLines
                    .slice(0, li)
                    .reduce((n, l) => n + l.split(" ").length, 0) + wi;
                  const last = li === hero.headlineLines.length - 1 && wi === line.split(" ").length - 1;
                  return (
                    <span className="hero__word" key={wi}>
                      <span
                        className="hero__word-inner"
                        style={{ animationDelay: `${0.15 + order * 0.12}s` }}
                      >
                        {word}
                        {last && (
                          <svg className="hero__underline" viewBox="0 0 300 14" preserveAspectRatio="none">
                            <path d="M3 9 C 50 2, 100 13, 150 7 S 250 3, 297 8" pathLength="1" />
                          </svg>
                        )}
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <p className="hero__intro">{hero.intro}</p>
          <span className="handwritten" aria-label={hero.caption}>
            {[...hero.caption.replace(/\s*→$/, "")].map((ch, i) => (
              <span
                className="wave-char"
                aria-hidden="true"
                key={i}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
            <span className="wave-arrow" aria-hidden="true">
              {"\u00A0→"}
            </span>
          </span>
          <div className="hero__cta">
            <a className="pill" href="#contact">
              {hero.cta}
            </a>
            <span className="hero__info">{hero.info}</span>
          </div>
        </div>

      </div>
    </section>
  );
}