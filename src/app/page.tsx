import React from 'react';
import Hero from '@/components/Hero';
import PartnersSection from '@/components/PartnersSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import CaseStudies from '@/components/CaseStudies';
import Accelerators from '@/components/Accelerators';
import { Testimonials } from '@/components/Testimonials';
import Events from '@/components/Events';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Case Studies Section */}
      <CaseStudies />
      
      {/* Accelerators Section */}
      <Accelerators />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Partners Section */}
      <PartnersSection />

      {/* Events Section */}
      <Events />

      {/* Contact Section */}

    </div>
  );
}
