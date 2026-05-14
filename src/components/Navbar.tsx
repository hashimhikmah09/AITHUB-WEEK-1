// src/components/Navbar.tsx
"use client"; // Required because we use 'useState' for the mobile menu

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react"; // Icons for branding and mobile

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false); // State for dashboard dropdown

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Branding - Deliverable #2 */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-900">
          <Sun className="text-yellow-500" />
          <span>Solar<span className="text-yellow-500">Link</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link href="/company/123" className="hover:text-yellow-500 transition-colors">Companies</Link>
  
           <div className="relative">

          {/* DROPDOWN BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-green-600 transition flex items-center gap-1"
          >
            Dashboard
            <span className="text-xs">▼</span>
          </button>
            {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-lg overflow-hidden z-50">

              {/* CUSTOMER DASHBOARD */}
              <Link
                href="/dashboard"
                className="block px-4 py-3 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                👤 Customer Dashboard
              </Link>

              {/* ADMIN DASHBOARD */}
              <Link
                href="/admin/dashboard"
                className="block px-4 py-3 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                🏢 Admin Dashboard
              </Link>

            </div>
          )}
        </div>
          <Link href="/explore" className="hover:text-yellow-500 transition-colors">Explore</Link>
          <Link 
            href="/register" 
            className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-yellow-300 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button - Deliverable #2 */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link href="/register" onClick={() => setIsOpen(false)} className="text-yellow-600 font-bold">Get Started</Link>
        </div>
      )}
    </nav>
  );
}