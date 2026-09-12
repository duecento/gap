import { motion } from 'motion/react';
import { galleryImages } from '../data/content';
import { Photo } from './Placeholder';

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
          Gallery
        </p>
        <h2 className="text-3xl font-bold text-gap-black sm:text-4xl">
          Inside the charity shop
        </h2>
        <p className="mt-4 text-gap-black/70">
          A treasure trove of clothing, homeware, glassware and gifts —
          browse in store, all proceeds support our community work.
        </p>
      </div>

      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 md:auto-rows-[220px] md:grid-cols-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            className={i === 0 ? 'col-span-2 row-span-2' : ''}
          >
            <Photo
              src={img.src}
              alt={img.alt}
              label={img.alt}
              className="h-full w-full rounded-2xl object-cover shadow-sm"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
