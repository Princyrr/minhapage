import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Tecnologias.css'

gsap.registerPlugin(ScrollTrigger)

const tecnologias = [
  { nome: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { nome: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { nome: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { nome: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { nome: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nome: 'React Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nome: 'Expo', img: 'https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png' },
  { nome: 'Vite', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
  { nome: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { nome: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { nome: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { nome: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { nome: 'Tailwind CSS', img: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
  { nome: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { nome: 'Webpack', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { nome: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { nome: 'CorelDRAW', img: 'https://images.icon-icons.com/3053/PNG/512/coreldraw_macos_bigsur_icon_190270.png' },
  { nome: 'Insomnia', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg' },
  { nome: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { nome: 'Android', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { nome: 'iOS', img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg' },
]

const Tecnologias = () => {
  useEffect(() => {
    gsap.fromTo(".tecnologia",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tecnologias",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  return (
    <section className="tecnologias">
      <h2>Tecnologias que utilizo</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech) => (
          <div key={tech.nome} className="tecnologia">
            <img src={tech.img} alt={tech.nome} />
            <p>{tech.nome}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tecnologias