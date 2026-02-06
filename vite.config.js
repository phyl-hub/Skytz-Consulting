import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Set VITE_BASE to e.g. '/Skytz-Consulting/' for GitHub Pages.
  const base = env.VITE_BASE || '/';

  return {
  base,
  plugins: [react()],
  build: {
    // Optimize image assets
    assetsInlineLimit: 4096, // Inline images smaller than 4KB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          i18n: ['i18next', 'react-i18next'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|gif|svg|webp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          } else {
            return `assets/[name]-[hash][extname]`
          }
        },
      },
    },
  },
  };
})
