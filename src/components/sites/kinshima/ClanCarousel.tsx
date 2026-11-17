"use client";

import { useEffect, useState } from "react";
import { KinshimaImage } from "./KinshimaImage";
import { KinshimaLink } from "./KinshimaChrome";

type ClanCarouselItem = {
  title: string;
  href: string;
  imageSrc: string;
  backgroundSrc: string;
};

export function ClanCarousel({
  items,
}: {
  items: ClanCarouselItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (isPaused || items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  if (!activeItem) return null;

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + items.length) % items.length);
  };

  return (
    <section
      className="kp-clan-slider"
      aria-label="Les cinq clans"
      aria-roledescription="carrousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <KinshimaImage key={activeItem.backgroundSrc} className="kp-clan-slider-image" src={activeItem.backgroundSrc} alt="" fill sizes="100vw" />
      <div className="kp-clan-slider-overlay">
        <div className="kp-clan-slider-slide" role="group" aria-roledescription="diapositive" aria-label={`${activeIndex + 1} sur ${items.length}`}>
          <KinshimaImage className="kp-clan-slider-mark" src={activeItem.imageSrc} alt="" fill sizes="190px" />
          <KinshimaLink className="kp-clan-slider-title" href={activeItem.href}>{activeItem.title}</KinshimaLink>
        </div>
        <button className="kp-clan-slider-arrow previous" type="button" aria-label="Clan précédent" onClick={() => move(-1)}>
          <span aria-hidden="true">‹</span>
        </button>
        <button className="kp-clan-slider-arrow next" type="button" aria-label="Clan suivant" onClick={() => move(1)}>
          <span aria-hidden="true">›</span>
        </button>
        <div className="kp-clan-slider-dots" aria-label="Choisir un clan">
          {items.map((item, index) => (
            <button
              key={item.title}
              className={index === activeIndex ? "active" : ""}
              type="button"
              aria-label={`Afficher ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
