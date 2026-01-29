import { Link } from 'react-router-dom'

const posts = [
  { slug: 'premier-article', title: 'Premier article', excerpt: 'Un exemple de carte d’article.' },
  { slug: 'deuxieme-article', title: 'Deuxième article', excerpt: 'Un autre exemple (à remplacer).' },
]

export default function Blog() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-sm opacity-80">Listing d’articles (placeholder).</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group rounded-2xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <div className="text-lg font-medium">{p.title}</div>
            <p className="mt-2 text-sm opacity-80">{p.excerpt}</p>
            <div className="mt-4 text-xs opacity-70 group-hover:opacity-100">Lire →</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
