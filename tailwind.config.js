/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.vue"],
  theme: {
    extend: {
      backgroundImage: {
<<<<<<< HEAD
        "offer-image": "url('/src/assets/default/bg-offer.jpeg')",
        "offer-image-2": "url('/src/assets/default/bg-offer-2.jpeg')",
=======
        "offer-image": "url('src/assets/designs/bg-offer.jpeg')",
        "offer-image-2": "url('src/assets/designs/bg-offer-2.jpeg')",
>>>>>>> 5903df11e4286e0e066a0e7a4cb0853eadfd1ac1
      },
      // container: {
      //   center: true,
      //   padding: "8rem",
      //   // maxWidth: "1600px", // Adjust the width as per your requirement
      //   screens: {
      //     xs: "320px",
      //     sm: "720px",
      //     md: "960px",
      //     lg: "1400px",
      //     xl: "1600px",
      //   },

      // },
      screens: {
        xxs: "380px",
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "540px",
          sm: "720px",
          md: "960px",
          lg: "1140px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
