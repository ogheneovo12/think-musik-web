/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2.3125rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(180deg, rgba(231, 243, 246, 0.15) 0%, rgba(71, 119, 225, 0.09) 100%)",
        "progress-gradient":
          "linear-gradient(111deg, #3375D9 0%, #E5B342 100%)",
        "nav-gradient":
          "linear-gradient(92deg, rgba(71, 119, 225, 0.10) 0%, rgba(5, 38, 109, 0.07) 100%)",
        "banner-gradient":
          "linear-gradient(rgba(26, 38, 64, 0.80) 100%, rgba(26, 38, 64, 0.80) 100%)",
        "lgbtq-gradient": "linear-gradient(111deg, #3375D9 0%, #E5B342 100%)",
        "inst-card":
          "linear-gradient(to top, rgba(16, 25, 43, 0.90) 50%, rgba(0,0,0,0.0) 100%)",
      },
      colors: {
        "nav-dark": "#191D31",
        "dark-blue": "#131627",
        "dark-blue-700": "#2A2D3C",
        "icon-blue": "rgba(71, 119, 225, 1)",
        "primary-blue": "#3375D9",
        "grey-main": "#D1D2D6",
        "extra-white": "#FAFAFB",
        "content-light": "#F3F3F5",
        "light-text": "#71717A",
        golden: "#FFC80B",
        "input-txt": "rgba(212, 213, 217, 0.50)",
      },
      boxShadow: {
        header: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
        card: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
      },
      fontFamily: {
        primary: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
