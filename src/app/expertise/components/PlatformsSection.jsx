'use client';
import Image from 'next/image';
import { useState } from 'react';

const PlatformsSection = () => {
  // Platform card data with title, description, and gradient colors
  const platforms = [
    {
      id: 1,
      title: 'Adobe Commerce (Magento)',
      description: 'Enterprise-grade solutions with endless customization.',
      image: '/images/platforms/adobe-commerce.png',
      color: 'from-transparent to-[#D91D1C]',
    },
    {
      id: 2,
      title: 'Shopify plus',
      description: 'Build fast, scalable, and mobile-first online stores.',
      image: '/images/platforms/shopify-plus.png',
      color: 'from-transparent to-black',
    },
    {
      id: 3,
      title: 'Pimcore',
      description: 'Centralize and streamline product data with open-source PIM/DAM solutions.',
      image: '/images/platforms/pimcore.png',
      color: 'from-transparent to-[#374196]',
    },
    {
      id: 4,
      title: 'Adobe Experience Cloud',
      description: "Deliver personalized customer journeys with Adobe's marketing tools.",
      image: '/images/platforms/adobe-experience.png',
      color: 'from-transparent to-[#F8A948]',
    },
    {
      id: 5,
      title: 'Akinon',
      description: 'Seamless omnichannel commerce with a modern, headless approach.',
      image: '/images/platforms/akinon.png',
      color: 'from-transparent to-[#D8642A]',
    },
    {
      id: 6,
      title: 'Shopify (Headless)',
      description: "Combine Shopify's ease of use with headless flexibility.",
      image: '/images/platforms/shopify-headless.png',
      color: 'from-transparent to-[#084700]',
    },
  ];

  // State for card hover effects
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-black text-center text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium mb-14 max-w-4xl mx-auto leading-tight">
          Powering eCommerce with leading Platforms
        </h2>

        {/* Platform cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer"
              onMouseEnter={() => setHoveredCard(platform.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card background image */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="object-cover"
                  priority={platform.id <= 3}
                />
              </div>

              {/* Gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${platform.color} opacity-70 transition-opacity duration-300 ${
                  hoveredCard === platform.id ? 'opacity-90' : 'opacity-70'
                }`}
              />

              {/* Arrow icon (subtle in background) */}
              <div className="absolute top-4 right-4 opacity-10">
                <Image
                  src="/images/platforms/arrow_outward.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              </div>

              {/* Card content */}
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  {platform.title}
                </h3>
                <p className="text-gray-100 text-base opacity-85">
                  {platform.description}
                </p>
              </div>

              {/* Hover effect - subtle scale */}
              <div 
                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${
                  hoveredCard === platform.id ? 'opacity-10' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Explore platforms button */}
        <div className="mt-12 flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full"
          >
            <span>Explore Platforms</span>
            <Image
              src="/images/platforms/arrow_outward.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="opacity-80 invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection; 