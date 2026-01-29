export default function Home() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Page d’accueil</h1>
        <p className="text-base opacity-80">
          Template prêt pour GitHub Pages sur <span className="font-mono">/uxrepublic</span>.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <div className="text-sm font-medium">Sections</div>
          <ul className="mt-3 space-y-2 text-sm opacity-80 list-disc list-inside">
            <li>Hero</li>
            <li>Preuves / projets</li>
            <li>Valeur / pitch</li>
            <li>Call-to-action</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <div className="text-sm font-medium">Prochaine étape</div>
          <p className="mt-3 text-sm opacity-80">
            Remplace ce contenu par tes wireframes, et on transforme ces pages en composants réutilisables.
          </p>
        </div>
      </div>
    </section>
  )
}
