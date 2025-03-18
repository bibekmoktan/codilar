'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContentDataSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Main content container */}
        <div className="w-full">
          {/* Header and description */}
          <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-tight text-black">
              Content and Data solutions for seamless experiences
            </h2>
            <p className="text-base md:text-lg lg:text-l text-black leading-relaxed mt-4">
              Empower your business with centralized data and optimized content management. 
              Codilar leverages DXPs, PIM systems, and advanced analytics to boost customer 
              engagement and drive smarter decisions.
            </p>
          </div>

          {/* Cards container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 - Digital Experience (DXP) */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div 
                className="h-48 md:h-64 bg-cover bg-center relative rounded-xl mb-6" 
                style={{
                  backgroundImage: `url('/images/expertise/dxp_bg.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              {/* <div className="absolute inset-0 bg-black/10"></div> */}
              </div>
              <div className="flex justify-between items-center">
              <div className="">
                <h3 className="text-xl md:text-2xl font-medium mb-1 text-black">Digital Experience (DXP)</h3>
                <p className="text-sm md:text-base text-gray-800 mb-6">
                  Deliver personalized, content-rich digital experiences.
                </p>
              </div>
              <div className="">
              <Link href="/expertise/dxp" className="inline-flex items-center hover:underline text-black">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:border-gray-400 transition-all -rotate-45 opacity-20 
                  hover:opacity-70">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              </div>

            </div>

            {/* Card 2 - Product Information Management (PIM) */}
            <div className="bg-white rounded-xl overflow-hidden ">
              <div 
                className="h-48 md:h-64 bg-cover bg-center relative rounded-xl" 
                style={{
                  backgroundImage: `url('/images/expertise/pim_bg.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
              </div>
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-black">Product Information Management (PIM)</h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Ensure consistency across channels with centralized data.
                  </p>
                </div>
                <div className="p-6 md:p-8 text-2xl">
                  <Link href="/expertise/pim" className="inline-flex items-center hover:underline text-black">
                    <div className="w-12 h-12  flex items-center -rotate-45 justify-center  transition-all opacity-20 hover:opacity-70">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - Customer Data Platform (CDP) */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div 
                className="h-48 md:h-64 bg-cover bg-center relative rounded-xl" 
                style={{
                  backgroundImage: `url('/images/expertise/cdp_bg.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
              </div>
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-black">Customer Data Platform (CDP)</h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Unify customer data to create targeted, impactful campaigns.
                  </p>
                </div>
                <div className="p-6 md:p-8 text-2xl">
                  <Link href="/expertise/cdp" className="inline-flex items-center hover:underline text-black">
                    <div className="w-12 h-12 flex items-center -rotate-45 justify-center  transition-all opacity-20 hover:opacity-70">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 - Analytics */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div 
                className="h-48 md:h-64 bg-cover bg-center relative rounded-xl" 
                style={{
                  backgroundImage: `url('/images/expertise/analytics_bg.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
              </div>
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-black">Analytics</h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Unlock actionable insights to optimize business performance.
                  </p>
                </div>
                <div className="p-6 md:p-8 text-2xl">
                  <Link href="/expertise/analytics" className="inline-flex items-center hover:underline text-black">
                    <div className="w-12 h-12 flex items-center -rotate-45 justify-center  transition-all opacity-20 hover:opacity-70">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Learn More button */}
          <div className="mt-12 md:mt-16 text-center">
            <Link 
              href="/expertise/content-data" 
              className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full text-base font-medium transition-colors hover:bg-black hover:text-white text-black"
            >
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDataSection; 