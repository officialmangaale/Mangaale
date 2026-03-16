import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="mx-auto w-[92%] max-w-3xl py-36 text-center">
      <p className="section-eyebrow inline-block">404</p>
      <h1 className="mt-6 text-5xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-mangaale-subtext">This premium path does not exist. We can help you get back to the homepage.</p>
      <Link to="/" className="mt-8 inline-block mangaale-button-primary">Back to Home</Link>
    </div>
  )
}

export default NotFoundPage
