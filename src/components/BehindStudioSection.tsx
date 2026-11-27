import { motion } from 'motion/react';
import { EQUIPMENT_HIGHLIGHTS, IMAGES } from '../data/studioData';
import { StudioImage } from './StudioImage';

export function BehindStudioSection() {
  return (
    <section
      id="studio"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAFAFA] border-b border-[#111111]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Editorial Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
              Behind The Studio
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-[#111111] uppercase">
              Built For Light.
              <br />
              Made In Delhi.
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#111111]/75 leading-relaxed">
              <p>
                Tucked off Main Market Road in Malviya Nagar, Fashion Studio was built on a
                simple belief: great photography isn&apos;t rescued in post—it&apos;s sculpted on set.
              </p>
              <p>
                Over 100+ five-star Google reviews didn&apos;t happen by accident. Whether it&apos;s your
                first model portfolio or your tenth seasonal campaign, we direct posture, shape
                studio light down to the catchlight, and let you review frames live on a calibrated
                screen before you ever wrap.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#111111]/15 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-3xl text-[#111111] tabular-nums leading-none">
                  1,600 sq ft
                </p>
                <p className="mt-1 text-xs text-[#111111]/60">Air-conditioned shooting floor</p>
              </div>
              <div>
                <p className="font-display text-3xl text-[#111111] tabular-nums leading-none">
                  12+ Backdrops
                </p>
                <p className="mt-1 text-xs text-[#111111]/60">White cyclorama &amp; seamless rolls</p>
              </div>
            </div>
          </div>

          {/* Asymmetric Studio Photography Spread */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="sm:col-span-12 aspect-[16/9] overflow-hidden bg-[#ECECE9]"
            >
              <StudioImage
                src={IMAGES.studioCyclorama}
                alt="Fashion Studio New Delhi shooting floor with white curved cyclorama wall, Profoto strobe softboxes, and rolling tethered workstation"
                fallbackLabel="Cyclorama Shooting Floor"
              />
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="sm:col-span-7 aspect-[4/3] overflow-hidden bg-[#ECECE9]"
            >
              <StudioImage
                src={IMAGES.studioBts}
                alt="Behind-the-scenes lighting setup at Fashion Studio featuring a large parabolic modifier, tripod-mounted camera, and color-calibrated tethering monitor"
                fallbackLabel="Tethered Lighting Rig"
              />
            </motion.figure>

            <div className="sm:col-span-5 bg-[#111111] text-white p-6 sm:p-7 flex flex-col justify-between">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D]">
                On-Set Experience
              </p>
              <blockquote className="mt-4 font-display text-2xl sm:text-3xl leading-[1.05] tracking-wide uppercase">
                &ldquo;Walk in with a moodboard. Walk out with frames that hold their own in print.&rdquo;
              </blockquote>
              <p className="mt-6 text-xs text-white/60">
                Private changing &amp; makeup bay · High-speed Wi-Fi · Espresso bar
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Highlights Grid */}
        <div className="mt-14 lg:mt-16 pt-10 border-t border-[#111111]/15">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <h3 className="font-display text-3xl sm:text-4xl text-[#111111] uppercase tracking-wide">
              Studio Gear &amp; Infrastructure
            </h3>
            <span className="text-xs text-[#111111]/55 hidden sm:inline">
              Commercial-grade lighting &amp; capture workflow
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {EQUIPMENT_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 border-t border-[#111111]/20"
              >
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D3D]">
                  {item.category}
                </p>
                <h4 className="mt-2 text-base font-semibold text-[#111111]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-[#111111]/70 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
