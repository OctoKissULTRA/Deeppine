import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        pine: {
          50:  "#e6f2f0",
          100: "#cfe6e2",
          200: "#9fcfc5",
          300: "#6fb7a8",
          400: "#3fa08b",
          500: "#1b7f6d",
          600: "#126157",
          700: "#0e4a43",
          800: "#0a3430",
          900: "#072524",
          950:"#031616"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(31,120,120,0.35), 0 10px 40px rgba(0,0,0,0.35)"
      }
    },
  },
  plugins: [],
} satisfies Config;
