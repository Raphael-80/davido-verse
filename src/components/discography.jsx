import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import five from "../assets/5ive.jpg";
import timeless from "../assets/timeless.jpeg";
import betterTime from "../assets/bt.jpg";
import goodTime from "../assets/gt.jpg";
import sonOfMercy from "../assets/son.jpg";
import omoBaba from "../assets/omo-baba.jpg";
import oriade from "../assets/oriade.webp";

const albums = [
  {
    title: "Oriade",
    year: "2026",
    tracks: "13 tracks",
    image: oriade,
    spotify: "https://open.spotify.com/album/43hCvloofcUeEmpK6RFldz?si=kfOncy2ATvWpXv9kBLXoOw",
    apple: "#",
    youtube: "#",
  },
  {
    title: "5IVE",
    year: "2025",
    tracks: "17 Tracks",
    image: five,
    spotify: "https://open.spotify.com/album/4jzhMxpTkAm2pxUuamulT8?si=tb6lUfdeR72-ZqBgNzcy6w",
    apple: "#",
    youtube: "#",
  },
  {
    title: "Timeless",
    year: "2023",
    tracks: "17 Tracks",
    image: timeless,
    spotify: "https://open.spotify.com/album/6lI21W76LD0S3vC55GrfSS?si=6VM-ciD6TRSWCos160goCQ",
    apple: "#",
    youtube: "#",
  },
  {
    title: "A Better Time",
    year: "2020",
    tracks: "17 Tracks",
    image: betterTime,
    spotify: "https://open.spotify.com/album/5Af7bJAiAKBCazSQU8BOsD?si=Q2QnVj7QQmCq5ecoRxA3wA",
    apple: "#",
    youtube: "#",
  },
  {
    title: "A Good Time",
    year: "2019",
    tracks: "17 Tracks",
    image: goodTime,
    spotify: "https://open.spotify.com/album/0s3BbZlcqsUdAD8wIYdO5n?si=Xc7CKyoZTlm2RyhWJHj-Og",
    apple: "#",
    youtube: "#",
  },
  {
    title: "Son of Mercy",
    year: "2016",
    tracks: "5 Tracks",
    image: sonOfMercy,
    spotify: "https://open.spotify.com/album/33te65RWNpXJCwL2cFDRTP?si=z5qrIfdlQniAVYzQP0AefQ",
    apple: "#",
    youtube: "#",
  },
  {
    title: "Omo Baba Olowo",
    year: "2012",
    tracks: "17 Tracks",
    image: omoBaba,
    spotify: "https://open.spotify.com/album/1tU3QgSC4BFKUtFlYQIxkL?si=eXKPVq5LQ4C1eGLmBhRTpw",
    apple: "#",
    youtube: "#",
  },
];


