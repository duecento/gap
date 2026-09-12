import { motion } from 'motion/react';
import { contact } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            Contact Us
          </p>
          <h2 className="mb-5 text-3xl font-bold text-gap-black sm:text-4xl">
            Come and meet us
          </h2>
          <p className="mb-8 max-w-md text-gap-black/70">
            Whether it's the charity shop, the foodbank, or just a listening
            ear — the door at Eden House is open to all.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gap-red/10 text-gap-red">
                📍
              </span>
              <span className="text-gap-black/80">{contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gap-red/10 text-gap-red">
                📞
              </span>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-medium text-gap-black hover:text-gap-red">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gap-red/10 text-gap-red">
                ✉️
              </span>
              <a href={`mailto:${contact.email}`} className="font-medium text-gap-black hover:text-gap-red">
                {contact.email}
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <iframe
            title="Map showing GAP Ministries, 38 Main Street, Moira"
            src="https://www.google.com/maps?q=38+Main+Street,+Moira,+BT67+0LE&output=embed"
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
