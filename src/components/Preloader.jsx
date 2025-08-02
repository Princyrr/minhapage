import React from 'react';
import './Preloader.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="logo-wrapper">
        {/* Imagem do meio */}
        <img src={img2} alt="Centro" className="logo-center" />

        {/* Imagem da esquerda para o centro */}
        <img src={img1} alt="Esquerda" className="logo-left" />

        {/* Imagem da direita para o centro */}
        <img src={img3} alt="Direita" className="logo-right" />

        {/* 🔥 Flames mantidos */}
     <div className="flames">
  <span className="flame f1"></span>
  <span className="flame f2"></span>
  <span className="flame f3"></span>
  <span className="flame f4"></span>
  <span className="flame f5"></span>
  <span className="flame f6"></span>
  <span className="flame f7"></span>
  <span className="flame f8"></span>
  <span className="flame f9"></span>
  <span className="flame f10"></span>
  <span className="flame f11"></span>
  <span className="flame f12"></span>
  <span className="flame f13"></span>
  <span className="flame f14"></span>
  <span className="flame f15"></span>
  <span className="flame f16"></span>
  <span className="flame f17"></span>
  <span className="flame f18"></span>
  <span className="flame f19"></span>
  <span className="flame f20"></span>
  <span className="flame f21"></span>
  <span className="flame f22"></span>
  <span className="flame f23"></span>
  <span className="flame f24"></span>
</div>

   <div className="loading-text">
  <span className="pulse">Loading</span>
  <span className="dots">
    <span className="dot">.</span>
    <span className="dot">.</span>
    <span className="dot">.</span>
  </span>
</div>

        <div className="glow-circle"></div>
      </div>
  
    </div>
  );
};

export default Preloader;
