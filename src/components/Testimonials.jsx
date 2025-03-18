'use client';
import React, { useRef, useState, useEffect } from 'react';
const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;
  
    // Testimonial data
    const testimonials = [
      {
        id: 1,
        title: "How Codilar Unified Phygital Shopping Experience for ALDO | Codilar's Customer Success Story",
        image: "/images/testimonial-aldo.jpg"
      },
      {
        id: 2,
        title: "Lals Group | Codilar's Customer Success Story",
        image: "/images/testimonial-lals.jpg"
      },
      {
        id: 3,
        title: "Lals Group | Codilar's Customer Success Story",
        image: "/images/testimonial-lals.jpg"
      },
      {
        id: 4,
        title: "eCommerce Transformation | Codilar's Success Story",
        image: "/images/testimonial-lals.jpg"
      }
    ];
  
    const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };
  
    const goToPrevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };
  
    // Play button for videos
    const PlayButton = ({ size = 'large' }) => (
      <div className={`rounded-full bg-white flex items-center justify-center ${size === 'large' ? 'w-14 h-14 sm:w-28 sm:h-28' : 'w-8 h-8 sm:w-10 sm:h-10'} shadow-lg hover:scale-105 transition-transform duration-300`}>
        <div className={`${size === 'large' ? 'ml-1 sm:ml-3' : 'ml-0.5 sm:ml-1'}`}>
          <svg 
            width={size === 'large' ? "20" : "10"} 
            height={size === 'large' ? "20" : "10"} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[45px] sm:h-[45px]"
          >
            <path d="M6 4L18 12L6 20V4Z" fill="black" />
          </svg>
        </div>
      </div>
    );
  
    // Custom ChevronRight and ChevronLeft icons
    const ChevronRight = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
    
    const ChevronLeft = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  
    return (
      <section className="bg-white py-10 sm:py-20 w-full overflow-x-hidden">
        <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-fit ">
          {/* Top section with title and heading - centered */}
          <div className="text-center mb-6 sm:mb-20">
            <span className="uppercase text-xs sm:text-base font-medium tracking-wide text-black block mb-1 sm:mb-2">TESTIMONIALS</span>
            <h2 className="text-2xl sm:text-4xl md:text-[56px] font-medium text-[#1A1A1A] leading-tight mx-auto">
              Real Success in the <br />
              Real World
            </h2>
          </div>
  
          {/* Main content area - mobile optimized with reduced spacing */}
          <div className="mb-4 sm:mb-10">
            {/* Main grid with featured video stacked on mobile, side by side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10">
              {/* Featured Video - Full width on mobile */}
              <div className="md:col-span-7 relative overflow-hidden rounded-lg bg-gray-100 aspect-video">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay - smaller on mobile */}
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <PlayButton size="large" />
                </div>
              </div>
  
              {/* Right column content - Full width on mobile */}
              <div className="md:col-span-5 flex flex-col">
                {/* Title - adjusted for mobile with reduced spacing */}
                <h3 className="text-base sm:text-xl md:text-3xl font-medium text-black leading-tight mb-2 sm:mb-8 mt-2 sm:mt-0 line-clamp-2 sm:line-clamp-none">
                  {testimonials[currentSlide].title}
                </h3>
                
                {/* More Stories section - hidden on mobile, visible on md screens and up */}
                <div className="hidden md:block mt-10">
                  <h4 className="text-base sm:text-lg font-medium text-black mb-4 sm:mb-5 mt-4 sm:mt-6">More Stories</h4>
                  
                  {/* Smaller videos grid - 2 columns */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    {[1, 2].map((index) => (
                      <div key={index} className="flex flex-col">
                        {/* Video thumbnail */}
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video cursor-pointer group">
                          <img 
                            src={testimonials[index].image} 
                            alt={testimonials[index].title}
                            className="w-full h-full object-cover"
                          />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                          
                          {/* Play button - smaller on mobile */}
                          <div className="absolute right-2 sm:right-4 top-[calc(50%-16px)] sm:top-[calc(50%-20px)]">
                            <PlayButton size="small" />
                          </div>
                        </div>
                        
                        {/* Title - smaller on mobile */}
                        <h3 className="text-xl sm:text-sm md:text-base font-medium text-black line-clamp-1">
                          Lals Group | Codilar's Customer Suc...
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation Controls - Centered, smaller on mobile, with reduced top margin */}
          <div className="flex items-center justify-center gap-3 sm:gap-7 mt-1 sm:mt-8">
            <button 
              onClick={goToPrevSlide}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <span className="text-xs sm:text-lg font-light text-gray-800">{currentSlide + 1} of {totalSlides}</span>
            <button 
              onClick={goToNextSlide}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  // You can use this component in your application
  export { Testimonials };
  