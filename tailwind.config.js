module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tv: { max: "1200px" },
      pc: { max: "992px" },
      laptop: { max: "768px" },
      tablet: { max: "640px" },
      iphone: { max: "480px" },
      galaxy: { max: "360px" },
      ipad: { max: "320px" },
    },
    extend: {
      colors: {
        green_color: "#00C3A0",
        blue_color: "#0485D0",
        red_color: "#FCAE9A",
        // ---------
        back_color: "#22145F",
        // -------
        pink_color: "#FE7A8C",
        pink_2_color: "#FCBC9F",
        blue_2_color: "#00A0F8",
        blue_3_color: "#0071E1",
        purple_color: "#E45793",
        purple_2_color: "#CB42CE",
        blue_low_color: "#41B6FD",
        blue_low_2_color: "#20D5FE",
        // -------
        
        orang_color: "#FE9533",
        // -------
        dark_blue_2_color: "#180D4A",

        token_color: "#02A4B7",
        // --------
        sicial_color: "#273043",
        //--------
        text_color: "#CCCCD1",
      },
    },
  },
  plugins: [],
};
