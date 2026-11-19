import { formingCC, minDistance, stationPieces, type XYZ } from "@/lib/chem/geometry";
import type { AlkyneId, MetalId } from "@/lib/chem/data";
import type { GeomKind } from "@/lib/chem/geometry";

const COVALENT: Record<string, number> = {
  H: 0.31,
  C: 0.76,
  N: 0.71,
  O: 0.66,
  F: 0.57,
  Si: 1.11,
  P: 1.07,
  Cl: 0.99,
  Co: 1.26,
  Ni: 1.24,
  Ru: 1.46,
  Rh: 1.42,
  Ir: 1.41,
};

const METALS = new Set(["Co", "Ni", "Ru", "Rh", "Ir"]);

function dist(a: XYZ, b: XYZ) {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

function bondsOf(atoms: XYZ[]): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < atoms.length; i++) {
    for (let j = i + 1; j < atoms.length; j++) {
      const r = dist(atoms[i], atoms[j]);
      const cut = 1.22 * ((COVALENT[atoms[i].el] ?? 0.77) + (COVALENT[atoms[j].el] ?? 0.77));
      if (r > 0.45 && r < cut) out.push([i, j]);
    }
  }
  return out;
}

function project(a: XYZ) {
  const yaw = 0.62;
  const pitch = 0.42;
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const x1 = a.x * cy - a.z * sy;
  const z1 = a.x * sy + a.z * cy;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  return { x: x1, y: -(a.y * cp - z1 * sp), depth: a.y * sp + z1 * cp };
}

function fillOf(el: string) {
  if (METALS.has(el)) return "var(--color-copper)";
  if (el === "C") return "var(--color-ink)";
  if (el === "H") return "var(--color-paper)";
  return "var(--color-teal)";
}

function radiusOf(el: string) {
  if (METALS.has(el)) return 7.2;
  if (el === "H") return 3.4;
  return 5.2;
}

function MoleculeSvg({ atoms }: { atoms: XYZ[] }) {
  const pts = atoms.map((a) => ({ ...project(a), el: a.el }));
  const links = bondsOf(atoms);
  if (pts.length === 0) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const p of pts) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  const pad = 0.7;
  const w = Math.max(maxX - minX, 0.4) + pad * 2;
  const h = Math.max(maxY - minY, 0.4) + pad * 2;
  const order = pts.map((p, i) => i).sort((a, b) => pts[a].depth - pts[b].depth);
  return (
    <svg viewBox={`${minX - pad} ${minY - pad} ${w} ${h}`} className="h-36 w-full" role="img" aria-label="Geometría de partida">
      {links.map(([i, j]) => (
        <line
          key={`${i}-${j}`}
          x1={pts[i].x}
          y1={pts[i].y}
          x2={pts[j].x}
          y2={pts[j].y}
          stroke="var(--color-mist)"
          strokeWidth={0.08}
        />
      ))}
      {order.map((i) => (
        <circle
          key={i}
          cx={pts[i].x}
          cy={pts[i].y}
          r={radiusOf(pts[i].el) * 0.045}
          fill={fillOf(pts[i].el)}
          stroke="var(--color-ink)"
          strokeWidth={pts[i].el === "H" ? 0.04 : 0.03}
        />
      ))}
    </svg>
  );
}

export function StructureStrip({
  metal,
  alkynes,
  geom,
}: {
  metal: MetalId;
  alkynes: [AlkyneId, AlkyneId, AlkyneId];
  geom: GeomKind;
}) {
  const pieces = stationPieces({ kind: geom, metal, alkynes });
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xl">Geometría de partida</h2>
        <p className="text-sm text-mist">C negro · H hueco · hetero verde · metal cobre</p>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {pieces.map((piece) => {
          const md = minDistance(piece.atoms);
          const forming = piece.role === "complex" || piece.role === "arene" ? formingCC(piece.atoms) : null;
          return (
            <figure key={piece.label} className="w-48 shrink-0 rounded-card border border-mist/40 p-2">
              <MoleculeSvg atoms={piece.atoms} />
              <figcaption className="mt-1 text-sm">
                <p className="font-semibold">{piece.label}</p>
                <p className="text-mist">{piece.atoms.length} átomos · d mín {md.d.toFixed(2)} Å</p>
                {forming != null && <p className="text-mist">C···C en formación {forming.toFixed(2)} Å</p>}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p className="text-sm text-mist">
        Son coordenadas iniciales para Gaussian, no el punto estacionario. El fragmento del complejo es el que se optimiza; los alquinos libres van en jobs aparte para no inflar la entropía rotacional del supermolécula.
      </p>
    </section>
  );
}
