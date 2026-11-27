import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleBook = () => {
    setMobileOpen(false);
    onBookClick();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#111111]/10'
          : 'bg-white border-b border-[#111111]/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-2xl sm:text-[28px] tracking-[0.06em] text-[#111111] whitespace-nowrap shrink-0 leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4D3D]"
        >
          FASHION STUDIO
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#111111]/75 hover:text-[#111111] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#FF4D3D] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4D3D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleBook}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-tight text-white bg-[#111111] hover:bg-[#FF4D3D] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
          >
            Book a Shoot
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#111111] hover:text-[#FF4D3D] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF4D3D]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-b border-[#111111]/15 px-5 pt-3 pb-6"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3.5 text-base font-medium text-[#111111] border-b border-[#111111]/10 hover:text-[#FF4D3D] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={handleBook}
                className="mt-5 w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#FF4D3D] hover:bg-[#111111] transition-colors cursor-pointer"
              >
                Book a Shoot
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
