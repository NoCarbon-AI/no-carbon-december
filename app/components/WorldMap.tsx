// app/components/WorldMap.tsx
"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Locations data
const locations = [
    { city: "Chicago", coords: [41.8781, -87.6298] },
    { city: "Toronto", coords: [43.6532, -79.3832] },
    { city: "London", coords: [51.5074, -0.1278] },
    { city: "Bristol", coords: [51.4545, -2.5879] },
    { city: "Mumbai", coords: [19.0760, 72.8777] },
    { city: "Chennai", coords: [13.0827, 80.2707] }
  ];

const WorldMap = () => {
  // Simple SVG marker icon
  const customIcon = L.divIcon({
    html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="#00ff88" fillOpacity="0.4" />
      <circle cx="12" cy="12" r="4" fill="#00ff88" />
    </svg>`,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  // Create polyline coordinates
  const polylinePositions = locations.map(loc => loc.coords);

  return (
    <div className="h-[400px] w-[100%] rounded-lg overflow-hidden mx-auto max-w-[1200px]">
      <MapContainer
  center={[30, 0]}
  zoom={2}
  minZoom={2}
  maxZoom={18}
  maxBounds={[[-90, -180], [90, 180]]}
  maxBoundsViscosity={1.0}
  style={{ height: '100%', width: '100%', margin: '0 auto' }}  // Added margin: '0 auto'
  className="z-0"
>
        {/* Dark theme map tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true} // Prevent tile repetition
          bounds={[[-90, -180], [90, 180]]} // Restrict tile loading to these bounds
        />  

{locations.map((location) => (
          <Marker
            key={location.city}
            position={location.coords as [number, number]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-black">
                {location.city}
              </div>
            </Popup>
          </Marker>
        ))}
        
        {/* Connection lines between locations */}
        <Polyline
          positions={polylinePositions as [number, number][]}
          color="#00ff88"
          weight={2}
          opacity={0.5}
          dashArray="5, 10"
        />
      </MapContainer>
    </div>
  );
};

export default WorldMap;