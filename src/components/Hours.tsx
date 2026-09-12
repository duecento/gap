import { motion } from 'motion/react';
import { openingHours } from '../data/content';

export function Hours() {
  return (
    <section id="hours" className="bg-gap-stone py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            Opening Hours
          </p>
          <h2 className="text-3xl font-bold text-gap-black sm:text-4xl">
            When to find us
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {openingHours.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 font-semibold text-gap-black">{item.title}</h3>
              <p className="text-sm text-gap-black/70">{item.schedule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
