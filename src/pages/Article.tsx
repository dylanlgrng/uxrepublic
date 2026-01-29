import { Link, useParams } from 'react-router-dom'

export default function Article() {
  const { slug } = useParams()

  return (
    <article className="space-y-6">
      <Link to="/blog" className="text-sm opacity-80 hover:opacity-100">← Retour au blog</Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Article : {slug}</h1>
        <p className="text-sm opacity-80">Page article (placeholder).</p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Ici, tu brancheras soit des contenus Markdown/MDX, soit un CMS. Pour l’instant, c’est un gabarit.
        </p>
      </div>
    </article>
  )
}
