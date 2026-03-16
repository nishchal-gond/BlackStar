import React from 'react';

const Charts: React.FC = () => {
  return (
    <>
      <section className="charts-sec" id="charts">
        <div className="sec-hdr" data-r>
          <div className="sec-eye">Revenue Intelligence</div>
          <h2 className="sec-ttl">Revenue <span className="grad">Breakdown</span></h2>
        </div>
        <div className="charts-row">
          {/* DONUT */}
          <div className="cbox" data-r>
            <div className="cbox-ttl">REVENUE STREAMS</div>
            <div className="donut-w">
              <div className="donut-svg">
                <svg width="168" height="168" viewBox="0 0 168 168">
                  <defs>
                    <filter id="dg">
                      <feGaussianBlur stdDeviation="3" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <circle cx="84" cy="84" r="62" fill="none" stroke="#00f5d4" strokeWidth="22"
                    strokeDasharray="140 250" strokeDashoffset="0" transform="rotate(-90 84 84)"
                    filter="url(#dg)" opacity=".9" />
                  <circle cx="84" cy="84" r="62" fill="none" stroke="#00c8ff" strokeWidth="22"
                    strokeDasharray="58.4 331.6" strokeDashoffset="-140" transform="rotate(-90 84 84)"
                    opacity=".85" />
                  <circle cx="84" cy="84" r="62" fill="none" stroke="#bf5fff" strokeWidth="22"
                    strokeDasharray="113 277" strokeDashoffset="-198.4" transform="rotate(-90 84 84)"
                    filter="url(#dg)" opacity=".9" />
                  <circle cx="84" cy="84" r="62" fill="none" stroke="#ff8c00" strokeWidth="22"
                    strokeDasharray="54.6 335.4" strokeDashoffset="-311.4" transform="rotate(-90 84 84)"
                    filter="url(#dg)" opacity=".9" />
                  <circle cx="84" cy="84" r="62" fill="none" stroke="#ff2d78" strokeWidth="22"
                    strokeDasharray="23.4 366.6" strokeDashoffset="-366" transform="rotate(-90 84 84)"
                    opacity=".8" />
                </svg>
                <div className="dctr">
                  <div className="dctr-v">5.84M</div>
                  <div className="dctr-l">AED Total</div>
                </div>
              </div>
              <div className="dleg">
                <div className="dleg-i">
                  <div className="dleg-dot" style={{ background: '#00f5d4', boxShadow: '0 0 6px #00f5d4' }}></div>
                  <div>
                    <div className="dleg-name">Students</div><span className="dleg-aed">2.1M AED</span>
                  </div>
                  <div className="dleg-pct ct">36%</div>
                </div>
                <div className="dleg-i">
                  <div className="dleg-dot" style={{ background: '#00c8ff' }}></div>
                  <div>
                    <div className="dleg-name">Retention</div><span className="dleg-aed">876K AED</span>
                  </div>
                  <div className="dleg-pct cb">15%</div>
                </div>
                <div className="dleg-i">
                  <div className="dleg-dot" style={{ background: '#bf5fff', boxShadow: '0 0 6px #bf5fff' }}></div>
                  <div>
                    <div className="dleg-name">IB / PAMM</div><span className="dleg-aed">1.7M AED</span>
                  </div>
                  <div className="dleg-pct cp">29%</div>
                </div>
                <div className="dleg-i">
                  <div className="dleg-dot" style={{ background: '#ff8c00', boxShadow: '0 0 6px #ff8c00' }}></div>
                  <div>
                    <div className="dleg-name">Tech Business</div><span className="dleg-aed">817K AED</span>
                  </div>
                  <div className="dleg-pct co">14%</div>
                </div>
                <div className="dleg-i">
                  <div className="dleg-dot" style={{ background: '#ff2d78' }}></div>
                  <div>
                    <div className="dleg-name">HNWI / Events</div><span className="dleg-aed">350K AED</span>
                  </div>
                  <div className="dleg-pct ck">6%</div>
                </div>
              </div>
            </div>
          </div>
          {/* LINE CHART */}
          <div className="cbox" data-r data-d="2">
            <div className="cbox-ttl">MONTHLY REVENUE SCALING</div>
            <svg viewBox="0 0 520 220" style={{ width: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="gT" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00f5d4" stopOpacity=".35" />
                  <stop offset="100%" stopColor="#00f5d4" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gP" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bf5fff" stopOpacity=".3" />
                  <stop offset="100%" stopColor="#bf5fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gO" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff8c00" stopOpacity=".3" />
                  <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
                </linearGradient>
                <filter id="gl_charts">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <line x1="50" y1="20" x2="50" y2="185" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
              <line x1="50" y1="185" x2="510" y2="185" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
              <line x1="50" y1="110" x2="510" y2="110" stroke="rgba(255,255,255,.04)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="50" x2="510" y2="50" stroke="rgba(255,255,255,.04)" strokeWidth="1" strokeDasharray="4 4" />
              <text x="45" y="190" className="cax" textAnchor="end">0</text>
              <text x="45" y="115" className="cax" textAnchor="end">250K</text>
              <text x="45" y="55" className="cax" textAnchor="end">500K</text>
              <text x="89" y="200" className="cax" textAnchor="middle">M1</text>
              <text x="131" y="200" className="cax" textAnchor="middle">M2</text>
              <text x="173" y="200" className="cax" textAnchor="middle">M3</text>
              <text x="215" y="200" className="cax" textAnchor="middle">M4</text>
              <text x="257" y="200" className="cax" textAnchor="middle">M5</text>
              <text x="299" y="200" className="cax" textAnchor="middle">M6</text>
              <text x="341" y="200" className="cax" textAnchor="middle">M7</text>
              <text x="383" y="200" className="cax" textAnchor="middle">M8</text>
              <text x="425" y="200" className="cax" textAnchor="middle">M9</text>
              <text x="467" y="200" className="cax" textAnchor="middle">M10</text>
              <text x="510" y="200" className="cax" textAnchor="middle">M12</text>
              <polygon points="89,169 131,160 173,149 215,141 257,137 299,134 341,131 383,129 425,127 467,126 510,124 510,185 89,185" fill="url(#gT)" opacity=".8" />
              <polyline points="89,169 131,160 173,149 215,141 257,137 299,134 341,131 383,129 425,127 467,126 510,124" fill="none" stroke="#00f5d4" strokeWidth="2.5" strokeLinejoin="round" filter="url(#gl_charts)" />
              <polygon points="89,185 131,185 173,181 215,174 257,166 299,157 341,152 383,147 425,142 467,139 510,135 510,185 89,185" fill="url(#gP)" opacity=".7" />
              <polyline points="89,185 131,185 173,181 215,174 257,166 299,157 341,152 383,147 425,142 467,139 510,135" fill="none" stroke="#bf5fff" strokeWidth="2.5" strokeLinejoin="round" filter="url(#gl_charts)" />
              <polygon points="89,185 131,185 173,185 215,185 257,182 299,178 341,173 383,167 425,163 467,159 510,152 510,185 89,185" fill="url(#gO)" opacity=".7" />
              <polyline points="89,185 131,185 173,185 215,185 257,182 299,178 341,173 383,167 425,163 467,159 510,152" fill="none" stroke="#ff8c00" strokeWidth="2.5" strokeLinejoin="round" filter="url(#gl_charts)" />
              <line x1="173" y1="20" x2="173" y2="185" stroke="rgba(255,215,0,.3)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="177" y="30" fill="#ffd700" fontSize="8" fontFamily="'Share Tech Mono',monospace">BREAK-EVEN</text>
            </svg>
            <div className="chart-legd">
              <div className="legd-i ct">
                <div className="legd-ln" style={{ background: '#00f5d4', boxShadow: '0 0 4px #00f5d4' }}></div>Students
              </div>
              <div className="legd-i cp">
                <div className="legd-ln" style={{ background: '#bf5fff', boxShadow: '0 0 4px #bf5fff' }}></div>IB / PAMM
              </div>
              <div className="legd-i co">
                <div className="legd-ln" style={{ background: '#ff8c00', boxShadow: '0 0 4px #ff8c00' }}></div>Tech
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charts;
