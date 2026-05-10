"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { mockAuthService } from "@/src/services/authservices";
import { ShieldCheck, User, Building2, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Validation State
  const [strength, setStrength] = useState(0);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== "";

  // Password Strength Logic
  useEffect(() => {
    let score = 0;
    if (formData.password.length > 6) score++;
    if (/[A-Z]/.test(formData.password)) score++;
    if (/[0-9]/.test(formData.password)) score++;
    if (/[^A-Za-z0-9]/.test(formData.password)) score++;
    setStrength(score);
  }, [formData.password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordsMatch) {
      toast.error("Passwords do not match!");
      return;
    }

    if (strength < 2) {
      toast.error("Please choose a stronger password.");
      return;
    }

    await mockAuthService.register({ ...formData, role });
    toast.success("Account created! Please login to your new account.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2">Join the renewable energy revolution.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Role Selection - Deliverable #4 */}
          <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-2xl">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                role === "customer" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <User size={18} /> Customer
            </button>
            <button
              type="button"
              onClick={() => setRole("company")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                role === "company" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Building2 size={18} /> Company
            </button>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
              placeholder="name@company.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button 
              type="button"
              className="absolute right-4 top-10 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {/* Password Strength Indicator */}
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    strength >= step ? (strength <= 2 ? "bg-orange-400" : "bg-green-500") : "bg-gray-200"
                  }`} 
                />
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
              {strength < 2 ? "Weak" : strength === 3 ? "Good" : strength === 4 ? "Strong" : "Very Weak"}
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              required
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                formData.confirmPassword && !passwordsMatch ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-yellow-500"
              }`}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {formData.confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-xs mt-1 font-medium">Passwords do not match</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <ShieldCheck size={20} /> Register for SolarLink
          </button>
        </form>
      </div>
    </div>
  );
}