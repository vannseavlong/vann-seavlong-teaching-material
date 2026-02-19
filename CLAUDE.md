# IB Teaching Material Platform

## Project Overview
A Next.js website for IB Mathematics teaching content, created by VANN Seavlong.
The platform serves as a comprehensive guide and resource hub for Grade 11 IB students choosing between and studying the AA and AI math pathways.

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (inline `@theme` tokens in `globals.css`)
- **Location:** `/home/longcelot/TeachingMaterial/IB/teaching-material-ib/`
- **Package manager:** npm
- **Build:** `npm run build` / **Dev:** `npm run dev`

## Project Structure

```
teaching-material-ib/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── globals.css         # Tailwind + custom theme tokens
│   │   ├── page.tsx            # Homepage (AA vs AI guide)
│   │   ├── aa/page.tsx         # AA Curriculum page
│   │   └── ai/page.tsx         # AI Curriculum page
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives
│   │   │   ├── Card.tsx        # Card, CardTitle, CardGrid
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── FAQ.tsx         # Expandable FAQ accordion
│   │   │   ├── Hero.tsx        # Hero banner
│   │   │   ├── HighlightBox.tsx # Colored callout box
│   │   │   ├── Section.tsx     # Section wrapper with label/title/intro
│   │   │   ├── Tag.tsx         # Colored pill/badge
│   │   │   └── TopicGrid.tsx   # Grid of topic items
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Top navigation (client component)
│   │   │   └── Footer.tsx      # Footer
│   │   ├── home/               # Homepage section components
│   │   │   ├── SectionWhatIsIBMath.tsx
│   │   │   ├── SectionTwoPathways.tsx
│   │   │   ├── SectionAADetail.tsx
│   │   │   ├── SectionAIDetail.tsx
│   │   │   ├── SectionSLvsHL.tsx
│   │   │   ├── SectionComparison.tsx
│   │   │   ├── SectionCareers.tsx
│   │   │   ├── SectionDecisionGuide.tsx
│   │   │   └── SectionFAQ.tsx
│   │   └── curriculum/
│   │       └── CurriculumPage.tsx  # Shared curriculum layout (AA & AI)
│   └── lib/
│       └── curriculum-data.ts  # Curriculum unit data + types
└── ...
```

## Design System

### Color Tokens (defined in globals.css)
| Token prefix | Purpose           | Example           |
|-------------|-------------------|-------------------|
| `aa-*`      | AA pathway (blue) | `bg-aa-primary`   |
| `ai-*`      | AI pathway (green)| `bg-ai-primary`   |
| `navy-*`    | Primary dark text | `text-navy-900`   |
| `warn-*`    | Warning (yellow)  | `bg-warn-bg`      |
| `danger-*`  | Danger (red)      | `border-danger-primary` |

### Component Variants
- **Card:** `variant="aa" | "ai" | "info" | "warn" | "default"`
- **HighlightBox:** `variant="blue" | "green" | "yellow" | "red"`
- **Tag:** `variant="blue" | "green" | "yellow" | "red"`

## Pages

### Homepage (`/`)
The "AA vs AI Decision Guide" — 9 sections converted from slide deck content:
1. What Is IB Math
2. Two Pathways
3. AA Detail
4. AI Detail
5. SL vs HL
6. Side-by-Side Comparison
7. Career Pathways
8. Decision Guide (flowchart)
9. FAQ

### AA Curriculum (`/aa`)
Full curriculum breakdown for Analysis & Approaches. Uses `CurriculumPage` component with `aaCurriculum` data. Includes 5 units, each with resource slots for:
- Lesson Notes
- Practice Problems
- Mock Test
- Exam Preparation
- Answer Sheet

### AI Curriculum (`/ai`)
Same structure as AA, using `aiCurriculum` data from `curriculum-data.ts`.

## How to Add Content

### Adding lesson/practice/test content to a unit:
1. Edit `src/lib/curriculum-data.ts`
2. Find the relevant unit in `aaCurriculum` or `aiCurriculum`
3. Update the `contents` array — change `status` to `"available"` and add `href` path
4. Create the corresponding page/component as needed

### Adding a new page (e.g., a lesson page):
- Create route under `src/app/aa/unit-1/lesson/page.tsx` (or similar)
- Use the shared `Section`, `Card`, `HighlightBox` components for consistency
- Update `curriculum-data.ts` to link to it

### Adding new units or sections:
- Add to the `units` array in `curriculum-data.ts`
- The `CurriculumPage` component will render them automatically

## Future Plans
- Break down each unit into individual lesson pages
- Add practice problem sets with answer sheets
- Add mock tests per unit and full mock exams
- Add exam preparation guides
- All content pages will follow the resource pattern: Lesson → Practice → Mock → Exam Prep → Answers

## Original Static File
The original single-file HTML version is kept at:
`/home/longcelot/TeachingMaterial/IB/ib-math-aa-vs-ai.html`
