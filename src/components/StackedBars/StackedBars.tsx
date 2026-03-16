import React, { useState, useEffect, useRef } from 'react';

interface Segment {
  cat: string;
  pct: number;
  color: string;
}

interface MonthData {
  mo: string;
  tot: string;
  segments: Segment[];
  q?: string;
  revenue: number;
}

const STREAMS = [
  { id: 'students', label: 'Students', color: '#00f5d4' },
  { id: 'retention', label: 'Retention', color: '#00c8ff' },
  { id: 'ibpamm', label: 'IB / PAMM', color: '#bf5fff' },
  { id: 'tech', label: 'Tech', color: '#ff8c00' },
  { id: 'hnwi', label: 'HNWI / Events', color: '#ff2d78' },
];

const DATA: MonthData[] = [
  { mo: 'M1', tot: '60K', revenue: 60000, segments: [{ cat: 'students', pct: 100, color: '#00f5d4' }], q: 'Q1 Performance' },
  { mo: 'M2', tot: '110K', revenue: 110000, segments: [{ cat: 'students', pct: 82, color: '#00f5d4' }, { cat: 'retention', pct: 18, color: '#00c8ff' }] },
  { mo: 'M3', tot: '165K', revenue: 165000, segments: [{ cat: 'students', pct: 58, color: '#00f5d4' }, { cat: 'retention', pct: 17.5, color: '#00c8ff' }, { cat: 'ibpamm', pct: 24.5, color: '#bf5fff' }] },
  { mo: 'M4', tot: '240K', revenue: 240000, segments: [{ cat: 'students', pct: 47, color: '#00f5d4' }, { cat: 'retention', pct: 16, color: '#00c8ff' }, { cat: 'ibpamm', pct: 37, color: '#bf5fff' }], q: 'Q2 Scaling' },
  { mo: 'M5', tot: '320K', revenue: 320000, segments: [{ cat: 'students', pct: 41, color: '#00f5d4' }, { cat: 'retention', pct: 14, color: '#00c8ff' }, { cat: 'ibpamm', pct: 35, color: '#bf5fff' }, { cat: 'tech', pct: 10, color: '#ff8c00' }] },
  { mo: 'M6', tot: '390K', revenue: 390000, segments: [{ cat: 'students', pct: 38, color: '#00f5d4' }, { cat: 'retention', pct: 14, color: '#00c8ff' }, { cat: 'ibpamm', pct: 34, color: '#bf5fff' }, { cat: 'tech', pct: 14, color: '#ff8c00' }] },
  { mo: 'M7', tot: '490K', revenue: 490000, segments: [{ cat: 'students', pct: 32, color: '#00f5d4' }, { cat: 'retention', pct: 12, color: '#00c8ff' }, { cat: 'ibpamm', pct: 33, color: '#bf5fff' }, { cat: 'tech', pct: 18, color: '#ff8c00' }, { cat: 'hnwi', pct: 5, color: '#ff2d78' }], q: 'Q3 Expansion' },
  { mo: 'M8', tot: '560K', revenue: 560000, segments: [{ cat: 'students', pct: 30, color: '#00f5d4' }, { cat: 'retention', pct: 12, color: '#00c8ff' }, { cat: 'ibpamm', pct: 32, color: '#bf5fff' }, { cat: 'tech', pct: 19, color: '#ff8c00' }, { cat: 'hnwi', pct: 7, color: '#ff2d78' }] },
  { mo: 'M9', tot: '640K', revenue: 640000, segments: [{ cat: 'students', pct: 29, color: '#00f5d4' }, { cat: 'retention', pct: 11, color: '#00c8ff' }, { cat: 'ibpamm', pct: 31, color: '#bf5fff' }, { cat: 'tech', pct: 20, color: '#ff8c00' }, { cat: 'hnwi', pct: 9, color: '#ff2d78' }] },
  { mo: 'M10', tot: '720K', revenue: 720000, segments: [{ cat: 'students', pct: 27, color: '#00f5d4' }, { cat: 'retention', pct: 11, color: '#00c8ff' }, { cat: 'ibpamm', pct: 30, color: '#bf5fff' }, { cat: 'tech', pct: 21, color: '#ff8c00' }, { cat: 'hnwi', pct: 11, color: '#ff2d78' }], q: 'Q4 Optimization' },
  { mo: 'M11', tot: '810K', revenue: 810000, segments: [{ cat: 'students', pct: 26, color: '#00f5d4' }, { cat: 'retention', pct: 10, color: '#00c8ff' }, { cat: 'ibpamm', pct: 29, color: '#bf5fff' }, { cat: 'tech', pct: 22, color: '#ff8c00' }, { cat: 'hnwi', pct: 13, color: '#ff2d78' }] },
  { mo: 'M12', tot: '900K', revenue: 900000, segments: [{ cat: 'students', pct: 23.5, color: '#00f5d4' }, { cat: 'retention', pct: 10, color: '#00c8ff' }, { cat: 'ibpamm', pct: 28, color: '#bf5fff' }, { cat: 'tech', pct: 23.5, color: '#ff8c00' }, { cat: 'hnwi', pct: 15, color: '#ff2d78' }] },
];

