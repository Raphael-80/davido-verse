import { useEffect, useState } from "react";
import { FaAward, FaGlobe, FaMusic, FaTrophy } from "react-icons/fa";

const achievements = [
    {
        icon: <FaMusic />,
        number: 30,
        suffix: "+",
        title: "Awards Won",
        description:
            "Recognized locally and internationally for his contribution to music.",
    },

    {
        icon: <FaGlobe />,
        number: 50,
        suffix: "+",
        title: "Countries Reached",
        description:
            "A global fanbase spreading Afrobeats across continents.",
    },

    {
        icon: <FaTrophy />,
        number: 6,
        suffix: "",
        title: "Studio Albums",
        description:
            "Multiple successful projects that shaped modern Afrobeats.",
    },

    {
        icon: <FaAward />,
        number: 1,
        suffix: "B+",
        title: "Streams",
        description:
            "Billions of streams across major digital platforms worldwide.",
    },
];

function AnimatedNumber({ end, suffix = "", duration = 1800 }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let frameId;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(end * eased));

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            }
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [end, duration]);

    return (
        <>
            {value}
            {suffix}
        </>
    );
}

export default function Achievements() {
    return (
        <section id="achievements" className="relative overflow-hidden bg-black py-32 text-white">
            {/* Glow */}
            <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-20 text-center">
                    <p className="uppercase tracking-[0.4em] text-yellow-400">
                        Achievements
                    </p>

                    <h2 className="mt-4 text-5xl font-black md:text-7xl">
                        A Legacy Beyond Music
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-gray-400">
                        Celebrating milestones, records, and achievements
                        that define Davido's impact on global music.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {achievements.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`}
                            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-center
              backdrop-blur-xl
              transition
              duration-500
              hover:-translate-y-3
              hover:border-yellow-400
              "
                        >
                            {/* Icon */}
                            <div
                                className="
  mx-auto
  flex
  h-16
  w-16
  items-center
  justify-center
  rounded-full
  bg-yellow-400
  text-2xl
  text-black
  transition
  group-hover:scale-110
"
                            >
                                {item.icon}
                            </div>

                            {/* Number */}
                            <h3
                                className="
  mt-8
  text-5xl
  font-black
  text-yellow-400
"
                            >
                                <AnimatedNumber
                                    end={item.number}
                                    suffix={item.suffix}
                                />
                            </h3>

                            {/* Title */}
                            <h4
                                className="
  mt-4
  text-xl
  font-bold
"
                            >
                                {item.title}
                            </h4>

                            {/* Description */}
                            <p
                                className="
  mt-3
  text-sm
  leading-7
  text-gray-400
"
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}