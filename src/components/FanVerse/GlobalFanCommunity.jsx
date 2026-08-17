import React from "react";
import {
  FiArrowRight,
  FiGlobe,
  FiHeart,
  FiUsers,
} from "react-icons/fi";

const stats = [
  {
    number: "10K+",
    label: "Fan Creations",
    icon: <FiHeart size={18} />,
  },
  {
    number: "30+",
    label: "Countries",
    icon: <FiGlobe size={18} />,
  },
  {
    number: "1",
    label: "OBO Community",
    icon: <FiUsers size={18} />,
  },
];

export default function GlobalFanCommunity() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/fanverse/community-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8">

        {/* Label */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-yellow-400" />

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-400">
            The Community
          </p>

          <span className="h-px w-10 bg-yellow-400" />
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          One Fanbase.
          <span className="block text-white/30">
            One Culture.
          </span>
          <span className="block text-yellow-400">
            One World.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base md:text-lg">
          From Lagos to London, Accra to Atlanta, Davido's music
          continues to connect people across borders. FanVerse is
          where that community comes together.
        </p>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-8
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-400/30
                hover:bg-white/[0.07]
              "
            >

              {/* Icon */}
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>

              {/* Number */}
              <p className="mt-5 text-4xl font-black text-white sm:text-5xl">
                {stat.number}
              </p>

              {/* Label */}
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14">

          <p className="text-xs text-white/30">
            You are part of the story.
          </p>

          <a
            href="#submit"
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-yellow-400
              px-7
              py-4
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-yellow-300
            "
          >
            Join the Community

            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}