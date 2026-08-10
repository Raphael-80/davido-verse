import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiMaximize2,
} from "react-icons/fi";

// Replace these with your actual images
import davido1 from "../assets/gallery/davido-1.jpg";
import davido2 from "../assets/gallery/image-10.jpg";
import davido3 from "../assets/gallery/image-12.jpg";
import davido4 from "../assets/gallery/image-16.webp";
import davido5 from "../assets/gallery/image-15.jpg";
import davido6 from "../assets/gallery/image-4.jpg";
import davido7 from "../assets/gallery/image-19.jpg";
import davido8 from "../assets/gallery/image-17.jfif";

const categories = [
  "All",
  "Live",
  "Studio",
  "Events",
  "Behind The Scenes",
];

const galleryImages = [
  {
    id: 1,
    image: davido1,
    category: "Live",
    title: "On Stage",
    description: "Davido performing live for thousands of fans.",
    size: "large",
  },

  {
    id: 2,
    image: davido2,
    category: "Studio",
    title: "In The Studio",
    description: "Creating the next sound.",
    size: "normal",
  },

  {
    id: 3,
    image: davido3,
    category: "Events",
    title: "Red Carpet",
    description: "A moment from an unforgettable night.",
    size: "normal",
  },

  {
    id: 4,
    image: davido4,
    category: "Live",
    title: "Energy",
    description: "The crowd. The music. The moment.",
    size: "tall",
  },

  {
    id: 5,
    image: davido5,
    category: "Behind The Scenes",
    title: "Behind The Music",
    description: "A glimpse behind the scenes.",
    size: "normal",
  },

  {
    id: 6,
    image: davido6,
    category: "Events",
    title: "The Moment",
    description: "Celebrating another milestone.",
    size: "large",
  },

  {
    id: 7,
    image: davido7,
    category: "Studio",
    title: "The Process",
    description: "Where the music comes alive.",
    size: "normal",
  },

  {
    id: 8,
    image: davido8,
    category: "Live",
    title: "World Stage",
    description: "Taking Afrobeats to the world.",
    size: "tall",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  // Prevent background scrolling while lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredImages]);

  const currentIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const goToNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-black py-28 text-white sm:py-32"
      >
        {/* Background glow */}
        <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

          {/* HEADER */}

          <div className="mb-14 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-400 sm:text-sm">
              DavidoVerse
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
              Through The Lens
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Moments, memories, performances, and everything
              in between.
            </p>

          </div>

          {/* FILTERS */}

          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  sm:px-5
                  sm:py-2.5
                  sm:text-xs
                  ${
                    activeCategory === category
                      ? "bg-yellow-400 text-black"
                      : "border border-white/10 bg-white/5 text-white/50 hover:border-yellow-400/40 hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>

          {/* GALLERY GRID */}

          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 md:grid-cols-4">

            {filteredImages.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  text-left
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400

                  ${
                    item.size === "large"
                      ? "col-span-2 row-span-2"
                      : ""
                  }

                  ${
                    item.size === "tall"
                      ? "row-span-2"
                      : ""
                  }
                `}
              >

                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
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

                {/* Dark overlay */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  opacity-70
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                " />

                {/* Hover icon */}

                <div className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:rotate-0
                ">
                  <FiMaximize2 size={16} />
                </div>

                {/* Information */}

                <div className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  translate-y-3
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                ">

                  <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-yellow-400">
                    {item.category}
                  </p>

                  <h3 className="text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/60">
                    {item.description}
                  </p>

                </div>

              </button>
            ))}

          </div>

          {/* Empty state */}

          {filteredImages.length === 0 && (
            <div className="py-20 text-center text-white/40">
              No images available in this category.
            </div>
          )}

          {/* Bottom decoration */}

          <div className="mt-14 flex items-center justify-center gap-4">

            <div className="h-px w-16 bg-white/10" />

            <FiArrowUpRight
              className="text-yellow-400"
              size={18}
            />

            <div className="h-px w-16 bg-white/10" />

          </div>

        </div>
      </section>

      {/* LIGHTBOX*/}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
            backdrop-blur-md
            sm:p-8
          "
        >

          {/* Close */}

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black
              sm:right-8
              sm:top-8
            "
          >
            <FiX size={20} />
          </button>

          {/* Previous */}

          <button
            onClick={goToPrevious}
            className="
              absolute
              left-3
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/50
              text-white
              backdrop-blur-md
              transition
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black
              sm:left-8
            "
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Image */}

          <div className="relative flex max-h-[90vh] max-w-6xl flex-col items-center">

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
                max-h-[75vh]
                max-w-full
                rounded-xl
                object-contain
                shadow-2xl
              "
            />

            {/* Caption */}

            <div className="mt-5 text-center">

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                {selectedImage.title}
              </h3>

              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                {selectedImage.description}
              </p>

            </div>

          </div>

          {/* Next */}

          <button
            onClick={goToNext}
            className="
              absolute
              right-3
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/50
              text-white
              backdrop-blur-md
              transition
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black
              sm:right-8
            "
          >
            <FiChevronRight size={22} />
          </button>

        </div>
      )}
    </>
  );
}