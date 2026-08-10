import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi"

const NAV_LINKS = [
  {
    label: "Home", href: "#hero"
  },
  {
    label: "Biography", href: "#biography",
    children: [
      {
        label: "Timeline", href: "#timeline"
      }
    ]
  },
  {
    label: "Discography", href: "#discography",
  },
  {
    label: "Achievements", href: "#achievements",
    children: [{
      label: "Awards", href: "#awards"
    },
    {
      label: "Collaborations",
      href: "#collaborations"
    },
    ]
  },
  {
    label: "Tours", href: "#tours",
    children: [
      { 
        label: "Gallery",
        href: "#gallery" 
      },
      {
        label: "Videos",
        href: "#videos"
      }
    ],
  },
];

function DropdownLink({ link }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const show = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className='relative' onMouseEnter={show} onMouseLeave={hide}>
      <div className="flex items-center gap-1">
        {/* Main Link */}
        <a href={link.href} className="text-white/90 hover:text-[#e8b923] transition-colors duration-200 text-sm font-medium tracking-wide py-2">
          {link.label}
        </a>

        {/* Dropdown Trigger */}

        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={`Open ${link.label} menu`} aria-expanded={open} className="p-1 text-white/70 hover:text-[#e8b923] transition-colors duration-200">
        <FiChevronDown size={14} className={`transition-trnsform duration-200 ${open ? "rotate-180" : ""}`}/>
        </button>
      </div>

      {/* Dropdown */}
      <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
        <div className="min-w-[180px] rounded-lg border border-white/10 bg-[#141418]/95 backdrop-blur-md shadow-xl shadow-black/40 overflow-hidden">
          {link.children.map((child) => (
            <a key={child.label} href={child.href} onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-white/80 hover:text-[#e8b923] hover:bg-white/5 transition-colors duration-150">
              {child.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xxl transition-colors duration-300 ${scrolled ? "bg-[#0b0b0f]/80 bord-b border-white/10" : "bg-[#0b0b0f]/40"}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-cneter justify-between h-16 sm:h-20">
            {/* LOGO */}
            <a href="#" className='flex select-none items-center justify-center'>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                DAVIDO
              </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking0-tight text-[#e8b923]">
                VERSE
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => link.children ? (
                <DropdownLink key={link.label} link={link} />
              ) : (
                <a key={link.label} href={link.href} className="text-white/90 hover:text-[#e8b923] transition-colors duration-200 text-sm font-medium tracking-wide">
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a href={"https://open.spotify.com/album/43hCvloofcUeEmpK6RFldz?si=kfOncy2ATvWpXv9kBLXoOw"}
                className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#e8b923] text-[#fff] text-sm font-bold px-5 py-2.5 hover:bg-[#f5c93a] transition-colors duration-200">
                Listen Now
              </a>
              <button className='lg:hidden text-white p-2 -mr-2' onClick={() => setMobileOpen((o) => !o)} aria-label='Toggle menu'>
                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="border-t border-white/10 bg-[#0b0b0f]/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => link.children ? (
              <div key={link.label}>
                <button className="w-full flex items-center justify-between text-white/90 py-3 text-sm font-medium" onClick={() => setMobileDropdown((d) => (d === link.label ? null : link.label))}>
                  {link.label}
                  <FiChevronDown size={16} className={`transition-transfor${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${mobileDropdown === link.label ? "max-h-40" : "max-h-0"}`}>
                  <div className='pl-4 pb-2 flex flex-col gap-1'>
                    {link.children.map((child) => (
                      <a className='text-white/70 py-2 text-sm' href={child.href} key={child.label} onClick={() => { setMobileOpen(false); setMobileDropdown(null) }}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a className='text-white/90 py-3 text-sm font-medium' href={link.href} key={link.label} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href='#' className='mt-3 inline-flex items-center justify-center rounded-full bg-[#e8b923] text-[white] text-sm font-bold px-5 py-3 hover:bg-[#f5c93a] transition-colors duration-200'>
              Listen Now
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

