import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkgrayblue: "hsl(236, 13%, 42%)",
        offwhite: "hsl(36, 100%, 99%)",
        grayblue: "hsl(233, 8%, 79%)",
        verydarkblue: "hsl(240, 100%, 5%)",
        softorange: "hsl(35, 77%, 62%)",
        softred: "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
}
export default config
