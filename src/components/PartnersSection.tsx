'use client';

import React from 'react';
import Image from 'next/image';

// Partner data array with image paths and alt text
const partners = [
  { id: 1, image: '/images/partners/partner1.png', alt: 'Partner 1' },
  { id: 2, image: '/images/partners/partner2.png', alt: 'Partner 2' },
  { id: 3, image: '/images/partners/partner3.png', alt: 'Partner 3' },
  { id: 4, image: '/images/partners/partner4.png', alt: 'Partner 4' },
  { id: 5, image: '/images/partners/partner5.png', alt: 'Partner 5' },
  { id: 6, image: '/images/partners/partner6.png', alt: 'Partner 6' },
  { id: 7, image: '/images/partners/partner7.png', alt: 'Partner 7' },
  { id: 8, image: '/images/partners/partner8.png', alt: 'Partner 8' },
  { id: 9, image: '/images/partners/partner9.png', alt: 'Partner 9' },
  { id: 10, image: '/images/partners/partner10.png', alt: 'Partner 10' },
];

const PartnersSection = () => {
  // Double the partners array for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="bg-[#171515] py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="uppercase text-white text-base font-normal tracking-[0.02em] mb-6">
            Our Partnerships
          </h2>
          <h1 className="text-white text-5xl md:text-7xl font-light leading-tight">
            Industry leading Partnerships
          </h1>
        </div>

        {/* Partners Slider Container */}
        <div className="relative w-full">
          {/* First Row - Moving Left */}
          <div className="flex animate-scroll-left">
            {doubledPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="relative min-w-[180px] h-[120px] mx-3 gradient-border p-[1px] rounded-sm group"
              >
                {/* Inner content container */}
                <div className="bg-[#171515] w-full h-full rounded-sm p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.image}
                      alt={partner.alt}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Moving Right */}
          <div className="flex animate-scroll-right mt-12">
            {doubledPartners.reverse().map((partner, index) => (
              <div
                key={`${partner.id}-reverse-${index}`}
                className="relative min-w-[180px] h-[120px] mx-3 gradient-border p-[1px] rounded-sm group"
              >
                {/* Inner content container */}
                <div className="bg-[#171515] w-full h-full rounded-sm p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.image}
                      alt={partner.alt}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-9 py-4 border border-white/20 rounded-3xl text-white hover:border-white/40 transition-colors">
            <span className="text-base font-medium">View All</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-900/25 blur-[150px]"></div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        
        /* Gradient border effect */
        .gradient-border {
          position: relative;
          background: linear-gradient(to right, #5b21b6, #ffffff, #2563eb);
          transition: all 0.3s ease;
        }
        
        .gradient-border:hover {
          background: linear-gradient(to right, #7c3aed, #ffffff, #3b82f6);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default PartnersSection; 