import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { Search, Download, Filter, ChevronUp, ChevronDown } from 'lucide-react';

const statusConfig = {
  Active: 'badge-blue',
  Completed: 'badge-green',
  Pending: 'badge-yellow',
};

export default function ProjectsTable({ darkMode }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = projects.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className={`card ${darkMode ? 'bg-slate-800 border-slate-700' : ''}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-5 border-b border-slate-100">
        <div>
          <h3 className={`font-display font-semibold text-base ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            All Projects
          </h3>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
            {filtered.length} of {projects.length} projects
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm flex-1 sm:flex-initial sm:w-44 ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
            <Search size={13} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={`bg-transparent outline-none w-full text-sm placeholder:text-slate-400 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              placeholder="Search..."
            />
          </div>
          {['All', 'Active', 'Completed', 'Pending'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                hidden sm:block px-3 py-1.5 rounded-xl text-xs font-medium transition-all
                ${filter === f
                  ? 'bg-brand-600 text-white'
                  : darkMode ? 'bg-slate-700 text-slate-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }
              `}
            >
              {f}
            </button>
          ))}
          <button className={`w-8 h-8 rounded-xl flex items-center justify-center ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'} hover:scale-105 transition-transform`}>
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${darkMode ? 'border-slate-700' : 'border-slate-50'}`}>
              {['Project', 'Client', 'Type', 'Status', 'Budget', 'Deadline'].map(h => (
                <th
                  key={h}
                  className={`text-left px-5 py-3 text-xs font-semibold tracking-wide uppercase select-none cursor-pointer group ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}
                >
                  <span className="flex items-center gap-1">
                    {h}
                    <ChevronUp size={10} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-50'}`}>
            {filtered.map((p) => (
              <tr
                key={p.id}
                className={`group transition-colors duration-100 ${darkMode ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50/80'}`}
              >
                <td className="px-5 py-3.5">
                  <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'} group-hover:text-brand-600 transition-colors cursor-pointer`}>
                    {p.name}
                  </p>
                </td>
                <td className={`px-5 py-3.5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{p.client}</td>
                <td className="px-5 py-3.5">
                  <span className={`badge badge-slate text-[11px] ${darkMode ? 'bg-slate-700 text-slate-300 ring-slate-600' : ''}`}>{p.type}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`badge ${statusConfig[p.status]}`}>{p.status}</span>
                </td>
                <td className={`px-5 py-3.5 text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{p.budget}</td>
                <td className={`px-5 py-3.5 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{p.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-slate-400">No projects found</div>
        )}
      </div>

      {/* Pagination stub */}
      <div className={`flex items-center justify-between px-5 py-3 border-t ${darkMode ? 'border-slate-700 text-slate-400' : 'border-slate-50 text-slate-400'} text-xs`}>
        <span>Showing {filtered.length} results</span>
        <div className="flex gap-1">
          {[1,2,3].map(n => (
            <button key={n} className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${n === 1 ? 'bg-brand-600 text-white' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>{n}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
