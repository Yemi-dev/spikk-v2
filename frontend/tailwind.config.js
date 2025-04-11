const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delight: ["var(--font-delight)"],
      },
      animation: {
        scaleUp: "scaleUp 0.1s ease-in-out",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    screens: {
      xs: {
        max: "480px",
      },
      sm: {
        max: "768.98px",
      },
      xlg: {
        max: "976px",
      },
      xmd: {
        max: "1250px",
      },
      md: "768.99px",
      lg: "976px",
      l: "1250px",
      xl: "1440px",
    },
    colors: {
      green: "#009245",
      red: "#EF4325",
      textBlack: "#222222",
      textGray: "#787878",
      bgDark: "#212121",
      bgPurple: "#290849",
      bgPurple100: "#55185D",
      bgPurpleLight: "#F9F8FA",
      textOrange: "#EF4325",
      textYellow: "#FFD524",
      textDarker: "#333333",
      purpleStroke: "#CFC0DE",
      textDark: "#290849",
      white: "#ffffff",
      black: "#000000",
      error: "#df1c36",
      natural700: "#6B6B6B",
      natural200: "#E7E7E7",
      natural300: "#D1D1D1",
      natural400: "#767676",

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
