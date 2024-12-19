// /app/components/TypewriterEffect.tsx
"use client";
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  startDelay: number;
  className?: string;
  showCursor?: boolean; // Add this prop
}

export default function TypewriterEffect({ 
  text, 
  startDelay, 
  className = '',
  showCursor = false // Only show cursor when explicitly set to true
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      const cursorInterval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 530);

      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }, startDelay);

    return () => clearTimeout(initialDelay);
  }, [text, startDelay]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={`${isBlinking ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
          |
        </span>
      )}
    </span>
  );
}