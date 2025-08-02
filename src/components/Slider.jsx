import { useState } from 'react'
import './Slider.css'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

import tela1 from '../assets/tela1.png'
import tela2 from '../assets/tela2.png'
import tela3 from '../assets/tela3.png'
import tela4 from '../assets/tela4.png'
import tela5 from '../assets/tela5.png'
import tela6 from '../assets/tela6.png'
import tela7 from '../assets/tela7.png'

const Slider = () => {
  const imagens = [tela1, tela2, tela3, tela4, tela5, tela6, tela7]
  const [indice, setIndice] = useState(0)
  const [modalAberto, setModalAberto] = useState(false)

  const proximo = () => setIndice((prev) => (prev + 1) % imagens.length)
  const anterior = () => setIndice((prev) => (prev - 1 + imagens.length) % imagens.length)

  return (
    <>
      <section className="slider">
        <h2 className="slider-title">Alguns Projetos:</h2>
       <p className="projetos">Você encontra meus projetos no meu GitHub</p>

        <div className="slider-content">
          <button className="seta seta-esquerda" onClick={anterior}>
            <FaChevronLeft />
          </button>

          <div className="slide-unico" onClick={() => setModalAberto(true)}>
            <img src={imagens[indice]} alt={`Tela ${indice + 1}`} />
          </div>

          <button className="seta seta-direita" onClick={proximo}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      {modalAberto && (
        <div className="modal-overlay" onClick={() => setModalAberto(false)}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="modal-fechar" onClick={() => setModalAberto(false)}>
              <FaTimes />
            </button>
            <img src={imagens[indice]} alt={`Tela ${indice + 1}`} />
          </div>
        </div>
      )}
    </>
  )
}

export default Slider
