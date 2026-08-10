import React from "react";
import { FaPlay } from "react-icons/fa";
import {
    SiSpotify,
    SiApplemusic,
    SiYoutubemusic,
} from "react-icons/si";

export default function Hero() {
    const spotifyUrl =
        "https://open.spotify.com/album/43hCvloofcUeEmpK6RFldz?si=kfOncy2ATvWpXv9kBLXoOw";

    return (
        <section
            id="hero"
            className="
                relative
                w-full
                h-[100svh]
                min-h-[600px]
                overflow-hidden
                bg-[#0b0b0f]
            "
        >

            {/* Background Video */}

            <video
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                "
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/davido-1.jpg"
                aria-hidden="true"
            >
                <source
                    src="/new-hero-2.mp4"
                    type="video/mp4"
                />

                Your browser does not support video playback.
            </video>


            {/* Dark overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/20
                    pointer-events-none
                "
            />


            {/* Left Gradient */}

            <div
                className="
                    absolute
                    inset-y-0
                    left-0
                    w-full
                    sm:w-2/3
                    lg:w-1/2
                    pointer-events-none
                "
                style={{
                    background:
                        "linear-gradient(to right, #0b0b0f 0%, rgba(11,11,15,0.85) 30%, transparent 100%)",
                }}
            />


            {/* Bottom Gradient */}

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/3
                    pointer-events-none
                "
                style={{
                    background:
                        "linear-gradient(to top, #0b0b0f 0%, transparent 100%)",
                }}
            />


            {/* Content */}

            <div
                className="
                    relative
                    z-20
                    h-full
                    w-full
                    max-w-7xl
                    mx-auto
                    px-5
                    sm:px-8
                    flex
                    items-center
                "
            >

                <div
                    className="
                        max-w-xl
                        pt-16
                        sm:pt-20
                    "
                >

                    {/* Eyebrow */}

                    <p
                        className="
                            uppercase
                            tracking-[0.25em]
                            text-xs
                            sm:text-sm
                            font-semibold
                            text-[#e8b923]
                            mb-4
                        "
                    >
                        The Ultimate Fan Experience
                    </p>


                    {/* Play Latest Album */}

                    <a
                        href={spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            flex
                            items-center
                            gap-4
                            mb-8
                            w-fit
                        "
                    >

                        <span
                            className="
                                flex
                                items-center
                                justify-center
                                w-14
                                h-14
                                sm:w-16
                                sm:h-16
                                rounded-full
                                bg-[#e8b923]
                                group-hover:bg-[#f5c93a]
                                group-hover:scale-105
                                transition-all
                                duration-200
                                shadow-lg
                                shadow-[#e8b923]/20
                            "
                        >

                            <FaPlay
                                className="
                                    text-[#0b0b0f]
                                    text-xl
                                    sm:text-2xl
                                    ml-1
                                "
                            />

                        </span>


                        <span
                            className="
                                text-white
                                text-lg
                                sm:text-xl
                                font-bold
                                tracking-wide
                            "
                        >
                            Play Latest Album
                        </span>

                    </a>


                    {/* Album Information */}

                    <div className="mb-8">

                        <p
                            className="
                                text-white/50
                                text-xs
                                sm:text-sm
                                uppercase
                                tracking-wider
                                mb-1
                            "
                        >
                            Latest Album
                        </p>


                        <h1
                            className="
                                text-4xl
                                sm:text-6xl
                                font-extrabold
                                text-white
                                leading-none
                                mb-2
                            "
                        >
                            Oriade
                        </h1>


                        <p
                            className="
                                text-white/50
                                text-xs
                                sm:text-sm
                                tracking-wider
                            "
                        >
                            Released 2026
                        </p>

                    </div>


                    {/* Streaming Platforms */}

                    <div
                        className="
                            flex
                            items-center
                            gap-5
                            flex-wrap
                        "
                    >

                        <span
                            className="
                                text-white/60
                                text-xs
                                sm:text-sm
                                font-medium
                            "
                        >
                            Listen on:
                        </span>


                        {/* Spotify */}

                        <a
                            href={spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Listen on Spotify"
                            className="
                                text-white/70
                                hover:text-[#1DB954]
                                hover:scale-110
                                transition-all
                                duration-200
                            "
                        >
                            <SiSpotify size={22} />
                        </a>


                        {/* Apple Music */}

                        <a
                            href="#"
                            aria-label="Listen on Apple Music"
                            className="
                                text-white/70
                                hover:text-[#FA2D48]
                                hover:scale-110
                                transition-all
                                duration-200
                            "
                        >
                            <SiApplemusic size={22} />
                        </a>


                        {/* YouTube Music */}

                        <a
                            href="#"
                            aria-label="Listen on YouTube Music"
                            className="
                                text-white/70
                                hover:text-[#FF0000]
                                hover:scale-110
                                transition-all
                                duration-200
                            "
                        >
                            <SiYoutubemusic size={22} />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}