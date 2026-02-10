import { Button, Card, Container, Input, SectionTitle, Textarea } from '../components/ui'

export default function Contact() {
  return (
    <section className="space-y-7 soft-float">
      <Container>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_24px_54px_rgba(8,14,40,0.08)] sm:p-10">
          <SectionTitle title="Contact" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">
            Decrivez votre enjeu produit, nous revenons vers vous avec une proposition de cadrage claire.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="p-5 sm:p-7">
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Message demo') }}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input placeholder="Nom" />
                <Input placeholder="Email" type="email" required />
              </div>
              <Input placeholder="Entreprise" />
              <Textarea rows={6} placeholder="Votre besoin" required />
              <Button type="submit" variant="solid">Envoyer</Button>
            </form>
          </Card>
          <Card className="p-5 sm:p-7">
            <div className="text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)]">Coordonnees</div>
            <div className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
              <p>Telephone: +33 0 00 00 00 00</p>
              <p>Email: hello@uxrepublic.example</p>
              <p>LinkedIn: ux-republic</p>
            </div>
            <div className="mt-7 text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)]">Bureaux</div>
            <div className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
              <p>Paris</p>
              <p>Lyon</p>
              <p>Nantes</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
