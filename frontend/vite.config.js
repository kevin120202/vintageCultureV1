import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        // proxy requests prefixed '/api' and '/uploads'
        proxy: {
            '/api': 'http://localhost:8000',
            '/uploads': 'http://localhost:8000',
        },
    },
});