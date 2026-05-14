import Image from "next/image";
import Link from "next/link";

/**
 * Landing page hero section
 */
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Power Your Future with
            <span className="text-yellow-600">
              {" "}
              SolarLink
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Connect with trusted solar companies,
            compare quotes, and transition to
            renewable energy seamlessly.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/explore"
              className="bg-yellow-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-yellow-600 transition"
            >
              Explore Companies
            </Link>

            <Link
              href="/register"
              className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-2xl font-medium hover:bg-yellow-50 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
            alt="Solar panels generating renewable energy"
            width={700}
            height={500}
            className="rounded-3xl shadow-lg object-cover"
            
          />
        </div>
      </div>
    </section>
  );
}