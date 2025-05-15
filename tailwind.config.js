/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router files
    "./pages/**/*.{js,ts,jsx,tsx}", // Legacy Pages Router files
    "./components/**/*.{js,ts,jsx,tsx}", // Shared components
  ],

  darkMode: "media", // Enables dark mode based on system preference
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
