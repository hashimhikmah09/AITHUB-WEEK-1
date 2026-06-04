"use client";

import { useState } from "react";
import Link from "next/link";

import {
  LayoutDashboard,
  Bell,
  Building2,
  FileText,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Clock3,
  BadgeCheck,
  XCircle,
  Wrench,
  Sun,
} from "lucide-react";



// ======================================================
// CUSTOMER DASHBOARD (FULL PROFESSIONAL UI)
// FEATURES:
// - Responsive Navbar
// - Collapsible Sidebar
// - Lucide Icons
// - Active Quotes
// - Quote Timeline
// - Saved Companies
// - Recommended Companies
// - Notifications Panel
// - Status Badges
// - Mobile Responsive
// ======================================================

// ================= TYPES =================
type QuoteStatus =
  | "Pending"
  | "In Review"
  | "Accepted"
  | "Declined"
  | "Installed";

// ================= MOCK DATA =================
const quotes = [
  {
    id: "QT-1001",
    company: "SolarTech Nigeria",
    amount: "$2,000",
    status: "Pending" as QuoteStatus,
  },
  {
    id: "QT-1002",
    company: "EcoSun Energy",
    amount: "$3,500",
    status: "In Review" as QuoteStatus,
  },
  {
    id: "QT-1003",
    company: "GreenVolt Ltd",
    amount: "$1,800",
    status: "Accepted" as QuoteStatus,
  },
  {
    id: "QT-1004",
    company: "Bright Solar",
    amount: "$4,500",
    status: "Installed" as QuoteStatus,
  },
];


const navItems = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard size={22} /> },
  { id: "quotes", label: "Quotes", icon: <FileText size={22} /> },
  { id: "companies", label: "Companies", icon: <Building2 size={22} /> },
  { id: "notifications", label: "Notifications", icon: <Bell size={22} /> },
];


const savedCompanies = [
  {
    name: "SolarTech Nigeria",
    logo:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=100",
  },
  {
    name: "EcoSun Energy",
    logo:
      "https://images.unsplash.com/photo-1610057099443-fde8c4c1b0d5?w=100",
  },
];

const recommendedCompanies = [
  {
    name: "SunPower NG",
    location: "Lagos",
    rating: 4.8,
  },
  {
    name: "Bright Solar",
    location: "Abuja",
    rating: 4.6,
  },
  {
    name: "GreenVolt Ltd",
    location: "Ibadan",
    rating: 4.7,
  },
];

const notifications = [
  "Your quote QT-1002 is now In Review.",
  "EcoSun Energy replied to your quote request.",
  "A new company was recommended near you.",
];

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function CustomerDashboard() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // ================= STATUS BADGES =================
  const statusStyles = (status: QuoteStatus) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "In Review":
        return "bg-blue-100 text-blue-700";

      case "Accepted":
        return "bg-green-100 text-green-700";

      case "Declined":
        return "bg-red-100 text-red-700";

      case "Installed":
        return "bg-purple-100 text-purple-700";
    }
  };

  // ================= TIMELINE ICON =================
  const timelineIcon = (status: QuoteStatus) => {
    switch (status) {
      case "Pending":
        return <Clock3 size={18} />;

      case "In Review":
        return <FileText size={18} />;

      case "Accepted":
        return <BadgeCheck size={18} />;

      case "Declined":
        return <XCircle size={18} />;

      case "Installed":
        return <Wrench size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ======================================================
          NAVBAR
      ====================================================== */}
      <nav className="h-16 bg-white shadow-sm flex items-center justify-between px-6 sticky top-0 z-50">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU */}
          <button
            className="md:hidden"
            onClick={() => setMobileSidebar(true)}
          >
            
          </button>

          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Sun className="text-yellow-500" />
              <span>Solar<span className="text-yellow-500">Link</span></span>
            </div>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Bell className="cursor-pointer hover:text-yellow-500 " />

          <img
            src="https://i.pravatar.cc/100?img=12"
            className="w-5 h-5 rounded-full"
          />
        </div>
      </nav>

      <div className="flex">

        {/* ======================================================
            SIDEBAR
        ====================================================== */}

        {/* MOBILE OVERLAY */}
        {mobileSidebar && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileSidebar(false)}
          />
        )}

      
<aside
  className="
    bg-white shadow-lg min-h-screen
    w-64
    transition-all duration-300
    flex flex-col
    border-r border-gray-100
  "
>
  <div className="flex flex-col h-full">
    
    {/* DASHBOARD HEADER */}
    {/* <div className="flex items-center justify-center sm:justify-start gap-3 p-4 border-b">
      <LayoutDashboard className="text-green-600 shrink-0" size={24} />
      <h2 className="hidden sm:block font-bold text-lg text-gray-800 whitespace-nowrap">
        Dashboard
      </h2>
    </div> */}

    {/* NAVIGATION */}
    <nav className="p-2 sm:p-4 space-y-2 flex-1">
      <SidebarItem icon={<LayoutDashboard size={22} />} label="Overview" />
      <SidebarItem icon={<FileText size={22} />} label="Quotes" />
      <SidebarItem icon={<Building2 size={22} />} label="Companies" />
      <SidebarItem icon={<Bell size={22} />} label="Notifications" />
      
      <div className="border-t my-4 opacity-50" />
      
    </nav>
  </div>
