"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

import FilterBar from "@/src/components/Filters/filterBar";
import CompanyCard from "@/src/components/companyCard";
import { companies } from "@/src/lib/companies";

import { List, Map as MapIcon } from "lucide-react";

const MapView = dynamic(
  () => import("@/src/components/Map/mapview"),
  { ssr: false }
);

export default function SearchPage() {
  const searchParams = useSearchParams();

  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filters = {
    location: searchParams.get("location") || "",
    service: searchParams.get("service") || "",
    rating: Number(searchParams.get("rating")) || 0,
    budget: Number(searchParams.get("budget")) || Infinity,
    responseTime:
      Number(searchParams.get("responseTime")) || Infinity,
  };

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      return (
        (!filters.location ||
          company.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&

        (!filters.service ||
          company.service === filters.service) &&

        company.rating >= filters.rating &&
        company.budget <= filters.budget &&
        company.responseTime <= filters.responseTime
      );
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            {/* LEFT */}
            <div>
              <h1 className="text-3xl font-bold">
                Find Solar Companies
              </h1>

              <p className="text-gray-500 mt-1">
                Search verified solar providers near you
              </p>
            </div>

            {/* TOGGLE */}
            <div className="flex border rounded-xl p-1 bg-gray-50 w-fit">

              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition ${
                  viewMode === "list"
                    ? "bg-yellow-100 text-yellow-600"
                    : "text-gray-400"
                }`}
              >
                <List size={20} />
              </button>

              <button
                onClick={() => setViewMode("map")}
                className={`p-3 rounded-lg transition ${
                  viewMode === "map"
                    ? "bg-yellow-100 text-yellow-600"
                    : "text-gray-400"
                }`}
              >
                <MapIcon size={20} />
              </button>

            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-6">
            <FilterBar />
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto p-6">

        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
              />
            ))}

          </div>
        ) : (
          <MapView companies={filteredCompanies} />
        )}

      </div>
    </div>
  );
}