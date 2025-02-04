import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";
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
      screens: {
        web: "601px",
      },
      fontFamily: {
        nanum: ["var(--font-nanum-square)"],
      },
      colors: {
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
        black: "hsl(var(--black))",
        error: "hsl(var(--error))",
      },
      borderRadius: {
        lg: "var(--radius)", // 10px
        md: "calc(var(--radius) - 2px)", // 8px
        sm: "calc(var(--radius) - 4px)", // 6px
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".heading-1": {
          fontSize: "32px",
          lineHeight: "48px",
          fontWeight: "800",
        },
        ".heading-2": {
          fontSize: "24px",
          lineHeight: "36px",
          fontWeight: "800",
        },
        ".heading-3": {
          fontSize: "20px",
          lineHeight: "30px",
          fontWeight: "800",
        },
        ".heading-3-thin": {
          fontSize: "20px",
          lineHeight: "30px",
          fontWeight: "400",
        },
        ".heading-4": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "800",
        },
        ".heading-5": {
          fontSize: "14px",
          lineHeight: "25.2px",
          fontWeight: "800",
        },
        ".heading-6": {
          fontSize: "12px",
          lineHeight: "21.6px",
          fontWeight: "800",
        },
        ".subtitle-1": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "700",
        },
        ".subtitle-2": {
          fontSize: "14px",
          lineHeight: "25.2px",
          fontWeight: "700",
        },
        ".subtitle-3": {
          fontSize: "12px",
          lineHeight: "21.6px",
          fontWeight: "700",
        },
        ".body-1": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
        },
        ".body-2": {
          fontSize: "14px",
          lineHeight: "21px",
          fontWeight: "400",
        },
        ".body-2-bold": {
          fontSize: "14px",
          lineHeight: "21px",
          fontWeight: "700",
        },
        ".caption": {
          fontSize: "12px",
          lineHeight: "21.6px",
          fontWeight: "400",
        },
        ".caption-bold": {
          fontSize: "12px",
          lineHeight: "21.6px",
          fontWeight: "700",
        },
        ".button-s-cta": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "800",
        },
        ".button-s": {
          fontSize: "12px",
          lineHeight: "21.6px",
          fontWeight: "700",
        },
        ".button-m-cta": {
          fontSize: "14px",
          lineHeight: "21px",
          fontWeight: "800",
        },
        ".button-m": {
          fontSize: "14px",
          lineHeight: "22.4px",
          fontWeight: "700",
        },
        ".hide-scroll-bar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
          },
        },
        ".toast-shadow": {
          boxShadow: "0px 12px 20px 0px #C4C4C440",
        },
      });
    }),
  ],
};
export default config;
