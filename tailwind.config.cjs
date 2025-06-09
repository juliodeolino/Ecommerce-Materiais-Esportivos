/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        secondaryFundo: '#F9F8FE',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        'dark-gray': '#1F1F1F',
        'dark-gray2': '#474747',
        'dark-gray3': '#666666',
        'ligth-gray': '#8F8F8F',
        'ligth-gray2': '#CCCCCC',
        'ligth-gray3': '#F5F5F5',
        'white': ' #FFFFFF',
        'green-price': '#E7FF86'
        
    

      }
    },
  },
  plugins: [],
};
