import React from 'react';
import { Construction } from 'lucide-react';

export function Projects({ darkMode }) {
  return <PlaceholderPage title="Projects" darkMode={darkMode} />;
}
export function Clients({ darkMode }) {
  return <PlaceholderPage title="Clients" darkMode={darkMode} />;
}
export function Services({ darkMode }) {
  return <PlaceholderPage title="Services" darkMode={darkMode} />;
}
export function Analytics({ darkMode }) {
  return <PlaceholderPage title="Analytics" darkMode={darkMode} />;
}
export function Settings({ darkMode }) {
  return <PlaceholderPage title="Settings" darkMode={darkMode} />;
}

function PlaceholderPage({ title, darkMode }) {
  return (
    <div className={`flex flex-col items-center justify-center h-96 rounded-2xl border-2 border-dashed ${darkMode ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-400'}`}>
      <Construction size={40} className="mb-4 opacity-40" />
      <h2 className={`font-display font-bold text-xl ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{title}</h2>
      <p className="text-sm mt-1">This section is under construction</p>
    </div>
  );
}
