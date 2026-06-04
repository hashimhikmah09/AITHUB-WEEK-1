import { API_URL } from "../lib/companies";

export const getCompanies = async () => {
  const token = localStorage.getItem(" token");

  const response = await fetch(
    `${API_URL}/company`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  return response.json();
};