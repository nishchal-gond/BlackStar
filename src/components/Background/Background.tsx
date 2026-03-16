import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, pts: Particle[] = [], off = 0;
    let animationFrameId: number;

    const resize = () => {
      W = cv.width = cv.offsetWidth;
      H = cv.height = cv.offsetHeight;
    };

    class Particle {
      x: number = 0; y: number = 0; vx: number = 0; vy: number = 0; s: number = 0; a: number = 0; c: string = '';
      constructor() {
        this.r();
      }
      r() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.s = Math.random() * 1.5 + 0.5;
        this.a = Math.random() * 0.6 + 0.1;
        this.c = Math.random() > 0.5 ? '0,245,212' : '0,200,255';
      }
      u() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.r();
      }
      d() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.c},${this.a})`;
        ctx.fill();
      }
    }

    const init = () => {
      pts = [];
      const n = Math.min(Math.floor(W * H / 9000), 120);
      for (let i = 0; i < n; i++) pts.push(new Particle());
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      
      const g = ctx.createRadialGradient(W / 2, H * 0.3, 0, W / 2, H * 0.3, W * 0.6);
      g.addColorStop(0, 'rgba(0,200,255,.04)');
      g.addColorStop(.5, 'rgba(191,95,255,.02)');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      
      ctx.strokeStyle = 'rgba(0,245,212,.04)';
      ctx.lineWidth = 0.5;
      for (let x = (off % 60); x < W + 60; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H + 60; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      off = (off + .2) % 60;
      
      pts.forEach(p => {
        p.u();
        p.d();
      });
      
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(0,245,212,${(1 - d / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      init();
    });
    if (cv.parentElement) {
      resizeObserver.observe(cv.parentElement);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas id="hCanvas" ref={canvasRef}></canvas>;
};

export default Background;
