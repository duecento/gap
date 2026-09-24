import { motion } from 'motion/react';
import { useState } from 'react';
import { carouselImages } from '../data/images';
import { Lightbox } from './Lightbox';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
          Gallery
        </p>
        <h2 className="text-3xl font-bold text-gap-black sm:text-4xl">
          Life at GAP Ministries
        </h2>
        <p className="mt-4 text-gap-black/70">
          A glimpse of the charity shop and the people and events at Eden
          House. Tap a photo to see it larger.
        </p>
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {carouselImages.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Open photo ${i + 1} of ${carouselImages.length}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="group mb-4 block w-full cursor-zoom-in overflow-hidden rounded-2xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gap-red"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={carouselImages}
        index={active}
        onChange={setActive}
      />
    </section>
  );
}
