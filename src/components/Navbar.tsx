'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Digital Commerce');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown menu
  const toggleExpertiseDropdown = (): void => {
    setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen);
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExpertiseDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle tab change
  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <nav className={`relative z-30 px-4 md:px-8 lg:px-10 py-3 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className={`mx-auto w-fit bg-gradient-to-br from-[#443D3D]/60 to-[#2D2D2D]/60 backdrop-blur-md border border-[#A3A3A3]/20 rounded-xl transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
          <div className="flex items-center justify-center px-6 md:px-9 py-3 gap-60">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="text-white font-bold text-2xl">
                  {/* Replace with your logo or company name */}
                  CODILAR
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-9">
              <button 
                className={`text-white font-medium text-base hover:opacity-80 transition ${isExpertiseDropdownOpen ? 'opacity-80' : ''}`}
                onClick={toggleExpertiseDropdown}
              >
                Expertise
              </button>
              <Link href="/works" className="text-white font-medium text-base hover:opacity-80 transition">
                Works
              </Link>
              <Link href="/innovation-lab" className="text-white font-medium text-base hover:opacity-80 transition">
                Innovation Lab
              </Link>
              <Link href="/company" className="text-white font-medium text-base hover:opacity-80 transition">
                Company
              </Link>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className="hidden md:flex items-center border border-white text-white rounded-full px-6 py-3 hover:bg-white hover:text-black transition duration-300">
              <span className="font-medium text-base">Lets Connect</span>
              <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 17.5l11-11M17.5 17.5v-11h-11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-white p-2"
                onClick={toggleExpertiseDropdown} 
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Expertise Dropdown */}
      {isExpertiseDropdownOpen && (
        <div 
          ref={dropdownRef}
          className="absolute z-20 top-[70px] left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl dropdown-animation"
        >
          <div className="bg-gradient-to-br from-[#443D3D]/70 to-[#2D2D2D]/70 backdrop-blur-[42px] border border-[#A3A3A3]/25 rounded-xl p-6">
            {/* Tabs */}
            <div className="flex flex-wrap mb-4 gap-4 md:gap-9">
              <button 
                className={`text-base font-medium ${activeTab === 'Digital Commerce' ? 'text-white' : 'text-white/50'}`}
                onClick={() => handleTabChange('Digital Commerce')}
              >
                Digital Commerce
              </button>
              <button 
                className={`text-base font-medium ${activeTab === 'Content & Data' ? 'text-white' : 'text-white/50'}`}
                onClick={() => handleTabChange('Content & Data')}
              >
                Content & Data
              </button>
              <button 
                className={`text-base font-medium ${activeTab === 'Platforms' ? 'text-white' : 'text-white/50'}`}
                onClick={() => handleTabChange('Platforms')}
              >
                Platforms
              </button>
              <button 
                className={`text-base font-medium ${activeTab === 'Services' ? 'text-white' : 'text-white/50'}`}
                onClick={() => handleTabChange('Services')}
              >
                Services
              </button>
            </div>

            {/* Separator Line */}
            <div className="h-px bg-[#A3A3A3]/50 mb-6"></div>

            {/* Tab Content */}
            {activeTab === 'Digital Commerce' && (
              <>
                {/* Dropdown Content */}
                <div className="flex flex-wrap gap-9">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-9 w-full md:w-auto">
                    <Link href="/expertise/headless-commerce" className="text-white text-base hover:underline">
                      Headless Commerce
                    </Link>
                    <Link href="/expertise/composable-commerce" className="text-white text-base hover:underline">
                      Composable Commerce
                    </Link>
                    <Link href="/expertise/b2c-omnichannel" className="text-white text-base hover:underline">
                      B2C & Omnichannel
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-9 w-full md:w-auto">
                    <Link href="/expertise/d2c" className="text-white text-base hover:underline">
                      D2C
                    </Link>
                    <Link href="/expertise/b2b-commerce" className="text-white text-base hover:underline">
                      B2B Commerce
                    </Link>
                    <Link href="/expertise/mobile-commerce" className="text-white text-base hover:underline">
                      Mobile Commerce
                    </Link>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col w-full md:w-auto">
                    <Link href="/expertise/oms" className="text-white text-base hover:underline">
                      Order Management System (OMS)
                    </Link>
                  </div>
                </div>

                {/* View All Button */}
                <div className="mt-6 flex justify-end">
                  <Link href="/expertise" className="flex items-center border border-white rounded-full px-9 py-4 text-white hover:bg-white hover:text-black transition duration-300">
                    <span className="font-medium text-base">View All</span>
                    <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 17.5l11-11M17.5 17.5v-11h-11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </>
            )}

            {/* Other tabs content would go here, similar structure */}
            {activeTab !== 'Digital Commerce' && (
              <div className="text-white text-center py-10">
                Content for {activeTab} tab would go here.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 