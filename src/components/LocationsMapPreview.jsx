import { useState } from 'react';
import { LOCATIONS_DATA } from '../data/locations';
import worldMapImg from '../assets/world_map_vector.png';

export default function LocationsMapPreview({ navigateTo }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="map-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLocation(null)}
      style={{ maxWidth: '800px', margin: '2rem auto' }}
    >
      <svg viewBox="0 0 1000 480" className="world-map-svg" style={{ borderRadius: '8px', overflow: 'hidden' }}>
        <defs>
          <pattern id="preview-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(15, 61, 92, 0.04)" stroke-width="1" />
          </pattern>
        </defs>
        
        {/* Modern Vector Map Background Image */}
        <image 
          href={worldMapImg} 
          width="1000" 
          height="480" 
          opacity="0.9"
        />

        {/* Technical Grid Overlay */}
        <rect width="1000" height="480" fill="url(#preview-grid)" pointerEvents="none" />

        {LOCATIONS_DATA.map((loc) => (
          <g 
            key={loc.id} 
            className="map-marker"
            onMouseEnter={() => setHoveredLocation(loc)}
            onClick={() => navigateTo('/locations')}
          >
            {/* Animating ripple rings (staggered double pulses) */}
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-1" />
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-2" />
            {/* Solid core pin */}
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-core" />
          </g>
        ))}
      </svg>

      {hoveredLocation && (
        <div 
          className="map-tooltip"
          style={{ 
            left: `${tooltipPos.x}px`, 
            top: `${tooltipPos.y}px`, 
            opacity: 1 
          }}
        >
          <div className="map-tooltip-city">{hoveredLocation.city}</div>
          <div className="map-tooltip-country">{hoveredLocation.country}</div>
          <div className="map-tooltip-text">
            Procedures: {hoveredLocation.procedures.join(', ')}
          </div>
        </div>
      )}
    </div>
  );
}
