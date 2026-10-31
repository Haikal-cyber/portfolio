import { Paperclip, Workflow, Palette, Database } from "lucide-react";
import { DiJava } from "react-icons/di";
import {
  SiFigma,
  SiPostman,
  SiOdoo,
  SiGoogle,
  SiDiagramsdotnet,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { BsBarChartSteps } from "react-icons/bs";
import { about, education, skills } from "../data.js";

const skillIcons = {
  workflow: Workflow,
  java: DiJava,
  office: TbBrandOffice,
  google: SiGoogle,
  database: Database,
  odoo: SiOdoo,
  palette: Palette,
  barchart: BsBarChartSteps,
  figma: SiFigma,
  diagram: SiDiagramsdotnet,
  postman: SiPostman,
};

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
        <div className="ae__side">
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
          <div className="ae__skills">
            <h3 className="ae__skills-title">{skills.title}</h3>
            <ul className="ae__skills-list">
              {skills.items.map((item) => {
                const Icon = skillIcons[item.icon];
                return (
                  <li className="ae__skill" key={item.name}>
                    <Icon className="ae__skill-icon" aria-hidden="true" />
                    <span className="ae__skill-name">{item.name}</span>
                    {item.note && (
                      <span className="ae__skill-note">{item.note}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
