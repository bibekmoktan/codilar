'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Arrow icon component for the upward trend indicators
const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14L12 9L17 14" stroke="#19BC37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Cart icon component
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#19BC37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#19BC37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#19BC37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow outward icon for the "View Case Study" button
const ArrowOutwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.83325 14.1667L14.1666 5.83337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83325 5.83337H14.1666V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Award card component
const AwardCard = ({ 
  logo, 
  title, 
  year, 
  bgColor,
  logoBackground
}) => {
  return (
    <div className={`flex flex-col rounded-2xl overflow-hidden ${bgColor} text-white p-8 h-[352px] relative transition-all duration-300 hover:shadow-lg`}>
      {/* Logo */}
      <div className={`w-16 h-16 ${logoBackground} rounded-xl flex items-center justify-center mb-24`}>
        {logo}
      </div>
      
      {/* Content */}
      <div className="mt-auto">
        <h3 className="text-2xl font-medium leading-tight mb-6">{title}</h3>
        <p className="text-lg font-light">{year}</p>
      </div>
    </div>
  );
};

// Case study card component
const CaseStudyCard = ({ 
  image,
  title,
  project,
  industry,
  platform,
  stats,
  className,
  index,
  isLast,
  totalCards
}) => {
  // Calculate scale and offset for downward stacking effect
  const baseScale = 0.92;
  const scaleIncrement = 0.02;
  const currentScale = baseScale + ((totalCards - index - 1) * scaleIncrement);
  
  // Calculate vertical offset for downward stacking
  const baseOffset = 80; // Increased offset for more spacing between cards
  let currentOffset = index * baseOffset;

  return (
    <div 
      className={`
        absolute left-1/2
        overflow-hidden rounded-[24px] group
        transform transition-all duration-500 ease-out
        bg-white
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        ${className}
      `}
      style={{
        top: '100px', // Start after the heading
        marginTop: `${currentOffset}px`,
        zIndex: totalCards - index,
        transform: `translateX(-50%) scale(${currentScale})`,
        width: '1080px',
        transformOrigin: 'center center',
        opacity: 0.95 + ((totalCards - index - 1) * 0.01),
      }}
    >
      <div className="flex flex-row h-[320px]">
        {/* Left side - Image */}
        <div className="w-[45%] relative overflow-hidden rounded-l-[24px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority={index === 0} // Priority for first card now
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
        </div>

        {/* Right side - Content */}
        <div className="w-[55%] p-8 flex flex-col justify-between relative bg-white">
          {/* Title and Info */}
          <div>
            <h3 className="text-2xl font-medium text-black leading-tight mb-4">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-medium">{project}</span>
              <span className="text-gray-300">|</span>
              <span className="font-medium">{industry}</span>
              <span className="text-gray-300">|</span>
              <span className="font-medium">{platform}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[38px] leading-none text-[#19BC37] font-medium">
                    {stat.value}
                  </span>
                  {stat.icon === 'arrow' ? <ArrowUpIcon /> : <CartIcon />}
                </div>
                <p className="text-sm text-gray-600 font-medium">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* View Case Study Button */}
          <div className="absolute bottom-8 right-8">
            <button className="bg-black text-white rounded-full w-[100px] h-[100px] flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-300">
              <span className="text-sm font-medium">View</span>
              <span className="text-sm font-medium">Case Study</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Magento Logo
const MagentoLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0355 0L3 4.67273V22.3636L6.21421 23.6509V6.96L16.0355 3.45091L25.8213 6.96V23.6509L29.0355 22.3636V4.67273L16.0355 0Z" fill="white"/>
    <path d="M16.0354 32L22.6071 29.4545V9.45455L19.3929 10.7418V27.3745L16.0354 28.6255L12.6425 27.3745V10.7418L9.42828 9.45455V29.4545L16.0354 32Z" fill="white"/>
  </svg>
);

// E-Commerce Logo
const EcommerceLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M10 13H22V21H10V13Z" stroke="white" strokeWidth="2"/>
    <path d="M10 9H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 17H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Adobe Logo
const AdobeLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.2 6H26V26L19.2 6Z" fill="white"/>
    <path d="M12.8 6H6V26L12.8 6Z" fill="white"/>
    <path d="M16 15.4L20.4 26H17.2L15.6 22.2H11.8L16 15.4Z" fill="white"/>
  </svg>
);

