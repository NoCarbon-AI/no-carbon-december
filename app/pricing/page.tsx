// app/pricing/page.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Card } from '../components/card';

const PricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pricingPlans = [
    {
      title: "Strategy & Planning",
      price: "$0",
      description: "Let's discuss your vision over coffee",
      features: [
        "Unlimited strategy meetings",
        "Project scope definition",
        "Technical consultation",
        "No commitment required",
        "Just buy us coffee ☕"
      ],
      highlight: "Most Popular"
    },
    {
      title: "Development & Execution",
      price: "From $9.99/hr",
      description: "Flexible pricing based on project needs",
      features: [
        "Region-based pricing",
        "Modular development",
        "Pay per delivered module",
        "Transparent milestones",
        "Quality guaranteed ✨"
      ],
      highlight: "Best Value"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.pricing-card');
    
    // Reset positions
    gsap.set(cards, { 
      y: 50, 
      opacity: 0 
    });

    // Animate cards
    gsap.to(cards, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-zinc-400 text-lg">
            Pay only for what you need, when you need it
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <Card className="h-full transform hover:scale-105 transition-transform duration-300">
                <div className="p-8 flex flex-col h-full">
                  {plan.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full">
                        {plan.highlight}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                    {plan.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zinc-100">
                      {plan.price}
                    </span>
                  </div>
                  
                  <p className="text-zinc-400 mb-8">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zinc-300">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 px-6 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;