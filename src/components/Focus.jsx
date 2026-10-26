import { Network, Workflow, Puzzle } from "lucide-react";
import { focus } from "../data.js";

const icons = {
  network: Network,
  workflow: Workflow,
  puzzle: Puzzle,
};

export default function Focus() {
  return (
    <section className="section" id="focus">
      <div className="container">
        <div className="section__heading">
          <h2 className="section__title">{focus.title}</h2>
          <span className="section__caption">{focus.caption}</span>
        </div>
        <div className="focus__cards">
          {focus.areas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <article className="card" key={area.title}>
                <Icon className="card__icon" size={28} aria-hidden="true" />
                <h3 className="card__title">{area.title}</h3>
                <p className="card__desc">{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}