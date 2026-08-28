import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renderStaticPages } from './scripts/staticPages.js'

/**
 * Emits the pre-rendered, JavaScript-free pages (privacy policy, account
 * deletion, 404, robots.txt, sitemap.xml) defined in scripts/staticPages.js.
 *
 * It hangs off the build rather than sitting in `public/` so the documents can
 * share one stylesheet, one footer and one copy of the company's contact
 * details with the rest of the site — legal text that exists twice drifts.
 *
 * `closeBundle` covers every build path (npm run build, the Docker image,
 * Vercel); `configureServer` serves the identical strings in `vite dev`, so the
 * pages can be checked with JavaScript disabled before they ship.
 */
const staticPages = () => {
  const pages = () => renderStaticPages()

  return {
    name: 'mangaale-static-pages',

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0].replace(/\/$/, '') || '/'
        const page = pages().find((candidate) => candidate.path === path)

        if (!page) return next()

        res.setHeader('Content-Type', page.contentType)
        res.end(page.body)
      })
    },

    async closeBundle() {
      const outDir = resolve(process.cwd(), 'dist')

      await Promise.all(
        pages().map(async (page) => {
          const target = resolve(outDir, page.file)
          await mkdir(dirname(target), { recursive: true })
          await writeFile(target, page.body, 'utf8')
        })
      )

      this.info(`pre-rendered ${pages().length} static files`)
    }
  }
}

export default defineConfig({
  plugins: [react(), staticPages()],
  build: {
    /*
     * Everything used to land in one ~412kB entry chunk: React, framer-motion,
     * the lucide icons, the router and all of the eagerly-imported home page
     * sections. Two problems with that:
     *
     *  - the browser cannot start executing any of it until the whole file has
     *    arrived and parsed;
     *  - one line changed in a section invalidates the cached copy of React and
     *    framer-motion too, so returning visitors re-download all of it.
     *
     * Splitting the three stable dependencies out lets them be cached across
     * deploys and parsed in parallel with the app code. The route-level
     * `lazy()` splitting that already existed is untouched.
     */
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'icon-vendor': ['lucide-react']
        }
      }
    }
  }
})
