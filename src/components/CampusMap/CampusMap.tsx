import React, { useState, useEffect, useRef } from 'react';
import './CampusMap.css';

interface RoomData {
  ico: string;
  tag: string;
  ttl: string;
  fn: string;
  tm: string;
  pu: string;
  tags: string[];
  sq: string;
  col: string;
}

const ROOMS_DATA: Record<string, RoomData> = {
  entrance: { 
    ico: '🚪', tag: 'Entry Point', ttl: 'Grand Entrance & Reception', 
    fn: 'First impression management and visitor onboarding', 
    tm: 'Team: 1–2 reception staff', 
    pu: 'Creates immediate brand impact. Sets the tone before any word is spoken. Marble flooring, neon BTB arch, living walls.', 
    tags: ['220 sqft', 'Marble Floor', 'Neon Pillars', 'Living Walls'], 
    sq: '220 sqft', col: '#00f5d4' 
  },
  garden: { 
    ico: '🌿', tag: 'Community Zone', ttl: 'Neon Garden Lounge', 
    fn: 'Community networking, informal mentorship, and relaxation', 
    tm: 'Capacity: 8–12 people', 
    pu: 'Where relationships form. Students meet mentors, trades get discussed, and the BTB culture comes to life organically.', 
    tags: ['200 sqft', 'String Lights', 'Velvet Sofas', 'Biophilic'], 
    sq: '200 sqft', col: '#39ff14' 
  },
  trader1: { 
    ico: '🖥️', tag: 'Glass Cube', ttl: 'Trader Room 1', 
    fn: 'Professional trading, strategy execution, prop desk operations', 
    tm: 'Team: 4–6 active traders', 
    pu: 'Where real capital is deployed. Dual-monitor stations, institutional-grade internet, glass-cube environment built for performance.', 
    tags: ['180 sqft', 'Glass Walls', 'Dual Monitors', 'Prop Desk'], 
    sq: '180 sqft', col: '#00c8ff' 
  },
  trader2: { 
    ico: '🖥️', tag: 'Glass Cube', ttl: 'Trader Room 2', 
    fn: 'PAMM account management, HNWI client trading', 
    tm: 'Team: 4–6 traders', 
    pu: 'Dedicated to managed account trading. PAMM capital actively managed with full transparency through the glass walls.', 
    tags: ['160 sqft', 'Glass Walls', 'PAMM Desk', 'HNWI Trading'], 
    sq: '160 sqft', col: '#00c8ff' 
  },
  marketing: { 
    ico: '📊', tag: 'Glass Department', ttl: 'Marketing Department', 
    fn: 'Brand growth, lead generation, social media, paid advertising', 
    tm: 'Team: 3–5 staff', 
    pu: 'The growth engine. Generates qualified leads, manages funnels, runs content strategy and paid channels.', 
    tags: ['150 sqft', 'Glass Doors', 'Creative Hub', 'Lead Gen'], 
    sq: '150 sqft', col: '#bf5fff' 
  },
  podcast: { 
    ico: '🎙️', tag: 'Media Studio', ttl: 'Podcast & Media Studio', 
    fn: 'Media authority building, content production, YouTube, interviews', 
    tm: 'Host + 1–2 guests', 
    pu: 'Building BTB into the most trusted trading media brand in the Arab world. Podcasts, expert interviews, and educational video.', 
    tags: ['130 sqft', 'Round Table', 'ON AIR Sign', '4K Camera'], 
    sq: '130 sqft', col: '#ff2d78' 
  },
  sales: { 
    ico: '💼', tag: 'Open Floor', ttl: 'Open Sales Floor', 
    fn: 'Client acquisition, IB partnerships, broker relationship management', 
    tm: 'Team: 10–15 sales staff', 
    pu: 'High-energy open-plan sales environment. IB network management, PAMM client onboarding, enterprise broker partnerships.', 
    tags: ['320 sqft', 'Open Plan', 'Mentor Hub', 'IB Network'], 
    sq: '320 sqft', col: '#ff8c00' 
  },
  pantry: { 
    ico: '☕', tag: 'Break Area', ttl: 'Pantry & Kitchen', 
    fn: 'Team wellness, informal meetings, coffee culture', 
    tm: 'Shared by 25+ staff', 
    pu: 'Adjacent to the sales floor. The team eats together, talks together. Culture-building that reduces churn.', 
    tags: ['100 sqft', 'Coffee Bar', 'Fridge', 'Eat-in Table'], 
    sq: '100 sqft', col: '#9966ff' 
  },
  classroom1: { 
    ico: '🎓', tag: 'Theatre Classroom', ttl: 'Classroom 1 — Theatre Style', 
    fn: 'Live trading education, structured curriculum delivery', 
    tm: 'Capacity: 20–25 students', 
    pu: '4-tier European lecture hall with neon step-edge LEDs. Smart board front. Every student has perfect sightlines.', 
    tags: ['200 sqft', 'Tiered Seating', 'Smart Board', '4 Tiers'], 
    sq: '200 sqft', col: '#39ff14' 
  },
  classroom2: { 
    ico: '🎓', tag: 'Theatre Classroom', ttl: 'Classroom 2 — Theatre Style', 
    fn: 'Advanced cohorts, strategy masterclasses, certification programs', 
    tm: 'Capacity: 20–25 students', 
    pu: 'Mirror of Classroom 1. Runs parallel cohorts simultaneously. Also used for HNWI private sessions.', 
    tags: ['200 sqft', 'Tiered Seating', 'Smart Board', 'Private Sessions'], 
    sq: '200 sqft', col: '#39ff14' 
  },
};

