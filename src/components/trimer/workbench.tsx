import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  CartesianGrid,
  ErrorBar,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ALKYNE_LIST,
  CITATIONS,
  EXP_DG_ACETYLENE,
  EXP_DH_ACETYLENE,
  METAL_LIST,
  METHOD_LIST,
  METHODS,
  SOLVENTS,
  type AlkyneId,
  type MetalId,
  type MethodId,
  type SolventId,
  type StandardState,
  type ThermalMode,
  type ThermoMode,
} from "@/lib/chem/data";
import { gaussianDeck, routeCard } from "@/lib/chem/gaussian";
import { StructureStrip } from "@/components/trimer/structure";
import { compute, methodScan, strainCurve, type JobInput, type Station } from "@/lib/chem/surface";
import { rtLnMolar } from "@/lib/chem/thermo";

type Tab = "perfil" | "ts" | "regio" | "termo" | "strain" | "gauss" | "fuentes";

const TABS: { id: Tab; label: string }[] = [
  { id: "perfil", label: "Perfil" },
  { id: "ts", label: "Transiciones" },
  { id: "regio", label: "Regioselectividad" },
  { id: "termo", label: "Termoquímica" },
  { id: "strain", label: "Activation strain" },
  { id: "gauss", label: "Gaussian" },
  { id: "fuentes", label: "Fuentes" },
];

