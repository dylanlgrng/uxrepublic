import { Badge, Button, Card, Carousel, Container, Input, PlaceholderImage, RowAction, SectionTitle, SmallLink, Textarea } from '../components/ui'

const articles = [
  { slug: 'lorem-1', title: 'Construire des experiences qui disparaissent derriere l usage', category: 'Strategie', desc: 'Comment aligner produit, design et livraison sans friction sur des parcours critiques.' },
  { slug: 'lorem-2', title: 'Ce que les meilleurs dashboards ont en commun', category: 'Produit', desc: 'Des principes simples pour rendre la complexite lisible, actionnable et elegante.' },
  { slug: 'lorem-3', title: 'Design system: accelerer sans uniformiser', category: 'Ops', desc: 'Des patterns partages pour livrer plus vite sans perdre la signature de marque.' },
]

const realisations = [
  { title: 'Refonte selfcare telecom', company: 'Entreprise mobile', desc: 'Reduction de 28% des demandes au support grace a une experience orientee taches.' },
  { title: 'Portail bancaire premium', company: 'Banque europeenne', desc: 'Un parcours clair et rassurant pour les operations sensibles et multi-profils.' },
  { title: 'App Sante preventive', company: 'Mutuelle nationale', desc: 'Transformation de contenus complexes en parcours de prevention personnalisables.' },
]

const people = [
  { name: 'Jean Michel', role: 'CEO UX Republic', desc: 'Vision produit et execution design pour des organisations en forte acceleration.' },
  { name: 'Camille Martin', role: 'Head of UX', desc: 'Structuration des equipes, qualite d execution et pilotage de la valeur design.' },
  { name: 'Louis Garnier', role: 'Design Director', desc: 'Direction artistique digitale et experiences a fort impact business.' },
]

function Hero() {
  return (
    <section className="soft-float">
      <Container>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_30px_60px_rgba(8,14,40,0.1)] backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Badge>Design and Product Studio</Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-tight text-[var(--ink)] sm:text-6xl">
                Nous dessinons des experiences digitales aussi simples que puissantes.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
                UX Republic accompagne les equipes produit dans la conception d interfaces utiles, mesurables et memorables. Strategie, recherche, UI et delivery dans une meme cadence.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" variant="solid">Parler de votre projet</Button>
                <Button href="/realisations" variant="outline">Voir nos realisations</Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <PlaceholderImage height={330} />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <Card className="p-3 text-center">
                  <div className="text-xl font-semibold">70+</div>
                  <div className="text-[11px] text-[var(--ink-soft)]">Experts</div>
                </Card>
                <Card className="p-3 text-center">
                  <div className="text-xl font-semibold">200+</div>
                  <div className="text-[11px] text-[var(--ink-soft)]">Missions</div>
                </Card>
                <Card className="p-3 text-center">
                  <div className="text-xl font-semibold">15</div>
                  <div className="text-[11px] text-[var(--ink-soft)]">Ans d experience</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ArticleCard({ a, wide }: { a: typeof articles[number]; wide?: boolean }) {
  return (
    <Card className="p-4 sm:p-6">
      <div className={wide ? 'grid gap-5 lg:grid-cols-12' : 'space-y-4'}>
        <div className={wide ? 'lg:col-span-7' : ''}>
          <PlaceholderImage height={wide ? 220 : 180} />
        </div>
        <div className={wide ? 'lg:col-span-5 flex flex-col' : 'flex flex-col'}>
          <Badge>{a.category}</Badge>
          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]">{a.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{a.desc}</p>
          <div className="mt-4">
            <SmallLink href={`/articles/${a.slug}`}>Lire l article</SmallLink>
          </div>
        </div>
      </div>
    </Card>
  )
}

function RealCard({ r }: { r: typeof realisations[number] }) {
  return (
    <Card className="w-[290px] p-4">
      <PlaceholderImage height={160} />
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--ink)]">{r.title}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)]">{r.company}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{r.desc}</p>
      <div className="mt-4">
        <SmallLink href="/realisations">Voir le case study</SmallLink>
      </div>
    </Card>
  )
}

function PersonCard({ p }: { p: typeof people[number] }) {
  return (
    <Card className="w-[290px] p-4">
      <PlaceholderImage height={130} />
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--ink)]">{p.name}</h3>
      <p className="text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)]">{p.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{p.desc}</p>
      <div className="mt-4">
        <SmallLink href="/page/a-propos">En savoir plus</SmallLink>
      </div>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <Hero />

      <section className="space-y-6">
        <Container>
          <SectionTitle title="Articles" action={<RowAction><SmallLink href="/articles">Voir tout</SmallLink></RowAction>} />
        </Container>
        <Container>
          <div className="space-y-5">
            <ArticleCard a={articles[0]} wide />
            <div className="grid gap-5 md:grid-cols-2">
              <ArticleCard a={articles[1]} />
              <ArticleCard a={articles[2]} />
            </div>
          </div>
        </Container>
      </section>

      <section className="space-y-6">
        <Container>
          <SectionTitle title="Realisations" action={<RowAction><SmallLink href="/realisations">Voir tout</SmallLink></RowAction>} />
        </Container>
        <Container>
          <Carousel>
            {realisations.map((r, i) => <RealCard key={i} r={r} />)}
          </Carousel>
        </Container>
      </section>

      <section className="space-y-6">
        <Container>
          <SectionTitle title="L equipe" />
        </Container>
        <Container>
          <Carousel>
            {people.map((p, i) => <PersonCard key={i} p={p} />)}
          </Carousel>
        </Container>
      </section>

      <section className="space-y-6">
        <Container>
          <SectionTitle title="Newsletter" />
        </Container>
        <Container>
          <Card className="p-5 sm:p-7">
            <form className="grid gap-3 md:grid-cols-[1fr_auto]" onSubmit={(e) => { e.preventDefault(); alert('Inscription demo') }}>
              <Input placeholder="Votre email professionnel" type="email" required />
              <Button type="submit" variant="solid">S inscrire</Button>
            </form>
          </Card>
        </Container>
      </section>

      <section className="space-y-6">
        <Container>
          <SectionTitle title="Contact" />
        </Container>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="p-5 sm:p-7">
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Message demo') }}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input placeholder="Nom" />
                  <Input placeholder="Email" type="email" required />
                </div>
                <Textarea rows={4} placeholder="Message" required />
                <Button type="submit" variant="solid">Envoyer</Button>
              </form>
            </Card>
            <Card className="p-5 sm:p-7">
              <div className="text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)]">Coordonnees</div>
              <div className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
                <p>Telephone : +33 0 00 00 00 00</p>
                <p>Email : hello@uxrepublic.example</p>
                <p>LinkedIn : ux-republic</p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
