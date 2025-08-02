import React, { useState, useEffect } from 'react';
import bannerImg from '../assets/inicial.png';
import './Banner.css';

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`banner ${scrolled ? 'scrolled' : ''}`}>
      <div className="banner-image">
        <img src={bannerImg} alt="Banner" />
      </div>
      <div className="banner-text">
        <h2>Desenvolvedora Web e Mobile</h2>
        <p>
          Sou formada em Sistemas para Internet pela faculdade Senac. Iniciei meus estudos com HTML, CSS e JavaScript,
          e ao longo do tempo ampliei meus conhecimentos em desenvolvimento web e mobile, curso de Engenharia de Prompt.
        </p>
        <p>
          Hoje trabalho com React, React Native, Node.js, Express, MongoDB, Firebase, Tailwind CSS e outras tecnologias modernas.
          Já desenvolvi muitos projetos completos com interface responsiva e backend funcional.
        </p>
      </div>
    </section>
  );
};

export default Banner;
