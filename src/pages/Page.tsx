import { useParams } from 'react-router-dom'
import { Card, SectionHeader } from '../components/ui'

export default function Page() {
  const { slug } = useParams()

  return (
    <section className="space-y-6">
      <SectionHeader
        title={`Page : ${slug}`}
        subtitle="Gabarit page contenu (placeholder)."
      />

      <Card className="p-5 text-sm opacity-80">
        Contenu libre ici : à propos, mentions légales, etc.
      </Card>
    </section>
  )
}