// Shopify Logo
const ShopifyLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.9 7.36C20.88 7.28 20.82 7.22 20.76 7.2C20.7 7.18 19.44 7 19.44 7C19.44 7 18.12 5.72 18 5.6C17.88 5.48 17.68 5.52 17.6 5.54C17.6 5.54 17.14 5.68 16.32 5.94C16.24 5.64 16.12 5.32 15.96 5C15.46 4 14.66 3.5 13.74 3.5C13.7 3.5 13.66 3.5 13.62 3.5C13.48 3.28 13.3 3.06 13.1 2.88C12.38 2.2 11.5 1.92 10.56 2.06C9.12 2.28 7.8 3.46 6.84 5.32C6.18 6.6 5.68 8.14 5.5 9.32C3.96 9.8 2.9 10.12 2.88 10.14C2.14 10.36 2.12 10.38 2.04 11.08C1.96 11.62 0 28.5 0 28.5L21.08 31.5L28 29.36C28 29.36 20.92 7.44 20.9 7.36ZM15.62 6.32C14.94 6.52 14.18 6.76 13.36 7.02C13.36 6.14 13.2 5 12.72 4.1C14.04 4.24 14.98 5.44 15.62 6.32ZM12.46 4.38C12.9 5.2 13.08 6.5 13.08 7.24C12.14 7.54 11.12 7.86 10.08 8.18C10.52 6.44 11.42 4.9 12.46 4.38ZM10.32 2.96C10.84 2.9 11.3 3.02 11.72 3.42C11.94 3.62 12.12 3.88 12.28 4.16C11.04 4.82 10.02 6.5 9.52 8.48C8.64 8.76 7.78 9.02 6.96 9.28C7.38 7.36 8.64 3.3 10.32 2.96Z" fill="white"/>
    <path d="M20.76 7.2C20.7 7.18 19.44 7 19.44 7C19.44 7 18.12 5.72 18 5.6C17.94 5.56 17.88 5.54 17.82 5.54L17.04 29.06L28 29.36C28 29.36 20.92 7.44 20.9 7.36C20.88 7.28 20.82 7.22 20.76 7.2Z" fill="white" fillOpacity="0.6"/>
    <path d="M13.76 12.52L12.78 15.8C12.78 15.8 11.86 15.38 10.76 15.38C9.12 15.38 9.04 16.34 9.04 16.58C9.04 18.12 13.52 18.78 13.52 22.32C13.52 25 11.7 26.74 9.4 26.74C6.58 26.74 5.2 25.2 5.2 25.2L5.86 22.82C5.86 22.82 7.28 23.94 8.46 23.94C9.22 23.94 9.56 23.34 9.56 22.86C9.56 20.92 5.82 20.7 5.82 17.42C5.82 14.7 7.9 12.08 11.68 12.08C13.28 12.08 13.76 12.52 13.76 12.52Z" fill="white"/>
  </svg>
);

