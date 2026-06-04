"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function SolarCalculatorPage() {
  const router = useRouter();

  const [monthlyBill, setMonthlyBill] = useState<number>(50000);
  const [location, setLocation] = useState<string>("Lagos");
  const [roofSize, setRoofSize] = useState<number>(120);

  const [results, setResults] = useState<{
    systemSize: number;
    upfrontMin: number;
    upfrontMax: number;
    monthlySavings: number;
    yearlySavings: number;
    paybackYears: number;
  } | null>(null);

  const calculateSavings = () => {
    // estimated solar system size
    const systemSize = Number((monthlyBill / 10000).toFixed(1));

    // installation costs
    const upfrontMin = systemSize * 800000;
    const upfrontMax = systemSize * 1200000;

    // estimated monthly savings
    const monthlySavings = monthlyBill * 0.8;

    // yearly savings
    const yearlySavings = monthlySavings * 12;

    // payback period
    const paybackYears = Number(
      (upfrontMax / yearlySavings).toFixed(1)
    );

    setResults({
      systemSize,
      upfrontMin,
      upfrontMax,
      monthlySavings,
      yearlySavings,
      paybackYears,
    });
  };

  // bar chart data
  const barData = results
    ? [
        {
          name: "Current Bill",
          amount: monthlyBill,
        },
        {
          name: "Solar Savings",
          amount: results.monthlySavings,
        },
      ]
    : [];

  // line chart data
  const lineData = results
    ? Array.from({ length: 10 }, (_, i) => ({
        year: `Year ${i + 1}`,
        savings: results.yearlySavings * (i + 1),
      }))
    : [];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Solar Savings Calculator
          </h1>

          <p className="text-gray-600 mt-3">
            Estimate your solar system size, savings, and payback period.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl shadow-lg p-8 mb-10"
        >
          <div className="grid md:grid-cols-3 gap-6">

            {/* Monthly Bill */}
            <div>
              <label className="block mb-2 font-medium">
                Monthly Electricity Bill (₦)
              </label>

              <input
                type="number"
                value={monthlyBill}
                onChange={(e) =>
                  setMonthlyBill(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border rounded-xl p-3"
              />
            </div>

            {/* Roof Size */}
            <div>
              <label className="block mb-2 font-medium">
                Roof Size (sqm)
              </label>

              <input
                type="number"
                value={roofSize}
                onChange={(e) =>
                  setRoofSize(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={calculateSavings}
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
          >
            Calculate Savings
          </button>
        </motion.div>

        {/* RESULTS */}
        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10"
          >

            {/* RESULT CARDS */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-3xl p-6 shadow">
                <h3 className="text-gray-500">
                  Estimated System Size
                </h3>

                <p className="text-3xl font-bold mt-3">
                  {results.systemSize} kW
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow">
                <h3 className="text-gray-500">
                  Upfront Cost Range
                </h3>

                <p className="text-2xl font-bold mt-3">
                  ₦{results.upfrontMin.toLocaleString()} -
                </p>

                <p className="text-2xl font-bold">
                  ₦{results.upfrontMax.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow">
                <h3 className="text-gray-500">
                  Monthly Savings
                </h3>

                <p className="text-3xl font-bold mt-3 text-green-600">
                  ₦{results.monthlySavings.toLocaleString()}
                </p>
              </div>
            </div>

            {/* CHARTS */}
            <div className="grid lg:grid-cols-2 gap-8">

              {/* BAR CHART */}
              <div className="bg-white p-6 rounded-3xl shadow">
                <h2 className="text-xl font-semibold mb-4">
                  Bill vs Savings
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="amount" radius={[10, 10, 0, 0]}  fill="#EAB308"/>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* LINE CHART */}
              <div className="bg-white p-6 rounded-3xl shadow">
                <h2 className="text-xl font-semibold mb-4">
                  10-Year Payback Projection
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line
                      type="monotone"
                      dataKey="savings"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* PAYBACK */}
            <div className="bg-white rounded-3xl p-6 shadow">
              <h2 className="text-2xl font-bold">
                Estimated Payback Period
              </h2>

              <p className="text-4xl font-bold text-yellow-500 mt-4">
                {results.paybackYears} Years
              </p>
            </div>

            
            {/* CTA BUTTON */}
            <div className="text-center mt-20 mb-10">
                <button
                onClick={() => {
                if (!results) {
                    alert("Please calculate savings first");
                    return;
                }

                router.push(
                    `/companies?location=${location}&systemSize=${results.systemSize}`
                );
                }}
                className="bg-yellow-500  hover:bg-yellow-600 text-white px-10 py-4 p-3
                rounded-2xl text-md font-semibold transition shadow-lg hover:shadow-xl">
                Get Quotes Based on This Estimate
            </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}