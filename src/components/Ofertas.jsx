import './Ofertas.css'
import { FaWhatsapp, FaStar, FaCheckCircle, FaCrown } from 'react-icons/fa'

const planos = [
  {
    icone: <FaCheckCircle />,
    titulo: 'Plano Básico',
    preco: 'R$ 500',
    descricao: [
      'Página única (Home)',
      'Todas as infos em uma só página',
      'Contato via WhatsApp',
      'Até 15 imagens',
      'Sites Dinâmicos, estáticos, personalizados',
      'Responsivo para desktops e Celulares',
    ],
    link: 'https://wa.me/5581988115840'
  },
  {
    icone: <FaStar />,
    titulo: 'Plano Intermediário',
    preco: 'R$ 700',
    descricao: [
      '4 páginas (Home, Quem Somos, Galeria, Contato)',      
      'Ligação com domínio personalizado',
      'Até 50 imagens',
       'Sites Dinâmicos, estáticos, personalizados',
       'Otimização de SEO',
       'Responsivo para desktops e Celulares',

    ],
    link: 'https://wa.me/5581988115840'
  },
  {
    icone: <FaCrown />,
    titulo: 'Plano Premium',
    preco: 'A partir de R$ 1000',
    descricao: [
      'A partir de 8 páginas personalizadas',
      'Ligação com o Domínio Personalizado',
      'A partir de 60 imagens',
      'Botões de direcionamento para Whatsapp ou E-mail',
      'Sites Dinâmicos, estáticos, personalizados',
      'Otimização de SEO',
      ' Suporte personalizado',
      'Responsivo para desktops e Celulares',
    ],
    link: 'https://wa.me/5581988115840'
  }
]

const exemplos = [
  'Landing page institucional',
  'Portfólio ou currículo online',
  'Cardápio digital',
  'Catálogo de produtos',
  'Página com galeria de fotos',
  'Página de serviços com WhatsApp',
  'Apresentação de projeto ou empresa',
  'Blog com conteúdo fixo'
]

const Ofertas = () => {
  return (
    <section className="ofertas">
      <h2>Quer uma página como a minha para o seu negócio?</h2>

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
            <p className="preco">{plano.preco}</p>
            <ul>
              {plano.descricao.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a className="whatsapp-btn" href={plano.link} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Falar no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ofertas
