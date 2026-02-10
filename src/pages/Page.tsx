import { useParams } from 'react-router-dom'
import { Card, Container, SectionTitle } from '../components/ui'

export default function Page() {
  const { slug } = useParams()

  return (
    <section className="space-y-7 soft-float">
      <Container>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_24px_54px_rgba(8,14,40,0.08)] sm:p-10">
          <SectionTitle title={`Page: ${slug}`} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">
            Gabarit de page statique pour vos contenus marque, services, expertises et ressources.
          </p>
        </div>
      </Container>
      <Container>
        <Card className="p-5 sm:p-7 text-sm leading-relaxed text-[var(--ink-soft)]">
          Contenu libre placeholder. Vous pouvez remplacer ce bloc par des sections riches: titres, medias, colonnes, citations et appels a action.
        </Card>
      </Container>
    </section>
  )
}
