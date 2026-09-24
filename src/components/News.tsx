import { motion } from 'motion/react';
import { facebook } from '../data/content';

const embedSrc =
  'https://www.facebook.com/plugins/page.php?' +
  new URLSearchParams({
    href: facebook.url,
    tabs: 'timeline',
    width: '500',
    height: '640',
    small_header: 'true',
    adapt_container_width: 'true',
    hide_cover: 'true',
    show_facepile: 'false',
  }).toString();

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-lg"
        >
          <iframe
            title="GAP Ministries Facebook posts"
            src={embedSrc}
            width="500"
            height="640"
            className="block h-[640px] w-full border-0"
            loading="lazy"
            allow="encrypted-media"
            referrerPolicy="origin-when-cross-origin"
          />
        </motion.div>
      </div>
    </section>
  );
}
