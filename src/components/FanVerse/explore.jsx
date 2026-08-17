import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    id: 1,
    title: "Artwork",
    description: "Drawings, paintings and digital creations.",
    image: "/fanverse/art-2.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Dance",
    description: "Performances inspired by Davido's music.",
    image: "/fanverse/dance-2b.png",
    size: "normal",
  },
  {
    id: 3,
    title: "Music",
    description: "Covers, remixes and original creations.",
    image: "/fanverse/song-cover-1.png",
    size: "normal",
  },
  {
    id: 4,
    title: "Videos",
    description: "Edits, tributes and fan-made videos.",
    image: "/fanverse/categories/videos.jpg",
    size: "normal",
  },
  {
    id: 5,
    title: "Stories",
    description: "Poems, tributes and personal experiences.",
    image: "/fanverse/categories/stories.jpg",
    size: "normal",
  },
  {
    id: 6,
    title: "Style & Photography",
    description: "Fashion, portraits and creative photography.",
    image: "/fanverse/art-6.jpeg",
    size: "wide",
  },
];

export default function ExploreFanVerse() {
  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-[#080808] py-28 text-white sm:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-yellow-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-400">
              Discover
            </p>

            <span className="h-px w-8 bg-yellow-400" />
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Explore
            <span className="text-white/30"> FanVerse.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Discover how fans around the world express their love
            for Davido through creativity, culture and music.
          </p>

        </div>

        {/* =========================
            CATEGORY GRID
        ========================= */}

        <div className="grid auto-rows-[260px] grid-cols-2 gap-3 sm:auto-rows-[300px] sm:gap-4 lg:grid-cols-4">

          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.title
                .toLowerCase()
                .replace(/\s*&\s*/g, "-")
                .replace(/\s+/g, "-")}`}
              className={`
                group
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/5

                ${
                  category.size === "large"
                    ? "col-span-2 row-span-2"
                    : ""
                }

                ${
                  category.size === "wide"
                    ? "col-span-2"
                    : ""
                }
              `}
            >

              {/* Background Image */}

              <img
                src={category.image}
                alt={category.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Dark Overlay */}

              <div className="
                absolute
                inset-0
                bg-black/35
                transition
                duration-500
                group-hover:bg-black/50
              " />

              {/* Gradient */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              " />

              {/* Hover Gold Glow */}

              <div className="
                absolute
                inset-0
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                bg-gradient-to-t
                from-yellow-400/10
                to-transparent
              " />

              {/* Content */}

              <div className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
                sm:p-7
              ">

                {/* Category Number */}

                <span className="
                  absolute
                  right-5
                  top-[-180px]
                  text-7xl
                  font-black
                  text-white/5
                  transition
                  duration-500
                  group-hover:text-yellow-400/10
                ">
                  0{category.id}
                </span>

                <div className="
                  flex
                  items-end
                  justify-between
                  gap-4
                ">

                  <div>

                    <h3 className="
                      text-2xl
                      font-black
                      uppercase
                      tracking-tight
                      sm:text-3xl
                    ">
                      {category.title}
                    </h3>

                    <p className="
                      mt-2
                      max-w-xs
                      text-xs
                      leading-5
                      text-white/50
                      sm:text-sm
                    ">
                      {category.description}
                    </p>

                  </div>

                  {/* Arrow */}

                  <div className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-yellow-400
                    group-hover:bg-yellow-400
                    group-hover:text-black
                    group-hover:rotate-45
                  ">
                    <FiArrowUpRight size={18} />
                  </div>

                </div>

              </div>

              {/* Border hover effect */}

              <div className="
                pointer-events-none
                absolute
                inset-0
                rounded-[1.5rem]
                border
                border-yellow-400/0
                transition
                duration-500
                group-hover:border-yellow-400/30
              " />

            </a>
          ))}

        </div>

        {/* =========================
            BOTTOM TEXT
        ========================= */}

        <div className="mt-12 text-center">

          <p className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/25
            sm:text-xs
          ">
            One community • countless ways to create
          </p>

        </div>

      </div>
    </section>
  );
}