import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
