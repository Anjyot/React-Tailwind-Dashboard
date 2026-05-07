import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { revenueData } from '../data/mockData';
import { TrendingUp } from 'lucide-react';

const CustomTooltip = ({ active, payload, label, darkMode }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={`rounded-xl p-3 shadow-lg border text-sm ${darkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-slate-100 text-slate-800'}`}>
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="capitalize text-slate-500">{p.dataKey}:</span>
          <span className="font-semibold">₹{(p.value / 100000).toFixed(1)}L</span>
        </div>
      ))}
    </div>
  );
};

export default function RevenueChart({ darkMode }) {
  const tickColor = darkMode ? '#64748b' : '#94a3b8';
  return (
    <div className={`card p-5 ${darkMode ? 'bg-slate-800 border-slate-700' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`font-display font-semibold text-base ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Revenue Growth
          </h3>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
            Revenue vs Target — FY 2024–25
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold">
          <TrendingUp size={12} />
          +23% YoY
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5a6ef8" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#5a6ef8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="tgtGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#1e293b' : '#f1f5f9'} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: tickColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: tickColor }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v/100000}L`} />
          <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
          <Area type="monotone" dataKey="revenue" stroke="#5a6ef8" strokeWidth={2.5} fill="url(#revGrad)" name="Revenue" dot={false} activeDot={{ r: 5, fill: '#5a6ef8' }} />
          <Area type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 4" fill="url(#tgtGrad)" name="Target" dot={false} activeDot={{ r: 4, fill: '#10b981' }} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-50">
        <div className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-brand-500 inline-block" /><span className="text-xs text-slate-500">Revenue</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-emerald-500 inline-block" style={{backgroundImage:'repeating-linear-gradient(90deg,#10b981 0,#10b981 3px,transparent 3px,transparent 6px)'}} /><span className="text-xs text-slate-500">Target</span></div>
      </div>
    </div>
  );
}
