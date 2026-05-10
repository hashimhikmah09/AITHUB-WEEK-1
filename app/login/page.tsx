"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { mockAuthService } from "@/src/services/authservices";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";

/**
 * LOGIN PAGE
 * Part of Deliverable #4: Authentication UI
 * Uses localStorage to simulate a real login session.
 */
export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Retrieve the user we "registered" earlier
    const storedUser = mockAuthService.getUser();

    // Mock Validation Logic
    if (!storedUser) {
      toast.error("No account found. Please register first!");
      return;
    }

    if (formData.email === storedUser.email && formData.password === storedUser.password) {
      toast.success(`Welcome back, ${storedUser.role}!`);
      router.push("/");
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Login</h2>
          <p className="text-gray-500 mt-2">Access your SolarLink dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="flex justify-between mb-2 ml-1">
              <label className="text-sm font-bold text-gray-700">Password</label>
              <button type="button" className="text-xs text-yellow-600 font-bold hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button 
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/register" className="text-yellow-600 font-bold hover:underline">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}