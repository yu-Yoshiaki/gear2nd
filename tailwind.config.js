module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: { extend: {} },
  variants: {
    extend: {
      "flex-y-center": "flex items-center",
    },
  },
  plugins: [],
};
