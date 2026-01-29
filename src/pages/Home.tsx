import { Link } from 'react-router-dom'
import { Badge, Button, Card, FaqItem, HorizontalCarousel, Media, SectionHeader, Input, Textarea } from '../components/ui'

const articles = [
  { slug: 'design-system', title: 'Faire vivre un design system', category: 'Design system', desc: 'De la gouvernance aux usages : comment éviter le cimetière de composants.' },
  { slug: 'accessibilite', title: 'Accessibilité : les fondamentaux', category: 'Accessibilité', desc: 'Des pratiques simples et efficaces, sans religion ni jargon.' },
  { slug: 'product-thinking', title: 'Le product thinking au quotidien', category: 'Produit', desc: 'Prioriser, tester, apprendre — sans perdre le sens.' },
]

const realisations = [
  { title: 'Portail selfcare', company: 'MAIF', desc: 'Simplification de parcours et réduction de friction sur des actions clés.' },
  { title: 'Messagerie sécurisée', company: 'Assurance', desc: 'Parcours multi-canal cohérent, contraintes RGAA et robustesse.' },
  { title: 'Outil interne', company: 'DSI', desc: 'Optimisation de flux métiers avec design system et accessibilité.' },
  { title: 'Design system', company: 'Studio', desc: 'Documentation, modèles Figma, et composants réutilisables.' },
]

const people = [
  { name: 'CEO', role: 'Direction', location: 'Paris' },
  { name: 'Responsable agence', role: 'Région', location: 'Bordeaux' },
  { name: 'Responsable agence', role: 'Région', location: 'Lyon' },
  { name: 'Head of UX', role: 'Practice', location: 'Paris' },
  { name: 'Head of Product', role: 'Practice', location: 'Bordeaux' },
]

const faqs = [
  { q: 'Quels types de missions ?', a: 'Discovery, delivery, design system, accessibilité, accompagnement produit.' },
  { q: 'Travaillez-vous avec des équipes tech ?', a: 'Oui, en collaboration continue (rituels, specs, QA, itérations).' },
  { q: 'Intervenez-vous en régie ou au forfait ?', a: 'Les deux, selon contexte, périmètre et rythme attendu.' },
  { q: 'Comment démarre un projet ?', a: 'Un cadrage court, puis une boucle test/apprentissage pour sécuriser la suite.' },
]

