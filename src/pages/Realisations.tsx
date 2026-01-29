import { Badge, Card, Carousel, Container, PlaceholderImage, SectionTitle, SmallLink } from '../components/ui'

const items = [
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
]

export default function Realisations() {
  return (
    <section className="space-y-4">
      <Container>
        <SectionTitle title="Réalisations" />
      </Container>

      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((r, i) => (
            <Card key={i} className="p-3">
              <PlaceholderImage height={160} />
              <div className="mt-3 text-lg tracking-tight">{r.title}</div>
              <div className="mt-1 text-[10px] italic">{r.company}</div>
              <div className="mt-2 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">{r.desc}</div>
              <div className="mt-3 flex items-center justify-between">
                <SmallLink href="/uxrepublic/realisations">Lire →</SmallLink>
                <Badge>Catégorie</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
