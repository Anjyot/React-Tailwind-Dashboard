import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { projectsPerMonth } from '../data/mockData';

const CustomTooltip = ({ active, payload, label, darkMode }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={`rounded-xl p-3 shadow-lg border text-sm ${darkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-slate-100'}`}>
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: p.fill }} />
          <span className="capitalize text-slate-500 text-xs">{p.dataKey}:</span>
          <span className="font-semibold text-xs">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function ProjectsBarChart({ darkMode }) {
  const tickColor = darkMode ? '#64748b' : '#94a3b8';
  return (
    <div className={`card p-5 ${darkMode ? 'bg-slate-800 border-slate-700' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`font-display font-semibold text-base ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Projects by Month
          </h3>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
            Web · Mobile · Design — Jan to Jun 2025
          </p>
        </div>
        <button className="text-xs font-medium text-brand-600 hover:underline">Export</button>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={projectsPerMonth} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#1e293b' : '#f1f5f9'} vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: tickColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: tickColor }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip darkMode={darkMode} />} cursor={{ fill: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', radius: 6 }} />
          <Bar dataKey="web" fill="#5a6ef8" radius={[4, 4, 0, 0]} maxBarSize={14} />
          <Bar dataKey="mobile" fill="#7c3aed" radius={[4, 4, 0, 0]} maxBarSize={14} />
          <Bar dataKey="design" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={14} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-50">
        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-brand-500 inline-block" /><span className="text-xs text-slate-500">Web Dev</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-violet-600 inline-block" /><span className="text-xs text-slate-500">Mobile</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" /><span className="text-xs text-slate-500">Design</span></div>
      </div>
    </div>
  );
}
