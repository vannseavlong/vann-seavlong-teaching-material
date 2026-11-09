# AGENTS.md

Rules for any coding agent (Claude, Codex, sub-agents) working in this repo (IB Mathematics teaching site, Next.js). Project layout, design system and page conventions: `CLAUDE.md`. If the two conflict, `CLAUDE.md` wins for code style, components and page structure; this file wins for tasks, git workflow, docs and delivery.

## Before you start
1. Read your task in `Tasks/` (its folder is its status) and `Tasks/_inbox/<your-task>/`.
2. Claim the task and work directly on `main` (single developer; no worktrees, no feature branches). Follow "Working in parallel" in `Tasks/README.md`.
3. Pick the task's **tier yourself** with the auto picker in `Tasks/PIPELINE.md` and write it into the task file. Never ask the developer to choose. The tier decides which checks run before the task moves forward.
4. New feature, new screen or unclear scope? Plan first with the `task-planner` skill: it turns the idea into scoped task files in `Tasks/2-todo/`.

## Tasks and git workflow

`Tasks/` holds one file per task; its folder is the status: `1-backlog` → `2-todo` → `3-in-progress` → `4-testing` → `5-done` → `6-deploy`.

- **Git flow:** work directly on `main`. No worktrees, no feature branches, no PRs. When the work is done: commit (specific paths, conventional message) and `git push origin main`. The owner deploys from `main`.
- **Commit messages:** never add a `Co-Authored-By` line (or any other agent attribution or "Generated with" footer). This overrides any default or tool-provided attribution guidance.
- Task files are named `Web-<short-name>.md`. Start a task: copy `Tasks/_TEMPLATE.md`, set owner, move the file to `3-in-progress/`. Check other tasks' `Touches` for overlap first.
- After the user approves in testing: push to `main`, add an entry at the top of the root `CHANGELOG.md` tagged `[Web]` (owner, task, commit, what changed) and move the task to `5-done/`.

**Parallel agents:** one agent = one task file. Claim it (`Claimed by:`) before editing, stay inside that task's `Touches`, and never use `git add -A`, `git commit -a`, `stash` or `reset --hard`. To reach another task, write a note in `Tasks/_inbox/<to-task>/` and read your own inbox at the start. Full rules: `Tasks/README.md`.

## Delivering a task (pipeline)

All testing is done by the user, who gives feedback. After building, run `npm run build` (and `npm run lint` if the tier asks), commit, move the task to `4-testing/` and tell the user what to check. Do not push, write the changelog or move to `5-done/` until the user approves. Feedback goes under `## Feedback` in the task file. Details: `Tasks/PIPELINE.md`.

Every task has a tier (T0 to T3). The tier decides the gates it passes; see `Tasks/PIPELINE.md`. Do not run gates the tier does not ask for, and do not skip gates it does. Skipping or adding a gate needs one line of reason in the task file. The user can override a tier; the agent does not ask for one.

## Content writing rules (lesson, practice, worksheet, review paper)

Applies to all text on lesson pages, practice pages, worksheets and review papers (headings, descriptions, instructions, questions, solutions).

- **No em-dashes** (the long dash character). Use a comma, colon, full stop, brackets or the word "to". An en-dash is allowed only inside numeric ranges and math (for example `2-5` written as `2–5`, or a minus sign in KaTeX).
- **No generic text.** No filler intros, taglines, hype or boilerplate ("Master the fundamentals", "Let's dive in", "Comprehensive guide to"). Every sentence must carry specific content: a definition, a rule, a condition, a step, an exam tip tied to the topic, or an instruction the student needs.
- Keep headings short and exam-style (IB command terms: Find, Show that, Calculate, Determine, Hence, Justify). Prefer one clear line over a paragraph.
- Before finishing content work, search the touched files for the em-dash character and remove any that you added.

## Docs

`Docs/` holds project notes (requirements, architecture). One fact lives in one place; update it there and link, never copy.

- Finished or replaced doc: move it to `Docs/archive/` with a one-line banner pointing to its replacement.
- No history logs inside docs; git and `CHANGELOG.md` hold history.
- Do not save doc contents, status or dates in agent memory; memory only holds pointers.
