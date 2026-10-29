import { Sparkles, Zap, Star, Heart, ArrowDown } from "lucide-react";
import { hero, contact } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            {hero.eyebrow} <span className="hero__name">{hero.name}</span>
          </p>
          <span className="hero__role">{hero.role}</span>

          <h1
            className="hero__headline"
            aria-label={hero.headlineLines.join(" ")}
          >
            {hero.headlineLines.map((line, li) => (
              <span className="hero__line" aria-hidden="true" key={line}>
                {line.split(" ").map((word, wi) => {
                  const order =
                    hero.headlineLines
                      .slice(0, li)
                      .reduce((n, l) => n + l.split(" ").length, 0) + wi;
                  const last =
                    li === hero.headlineLines.length - 1 &&
                    wi === line.split(" ").length - 1;
                  return (
                    <span className="hero__word" key={wi}>
                      <span
                        className="hero__word-inner"
                        style={{ animationDelay: `${0.15 + order * 0.12}s` }}
                      >
                        {word}
                        {last && (
                          <svg
                            className="hero__underline"
                            viewBox="0 0 300 14"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M3 9 C 50 2, 100 13, 150 7 S 250 3, 297 8"
                              pathLength="1"
                            />
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

          <div className="hero__chips">
            {hero.chips.map((chip) => (
              <span className="hero__chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className="hero__cta">
            <a className="pill" href={contact.linkedin} target="_blank" rel="noreferrer">
              {hero.cta}
            </a>
            <span className="hero__info">{hero.info}</span>
          </div>

          <a className="hero__hint" href="#projects">
            <ArrowDown size={18} aria-hidden="true" />
            {hero.hint}
          </a>
        </div>

        {/* <div className="hero__spark hero__spark--a">
          <Sparkles size={22} aria-hidden="true" />
        </div> */}
        {/* <div className="hero__spark hero__spark--b">
          <Star size={18} aria-hidden="true" />
        </div>
        <div className="hero__spark hero__spark--c">
          <Zap size={20} aria-hidden="true" />
        </div>
        <div className="hero__spark hero__spark--d">
          <Heart size={18} aria-hidden="true" />
        </div> */}
      </div>
    </section>
  );
}
