import { Link } from 'react-router-dom'
import { Badge, Card, Media, SectionHeader } from '../components/ui'

const posts = [
  { slug: 'design-system', title: 'Faire vivre un design system', category: 'Design system', desc: 'Gouvernance, usage, maintenance.' },
  { slug: 'accessibilite', title: 'Accessibilité : les fondamentaux', category: 'Accessibilité', desc: 'Pratiques simples, impact réel.' },
  { slug: 'product-thinking', title: 'Le product thinking au quotidien', category: 'Produit', desc: 'Décider, tester, apprendre.' },
  { slug: 'atelier', title: 'Animer un atelier utile', category: 'Facilitation', desc: 'Préparer, cadrer, produire.' },
  { slug: 'audit-ux', title: 'Audit UX : éviter le tunnel', category: 'Méthode', desc: 'Un audit actionnable, pas décoratif.' },
]

export default function Articles() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Articles"
        subtitle="Page de listing (placeholder)."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} to={`/articles/${p.slug}`} className="group">
            <Card className="p-4 md:p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <div className="space-y-3">
                <Media alt={p.title} height={180} />
                <div className="flex items-center gap-2">
                  <Badge>{p.category}</Badge>
                  <div className="text-xs opacity-60 group-hover:opacity-100">Lire →</div>
                </div>
                <div className="text-lg font-semibold tracking-tight">{p.title}</div>
                <div className="text-sm opacity-80">{p.desc}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
