import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="foot-in">
        <div className="foot-logo">
          <span className="logo-b">BTB</span>
          <span className="logo-a">ACADEMY</span>
        </div>
        <div className="foot-tag">Trading · Education · Media Ecosystem · Dubai UAE</div>
        <div className="foot-links">
          <a href="#kpi">Metrics</a>
          <a href="#pyramid">Revenue</a>
          <a href="#floorplan">Campus</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Apply</a>
        </div>
        <div className="foot-copy">
          © 2025 BTB Academy. All rights reserved. Confidential — For Investor Reference.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
