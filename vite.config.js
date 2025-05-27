import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    copy: [
      {
        src: 'robots.txt',
        dest: 'build',
      },
    ],
  },
})