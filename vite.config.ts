import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

const rewriteCleanUrls = () => ({
  name: 'rewrite-clean-urls',
  configureServer(server: any) {
    server.middlewares.use((req: any, _res: any, next: any) => {
      if (req.url === '/lp-taxrelief' || req.url === '/lp-taxrelief/') {
        req.url = '/lp-taxrelief.html';
      } else if (req.url === '/thank-you' || req.url === '/thank-you/') {
        req.url = '/thank-you.html';
      }
      next();
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rewriteCleanUrls()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'thank-you': './thank-you.html',
        'lp-taxrelief': './lp-taxrelief.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
