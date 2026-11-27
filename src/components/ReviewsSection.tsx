import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { REVIEWS, STUDIO_CONTACT } from '../data/studioData';

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = REVIEWS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section
      id="reviews"
      className="py-20 sm:py-24 lg:py-28 bg-white border-b border-[#111111]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#111111]/15">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
              Client Proof
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-[#111111] uppercase">
              100+ Five-Star
              <br />
              Google Reviews
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center gap-1.5" aria-label="Rated 4.9 out of 5 stars on Google">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#FF4D3D] text-[#FF4D3D]"
                  aria-hidden="true"
                />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-[#111111] tabular-nums">
                4.9 / 5.0
              </span>
            </div>
            <a
              href={STUDIO_CONTACT.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#FF4D3D] transition-colors underline underline-offset-4 decoration-[#111111]/30 hover:decoration-[#FF4D3D]"
            >
              <span>See all reviews on Google</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Carousel Body */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Active Review Quote */}
          <div className="lg:col-span-9 min-h-[250px] sm:min-h-[230px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stars + Shoot Category */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#111111]/60">
                  <div className="flex items-center gap-0.5" aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FF4D3D] text-[#FF4D3D]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>{current.shootType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.date}</span>
                </div>

                {/* Quote */}
                <blockquote className="mt-5 text-xl sm:text-2xl lg:text-[28px] font-medium leading-[1.35] tracking-[-0.01em] text-[#111111] max-w-4xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Reviewer Attribution */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="font-semibold text-sm sm:text-base text-[#111111]">
                    {current.name}
                  </span>
                  <span className="text-[#111111]/35" aria-hidden="true">/</span>
                  <span className="text-sm text-[#111111]/65">{current.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Carousel Controls */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#111111]/10">
            <div className="font-display text-4xl sm:text-5xl text-[#111111] tabular-nums leading-none">
              {String(activeIndex + 1).padStart(2, '0')}
              <span className="text-[#111111]/25"> / {String(REVIEWS.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous client review"
                className="inline-flex items-center justify-center w-12 h-12 border border-[#111111]/25 text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next client review"
                className="inline-flex items-center justify-center w-12 h-12 bg-[#111111] text-white hover:bg-[#FF4D3D] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Index Selectors */}
        <div
          className="mt-10 pt-6 border-t border-[#111111]/10 grid grid-cols-5 gap-2 sm:gap-3"
          role="tablist"
          aria-label="Choose testimonial"
        >
          {REVIEWS.map((review, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={review.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-label={`Read review by ${review.name}`}
                onClick={() => setActiveIndex(index)}
                className="group text-left py-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
              >
                <div
                  className={`h-[2px] w-full transition-colors duration-200 ${
                    isSelected ? 'bg-[#FF4D3D]' : 'bg-[#111111]/15 group-hover:bg-[#111111]/40'
                  }`}
                />
                <span
                  className={`mt-2 block text-xs truncate transition-colors ${
                    isSelected
                      ? 'font-semibold text-[#111111]'
                      : 'text-[#111111]/50 group-hover:text-[#111111]/80'
                  }`}
                >
                  {review.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
