import React, { useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiImage,
  FiMusic,
  FiPlay,
  FiUploadCloud,
} from "react-icons/fi";

const categories = [
  {
    name: "Artwork",
    icon: <FiImage />,
  },
  {
    name: "Dance",
    icon: <FiPlay />,
  },
  {
    name: "Music",
    icon: <FiMusic />,
  },
  {
    name: "Video",
    icon: <FiPlay />,
  },
  {
    name: "Story",
    icon: <FiUploadCloud />,
  },
];

export default function SubmitCreation() {
  const [selectedCategory, setSelectedCategory] = useState("Artwork");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary submission handler.
    // We'll connect this to a backend later.
    setSubmitted(true);
  };

  return (
    <section
      id="submit"
      className="relative overflow-hidden bg-[#080808] py-28 text-white sm:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-yellow-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-400">
              Your Turn
            </p>

            <span className="h-px w-8 bg-yellow-400" />
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Share Your
            <span className="block text-yellow-400">
              Creation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Got artwork, a dance, a song, video or story inspired by
            Davido? Put your creativity on display and become part of
            the FanVerse.
          </p>

        </div>

        {/* Form Card */}
        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10">

          {submitted ? (
            /* =========================
               SUCCESS MESSAGE
            ========================= */

            <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">
                <FiCheck size={32} />
              </div>

              <h3 className="mt-7 text-3xl font-black">
                Creation Received.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                Your creation has been submitted to FanVerse.
                Once submissions are connected to the platform,
                your work can be reviewed and featured here.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 hover:text-yellow-300"
              >
                Submit Another
              </button>

            </div>
          ) : (
            /* =========================
               SUBMISSION FORM
            ========================= */

            <form onSubmit={handleSubmit}>

              {/* Category */}
              <div>

                <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  What are you sharing?
                </label>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">

                  {categories.map((category) => (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(category.name)
                      }
                      className={`
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        px-3
                        py-5
                        text-xs
                        font-semibold
                        transition-all
                        duration-300

                        ${
                          selectedCategory === category.name
                            ? "border-yellow-400 bg-yellow-400 text-black"
                            : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white"
                        }
                      `}
                    >
                      <span className="text-lg">
                        {category.icon}
                      </span>

                      {category.name}
                    </button>
                  ))}

                </div>

              </div>

              {/* Name + Username */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-[0.2em] text-white/60"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/20
                      focus:border-yellow-400/50
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="text-xs font-bold uppercase tracking-[0.2em] text-white/60"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    type="text"
                    placeholder="@yourusername"
                    required
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/20
                      focus:border-yellow-400/50
                    "
                  />
                </div>

              </div>

              {/* Country */}
              <div className="mt-5">

                <label
                  htmlFor="country"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/60"
                >
                  Country
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="Where are you from?"
                  required
                  className="
                    mt-3
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    focus:border-yellow-400/50
                  "
                />

              </div>

              {/* Title */}
              <div className="mt-5">

                <label
                  htmlFor="title"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/60"
                >
                  Creation Title
                </label>

                <input
                  id="title"
                  type="text"
                  placeholder="Give your creation a name"
                  required
                  className="
                    mt-3
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    focus:border-yellow-400/50
                  "
                />

              </div>

              {/* Description */}
              <div className="mt-5">

                <label
                  htmlFor="description"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/60"
                >
                  Tell Us About It
                </label>

                <textarea
                  id="description"
                  rows="5"
                  placeholder="Tell the FanVerse community about your creation..."
                  required
                  className="
                    mt-3
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    focus:border-yellow-400/50
                  "
                />

              </div>

              {/* Upload */}
              <div className="mt-5">

                <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Upload Your Creation
                </label>

                <label
                  htmlFor="file"
                  className="
                    mt-3
                    flex
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-dashed
                    border-white/15
                    bg-white/[0.02]
                    px-6
                    py-12
                    text-center
                    transition
                    duration-300
                    hover:border-yellow-400/40
                    hover:bg-yellow-400/[0.02]
                  "
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                    <FiUploadCloud size={24} />
                  </div>

                  <p className="mt-4 text-sm font-semibold">
                    Click to upload your creation
                  </p>

                  <p className="mt-2 text-xs text-white/30">
                    Images, videos, music and other supported files
                  </p>

                  <input
                    id="file"
                    type="file"
                    className="hidden"
                    required
                  />

                </label>

              </div>

              {/* Submit */}
              <div className="mt-8 flex justify-end">

                <button
                  type="submit"
                  className="
                    group
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
                  Submit Creation

                  <FiArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>

            </form>
          )}

        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-[10px] leading-5 text-white/20">
          By submitting your creation, you confirm that you have
          permission to share the content and agree that it may be
          displayed on FanVerse.
        </p>

      </div>
    </section>
  );
}