import { motion } from 'motion/react';
import { services } from '../data/content';

export function Services() {
  return (
    <section id="services" className="bg-gap-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            What We Do
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Meeting needs, together</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-gap-red/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gap-red text-lg font-bold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
