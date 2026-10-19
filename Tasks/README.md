# Tasks

One file per task, moved between folders as it progresses. The folder is the status.

| Folder | Meaning | Move here when |
|---|---|---|
| `1-backlog/` | Idea or later; not scheduled | Captured, no decision yet |
| `2-todo/` | Decided, ready to start | Scope and owner agreed |
| `3-in-progress/` | Being built on `dev` | Work started and claimed |
| `4-testing/` | Built and committed; waiting for the user to test and give feedback | Agent checks done, code committed on `dev` |
| `5-done/` | Pushed to `dev`, changelog written | The user approved after testing (owner merges to `main`) |
| `6-deploy/` | Released | Live in production |

## Planning
`Tasks/_plans/<Prefix>-<feature>.md` holds the plan for a feature (flow, scope, task breakdown, open questions). Written by the `task-planner` skill before tasks go to `2-todo/`.

## File name
`<Prefix>-<short-name>.md`, prefixes: `Web`. Copy `_TEMPLATE.md`.

## Git rules
- Work directly on `dev`. No worktrees, no feature branches, no PRs.
- When the task is done: commit with specific paths, `git push origin dev`, move the task file to `5-done/`. The owner merges `dev` into `main` and deploys; never push or merge to `main`.
- The repo tracks `Tasks/`, `Docs/`, `CLAUDE.md`, `AGENTS.md`, `CHANGELOG.md` along with the code. Commit when a task is done.
- Two tasks must not touch the same files; note overlaps in the task file.

## Changelog (one file at the root: `CHANGELOG.md`)
Tasks live at the root, so the changelog does too. **Do not add a `CHANGELOG.md` inside any sub-repo.** On each push to `dev`, add one entry at the top, tagged with the project:

```
## 2026-01-20 · [Web] feat(export): acquisition Excel report
- Owner: <name>
- Task: Tasks/5-done/Web-acquisition-export.md
- Commit: abc1234 (dev)
- What changed: <1-3 bullets, user-visible>
- Needs: <backend / config / migration, or "none">
```

Tags: `[Web]`, plus `[Cross]` for work across repos.

## Working in parallel (one agent, one task)

**Claim.** An agent works on exactly one task file. It writes `Claimed by: <session/agent name>, <date>` in that file before editing code, and clears it when it stops. If a task is already claimed, do not work on it; ask the user.

**Stay in your lane.**
- Edit code only inside the paths in your task's `Touches`. Never switch branches.
- Never run `git add -A`, `git commit -a`, `git stash`, `git reset --hard` or `git checkout .` in a shared place. In the root repo, `git add <specific paths>` only.
- Need a change outside your lane (another task's files, a shared component, shared docs)? Do not make it. Leave a note (below) and carry on with your own scope.

**Shared files** (`AGENTS.md`, `CLAUDE.md`, `Docs/**`): re-read right before editing, change only your own lines with a small edit, never rewrite the whole file.

**Talking to each other: `Tasks/_inbox/`.** One small file per message, so nothing conflicts:

`Tasks/_inbox/<to-task>/<YYYY-MM-DD>-from-<task>-<topic>.md`

```
From: Web-checkout   To: Web-export   Date: 2026-01-16
Type: heads-up | question | blocker | done
Message: <2-5 lines: what you need or changed, and which files>
Needs reply: yes/no
```

- At the start of work, read `Tasks/_inbox/<your-task>/`. When handled, move the note to `Tasks/_inbox/_read/` (do not delete).
- Use `blocker` when your task cannot continue without the other. The user decides who goes first.
- Decisions that outlive the session belong in the task file or the docs, not only in the inbox.

**Sub-agents.** When an agent spawns sub-agents, each gets: its task file path, and the "Stay in your lane" rules above. Sub-agents report in their final message, and write an inbox note when a finding concerns another task. Only one agent writes to a given file at a time.
