import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/studioData';

interface ServicesSectionProps {
  onSelectService: (shootType: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAFAFA] border-b border-[#111111]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 border-b border-[#111111]">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
              What We Shoot
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-[#111111] uppercase">
              Six Disciplines.
              <br />
              One Sharp Standard.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed max-w-md">
              From debut model portfolios to full-scale seasonal campaigns, every session is
              pre-lit, tethered live, and art-directed so you never leave guessing.
            </p>
          </div>
        </div>

        {/* Numbered Editorial Services List */}
        <ol className="divide-y divide-[#111111]/15">
          {SERVICES.map((service, index) => (
            <motion.li
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2), ease: [0.16, 1, 0.3, 1] }}
              className="group py-7 sm:py-9 transition-colors duration-150"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center">
                {/* Editorial Index Number */}
                <div className="lg:col-span-1">
                  <span className="font-display text-3xl sm:text-4xl text-[#FF4D3D] tabular-nums leading-none">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[0.95] text-[#111111] group-hover:text-[#FF4D3D] transition-colors uppercase">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <span className="mt-1 block text-xs font-medium text-[#111111]/55">
                      {service.subtitle}
                    </span>
                  )}
                </div>

                {/* Description + Unboxed Deliverables */}
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-[15px] text-[#111111]/75 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-2.5 text-xs font-medium text-[#111111]/55">
                    {service.deliverables.join(' · ')}
                  </p>
                </div>

                {/* Action Button */}
                <div className="lg:col-span-2 flex lg:justify-end pt-1 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.shootTypeValue)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#111111] border border-[#111111]/25 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
                  >
                    <span>Book Slot</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
