import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { Projects, Clients, Services, Analytics, Settings } from './pages/OtherPages';

const pageMap = { dashboard: Dashboard, projects: Projects, clients: Clients, services: Services, analytics: Analytics, settings: Settings };

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const sidebarWidth = collapsed ? 72 : 240;
  const PageComponent = pageMap[activePage] || Dashboard;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`lg:block ${mobileSidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          activePage={activePage}
          setActivePage={(id) => { setActivePage(id); setMobileSidebarOpen(false); }}
          darkMode={darkMode}
        />
      </div>

      {/* Main content */}
      <div
        className="transition-all duration-300 min-h-screen flex flex-col"
        style={{ marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? sidebarWidth : 0 }}
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          sidebarWidth={typeof window !== 'undefined' && window.innerWidth >= 1024 ? sidebarWidth : 0}
          activePage={activePage}
        />

        <main className="flex-1 pt-24 pb-8 px-4 sm:px-6 max-w-[1400px] mx-auto w-full">
          <PageComponent darkMode={darkMode} />
        </main>

        {/* Footer */}
        <footer className={`text-center py-4 text-xs ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
          © 2025 Legitsoft · Built with ❤️ · v1.0.0
        </footer>
      </div>
    </div>
  );
}
