// app/pricing/page.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Faq from '../components/Faq';
import { pricingFaqs } from '../lib/constants/faqData';

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
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-900 to-black overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="text-center mb-16 relative">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 mb-4">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-8 py-12 bg-zinc-900 ring-1 ring-zinc-800 rounded-lg leading-none">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-zinc-100">Strategy</h3>
                      <p className="text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                        $0
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
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
                        <span className="mr-2 text-emerald-400">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Development Card */}
          <div className="pricing-card w-full md:w-1/2 max-w-md">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-8 py-12 bg-zinc-900 ring-1 ring-zinc-800 rounded-lg leading-none">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-zinc-100">Development</h3>
                      <p className="text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                        $9.99/hr
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-violet-400 bg-violet-400/10 rounded-full">
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
                        <span className="mr-2 text-violet-400">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
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