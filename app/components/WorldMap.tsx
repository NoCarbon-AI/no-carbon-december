// app/components/WorldMap.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const locations = [
  { city: "Chicago", coords: { x: 30, y: 35 } },
  { city: "Toronto", coords: { x: 35, y: 32 } },
  { city: "London", coords: { x: 45, y: 30 } },
  { city: "Bristol", coords: { x: 44, y: 31 } },
  { city: "Chennai", coords: { x: 70, y: 50 } },
  { city: "Mumbai", coords: { x: 68, y: 48 } }
];

const WorldMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const markers = document.querySelectorAll('.location-marker');
    const lines = document.querySelectorAll('.connection-line');

    gsap.set(markers, { scale: 0, opacity: 0 });
    gsap.set(lines, { scaleX: 0, opacity: 0 });

    gsap.timeline()
      .to(markers, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
      .to(lines, {
        scaleX: 1,
        opacity: 0.5,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.5");

    // Pulsing animation for markers
    markers.forEach(marker => {
      gsap.to(marker, {
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <div ref={mapRef} className="relative w-full h-full bg-zinc-900/50 rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {/* World map path - simplified version */}
          <path
            d="M10,50 Q30,45 50,50 T90,50"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          
          {/* Location markers and connections */}
          {locations.map((location, index) => (
            <React.Fragment key={location.city}>
              <circle
                className="location-marker"
                cx={location.coords.x}
                cy={location.coords.y}
                r="1"
                fill="#00ff88"
              />
              {index < locations.length - 1 && (
                <line
                  className="connection-line"
                  x1={location.coords.x}
                  y1={location.coords.y}
                  x2={locations[index + 1].coords.x}
                  y2={locations[index + 1].coords.y}
                  stroke="#00ff88"
                  strokeWidth="0.2"
                  strokeDasharray="1"
                />
              )}
              <text
                x={location.coords.x}
                y={location.coords.y - 2}
                fill="white"
                fontSize="2"
                textAnchor="middle"
              >
                {location.city}
              </text>
            </React.Fragment>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default WorldMap;