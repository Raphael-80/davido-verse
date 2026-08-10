import { motion } from "framer-motion";
import {
  FaAward,
  FaTrophy,
  FaMedal,
  FaStar,
  FaMusic,
  FaGlobeAfrica,
} from "react-icons/fa";

const awards = [
  {
    icon: <FaAward />,
    title: "BET Awards",
    subtitle: "Best International Act",
    year: "2018",
  },
  {
    icon: <FaTrophy />,
    title: "MTV Europe Music Awards",
    subtitle: "Best African Act",
    year: "2017",
  },
  {
    icon: <FaMedal />,
    title: "The Headies",
    subtitle: "Artist of the Year",
    year: "Multiple Wins",
  },
  {
    icon: <FaStar />,
    title: "MOBO Awards",
    subtitle: "Best African Act",
    year: "2020",
  },
  {
    icon: <FaMusic />,
    title: "Grammy Awards",
    subtitle: "Grammy Nominee",
    year: "2024",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "AFRIMA",
    subtitle: "Best Male Artist",
    year: "Multiple Wins",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-400">
            Awards & Honors
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Excellence Recognized
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            From Africa to the world, Davido has received numerous awards and
            nominations, celebrating his influence on music, culture, and the
            global rise of Afrobeats.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl border border-yellow-400/40" />
                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[80px]" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-3xl text-black transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {award.icon}
                </div>

                {/* Year */}
                <span className="mt-8 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm font-medium text-yellow-400">
                  {award.year}
                </span>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold">
                  {award.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-3 leading-7 text-gray-400">
                  {award.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >
          <h3 className="text-3xl font-bold">
            "A legacy built through passion, consistency and excellence."
          </h3>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
}