function ArticleCard({
  a,
  variant,
}: {
  a: { slug: string; title: string; category: string; desc: string }
  variant?: 'wide' | 'half'
}) {
  const isWide = variant === 'wide'
  return (
    <Link to={`/articles/${a.slug}`} className="block group">
      <Card className="p-4 md:p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
        <div className={isWide ? 'grid md:grid-cols-12 gap-4 items-start' : 'space-y-3'}>
          <div className={isWide ? 'md:col-span-5' : ''}>
            <Media alt={`Image ${a.title}`} height={isWide ? 220 : 180} />
          </div>
          <div className={isWide ? 'md:col-span-7 space-y-3' : 'space-y-3'}>
            <div className="flex items-center gap-2">
              <Badge>{a.category}</Badge>
              <div className="text-xs opacity-60 group-hover:opacity-100 transition">Lire →</div>
            </div>
            <div className="text-xl font-semibold tracking-tight">{a.title}</div>
            <div className="text-sm opacity-80">{a.desc}</div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

function RealisationCard({
  r,
}: {
  r: { title: string; company: string; desc: string }
}) {
  return (
    <div className="w-[280px] md:w-[360px]">
      <Card className="p-4 md:p-5">
        <div className="space-y-3">
          <Media alt={`Image ${r.title}`} height={200} />
          <div className="space-y-1">
            <div className="text-lg font-semibold tracking-tight">{r.title}</div>
            <div className="text-sm">
              <span className="opacity-70">Entreprise : </span>
              <span className="font-medium underline decoration-black/20 dark:decoration-white/20">{r.company}</span>
            </div>
          </div>
          <div className="text-sm opacity-80">{r.desc}</div>
        </div>
      </Card>
    </div>
  )
}

function PersonCard({
  p,
}: {
  p: { name: string; role: string; location: string }
}) {
  return (
    <div className="w-[260px] md:w-[320px]">
      <Card className="p-4 md:p-5">
        <div className="space-y-3">
          <Media alt={`Portrait ${p.name}`} height={180} />
          <div className="space-y-1">
            <div className="text-lg font-semibold tracking-tight">{p.name}</div>
            <div className="text-sm opacity-80">{p.role} • {p.location}</div>
          </div>
          <div className="text-sm opacity-70">
            Bio courte (placeholder) : expertise, périmètre, focus.
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* 1) HERO */}
      <section className="space-y-6">
        <Media alt="Hero" height={320} />
        <div className="max-w-3xl space-y-3">
          <div className="text-sm opacity-70">Baseline</div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Un studio design & produit pour des expériences utiles, accessibles et robustes.
          </h1>
          <p className="text-base opacity-80">
            Texte d’intro (placeholder) : ce que fait UX Republic, pour qui, et avec quelle approche.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <Button href="/uxrepublic/realisations">Voir les réalisations</Button>
            <Button href="/uxrepublic/contact" variant="ghost">Nous contacter</Button>
          </div>
        </div>
      </section>

      {/* 2) ARTICLES */}
      <section className="space-y-6">
        <SectionHeader
          title="Articles"
          subtitle="Trois aperçus d’articles (gabarit). Le premier est en pleine largeur, les deux autres en 1/2."
          action={<Button href="/uxrepublic/articles">Voir tous les articles</Button>}
        />
        <div className="grid gap-4">
          <ArticleCard a={articles[0]} variant="wide" />
          <div className="grid gap-4 md:grid-cols-2">
            <ArticleCard a={articles[1]} variant="half" />
            <ArticleCard a={articles[2]} variant="half" />
          </div>
        </div>
      </section>

      {/* 3) RÉALISATIONS */}
      <section className="space-y-6">
        <SectionHeader
          title="Réalisations"
          subtitle="Slider horizontal (scroll) avec cartes."
          action={<Button href="/uxrepublic/realisations">Voir toutes les réalisations</Button>}
        />
        <HorizontalCarousel>
          {realisations.map((r) => (
            <RealisationCard key={r.title + r.company} r={r} />
          ))}
        </HorizontalCarousel>
      </section>

      {/* 4) À PROPOS + CAROUSEL PERSONNES */}
      <section className="space-y-8">
        <SectionHeader
          title="À propos d’UX Republic"
          subtitle="Blocs de texte stylisés + carousel des personnes importantes."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-5 md:col-span-2">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wide opacity-60">Notre approche</div>
                <div className="text-xl font-semibold tracking-tight">Du cadrage à la livraison, sans perdre l’utilisateur.</div>
              </div>
              <div className="text-sm md:text-base opacity-80 leading-relaxed">
                Texte (placeholder) : discovery, tests, itérations, collaboration avec les équipes produit et tech,
                accessibilité et design system.
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs uppercase tracking-wide opacity-60">Ce qui compte</div>
                <div className="text-lg font-semibold tracking-tight">Clarté, impact, durabilité.</div>
              </div>
              <div className="text-sm md:text-base opacity-80 leading-relaxed">
                Texte (placeholder) : arbitrages, contraintes, efficacité en contexte réel.
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wide opacity-60">Chiffres</div>
              <div className="text-3xl font-semibold tracking-tight">+X</div>
              <div className="text-sm opacity-80">Experts design & produit</div>
              <div className="pt-3 border-t border-black/10 dark:border-white/10" />
              <div className="text-3xl font-semibold tracking-tight">+Y</div>
              <div className="text-sm opacity-80">Missions livrées</div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-lg font-semibold tracking-tight">Personnes clés</div>
              <div className="text-sm opacity-80">Carousel horizontal (placeholder).</div>
            </div>
          </div>
          <HorizontalCarousel>
            {people.map((p, i) => (
              <PersonCard key={p.name + i} p={p} />
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* 5) FAQ */}
      <section className="space-y-6">
        <SectionHeader title="FAQ" subtitle="Questions fréquentes (accordion simple)." />
        <div className="grid gap-3 max-w-3xl">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* 6) NEWSLETTER */}
      <section className="space-y-6">
        <SectionHeader
          title="Newsletter"
          subtitle="Inscription (placeholder)."
        />
        <Card className="p-5 max-w-3xl">
          <form
            className="grid gap-3 md:grid-cols-[1fr_auto]"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Inscription démo 🙂')
            }}
          >
            <Input placeholder="Ton email" type="email" required />
            <div className="md:justify-self-end">
              <Button type="submit">S’inscrire</Button>
            </div>
          </form>
          <div className="text-xs opacity-60 mt-3">
            Pas de spam. Désinscription en 1 clic. (placeholder)
          </div>
        </Card>
      </section>

      {/* 7) CONTACT (mini-form + réseaux) */}
      <section className="space-y-6">
        <SectionHeader
          title="Nous contacter"
          subtitle="Formulaire court + liens utiles."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-5">
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Message démo 🙂')
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <div className="text-sm mb-1">Nom</div>
                  <Input placeholder="Ton nom" />
                </div>
                <div>
                  <div className="text-sm mb-1">Email</div>
                  <Input placeholder="toi@exemple.com" type="email" required />
                </div>
              </div>
              <div>
                <div className="text-sm mb-1">Message</div>
                <Textarea rows={4} placeholder="Décris ton besoin…" required />
              </div>
              <Button type="submit">Envoyer</Button>
            </form>
          </Card>

          <Card className="p-5">
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium">Coordonnées</div>
                <div className="text-sm opacity-80 mt-2">
                  Téléphone : +33 0 00 00 00 00<br />
                  Email : hello@uxrepublic.example<br />
                  Adresse : Bordeaux / Paris / Lyon (placeholder)
                </div>
              </div>
              <div className="pt-3 border-t border-black/10 dark:border-white/10" />
              <div>
                <div className="text-sm font-medium">Réseaux</div>
                <div className="mt-2 grid gap-2 text-sm">
                  <a className="underline decoration-black/20 dark:decoration-white/20 hover:opacity-80" href="#">LinkedIn</a>
                  <a className="underline decoration-black/20 dark:decoration-white/20 hover:opacity-80" href="#">X / Twitter</a>
                  <a className="underline decoration-black/20 dark:decoration-white/20 hover:opacity-80" href="#">Medium</a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
