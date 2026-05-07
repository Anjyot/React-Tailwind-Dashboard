import React from 'react';
import { Briefcase, Users, IndianRupee, ClipboardList, TrendingUp, TrendingDown } from 'lucide-react';
import { stats } from '../data/mockData';

const iconMap = { Briefcase, Users, IndianRupee, ClipboardList };

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50', icon: 'text-indigo-600',
    grad: 'from-indigo-500 to-indigo-700',
    light: 'bg-indigo-100',
  },
  emerald: {
    bg: 'bg-emerald-50', icon: 'text-emerald-600',
    grad: 'from-emerald-500 to-emerald-700',
    light: 'bg-emerald-100',
  },
  violet: {
    bg: 'bg-violet-50', icon: 'text-violet-600',
    grad: 'from-violet-500 to-violet-700',
    light: 'bg-violet-100',
  },
  amber: {
    bg: 'bg-amber-50', icon: 'text-amber-600',
    grad: 'from-amber-500 to-amber-700',
    light: 'bg-amber-100',
  },
};

export default function StatsCards({ darkMode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = iconMap[stat.icon];
        const c = colorMap[stat.color];
        return (
          <div
            key={stat.id}
            className={`
              card card-hover p-5 relative overflow-hidden group cursor-default
              ${darkMode ? 'bg-slate-800 border-slate-700' : ''}
              stagger-child
            `}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Gradient blob background */}
            <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-br ${c.grad} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300`} />

            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? c.light + '/20' : c.bg} transition-transform duration-200 group-hover:scale-110`}>
                <Icon size={20} className={c.icon} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${stat.up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                {stat.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {stat.trend}
              </div>
            </div>

            <div className="mt-4">
              <p className={`text-2xl font-display font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </p>
              <p className={`text-sm font-medium mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {stat.title}
              </p>
              <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                {stat.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
