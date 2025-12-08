"use client"

import React, { useState } from "react"
import { Instagram, Facebook, Send, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    saveInfo: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
  }

  const sendToTelegram = async (data) => {
    const BOT_TOKEN = "8396373549:AAFxX0y-i7pHP9AhGgJzUPwMtIFBB4sneNI"
    const CHAT_ID = "1004427815"
    
    const message = `
🆕 Yangi kontakt xabari!

👤 Ism: ${data.name}
📧 Email: ${data.email}
📱 Telefon: ${data.phone}
💬 Xabar: ${data.message}

🤖 @Agrommmm_bot orqali yuborildi
    `

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Telegram botga yuborishda xatolik")
      }

      return true
    } catch (error) {
      console.error("Telegram xatolik:", error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const success = await sendToTelegram(formData)

    if (success) {
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "", saveInfo: false })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      alert("Xabar yuborishda xatolik yuz berdi. Iltimos qayta urinib ko'ring.")
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      
      <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5537545635944!2d67.268149!3d37.224392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b58d3b8f646e51%3A0x2aaf1a56c9d24a56!2sTermiz%2C%20Surxondaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2suz!4v1702560000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Savolingiz bormi?
            </h1>

            <p className="text-slate-600 mb-8">
              Sizning email manzilingiz chop etilmaydi. Majburiy maydonlar 
              <span className="text-red-500 ml-1">*</span> belgisi bilan belgilangan
            </p>

            <div className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Ismingiz*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg 
                  focus:border-emerald-600 focus:ring focus:ring-emerald-200 
                  bg-white text-slate-900 placeholder-slate-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email manzilingiz*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg 
                  focus:border-emerald-600 focus:ring focus:ring-emerald-200 
                  bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon raqamingiz* (+998 XX XXX XX XX)"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg 
                  focus:border-emerald-600 focus:ring focus:ring-emerald-200 
                  bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Xabaringizni yozing..."
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg 
                focus:border-emerald-600 focus:ring focus:ring-emerald-200 
                bg-white text-slate-900 placeholder-slate-500 resize-none"
              />

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="w-5 h-5 accent-emerald-600 rounded cursor-pointer"
                />
                <label className="text-slate-700">
                  Keyingi safar uchun ma'lumotlarimni saqlash
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-emerald-600 hover:bg-emerald-700 
                text-white font-semibold py-3 px-8 rounded-lg shadow-md 
                transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Yuborilmoqda...
                  </>
                ) : (
                  "Yuborish"
                )}
              </button>

              {submitted && (
                <div className="bg-emerald-600 text-white px-4 py-3 rounded-lg flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>Rahmat! Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz!</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-10">
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Manzil</h2>
              <p className="text-slate-700">
                IT Park, Termiz, Surxondaryo, O'zbekiston
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ma'lumot</h2>
              <div className="space-y-3 text-slate-700">
                <p><span className="font-semibold">Hotline:</span> +(91) 123 45 67</p>
                <p><span className="font-semibold">Email:</span> support@example.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Bizni kuzating</h2>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 
                  rounded-full flex items-center justify-center text-white shadow-md transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 
                  rounded-full flex items-center justify-center text-white shadow-md transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 
                  rounded-full flex items-center justify-center text-white shadow-md transition-colors">
                  <Send size={20} />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ish vaqti</h2>
              <div className="space-y-2 text-slate-700">
                <p><span className="font-semibold">Dush – Juma:</span> 8:00 – 18:00</p>
                <p><span className="font-semibold">Shanba – Yakshanba:</span> Dam olish</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}