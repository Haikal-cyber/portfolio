import { Paperclip, Sparkles, Heart } from "lucide-react";
import { about, education } from "../data.js";

export default function AboutEducation() {
  return (
    <section className="section" id="about">
      <div className="container ae">
        <Paperclip className="ae__clip" aria-hidden="true" />
        <div className="ae__about">
          <h2 className="section__title">{about.title}</h2>
          <div className="ae__body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="ae__list">
          {education.items.map((item) => (
            <div className="ae__item" key={item.title}>
              <span className="ae__kind">education</span>
              <h3 className="ae__title">{item.title}</h3>
              <p className="ae__sub">
                {item.program}
                {item.note ? ` · ${item.note}` : ""}
              </p>
              <span className="ae__period">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
