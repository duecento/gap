import { motion } from 'motion/react';
import { teamPhoto } from '../data/images';

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            Meet The Team
          </p>
          <h2 className="mb-5 text-3xl font-bold text-gap-black sm:text-4xl">
            The people behind GAP
          </h2>
          <div className="space-y-4 text-gap-black/75">
            <p>
              GAP Ministries runs on the kindness of people from all walks of
              life — volunteers, supporters and neighbours who give their time
              to keep the shop, the foodbank and the door at Eden House open.
            </p>
            <p>
              Come in, say hello and have a chat. You'll always find a warm
              welcome, a listening ear and a friendly face.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-xl"
        >
          <img
            src={teamPhoto}
            alt="The GAP Ministries team and volunteers sharing a meal together"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-2xl object-cover object-center shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
