- **UI Refactoring Strategy**: Split a large component (like `App.tsx`) by identifying its main sections and extracting them into individual files in `src/components/`.
- **Component Naming**: Used PascalCase for components per `AGENTS.md` (e.g., `Navbar.tsx`, `Hero.tsx`).
- **Imports Tracking**: Ensured that the newly extracted components retained required dependencies like `motion/react` and `lucide-react`.
- **Pre-commit Routine**: Remember to check `AGENTS.md` for conventions, commit atomic changes (like `refactor: extract UI sections to reusable components`), and fire webhook updates with plain text payload.
\n- Added `config.json` to handle site configurations like title, description, and community links.
\n- Integrated `config.json` into the React application, dynamically setting page title, description, and updating components like Hero, Community, Navbar, and Footer to use the configured data.
- **Astro Migration**: Migrated a Vite-React project to Astro.js by setting up `astro.config.mjs` with React and Tailwind integrations. Ported the root component to `src/pages/index.astro` and used `client:load` on interactive React components. Updated tsconfig.json properly to handle Astro setup alongside existing React code.
- **Navigation Redesign**: Changed navigation layout iteratively to match user preferences. Adopted a hybrid approach: sticky top navigation bar for desktop and a right-aligned slide-in half-sidebar for mobile.
- **Design System Application**: Enforced "Digital Verdance" design principles globally across components: sharp 0px border-radiuses, deep dark backgrounds (`#0e150f`, `#121212`), primary green `#4ade80` for accents, and the `Outfit` font for typography.
- **Post-submission Hotfix:** Refined CSS variables and overridden legacy Tailwind gradient classes (`from-primary-500 to-primary-600`) to strictly adhere to the Digital Verdance theme. Also ensured components properly use `#121212` backgrounds instead of previous configuration backgrounds that skewed colors.
- **Astro Integrations:** Installed and configured `astro-seo` to streamline Open Graph, Canonical, and Twitter meta tags inside `src/pages/index.astro`.
- **Astro Utilities:** Added `astro-robots-txt` and `@astrojs/sitemap` to auto-generate SEO files during build time. Configured via `astro.config.mjs` and required `site` url.
- **Analytics:** Added Umami script to the `<head>` in `index.astro` as per instructions.
- **Icons Migration:** Removed `lucide-react` dependency to reduce bundle footprint, replacing it with `@iconify/react` handling `lucide:*` strings, as `astro-icon` cannot be used directly inside interactive React components (`client:load`).
