import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "custom-px": "100px",
        "custom-py": "15px",
        "responsive-px": "20px",
        "responsive-py": "15px",
      },
      width: {
        "custom-width": "800px",
      },
      height: {
        "custom-height": "450px",
      },
      margin: {
        "custom-margin": "-300px",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "fade-in-delay": "fadeIn 2s ease-out",
        "slide-in": "slideIn 1s ease-out",
        "slide-logo": "slide 30s linear infinite",
        "slide-logo-back": "slideback 30s linear infinite",
        "zoom-in": "zoom-in 0.5s ease forwards",
        "slide-up": "slide-up 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.75" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "0.25" },
        },
        slide_up: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideback: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        zoomin: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "signup-bg": "url('/images/background.jpeg')", // Custom background
        "signup-bg1": "url('/images/background1.jpg')", // Custom background
        "signup-bg2": "url('/images/background2.jpg')", // Custom background
        "signup-bg3": "url('/images/background3.jpg')", // Custom background
        "signup-bg4": "url('/images/background3.jpg')", // Custom background
      },
      colors: {
        "custom-blue": "#638ECB",
        "custom-hover": "#395886",
        "custom-blue1": "#B1C9EF",
        "custom-hover1": "#006DA4",
        "custom-brown": "#F9DFB8",
        "custom-brown-hover": "#552E10",
        "custom-brown1": "#895737",
        "custom-gray": "#F0F5F9",
        "custom-gray1": "#2D82B5", //#76A6C5
        "custom-gray2": "#015C92",
        "custom-gray3": "#c3c8e3",
        "get-started": "#344C3D",
        "get-started-hover": "#8EA58C",
        "header-green": "#355E3B",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
