/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStudio } from './components/AboutStudio';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    'Alaciados Permanentes'
  );
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#F6F1E4]">
      <Navbar onBookClick={() => scrollToBooking()} />

      <main>
        <Hero onBookClick={() => scrollToBooking()} />
        <AboutStudio />
        <ServicesSection onSelectService={(name) => scrollToBooking(name)} />
        <GallerySection onSelectService={(name) => scrollToBooking(name)} />
        <FaqSection />
        <BookingSection selectedService={selectedService} />
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </div>
  );
}
