'use client'

import React from 'react';
import Image from 'next/image';

// Feature card component for displaying each benefit with an icon
interface FeatureCardProps {
  title: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon }) => {
  return (
    <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] h-[200px] bg-[#F6F7F9] rounded-xl relative flex flex-col group cursor-pointer shadow-md mt-20">  
      {/* Image positioned above the card */}
      <div className="absolute -top-[38px] right-4">
        <Image 
          src={icon} 
          alt={title} 
          width={150} 
          height={150} 
          className="object-contain" 
          priority
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col h-full justify-end">
        <h3 className="text-2xl font-normal text-black">{title}</h3>
      </div>
    </div>
  );
};

const WhyCodilar: React.FC = () => {
  // Data for feature cards
  const features = [
    {
      title: 'Certified Partnerships',
      icon: '/images/partnership.png',
    },
    {
      title: 'Proven Track Record',
      icon: '/images/record.png',
    },
    {
      title: 'Client-centric Approach',
      icon: '/images/approach.png',
    },
    {
      title: 'Global Delivery Capabilities',
      icon: '/images/capabilities.png',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        {/* Heading and stats in a left-right layout */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16">
          {/* Heading on the left */}
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-normal text-[#222222]">
              Why Codilar is the Right Partner for your Business
            </h2>
          </div>
          
          {/* Stats on the right */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <p className="text-lg text-gray-700 md:text-start">Codilar is trusted by businesses worldwide to deliver tailored, innovative e-commerce solutions.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-normal bg-gradient-to-r from-[#0060B4] to-[#00144E] inline-block text-transparent bg-clip-text">500+</div>
                <div className="text-lg text-gray-700 bg-gradient-to-r from-[#0060B4] to-[#00144E] text-transparent bg-clip-text">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-normal bg-gradient-to-r from-[#0060B4] to-[#00144E] inline-block text-transparent bg-clip-text">200+</div>
                <div className="text-lg text-gray-700 bg-gradient-to-r from-[#0060B4] to-[#00144E] text-transparent bg-clip-text">Certified Experts</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature cards in a responsive flex-wrap grid that aligns with the heading */}
        <div className="flex flex-wrap md:justify-start gap-6 w-full pb-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              icon={feature.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCodilar; 