import { carouselImages } from '../data/images';

const SECONDS_PER_IMAGE = 4;

export function Carousel() {
  if (carouselImages.length === 0) return null;

  const track = [...carouselImages, ...carouselImages];

  return (
    <section aria-hidden="true" className="overflow-hidden bg-gap-cream py-6">
      <div
        className="carousel-track flex w-max gap-4"
        style={{ animationDuration: `${carouselImages.length * SECONDS_PER_IMAGE}s` }}
      >
        {track.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className="pointer-events-none h-40 w-auto select-none rounded-xl object-cover sm:h-52"
          />
        ))}
      </div>
    </section>
  );
}
