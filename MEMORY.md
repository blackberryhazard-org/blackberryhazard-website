- **UI Refactoring Strategy**: Split a large component (like `App.tsx`) by identifying its main sections and extracting them into individual files in `src/components/`.
- **Component Naming**: Used PascalCase for components per `AGENTS.md` (e.g., `Navbar.tsx`, `Hero.tsx`).
- **Imports Tracking**: Ensured that the newly extracted components retained required dependencies like `motion/react` and `lucide-react`.
- **Pre-commit Routine**: Remember to check `AGENTS.md` for conventions, commit atomic changes (like `refactor: extract UI sections to reusable components`), and fire webhook updates with plain text payload.
\n- Added `config.json` to handle site configurations like title, description, and community links.
\n- Integrated `config.json` into the React application, dynamically setting page title, description, and updating components like Hero, Community, Navbar, and Footer to use the configured data.
- **Astro Migration**: Migrated a Vite-React project to Astro.js by setting up `astro.config.mjs` with React and Tailwind integrations. Ported the root component to `src/pages/index.astro` and used `client:load` on interactive React components. Updated tsconfig.json properly to handle Astro setup alongside existing React code.
* Implemented `astro-icon` globally and configured `@iconify/react` for usage in `.tsx` files inside Astro projects.
* Replaced manual SVGs with icon packs to keep code cleaner and optimize asset loading.
* Use `Footer.astro` for static non-interactive layouts to directly consume `<Icon name="icon-set:icon" />` from `astro-icon/components`. For React components (`.tsx`), `astro-icon` direct usage won't work easily unless client-side so we use `@iconify/react` instead.
