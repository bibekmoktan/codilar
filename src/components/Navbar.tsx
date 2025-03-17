'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Digital Commerce');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Toggle expertise dropdown menu
  const toggleExpertiseDropdown = (): void => {
    setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen);
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close expertise dropdown if it's open
    if (isExpertiseDropdownOpen) {
      setIsExpertiseDropdownOpen(false);
    }
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExpertiseDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
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
    <>
      {/* Main Navbar */}
      <nav className={`relative z-30 w-full py-3 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="mx-auto px-2 sm:px-4 md:px-6 max-w-[1320px]">
          <div className={`bg-gradient-to-br from-[#443D3D]/60 to-[#2D2D2D]/60 backdrop-blur-md border border-[#A3A3A3]/20 rounded-xl transition-all duration-300 md:max-w-fit md:mx-auto ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className="flex items-center justify-between px-4 md:px-9 py-3 md:gap-10 lg:gap-20 xl:gap-60">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <div className="text-white font-bold text-2xl">
                    {/* Replace with your logo or company name */}
                    CODILAR
                  </div>
                </Link>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center gap-5 lg:gap-9">
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

              {/* CTA Button - Desktop */}
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
                  onClick={toggleMobileMenu} 
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    // X icon for close
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    // Hamburger icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed z-20 top-[70px] inset-x-0 w-full bg-gradient-to-br from-[#443D3D]/90 to-[#2D2D2D]/90 backdrop-blur-md border-t border-[#A3A3A3]/20 dropdown-animation md:hidden"
        >
          <div className="mx-auto px-4 max-w-[1320px]">
            <div className="flex flex-col p-5 space-y-4">
              <button 
                className="text-white font-medium text-base py-2 text-left"
                onClick={toggleExpertiseDropdown}
              >
                Expertise
              </button>
              <Link href="/works" className="text-white font-medium text-base py-2">
                Works
              </Link>
              <Link href="/innovation-lab" className="text-white font-medium text-base py-2">
                Innovation Lab
              </Link>
              <Link href="/company" className="text-white font-medium text-base py-2">
                Company
              </Link>
              
              {/* Mobile CTA Button */}
              <Link href="/contact" className="flex items-center justify-center border border-white text-white rounded-full px-6 py-3 mt-4 hover:bg-white hover:text-black transition duration-300">
                <span className="font-medium text-base">Lets Connect</span>
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 17.5l11-11M17.5 17.5v-11h-11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Expertise Dropdown */}
      {isExpertiseDropdownOpen && (
        <div 
          ref={dropdownRef}
          className="absolute z-20 top-[70px] inset-x-0 w-full md:left-1/2 md:transform md:-translate-x-1/2 md:w-11/12 md:max-w-4xl dropdown-animation"
        >
          <div className="mx-auto px-2 md:px-0 max-w-[1320px] md:max-w-4xl">
            <div className="bg-gradient-to-br from-[#443D3D]/70 to-[#2D2D2D]/70 backdrop-blur-[42px] border border-[#A3A3A3]/25 rounded-xl p-4 md:p-6">
              {/* Tabs */}
              <div className="flex mb-4 gap-4 md:gap-9 overflow-x-auto scrollbar-hide pb-2">
                <button 
                  className={`text-base font-medium whitespace-nowrap ${activeTab === 'Digital Commerce' ? 'text-white' : 'text-white/50'}`}
                  onClick={() => handleTabChange('Digital Commerce')}
                >
                  Digital Commerce
                </button>
                <button 
                  className={`text-base font-medium whitespace-nowrap ${activeTab === 'Content & Data' ? 'text-white' : 'text-white/50'}`}
                  onClick={() => handleTabChange('Content & Data')}
                >
                  Content & Data
                </button>
                <button 
                  className={`text-base font-medium whitespace-nowrap ${activeTab === 'Platforms' ? 'text-white' : 'text-white/50'}`}
                  onClick={() => handleTabChange('Platforms')}
                >
                  Platforms
                </button>
                <button 
                  className={`text-base font-medium whitespace-nowrap ${activeTab === 'Services' ? 'text-white' : 'text-white/50'}`}
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-9">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-5 md:gap-9">
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
                    <div className="flex flex-col gap-5 md:gap-9">
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
                    <div className="flex flex-col">
                      <Link href="/expertise/oms" className="text-white text-base hover:underline">
                        Order Management System (OMS)
                      </Link>
                    </div>
                  </div>

                  {/* View All Button */}
                  <div className="mt-6 flex justify-end">
                    <Link href="/expertise" className="flex items-center border border-white rounded-full px-5 md:px-9 py-3 md:py-4 text-white hover:bg-white hover:text-black transition duration-300">
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
        </div>
      )}

      {/* Add some CSS for animations and scrollbar hiding */}
      <style jsx>{`
        .dropdown-animation {
          animation: fadeIn 0.2s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Navbar; 