import React from 'react';

interface CostaRicaMapProps {
  selectedProvinces: string[];
  onProvinceSelect: (province: string) => void;
}

const CostaRicaMap: React.FC<CostaRicaMapProps> = ({ selectedProvinces, onProvinceSelect }) => {
  const provinces = [
    { id: 'Guanacaste', name: 'Guanacaste', path: 'M45,25 L85,15 L110,35 L100,70 L60,75 L35,55 Z' },
    { id: 'Alajuela', name: 'Alajuela', path: 'M85,15 L140,10 L160,50 L140,90 L100,70 L110,35 Z' },
    { id: 'Heredia', name: 'Heredia', path: 'M140,10 L175,15 L180,50 L160,50 Z' },
    { id: 'Limón', name: 'Limón', path: 'M175,15 L230,25 L240,80 L200,100 L180,50 Z' },
    { id: 'Cartago', name: 'Cartago', path: 'M160,50 L180,50 L200,100 L160,110 L140,90 Z' },
    { id: 'San José', name: 'San José', path: 'M100,70 L140,90 L160,110 L140,150 L90,140 L80,100 Z' },
    { id: 'Puntarenas', name: 'Puntarenas', path: 'M35,55 L60,75 L100,70 L80,100 L90,140 L60,160 L20,140 L10,90 Z' },
  ];

  return (
    <div className="relative w-full aspect-[4/3] bg-white/5 rounded-lg p-4">
      <svg 
        viewBox="0 0 250 180" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        {/* Background */}
        <rect width="250" height="180" fill="transparent" />
        
        {/* Ocean */}
        <rect width="250" height="180" fill="#1a3d2e" opacity="0.3" rx="8" />
        
        {/* Provinces */}
        {provinces.map((province) => (
          <g key={province.id}>
            <path
              d={province.path}
              className={`province-path cursor-pointer transition-all duration-300 ${
                selectedProvinces.includes(province.name) ? 'selected' : ''
              }`}
              fill={selectedProvinces.includes(province.name) ? '#D4AF37' : '#84A56E'}
              stroke={selectedProvinces.includes(province.name) ? '#B8942E' : '#557846'}
              strokeWidth={selectedProvinces.includes(province.name) ? 2 : 1}
              onClick={() => onProvinceSelect(province.name)}
              onMouseEnter={(e) => {
                if (!selectedProvinces.includes(province.name)) {
                  e.currentTarget.setAttribute('fill', '#A8C492');
                }
              }}
              onMouseLeave={(e) => {
                if (!selectedProvinces.includes(province.name)) {
                  e.currentTarget.setAttribute('fill', '#84A56E');
                }
              }}
            />
            {/* Province Label */}
            <text
              x={getProvinceCenter(province.path).x}
              y={getProvinceCenter(province.path).y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[8px] font-medium pointer-events-none select-none"
              fill="white"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            >
              {province.name}
            </text>
          </g>
        ))}
        
        {/* Legend */}
        <g transform="translate(10, 165)">
          <rect width="10" height="10" fill="#84A56E" rx="2" />
          <text x="15" y="8" className="text-[7px]" fill="white">Disponible</text>
          <rect x="60" width="10" height="10" fill="#D4AF37" rx="2" />
          <text x="75" y="8" className="text-[7px]" fill="white">Seleccionado</text>
        </g>
      </svg>
      
      {/* Tooltip hint */}
      <div className="absolute bottom-2 right-2 text-white/50 text-xs">
        Haz clic para seleccionar
      </div>
    </div>
  );
};

// Helper function to calculate province center for label positioning
function getProvinceCenter(path: string): { x: number; y: number } {
  const coords = path.match(/[\d.]+/g);
  if (!coords) return { x: 0, y: 0 };
  
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < coords.length; i += 2) {
    points.push({ x: parseFloat(coords[i]), y: parseFloat(coords[i + 1]) });
  }
  
  const sumX = points.reduce((sum, p) => sum + p.x, 0);
  const sumY = points.reduce((sum, p) => sum + p.y, 0);
  
  return {
    x: sumX / points.length,
    y: sumY / points.length
  };
}

export default CostaRicaMap;
