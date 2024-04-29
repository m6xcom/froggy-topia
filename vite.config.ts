import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_PINATA_KEY': JSON.stringify(env.REACT_APP_PINATA_KEY),
      'process.env.REACT_APP_PINATA_SECRET': JSON.stringify(env.REACT_APP_PINATA_SECRET),
      'process.env.REACT_APP_ALCHEMY_KEY': JSON.stringify(env.REACT_APP_ALCHEMY_KEY),
      'process.env.WALLET_CONNECT_PROJECT_ID': JSON.stringify(env.WALLET_CONNECT_PROJECT_ID)
    },
    plugins: [react()],
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
      },
    },
  }
})