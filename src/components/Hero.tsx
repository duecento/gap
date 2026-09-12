import { motion } from 'motion/react';
import { Photo } from './Placeholder';

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden bg-gap-black pt-20">
      <div className="absolute inset-0">
        <Photo
          src="/images/facade-1.jpg"
          alt="Eden House, home of GAP Ministries in Moira"
          label="Eden House — GAP Ministries"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gap-black via-gap-black/60 to-gap-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gap-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 text-white">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block rounded-full bg-gap-red/90 px-4 py-1 text-xs font-semibold uppercase tracking-widest"
        >
          Eden House, Moira
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Bridging the Gap in our community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          A charity shop, a foodbank, and an open door — meeting needs across
          poverty, health, wellbeing and life skills. Come and meet us.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#services"
            className="rounded-full bg-gap-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gap-red/30 transition-colors hover:bg-gap-red-dark"
          >
            What We Do
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
