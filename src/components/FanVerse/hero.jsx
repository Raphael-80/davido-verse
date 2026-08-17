import React from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";

export default function FanVerseHero() {
  return (
    <section
      id="fanverse-home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/davido-2.jpg')",
        }}
      />

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      {/* Gold ambient glow */}
      <div className="absolute left-[-10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-9xl px-6 py-32 sm:px-8 lg:px-12">

        <div className="max-w-3xl">

          {/* Small Label */}
          <div className="mb-6 flex items-center gap-3">

            <span className="h-px w-10 bg-yellow-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-400 sm:text-sm">
              DavidoVerse Community
            </p>

          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            The Fans Are
            <span className="block text-yellow-400">
              The Culture.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
            A creative space for the people who make Davido's
            music more than just music. Discover artwork, dance,
            music, videos, stories, and creativity from fans around
            the world.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            {/* Explore */}
            <a
              href="#creations"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-yellow-400
                px-7
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              Explore Creations

              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Submit */}
            <a
              href="#submit"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/5
                px-7
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-yellow-400/50
                hover:bg-white/10
              "
            >
              <FiPlus size={16} />

              Share Your Creation
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Information */}
      <div className="absolute bottom-8 left-0 right-0 z-10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

          <div className="hidden items-center gap-3 sm:flex">

            <div className="h-px w-8 bg-white/30" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Made by fans
            </span>

          </div>

          <div className="mx-auto flex flex-col items-center gap-2 sm:mx-0">

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              Scroll to explore
            </span>

            <div className="h-8 w-px bg-gradient-to-b from-yellow-400 to-transparent" />

          </div>

          <div className="hidden items-center gap-3 sm:flex">

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Inspired by Davido
            </span>

            <div className="h-px w-8 bg-white/30" />

          </div>

        </div>

      </div>

    </section>
  );
}