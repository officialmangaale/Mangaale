import { useEffect } from 'react'

const SITE_NAME = 'Mangaale'

/**
 * Sets the document title and meta description for a page.
 *
 * Titles are suffixed with the brand only when they don't already mention it,
 * so pages no longer render as "Mangaale | ... | Mangaale".
 */
const usePageMeta = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageMeta
