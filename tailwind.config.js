/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "dm-sans": ["DM Sans", "sans-serif"]
      },      
      textColor:{
        "gray-color": "#828282",
      },   
      backgroundColor:{
        "green-color": "#27AE60",        
        "card-color": "#212121",
        "bg-color": "#171717",
        "menu-color": "#172554",
      },
      
      backgroundImage:{
        "open-menu": "url('/src/assets/menu.svg')",
        "close-menu": "url('/src/assets/close.svg')",
        "codepen": "url('/src/assets/codeopen.svg')",
        "react": "url('/src/assets/react.svg')",
        "tailwind": "url('/src/assets/tailwind.svg')",
      }
    },
  },
  plugins: [],
}

