import Background from '../Background/Background';
import Ticker from '../Ticker/Ticker';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <Background />
      <Ticker />
      <div className="hero-content">
        <div className="h-badge"><span className="bdot"></span>DUBAI · UAE · TRADING ECOSYSTEM · EST. 2025</div>
        <h1 className="h-title">
          <span className="t-btb">BTB</span>
          <span className="t-acad">ACADEMY</span>
        </h1>
        <p className="h-tag">Trading &nbsp;·&nbsp; Education &nbsp;·&nbsp; Media Ecosystem</p>
        <p className="h-sub">Where elite traders are built. A full-spectrum ecosystem combining professional trading infrastructure, world-class education, and media authority — all under one roof in Dubai.</p>
        <div className="h-btns">
          <a href="#pyramid" className="btn-p">
            <span>Explore Revenue Model</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#floorplan" className="btn-g">View Campus</a>
        </div>
        <div className="h-stats">
          <div className="stat">
            <span className="snum ct" data-count="5840000" data-fmt="short" data-pre="AED ">0</span>
            <span className="slbl">Year 1 Revenue</span>
          </div>
          <div className="sdiv"></div>
          <div className="stat">
            <span className="snum ct" data-count="480">0</span>
            <span className="slbl">Students Y1</span>
          </div>
          <div className="sdiv"></div>
          <div className="stat">
            <span className="snum ct" data-count="45" data-suf="%">0</span>
            <span className="slbl">Net Margin</span>
          </div>
          <div className="sdiv"></div>
          <div className="stat">
            <span className="snum ct" data-count="1800" data-suf=" sqft">0</span>
            <span className="slbl">Campus</span>
          </div>
          <div className="sdiv"></div>
          <div className="stat">
            <span className="snum ct" data-count="6">0</span>
            <span className="slbl">Departments</span>
          </div>
        </div>
      </div>
      <div className="scroll-ind"><div className="sline"></div><span>SCROLL</span></div>
    </section>
  );
};

export default Hero;
