import { Link, useParams } from 'react-router-dom'
import { Badge, Card, Container, PlaceholderImage } from '../components/ui'

export default function Article() {
  const { slug } = useParams()

  return (
    <article className="space-y-7 soft-float">
      <Container>
        <Link to="/articles" className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-white/75 px-4 py-2 text-xs font-medium text-[var(--ink-soft)] hover:text-[var(--ink)]">
          Retour aux articles
        </Link>
      </Container>

      <Container>
        <Card className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">Article: {slug}</h1>
            <Badge>Categorie</Badge>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)]">
            Contenu article placeholder. Cette page sert de gabarit pour vos publications longues avec medias, sections et appels a action.
          </p>
          <div className="mt-6">
            <PlaceholderImage height={320} />
          </div>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--ink-soft)]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue ac magna consequat efficitur.</p>
            <p>Integer vel neque ut turpis semper facilisis. Sed interdum feugiat urna, id convallis purus posuere vel.</p>
            <p>Maecenas quis dolor at lectus faucibus finibus. Proin nec est non lacus iaculis malesuada.</p>
          </div>
        </Card>
      </Container>
    </article>
  )
}
