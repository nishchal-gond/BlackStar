import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import KPIDashboard from './components/KPIDashboard/KPIDashboard';
import RevenuePyramid from './components/RevenuePyramid/RevenuePyramid';
import Charts from './components/Charts/Charts';
import StackedBars from './components/StackedBars/StackedBars';
import TechStack from './components/TechStack/TechStack';
import CampusMap from './components/CampusMap/CampusMap';
import EcosystemCards from './components/EcosystemCards/EcosystemCards';
import GrowthTimeline from './components/GrowthTimeline/GrowthTimeline';
import VisionTimeline from './components/VisionTimeline/VisionTimeline';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Reveal body after load
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add('loaded');
    }, 100);

    // Cursor Logic
    let mx = -100, my = -100, rx = -100, ry = -100;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animateCursor = () => {
      const d = cursorDotRef.current;
      const r = cursorRingRef.current;
      if (d && r) {
        d.style.left = mx + 'px';
        d.style.top = my + 'px';
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        r.style.left = rx + 'px';
        r.style.top = ry + 'px';
      }
      requestAnimationFrame(animateCursor);
    };

    const interactiveSelectors = 'a, button, .fp-room, .ecard, .pillar, .pbar, .kcard, input, select';
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelectors)) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelectors)) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    const cursorAnimId = requestAnimationFrame(animateCursor);

    // Scroll reveal logic
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-r]').forEach(el => obs.observe(el));

    // Counter logic
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const fmt = (v: number, el: HTMLElement) => {
      const pre = el.dataset.pre || '', suf = el.dataset.suf || '', f = el.dataset.fmt;
      let s;
      if (f === 'short') {
        if (v >= 1e6) s = (v / 1e6).toFixed(1) + 'M';
        else if (v >= 1e3) s = Math.round(v / 1e3) + 'K';
        else s = Math.round(v);
      } else s = Math.round(v).toLocaleString();
      return pre + s + suf;
    };
    const animateCounter = (el: HTMLElement) => {
      const t = parseFloat(el.dataset.count || '0'), t0 = performance.now();
      const run = (n: number) => {
        const p = Math.min((n - t0) / 2000, 1);
        el.textContent = fmt(t * ease(p), el);
        if (p < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    };
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target as HTMLElement);
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(cursorAnimId);
    };
  }, []);

  return (
    <div className={`app-root ${isLoaded ? 'loaded' : ''}`}>
      <style>{`
        .app-root { opacity: 0; transition: opacity 0.5s; }
        .app-root.loaded { opacity: 1; }
      `}</style>
      
      <div ref={cursorDotRef} className="cdot" id="cdot"></div>
      <div ref={cursorRingRef} className={`cring ${isHovering ? 'on' : ''}`} id="cring"></div>

      <Navbar />
      
      <main>
        <Hero />
        <KPIDashboard />
        <RevenuePyramid />
        <Charts />
        <StackedBars />
      <TechStack />
      <CampusMap />
      <EcosystemCards />
      <GrowthTimeline />
      <VisionTimeline />
      <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
