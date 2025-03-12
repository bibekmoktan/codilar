import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="w-full max-w-[601px] flex flex-col gap-9">
      <form className="w-full flex flex-col gap-9">
        <div className="flex flex-col md:flex-row justify-between gap-9 w-full">
          {/* Name Field */}
          <div className="flex-1">
            <div className="input-field border-white">
              <input
                type="text"
                placeholder="Hashid"
                className="bg-transparent w-full text-white focus:outline-none"
              />
            </div>
          </div>
          
          {/* Mobile Field */}
          <div className="flex-1">
            <div className="input-field">
              <input
                type="text"
                placeholder="Mobile"
                className="bg-transparent w-full focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-9 w-full">
          {/* Email Field */}
          <div className="flex-1">
            <div className="input-field">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full focus:outline-none"
              />
            </div>
          </div>
          
          {/* Inquiry Type Field */}
          <div className="flex-1">
            <div className="input-field relative">
              <select 
                className="appearance-none bg-transparent w-full focus:outline-none text-[#898989]"
                defaultValue=""
              >
                <option value="" disabled>General</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#A8A8A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Message Field */}
        <div className="w-full">
          <div className="input-field">
            <textarea
              placeholder="Message"
              className="bg-transparent w-full h-32 resize-none focus:outline-none"
            ></textarea>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="btn-primary">
            <span>Let's Connect</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 