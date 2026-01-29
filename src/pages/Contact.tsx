import { Button, Card, Input, SectionHeader, Textarea } from '../components/ui'

export default function Contact() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Contact"
        subtitle="Page contact dédiée (placeholder)."
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
              <Textarea rows={6} placeholder="Décris ton besoin…" required />
            </div>
            <Button type="submit">Envoyer</Button>
          </form>
        </Card>

        <Card className="p-5">
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium">Coordonnées</div>
              <div className="opacity-80 mt-2">
                Téléphone : +33 0 00 00 00 00<br />
                Email : hello@uxrepublic.example<br />
                Adresse : Bordeaux / Paris / Lyon (placeholder)
              </div>
            </div>

            <div className="pt-3 border-t border-black/10 dark:border-white/10" />

            <div>
              <div className="font-medium">Réseaux</div>
              <div className="opacity-80 mt-2 space-y-1">
                <div><a className="underline decoration-black/20 dark:decoration-white/20 hover:opacity-80" href="#">LinkedIn</a></div>
                <div><a className="underline decoration-black/20 dark:decoration-white/20 hover:opacity-80" href="#">X / Twitter</a></div>
                <div><a className="underline decoration-black/20 dark:decoration-white/20 hover:opacity-80" href="#">Medium</a></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
