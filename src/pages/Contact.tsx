import { Button, Card, Container, Input, SectionTitle, Textarea } from '../components/ui'

export default function Contact() {
  return (
    <section className="space-y-4">
      <Container>
        <SectionTitle title="Contact" />
      </Container>

      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Message démo 🙂') }}>
              <div className="grid gap-3 md:grid-cols-2">
                <Input placeholder="Nom" />
                <Input placeholder="Email" type="email" required />
              </div>
              <Textarea rows={6} placeholder="Message" required />
              <Button type="submit" variant="outline">Envoyer</Button>
            </form>
          </Card>
          <Card className="p-4 text-[10px] text-black/60 dark:text-white/60 leading-relaxed">
            Téléphone : +33 0 00 00 00 00<br />
            Email : hello@uxrepublic.example<br />
            LinkedIn : ux-republic
          </Card>
        </div>
      </Container>
    </section>
  )
}