// Main component that includes both Awards and Case Studies
const CaseStudies = () => {
  // Awards data
  const awards = [
    {
      id: 1,
      logo: <MagentoLogo />,
      title: 'Recognized as a trusted digital transformation partner',
      year: '2020',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
      logoBackground: 'bg-orange-100'
    },
    {
      id: 2,
      logo: <EcommerceLogo />,
      title: 'Top E-Commerce Development Company',
      year: '2023',
      bgColor: 'bg-gradient-to-br from-purple-400 to-violet-700',
      logoBackground: 'bg-purple-100'
    },
    {
      id: 3,
      logo: <AdobeLogo />,
      title: 'Recognized as a trusted digital transformation partner',
      year: '2020',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-700',
      logoBackground: 'bg-red-100'
    },
    {
      id: 4,
      logo: <ShopifyLogo />,
      title: 'Shopify Plus Partner Certification',
      year: '2024',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-amber-700',
      logoBackground: 'bg-yellow-100'
    }
  ];

  // Case studies data
  const caseStudies = [
    {
      image: '/images/case-study-5.jpg',
      title: 'Unlocking New Opportunities with Shopify for a Health Brand',
      project: 'Project 5',
      industry: 'Healthcare & Wellness',
      platform: 'Shopify',
      stats: [
        {
          value: '25%',
          icon: 'arrow',
          description: 'Increase in mobile transactions'
        },
        {
          value: '15%',
          icon: 'cart',
          description: 'higher average order value'
        }
      ]
    },
    {
      image: '/images/case-study-2.jpg',
      title: 'Revolutionizing Omnichannel Retail for a Fashion Brand',
      project: 'Project 2',
      industry: 'Fashion',
      platform: 'Akinon',
      stats: [
        {
          value: '50%',
          icon: 'arrow',
          description: 'reduction in cart abandonment rates'
        },
        {
          value: '25%',
          icon: 'cart',
          description: 'growth in repeat purchases'
        }
      ]
    },
    {
      image: '/images/case-study-3.jpg',
      title: 'Boosting Engagement for a Leading Education Provider',
      project: 'Project 3',
      industry: 'Education',
      platform: 'AEM',
      stats: [
        {
          value: '50%',
          icon: 'arrow',
          description: 'Increase in web engagement'
        },
        {
          value: '25%',
          icon: 'cart',
          description: 'Boost in student inquiries'
        }
      ]
    },
    {
      image: '/images/case-study-4.jpg',
      title: 'Enhancing Product Information Management for a Retailer',
      project: 'Project 4',
      industry: 'Toys & Games',
      platform: 'Pimcore',
      stats: [
        {
          value: '40%',
          icon: 'arrow',
          description: 'faster product updates'
        },
        {
          value: '30%',
          icon: 'cart',
          description: 'Faster product launches'
        }
      ]
    },
    {
      image: '/images/case-study-1.jpg',
      title: 'Transforming E-commerce for a Global Retail Giant',
      project: 'Project 1',
      industry: 'Retail',
      platform: 'Adobe Commerce',
      stats: [
        {
          value: '35%',
          icon: 'arrow',
          description: 'In online sales within six months'
        },
        {
          value: '25%',
          icon: 'cart',
          description: 'Improved performance, <2s load time'
        }
      ]
    }
  ];

  return (
    <>
      {/* Case Studies Section */}
      <section className="relative bg-[#150007] text-white py-32 overflow-hidden">
        {/* Background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A0912] via-[#1A0108] to-[#150007] opacity-90" />
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          {/* Case Studies Header */}
          <div className="flex flex-col items-center text-center mb-24">
            <span className="uppercase text-sm tracking-wider mb-6 text-gray-400">CASE STUDIES</span>
            <h2 className="text-5xl md:text-6xl font-medium leading-tight max-w-3xl mx-auto">
              Driving growth through Innovation
            </h2>
          </div>
          
          {/* Case Studies Stack */}
          <div className="relative flex flex-col items-center">
            <div className="w-full h-[1000px] relative">
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={index}
                  {...study}
                  index={index}
                  isLast={index === caseStudies.length - 1}
                  totalCards={caseStudies.length}
                />
              ))}
            </div>
          </div>
          
          {/* Explore All Case Studies button */}
          <div className="flex justify-center mt-32">
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-base font-medium border border-white/20 rounded-full px-10 py-5 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Explore All Case Studies
              <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Awards Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="uppercase text-sm tracking-wider mb-6">AWARDS & RECOGNITIONS</span>
            <div className="flex items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                Step into our
              </h2>
              <div className="relative w-40 h-40 flex items-center justify-center">
                <Image
                  src="/images/trophy.png" 
                  alt="Trophy"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                Hall of Fame
              </h2>
            </div>
          </div>
          
          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <AwardCard
                key={award.id}
                logo={award.logo}
                title={award.title}
                year={award.year}
                bgColor={award.bgColor}
                logoBackground={award.logoBackground}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies; 