import React, { useEffect, useRef } from 'react';

const Ticker: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerRef.current && innerRef.current.scrollWidth < window.innerWidth * 2) {
      innerRef.current.innerHTML += innerRef.current.innerHTML;
    }
  }, []);

  return (
    <div className="ticker">
      <div className="ticker-inner" id="tickerInner" ref={innerRef}>
        <span className="t-item t-up">EURUSD <em>1.0847</em> ▲0.12%</span>
        <span className="t-item t-dn">XAUUSD <em>2,341.50</em> ▼0.08%</span>
        <span className="t-item t-up">US30 <em>38,742</em> ▲0.43%</span>
        <span className="t-item t-up">BTCUSD <em>67,320</em> ▲1.27%</span>
        <span className="t-item t-dn">GBPUSD <em>1.2634</em> ▼0.05%</span>
        <span className="t-item t-up">NAS100 <em>17,850</em> ▲0.89%</span>
        <span className="t-item t-up">EURUSD <em>1.0847</em> ▲0.12%</span>
        <span className="t-item t-dn">XAUUSD <em>2,341.50</em> ▼0.08%</span>
        <span className="t-item t-up">US30 <em>38,742</em> ▲0.43%</span>
        <span className="t-item t-up">BTCUSD <em>67,320</em> ▲1.27%</span>
        <span className="t-item t-dn">GBPUSD <em>1.2634</em> ▼0.05%</span>
        <span className="t-item t-up">NAS100 <em>17,850</em> ▲0.89%</span>
      </div>
    </div>
  );
};

export default Ticker;
