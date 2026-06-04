// lib/companies.ts

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/";

export const companies = [
  {
    id: "1",
    name: "SolarTech Nigeria",
    location: "Lagos",
    services: ["Installation"],
    rating: 4.8,
    responseTime: "2 hrs",
    priceRange: 3000,
    lat: 6.5244,
    installationsCompleted: 120,
  },

  {
    id: "2",
    name: "EcoSun Energy",
    location: "Abuja",
    services: ["Maintenance"],
    rating: 4.6,
    responseTime: "4 hrs",
    priceRange: 2000,
    lat: 9.0765,
    installationsCompleted: 80,
  },
  {
      id: "3",
      name: "Sun Power",
      location: "Port Harcourt",
      rating: 4.9,
      budget: "650,000",
      serviceType: "Installation",
      responseTime: "45 mins",
      installationsCompleted: 150,
    },
];