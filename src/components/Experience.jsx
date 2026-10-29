import { experience } from "../data.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section__heading">
          <h2 className="section__title">{experience.title}</h2>
          <span className="section__caption">{experience.caption}</span>
        </div>
        <div className="exp__list">
          {experience.items.map((item) => (
            <article className="exp__card" key={item.role}>
              <div className="exp__role-block">
                <h3 className="exp__role">{item.role}</h3>
                <span className="exp__company">{item.org}</span>
                <span className="exp__type">{item.period}</span>
              </div>
              <div className="exp__body">
                <p>{item.description}</p>
                <div className="exp__tags">
                  {item.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {item.achievement && (
                  <span className="handwritten exp__achievement">achievement → {item.achievement}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
