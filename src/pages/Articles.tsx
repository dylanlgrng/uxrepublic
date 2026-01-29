import { Link } from 'react-router-dom'
import { Badge, Card, Container, PlaceholderImage, SectionTitle, SmallLink } from '../components/ui'

const posts = [
  { slug: 'lorem-1', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { slug: 'lorem-2', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { slug: 'lorem-3', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { slug: 'lorem-4', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

export default function Articles() {
  return (
    <section className="space-y-4">
      <Container>
        <SectionTitle title="Articles" />
      </Container>

      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} to={`/articles/${p.slug}`}>
              <Card className="p-3">
                <PlaceholderImage height={160} />
                <div className="mt-3 text-lg tracking-tight">{p.title}</div>
                <div className="mt-2 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">{p.desc}</div>
                <div className="mt-3 flex items-center justify-between">
                  <SmallLink href={`/uxrepublic/articles/${p.slug}`}>Lire →</SmallLink>
                  <Badge>{p.category}</Badge>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
