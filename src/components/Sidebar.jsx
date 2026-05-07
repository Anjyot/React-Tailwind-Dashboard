import React from 'react';
import {
  LayoutDashboard, Briefcase, Users, Layers,
  BarChart2, Settings, ChevronLeft, ChevronRight,
  Zap, LogOut
} from 'lucide-react';
import { navItems } from '../data/mockData';

const iconMap = { LayoutDashboard, Briefcase, Users, Layers, BarChart2, Settings };

export default function Sidebar({ collapsed, setCollapsed, activePage, setActivePage, darkMode }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full z-30 flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[72px]' : 'w-[240px]'}
        ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'}
        border-r shadow-sm
      `}
    >
      {/* Logo */}
      <div className={`flex items-center h-16 px-4 border-b ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md flex-shrink-0">
          <Zap size={18} className="text-white" />
        </div>
        {!collapsed && (
          <div className="ml-3 overflow-hidden">
            <p className={`font-display font-bold text-[15px] leading-tight tracking-wide ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Legitsoft
            </p>
            <p className={`text-[10px] font-medium tracking-widest uppercase ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
              Admin Panel
            </p>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {!collapsed && (
          <p className={`px-3 py-2 text-[10px] font-semibold tracking-widest uppercase ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Main Menu
          </p>
        )}
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-150 cursor-pointer group
                ${isActive
                  ? darkMode
                    ? 'bg-brand-900/40 text-brand-400'
                    : 'bg-brand-50 text-brand-700'
                  : darkMode
                    ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : ''}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="bg-brand-100 text-brand-700 text-xs font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          );
        })}

        {!collapsed && (
          <p className={`px-3 py-2 mt-4 text-[10px] font-semibold tracking-widest uppercase ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Account
          </p>
        )}
        <button
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
            transition-all duration-150 cursor-pointer
            ${darkMode ? 'text-red-400 hover:bg-red-900/20' : 'text-red-500 hover:bg-red-50'}
            ${collapsed ? 'justify-center' : ''}
          `}
          title={collapsed ? 'Logout' : ''}
        >
          <LogOut size={18} className="flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className={`p-3 border-t ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
            <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=M&backgroundColor=5a6ef8"
            alt="avatar"
            className="w-8 h-8 rounded-full"
            />
            <div className="overflow-hidden">
              <p className={`text-sm font-semibold truncate ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                Manjeet Mane
              </p>
              <p className={`text-xs truncate ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Admin
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`
          absolute -right-3 top-20 w-6 h-6 rounded-full flex items-center justify-center
          shadow-md border cursor-pointer z-40 transition-all duration-200 hover:scale-110
          ${darkMode ? 'bg-slate-800 border-slate-600 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}
        `}
      >
        {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
      </button>
    </aside>
  );
}
