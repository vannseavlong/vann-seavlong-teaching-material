import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, HLTag, LessonSection, Diagram } from "./helpers";

// ─── HL Topic 1. Graph theory ─────────────────────────────────────────────────

/** Weighted graph on A..E. Edges: AB 4, AC 3, BC 2, BD 7, CD 5, CE 6, DE 3. */
function WeightedGraphDiagram() {
  const P: Record<string, [number, number]> = { A: [40, 80], B: [110, 25], C: [110, 135], D: [200, 25], E: [200, 135] };
  const edges: [string, string, number, number, number][] = [
    ["A", "B", 4, -8, -4], ["A", "C", 3, -8, 10], ["B", "C", 2, 8, 0], ["B", "D", 7, 0, -8],
    ["C", "D", 5, 8, 0], ["C", "E", 6, 0, 14], ["D", "E", 3, 8, 0],
  ];
  return (
    <Diagram caption="Weighted graph used in the examples. Odd vertices: B and D (degree 3). A, C and E are even.">
      <svg viewBox="0 0 260 165" width="100%" style={{ maxWidth: 380 }} role="img" aria-label="Weighted graph with five vertices">
        {edges.map(([u, v, w, dx, dy]) => (
          <g key={u + v}>
            <line x1={P[u][0]} y1={P[u][1]} x2={P[v][0]} y2={P[v][1]} stroke="#64748b" strokeWidth={1.8} />
            <text x={(P[u][0] + P[v][0]) / 2 + dx} y={(P[u][1] + P[v][1]) / 2 + dy} fontSize={12} fill="#dc2626" textAnchor="middle">{w}</text>
          </g>
        ))}
        {Object.entries(P).map(([name, [x, y]]) => (
          <g key={name}>
            <circle cx={x} cy={y} r={13} fill="#fff" stroke="#2563eb" strokeWidth={2} />
            <text x={x} y={y + 4} fontSize={13} textAnchor="middle" fill="#0f172a" fontWeight={700}>{name}</text>
          </g>
        ))}
      </svg>
    </Diagram>
  );
}

