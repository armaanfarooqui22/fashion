import { ArrowUpRight, Clock, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-[#111111]">
      {/* Contact Grid */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
                Visit Or Reach Out
              </p>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.92] text-[#111111] uppercase">
                Malviya Nagar,
                <br />
                New Delhi
              </h2>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#FF4D3D] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">
                      {STUDIO_CONTACT.addressLine1}
                    </p>
                    <p className="text-sm text-[#111111]/70">{STUDIO_CONTACT.addressLine2}</p>
                    <p className="mt-1 text-xs text-[#111111]/55">{STUDIO_CONTACT.landmark}</p>
                  </div>
                </div>

                {/* Click-to-call */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#FF4D3D] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <a
                      href={STUDIO_CONTACT.phoneHref}
                      className="text-base font-semibold text-[#111111] hover:text-[#FF4D3D] transition-colors tabular-nums"
                    >
                      {STUDIO_CONTACT.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#111111]/55 mt-0.5">
                      Tap to call directly or message on WhatsApp
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#FF4D3D] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">{STUDIO_CONTACT.hours}</p>
                    <p className="text-xs text-[#111111]/55 mt-0.5">
                      Monday shoots available by prior appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social & Action Row */}
            <div className="mt-10 pt-6 border-t border-[#111111]/12 flex flex-wrap items-center gap-4">
              <a
                href={STUDIO_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border border-[#111111]/20 text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>{STUDIO_CONTACT.instagramHandle}</span>
              </a>

              <a
                href={`${STUDIO_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hi Fashion Studio, I would like to inquire about booking a shoot.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold bg-[#111111] text-white hover:bg-[#FF4D3D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Studio</span>
              </a>
            </div>
          </div>

          {/* Right Stylized Architectural Map Placeholder */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[320px] sm:min-h-[380px] bg-[#F5F5F3] border border-[#111111]/15 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
              {/* Architectural Grid & Road Lines SVG */}
              <svg
                aria-hidden="true"
                viewBox="0 0 800 480"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
              >
                {/* Subtle street grid */}
                <g stroke="#111111" strokeOpacity="0.08" strokeWidth="1">
                  <line x1="0" y1="80" x2="800" y2="80" />
                  <line x1="0" y1="160" x2="800" y2="160" />
                  <line x1="0" y1="240" x2="800" y2="240" />
                  <line x1="0" y1="320" x2="800" y2="320" />
                  <line x1="0" y1="400" x2="800" y2="400" />
                  <line x1="120" y1="0" x2="120" y2="480" />
                  <line x1="260" y1="0" x2="260" y2="480" />
                  <line x1="400" y1="0" x2="400" y2="480" />
                  <line x1="540" y1="0" x2="540" y2="480" />
                  <line x1="680" y1="0" x2="680" y2="480" />
                </g>

                {/* Major South Delhi Arterials */}
                <path
                  d="M -20 340 Q 260 280 430 220 T 820 110"
                  fill="none"
                  stroke="#111111"
                  strokeOpacity="0.22"
                  strokeWidth="7"
                />
                <path
                  d="M 210 -20 L 340 240 L 450 500"
                  fill="none"
                  stroke="#111111"
                  strokeOpacity="0.16"
                  strokeWidth="5"
                />
                <path
                  d="M 50 120 L 760 330"
                  fill="none"
                  stroke="#111111"
                  strokeOpacity="0.12"
                  strokeWidth="3"
                />

                {/* Yellow Line Metro Corridor */}
                <path
                  d="M 140 480 L 290 310 L 470 150 L 660 0"
                  fill="none"
                  stroke="#FF4D3D"
                  strokeOpacity="0.35"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />

                {/* Nearby Landmarks */}
                <g fill="#111111" fillOpacity="0.45" fontSize="11" fontFamily="Inter, sans-serif">
                  <text x="155" y="135">HAUZ KHAS</text>
                  <text x="545" y="345">SAKET DISTRICT</text>
                  <text x="275" y="345">MALVIYA NAGAR METRO</text>
                </g>

                {/* Studio Pin Marker */}
                <g transform="translate(410, 224)">
                  <circle r="34" fill="#FF4D3D" fillOpacity="0.12" />
                  <circle r="16" fill="#FF4D3D" fillOpacity="0.24" />
                  <circle r="7" fill="#FF4D3D" />
                  <circle r="3" fill="#FFFFFF" />
                </g>
              </svg>

              {/* Top Coordinate Meta */}
              <div className="relative z-10 flex items-center justify-between text-xs font-medium text-[#111111]/65">
                <span className="bg-white/90 px-2.5 py-1 border border-[#111111]/10 tabular-nums">
                  28.5355° N · 77.2104° E
                </span>
                <span className="bg-white/90 px-2.5 py-1 border border-[#111111]/10">
                  South Delhi · PIN 110017
                </span>
              </div>

              {/* Bottom Studio Pin Card */}
              <div className="relative z-10 bg-white border border-[#111111]/15 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-lg">
                <div>
                  <p className="font-display text-2xl tracking-wide uppercase text-[#111111] leading-none">
                    Fashion Studio · Malviya Nagar
                  </p>
                  <p className="mt-1 text-xs text-[#111111]/65">
                    Main Market Road · Easy cab drop-off &amp; Yellow Line Metro access
                  </p>
                </div>

                <a
                  href={STUDIO_CONTACT.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold bg-[#111111] text-white hover:bg-[#FF4D3D] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footer Bar */}
      <div className="border-t border-[#111111]/12 bg-[#FAFAFA]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <a
              href="#top"
              className="font-display text-2xl tracking-[0.06em] text-[#111111] whitespace-nowrap"
            >
              FASHION STUDIO
            </a>
            <span className="text-xs text-[#111111]/55">
              Malviya Nagar, New Delhi · {STUDIO_CONTACT.phoneDisplay}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#111111]/60">
            <a href="#portfolio" className="hover:text-[#111111] transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-[#111111] transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-[#111111] transition-colors">
              Pricing
            </a>
            <a href="#reviews" className="hover:text-[#111111] transition-colors">
              Reviews
            </a>
            <a href="#booking" className="hover:text-[#111111] transition-colors">
              Book a Shoot
            </a>
            <span className="text-[#111111]/45">© {currentYear} Fashion Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
