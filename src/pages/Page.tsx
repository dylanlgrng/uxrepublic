import { useParams } from 'react-router-dom'
import { Card, Container, SectionTitle } from '../components/ui'

export default function Page() {
  const { slug } = useParams()
  return (
    <section className="space-y-4">
      <Container>
        <SectionTitle title={`Page : ${slug}`} />
      </Container>
      <Container>
        <Card className="p-4 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">
          Contenu libre (placeholder).
        </Card>
      </Container>
    </section>
  )
}
