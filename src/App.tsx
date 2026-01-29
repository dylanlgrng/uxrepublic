import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'
import Page from './pages/Page'
import { Button, Container, Hairline } from './components/ui'

function TopNav() {
  return (
    <header className="pt-8">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium">Ux republic</div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Menu"
              className="border border-black/20 dark:border-white/20 rounded px-2 py-1 text-xs hover:bg-black/5 dark:hover:bg-white/10"
              type="button"
            >
              ☰
            </button>
            <Button href="/uxrepublic/contact" variant="outline">Contactez-nous</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 pb-12">
      <Container>
        <Hairline />
        <div className="pt-6 text-[10px] text-black/60 dark:text-white/60">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/" className="hover:text-black dark:hover:text-white">Accueil</Link>
            <Link to="/articles" className="hover:text-black dark:hover:text-white">Articles</Link>
            <Link to="/realisations" className="hover:text-black dark:hover:text-white">Réalisations</Link>
            <Link to="/contact" className="hover:text-black dark:hover:text-white">Contact</Link>
          </div>
          <div className="mt-3">© {new Date().getFullYear()} • /uxrepublic</div>
        </div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white">
      <TopNav />
      <main className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page/:slug" element={<Page />} />
          <Route path="*" element={<Container><div className="text-xs text-black/60 dark:text-white/60">Page introuvable.</div></Container>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
