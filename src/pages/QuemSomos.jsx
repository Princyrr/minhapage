import './QuemSomos.css'
import euImg from '../assets/eu.png'

const QuemSomos = () => {
  return (
    <main className="quem-somos">
      <div className="quem-somos-container">
        <img src={euImg} alt="Priscila Ramonna" className="foto-eu" />
        <div className="quem-somos-texto">
          <h2>Sobre mim</h2>
          <p>
            Sou Priscila Ramonna, desenvolvedora web e mobile, formada em Sistemas para Internet pela Faculdade Senac. Minha trajetória começou com HTML, CSS e JavaScript, e desde então venho evoluindo com tecnologias modernas como React, React Native, Node.js, Firebase, Tailwind e outras.
          </p>
          <p>
            Tenho experiência prática na criação de soluções digitais personalizadas para pequenos negócios, profissionais autônomos e empreendedores. Já desenvolvi sistemas de agendamento para pet shops e clínicas, cardápios digitais para restaurantes, currículos online, landing pages para divulgação de serviços e portfólios interativos.
          </p>
          <p>
            Também atuei em projetos com autenticação, integração com APIs, bancos de dados na nuvem, responsividade e otimização de performance. Meu foco é entregar interfaces modernas, limpas, responsivas e funcionais, com navegação intuitiva e boa experiência para o usuário.
          </p>
          <p>
            Muitos dos projetos que desenvolvi estão disponíveis no meu GitHub. Eles mostram minha evolução como desenvolvedora e o cuidado com cada detalhe, do código ao layout.
          </p>
          <p>
            Acesse e conheça meu trabalho: <a href="https://github.com/Princyrr" target="_blank" rel="noopener noreferrer">github.com/Princyrr</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default QuemSomos
