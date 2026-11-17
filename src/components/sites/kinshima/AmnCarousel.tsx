"use client";

import { useEffect, useRef, useState } from "react";
import { KinshimaImage } from "./KinshimaImage";

const slides = [
  {
    src: "/sites/kinshima/amn-carousel-characters.png",
    alt: "Les jeunes guerriers de Kinshima, bras croisés",
  },
  {
    src: "/sites/kinshima/amn-carousel-costumes.png",
    alt: "Les jeunes guerriers de Kinshima en costumes et avec leurs armes",
  },
] as const;

export function AmnCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSlide = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSlide) {
          const index = slideRefs.current.indexOf(visibleSlide.target as HTMLElement);
          if (index >= 0) setActiveIndex(index);
        }
      },
      { threshold: [0.6] },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(index);
  };

  const move = (direction: number) => {
    goToSlide((activeIndex + direction + slides.length) % slides.length);
  };

  return (
    <section className="kp-amn-carousel" aria-label="Les guerriers des Arts Martiaux Narratifs" aria-roledescription="carrousel">
      <div className="kp-amn-carousel-track">
        {slides.map((slide, index) => (
          <article
            className="kp-amn-carousel-slide"
            key={slide.src}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${index + 1} sur ${slides.length}`}
          >
            <KinshimaImage src={slide.src} alt={slide.alt} fill sizes="100vw" />
          </article>
        ))}
      </div>
      <button className="kp-amn-carousel-arrow previous" type="button" aria-label="Image précédente" onClick={() => move(-1)}>
        <span aria-hidden="true">‹</span>
      </button>
      <button className="kp-amn-carousel-arrow next" type="button" aria-label="Image suivante" onClick={() => move(1)}>
        <span aria-hidden="true">›</span>
      </button>
      <div className="kp-amn-carousel-dots" aria-label="Choisir une image">
        {slides.map((slide, index) => (
          <button
            className={index === activeIndex ? "active" : ""}
            key={slide.src}
            type="button"
            aria-label={`Afficher l'image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Image {activeIndex + 1} sur {slides.length}
      </p>
    </section>
  );
}
