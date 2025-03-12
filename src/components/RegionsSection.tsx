import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const RegionsSection = () => {
  const regions = [
    { name: 'UAE', link: '#' },
    { name: 'Singapore', link: '#' },
    { name: 'India', link: '#' },
    { name: 'Oman', link: '#' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-white uppercase text-base font-normal tracking-wider">Regions</h3>
      <div className="flex flex-wrap gap-5">
        {regions.map((region, index) => (
          <React.Fragment key={region.name}>
            <a 
              href={region.link} 
              className="text-white/90 hover:text-white text-lg font-light flex items-center gap-1 transition-colors"
            >
              {region.name}
              {index === 0 && (
                <span className="ml-1">
                  <ArrowUpRight size={16} className="text-white/10" />
                </span>
              )}
            </a>
            {index < regions.length - 1 && (
              <span className="text-white/90 text-lg">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RegionsSection; 