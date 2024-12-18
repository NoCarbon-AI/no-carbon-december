"use client";
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  startDelay: number;
  className?: string;
}

export default function TypewriterEffect({ text, startDelay, className = '' }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

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
        setShowCursor(prev => !prev);
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
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
}