</aside>
       {/* ======================================================
    MAIN CONTENT (REDESIGNED PROFESSIONAL DASHBOARD)
====================================================== */}
<main className="flex-1 p-6 bg-gray-100 overflow-y-auto">

  {/* ================= TOP HEADER ================= */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">

    {/* LEFT */}
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Customer Dashboard
      </h1>

      <p className="text-gray-500 mt-1">
        Monitor your solar quotes, companies, and installations.
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-4">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-white border rounded-xl px-4 py-2 outline-none w-64 shadow-sm"
      />

      {/* PROFILE */}
      <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl shadow-sm">

        <img
          src="https://i.pravatar.cc/100?img=12"
          className="w-10 h-10 rounded-full"
        />

        <div className="hidden md:block">
          <p className="font-medium text-sm">
            Hikmah Hashim
          </p>

          <p className="text-xs text-gray-500">
            Customer
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* ======================================================
      OVERVIEW CARDS
  ====================================================== */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

    {/* CARD */}
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            Active Quotes
          </p>

          <h2 className="text-3xl font-bold mt-2">
            12
          </h2>
        </div>

        <div className="bg-green-100 p-3 rounded-xl">
          <FileText className="text-green-600" />
        </div>
      </div>
    </div>

    {/* CARD */}
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            Saved Companies
          </p>

          <h2 className="text-3xl font-bold mt-2">
            8
          </h2>
        </div>

        <div className="bg-blue-100 p-3 rounded-xl">
          <Building2 className="text-blue-600" />
        </div>
      </div>
    </div>

    {/* CARD */}
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            Notifications
          </p>

          <h2 className="text-3xl font-bold mt-2">
            4
          </h2>
        </div>

        <div className="bg-yellow-100 p-3 rounded-xl">
          <Bell className="text-yellow-600" />
        </div>
      </div>
    </div>

    {/* CARD */}
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            Installations
          </p>

          <h2 className="text-3xl font-bold mt-2">
            3
          </h2>
        </div>

        <div className="bg-purple-100 p-3 rounded-xl">
          <Wrench className="text-purple-600" />
        </div>
      </div>
    </div>
  </div>

  {/* ======================================================
      MAIN GRID
  ====================================================== */}
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

    {/* ======================================================
        LEFT SIDE
    ====================================================== */}
    <div className="xl:col-span-2 space-y-6">

      {/* ================= ACTIVE QUOTES ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-semibold">
            Active Quotes
          </h2>

          <button className="text-sm text-green-600">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="text-left border-b text-sm text-gray-500">

                <th className="pb-3">Company</th>
                <th className="pb-3">Quote ID</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>

              </tr>
            </thead>

            <tbody>

              {quotes.map((quote) => (
                <tr
                  key={quote.id}
                  className="border-b last:border-none"
                >

                  <td className="py-4 font-medium">
                    {quote.company}
                  </td>

                  <td className="py-4 text-gray-500">
                    {quote.id}
                  </td>

                  <td className="py-4 text-green-600 font-medium">
                    {quote.amount}
                  </td>

                  <td className="py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles(
                        quote.status
                      )}`}
                    >
                      {quote.status}
                    </span>

                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

      {/* ================= RECOMMENDED COMPANIES ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-semibold">
            Recommended Companies
          </h2>

          <MapPin className="text-green-600" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {recommendedCompanies.map((company, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-semibold">
                    {company.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {company.location}
                  </p>
                </div>

                <span className="text-yellow-500 text-sm">
                  ⭐ {company.rating}
                </span>
              </div>

              <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition">
                View Company
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ======================================================
        RIGHT SIDEBAR CONTENT
    ====================================================== */}
    <div className="space-y-6">

      {/* ================= TIMELINE ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <h2 className="text-xl font-semibold mb-6">
          Quote Timeline
        </h2>

        <div className="space-y-5">

          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="flex gap-4"
            >

              <div className="bg-green-100 text-green-700 p-2 rounded-full h-fit">
                {timelineIcon(quote.status)}
              </div>

              <div>
                <p className="font-medium">
                  {quote.status}
                </p>

                <p className="text-sm text-gray-500">
                  {quote.company}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ================= NOTIFICATIONS ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-semibold">
            Notifications
          </h2>

          <Bell size={18} />
        </div>

        <div className="space-y-4">

          {notifications.map((notification, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 text-sm text-gray-600 hover:bg-gray-50 transition"
            >
              🔔 {notification}
            </div>
          ))}

        </div>
      </div>

      {/* ================= SAVED COMPANIES ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <h2 className="text-xl font-semibold mb-6">
          Saved Companies
        </h2>

        <div className="space-y-4">

          {savedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >

              <img
                src={company.logo}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-medium">
                  {company.name}
                </p>

                <p className="text-sm text-gray-500">
                  Solar Provider
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  </div>
</main>
      </div>
    </div>
  );
}


function SidebarItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  console.log(label);
  return (
    <button
      className="
        flex items-center gap-3
        w-full
        px-3 py-3
        rounded-xl
        hover:bg-gray-50
        hover:text-yellow-500
        transition
      "
    >
      {/* ICON always visible */}
      <div className="flex-shrink-0 w-6 flex justify-center">
        {icon}
      </div>

      {/* LABEL: Changed md:inline to sm:inline */}
      <span className="ml-3 text-sm font-medium whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
// ======================================================
// STAT CARD COMPONENT
// ======================================================

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}