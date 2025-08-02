import { useState } from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import './Contato.css'
import contatoImg from '../assets/contato.png'


const Contato = () => {
  const [nome, setNome] = useState('')
  const [assunto, setAssunto] = useState('Orçamento')
  const [mensagem, setMensagem] = useState('')
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mensagem.length < 10) {
      alert('A mensagem deve ter pelo menos 10 caracteres.')
      return
    }

    const texto = `Nome: ${nome}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`
    window.open(`https://wa.me/5581988115840?text=${texto}`, '_blank')

    setSucesso(true)
    setNome('')
    setAssunto('Orçamento')
    setMensagem('')
  }

  return (
    <main  className="contato contato-animado">
<img src={contatoImg} alt="Imagem de contato" className="imagem-contato" />


      <h2>Entre em Contato</h2>

      <form onSubmit={handleSubmit} className="form-contato">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <select value={assunto} onChange={(e) => setAssunto(e.target.value)} required>
          <option value="Orçamento">Orçamento</option>
          <option value="Suporte">Suporte</option>
          <option value="Parcerias">Parcerias</option>
        </select>
        <textarea
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
        <button type="submit" className="btn-whatsapp">
          <FaWhatsapp className="icon-pulse" /> Enviar no WhatsApp
        </button>
      </form>

      {sucesso && <p className="mensagem-sucesso">✅ Mensagem enviada com sucesso!</p>}

      <div className="contato-info">
        <p><FaPhoneAlt /> <a href="tel:+5581988115840">(81) 98811-5840</a></p>
        <p><FaEnvelope /> <a href="mailto:princyrpiress@gmail.com">princyrpiress@gmail.com</a></p>
        <p><FaMapMarkerAlt /> Recife / Pernambuco</p>
        <p>🕒 Atendimento: Seg a Sex, 9h às 18h</p>
      </div>

      <div className="mapa">
       <iframe
  title="Mapa"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.067802379426!2d-34.9033897!3d-8.0475621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18aadfece90f%3A0xe84ddda35fbd0fef!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1649544800000"
  width="100%"
  height="250"
  style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </main>
  )
}

export default Contato
