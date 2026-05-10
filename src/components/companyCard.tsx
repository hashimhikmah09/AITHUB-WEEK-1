/**
 * Note: You must run 'npm install lucide-react' for these icons to work.
 */
import { Star, MapPin, ExternalLink } from "lucide-react";
import { Company } from "@/src/services/mockData";

interface CompanyCardProps {
  company: Company;
}

/**
 * REUSABLE COMPANY CARD
 * Features: Responsive design, Hover effects, and Accessibility.
 */
export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-yellow-400">
      <div className="flex justify-between items-start mb-4">
        {/* Logo Placeholder */}
        <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
          {company.logo}
        </div>
        
        {/* Rating Badge */}
        <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-bold text-gray-700">{company.rating}</span>
        </div>
      </div>

      {/* Company Info */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h3>
      
      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
        <MapPin size={14} />
        {company.location}
      </div>

      {/* Services List - Deliverable #3 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {company.services.map((service) => (
          <span 
            key={service} 
            className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded"
          >
            {service}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-yellow-500 transition-colors">
        View Profile
        <ExternalLink size={16} />
      </button>
    </div>
  );
}