import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 28: Trigonometry in context (AI Unit 3): elevation, depression and bearings.
const paper: AiReviewPaper = {
  slug: "trig-context",
  session: 28,
  topic: "Trigonometry in Context",
  title: "Trigonometry in Context",
  subtitle: "Summative Revision, Session 28",
  minutes: 32,
  lessonAnchor: "trig-context",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      instruction: "In this question, set the GDC to degree mode and give answers correct to three significant figures.",
      ctx: [m`A surveyor stands \(45\ \text{m}\) from the base of a tower. The angle of elevation of the top of the tower from her eyes is \(32^{\circ}\). Her eyes are \(1.6\ \text{m}\) above the ground.`],
      parts: [
        part("a", 2, m`Find the height of the top of the tower above her eye level.`, [m`\[\tan 32^{\circ} = \dfrac{h}{45} \Rightarrow h = 45\tan 32^{\circ} = 28.1\ \text{m}\]`], "28.1 m", "Marks: (M1) tan 32 = h/45, (A1) 28.1."),
        part("b", 1, m`Find the height of the tower.`, [m`\[28.12 + 1.6 = 29.7\ \text{m}\]`], "29.7 m", "Marks: (A1) 29.7."),
        part("c", 2, m`Find the distance from her eyes to the top of the tower.`, [m`\[\cos 32^{\circ} = \dfrac{45}{d} \Rightarrow d = \dfrac{45}{\cos 32^{\circ}} = 53.1\ \text{m}\]`], "53.1 m", "Marks: (M1) cos 32 = 45/d, (A1) 53.1."),
      ],
    },
    {
      n: 2, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      ctx: [m`From the top of a \(60\ \text{m}\) cliff, the angle of depression of a boat is \(18^{\circ}\). The boat is on a bearing of \(065^{\circ}\) from the foot of the cliff.`],
      parts: [
        part("a", 3, m`Find the horizontal distance from the foot of the cliff to the boat.`, [m`\[\text{angle at the boat} = 18^{\circ}\ \text{(alternate angles)},\quad \tan 18^{\circ} = \dfrac{60}{x}\]`, m`\[x = \dfrac{60}{\tan 18^{\circ}} = 185\ \text{m}\]`], "185 m", "Marks: (R1) angle of depression equals angle at the boat, (M1) tan 18 = 60/x, (A1) 185."),
        part("b", 1, m`Write down the bearing of the foot of the cliff from the boat.`, [m`\[065^{\circ} + 180^{\circ} = 245^{\circ}\]`], "245°", "Marks: (A1) 245."),
      ],
    },
    {
      n: 3, section: "B",
      instruction: "In this question, give answers correct to three significant figures unless stated.",
      ctx: [m`Buoys \(A\), \(B\) and \(C\) mark a race course. \(B\) is \(8\ \text{km}\) from \(A\) on a bearing of \(040^{\circ}\). \(C\) is \(11\ \text{km}\) from \(B\) on a bearing of \(130^{\circ}\).`],
      parts: [
        part("a", 3, m`Show that angle \(ABC = 90^{\circ}\).`, [m`\[\text{bearing of } A \text{ from } B = 040^{\circ} + 180^{\circ} = 220^{\circ}\]`, m`\[\text{angle } ABC = 220^{\circ} - 130^{\circ} = 90^{\circ}\]`], "Shown", "Marks: (M1) back bearing 220, (M1) difference of bearings, (AG) 90."),
        part("b", 2, m`Find the distance \(AC\).`, [m`\[AC = \sqrt{8^2 + 11^2} = \sqrt{185} = 13.6\ \text{km}\]`], "13.6 km", "Marks: (M1) Pythagoras, (A1) 13.6."),
        part("c", 2, m`Find angle \(BAC\).`, [m`\[\tan(BAC) = \dfrac{11}{8} \Rightarrow BAC = 54.0^{\circ}\]`], "54.0°", "Marks: (M1) tan = 11/8, (A1) 54.0."),
        part("d", 2, m`Find the bearing of \(C\) from \(A\), to the nearest degree.`, [m`\[040^{\circ} + 54.0^{\circ} = 094^{\circ}\]`], "094°", "Marks: (M1) add the angle to bearing of B, (A1) 094."),
        part("e", 2, m`Find the bearing of \(A\) from \(C\), to the nearest degree.`, [m`\[094^{\circ} + 180^{\circ} = 274^{\circ}\]`], "274°", "Marks: (M1) back bearing, (A1) 274."),
        part("f", 2, m`Find the area of triangle \(ABC\).`, [m`\[A = \tfrac12(8)(11) = 44\ \text{km}^2\]`], "44 km²", "Marks: (M1) 1/2 ab sin C with C = 90, (A1) 44."),
        part("g", 2, m`A boat travels directly from \(A\) to \(C\) at \(25\ \text{km/h}\). Find the time taken, in minutes.`, [m`\[t = \dfrac{13.60}{25} = 0.544\ \text{h} = 32.6\ \text{minutes}\]`], "32.6 minutes", "Marks: (M1) distance over speed, (A1) 32.6."),
      ],
    },
  ],
};

export default paper;
