import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
  isFirst?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, isFirst }) => (
  <div className={`flex flex-col items-center px-16 ${!isFirst ? 'border-l border-white/5' : ''}`}>
    <span className="text-[52px] font-bold tracking-tight text-[#00f2fe] glow-cyan stats-glow font-display mb-2">
      {value}
    </span>
    <span className="text-[11px] tracking-[0.45em] text-white/20 font-medium font-display uppercase">
      {label}
    </span>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    { value: 'AED 5.8M', label: 'YEAR 1 REVENUE' },
    { value: '480', label: 'STUDENTS Y1' },
    { value: '45%', label: 'NET MARGIN' },
    { value: '1,800 sqft', label: 'CAMPUS' },
  ];

  return (
    <div className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md relative z-10 py-16 flex flex-col items-center mt-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center mb-12">
        {stats.map((stat, index) => (
          <StatItem 
            key={index} 
            value={stat.value} 
            label={stat.label} 
            isFirst={index === 0} 
          />
        ))}
      </div>
      
      {/* Bottom Center Stat */}
      <div className="flex flex-col items-center">
        <span className="text-[32px] font-bold text-[#00f2fe] glow-cyan stats-glow font-display leading-none mb-2">6</span>
        <span className="text-[10px] tracking-[0.5em] text-white/20 font-medium font-display uppercase">DEPARTMENTS</span>
      </div>
    </div>
  );
};

export default Stats;
