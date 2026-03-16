import React, { useEffect, useRef, useState } from 'react';
import './EcosystemCards.css';

interface EcoCard {
  icon: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
  accColor: string;
  delayStr: string;
}

const ECO_DATA: EcoCard[] = [
  // Top Row
  {
    icon: '🎓', num: '01', title: 'Trading Education',
    desc: 'European theatre classrooms. Live market sessions and structured curriculum.',
    tags: ['Curriculum', 'Live Trading', 'Certification'],
    accColor: '#00f5d4', delayStr: '1'
  },
  {
    icon: '🖥️', num: '02', title: 'Professional Trader Rooms',
    desc: 'Glass-cube private suites with dual monitors and institutional servers.',
    tags: ['Live Trading', 'Prop Desk', 'Glass Cube'],
    accColor: '#00c8ff', delayStr: '2'
  },
  {
    icon: '📊', num: '03', title: 'Marketing Department',
    desc: 'Full in-house marketing engine driving lead generation and brand strategy.',
    tags: ['Lead Gen', 'Social', 'Funnels'],
    accColor: '#bf5fff', delayStr: '3'
  },
  // Bottom Row
  {
    icon: '💼', num: '04', title: 'Sales Operations',
    desc: 'Open sales floor managing IB partnerships and enterprise broker networks.',
    tags: ['IB Network', 'PAMM', 'Brokers'],
    accColor: '#ff8c00', delayStr: '1'
  },
  {
    icon: '🎙️', num: '05', title: 'Media & Podcast Studio',
    desc: 'Professional 4K media suite building authority across YouTube and podcasts.',
    tags: ['Podcast', 'YouTube', 'Content'],
    accColor: '#ff2d78', delayStr: '2'
  },
  {
    icon: '🌿', num: '06', title: 'Community & Networking',
    desc: 'Neon-lit garden lounge where mentors meet students and deals are made.',
    tags: ['Mentorship', 'Networking', 'Community'],
    accColor: '#39ff14', delayStr: '3'
  }
];

const EcosystemCards: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="eco-sec" id="ecosystem" ref={secRef}>
      <div className={`sec-hdr ${isVisible ? 'vis' : ''}`} data-r>
        <div className="sec-eye">Core Infrastructure</div>
        <h2 className="sec-ttl">The <span className="grad">BTB Ecosystem</span></h2>
        <p className="sec-sub">Six interconnected departments. One unified trading powerhouse.</p>
      </div>

      <div className="eco-grid">
        {ECO_DATA.map((card, i) => (
          <div 
            key={i} 
            className={`ecard ${isVisible ? 'vis' : ''}`} 
            style={{ '--acc': card.accColor } as React.CSSProperties}
            data-d={card.delayStr}
          >
            <div className="eglow"></div>
            <span className="eicon">{card.icon}</span>
            <div className="enum">{card.num}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="etags">
              {card.tags.map((tag, ti) => (
                <span key={ti}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemCards;
