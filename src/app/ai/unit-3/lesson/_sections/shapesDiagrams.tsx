// Diagrams for "Trigonometry in shapes". Inline SVG, viewBox only.
// Style: given data blue, construction lines slate dashed, unknown red.
// Each component takes optional label props so lessons and papers can reuse it.

const BLUE = "#2563eb";
const FILL = "#dbeafe";
const SLATE = "#64748b";
const RED = "#dc2626";
const INK = "#0f172a";

function Frame({ viewBox, title, children }: { viewBox: string; title: string; children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} width="100%" style={{ maxWidth: 320 }} role="img" aria-label={title} fontSize={13}>
      {children}
    </svg>
  );
}

function T({ x, y, c = INK, children, anchor = "middle" }: { x: number; y: number; c?: string; children: React.ReactNode; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fill={c} textAnchor={anchor}>
      {children}
    </text>
  );
}

/** Right-angle marker at (x, y) with legs along unit vectors (ux, uy) and (vx, vy). */
function RightAngle({ x, y, ux, uy, vx, vy, s = 9 }: { x: number; y: number; ux: number; uy: number; vx: number; vy: number; s?: number }) {
  const p1 = [x + ux * s, y + uy * s];
  const p2 = [x + (ux + vx) * s, y + (uy + vy) * s];
  const p3 = [x + vx * s, y + vy * s];
  return <path d={`M ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]}`} fill="none" stroke={SLATE} strokeWidth={1.2} />;
}

const dash = "5 4";

// 1. Isosceles triangle split by its height.
export function IsoscelesSplit({ side = "l", height = "h", half = "b/2", angle = "θ" }: { side?: string; height?: string; half?: string; angle?: string }) {
  return (
    <Frame viewBox="0 0 240 170" title="Isosceles triangle split by its height into two right-angled triangles">
      <polygon points="30,140 210,140 120,30" fill={FILL} stroke={BLUE} strokeWidth={2} />
      <line x1={120} y1={30} x2={120} y2={140} stroke={SLATE} strokeWidth={1.5} strokeDasharray={dash} />
      <RightAngle x={120} y={140} ux={-1} uy={0} vx={0} vy={-1} />
      <path d="M 52 140 A 22 22 0 0 0 48 128" fill="none" stroke={RED} strokeWidth={1.5} />
      <T x={64} y={133} c={RED}>{angle}</T>
      <T x={62} y={80} c={BLUE} anchor="end">{side}</T>
      <T x={180} y={80} c={BLUE} anchor="start">{side}</T>
      <T x={127} y={92} c={RED} anchor="start">{height}</T>
      <T x={75} y={158} c={INK}>{half}</T>
      <T x={165} y={158} c={INK}>{half}</T>
    </Frame>
  );
}

// 2. Rhombus with its diagonals (they cross at 90 degrees and bisect each other).
export function RhombusDiagonals({ side = "s", d1 = "d₁/2", d2 = "d₂/2", angle = "θ" }: { side?: string; d1?: string; d2?: string; angle?: string }) {
  return (
    <Frame viewBox="0 0 240 180" title="Rhombus with both diagonals meeting at right angles">
      <polygon points="120,15 215,90 120,165 25,90" fill={FILL} stroke={BLUE} strokeWidth={2} />
      <line x1={120} y1={15} x2={120} y2={165} stroke={SLATE} strokeWidth={1.5} strokeDasharray={dash} />
      <line x1={25} y1={90} x2={215} y2={90} stroke={SLATE} strokeWidth={1.5} strokeDasharray={dash} />
      <RightAngle x={120} y={90} ux={1} uy={0} vx={0} vy={-1} />
      <path d="M 44 90 A 19 19 0 0 0 49 78" fill="none" stroke={RED} strokeWidth={1.5} />
      <T x={64} y={86} c={RED}>{angle}</T>
      <T x={56} y={44} c={BLUE} anchor="end">{side}</T>
      <T x={72} y={78} c={INK}>{d1}</T>
      <T x={127} y={50} c={INK} anchor="start">{d2}</T>
    </Frame>
  );
}

// 3. Quadrilateral ABCD with the shared diagonal AC.
export function QuadSharedDiagonal({ diagonal = "d", ab = "AB", bc = "BC", cd = "CD", da = "DA", angleB = "B", angleD = "D" }: { diagonal?: string; ab?: string; bc?: string; cd?: string; da?: string; angleB?: string; angleD?: string }) {
  return (
    <Frame viewBox="0 0 260 180" title="Quadrilateral ABCD split by the diagonal AC into two triangles">
      <polygon points="30,145 205,155 235,50 75,28" fill={FILL} stroke={BLUE} strokeWidth={2} />
      <line x1={30} y1={145} x2={235} y2={50} stroke={RED} strokeWidth={1.8} strokeDasharray={dash} />
      <T x={20} y={150} anchor="end">A</T>
      <T x={205} y={172}>B</T>
      <T x={245} y={48} anchor="start">C</T>
      <T x={72} y={20}>D</T>
      <T x={115} y={163} c={BLUE}>{ab}</T>
      <T x={232} y={110} c={BLUE} anchor="start">{bc}</T>
      <T x={162} y={31} c={BLUE}>{cd}</T>
      <T x={42} y={80} c={BLUE} anchor="end">{da}</T>
      <T x={132} y={106} c={RED}>{diagonal}</T>
      <T x={188} y={145} c={SLATE}>{angleB}</T>
      <T x={90} y={48} c={SLATE}>{angleD}</T>
    </Frame>
  );
}

