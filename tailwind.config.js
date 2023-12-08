/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceSans: ['Source Sans 3'],
      },
      colors: {
        'primary': "#FFB30E",
        "danger": "#EB6453",
        "warning": "#F17228",
        "success": "#79B93C",
        "yellow-linear": "linear-gradient(93deg, #FFB800 -47.72%, #FF8A00 136.81%)"
      },
      boxShadow: {
        'red-shadow': '0px 20px 40px 0px rgba(250, 99, 35, 0.24), 0px 5px 10px 0px rgba(253, 114, 92, 0.22)',
        'yellow-shadow': '0px 14px 32px 0px rgba(255, 178, 14, 0.29), 0px 5px 8px 0px rgba(222, 151, 0, 0.24)',
        "black-shaow" : "0px 27px 82px 0px rgba(124, 124, 124, 0.28), 0px 14px 15px 0px rgba(124, 124, 124, 0.06)",
        "object" : "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)"
      },
      backgroundImage: {
        'hero': "url('assets/images/heroBack.png')",
        'guid' : "linear-gradient(180deg, rgba(255, 206, 103, 0.22) -42.47%, rgba(253, 237, 202, 0.00) 100%)",
        "search-btn" : "linear-gradient(96deg, #FF7A7A -39.64%, #F65900 135.31%)",
        "yellow-orange" : "linear-gradient(93deg, #FFB800 -47.72%, #FF8A00 136.81%)",
        "redish" : "linear-gradient(96deg, #FF7A7A -39.64%, #F65900 135.31%)",
        'footer': "url('assets/images/footer.jpeg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}