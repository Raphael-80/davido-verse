import { motion } from "framer-motion";

import debut from "../assets/image-7.jpg";
import award from "../assets/award.jpg";
import afrobeats from "../assets/omo-baba.jpg"; 
import timeless from "../assets/timeless.jpeg";
import five from "../assets/5ive.jpg";
import oriade from '../assets/oriade.webp';


const timeline = [
  {
    year: "2011",
    title: "The Breakthrough",
    description:
      "Davido introduced himself to the world with 'Dami Duro', a hit single from his debut album Omo Baba Olowo. The song became a defining moment in Nigerian pop music.",
    image: debut,
  },

  {
    year: "2012",
    title: "Omo Baba Olowo Era",
    description:
      "Davido released his debut studio album and established himself as one of the leading voices of the new generation of Afrobeats.",
    image: afrobeats,
  },

  {
    year: "2018",
    title: "Global Recognition",
    description:
      "With international collaborations, major awards, and sold-out performances, Davido became one of Africa's biggest global music exports.",
    image: award,
  },

  {
    year: "2023",
    title: "Timeless",
    description:
      "Davido released Timeless, an album that broke streaming records and showcased his evolution as an artist.",
    image: timeless,
  },

  {
    year: "2025",
    title: "5IVE",
    description:
      "Davido entered a new chapter with 5IVE, continuing his legacy and pushing Afrobeats further onto the global stage.",
    image: five,
  },
  {
    year: "2026",
    title: "Oriade",
    description: "Davido celebrates his journey, destiny, and legacy, blending Afrobeats with African influences and global collaborations reflecting his desire to reconnect with his roots and showcase African music on the global stage.",
    image: oriade,
  }
];


export default function CareerTimeline() {

  return (

    <section id="timeline" className="relative overflow-hidden bg-black py-32 text-white">


      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />


      <div className="relative mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-400">
            Career Journey
          </p>


          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            The Making Of A Legend
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            From a young Nigerian artist to a global Afrobeats icon.
            Explore the milestones that shaped Davido's career.
          </p>

        </div>



        {/* Timeline */}
        <div className="relative">


          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-yellow-400/40 md:block" />



          {timeline.map((item,index)=>(


            <motion.div

              key={item.year}

              initial={{
                opacity:0,
                y:50,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:0.7,
              }}

              viewport={{
                once:true,
              }}

              className={`relative mb-24 flex flex-col md:flex-row ${
                index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
              }`}

            >



              {/* Year */}
              <div className="absolute left-1/2 hidden -translate-x-1/2 text-7xl font-black text-white/5 md:block">
                {item.year}
              </div>



              {/* Image */}
              <div className="w-full md:w-1/2">


                <div className="overflow-hidden rounded-3xl border border-white/10">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[350px] w-full object-cover transition duration-700 hover:scale-110"
                  />

                </div>


              </div>



              {/* Content */}
              <div className="mt-8 flex items-center md:mt-0 md:w-1/2 md:px-12">


                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-yellow-400">


                  <span className="text-yellow-400 font-bold">
                    {item.year}
                  </span>


                  <h3 className="mt-3 text-3xl font-black">
                    {item.title}
                  </h3>


                  <p className="mt-5 leading-8 text-gray-300">
                    {item.description}
                  </p>


                </div>


              </div>



              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_30px_#facc15] md:block" />


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}