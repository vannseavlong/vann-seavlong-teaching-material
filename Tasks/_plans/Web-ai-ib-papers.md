# AI SL revision papers to IB standard

Updated: 2026-10-19. Reference: owner's sample IB questions (car loan 17 marks, savings and depreciation 6, monthly deposits 5, bridge percentage error 5, tile path 19, bouncing ball 7) and the AI SL formula booklet (see CLAUDE.md "Notation").

## Structure
- **Section A**: short and medium questions, 4 to 7 marks, 2 to 4 parts each. Set `section: "A"`.
- **Section B**: one extended question, 15 to 19 marks, set in one story with sub-parts (a)(i), (a)(ii), and a result carried forward (loan, then comparison, then depreciation). Set `section: "B"`.
- Question numbers run across sections (1, 2, 3 ...).
- Paper total about 0.9 marks per minute (IB: 80 marks in 90 minutes). Targets: arithmetic 40, geometric 45, financial 45, rounding 31, bounds 40, percentage-error 36, mock 45. Keep `minutes`, `slug`, `session`, `lessonAnchor`.

## Question style
- Real contexts with names, currency and units. No bare "find u_20" drills; context first, then the maths.
- IB command terms only: Find, Calculate, Write down, State, Show that (answer given, full method required), Justify, Determine, Hence, Estimate, Interpret.
- Accuracy line: use `instruction` ("In this question, give all answers to two decimal places.") or state it in the part ("Give your answer correct to three significant figures."). Default IB rule: 3 s.f. unless told otherwise; money to 2 d.p.
- Use `table` when data is given as a table (values of a sequence, costs). Use the form a x 10^k where it fits.
- Mix topics the way IB does (financial with depreciation, sequences with rounding, bounds with percentage error), but keep the paper's own topic dominant.
- Mark counts must match the steps a student writes (1 mark per method step or answer).
- Do NOT copy the sample questions or their numbers (IB copyright). Copy only the structure and style.

## Solutions
- Worked steps, GDC entries where used (TVM: N, I%, PV, PMT, FV, P/Y, C/Y; table or solver for sequences).
- `note` ends with a compact mark scheme line, e.g. "Marks: (M1) formula, (M1) substitution, (A1) 1090."
- Verify every answer numerically (node) before finishing.

## Content rules
AGENTS.md: no em-dashes, no filler. Booklet symbols: u_n, S_n, r, d, FV, PV, k, n, epsilon, v_A, v_E.