const StackedBars: React.FC = () => {
  const [visibleStreams, setVisibleStreams] = useState<string[]>(STREAMS.map(s => s.id));
  const [isVisible, setIsVisible] = useState(false);
  const [tooltip, setTooltip] = useState<{ cat: string; val: string; mo: string; share: string; x: number; y: number; vis: boolean }>({
    cat: '', val: '', mo: '', share: '', x: 0, y: 0, vis: false
  });
  
  const secRef = useRef<HTMLElement>(null);
  const maxRevenue = 900000; // M12

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleStream = (id: string) => {
    setVisibleStreams(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const handleMouseMove = (e: React.MouseEvent, seg: Segment, mo: string, totRevenue: number) => {
    setTooltip({
      cat: STREAMS.find(s => s.id === seg.cat)?.label || seg.cat,
      val: `${Math.round((seg.pct / 100) * totRevenue / 1000)}K AED`,
      mo,
      share: `${seg.pct}% share`,
      x: e.clientX,
      y: e.clientY,
      vis: true
    });
  };

  const calculateQuarterTotal = (startIndex: number) => {
    const qData = DATA.slice(startIndex, startIndex + 3);
    const total = qData.reduce((acc, curr) => acc + curr.revenue, 0);
    return `${(total / 1000).toFixed(0)}K AED`;
  };

  return (
    <section className="stacked-sec" id="stacked" ref={secRef}>
      <div className={`sec-hdr ${isVisible ? 'vis' : ''}`} data-r>
        <div className="sec-eye">Institutional Scaling</div>
        <h2 className="sec-ttl">Monthly <span className="grad">Revenue Stack</span></h2>
      </div>

      <div className="rbar-wrap">
        <div className="sleg-row">
          {STREAMS.map(s => (
            <div 
              key={s.id} 
              className={`sleg-i ${!visibleStreams.includes(s.id) ? 'off' : ''}`}
              onClick={() => toggleStream(s.id)}
            >
              <div className="sleg-d" style={{ background: s.color, color: s.color }}></div>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        {DATA.map((d, i) => {
          const visibleSegments = d.segments.filter(s => visibleStreams.includes(s.cat));
          const totalPct = visibleSegments.reduce((acc, curr) => acc + curr.pct, 0);
          const showQuarter = d.q;
          
          return (
            <React.Fragment key={d.mo}>
              {showQuarter && (
                <div className="q-label">
                  {showQuarter.toUpperCase()}
                  <span className="q-perf">Total Revenue: {calculateQuarterTotal(i)}</span>
                </div>
              )}
              <div className={`rbar-row ${isVisible ? 'vis' : ''}`}>
                <div className="rbar-mo">{d.mo}</div>
                <div className="rbar-track">
                  {visibleSegments.map((seg, si) => {
                    const label = STREAMS.find(s => s.id === seg.cat)?.label || seg.cat;
                    const revenueVal = Math.round((seg.pct / 100) * d.revenue / 1000);
                    return (
                      <div 
                        key={si}
                        className="rbar-seg"
                        style={{ 
                          width: `${(seg.pct / totalPct) * 100 * (d.revenue / maxRevenue)}%`,
                          background: seg.color,
                          transitionDelay: `${si * 0.1}s`
                        }}
                        onMouseMove={(e) => handleMouseMove(e, seg, d.mo, d.revenue)}
                        onMouseLeave={() => setTooltip(prev => ({ ...prev, vis: false }))}
                      >
                        {seg.pct > 18 && (
                          <span className="seg-lbl">
                            {label} — {revenueVal}K
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="rbar-tot">
                  {d.tot} <span className="trnd-up">▲</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}

        {/* Revenue Grid Markers */}
        <div className="grid-markers">
          <span>0</span>
          <span>100K</span>
          <span>200K</span>
          <span>300K</span>
          <span>400K</span>
          <span>500K</span>
          <span>600K</span>
          <span>700K</span>
          <span>800K</span>
          <span>900K</span>
        </div>
      </div>

      <div 
        className={`rtip ${tooltip.vis ? 'vis' : ''}`}
        style={{ left: tooltip.x, top: tooltip.y }}
      >
        <div className="rtip-cat">{tooltip.cat}</div>
        <div className="rtip-val">{tooltip.val}</div>
        <div className="rtip-sh">{tooltip.share} · {tooltip.mo}</div>
      </div>
    </section>
  );
};

export default StackedBars;
