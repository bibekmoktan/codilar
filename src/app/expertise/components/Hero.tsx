export default function Hero() {
  return (
    <section className="relative bg-[#171515] h-screen overflow-hidden flex items-center justify-center">
      {/* Main container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering eCommerce with Tailored solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Codilar delivers end-to-end e-commerce solutions, from digital strategies and content management to platform engineering and data-driven insights, empowering businesses to thrive in the digital landscape.
          </p>
          
          {/* Two buttons side by side with border and arrow icons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Button 1: Talk to Our Experts - filled button */}
            <button className="group bg-white text-black font-medium py-4 px-9 rounded-3xl transition-all duration-300 hover:bg-transparent hover:text-white flex items-center gap-2">
              <span>Talk to Our Experts</span>
              <span className="inline-block">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83329 14.1667L14.1666 5.83334M14.1666 5.83334H6.66663M14.1666 5.83334V13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            
            {/* Button 2: Explore Our Services - outline button */}
            <button className="group bg-transparent text-white font-medium py-4 px-9 rounded-3xl border border-white transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
              <span>Explore Our Services</span>
              <span className="inline-block transform transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83329 14.1667L14.1666 5.83334M14.1666 5.83334H6.66663M14.1666 5.83334V13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Circular background with three rotating circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* First circle - outer (made larger) - starts from top */}
        <div className="w-[1700px] h-[1700px] border border-[#1E1E1E] rounded-full absolute animate-[first-pause-spin_25s_ease-in-out_infinite]">
          
          {/* Icons on first circle - with 70% opacity */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-[first-pause-counter-spin_25s_ease-in-out_infinite] hover:scale-110 transition-transform">
            <div className="bg-[#950505] p-4 rounded-full shadow-lg shadow-[#950505]/20 animate-[float_4s_ease-in-out_infinite] opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-[first-pause-counter-spin_25s_ease-in-out_infinite] hover:scale-110 transition-transform">
            <div className="bg-[#950505] p-4 rounded-full shadow-lg shadow-[#950505]/20 animate-[float_4.5s_ease-in-out_infinite_1s] opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          
        </div>
        
        {/* Second circle - middle (centered items) - starts from top */}
        <div className="w-[1300px] h-[1300px] border border-[#1E1E1E] rounded-full absolute animate-[second-pause-spin-reverse_25s_ease-in-out_infinite]">
          
          {/* Icons on second circle - repositioned for center */}
          <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 animate-[second-pause-counter-spin-reverse_25s_ease-in-out_infinite] hover:scale-110 transition-transform">
            <div className="bg-[#950505] p-4 rounded-full shadow-lg shadow-[#950505]/20 animate-[float_5s_ease-in-out_infinite_0.5s]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-[second-pause-counter-spin-reverse_25s_ease-in-out_infinite] hover:scale-110 transition-transform">
            <div className="bg-[#950505] p-4 rounded-full shadow-lg shadow-[#950505]/20 animate-[float_6s_ease-in-out_infinite_0.7s]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
        </div>
        
        {/* Third circle - inner - starts from top */}
        <div className="w-[950px] h-[950px] border border-[#1E1E1E] rounded-full absolute animate-[inner-pause-spin_25s_ease-in-out_infinite]">
          
          {/* Icons on third circle - reduced to match other circles */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-[inner-pause-counter-spin_25s_ease-in-out_infinite] hover:scale-110 transition-transform">
            <div className="bg-[#950505] p-4 rounded-full shadow-lg shadow-[#950505]/20 animate-[float_3.8s_ease-in-out_infinite_0.4s]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-[inner-pause-counter-spin_25s_ease-in-out_infinite] hover:scale-110 transition-transform">
            <div className="bg-[#950505] p-4 rounded-full shadow-lg shadow-[#950505]/20 animate-[float_4.7s_ease-in-out_infinite_0.9s]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Red glow effect in the background - matching Figma blur effect */}
        <div className="w-[900px] h-[900px] bg-[#950505]/15 rounded-full absolute filter blur-[250px] opacity-70"></div>
        

      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes first-pause-spin {
          0% {
            transform: rotate(0deg);
          }
          33.3% {
            transform: rotate(90deg);
          }
          33.4%, 66.6% {
            transform: rotate(90deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes first-pause-counter-spin {
          0% {
            transform: rotate(0deg);
          }
          33.3% {
            transform: rotate(-120deg);
          }
          33.4%, 66.6% {
            transform: rotate(-120deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes second-pause-spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          33.3% {
            transform: rotate(-120deg);
          }
          33.4%, 66.6% {
            transform: rotate(-120deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes second-pause-counter-spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          33.3% {
            transform: rotate(120deg);
          }
          33.4%, 66.6% {
            transform: rotate(120deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes inner-pause-spin {
          0% {
            transform: rotate(0deg);
          }
          33.3% {
            transform: rotate(120deg);
          }
          33.4%, 66.6% {
            transform: rotate(120deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes inner-pause-counter-spin {
          0% {
            transform: rotate(0deg);
          }
          33.3% {
            transform: rotate(-120deg);
          }
          33.4%, 66.6% {
            transform: rotate(-120deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}