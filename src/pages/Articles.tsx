import { Link } from 'react-router-dom'
import { Badge, Card, Container, PlaceholderImage, SectionTitle, SmallLink } from '../components/ui'

const posts = [
  { slug: 'lorem-1', title: 'Construire des experiences qui disparaissent derriere l usage', category: 'Strategie', desc: 'Methodes, rituels et outils pour aligner vision et execution design produit.' },
  { slug: 'lorem-2', title: 'Ce que les meilleurs dashboards ont en commun', category: 'Produit', desc: 'Prioriser les bons signaux sans noyer l utilisateur sous les donnees.' },
  { slug: 'lorem-3', title: 'Design system: accelerer sans uniformiser', category: 'Ops', desc: 'Un socle commun pour la vitesse, sans sacrifier l identite de marque.' },
  { slug: 'lorem-4', title: 'Mesurer l impact reel de l UX', category: 'Research', desc: 'Du test utilisateur aux indicateurs business: relier design et resultat.' },
]

export default function Articles() {
  return (
    <section className="space-y-7 soft-float">
      <Container>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_24px_54px_rgba(8,14,40,0.08)] sm:p-10">
          <SectionTitle title="Articles" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">
            Perspectives, retours terrain et frameworks actionnables pour les equipes produit et design.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <Card key={p.slug} className="p-4 sm:p-5">
              <Link to={`/articles/${p.slug}`}>
                <PlaceholderImage height={180} />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{p.title}</h3>
                  <Badge>{p.category}</Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{p.desc}</p>
              </Link>
              <div className="mt-4">
                <SmallLink href={`/articles/${p.slug}`}>Lire l article</SmallLink>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
