// app/about/page.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import AIGradientText from '../components/AIGradientText';

gsap.registerPlugin(ScrollTrigger);

const teamLocations = [
  { city: 'Chicago', coords: { lat: 41.8781, lng: -87.6298 } },
  { city: 'Toronto', coords: { lat: 43.6532, lng: -79.3832 } },
  { city: 'London', coords: { lat: 51.5074, lng: -0.1278 } },
  { city: 'Bristol', coords: { lat: 51.4545, lng: -2.5879 } },
  { city: 'Chennai', coords: { lat: 13.0827, lng: 80.2707 } },
  { city: 'Mumbai', coords: { lat: 19.0760, lng: 72.8777 } },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Hero section animation
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Team locations animation
      teamLocations.forEach((location, index) => {
        gsap.from(`.location-marker-${index}`, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.2 * index,
          ease: 'back.out',
          scrollTrigger: {
            trigger: '.world-map-section',
            start: 'top center',
          },
        });
      });

      // Stats counter animation
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
          },
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="hero-content max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Sustainable Tech with <AIGradientText />
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-8">
            We're revolutionizing cloud operations with AI-driven solutions while keeping our planet green.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-green-400" data-target="85">0</div>
              <p className="text-zinc-400 mt-2">Carbon Reduction %</p>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-green-400" data-target="24">0</div>
              <p className="text-zinc-400 mt-2">Global Team Members</p>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl font-bold text-green-400" data-target="150">0</div>
              <p className="text-zinc-400 mt-2">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="world-map-section py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Global Presence</h2>
        <div className="relative max-w-4xl mx-auto">
          <Image
            src="/world-map.png"
            alt="World Map"
            width={1200}
            height={600}
            className="opacity-20"
          />
          {teamLocations.map((location, index) => (
            <div
              key={location.city}
              className={`location-marker-${index} absolute w-3 h-3 bg-green-400 rounded-full`}
              style={{
                left: `${((location.coords.lng + 180) / 360) * 100}%`,
                top: `${((90 - location.coords.lat) / 180) * 100}%`,
              }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm text-zinc-400">
                {location.city}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* London Office Section */}
      <section className="py-20 px-4 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our London Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-400">NoCarbon UK</h3>
              <p className="text-zinc-400">330, 5 Kew Road, Richmond</p>
              <p className="text-zinc-400">London, TW92PR</p>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=5%20Kew%20Road%20London+(NoCarbon%20UK)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}