import { useEffect, useState } from "react";

const items = [
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (6).jpeg",  x: 64,  y: 56,  w: 340, h: 430, r: -3,   tape: -4, caption: "Capstone Project Showcase" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (21).jpeg", x: 440, y: 90,  w: 300, h: 250, r: 2 },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (18).jpeg", x: 790, y: 48,  w: 330, h: 400, r: 3.5, tape: -6, caption: "Onboarding Mentee Digistar Telkom" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (20).jpeg", x: 490, y: 420, w: 280, h: 240, r: -6,  tape: 4,  caption: "Award Best Mentee Digistar Telkom 2025" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (17).jpeg", x: 80, y: 560, w: 330, h: 300, r: 2,   caption: "first day at Telkom" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (7).jpeg",  x: 830, y: 520, w: 310, h: 360, r: -2.5, caption: "Capstone Project Presentation" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (19).jpeg", x: 70,  y: 950, w: 300, h: 280, r: -2,  tape: -5, caption: "Group Business Transformation Team" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (5).jpg",  x: 420, y: 780, w: 330, h: 400, r: 3,   tape: 6,  caption: "Capstone Project" },
  { file: "Salinan dari Portfolio Azzahra Helga Voleta (22).jpeg", x: 810, y: 960, w: 310, h: 260, r: 2,   caption: "Team Building Activity" },
];

export default function Gallery() {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section__heading">
          <h2 className="section__title">gallery</h2>
          <span className="section__caption">the scrapbook →</span>
        </div>

        <div className="gallery__wrap">
          <div className="gallery__board">
            {items.map((p, i) => (
              <figure
                className="gallery__item"
                key={p.file}
                style={{
                  "--x": `${(p.x / 1200) * 100}%`,
                  "--y": `${(p.y / 1330) * 100}%`,
                  "--w": `${(p.w / 1200) * 100}%`,
                  "--ar": `${p.w - 24}/${p.h}`,
                  "--r": `${p.r}deg`,
                }}
              >
                {p.tape && (
                  <span
                    className="gallery__tape"
                    style={{ "--t": `${p.tape}deg` }}
                    aria-hidden="true"
                  />
                )}
                <button
                  className="gallery__imgbtn"
                  type="button"
                  onClick={() =>
                    setPreview({
                      src: `/gallery/${encodeURIComponent(p.file)}`,
                      alt: p.caption || `gallery photo ${i + 1}`,
                    })
                  }
                  aria-label={`preview ${p.caption || `gallery photo ${i + 1}`}`}
                >
                  <img
                    className="gallery__img"
                    src={`/gallery/${encodeURIComponent(p.file)}`}
                    alt={p.caption || `gallery photo ${i + 1}`}
                    loading="lazy"
                  />
                </button>
                {p.caption && (
                  <figcaption className="gallery__cap">{p.caption}</figcaption>
                )}
              </figure>
            ))}

            <span className="gallery__note" aria-hidden="true">look! it's us</span>
            <svg className="gallery__arrow" viewBox="0 0 80 36" aria-hidden="true">
              <path
                d="M76,4 C50,0 26,8 8,28 M8,28 L16,20 M8,28 L18,30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
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
            <span
              className="gallery__tape"
              style={{ "--t": "-4deg" }}
              aria-hidden="true"
            />
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
