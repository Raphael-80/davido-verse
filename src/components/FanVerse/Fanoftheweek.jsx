import React from "react";
import { FiArrowRight, FiHeart, FiMapPin } from "react-icons/fi";

const fan = {
  username: "@fave_prime",
  name: "Favour",
  country: "Nigeria",
  flag: "NG",
  image: "/fanverse/fave_prime.png",
  favoriteSong: "I know who i be",
  story:
    "Davido's music has been part of my journey for years. From singing along with friends to creating dance videos, his music continues to inspire my creativity and bring people together.",
  achievement:
    "Creator of one of this week's most loved FanVerse dance videos.",
};

export default function FanOfTheWeek() {
  return (
    <section
      id="fan-of-the-week"
      className="relative overflow-hidden bg-black py-28 text-white sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute right-[-150px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Header */}
        <div className="mb-12">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-yellow-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-400">
              Community Spotlight
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Fan of the
            <span className="text-yellow-400"> Week.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Every week, we celebrate a member of the OBO community
            whose passion, creativity and love for the culture stand out.
          </p>

        </div>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">

          <div className="grid lg:grid-cols-2">

            {/* Image Side */}
            <div className="group relative min-h-[500px] overflow-hidden sm:min-h-[600px]">

              <img
                src={fan.image}
                alt={fan.username}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Fan of the Week Badge */}
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/50 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 backdrop-blur-md">
                <FiHeart size={13} />

                Fan of the Week
              </div>

              {/* Image Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Featured Creator
                </p>

                <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                  {fan.username}
                </h3>

              </div>

            </div>

            {/* Information Side */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

              {/* Location */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">

                <FiMapPin
                  size={14}
                  className="text-yellow-400"
                />

                {fan.country} {fan.flag}

              </div>

              {/* Name */}
              <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                {fan.name}
              </h3>

              {/* Story */}
              <div className="mt-8">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                  Their Story
                </p>

                <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                  {fan.story}
                </p>

              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3">

                {/* Favorite Song */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Favorite Song
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    {fan.favoriteSong}
                  </p>

                </div>

                {/* Achievement */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    This Week
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    Featured Creator
                  </p>

                </div>

              </div>

              {/* Achievement */}
              <p className="mt-5 text-xs leading-6 text-white/35">
                {fan.achievement}
              </p>

              {/* Button */}
              <div className="mt-9">

                <a
                  href="#fan-profile"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-yellow-400
                    px-6
                    py-3.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-black
                    transition-all
                    duration-300
                    hover:bg-yellow-300
                    hover:scale-105
                  "
                >
                  Meet the Fan

                  <FiArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}