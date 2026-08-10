import { motion } from "framer-motion";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
} from "react-icons/fa";

import chrisBrown from "../assets/chris-brown.jpg";
import burnaBoy from "../assets/burna-boy-1.jpg";
import nicki from "../assets/nicki-minaj.jpg";
import lilBaby from "../assets/lil-baby.jpg";
import musaKeys from "../assets/musa-keys.jpg";
import summerWalker from "../assets/summer-walker.jpg";
import popcaan from "../assets/popcaan.jpg";
import focalistic from "../assets/focalistic.jpg";
import asake from "../assets/asake.jpg";
import wizkid from "../assets/wizkid-1.jpg";
import youngThug from "../assets/young-thug.jpg";
import odumodu from "../assets/odumodu.jpg"

const collaborators = [
  {
    name: "Chris Brown",
    song: "Blow My Mind",
    country: "United States",
    image: chrisBrown,
    spotify: "https://open.spotify.com/track/3MYG7lZANqw54i2Du7Y0WN?si=93892f81dae5490c",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Nicki Minaj",
    song: "Holy Ground",
    country: "Trinidad & Tobago",
    image: nicki,
    spotify: "https://open.spotify.com/track/6DWErydPjjZyH06gOkhxRL?si=db3a131ea8a745c0",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Burna Boy",
    song: "Trumpet",
    country: "Nigeria",
    image: burnaBoy,
    spotify: "https://open.spotify.com/track/4XdzbWs3HVauIWqd15qoTo?si=162db5ceb61c4a70",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Lil Baby",
    song: "So Crazy",
    country: "United States",
    image: lilBaby,
    spotify: "https://open.spotify.com/track/5h9n5J7SRLzqBx4PyzhAFs?si=0e675ff2157f45e1",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Musa Keys",
    song: "Unavailable",
    country: "South Africa",
    image: musaKeys,
    spotify: "https://open.spotify.com/track/2kaH2Z8ezDUKf6fNw250rZ?si=48448f6619ef4fa9",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Summer Walker",
    song: "D & G",
    country: "United States",
    image: summerWalker,
    spotify: "https://open.spotify.com/track/0xr7t6jQWzFsZ9XwfcxAu7?si=19167f6b70d44a5d",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Popcaan",
    song: "Risky",
    country: "Jamaica",
    image: popcaan,
    spotify: "https://open.spotify.com/track/56HnJIjgi41kpjh6L3Y1Ca?si=ebdcd5c7f1154214",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Focalistic",
    song: "Champion Sound",
    country: "South Africa",
    image: focalistic,
    spotify: "#",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Asake",
    song: "No Competition",
    country: "Nigeria",
    image: asake,
    spotify: "#",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Wizkid",
    song: "Melo",
    country: "Nigeria",
    image: wizkid,
    spotify: "#",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Young Thug",
    song: "Shopping Spree",
    country: "United States",
    image: youngThug,
    spotify: "#",
    apple: "#",
    youtube: "#",
  },
  {
    name: "Odumodu",
    song: "Funds",
    country: "Nigeria",
    image: odumodu,
    spotify: "https://open.spotify.com/track/6zZixF6uYbtG8uiNzDO2LH?si=e21bb92d62af4f46",
    apple: "#",
    youtube: "#",
  }
];

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="relative overflow-hidden bg-zinc-950 py-32 text-white"
    >
      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-400">
            Collaborations
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Music Without Borders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 leading-8">
            Davido has collaborated with some of the biggest names
            in global music, creating timeless records that connect
            cultures across continents.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {collaborators.map((artist, index) => (

            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
                duration: .6
              }}
              whileHover={{
                y: -12
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-4">

                    <a
                      href={artist.spotify}
                      className="rounded-full bg-green-500 p-3 text-xl"
                    >
                      <FaSpotify />
                    </a>

                    <a
                      href={artist.apple}
                      className="rounded-full bg-white p-3 text-xl text-black"
                    >
                      <FaApple />
                    </a>

                    <a
                      href={artist.youtube}
                      className="rounded-full bg-red-600 p-3 text-xl"
                    >
                      <FaYoutube />
                    </a>

                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  {artist.country}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {artist.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  Featured Song
                </p>

                <h4 className="mt-1 text-lg font-semibold">
                  "{artist.song}"
                </h4>

                <button
                  className="
                  mt-6
                  rounded-full
                  border
                  border-yellow-400
                  px-6
                  py-3
                  font-semibold
                  text-yellow-400
                  transition
                  hover:bg-yellow-400
                  hover:text-black
                  "
                >
                  Explore
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}