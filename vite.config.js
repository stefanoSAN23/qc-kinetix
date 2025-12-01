import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Desactivar en producción para mejor rendimiento
    minify: 'esbuild', // Usa esbuild (más rápido, viene incluido con Vite)
    // Eliminar console.log en producción
    esbuild: {
      drop: ['console', 'debugger'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          swiper: ['swiper'],
          helmet: ['react-helmet-async'],
        },
      },
    },
    // Optimizar tamaño del bundle
    chunkSizeWarningLimit: 1000,
  },
  // Si el sitio no está en la raíz del dominio, descomenta y ajusta:
  // base: '/subdirectorio/'
})
