import { useState, useEffect } from 'react'
import api from '../services/api'
import './Admin.css'

const Admin = () => {
  const [logado, setLogado] = useState(true) // deixar true temporariamente se não tiver login
  const [msg, setMsg] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [imagem, setImagem] = useState(null)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const carregarPosts = async () => {
    try {
      const res = await api.get('/posts')
      setPosts(res.data)
    } catch {
      setMsg('Erro ao carregar posts')
    }
  }

  useEffect(() => {
    if (logado) carregarPosts()
  }, [logado])

  const handleLogout = () => {
    setLogado(false)
    setMsg('')
    setConteudo('')
    setImagem(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!conteudo.trim()) return setMsg('Conteúdo obrigatório')

    setLoading(true)
    setMsg('')

    const formData = new FormData()
    formData.append('conteudo', conteudo)
    if (imagem) formData.append('imagem', imagem)

    try {
      await api.post('/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setMsg('Post publicado com sucesso!')
      setConteudo('')
      setImagem(null)
      carregarPosts()
    } catch {
      setMsg('Erro ao publicar')
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      setMsg('Post deletado')
      carregarPosts()
    } catch (err) {
      console.error('Erro ao deletar post:', err.response?.data || err.message)
      setMsg('Erro ao deletar post')
    }
  }

  const handleDeleteComment = async (postId, commentId) => {
    try {
      await api.delete(`/posts/${postId}/comments/${commentId}`)
      setMsg('Comentário deletado')
      carregarPosts()
    } catch (err) {
      console.error('Erro ao deletar comentário:', err.response?.data || err.message)
      setMsg('Erro ao deletar comentário')
    }
  }

 const handleApproveComment = async (postId, commentId) => {
  try {
    await api.patch(`/posts/${postId}/approve-comment`, { commentId })
    setMsg('Comentário aprovado com sucesso!')

    // Recarrega posts e comentários atualizados
    await carregarPosts()

    // Dispara evento global para avisar componente Blog para recarregar
    window.dispatchEvent(new Event('comentarioAprovado'))

  } catch (error) {
    console.error('Erro ao aprovar comentário:', error)
    setMsg('Erro ao aprovar comentário')
  }
}


  return (
    <div className="admin-wrapper">
      <h1>Área de Publicação</h1>

      <button onClick={handleLogout} style={{ marginBottom: 20 }}>Sair</button>

      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Conteúdo:
          <textarea
            rows={5}
            value={conteudo}
            onChange={e => setConteudo(e.target.value)}
            required
          />
        </label>

        <label>
          Imagem (opcional):
          <input
            type="file"
            accept="image/*"
            onChange={e => setImagem(e.target.files[0])}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Publicando...' : 'Publicar'}
        </button>
      </form>

      {msg && <p className="admin-message">{msg}</p>}

      <h2>Meus Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="admin-post">
          <p>{post.conteudo}</p>
          {post.imagemUrl && (
            <img src={post.imagemUrl} alt="post" className="blog-image" />
          )}
          <small>{new Date(post.createdAt).toLocaleString()}</small>

          <div className="admin-comments">
            {post.comments?.map(comment => (
              <div
                key={comment._id}
                className={`admin-comment ${!comment.aprovado ? 'comentario-pendente' : ''}`}
              >
                <strong>{comment.nome}:</strong> {comment.texto}

                {!comment.aprovado && (
                  <button
                    onClick={() => handleApproveComment(post._id, comment._id)}
                    className="admin-btn-approve"
                    type="button"
                  >
                    Ok
                  </button>
                )}

                <button
                  onClick={() => handleDeleteComment(post._id, comment._id)}
                  className="admin-btn-delete"
                  type="button"
                >
                  Deletar
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleDeletePost(post._id)}
            className="admin-btn-delete-post"
          >
            Deletar Post
          </button>
        </div>
      ))}
    </div>
  )
}

export default Admin
