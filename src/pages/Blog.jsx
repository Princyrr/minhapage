import { useEffect, useState } from 'react'
import api from '../services/api'
import './Blog.css'
import euImg from '../assets/eu.png'
import { FaHeart, FaShareAlt, FaCommentDots } from 'react-icons/fa'


const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Comentários agora são objetos: { postId: [{ nome, texto }] }
  const [comments, setComments] = useState({})
  // Likes por postId
  const [likes, setLikes] = useState({})

 
  // Função para curtir post (local, você pode chamar backend)
  const handleLike = async (postId) => {
    try {
      const res = await api.post(`/posts/${postId}/like`)
      setLikes(prev => ({
        ...prev,
        [postId]: res.data.likes
      }))
    } catch (error) {
      console.error('Erro ao curtir post:', error)
    }
  }


  const handleComment = async (e, postId) => {
    e.preventDefault()
    const nome = e.target.elements.nome.value.trim()
    const texto = e.target.elements.comment.value.trim()

    if (!nome || !texto) {
      alert('Por favor, preencha seu nome e comentário.')
      return
    }

    try {
      // Envia o comentário para o backend
      const res = await api.post(`/posts/${postId}/comment`, { nome, texto })

      // Atualiza o estado local com os comentários retornados do backend
     setComments(prev => ({
  ...prev,
  [postId]: res.data.comments.filter(c => c.aprovado)
}))


      e.target.reset()
    } catch (error) {
      console.error('Erro ao enviar comentário:', error)
      alert('Erro ao enviar comentário. Tente novamente.')
    }
  }


  // Compartilhar via WhatsApp com texto e URL
  const handleShare = (post) => {
    const url = window.location.href
    const text = encodeURIComponent(`Confira esse post: "${post.conteudo}"`)
    const shareUrl = `https://wa.me/?text=${text} - ${url}`
    window.open(shareUrl, '_blank')
  }

 useEffect(() => {
  const carregar = () => {
    setLoading(true)
    api.get('/posts')
      .then(res => {
        console.log('Posts carregados:', res.data)

        setPosts(res.data)

        const initialLikes = {}
        const initialComments = {}

        res.data.forEach(post => {
          initialLikes[post._id] = post.likes || 0
          initialComments[post._id] = (post.comments || []).filter(c => c.aprovado)
        })

        setLikes(initialLikes)
        setComments(initialComments)

        console.log('Comentários atualizados:', initialComments)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  carregar()

  window.addEventListener('comentarioAprovado', carregar)

  return () => {
    window.removeEventListener('comentarioAprovado', carregar)
  }
}, [])

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <h1 className="blog-title">Blog Pessoal </h1>
        <p className="blog-subtitle">
          Aqui eu compartilho ideias, novidades, reflexões e aprendizados sobre desenvolvimento, tecnologia, projetos e experiências da minha jornada como dev.
        </p>

        {loading && <p className="blog-loading">Carregando posts...</p>}
        {!loading && posts.length === 0 && <p className="blog-empty">Nenhum post encontrado.</p>}

        {posts.map(post => (
          <div key={post._id} className="blog-post">
            <img src={euImg} alt="Priscila" className="blog-avatar" />
            <div className="blog-post-content">
              <p>{post.conteudo}</p>
              {post.imagemUrl && (
                <img src={post.imagemUrl} alt="post" className="blog-image" />
              )}
              <small className="blog-date">
                {new Date(post.createdAt).toLocaleString()}
              </small>

              <div className="blog-post-buttons">
                <button className="blog-btn" onClick={() => handleLike(post._id)}>
                  <FaHeart color="crimson" size={18} />
                  Curtir ({likes[post._id] || 0})
                </button>

                <button className="blog-btn" onClick={() => handleShare(post)}>
                  <FaShareAlt size={18} />
                  Compartilhar
                </button>
              </div>

              <form onSubmit={(e) => handleComment(e, post._id)} className="comment-form">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  className="comment-input"
                  lang="pt"
                  required
                />
                <div>
                  <FaCommentDots />
                  <input
                    type="text"
                    name="comment"
                    placeholder="Deixe um comentário..."
                    className="comment-input"
                    lang="pt"
                    required
                  />
                </div>
                <button type="submit" className="blog-btn">
                  Enviar
                </button>
              </form>




              {/* Lista de comentários com nome e texto */}
              <div className="blog-comments" style={{ marginTop: '10px' }}>
                {comments[post._id]?.map((c) => (
  <div key={c._id} className="blog-comment">
    <strong>{c.nome}:</strong> {c.texto}
  </div>
))}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
