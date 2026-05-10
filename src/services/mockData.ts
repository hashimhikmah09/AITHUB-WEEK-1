/**
 * COMPANY INTERFACE
 * This defines the shape of our data. 
 * TypeScript will throw an error if we miss a field.
 */
export interface Company {
  id: string;
  name: string;
  rating: number;
  location: string;
  services: string[];
  logo: string; // This can be an emoji or a URL to an image
}

/**
 * MOCK COMPANIES LIST
 * Requirement: Minimum 6 company entries.
 */
export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "SolarLink Premium",
    rating: 4.9,
    location: "Lagos, NG",
    services: ["Residential Installation", "Maintenance"],
    logo: "☀️",
  },
  {
    id: "2",
    name: "GreenEnergy Wholesalers",
    rating: 4.7,
    location: "Abuja, NG",
    services: ["Bulk Panels", "Inverters"],
    logo: "🔋",
  },
  {
    id: "3",
    name: "EcoVolt Systems",
    rating: 4.5,
    location: "Ibadan, NG",
    services: ["Battery Storage", "Consultancy"],
    logo: "🌿",
  },
  {
    id: "4",
    name: "RayLight Solar Ltd",
    rating: 4.2,
    location: "Enugu, NG",
    services: ["Solar Water Heating"],
    logo: "⚡",
  },
  {
    id: "5",
    name: "Nova Installers",
    rating: 4.8,
    location: "Kano, NG",
    services: ["Industrial Setup"],
    logo: "🏢",
  },
  {
    id: "6",
    name: "SunFlow Tech",
    rating: 4.6,
    location: "Port Harcourt, NG",
    services: ["Hybrid Inverters", "Tracking"],
    logo: "✨",
  },
];