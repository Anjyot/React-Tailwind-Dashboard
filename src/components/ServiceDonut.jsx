import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Web Dev', value: 52, color: '#5a6ef8' },
  { name: 'Mobile', value: 24, color: '#7c3aed' },
  { name: 'Design', value: 16, color: '#10b981' },
  { name: 'Software', value: 8, color: '#f59e0b' },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 text-xs">
      <span className="font-semibold text-slate-700">{payload[0].name}: </span>
      <span className="text-slate-500">{payload[0].value}%</span>
    </div>
  );
};

export default function ServiceDonut({ darkMode }) {
  return (
    <div className={`card p-5 ${darkMode ? 'bg-slate-800 border-slate-700' : ''}`}>
      <h3 className={`font-display font-semibold text-base mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
        Service Mix
      </h3>
      <p className={`text-xs mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>Revenue split by service type</p>
      <div className="flex items-center gap-4">
        <div className="w-28 h-28 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={28}
                outerRadius={50}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 flex-1">
          {data.map(d => (
            <div key={d.name} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
              <span className={`text-xs flex-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{d.name}</span>
              <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
