import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [viteCommonjs(),react()],
    optimizeDeps: {
        exclude: ['crypto-js']
      },
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        port: 3000, 
    },
})