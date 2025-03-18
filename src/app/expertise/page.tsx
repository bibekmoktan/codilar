'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Hero from './components/Hero';
import PlatformsSection from './components/PlatformsSection';
import BusinessModels from './components/BusinessModels';
import ContentDataSection from './components/ContentDataSection';
import ExpertiseSection from './components/ExpertiseSection';
import IndustrySolutions from './components/IndustrySolutions';
import WhyCodilar from './components/WhyCodilar';
const ExpertisePage: React.FC = () => {
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white">
 
        <Hero />
        <PlatformsSection />
        <BusinessModels />
        <ContentDataSection />
        <ExpertiseSection />
        <IndustrySolutions />
        <WhyCodilar />

    
    </main>
  );
};

export default ExpertisePage; 