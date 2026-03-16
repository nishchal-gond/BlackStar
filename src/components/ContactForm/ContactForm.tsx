import React, { useEffect, useRef, useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [btnState, setBtnState] = useState<'idle' | 'error' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const [errors, setErrors] = useState({ name: false, email: false, interest: false });

  // Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Canvas Animation (Ported from btb.html)
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let animationFrameId: number;

    const resize = () => {
      if (!cv.parentElement) return;
      W = cv.width = cv.parentElement.offsetWidth;
      H = cv.height = cv.parentElement.offsetHeight;
    };

    const ls = Array.from({ length: 8 }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      len: Math.random() * 80 + 40,
      a: Math.random() * Math.PI * 2,
      va: (Math.random() - 0.5) * 0.005,
      op: Math.random() * 0.15 + 0.05
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ls.forEach(l => {
        l.x += l.vx;
        l.y += l.vy;
        l.a += l.va;
        if (l.x < -100 || l.x > W + 100) l.vx *= -1;
        if (l.y < -100 || l.y > H + 100) l.vy *= -1;
        
        const dx = Math.cos(l.a) * l.len;
        const dy = Math.sin(l.a) * l.len;
        
        const g = ctx.createLinearGradient(l.x, l.y, l.x + dx, l.y + dy);
        g.addColorStop(0, `rgba(0,245,212,0)`);
        g.addColorStop(0.5, `rgba(0,245,212,${l.op})`);
        g.addColorStop(1, `rgba(0,245,212,0)`);
        
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + dx, l.y + dy);
        ctx.stroke();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    if (cv.parentElement) resizeObserver.observe(cv.parentElement);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (btnState === 'success') return;

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      interest: !formData.interest.trim()
    };

    if (newErrors.name || newErrors.email || newErrors.interest) {
      setErrors(newErrors);
      setBtnState('error');
      setTimeout(() => setBtnState('idle'), 2500);
      return;
    }

    setBtnState('success');
    setTimeout(() => {
      setBtnState('idle');
      setFormData({ name: '', email: '', interest: '' });
      setErrors({ name: false, email: false, interest: false });
    }, 4000);
  };

  return (
    <section className="contact-sec" id="contact" ref={sectionRef}>
      <canvas id="cCanvas" ref={canvasRef}></canvas>
      <div className="contact-glow"></div> {/* New radial glow background */}
      
      <div className={`contact-in ${isVisible ? 'vis' : ''}`} data-r>
        <div className="contact-header">
          <div className="sec-eye">Join BTB Academy</div>
          <h2 className="sec-ttl">Ready to <span className="grad">Begin?</span></h2>
          <p className="csub">Applications are open for the inaugural cohort. Limited seats available.</p>
        </div>
        
        <div className="cform-card">
          <form className="cform" onSubmit={handleSubmit}>
            <div className="cinp-group">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                className="cinp" 
                value={formData.name}
                onChange={handleChange}
                style={errors.name ? { borderColor: 'rgba(255,45,120,.6)' } : {}}
              />
            </div>
            <div className="cinp-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="cinp" 
                value={formData.email}
                onChange={handleChange}
                style={errors.email ? { borderColor: 'rgba(255,45,120,.6)' } : {}}
              />
            </div>
            <div className="cinp-group">
              <select 
                name="interest"
                className="cinp" 
                style={{ cursor: 'pointer', color: formData.interest ? 'var(--text)' : 'var(--muted)', ...(errors.interest ? { borderColor: 'rgba(255,45,120,.6)' } : {}) }}
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="" disabled>I'm interested in…</option>
                <option value="Trading Education">Trading Education</option>
                <option value="PAMM Investment">PAMM Investment</option>
                <option value="IB Partnership">IB Partnership</option>
                <option value="Franchise Opportunity">Franchise Opportunity</option>
                <option value="Investor Relations">Investor Relations</option>
              </select>
            </div>
            
            <button 
              type="submit"
              className="btn-p contact-btn" 
              style={{ 
                width: '100%', 
                justifyContent: 'center',
                background: btnState === 'error' ? 'rgba(255,45,120,.7)' : btnState === 'success' ? 'rgba(57,255,20,.8)' : '',
                pointerEvents: btnState === 'success' ? 'none' : 'auto'
              }}
            >
              <span>
                {btnState === 'error' ? 'Please fill all fields' : btnState === 'success' ? '✓ Application Received' : 'Submit Application'}
              </span>
              {btnState === 'idle' && (
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </form>
          
          <div className="cinfo-row">
            <span>Dubai, UAE</span>
            <span className="csep">•</span>
            <span>hello@btbacademy.com</span>
            <span className="csep">•</span>
            <span>+971 XX XXX XXXX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
