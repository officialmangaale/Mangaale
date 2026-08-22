import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

const NotFoundPage = () => {
  return (
<<<<<<< HEAD
    <div className="mx-auto w-[92%] max-w-3xl py-36 text-center">
      <p className="section-eyebrow inline-block">404</p>
      <h1 className="mt-6 text-5xl font-bold text-mangaale-text">Page not found</h1>
      <p className="mt-4 text-mangaale-subtext">This premium path does not exist. We can help you get back to the homepage.</p>
      <Link to="/" className="mt-8 inline-block mangaale-button-primary">Back to Home</Link>
=======
    <div className="pt-[72px] min-h-screen flex items-center justify-center">
      <div className="mangaale-container text-center py-20">
        <span className="section-eyebrow inline-flex mb-6">404</span>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-mangaale-text mb-4">Page not found</h1>
        <p className="text-mangaale-subtext text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="mangaale-button-primary px-8 py-3.5">
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
    </div>
  )
}

export default NotFoundPage
