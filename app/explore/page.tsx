"use client"; // Required for state management and search functionality

import { useState, useEffect } from "react";
import { mockCompanies, Company } from "@/src/services/mockData";
import CompanyCard from "@/src/components/companyCard";
import { Search, SlidersHorizontal } from "lucide-react";

/**
 * ============================================
 * EXPLORE PAGE
 * ============================================
 */
export default function ExplorePage() {

  // State for companies
  const [companies, setCompanies] = useState<Company[]>([]);

  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  /**
   * ============================================
   * FETCH MOCK DATA
   * ============================================
   */
  useEffect(() => {

    // Simulate API delay
    const timer = setTimeout(() => {
      setCompanies(mockCompanies);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  /**
   * ============================================
   * FILTER LOGIC
   * ============================================
   */
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* ============================================
          HEADER SECTION
      ============================================ */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Explore Solar Partners
        </h1>

        <p className="text-gray-500">
          Find verified installers and wholesalers near you.
        </p>
      </header>

      {/* ============================================
          SEARCH + FILTER BAR
      ============================================ */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">

        {/* Search Input */}
        <div className="relative flex-1">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search by company name or location..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-all">

          <SlidersHorizontal size={18} />

          Filters
        </button>
      </div>

      {/* ============================================
          LOADING SKELETON
      ============================================ */}
      {isLoading ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[...Array(6)].map((_, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden animate-pulse bg-white shadow-sm"
            >


              {/* Content Skeleton */}
              <div className="p-5 space-y-4">

                {/* Title */}
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                {/* Subtitle */}
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>

                {/* Description lines */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>

                {/* Button Skeleton */}
                <div className="h-10 bg-gray-200 rounded-xl w-full mt-4"></div>

              </div>
            </div>

          ))}

        </div>

      ) : (

        <>
          {/* ============================================
              RESULTS GRID
          ============================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
              />
            ))}

          </div>

          {/* ============================================
              EMPTY STATE
          ============================================ */}
          {filteredCompanies.length === 0 && (

            <div className="text-center py-20">

              <p className="text-gray-500 text-lg">
                No companies found matching "{searchQuery}"
              </p>

            </div>

          )}

        </>

      )}

    </div>
  );
}