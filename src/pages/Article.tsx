import { Link, useParams } from 'react-router-dom'
import { Badge, Container, PlaceholderImage, SmallLink } from '../components/ui'

export default function Article() {
  const { slug } = useParams()

  return (
    <article className="space-y-4">
      <Container>
        <Link to="/articles" className="text-[10px] underline decoration-black/20 dark:decoration-white/20">← Retour</Link>
      </Container>

      <Container>
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-tight">Article : {slug}</div>
          <Badge>Catégorie</Badge>
        </div>
      </Container>

      <Container>
        <PlaceholderImage height={260} />
        <div className="mt-4 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">
          Contenu article (placeholder).
        </div>
      </Container>
    </article>
  )
}
