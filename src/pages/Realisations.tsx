import { Badge, Card, Container, PlaceholderImage, SectionTitle, SmallLink } from '../components/ui'

const items = [
  { title: 'Refonte selfcare telecom', company: 'Entreprise mobile', desc: 'Un parcours plus court, plus lisible et plus autonome pour les operations du quotidien.' },
  { title: 'Portail bancaire premium', company: 'Banque europeenne', desc: 'Navigation simplifiee, confiance renforcee et meilleure completion sur les flux critiques.' },
  { title: 'App Sante preventive', company: 'Mutuelle nationale', desc: 'Contenus de prevention personnalises dans une interface claire et rassurante.' },
  { title: 'Plateforme energie B2B', company: 'Acteur industriel', desc: 'Un cockpit donnees metier pour piloter les decisions en temps reel.' },
]

export default function Realisations() {
  return (
    <section className="space-y-7 soft-float">
      <Container>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_24px_54px_rgba(8,14,40,0.08)] sm:p-10">
          <SectionTitle title="Realisations" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">
            Quelques missions recentes ou nous avons augmente la clarte, la vitesse et la satisfaction utilisateur.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((r, i) => (
            <Card key={i} className="p-4 sm:p-5">
              <PlaceholderImage height={180} />
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{r.title}</h3>
                <Badge>Case</Badge>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)]">{r.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{r.desc}</p>
              <div className="mt-4">
                <SmallLink href="/realisations">Voir le projet</SmallLink>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
