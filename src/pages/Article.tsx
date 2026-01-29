import { Link, useParams } from 'react-router-dom'
import { Badge, Media } from '../components/ui'

export default function Article() {
  const { slug } = useParams()

  return (
    <article className="space-y-6">
      <Link to="/articles" className="text-sm opacity-80 hover:opacity-100">← Retour aux articles</Link>

      <header className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge>Catégorie</Badge>
          <span className="text-xs opacity-60">•</span>
          <span className="text-xs opacity-60">Lecture 5 min</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Article : {slug}</h1>
        <p className="text-sm md:text-base opacity-80 max-w-3xl">
          Intro de l’article (placeholder). Ici, tu brancheras du Markdown/MDX ou un CMS.
        </p>
      </header>

      <Media alt="Cover article" height={340} />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Contenu (placeholder). Mets ici le texte, des images, des intertitres, etc.
        </p>
        <h2>Intertitre</h2>
        <p>
          Quelques paragraphes d’exemple pour visualiser la page article.
        </p>
      </div>
    </article>
  )
}
