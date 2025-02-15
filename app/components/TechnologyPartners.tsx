"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TechnologyPartners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const partners = [
    { name: 'Ryvalx', logo: '/Ryvalx-logo.png' },
    { name: 'Gravitas AI', logo: '/Gravitas-AI.png' },
    { name: 'Onsec', logo: '/onsec-logo.png' }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      if (containerRef.current && imagesLoaded) {
        gsap.set('.tech-partner-logo', {
          opacity: 1
        });
  
        gsap.from('.tech-partner-logo', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        });
      }
    }
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="py-16 bg-gradient-to-t from-zinc-900/0 via-zinc-900/50 to-zinc-900/0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-zinc-200 mb-12">
          Technology Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="tech-partner-logo w-40 h-24 relative filter grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-lg p-2"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain transition-all duration-300 hover:scale-105"
                onLoad={() => setImagesLoaded(true)}
                onError={(e) => {
                  console.error(`Error loading ${partner.name} logo:`, e);
                }}
                priority={true}
              />
            </div>
          ))}
        </div>
        <Image
          src="/Footer-image.svg"
          alt="Footer"
          width={1920}
          height={100}
          className="w-full h-[100px]"
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom center'
          }}
          priority
        />
      </div>
    </div>
  );
};