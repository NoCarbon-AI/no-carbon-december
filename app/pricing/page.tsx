// app/pricing/page.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Faq from '../components/Faq';
import { pricingFaqs } from '../lib/constants/faqData';
import Image from 'next/image';


const PricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // GSAP Animations
    const cards = container.querySelectorAll('.pricing-card');
    const particles = container.querySelectorAll('.floating-particle');
    
    gsap.set(cards, { 
      opacity: 0,
      scale: 0.8,
      y: 100
    });

    gsap.set(particles, {
      opacity: 0,
      scale: 0,
      y: 20
    });

    // Animate cards
    gsap.to(cards, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "elastic.out(1, 0.75)"
    });

    // Animate particles
    gsap.to(particles, {
      opacity: 0.7,
      scale: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Floating animation for particles
    particles.forEach((particle) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

  }, []);

  return (
    <div className="min-h-screen bg-zinc-950/95 overflow-hidden"> {/* Changed from pure black */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Enhance floating particles visibility */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-gradient-to-r from-white/30 to-zinc-400/30 rounded-full blur-sm" // Increased opacity
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

<div className="text-center mb-16 relative">
          <h1 className="text-6xl font-bold text-white mb-4">
            Choose Your Path
          </h1>
          <p className="text-zinc-400 text-lg">
            Transparent pricing for sustainable development
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Strategy Card */}
        <div className="pricing-card w-full md:w-1/2 max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-zinc-500/20 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" /> {/* Increased hover opacity */}
            <div className="relative px-8 py-12 bg-zinc-900/80 backdrop-blur-sm ring-1 ring-white/10 rounded-lg leading-none"> {/* Added transparency and backdrop blur */}
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3"> {/* Added flex container */}
            <Image
              src="/Strategy-logo.png"
              alt="Strategy Logo"
              width={24}
              height={24}
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />    
                    <div>
                      <h3 className="text-3xl font-bold text-white">Strategy</h3>
                      <p className="text-5xl font-bold mt-2 text-white">
                        $0
                        </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-full">
                      Coffee Required ☕
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      "Unlimited strategy meetings",
                      "Project scope definition",
                      "Technical consultation",
                      "No commitment required",
                      "Just buy us coffee"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zinc-300">
                        <span className="mr-2 text-white">→</span>
                        {feature}
                        </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 px-6 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105">
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Development Card */}
        <div className="pricing-card w-full md:w-1/2 max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500/20 to-white/20 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" /> {/* Increased hover opacity */}
            <div className="relative px-8 py-12 bg-zinc-900/80 backdrop-blur-sm ring-1 ring-white/10 rounded-lg leading-none"> {/* Added transparency and backdrop blur */}
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="text-3xl font-bold text-white">Development</h3>
                      <p className="text-5xl font-bold mt-2 text-white">
                        $9.99/hr
                        </p>
                    </div>
                    <Image
              src="/Development-Logo.png"
              alt="Development Logo"
              width={24}
              height={24}
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity ml-2"
            />
          </div>
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-full">
                      Best Value ✨
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      "Region-based pricing",
                      "Modular development",
                      "Pay per delivered module",
                      "Transparent milestones",
                      "Quality guaranteed"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zinc-300">
                        <span className="mr-2 text-white">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 px-6 rounded-lg bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105 ring-1 ring-zinc-700">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Only export PricingPage as default
const PricingPage = () => {
    return (
      <>
        <PricingSection />
        <Faq faqs={pricingFaqs} />
      </>
    );
  };
  
export default PricingPage;