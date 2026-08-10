import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import introMusic from "../assets/intro-audio.mp3";

export default function IntroAnimation({ onComplete }) {
    const [started, setStarted] = useState(false);
    const [visible, setVisible] = useState(true);
    const [audioStarted, setAudioStarted] = useState(false);
    const [phase, setPhase] = useState(1);

    const audioRef = useRef(null);
    const completedRef = useRef(false);

    // Finish intro
    const finishIntro = () => {
        if (completedRef.current) return;

        completedRef.current = true;

        // Remember that the intro has been completed
        sessionStorage.setItem("davidoverse-intro", "true");

        const audio = audioRef.current;

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        setVisible(false);

        setTimeout(() => {
            if (onComplete) {
                onComplete();
            }
        }, 700);
    };

    // Start the cinematic intro
    const startIntro = async () => {
        setStarted(true);

        const audio = audioRef.current;

        if (audio) {
            audio.volume = 0;

            try {
                await audio.play();

                setAudioStarted(true);

                // Fade audio in
                let volume = 0;

                const fade = setInterval(() => {
                    volume += 0.05;

                    if (volume >= 0.5) {
                        audio.volume = 0.5;
                        clearInterval(fade);
                    } else {
                        audio.volume = volume;
                    }
                }, 100);
            } catch (error) {
                console.log("Audio error:", error);
            }
        }

        // 25-second cinematic timeline
        setTimeout(() => {
            setPhase(2);
        }, 5000);

        setTimeout(() => {
            setPhase(3);
        }, 10000);

        setTimeout(() => {
            setPhase(4);
        }, 17000);

        setTimeout(() => {
            finishIntro();
        }, 25000);
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={introMusic}
                preload="auto"
            />

            <AnimatePresence>
                {visible && (
                    <motion.div
                        className="
fixed
inset-0
z-[9999]
flex
items-center
justify-center
overflow-hidden
bg-black
text-white
"
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        {/* ENTER DAVIDOVERSE SCREEN */}

                        {!started && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                className="
text-center
px-6
"
                            >
                                <p
                                    className="
mb-8
text-xs
uppercase
tracking-[0.5em]
text-yellow-400
sm:text-sm
"
                                >
                                    The Ultimate Fan Experience
                                </p>

                                <motion.h1
                                    className="
text-5xl
font-black
sm:text-7xl
md:text-9xl
"
                                >
                                    DAVIDO
                                    <span className="text-yellow-400">
                                        VERSE
                                    </span>
                                </motion.h1>

                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    onClick={startIntro}
                                    className="
mt-12
rounded-full
border
border-yellow-400
px-10
py-4
text-xs
uppercase
tracking-[0.3em]
transition
duration-300
hover:bg-yellow-400
hover:text-black
sm:text-sm
"
                                >
                                    Enter DavidoVerse
                                </motion.button>
                            </motion.div>
                        )}

                        {/* MAIN INTRO */}

                        {started && (
                            <>
                                {/* Background Glow */}

                                <motion.div
                                    initial={{
                                        scale: 0.5,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeOut",
                                    }}
                                    className="
absolute
`h-[500px]`
`w-[500px]`
rounded-full
bg-yellow-400/10
blur-[150px]
"
                                />

                                {/* Main Content */}

                                <div
                                    className="
relative
z-10
px-6
text-center
"
                                >
                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5,
                                        }}
                                        className="
mb-5
text-xs
uppercase
tracking-[0.5em]
text-yellow-400
sm:text-sm
"
                                    >
                                        The Ultimate Fan Experience
                                    </motion.p>

                                    <motion.h1
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                            letterSpacing: "0.5em",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale:
                                                phase >= 4 ? 1.5 : 1,
                                            letterSpacing:
                                                phase >= 2
                                                    ? "0.2em"
                                                    : "0.05em",
                                        }}
                                        transition={{
                                            duration: 1.4,
                                            ease: "easeOut",
                                        }}
                                        className="
text-5xl
font-black
sm:text-7xl
md:text-9xl
"
                                    >
                                        DAVIDO
                                        <span className="text-yellow-400">
                                            VERSE
                                        </span>
                                    </motion.h1>

                                    <motion.div
                                        initial={{
                                            width: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            width: "120px",
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 1.8,
                                        }}
                                        className="
mx-auto
mt-8
`h-[2px]`
bg-yellow-400
"
                                    />

                                    <motion.div
                                        initial={{
                                            width: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            width: "120px",
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 1.8,
                                        }} 
                                        className="mx-auto mt-8 `h-[2px]` bg-yellow-400"/>

                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 2.2,
                                        }}
                                        className="
mt-6
text-[10px]
tracking-[0.3em]
text-white/40
sm:text-xs
md:text-sm
"
                                    >
                                        MUSIC • LEGACY • CULTURE
                                    </motion.p>
                                </div>

                                {/* Sound Indicator */}

                                {audioStarted && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        className="
absolute
bottom-8
left-6
flex
items-center
gap-3
sm:left-8
"
                                    >
                                        <div className="flex items-end `gap-[3px]`">
                                            <span className="h-3 `w-[2px]` animate-pulse bg-yellow-400" />
                                            <span className="h-5 `w-[2px]` animate-pulse bg-yellow-400" />
                                            <span className="h-4 `w-[2px]` animate-pulse bg-yellow-400" />
                                            <span className="h-6 `w-[2px]` animate-pulse bg-yellow-400" />
                                        </div>

                                        <span
                                            className="
text-[10px]
uppercase
tracking-[0.2em]
text-white/40
sm:text-xs
"
                                        >
                                            Sound On
                                        </span>
                                    </motion.div>
                                )}

                                {/* Skip */}

                                <motion.button
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 2.5,
                                    }}
                                    onClick={finishIntro}
                                    className="
absolute
bottom-8
right-6
rounded-full
border
border-white/20
bg-white/5
px-6
py-3
text-xs
uppercase
tracking-widest
backdrop-blur-md
transition
duration-300
hover:border-yellow-400
hover:bg-yellow-400
hover:text-black
sm:right-8
"
                                >
                                    Skip Intro
                                </motion.button>

                                {/* Final Fade */}

                                <motion.div
                                    animate={{
                                        opacity:
                                            phase >= 4 ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 3,
                                    }}
                                    className="
absolute
inset-0
bg-black
"
                                />
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}