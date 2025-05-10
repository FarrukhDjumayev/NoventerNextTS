'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  t: {
    home: string;
    portfolio: string;
    services: string;
    contact: string;
    cta: string;
  };
  lang: 'uz' | 'en';
  toggleLanguage: () => void;
};

const Navbar = ({ t, lang, toggleLanguage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { href: '', label: t.home },
    { href: 'portfolio', label: t.portfolio },
    { href: 'xizmatlar', label: t.services },
    { href: 'aloqa', label: t.contact }
  ];

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-[#0A0020] text-white z-50 relative shadow-md">
      {/* Logo */}
      <Link href={`/${lang}`}>
        <Image src="/NoventerLogo.svg" alt="Noventer Logo" width={120} height={40} />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/${lang}/${item.href}`}
            className="relative text-[16px] px-4 py-2 cursor-pointer font-semibold text-white rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Actions (desktop) */}
      <div className="hidden md:flex items-center gap-4">
        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="uppercase px-4 py-2 text-sm"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {lang}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-[#0A0020] border border-white/10 rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:text-purple-400 transition"
              >
                {lang === 'uz' ? 'English' : "O'zbekcha"}
              </button>
            </div>
          )}
        </div>
        <Link
          href={`/${lang}/aloqa`}
          className="relative text-[16px] px-4 py-2 cursor-pointer font-semibold text-white rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
        >
          {t.cta}
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="menu"
        className={`absolute top-full left-0 w-full bg-[#0A0020] flex flex-col items-center py-6 gap-6 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/${lang}/${item.href}`}
            onClick={() => setIsOpen(false)}
            className="relative text-[16px] px-4 py-2 cursor-pointer font-semibold text-white rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={`/${lang}/aloqa`}
          onClick={() => setIsOpen(false)}
          className="mt-4 px-5 py-2 border border-white/20 rounded-md hover:bg-white/10 transition text-sm font-medium"
        >
          {t.cta}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
