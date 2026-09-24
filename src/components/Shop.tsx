import { motion } from 'motion/react';
import { shop } from '../data/content';
import { shopPhotos } from '../data/images';

export function Shop() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            GAP Charity Shop
          </p>
          <h2 className="mb-5 text-3xl font-bold text-gap-black sm:text-4xl">
            Treasure hunting for a good cause
          </h2>
          <p className="mb-6 text-gap-black/75">{shop.intro}</p>

          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-gap-red/10 px-4 py-2 text-sm font-semibold text-gap-red">
            Open {shop.hours}
          </p>

          <h3 className="mb-3 font-semibold text-gap-black">{shop.donationsHeading}</h3>
          <ul className="flex flex-wrap gap-2">
            {shop.donations.map((item) => (
              <li key={item} className="rounded-full bg-gap-stone px-4 py-1.5 text-sm text-gap-black/80">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid h-80 grid-cols-2 grid-rows-2 gap-3 sm:h-96 md:h-[22rem]"
        >
          <img
            src={shopPhotos.shoes}
            alt="Shelves of shoes in the GAP charity shop"
            loading="lazy"
            className="row-span-2 h-full min-h-0 w-full rounded-2xl object-cover shadow-lg"
          />
          <img
            src={shopPhotos.homeware}
            alt="Table of homeware and linens in the GAP charity shop"
            loading="lazy"
            className="h-full min-h-0 w-full rounded-2xl object-cover shadow-lg"
          />
          <img
            src={shopPhotos.art}
            alt="Framed paintings for sale in the GAP charity shop"
            loading="lazy"
            className="h-full min-h-0 w-full rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
