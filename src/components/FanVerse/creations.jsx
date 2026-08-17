import React from "react";
import {
    FiArrowRight,
    FiPlay,
    FiMusic,
    FiImage,
    FiVideo,
} from "react-icons/fi";

const featuredCreations = [
    {
        id: 1,
        title: "OBO Forever",
        creator: "@dc diamond",
        country: "Nigeria 🇳🇬",
        category: "Artwork",
        image: "/fanverse/art-1.jpg",
        type: "image",
        featured: true,
    },
    {
        id: 2,
        title: "I know who i be dance challenge",
        creator: "@prettysophia_0",
        country: "Nigeria 🇳🇬",
        category: "Dance",
        image: "/fanverse/dance-1.png",
        type: "video",
    },
    {
        id: 3,
        title: "If i had a verse on i know who i be",
        creator: "@heisabefe01",
        country: "Nigeria 🇳🇬",
        category: "Music",
        image: "/fanverse/song-cover-1.png",
        type: "video",
    },
    {
        id: 4,
        title: "Davido: The Journey",
        creator: "@cherechydraws",
        country: "Nigeria 🇳🇬",
        category: "Artwork",
        image: "/fanverse/art-3.webp",
        type: "image",
    },
    {
        id: 5,
        title: "Face Drawing of Davido",
        creator: "@millybampainti",
        country: "United Kingdom 🇬🇧",
        category: "Artwork",
        image: "/fanverse/drawing.png",
        type: "video"
    },
    {
        id: 6,
        title: "Davido Freestyle Dance Trend",
        creator: "@debillion_moves",
        country: "Nigeria 🇳🇬",
        category: "Dance",
        image: "/fanverse/dance-2b.png",
        type: "video"
    }
];
// United Kingdom 🇬🇧
const categoryIcons = {
    Artwork: <FiImage size={13} />,
    Dance: <FiPlay size={13} />,
    Music: <FiMusic size={13} />,
    Video: <FiVideo size={13} />,
};

export default function FeaturedCreations() {
    return (
        <section
            id="creations"
            className="relative overflow-hidden bg-black py-28 text-white sm:py-32"
        >
            {/* Background Glow */}
            <div className="absolute right-[-150px] top-20 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                {/* Section Header */}
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-yellow-400" />

                            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-400">
                                FanVerse
                            </p>
                        </div>

                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
                            Featured
                            <span className="block text-white/30">
                                Creations.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                            Discover the creativity, passion, and talent of
                            Davido fans from around the world.
                        </p>
                    </div>

                    {/* Explore All Button */}
                    <a
                        href="#explore"
                        className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:border-yellow-400/40 hover:text-yellow-400"
                    >
                        Explore All

                        <FiArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>

                {/* Featured Grid */}
                <div className="grid gap-4 lg:grid-cols-2">

                    {/* Main Featured Creation */}
                    {featuredCreations
                        .filter((item) => item.featured)
                        .map((item) => (
                            <div
                                key={item.id}
                                className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 sm:min-h-[600px]"
                            >

                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                {/* Featured Badge */}
                                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/50 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-400 backdrop-blur-md">
                                    Featured
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                                    <div className="mb-3 flex items-center gap-2">

                                        <span className="flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-black">
                                            {categoryIcons[item.category]}
                                            {item.category}
                                        </span>

                                        <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                                            Fan Made
                                        </span>

                                    </div>

                                    <h3 className="text-3xl font-black sm:text-4xl">
                                        {item.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/50">
                                        <span>{item.creator}</span>

                                        <span className="h-1 w-1 rounded-full bg-white/20" />

                                        <span>{item.country}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {/* Smaller Creations */}
                    <div className="grid gap-4 sm:grid-cols-2">

                        {featuredCreations
                            .filter((item) => !item.featured)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
                                >

                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                    {/* Media Icon */}
                                    {(item.type === "video" || item.type === "music") && (
                                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                                            {item.type === "music" ? (
                                                <FiMusic size={15} />
                                            ) : (
                                                <FiPlay size={15} />
                                            )}
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5">

                                        <div className="mb-2 flex items-center gap-2">

                                            <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-yellow-400">
                                                {categoryIcons[item.category]}
                                                {item.category}
                                            </span>

                                            <span className="text-[9px] text-white/30">
                                                •
                                            </span>

                                            <span className="text-[9px] uppercase tracking-wider text-white/40">
                                                Fan Made
                                            </span>

                                        </div>

                                        <h3 className="text-lg font-bold">
                                            {item.title}
                                        </h3>

                                        <div className="mt-2 flex items-center gap-2 text-[10px] text-white/50">
                                            <span>{item.creator}</span>

                                            <span>•</span>

                                            <span>{item.country}</span>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 flex flex-col items-center justify-center text-center">

                    <p className="max-w-md text-sm leading-6 text-white/40">
                        Your creativity could be featured here next.
                    </p>

                    <a
                        href="#submit"
                        className="group mt-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 transition-colors hover:text-yellow-300"
                    >
                        Share Your Creation

                        <FiArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>

                </div>

            </div>
        </section>
    );
}