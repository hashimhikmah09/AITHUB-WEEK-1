import Link from "next/link";
import { ArrowRight, Sun, ShieldCheck, Zap } from "lucide-react";

/**
 * LANDING PAGE (Home)
 * Features: Responsive Hero Section, Branding, and CTA Buttons
 * Satisfies Deliverable #2
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
            <Sun size={16} />
            <span>Sustainable Energy for Everyone</span>
          </div>

          {/* Branding & Headline - Deliverable #2 */}
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight">
            Switch to Solar <br />
            <span className="text-yellow-500">Simplified.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
            SolarLink is Africa's leading marketplace for renewable energy. 
            We connect homeowners with a network of verified installers and 
            premium wholesalers to make your transition to clean energy seamless.
          </p>

          {/* CTA Buttons - Deliverable #2 */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link 
              href="/explore" 
              className="group flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-yellow-200 transition-all hover:scale-105"
            >
              Find an Installer
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/register" 
              className="flex items-center justify-center bg-white border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-900 hover:text-white transition-all"
            >
              Partner with Us
            </Link>
          </div>

          {/* Features Preview - Adds professional depth */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-left border-t border-gray-100 pt-16">
            <div className="space-y-3">
              <div className="h-12 w-12 bg-yellow-500 text-white rounded-xl flex items-center justify-center">
                <ShieldCheck />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Verified Partners</h3>
              <p className="text-gray-500">Every company on our platform undergoes a rigorous 50-point background check.</p>
            </div>
            <div className="space-y-3">
              <div className="h-12 w-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
                <Zap />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Direct-to-Source</h3>
              <p className="text-gray-500">Skip the middlemen and buy solar components directly from top wholesalers.</p>
            </div>
            <div className="space-y-3">
              <div className="h-12 w-12 bg-yellow-500 text-white rounded-xl flex items-center justify-center">
                <Sun />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-500">Reducing your carbon footprint while saving up to 70% on monthly utility bills.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}