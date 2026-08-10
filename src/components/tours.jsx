import React from "react";
import { FiArrowUpRight, FiGlobe, FiMusic } from "react-icons/fi";

export default function Tours() {
    return (
        <section
            id="tours"
            className="relative overflow-hidden bg-[#080808] py-28 text-white sm:py-32"
        >
            {/* Background glow */}
            <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-400 sm:text-sm">
                        Live Experience
                    </p>

                    <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
                        The World Awaits
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                        From Africa to the world, experience Davido's music live on
                        some of the biggest stages across the globe.
                    </p>

                </div>

                {/* Main Card */}
                <div className="mx-auto mt-16 max-w-5xl">

                    <div
                        className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
              sm:p-12
              md:p-16
            "
                    >

                        {/* Decorative glow */}
                        <div
                            className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-yellow-400/10
                blur-[100px]
                transition
                duration-700
                group-hover:bg-yellow-400/20
              "
                        />

                        {/* Content */}
                        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">

                            {/* Left */}
                            <div>

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
                                    <FiMusic size={24} />
                                </div>

                                <h3 className="text-3xl font-black sm:text-4xl md:text-5xl">
                                    Experience Davido
                                    <span className="block text-yellow-400">
                                        Live.
                                    </span>
                                </h3>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                                    Discover upcoming performances, tour dates, venues,
                                    and official announcements directly from Davido's
                                    official touring platform.
                                </p>

                                <a
                                    href="https://www.dmwhq.com/tour"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    mt-8
                    inline-flex
                    items-center
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
                                    View Official Tour Info

                                    <FiArrowUpRight size={16} />
                                </a>

                            </div>

                            {/* Right */}
                            <div className="relative">

                                <div
                                    className="
                    flex
                    aspect-square
                    max-w-[360px]
                    mx-auto
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400/20
                    bg-yellow-400/[0.03]
                  "
                                >

                                    {/* Outer ring */}
                                    <div
                                        className="
                      flex
                      h-[75%]
                      w-[75%]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                    "
                                    >

                                        <div
                                            className="
                        flex
                        h-[65%]
                        w-[65%]
                        items-center
                        justify-center
                        rounded-full
                        bg-yellow-400
                        text-black
                        shadow-[0_0_80px_rgba(232,185,35,0.2)]
                      "
                                        >
                                            <FiGlobe size={52} />
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom note */}
                <div className="mt-10 text-center">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        Official tour information
                    </p>

                </div>

            </div>
        </section>
    );
}