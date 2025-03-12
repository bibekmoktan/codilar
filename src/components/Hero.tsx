import React from 'react';
import Image from 'next/image';

/**
 * Hero component with background image and blur effect
 */
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background image with blur effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg.jpeg" 
          alt="Background" 
          fill 
          priority
          className="object-cover object-center"
          quality={85}
        />
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[8px] bg-black/40"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-black/30 to-black/70"></div>
      </div>
      
      {/* Content container */}
      <div className="container relative z-10 py-16">
        <div className="flex flex-col justify-between gap-12 md:gap-48 h-full max-w-[865px]">
          {/* Title section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight">
              Transforming eCommerce with Excellence
            </h1>
          </div>
          
          {/* Call to action button */}
          <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-between">
            {/* Subtitle */}
            <p className="text-white font-light text-lg md:text-[18px] max-w-3xl">
              Pioneering Success Across Shopify, Adobe Commerce, Akinon, AEM, and Pimcore
            </p>
            
            {/* CTA Button */}
            <a 
              href="#works" 
              className="btn-primary whitespace-nowrap"
            >
              <span>Explore Our Works</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - glass effect panels */}
      <div className="absolute bottom-8 left-8 w-64 h-32 bg-white/5 backdrop-blur-lg rounded-3xl z-0 rotate-6"></div>
      <div className="absolute top-16 right-16 w-48 h-48 bg-white/5 backdrop-blur-lg rounded-full z-0"></div>
    </section>
  );
};

export default Hero; 