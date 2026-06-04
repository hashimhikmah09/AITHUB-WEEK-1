"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm grid md:grid-cols-5 gap-4">

      <input
        placeholder="Location"
        className="border rounded-xl p-3"
        onChange={(e) =>
          updateFilter("location", e.target.value)
        }
      />

      <select
        className="border rounded-xl p-3"
        onChange={(e) =>
          updateFilter("service", e.target.value)
        }
      >
        <option value="">Service Type</option>
        <option value="Installation">
          Installation
        </option>
        <option value="Maintenance">
          Maintenance
        </option>
      </select>

      <input
        type="number"
        placeholder="Minimum Rating"
        className="border rounded-xl p-3"
        onChange={(e) =>
          updateFilter("rating", e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Budget"
        className="border rounded-xl p-3"
        onChange={(e) =>
          updateFilter("budget", e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Response Time"
        className="border rounded-xl p-3"
        onChange={(e) =>
          updateFilter("responseTime", e.target.value)
        }
      />
    </div>
  );
}