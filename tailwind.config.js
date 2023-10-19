/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile":{"max": "738px"}, // Custom 'mobile' max-width breakpoint
        "tablet":{"max": "1024px"}, // Custom 'laptop' max-width breakpoint
        "desktop":{"max": "1366px"}, // Custom 'laptop' max-width breakpoint
      },
    },
  },
  plugins: [],
};
