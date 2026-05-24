import { useState } from 'react';
import { LOCATIONS_DATA } from '../data/locations';
import worldMapImg from '../assets/world_map_vector.png';

export default function LocationsPage({ navigateTo }) {
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
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Global Locations</span>
          <h1>Licensed MicroSort Laboratories</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort sorting procedures are performed in controlled clinical environments. 
            Choose a location pin on the map or review the laboratory listings below.
          </p>
        </div>

        {/* World Map Container */}
        <div 
          className="map-container reveal-on-scroll"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredLocation(null)}
          style={{ maxWidth: '800px', margin: '2rem auto' }}
        >
          {/* Simple Vector Schematic World Map */}
          <svg viewBox="0 0 1000 480" className="world-map-svg">
            <defs>
              <pattern id="locations-grid" width="30" height="30" patternUnits="userSpaceOnUse">
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
            <rect width="1000" height="480" fill="url(#locations-grid)" rx="8" pointerEvents="none" />

            {/* Pins */}
            {LOCATIONS_DATA.map((loc) => (
              <g 
                key={loc.id} 
                className="map-marker"
                onMouseEnter={() => setHoveredLocation(loc)}
                onClick={() => {
                  navigateTo('/contact');
                }}
              >
                {/* Animating ripple rings (staggered double pulses) */}
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-1" />
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-2" />
                {/* Solid core pin */}
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-core" />
              </g>
            ))}
          </svg>

          {/* Map Tooltip */}
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
                Procedures: {hoveredLocation.procedures.join(', ')}<br />
                Languages: {hoveredLocation.languages.join(', ')}
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>
                Click to contact <span className="btn-arrow">→</span>
              </div>
            </div>
          )}
        </div>

        {/* Locations Grid */}
        <div className="locations-grid">
          {LOCATIONS_DATA.map((loc, idx) => (
            <div key={loc.id} className={`location-card reveal-on-scroll delay-${((idx % 4) * 100) + 100}`}>
              <div className="location-img-wrapper">
                <div className="location-img-overlay">
                  <div className="location-badge-circle">
                    {loc.city.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="location-info" style={{ textAlign: 'left' }}>
                <span className="location-country">{loc.country}</span>
                <h3 className="location-city">{loc.city}</h3>
                
                <div className="location-specs">
                  <span><strong>Lab:</strong> {loc.name}</span>
                  <span><strong>Languages:</strong> {loc.languages.join(', ')}</span>
                  <span><strong>Hours:</strong> {loc.hours}</span>
                  <span><strong>Tel:</strong> {loc.phone}</span>
                </div>

                <div className="location-badges">
                  {loc.procedures.map((p, idx) => (
                    <span key={idx} className="procedure-badge">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipment Callout */}
        <div className="locations-callout reveal-on-scroll card" style={{ padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="locations-callout-text" style={{ flex: '1 1 500px', textAlign: 'left' }}>
            <h3>Not located near a MicroSort laboratory?</h3>
            <p style={{ margin: 0 }}>
              Many couples complete ovarian tracking at their local fertility clinic, which coordinate sample prep 
              and cryopreserved shipping directly with a licensed laboratory. 
              Contact our international team to confirm coordinates for shipping.
            </p>
          </div>
          <div>
            <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
              Learn about shipping options <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
