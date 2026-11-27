import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
  type PortfolioItem,
} from '../data/studioData';
import { StudioImage } from './StudioImage';

interface PortfolioSectionProps {
  onBookStyle: (shootType: string) => void;
}

export function PortfolioSection({ onBookStyle }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const activeItem: PortfolioItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const handleCategoryChange = (cat: PortfolioCategory) => {
    setActiveCategory(cat);
    setLightboxIndex(null);
  };

  const getAspectClass = (aspect: PortfolioItem['aspect']) => {
    if (aspect === 'portrait') return 'aspect-[3/4]';
    if (aspect === 'wide') return 'aspect-[16/10]';
    return 'aspect-[4/3]';
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 lg:py-28 bg-white border-b border-[#111111]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header + Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#111111]/15">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
              Selected Works
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-[#111111] uppercase">
              The Portfolio
            </h2>
          </div>

          {/* Interactive Filter Controls (Functional buttons, clean segmented style) */}
          <div
            role="tablist"
            aria-label="Filter portfolio by photography category"
            className="flex flex-wrap items-center gap-1.5"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D] ${
                    isActive
                      ? 'bg-[#111111] text-white'
                      : 'bg-[#F5F5F4] text-[#111111]/75 hover:text-[#111111] hover:bg-[#EAEAE8]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6 space-y-5 sm:space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25), ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid group"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Inspect ${item.title} — ${item.category} shoot`}
                className="w-full text-left block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4D3D]"
              >
                <div className={`relative w-full overflow-hidden bg-[#F3F3F1] ${getAspectClass(item.aspect)}`}>
                  <StudioImage
                    src={item.src}
                    alt={item.alt}
                    fallbackLabel={item.title}
                    className="group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Hover Affordance Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 sm:p-5">
                    <div className="flex justify-end">
                      <span className="inline-flex items-center justify-center w-9 h-9 bg-white/95 text-[#111111]">
                        <Expand className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="text-white">
                      <p className="text-xs text-white/80">
                        {item.client} · {item.year}
                      </p>
                      <p className="font-display text-2xl tracking-wide uppercase leading-tight mt-0.5">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clean Unboxed Editorial Metadata below frame */}
                <div className="mt-2.5 flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-semibold text-[#111111] group-hover:text-[#FF4D3D] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[#111111]/55 whitespace-nowrap shrink-0">
                    {item.category} · {item.year}
                  </span>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Fullscreen Editorial Lightbox */}
      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} full view`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Lightbox Top Bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between gap-4 text-white max-w-[1440px] w-full mx-auto"
            >
              <div className="text-xs sm:text-sm text-white/70 tabular-nums">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="text-white font-medium">{activeItem.category}</span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="inline-flex items-center justify-center w-11 h-11 text-white bg-white/10 hover:bg-[#FF4D3D] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center High-Res Image + Prev/Next */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex-1 flex items-center justify-center my-4 max-w-[1320px] w-full mx-auto min-h-0"
            >
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous image"
                  className="absolute left-0 sm:left-2 z-10 inline-flex items-center justify-center w-11 h-11 bg-black/60 hover:bg-[#FF4D3D] text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <motion.img
                key={activeItem.id}
                src={activeItem.src}
                alt={activeItem.alt}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[70vh] max-w-full object-contain select-none"
              />

              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="absolute right-0 sm:right-2 z-10 inline-flex items-center justify-center w-11 h-11 bg-black/60 hover:bg-[#FF4D3D] text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Credits & Direct Booking Action */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-[1440px] w-full mx-auto pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white"
            >
              <div>
                <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase leading-none">
                  {activeItem.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-white/70">
                  {activeItem.client} <span aria-hidden="true">·</span> {activeItem.specs}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const targetShootType = activeItem.shootTypeValue;
                  closeLightbox();
                  onBookStyle(targetShootType);
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#FF4D3D] hover:bg-white hover:text-[#111111] text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Book a Similar Shoot</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
