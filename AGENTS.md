<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Architecture

- Content lives in src/content/data.ts and is only read through src/content/repository.ts — so a CMS/database can replace storage without UI changes.
- Ambition.serviceIds and Case.serviceIds are the single source of relations; reverse links are derived in the repository — avoids duplicated, drifting links.
- Search is pure, local and deterministic in src/lib/search.ts (no AI/external APIs in V1) — reproducible results, UI-independent.
- Service pages take an optional `from` ambition slug search param to drive the back button — survives refresh and direct URLs.
