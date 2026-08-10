import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaSpotify,
  FaApple,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-black text-white"
    >
      {/* Ambient Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Top Section */}

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black text-yellow-400">
              DavidoVerse
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              The ultimate fan destination celebrating the music,
              journey and global legacy of Davido.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Explore
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <a href="#hero" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#biography" className="hover:text-yellow-400">
                  Biography
                </a>
              </li>

              <li>
                <a href="#timeline" className="hover:text-yellow-400">
                  Timeline
                </a>
              </li>

              <li>
                <a href="#discography" className="hover:text-yellow-400">
                  Discography
                </a>
              </li>

              <li>
                <a href="#awards" className="hover:text-yellow-400">
                  Awards
                </a>
              </li>

              <li>
                <a href="#collaborations" className="hover:text-yellow-400">
                  Collaborations
                </a>
              </li>

            </ul>

          </div>

          {/* Streaming */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Listen
            </h3>

            <div className="space-y-4">

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition hover:bg-green-500"
              >
                <FaSpotify className="text-2xl" />
                Spotify
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition hover:bg-white hover:text-black"
              >
                <FaApple className="text-2xl" />
                Apple Music
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition hover:bg-red-600"
              >
                <FaYoutube className="text-2xl" />
                YouTube Music
              </a>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-bold">
              Stay Updated
            </h3>

            <p className="mt-5 text-gray-400">
              Subscribe for updates about new releases,
              performances and fan content.
            </p>

            <form className="mt-8">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                outline-none
                transition
                focus:border-yellow-400
                "
              />

              <button
                className="
                mt-4
                w-full
                rounded-xl
                bg-yellow-400
                py-4
                font-bold
                text-black
                transition
                hover:bg-yellow-300
                "
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 text-center text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} DavidoVerse. All Rights Reserved.
          </p>

          <p className="max-w-xl text-sm leading-7">
            This is an unofficial fan website created for educational and
            portfolio purposes. Davido, all related names, music, images and
            trademarks belong to their respective owners.
          </p>

        </div>

        {/* Credit */}

        <div className="mt-12 text-center">

          <p className="text-gray-500">
            Designed & Developed by
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xl font-bold text-yellow-400 transition hover:scale-105"
          >
            Raphael Onuoha
          </a>

        </div>

      </div>
    </footer>
  );
}