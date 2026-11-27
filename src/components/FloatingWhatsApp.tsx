import { MessageCircle } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export function FloatingWhatsApp() {
  const href = `${STUDIO_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Fashion Studio! I visited your website and would like to book a shoot.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Fashion Studio on WhatsApp at ${STUDIO_CONTACT.phoneDisplay}`}
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 h-12 px-4 sm:px-5 bg-[#111111] hover:bg-[#FF4D3D] text-white shadow-lg transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
    >
      <MessageCircle className="w-5 h-5 shrink-0 text-[#FF4D3D] group-hover:text-white" aria-hidden="true" />
      <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
}
