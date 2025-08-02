import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Ofertas.css'
import { FaWhatsapp, FaStar, FaCheckCircle, FaCrown } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const planos = [
  {
    icone: <FaCheckCircle />,
    titulo: 'Plano Básico',
    descricao: [
      'Site one-page elegante e funcional',
      'Configuração de domínio personalizada',
      'Integração direta com WhatsApp para atendimento rápido',
      'Até 15 imagens otimizadas para web',
      'Design responsivo para todos dispositivos',
      'Tecnologias modernas: React, JavaScript, Css',
      'Entrega rápida e suporte inicial incluso',
    ],
    link: 'https://wa.me/5581988115840'
  },
  {
    icone: <FaStar />,
    titulo: 'Plano Top',
    descricao: [
      'Site completo com até 5 páginas personalizadas',
      'Domínio próprio e otimização para mecanismos de busca (SEO)',
      'Galerias e sliders 3D para destaque visual',
      'Conteúdo dinâmico e interativo',
      'Design responsivo e compatibilidade total',
      'Contato via WhatsApp e e-mail integrado',
      'Acompanhamento e suporte durante o projeto',
    ],
    link: 'https://wa.me/5581988115840'
  },
  {
    icone: <FaCrown />,
    titulo: 'Plano Premium',
    descricao: [
      'Sites robustos com 8+ páginas personalizadas',
      'Painel administrativo para controle de conteúdo',
      'Backend completo com banco de dados seguro',
      'SEO avançado e performance otimizada',
      'Funcionalidades exclusivas: blog, agendamento e mais',
      'Suporte técnico dedicado e atualizações contínuas',
      'Design responsivo e experiência premium para o usuário',
    ],
    link: 'https://wa.me/5581988115840'
  }
]

const exemplos = [
  'Landing page institucional',
  'Portfólio online moderno',
  'Cardápio digital interativo',
  'Catálogo de produtos com filtros',
  'Galeria de fotos estilizada',
  'Sistema personalizado de agendamento',
  'Apresentação profissional para empresas',
  'Blog dinâmico e fácil de gerenciar'
]

const Ofertas = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".ofertas",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, [])

  return (
    <section className="ofertas">
      <h2>Transforme sua presença online com um site profissional e sob medida</h2>

      <div className="exemplos">
        {exemplos.map((exemplo, i) => (
          <span key={i}>{exemplo}</span>
        ))}
      </div>

      <div className="cards-container">
        {planos.map((plano, index) => (
          <div key={index} className="card">
            <div className="icone">{plano.icone}</div>
            <h3>{plano.titulo}</h3>
            <ul>
              {plano.descricao.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a className="whatsapp-btn" href={plano.link} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Converse no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ofertas
