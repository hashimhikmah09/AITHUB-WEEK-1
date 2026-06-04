"use client";

import { useEffect } from "react";

import "@/src/i18n";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (
      "serviceWorker" in navigator
    ) {
      navigator.serviceWorker.register(
        "/sw.js"
      );
    }
  }, []);

  return <>{children}</>;
}