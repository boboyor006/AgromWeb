import React, { useState } from "react";
import { User, EyeOff, Eye, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";



export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "" 
  });

  // Parol shartlarini tekshirish
  const hasUpperCase = /[A-Z]/.test(registerData.password);
  const hasNumber = /[0-9]/.test(registerData.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(registerData.password);
  const hasMinLength = registerData.password.length >= 8;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login ma'lumotlari:", loginData);
    alert(`Kirish: ${loginData.email}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Ro'yxatdan o'tish ma'lumotlari:", registerData);
    alert(`Ro'yxatdan o'tildi: ${registerData.name}`);
  };

  const handleGoogleLogin = () => {
    alert("Google orqali kirish boshlandi...");
    // Bu yerda Google OAuth integratsiyasi bo'lishi kerak
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-gray-600 text-xl font-normal flex items-center justify-center gap-2">
            <User className="text-gray-400" size={20} />
            MENING HISOBIM
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className=" lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

         
      

          {/* Register Section */}
          <div className="border border-gray-300 rounded-lg p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ro'yxatdan o'tish</h2>

            <div className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ism <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    value={registerData.name}
                    onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                    className="w-full border border-gray-300 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-green-500"
                    placeholder="ismingiz"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input
                    type="email"
                    required
                    value={registerData.email}
                    onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    className="w-full border border-gray-300 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-green-500"
                    placeholder="email manzilingiz"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Parol <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={registerData.password}
                    onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                    className="w-full border border-gray-300 rounded pl-10 pr-12 py-3 focus:outline-none focus:border-green-500"
                    placeholder="parolingiz"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                
                {/* Parol shartlari */}
                {registerData.password && (
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={hasMinLength ? "text-green-600" : "text-red-500"}>
                        {hasMinLength ? "✓" : "✗"}
                      </span>
                      <span className={hasMinLength ? "text-gray-700" : "text-gray-500"}>
                        Kamida 8 ta belgi
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={hasUpperCase ? "text-green-600" : "text-red-500"}>
                        {hasUpperCase ? "✓" : "✗"}
                      </span>
                      <span className={hasUpperCase ? "text-gray-700" : "text-gray-500"}>
                        Bitta katta harf (A-Z)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={hasNumber ? "text-green-600" : "text-red-500"}>
                        {hasNumber ? "✓" : "✗"}
                      </span>
                      <span className={hasNumber ? "text-gray-700" : "text-gray-500"}>
                        Bitta raqam (0-9)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={hasSpecialChar ? "text-green-600" : "text-red-500"}>
                        {hasSpecialChar ? "✓" : "✗"}
                      </span>
                      <span className={hasSpecialChar ? "text-gray-700" : "text-gray-500"}>
                        Bitta maxsus belgi (!@#$%^&*)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Register Button */}
              <button
                onClick={handleRegister}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition mt-6"
              >
                Ro'yxatdan o'tish
              </button>

              <button
             
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition mt-6"
              >
                <Link to="/login">Login</Link>
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">yoki</span>
                </div>
              </div>

              {/* Google Register */}
              <button
                onClick={handleGoogleLogin}
                className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded transition flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google orqali ro'yxatdan o'tish
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-800 font-semibold mb-4">
                Bugun ro'yxatdan o'ting va quyidagilardan foydalaning:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Tez xarid qilish uchun oson to'lov
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Buyurtmangizni kuzatib boring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Xaridlar tarixini ko'ring
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}