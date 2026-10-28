import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 30: Graph theory (AI Unit 3, HL).
const paper: AiReviewPaper = {
  slug: "graph-theory",
  session: 30,
  topic: "Graph Theory (HL)",
  title: "Graph Theory",
  subtitle: "Summative Revision, Session 30 (HL)",
  minutes: 35,
  lessonAnchor: "graph-theory",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`A connected graph has five vertices \(P, Q, R, S, T\) with degrees \(4, 3, 3, 2, 2\).`],
      parts: [
        part("a", 2, m`Find the number of edges.`, [m`\[\sum \deg(v) = 4+3+3+2+2 = 14,\quad \text{edges} = 14 \div 2 = 7\]`], "7", "Marks: (M1) sum of degrees, (A1) 7."),
        part("b", 2, m`State whether the graph has an Eulerian circuit, an Eulerian trail only, or neither. Give a reason.`, [m`\[\text{two odd vertices } (Q \text{ and } R):\ \text{a trail exists from } Q \text{ to } R,\ \text{but not a circuit}\]`], "Eulerian trail only: exactly two odd vertices", "Marks: (A1) trail only, (R1) exactly two odd vertices."),
        part("c", 1, m`A tree has five vertices. Write down its number of edges.`, [m`\[n - 1 = 4\]`], "4", "Marks: (A1) 4."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`Five towns \(A\) to \(E\) are to be linked by cables. The cost of each possible link, in thousand dollars, is: \(AB\) 9, \(AC\) 6, \(AD\) 12, \(BC\) 5, \(BD\) 8, \(CD\) 7, \(CE\) 10, \(DE\) 4.`],
      parts: [
        part("a", 3, m`Use Kruskal's algorithm to list, in order, the links that are chosen.`, [m`\[\text{sorted: } DE\,4,\ BC\,5,\ AC\,6,\ CD\,7,\ BD\,8,\ AB\,9,\ CE\,10,\ AD\,12\]`, m`\[\text{add } DE,\ BC,\ AC,\ CD;\ \text{ the next edges would make cycles, and 4 edges join 5 towns}\]`], "DE, BC, AC, CD", "Marks: (M1) edges sorted by weight, (M1) skip edges that make a cycle, (A1) DE, BC, AC, CD."),
        part("b", 1, m`Find the minimum total cost.`, [m`\[4 + 5 + 6 + 7 = 22\]`], "22 thousand dollars", "Marks: (A1) 22."),
        part("c", 3, m`Use Prim's algorithm starting at \(A\) and show that it gives the same total cost.`, [m`\[A:\ AC\,6;\quad \{A,C\}:\ BC\,5;\quad \{A,B,C\}:\ CD\,7;\quad \{A,B,C,D\}:\ DE\,4\]`, m`\[6 + 5 + 7 + 4 = 22\]`], "AC, BC, CD, DE: 22", "Marks: (M1) cheapest edge to a new vertex each time, (A1) AC, BC, CD, DE, (A1) 22."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`An inspector must check every road in a town. The roads, with lengths in kilometres, are: \(AB\) 4, \(BC\) 6, \(CD\) 5, \(DA\) 7, \(AC\) 9.`],
      parts: [
        part("a", 2, m`Show that \(A\) and \(C\) are the only vertices of odd degree.`, [m`\[\deg A = 3\ (AB, DA, AC),\quad \deg C = 3\ (BC, CD, AC),\quad \deg B = 2,\ \deg D = 2\]`], "A and C have degree 3; B and D have degree 2", "Marks: (M1) count edges at each vertex, (A1) degrees 3, 2, 3, 2."),
        part("b", 1, m`Find the total length of all the roads.`, [m`\[4 + 6 + 5 + 7 + 9 = 31\]`], "31 km", "Marks: (A1) 31."),
        part("c", 2, m`Find the shortest path from \(A\) to \(C\).`, [m`\[AC = 9,\quad A\text{-}B\text{-}C = 10,\quad A\text{-}D\text{-}C = 12\]`], "AC, 9 km", "Marks: (M1) compare paths, (A1) AC = 9."),
        part("d", 2, m`Find the length of the shortest route that uses every road at least once and returns to \(A\).`, [m`\[31 + 9 = 40\]`], "40 km", "Marks: (M1) total plus repeated path, (A1) 40."),
        part("e", 2, m`The inspector may now finish at \(C\) instead of returning to \(A\). Find the shortest length and give a reason.`, [m`\[\text{exactly two odd vertices, so an Eulerian trail from } A \text{ to } C \text{ exists: no road is repeated}\]`], "31 km: Eulerian trail from A to C", "Marks: (R1) trail from A to C exists, (A1) 31."),
      ],
    },
    {
      n: 4, section: "B",
      ctx: [m`A salesperson visits towns \(P, Q, R, S\) and returns to the start. Distances in kilometres: \(PQ\) 14, \(PR\) 9, \(PS\) 16, \(QR\) 7, \(QS\) 10, \(RS\) 8.`],
      parts: [
        part("a", 3, m`Use the nearest neighbour algorithm starting at \(P\) to find an upper bound for the shortest tour.`, [m`\[P \to R\ (9),\quad R \to Q\ (7),\quad Q \to S\ (10),\quad S \to P\ (16)\]`, m`\[9 + 7 + 10 + 16 = 42\]`], "42 km", "Marks: (M1) nearest unvisited town each time, (A1) tour P, R, Q, S, P, (A1) 42."),
        part("b", 3, m`Delete \(R\) and use the remaining towns to find a lower bound.`, [m`\[\text{MST of } P, Q, S:\ QS\,10 + PQ\,14 = 24\]`, m`\[\text{two cheapest edges at } R:\ QR\,7 + RS\,8 = 15,\quad 24 + 15 = 39\]`], "39 km", "Marks: (M1) minimum spanning tree of P, Q, S, (M1) two cheapest edges at R, (A1) 39."),
        part("c", 1, m`Write down an inequality for the length \(L\) of the shortest tour.`, [m`\[39 \le L \le 42\]`], "39 <= L <= 42", "Marks: (A1) 39 <= L <= 42."),
        part("d", 3, m`There are three different tours. Find the length of each and hence the shortest tour.`, [m`\[PQRS:\ 14+7+8+16 = 45\]`, m`\[PQSR:\ 14+10+8+9 = 41\]`, m`\[PRQS:\ 9+7+10+16 = 42\quad \Rightarrow\ \text{shortest } 41\]`], "41 km (P, Q, S, R, P)", "Marks: (M1) tours listed, (A1) 45, 41, 42, (A1) shortest 41."),
      ],
    },
    {
      n: 5, section: "B",
      ctx: [m`A graph has four vertices \(1, 2, 3, 4\) with adjacency matrix \[\mathbf{A} = \begin{pmatrix}0&1&1&0\\1&0&1&1\\1&1&0&1\\0&1&1&0\end{pmatrix}\]`],
      parts: [
        part("a", 2, m`Find the number of edges.`, [m`\[\text{row sums } 2, 3, 3, 2 = 10,\quad 10 \div 2 = 5\]`], "5", "Marks: (M1) sum of the entries or degrees, (A1) 5."),
        part("b", 2, m`Find the number of walks of length 2 from vertex 1 to vertex 4, and list them.`, [m`\[(\mathbf{A}^2)_{14} = 2:\quad 1,2,4 \text{ and } 1,3,4\]`], "2 walks: 1-2-4 and 1-3-4", "Marks: (A1) 2, (A1) both walks."),
        part("c", 2, m`Use your GDC to find the number of walks of length 3 from vertex 1 to vertex 2.`, [m`\[(\mathbf{A}^3)_{12} = 5\]`], "5", "Marks: (M1) A^3 on the GDC, (A1) 5."),
        part("d", 1, m`State whether an Eulerian trail exists.`, [m`\[\text{vertices 2 and 3 have odd degree (3); the others are even}\]`], "Yes, from vertex 2 to vertex 3", "Marks: (A1) trail between the two odd vertices."),
      ],
    },
  ],
};

export default paper;
