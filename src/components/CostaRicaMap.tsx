import React from 'react';

interface CostaRicaMapProps {
  selectedProvinces: string[];
  onProvinceSelect: (province: string) => void;
}

const CostaRicaMap: React.FC<CostaRicaMapProps> = ({ selectedProvinces, onProvinceSelect }) => {
  // Mapa de Costa Rica con forma más precisa basada en la geografía real
  const provinces = [
    { 
      id: 'Guanacaste', 
      name: 'Guanacaste', 
      path: 'M20,40 L25,30 L35,25 L50,22 L65,20 L75,22 L85,28 L90,35 L92,45 L90,55 L85,65 L78,72 L70,75 L60,78 L50,80 L40,78 L32,72 L25,65 L20,55 Z',
      labelX: 55,
      labelY: 50
    },
    { 
      id: 'Alajuela', 
      name: 'Alajuela', 
      path: 'M75,22 L90,20 L105,22 L115,28 L120,35 L122,45 L120,55 L115,65 L108,72 L100,75 L92,75 L85,72 L78,72 L85,65 L90,55 L92,45 L90,35 L85,28 Z',
      labelX: 100,
      labelY: 48
    },
    { 
      id: 'Heredia', 
      name: 'Heredia', 
      path: 'M105,22 L120,20 L132,22 L140,28 L142,38 L140,48 L135,55 L128,60 L122,58 L120,55 L122,45 L120,35 L115,28 Z',
      labelX: 127,
      labelY: 40
    },
    { 
      id: 'Limón', 
      name: 'Limón', 
      path: 'M140,28 L155,25 L170,28 L185,35 L195,45 L200,58 L202,72 L200,88 L195,102 L188,115 L180,125 L170,130 L160,128 L152,122 L148,112 L145,100 L142,88 L140,75 L138,62 L140,48 L142,38 Z',
      labelX: 170,
      labelY: 75
    },
    { 
      id: 'Cartago', 
      name: 'Cartago', 
      path: 'M128,60 L135,55 L140,58 L142,65 L142,75 L140,85 L138,95 L135,105 L130,112 L122,115 L115,112 L110,105 L108,95 L110,85 L115,75 L120,68 Z',
      labelX: 125,
      labelY: 85
    },
    { 
      id: 'San José', 
      name: 'San José', 
      path: 'M100,75 L108,72 L115,75 L120,82 L122,90 L120,100 L115,108 L108,112 L100,115 L92,115 L85,112 L80,105 L78,95 L80,85 L85,78 L92,75 Z',
      labelX: 100,
      labelY: 93
    },
    { 
      id: 'Puntarenas', 
      name: 'Puntarenas', 
      path: 'M20,55 L25,65 L32,72 L40,78 L50,80 L60,78 L70,75 L78,72 L78,82 L75,92 L72,102 L68,112 L62,122 L55,130 L48,135 L40,138 L32,138 L25,135 L18,130 L12,122 L8,112 L5,100 L5,88 L8,75 L12,65 L15,55 Z',
      labelX: 42,
      labelY: 100
    },
  ];

  return (
    <div className="relative w-full aspect-[4/3] bg-white/5 rounded-lg p-4">
      <svg 
        viewBox="0 0 210 150" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        {/* Background */}
        <rect width="210" height="150" fill="transparent" />
        
        {/* Ocean */}
        <rect width="210" height="150" fill="#1a3d2e" opacity="0.3" rx="8" />
        
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
              x={province.labelX}
              y={province.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[7px] font-semibold pointer-events-none select-none"
              fill="white"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
            >
              {province.name}
            </text>
          </g>
        ))}
        
        {/* Legend */}
        <g transform="translate(10, 135)">
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

export default CostaRicaMap;
