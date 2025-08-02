import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import Banner from './components/Banner'
import Tecnologias from './components/Tecnologias'
import Ofertas from './components/Ofertas'
import Slider from './components/Slider'
import GsapSlider from './components/GsapSlider'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import LoginPage from './pages/LoginPage'
import ChatWidget from './components/ChatWidget'
import Preloader from './components/Preloader' 
import { useEffect , useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])


  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="site-wrapper">
          <Header />
          <main className="site-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <GsapSlider />
                    <Tecnologias />
                    <Ofertas />
                    <Slider />
                    <Home />
                  </>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/admin123"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ChatWidget />
      </Router>
    </AuthProvider>
  )
}

export default App
