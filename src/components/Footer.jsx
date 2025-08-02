import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa' // <- IMPORTA O WHATSAPP
import logo from '../assets/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logo-footer" />

      <p className="footer-slogan">
        Transformando ideias em experiências digitais incríveis.<br />
        Porque sua presença online merece ser única, funcional e inesquecível.
      </p>

      <div className="footer-contact">
        <h3>Contato</h3>
        <p>
          <FaWhatsapp /> <a href="https://wa.me/5581988115840" target="_blank" rel="noopener noreferrer">081 98811-5840</a>
        </p>
        <p>Email: <a href="mailto:princyrpiress@gmail.com">princyrpiress@gmail.com</a></p>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/priscila-ramonna-171617128/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Princyrr" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/priscilarpiress" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/share/16TaH6yeDB" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>

      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <div className="footer-bottom">
        © 2025 Priscila Ramonna - Todos os direitos reservados
      </div>
    </footer>
  )
}

export default Footer
