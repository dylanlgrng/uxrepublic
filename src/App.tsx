import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'
import Page from './pages/Page'

function TopNav() {
  const link = ({ isActive }: { isActive: boolean }) =>
    'px-3 py-2 rounded-lg text-sm transition ' +
    (isActive ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/5')

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="font-semibold tracking-tight">UX Republic</div>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={link} end>Accueil</NavLink>
          <NavLink to="/articles" className={link}>Articles</NavLink>
          <NavLink to="/realisations" className={link}>Réalisations</NavLink>
          <NavLink to="/page/a-propos" className={link}>À propos</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
        <nav className="md:hidden flex items-center gap-1">
          <NavLink to="/articles" className={link}>Articles</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">UX Republic</div>
          <div className="opacity-70">Design & Product studio — gabarit de site.</div>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Liens</div>
          <div className="opacity-70 flex flex-col gap-1">
            <a href="/uxrepublic/" className="hover:opacity-100">Accueil</a>
            <a href="/uxrepublic/articles" className="hover:opacity-100">Articles</a>
            <a href="/uxrepublic/realisations" className="hover:opacity-100">Réalisations</a>
            <a href="/uxrepublic/contact" className="hover:opacity-100">Contact</a>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Contact</div>
          <div className="opacity-70">
            Email : hello@uxrepublic.example<br />
            LinkedIn : ux-republic<br />
            Téléphone : +33 0 00 00 00 00
          </div>
        </div>
        <div className="md:col-span-3 text-xs opacity-60 pt-2">
          © {new Date().getFullYear()} • /uxrepublic
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page/:slug" element={<Page />} />
          <Route path="*" element={<div className="text-sm opacity-80">Page introuvable.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
