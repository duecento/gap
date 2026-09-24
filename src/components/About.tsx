import { motion } from 'motion/react';
import { heroImages } from '../data/images';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gap-red">
            About GAP Ministries
          </p>
          <h2 className="mb-5 text-3xl font-bold text-gap-black sm:text-4xl">
            A hand up, not a hand out
          </h2>
          <div className="space-y-4 text-gap-black/75">
            <p>
              In all communities there are gaps in services and mismatches
              between what people need and what can be delivered. At the GAP
              Community Centre we work to meet the varied and often
              challenging requirements of a growing population.
            </p>
            <p>
              We're supported by people throughout the community and from all
              walks of life, working from the centre in Eden House. In time
              the entire building will be used in the service of our
              community — a solid foundation for change and the enrichment of
              lives through a wide variety of activities and services.
            </p>
            <p>
              A pro-active community is a strong community, one that seeks to
              give neighbour and stranger alike a hand up and not a hand out,
              without fear of judgment — accepting people as they are and
              journeying with them.
            </p>
            <p className="font-semibold text-gap-black">
              So the door at Eden House is open to all. Come and meet us!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src={heroImages[0]}
            alt="Eden House exterior with GAP Charity Shop and Bridging the Gap signage"
            className="col-span-2 h-64 w-full rounded-2xl object-cover shadow-lg"
          />
          <img
            src={heroImages[1]}
            alt="Front entrance of Eden House, home of GAP Ministries"
            className="h-40 w-full rounded-2xl object-cover shadow-lg"
          />
          <img
            src={heroImages[2]}
            alt="GAP community signpost outside Eden House"
            className="h-40 w-full rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
