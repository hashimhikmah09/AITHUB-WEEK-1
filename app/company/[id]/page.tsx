// app/company/[id]/page.tsx
// --------------------------------------
// This is the dynamic route for company profile
// URL: /company/1, /company/abc, etc.
// --------------------------------------

import CompanyProfile from "@/src/components/company/companyProfile";


export default function CompanyPage() {
  return (
    <main>
        
      <CompanyProfile />
    </main>
  );
}