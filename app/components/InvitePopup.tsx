"use client";
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface InvitePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvitePopup({ isOpen, onClose }: InvitePopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen && mounted) {
      gsap.fromTo(
        ".popup-container",
        { 
          scale: 0.8, 
          opacity: 0, 
          y: -20 
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: "power3.out" 
        }
      );
    }
  }, [isOpen, mounted]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="popup-container relative w-full max-w-md p-6 m-4 bg-zinc-900/90 border border-zinc-700 rounded-xl shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          ✕
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold text-zinc-100 mb-4">
            Enter Invite Code
          </h3>
          <p className="text-zinc-400 text-sm mb-6">
            Access to this section requires an invitation code
          </p>
          
          <input
            type="text"
            placeholder="Enter your code"
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors mb-4"
          />

          <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300">
            Verify Code
          </button>
          
          <p className="mt-4 text-zinc-500 text-xs">
            Need an invite? Contact our team
          </p>
        </div>
      </div>
    </div>
  );
}