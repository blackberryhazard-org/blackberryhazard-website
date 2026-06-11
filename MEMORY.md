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

## Digital Verdance Design System
- The UI adheres strictly to the "Digital Verdance" design system from DESIGN.md.
- Organic shapes are strictly prohibited: All components MUST have sharp edges with exactly `0px` border-radius.
- Semantic tokens defined in `src/index.css` (`var(--color-surface)`, `var(--color-primary-container)`, etc.) MUST be used instead of hardcoded hex colors.
- Shadows and drop-shadows are largely avoided unless explicitly permitted for real-time active indicators.
- Base background and component cards rely on layered surface tokens (e.g., `surface`, `surface-container`, `surface-container-high`).

## Config Updates
- Links and navigation metadata are controlled within `config.json`.
- The navbar dynamically resolves link names and assigns generic icons, but overrides like `lucide:rocket` (for Space) and `lucide:building-2` (for Organization) must be added directly into the `getIconForLink` switch function in `src/components/Navbar.tsx`.

## Pages & Routing
- The project runs on Astro, so top-level pages correspond to `.astro` files inside `src/pages`.
- For React integration, interactive components inside Astro pages require the `client:load` or `client:idle` directive.
