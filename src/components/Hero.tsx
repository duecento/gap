import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { heroImages } from '../data/images';

const SLIDE_MS = 7000;
const FADE_S = 2;
const DRIFT_S = SLIDE_MS / 1000 + FADE_S + 1;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden bg-gap-black pt-20">
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={heroImages[index]}
            alt=""
            initial={{ opacity: 0, x: '-3%' }}
            animate={{ opacity: 1, x: '3%' }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: FADE_S, ease: 'easeInOut' },
              x: { duration: DRIFT_S, ease: 'linear' },
            }}
            className="absolute inset-y-0 -left-[6%] h-full w-[112%] max-w-none object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-gap-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gap-black/30 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-white [text-shadow:0_2px_4px_rgb(0_0_0/0.6),0_0_24px_rgb(0_0_0/0.55)]">
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

      {heroImages.length > 1 && (
        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3" role="tablist" aria-label="Hero slides">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-gap-red' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
