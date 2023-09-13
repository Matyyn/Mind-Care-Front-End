import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], optimizeDeps: {
    exclude: ['docx-parser','pizzip','xmldom','pdf-parse','tesseract.js']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__Test__/setup.js'],
  },
}
)
