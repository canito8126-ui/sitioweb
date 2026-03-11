import React from 'react';

interface CostaRicaMapProps {
  selectedProvinces: string[];
  onProvinceSelect: (province: string) => void;
}

const CostaRicaMap: React.FC<CostaRicaMapProps> = ({ selectedProvinces, onProvinceSelect }) => {
  // Mapa de Costa Rica con provincias basadas en la geografía real
  const provinces = [
    { 
      id: 'Guanacaste', 
      name: 'Guanacaste', 
      path: 'M10,15 L15,8 L25,5 L35,8 L45,15 L55,20 L65,25 L70,32 L72,40 L70,48 L65,55 L58,62 L50,68 L42,72 L35,75 L28,76 L22,74 L18,70 L15,65 L12,58 L10,50 L8,42 L8,32 L10,22 Z',
      labelX: 42,
      labelY: 45,
      color: '#FF69B4'
    },
    { 
      id: 'Alajuela', 
      name: 'Alajuela', 
      path: 'M65,25 L75,20 L85,18 L95,18 L105,20 L115,25 L120,32 L122,40 L120,48 L115,55 L108,60 L100,63 L92,64 L85,63 L78,60 L72,55 L70,48 L72,40 L70,32 Z',
      labelX: 95,
      labelY: 42,
      color: '#FFFF66'
    },
    { 
      id: 'Heredia', 
      name: 'Heredia', 
      path: 'M115,25 L125,22 L135,22 L142,25 L148,30 L152,38 L153,46 L150,54 L145,60 L138,64 L130,65 L122,63 L120,55 L122,48 L122,40 L120,32 Z',
      labelX: 135,
      labelY: 44,
      color: '#FFD4B8'
    },
    { 
      id: 'Limón', 
      name: 'Limón', 
      path: 'M148,30 L158,25 L168,23 L178,25 L188,30 L195,38 L200,48 L202,60 L202,72 L200,85 L196,98 L190,110 L182,120 L172,128 L162,132 L155,130 L150,125 L147,118 L145,108 L143,98 L142,88 L142,78 L143,68 L145,60 L150,54 L153,46 L152,38 Z',
      labelX: 172,
      labelY: 78,
      color: '#DA70D6'
    },
    { 
      id: 'Cartago', 
      name: 'Cartago', 
      path: 'M138,64 L145,60 L150,62 L153,68 L154,76 L153,84 L150,92 L146,100 L142,106 L136,110 L128,112 L122,110 L118,105 L116,98 L116,90 L118,82 L122,75 L128,70 L130,65 Z',
      labelX: 135,
      labelY: 87,
      color: '#FFB380'
    },
    { 
      id: 'San José', 
      name: 'San José', 
      path: 'M100,63 L108,60 L115,62 L122,68 L128,75 L128,83 L126,91 L122,98 L116,104 L108,108 L100,110 L92,108 L85,104 L80,98 L78,90 L78,82 L80,74 L85,68 L92,64 Z',
      labelX: 103,
      labelY: 86,
      color: '#90EE90'
    },
    { 
      id: 'Puntarenas', 
      name: 'Puntarenas', 
      path: 'M10,50 L12,58 L15,65 L18,70 L22,74 L28,76 L35,75 L42,72 L50,68 L58,62 L65,55 L70,48 L72,55 L72,63 L70,71 L68,79 L65,87 L60,95 L54,102 L48,108 L42,113 L35,117 L28,119 L22,118 L16,115 L12,110 L8,103 L5,95 L3,87 L2,78 L3,70 L5,62 L8,54 Z M58,95 L65,92 L72,90 L78,90 L78,98 L75,106 L70,113 L63,118 L55,122 L48,125 L40,128 L32,130 L25,130 L18,128 L12,124 L8,118 L5,110 L3,102 L2,95 L3,87 L5,95 L8,103 L12,110 L18,115 L25,118 L32,119 L40,118 L48,115 L54,110 Z',
      labelX: 42,
      labelY: 100,
      color: '#FFA500'
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
        <rect width="210" height="150" fill="#00CED1" opacity="0.6" rx="8" />
        
        {/* Provinces */}
        {provinces.map((province) => (
          <g key={province.id}>
            <path
              d={province.path}
              className={`province-path cursor-pointer transition-all duration-300 ${
                selectedProvinces.includes(province.name) ? 'selected' : ''
              }`}
              fill={selectedProvinces.includes(province.name) ? '#D4AF37' : province.color}
              stroke="#2C3E50"
              strokeWidth={selectedProvinces.includes(province.name) ? 2.5 : 1.5}
              onClick={() => onProvinceSelect(province.name)}
              onMouseEnter={(e) => {
                if (!selectedProvinces.includes(province.name)) {
                  e.currentTarget.style.filter = 'brightness(1.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!selectedProvinces.includes(province.name)) {
                  e.currentTarget.style.filter = 'brightness(1)';
                }
              }}
            />
            {/* Province Label */}
            <text
              x={province.labelX}
              y={province.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[6px] font-bold pointer-events-none select-none"
              fill="#2C3E50"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
            >
              {province.name}
            </text>
          </g>
        ))}
        
        {/* Legend */}
        <g transform="translate(10, 135)">
          <rect width="10" height="10" fill="#90EE90" rx="2" stroke="#2C3E50" strokeWidth="0.5" />
          <text x="15" y="8" className="text-[7px]" fill="#2C3E50" fontWeight="600">Disponible</text>
          <rect x="60" width="10" height="10" fill="#D4AF37" rx="2" stroke="#2C3E50" strokeWidth="0.5" />
          <text x="75" y="8" className="text-[7px]" fill="#2C3E50" fontWeight="600">Seleccionado</text>
        </g>
      </svg>
      
      {/* Tooltip hint */}
      <div className="absolute bottom-2 right-2 text-gray-600 text-xs font-medium">
        Haz clic para seleccionar
      </div>
    </div>
  );
};

export default CostaRicaMap;
