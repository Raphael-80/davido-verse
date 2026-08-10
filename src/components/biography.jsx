import davidoImg from "../assets/image-5.jpg"

export default function About() {
    return (
        <section id="biography" className="bg-black px-6 py-24 text-white md:px-16">
            <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

                {/* Image */}
                <div>
                    <img src={davidoImg} alt="Davido" className="h-[650px] w-full rounded-3xl object-cover shadow-2xl" />
                </div>

                {/* Biography */}
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
                        About Davido
                    </p>

                    <h2 className="mb-8 text-5xl font-black leading-tight">
                        The Global Face of Afrobeats
                    </h2>

                    <p className="mb-6 text-lg leading-9 text-gray-300">
                        David Adedeji Adeleke professionally known as <span className="font-semibold text-white">Davido</span>, is one of Africa's most celebrated
                        musicians and a global ambassador for Afrobeats. Since breaking onto the scene with <span className="italic">Dami Duro</span> in 2011, he has
                        consistently delivered chart-topping records that have earned worldwide recognition.
                    </p>
                    <p className="mb-8 text-lg leading-9 text-gray-300">
                        His career spans award-winning albums, sold-out tours, and collaborations with some of the biggest names in music. Beyond his achievements, Davido has
                        played a significant role in bringing African music to audiences across the globe.
                    </p>

                    <p className="mb-10 text-lg leading-9 text-gray-300">
                        This fan website is dedicatd to celebrating his journey, showcasing his music, achievements, and lasting impact on the global music industry.
                    </p>

                    <a
                        href="#discography"
                        className="inline-flex items-center rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
                    >
                        Explore Discography
                    </a>
                    {/* <button href="#discography" className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300">Explore Discography</button> */}
                </div>
            </div>
        </section>
    )
}