import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './LoginPage.css'

const LoginPage = () => {
  const [senha, setSenha] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    if (login(senha)) {
      setMsg('')
      setSenha('')
      navigate('/admin123')
    } else {
      setMsg('Senha incorreta')
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
            autoFocus
          />
          <button type="submit" className="btn-login">Entrar</button>
        </form>
        {msg && <p className="login-message">{msg}</p>}
      </div>
    </div>
  )
}

export default LoginPage