// 4. Regular hexagon with one central triangle.
export function HexagonCentral({ radius = "r", side = "s", angle = "60°" }: { radius?: string; side?: string; angle?: string }) {
  const cx = 120, cy = 90, R = 72;
  const pts = Array.from({ length: 6 }, (_, k) => {
    const a = (k * 60 * Math.PI) / 180;
    return [cx + R * Math.cos(a), cy - R * Math.sin(a)];
  });
  const poly = pts.map((p) => p.join(",")).join(" ");
  const [p0, p1] = pts;
  return (
    <Frame viewBox="0 0 240 180" title="Regular hexagon with one of its six central triangles shaded">
      <polygon points={poly} fill="none" stroke={BLUE} strokeWidth={2} />
      <polygon points={`${cx},${cy} ${p0[0]},${p0[1]} ${p1[0]},${p1[1]}`} fill={FILL} stroke={BLUE} strokeWidth={2} />
      {pts.slice(2).map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke={SLATE} strokeWidth={1.2} strokeDasharray={dash} />
      ))}
      <path d={`M ${cx + 22} ${cy} A 22 22 0 0 0 ${cx + 22 * Math.cos(Math.PI / 3)} ${cy - 22 * Math.sin(Math.PI / 3)}`} fill="none" stroke={RED} strokeWidth={1.5} />
      <T x={cx + 33} y={cy - 8} c={RED}>{angle}</T>
      <T x={cx + 38} y={cy + 15} c={INK}>{radius}</T>
      <T x={cx + 29} y={cy - 40} c={INK} anchor="end">{radius}</T>
      <T x={cx + 56} y={cy - 56} c={BLUE} anchor="start">{side}</T>
    </Frame>
  );
}

// 5. Rectangle with a semicircle on top (window or track end).
export function RectSemicircle({ width = "w", height = "h", radius = "r" }: { width?: string; height?: string; radius?: string }) {
  return (
    <Frame viewBox="0 0 240 190" title="Rectangle with a semicircle on its top edge">
      <path d="M 50 160 L 50 90 A 70 70 0 0 1 190 90 L 190 160 Z" fill={FILL} stroke={BLUE} strokeWidth={2} />
      <line x1={50} y1={90} x2={190} y2={90} stroke={SLATE} strokeWidth={1.5} strokeDasharray={dash} />
      <line x1={120} y1={90} x2={120} y2={20} stroke={SLATE} strokeWidth={1.2} strokeDasharray={dash} />
      <T x={127} y={58} c={INK} anchor="start">{radius}</T>
      <T x={120} y={178} c={BLUE}>{width}</T>
      <T x={40} y={128} c={BLUE} anchor="end">{height}</T>
    </Frame>
  );
}

// 6. Triangle attached to a sector along the radius OB.
export function TriangleOnSector({ radius = "r", angle = "θ", other = "x" }: { radius?: string; angle?: string; other?: string }) {
  const ox = 100, oy = 150, R = 105;
  const a = (65 * Math.PI) / 180;
  const bx = ox + R * Math.cos(a), by = oy - R * Math.sin(a);
  return (
    <Frame viewBox="0 0 260 180" title="Sector with a triangle attached along one radius">
      <path d={`M ${ox} ${oy} L ${ox + R} ${oy} A ${R} ${R} 0 0 0 ${bx} ${by} Z`} fill={FILL} stroke={BLUE} strokeWidth={2} />
      <polygon points={`${ox},${oy} ${bx},${by} 18,70`} fill="none" stroke={BLUE} strokeWidth={2} />
      <line x1={ox} y1={oy} x2={bx} y2={by} stroke={SLATE} strokeWidth={1.5} strokeDasharray={dash} />
      <path d={`M ${ox + 28} ${oy} A 28 28 0 0 0 ${ox + 28 * Math.cos(a)} ${oy - 28 * Math.sin(a)}`} fill="none" stroke={RED} strokeWidth={1.5} />
      <T x={ox + 36} y={oy - 8} c={RED} anchor="start">{angle}</T>
      <T x={ox + 55} y={oy + 16} c={INK}>{radius}</T>
      <T x={ox + 8} y={oy - 62} c={INK} anchor="start">{radius}</T>
      <T x={46} y={118} c={BLUE} anchor="end">{other}</T>
      <T x={ox - 12} y={oy + 14} anchor="end">O</T>
    </Frame>
  );
}
