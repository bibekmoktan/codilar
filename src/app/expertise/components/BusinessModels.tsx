'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Card interface to type the business model cards
interface BusinessModelCard {
  id: number;
  title: string;
  description: string;
  icons: string[];
}

const BusinessModels = () => {
  // Data for business model cards
  const businessModels: BusinessModelCard[] = [
    {
      id: 1,
      title: 'Headless Commerce',
      description: 'Enable unmatched flexibility with API-first architecture.',
      icons: ['headless_vector1.svg', 'headless_vector2.svg']
    },
    {
      id: 2,
      title: 'Composable Commerce',
      description: 'Leverage modular solutions to adapt to evolving business needs.',
      icons: ['composable_vector.svg']
    },
    {
      id: 3,
      title: 'B2C & Omnichannel',
      description: 'Unify online and offline channels for consistent customer journeys.',
      icons: ['omnichannel_vector1.svg', 'omnichannel_vector2.svg', 'omnichannel_vector3.svg']
    },
    {
      id: 4,
      title: 'D2C',
      description: 'Build direct connections with customers through personalized experiences.',
      icons: ['d2c_vector1.svg', 'd2c_vector2.svg']
    },
    {
      id: 5,
      title: 'B2B Commerce',
      description: 'Optimize bulk orders and streamline operations with tailored portals.',
      icons: ['b2b_vector.svg']
    },
    {
      id: 6,
      title: 'Mobile Commerce',
      description: 'Deliver mobile-first experiences to meet customer expectations.',
      icons: ['mobile_vector.svg', 'mobile_vector2.svg']
    },
    {
      id: 7,
      title: 'Order Management System (OMS)',
      description: 'Simplify inventory and order management for faster fulfillment.',
      icons: ['oms_vector1.svg', 'oms_vector2.svg']
    }
  ];

  return (
    <section className="bg-[#1D1D1D] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main flex container for horizontal layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Header section - Left side */}
          <div className="lg:w-1/2 xl:w-2/5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Digital commerce solutions for every Business model
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Codilar excels in B2C, D2C, B2B, and omnichannel commerce, leveraging headless and composable solutions to create seamless, scalable, and engaging customer experiences.
            </p>
            <Link href="/solutions" className="inline-flex items-center border border-white rounded-full px-8 py-3 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
              <span className="font-medium">Learn More</span>
              <Image 
                src="/images/arrow_outward.svg" 
                alt="Arrow" 
                width={20} 
                height={20} 
                className="ml-2"
              />
            </Link>
          </div>
          
          {/* Cards section - Right side */}
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="space-y-6">
              {businessModels.map((model) => (
                <div key={model.id} className="border-t border-gray-700 pt-6 group">
                  <div className="flex items-start justify-between">
                    {/* Icon and Content */}
                    <div className="flex items-start flex-1">
                      {/* Icon */}
                      <div className="w-14 h-14 flex items-center justify-center mr-6">
                        <div className="relative h-10 w-10">
                          {model.icons.map((icon, idx) => (
                            <Image
                              key={idx}
                              src={`/images/${icon}`}
                              alt=""
                              width={40}
                              height={40}
                              className="object-contain"
                              style={{ 
                                position: idx > 0 ? 'absolute' : 'relative',
                                top: 0,
                                left: 0
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-medium mb-2">{model.title}</h3>
                        <p className="text-gray-300">{model.description}</p>
                      </div>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5H19V12" stroke="white" strokeWidth="2" />
                        <path d="M19 5L5 19" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModels; 