const CampusMap: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  }, []);

  const handleRoomClick = (id: string) => {
    setSelectedRoom(id === selectedRoom ? null : id);
  };

  const activeRoomData = selectedRoom ? ROOMS_DATA[selectedRoom] : null;

  return (
    <section className="fp-sec" id="floorplan" ref={secRef}>
      <div className="dashboard-container">
        <div className={`sec-hdr ${isVisible ? 'vis' : ''}`} data-r>
          <div className="sec-eye">Campus Architecture</div>
          <h2 className="sec-ttl">Interactive <span className="grad">Campus Map</span></h2>
          <p className="sec-sub">Click any zone to explore. 1,800 sqft of purpose-built trading infrastructure.</p>
        </div>

        <div className={`fp-container ${isVisible ? 'vis' : ''}`} data-r>
          <div className="fp-wrap">
            <svg id="fsvg" viewBox="0 0 900 580" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="gsm">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="gmd">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <pattern id="fpg" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                  <path d="M 18 0 L 0 0 0 18" fill="none" stroke="rgba(0,245,212,.05)" stroke-width=".5" />
                </pattern>
                <linearGradient id="grt" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(0,245,212,.2)" />
                  <stop offset="100%" stop-color="rgba(0,200,255,.08)" />
                </linearGradient>
                <linearGradient id="grb" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(0,200,255,.18)" />
                  <stop offset="100%" stop-color="rgba(0,245,212,.06)" />
                </linearGradient>
                <linearGradient id="grp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(191,95,255,.18)" />
                  <stop offset="100%" stop-color="rgba(191,95,255,.05)" />
                </linearGradient>
                <linearGradient id="gro" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255,140,0,.15)" />
                  <stop offset="100%" stop-color="rgba(255,140,0,.04)" />
                </linearGradient>
                <linearGradient id="grk" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(255,45,120,.18)" />
                  <stop offset="100%" stop-color="rgba(255,45,120,.05)" />
                </linearGradient>
                <linearGradient id="grg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(57,255,20,.15)" />
                  <stop offset="100%" stop-color="rgba(57,255,20,.04)" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="880" height="560" rx="4" fill="rgba(3,7,18,.95)" stroke="rgba(0,245,212,.18)" stroke-width="1.5" />
              <rect x="10" y="10" width="880" height="560" fill="url(#fpg)" />
              <rect x="10" y="10" width="880" height="560" rx="4" fill="none" stroke="rgba(0,245,212,.1)" stroke-width="6" filter="url(#gsm)" />
              
              {/* ENTRANCE */}
              <g className={`fp-room ${selectedRoom === 'entrance' ? 'active' : ''}`} onClick={() => handleRoomClick('entrance')} tabIndex={0} role="button">
                <rect x="310" y="400" width="280" height="158" rx="2" fill="url(#grt)" stroke="rgba(0,245,212,.4)" stroke-width="1.5" className="rf" />
                <path d="M 350 558 L 350 445 Q 450 405 550 445 L 550 558" fill="rgba(0,245,212,.04)" stroke="rgba(0,245,212,.45)" stroke-width="1.5" />
                <path d="M 350 445 Q 450 405 550 445" fill="none" stroke="rgba(0,245,212,.8)" stroke-width="2.5" filter="url(#gsm)" />
                <circle cx="450" cy="438" r="17" fill="rgba(0,245,212,.1)" stroke="rgba(0,245,212,.6)" stroke-width="1.5" filter="url(#gsm)" />
                <text x="450" y="443" textAnchor="middle" fill="#00f5d4" fontSize="9" fontWeight="700" fontFamily="Orbitron,monospace">BTB</text>
                <rect x="342" y="444" width="9" height="114" fill="rgba(0,245,212,.15)" stroke="rgba(0,245,212,.4)" stroke-width="1" />
                <rect x="549" y="444" width="9" height="114" fill="rgba(0,245,212,.15)" stroke="rgba(0,245,212,.4)" stroke-width="1" />
                <line x1="346" y1="444" x2="346" y2="558" stroke="rgba(0,245,212,.6)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="553" y1="444" x2="553" y2="558" stroke="rgba(0,245,212,.6)" strokeWidth="1" filter="url(#gsm)" />
                <rect x="406" y="510" width="88" height="23" rx="2" fill="rgba(0,245,212,.12)" stroke="rgba(0,245,212,.4)" stroke-width="1" />
                <circle cx="330" cy="530" r="11" fill="rgba(57,255,20,.15)" stroke="rgba(57,255,20,.3)" stroke-width="1" />
                <circle cx="570" cy="530" r="11" fill="rgba(57,255,20,.15)" stroke="rgba(57,255,20,.3)" stroke-width="1" />
                <rect x="400" y="556" width="100" height="4" fill="rgba(3,7,18,1)" />
                <text x="450" y="475" textAnchor="middle" fill="rgba(0,245,212,.9)" fontSize="11" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">ENTRANCE</text>
                <text x="450" y="490" textAnchor="middle" fill="rgba(0,245,212,.4)" fontSize="7" fontFamily="Share Tech Mono,monospace" letterSpacing="1">GRAND FOYER · RECEPTION</text>
                <text x="450" y="522" textAnchor="middle" fill="rgba(0,245,212,.6)" fontSize="7" fontFamily="Share Tech Mono,monospace" letterSpacing="1">RECEPTION DESK</text>
              </g>

              {/* GARDEN */}
              <g className={`fp-room ${selectedRoom === 'garden' ? 'active' : ''}`} onClick={() => handleRoomClick('garden')} tabIndex={0} role="button">
                <rect x="10" y="180" width="185" height="220" fill="url(#grg)" stroke="rgba(57,255,20,.35)" stroke-width="1.5" className="rf" />
                <circle cx="58" cy="240" r="18" fill="rgba(20,80,30,.3)" stroke="rgba(57,255,20,.25)" stroke-width="1" />
                <circle cx="140" cy="240" r="16" fill="rgba(20,80,30,.3)" stroke="rgba(57,255,20,.25)" stroke-width="1" />
                <circle cx="100" cy="285" r="22" fill="rgba(20,80,30,.25)" stroke="rgba(57,255,20,.2)" stroke-width="1" />
                <circle cx="50" cy="350" r="20" fill="rgba(20,80,30,.2)" stroke="rgba(57,255,20,.2)" stroke-width="1" />
                <circle cx="150" cy="350" r="18" fill="rgba(20,80,30,.2)" stroke="rgba(57,255,20,.2)" stroke-width="1" />
                <path d="M 15 195 Q 50 205 90 195 Q 135 185 175 195" fill="none" stroke="rgba(255,215,0,.2)" stroke-width="1" />
                <circle cx="55" cy="203" r="4" fill="rgba(255,215,0,.7)" filter="url(#gsm)" />
                <circle cx="100" cy="192" r="4" fill="rgba(255,215,0,.7)" filter="url(#gsm)" />
                <circle cx="148" cy="200" r="4" fill="rgba(255,215,0,.7)" filter="url(#gsm)" />
                <text x="100" y="220" textAnchor="middle" fill="rgba(57,255,20,.9)" fontSize="12" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="3" filter="url(#gsm)">GARDEN</text>
                <text x="100" y="235" textAnchor="middle" fill="rgba(57,255,20,.4)" fontSize="8" fontFamily="Share Tech Mono,monospace" letterSpacing="1">LOUNGE · CHILL ZONE</text>
              </g>

              {/* TRADER 1 */}
              <g className={`fp-room ${selectedRoom === 'trader1' ? 'active' : ''}`} onClick={() => handleRoomClick('trader1')} tabIndex={0} role="button">
                <rect x="10" y="10" width="245" height="170" rx="2" fill="url(#grb)" stroke="rgba(0,200,255,.45)" stroke-width="1.5" className="rf" />
                <line x1="10" y1="10" x2="255" y2="10" stroke="rgba(0,200,255,.7)" strokeWidth="2" filter="url(#gsm)" />
                <line x1="255" y1="10" x2="255" y2="180" stroke="rgba(0,200,255,.7)" strokeWidth="2" filter="url(#gsm)" />
                <rect x="25" y="55" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <rect x="110" y="55" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <rect x="25" y="115" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <rect x="110" y="115" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <line x1="25" y1="99" x2="93" y2="99" stroke="rgba(0,200,255,.35)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="110" y1="99" x2="178" y2="99" stroke="rgba(0,200,255,.35)" strokeWidth="1" filter="url(#gsm)" />
                <rect x="88" y="178" width="55" height="4" fill="rgba(3,7,18,1)" />
                <text x="145" y="32" textAnchor="middle" fill="rgba(0,200,255,.9)" fontSize="10" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">TRADER ROOM 1</text>
                <text x="145" y="45" textAnchor="middle" fill="rgba(0,200,255,.4)" fontSize="8" fontFamily="Share Tech Mono,monospace">GLASS CUBE · 180 sqft</text>
              </g>

              {/* TRADER 2 */}
              <g className={`fp-room ${selectedRoom === 'trader2' ? 'active' : ''}`} onClick={() => handleRoomClick('trader2')} tabIndex={0} role="button">
                <rect x="255" y="10" width="235" height="170" rx="2" fill="url(#grb)" stroke="rgba(0,200,255,.45)" stroke-width="1.5" className="rf" />
                <line x1="255" y1="10" x2="490" y2="10" stroke="rgba(0,200,255,.7)" strokeWidth="2" filter="url(#gsm)" />
                <line x1="490" y1="10" x2="490" y2="180" stroke="rgba(0,200,255,.7)" strokeWidth="2" filter="url(#gsm)" />
                <rect x="270" y="55" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <rect x="355" y="55" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <rect x="270" y="115" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <rect x="355" y="115" width="68" height="44" rx="2" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.3)" stroke-width="1.5" />
                <line x1="270" y1="99" x2="338" y2="99" stroke="rgba(0,200,255,.35)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="355" y1="99" x2="423" y2="99" stroke="rgba(0,200,255,.35)" strokeWidth="1" filter="url(#gsm)" />
                <rect x="323" y="178" width="55" height="4" fill="rgba(3,7,18,1)" />
                <text x="372" y="32" textAnchor="middle" fill="rgba(0,200,255,.9)" fontSize="10" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">TRADER ROOM 2</text>
                <text x="372" y="45" textAnchor="middle" fill="rgba(0,200,255,.4)" fontSize="8" fontFamily="Share Tech Mono,monospace">GLASS CUBE · 160 sqft</text>
              </g>

              {/* MARKETING */}
              <g className={`fp-room ${selectedRoom === 'marketing' ? 'active' : ''}`} onClick={() => handleRoomClick('marketing')} tabIndex={0} role="button">
                <rect x="490" y="10" width="220" height="195" rx="2" fill="url(#grp)" stroke="rgba(191,95,255,.4)" stroke-width="1.5" className="rf" />
                <line x1="490" y1="10" x2="710" y2="10" stroke="rgba(191,95,255,.55)" strokeWidth="2" filter="url(#gsm)" />
                <rect x="505" y="60" width="48" height="35" rx="2" fill="rgba(191,95,255,.1)" stroke="rgba(191,95,255,.3)" stroke-width="1" />
                <rect x="565" y="60" width="48" height="35" rx="2" fill="rgba(191,95,255,.1)" stroke="rgba(191,95,255,.3)" stroke-width="1" />
                <rect x="625" y="60" width="48" height="35" rx="2" fill="rgba(191,95,255,.1)" stroke="rgba(191,95,255,.3)" stroke-width="1" />
                <rect x="505" y="110" width="48" height="35" rx="2" fill="rgba(191,95,255,.1)" stroke="rgba(191,95,255,.3)" stroke-width="1" />
                <rect x="565" y="110" width="48" height="35" rx="2" fill="rgba(191,95,255,.1)" stroke="rgba(191,95,255,.3)" stroke-width="1" />
                <rect x="625" y="110" width="70" height="60" rx="2" fill="rgba(191,95,255,.15)" stroke="rgba(191,95,255,.5)" stroke-width="1" />
                <text x="660" y="143" textAnchor="middle" fill="rgba(191,95,255,.7)" fontSize="7" fontFamily="Share Tech Mono,monospace">MGR</text>
                <rect x="543" y="203" width="55" height="4" fill="rgba(3,7,18,1)" />
                <text x="600" y="32" textAnchor="middle" fill="rgba(191,95,255,.9)" fontSize="10" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">MARKETING</text>
                <text x="600" y="46" textAnchor="middle" fill="rgba(191,95,255,.4)" fontSize="8" fontFamily="Share Tech Mono,monospace">GLASS DEPT · 150 sqft</text>
              </g>

              {/* PODCAST */}
              <g className={`fp-room ${selectedRoom === 'podcast' ? 'active' : ''}`} onClick={() => handleRoomClick('podcast')} tabIndex={0} role="button">
                <rect x="710" y="10" width="180" height="230" rx="2" fill="url(#grk)" stroke="rgba(255,45,120,.4)" stroke-width="1.5" className="rf" />
                <line x1="710" y1="10" x2="890" y2="10" stroke="rgba(255,45,120,.55)" strokeWidth="2" filter="url(#gsm)" />
                <circle cx="800" cy="130" r="44" fill="rgba(255,45,120,.06)" stroke="rgba(255,45,120,.4)" stroke-width="1.5" />
                <circle cx="800" cy="130" r="44" fill="none" stroke="rgba(255,45,120,.15)" stroke-width="8" />
                <circle cx="800" cy="130" r="46" fill="none" stroke="rgba(255,45,120,.2)" stroke-width="2" filter="url(#gsm)" />
                <circle cx="800" cy="93" r="8" fill="rgba(255,45,120,.2)" stroke="rgba(255,45,120,.5)" stroke-width="1" />
                <circle cx="836" cy="150" r="8" fill="rgba(255,45,120,.2)" stroke="rgba(255,45,120,.5)" stroke-width="1" />
                <circle cx="764" cy="150" r="8" fill="rgba(255,45,120,.2)" stroke="rgba(255,45,120,.5)" stroke-width="1" />
                <rect x="758" y="40" width="84" height="22" rx="3" fill="rgba(255,0,60,.2)" stroke="rgba(255,45,120,.6)" stroke-width="1.5" />
                <text x="800" y="56" textAnchor="middle" fill="#ff2d78" fontSize="9" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">ON AIR</text>
                <rect x="714" y="178" width="20" height="14" rx="2" fill="rgba(255,45,120,.1)" stroke="rgba(255,45,120,.3)" stroke-width="1" />
                <rect x="742" y="238" width="55" height="4" fill="rgba(3,7,18,1)" />
                <text x="800" y="218" textAnchor="middle" fill="rgba(255,45,120,.8)" fontSize="10" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">PODCAST</text>
                <text x="800" y="232" textAnchor="middle" fill="rgba(255,45,120,.35)" fontSize="8" fontFamily="Share Tech Mono,monospace">STUDIO · 130 sqft</text>
              </g>

              {/* SALES */}
              <g className={`fp-room ${selectedRoom === 'sales' ? 'active' : ''}`} onClick={() => handleRoomClick('sales')} tabIndex={0} role="button">
                <rect x="195" y="180" width="515" height="220" fill="url(#gro)" stroke="rgba(255,140,0,.3)" stroke-width="1.5" className="rf" />
                <rect x="215" y="215" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="275" y="215" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="215" y="265" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="275" y="265" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="390" y="215" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="450" y="215" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="390" y="265" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="450" y="265" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="560" y="215" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="620" y="215" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <rect x="560" y="265" width="48" height="36" rx="2" fill="rgba(255,140,0,.1)" stroke="rgba(255,140,0,.25)" stroke-width="1" />
                <ellipse cx="450" cy="345" rx="54" ry="27" fill="rgba(255,215,0,.07)" stroke="rgba(255,215,0,.3)" stroke-width="1.5" />
                <text x="450" y="340" textAnchor="middle" fill="rgba(255,215,0,.7)" fontSize="8" fontFamily="Share Tech Mono,monospace" letterSpacing="1">MENTOR HUB ⭐</text>
                <line x1="200" y1="395" x2="705" y2="395" stroke="rgba(255,140,0,.2)" strokeWidth="1" filter="url(#gsm)" />
                <text x="450" y="198" textAnchor="middle" fill="rgba(255,140,0,.9)" fontSize="12" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="3" filter="url(#gsm)">OPEN SALES FLOOR</text>
                <text x="450" y="211" textAnchor="middle" fill="rgba(255,140,0,.4)" fontSize="8" fontFamily="Share Tech Mono,monospace" letterSpacing="2">COMMUNITY · MENTORS ACCESSIBLE · 320 sqft</text>
              </g>

              {/* PANTRY */}
              <g className={`fp-room ${selectedRoom === 'pantry' ? 'active' : ''}`} onClick={() => handleRoomClick('pantry')} tabIndex={0} role="button">
                <rect x="710" y="240" width="180" height="160" fill="rgba(120,80,200,.08)" stroke="rgba(150,100,255,.35)" stroke-width="1.5" className="rf" />
                <rect x="718" y="248" width="155" height="18" rx="2" fill="rgba(150,100,255,.1)" stroke="rgba(150,100,255,.25)" stroke-width="1" />
                <text x="800" y="261" textAnchor="middle" fill="rgba(150,100,255,.6)" fontSize="7" fontFamily="Share Tech Mono,monospace">COUNTER · COFFEE ☕</text>
                <rect x="740" y="320" width="120" height="35" rx="2" fill="rgba(150,100,255,.08)" stroke="rgba(150,100,255,.2)" stroke-width="1" />
                <text x="800" y="300" textAnchor="middle" fill="rgba(150,100,255,.8)" fontSize="10" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">PANTRY</text>
              </g>

              {/* CLASSROOM 1 */}
              <g className={`fp-room ${selectedRoom === 'classroom1' ? 'active' : ''}`} onClick={() => handleRoomClick('classroom1')} tabIndex={0} role="button">
                <rect x="10" y="400" width="280" height="168" rx="2" fill="url(#grg)" stroke="rgba(57,255,20,.4)" stroke-width="1.5" className="rf" />
                <rect x="20" y="498" width="260" height="20" rx="1" fill="rgba(57,255,20,.04)" stroke="rgba(57,255,20,.15)" stroke-width="1" />
                <rect x="20" y="476" width="260" height="20" rx="1" fill="rgba(57,255,20,.035)" stroke="rgba(57,255,20,.12)" stroke-width="1" />
                <rect x="20" y="455" width="260" height="19" rx="1" fill="rgba(57,255,20,.025)" stroke="rgba(57,255,20,.1)" stroke-width="1" />
                <rect x="20" y="436" width="260" height="17" rx="1" fill="rgba(57,255,20,.02)" stroke="rgba(57,255,20,.08)" stroke-width="1" />
                <line x1="20" y1="498" x2="280" y2="498" stroke="rgba(57,255,20,.3)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="20" y1="476" x2="280" y2="476" stroke="rgba(57,255,20,.2)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="20" y1="455" x2="280" y2="455" stroke="rgba(57,255,20,.15)" strokeWidth="1" filter="url(#gsm)" />
                <rect x="20" y="520" width="260" height="40" rx="2" fill="rgba(255,215,0,.07)" stroke="rgba(255,215,0,.25)" stroke-width="1.5" />
                <rect x="110" y="527" width="80" height="21" rx="2" fill="rgba(255,215,0,.1)" stroke="rgba(255,215,0,.35)" stroke-width="1" />
                <text x="150" y="541" textAnchor="middle" fill="rgba(255,215,0,.7)" fontSize="7" fontFamily="Share Tech Mono,monospace">TEACHER DESK</text>
                <rect x="20" y="401" width="260" height="5" rx="1" fill="rgba(57,255,20,.06)" stroke="rgba(57,255,20,.2)" stroke-width="1" />
                <text x="150" y="420" textAnchor="middle" fill="rgba(57,255,20,.9)" fontSize="11" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">CLASSROOM 1</text>
                <text x="150" y="433" textAnchor="middle" fill="rgba(57,255,20,.35)" fontSize="8" fontFamily="Share Tech Mono,monospace">THEATRE STEPS · 200 sqft</text>
              </g>

              {/* CLASSROOM 2 */}
              <g className={`fp-room ${selectedRoom === 'classroom2' ? 'active' : ''}`} onClick={() => handleRoomClick('classroom2')} tabIndex={0} role="button">
                <rect x="610" y="400" width="280" height="168" rx="2" fill="url(#grg)" stroke="rgba(57,255,20,.4)" stroke-width="1.5" className="rf" />
                <rect x="620" y="498" width="260" height="20" rx="1" fill="rgba(57,255,20,.04)" stroke="rgba(57,255,20,.15)" stroke-width="1" />
                <rect x="620" y="476" width="260" height="20" rx="1" fill="rgba(57,255,20,.035)" stroke="rgba(57,255,20,.12)" stroke-width="1" />
                <rect x="620" y="455" width="260" height="19" rx="1" fill="rgba(57,255,20,.025)" stroke="rgba(57,255,20,.1)" stroke-width="1" />
                <rect x="620" y="436" width="260" height="17" rx="1" fill="rgba(57,255,20,.02)" stroke="rgba(57,255,20,.08)" stroke-width="1" />
                <line x1="620" y1="498" x2="880" y2="498" stroke="rgba(57,255,20,.3)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="620" y1="476" x2="880" y2="476" stroke="rgba(57,255,20,.2)" strokeWidth="1" filter="url(#gsm)" />
                <line x1="620" y1="455" x2="880" y2="455" stroke="rgba(57,255,20,.15)" strokeWidth="1" filter="url(#gsm)" />
                <rect x="620" y="520" width="260" height="40" rx="2" fill="rgba(255,215,0,.07)" stroke="rgba(255,215,0,.25)" stroke-width="1.5" />
                <rect x="710" y="527" width="80" height="21" rx="2" fill="rgba(255,215,0,.1)" stroke="rgba(255,215,0,.35)" stroke-width="1" />
                <text x="750" y="541" textAnchor="middle" fill="rgba(255,215,0,.7)" fontSize="7" fontFamily="Share Tech Mono,monospace">TEACHER DESK</text>
                <rect x="620" y="401" width="260" height="5" rx="1" fill="rgba(57,255,20,.06)" stroke="rgba(57,255,20,.2)" stroke-width="1" />
                <text x="750" y="420" textAnchor="middle" fill="rgba(57,255,20,.9)" fontSize="11" fontWeight="700" fontFamily="Orbitron,monospace" letterSpacing="2" filter="url(#gsm)">CLASSROOM 2</text>
                <text x="750" y="433" textAnchor="middle" fill="rgba(57,255,20,.35)" fontSize="8" fontFamily="Share Tech Mono,monospace">THEATRE STEPS · 200 sqft</text>
              </g>

              {/* Corner marks */}
              <path d="M 10 10 L 55 10 M 10 10 L 10 55" stroke="rgba(0,245,212,.7)" strokeWidth="2" fill="none" filter="url(#gsm)" />
              <path d="M 890 10 L 845 10 M 890 10 L 890 55" stroke="rgba(0,245,212,.7)" strokeWidth="2" fill="none" filter="url(#gsm)" />
              <path d="M 10 570 L 55 570 M 10 570 L 10 525" stroke="rgba(0,245,212,.7)" strokeWidth="2" fill="none" filter="url(#gsm)" />
              <path d="M 890 570 L 845 570 M 890 570 L 890 525" stroke="rgba(0,245,212,.7)" strokeWidth="2" fill="none" filter="url(#gsm)" />
              <text x="875" y="28" textAnchor="end" fill="rgba(0,245,212,.4)" fontSize="9" fontFamily="Share Tech Mono,monospace">N↑</text>
              <text x="875" y="565" textAnchor="end" fill="rgba(0,245,212,.3)" fontSize="8" fontFamily="Share Tech Mono,monospace">1,800 sqft TOTAL</text>
            </svg>

            {/* Room Panel */}
            <div className={`rpanel ${selectedRoom ? 'on' : ''}`} id="rpanel">
              <button className="rp-close" onClick={() => setSelectedRoom(null)}>✕</button>
              {activeRoomData && (
                <>
                  <div className="rp-icon">{activeRoomData.ico}</div>
                  <div className="rp-tag">{activeRoomData.tag}</div>
                  <h3>{activeRoomData.ttl}</h3>
                  <p><strong>Function:</strong> {activeRoomData.fn}</p>
                  <p><strong>Team:</strong> {activeRoomData.tm}</p>
                  <p><strong>Purpose:</strong> {activeRoomData.pu}</p>
                  <div className="rp-tags">
                    {activeRoomData.tags.map((t, idx) => <span key={idx}>{t}</span>)}
                  </div>
                  <div className="rp-sqft">{activeRoomData.sq}</div>
                </>
              )}
            </div>
            <div className="rp-bdrop" onClick={() => setSelectedRoom(null)}></div>
          </div>

          {/* Allocation Bar */}
          <div className="space-alloc-wrap">
            <div className="space-alloc-ttl">SPACE ALLOCATION</div>
            <div className="space-bar">
              <div className="space-seg" style={{ flex: 2.2, background: 'linear-gradient(90deg,#00f5d4,#00c8aa)' }}>Entrance 220</div>
              <div className="space-seg" style={{ flex: 1.8, background: 'rgba(57,255,20,.7)' }}>Garden 200</div>
              <div className="space-seg" style={{ flex: 1.7, background: 'rgba(0,200,255,.8)' }}>Traders 340</div>
              <div className="space-seg" style={{ flex: 1.5, background: 'rgba(191,95,255,.8)' }}>Mktg 150</div>
              <div className="space-seg" style={{ flex: 3.2, background: 'rgba(255,140,0,.75)' }}>Sales Floor 320</div>
              <div className="space-seg" style={{ flex: 1.3, background: 'rgba(255,45,120,.8)' }}>Podcast 130</div>
              <div className="space-seg" style={{ flex: 1, background: 'rgba(150,100,255,.8)' }}>Pantry</div>
              <div className="space-seg" style={{ flex: 2, background: 'rgba(57,255,20,.6)' }}>Classes 400</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusMap;
