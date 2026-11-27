import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { BehindStudioSection } from './components/BehindStudioSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection, type BookingPrefill } from './components/BookingSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import type { PricingPackage } from './data/studioData';

export default function App() {
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill | null>(null);

  const scrollToBooking = useCallback((prefill?: BookingPrefill) => {
    if (prefill) {
      setBookingPrefill({ ...prefill, timestamp: Date.now() });
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBookClick = useCallback(() => {
    scrollToBooking();
  }, [scrollToBooking]);

  const handleSelectService = useCallback(
    (shootType: string) => {
      scrollToBooking({ shootType });
    },
    [scrollToBooking]
  );

  const handleSelectPackage = useCallback(
    (pkg: PricingPackage) => {
      scrollToBooking({
        budgetRange: pkg.budgetRangeValue,
        note: `Interested in the ${pkg.name} Package (${pkg.editedPhotos}, ${pkg.duration}, ${pkg.outfitChanges}).`,
      });
    },
    [scrollToBooking]
  );

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      {/* 1. Minimal Editorial Navbar */}
      <Navbar onBookClick={handleBookClick} />

      <main id="main-content">
        {/* 2. Hero Section */}
        <HeroSection onBookClick={handleBookClick} />

        {/* 3. Portfolio Masonry + Lightbox */}
        <PortfolioSection onBookStyle={handleSelectService} />

        {/* 4. Numbered Services List (01–06) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Pricing Packages (Basic / Pro / Complete) */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* 6. Behind the Studio */}
        <BehindStudioSection />

        {/* 7. Client Reviews Carousel */}
        <ReviewsSection />

        {/* 8. Validated Booking Form -> WhatsApp */}
        <BookingSection prefill={bookingPrefill} />
      </main>

      {/* 9. Contact & Editorial Footer */}
      <ContactFooter />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