export function Workbench() {
  const [homo, setHomo] = useState(true);
  const [alkynes, setAlkynes] = useState<[AlkyneId, AlkyneId, AlkyneId]>(["acetylene", "acetylene", "acetylene"]);
  const [metal, setMetal] = useState<MetalId>("CpCo");
  const [method, setMethod] = useState<MethodId>("composite");
  const [solvent, setSolvent] = useState<SolventId>("toluene");
  const [temperature, setTemperature] = useState(298);
  const [thermo, setThermo] = useState<ThermoMode>("grimme");
  const [standardState, setStandardState] = useState<StandardState>("molar");
  const [twoState, setTwoState] = useState(true);
  const [thermalMode, setThermalMode] = useState<ThermalMode>("concerted");
  const [wigner, setWigner] = useState(true);
  const [yMode, setYMode] = useState<"dG" | "dH">("dG");
  const [tab, setTab] = useState<Tab>("perfil");
  const [selected, setSelected] = useState("ts1");
  const [ready, setReady] = useState(false);
  const [nproc, setNproc] = useState(16);
  const [mem, setMem] = useState(16);

  useEffect(() => setReady(true), []);

  const input: JobInput = useMemo(() => {
    const chosen: [AlkyneId, AlkyneId, AlkyneId] = homo
      ? [alkynes[0], alkynes[0], alkynes[0]]
      : alkynes;
    return {
      alkynes: chosen,
      metal,
      method,
      solvent,
      temperature,
      thermo,
      standardState,
      twoState: twoState && (metal === "CpCo" || metal === "CpStarCo"),
      thermalMode,
      wigner,
    };
  }, [homo, alkynes, metal, method, solvent, temperature, thermo, standardState, twoState, thermalMode, wigner]);

  const profile = useMemo(() => compute(input), [input]);
  const active = profile.stations.find((s) => s.id === selected) ?? profile.stations[0];

  useEffect(() => {
    if (!profile.stations.some((s) => s.id === selected)) setSelected(profile.stations[0]?.id ?? "pre");
  }, [profile, selected]);

  const setAlkyne = (index: number, id: AlkyneId) => {
    const next: [AlkyneId, AlkyneId, AlkyneId] = [...alkynes];
    next[index] = id;
    setAlkynes(next);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-mist/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-copper">CUADERNO DE RUTA · NIVEL DE POSGRADO</p>
            <h1 className="mt-1 text-3xl text-ink md:text-4xl">Trímera</h1>
            <p className="mt-1 max-w-xl text-mist">
              Perfil energético y estados de transición de la cicloadición [2+2+2] de alquinos, simétrica y cruzada.
            </p>
          </div>
          <p className="max-w-sm text-sm text-mist">
            Las energías están ancladas a literatura y se corrigen con aproximaciones explícitas. No es un SCF en vivo: el input de Gaussian se descarga para el clúster.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[18rem_1fr]">
        <aside className="flex flex-col gap-4">
          <Panel title="Reacción">
            <div className="grid grid-cols-2 gap-2">
              <Seg on={homo} onClick={() => setHomo(true)} label="Homo" />
              <Seg on={!homo} onClick={() => setHomo(false)} label="Cruzada" />
            </div>
            <Field label={homo ? "Alquino" : "Alquino A"}>
              <Select value={alkynes[0]} onChange={(v) => setAlkyne(0, v as AlkyneId)} options={ALKYNE_LIST.map((a) => ({ value: a.id, label: `${a.name} · ${a.formula}` }))} />
            </Field>
            {!homo && (
              <>
                <Field label="Alquino B">
                  <Select value={alkynes[1]} onChange={(v) => setAlkyne(1, v as AlkyneId)} options={ALKYNE_LIST.map((a) => ({ value: a.id, label: `${a.name} · ${a.formula}` }))} />
                </Field>
                <Field label="Alquino C, el que entra al final">
                  <Select value={alkynes[2]} onChange={(v) => setAlkyne(2, v as AlkyneId)} options={ALKYNE_LIST.map((a) => ({ value: a.id, label: `${a.name} · ${a.formula}` }))} />
                </Field>
              </>
            )}
            <div className="flex flex-col gap-2">
              <button type="button" className="min-h-11 rounded-lg border border-mist/50 px-3 text-left text-sm" onClick={() => { setHomo(true); setAlkynes(["acetylene", "acetylene", "acetylene"]); setMetal("CpCo"); setMethod("b3lyp"); setSolvent("gas"); setTwoState(false); setStandardState("atm"); }}>
                Ancla Hardesty: 3 HC≡CH, CpCo, B3LYP gas
              </button>
              <button type="button" className="min-h-11 rounded-lg border border-mist/50 px-3 text-left text-sm" onClick={() => { setHomo(false); setAlkynes(["propyne", "phac", "dmad"]); setMetal("CpCo"); setMethod("composite"); setSolvent("toluene"); }}>
                Ejemplo cruzado: propino + PhC≡CH + DMAD
              </button>
            </div>
          </Panel>

          <Panel title="Modelo">
            <Field label="Catalizador">
              <Select value={metal} onChange={(v) => setMetal(v as MetalId)} options={METAL_LIST.map((m) => ({ value: m.id, label: m.name }))} />
            </Field>
            <Field label="Método">
              <Select value={method} onChange={(v) => setMethod(v as MethodId)} options={METHOD_LIST.map((m) => ({ value: m.id, label: m.short }))} />
            </Field>
            <Field label="Disolvente">
              <Select value={solvent} onChange={(v) => setSolvent(v as SolventId)} options={Object.values(SOLVENTS).map((s) => ({ value: s.id, label: s.name }))} />
            </Field>
            <Field label={`Temperatura · ${temperature} K`}>
              <input className="w-full accent-copper" type="range" min={250} max={800} step={1} value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} />
            </Field>
            <Field label="Entropía vibracional">
              <Select value={thermo} onChange={(v) => setThermo(v as ThermoMode)} options={[{ value: "rrho", label: "RRHO estricto" }, { value: "truhlar", label: "Truhlar, corte a 100 cm⁻¹" }, { value: "grimme", label: "Grimme, cuasi-RRHO" }]} />
            </Field>
            <Field label="Estado estándar">
              <Select value={standardState} onChange={(v) => setStandardState(v as StandardState)} options={[{ value: "molar", label: "1 mol/L (disolución)" }, { value: "atm", label: "1 atm (fase gas)" }]} />
            </Field>
            {metal === "none" ? (
              <Field label="Canal térmico">
                <Select value={thermalMode} onChange={(v) => setThermalMode(v as ThermalMode)} options={[{ value: "concerted", label: "Concertado, D₃h" }, { value: "biradical", label: "Cascada birradical" }]} />
              </Field>
            ) : (
              <Check on={input.twoState} disabled={!(metal === "CpCo" || metal === "CpStarCo")} onClick={() => setTwoState((v) => !v)} label="Reactividad de dos estados (MECP)" />
            )}
            <Check on={wigner} onClick={() => setWigner((v) => !v)} label="Corrección de túnel de Wigner" />
          </Panel>
        </aside>

        <main className="min-w-0">
          <div className="flex gap-2 overflow-x-auto pb-3">
            {TABS.map((t) => (
              <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)} className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${tab === t.id ? "bg-ink text-paper" : "border border-mist/50 text-ink"}`}>
                {t.label}
              </button>
            ))}
          </div>

          <p className="mb-4 text-sm text-ink">{profile.headline}</p>
          {profile.warnings.length > 0 && (
            <ul className="mb-4 flex flex-col gap-2">
              {profile.warnings.map((w) => (
                <li key={w} className="rounded-lg border border-copper/40 bg-paper px-3 py-2 text-sm text-ink">{w}</li>
              ))}
            </ul>
          )}

          {tab === "perfil" && (
            <section className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-mist">Eje</span>
                <Seg on={yMode === "dG"} onClick={() => setYMode("dG")} label={standardState === "molar" ? "ΔG (1 M)" : "ΔG (1 atm)"} />
                <Seg on={yMode === "dH"} onClick={() => setYMode("dH")} label="ΔH" />
              </div>
              <div className="h-80 w-full rounded-card border border-mist/40 p-2">
                {ready ? <ProfileChart stations={profile.stations} yMode={yMode} selected={active.id} onPick={setSelected} /> : <div className="h-full" />}
              </div>
              <StationCard station={active} />
              <StructureStrip metal={input.metal} alkynes={input.alkynes} geom={active.geom} />
              <StationTable stations={profile.stations} selected={active.id} yMode={yMode} onPick={setSelected} />
            </section>
          )}

          {tab === "ts" && (
            <section className="flex flex-col gap-4">
              {profile.steps.length === 0 && <p className="text-sm">No hay pasos elementales en este canal.</p>}
              {profile.steps.map((step) => (
                <article key={step.id} className="rounded-card border border-mist/40 p-4">
                  <h2 className="text-xl">{step.name}</h2>
                  <dl className="mt-3 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
                    <Stat k="ΔG‡" v={`${step.dG.toFixed(1)} kcal/mol`} />
                    <Stat k="k (Eyring)" v={fmtK(step.k)} />
                    <Stat k="ν imaginaria" v={`${step.imag.toFixed(0)}i cm⁻¹`} />
                    <Stat k="κ Wigner" v={step.kappa.toFixed(3)} />
                  </dl>
                  <p className="mt-3 text-sm text-mist">t½ unimolecular = {fmtTime(Math.log(2) / Math.max(step.k, 1e-300))}. La constante es de primer orden porque el TS se mide desde el mínimo anterior, no desde fragmentos separados.</p>
                </article>
              ))}
              {profile.span && (
                <article className="rounded-card border border-teal/40 p-4">
                  <h2 className="text-xl">Span energético de Kozuch–Shaik</h2>
                  <p className="mt-2 text-sm">δE = {profile.span.deltaE.toFixed(1)} kcal/mol. TDTS: {profile.span.tdts}. TDI: {profile.span.tdi}. ΔG de la reacción en el ciclo: {profile.span.dGr.toFixed(1)} kcal/mol. TOF ≈ {profile.span.tof.toExponential(2)} s⁻¹ con κ = 1, sin concentración de sustrato.</p>
                  <p className="mt-2 text-sm text-mist">Si el triplete está activo no entra en este span: es un pozo lateral. Si se convierte en el estado de reposo, el TDI real es el ³MC y el span crece en lo que cueste volver a cruzar.</p>
                </article>
              )}
              <StationCard station={active} />
            </section>
          )}

          {tab === "regio" && (
            <section className="flex flex-col gap-3">
              <p className="text-sm text-mist">
                Control cinético del acoplamiento oxidante más la orientación del tercer alquino. Los grupos voluminosos pagan un coste si quedan en posición α (unidos al metal). Un aceptor en α estabiliza el enlace M–C. El reparto es un Boltzmann a {temperature} K sobre esas barreras de modelo, no un ΔΔG‡ publicado para cada sustituyente.
              </p>
              {profile.isomers.map((iso) => (
                <article key={iso.pattern + iso.name} className="rounded-card border border-mist/40 p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-lg">{iso.name}</h2>
                    <p className="font-semibold tabular-nums text-copper">{(iso.share * 100).toFixed(1)}%</p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-mist/30">
                    <div className="h-full bg-teal" style={{ width: `${Math.max(iso.share * 100, 1)}%` }} />
                  </div>
                  <p className="mt-2 text-sm">{iso.pattern}</p>
                  <p className="mt-1 text-sm text-mist">ΔΔG‡ respecto del canal mejor = {iso.dG.toFixed(2)} kcal/mol. {iso.channel}</p>
                </article>
              ))}
              <p className="text-sm text-mist">En alquinos terminales el resultado experimental habitual con CpCo es el 1,2,4-trisustituido. El 1,3,5 pide control adicional (plantilla, volumen del ligando, diino anclado). Revisión: Roglans, Pla-Quintana y Solà, Chem. Rev. 2021.</p>
            </section>
          )}

          {tab === "termo" && <ThermoPanel input={input} />}

          {tab === "strain" && <StrainPanel input={input} ready={ready} />}

          {tab === "gauss" && <GaussPanel input={input} stations={profile.stations} nproc={nproc} mem={mem} setNproc={setNproc} setMem={setMem} />}

          {tab === "fuentes" && <Sources />}
        </main>
      </div>
    </div>
  );
}

function ThermoPanel({ input }: { input: JobInput }) {
  const modes: ThermoMode[] = ["rrho", "truhlar", "grimme"];
  const rows = modes.map((thermo) => {
    const p = compute({ ...input, thermo });
    const ts = p.stations.find((s) => s.kind === "ts");
    return { thermo, dG: ts ? ts.dG - p.stations[0].dG : 0, dS: ts ? ts.dS - p.stations[0].dS : 0 };
  });
  const scan = methodScan(input);
  const rt = rtLnMolar(input.temperature);
  const parent = input.alkynes.every((a) => a === "acetylene");
  return (
    <section className="flex flex-col gap-4">
      <article className="rounded-card border border-mist/40 p-4 text-sm">
        <h2 className="text-xl">Qué se está aproximando</h2>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
          <li>ΔH(298) sale del ancla. ΔH(T) ≈ ΔH(298) + ΔCp·(T − 298), con ΔCp de la termoestadística (Kirchhoff a Cp constante).</li>
          <li>ΔS combina Sackur–Tetrode, rotor rígido y los modos bajos de modelo. No son las frecuencias de un Hessiano.</li>
          <li>Estado 1 M: ΔG(1 M) = ΔG(1 atm) + Δn·RT·ln(RT/P). A esta T, RT·ln(Vm) = {rt.toFixed(2)} kcal/mol. Si Δn es negativo (asociación), el paso se hace más exoérgico.</li>
          <li>Escala de frecuencias del método: {METHODS[input.method].scale}. Cambia poco ΔG; el cuasi-armónico cambia más.</li>
          <li>S° modelo del acetileno: 48.1 cal/mol·K (experimental ~48.0). Benceno modelo: 61.9 frente a ~64.3. El error de ~2 cal/mol·K son ~0.7 kcal/mol a 298 K.</li>
        </ul>
      </article>
      <article className="rounded-card border border-mist/40 p-4">
        <h2 className="text-xl">El mismo TS, tres entropías</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-mist"><tr><th className="py-2 pr-3">Tratamiento</th><th className="py-2 pr-3">ΔG‡ desde el cero</th><th className="py-2">ΔS del TS</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.thermo} className="border-t border-mist/30">
                  <td className="py-2 pr-3">{r.thermo === "rrho" ? "RRHO" : r.thermo === "truhlar" ? "Truhlar" : "Grimme"}</td>
                  <td className="py-2 pr-3 tabular-nums">{r.dG.toFixed(2)}</td>
                  <td className="py-2 tabular-nums">{r.dS.toFixed(1)} cal/mol·K</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
      <article className="rounded-card border border-mist/40 p-4">
        <h2 className="text-xl">El mismo sistema, siete métodos</h2>
        <p className="mt-1 text-sm text-mist">ΔG‡ del primer TS y ΔG de reacción, con el resto de ajustes fijos. La dispersión de varios kcal/mol es la incertidumbre realista del funcional, no ruido de redondeo.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-mist"><tr><th className="py-2 pr-3">Método</th><th className="py-2 pr-3">ΔG‡</th><th className="py-2">ΔG reacción</th></tr></thead>
            <tbody>
              {scan.map((r) => (
                <tr key={r.id} className="border-t border-mist/30">
                  <td className="py-2 pr-3">{r.label}</td>
                  <td className="py-2 pr-3 tabular-nums">{r.dGts.toFixed(1)}</td>
                  <td className="py-2 tabular-nums">{r.dGr.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
      {parent && (
        <article className="rounded-card border border-teal/40 p-4 text-sm">
          <h2 className="text-xl">Contraste experimental, 3 HC≡CH → C₆H₆</h2>
          <p className="mt-2">ΔH° = {EXP_DH_ACETYLENE.toFixed(1)} kcal/mol a partir de ΔfH°(acetileno) = 54.2 y ΔfH°(benceno) = 19.8 kcal/mol. ΔG° ≈ {EXP_DG_ACETYLENE.toFixed(1)} kcal/mol (fase gas, 298 K). El ciclo B3LYP reconstruido cierra en −114.3: faltan ~28.5 kcal/mol, sobre todo correlación del triple enlace y de la aromaticidad, no solo dispersión. Por eso un funcional moderno no se “suma” como una D3 cosmética.</p>
        </article>
      )}
    </section>
  );
}

function StrainPanel({ input, ready }: { input: JobInput; ready: boolean }) {
  const data = strainCurve(input).map((p) => ({ ...p, xi: Number(p.xi.toFixed(3)) }));
  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm">
        Modelo de activación-distorsión a lo largo de un IRC analítico del acoplamiento oxidante. La curva de energía pasa por la barrera y por el ΔE de reacción de este perfil. La partición strain / interacción está construida para ilustrar el resultado de Dalla Tiezza, Bickelhaupt y Orian (ChemPhysChem 2018): el Co gana porque la interacción estabiliza más, no porque distorsione menos. No son los puntos publicados del ASA.
      </p>
      <div className="h-72 w-full rounded-card border border-mist/40 p-2">
        {ready && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="var(--color-mist)" strokeOpacity={0.25} />
              <XAxis dataKey="xi" tick={{ fill: "var(--color-ink)", fontSize: 12 }} label={{ value: "ξ", position: "insideBottom", offset: -2, fill: "var(--color-mist)" }} />
              <YAxis tick={{ fill: "var(--color-ink)", fontSize: 12 }} width={48} />
              <Tooltip contentStyle={{ background: "var(--color-paper)", borderColor: "var(--color-mist)", color: "var(--color-ink)" }} />
              <Line type="monotone" dataKey="e" name="ΔE" stroke="var(--color-ink)" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="strain" name="ΔE strain" stroke="var(--color-copper)" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="interaction" name="ΔE int" stroke="var(--color-teal)" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <p className="text-sm text-mist">Cambia el metal a CpRh o CpIr: la reacción del acoplamiento deja de ser exoérgica y la barrera sube por la relación de Evans–Polanyi (α = 0.45) aplicada a los ΔE B3LYP/TZ2P publicados (−16.5, +4.2 y +1.0 kcal/mol para Co, Rh e Ir).</p>
    </section>
  );
}

function GaussPanel({
  input, stations, nproc, mem, setNproc, setMem,
}: {
  input: JobInput;
  stations: Station[];
  nproc: number;
  mem: number;
  setNproc: (n: number) => void;
  setMem: (n: number) => void;
}) {
  const deck = useMemo(() => gaussianDeck(input, stations, nproc, mem), [input, stations, nproc, mem]);
  const preview = deck.split("\n").slice(0, 48).join("\n");
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm">Núcleos
          <select className="mt-1 block min-h-11 rounded-lg border border-mist/50 bg-paper px-2" value={nproc} onChange={(e) => setNproc(Number(e.target.value))}>
            {[8, 16, 32, 64].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <label className="text-sm">Memoria (GB)
          <select className="mt-1 block min-h-11 rounded-lg border border-mist/50 bg-paper px-2" value={mem} onChange={(e) => setMem(Number(e.target.value))}>
            {[8, 16, 24, 32, 64].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <button type="button" className="min-h-11 rounded-lg bg-copper px-4 font-semibold text-paper" onClick={() => download("trimera_g16.gjf", deck)}>
          Descargar baraja .gjf
        </button>
      </div>
      <ol className="flex flex-col gap-3">
        {routeCard(input).map((r) => (
          <li key={r.step} className="rounded-card border border-mist/40 p-3">
            <h2 className="text-lg">{r.step}</h2>
            <p className="mt-1 text-sm text-mist">{r.detail}</p>
          </li>
        ))}
      </ol>
      <pre className="max-h-80 overflow-auto rounded-card border border-mist/40 bg-ink p-3 text-xs text-paper">{preview}{"\n"}! … el archivo completo va en la descarga.</pre>
    </section>
  );
}

function Sources() {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-sm text-mist">Cada cifra del perfil lleva una etiqueta: literatura (número publicado), reconstrucción (encadenado de números publicados) o modelo (incremento de esta aplicación). Si una energía no dice literatura, no la cites como resultado de un paper.</p>
      {CITATIONS.map((c) => (
        <article key={c.id} className="rounded-card border border-mist/40 p-4">
          <h2 className="text-lg">{c.authors} ({c.year})</h2>
          <p className="mt-1 text-sm">{c.title}</p>
          <p className="mt-1 text-sm text-teal">{c.source}</p>
          <p className="mt-1 text-sm text-mist">doi:{c.doi}</p>
          <p className="mt-2 text-sm">{c.usedFor}</p>
        </article>
      ))}
      <article className="rounded-card border border-mist/40 p-4 text-sm">
        <h2 className="text-lg">Constantes usadas</h2>
        <p className="mt-2">R = 1.987204×10⁻³ kcal/mol·K. kB, h y NA de CODATA 2018. Vm(298.15 K, 1 atm) = 24.465 L/mol. Factor de Kirkwood (ε−1)/(2ε+1) para el continuo. ε: tolueno 2.374, THF 7.426, MeCN 35.688.</p>
      </article>
    </section>
  );
}

function ProfileChart({ stations, yMode, selected, onPick }: { stations: Station[]; yMode: "dG" | "dH"; selected: string; onPick: (id: string) => void }) {
  const data = stations.map((s, i) => ({ i, id: s.id, name: s.short, y: yMode === "dG" ? s.dG : s.dH, uncertainty: s.uncertainty, kind: s.kind }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 12, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid stroke="var(--color-mist)" strokeOpacity={0.25} />
        <XAxis dataKey="name" tick={{ fill: "var(--color-ink)", fontSize: 12 }} />
        <YAxis tick={{ fill: "var(--color-ink)", fontSize: 12 }} width={48} />
        <ReferenceLine y={0} stroke="var(--color-mist)" />
        <Tooltip
          contentStyle={{ background: "var(--color-paper)", borderColor: "var(--color-mist)", color: "var(--color-ink)" }}
          formatter={(value) => [`${Number(value).toFixed(1)} kcal/mol`, yMode === "dG" ? "ΔG" : "ΔH"]}
        />
        <Line
          type="monotone"
          dataKey="y"
          stroke="var(--color-teal)"
          strokeWidth={2}
          dot={(dot) => {
            const p = dot.payload as (typeof data)[number];
            const fill = p.kind === "ts" ? "var(--color-copper)" : p.kind === "mecp" ? "var(--color-ink)" : "var(--color-teal)";
            return <circle key={p.id} cx={dot.cx} cy={dot.cy} r={p.id === selected ? 7 : 5} fill={fill} onClick={() => onPick(p.id)} />;
          }}
          activeDot={{ r: 7 }}
        >
          <ErrorBar dataKey="uncertainty" stroke="var(--color-copper)" width={4} />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}

function StationCard({ station }: { station: Station }) {
  return (
    <article className="rounded-card border border-mist/40 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-xl">{station.label}</h2>
        <Badge anchor={station.anchor} />
        <span className="text-xs font-semibold tracking-wide text-mist">{station.spin}</span>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
        <Stat k="ΔH" v={`${station.dH.toFixed(1)}`} />
        <Stat k="ΔG" v={`${station.dG.toFixed(1)}`} />
        <Stat k="ΔS" v={`${station.dS.toFixed(1)} cal/mol·K`} />
        <Stat k="Incertidumbre" v={`±${station.uncertainty.toFixed(1)}`} />
      </dl>
      <p className="mt-3 text-sm">{station.note}</p>
      {station.kind === "ts" && <p className="mt-2 text-sm text-mist">Frecuencia imaginaria de trabajo: {station.imag.toFixed(0)}i cm⁻¹. Hay que visualizar el modo; un número solo no identifica el TS.</p>}
    </article>
  );
}

function StationTable({ stations, selected, onPick }: { stations: Station[]; selected: string; yMode: "dG" | "dH"; onPick: (id: string) => void }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-mist">
          <tr>
            <th className="py-2 pr-3">Punto</th>
            <th className="py-2 pr-3">ΔH</th>
            <th className="py-2 pr-3">ΔG</th>
            <th className="py-2 pr-3">ΔS</th>
            <th className="py-2">Origen</th>
          </tr>
        </thead>
        <tbody>
          {stations.map((s) => (
            <tr key={s.id} className={`border-t border-mist/30 ${s.id === selected ? "bg-teal/10" : ""}`} onClick={() => onPick(s.id)}>
              <td className="py-2 pr-3"><button type="button" className="min-h-11 text-left font-semibold">{s.short} · {s.kind === "ts" ? "TS" : s.kind === "mecp" ? "MECP" : "mín"}</button></td>
              <td className="py-2 pr-3 tabular-nums">{s.dH.toFixed(1)}</td>
              <td className="py-2 pr-3 tabular-nums">{s.dG.toFixed(1)}</td>
              <td className="py-2 pr-3 tabular-nums">{s.dS.toFixed(1)}</td>
              <td className="py-2"><Badge anchor={s.anchor} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Badge({ anchor }: { anchor: Station["anchor"] }) {
  const cls = anchor === "literatura" ? "bg-teal text-paper" : anchor === "reconstrucción" ? "bg-copper text-paper" : "bg-mist text-paper";
  return <span className={`rounded-full px-2 py-1 text-xs font-semibold ${cls}`}>{anchor}</span>;
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 rounded-card border border-mist/40 p-3">
      <h2 className="text-lg">{title}</h2>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-mist">{label}</span>
      {children}
    </label>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <select className="min-h-11 rounded-lg border border-mist/50 bg-paper px-2 text-ink" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

function Seg({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className={`min-h-11 rounded-lg px-3 text-sm font-semibold ${on ? "bg-teal text-paper" : "border border-mist/50"}`}>{label}</button>
  );
}

function Check({ on, onClick, label, disabled }: { on: boolean; onClick: () => void; label: string; disabled?: boolean }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="min-h-11 rounded-lg border border-mist/50 px-3 text-left text-sm disabled:opacity-40">
      <span className={`mr-2 inline-block h-3 w-3 rounded-sm ${on ? "bg-copper" : "border border-mist"}`} />
      {label}
    </button>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-mist">{k}</dt>
      <dd className="tabular-nums font-semibold">{v}</dd>
    </div>
  );
}

function fmtK(k: number) {
  if (!Number.isFinite(k)) return "—";
  if (k < 1e-4 || k >= 1e5) return `${k.toExponential(2)} s⁻¹`;
  return `${k.toPrecision(3)} s⁻¹`;
}

function fmtTime(s: number) {
  if (!Number.isFinite(s)) return "—";
  if (s < 1e-6) return `${(s * 1e9).toExponential(1)} ns`;
  if (s < 1) return `${(s * 1e3).toFixed(2)} ms`;
  if (s < 120) return `${s.toFixed(2)} s`;
  if (s < 7200) return `${(s / 60).toFixed(1)} min`;
  if (s < 172800) return `${(s / 3600).toFixed(1)} h`;
  return `${(s / 86400).toExponential(2)} d`;
}

function download(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
