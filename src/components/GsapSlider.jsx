import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './GsapSlider.css'

import ia1 from '../assets/js.png'
import ia2 from '../assets/css.png'
import ia3 from '../assets/react.png'
import ia4 from '../assets/html.png'
import ia6 from '../assets/ts.png'
import ia7 from '../assets/mongodb.png'
import ia8 from '../assets/vscode.png'
import ia9 from '../assets/node.png'
import ia10 from '../assets/android.png'
import ia11 from '../assets/ios.png'

const imagens = [ia1, ia2, ia3, ia4, ia6, ia7, ia8, ia9, ia10, ia11]

const GsapSlider = () => {
  const containerRef = useRef(null)
  const numImages = imagens.length
  const radius = 250
  const theta = 360 / numImages
  const rotationAnim = useRef(null)

  useEffect(() => {
    const slides = containerRef.current.children
    for (let i = 0; i < slides.length; i++) {
      const angle = theta * i
      gsap.set(slides[i], {
        rotationY: angle,
        transformOrigin: `50% 50% ${-radius}px`,
        z: radius,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
      })
    }

    rotationAnim.current = gsap.to(containerRef.current, {
      rotationY: "+=360",
      duration: 20,      // tempo para uma volta completa (ajusta aqui)
      ease: "linear",
      repeat: -1         // loop infinito
    })

    return () => {
      if (rotationAnim.current) rotationAnim.current.kill()
    }
  }, [numImages])

  return (
    <div className="gsap-slider-3d">
      <div className="carousel" ref={containerRef}>
        {imagens.map((img, i) => (
          <img key={i} src={img} alt={`slide-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default GsapSlider
