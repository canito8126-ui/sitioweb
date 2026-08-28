import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Layout from './components/Layout'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Experiences = lazy(() => import('./pages/Experiences'))
const Tour = lazy(() => import('./pages/Tour'))
const Inspiration = lazy(() => import('./pages/Inspiration'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Terms = lazy(() => import('./pages/Terms'))
const Cancellation = lazy(() => import('./pages/Cancellation'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-wp-cream text-sm uppercase tracking-[0.2em] text-wp-forest/70">
           Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="experiencias" element={<Experiences />} />
           <Route path="experiencias/:slug" element={<Tour />} />
           <Route path="inspiracion" element={<Inspiration />} />
           <Route path="galeria" element={<Gallery />} />
           <Route path="blog" element={<Blog />} />
           <Route path="blog/:slug" element={<BlogPost />} />
           <Route path="nosotros" element={<About />} />
           <Route path="contacto" element={<Contact />} />
           <Route path="terminos" element={<Terms />} />
           <Route path="cancelacion" element={<Cancellation />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
