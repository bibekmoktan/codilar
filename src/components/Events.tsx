'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Event type definition
type EventType = {
  id: number;
  title: string;
  description: string;
  color: string; // Using color instead of image
};

// Sample event data
const events: EventType[] = [
  {
    id: 1,
    title: 'Driving innovation through thought Leadership',
    description: "Codilar hosts and participates in global e-commerce events to share insights, explore trends, and drive innovation. From expert panel discussions to hands-on workshops, we're at the forefront of industry thought leadership.",
    color: '#3B82F6', // Blue
  },
  {
    id: 2,
    title: 'Building the future of e-commerce',
    description: "Join us at industry-leading conferences where we showcase the latest in e-commerce technology and solutions.",
    color: '#10B981', // Green
  },
  {
    id: 3,
    title: 'Connecting businesses with innovative solutions',
    description: "Our events bring together experts and businesses to explore cutting-edge solutions for modern commerce challenges.",
    color: '#F59E0B', // Amber
  },
  {
    id: 4,
    title: 'Shaping the digital commerce landscape',
    description: "Through our events and workshops, we're helping shape the future of how businesses connect with customers online.",
    color: '#EF4444', // Red
  },
];
const eventsImages = [
  '/images/case-study-1.jpg',
  '/images/case-study-2.jpg',
  '/images/case-study-3.jpg',
  '/images/case-study-4.jpg',
  '/images/case-study-5.jpg',
];

// Upcoming event data
const upcomingEvent = {
  title: "Let's Connect at Expand North Star 2024",
  image: '/images/case-study-5.jpg',
};

const Events = () => {
  // Fixed current slide to the first event for the left section
  const fixedEvent = events[0];
  
  // Refs for infinite scrolling
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  
  // State for animation control
  const [isPaused, setIsPaused] = useState(false);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  
  // Duplicate images for infinite scrolling - add more copies to ensure continuous scrolling
  const allImages = [...eventsImages, ...eventsImages, ...eventsImages, ...eventsImages, ...eventsImages];

  // Animation function that moves the images continuously
  const animate = () => {
    if (innerRef.current && containerRef.current && !isPaused) {
      // Total width of the container
      const containerWidth = containerRef.current.clientWidth;
      
      // Single image width (all images have the same width) + margin
      const margin = 40; // 40px margin between images
      const imageWidth = containerWidth + margin;
      
      // Increment position for leftward movement
      positionRef.current -= 1.5; // Speed: 1.5px per frame
      
      // Calculate current image index - loop through original images length
      const currentPosition = Math.abs(positionRef.current);
      const currentIndex = Math.floor(currentPosition / imageWidth) % eventsImages.length;
      
      // Update active color when index changes
      if (currentIndex !== activeColorIndex) {
        setActiveColorIndex(currentIndex);
      }
      
      // Apply the transform - continuous movement without resetting
      innerRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
    
    // Continue animation loop
    animationRef.current = requestAnimationFrame(animate);
  };

  // Start animation on mount
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function to cancel animation
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Calculate progress based on current position
  const calculateProgress = () => {
    if (!containerRef.current) return 0;
    
    const containerWidth = containerRef.current.clientWidth;
    const totalWidth = containerWidth * eventsImages.length;
    const position = Math.abs(positionRef.current);
    
    // Calculate progress as a percentage (0 to 100)
    return ((position % totalWidth) / totalWidth) * 100;
  };

  return (
    <section className="relative overflow-hidden py-6 md:py-12">
      {/* Container with proper padding */}
      <div className="container mx-auto px-5">
        {/* Top section with counter */}
        <div className="flex items-center justify-between mb-3 md:mb-6">
          <h3 className="uppercase text-xs md:text-sm font-medium tracking-[0.02em]">COMPANY EVENTS</h3>
          
          <div className="flex items-center gap-4">
            <span className="text-base md:text-lg">
              {activeColorIndex + 1} of {eventsImages.length}
            </span>
          </div>
        </div>

        {/* Mobile: Column layout | Desktop: Side-by-side layout with image on right */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 md:gap-10">
          {/* Content column - Full width on mobile, 5/12 on desktop */}
          <div className="w-full lg:w-5/12 flex flex-col lg:justify-between">
            {/* Title section */}
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 lg:mb-6">
                {fixedEvent.title}
              </h2>

              <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-black rounded-full hover:bg-black hover:text-white transition-colors mb-4 md:mb-5 text-sm md:text-base">
                <span>Explore All Events</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Upcoming event card - Fixed at bottom on desktop */}
            <div className="bg-gradient-to-br from-pink-50 to-white bg-[#FFF3F3] border border-[#FFD7D7] rounded-2xl p-3 md:p-4 lg:p-6 flex items-center gap-3 mb-3 md:mb-5 lg:h-[130px]">
              <div className="flex-1">
                <span className="text-[#335081] text-xs md:text-sm font-medium">Upcoming Event</span>
                <h3 className="text-base md:text-xl font-medium mt-1">{upcomingEvent.title}</h3>
              </div>
              <div className="relative w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm md:text-base text-black/70 leading-relaxed mb-6 lg:mb-8">
                {fixedEvent.description}
              </p>
          </div>

          {/* Image slider column - Full width on mobile, 7/12 on desktop */}
          <div className="w-full lg:w-7/12 mt-4 lg:mt-0">
            {/* Image slider - Taller on desktop */}
            <div 
              ref={containerRef}
              className="relative h-[220px] md:h-[300px] lg:h-[500px] rounded-2xl overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {/* Image container with infinite scroll effect */}
              <div 
                ref={innerRef}
                className="absolute inset-0 flex"
                style={{
                  willChange: 'transform',
                  transition: isPaused ? 'none' : 'transform 0.1s linear'
                }}
              >
                {/* Map through all event images (duplicated) */}
                {allImages.map((image, index) => (
                  <div
                    key={`image-${index}`}
                    className="flex-shrink-0 w-full h-full"
                    style={{ 
                      marginRight: '40px',
                      width: containerRef.current ? containerRef.current.clientWidth : '100%'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Event slide ${index % eventsImages.length + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Colored overlay based on current event */}
              <div 
                className="absolute inset-0 mix-blend-color opacity-40 transition-colors duration-500"
                style={{ backgroundColor: events[activeColorIndex % events.length].color }}
              />
            </div>

            {/* Progress Bar and Controls */}
            <div className="mt-3 flex items-center justify-between">
              {/* Progress Bar */}
              <div className="flex-grow h-1 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div 
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors flex-shrink-0"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 4L19 12L5 20V4Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                    <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;