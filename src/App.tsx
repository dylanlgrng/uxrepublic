import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Contact from './pages/Contact'
import Page from './pages/Page'

function TopNav() {
  const link = ({ isActive }: { isActive: boolean }) =>
    'px-3 py-2 rounded-lg text-sm transition ' +
    (isActive ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/5')

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <div className="font-semibold tracking-tight">UX Republic</div>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={link} end>Accueil</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          <NavLink to="/page/a-propos" className={link}>Contenu</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopNav />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page/:slug" element={<Page />} />
          <Route path="*" element={<div className="text-sm opacity-80">Page introuvable.</div>} />
        </Routes>
      </main>
      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs opacity-70">
          © {new Date().getFullYear()} Dylan Lagrange • /uxrepublic
        </div>
      </footer>
    </div>
  )
}
