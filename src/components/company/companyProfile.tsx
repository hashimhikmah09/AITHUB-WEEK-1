"use client";

import { useState } from "react";
import Link from "next/link";

// --------------------------------------
// BEAUTIFUL COMPANY PROFILE PAGE (FULL UI)
// - Real image URLs added
// - Clean SaaS-style layout
// - Tabs + Gallery + CTA
// --------------------------------------

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ================= COMPANY DATA =================
  const company = {
    id: "solar-tech-123",
    name: "SolarTech Nigeria",
    bio: "Premium solar installation & renewable energy solutions across Africa.",
    rating: 4.7,

    // 🔥 working logo URL
    logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200",

  };

  // ================= PRODUCTS =================
  const products = [
    {
      name: "5kW Solar Home Kit",
      price: "$2,000",
      img: "https://images.unsplash.com/photo-1610375461369-d613b564d6e6?w=400",
    },
    {
      name: "10kW Commercial System",
      price: "$3,800",
      img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400",
    },
    {
      name: "Hybrid Inverter",
      price: "$750",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400",
    },
  ];

  // ================= REVIEWS =================
  const reviews = [
    {
      name: "John Doe",
      comment: "Excellent installation service. Very professional team!",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Mary A.",
      comment: "Fast delivery and great support.",
      rating: 4,
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  ];

  // ================= GALLERY =================
  const images = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    "https://images.unsplash.com/photo-1609298882756-9c1f6b9a3c2c?w=800",
    "https://images.unsplash.com/photo-1610057099443-fde8c4c1b0d5?w=800",
  ];

  const tabs = ["Overview", "Products", "Reviews", "Contact"];

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-5 mb-6 bg-white p-4 rounded-xl shadow-sm">

        <img
          src={company.logo}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h1 className="text-2xl font-bold">{company.name}</h1>
          <p className="text-gray-500 text-sm">{company.bio}</p>
          <p className="text-yellow-500 mt-1">⭐ {company.rating}</p>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <Link href={`/quote?companyId=${company.id}`}>
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg mb-6 transition">
          Request Solar Quote
        </button>
      </Link>

      {/* ================= TABS ================= */}
      <div className="flex gap-6 border-b mb-6 text-sm font-medium">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`pb-2 transition ${
              activeTab === i
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= OVERVIEW ================= */}
      {activeTab === 0 && (
        <div>
          <h2 className="font-semibold mb-3">Our Services</h2>

          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            <li>⚡ Solar Installation</li>
            <li>🔋 Battery Storage Systems</li>
            <li>🛠 Maintenance & Repairs</li>
            <li>📊 Energy Consultation</li>
          </ul>

          {/* GALLERY */}
          <h3 className="font-semibold mt-8 mb-3">
            Completed Installations
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-lg cursor-pointer hover:scale-105 transition object-cover h-32 w-full"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ================= PRODUCTS ================= */}
      {activeTab === 1 && (
        <div className="grid grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <img src={p.img} className="h-32 w-full object-cover" />
              <div className="p-3">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-green-600 font-medium">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= REVIEWS ================= */}
      {activeTab === 2 && (
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="flex gap-3 border-b pb-3">

              <img
                src={r.avatar}
                className="w-10 h-10 rounded-full"
              />

              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-gray-600 text-sm">{r.comment}</p>
                <p className="text-yellow-500 text-sm">⭐ {r.rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= CONTACT ================= */}
      {activeTab === 3 && (
        <div className="space-y-2 text-gray-700">
          <p>📧 Email: contact@solartech.com</p>
          <p>📞 Phone: +234 800 000 0000</p>
          <p>📍 Location: Lagos, Nigeria</p>
        </div>
      )}

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-4xl rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}