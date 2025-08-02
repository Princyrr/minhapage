import './ServicosWeb.css'

const ServicosWeb = () => {
  return (
    <section className="cards-servicos">
      <h3>O que posso desenvolver para você</h3>
      <div className="cards-container">
        <div className="mini-card" data-aos="fade-right" data-aos-delay="100">
          <h4>Sistemas de Pedidos</h4>
          <p>Controle de pedidos, organização do fluxo de vendas e painel simples.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="200">
          <h4>Catálogos Online</h4>
          <p>Listagem de produtos ou serviços com imagens, filtros e descrições.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="300">
          <h4>Currículos Online</h4>
          <p>Portfólios modernos e responsivos para destacar sua trajetória profissional.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="400">
          <h4>Blogs Administráveis</h4>
          <p>Blog com painel de publicação e gerenciamento fácil de conteúdo.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="500">
          <h4>Sites Institucionais</h4>
          <p>Sites profissionais para empresas ou serviços com layout personalizado.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="600">
          <h4>Landing Pages</h4>
          <p>Páginas promocionais para captar clientes ou divulgar campanhas.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="700">
          <h4>Chatbots para Atendimento</h4>
          <p>Atendimento automático com mensagens rápidas e links úteis.</p>
        </div>
        <div className="mini-card" data-aos="fade-right" data-aos-delay="800">
          <h4>Botões Interativos</h4>
          <p>Botões personalizados que direcionam para links, formulários ou ações.</p>
        </div>
      </div>
    </section>
  )
}

export default ServicosWeb
