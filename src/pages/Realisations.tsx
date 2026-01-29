import { Card, Media, SectionHeader } from '../components/ui'

const items = [
  { title: 'Portail selfcare', company: 'MAIF', desc: 'Parcours, friction, accessibilité.' },
  { title: 'Messagerie sécurisée', company: 'Assurance', desc: 'Répondre, joindre, tracer, sécuriser.' },
  { title: 'Outil interne', company: 'DSI', desc: 'Optimisation de flux métiers.' },
  { title: 'Design system', company: 'Studio', desc: 'Docs, templates, gouvernance.' },
  { title: 'Dashboard', company: 'Ops', desc: 'Lisibilité, priorisation, actions.' },
  { title: 'Refonte', company: 'Service', desc: 'Structure, contenus, UI.' },
]

export default function Realisations() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Réalisations"
        subtitle="Page listing (placeholder)."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((r) => (
          <Card key={r.title + r.company} className="p-4 md:p-5">
            <div className="space-y-3">
              <Media alt={r.title} height={200} />
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
        ))}
      </div>
    </section>
  )
}
