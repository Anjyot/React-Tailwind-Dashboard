import React from 'react';
import { UserPlus, CheckCircle, IndianRupee, Flag, Calendar, FileText } from 'lucide-react';
import { activities } from '../data/mockData';

const iconMap = { UserPlus, CheckCircle, BadgeIndianRupee: IndianRupee, Flag, Calendar, FileText };

const typeColor = {
  client: 'bg-blue-100 text-blue-600',
  project: 'bg-emerald-100 text-emerald-600',
  payment: 'bg-violet-100 text-violet-600',
  milestone: 'bg-amber-100 text-amber-600',
};

export default function ActivityFeed({ darkMode }) {
  return (
    <div className={`card p-5 ${darkMode ? 'bg-slate-800 border-slate-700' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`font-display font-semibold text-base ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Recent Activity
          </h3>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
            Latest updates across projects
          </p>
        </div>
        <button className="text-xs font-medium text-brand-600 hover:underline">View all</button>
      </div>

      <div className="space-y-1">
        {activities.map((a, i) => {
          const Icon = iconMap[a.icon] || Flag;
          return (
            <div
              key={a.id}
              className={`
                flex items-start gap-3 p-3 rounded-xl transition-colors duration-100 cursor-pointer
                ${darkMode ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'}
              `}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${typeColor[a.type] || 'bg-slate-100 text-slate-600'}`}>
                <Icon size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  {a.message}
                </p>
                <p className={`text-xs mt-0.5 truncate ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {a.detail}
                </p>
              </div>
              <span className={`text-[11px] flex-shrink-0 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                {a.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
