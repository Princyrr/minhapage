import { useState } from 'react';
import perguntasRespostas from '../data/respostas.json';
import euFoto from '../assets/eu.png';
import './ChatWidget.css';

export default function ChatWidget() {
  const [aberto, setAberto] = useState(false);
  // Guarda o par atual { pergunta, resposta }
  const [conversaAtual, setConversaAtual] = useState(null);

  const handleClickPergunta = (item) => {
    setConversaAtual(item);
  };

  return (
    <>
      <div
        className="chat-button"
        onClick={() => setAberto(!aberto)}
        title="Atendimento"
      >
        💬
      </div>

      {aberto && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <img src={euFoto} alt="Priscila" />
              <h3>Atendimento Priscila</h3>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setAberto(false)}
              title="Fechar"
            >
              ×
            </button>
          </div>

          <p className="chat-intro">
            Oi! Como posso te ajudar? Escolha uma das perguntas:
          </p>

          <div className="chat-questions">
            {perguntasRespostas.map((item, index) => (
              <button
                key={index}
                className="chat-question-btn"
                onClick={() => handleClickPergunta(item)}
              >
                {item.pergunta}
              </button>
            ))}
          </div>

          <div className="chat-messages">
            {conversaAtual ? (
              <>
                <div className="chat-message pergunta">{conversaAtual.pergunta}</div>
                <div className="chat-message resposta">{conversaAtual.resposta}</div>
              </>
            ) : (
              <p style={{ color: '#666', fontSize: 14 }}>
                Clique em uma pergunta para ver a resposta.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
