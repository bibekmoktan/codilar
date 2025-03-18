'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Add custom CSS to hide webkit scrollbar
const ScrollbarHideCSS = () => (
  <style jsx global>{`
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }
  `}</style>
);

// Component for expertise card
const ExpertiseCard = ({ 
  title, 
  description, 
  image 
}: { 
  title: string; 
  description: string; 
  image: string;
}) => {
  return (
    <div className="min-w-[350px] md:min-w-[400px] h-[300px] bg-[#F6F7F9] rounded-xl relative flex flex-col group cursor-pointer overflow-visible">
     {/* Arrow icon - moved to top left with opacity that increases on hover */}
     <div className="absolute top-4 left-4 opacity-20 transition-opacity duration-300 hover:opacity-70 -rotate-45">
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0060B4" />
            <stop offset="100%" stopColor="#a83232" />
          </linearGradient>
        </defs>
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke="url(#arrowGradient)"
        />
      </svg>
      </div>
      {/* Background image */}
      <div className="absolute -top-[70px] right-0 overflow-visible z-10">
        <Image
          src={`/images/expertise/${image}`}
          alt={title}
          width={230}
          height={230}
          className="object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col h-full justify-end">
        <h3 className="text-2xl font-medium text-black mb-4">{title}</h3>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
      
      {/* Arrow icon - opacity increases on hover */}
    </div>
  );
};

const ExpertiseSection = () => {
  // Data for expertise cards
  const expertiseItems = [
    {
      title: "Experience Design",
      description: "Create intuitive and engaging user experiences.",
      image: "experience-design.jpg"
    },
    {
      title: "Platform Engineering",
      description: "Build scalable platforms tailored to your business needs.",
      image: "platform-engineering.jpg"
    },
    {
      title: "Digital Marketing",
      description: "Boost visibility and conversions with targeted campaigns.",
      image: "digital-marketing.jpg"
    },
    {
      title: "Conversion Rate Optimization",
      description: "Optimize user journeys to maximize revenue.",
      image: "conversion-rate.jpg"
    },
    {
      title: "Managed Support",
      description: "Ensure smooth operations with dedicated, ongoing support.",
      image: "managed-support.jpg"
    },
    {
      title: "Strategy Consulting",
      description: "Shape your digital roadmap with expert insights",
      image: "strategy-consulting.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[white]">
      <ScrollbarHideCSS />
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 w-full mx-auto ">
          {/* Horizontal layout with left and right sections */}
          <div className="text-black flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left section with title */}
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                Comprehensive eCommerce Services to achieve Success
              </h2>
            </div>
            
            {/* Right section with description, link and indicators */}
            <div className="w-full">
              <p className="text-lg leading-relaxed mb-8">
                Codilar partners with leading e-commerce platforms like Adobe Commerce and Shopify to build robust, scalable online stores with seamless implementation and optimization.
              </p>
              <div className="flex flex-col gap-4">
              {/* Single line with dots at start and arrows at end */}
              <div className="flex justify-between items-center">
                {/* Navigation dots - start */}
                <div className="flex gap-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-400 via-purple-600 to-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-transparent border border-black rounded-full"></div>
                  <div className="w-3 h-3 bg-transparent border border-black rounded-full"></div>
                </div>
                
                {/* Navigation arrows - end */}
                <div className="flex gap-4">
                  {/* Left arrow navigation */}
                  <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center w-20 h-20 border border-black rounded-full hover:bg-gray-100 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor"/>
                    </svg>
                  </Link>
                  
                  {/* Right arrow navigation */}
                  <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center w-20 h-20 border border-black rounded-full hover:bg-gray-100 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Cards - Horizontal Scrollable */}
        <div className="relative overflow-x-auto hide-scrollbar -mx-4 px-4 max-w-full">
          <div className="flex gap-6 w-max pt-[90px]">
            {expertiseItems.map((item, index) => (
              <ExpertiseCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 