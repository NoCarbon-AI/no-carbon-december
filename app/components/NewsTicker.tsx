"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const NewsTicker = () => { 
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tickerRef.current && contentRef.current) {
      // Clone the content for seamless loop
      const content = contentRef.current;
      const clone = content.cloneNode(true);
      tickerRef.current.appendChild(clone);

      // Create the animation
      gsap.to(tickerRef.current.children, {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-zinc-900/50 border-t border-b border-zinc-800 py-4 mt-12">
      <div ref={tickerRef} className="flex whitespace-nowrap">
        <div ref={contentRef} className="flex items-center space-x-8">
          {[
            "Connect with us on social media",
            "•",
            "Join our community",
            "•",
            "Stay updated with latest news",
            "•",
            "Follow us for more updates",
            "•",
            "Get in touch today",
            "•",
          ].map((text, index) => (
            <span
              key={index}
              className={`text-sm ${
                text === "•"
                  ? "text-zinc-600"
                  : "text-zinc-400 font-medium"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};