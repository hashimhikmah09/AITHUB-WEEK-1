"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const filters = {
    location: params.get("location") || "",
    service: params.get("service") || "",
    budget: params.get("budget") || "",
    rating: params.get("rating") || "",
    responseTime: params.get("responseTime") || "",
  };

  const setFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (value) newParams.set(key, value);
    else newParams.delete(key);

    router.push(`/search?${newParams.toString()}`);
  };

  return { filters, setFilter };
}