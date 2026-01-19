---
type: wiki
title: Design intent: how to keep AI-written code aligned (without repeating yourself)
date: 2026-01-19
summary: AI can write code fast—but it drifts. Here’s a practical way to keep intent, rules, and architectural constraints attached to the code so both humans and AI can evolve it safely.
tags: [wiki, fundamentals, architecture, ai-coding, tooling]
---

AI can write a surprising amount of code today. The problem is that it can also confidently change the *shape* of your system: moving responsibilities, bypassing invariants, “helpfully” simplifying rules, or refactoring away constraints that were never written down in the code itself.

This is not (only) a model problem. It’s a **documentation topology** problem: your most important constraints usually live *outside* the code, while AI operates *inside* the code.

This page is written like an article because it’s meant to be shared. If you’re reading this from the Linggen wiki, it’s the framing we use internally for why design intent matters and how to encode it.

## 1) Background: vibe coding is becoming the industrial standard

There’s a new default workflow spreading fast: ask an assistant for a change, accept the diff, repeat. People call it **vibe coding**—not because the work is unserious, but because the constraint system is mostly implicit:

- you steer by conversation instead of specs
- you iterate by diffs instead of design docs
- you ship by momentum

Why it’s trending:

- **Time-to-first-working-version** is dramatically lower
- it makes solo builders feel like a small team
- it lowers the cost of experimentation (and the fear of “blank page”)
- it turns “implementation” into a cheap commodity

In practice, many “original engineers” are now evolving into **architects**:

- you define system boundaries and product intent
- AI (Cursor, Claude Code, etc.) writes a large portion of implementation
- the main work becomes *designing constraints* and *reviewing alignment*

### The pain: context limits + no long-term memory

Vibe coding tools are incredibly effective… until the project gets real.

Two pain points show up consistently:

- **Context limitation**: the assistant can’t see enough of your system at once, so it guesses. It might pass tests while subtly violating architecture or product rules.
- **Lack of long-term memory**: your “why” lives in a chat thread, a PR comment, or someone’s head. New sessions start cold. You repeat yourself.

This is where drift comes from: not because the AI is “bad,” but because the constraints are missing at the moment of change.

---

## 2) What is Linggen?

**Linggen is the long-term memory layer for a project**, anchored into the codebase.

Instead of treating “spec” as something separate from code, Linggen keeps your design intent:

- versioned in the repo (Markdown)
- attached to the exact code it constrains (anchors)
- available to both humans and AI during edits

The goal is simple:

> Keep AI implementation aligned to the design you intended, even as the code evolves.

---

## 3) How Linggen solves the “fast AI world” problem (so you can keep building)

AI tooling changes fast: new models, new workflows, new acronyms (MCP, agents, skills, etc.). Architects shouldn’t have to rewire their project every time the ecosystem shifts.

Linggen’s promise is:

- you focus on **what the system should become**
- Linggen focuses on keeping AI aligned to **what you meant**

This article focuses on two primitives:

- **Anchored memory**: “what the system must be”
- **Skills / policy**: “how we build here”

Linggen is not another chat UI. It’s a **spec-alignment layer** that turns “the vibe” into durable, versioned constraints inside your repo.

You still iterate fast. The difference is that the constraints are no longer trapped in chat history.

### Example A: anchored memory (design anchors)

Anchored memory is for **non-negotiables**: boundaries, invariants, product rules, and rationale.

Create a small Markdown spec in your repo (versioned, reviewable):

```text
.linggen/memory/auth-flow.md
```

Example content (keep it short; make it actionable):

```md
---
title: Auth flow
---

## Constraints (non‑negotiables)
- Permission checks happen in services, not controllers
- Controllers may validate input and map to service calls
- Token verification is centralized (no “quick verify” helpers)

## Why
We audit permissions frequently. Centralizing checks prevents edge-case bypasses.
```

Then add a tiny anchor near the code it constrains:

```text
// linggen memory: auth-flow.md | Authentication Logic Spec
```

The point is not “more docs.” The point is *placement*: when an AI (or a human) touches the code, the intent is already present.

What to put in an anchored memory doc:

- **Constraints**: what must remain true
- **Forbidden moves**: what must not happen (imports, bypasses, side effects)
- **Examples**: good vs bad changes
- **Why**: rationale (so future changes don’t delete the constraint by accident)

### Example B: skills & policy (teach “how we build here”)

Anchors capture *what the system must be*. Skills/policy capture *how your team builds* so every AI session doesn’t start from zero.

Examples of what belongs in skills/policy:

- code style and naming (what to prefer, what to avoid)
- error handling and logging conventions
- testing expectations (what gets tests, what doesn’t)
- architectural patterns (dependency direction, layering rules)

In practice: you write a small, readable “policy” file that your tools/assistant can apply consistently (no repeated prompting).

This is where an architect can be high-leverage: you can encode guardrails once, and let implementation scale without style drift.

Example content:

```md
---
title: Team policy (skills)
---

## Naming & structure
- Prefer explicit names over clever names
- Keep “glue code” (wiring) out of domain modules

## Errors & logging
- Use structured logs; include request_id and user_id when available
- No silent catch; convert errors to typed domain errors

## Testing
- Service-layer rules must have tests
- Controllers can be thin; test them only for routing/validation
```

#### One concrete layout (repo-first)

Here’s a simple structure that works well in real projects:

```text
.linggen/
  memory/
    auth-flow.md
    data-model.md
    boundaries.md
  skills/
    team-policy.md
    react-style.md
    backend-conventions.md
```

Then integrate those rules into your AI tools in whatever way they support. For example (adjust to your workflow):

```text
.claude/skills/
  team-policy.md
  backend-conventions.md

.cursor/rules/
  team-policy.md
  react-style.md
```

The key is not the folder name. The key is the **source of truth lives in the repo**, and the assistant reads it consistently.

### The mapping (pain → primitive)

- **Spec evaporation** → anchored memory (the rules live in the repo)
- **Architecture drift** → anchored memory (boundaries and invariants become visible)
- **Style drift** → skills/policy (consistent conventions across sessions)
- **Context thrash** → skills/policy (stop re-explaining basics)
- **Onboarding tax** → anchored memory + skills/policy (new humans and new AI sessions start “warm”)

---

## 4) Conclusion

Vibe coding makes implementation cheap. Architecture and product intent become the scarce resource.

Linggen is for the engineer-who-became-architect: define the intent once, pin it close to the code (anchored memory), encode your team’s “how” (skills/policy), and let AI implement without silently rewriting your design.