export default function Discography() {

  const [activeAlbum, setActiveAlbum] = useState(albums[0]);


  return (

    <section id="discography"
      className="scroll-mt-24 relative overflow-hidden py-24 text-white"

    >

      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${activeAlbum.image})`,
        }}
      />

      {/* Blur + Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-3xl" />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">


        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-400">
            Discography
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Every Era. Every Album.
          </h2>

          <p className="mt-4 text-gray-300">
            Explore Davido's musical journey through every major release.
          </p>

        </div>



        <Swiper

          modules={[
            EffectCoverflow,
            Navigation,
            Pagination,
            Autoplay,
          ]}

          effect="coverflow"

          centeredSlides

          grabCursor

          loop

          navigation

          pagination={{
            clickable: true
          }}

          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}


          onSlideChange={(swiper) => {

            setActiveAlbum(
              albums[swiper.realIndex]
            );

          }}


          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2,
            slideShadows: false,
            scale: 0.9,
          }}


          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}

        >


          {albums.map((album) => (

            <SwiperSlide key={album.title}>

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 backdrop-blur transition duration-500 hover:border-yellow-400">


                <img
                  src={album.image}
                  alt={album.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />


                <div className="space-y-4 p-6">


                  <div>

                    <p className="text-sm uppercase tracking-widest text-yellow-400">
                      {album.year}
                    </p>


                    <h3 className="mt-2 text-3xl font-black">
                      {album.title}
                    </h3>


                    <p className="text-gray-400">
                      {album.tracks}
                    </p>

                  </div>



                  <div className="flex gap-3">


                    <a
                      href={album.spotify}
                      className="rounded-full bg-green-500 p-3 transition hover:scale-110"
                    >
                      <FaSpotify />
                    </a>


                    <a
                      href={album.apple}
                      className="rounded-full bg-white p-3 text-black transition hover:scale-110"
                    >
                      <FaApple />
                    </a>


                    <a
                      href={album.youtube}
                      className="rounded-full bg-red-600 p-3 transition hover:scale-110"
                    >
                      <FaYoutube />
                    </a>


                  </div>



                  {/* <button
                    className="w-full rounded-full bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300"
                  >
                    View Album
                  </button> */}

                  <a
                    href={album.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
                  >
                    View Album
                  </a>

                </div>

              </div>


            </SwiperSlide>

          ))}


        </Swiper>

      </div>

    </section>

  );
}

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import five from "../assets/5ive.jpg";
// import timeless from "../assets/timeless.jpeg";
// import betterTime from "../assets/bt.jpg";
// import goodTime from "../assets/gt.jpg";
// import sonOfMercy from "../assets/bt.jpg";
// import omoBaba from "../assets/bt.jpg";

// const albums = [
//     {
//         title: "5IVE",
//         year: "2025",
//         tracks: "17 Tracks",
//         image: five,
//         spotify: "#",
//         apple: "#",
//         youtube: "#",
//     },
//     {
//         title: "Timeless",
//         year: "2023",
//         tracks: "17 Tracks",
//         image: timeless,
//         spotify: "#",
//         apple: "#",
//         youtube: "#",
//     },
//     {
//         title: "A Better Time",
//         year: "2020",
//         tracks: "17 Tracks",
//         image: betterTime,
//         spotify: "#",
//         apple: "#",
//         youtube: "#",
//     },
//     {
//         title: "A Good Time",
//         year: "2019",
//         tracks: "17 Tracks",
//         image: goodTime,
//         spotify: "#",
//         apple: "#",
//         youtube: "#",
//     },
//     {
//         title: "Son of Mercy",
//         year: "2016",
//         tracks: "5 Tracks",
//         image: sonOfMercy,
//         spotify: "#",
//         apple: "#",
//         youtube: "#",
//     },
//     {
//         title: "Omo Baba Olowo",
//         year: "2012",
//         tracks: "17 Tracks",
//         image: omoBaba,
//         spotify: "#",
//         apple: "#",
//         youtube: "#",
//     },
// ];

// export default function Discography() {
//     return (
//         <section className="bg-black py-24 text-white">
//             <div className="mx-auto max-w-7xl px-6">

//                 <div className="mb-16 text-center">
//                     <p className="uppercase tracking-[0.35em] text-yellow-400">
//                         Discography
//                     </p>

//                     <h2 className="mt-3 text-5xl font-black">
//                         Every Era. Every Album.
//                     </h2>

//                     <p className="mt-4 text-gray-400">
//                         Explore Davido's musical journey through every major release.
//                     </p>
//                 </div>

//                 <Swiper
//                     modules={[
//                         EffectCoverflow,
//                         Navigation,
//                         Pagination,
//                         Autoplay,
//                     ]}
//                     effect="coverflow"
//                     centeredSlides
//                     grabCursor
//                     loop
//                     navigation
//                     pagination={{ clickable: true }}
//                     autoplay={{
//                         delay: 3500,
//                         disableOnInteraction: false,
//                     }}
//                     coverflowEffect={{
//                         rotate: 0,
//                         stretch: 0,
//                         depth: 250,
//                         modifier: 2,
//                         slideShadows: false,
//                         scale: 0.9,
//                     }}
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 1.1,
//                         },
//                         768: {
//                             slidesPerView: 2,
//                         },
//                         1024: {
//                             slidesPerView: 3,
//                         },
//                     }}
//                 >
//                     {albums.map((album) => (
//                         <SwiperSlide key={album.title}>
//                             <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-500 hover:border-yellow-400">

//                                 <div className="overflow-hidden">
//                                     <img
//                                         src={album.image}
//                                         alt={album.title}
//                                         className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
//                                     />
//                                 </div>

//                                 <div className="space-y-4 p-6">

//                                     <div>
//                                         <p className="text-sm uppercase tracking-widest text-yellow-400">
//                                             {album.year}
//                                         </p>

//                                         <h3 className="mt-2 text-3xl font-black">
//                                             {album.title}
//                                         </h3>

//                                         <p className="mt-1 text-gray-400">
//                                             {album.tracks}
//                                         </p>
//                                     </div>

//                                     <div className="flex gap-3">

//                                         <a
//                                             href={album.spotify}
//                                             className="rounded-full bg-green-500 p-3 transition hover:scale-110"
//                                         >
//                                             <FaSpotify />
//                                         </a>

//                                         <a
//                                             href={album.apple}
//                                             className="rounded-full bg-white p-3 text-black transition hover:scale-110"
//                                         >
//                                             <FaApple />
//                                         </a>

//                                         <a
//                                             href={album.youtube}
//                                             className="rounded-full bg-red-600 p-3 transition hover:scale-110"
//                                         >
//                                             <FaYoutube />
//                                         </a>

//                                     </div>

//                                     <button className="w-full rounded-full bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300">
//                                         View Album
//                                     </button>

//                                 </div>

//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//             </div>
//         </section>
//     );
// }