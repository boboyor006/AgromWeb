"use client"

import React, { useState } from "react"
import { Instagram, Facebook, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    saveInfo: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "", saveInfo: false })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* MAP SECTION */}
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

      {/* PAGE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* FORM SECTION */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Have A Question?
            </h1>

            <p className="text-slate-600 mb-8">
              Your email address will not be published. Required fields are marked 
              <span className="text-red-500 ml-1">*</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
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
                  placeholder="Your email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg 
                  focus:border-emerald-600 focus:ring focus:ring-emerald-200 
                  bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg 
                focus:border-emerald-600 focus:ring focus:ring-emerald-200 
                bg-white text-slate-900 placeholder-slate-500 resize-none"
              />

              {/* CHECKBOX */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="w-5 h-5 accent-emerald-600 rounded cursor-pointer"
                />
                <label className="text-slate-700">
                  Save my name, email, and website for next time.
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 
                text-white font-semibold py-3 px-8 rounded-lg shadow-md 
                transition-all duration-200"
              >
                Submit Now
              </button>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div className="bg-emerald-600 text-white px-4 py-3 rounded-lg">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-10">
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Address</h2>
              <p className="text-slate-700">
                IT Park, Termez, Surkhandarya, Uzbekistan
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information</h2>
              <div className="space-y-3 text-slate-700">
                <p><span className="font-semibold">Hotline:</span> +(84) 2500 888 33</p>
                <p><span className="font-semibold">Email:</span> support@example.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Follow Us</h2>
              <div className="flex gap-4">

                <a className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 
                  rounded-full flex items-center justify-center text-white shadow-md">
                  <Instagram size={20} />
                </a>

                <a className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 
                  rounded-full flex items-center justify-center text-white shadow-md">
                  <Facebook size={20} />
                </a>

                <a className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 
                  rounded-full flex items-center justify-center text-white shadow-md">
                  <Send size={20} />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Working Hours</h2>
              <div className="space-y-2 text-slate-700">
                <p><span className="font-semibold">Mon – Fri:</span> 8:00AM – 18:00PM</p>
                <p><span className="font-semibold">Sat – Sun:</span> Closed</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
