import React, { useEffect, useRef, useState } from 'react';
import './VisionTimeline.css';

interface Pillar {
  id: string;
  num: string;
  icon: string;
  title: string;
  desc: string;
}

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  sub: string;
}

const PILLARS: Pillar[] = [
  { id: 'p1', num: '01', icon: '🌍', title: 'GCC Expansion', desc: 'Franchise-ready model targeting Abu Dhabi, Riyadh, Doha, and Kuwait by Year 2–3.' },
  { id: 'p2', num: '02', icon: '🤖', title: 'Proprietary Tech', desc: 'In-house algo trading tools, SaaS platform, and data broker services creating a recurring tech revenue moat.' },
  { id: 'p3', num: '03', icon: '📡', title: 'Media Authority', desc: 'Podcast network and YouTube building the most trusted trading brand in the Arab world.' },
  { id: 'p4', num: '04', icon: '🏆', title: 'Community Flywheel', desc: 'Students become traders. Traders become mentors. Mentors become partners. Self-funding growth loop.' }
];

const TIMELINE: TimelineItem[] = [
  { id: 't1', period: '2025 — Y1', title: 'Launch & Foundation', sub: 'Dubai campus • 480 students • 6 departments' },
  { id: 't2', period: '2026 — Y2', title: 'Scale & Tech', sub: 'SaaS launch • IB network 50+ • Abu Dhabi branch' },
  { id: 't3', period: '2027 — Y3', title: 'GCC Franchise', sub: '5-city franchise • Proprietary fund • Media network' }
];

const VisionTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-sec" id="vision" ref={secRef}>
      <div className="vision-glow-bg"></div>
      <div className={`sec-hdr ${isVisible ? 'vis' : ''}`} data-r>
        <div className="sec-eye">Investor Deck</div>
        <h2 className="sec-ttl">The <span className="grad">Long-Term Vision</span></h2>
      </div>

      <div className="vision-grid">
        <div className={`v-stmt ${isVisible ? 'vis' : ''}`} data-r>
          <p className="v-big">BTB Academy is designed as a <em>scalable trading ecosystem</em> — combining education, professional trading, marketing, and media to build a dominant trading brand across the GCC and beyond.</p>
          <div className="v-div"></div>
          <p className="v-sm">We are not building a school. We are building a vertically integrated trading institution with multiple revenue streams, proprietary technology infrastructure, and a franchise-ready model targeting 10 cities by Year 3.</p>
        </div>

        <div className={`pillars ${isVisible ? 'vis' : ''}`} data-r>
          {PILLARS.map((p, i) => (
            <div 
              className={`pillar ${hoveredCard === p.id ? 'hovered' : ''}`} 
              key={p.id}
              data-idx={i}
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-num">{p.num}</div>
              <div className="p-ico-wrap">
                 <div className="p-ico">{p.icon}</div>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`v-timeline-wrapper ${isVisible ? 'vis' : ''}`} data-r>
        
        <div className="v-timeline-bar">
          <div className="vtl-nodes">
            {TIMELINE.map((_, i) => (
               <div key={`n-${i}`} className="vtl-node-wrap">
                 <div className="vtl-node" data-idx={i}></div>
               </div>
            ))}
          </div>
          <div className="vtl-bar-bg"></div>
          <div className="vtl-bar-fill"></div>
        </div>

        <div className="v-timeline-content">
          {TIMELINE.map((item, i) => (
             <div className="vtl-item" key={item.id} data-idx={i}>
                <div className="vtl-per">{item.period}</div>
                <div className="vtl-ttl">{item.title}</div>
                <div className="vtl-sub">{item.sub}</div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionTimeline;
