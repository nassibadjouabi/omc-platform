import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importez le module 'path' pour gérer les chemins

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Configurez l'alias '@' pour pointer vers le répertoire 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
});