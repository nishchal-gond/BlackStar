import React, { useEffect, useState, useRef } from 'react';
import './TechStack.css';

interface TechNode {
  id: string;
  icon: string;
  title: string;
  features: (string | { text: string; col: string })[];
  enables: string[];
  delay: number;
}

const TECH_DATA: TechNode[] = [
  {
    id: 'tcrm',
    icon: '📋',
    title: 'CRM & Marketing',
    features: ['HubSpot / GHL CRM', 'Email & SMS Automation', 'Lead scoring & pipelines', 'Referral tracking', 'Social ad integration'],
    enables: ['Students', 'Retention', 'IB Referrals'],
    delay: 0.1
  },
  {
    id: 'tweb',
    icon: '🌐',
    title: 'Website & App',
    features: ['Trading academy portal', 'Student LMS dashboard', 'Mobile app (iOS/Android)', 'PAMM investor portal', 'Live trading room'],
    enables: ['Students', 'PAMM', 'Retention'],
    delay: 0.2
  },
  {
    id: 'tsvr',
    icon: '🖥️',
    title: 'Server / Data Center',
    features: ['Dedicated trading servers', 'VPS hosting (resell)', 'Data broker licensing', 'Low-latency execution', 'SaaS infrastructure'],
    enables: ['Tech Clients', 'SaaS', 'Data Broker'],
    delay: 0.3
  },
  {
    id: 'tai',
    icon: '🤖',
    title: 'AI Tooling',
    features: ['AI trading signals', 'Sentiment analysis', 'Chatbot student support', 'Algo backtesting suite', 'Risk monitoring AI'],
    enables: ['PAMM', 'HNWI', 'SaaS'],
    delay: 0.4
  },
  {
    id: 'tacd',
    icon: '🏛️',
    title: 'Academy Space',
    features: ['Glass cube trading floor', 'Neon-lit event hall', 'Podcast / media studio', 'Neon garden lounge', 'Franchise showroom'],
    enables: ['Events', 'HNWI', 'Brand', 'Franchise'],
    delay: 0.5
  },
  {
    id: 'teco',
    icon: '🔄',
    title: 'Ecosystem Flow',
    features: [
      { text: 'CRM → student acquisition', col: 'var(--teal)' },
      { text: 'App → retention & PAMM', col: 'var(--blue)' },
      { text: 'Server → tech revenue', col: 'var(--orange)' },
      { text: 'AI → edge & premium', col: 'var(--purple)' },
      { text: 'Space → brand & events', col: 'var(--gold)' }
    ],
    enables: ['Ecosystem'],
    delay: 0.6
  }
];

const TechStack: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.05 });
    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tech-sec" id="tech" ref={secRef}>
      <div className="dashboard-container">
        <div className={`sec-hdr ${isVisible ? 'vis' : ''}`} data-r>
          <div className="sec-eye">Infrastructure</div>
          <h2 className="sec-ttl">Tech Stack <span className="grad">&amp; Ecosystem</span></h2>
          <p className="sec-sub">Six technology pillars of technology enabling every revenue stream in the ecosystem.</p>
        </div>

        <div className="tech-grid">
          {TECH_DATA.map((node, i) => (
            <React.Fragment key={i}>
              <div 
                className={`tnode ${node.id} ${isVisible ? 'vis' : ''}`} 
                style={{ transitionDelay: `${node.delay}s` }}
              >
                <div className="tnode-hdr">
                  <div className="tnode-ico">{node.icon}</div>
                  <div className="tnode-ttl">{node.title}</div>
                </div>
                <ul>
                  {node.features.map((f, fi) => {
                    const isObj = typeof f === 'object';
                    return (
                      <li key={fi} style={isObj ? { color: f.col } : {}}>
                        {isObj ? f.text : f}
                      </li>
                    );
                  })}
                </ul>
                <div className="tenables">
                  {node.id === 'teco' ? 'All streams → ' : 'Enables → '}
                  {node.enables.map((e, ei) => (
                    <span key={ei}>{e}</span>
                  ))}
                </div>
                
                {/* Flow Connectors */}
                {i === 0 && <div className="flow-arrow flow-h flow-0-1"></div>}
                {i === 1 && <div className="flow-arrow flow-h flow-1-2"></div>}
                {i === 0 && <div className="flow-arrow flow-v flow-0-3"></div>}
                {i === 1 && <div className="flow-arrow flow-v flow-1-4"></div>}
                {i === 2 && <div className="flow-arrow flow-v flow-2-5"></div>}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
