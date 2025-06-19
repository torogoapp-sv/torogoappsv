import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: './', // CAMBIADO A RUTA RELATIVA
  root: path.resolve(__dirname, ''),
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '.', // ARCHIVOS EN RAÍZ DE DIST
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      // AÑADIDO: Configuración para eliminar hashes
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    hmr: {
      overlay: false
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  }
});