"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AIGradientText from './AIGradientText';

const AIToolsAIOps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const tools = [
    {
      name: 'Moogsoft',
      logo: '/Moogsoft-logo.png',
      url: 'https://moogsoft.com'
    },
    {
      name: 'OpsRamp',
      logo: '/OpsRamp-logo.jpeg',
      url: 'https://www.opsramp.com'
    },
    {
      name: 'Greptile',
      logo: '/greptile-logo.png',
      url: 'https://Greptile.com'
    },
    {
      name: 'BigPanda',
      logo: '/BigPanda-logo.jpeg',
      url: 'https://BigPanda-logo.jpeg'
    },
    {
      name: 'ScienceLogic',
      logo: '/ScienceLogic-logo.jpeg',
      url: 'https://sciencelogic.com'
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      if (containerRef.current && imagesLoaded) {
        gsap.set('.ai-tool-logo', {
          opacity: 1
        });
  
        gsap.from('.ai-tool-logo', {
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
        <h2 className="text-black text-2xl font-bold flex items-center justify-center gap-1 text-center w-full mb-8">
          <AIGradientText />
          <span>-Powered AIOps Tools we use</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="ai-tool-logo w-32 h-20 relative filter grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  fill
                  className="object-contain transition-all duration-300 hover:scale-105"
                  onLoad={() => setImagesLoaded(true)}
                  onError={(e) => {
                    console.error(`Error loading ${tool.name} logo:`, e);
                  }}
                  priority={true}
                />
                {/* Tool name sticker on hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 px-3 py-1 rounded-full 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-sm text-zinc-200">{tool.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIToolsAIOps;