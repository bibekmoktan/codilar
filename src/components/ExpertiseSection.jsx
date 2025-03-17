'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ExpertiseSection = () => {
  // State to track which expertise section is active
  const [activeExpertise, setActiveExpertise] = useState(2); // Default to Digital Commerce (02)
  // State to control animation
  const [animationDirection, setAnimationDirection] = useState('none'); // 'up', 'down', or 'none'
  // Ref for the content container
  const contentRef = useRef(null);

  // Function to handle expertise change with scroll animation
  const handleExpertiseChange = () => {
    // Start scrolling up animation
    setAnimationDirection('up');
    
    // After animation midpoint, change the expertise
    setTimeout(() => {
      const currentIndex = expertiseData.findIndex(exp => exp.id === activeExpertise);
      const nextIndex = (currentIndex + 1) % expertiseData.length;
      const nextId = expertiseData[nextIndex].id;
      console.log('Going to next expertise:', nextId);
      setActiveExpertise(nextId);
      
      // Change animation to scrolling down
      setAnimationDirection('down');
      
      // Reset animation after completion
      setTimeout(() => {
        setAnimationDirection('none');
      }, 500);
    }, 500); // Half the animation duration
  };

  // Data for expertise sections
  const expertiseData = [
    {
      id: 2,
      title: "2. Digital Commerce",
      description: "Transform your business with innovative digital commerce solutions tailored for every industry and business model. From B2C to mobile commerce, Codilar delivers scalable, customer-focused platforms.",
      cards: [
        { title: "Composable Commerce", icon: "/icons/composable.svg" },
        { title: "B2C & Omnichannel", icon: "/icons/omnichannel.svg" },
        { title: "Mobile Commerce", icon: "/icons/mobile.svg" },
        { title: "Order Management System (OMS)", icon: "/icons/oms.svg" },
        { title: "D2C", icon: "/icons/d2c.svg" },
        { title: "B2B Commerce", icon: "/icons/b2b.svg" },
        { title: "Headless Commerce", icon: "/icons/headless.svg" }
      ]
    },
    {
      id: 3,
      title: "3. Service",
      description: "End-to-End Services to Achieve Your Business Goals. From strategic planning to operational execution, Codilar offers a full suite of services to optimize and grow your digital commerce capabilities.",
      cards: [
        { title: "Strategy Consulting", icon: "/icons/strategy.svg" },
        { title: "Experience Design", icon: "/icons/design.svg" },
        { title: "Platform Engineering", icon: "/icons/engineering.svg" },
        { title: "Conversion Rate Optimization", icon: "/icons/cro.svg" },
        { title: "Managed Support", icon: "/icons/support.svg" },
        { title: "DevOps", icon: "/icons/devops.svg" },
        { title: "Digital Marketing", icon: "/icons/marketing.svg" }
      ]
    },
    {
      id: 4,
      title: "4. Content & Data",
      description: "Empower your business with streamlined content management and actionable insights. Codilar helps unify your data, optimize experiences, and enhance decision-making.",
      cards: [
        { title: "Digital Experience (DXP)", icon: "/icons/dxp.svg" },
        { title: "Product Information Management (PIM)", icon: "/icons/pim.svg" },
        { title: "Analytics", icon: "/icons/analytics.svg" },
        { title: "Customer Data Platform (CDP)", icon: "/icons/cdp.svg" }
      ]
    }
  ];

  // Get current active expertise data
  const currentExpertise = expertiseData.find(item => item.id === activeExpertise) || expertiseData[0];

  return (
    <section className="w-full bg-white py-8 md:py-16 relative overflow-hidden">
      {/* Background design elements - adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Blue polygon - responsive sizing */}
        <div className="absolute top-[-5%] right-[5%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-[#4C9ED2] blur-[100px] opacity-25"></div>
        
        {/* Red polygon - responsive sizing */}
        <div className="absolute bottom-[-10%] left-[15%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-[#F63230] blur-[100px] opacity-25"></div>
        
        {/* Purple union - responsive sizing */}
        <div className="absolute top-[20%] left-[30%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-[#B86BA2] blur-[120px] opacity-25"></div>
        
        {/* Pink polygon - responsive sizing */}
        <div className="absolute bottom-[15%] right-[25%] w-[150px] h-[150px] md:w-[350px] md:h-[350px] rounded-full bg-[#EB005E] blur-[90px] opacity-25"></div>
        
        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[250px] bg-white bg-opacity-[0.01]"></div>
      </div>

      {/* Main content container with different padding for mobile */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-32 relative">
        {/* Mobile header - only show on small screens */}
        <div className="block md:hidden mb-6">
          <p className="uppercase text-xs font-light tracking-wider text-black/80 mb-4">
            Our Expertises
          </p>
        </div>

        {/* DESKTOP VIEW - Only shown on large screens */}
        <div className="hidden lg:flex flex-row gap-12">
          {/* Left section with animated content - desktop view */}
          <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-white via-white to-pink-50 rounded-xl">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,233,236,0.4)_0%,rgba(255,255,255,0.8)_90%)] z-0"></div>
            
            {/* Content with scroll animation */}
            <div 
              ref={contentRef}
              className={`space-y-7 h-[700px] transition-transform duration-1000 ease-in-out relative z-10 p-8
                ${animationDirection === 'up' ? 'animate-scroll-up' : ''}
                ${animationDirection === 'down' ? 'animate-scroll-down' : ''}
              `}
            >
              <div className="space-y-7">
                <p className="uppercase text-sm font-light tracking-wider text-black/80">
                  Our Expertises : {currentExpertise.id.toString().padStart(2, '0')}
                </p>
                
                <div className="space-y-9">
                  <div className="space-y-7">
                    <h2 className="text-5xl font-medium leading-tight">{currentExpertise.title}</h2>
                    
                    <div className="inline-flex items-center border border-black rounded-full px-6 py-4 hover:bg-black hover:text-white transition-colors duration-300">
                      <Link href="/explore" className="text-base font-medium flex items-center gap-1.5">
                        Explore All
                        <span className="ml-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed tracking-wide text-black/80">
                    {currentExpertise.description}
                  </p>
                </div>
              </div>
              
              {/* Cards grid - desktop view */}
              <div className="flex flex-wrap gap-4">
                {currentExpertise.cards.map((card, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-5 hover:border-gray-500 transition-all hover:shadow-sm group cursor-pointer w-fit"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-md">
                      {/* Using placeholder icons - ideally these would be replaced with actual SVGs */}
                      <div className="w-6 h-6 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        <svg className="w-full h-full text-gray-800 group-hover:text-white relative z-10 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="2" />
                          <circle cx="12" cy="12" r="5" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-base font-medium line-clamp-2">{card.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right section - switcher */}
          <div className="w-1/2">
            <div className="w-full h-full">
              <div 
                className="w-full h-[600px] border-none bg-gray-300 shadow-md rounded-xl relative cursor-pointer overflow-hidden"
                onClick={handleExpertiseChange}
                aria-label="Click to change expertise"
              >
                {/* Add subtle pattern to the gray area */}
                <div className="absolute inset-0 opacity-5 bg-pattern"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* MOBILE VIEW - Only shown on small to medium screens */}
        <div className="lg:hidden space-y-10">
          {/* Map through all expertise sections for mobile stacked view */}
          {expertiseData.map((expertise) => (
            <div key={expertise.id} className="w-full">
              {/* Title section with line underneath */}
              <div className="mb-4">
                <h2 className="text-2xl md:text-4xl font-medium leading-tight">{expertise.title}</h2>
                <div className="h-[1px] bg-gray-400 w-full mt-3"></div>
              </div>
              
              {/* Gray rectangular area - non-clickable on mobile */}
              <div className="w-full h-[300px] bg-gray-300 rounded-lg mb-4"></div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-white to-pink-50 rounded-xl">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,233,236,0.4)_0%,rgba(255,255,255,0.8)_90%)] z-0"></div>
                
                {/* Content container for each expertise */}
                <div className="space-y-5 md:space-y-7 relative z-10 p-4 md:p-8">
                  {/* Description text */}
                  <p className="text-base md:text-lg leading-relaxed tracking-wide text-black/80">
                    {expertise.description}
                  </p>
                  
                  {/* Cards grid for each expertise section */}
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {expertise.cards.map((card, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 border border-gray-300 rounded-lg py-1.5 md:py-2 px-3 md:px-5 hover:border-gray-500 transition-all hover:shadow-sm group cursor-pointer w-fit"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-50 rounded-md">
                          {/* Using placeholder icons */}
                          <div className="w-5 h-5 md:w-6 md:h-6 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            <svg className="w-full h-full text-gray-800 group-hover:text-white relative z-10 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="2" width="20" height="20" rx="2" />
                              <circle cx="12" cy="12" r="5" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm md:text-base font-medium line-clamp-2">{card.title}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Individual "Explore All" button for each expertise section */}
                  <div className="pt-4">
                    <div className="flex justify-center w-full border border-black rounded-full px-4 py-3 hover:bg-black hover:text-white transition-colors duration-300">
                      <Link href="/explore" className="text-sm font-medium flex items-center gap-1.5">
                        Explore All
                        <span className="ml-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add the animation styles */}
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-scroll-up {
          animation: scrollUp 0.5s ease-in-out forwards;
        }
        
        .animate-scroll-down {
          animation: scrollDown 0.5s ease-in-out forwards;
        }
        
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 20px 20px;
        }
        
        /* Mobile-specific animations */
        @media (max-width: 768px) {
          .animate-scroll-up {
            animation-duration: 0.3s;
          }
          
          .animate-scroll-down {
            animation-duration: 0.3s;
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection; 