import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { HERO_COLLAGE } from '../data/studioData';
import { StudioImage } from './StudioImage';

interface HeroSectionProps {
  onBookClick: () => void;
}

const STATS = [
  { value: '100+', label: '5-Star Google Reviews in Delhi' },
  { value: '500+', label: 'Campaigns & Model Portfolios' },
  { value: '48–72h', label: 'Edited High-Res Turnaround' },
  { value: 'South Delhi', label: 'Malviya Nagar Cyclorama Studio' },
];

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const slowParallax = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -28]);
  const fastParallax = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 28]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative bg-white overflow-x-clip border-b border-[#111111]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-12 lg:pt-16 lg:pb-16">
        {/* Asymmetric Split Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch">
          {/* Left Typography Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Quiet unboxed location + rating line (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-[13px] font-medium text-[#111111]/65 mb-6">
                <span>Malviya Nagar, New Delhi</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-[#111111] font-semibold">
                  <Star className="w-3.5 h-3.5 fill-[#FF4D3D] text-[#FF4D3D]" aria-hidden="true" />
                  4.9 Rated (100+ Google Reviews)
                </span>
              </div>

              <h1 className="font-display text-[clamp(4.25rem,11vw,8.5rem)] leading-[0.88] tracking-[-0.01em] text-[#111111] uppercase">
                Shot To
                <br />
                Stand{' '}
                <span className="text-[#FF4D3D]">Out.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#111111]/75 leading-relaxed max-w-md font-normal">
                Fashion, Portrait, Model Portfolio &amp; Product Photography in Delhi.
                Built with crisp studio lighting, decisive direction, and magazine-grade retouching.
              </p>

              {/* Primary + Secondary CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#FF4D3D] hover:bg-[#111111] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
                >
                  <span>Book a Shoot</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
                >
                  <span>See Our Work</span>
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Editorial Manifesto Footnote at bottom of left rail */}
            <div className="mt-10 lg:mt-14 pt-6 border-t border-[#111111]/12 flex items-center justify-between gap-4 text-xs text-[#111111]/60">
              <span>Live tethered shoots · Directed posing</span>
              <span className="tabular-nums font-medium text-[#111111]">Est. New Delhi</span>
            </div>
          </div>

          {/* Right Asymmetric 4-Image Editorial Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-3 sm:gap-4 items-start">
            {/* Column A: Tall Lead Couture Frame + Compact Monochrome Portrait */}
            <motion.div
              style={{ y: slowParallax }}
              className="col-span-7 flex flex-col gap-3 sm:gap-4"
            >
              <figure className="group relative aspect-[3/4] w-full overflow-hidden bg-[#F3F3F1]">
                <StudioImage
                  src={HERO_COLLAGE[0].src}
                  alt={HERO_COLLAGE[0].alt}
                  loading="eager"
                  fallbackLabel="Fashion Editorial"
                  className="group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <figcaption className="absolute bottom-0 inset-x-0 px-3.5 py-2.5 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-[11px] font-medium tracking-wider uppercase text-white/95">
                  {HERO_COLLAGE[0].caption}
                </figcaption>
              </figure>

              <figure className="group relative aspect-[16/10] w-full overflow-hidden bg-[#F3F3F1]">
                <StudioImage
                  src={HERO_COLLAGE[3].src}
                  alt={HERO_COLLAGE[3].alt}
                  loading="eager"
                  fallbackLabel="Monochrome Portrait"
                  className="group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <figcaption className="absolute bottom-0 inset-x-0 px-3.5 py-2 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-[11px] font-medium tracking-wider uppercase text-white/95">
                  {HERO_COLLAGE[3].caption}
                </figcaption>
              </figure>
            </motion.div>

            {/* Column B: Offset Editorial Menswear + Agency Comp Card */}
            <motion.div
              style={{ y: fastParallax }}
              className="col-span-5 flex flex-col gap-3 sm:gap-4 pt-6 sm:pt-10"
            >
              <figure className="group relative aspect-[3/4] w-full overflow-hidden bg-[#F3F3F1]">
                <StudioImage
                  src={HERO_COLLAGE[1].src}
                  alt={HERO_COLLAGE[1].alt}
                  loading="eager"
                  fallbackLabel="Menswear Campaign"
                  className="group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <figcaption className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-[11px] font-medium tracking-wider uppercase text-white/95">
                  {HERO_COLLAGE[1].caption}
                </figcaption>
              </figure>

              <figure className="group relative aspect-[3/4] w-full overflow-hidden bg-[#F3F3F1]">
                <StudioImage
                  src={HERO_COLLAGE[2].src}
                  alt={HERO_COLLAGE[2].alt}
                  loading="eager"
                  fallbackLabel="Model Portfolio"
                  className="group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <figcaption className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-[11px] font-medium tracking-wider uppercase text-white/95">
                  {HERO_COLLAGE[2].caption}
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </div>

        {/* Full-Width Proof Strip below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#111111]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-3xl sm:text-4xl tracking-tight text-[#111111] tabular-nums leading-none">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-[#111111]/65 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Editorial Marquee Ribbon Divider */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden bg-[#111111] text-white py-3 border-t border-[#111111]"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-8 pr-8 font-display text-lg sm:text-xl tracking-[0.14em] uppercase"
            >
              <span>Fashion Campaigns</span>
              <span className="text-[#FF4D3D]">·</span>
              <span>Model Portfolios</span>
              <span className="text-[#FF4D3D]">·</span>
              <span>Editorial Portraits</span>
              <span className="text-[#FF4D3D]">·</span>
              <span>Product &amp; E-Commerce</span>
              <span className="text-[#FF4D3D]">·</span>
              <span>Runway &amp; Events</span>
              <span className="text-[#FF4D3D]">·</span>
              <span>Malviya Nagar, New Delhi</span>
              <span className="text-[#FF4D3D]">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
