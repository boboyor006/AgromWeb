
// header code animaton text code 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseGlow: { '0%, 100%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }, '50%': { boxShadow: '0 0 30px rgba(34, 197, 94, 0.8)' } },
      },
    },
  },
  plugins: [],
};

  
  // /  header code animaton text code 
  
  
  
  
  
  
  