# Contributing to SAMA CSF Assessment Tool

Thank you for helping improve this educational tool for the GCC cybersecurity community!

## How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes in the `docs/` folder
4. Test by opening `docs/index.html` in a browser
5. Commit: `git commit -m "feat: description"`
6. Push and open a Pull Request

## Coding Standards

- **Pure HTML/CSS/JS** — no build tools, no frameworks, no npm
- Maintain bilingual support (Arabic + English) for all user-facing text
- Use `data-en` and `data-ar` attributes for translatable elements
- Follow existing CSS variable naming conventions
- Test RTL layout when adding new UI components
- Ensure Chart.js visualizations render correctly in both themes

## SAMA CSF Data

- Framework data lives in `docs/app.js` under `frameworkData`
- Always reference the official SAMA CSF document for accuracy
- Maintain the 4-domain, 29-objective, 114-sub-control structure
- Preserve the 6-level maturity model (0-5)

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):
`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`

## Questions?

Open a [Discussion](https://github.com/SiteQ8/sama-csf-assessment/discussions) or reach out to [@SiteQ8](https://github.com/SiteQ8).
