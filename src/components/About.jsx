import { about } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__inner">
        <div className="about__heading">
          <h2 className="section__title">{about.title}</h2>
          <span className="section__caption">{about.caption}</span>
        </div>
        <div className="about__body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}