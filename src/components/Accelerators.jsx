'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import images
import rocketImage from '../../public/images/rocket.png';
import gridImage from '../../public/images/grid.png';

// Arrow outward icon for "View More" buttons
const ArrowOutwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Checkmark icon
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// Icon components for feature items
const ServerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="8" r="1" fill="currentColor"/>
    <circle cx="7" cy="16" r="1" fill="currentColor"/>
  </svg>
);

const SpeedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12H19M19 12L16 9M19 12L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IntegrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Custom 3D SVGs for cards

// Replace SVG components with Image components
const RocketSVG = () => (
  <div className="absolute top-[-40px] right-[-20px] opacity-85 z-0 w-[220px] h-[220px]">
    <Image
      src={rocketImage}
      alt="Rocket illustration"
      layout="fill"
      objectFit="contain"
      quality={90}
      priority
    />
  </div>
);

const GridSVG = () => (
  <div className="absolute top-[-40px] right-[-20px] opacity-85 z-0 w-[220px] h-[220px]">
    <Image
      src={gridImage}
      alt="Grid illustration"
      layout="fill"
      objectFit="contain"
      quality={90}
      priority
    />
  </div>
);



// Accelerator card component
const AcceleratorCard = ({ 
  id,
  title, 
  description, 
  features,
  svgType,
  index
}) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 overflow-visible group mt-10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a] z-0 rounded-2xl"></div>

      {/* Rocket Image */}
      {svgType === 'rocket' && (
        <div className="absolute -top-[80px] -right-[15px] w-[300px] h-[300px] z-[999] rotate-[20deg] transition-transform duration-300 ease-out group-hover:scale-110">
          <div className="relative w-full h-full">
            <Image
              src={rocketImage}
              alt="Rocket illustration"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              className="transform -rotate-[15deg] scale-110 transition-transform duration-300 ease-out group-hover:scale-125"
            />
          </div>
        </div>
      )}

      {/* Grid Image */}
      {svgType === 'grid' && (
        <div className="absolute -top-[60px] right-[20px] w-[250px] h-[250px] z-[999] rotate-[20deg]">
          <div className="relative w-full h-full">
            <Image
              src={gridImage}
              alt="Grid illustration"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              className="transform -rotate-[15deg] scale-110"
            />
          </div>
        </div>
      )}

      {/* Jewelry Image */}
      {svgType === 'jewelry' && (
        <div className="absolute -top-[60px] right-[20px] w-[250px] h-[250px] z-[999] rotate-[20deg] ">
          <div className="relative w-full h-full">
            <Image
              src={gridImage}
              alt="Jewelry illustration"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              className="transform -rotate-[15deg] scale-110"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Title with gradient border */}
        <div className="flex justify-start mt-40">
          <div className={`relative ${svgType === 'rocket' ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}>
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[1px]"></div>
            <h3 className="relative bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-xl font-medium">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className={`text-gray-300 mt-6 text-base leading-relaxed max-w-[80%] ${svgType === 'rocket' ? 'group-hover:text-white transition-colors duration-300' : ''}`}>
          {description}
        </p>

        {/* Features list */}
        <div className="mt-10 space-y-4">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <div className={`w-6 h-6 flex-shrink-0 ${svgType === 'rocket' ? 'transition-transform duration-300 group-hover:scale-110' : ''}`}>
                {idx === 0 && <SpeedIcon />}
                {idx === 1 && <ServerIcon />}
                {idx === 2 && <IntegrationIcon />}
              </div>
              <span className={`bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${svgType === 'rocket' ? 'transition-all duration-300 group-hover:from-purple-300 group-hover:to-pink-300' : ''}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Accelerators component
const Accelerators = () => {
  const scrollContainerRef = useRef(null);
  
  // Handle scroll events
  const handleScroll = () => {
    // Could add scroll logic here if needed
  };

  // Accelerators data
  const accelerators = [
    {
      id: 'cwarmer',
      title: 'cWarmer',
      description: 'cWarmer accelerates e-commerce stores with intelligent cache preloading, ensuring rapid page loads, improved user experiences, and reduced server strain.',
      features: [
        'Smart caching for quicker loads',
        'Improved server performance',
        'Compatible with Magento and Shopify'
      ],
      svgType: 'rocket'
    },
    {
      id: 'power-listing',
      title: 'Power Listing',
      description: 'Leverage PowerListing to optimize product rendering and enhance the shopping experience. This suite uses OpenSearch/ElasticSearch for faster, more efficient listings.',
      features: [
        'PLP loads in under 2 seconds, no caching',
        'Seamlessly integrates with Adobe Commerce',
        'Performance boosts with zero recurring costs'
      ],
      svgType: 'grid'
    },
    {
      id: 'jewelry-accelerator',
      title: 'Jewelry Product Accelerator',
      description: 'Transform jewelry e-commerce with a custom product catalog, advanced filtering, and enriched UX/UI. Streamline operations and delight customers with tailored features.',
      features: [
        'Performance boosts with zero recurring costs',
        'High-end UI/UX tailored for jewelry retail',
        'Optimized checkout for higher conversions'
      ],
      svgType: 'jewelry'
    },
    {
      id: 'headless-commerce',
      title: 'Headless Commerce',
      description: 'Future-proof your store with our headless commerce accelerator. Separating frontend from backend gives you unmatched flexibility and superior performance.',
      features: [
        'Blazing fast storefront experiences',
        'Freedom to use any frontend tech stack',
        'Seamless integration with existing systems'
      ],
      svgType: 'grid'
    },
    {
      id: 'analytics-suite',
      title: 'Analytics Suite',
      description: 'Gain powerful insights with our analytics accelerator. Track customer behavior, measure performance, and make data-driven decisions to boost your business.',
      features: [
        'Real-time performance dashboards',
        'Customer journey visualization',
        'Conversion funnel optimization tools'
      ],
      svgType: 'rocket'
    },
    {
      id: 'payment-gateway',
      title: 'Payment Gateway',
      description: 'Streamline your checkout process with our advanced payment gateway accelerator. Support multiple payment methods and provide a seamless payment experience.',
      features: [
        'Support for 50+ payment providers',
        'One-click checkout functionality',
        'Advanced fraud detection system'
      ],
      svgType: 'jewelry'
    }
  ];

  return (
    <section className="relative bg-white py-20 overflow-visible">
      {/* Include animation styles */}
   
      
      <div className="w-full relative ml-24 overflow-visible">
        {/* Header */}
        <div className="mb-8 px-6">
          <span className="uppercase text-base font-normal text-black">ACCELERATORS</span>
          <h2 className="text-5xl md:text-[56px] font-normal text-black leading-tight max-w-4xl mt-2">
            Accelerating eCommerce <br />
            Innovation with Custom Solutions
          </h2>
        </div>
        
        {/* Connect button (positioned absolute to match design) */}
        <div className="absolute top-0 right-6 mr-32">
          <Link href="#" className="inline-flex items-center gap-1.5 text-base font-normal border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">
            Lets Connect <ArrowOutwardIcon />
          </Link>
        </div>

        {/* Accelerators Grid with horizontal scroll on all screen sizes */}
        <div className="relative mt-12 overflow-visible">
          {/* Horizontal scrolling container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-8 pt-[180px] -mt-[180px] snap-x snap-mandatory scrollbar-hide relative overflow-visible"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              paddingRight: '0',
              width: 'calc(100vw - 6rem)'
            }}
          >
            {accelerators.map((accelerator, index) => (
              <div 
                key={accelerator.id} 
                className="flex-shrink-0 snap-start h-[600px] relative overflow-visible"
                style={{ 
                  width: 'calc((100vw - 11rem) / 2)',
                  minWidth: '300px',
                  maxWidth: '500px'
                }}
              >
                <AcceleratorCard
                  id={accelerator.id}
                  title={accelerator.title}
                  description={accelerator.description}
                  features={accelerator.features}
                  svgType={accelerator.svgType}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Optional scroll indicators/buttons could be added here */}
        </div>
      </div>
    </section>
  );
};

















export default Accelerators;

// Testimonials section component
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
    <div className={`rounded-full bg-white flex items-center justify-center ${size === 'large' ? 'w-28 h-28' : 'w-10 h-10'} shadow-lg hover:scale-105 transition-transform duration-300`}>
      <div className={`${size === 'large' ? 'ml-3' : 'ml-1'}`}>
        <svg 
          width={size === 'large' ? "45" : "15"} 
          height={size === 'large' ? "45" : "15"} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 4L18 12L6 20V4Z" fill="black" />
        </svg>
      </div>
    </div>
  );

  // Custom ChevronRight and ChevronLeft icons
  const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const ChevronLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="bg-white py-20 w-full">
      <div className="w-full px-6 md:px-8 lg:px-12 pl-16 ml-16">
        {/* Top section with title and heading - centered */}
        <div className="text-center mb-20">
          <span className="uppercase text-base font-medium tracking-wide text-black block mb-2">TESTIMONIALS</span>
          <h2 className="text-5xl md:text-[56px] font-medium text-[#1A1A1A] leading-tight mx-auto">
            Real Success in the Real World
          </h2>
        </div>

        {/* Main content area */}
        <div className="mb-15">
          {/* Main grid with featured video on left and content on right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Featured Video - Takes 7 columns on desktop */}
            <div className="md:col-span-7 relative overflow-hidden rounded-lg bg-gray-100 aspect-video">
              <img 
                src={testimonials[currentSlide].image} 
                alt={testimonials[currentSlide].title}
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <PlayButton size="large" />
              </div>
            </div>

            {/* Right column content - Takes 5 columns */}
            <div className="md:col-span-5 flex flex-col mr-16">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-medium text-black leading-tight mb-45 ">
                {testimonials[currentSlide].title}
              </h3>
              
              {/* More Stories section */}
              <div>
                <h4 className="text-lg font-medium text-black mb-5 mt-10">More Stories</h4>
                
                {/* Smaller videos grid - now in a row */}
                <div className="grid grid-cols-2 gap-6">
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
                        
                        {/* Play button - always visible but smaller on the secondary videos */}
                        <div className="absolute right-4 top-[calc(50%-20px)]">
                          <PlayButton size="small" />
                        </div>
                      </div>
                      
                      {/* Title - below the video */}
                      <h3 className="text-base font-medium text-black mt-3 line-clamp-1">
                        Lals Group | Codilar's Customer Suc...
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Centered */}
        <div className="flex items-center justify-center gap-7 mt-4">
          <button 
            onClick={goToPrevSlide}
            className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <span className="text-lg font-light text-gray-800">{currentSlide + 1} of {totalSlides}</span>
          <button 
            onClick={goToNextSlide}
            className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
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