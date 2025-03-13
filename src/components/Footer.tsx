import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Footer links organized by sections
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { name: 'Digital Commerce Solutions', href: '#' },
        { name: 'Product Information Management (PIM)', href: '#' },
        { name: 'Headless Commerce Development', href: '#' },
        { name: 'Adobe Analytics', href: '#' },
      ]
    },
    {
      title: 'Platforms',
      links: [
        { name: 'Shopify Development Services', href: '#' },
        { name: 'Adobe Commerce (Magento) Solutions', href: '#' },
        { name: 'Pimcore Integration', href: '#' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'E-commerce Strategy Consulting', href: '#' },
        { name: 'UI/UX Design Services', href: '#' },
        { name: 'Conversion Rate Optimization (CRO)', href: '#' },
      ]
    },
    {
      title: 'Use Cases',
      links: [
        { name: 'Omnichannel Retail Strategies', href: '#' },
        { name: 'Shopify PID2C E-commerce Solutionsus Expert', href: '#' },
        { name: 'B2B Commerce Portals', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'E-commerce Optimization Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Tech Insights', href: '#' },
        { name: 'Free Guides & Downloads', href: '#' },
      ]
    }
  ];

  // Regions data
  const regions = ['UAE', 'Singapore', 'India', 'Oman'];

  return (
    <>
    <div className="py-12 bg-gradient-to-b from-[#171515] via-[#1a1818] to-[#2a1818] text-white w-full">
    <div className="flex flex-col lg:flex-row gap-12 py-12 container">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl mb-4">CONTACT US</h2>
            <h1 className="text-5xl font-light mb-4">Let's do something<br />amazing together</h1>
            <p className="text-gray-400 mb-16 mt-8">We look forward to hearing from you.</p>
            
            <div className="mt-8">
              <h3 className="text-lg mt-32 mb-4">REGIONS</h3>
              <div className="flex gap-4 mb-0">
                {regions.map((region, index) => (
                  <React.Fragment key={region}>
                    <span className="text-gray-400 hover:text-white cursor-pointer">{region}</span>
                    {index < regions.length - 1 && <span className="text-gray-400">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Hashid"
                  className="bg-transparent border border-gray-700 rounded-md p-3"
                />
                <input
                  type="text"
                  placeholder="Mobile"
                  className="bg-transparent border border-gray-700 rounded-md p-3"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-gray-700 rounded-md p-3"
              />
              <select className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-400">
                <option value="">General</option>
                {/* Add more options as needed */}
              </select>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-transparent border border-gray-700 rounded-md p-3"
              />
              <button className="w-full bg-transparent border border-white rounded-full p-3 flex items-center justify-center gap-2 hover:bg-white hover:text -black transition-colors">
                Let's Connect
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
    </div>

        <footer className="bg-[#171515] text-white">
      {/* Contact Section */}
      <div className="container py-12">
        {/* Combined Footer Links and Newsletter Section with 9:3 ratio */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Footer Links Section - 9 columns (3/4) */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 text-white">
              {footerLinks.map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <h3 className="text-lg font-normal">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-sm font-light text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter and ISO Section - 3 columns (1/4) */}
          <div className="w-full lg:w-1/4">
            {/* Newsletter Section */}
            <div className="mb-8">
              <h3 className="text-xl font-light mb-4">
                Stay Ahead in E-commerce Trends. Subscribe to Our
                <span className="text-orange-500"> Newsletter!</span>
              </h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 mt-4 "
                />
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-full flex items-center justify-center gap-2 mt-4 mb-16">
                  Subscribe Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* ISO Certifications - Adjusted to match design */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image src="/images/Group 549.png" alt="ISO 9001" fill className="object-contain" />
                </div>
                <div className="text-sm text-gray-400">
                  <p>International Security Organisation</p>
                  <p className="text-white">9001 Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image src="/images/Group 549.png" alt="ISO 27001" fill className="object-contain" />
                </div>
                <div className="text-sm text-gray-400">
                  <p>International Security Organisation</p>
                  <p className="text-white">27001 Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <Link href="#" className="opacity-50 hover:opacity-100">
                <div className="relative w-6 h-6">
                  <Image src="/images/Social Icons.png" alt="LinkedIn" fill className="object-contain" />
                </div>
              </Link>
              <Link href="#" className="opacity-50 hover:opacity-100">
                <div className="relative w-6 h-6">
                  <Image src="/images/Social Icons (1).png" alt="Twitter" fill className="object-contain" />
                </div>
              </Link>
              <Link href="#" className="opacity-50 hover:opacity-100">
                <div className="relative w-6 h-6">
                  <Image src="/images/Social Icons (2).png" alt="YouTube" fill className="object-contain" />
                </div>
              </Link>
              <Link href="#" className="opacity-50 hover:opacity-100">
                <div className="relative w-6 h-6">
                  <Image src="/images/Social Icons (3).png" alt="Facebook" fill className="object-contain" />
                </div>
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:text-white">Terms & Conditions©</Link>
              <span className="mx-2">|</span>
              <span>Copyright Codilar 2024. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;