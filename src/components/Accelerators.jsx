'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

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

// CSS Animations for the component
const AnimationStyles = () => (
  <style jsx global>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0) rotate(45deg); }
      50% { transform: translateY(-10px) rotate(45deg); }
    }
    
    @keyframes float-slow-reverse {
      0%, 100% { transform: translateY(0) rotate(45deg); }
      50% { transform: translateY(10px) rotate(45deg); }
    }
    
    @keyframes float-medium {
      0%, 100% { transform: translateY(0) rotate(45deg); }
      50% { transform: translateY(-15px) rotate(45deg); }
    }
    
    @keyframes float-medium-reverse {
      0%, 100% { transform: translateY(0) rotate(45deg); }
      50% { transform: translateY(15px) rotate(45deg); }
    }
    
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }
    
    .animate-float-slow-reverse {
      animation: float-slow-reverse 7s ease-in-out infinite;
    }
    
    .animate-float-medium {
      animation: float-medium 6s ease-in-out infinite;
    }
    
    .animate-float-medium-reverse {
      animation: float-medium-reverse 5s ease-in-out infinite;
    }
    
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient-shift 3s ease infinite;
    }
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `}</style>
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
const RocketSVG = () => (
  <svg width="220" height="220" viewBox="0 0 160 160" className="absolute top-[-40px] right-[-20px] opacity-85 z-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 30C120 40 130 70 125 100C100 95 80 80 70 50C75 45 82.5 35 90 30Z" fill="url(#rocket-gradient)" />
    <path d="M70 50C80 80 100 95 125 100C120 110 110 120 90 130C75 105 60 80 50 60C55 55 65 52.5 70 50Z" fill="url(#rocket-gradient-2)" fillOpacity="0.7" />
    <ellipse cx="70" cy="130" rx="20" ry="5" fill="#666" fillOpacity="0.5" />
    <defs>
      <linearGradient id="rocket-gradient" x1="90" y1="30" x2="125" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9333EA" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="rocket-gradient-2" x1="70" y1="50" x2="90" y2="130" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9333EA" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const GridSVG = () => (
  <svg width="220" height="220" viewBox="0 0 160 160" className="absolute top-[-40px] right-[-20px] opacity-85 z-0" xmlns="http://www.w3.org/2000/svg">
    <g fill="url(#grid-gradient)" fillOpacity="0.8">
      <rect x="40" y="40" width="20" height="20" rx="2" />
      <rect x="70" y="40" width="20" height="20" rx="2" />
      <rect x="100" y="40" width="20" height="20" rx="2" />
      <rect x="40" y="70" width="20" height="20" rx="2" />
      <rect x="70" y="70" width="20" height="20" rx="2" />
      <rect x="100" y="70" width="20" height="20" rx="2" />
      <rect x="40" y="100" width="20" height="20" rx="2" />
      <rect x="70" y="100" width="20" height="20" rx="2" />
      <rect x="100" y="100" width="20" height="20" rx="2" />
    </g>
    <defs>
      <linearGradient id="grid-gradient" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
    </defs>
  </svg>
);

const JewelrySVG = () => (
  <svg width="220" height="220" viewBox="0 0 160 160" className="absolute top-[-40px] right-[-20px] opacity-85 z-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 40L40 80L80 120L120 80L80 40Z" fill="url(#diamond-gradient)" />
    <path d="M80 40L40 80H120L80 40Z" fill="url(#diamond-gradient-2)" fillOpacity="0.8" />
    <path d="M40 80L80 120L120 80H40Z" fill="url(#diamond-gradient-3)" fillOpacity="0.6" />
    <defs>
      <linearGradient id="diamond-gradient" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
      <linearGradient id="diamond-gradient-2" x1="40" y1="40" x2="120" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
      <linearGradient id="diamond-gradient-3" x1="40" y1="80" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

// Custom animations for the neon effect
const NeonAnimations = () => (
  <style jsx global>{`
    @keyframes neon-pulse {
      0%, 100% { 
        box-shadow: 0 0 15px 2px rgba(var(--glow-color), 0.7); 
      }
      50% { 
        box-shadow: 0 0 20px 5px rgba(var(--glow-color), 0.9); 
      }
    }
    
    @keyframes neon-pulse-light {
      0%, 100% { 
        text-shadow: 0 0 8px rgba(var(--glow-color), 0.7); 
      }
      50% { 
        text-shadow: 0 0 12px rgba(var(--glow-color), 0.9); 
      }
    }
    
    @keyframes feature-glow {
      0%, 100% { 
        text-shadow: 0 0 5px rgba(var(--feature-glow), 0.7);
        box-shadow: 0 0 10px -2px rgba(var(--feature-glow), 0.3);
      }
      50% { 
        text-shadow: 0 0 10px rgba(var(--feature-glow), 1);
        box-shadow: 0 0 15px -1px rgba(var(--feature-glow), 0.5);
      }
    }
    
    .neon-glow {
      animation: neon-pulse 3s infinite;
    }
    
    .neon-text {
      animation: neon-pulse-light 3s infinite;
    }
    
    .feature-glow {
      animation: feature-glow 4s infinite;
      border-radius: 0.375rem;
    }
    
    .glass-effect {
      backdrop-filter: blur(5px);
      background: rgba(25, 25, 35, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  `}</style>
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
  // Determine color scheme based on card type
  const getColorScheme = () => {
    switch(svgType) {
      case 'rocket':
        return {
          border: 'border-purple-500/30',
          borderGlow: '--glow-color: 147, 51, 234',
          titleBg: 'bg-black/80',
          titleText: 'text-white',
          titleBorder: 'border-transparent',
          titleGradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500',
          iconColor: 'text-white opacity-70',
          gradientFrom: 'from-purple-900/20',
          gradientTo: 'to-purple-800/10',
          featureGlow: '--feature-glow: 168, 85, 247',
          featureColor: 'text-3xl bg-gradient-to-r from-white via-purple-400 to-purple-400 bg-clip-text text-transparent'
        };
      case 'grid':
        return {
          border: 'border-blue-500/30',
          borderGlow: '--glow-color: 56, 189, 248',
          titleBg: 'bg-black/80',
          titleText: 'text-white',
          titleBorder: 'border-transparent',
          titleGradient: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500',
          iconColor: 'text-white opacity-70',
          gradientFrom: 'from-blue-900/20',
          gradientTo: 'to-blue-800/10',
          featureGlow: '--feature-glow: 59, 130, 246',
          featureColor: 'text-3xl bg-gradient-to-r from-white via-blue-400 to-blue-400 bg-clip-text text-transparent'
        };
      case 'jewelry':
        return {
          border: 'border-amber-500/30',
          borderGlow: '--glow-color: 245, 158, 11',
          titleBg: 'bg-black/80',
          titleText: 'text-white',
          titleBorder: 'border-transparent',
          titleGradient: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500',
          iconColor: 'text-white opacity-70',
          gradientFrom: 'from-amber-900/20',
          gradientTo: 'to-amber-800/10',
          featureGlow: '--feature-glow: 249, 115, 22',
          featureColor: 'text-3xl bg-gradient-to-r from-white via-amber-400 to-amber-400 bg-clip-text text-transparent'
        };
      default:
        return {
          border: 'border-gray-700',
          borderGlow: '--glow-color: 100, 100, 200',
          titleBg: 'bg-black/80',
          titleText: 'text-white',
          titleBorder: 'border-transparent',
          titleGradient: 'bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400',
          iconColor: 'text-white opacity-70',
          gradientFrom: 'from-gray-900/20',
          gradientTo: 'to-gray-800/10',
          featureGlow: '--feature-glow: 156, 163, 175', 
          featureColor: 'text-3xl bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent'
        };
    }
  };

  const colors = getColorScheme();

  return (
    <div 
      className={`relative rounded-xl overflow-hidden h-full bg-gradient-to-br from-[#050508] to-[#0a0a14] border ${colors.border} transition-all duration-300 flex flex-col neon-glow`}
      style={{ [colors.borderGlow]: true }}
    >
      {/* Card content */}
      <div className="relative z-10 p-6 pt-12 h-full flex flex-col">
        {/* SVG Background based on type */}
        <div className="absolute top-0 right-0 z-0 w-full h-full overflow-visible">
          {svgType === 'rocket' && <RocketSVG />}
          {svgType === 'grid' && <GridSVG />}
          {svgType === 'jewelry' && <JewelrySVG />}
        </div>
        
        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} z-0`}></div>
        
        {/* Title */}
        <div className="relative z-10 w-fit mb-4">
          <div className={`absolute -inset-[1.5px] ${colors.titleGradient} rounded-full blur-[0.5px]`}></div>
          <h3 className={`${colors.titleText} relative text-xl font-medium px-5 py-2 rounded-full ${colors.titleBorder} ${colors.titleBg} backdrop-blur-sm z-10`}>
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-white/90 text-base mb-8 z-10">{description}</p>
        
        {/* Features list */}
        <div className="space-y-4 mt-auto z-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200 p-2 feature-glow"
              style={{ [colors.featureGlow]: true }}
            >
              <div className={`${colors.iconColor} w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                {index === 0 && <SpeedIcon />}
                {index === 1 && <ServerIcon />}
                {index === 2 && <IntegrationIcon />}
              </div>
              <p className={`${colors.featureColor} text-sm group-hover:text-white transition-colors duration-200`}>{feature}</p>
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
    <section className="relative bg-white py-20">
      {/* Include animation styles */}
      <AnimationStyles />
      <NeonAnimations />
      
      <div className="w-full relative ml-24">
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
        <div className="relative mt-12">
          {/* Horizontal scrolling container with fixed width to allow 2.5 cards to be visible */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              paddingRight: '0',
              width: 'calc(100vw - 6rem)'  // 6rem accounts for the left margin, allowing 2.5 cards to be visible
            }}
          >
            {accelerators.map((accelerator, index) => (
              <div 
                key={accelerator.id} 
                className="flex-shrink-0 snap-start h-[600px]"
                style={{ 
                  width: 'calc((100vw - 11rem) / 2)',  // Each card takes up (viewport - margins - gap) / 2.5 but we'll show 2 full cards
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