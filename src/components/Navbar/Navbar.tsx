import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      // Active section tracking logic
      const sections = ['metrics', 'pyramid', 'floorplan', 'vision', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`nav ${isScrolled ? 'on' : ''}`} id="nav">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-b">BTB</span>
          <span className="logo-a">ACADEMY</span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a href="#kpi" className={activeSection === 'kpi' || activeSection === 'metrics' ? 'active' : ''}>Metrics</a>
          </li>
          <li>
            <a href="#pyramid" className={activeSection === 'pyramid' ? 'active' : ''}>Revenue</a>
          </li>
          <li>
            <a href="#floorplan" className={activeSection === 'floorplan' ? 'active' : ''}>Campus</a>
          </li>
          <li>
            <a href="#vision" className={activeSection === 'vision' ? 'active' : ''}>Vision</a>
          </li>
          <li>
            <a href="#contact" className={`nav-cta ${activeSection === 'contact' ? 'active' : ''}`}>Apply Now</a>
          </li>
        </ul>

        <button 
          className="hamburger" 
          id="hbg" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span style={isMenuOpen ? {transform: 'rotate(45deg) translate(5px, 5px)'} : {}}></span>
          <span style={isMenuOpen ? {opacity: 0} : {}}></span>
          <span style={isMenuOpen ? {transform: 'rotate(-45deg) translate(5px, -5px)'} : {}}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
