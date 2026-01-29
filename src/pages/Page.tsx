import { useParams } from 'react-router-dom'

export default function Page() {
  const { slug } = useParams()

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Page contenu : {slug}</h1>
        <p className="text-sm opacity-80">Gabarit “page” (placeholder).</p>
      </header>

      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5 text-sm opacity-80">
        Tu peux dupliquer ce gabarit pour tes pages “contenu” (mentions légales, à propos, etc.).
      </div>
    </section>
  )
}
