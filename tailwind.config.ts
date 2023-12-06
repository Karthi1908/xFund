import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

      "my-blue": {
        "light": "#B3E0FF",    // Lighter shade
        "DEFAULT": "#2196F3",  // The original color
        "alt": "#1565C0",      // Alternate color 1
        "alt2": "#1976D2",     // Alternate color 2
        "alt3": "#90CAF9",     // Alternate color 3
        "alt4": "#0D47A1",     // Alternate color 4
        "alt5": "#01579B",     // Alternate color 5
        "alt6": "#64B5F6",     // Alternate color 6
        "alt7": "#0D47A1"      // Alternate color 7
      }
        


      },
    },
  },
  plugins: [],
}
export default config
