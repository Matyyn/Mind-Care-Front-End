import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    strategies:'injectManifest',
    srcDir: '.',
    filename: 'worker.js',
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    injectRegister: 'auto',
    devOptions: {
      enabled: false,
      type: 'module',
    },
  })],
  optimizeDeps: {
    exclude: ['docx-parser', 'pizzip', 'xmldom', 'pdf-parse', 'tesseract.js']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__Test__/setup.js'],
  },
}
)
