'use client';

import React, { useState } from 'react';

export const ContactNotionSection = () => {
  const [activeTab, setActiveTab] = useState('why-invite');

  return (
    <div className="mt-8 flex flex-col md:flex-row w-full rounded-lg overflow-hidden border border-[#E6E6E6]">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-[#f8f8f7] p-4 border-r border-[#E6E6E6]">
        <div className="space-y-2">
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'why-invite' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('why-invite')}
          >
            <span className="notion-emoji mr-2">🔑</span>
            Why Invite Only?
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'no-invite' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('no-invite')}
          >
            <span className="notion-emoji mr-2">📨</span>
            No Invite Yet?
          </div>
          <div 
            className={`text-[#37352F] text-sm font-medium p-2 rounded cursor-pointer transition-colors ${
              activeTab === 'onboarding' ? 'bg-[#f0f0ef]' : 'hover:bg-[#f0f0ef]'
            }`}
            onClick={() => setActiveTab('onboarding')}
          >
            <span className="notion-emoji mr-2">🚀</span>
            Onboarding Process
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[600px] bg-white">
        {activeTab === 'why-invite' && (
          <div className="space-y-6">
            <h2 className="text-[#37352F] text-3xl font-medium">
              Why do I need an invite?
            </h2>
            <div className="text-[#37352F] text-base">
              <p>At NoCarbon, we're offering tailored solutions that require a more personalized approach. As we're still in the process of scaling our services, we've decided to limit access to ensure that we can focus on delivering the highest quality to our selected audience. The invite-only model helps us maintain exclusivity and the best experience for our users.</p>
            </div>
          </div>
        )}

        {activeTab === 'no-invite' && (
          <div className="space-y-6">
            <h2 className="text-[#37352F] text-3xl font-medium">
              I haven't received an invite yet
            </h2>
            <div className="text-[#37352F] text-base">
              <p>At this moment, our bandwidth is limited, and what we're doing is exclusively for our targeted audience. If you've somehow landed on this page and haven't yet received an invitation but are interested in accessing further, simply request an invite. If your company aligns with our target audience and available bandwidth, we'll be happy to send one your way! :)</p>
            </div>
          </div>
        )}

        {activeTab === 'onboarding' && (
          <div className="space-y-6">
            <h2 className="text-[#37352F] text-3xl font-medium">
              How do you onboard post invite?
            </h2>
            <div className="text-[#37352F] text-base">
              <p>If you already have an invite, one of us has been in touch with you. Simply head to the solutions section, pick up a service request form, and fill it out with the requested details. Once completed, we'll get back to you within 24 hours—promise, no rocket science!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};