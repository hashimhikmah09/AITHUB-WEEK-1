import QuoteForm from "@/src/components/Quote/quoteForm";
import Navbar from "@/src/components/Navbar";

export default function QuotePage({
  searchParams,
}: {
  searchParams?: { companyId?: string };
}) {
  return (
    <main>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Request a Quote
        </h1>

        <QuoteForm companyId={searchParams?.companyId} />
      </div>
    </main>
  );
}