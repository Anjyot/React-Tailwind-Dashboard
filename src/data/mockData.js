// data/mockData.js

export const stats = [
  {
    id: 1,
    title: "Total Projects",
    value: "148",
    trend: "+12%",
    up: true,
    sub: "vs last quarter",
    color: "indigo",
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "Active Clients",
    value: "64",
    trend: "+8%",
    up: true,
    sub: "vs last month",
    color: "emerald",
    icon: "Users",
  },
  {
    id: 3,
    title: "Revenue",
    value: "₹28.4L",
    trend: "+23%",
    up: true,
    sub: "this fiscal year",
    color: "violet",
    icon: "IndianRupee",
  },
  {
    id: 4,
    title: "Pending Tasks",
    value: "17",
    trend: "-5%",
    up: false,
    sub: "needs attention",
    color: "amber",
    icon: "ClipboardList",
  },
];

export const revenueData = [
  { month: "Jul", revenue: 420000, target: 380000 },
  { month: "Aug", revenue: 510000, target: 420000 },
  { month: "Sep", revenue: 480000, target: 450000 },
  { month: "Oct", revenue: 620000, target: 500000 },
  { month: "Nov", revenue: 590000, target: 550000 },
  { month: "Dec", revenue: 710000, target: 600000 },
  { month: "Jan", revenue: 680000, target: 650000 },
  { month: "Feb", revenue: 760000, target: 700000 },
  { month: "Mar", revenue: 830000, target: 750000 },
  { month: "Apr", revenue: 920000, target: 800000 },
  { month: "May", revenue: 880000, target: 850000 },
  { month: "Jun", revenue: 1040000, target: 900000 },
];

export const projectsPerMonth = [
  { month: "Jan", web: 8, mobile: 3, design: 5 },
  { month: "Feb", web: 10, mobile: 5, design: 4 },
  { month: "Mar", web: 7, mobile: 6, design: 7 },
  { month: "Apr", web: 12, mobile: 4, design: 6 },
  { month: "May", web: 9, mobile: 7, design: 8 },
  { month: "Jun", web: 14, mobile: 5, design: 5 },
];

export const projects = [
  { id: 1, name: "E-Commerce Platform", client: "RetailKart", status: "Active", budget: "₹2,40,000", deadline: "Aug 15, 2025", type: "Web Dev" },
  { id: 2, name: "Hospital Management", client: "MedCare Plus", status: "Completed", budget: "₹3,80,000", deadline: "Jun 30, 2025", type: "Software" },
  { id: 3, name: "Delivery Mobile App", client: "QuickShip", status: "Active", budget: "₹1,80,000", deadline: "Sep 01, 2025", type: "Mobile" },
  { id: 4, name: "Brand Identity Refresh", client: "Nova Textiles", status: "Pending", budget: "₹75,000", deadline: "Jul 20, 2025", type: "Design" },
  { id: 5, name: "ERP Integration", client: "Sunrise Exports", status: "Active", budget: "₹4,20,000", deadline: "Oct 10, 2025", type: "Software" },
  { id: 6, name: "Portfolio Website", client: "Arjun Mehta", status: "Completed", budget: "₹35,000", deadline: "May 12, 2025", type: "Web Dev" },
  { id: 7, name: "Inventory System", client: "TechStore Co.", status: "Pending", budget: "₹1,60,000", deadline: "Aug 28, 2025", type: "Software" },
  { id: 8, name: "Food Delivery App", client: "TastyBytes", status: "Active", budget: "₹2,10,000", deadline: "Nov 05, 2025", type: "Mobile" },
];

export const activities = [
  { id: 1, type: "client", message: "New client onboarded", detail: "TastyBytes signed 3-month retainer", time: "2 min ago", icon: "UserPlus" },
  { id: 2, type: "project", message: "Project completed", detail: "Hospital Management System delivered", time: "1 hr ago", icon: "CheckCircle" },
  { id: 3, type: "payment", message: "Payment received", detail: "₹3,80,000 from MedCare Plus", time: "3 hr ago", icon: "BadgeIndianRupee" },
  { id: 4, type: "milestone", message: "Milestone reached", detail: "E-Commerce Platform — 50% progress", time: "5 hr ago", icon: "Flag" },
  { id: 5, type: "client", message: "Meeting scheduled", detail: "Sunrise Exports — ERP kickoff call", time: "Yesterday", icon: "Calendar" },
  { id: 6, type: "payment", message: "Invoice sent", detail: "₹75,000 invoice to Nova Textiles", time: "Yesterday", icon: "FileText" },
];

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { id: "projects", label: "Projects", icon: "Briefcase", badge: 3 },
  { id: "clients", label: "Clients", icon: "Users" },
  { id: "services", label: "Services", icon: "Layers" },
  { id: "analytics", label: "Analytics", icon: "BarChart2" },
  { id: "settings", label: "Settings", icon: "Settings" },
];
