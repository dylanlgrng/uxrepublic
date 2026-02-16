# UX Republic - Base Vitrine Brut / Raw

Base statique (HTML/CSS/JS) avec design system coherent, composants reutilisables et routes pre-creees.

## Lancement

- Ouvrir `index.html` dans le navigateur.
- Option recommandee: servir le dossier en local (Live Server) pour naviguer facilement entre toutes les routes.

## Ordre de construction respecte

1. Tokens + composants UI (`assets/styles.css`, `assets/app.js`)
2. Home complete (ordre des blocs demande)
3. Pages/routes secondaires creees (structure prete a remplir)
4. Header, drawer accessible, footer, animations sobres finalises

## Design system

- Tokens: `assets/styles.css` (`:root`)
- Echelle typo unique: `--fs-xs` -> `--fs-4xl`
- Spacing unique: `--space-1` -> `--space-8`
- Components: `btn`, `card`, `tag`, `section`, `field`, `marquee`, `site-header`, `drawer`, `site-footer`

## Donnees placeholder

- `assets/data.js`
  - `articles[]`
  - `realisations[]`
  - `agencies[]`
  - `categoriesArticles[]`
  - `secteursRealisations[]`

## Accessibilite incluse

- Focus ring visible
- Drawer menu avec `aria-expanded`, `aria-controls`, role dialog
- Fermeture via ESC et clic backdrop
- Focus trap clavier dans le drawer
- `prefers-reduced-motion` pour animations/marquee

## Routes creees

- `/`
- `/a-propos`
- `/equipe`
- `/metiers`
- `/metiers/research`
- `/metiers/coaching`
- `/metiers/design-sprint`
- `/metiers/product-owner`
- `/metiers/design-analyst`
- `/carriere`
- `/contact`
- `/articles`
- `/realisations`
- `/ux-conf`
- `/agences`
- `/agences/paris`
- `/agences/bordeaux`
- `/agences/lyon`
- `/agences/suisse`
- `/agences/luxembourg`
- `/agences/pays-bas`
- `/agences/belgique`
- `/formation`
- `/livre-blanc`
- `/mentions-legales`
- `/privacy`
- `/cookies`
