import { motion } from 'motion/react';
import { facebook } from '../data/content';

export function News() {
  return (
    <section id="news" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            Latest News
          </p>
          <h2 className="mb-5 text-3xl font-bold text-gap-black sm:text-4xl">
            What's happening at GAP
          </h2>
          <p className="mb-8 max-w-md text-gap-black/70">
            Keep up with new stock in the charity shop, foodbank updates,
            and upcoming events — straight from our Facebook page.
          </p>
          <a
            href={facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gap-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gap-red-dark"
          >
            Visit us on Facebook
          </a>
        </motion.div>

        <motion.a
          href={facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group mx-auto flex w-full max-w-[500px] flex-col items-center gap-5 rounded-2xl bg-[#1877F2] px-8 py-14 text-center text-white shadow-lg transition-transform hover:scale-[1.02]"
        >
          <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
          </svg>
          <div>
            <p className="text-xl font-bold">Join us on Facebook</p>
            <p className="mt-2 text-white/85">
              @gapmoira — follow along for the latest from the shop, the
              foodbank, and Eden House.
            </p>
          </div>
          <span className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#1877F2] transition-colors group-hover:bg-white/90">
            Follow Our Page
          </span>
        </motion.a>
      </div>
    </section>
  );
}
