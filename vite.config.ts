import { defineConfig } from 'vite'
import path from 'node:path' // 💡 Corrigido para node:path (SonarLint & TS)
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) { // 💡 Adicionado tipagem simples para o TS não reclamar
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // 🚀 CRUCIAL PARA O GITHUB PAGES:
  // Diz ao Vite que o site rodará na subpasta do seu repositório
  base: '/LandingPage-Controle-C/', 

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})