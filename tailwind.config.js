/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary': '#525FE1',
        'body':'#F9FBFC',
        'text-dark': '#1c1c1c',
        'text-low-dark': '#808080',
        'yellow':'#FFCF59',
        'voilet': '#9848FF',
        'light-green':'#A7CE4A',
        'para':'#4D4D4D',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      backgroundImage: {
        'btn': "linear-gradient(90deg, #525FE1 -3.7%, #2E3899 102.51%)",
        'hero-shape': "url('/images/shape.svg')",
        'shape-head': "url('/images/shapehead.svg')",
        'hero-bg': "url('/images/Vector.svg')",
        'primary-gradient':'linear-gradient(90deg, #525FE1 -3.7%, #2E3899 102.51%)',
        'pattern': "url('/images/Rectangle 2037.png')",
        'student': "url('/images/student.jpeg')",
        'pattern-2':"url('/images/Ellipse 3.png')"
      },
      width: {
        '70':'70%',
        '90': '90%',
        '80': '80%',
        '400':'400px',
      },
      height:{
        '700': '700px',
      },
      boxShadow: {
        'voilet-shadow': '0px 8px 21px 0px rgba(152, 72, 255, 0.25)',
        'light-green': '0px 8px 21px 0px rgba(167, 206, 74, 0.25);',
        'light-blue': '0px 8px 21px 0px rgba(77, 147, 223, 0.25);',
        'light-pink': '0px 8px 21px 0px rgba(255, 96, 168, 0.25)',
        'light-orange': '0px 8px 21px 0px rgba(246, 103, 66, 0.25)',
        'light-yellow': '0px 8px 21px 0px rgba(255, 207, 89, 0.25)',
      },
    },
  },
  plugins: [],
}

