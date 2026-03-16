import React from 'react';

const RevenuePyramid: React.FC = () => {
  return (
    <section className="pyr-sec" id="pyramid">
      <div className="sec-hdr" data-r>
        <div className="sec-eye">Growth Architecture</div>
        <h2 className="sec-ttl">▲ Pyramid of <span className="grad">Growth</span></h2>
        <p className="sec-sub">Foundation to full ecosystem. Each layer funds the next.</p>
      </div>

      <div className="pyr-wrap" data-r>
        {/* TOP - L5 */}
        <div className="plyr l5 w40">
          <div className="pbar">
            <div className="pbar-l">
              <div className="picons">👑 🌐 🔁</div>
              <div className="ptxt">
                <h4>Full Ecosystem</h4>
                <p>IB network · Tech scale · Brand authority</p>
              </div>
            </div>
            <div className="prev cg">
              5.84M AED<br />
              <span style={{ fontSize: '10px', color: '#8899aa', fontWeight: 400, fontFamily: 'var(--fb)' }}>Year 1 Total</span>
            </div>
          </div>
        </div>
        <div className="pcon cg"></div>

        {/* L4 */}
        <div className="plyr l4 w55">
          <div className="pbar">
            <div className="pbar-l">
              <div className="picons">💎 🏛️ 🎤</div>
              <div className="ptxt">
                <h4>Layer 4 · Premium Tier</h4>
                <p>HNWI clients · Franchise prep · Summits</p>
              </div>
            </div>
            <div className="prev ck">
              1.2M AED<br />
              <span style={{ fontSize: '10px', color: '#8899aa', fontWeight: 400, fontFamily: 'var(--fb)' }}>Months 9–12</span>
            </div>
          </div>
        </div>
        <div className="pcon cp"></div>

        {/* L3 */}
        <div className="plyr l3 w70">
          <div className="pbar">
            <div className="pbar-l">
              <div className="picons">🖥️ ☁️ 📊</div>
              <div className="ptxt">
                <h4>Layer 3 · Tech Business</h4>
                <p>SaaS · Data services · AI tooling</p>
              </div>
            </div>
            <div className="prev co">
              840K AED<br />
              <span style={{ fontSize: '10px', color: '#8899aa', fontWeight: 400, fontFamily: 'var(--fb)' }}>Months 5–12</span>
            </div>
          </div>
        </div>
        <div className="pcon co"></div>

        {/* L2 */}
        <div className="plyr l2 w85">
          <div className="pbar">
            <div className="pbar-l">
              <div className="picons">🔗 💹 🔄</div>
              <div className="ptxt">
                <h4>Layer 2 · Retention + IB / PAMM</h4>
                <p>Student retention · IB deposits · PAMM</p>
              </div>
            </div>
            <div className="prev cp">
              1.68M AED<br />
              <span style={{ fontSize: '10px', color: '#8899aa', fontWeight: 400, fontFamily: 'var(--fb)' }}>Months 3–12</span>
            </div>
          </div>
        </div>
        <div className="pcon cp"></div>

        {/* L1 BASE */}
        <div className="plyr l1 w100">
          <div className="pbar">
            <div className="pbar-l">
              <div className="picons">🎓 🤝 ⚙️</div>
              <div className="ptxt">
                <h4>Base · Foundation</h4>
                <p>Student intake · IB pilot · Infrastructure</p>
              </div>
            </div>
            <div className="prev ct">
              2.12M AED<br />
              <span style={{ fontSize: '10px', color: '#8899aa', fontWeight: 400, fontFamily: 'var(--fb)' }}>Months 1–6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenuePyramid;
