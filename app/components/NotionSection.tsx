// /app/components/NotionSection.tsx

import React from 'react';

export const NotionSection = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row w-full bg-zinc-900/50 rounded-lg overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-zinc-800/50 p-4 border-r border-zinc-700">
        <div className="space-y-2">
          <div className="text-zinc-400 text-sm font-medium hover:bg-zinc-700/50 p-2 rounded cursor-pointer transition-colors">
            📝 Getting Started
          </div>
          <div className="text-zinc-400 text-sm font-medium hover:bg-zinc-700/50 p-2 rounded cursor-pointer transition-colors">
            🎯 Project Goals
          </div>
          <div className="text-zinc-400 text-sm font-medium hover:bg-zinc-700/50 p-2 rounded cursor-pointer transition-colors">
            📚 Documentation
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[600px]">
        <div className="space-y-6">
          {/* Page Title */}
          <div 
            className="text-2xl font-bold text-zinc-100 outline-none" 
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            Getting Started
          </div>

          {/* Content Blocks */}
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

          {/* Todo List Example */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-zinc-300">
              <input type="checkbox" className="rounded bg-zinc-700 border-zinc-600"/>
              <span contentEditable="true" suppressContentEditableWarning={true}>
                Create project documentation
              </span>
            </div>
            <div className="flex items-center space-x-2 text-zinc-300">
              <input type="checkbox" className="rounded bg-zinc-700 border-zinc-600"/>
              <span contentEditable="true" suppressContentEditableWarning={true}>
                Set up development environment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};