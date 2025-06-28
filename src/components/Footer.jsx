import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import logo from '../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logo-footer" />

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/priscila-pires-171617128/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Princyrr" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/priscilarpiress" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/share/16TaH6yeDB" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>

      <nav className="footer-nav">
        <a href="/">Home</a>
        <a href="/quem-somos">Quem Somos</a>
        <a href="/contato">Contato</a>
      </nav>

      <div className="footer-bottom">
        © 2025 Priscila Ramonna - Todos os direitos reservados
      </div>
    </footer>
  )
}

export default Footer
