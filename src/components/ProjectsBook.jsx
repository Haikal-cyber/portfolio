import { useEffect, useRef, useState } from "react";
import { HandMetal } from "lucide-react";
import { projects, bookCopy } from "../projects.js";
import "./ProjectsBook.css";

const LEAVES = [{ front: "cover", back: 0 }];
for (let i = 0; i < projects.length - 1; i++) {
  LEAVES.push({ front: { photos: i }, back: i + 1 });
}
const L = LEAVES.length;
const INTRO = 0.05;
const OUTRO = 0.05;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function PageContent({ p }) {
  return (
    <div className="pg__content">
      <div className="pg__top">
        <span className="pg__num">{p.n}</span>
        <span className="pg__role">{p.role}</span>
      </div>
      <h3 className="pg__title">{p.title}</h3>
      <p className="pg__about">{p.about}</p>
      <span className="pg__label">{p.label}</span>
      <ul className="pg__list">
        {p.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {p.note && <span className="pg__note">{p.note}</span>}
      {p.link && (
        <a className="pg__link" href={p.link} target="_blank" rel="noreferrer">
          open the project ↗
        </a>
      )}
    </div>
  );
}

function PhotosContent({ p, onPhoto }) {
  return (
    <div className="pg__content pg__content--photos">
      <div className="pg__top">
        <span className="pg__num">{p.n}</span>
        <span className="pg__role">artifacts</span>
      </div>
      {p.images?.length ? (
        <div className={`pg__photos${p.photosRow ? " pg__photos--row" : ""}`}>
          {p.images.map((f, i) => {
            const src = `/image%20project/${encodeURIComponent(p.imgDir)}/${encodeURIComponent(f)}`;
            const alt = `${p.title} — photo ${i + 1}`;
            return (
              <button
                className="pg__photo"
                key={f}
                type="button"
                style={{ "--pr": `${i % 2 ? 2 : -2}deg` }}
                onClick={() => onPhoto?.({ src, alt })}
                aria-label={`preview photo ${i + 1} of ${p.title}`}
              >
                {i === 0 && <span className="pg__tape" aria-hidden="true" />}
                <img src={src} alt={alt} loading="lazy" />
              </button>
            );
          })}
        </div>
      ) : (
        <p className="pg__photos-empty">
          no snapshots on this one — the diagrams live in the report.
        </p>
      )}
      {p.link && (
        <a className="pg__link" href={p.link} target="_blank" rel="noreferrer">
          open the project ↗
        </a>
      )}
    </div>
  );
}

function Page({ p, side, onPhoto }) {
  return (
    <div className={`pg pg--${side}`}>
      <div className="pg__rules" />
      {typeof p === "number" ? (
        <PageContent p={projects[p]} />
      ) : p ? (
        <PhotosContent p={projects[p.photos]} onPhoto={onPhoto} />
      ) : null}
    </div>
  );
}

function Cover() {
  return (
    <div className="cover">
      <div className="cover__spine" />
      <div className="cover__label">
        <div className="cover__name">
          <span className="cover__tiny">name</span>
          <span className="cover__value">{bookCopy.name}</span>
        </div>
        <div className="cover__meta">
          <span>class&nbsp;&nbsp;{bookCopy.className}</span>
          <span>roll no.&nbsp;&nbsp;{bookCopy.roll}</span>
        </div>
      </div>
      <HandMetal className="cover__mark" aria-hidden="true" />
    </div>
  );
}

export default function ProjectsBook() {
  const sectionRef = useRef(null);
  const bookRef = useRef(null);
  const leafRefs = useRef([]);
  const [spread, setSpread] = useState(0);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      const book = bookRef.current;
      if (!section || !book) return;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = clamp(-rect.top / Math.max(total, 1));
      const t = clamp((p - INTRO) / (1 - INTRO - OUTRO)) * L;
      let flipped = 0;
      leafRefs.current.forEach((el, i) => {
        if (!el) return;
        const f = ease(clamp(t - i));
        if (f > 0.5) flipped = i + 1;
        el.style.transform = `perspective(2400px) rotateY(${-180 * f}deg)`;
        el.style.zIndex = f > 0.5 ? 10 + i : 10 + L - i;
        el.style.setProperty("--turn", Math.sin(Math.PI * f).toFixed(3));
      });
      const f0 = ease(clamp(t));
      const off = window.innerWidth > 900 ? window.innerWidth * 0.22 : 0;
      book.style.setProperty("--shift", (-0.5 * (1 - f0)).toFixed(3));
      book.style.setProperty("--off", `${(off * (1 - f0)).toFixed(1)}px`);
      section.style.setProperty("--intro", clamp(1 - f0 * 4).toFixed(3));
      book.style.setProperty("--open", f0.toFixed(3));
      section.style.setProperty("--hint", clamp(1 - p * 14).toFixed(3));
      setSpread(flipped);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const label = spread === 0 ? "closed" : projects[spread - 1].n;

  return (
    <section className="pbook" id="projects" ref={sectionRef} aria-label="Projects">
      <div className="pbook__stage">
        <div className="pbook__head container">
          <h2 className="pbook__title">{bookCopy.title}</h2>
          <span className="pbook__hint" aria-live="polite">
            {label}
          </span>
        </div>

        <div className="pbook__intro" aria-hidden={spread > 0}>
          {bookCopy.intro.map((t) => (
            <p className="pbook__intro-text" key={t}>
              {t}
            </p>
          ))}
          <p className="pbook__handwritten">{bookCopy.handwritten}</p>
          <span className="pbook__scroll">{bookCopy.hint} ↓</span>
        </div>

        <div className="book" ref={bookRef}>
          <div className="book__plate book__plate--right" />
          <div className="book__plate book__plate--left" />
          <div className="book__base">
            <Page
              p={{ photos: projects.length - 1 }}
              side="right"
              onPhoto={setPreview}
            />
          </div>

          {LEAVES.map((leaf, i) => (
            <div className="leaf" key={i} ref={(el) => (leafRefs.current[i] = el)}>
              <div className="face face--front">
                {leaf.front === "cover" ? <Cover /> : <Page p={leaf.front} side="right" onPhoto={setPreview} />}
                <div className="face__shade" />
              </div>
              <div className="face face--back">
                <Page p={leaf.back} side="left" onPhoto={setPreview} />
                <div className="face__shade" />
              </div>
            </div>
          ))}

          <div className="pencil" aria-hidden="true">
            <span className="pencil__eraser" />
            <span className="pencil__band" />
            <span className="pencil__body" />
            <span className="pencil__wood" />
            <span className="pencil__lead" />
          </div>
        </div>

        <div className="pbook__cards">
          {projects.map((p) => (
            <article className="pcard" key={p.n}>
              <div className="pcard__top">
                <span className="pg__num">{p.n}</span>
                <span className="pg__role">{p.role}</span>
              </div>
              <h3 className="pcard__title">{p.title}</h3>
              <p className="pcard__about">{p.about}</p>
              <span className="pg__label">{p.label}</span>
              <ul className="pcard__items">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {p.images?.length > 0 && (
                <div className="pcard__photos">
                  {p.images.map((f, i) => {
                    const src = `/image%20project/${encodeURIComponent(p.imgDir)}/${encodeURIComponent(f)}`;
                    const alt = `${p.title} — photo ${i + 1}`;
                    return (
                      <button
                        className="pcard__photo"
                        key={f}
                        type="button"
                        onClick={() => setPreview({ src, alt })}
                        aria-label={`preview photo ${i + 1} of ${p.title}`}
                      >
                        <img src={src} alt={alt} loading="lazy" />
                      </button>
                    );
                  })}
                </div>
              )}
              {p.note && <span className="pg__note">{p.note}</span>}
              {p.link && (
                <a className="pg__link" href={p.link} target="_blank" rel="noreferrer">
                  open the project ↗
                </a>
              )}
            </article>
          ))}
        </div>

        <ol className="pbook__sr">
          {projects.map((p) => (
            <li key={p.n}>
              {p.title} — {p.role}. {p.about}
            </li>
          ))}
        </ol>
      </div>

      {preview && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={preview.alt}
          onClick={() => setPreview(null)}
        >
          <figure className="lightbox__card" onClick={(e) => e.stopPropagation()}>
            <span className="pg__tape" aria-hidden="true" />
            <img src={preview.src} alt={preview.alt} />
            <figcaption className="lightbox__cap">{preview.alt}</figcaption>
            <button
              className="pill lightbox__close"
              type="button"
              onClick={() => setPreview(null)}
            >
              close ✕
            </button>
          </figure>
        </div>
      )}
    </section>
  );
}