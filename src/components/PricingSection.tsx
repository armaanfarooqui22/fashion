import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_PACKAGES, type PricingPackage } from '../data/studioData';

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 lg:py-28 bg-white border-b border-[#111111]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#111111]/15">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
              Packages &amp; Rates
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-[#111111] uppercase">
              Transparent Shoot
              <br />
              Packages
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#111111]/70 max-w-md leading-relaxed">
            Pick a tier that fits your shoot scope, or message us on WhatsApp for custom
            catalogs, multi-day campaigns, and bulk SKU rates.
          </p>
        </div>

        {/* 3-Column Editorial Pricing Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isFeatured = Boolean(pkg.popular);

            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between p-7 sm:p-9 border transition-colors ${
                  isFeatured
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#111111] border-[#111111]/15'
                }`}
              >
                <div>
                  {/* Package Header */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-4xl sm:text-[44px] tracking-wide uppercase leading-none">
                      {pkg.name}
                    </h3>
                    {isFeatured && (
                      <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#FF4D3D]">
                        Most Booked
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isFeatured ? 'text-white/70' : 'text-[#111111]/65'
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Placeholder Price */}
                  <div
                    className={`mt-7 pb-7 border-b ${
                      isFeatured ? 'border-white/15' : 'border-[#111111]/12'
                    }`}
                  >
                    <span className="font-display text-5xl sm:text-6xl tabular-nums tracking-tight leading-none">
                      {pkg.price}
                    </span>
                    <span
                      className={`ml-2 text-xs ${
                        isFeatured ? 'text-white/60' : 'text-[#111111]/55'
                      }`}
                    >
                      / session · taxes as applicable
                    </span>
                  </div>

                  {/* Structured Core Specs */}
                  <dl
                    className={`mt-6 divide-y text-sm ${
                      isFeatured ? 'divide-white/12' : 'divide-[#111111]/10'
                    }`}
                  >
                    <div className="py-3 flex items-center justify-between gap-4">
                      <dt className={isFeatured ? 'text-white/60' : 'text-[#111111]/60'}>
                        Edited Photos
                      </dt>
                      <dd className="font-semibold text-right tabular-nums">{pkg.editedPhotos}</dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4">
                      <dt className={isFeatured ? 'text-white/60' : 'text-[#111111]/60'}>
                        Studio Time
                      </dt>
                      <dd className="font-semibold text-right tabular-nums">{pkg.duration}</dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4">
                      <dt className={isFeatured ? 'text-white/60' : 'text-[#111111]/60'}>
                        Outfit Changes
                      </dt>
                      <dd className="font-semibold text-right">{pkg.outfitChanges}</dd>
                    </div>
                    <div className="py-3 flex items-center justify-between gap-4">
                      <dt className={isFeatured ? 'text-white/60' : 'text-[#111111]/60'}>
                        Turnaround
                      </dt>
                      <dd className="font-semibold text-right tabular-nums">{pkg.deliveryTime}</dd>
                    </div>
                  </dl>

                  {/* Included Highlights */}
                  <ul className="mt-6 space-y-2.5">
                    {pkg.highlights.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm ${
                          isFeatured ? 'text-white/85' : 'text-[#111111]/80'
                        }`}
                      >
                        <Check
                          className="w-4 h-4 mt-0.5 shrink-0 text-[#FF4D3D]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  className={`mt-9 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D] ${
                    isFeatured
                      ? 'bg-[#FF4D3D] text-white hover:bg-white hover:text-[#111111]'
                      : 'bg-[#111111] text-white hover:bg-[#FF4D3D]'
                  }`}
                >
                  <span>Book {pkg.name} Package</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Custom Quote Note */}
        <p className="mt-8 text-xs sm:text-sm text-[#111111]/60 text-center">
          Final pricing confirmed based on styling, hair &amp; makeup add-ons, or on-location requirements.
        </p>
      </div>
    </section>
  );
}
