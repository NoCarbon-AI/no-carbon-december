// app/components/WorldMap.tsx
"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

// Fix for default markers in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Actual geographical coordinates for each city
const locations = [
  { city: "Chicago", coords: [41.8781, -87.6298] },
  { city: "Toronto", coords: [43.6532, -79.3832] },
  { city: "London", coords: [51.5074, -0.1278] },
  { city: "Bristol", coords: [51.4545, -2.5879] },
  { city: "Mumbai", coords: [19.0760, 72.8777] },
  { city: "Chennai", coords: [13.0827, 80.2707] }
];

const WorldMap = () => {
  // Fix for default markers
  React.useEffect(() => {
    const DefaultIcon = L.icon({
      iconUrl: icon.src,
      shadowUrl: iconShadow.src,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  // Create polyline coordinates
  const polylinePositions = locations.map(loc => loc.coords);

  // Custom marker style
  const customMarkerIcon = new L.Icon({
    iconUrl: '/marker-icon.png', // Add your custom marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[30, 0]} // Center of the map
        zoom={2} // Initial zoom level
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        {/* Dark theme map tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers for each location */}
        {locations.map((location) => (
          <Marker
            key={location.city}
            position={location.coords as [number, number]}
            icon={customMarkerIcon}
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