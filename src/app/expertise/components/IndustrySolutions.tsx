import React from 'react';
import Image from 'next/image';

// Industry card component with icon and name
const IndustryCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="border-[1px] border-gray-600 relative bg-[#222222] rounded-xl p-8 flex items-center space-x-4 hover:bg-[#2a2a2a] transition-all cursor-pointer">
      {/* Icon with orange color */}
      <div className="text-[#ff5722]">
        <Image src={icon} alt={name} width={60} height={60} />
      </div>
      
      {/* Industry name */}
      <h3 className="text-white text-xl font-medium">{name}</h3>
    </div>
  );
};

const IndustrySolutions = () => {
  // Array of industries with their icons and names
  const industries = [
    { name: 'Retail', icon: '/icons/retail.png' },
    { name: 'Fashion', icon: '/icons/fashion.png' },
    { name: 'Healthcare', icon: '/icons/healthcare.png' },
    { name: 'Education', icon: '/icons/education.png' },
    { name: 'FMCG', icon: '/icons/fmcg.png' },
    { name: 'Technology', icon: '/icons/technology.png' },
  ];

  return (
    <section className="bg-[#222222] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left section with heading */}
          <div className="md:w-1/3">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Tailored Solutions for Every Industry
            </h2>
          </div>
          
          {/* Right section with description */}
          <div className="md:w-1/2">
            <p className="text-white text-lg">
              Codilar partners with leading e-commerce platforms like Adobe Commerce 
              and Shopify to build robust, scalable online stores with seamless 
              implementation and optimization.
            </p>
          </div>
        </div>
        
        {/* Industry cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              name={industry.name} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions; 