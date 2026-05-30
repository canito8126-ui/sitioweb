import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    inspectAttr(),
    react(),
    Sitemap({
      hostname: 'https://wildpath.lat',
      dynamicRoutes: [
        '/',
        '/experiencias',
        '/inspiracion',
        '/galeria',
        '/blog',
        '/testimonios',
        '/nosotros',
        '/contacto',
        '/terminos',
        '/cancelacion',
      ],
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
