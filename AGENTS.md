# Agents and AI guidance

All agent definitions, skills, and project rules live under **`.claude/`**. Use that tree whether you
use Claude Code, Cursor, GitHub Copilot, or another assistant: open or reference the files directly,
and use each product's own mechanics for attaching repo context where needed.

- **Hard prerequisite before any repository edit:** Read [.claude/rules/general.md](.claude/rules/general.md)
  in full (including _Before editing repository files_), then every other relevant
  `.claude/rules/*.md` for the paths you will change, and any applicable `.claude/agents/*.md` or
  `.claude/skills/*/SKILL.md`. Do this **before** creating, modifying, or deleting tracked files.
- If the user is only adding instructions for the assistant, **do not edit the repository** unless
  they ask for a concrete change.
