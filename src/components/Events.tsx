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
    <section className="relative bg-gradient-to-br from-pink-50 to-white overflow-hidden py-16">
      <div className="container mx-auto px-4 pr-0">
        {/* Top div with title and navigation arrows */}
        <div className="flex items-center justify-between mb-10">
          <h3 className="uppercase text-sm font-medium tracking-wider">COMPANY EVENTS</h3>
          
          <div className="flex items-center gap-4">
            <span className="text-lg">
              {activeColorIndex + 1} of {eventsImages.length}
            </span>
          </div>
        </div>

        {/* Main title - Fixed to the first event */}
        <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-10">
          {fixedEvent.title}
        </h2>

        {/* Two-column layout (4:8 ratio) */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column (4/12) - Fixed content */}
          <div className="lg:w-4/12">
            {/* Description - Fixed to the first event */}
            <div className="mb-8">
              <p className="text-base text-black/70">
                {fixedEvent.description}
              </p>
            </div>

            {/* Explore All Events Button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors mb-10">
              <span>Explore All Events</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Upcoming Event Card */}
            <div className="bg-[#FFF3F3] border border-[#FFD7D7] rounded-2xl p-6">
              <span className="text-[#335081] text-sm font-medium">Upcoming Event</span>
              <h3 className="text-xl font-medium mt-2 mb-4">{upcomingEvent.title}</h3>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column (8/12) - Infinite scrolling content */}
          <div className="lg:w-8/12">
            {/* Image slider with infinite scroll */}
            <div 
              ref={containerRef}
              className="relative h-[500px] rounded-2xl rounded-l-none overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
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

            {/* Progress Bar and Controls in one row */}
            <div className="mt-4 flex items-center justify-between">
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
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors flex-shrink-0"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 4L19 12L5 20V4Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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