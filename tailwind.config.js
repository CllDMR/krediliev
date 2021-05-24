module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        mainDesk: "url('/images/bg-desktop.png')",
        mainMobil: "url('/images/bg-mobile.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
