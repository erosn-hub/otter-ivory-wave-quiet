import { R_KCAL } from "./data";
import { inertia, type XYZ } from "./geometry";

type Rotor = ReturnType<typeof inertia>;

const kB = 1.380649e-23;
const hP = 6.62607015e-34;
const NA = 6.02214076e23;
const R = 8.314462618;
const P_STD = 101325;
const J_TO_CAL = 1 / 4.184;
const CM_TO_HZ = 2.99792458e10;
const THETA = 1.4387769; // hc/k, cm·K

export type ThermoMode = "rrho" | "truhlar" | "grimme";

export function rtLnMolar(T: number): number {
  const Vm = 0.08205746 * T;
  return R_KCAL * T * Math.log(Vm);
}

export function eyring(dG: number, T: number, imagCm: number, wigner: boolean): number {
  const kT_h = (kB * T) / hP;
  const kappa = wigner && imagCm > 0 ? wignerKappa(imagCm, T) : 1;
  return kappa * kT_h * Math.exp((-dG) / (R_KCAL * T));
}

export function wignerKappa(imagCm: number, T: number): number {
  const u = (THETA * imagCm) / T;
  return 1 + (u * u) / 24;
}

function sTransCal(massGMol: number, T: number): number {
  const m = massGMol / 1000 / NA;
  const term = ((kB * T) / P_STD) * Math.pow((2 * Math.PI * m * kB * T) / (hP * hP), 1.5);
  return R * (Math.log(term) + 2.5) * J_TO_CAL;
}

function sRotCal(rotor: Rotor, T: number): number {
  if (rotor.linear) {
    const I = Math.max(rotor.moments[1], rotor.moments[2], 1e-50);
    const q = (8 * Math.PI * Math.PI * I * kB * T) / (rotor.sigma * hP * hP);
    return R * (1 + Math.log(q)) * J_TO_CAL;
  }
  const Ia = Math.max(rotor.moments[0], 1e-50);
  const Ib = Math.max(rotor.moments[1], 1e-50);
  const Ic = Math.max(rotor.moments[2], 1e-50);
  const q =
    (Math.sqrt(Math.PI) / rotor.sigma) *
    Math.pow((8 * Math.PI * Math.PI * kB * T) / (hP * hP), 1.5) *
    Math.sqrt(Ia * Ib * Ic);
  return R * (Math.log(Math.max(q, 1e-30)) + 1.5) * J_TO_CAL;
}

function uOf(nu: number, T: number) {
  return (THETA * nu) / T;
}

export function sVibMode(nu: number, T: number): number {
  if (nu < 1) return 0;
  const u = uOf(nu, T);
  const eu = Math.exp(u);
  return R * (u / (eu - 1) - Math.log(1 - Math.exp(-u))) * J_TO_CAL;
}

export function cvVibMode(nu: number, T: number): number {
  if (nu < 1) return 0;
  const u = uOf(nu, T);
  const eu = Math.exp(u);
  return R * ((u * u * eu) / (eu - 1) ** 2) * J_TO_CAL;
}

function sGrimmeMode(nu: number, T: number): number {
  const freq = Math.max(nu, 1) * CM_TO_HZ;
  const mu = hP / (8 * Math.PI * Math.PI * freq);
  const Bav = 1e-44;
  const muP = (mu * Bav) / (mu + Bav);
  const arg = Math.sqrt((8 * Math.PI ** 3 * muP * kB * T) / (hP * hP));
  const sFree = R * (0.5 + Math.log(Math.max(arg, 1e-30))) * J_TO_CAL;
  const w = 1 / (1 + (100 / Math.max(nu, 1)) ** 4);
  return w * sVibMode(nu, T) + (1 - w) * sFree;
}

export function entropyVib(modes: number[], T: number, mode: ThermoMode, scale: number): number {
  let s = 0;
  for (const raw of modes) {
    const nu = raw * scale;
    if (mode === "truhlar") s += sVibMode(Math.max(nu, 100), T);
    else if (mode === "grimme") s += sGrimmeMode(nu, T);
    else s += sVibMode(nu, T);
  }
  return s;
}

export type MoleculeThermo = {
  mass: number;
  S: number;
  Cp: number;
  nAtoms: number;
};

export function moleculeThermo(
  atoms: XYZ[],
  sigma: number,
  modes: number[],
  T: number,
  mode: ThermoMode,
  scale: number,
): MoleculeThermo {
  const rotor = inertia(atoms, sigma);
  const mass = atoms.reduce((s, a) => s + massOf(a.el), 0);
  const Strans = sTransCal(mass, T);
  const Srot = sRotCal(rotor, T);
  const Svib = entropyVib(modes, T, mode, scale);
  const linear = rotor.linear;
  const cvTrans = 1.5 * R * J_TO_CAL;
  const cvRot = (linear ? 1 : 1.5) * R * J_TO_CAL;
  let cvVib = 0;
  for (const raw of modes) cvVib += cvVibMode(raw * scale, T);
  const Cp = cvTrans + cvRot + cvVib + R * J_TO_CAL;
  return { mass, S: Strans + Srot + Svib, Cp, nAtoms: atoms.length };
}

function massOf(el: string): number {
  const table: Record<string, number> = {
    H: 1.00784,
    C: 12.011,
    N: 14.007,
    O: 15.999,
    F: 18.998403,
    Si: 28.085,
    P: 30.973762,
    Cl: 35.45,
    Co: 58.933194,
    Ni: 58.6934,
    Ru: 101.07,
    Rh: 102.9055,
    Ir: 192.217,
  };
  return table[el] ?? 12;
}

export function collectionThermo(
  parts: { atoms: XYZ[]; sigma: number; modes: number[] }[],
  T: number,
  mode: ThermoMode,
  scale: number,
): { S: number; Cp: number; n: number } {
  let S = 0;
  let Cp = 0;
  for (const p of parts) {
    const t = moleculeThermo(p.atoms, p.sigma, p.modes, T, mode, scale);
    S += t.S;
    Cp += t.Cp;
  }
  return { S, Cp, n: parts.length };
}
