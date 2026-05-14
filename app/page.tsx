import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* CTA SECTION */}
      <section className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Get a Solar Installation Quote
        </h2>

        <p className="text-gray-600 mb-6 text-center max-w-md">
          Compare trusted solar companies and receive a tailored installation estimate in minutes.
        </p>

        <Link href="/quote">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Request a Quote
          </button>
        </Link>
      </section>
    </main>
  );
}