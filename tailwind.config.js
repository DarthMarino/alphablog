module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightGray: "#eef0f1",
        defaultText: "#08090a",
        blue: "#3b49df",
        red: "#df3b3b",
        green: "#3bdf72",
        iceberg: "#00d1b2",
        gray: "#b5bdc4",
      },
      margin: {
        error: "30%",
      },
      maxWidth: {
        container: "250px",
        grid: "800px",
        cardImg: "150px",
      },
      minWidth: {
        container: "250px",
      },
      maxHeight: {
        container: "300px",
      },
      minHeight: {
        containerAdmin: "250px",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
