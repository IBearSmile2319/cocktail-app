import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  lib: {
    entry: path.resolve(__dirname, 'lib/main.js'),
    name: 'MyLib',
    fileName: (format) => `my-lib.${format}.js`
  },
})
