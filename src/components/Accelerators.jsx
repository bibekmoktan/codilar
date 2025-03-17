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
    <div className="relative w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-4 sm:p-8 overflow-visible group mt-6">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a] z-0 rounded-2xl"></div>

      {/* Rocket Image - adjusted for mobile display */}
      {svgType === 'rocket' && (
        <div className="absolute -top-[40px] sm:-top-[80px] -right-[10px] sm:-right-[15px] w-[160px] h-[160px] sm:w-[300px] sm:h-[300px] z-[999] rotate-[20deg] transition-transform duration-300 ease-out group-hover:scale-110">
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

      {/* Grid Image - adjusted for mobile display */}
      {svgType === 'grid' && (
        <div className="absolute -top-[40px] sm:-top-[60px] right-[10px] sm:right-[20px] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] z-[999] rotate-[20deg]">
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

      {/* Jewelry Image - adjusted for mobile display */}
      {svgType === 'jewelry' && (
        <div className="absolute -top-[40px] sm:-top-[60px] right-[10px] sm:right-[20px] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] z-[999] rotate-[20deg]">
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

      {/* Content - adjusted for mobile layout */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Title with gradient border */}
        <div className="flex justify-start mt-24 sm:mt-40">
          <div className={`relative ${svgType === 'rocket' ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}>
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[1px]"></div>
            <h3 className="relative bg-[#1a1a1a] text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-xl font-medium">
              {title}
            </h3>
          </div>
        </div>

        {/* Description - adjusted for mobile */}
        <p className={`text-gray-300 mt-3 sm:mt-6 text-xs sm:text-base leading-relaxed max-w-[95%] sm:max-w-[80%] ${svgType === 'rocket' ? 'group-hover:text-white transition-colors duration-300' : ''}`}>
          {description.split('.')[0] + '.'}
        </p>
        
        {/* Features list - adjusted for mobile */}
        <div className="mt-4 sm:mt-10 space-y-2 sm:space-y-4">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300"
            >
              <div className={`w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0 ${svgType === 'rocket' ? 'transition-transform duration-300 group-hover:scale-110' : ''}`}>
                {idx === 0 && <SpeedIcon />}
                {idx === 1 && <ServerIcon />}
                {idx === 2 && <IntegrationIcon />}
              </div>
              <span className={`bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-xs sm:text-sm ${svgType === 'rocket' ? 'transition-all duration-300 group-hover:from-purple-300 group-hover:to-pink-300' : ''}`}>
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
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Handle scroll events
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.offsetWidth * 0.85; // Approximate width of each item
      const newIndex = Math.round(scrollPosition / itemWidth);
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };
  return (
    <section className="relative bg-white py-12 sm:py-20">
      {/* Mobile-optimized container */}
      <div className="w-fit relative mx-4 sm:ml-24 overflow-visible">
        {/* Header - adjusted for mobile */}
        <div className="mb-6 sm:mb-8 px-0 sm:px-6">
          <span className="uppercase text-sm sm:text-base font-normal text-black">ACCELERATORS</span>
          <h2 className="text-3xl sm:text-5xl md:text-[56px] font-normal text-black leading-tight max-w-4xl mt-2">
            Accelerating eCommerce <br className="hidden sm:block" />
            Innovation with Custom Solutions
          </h2>
        </div>
        
        {/* Connect button - hidden on mobile, visible on sm screens and above */}
        <div className="hidden sm:block sm:absolute sm:top-0 sm:right-6 sm:mr-32">
          <Link href="#" className="inline-flex items-center gap-1.5 text-base font-normal border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">
            Lets Connect <ArrowOutwardIcon />
          </Link>
        </div>

        {/* Accelerators Grid - optimized for mobile */}
        <div className="relative mt-8 sm:mt-12 overflow-visible">
          {/* Horizontal scrolling container - mobile-optimized */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-3 sm:gap-8 pb-8 pt-[120px] sm:pt-[180px] -mt-[120px] sm:-mt-[180px] snap-x snap-mandatory scrollbar-hide relative overflow-visible pl-0 pr-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              width: '100vw',
              marginLeft: '-16px',
              paddingLeft: '16px',
            }}
          >
            {accelerators.map((accelerator, index) => (
              <div 
                key={accelerator.id} 
                className="flex-shrink-0 snap-start h-[400px] sm:h-[600px] relative overflow-visible"
                style={{ 
                  width: 'calc(75vw)',
                  minWidth: '220px',
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
          
          {/* Replace navigation dots with View All button on mobile */}
          <div className="flex justify-center mt-6 sm:hidden items-center mx-4">
            <Link href="/accelerators" className="w-full flex justify-center items-center gap-1.5 text-xs font-normal border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition-all duration-300">
              View All <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accelerators;

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