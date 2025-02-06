"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const InfraPartners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const partners = [
    { name: 'AWS', logo: '/aws-logo.png' },
    { name: 'Azure', logo: '/azure-logo.png' },
    { name: 'Google Cloud', logo: '/gcp-logo.png' },
    { name: 'Oracle Cloud', logo: '/oracle-logo.png' },
    { name: 'Alibaba Cloud', logo: '/alibaba-logo.png' },
    { name: 'Digital Ocean', logo: '/digitalocean-logo.png' }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      if (containerRef.current && imagesLoaded) {
        gsap.from('.partner-logo', {
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
          Infra Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="partner-logo w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                onLoad={() => setImagesLoaded(true)}
                onError={(e) => {
                  console.error(`Error loading ${partner.name} logo:`, e);
                }}
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};