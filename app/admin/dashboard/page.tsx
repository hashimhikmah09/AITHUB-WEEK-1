"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Box,
  Calendar,
  Settings,
  Bell,
  Sun,
  CheckCircle2,
  XCircle,
  MoreVertical,
  TrendingUp,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ================= MOCK DATA ================= */
const quoteRequests = [
  { id: "QT-2001", customer: "Adewale John", product: "5kW System", date: "2026-05-10" },
  { id: "QT-2002", customer: "Sarah Williams", product: "10kW Pack", date: "2026-05-11" },
  { id: "QT-2003", customer: "Musa Ibrahim", product: "3kVA Inverter", date: "2026-05-12" },
];

const analyticsData = [
  { week: "W1", quotes: 12 },
  { week: "W2", quotes: 18 },
  { week: "W3", quotes: 15 },
  { week: "W4", quotes: 25 },
  { week: "W5", quotes: 20 },
];

const BAR_COLORS = [
  "#60a5fa",
  "#34d399",
  "#f59e0b",
  "#fb7185",
  "#a78bfa",
];

/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="h-16 bg-white shadow-sm flex items-center justify-between px-6 sticky top-0 z-50">

      <Link href="/" className="flex items-center gap-2">
        <Sun className="text-yellow-500" />
        <span className="font-bold">
          Solar<span className="text-yellow-500">Link</span>
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/" className="text-sm hover:text-yellow-500">
          Home
        </Link>

        <Bell className="cursor-pointer hover:text-yellow-500" />

        <img
          src="https://i.pravatar.cc/100?img=12"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}

/* ================= SIDEBAR ITEM ================= */
function NavItem({ icon, label }: any) {
  return (
    <button className="flex items-center justify-center md:justify-start gap-3 w-full p-3 rounded-xl hover:bg-gray-100 text-gray-600 hover:text-yellow-600">
      {icon}
      <span className="hidden md:block text-sm font-medium">
        {label}
      </span>
    </button>
  );
}

/* ================= MAIN ================= */
export default function CompanyAdminDashboard() {
  const profileCompletion = 65;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <Navbar />

      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-16 md:w-64 bg-white border-r min-h-screen">

          <div className="p-4 flex items-center justify-center md:justify-start gap-2 border-b">
            <LayoutDashboard className="text-green-600" />
            <span className="hidden md:block font-bold">
              Dashboard
            </span>
          </div>

          <div className="p-2 space-y-2">
            <NavItem icon={<LayoutDashboard size={20} />} label="Overview" />
            <NavItem icon={<FileText size={20} />} label="Quotes" />
            <NavItem icon={<Box size={20} />} label="Products" />
            <NavItem icon={<Calendar size={20} />} label="Calendar" />
            <NavItem icon={<Settings size={20} />} label="Settings" />
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 p-6">

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Company Admin Dashboard
            </h1>
            <p className="text-gray-500">
              Manage quotes, analytics, and installations
            </p>
          </div>

          {/* PROFILE PROGRESS */}
          <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
            <p className="font-semibold mb-2">
              Profile Completion
            </p>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-yellow-500 h-3 rounded-full"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
          </div>

         <div className="bg-white p-6 rounded-xl shadow mb-8 border border-gray-200">
  <div className="flex items-center gap-2 mb-8">
    <TrendingUp className="text-green-600" />
    <h2 className="font-bold text-lg text-gray-800">Weekly Quote Analytics</h2>
  </div>

  {/* Fixed height container to prevent rendering issues */}
  <div className="w-full h-[400px] pr-4">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={analyticsData}
        margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
        barGap={0}
      >
        {/* 1. MATH GRID: Solid horizontal lines */}
        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#d1d5db" />

        {/* 2. X-AXIS: Bold line with a label underneath */}
        <XAxis 
          dataKey="week" 
          axisLine={{ stroke: '#000', strokeWidth: 2 }} 
          tickLine={{ stroke: '#000' }}
          tick={{ fill: '#000', fontWeight: '500' }}
          label={{ value: 'Weeks', position: 'bottom', offset: 0, fontSize: 14, fontWeight: 'bold' }}
        />

        {/* 3. Y-AXIS: Bold line with vertical label */}
        <YAxis 
          axisLine={{ stroke: '#000', strokeWidth: 2 }} 
          tickLine={{ stroke: '#000' }}
          tick={{ fill: '#000', fontWeight: '500' }}
          label={{ value: 'Quotes', angle: -90, position: 'insideLeft', offset: 15, fontSize: 14, fontWeight: 'bold' }}
        />

        <Tooltip cursor={{ fill: '#f3f4f6', opacity: 0.4 }} />

        {/* 4. BARS: Outlined with black and multi-colored */}
        <Bar 
          dataKey="quotes" 
          barSize={60} 
          stroke="#000" 
          strokeWidth={1.5}
        >
          {analyticsData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={BAR_COLORS[index % BAR_COLORS.length]} 
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
          {/* ================= TABLE ================= */}
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="p-4 font-bold border-b">
              Incoming Quote Requests
            </div>

            <table className="w-full text-sm">

              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="text-left">Customer</th>
                  <th className="text-left">Product</th>
                  <th className="text-left">Date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {quoteRequests.map((q) => (
                  <tr key={q.id} className="border-t">

                    <td className="p-3 font-medium">
                      {q.id}
                    </td>

                    <td>{q.customer}</td>
                    <td>{q.product}</td>
                    <td className="text-gray-500">{q.date}</td>

                    <td className="flex justify-center gap-3 p-2">

                      <CheckCircle2 className="text-green-600 cursor-pointer" />
                      <XCircle className="text-red-500 cursor-pointer" />
                      <MoreVertical className="text-gray-400 cursor-pointer" />

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </main>

      </div>
    </div>
  );
}