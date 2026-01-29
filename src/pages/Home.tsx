import { Link } from 'react-router-dom'
import { Badge, Button, Card, Carousel, Container, Hairline, PlaceholderImage, SectionTitle, SmallLink, RowAction, Input, Textarea } from '../components/ui'

const articles = [
  { slug: 'lorem-1', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  { slug: 'lorem-2', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  { slug: 'lorem-3', title: 'Lorem ipsum dolor amet', category: 'Catégorie', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
]

const realisations = [
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.' },
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.' },
  { title: 'Lorem ipsum', company: 'Entreprise', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.' },
]

const people = [
  { name: 'Jean Michel', role: "CEO d'ux republic", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
  { name: 'Jean Michel', role: "Head of UX", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
  { name: 'Jean Michel', role: "Responsable agence", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
]

function Hero() {
  return (
    <section className="space-y-6">
      <Container>
        <div className="border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 h-[260px]" aria-hidden="true" />
      </Container>

      <Container>
        <h1 className="text-3xl leading-[1.05] tracking-tight">Lorem ipsum dolor amet</h1>
        <div className="mt-4 grid gap-6 md:grid-cols-12">
          <p className="text-[10px] text-black/60 dark:text-white/60 leading-relaxed md:col-span-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="md:col-span-5 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">
            <div className="italic">Lorem ipsum dolor sit amet</div>
            <div className="mt-2 italic">Lorem ipsum dolor sit amet</div>
            <div className="mt-2 italic">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <Button href="/uxrepublic/contact" variant="outline">Contactez-nous</Button>
          <Button href="/uxrepublic/contact" variant="outline">Contactez-nous</Button>
        </div>
      </Container>
    </section>
  )
}

function ArticleCard({ a, wide }: { a: typeof articles[number]; wide?: boolean }) {
  return (
    <Card className="p-3">
      <div className={wide ? "grid gap-3 md:grid-cols-12" : "space-y-3"}>
        <div className={wide ? "md:col-span-7" : ""}>
          <PlaceholderImage height={wide ? 180 : 150} />
        </div>
        <div className={wide ? "md:col-span-5 flex flex-col" : "flex flex-col"}>
          <div className="text-lg leading-tight tracking-tight">{a.title}</div>
          <div className="mt-2 text-[10px] text-black/60 dark:text-white/60 leading-relaxed flex-1">
            {a.desc}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <SmallLink href={`/uxrepublic/articles/${a.slug}`}>Lire →</SmallLink>
            <Badge>{a.category}</Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}

function RealCard({ r }: { r: typeof realisations[number] }) {
  return (
    <Card className="p-3 w-[240px]">
      <PlaceholderImage height={140} />
      <div className="mt-3 text-lg leading-tight tracking-tight">{r.title}</div>
      <div className="mt-1 text-[10px]">
        <span className="italic">{r.company}</span>
      </div>
      <div className="mt-2 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">{r.desc}</div>
      <div className="mt-3 flex items-center justify-between">
        <SmallLink href="/uxrepublic/realisations">Lire →</SmallLink>
        <Badge>Catégorie</Badge>
      </div>
    </Card>
  )
}

function PersonCard({ p }: { p: typeof people[number] }) {
  return (
    <Card className="p-3 w-[240px]">
      <PlaceholderImage height={120} />
      <div className="mt-3 text-base tracking-tight">{p.name}</div>
      <div className="text-[10px] italic text-black/70 dark:text-white/70">{p.role}</div>
      <div className="mt-2 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">{p.desc}</div>
      <div className="mt-3">
        <SmallLink href="/uxrepublic/page/a-propos">Lire →</SmallLink>
      </div>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />

      <Container>
        <Hairline />
      </Container>

      {/* ARTICLES */}
      <section className="space-y-4">
        <Container>
          <SectionTitle title="Articles" action={<RowAction><SmallLink href="/uxrepublic/articles">Voir tout</SmallLink></RowAction>} />
        </Container>
        <Container>
          <div className="space-y-4">
            <ArticleCard a={articles[0]} wide />
            <div className="grid gap-4 md:grid-cols-2">
              <ArticleCard a={articles[1]} />
              <ArticleCard a={articles[2]} />
            </div>
          </div>
        </Container>
      </section>

      {/* RÉALISATIONS */}
      <section className="space-y-4">
        <Container>
          <SectionTitle title="Réalisations" action={<RowAction><SmallLink href="/uxrepublic/realisations">Voir tout</SmallLink></RowAction>} />
        </Container>
        <Container>
          <Carousel>
            {realisations.map((r, i) => <RealCard key={i} r={r} />)}
          </Carousel>
          <div className="mt-4">
            <Button href="/uxrepublic/page/services" variant="outline">En savoir plus sur nos services design →</Button>
          </div>
        </Container>
      </section>

      {/* À PROPOS */}
      <section className="space-y-4">
        <Container>
          <SectionTitle title="A propos d'ux republic" />
        </Container>
        <Container>
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="md:col-span-5 text-[10px] text-black/60 dark:text-white/60 leading-relaxed italic">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” — Lorem ipsum, lorem
            </div>
          </div>
        </Container>
        <Container>
          <Carousel>
            {people.map((p, i) => <PersonCard key={i} p={p} />)}
          </Carousel>
        </Container>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <Container>
          <SectionTitle title="FAQ" />
        </Container>
        <Container>
          <div className="grid gap-3">
            <Card className="p-4 text-[10px] text-black/60 dark:text-white/60">FAQ item (placeholder)</Card>
            <Card className="p-4 text-[10px] text-black/60 dark:text-white/60">FAQ item (placeholder)</Card>
            <Card className="p-4 text-[10px] text-black/60 dark:text-white/60">FAQ item (placeholder)</Card>
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="space-y-4">
        <Container>
          <SectionTitle title="Newsletter" />
        </Container>
        <Container>
          <Card className="p-4">
            <form
              className="grid gap-3 md:grid-cols-[1fr_auto]"
              onSubmit={(e) => { e.preventDefault(); alert('Inscription démo 🙂') }}
            >
              <Input placeholder="Ton email" type="email" required />
              <Button type="submit" variant="outline">S’inscrire</Button>
            </form>
          </Card>
        </Container>
      </section>

      {/* CONTACT */}
      <section className="space-y-4">
        <Container>
          <SectionTitle title="Contact" />
        </Container>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-4">
              <form
                className="space-y-3"
                onSubmit={(e) => { e.preventDefault(); alert('Message démo 🙂') }}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <Input placeholder="Nom" />
                  <Input placeholder="Email" type="email" required />
                </div>
                <Textarea rows={4} placeholder="Message" required />
                <Button type="submit" variant="outline">Envoyer</Button>
              </form>
            </Card>

            <Card className="p-4 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">
              <div className="text-xs font-medium text-black dark:text-white">Coordonnées</div>
              <div className="mt-2">
                Téléphone : +33 0 00 00 00 00<br />
                Email : hello@uxrepublic.example<br />
                LinkedIn : ux-republic
              </div>
              <div className="mt-4 text-xs font-medium text-black dark:text-white">Réseaux</div>
              <div className="mt-2 space-y-1">
                <a href="#" className="underline decoration-black/20 dark:decoration-white/20">LinkedIn</a><br />
                <a href="#" className="underline decoration-black/20 dark:decoration-white/20">X / Twitter</a><br />
                <a href="#" className="underline decoration-black/20 dark:decoration-white/20">Medium</a>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
