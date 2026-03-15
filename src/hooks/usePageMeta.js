import { useEffect } from 'react'

const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = `${title} | Mangaale`
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageMeta
