# TI-84 Plus CE steps in AI Unit 1 Financial Mathematics

- **Owner:** SNLRLONG
- **Started / updated:** 2026-10-19 / 2026-10-19
- **Tier:** T1 · content edit in the finance lesson section, one new helper added to the lesson-local helpers file, one optional field on the finance practice data; no new route
- **Depends on:** none
- **Touches:** src/app/ai/unit-1/lesson/_sections/FinancialMath.tsx, src/app/ai/unit-1/lesson/_sections/helpers.tsx (add only), src/app/ai/unit-1/practice/[id]/PracticeClient.tsx

## Goal
The student (AI SL, TI-84 Plus CE) is weak at choosing the right method in finance. Add (1) a "which method" clue table, (2) a TI-84 Plus CE TVM Solver how-to, (3) key-by-key calculator steps with the TVM screen entries in every worked example and practice solution, (4) a method-choice practice, (5) calculator steps in the finance practice model answers.

## Done when
- [x] Every finance worked example and practice solution has TI-84 Plus CE steps where a calculator is used
- [x] Numbers re-checked; no em-dash added in touched files
- [x] npx tsc --noEmit and eslint on touched files pass

## Follow-up (2026-10-19)
Extended to the other Unit 1 lesson sections: Percentages, Arithmetic, Geometric, Rounding, Bounds, Percentage Error (TI-84 toolkit block + steps in key examples and practice answers). Touches also: those six files in src/app/ai/unit-1/lesson/_sections/.

## Notes
- G2: tsc passes; eslint passes on lesson files. PracticeClient.tsx has one existing react-hooks/set-state-in-effect error (line ~443, not part of this change).
- Pages /ai/unit-1/lesson and /ai/unit-1/practice/2 return 200 on the dev server; not checked visually and no calculator keystrokes were run on a real TI-84.