export default function GraphTheorySection() {
  return (
    <LessonSection
      id="graph-theory"
      label="HL Topic 1"
      title="Graph Theory"
      tag={<HLTag />}
      intro="Networks of vertices and edges model roads, pipes and routes. Use degrees to test for Euler routes, adjacency matrices to count walks, and the named algorithms for shortest and cheapest routes."
    >
      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-1">HL only</p>
        <p className="text-slate-500 text-sm">
          Topic list taken from public syllabus summaries, not the IB guide
          itself. Check against your copy of the guide.
        </p>
      </HighlightBox>

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          The <strong>degree</strong> of a vertex is the number of edge-ends
          at it. A route that uses every edge exactly once exists only when
          at most two vertices have odd degree. A <strong>tree</strong> has no
          cycles, and a <strong>minimum spanning tree</strong> joins all
          vertices with the least total weight.
        </p>
      </HighlightBox>

      <FormulaBox title="Degrees and Euler routes">
        <FormulaRow label="Handshake lemma" math="\sum \deg(v) = 2 \times (\text{number of edges})" />
        <FormulaRow label="Eulerian circuit" math="\text{connected, all degrees even}" />
        <FormulaRow label="Eulerian trail" math="\text{connected, exactly 2 odd vertices (start and end there)}" />
        <FormulaRow label="Tree on n vertices" math="n - 1 \text{ edges, no cycles}" />
      </FormulaBox>

      <FormulaBox title="Adjacency matrix">
        <FormulaRow label="Entry a_ij" math="\text{number of edges between vertex } i \text{ and vertex } j" />
        <FormulaRow label="Walks of length n" math="(\mathbf{A}^n)_{ij} = \text{number of walks of length } n \text{ from } i \text{ to } j" />
      </FormulaBox>

      <FormulaBox title="Algorithms">
        <FormulaRow label="Kruskal (minimum spanning tree)" math="\text{sort edges; add the smallest that makes no cycle}" />
        <FormulaRow label="Prim (minimum spanning tree)" math="\text{grow from one vertex; add the cheapest edge to a new vertex}" />
        <FormulaRow label="Chinese postman (up to 4 odd vertices)" math="\text{total weight} + \text{shortest repeated paths between odd vertices}" />
        <FormulaRow label="Travelling salesman, upper bound" math="\text{nearest neighbour tour}" />
        <FormulaRow label="Travelling salesman, lower bound" math="\text{deleted vertex: MST of the rest} + \text{2 cheapest edges at the removed vertex}" />
      </FormulaBox>

      <WeightedGraphDiagram />

      <WorkedExample title="For the graph above, use degrees to decide whether an Eulerian circuit or trail exists. Then find the minimum spanning tree.">
        <StepBox n={1}>
          Degrees: A 2, B 3, C 4, D 3, E 2. Sum <InlineMath math="= 14 = 2 \times 7" /> edges, so the count is consistent.
        </StepBox>
        <StepBox n={2}>
          Two odd vertices (B and D): an Eulerian <strong>trail</strong> exists from B to D, but no circuit.
        </StepBox>
        <StepBox n={3}>
          Kruskal: sort BC 2, AC 3, DE 3, AB 4, CD 5, CE 6, BD 7. Add BC, AC, DE. Skip AB (makes a cycle A, B, C). Add CD.
        </StepBox>
        <StepBox n={4}>
          Tree edges BC, AC, DE, CD (4 edges for 5 vertices). Weight <InlineMath math="2 + 3 + 3 + 5 = \boxed{13}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Chinese postman: find the shortest route that uses every edge of the graph and returns to the start.">
        <StepBox n={1}>
          Total weight of all edges: <InlineMath math="4 + 3 + 2 + 7 + 5 + 6 + 3 = 30" />.
        </StepBox>
        <StepBox n={2}>
          Odd vertices B and D must be paired. The shortest path B to D is BD (7) or B, C, D (2 + 5 = 7). Repeat 7.
        </StepBox>
        <StepBox n={3}>
          Shortest route <InlineMath math="30 + 7 = \boxed{37}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Adjacency matrix: for the same graph (ignore weights), find the number of walks of length 2 and length 3 from A to D.">
        <StepBox n={1}>
          Enter the 5 by 5 adjacency matrix with order A, B, C, D, E. Compute <InlineMath math="\mathbf{A}^2" /> and <InlineMath math="\mathbf{A}^3" /> on the GDC.
        </StepBox>
        <StepBox n={2}>
          Entry A to D: <InlineMath math="(\mathbf{A}^2)_{AD} = \boxed{2}" /> (A, B, D and A, C, D) and <InlineMath math="(\mathbf{A}^3)_{AD} = \boxed{3}" /> (A, B, C, D; A, C, B, D; A, C, E, D).
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Travelling salesman: distances AB 12, AC 10, AD 19, BC 8, BD 11, CD 9. Find an upper and a lower bound for the shortest tour visiting all four towns.">
        <StepBox n={1}>
          Nearest neighbour from A: A to C (10), C to B (8), B to D (11), D to A (19). Upper bound <InlineMath math="10 + 8 + 11 + 19 = \boxed{48}" />.
        </StepBox>
        <StepBox n={2}>
          Delete A: MST of B, C, D is BC 8 + CD 9 = 17. Two cheapest edges at A: AC 10 and AB 12. Lower bound <InlineMath math="17 + 22 = 39" />.
        </StepBox>
        <StepBox n={3}>
          Deleting D gives <InlineMath math="18 + 20 = 38" />. Take the larger lower bound: <InlineMath math="\boxed{39 \le \text{shortest tour} \le 48}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A graph has 6 vertices with degrees 3, 3, 2, 2, 4, 2. (a) How many
            edges does it have? (b) Does a connected graph with these degrees
            have an Eulerian circuit or trail?
          </p>
        }
        answer={
          <>
            <p>(a) Sum of degrees <InlineMath math="= 16" />, so <InlineMath math="16 \div 2 = 8" /> edges.</p>
            <p>(b) Two odd vertices (the two of degree 3): an Eulerian trail exists, but not a circuit.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            Four villages P, Q, R, S need a cable network. Costs (thousand
            dollars): PQ 5, PR 8, PS 4, QR 6, QS 7, RS 3. Use Kruskal&apos;s
            algorithm to find the cheapest network that links all four.
          </p>
        }
        answer={
          <>
            <p>Sort: RS 3, PS 4, PQ 5, QR 6, QS 7, PR 8.</p>
            <p>Add RS, PS, PQ. QR would make a cycle, so stop at 3 edges for 4 villages.</p>
            <p>Cheapest cost <InlineMath math="3 + 4 + 5 = 12" /> thousand dollars.</p>
          </>
        }
      />
    </LessonSection>
  );
}
