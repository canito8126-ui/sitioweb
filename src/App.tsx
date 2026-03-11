import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Inspiration from './pages/Inspiration'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Cancellation from './pages/Cancellation'
import './App.css'

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experiencias" element={<Experiences />} />
          <Route path="inspiracion" element={<Inspiration />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="testimonios" element={<Testimonials />} />
          <Route path="nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="terminos" element={<Terms />} />
          <Route path="cancelacion" element={<Cancellation />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
