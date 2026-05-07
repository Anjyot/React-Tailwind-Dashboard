import React, { useState } from 'react';
import { Search, Bell, Sun, Moon, ChevronDown, X } from 'lucide-react';

const notifications = [
  { id: 1, text: "New project request from TastyBytes", time: "2m ago", unread: true },
  { id: 2, text: "Payment of ₹3,80,000 received", time: "1h ago", unread: true },
  { id: 3, text: "Milestone completed: E-Commerce 50%", time: "5h ago", unread: false },
  { id: 4, text: "Meeting scheduled with Sunrise Exports", time: "Yesterday", unread: false },
];

export default function Navbar({ darkMode, setDarkMode, sidebarWidth, activePage }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const pageTitle = {
    dashboard: 'Dashboard',
    projects: 'Projects',
    clients: 'Clients',
    services: 'Services',
    analytics: 'Analytics',
    settings: 'Settings',
  }[activePage] || 'Dashboard';

  const unread = notifications.filter(n => n.unread).length;

  return (
    <header
      className={`
        fixed top-0 right-0 z-20 h-16 flex items-center justify-between px-6
        transition-all duration-300
        ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white/80 backdrop-blur-sm border-slate-100'}
        border-b shadow-sm
      `}
      style={{ left: sidebarWidth }}
    >
      {/* Left: page title */}
      <div>
        <h1 className={`font-display font-bold text-xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          {pageTitle}
        </h1>
        <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className={`
          hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm
          ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}
          w-52 hover:ring-2 ring-brand-200 transition-all duration-150
        `}>
          <Search size={15} />
          <input
            className={`bg-transparent outline-none w-full text-sm placeholder:text-slate-400 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            placeholder="Search..."
          />
          <kbd className="hidden lg:inline-flex items-center gap-1 text-xs text-slate-400 bg-white/60 px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>

        {/* Dark mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`
            w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-150 hover:scale-105
            ${darkMode ? 'bg-slate-800 text-amber-400' : 'bg-slate-100 text-slate-600'}
          `}
        >
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
            className={`
              w-9 h-9 rounded-xl flex items-center justify-center relative transition-all duration-150 hover:scale-105
              ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}
            `}
          >
            <Bell size={17} />
            {unread > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-600 rounded-full ring-2 ring-white animate-pulse-slow" />
            )}
          </button>
          {notifOpen && (
            <div className={`
              absolute right-0 top-12 w-80 rounded-2xl shadow-xl border z-50
              ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}
            `}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>Notifications</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-brand-600 font-medium cursor-pointer hover:underline">Mark all read</span>
                  <button onClick={() => setNotifOpen(false)}><X size={14} className="text-slate-400" /></button>
                </div>
              </div>
              <div className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={`px-4 py-3 flex gap-3 hover:bg-slate-50 cursor-pointer transition-colors ${n.unread ? '' : 'opacity-60'}`}>
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.unread ? 'bg-brand-500' : 'bg-transparent'}`} />
                    <div>
                      <p className={`text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{n.text}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=M&backgroundColor=5a6ef8"
            alt="avatar"
            className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block text-left">
              <p className={`text-sm font-semibold leading-none ${darkMode ? 'text-white' : 'text-slate-800'}`}>Manjeet</p>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Admin</p>
            </div>
            <ChevronDown size={14} className={`hidden md:block ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} />
          </button>
          {profileOpen && (
            <div className={`
              absolute right-0 top-12 w-52 rounded-2xl shadow-xl border z-50 overflow-hidden
              ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}
            `}>
              <div className="px-4 py-3 border-b border-slate-100">
                <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>Manjeet Mane</p>
                <p className="text-xs text-slate-400">manjeet@legitsoft.in</p>
              </div>
              {['Profile', 'Account Settings', 'Billing', 'Sign Out'].map(item => (
                <button
                  key={item}
                  className={`
                    w-full text-left px-4 py-2.5 text-sm transition-colors
                    ${item === 'Sign Out' ? 'text-red-500 hover:bg-red-50' : darkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-700 hover:bg-slate-50'}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
