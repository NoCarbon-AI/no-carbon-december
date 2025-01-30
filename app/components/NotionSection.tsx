// /app/components/NotionSection.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export const NotionSection = () => {
  const [activeTab, setActiveTab] = useState('the-matrix');
  const borderRef = useRef(null);

  const animateBorder = () => {
    // Reset the animation
    gsap.set(borderRef.current, {
      strokeDashoffset: '100%',
      opacity: 1
    });

    // Animate the border
    gsap.to(borderRef.current, {
      strokeDashoffset: '0%',
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(borderRef.current, {
          opacity: 0,
          duration: 0.3
        });
      }
    });
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    animateBorder();
  };


  return (
    <div className="relative mt-8 flex flex-col md:flex-row w-full rounded-lg overflow-hidden border border-[#E6E6E6]">
    {/* SVG Border Animation */}
<svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{ 
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0
  }}
>
  <rect
    ref={borderRef}
    x="0"
    y="0"
    width="100%"
    height="100%"
    fill="none"
    stroke="url(#purpleGradient)"
    strokeWidth="3" // Increased stroke width for better visibility
    strokeDasharray="100% 100%"
    strokeDashoffset="100%"
    opacity="0"
    style={{ vectorEffect: 'non-scaling-stroke' }}
  />
  
  <defs>
    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#9333EA" />
      <stop offset="50%" stopColor="#A855F7" />
      <stop offset="100%" stopColor="#7E22CE" />
    </linearGradient>
  </defs>
</svg>
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-[#f8f8f7] p-4 border-r border-[#E6E6E6]">
        <div className="space-y-2">
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'the-matrix' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('the-matrix')}
          >
            <span className="notion-emoji mr-2">🎬</span>
            The Matrix
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'the-avengers' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('the-avengers')}
          >
            <span className="notion-emoji mr-2">🦸</span>
            The Avengers
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'mission-impossible' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('mission-impossible')}
          >
            <span className="notion-emoji mr-2">🕵️</span>
            Mission Impossible
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'kingsman' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('kingsman')}
          >
            <span className="notion-emoji mr-2">🎩</span>
            Kingsman
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[600px] bg-white">
        {activeTab === 'the-matrix' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#37352F]">
              Unplug from waste. Plug into efficiency.
            </h2>
            <p className="text-[#37352F] text-lg">
              We make IT simpler for small and mid-sized teams—faster dev cycles, lower costs, and a tinier carbon footprint. Our AI looks at your setup and figures out how to do more with less. No overkill, no bloat—just streamlined performance that sets you free from the old, wasteful system.
            </p>
          </div>
        )}

        {activeTab === 'the-avengers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#37352F]">
              Assemble your hero squad for greener tech.
            </h2>
            <p className="text-[#37352F] text-lg">
              Why team up with us? Because we bring in top talent from across the globe—US, UK, Canada, India—armed with our AI that's laser-focused on shrinking your carbon footprint. No more going broke on cloud bills or working with random freelancers who won't care about the planet. It's a real "Avengers assemble" for businesses that want the best of both worlds: efficiency and sustainability.
            </p>
          </div>
        )}

        {activeTab === 'mission-impossible' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#37352F]">
              Accept the mission: cut costs, save the planet.
            </h2>
            <p className="text-[#37352F] text-lg">
              What's our big game? We're on a mission to help SMEs do the near-impossible: deliver high-end IT solutions while slicing resource usage and carbon emissions. Our AI learns from each project without hoarding your private data. That means it grabs the know-how to fix big inefficiencies—like overstuffed APIs or sky-high server bills—without turning you into a data point.
            </p>
          </div>
        )}

        {activeTab === 'kingsman' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#37352F]">
              Exclusive invites only—ready to suit up?
            </h2>
            <p className="text-[#37352F] text-lg">
              How do you get in on this? We run an invite-only setup to keep things personal and ensure top-notch service. If you got an invite—lucky you! Fill out our quick form, and we'll holler back within 24 hours (no rocket science needed). If you stumbled here uninvited, you can request an invite. We can't promise a seat at our table right now, but if we click, we'll let you in. Because, like any secret society worth its name, we keep it small so we can give you our best.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};