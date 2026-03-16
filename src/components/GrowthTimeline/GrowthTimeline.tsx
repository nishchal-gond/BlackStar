import React, { useEffect, useRef, useState } from 'react';
import './GrowthTimeline.css';

interface TimelinePhase {
  id: string;
  period: string;
  name: string;
  items: string[];
  rev: string;
  colorClass: string;
  delayStr: string;
}

const TIMELINE_DATA: TimelinePhase[] = [
  {
    id: 'p1',
    period: 'MONTHS 1–3',
    name: 'FOUNDATION',
    items: ['Launch academy', 'First 80 students', 'IB pilot program', 'CRM & website live', 'Break-even achieved'],
    rev: '335K AED/MO',
    colorClass: 'ct',
    delayStr: '1'
  },
  {
    id: 'p2',
    period: 'MONTHS 4–6',
    name: 'SCALE',
    items: ['200+ students total', 'PAMM fund launch', 'IB network active', 'Server infra live', 'Tech clients M5'],
    rev: '950K AED/MO',
    colorClass: 'cp',
    delayStr: '2'
  },
  {
    id: 'p3',
    period: 'MONTHS 7–9',
    name: 'PREMIUM',
    items: ['350+ students', 'HNWI onboarding', 'Events & summits', 'SaaS pipeline', 'Data broker live'],
    rev: '1.69M AED/MO',
    colorClass: 'co',
    delayStr: '3'
  },
  {
    id: 'p4',
    period: 'MONTHS 10–12',
    name: 'ECOSYSTEM',
    items: ['480 students', 'Franchise prep', 'Full IB network', 'Brand authority', 'Y2 runway ready'],
    rev: '2.4M AED/MO',
    colorClass: 'cg',
    delayStr: '4'
  }
];

const GrowthTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-sec" id="timeline" ref={secRef}>
      <div className={`sec-hdr ${isVisible ? 'vis' : ''}`} data-r>
        <div className="sec-eye">Growth Roadmap</div>
        <h2 className="sec-ttl">Phase <span className="grad">Timeline</span></h2>
      </div>

      <div className={`tl-phases ${isVisible ? 'vis' : ''}`} data-r>
        {TIMELINE_DATA.map((phase) => (
          <div 
            className={`tl-phase ${hoveredPhase === phase.id ? 'hovered' : ''}`} 
            key={phase.id}
            data-d={phase.delayStr}
            onMouseEnter={() => setHoveredPhase(phase.id)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className={`tl-period ${phase.colorClass}`}>{phase.period}</div>
            <div className="tl-name">{phase.name}</div>
            <ul className="tl-items">
              {phase.items.map((item, ii) => (
                <li key={ii}>{item}</li>
              ))}
            </ul>
            <div className="tl-rev">
              <span>Target:</span> <span className={phase.colorClass}>{phase.rev}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`tl-bar-wrap ${isVisible ? 'vis' : ''}`}>
        <div className="tl-nodes">
          {TIMELINE_DATA.map((phase) => (
            <div 
              key={phase.id} 
              className={`tl-node ${phase.colorClass} ${hoveredPhase === phase.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredPhase(phase.id)}
              onMouseLeave={() => setHoveredPhase(null)}
            ></div>
          ))}
        </div>
        <div className="tl-bar-bg"></div>
        <div className="tl-bar-fill"></div>
      </div>
    </section>
  );
};

export default GrowthTimeline;
