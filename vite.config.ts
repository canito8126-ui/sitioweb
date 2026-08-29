import path from "path"
import fs from 'fs'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/

// Discover blog slugs at config time and pass them to the sitemap plugin
const postsDir = path.resolve(__dirname, 'src/data/blogPosts/posts')
let blogRoutes: string[] = []
try {
  blogRoutes = fs.readdirSync(postsDir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => `/blog/${f.replace(/\.ts$/, '')}`)
} catch (e) {
  blogRoutes = []
}

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
        ...blogRoutes,
      ],
      generateRobotsTxt: false,
      // When a custom public/robots.txt is present, prefer that file. If you prefer plugin-generated
      // robots, set generateRobotsTxt: true and configure `robots` below.
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
