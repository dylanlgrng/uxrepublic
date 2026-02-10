import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'
import Page from './pages/Page'
import { Button, Container } from './components/ui'

function TopNav() {
  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/articles', label: 'Articles' },
    { to: '/realisations', label: 'Realisations' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[var(--line)] bg-white/75 px-4 py-3 shadow-[0_16px_40px_rgba(7,13,38,0.1)] backdrop-blur-xl sm:px-6">
          <Link className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink)]" to="/">
            UX REPUBLIC
          </Link>
          <nav className="hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                className="text-xs font-medium tracking-wide text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" variant="solid">Contact</Button>
        </div>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="pb-14 pt-20">
      <Container>
        <div className="rounded-3xl border border-[var(--line)] bg-white/65 px-6 py-8 shadow-[0_20px_45px_rgba(6,12,28,0.08)] backdrop-blur-lg sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">UX REPUBLIC</div>
              <p className="mt-3 max-w-sm text-sm text-[var(--ink-soft)]">
                Studio design produit et experiences digitales. Nous transformons les idees en interfaces claires, utiles et memorables.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-3 sm:justify-end">
              <Link className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]" to="/">Accueil</Link>
              <Link className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]" to="/articles">Articles</Link>
              <Link className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]" to="/realisations">Realisations</Link>
              <Link className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]" to="/contact">Contact</Link>
            </div>
          </div>
          <div className="mt-7 text-xs text-[var(--ink-muted)]">© {new Date().getFullYear()} UX Republic. Tous droits reserves.</div>
        </div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen page-reveal">
      <TopNav />
      <main className="pt-12 sm:pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page/:slug" element={<Page />} />
          <Route path="*" element={<Container><div className="text-sm text-[var(--ink-soft)]">Page introuvable.</div></Container>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
