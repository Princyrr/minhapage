import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

const Header = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha o menu ao clicar fora dele no mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        event.target.closest('.menu-toggle') === null &&
        window.innerWidth <= 768
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={`social-bar ${scrolled ? 'scrolled' : ''}`}>
        <a href="https://www.linkedin.com/in/priscila-pires-171617128/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Princyrr" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/priscilarpiress" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/share/16TaH6yeDB" target="_blank" rel="noreferrer"><FaFacebook /></a>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo" />

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </button>

          <nav ref={navRef} className={menuOpen ? 'open' : ''}>
            <Link onClick={handleLinkClick} className={location.pathname === '/' ? 'ativo' : ''} to="/">Home</Link>
            <Link onClick={handleLinkClick} className={location.pathname === '/quem-somos' ? 'ativo' : ''} to="/quem-somos">Quem Somos</Link>
            <Link onClick={handleLinkClick} className={location.pathname === '/contato' ? 'ativo' : ''} to="/contato">Contato</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

