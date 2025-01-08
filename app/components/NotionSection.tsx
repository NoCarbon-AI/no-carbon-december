// /app/components/NotionSection.tsx
'use client';  // Add this at the top of the file

import React, { useState } from 'react';

export const NotionSection = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="mt-8 flex flex-col md:flex-row w-full bg-zinc-900/50 rounded-lg overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-zinc-800/50 p-4 border-r border-zinc-700">
        <div className="space-y-2">
          <div 
            className={`text-zinc-400 text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'getting-started' ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/50'
            }`}
            onClick={() => setActiveTab('getting-started')}
          >
            📚 Getting Started
          </div>
          <div 
            className={`text-zinc-400 text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'project-goals' ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/50'
            }`}
            onClick={() => setActiveTab('project-goals')}
          >
            🎯 Project Goals
          </div>
          <div 
            className={`text-zinc-400 text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'documentation' ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/50'
            }`}
            onClick={() => setActiveTab('documentation')}
          >
            📝 Documentation
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[600px]">
        {activeTab === 'getting-started' && (
          <div className="space-y-6">
            <div 
              className="text-2xl font-bold text-zinc-100 outline-none" 
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Getting Started
            </div>
            <div 
              className="text-zinc-300 outline-none prose prose-invert max-w-none"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              <p>Welcome to our project documentation! This is an editable block where you can add your content. Just click and start typing...</p>
            </div>
            <div 
              className="bg-zinc-800/50 p-4 rounded-lg text-zinc-300 outline-none"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              This is a callout block. You can use it to highlight important information.
            </div>
          </div>
        )}

        {activeTab === 'project-goals' && (
          <div className="space-y-6">
            <div className="text-2xl font-bold text-zinc-100">
              Project Goals
            </div>
            <div className="text-zinc-300 space-y-4">
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Primary Goals</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Reduce carbon footprint through sustainable practices</li>
                  <li>Implement energy-efficient solutions</li>
                  <li>Track and measure environmental impact</li>
                  <li>Promote awareness about carbon reduction</li>
                </ul>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded bg-zinc-700 border-zinc-600"/>
                    <span>Set up initial monitoring systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded bg-zinc-700 border-zinc-600"/>
                    <span>Establish baseline measurements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documentation' && (
          <div className="space-y-6">
            <div className="text-2xl font-bold text-zinc-100">
              Documentation
            </div>
            <div className="text-zinc-300">
              <p>Project documentation and resources will be listed here...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};