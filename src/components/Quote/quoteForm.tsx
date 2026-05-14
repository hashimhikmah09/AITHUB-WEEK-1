"use client";

import { useState } from "react";

type QuoteFormData = {
  systemSize: number;
  address: string;
  energyUsage: number;
  budget: number;
};

type QuoteFormProps = {
  companyId?: string;
};

const initialState: QuoteFormData = {
  systemSize: 0,
  address: "",
  energyUsage: 0,
  budget: 0,
};

const steps = ["System", "Address", "Energy", "Budget", "Review"];

export default function QuoteForm({ companyId }: QuoteFormProps) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QuoteFormData>(initialState);

  const updateField = (field: keyof QuoteFormData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    switch (step) {
      case 0:
        return data.systemSize > 0;
      case 1:
        return data.address.trim().length > 5;
      case 2:
        return data.energyUsage > 0;
      case 3:
        return data.budget > 0;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!validateStep()) return alert("Please complete this step correctly");
    setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const goToStep = (index: number) => setStep(index);

  const submitQuote = async () => {
    setLoading(true);

    // MOCK API CALL
    await new Promise((res) => setTimeout(res, 1500));

    console.log("Submitted Quote:", data);

    setLoading(false);
    alert("Quote submitted successfully!");
    setStep(0);
    setData(initialState);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow">

      {/* STEP INDICATOR */}
      <div className="flex mb-6 gap-2">
        {steps.map((label, i) => (
          <div key={i} className="flex-1 text-center">
            <div
              className={`h-2 rounded ${
                i <= step ? "bg-green-500" : "bg-gray-300"
              }`}
            />
            <p className="text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">System Size</h2>
          <input
            type="number"
            placeholder="Enter system size (kW)"
            className="w-full border p-2 rounded"
            value={data.systemSize || ""}
            onChange={(e) => updateField("systemSize", Number(e.target.value))}
          />
        </div>
      )}

      {/* STEP 2 */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <input
            type="text"
            placeholder="Enter installation address"
            className="w-full border p-2 rounded"
            value={data.address}
            onChange={(e) => updateField("address", e.target.value)}
          />
        </div>
      )}

      {/* STEP 3 */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Energy Usage</h2>
          <input
            type="number"
            placeholder="Monthly kWh usage"
            className="w-full border p-2 rounded"
            value={data.energyUsage || ""}
            onChange={(e) =>
              updateField("energyUsage", Number(e.target.value))
            }
          />
        </div>
      )}

      {/* STEP 4 */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Budget</h2>
          <input
            type="number"
            placeholder="Enter budget ($)"
            className="w-full border p-2 rounded"
            value={data.budget || ""}
            onChange={(e) => updateField("budget", Number(e.target.value))}
          />
        </div>
      )}

      {/* STEP 5 - REVIEW */}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Review Quote</h2>

          <div className="space-y-3 text-sm">
            <p>
              <strong>System Size:</strong> {data.systemSize} kW{" "}
              <button className="text-blue-500 ml-2" onClick={() => goToStep(0)}>
                Edit
              </button>
            </p>

            <p>
              <strong>Address:</strong> {data.address}{" "}
              <button className="text-blue-500 ml-2" onClick={() => goToStep(1)}>
                Edit
              </button>
            </p>

            <p>
              <strong>Energy Usage:</strong> {data.energyUsage} kWh{" "}
              <button className="text-blue-500 ml-2" onClick={() => goToStep(2)}>
                Edit
              </button>
            </p>

            <p>
              <strong>Budget:</strong> ${data.budget}{" "}
              <button className="text-blue-500 ml-2" onClick={() => goToStep(3)}>
                Edit
              </button>
            </p>
          </div>
        </div>
      )}

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 border rounded"
          >
            Back
          </button>
        )}

        {step < 4 && (
          <button
            onClick={nextStep}
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded"
          >
            Next
          </button>
        )}

        {step === 4 && (
          <button
            onClick={submitQuote}
            disabled={loading}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded"
          >
            {loading ? "Submitting..." : "Submit Quote"}
          </button>
        )}
      </div>
    </div>
  );
}