export default function Contact() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-sm opacity-80">Formulaire simple (placeholder).</p>
      </div>

      <form
        className="space-y-4 max-w-xl"
        onSubmit={(e) => {
          e.preventDefault()
          alert('Formulaire démo 🙂')
        }}
      >
        <label className="block">
          <div className="text-sm mb-1">Email</div>
          <input
            required
            type="email"
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="toi@exemple.com"
          />
        </label>

        <label className="block">
          <div className="text-sm mb-1">Message</div>
          <textarea
            required
            rows={5}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="Dis-moi tout…"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  )
}
