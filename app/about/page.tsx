// app/about/page.tsx
import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';
import OfficeMap from './components/OfficeMap';


// Dynamically import the Map component to handle client-side rendering
const WorldMap = dynamic(() => import("../components/WorldMap"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      
      {/* Hero Section */}
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Revolutionizing Cloud Operations with AI
          </h1>
          <p className="mt-4 text-zinc-400">
            We're not just another cloud company. We're pioneering the future of sustainable cloud operations through innovative AI solutions and global expertise.
          </p>
        </div>

        {/* AI Innovation Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-100">Our AI Advantage</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-medium text-zinc-200">Predictive Analytics</h3>
              <p className="mt-2 text-zinc-400">
                Our AI systems predict and prevent cloud infrastructure issues before they impact your business.
              </p>
            </div>
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-medium text-zinc-200">Cost Optimization</h3>
              <p className="mt-2 text-zinc-400">
                Smart algorithms continuously analyze and optimize your cloud spending.
              </p>
            </div>
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-medium text-zinc-200">Automated Operations</h3>
              <p className="mt-2 text-zinc-400">
                AI-powered automation handles routine tasks, reducing human error and operational costs.
              </p>
            </div>
          </div>
        </div>

        {/* Global Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-100">Global Expertise, Local Impact</h2>
          <p className="mt-4 text-zinc-400">
            Our distributed team brings together the best talent from across the globe, operating in key tech hubs to deliver exceptional service 24/7.
          </p>
          
          {/* World Map Component */}
          <div className="mt-8 h-[400px] relative">
            <WorldMap />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-100">Why Choose NoCarbon</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-medium text-zinc-200">Sustainable Solutions</h3>
              <p className="mt-2 text-zinc-400">
                We're committed to reducing carbon footprints while maximizing cloud efficiency.
              </p>
            </div>
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <h3 className="text-xl font-medium text-zinc-200">Cost-Effective Excellence</h3>
              <p className="mt-2 text-zinc-400">
                Our global team structure allows us to provide enterprise-grade solutions at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Map Section */}
      <OfficeMap />

      {/* Climate Clock Footer */}
      <footer className="w-full py-4 md:py-8 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="climate-clock-container">
      <Script 
        src="https://climateclock.world/widget-v2.js" 
        strategy="afterInteractive"
      />
      <climate-clock />
    </div>
  </div>
</footer>

      {/* Footer Image */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src="/Footer-image.png"
          alt="Footer"
          width={1920}
          height={100}
          className="w-full h-[100px]"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            objectFit: 'contain',
            objectPosition: 'bottom center'
          }}
          priority
        />
      </div>

      {/* Copyright notice */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0.5 md:mb-1">
        <div className="text-[8px] md:text-[10px] text-zinc-500 hover:text-zinc-400 transition-colors duration-300 opacity-70">
          © NoCarbon Ltd, 2025
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}