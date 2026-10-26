import { experience } from "../data.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section__heading">
          <h2 className="section__title">{experience.title}</h2>
          <span className="section__caption">{experience.caption}</span>
        </div>
        <div className="exp__card">
          <div className="exp__role-block">
            <h3 className="exp__role">{experience.role}</h3>
            <span className="exp__company">{experience.company}</span>
            <span className="exp__type">{experience.type}</span>
          </div>
          <div className="exp__body">
            <p>{experience.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}