import React from 'react';
import { 
  LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 420000 },
  { month: 'Feb', revenue: 580000 },
  { month: 'Mar', revenue: 850000 },
  { month: 'Apr', revenue: 1100000 },
  { month: 'May', revenue: 1450000 },
  { month: 'Jun', revenue: 1980000 },
];



const KPICard = ({ icon, value, label, sub, trend, colorClass }: any) => (
  <div className={`kcard ${colorClass}`}>
    <div className="k-top">
      <div className="kicon">{icon}</div>
      {trend && <div className="k-trend">{trend}</div>}
    </div>
    <div className="kval">{value}</div>
    <div className="klbl">{label}</div>
    <div className="ksub">{sub}</div>
  </div>
);

const KPIDashboard: React.FC = () => {
  return (
    <section className="kpi-sec" id="kpi">
      <div className="dashboard-container">
        <div className="sec-hdr" data-r>
          <div className="sec-eye">Institutional Analytics</div>
          <h2 className="sec-ttl">Year 1 <span className="grad">Performance Dashboard</span></h2>
          <p className="sec-sub">Real-time growth metrics and ecosystem distribution.</p>
        </div>

        <div className="kpi-grid">
          <KPICard 
            icon="💰" 
            value="5.84M" 
            label="Total Revenue" 
            sub="AED · Year 1" 
            trend="+18.4%" 
            colorClass="cg" 
          />
          <KPICard 
            icon="📈" 
            value="45%" 
            label="Net Profit" 
            sub="2.61M AED Margin" 
            trend="Stable" 
            colorClass="ct" 
          />
          <KPICard 
            icon="🎓" 
            value="480" 
            label="Students" 
            sub="Enrolled Y1" 
            trend="+24% MoM" 
            colorClass="cb" 
          />
          <KPICard 
            icon="🔗" 
            value="12" 
            label="Active IBs" 
            sub="Broker Network" 
            trend="+2 New" 
            colorClass="cp" 
          />
          <KPICard 
            icon="💼" 
            value="28" 
            label="PAMM Clients" 
            sub="Avg 50K AED" 
            trend="+5 New" 
            colorClass="cp" 
          />
          <KPICard 
            icon="🖥️" 
            value="35" 
            label="Tech Clients" 
            sub="SaaS · Server" 
            trend="+8 New" 
            colorClass="co" 
          />
          <KPICard 
            icon="💎" 
            value="6" 
            label="HNWI Clients" 
            sub="250K+ AED base" 
            trend="+1 New" 
            colorClass="ck" 
          />
          <KPICard 
            icon="⚡" 
            value="M3" 
            label="Break-Even" 
            sub="Target Achieved" 
            trend="COMPLETE" 
            colorClass="cg" 
          />
        </div>

        <div className="analytics-grid">
          {/* Revenue Growth Panel */}
          <div className="panel" data-r>
            <div className="panel-hdr">
              <h3 className="panel-ttl">Revenue Growth</h3>
              <div className="klbl">Jan — Jun 2025</div>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#4a6a8a', fontSize: 11, fontFamily: 'Share Tech Mono' }} 
                  />
                  <YAxis 
                    hide 
                  />
                  <Tooltip 
                    contentStyle={{ background: '#080d1a', border: '1px solid rgba(0,245,212,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#00f5d4', fontFamily: 'Share Tech Mono', fontSize: 12 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#00f5d4" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#00f5d4', strokeWidth: 2, stroke: '#080d1a' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel" data-r>
            <div className="panel-hdr">
              <h3 className="panel-ttl">Margin Analysis</h3>
              <div className="klbl">Efficiency Rating</div>
            </div>
            <div style={{ marginTop: '20px' }}>
              {/* Efficiency Bar with Scale Indicators */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="klbl">Operational Efficiency</span>
                  <span className="klbl" style={{ color: '#00f5d4' }}>92%</span>
                </div>
                <div style={{ height: 4, width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: 2, position: 'relative' }}>
                  <div style={{ height: '100%', width: '92%', background: '#00f5d4', borderRadius: 2 }}></div>
                  {/* Scale Markers */}
                  <div style={{ position: 'absolute', top: 12, left: 0, right: 0, display: 'flex', justifyContent: 'space-between' }}>
                    {['0%', '25%', '50%', '75%', '100%'].map(mark => (
                      <span key={mark} style={{ fontSize: 9, color: 'var(--muted)', fontFamily: 'var(--fm)' }}>{mark}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(0,245,212,0.03)', border: '1px dashed rgba(0,245,212,0.1)', marginBottom: '32px', marginTop: '24px' }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                  Strategic break-even achieved in Month 3. Current growth trajectory indicates 2.4x scaling potential for Year 2 based on existing infrastructure overhead.
                </p>
              </div>

              {/* Supporting KPI Grid - RESPONSIVE CLASS ADDED */}
              <div className="ana-mini-grid">
                {[
                  { label: 'Break-even Month', val: 'Month 3', sub: 'Target Met' },
                  { label: 'Net Profit Margin', val: '45%', sub: 'AED Basis' },
                  { label: 'CAC Payback', val: '2.4 Mo', sub: 'Organic Row' },
                  { label: 'Scaling Efficiency', val: '2.4x', sub: 'Y2 Projection' }
                ].map((kpi, i) => (
                  <div key={i} className="ana-mini-card">
                    <span className="klbl" style={{ fontSize: 8 }}>{kpi.label}</span>
                    <div className="kval" style={{ fontSize: 18, margin: '4px 0' }}>{kpi.val}</div>
                    <span style={{ fontSize: 9, color: 'var(--muted)', fontFamily: 'var(--fm)' }}>{kpi.sub}</span>
                  </div>
                ))}
              </div>

              {/* Efficiency Growth Trend */}
              <div style={{ marginTop: '20px' }}>
                <h4 className="klbl" style={{ marginBottom: '16px', color: '#fff' }}>Efficiency Growth</h4>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', height: '60px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {[
                    { m: 'Month 1', h: '55%' },
                    { m: 'Month 2', h: '73%' },
                    { m: 'Month 3', h: '92%' }
                  ].map((bar, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '100%', background: i === 2 ? 'var(--teal)' : 'rgba(0,245,212,0.2)', height: bar.h, borderRadius: '2px 2px 0 0', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', fontSize: 9, color: i === 2 ? 'var(--teal)' : 'var(--muted)', fontFamily: 'var(--fm)' }}>{bar.h}</span>
                      </div>
                      <span className="klbl" style={{ fontSize: 8, whiteSpace: 'nowrap' }}>{bar.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIDashboard;
