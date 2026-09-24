import { motion } from 'motion/react';
import { contact, foodbank } from '../data/content';
import { foodbankPhoto } from '../data/images';

export function FoodBank() {
  return (
    <section id="foodbank" className="bg-gap-black py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
        <motion.img
          src={foodbankPhoto}
          alt="Signpost outside Eden House advertising the Moira Foodbank"
          loading="lazy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="h-80 w-full rounded-2xl object-cover shadow-2xl md:h-[26rem]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            GAP Food Bank
          </p>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Moira Foodbank — here when you need us
          </h2>
          <p className="mb-8 text-white/75">{foodbank.intro}</p>

          <dl className="mb-8 space-y-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <dt className="mb-1 font-semibold text-white/60">Opening hours</dt>
              <dd className="text-base">{foodbank.hours}</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <dt className="mb-1 font-semibold text-white/60">Foodbank helpline</dt>
              <dd className="text-base">
                <a href={`tel:${foodbank.helpline.replace(/\s/g, '')}`} className="font-semibold hover:text-gap-red">
                  {foodbank.helpline}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <dt className="mb-1 font-semibold text-white/60">Find us</dt>
              <dd className="text-base">
                {contact.address}. {foodbank.note}
              </dd>
            </div>
          </dl>

          <p className="text-sm text-white/60">
            Everyone is welcome — no judgment, and everything is confidential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
