import React, { useState, useRef, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
    {
        label: "Home", href: "/"
    },
    {
        label: "Artwork", href: "/artwork"
    },
    {
        label: "Dance", href: "/dance"
    },
    {
        label: "Music", href: "/music"
    },
    {
        label: "Videos", href: "/videos"
    },
    {
        label: "Photography", href: "/photography"
    },
    {
        label: "Stories", href: "/stories"
    }
]

export default function FanNav() {
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div>
            <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xxl transition-colors duration-300 ${scrolled ? "bg-[#0b0b0f]/80 bord-b border-white/10" : "bg-[#0b0b0f]/40"}`}>
                <div className='max-w-7xl mx-auto px-5 sm:px-8'>
                    <div className='flex items-center justify-between h-16 sm:h-20'>
                        <a href="/" className='flex select-none items-center justify-center'>
                            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                                DAVIDO
                            </span>
                            <span className="text-xl sm:text-2xl font-extrabold tracking0-tight text-[#e8b923]">
                                VERSE
                            </span>
                        </a>

                        <div className="hidden lg:flex items-center gap-8">
                            {NAV_LINKS.map((link) => link.children ? (
                                <DropdownLink key={link.label} link={link} />
                            ) : (
                                <a key={link.label} href={link.href} className="text-white/90 hover:text-[#e8b923] transition-colors duration-200 text-sm font-medium tracking-wide">
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className='flex items-center gap-3'>
                            <a href="#submit" className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#e8b923] text-[#fff] text-sm font-bold px-5 py-2.5 hover:bg-[#f5c93a] transition-colors duration-200">
                                Share Your Creation
                            </a>
                            <button className='lg:hidden text-white p-2 -mr-2' onClick={() => setMobileOpen((o) => !o)} aria-label='Toggle menu'>
                                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px]" : "max-h-0"}`}>
                    <div className='border-t border-white/10 bg-[#0b0b0f]/95 backdrop-drop-xl px-5 py-4 flex flex-col gap-1'>
                        {NAV_LINKS.map((link) => (
                            <a className='text-white/90 py-3 text-sm font-medium' href={link.href} key={link.label} onClick={() => setMobileOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                        <a href='#submit' className='mt-3 inline-flex items-center justify-center rounded-full bg-[#e8b923] text-[white] text-sm font-bold px-5 py-3 hover:bg-[#f5c93a] transition-colors duration-200'>
                            Share Your Creation
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}