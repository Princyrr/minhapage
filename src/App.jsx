import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import Banner from './components/Banner'
import Tecnologias from './components/Tecnologias'
import Ofertas from './components/Ofertas'
import Slider from './components/Slider'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Tecnologias />
            <Ofertas />
            <Slider />
            <Home />
          </>
        } />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
