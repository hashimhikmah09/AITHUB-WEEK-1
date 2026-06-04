"use client";

type Props = {
  company: any;
  selectedCompanies: any[];
  toggleCompanySelection: (
    company: any
  ) => void;
  bestMatchId?: string;
};

export default function CompanyCard({
  company,
  selectedCompanies,
  toggleCompanySelection,
  bestMatchId,
}: Props) {
  const isSelected = selectedCompanies.some(
    (c) => c.id === company.id
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 border relative">
      
      {/* BEST MATCH BADGE */}

      {bestMatchId === company.id && (
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Best Match
        </span>
      )}

      {/* COMPANY NAME */}

      <h2 className="font-bold text-lg">
        {company.name}
      </h2>

      {/* LOCATION */}

      <p className="text-gray-500 mt-1">
        📍 {company.location}
      </p>

      {/* DETAILS */}

      <div className="mt-4 space-y-2 text-sm">
        <p>⭐ {company.rating}</p>

        <p>
          📝 {company.description}
        </p>

        <p>
          ⏱ {company.responseTime || "2 hrs"}
        </p>
      </div>

      {/* COMPARE BUTTON */}

      <button
        onClick={() =>
          toggleCompanySelection(company)
        }
        className={`w-full mt-5 py-3 rounded-xl text-white font-medium transition ${
          isSelected
            ? "bg-red-500 hover:bg-red-600"
            : "bg-yellow-500 hover:bg-yellow-600"
        }`}
      >
        {isSelected
          ? "Remove from Compare"
          : "Add to Compare"}
      </button>
    </div>
  );
}