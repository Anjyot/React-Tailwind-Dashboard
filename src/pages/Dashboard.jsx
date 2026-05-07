import React from 'react';
import StatsCards from '../components/StatsCards';
import RevenueChart from '../charts/RevenueChart';
import ProjectsBarChart from '../charts/ProjectsBarChart';
import ProjectsTable from '../components/ProjectsTable';
import ActivityFeed from '../components/ActivityFeed';
import ServiceDonut from '../components/ServiceDonut';

export default function Dashboard({ darkMode }) {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-violet-700 p-6 text-white shadow-lg shadow-brand-200">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-brand-200 text-sm font-medium">Good morning ☀️</p>
            <h2 className="font-display font-bold text-2xl mt-1 tracking-tight">Welcome back, Manjeet!</h2>
            <p className="text-brand-200 text-sm mt-1">You have <span className="text-white font-semibold">3 active projects</span> due this month.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white/15 hover:bg-white/25 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150 backdrop-blur-sm">
              View Projects
            </button>
            <button className="bg-white text-brand-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-brand-50 transition-all duration-150 shadow-sm">
              + New Project
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsCards darkMode={darkMode} />

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart darkMode={darkMode} />
        </div>
        <div>
          <ServiceDonut darkMode={darkMode} />
        </div>
      </div>

      {/* Bar chart full width */}
      <ProjectsBarChart darkMode={darkMode} />

      {/* Table + Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <ProjectsTable darkMode={darkMode} />
        </div>
        <div>
          <ActivityFeed darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
