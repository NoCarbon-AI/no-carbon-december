// /app/components/NotionSection.tsx
'use client';

import React, { useState } from 'react';

export const NotionSection = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="mt-8 flex flex-col md:flex-row w-full rounded-lg overflow-hidden border border-[#E6E6E6]">
      {/* Left Sidebar - Updated with Notion-like colors */}
      <div className="w-full md:w-64 bg-[#f8f8f7] p-4 border-r border-[#E6E6E6]">
        <div className="space-y-2">
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'getting-started' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('getting-started')}
          >
            <span className="notion-emoji mr-2">📚</span>
            Getting Started
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'project-goals' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('project-goals')}
          >
            <span className="notion-emoji mr-2">🎯</span>
            Project Goals
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'documentation' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('documentation')}
          >
            <span className="notion-emoji mr-2">📝</span>
            Documentation
          </div>
        </div>
      </div>

      {/* Main Content Area - Updated with white background */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[600px] bg-white">
        {activeTab === 'getting-started' && (
          <div className="space-y-6">
            <div 
              className="text-[#37352F] text-3xl font-medium outline-none" 
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Getting Started
            </div>
            <div 
              className="text-[#37352F] text-base outline-none font-normal"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              <p>Welcome to our project documentation! This is an editable block where you can add your content. Just click and start typing...</p>
            </div>
            <div 
              className="bg-[#f8f8f7] p-4 rounded-sm text-[#37352F] outline-none"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              This is a callout block. You can use it to highlight important information.
            </div>
          </div>
        )}

        {activeTab === 'project-goals' && (
          <div className="space-y-6">
            <div className="text-[#37352F] text-3xl font-medium">
              Project Goals
            </div>
            <div className="text-[#37352F] space-y-4">
              <div className="bg-[#f8f8f7] p-4 rounded-sm">
                <h3 className="text-lg font-medium mb-2">Primary Goals</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Reduce carbon footprint through sustainable practices</li>
                  <li>Implement energy-efficient solutions</li>
                  <li>Track and measure environmental impact</li>
                  <li>Promote awareness about carbon reduction</li>
                </ul>
              </div>
              <div className="bg-[#f8f8f7] p-4 rounded-sm">
                <h3 className="text-lg font-medium mb-2">Progress Tracking</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300"/>
                    <span>Set up initial monitoring systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300"/>
                    <span>Establish baseline measurements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documentation' && (
          <div className="space-y-6">
            <div className="text-[#37352F] text-3xl font-medium">
              Documentation
            </div>
            <div className="text-[#37352F] text-base">
              <p>Project documentation and resources will be listed here...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// service sections logo

export const SimpleLogos = () => {
  return (
    <div className="mt-16 mb-16 flex justify-around items-center w-full px-4">
      {/* Cloud with Sun Logo */}
      <div className="w-32 h-32 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-white fill-none stroke-[2]"
        >
          <circle cx="35" cy="40" r="15" /> {/* Sun */}
          <path d="M50 50 Q65 45, 70 50 Q80 55, 75 60 Q70 70, 60 65 Q50 65, 45 60 Q40 55, 50 50" /> {/* Cloud */}
        </svg>
      </div>

      {/* Laptop under Tree Logo */}
      <div className="w-32 h-32 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-white fill-none stroke-[2]"
        >
          <path d="M50 20 L50 50 L30 50 L70 50" /> {/* Tree trunk */}
          <path d="M30 35 Q50 15, 70 35" /> {/* Tree top */}
          <rect x="35" y="60" width="30" height="20" /> {/* Laptop base */}
          <path d="M35 60 L65 60 L65 45 L35 45 Z" /> {/* Laptop screen */}
        </svg>
      </div>

      {/* Semiconductor with Flower Logo */}
      <div className="w-32 h-32 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-white fill-none stroke-[2]"
        >
          <rect x="30" y="40" width="40" height="40" /> {/* Semiconductor */}
          <path d="M35 40 L35 80 M45 40 L45 80 M55 40 L55 80 M65 40 L65 80" /> {/* Circuit lines */}
          <circle cx="50" cy="30" r="5" /> {/* Flower center */}
          <path d="M50 25 Q50 15, 55 20 M50 25 Q60 15, 55 20 M50 25 Q40 15, 45 20 M50 25 Q50 15, 45 20" /> {/* Flower petals */}
        </svg>
      </div>
    </div>
  );
};

//  Combined component to include both NotionSection and SimpleLogos
export const NotionWithLogos = () => {
  return (
    <>
      <NotionSection />
      <SimpleLogos />
    </>
  );
};
