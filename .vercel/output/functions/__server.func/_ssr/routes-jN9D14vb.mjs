import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CartesianGrid, c as ResponsiveContainer, i as Line, l as Tooltip, n as YAxis, o as ReferenceLine, r as XAxis, s as ErrorBar, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jN9D14vb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUBSTITUENTS = {
	H: {
		id: "H",
		label: "H",
		sigma: 0,
		bulk: 0,
		mass: 1.00784
	},
	Me: {
		id: "Me",
		label: "Me",
		sigma: -.17,
		bulk: 1,
		mass: 15.0346
	},
	Ph: {
		id: "Ph",
		label: "Ph",
		sigma: .06,
		bulk: 1.75,
		mass: 77.1039
	},
	CO2Me: {
		id: "CO2Me",
		label: "CO₂Me",
		sigma: .45,
		bulk: 1.55,
		mass: 59.044
	},
	CN: {
		id: "CN",
		label: "CN",
		sigma: .66,
		bulk: .55,
		mass: 26.0174
	},
	TMS: {
		id: "TMS",
		label: "TMS",
		sigma: -.04,
		bulk: 2.55,
		mass: 73.188
	},
	CF3: {
		id: "CF3",
		label: "CF₃",
		sigma: .54,
		bulk: 1.35,
		mass: 69.006
	},
	OMe: {
		id: "OMe",
		label: "OMe",
		sigma: -.27,
		bulk: 1.15,
		mass: 31.0339
	},
	tBu: {
		id: "tBu",
		label: "tBu",
		sigma: -.2,
		bulk: 2.85,
		mass: 57.115
	}
};
var ALKYNES = {
	acetylene: {
		id: "acetylene",
		name: "Acetileno",
		formula: "HC≡CH",
		a: "H",
		b: "H"
	},
	propyne: {
		id: "propyne",
		name: "Propino",
		formula: "MeC≡CH",
		a: "Me",
		b: "H"
	},
	phac: {
		id: "phac",
		name: "Fenilacetileno",
		formula: "PhC≡CH",
		a: "Ph",
		b: "H"
	},
	butyne: {
		id: "butyne",
		name: "2-Butino",
		formula: "MeC≡CMe",
		a: "Me",
		b: "Me"
	},
	dpa: {
		id: "dpa",
		name: "Difenilacetileno",
		formula: "PhC≡CPh",
		a: "Ph",
		b: "Ph"
	},
	dmad: {
		id: "dmad",
		name: "DMAD",
		formula: "MeO₂CC≡CCO₂Me",
		a: "CO2Me",
		b: "CO2Me"
	},
	tmsac: {
		id: "tmsac",
		name: "TMS-acetileno",
		formula: "TMSC≡CH",
		a: "TMS",
		b: "H"
	},
	cyanoac: {
		id: "cyanoac",
		name: "Cianoacetileno",
		formula: "NCC≡CH",
		a: "CN",
		b: "H"
	},
	propiolate: {
		id: "propiolate",
		name: "Propiolato de metilo",
		formula: "MeC≡CCO₂Me",
		a: "Me",
		b: "CO2Me"
	},
	tbuac: {
		id: "tbuac",
		name: "3,3-Dimetil-1-butino",
		formula: "tBuC≡CH",
		a: "tBu",
		b: "H"
	}
};
var ALKYNE_LIST = Object.values(ALKYNES);
var METALS$1 = {
	none: {
		id: "none",
		name: "Térmica, sin metal",
		fragment: "—",
		note: "Cicloadición [2+2+2] no catalizada. Permitida por Woodward–Hoffmann, pero con una barrera alta por repulsión de capas cerradas.",
		dBarrier: 0,
		dRxn: 0,
		dArene: 0,
		fragmentMass: 0,
		element: "",
		allowsTwoState: false
	},
	CpCo: {
		id: "CpCo",
		name: "CpCo (ancla)",
		fragment: "CpCo(PH₃)₂",
		note: "Superficie ancla de Hardesty, Albright et al., JACS 1999. PH₃ trunca PPh₃/CO. Co(I), d⁸.",
		dBarrier: 0,
		dRxn: 0,
		dArene: 0,
		fragmentMass: 123.99,
		element: "Co",
		allowsTwoState: true
	},
	CpStarCo: {
		id: "CpStarCo",
		name: "Cp*Co",
		fragment: "Cp*Co(PH₃)₂",
		note: "Cp* más dador y más voluminoso. Barrera de acoplamiento algo mayor; el areno se libera con más facilidad. Modelo, no un artículo único.",
		dBarrier: 2,
		dRxn: 3,
		dArene: 3.5,
		fragmentMass: 194.13,
		element: "Co",
		allowsTwoState: true
	},
	CpRh: {
		id: "CpRh",
		name: "CpRh",
		fragment: "CpRh(PH₃)₂",
		note: "ΔE de reacción B3LYP/TZ2P de Dalla Tiezza, Bickelhaupt y Orian (ChemPhysChem 2018): Co −16.5, Rh +4.2 kcal/mol. La barrera se traslada con Evans–Polanyi (α = 0.45).",
		dBarrier: 9.3,
		dRxn: 20.68,
		dArene: -6,
		fragmentMass: 167.98,
		element: "Rh",
		allowsTwoState: false
	},
	CpIr: {
		id: "CpIr",
		name: "CpIr",
		fragment: "CpIr(PH₃)₂",
		note: "Mismo análisis de activación-distorsión: Ir queda entre Co y Rh (ΔE ≈ +1.0 kcal/mol en B3LYP/TZ2P para el acoplamiento).",
		dBarrier: 7.9,
		dRxn: 17.53,
		dArene: -4,
		fragmentMass: 257.29,
		element: "Ir",
		allowsTwoState: false
	},
	CpRuCl: {
		id: "CpRuCl",
		name: "CpRuCl",
		fragment: "CpRuCl(PH₃)₂",
		note: "Modelo de los sistemas CpRuCl usados en [2+2+2]. El desplazamiento frente a Co es una tendencia, no una barrera publicada para este truncamiento.",
		dBarrier: 3.5,
		dRxn: 4,
		dArene: -3,
		fragmentMass: 201.63,
		element: "Ru",
		allowsTwoState: false
	},
	Ni0: {
		id: "Ni0",
		name: "Ni(0)",
		fragment: "Ni(PH₃)₂",
		note: "Truncamiento de Ni(PMe₃)ₙ / Ni(COD)₂. El Ni(0) acopla con barrera baja y suelta el areno antes que CpCo. Tendencia de modelo.",
		dBarrier: -4.5,
		dRxn: -8,
		dArene: 6,
		fragmentMass: 58.693,
		element: "Ni",
		allowsTwoState: false
	}
};
var METAL_LIST = Object.values(METALS$1);
var METHODS = {
	b3lyp: {
		id: "b3lyp",
		label: "B3LYP/6-31G(d) · gas, sin dispersión",
		short: "B3LYP/DZ",
		functional: "B3LYP",
		optBasis: "6-31G(d)",
		spBasis: "6-311+G(d,p)",
		dispersionKeyword: null,
		recovery: 0,
		tz: false,
		dispersionWeight: 0,
		scale: .9614,
		uncertainty: 5,
		metalWarning: null
	},
	"b3lyp-d3": {
		id: "b3lyp-d3",
		label: "B3LYP-D3(BJ)/def2-TZVP",
		short: "B3LYP-D3/TZ",
		functional: "B3LYP",
		optBasis: "def2SVP",
		spBasis: "def2TZVP",
		dispersionKeyword: "empiricaldispersion=GD3BJ",
		recovery: .25,
		tz: true,
		dispersionWeight: 1,
		scale: .96,
		uncertainty: 3.5,
		metalWarning: null
	},
	m06: {
		id: "m06",
		label: "M06/def2-TZVP",
		short: "M06/TZ",
		functional: "M06",
		optBasis: "def2SVP",
		spBasis: "def2TZVP",
		dispersionKeyword: null,
		recovery: .65,
		tz: true,
		dispersionWeight: .55,
		scale: .97,
		uncertainty: 3,
		metalWarning: null
	},
	m062x: {
		id: "m062x",
		label: "M06-2X/def2-TZVP",
		short: "M06-2X/TZ",
		functional: "M062X",
		optBasis: "def2SVP",
		spBasis: "def2TZVP",
		dispersionKeyword: null,
		recovery: .85,
		tz: true,
		dispersionWeight: .35,
		scale: .97,
		uncertainty: 2.4,
		metalWarning: "M06-2X (54 % de intercambio HF) está parametrizado para grupos principales. En Co/Rh/Ru/Ir sube el error: mejor M06, ωB97X-D o PBE0-D3 para el metal, y reservar M06-2X a la reacción térmica orgánica."
	},
	wb97xd: {
		id: "wb97xd",
		label: "ωB97X-D/def2-TZVP",
		short: "ωB97X-D/TZ",
		functional: "wB97XD",
		optBasis: "def2SVP",
		spBasis: "def2TZVP",
		dispersionKeyword: null,
		recovery: .75,
		tz: true,
		dispersionWeight: 1,
		scale: .975,
		uncertainty: 2.8,
		metalWarning: null
	},
	"pbe0-d3": {
		id: "pbe0-d3",
		label: "PBE0-D3(BJ)/def2-TZVP",
		short: "PBE0-D3/TZ",
		functional: "PBE1PBE",
		optBasis: "def2SVP",
		spBasis: "def2TZVP",
		dispersionKeyword: "empiricaldispersion=GD3BJ",
		recovery: .6,
		tz: true,
		dispersionWeight: 1,
		scale: .959,
		uncertainty: 3,
		metalWarning: null
	},
	composite: {
		id: "composite",
		label: "Compuesto: ωB97X-D/def2-SVP opt+freq → SP def2-TZVPP + SMD",
		short: "Compuesto ωB97X-D",
		functional: "wB97XD",
		optBasis: "def2SVP",
		spBasis: "def2TZVPP",
		dispersionKeyword: null,
		recovery: .8,
		tz: true,
		dispersionWeight: 1,
		scale: .975,
		uncertainty: 2.5,
		metalWarning: null
	}
};
var METHOD_LIST = Object.values(METHODS);
var SOLVENTS = {
	gas: {
		id: "gas",
		name: "Fase gas",
		epsilon: 1,
		smd: null
	},
	toluene: {
		id: "toluene",
		name: "Tolueno (SMD)",
		epsilon: 2.374,
		smd: "toluene"
	},
	thf: {
		id: "thf",
		name: "THF (SMD)",
		epsilon: 7.426,
		smd: "thf"
	},
	meCN: {
		id: "meCN",
		name: "Acetonitrilo (SMD)",
		epsilon: 35.688,
		smd: "acetonitrile"
	}
};
/** ΔH° experimental 3 acetileno → benceno, kcal/mol. */
var EXP_DH_ACETYLENE = -142.8;
/**
* Déficit del ciclo B3LYP reconstruido (Hardesty) frente al experimento:
* el encadenado de ΔH publicados cierra en ≈ −114.3, no en −142.8.
*/
var B3LYP_CHAIN_DH = -114.3;
var B3LYP_DEFICIT = -28.500000000000014;
var R_KCAL = .00198720425864083;
var CITATIONS = [
	{
		id: "hardesty1999",
		authors: "Hardesty, J. H.; Koerner, J. B.; Albright, T. A.; Lee, G.-Y.",
		year: 1999,
		title: "Theoretical Study of the Acetylene Trimerization with CpCo",
		source: "J. Am. Chem. Soc. 121, 6055–6067",
		doi: "10.1021/ja983098e",
		usedFor: "Ancla de ΔH del ciclo CpCo(PH₃)₂: sustitución de ligandos −11.3; acoplamiento oxidante ΔH‡ 12.8 y ΔH −13.1; tercer acetileno unido por 12.4; colapso [4+2] ΔH‡ 0.5 y ΔH −81.4 kcal/mol."
	},
	{
		id: "agenet2007",
		authors: "Agenet, N.; Gandon, V.; Vollhardt, K. P. C.; Malacria, M.; Aubert, C.",
		year: 2007,
		title: "Cobalt-Catalyzed Cyclotrimerization of Alkynes: The Answer to the Puzzle of Parallel Reaction Pathways",
		source: "J. Am. Chem. Soc. 129, 8860–8871",
		doi: "10.1021/ja072208r",
		usedFor: "El metalaciclopentadieno de cobalto es un triplete. Dos ciclos: [4+2] intramolecular asistido por el metal, o atrapamiento con PR₃ y Diels–Alder intermolecular vía cobaltanorborneno. Cruce singlete–triplete por MECP."
	},
	{
		id: "gandon2006",
		authors: "Gandon, V.; Agenet, N.; Vollhardt, K. P. C.; Malacria, M.; Aubert, C.",
		year: 2006,
		title: "Cobalt-Mediated Cyclic and Linear 2:1 Cooligomerization of Alkynes with Alkenes: A DFT Study",
		source: "J. Am. Chem. Soc. 128, 8509–8520",
		doi: "10.1021/ja060756j",
		usedFor: "Contraste mecanístico: el alqueno se inserta en el enlace Co–C y da un metalaciclo de siete, a diferencia del colapso directo del alquino."
	},
	{
		id: "roglans2021",
		authors: "Roglans, A.; Pla-Quintana, A.; Solà, M.",
		year: 2021,
		title: "Mechanistic Studies of Transition-Metal-Catalyzed [2+2+2] Cycloaddition Reactions",
		source: "Chem. Rev. 121, 1894–1979",
		doi: "10.1021/acs.chemrev.0c00062",
		usedFor: "Marco del campo: Co, Ni, Ru, Rh, Ir y otros; regioselectividad 1,2,4 frente a 1,3,5; el complejo de areno como posible estado de reposo."
	},
	{
		id: "oriana2018",
		authors: "Dalla Tiezza, M.; Bickelhaupt, F. M.; Orian, L.",
		year: 2018,
		title: "Group 9 Metallacyclopentadienes as Key Intermediates in [2+2+2] Alkyne Cyclotrimerizations. Insight from Activation Strain Analyses",
		source: "ChemPhysChem 19, 1766–1773",
		doi: "10.1002/cphc.201800178",
		usedFor: "El acoplamiento oxidante es el paso de mayor barrera del ciclo CpM. ΔE B3LYP/TZ2P: Co −16.53, Rh +4.15, Ir +1.00 kcal/mol. El Co gana por una interacción más estabilizante."
	},
	{
		id: "bach1985",
		authors: "Bach, R. D.; Wolber, G. J.; Schlegel, H. B.",
		year: 1985,
		title: "The Origin of the Barriers to Thermally Allowed, Six-Electron, Pericyclic Reactions: The Effect of HOMO–HOMO Interactions on the Trimerization of Acetylene",
		source: "J. Am. Chem. Soc. 107, 2837–2841",
		doi: "10.1021/ja00296a002",
		usedFor: "Barrera concertada ≈ 62 kcal/mol al incluir correlación (HF/6-31G* ≈ 81). ΔH° ≈ −143 kcal/mol. La barrera es repulsión de capas cerradas, no una prohibición de simetría."
	},
	{
		id: "santos2005",
		authors: "Santos, J. C.; Polo, V.; Andrés, J.",
		year: 2005,
		title: "An electron localization function study of the trimerization of acetylene: Reaction mechanism and development of aromaticity",
		source: "Chem. Phys. Lett. 406, 393–397",
		doi: "10.1016/j.cplett.2005.02.102",
		usedFor: "IRC en D₃h a B3LYP/6-311+G(d) (Gaussian 98). La aromaticidad de plano σ y π aparece a lo largo del IRC, no de golpe en el TS."
	},
	{
		id: "obc2017",
		authors: "Jones, G. O.; Krebs, Z. J.",
		year: 2017,
		title: "The trimerization of acetylenes involves a cascade of biradical and pericyclic processes",
		source: "Org. Biomol. Chem. 15, 8326–8333",
		doi: "10.1039/c7ob01885a",
		usedFor: "Para acetilenos neutros o ricos, la cascada birradical → ciclobutadieno → Dewar benceno → benceno puede ganar al concertado. La altura concreta de esa cascada en esta app es un modelo, no el número del artículo."
	},
	{
		id: "prieto2012",
		authors: "Rodríguez-García, A. M.; Cebrián, C.; Prieto, P.; García, J. I.; de la Hoz, A.; Díaz-Ortiz, Á.",
		year: 2012,
		title: "DFT Studies on Cobalt-Catalyzed Cyclotrimerization Reactions: The Mechanism and Origin of Reaction Improvement under Microwave Irradiation",
		source: "Chem. Eur. J. 18, 6217–6224",
		doi: "10.1002/chem.201103560",
		usedFor: "Orden de magnitud del pozo triplete (~17 kcal/mol bajo el singlete) y del MECP (~10 kcal/mol sobre el singlete) en sistemas sustituidos. Aquí se usa como ancla aproximada, no como energía del acetileno padre."
	},
	{
		id: "grimme2012",
		authors: "Grimme, S.",
		year: 2012,
		title: "Supramolecular Binding Thermodynamics by Dispersion-Corrected Density Functional Theory",
		source: "Chem. Eur. J. 18, 9955–9964",
		doi: "10.1002/chem.201200497",
		usedFor: "Cuasi-RRHO: interpolación vibración / rotor libre con ν₀ = 100 cm⁻¹."
	},
	{
		id: "truhlar2011",
		authors: "Ribeiro, R. F.; Marenich, A. V.; Cramer, C. J.; Truhlar, D. G.",
		year: 2011,
		title: "Use of Solution-Phase Vibrational Frequencies in Continuum Models for the Free Energy of Solvation",
		source: "J. Phys. Chem. B 115, 14556–14562",
		doi: "10.1021/jp205508z",
		usedFor: "Corte cuasi-armónico: modos por debajo de 100 cm⁻¹ se suben a 100 cm⁻¹ solo en la entropía."
	},
	{
		id: "alecu2010",
		authors: "Alecu, I. M.; Zheng, J.; Zhao, Y.; Truhlar, D. G.",
		year: 2010,
		title: "Computational Thermochemistry: Scale Factor Databases and Scale Factors for Vibrational Frequencies Obtained from Electronic Model Chemistries",
		source: "J. Chem. Theory Comput. 6, 2872–2887",
		doi: "10.1021/ct100326h",
		usedFor: "Factores de escala. El de B3LYP/6-31G(d) usado aquí es 0.9614 (Scott y Radom). El resto son factores de trabajo: confirmar en CCCBDB para la base exacta."
	},
	{
		id: "kozuch2011",
		authors: "Kozuch, S.; Shaik, S.",
		year: 2011,
		title: "How to Conceptualize Catalytic Cycles? The Energetic Span Model",
		source: "Acc. Chem. Res. 44, 101–110",
		doi: "10.1021/ar1000956",
		usedFor: "Span energético, TDTS y TDI. TOF ≈ (kBT/h) exp(−δE/RT)."
	},
	{
		id: "eyring",
		authors: "Eyring, H.; Wigner, E.",
		year: 1935,
		title: "Teoría del estado de transición y corrección de túnel de Wigner",
		source: "J. Chem. Phys. 1935, 3, 107; Z. Phys. Chem. 1932",
		doi: "10.1063/1.1749604",
		usedFor: "k = κ (kBT/h) exp(−ΔG‡/RT), con κ ≈ 1 + (1/24)(hν‡/kBT)²."
	}
];
var MASSES = {
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
	Ir: 192.217
};
MASSES.P + 3 * MASSES.H;
var add = (a, b) => [
	a[0] + b[0],
	a[1] + b[1],
	a[2] + b[2]
];
var sub = (a, b) => [
	a[0] - b[0],
	a[1] - b[1],
	a[2] - b[2]
];
var scl = (a, s) => [
	a[0] * s,
	a[1] * s,
	a[2] * s
];
var cross = (a, b) => [
	a[1] * b[2] - a[2] * b[1],
	a[2] * b[0] - a[0] * b[2],
	a[0] * b[1] - a[1] * b[0]
];
var len = (a) => Math.hypot(a[0], a[1], a[2]);
var norm = (a) => {
	return scl(a, 1 / (len(a) || 1));
};
function frame(u) {
	const v = norm(cross(u, Math.abs(u[1]) < .85 ? [
		0,
		1,
		0
	] : [
		1,
		0,
		0
	]));
	return {
		v,
		w: norm(cross(u, v))
	};
}
function push(atoms, el, p) {
	atoms.push({
		el,
		x: round(p[0]),
		y: round(p[1]),
		z: round(p[2])
	});
}
var round = (x) => Math.round(x * 1e6) / 1e6;
function addSubstituent(atoms, attach, outward, id) {
	const u = norm(outward);
	if (id === "H") {
		push(atoms, "H", add(attach, scl(u, 1.08)));
		return;
	}
	const { v, w } = frame(u);
	const cap = (origin, axis, bond, el) => {
		for (let k = 0; k < 3; k++) {
			const ang = k * 2 * Math.PI / 3;
			const perp = add(scl(v, Math.cos(ang)), scl(w, Math.sin(ang)));
			push(atoms, el, add(origin, scl(norm(add(scl(axis, 1 / 3), scl(perp, Math.sqrt(8 / 9)))), bond)));
		}
	};
	if (id === "Me") {
		const c = add(attach, scl(u, 1.51));
		push(atoms, "C", c);
		cap(c, u, 1.09, "H");
		return;
	}
	if (id === "tBu") {
		const c = add(attach, scl(u, 1.54));
		push(atoms, "C", c);
		for (let k = 0; k < 3; k++) {
			const ang = k * 2 * Math.PI / 3;
			const perp = add(scl(v, Math.cos(ang)), scl(w, Math.sin(ang)));
			const dir = norm(add(scl(u, 1 / 3), scl(perp, Math.sqrt(8 / 9))));
			const mc = add(c, scl(dir, 1.53));
			push(atoms, "C", mc);
			cap(mc, dir, 1.09, "H");
		}
		return;
	}
	if (id === "CF3") {
		const c = add(attach, scl(u, 1.5));
		push(atoms, "C", c);
		cap(c, u, 1.34, "F");
		return;
	}
	if (id === "CN") {
		const c = add(attach, scl(u, 1.38));
		push(atoms, "C", c);
		push(atoms, "N", add(c, scl(u, 1.16)));
		return;
	}
	if (id === "OMe") {
		const o = add(attach, scl(u, 1.36));
		push(atoms, "O", o);
		const side = norm(add(scl(u, .3), scl(v, .95)));
		const c = add(o, scl(side, 1.43));
		push(atoms, "C", c);
		cap(c, side, 1.09, "H");
		return;
	}
	if (id === "CO2Me") {
		const c = add(attach, scl(u, 1.48));
		push(atoms, "C", c);
		push(atoms, "O", add(c, norm(add(scl(u, .35), scl(v, 1)))));
		const o2 = add(c, scl(norm(add(scl(u, .4), scl(v, -1))), 1.34));
		push(atoms, "O", o2);
		const mc = add(o2, scl(norm(add(scl(u, 1), scl(v, -.45))), 1.42));
		push(atoms, "C", mc);
		cap(mc, norm(sub(mc, o2)), 1.09, "H");
		return;
	}
	if (id === "TMS") {
		const si = add(attach, scl(u, 1.88));
		push(atoms, "Si", si);
		for (let k = 0; k < 3; k++) {
			const ang = k * 2 * Math.PI / 3;
			const perp = add(scl(v, Math.cos(ang)), scl(w, Math.sin(ang)));
			const dir = norm(add(scl(u, 1 / 3), scl(perp, Math.sqrt(8 / 9))));
			const c = add(si, scl(dir, 1.88));
			push(atoms, "C", c);
			cap(c, dir, 1.09, "H");
		}
		return;
	}
	const center = add(attach, scl(u, 2.8));
	push(atoms, "C", add(center, scl(u, -1.4)));
	for (let k = 1; k < 6; k++) {
		const ang = Math.PI + k * Math.PI / 3;
		const p = add(center, add(scl(u, 1.4 * Math.cos(ang)), scl(v, 1.4 * Math.sin(ang))));
		push(atoms, "C", p);
		push(atoms, "H", add(p, scl(norm(sub(p, center)), 1.08)));
	}
}
function alkyneMolecule(id) {
	const d = ALKYNES[id];
	const atoms = [];
	const c1 = [
		0,
		0,
		-.62
	];
	const c2 = [
		0,
		0,
		.62
	];
	push(atoms, "C", c1);
	push(atoms, "C", c2);
	addSubstituent(atoms, c1, [
		0,
		0,
		-1
	], d.a);
	addSubstituent(atoms, c2, [
		0,
		0,
		1
	], d.b);
	return atoms;
}
function ph3() {
	const atoms = [];
	push(atoms, "P", [
		0,
		0,
		0
	]);
	const u = [
		0,
		0,
		1
	];
	const { v, w } = frame(u);
	for (let k = 0; k < 3; k++) {
		const ang = k * 2 * Math.PI / 3;
		const perp = add(scl(v, Math.cos(ang)), scl(w, Math.sin(ang)));
		push(atoms, "H", add([
			0,
			0,
			0
		], scl(norm(add(scl(u, .12), scl(perp, .99))), 1.42)));
	}
	return atoms;
}
function cp(star) {
	const atoms = [];
	const center = [
		0,
		0,
		-1.76
	];
	const { v, w } = frame([
		0,
		0,
		-1
	]);
	for (let k = 0; k < 5; k++) {
		const ang = k * 2 * Math.PI / 5;
		const radial = add(scl(v, Math.cos(ang)), scl(w, Math.sin(ang)));
		const c = add(center, scl(radial, 1.22));
		push(atoms, "C", c);
		if (star) {
			const me = add(c, scl(radial, 1.51));
			push(atoms, "C", me);
			const { v: mv, w: mw } = frame(radial);
			for (let h = 0; h < 3; h++) {
				const a = h * 2 * Math.PI / 3;
				const perp = add(scl(mv, Math.cos(a)), scl(mw, Math.sin(a)));
				push(atoms, "H", add(me, scl(norm(add(scl(radial, 1 / 3), scl(perp, Math.sqrt(8 / 9)))), 1.09)));
			}
		} else push(atoms, "H", add(c, scl(radial, 1.08)));
	}
	return atoms;
}
function metalAtoms(metal) {
	if (metal === "none") return [];
	const atoms = [];
	push(atoms, METALS$1[metal].element, [
		0,
		0,
		0
	]);
	if (metal !== "Ni0") atoms.push(...cp(metal === "CpStarCo"));
	if (metal === "CpRuCl") push(atoms, "Cl", [
		2.2,
		.4,
		.2
	]);
	return atoms;
}
function boundAlkyne(id, center, along) {
	const d = ALKYNES[id];
	const u = norm(along);
	const c1 = add(center, scl(u, -.63));
	const c2 = add(center, scl(u, .63));
	const atoms = [];
	push(atoms, "C", c1);
	push(atoms, "C", c2);
	addSubstituent(atoms, c1, scl(u, -1), d.a);
	addSubstituent(atoms, c2, u, d.b);
	return atoms;
}
function twoPhosphines(close) {
	if (close) return [...shift(ph3(), [
		1.7,
		.35,
		1.15
	]), ...shift(ph3(), [
		-1.7,
		-.35,
		1.15
	])];
	return [];
}
function shift(atoms, d) {
	return atoms.map((a) => ({
		el: a.el,
		x: round(a.x + d[0]),
		y: round(a.y + d[1]),
		z: round(a.z + d[2])
	}));
}
function benzeneMolecule(ids) {
	const atoms = [];
	const ends = ids.flatMap((id) => [ALKYNES[id].a, ALKYNES[id].b]);
	for (let k = 0; k < 6; k++) {
		const ang = k * Math.PI / 3 - Math.PI / 6;
		const radial = [
			Math.cos(ang),
			Math.sin(ang),
			0
		];
		const c = scl(radial, 1.397);
		push(atoms, "C", c);
		addSubstituent(atoms, c, radial, ends[k]);
	}
	return atoms;
}
function precursor(metal) {
	return [...metalAtoms(metal), ...twoPhosphines(true)];
}
function bis(metal, a, b, approach) {
	const x = 1.45 - approach * .25;
	const y = .72 - approach * .35;
	return [
		...metalAtoms(metal),
		...boundAlkyne(a, [
			x,
			0,
			.9
		], [
			0,
			y > .2 ? 1 : .4,
			0
		]),
		...boundAlkyne(b, [
			-x,
			0,
			.9
		], [
			0,
			y > .2 ? 1 : .4,
			0
		])
	];
}
function cycleCarbons() {
	return [
		[
			1.32,
			-.9,
			.7
		],
		[
			1.05,
			-.1,
			1.82
		],
		[
			-.1,
			1.05,
			1.82
		],
		[
			-.9,
			1.32,
			.7
		]
	];
}
function metallacycle(metal, a, b, third, thirdZ) {
	const atoms = [...metalAtoms(metal)];
	const [a1, b1, b2, a2] = cycleCarbons();
	for (const p of [
		a1,
		b1,
		b2,
		a2
	]) push(atoms, "C", p);
	const A = ALKYNES[a];
	const B = ALKYNES[b];
	const out = (p) => norm([
		p[0],
		p[1],
		.3
	]);
	addSubstituent(atoms, a1, out(a1), A.a);
	addSubstituent(atoms, b1, out(b1), A.b);
	addSubstituent(atoms, b2, out(b2), B.a);
	addSubstituent(atoms, a2, out(a2), B.b);
	if (third) atoms.push(...boundAlkyne(third, [
		0,
		0,
		thirdZ
	], [
		1,
		0,
		0
	]));
	return atoms;
}
function areneOnMetal(metal, ids, z) {
	return [...metalAtoms(metal), ...shift(benzeneMolecule(ids), [
		.3,
		0,
		z
	])];
}
function threeFar(ids, R) {
	const atoms = [];
	ids.forEach((id, i) => {
		const th = i * 2 * Math.PI / 3;
		const mid = [
			R * Math.cos(th),
			R * Math.sin(th),
			0
		];
		const tan = [
			-Math.sin(th),
			Math.cos(th),
			0
		];
		const d = ALKYNES[id];
		const c1 = add(mid, scl(tan, -.62));
		const c2 = add(mid, scl(tan, .62));
		push(atoms, "C", c1);
		push(atoms, "C", c2);
		addSubstituent(atoms, c1, scl(tan, -1), d.a);
		addSubstituent(atoms, c2, tan, d.b);
	});
	return atoms;
}
function alkyneSigma(id) {
	const d = ALKYNES[id];
	if (d.a === "H" && d.b === "H") return 2;
	if (d.a === "Me" && d.b === "Me") return 6;
	if (d.a === d.b) return 2;
	if (d.a === "H" || d.b === "H") {
		const other = d.a === "H" ? d.b : d.a;
		if (other === "Me" || other === "CF3" || other === "tBu") return 3;
	}
	return 1;
}
function benzeneSigma(ids) {
	if (ids.every((id) => id === "acetylene")) return 12;
	if (ids.every((id) => id === "butyne")) return 6;
	return 1;
}
function stationPieces(req) {
	const [ia, ib, ic] = req.alkynes;
	const free = (id, label) => ({
		label,
		atoms: alkyneMolecule(id),
		sigma: alkyneSigma(id),
		role: "alkyne"
	});
	const ligand = (n) => ({
		label: `PH₃ (${n})`,
		atoms: ph3(),
		sigma: 3,
		role: "ligand"
	});
	const benzene = () => ({
		label: "areno",
		atoms: benzeneMolecule(req.alkynes),
		sigma: benzeneSigma(req.alkynes),
		role: "arene"
	});
	const complex = (label, atoms) => ({
		label,
		atoms,
		sigma: 1,
		role: "complex"
	});
	if (req.metal === "none") {
		if (req.kind === "thermal-prod" || req.kind === "prod") return [benzene()];
		if (req.kind === "thermal-vdw") return [complex("precomplejo", threeFar(req.alkynes, 3.2))];
		if (req.kind === "thermal-ts") return [complex("TS concertado", threeFar(req.alkynes, 1.72))];
		if (req.kind === "thermal-birad") return [complex("estructura birradical de partida", threeFar(req.alkynes, 2.15))];
		return [
			free(ia, "alquino A"),
			free(ib, "alquino B"),
			free(ic, "alquino C")
		];
	}
	if (req.kind === "pre") return [
		complex("precursor", precursor(req.metal)),
		free(ia, "A"),
		free(ib, "B"),
		free(ic, "C")
	];
	if (req.kind === "prod") return [complex("precursor", precursor(req.metal)), benzene()];
	if (req.kind === "bis") return [
		complex("bis-η²", bis(req.metal, ia, ib, 0)),
		ligand(1),
		ligand(2),
		free(ic, "C")
	];
	if (req.kind === "ts-oc") return [
		complex("TS acoplamiento", bis(req.metal, ia, ib, .85)),
		ligand(1),
		ligand(2),
		free(ic, "C")
	];
	if (req.kind === "mc") return [
		complex("metalaciclo", metallacycle(req.metal, ia, ib, null, 0)),
		ligand(1),
		ligand(2),
		free(ic, "C")
	];
	if (req.kind === "adduct") return [
		complex("aducto", metallacycle(req.metal, ia, ib, ic, 4.05)),
		ligand(1),
		ligand(2)
	];
	if (req.kind === "ts-collapse") return [
		complex("TS [4+2]", metallacycle(req.metal, ia, ib, ic, 3.55)),
		ligand(1),
		ligand(2)
	];
	if (req.kind === "arene") return [
		complex("η⁴-areno", areneOnMetal(req.metal, req.alkynes, 1.75)),
		ligand(1),
		ligand(2)
	];
	if (req.kind === "ts-release") return [
		complex("TS de liberación", areneOnMetal(req.metal, req.alkynes, 2.45)),
		ligand(1),
		ligand(2)
	];
	return [complex("especie", precursor(req.metal))];
}
function minDistance(atoms) {
	let d = Infinity;
	let pair = "";
	for (let i = 0; i < atoms.length; i++) for (let j = i + 1; j < atoms.length; j++) {
		const r = Math.hypot(atoms[i].x - atoms[j].x, atoms[i].y - atoms[j].y, atoms[i].z - atoms[j].z);
		if (r < d) {
			d = r;
			pair = `${atoms[i].el}${i + 1}–${atoms[j].el}${j + 1}`;
		}
	}
	return {
		d,
		pair
	};
}
function formingCC(atoms) {
	const carbons = atoms.filter((a) => a.el === "C");
	let forming = Infinity;
	for (let i = 0; i < carbons.length; i++) for (let j = i + 1; j < carbons.length; j++) {
		const r = Math.hypot(carbons[i].x - carbons[j].x, carbons[i].y - carbons[j].y, carbons[i].z - carbons[j].z);
		if (r > 1.45 && r < forming) forming = r;
	}
	return Number.isFinite(forming) ? forming : null;
}
function inertia(atoms, sigma) {
	let mx = 0, my = 0, mz = 0, mass = 0;
	const pts = atoms.map((a) => {
		const m = MASSES[a.el] ?? 12;
		mass += m;
		mx += m * a.x;
		my += m * a.y;
		mz += m * a.z;
		return {
			m,
			x: a.x,
			y: a.y,
			z: a.z
		};
	});
	if (mass < 1e-6) return {
		linear: false,
		moments: [
			1e-46,
			1e-46,
			1e-46
		],
		sigma
	};
	mx /= mass;
	my /= mass;
	mz /= mass;
	let ixx = 0, iyy = 0, izz = 0, ixy = 0, ixz = 0, iyz = 0;
	for (const a of pts) {
		const x = a.x - mx, y = a.y - my, z = a.z - mz;
		ixx += a.m * (y * y + z * z);
		iyy += a.m * (x * x + z * z);
		izz += a.m * (x * x + y * y);
		ixy -= a.m * x * y;
		ixz -= a.m * x * z;
		iyz -= a.m * y * z;
	}
	const ev = jacobi(ixx, iyy, izz, ixy, ixz, iyz).sort((p, q) => p - q);
	const si = (v) => Math.max(v, 0) * 16605390666e-57;
	const moments = [
		si(ev[0]),
		si(ev[1]),
		si(ev[2])
	];
	return {
		linear: moments[2] > 0 && moments[0] < moments[2] * .015,
		moments,
		sigma
	};
}
function jacobi(ixx, iyy, izz, ixy, ixz, iyz) {
	const a = [
		[
			ixx,
			ixy,
			ixz
		],
		[
			ixy,
			iyy,
			iyz
		],
		[
			ixz,
			iyz,
			izz
		]
	];
	for (let iter = 0; iter < 20; iter++) {
		let p = 0, q = 1, max = Math.abs(a[0][1]);
		if (Math.abs(a[0][2]) > max) {
			max = Math.abs(a[0][2]);
			q = 2;
		}
		if (Math.abs(a[1][2]) > max) {
			p = 1;
			q = 2;
		}
		if (max < 1e-10) break;
		const app = a[p][p], aqq = a[q][q], apq = a[p][q];
		const tau = (aqq - app) / (2 * apq || 1e-30);
		const t = Math.sign(tau || 1) / (Math.abs(tau) + Math.sqrt(1 + tau * tau));
		const c = 1 / Math.sqrt(1 + t * t);
		const s = t * c;
		a[p][p] = app - t * apq;
		a[q][q] = aqq + t * apq;
		a[p][q] = a[q][p] = 0;
		for (let r = 0; r < 3; r++) {
			if (r === p || r === q) continue;
			const arp = a[r][p], arq = a[r][q];
			a[r][p] = a[p][r] = c * arp - s * arq;
			a[r][q] = a[q][r] = s * arp + c * arq;
		}
	}
	return [
		a[0][0],
		a[1][1],
		a[2][2]
	];
}
var MULT = {
	singlete: 1,
	triplete: 3,
	cruce: 1,
	"singlete abierto": 1
};
function xyzBlock(atoms) {
	return atoms.map((a) => `${a.el.padEnd(2)} ${a.x.toFixed(6).padStart(12)} ${a.y.toFixed(6).padStart(12)} ${a.z.toFixed(6).padStart(12)}`).join("\n");
}
function route(method, job, kind, solventName) {
	const m = METHODS[method];
	const disp = m.dispersionKeyword ? ` ${m.dispersionKeyword}` : "";
	const scrf = solventName ? ` scrf=(smd,solvent=${solventName})` : "";
	const scale = `scale=${m.scale.toFixed(4)}`;
	const baseOpt = m.optBasis;
	const func = m.functional;
	const ts = kind.startsWith("ts");
	if (job === "stable") return `#p stable=opt ${func}/${baseOpt}${disp}${scrf} guess=mix nosymm`;
	if (job === "opt") return `#p ${ts ? "opt=(ts,calcfc,noeigentest,tight,maxstep=15)" : "opt=(calcfc,tight)"} ${func}/${baseOpt}${disp}${scrf} guess=read geom=allcheck nosymm int=ultrafine`;
	if (job === "freq") return `#p freq=(noraman,${scale}) ${func}/${baseOpt}${disp}${scrf} guess=read geom=allcheck nosymm int=ultrafine`;
	if (job === "irc") return `#p irc=(calcfc,maxpoints=60,recorrect=never,stepsize=8,lqa) ${func}/${baseOpt}${disp}${scrf} guess=read geom=allcheck nosymm`;
	return `#p ${func}/${m.spBasis}${disp}${scrf} guess=read geom=allcheck nosymm int=ultrafine scf=(xqc,maxcycle=256)`;
}
function gaussianDeck(input, stations, nproc, memGb) {
	const solvent = SOLVENTS[input.solvent].smd;
	const blocks = [];
	blocks.push(header(input, nproc));
	stations.forEach((st, idx) => {
		stationPieces({
			kind: st.geom,
			metal: input.metal,
			alkynes: input.alkynes
		}).forEach((piece, p) => {
			const tag = `${st.id}_${p + 1}`.replace(/[^a-z0-9_]/gi, "");
			const mult = st.spin === "triplete" && piece.role === "complex" ? 3 : MULT[st.spin] ?? 1;
			const charge = 0;
			const title = `${st.label} · fragmento ${piece.label}`.slice(0, 180);
			const jobs = [
				{
					route: route(input.method, "stable", st.geom, solvent),
					read: false
				},
				{
					route: route(input.method, "opt", st.geom, solvent),
					read: true
				},
				{
					route: route(input.method, "freq", st.geom, solvent),
					read: true
				},
				{
					route: route(input.method, "sp", st.geom, solvent),
					read: true
				}
			];
			if (st.kind === "ts" && piece.role === "complex") jobs.push({
				route: route(input.method, "irc", st.geom, solvent),
				read: true
			});
			jobs.forEach((job, j) => {
				const lines = [
					`%chk=${tag}.chk`,
					`%nprocshared=${nproc}`,
					`%mem=${memGb}GB`,
					job.route,
					"",
					title,
					""
				];
				if (!job.read) lines.push(`${charge} ${mult}`, xyzBlock(piece.atoms), "");
				else lines.push("");
				const body = lines.join("\n");
				blocks.push((idx === 0 && p === 0 && j === 0 ? "" : "--Link1--\n") + body);
			});
		});
	});
	blocks.push(protocolNotes(input));
	return blocks.join("\n");
}
function header(input, nproc) {
	const m = METALS$1[input.metal];
	const method = METHODS[input.method];
	return [
		"! Trímera — baraja Gaussian 16 para la trimerización de alquinos",
		`! Sistema: ${input.alkynes.map((id) => ALKYNES[id].formula).join(" + ")}`,
		`! Catalizador modelo: ${m.fragment}`,
		`! Método de trabajo: ${method.label}`,
		`! Disolvente: ${SOLVENTS[input.solvent].name}`,
		"! Las coordenadas son geometrías INICIALES, no puntos estacionarios.",
		"! Orden de cada fragmento: stable=opt → opt → freq → SP de base mayor → IRC si es un TS del complejo.",
		"! No añadas empiricaldispersion sobre wB97XD ni sobre M06/M062X: ya llevan correlación de medio alcance o D2 propio.",
		`! Núcleos pedidos en la ruta: ${nproc}. Ajusta %nprocshared a la cola real.`,
		"! MECP: Gaussian no lo optimiza solo. Usa EasyMECP o sobMECP entre el chk singlete y el triplete del metalaciclo.",
		"! Para la reacción orgánica, un single-point DLPNO-CCSD(T) en ORCA sobre la geometría DFT es el control de oro.",
		"! Revisa <S**2> en el triplete (ideal ~2.0) y la estabilidad de la onda en el singlete del metalaciclo.",
		""
	].join("\n");
}
function protocolNotes(input) {
	return [
		"",
		"! --- Después de Gaussian ---",
		"! 1. Un mínimo tiene 0 frecuencias imaginarias; un TS tiene exactamente 1, y el modo debe corresponder al enlace que se forma.",
		"! 2. El IRC tiene que caer en los dos mínimos vecinos. Si no, el TS no pertenece a este paso.",
		"! 3. Termoquímica: el log trae ΔH y ΔG a 1 atm y 298.15 K. Para disolución resta o suma Δn·RT·ln(24.46) según el cambio de molecularidad,",
		"!    y trata los modos < 100 cm⁻¹ con cuasi-RRHO (Grimme, Chem. Eur. J. 2012) — GoodVibes lo hace sobre este log.",
		`! 4. Factor de escala escrito en freq=: ${METHODS[input.method].scale}. Confírmalo en CCCBDB para esta base.`,
		"! 5. counterpoise=2 en el aducto η² si la base de optimización es doble zeta: el tercer alquino está débilmente unido (Hardesty: 12.4 kcal/mol).",
		"! 6. No interpretes el perfil de esta aplicación como el resultado de este input: sustituye las energías de ancla por las del log.",
		""
	].join("\n");
}
function routeCard(input) {
	const m = METHODS[input.method];
	const solvent = SOLVENTS[input.solvent].smd;
	return [
		{
			step: "1 · Onda estable",
			detail: `stable=opt guess=mix ${m.functional}/${m.optBasis}. Obligatorio en Co: el metalaciclo singlete suele ser inestable hacia UHF.`
		},
		{
			step: "2 · Optimización",
			detail: solvent ? `opt tight + scrf=(smd,solvent=${solvent}). Geometría en disolvente, no solo la energía.` : "opt=(calcfc,tight) en fase gas. Para un TS: opt=(ts,calcfc,noeigentest)."
		},
		{
			step: "3 · Frecuencias",
			detail: `freq scale=${m.scale}. Confirma ν‡ y usa las térmicas solo después del cuasi-armónico.`
		},
		{
			step: "4 · Single point",
			detail: `${m.functional}/${m.spBasis}${m.dispersionKeyword ? " + " + m.dispersionKeyword : ""}${solvent ? " + SMD" : ""}. Es la energía electrónica que entra en ΔG.`
		},
		{
			step: "5 · IRC",
			detail: "irc=(calcfc,maxpoints=60,lqa) desde cada TS. Sin IRC no hay estado de transición, solo un punto silla huérfano."
		},
		{
			step: "6 · Espín",
			detail: input.metal === "CpCo" || input.metal === "CpStarCo" ? "Repite el metalaciclo como triplete (0 3). El MECP no sale de un Route estándar." : "Comprueba que el singlete del precursor no tiene inestabilidad RHF→UHF."
		}
	];
}
var COVALENT = {
	H: .31,
	C: .76,
	N: .71,
	O: .66,
	F: .57,
	Si: 1.11,
	P: 1.07,
	Cl: .99,
	Co: 1.26,
	Ni: 1.24,
	Ru: 1.46,
	Rh: 1.42,
	Ir: 1.41
};
var METALS = /* @__PURE__ */ new Set([
	"Co",
	"Ni",
	"Ru",
	"Rh",
	"Ir"
]);
function dist(a, b) {
	return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}
function bondsOf(atoms) {
	const out = [];
	for (let i = 0; i < atoms.length; i++) for (let j = i + 1; j < atoms.length; j++) {
		const r = dist(atoms[i], atoms[j]);
		const cut = 1.22 * ((COVALENT[atoms[i].el] ?? .77) + (COVALENT[atoms[j].el] ?? .77));
		if (r > .45 && r < cut) out.push([i, j]);
	}
	return out;
}
function project(a) {
	const yaw = .62;
	const pitch = .42;
	const cy = Math.cos(yaw);
	const sy = Math.sin(yaw);
	const x1 = a.x * cy - a.z * sy;
	const z1 = a.x * sy + a.z * cy;
	const cp = Math.cos(pitch);
	const sp = Math.sin(pitch);
	return {
		x: x1,
		y: -(a.y * cp - z1 * sp),
		depth: a.y * sp + z1 * cp
	};
}
function fillOf(el) {
	if (METALS.has(el)) return "var(--color-copper)";
	if (el === "C") return "var(--color-ink)";
	if (el === "H") return "var(--color-paper)";
	return "var(--color-teal)";
}
function radiusOf(el) {
	if (METALS.has(el)) return 7.2;
	if (el === "H") return 3.4;
	return 5.2;
}
function MoleculeSvg({ atoms }) {
	const pts = atoms.map((a) => ({
		...project(a),
		el: a.el
	}));
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
	const pad = .7;
	const w = Math.max(maxX - minX, .4) + pad * 2;
	const h = Math.max(maxY - minY, .4) + pad * 2;
	const order = pts.map((p, i) => i).sort((a, b) => pts[a].depth - pts[b].depth);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `${minX - pad} ${minY - pad} ${w} ${h}`,
		className: "h-36 w-full",
		role: "img",
		"aria-label": "Geometría de partida",
		children: [links.map(([i, j]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: pts[i].x,
			y1: pts[i].y,
			x2: pts[j].x,
			y2: pts[j].y,
			stroke: "var(--color-mist)",
			strokeWidth: .08
		}, `${i}-${j}`)), order.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: pts[i].x,
			cy: pts[i].y,
			r: radiusOf(pts[i].el) * .045,
			fill: fillOf(pts[i].el),
			stroke: "var(--color-ink)",
			strokeWidth: pts[i].el === "H" ? .04 : .03
		}, i))]
	});
}
function StructureStrip({ metal, alkynes, geom }) {
	const pieces = stationPieces({
		kind: geom,
		metal,
		alkynes
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Geometría de partida"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mist",
					children: "C negro · H hueco · hetero verde · metal cobre"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto pb-1",
				children: pieces.map((piece) => {
					const md = minDistance(piece.atoms);
					const forming = piece.role === "complex" || piece.role === "arene" ? formingCC(piece.atoms) : null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "w-48 shrink-0 rounded-card border border-mist/40 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoleculeSvg, { atoms: piece.atoms }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: piece.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-mist",
									children: [
										piece.atoms.length,
										" átomos · d mín ",
										md.d.toFixed(2),
										" Å"
									]
								}),
								forming != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-mist",
									children: [
										"C···C en formación ",
										forming.toFixed(2),
										" Å"
									]
								})
							]
						})]
					}, piece.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mist",
				children: "Son coordenadas iniciales para Gaussian, no el punto estacionario. El fragmento del complejo es el que se optimiza; los alquinos libres van en jobs aparte para no inflar la entropía rotacional del supermolécula."
			})
		]
	});
}
var kB = 1380649e-29;
var hP = 662607015e-42;
var NA = 602214076e15;
var R = 8.314462618;
var P_STD = 101325;
var J_TO_CAL = 1 / 4.184;
var CM_TO_HZ = 29979245800;
var THETA = 1.4387769;
function rtLnMolar(T) {
	const Vm = .08205746 * T;
	return R_KCAL * T * Math.log(Vm);
}
function eyring(dG, T, imagCm, wigner) {
	const kT_h = kB * T / hP;
	return (wigner && imagCm > 0 ? wignerKappa(imagCm, T) : 1) * kT_h * Math.exp(-dG / (R_KCAL * T));
}
function wignerKappa(imagCm, T) {
	const u = THETA * imagCm / T;
	return 1 + u * u / 24;
}
function sTransCal(massGMol, T) {
	const m = massGMol / 1e3 / NA;
	const term = kB * T / P_STD * Math.pow(2 * Math.PI * m * kB * T / (hP * hP), 1.5);
	return R * (Math.log(term) + 2.5) * J_TO_CAL;
}
function sRotCal(rotor, T) {
	if (rotor.linear) {
		const I = Math.max(rotor.moments[1], rotor.moments[2], 1e-50);
		const q = 8 * Math.PI * Math.PI * I * kB * T / (rotor.sigma * hP * hP);
		return R * (1 + Math.log(q)) * J_TO_CAL;
	}
	const Ia = Math.max(rotor.moments[0], 1e-50);
	const Ib = Math.max(rotor.moments[1], 1e-50);
	const Ic = Math.max(rotor.moments[2], 1e-50);
	const q = Math.sqrt(Math.PI) / rotor.sigma * Math.pow(8 * Math.PI * Math.PI * kB * T / (hP * hP), 1.5) * Math.sqrt(Ia * Ib * Ic);
	return R * (Math.log(Math.max(q, 1e-30)) + 1.5) * J_TO_CAL;
}
function uOf(nu, T) {
	return THETA * nu / T;
}
function sVibMode(nu, T) {
	if (nu < 1) return 0;
	const u = uOf(nu, T);
	return R * (u / (Math.exp(u) - 1) - Math.log(1 - Math.exp(-u))) * J_TO_CAL;
}
function cvVibMode(nu, T) {
	if (nu < 1) return 0;
	const u = uOf(nu, T);
	const eu = Math.exp(u);
	return R * (u * u * eu / (eu - 1) ** 2) * J_TO_CAL;
}
function sGrimmeMode(nu, T) {
	const freq = Math.max(nu, 1) * CM_TO_HZ;
	const mu = hP / (8 * Math.PI * Math.PI * freq);
	const Bav = 1e-44;
	const muP = mu * Bav / (mu + Bav);
	const arg = Math.sqrt(8 * Math.PI ** 3 * muP * kB * T / (hP * hP));
	const sFree = R * (.5 + Math.log(Math.max(arg, 1e-30))) * J_TO_CAL;
	const w = 1 / (1 + (100 / Math.max(nu, 1)) ** 4);
	return w * sVibMode(nu, T) + (1 - w) * sFree;
}
function entropyVib(modes, T, mode, scale) {
	let s = 0;
	for (const raw of modes) {
		const nu = raw * scale;
		if (mode === "truhlar") s += sVibMode(Math.max(nu, 100), T);
		else if (mode === "grimme") s += sGrimmeMode(nu, T);
		else s += sVibMode(nu, T);
	}
	return s;
}
function moleculeThermo(atoms, sigma, modes, T, mode, scale) {
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
	return {
		mass,
		S: Strans + Srot + Svib,
		Cp,
		nAtoms: atoms.length
	};
}
function massOf(el) {
	return {
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
		Ir: 192.217
	}[el] ?? 12;
}
function collectionThermo(parts, T, mode, scale) {
	let S = 0;
	let Cp = 0;
	for (const p of parts) {
		const t = moleculeThermo(p.atoms, p.sigma, p.modes, T, mode, scale);
		S += t.S;
		Cp += t.Cp;
	}
	return {
		S,
		Cp,
		n: parts.length
	};
}
var DISP = {
	pre: 0,
	bis: -2,
	"ts-oc": -2.4,
	mc: -1,
	adduct: -4,
	"ts-collapse": -4.5,
	arene: -7.5,
	"ts-release": -6,
	prod: -1,
	react: 0,
	"thermal-vdw": -3.2,
	"thermal-ts": -1.5,
	"thermal-birad": -1,
	"thermal-prod": -1
};
var BSSE = {
	pre: 0,
	bis: 2.5,
	"ts-oc": 2.6,
	mc: 1,
	adduct: 3.5,
	"ts-collapse": 3.4,
	arene: 2,
	"ts-release": 2,
	prod: 0,
	react: 0,
	"thermal-vdw": 1.5,
	"thermal-ts": 1.2,
	"thermal-birad": .6,
	"thermal-prod": 0
};
var POL = {
	pre: .35,
	bis: .55,
	"ts-oc": 1.25,
	mc: .85,
	adduct: 1.05,
	"ts-collapse": 1.15,
	arene: .6,
	"ts-release": .7,
	prod: .4,
	react: .2,
	"thermal-vdw": .3,
	"thermal-ts": .9,
	"thermal-birad": 1.1,
	"thermal-prod": .25
};
function eOf(ids) {
	return ids.reduce((s, id) => {
		const a = ALKYNES[id];
		return s + (SUBSTITUENTS[a.a].sigma + SUBSTITUENTS[a.b].sigma) / 2;
	}, 0);
}
function bOf(id) {
	const a = ALKYNES[id];
	return (SUBSTITUENTS[a.a].bulk + SUBSTITUENTS[a.b].bulk) / 2;
}
function nPh(ids) {
	return ids.reduce((s, id) => {
		const a = ALKYNES[id];
		return s + (a.a === "Ph" ? 1 : 0) + (a.b === "Ph" ? 1 : 0);
	}, 0);
}
function nEwg(ids) {
	return ids.reduce((s, id) => {
		const a = ALKYNES[id];
		const add = (g) => g === "CO2Me" || g === "CN" || g === "CF3" ? 1 : 0;
		return s + add(a.a) + add(a.b);
	}, 0);
}
function orthoStrain(ids) {
	const heavy = ids.flatMap((id) => [SUBSTITUENTS[ALKYNES[id].a].bulk, SUBSTITUENTS[ALKYNES[id].b].bulk]).filter((b) => b >= 1.6).length;
	return heavy >= 4 ? 1.6 * (heavy - 3) : 0;
}
function organicDeltaH(ids, method) {
	const prod = -1.2 * nPh(ids) - 1.6 * nEwg(ids) + orthoStrain(ids) + .4 * ids.reduce((s, id) => s + bOf(id), 0);
	return B3LYP_CHAIN_DH + METHODS[method].recovery * B3LYP_DEFICIT + prod;
}
function kirkwood(eps) {
	if (eps <= 1.01) return 0;
	return (eps - 1) / (2 * eps + 1);
}
function substModes(g, stiff) {
	const s = stiff;
	switch (g) {
		case "Me": return [95 * s, 145 * s];
		case "tBu": return [
			40 * s,
			62 * s,
			88 * s
		];
		case "Ph": return [
			42 * s,
			75 * s,
			160 * s
		];
		case "CO2Me": return [
			50 * s,
			85 * s,
			130 * s
		];
		case "TMS": return [
			32 * s,
			55 * s,
			80 * s
		];
		case "CF3": return [48 * s, 95 * s];
		case "OMe": return [70 * s, 125 * s];
		case "CN": return [170 * s];
		default: return [];
	}
}
function skeleton(role, stiff) {
	const m = (list) => list.map((v) => v * stiff);
	switch (role) {
		case "alkyne": return m([
			520,
			640,
			730,
			780
		]);
		case "ligand": return m([
			992,
			1120,
			2320,
			2327,
			2335
		]);
		case "arene": return m([
			410,
			610,
			700,
			850,
			990
		]);
		case "complex": return m([
			55,
			78,
			110,
			160,
			230,
			310,
			420
		]);
		default: return m([
			80,
			140,
			220
		]);
	}
}
function modesFor(role, atoms, stiff, alkyneIds) {
	const base = skeleton(role, 1);
	const subs = [];
	if (role === "alkyne" || role === "arene") for (const id of alkyneIds) subs.push(ALKYNES[id].a, ALKYNES[id].b);
	if (role === "complex") for (const id of alkyneIds) subs.push(ALKYNES[id].a, ALKYNES[id].b);
	const extra = subs.flatMap((g) => substModes(g, stiff));
	return [...base.map((v) => v * (role === "complex" ? stiff : 1)), ...extra];
}
function solventShift(key, eps, polarityBoost, preKey) {
	const f = kirkwood(eps);
	const lam = 2.4 * polarityBoost;
	const abs = (k) => -lam * f * (POL[k] ?? .4);
	return abs(key) - abs(preKey);
}
function applyCorrections(key, dH, method, solvent, polBoost, ring, preKey) {
	const spec = METHODS[method];
	let e = dH;
	e += (DISP[key] ?? 0) * spec.dispersionWeight;
	if (spec.tz) e += BSSE[key] ?? 0;
	e += solventShift(key, SOLVENTS[solvent].epsilon, polBoost, preKey);
	if (ring) e += spec.recovery * B3LYP_DEFICIT;
	return e;
}
function compute(input) {
	const alkynes = input.alkynes;
	const parent = alkynes.every((a) => a === "acetylene") && (input.metal === "CpCo" || input.metal === "none");
	const symmetricReaction = alkynes[0] === alkynes[1] && alkynes[1] === alkynes[2];
	const warnings = [];
	const method = METHODS[input.method];
	if (method.metalWarning && input.metal !== "none") warnings.push(method.metalWarning);
	if (input.metal === "Ni0") warnings.push("Ni(PH₃)₂ es un truncamiento de Ni(PMe₃)ₙ. Cambia la energía de disociación de fosfina respecto del precatalizador real Ni(COD)₂.");
	if (!symmetricReaction) warnings.push("En la reacción cruzada el perfil dibuja el canal de menor acoplamiento oxidante. El reparto de isómeros está en Regioselectividad.");
	const polBoost = 1 + .55 * Math.abs(eOf(alkynes));
	const thermoStations = attachThermo(input.metal === "none" ? thermalStations(input, polBoost) : catalyticStations(input, polBoost), input);
	const steps = elementary(thermoStations, input);
	const span = input.metal === "none" ? null : energySpan(thermoStations.filter((s) => s.inSpan), input.temperature);
	const isomers = regioselectivity(input, thermoStations);
	const dHorganic = organicDeltaH(alkynes, input.method);
	const dGorganic = freeOrganic(input);
	const rds = [...steps].sort((a, b) => b.dG - a.dG)[0];
	const headline = input.metal === "none" ? `Sin metal, la barrera concertada sigue siendo prohibitiva a temperatura ambiente. A ${input.temperature.toFixed(0)} K la constante del TS concertado es ${fmtRate(steps[0]?.k ?? 0)}.` : span ? `Span energético δE = ${span.deltaE.toFixed(1)} kcal/mol. TDTS: ${span.tdts}. TDI: ${span.tdi}. El paso elemental más alto es ${rds?.name ?? "—"} (${rds ? signed(rds.dG) : "—"} kcal/mol).` : "Perfil catalítico.";
	return {
		input,
		stations: thermoStations,
		steps,
		span,
		isomers,
		regime: input.metal === "none" ? "orgánica, sin catalizador" : "ciclo catalítico, referencia = precursor + 3 alquinos",
		headline,
		dHorganic,
		dGorganic,
		parent,
		symmetricReaction,
		warnings
	};
}
function signed(x) {
	return `${x >= 0 ? "+" : ""}${x.toFixed(1)}`;
}
function catalyticStations(input, polBoost) {
	const metal = METALS$1[input.metal];
	const [ia, ib, ic] = input.alkynes;
	const e2 = (eOf([ia]) + eOf([ib])) / 2;
	const s2 = (bOf(ia) + bOf(ib)) / 2;
	const e3 = eOf([ic]);
	const s3 = bOf(ic);
	const prod = -1.2 * nPh(input.alkynes) - 1.6 * nEwg(input.alkynes) + orthoStrain(input.alkynes);
	const dBis = -11.3 - 4 * e2 + .7 * s2;
	const barrier = 12.8 + metal.dBarrier - 8.5 * e2 + 1.6 * Math.max(0, s2 - .35);
	const dMc = dBis + (-13.1 + metal.dRxn - 9 * e2 + 1.3 * s2);
	const dAd = dMc + (-12.4 - 5 * e3 + 1.3 * s3 + .45 * s2);
	const dTs2 = dAd + Math.max(.25, .5 - .8 * e3);
	const dAr = dAd + (-81.4 + metal.dArene) + prod;
	const dProd = B3LYP_CHAIN_DH + prod;
	const dTs3 = dAr + Math.max(11, dProd - dAr + 8);
	const method = input.method;
	const solvent = input.solvent;
	const corr = (key, dH, ring) => applyCorrections(key, dH, method, solvent, polBoost, ring, "pre");
	const rows = [
		{
			id: "pre",
			label: `${metal.fragment} + 3 alquinos`,
			short: "Prec",
			kind: "min",
			dH: 0,
			anchor: "literatura",
			spin: "singlete",
			imag: 0,
			note: "Referencia. Entrada al ciclo por sustitución de dos PH₃ (modelo de PPh₃ o CO).",
			geom: "pre",
			inSpan: true,
			stiff: 1
		},
		{
			id: "bis",
			label: "Complejo bis-η² + alquino libre",
			short: "π₂",
			kind: "min",
			dH: corr("bis", dBis, false),
			anchor: input.metal === "CpCo" && e2 === 0 ? "literatura" : "modelo",
			spin: "singlete",
			imag: 0,
			note: "Hardesty: la doble sustitución PH₃ → acetileno libera 11.3 kcal/mol. Aquí se corrige por sustituyente, base y dispersión.",
			geom: "bis",
			inSpan: true,
			stiff: 1
		},
		{
			id: "ts1",
			label: "TS de acoplamiento oxidante",
			short: "TS1",
			kind: "ts",
			dH: corr("ts-oc", dBis + barrier, false),
			anchor: input.metal === "CpCo" && e2 === 0 ? "literatura" : "modelo",
			spin: "singlete",
			imag: input.metal === "CpRh" ? 470 : 410,
			note: "Forma el metalaciclopentadieno. En el padre CpCo/acetileno, ΔH‡ = 12.8 kcal/mol desde el bis-complejo (Hardesty, B3LYP).",
			geom: "ts-oc",
			inSpan: true,
			stiff: 1.12
		},
		{
			id: "mc",
			label: "Metalaciclopentadieno singlete + alquino",
			short: "MC",
			kind: "min",
			dH: corr("mc", dMc, false),
			anchor: input.metal === "CpCo" && e2 === 0 ? "literatura" : "modelo",
			spin: "singlete",
			imag: 0,
			note: "16 electrones si no entra otro ligando. En Co no es el fundamental: el triplete queda por debajo (Agenet, JACS 2007).",
			geom: "mc",
			inSpan: true,
			stiff: 1
		}
	];
	if (input.twoState && metal.allowsTwoState) {
		const dMecp = dMc + 10.2 + .4 * s2;
		const dTrip = dMc - 15;
		rows.push({
			id: "mecp",
			label: "MECP singlete–triplete",
			short: "MECP",
			kind: "mecp",
			dH: corr("mc", dMecp, false),
			anchor: "modelo",
			spin: "cruce",
			imag: 0,
			note: "Ancla de orden: ~10 kcal/mol sobre el singlete en sistemas CpCo sustituidos (Rodríguez-García, Prieto, García, Chem. Eur. J. 2012). No es un punto estacionario de un solo determinante. Gaussian no optimiza MECP de forma nativa: EasyMECP / sobMECP.",
			geom: "mc",
			inSpan: false,
			stiff: 1
		}, {
			id: "mc3",
			label: "Metalaciclo triplete",
			short: "³MC",
			kind: "min",
			dH: corr("mc", dTrip, false),
			anchor: "modelo",
			spin: "triplete",
			imag: 0,
			note: "Pozo de trabajo −15 kcal/mol respecto del singlete (la literatura de sistemas sustituidos llega a −17). Puede ser el estado de reposo y ensanchar el span si hay que volver a cruzar al singlete antes del colapso.",
			geom: "mc",
			inSpan: false,
			stiff: 1
		});
	}
	rows.push({
		id: "ad",
		label: "Aducto metalaciclo(η²-alquino)",
		short: "Ad",
		kind: "min",
		dH: corr("adduct", dAd, false),
		anchor: input.metal === "CpCo" && e3 === 0 ? "literatura" : "modelo",
		spin: "singlete",
		imag: 0,
		note: "Hardesty: el tercer acetileno se une por solo 12.4 kcal/mol, con el vector C≡C paralelo al eje Co–Cp. Es el origen de la coordinación débil.",
		geom: "adduct",
		inSpan: true,
		stiff: 1
	}, {
		id: "ts2",
		label: "TS de colapso [4+2]",
		short: "TS2",
		kind: "ts",
		dH: corr("ts-collapse", dTs2, false),
		anchor: input.metal === "CpCo" ? "literatura" : "modelo",
		spin: "singlete",
		imag: 190,
		note: "Barrera mínima en el padre (ΔH‡ = 0.5). El camino de inserción vía metalacicloheptatrieno está prohibido por simetría en el acetileno (Hardesty). Con alquenos, la inserción sí compite (Gandon, JACS 2006).",
		geom: "ts-collapse",
		inSpan: true,
		stiff: 1.08
	}, {
		id: "ar",
		label: "Complejo η⁴-areno",
		short: "η⁴",
		kind: "min",
		dH: corr("arene", dAr, true),
		anchor: input.metal === "CpCo" && prod === 0 ? "reconstrucción" : "modelo",
		spin: "singlete",
		imag: 0,
		note: "Pozo profundo. Hardesty da −81.4 kcal/mol desde el aducto. La recuperación del déficit de reacción de B3LYP se carga aquí porque el anillo ya está formado. Geometría de partida η⁴, no η⁶: el slip es parte de la liberación.",
		geom: "arene",
		inSpan: true,
		stiff: .92
	}, {
		id: "ts3",
		label: "TS de liberación del areno",
		short: "TS3",
		kind: "ts",
		dH: corr("ts-release", dTs3, true),
		anchor: "modelo",
		spin: "singlete",
		imag: 95,
		note: "No está en el abstract de Hardesty. Se incluye porque el η⁴ puede secuestrar el catalizador. Barrera de trabajo: al menos 11 kcal/mol sobre el complejo, y 8 sobre los productos si el pozo es poco profundo.",
		geom: "ts-release",
		inSpan: true,
		stiff: 1.05
	}, {
		id: "prod",
		label: `${metal.fragment} + areno`,
		short: "Prod",
		kind: "min",
		dH: corr("prod", dProd, true),
		anchor: "reconstrucción",
		spin: "singlete",
		imag: 0,
		note: `Cierre del ciclo B3LYP encadenado: ${B3LYP_CHAIN_DH.toFixed(1)} kcal/mol para el acetileno, frente a ΔH° experimental ${EXP_DH_ACETYLENE.toFixed(1)}. La diferencia es el déficit que la recuperación de método intenta cerrar. El catalizador vuelve al precursor.`,
		geom: "prod",
		inSpan: true,
		stiff: 1
	});
	return rows;
}
function thermalStations(input, polBoost) {
	const ids = input.alkynes;
	const e = eOf(ids) / 3;
	const s = ids.reduce((sum, id) => sum + bOf(id), 0) / 3;
	const ph = nPh(ids);
	const concerted = (input.method === "b3lyp" ? 58 : input.method === "m062x" ? 64 : input.method === "wb97xd" ? 63 : 61) - 4 * e + 2.4 * s - 1.5 * ph;
	const birad = 49 - 3 * e + 1.2 * s - 4 * ph;
	const dProd = organicDeltaH(ids, input.method);
	const corr = (key, dH, ring) => applyCorrections(key, dH, input.method, input.solvent, polBoost, ring, "react");
	const rows = [{
		id: "react",
		label: "Tres alquinos separados",
		short: "3 A",
		kind: "min",
		dH: 0,
		anchor: "literatura",
		spin: "singlete",
		imag: 0,
		note: "Referencia de la reacción orgánica. ΔfH° de trabajo: acetileno 54.2, benceno 19.8 kcal/mol.",
		geom: "reactants",
		inSpan: false,
		stiff: 1
	}];
	if (input.thermalMode === "concerted") rows.push({
		id: "vdw",
		label: "Precomplejo de van der Waals",
		short: "vdW",
		kind: "min",
		dH: corr("thermal-vdw", -3.6 - .8 * Math.abs(e), false),
		anchor: "modelo",
		spin: "singlete",
		imag: 0,
		note: "Mínimo débil. En ΔG a 1 M suele desaparecer: la entropía traslacional no perdona un trímero laxo.",
		geom: "thermal-vdw",
		inSpan: false,
		stiff: .8
	}, {
		id: "ts-c",
		label: "TS concertado D₃h",
		short: "TS",
		kind: "ts",
		dH: corr("thermal-ts", concerted, false),
		anchor: "literatura",
		spin: "singlete",
		imag: 540,
		note: "Bach, Wolber y Schlegel, JACS 1985: ~62 kcal/mol con correlación (MP3); HF/6-31G* ~81. Woodward–Hoffmann la permite; la barrera es repulsión HOMO–HOMO. Santos, Polo y Andrés siguieron el IRC a B3LYP.",
		geom: "thermal-ts",
		inSpan: false,
		stiff: 1.15
	});
	else rows.push({
		id: "ts-b",
		label: "TS birradical hacia ciclobutadieno",
		short: "TS-b",
		kind: "ts",
		dH: corr("thermal-birad", birad, false),
		anchor: "modelo",
		spin: "singlete abierto",
		imag: 480,
		note: "Jones y Krebs, Org. Biomol. Chem. 2017: la cascada birradical puede ganar al concertado. La cifra de 49 kcal/mol es un modelo de trabajo, no el valor del artículo. Exige estabilidad de onda (guess=mix) y, idealmente, un single-point multirreferencial.",
		geom: "thermal-birad",
		inSpan: false,
		stiff: 1.1
	}, {
		id: "cbd",
		label: "Ciclobutadieno + alquino",
		short: "CBD",
		kind: "min",
		dH: corr("thermal-birad", -6 + 2 * s, false),
		anchor: "modelo",
		spin: "singlete",
		imag: 0,
		note: "Estimación grosera con ΔfH(ciclobutadieno) ~102 kcal/mol: 2 acetileno → C₄H₄ queda cerca de −6 kcal/mol, con incertidumbre de ±12. El antiaromático dimeriza o sigue hacia Dewar benceno.",
		geom: "thermal-birad",
		inSpan: false,
		stiff: 1
	});
	rows.push({
		id: "prod",
		label: "Areno",
		short: "Areno",
		kind: "min",
		dH: dProd,
		anchor: ids.every((a) => a === "acetylene") ? "literatura" : "modelo",
		spin: "singlete",
		imag: 0,
		note: `ΔH de la reacción orgánica. Experimental del padre: ${EXP_DH_ACETYLENE.toFixed(1)} kcal/mol. El método recupera una fracción del déficit B3LYP (${B3LYP_DEFICIT.toFixed(1)} kcal/mol).`,
		geom: "thermal-prod",
		inSpan: false,
		stiff: 1
	});
	return rows;
}
function attachThermo(raw, input) {
	const method = METHODS[input.method];
	const T = input.temperature;
	const partsOf = (row) => {
		return stationPieces({
			kind: row.geom,
			metal: input.metal,
			alkynes: input.alkynes
		}).map((p) => ({
			atoms: p.atoms,
			sigma: p.sigma,
			modes: modesFor(p.role, p.atoms, row.stiff, input.alkynes)
		}));
	};
	const refParts = partsOf(raw[0]);
	const ref = collectionThermo(refParts, T, input.thermo, method.scale);
	const ref298 = collectionThermo(refParts, 298.15, input.thermo, method.scale);
	const corrSS = input.standardState === "molar" ? rtLnMolar(T) : 0;
	return raw.map((row) => {
		const parts = partsOf(row);
		const now = collectionThermo(parts, T, input.thermo, method.scale);
		const at298 = collectionThermo(parts, 298.15, input.thermo, method.scale);
		at298.S - ref298.S;
		const dCp = at298.Cp - ref298.Cp;
		const dH = row.dH + dCp * (T - 298.15) / 1e3;
		const dS = now.S - ref.S;
		const dGatm = dH - T * dS / 1e3;
		const dG = dGatm + (now.n - ref.n) * corrSS;
		const substU = input.alkynes.filter((a) => a !== "acetylene").length * .9;
		const baseU = row.anchor === "literatura" ? 1.5 : row.anchor === "reconstrucción" ? 4 : 6;
		const uncertainty = Math.sqrt(baseU ** 2 + method.uncertainty ** 2 + substU ** 2);
		return {
			id: row.id,
			label: row.label,
			short: row.short,
			kind: row.kind,
			dH298: row.dH,
			dH,
			dS,
			dGatm,
			dG,
			uncertainty,
			anchor: row.anchor,
			spin: row.spin,
			imag: row.imag,
			note: row.note,
			geom: row.geom,
			nMolecules: now.n,
			inSpan: row.inSpan
		};
	});
}
function elementary(stations, input) {
	const steps = [];
	for (let i = 0; i < stations.length; i++) {
		const s = stations[i];
		if (s.kind !== "ts") continue;
		let prev = stations[0];
		for (let j = i - 1; j >= 0; j--) if (stations[j].kind === "min") {
			prev = stations[j];
			break;
		}
		const dG = s.dG - prev.dG;
		const kappa = input.wigner ? wignerKappa(s.imag, input.temperature) : 1;
		const k = eyring(dG, input.temperature, s.imag, input.wigner);
		steps.push({
			id: s.id,
			name: `${s.short} desde ${prev.short}`,
			dG,
			k,
			unit: "s⁻¹",
			imag: s.imag,
			kappa
		});
	}
	return steps;
}
function energySpan(cycle, T) {
	const mins = cycle.filter((s) => s.kind === "min");
	const tss = cycle.filter((s) => s.kind === "ts");
	if (mins.length < 2 || tss.length === 0) return null;
	const dGr = mins[mins.length - 1].dG - mins[0].dG;
	let best = -Infinity;
	let tdts = tss[0].label;
	let tdi = mins[0].label;
	const index = new Map(cycle.map((s, i) => [s.id, i]));
	for (const ts of tss) for (const inter of mins) {
		const wrap = (index.get(ts.id) ?? 0) < (index.get(inter.id) ?? 0);
		const span = ts.dG - inter.dG + (wrap ? dGr : 0);
		if (span > best) {
			best = span;
			tdts = ts.label;
			tdi = inter.label;
		}
	}
	const tof = 1380649e-29 * T / 662607015e-42 * Math.exp(-best / (R_KCAL * T));
	return {
		deltaE: best,
		tdts,
		tdi,
		tof,
		dGr
	};
}
function freeOrganic(input) {
	const dGatm = organicDeltaH(input.alkynes, input.method) - input.temperature * -79.8 / 1e3;
	if (input.standardState === "molar") return dGatm + -2 * rtLnMolar(input.temperature);
	return dGatm;
}
function orientations(id) {
	const d = ALKYNES[id];
	const base = [{
		alpha: d.a,
		beta: d.b
	}];
	if (d.a !== d.b) base.push({
		alpha: d.b,
		beta: d.a
	});
	return base;
}
function canon(subs) {
	const s = subs.map((g) => SUBSTITUENTS[g].label);
	const forms = [];
	for (let k = 0; k < 6; k++) {
		const rot = [...s.slice(k), ...s.slice(0, k)];
		forms.push(rot.join("–"));
		forms.push([...rot].reverse().join("–"));
	}
	return forms.sort()[0];
}
function prettyPattern(key) {
	const nonH = key.split("–").map((p, i) => p === "H" ? null : i + 1).filter((x) => x !== null);
	if (nonH.length === 0) return "benceno";
	if (nonH.length === 6) return "hexasustituido";
	return key;
}
function regioselectivity(input, stations) {
	const ids = input.alkynes;
	const homo = ids[0] === ids[1] && ids[1] === ids[2];
	const terminal = ALKYNES[ids[0]].a !== ALKYNES[ids[0]].b;
	if (homo && !terminal) return [{
		name: "Un solo regioisómero",
		pattern: `${ALKYNES[ids[0]].formula} × 3 → areno hexasustituido`,
		share: 1,
		dG: 0,
		channel: "Los dos extremos del alquino son iguales: no hay regioselectividad."
	}];
	const baseG = stations.find((s) => s.id === "ts1" || s.id === "ts-c" || s.id === "ts-b")?.dG ?? 20;
	const channels = [];
	const thirds = homo ? [0] : [
		0,
		1,
		2
	];
	for (const t of thirds) {
		const pair = [
			0,
			1,
			2
		].filter((i) => i !== t);
		const o1 = orientations(ids[pair[0]]);
		const o2 = orientations(ids[pair[1]]);
		const o3 = orientations(ids[t]);
		for (const a of o1) for (const b of o2) {
			const costAlpha = .85 * SUBSTITUENTS[a.alpha].bulk + .85 * SUBSTITUENTS[b.alpha].bulk - 1.05 * SUBSTITUENTS[a.alpha].sigma - 1.05 * SUBSTITUENTS[b.alpha].sigma;
			for (const c of o3) {
				const approach = .55 * SUBSTITUENTS[c.alpha].bulk + .2 * SUBSTITUENTS[c.beta].bulk;
				const key = canon([
					a.beta,
					a.alpha,
					c.alpha,
					c.beta,
					b.alpha,
					b.beta
				]);
				const dG = baseG + costAlpha + approach;
				const text = `Acopla primero ${ALKYNES[ids[pair[0]]].formula} + ${ALKYNES[ids[pair[1]]].formula}; el tercero es ${ALKYNES[ids[t]].formula}.`;
				channels.push({
					key,
					dG,
					text
				});
			}
		}
	}
	const bestBy = /* @__PURE__ */ new Map();
	for (const ch of channels) {
		const prev = bestBy.get(ch.key);
		if (!prev || ch.dG < prev.dG) bestBy.set(ch.key, {
			dG: ch.dG,
			text: ch.text
		});
	}
	const list = [...bestBy.entries()].map(([key, v]) => ({
		key,
		...v
	}));
	const min = Math.min(...list.map((c) => c.dG));
	const weights = list.map((c) => Math.exp(-(c.dG - min) / (R_KCAL * input.temperature)));
	const z = weights.reduce((s, w) => s + w, 0);
	return list.map((c, i) => ({
		name: homo && terminal ? is124(c.key) ? "1,2,4-trisustituido" : is135(c.key) ? "1,3,5-trisustituido" : "otro patrón" : `Isómero ${i + 1}`,
		pattern: prettyPattern(c.key),
		share: weights[i] / z,
		dG: c.dG - min,
		channel: c.text
	})).sort((a, b) => b.share - a.share).slice(0, 6);
}
function is124(key) {
	const idx = key.split("–").map((g, i) => g === "H" ? -1 : i).filter((i) => i >= 0);
	if (idx.length !== 3) return false;
	const gaps = [
		idx[1] - idx[0],
		idx[2] - idx[1],
		idx[0] + 6 - idx[2]
	];
	gaps.sort((a, b) => a - b);
	return gaps[0] === 1 && gaps[1] === 2 && gaps[2] === 3;
}
function is135(key) {
	const idx = key.split("–").map((g, i) => g === "H" ? -1 : i).filter((i) => i >= 0);
	if (idx.length !== 3) return false;
	return [
		idx[1] - idx[0],
		idx[2] - idx[1],
		idx[0] + 6 - idx[2]
	].every((g) => g === 2);
}
function methodScan(input) {
	return Object.keys(METHODS).map((id) => {
		const profile = compute({
			...input,
			method: id
		});
		const ts = profile.stations.find((s) => s.kind === "ts");
		const prod = profile.stations[profile.stations.length - 1];
		return {
			id,
			label: METHODS[id].short,
			dGts: ts ? ts.dG - profile.stations[0].dG : 0,
			dGr: prod.dG
		};
	});
}
function strainCurve(input) {
	const metal = METALS$1[input.metal === "none" ? "CpCo" : input.metal];
	const dE = -13.1 + metal.dRxn;
	const dEa = Math.max(.8, 12.8 + metal.dBarrier);
	const xiTs = dE < 0 ? .38 : .62;
	const pts = [];
	const strainAtTs = dEa + (input.metal === "CpRh" ? 8 : input.metal === "CpIr" ? 6 : 14);
	for (let i = 0; i <= 24; i++) {
		const xi = i / 24;
		const e = modelIrc(xi, xiTs, dEa, dE);
		const strain = strainAtTs * Math.pow(xi / Math.max(xiTs, .2), 1.15);
		pts.push({
			xi,
			e,
			strain,
			interaction: e - strain
		});
	}
	return pts;
}
function modelIrc(xi, xiTs, dEa, dE) {
	const x = xiTs;
	const a11 = 1 - 3 * x * x;
	const a12 = 1 - 2 * x;
	const a21 = -2 * x * x * x;
	const a22 = -(x * x);
	const det = a11 * a22 - a12 * a21 || 1e-8;
	const A = (dE * a22 - a12 * dEa) / det;
	const B = (a11 * dEa - dE * a21) / det;
	const C = -2 * B * x - 3 * A * x * x;
	return A * xi ** 3 + B * xi ** 2 + C * xi;
}
function fmtRate(k) {
	if (!Number.isFinite(k)) return "—";
	if (k === 0) return "0";
	if (k < 1e-6 || k >= 1e6) return k.toExponential(2) + " s⁻¹";
	return k.toPrecision(3) + " s⁻¹";
}
var TABS = [
	{
		id: "perfil",
		label: "Perfil"
	},
	{
		id: "ts",
		label: "Transiciones"
	},
	{
		id: "regio",
		label: "Regioselectividad"
	},
	{
		id: "termo",
		label: "Termoquímica"
	},
	{
		id: "strain",
		label: "Activation strain"
	},
	{
		id: "gauss",
		label: "Gaussian"
	},
	{
		id: "fuentes",
		label: "Fuentes"
	}
];
function Workbench() {
	const [homo, setHomo] = (0, import_react.useState)(true);
	const [alkynes, setAlkynes] = (0, import_react.useState)([
		"acetylene",
		"acetylene",
		"acetylene"
	]);
	const [metal, setMetal] = (0, import_react.useState)("CpCo");
	const [method, setMethod] = (0, import_react.useState)("composite");
	const [solvent, setSolvent] = (0, import_react.useState)("toluene");
	const [temperature, setTemperature] = (0, import_react.useState)(298);
	const [thermo, setThermo] = (0, import_react.useState)("grimme");
	const [standardState, setStandardState] = (0, import_react.useState)("molar");
	const [twoState, setTwoState] = (0, import_react.useState)(true);
	const [thermalMode, setThermalMode] = (0, import_react.useState)("concerted");
	const [wigner, setWigner] = (0, import_react.useState)(true);
	const [yMode, setYMode] = (0, import_react.useState)("dG");
	const [tab, setTab] = (0, import_react.useState)("perfil");
	const [selected, setSelected] = (0, import_react.useState)("ts1");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [nproc, setNproc] = (0, import_react.useState)(16);
	const [mem, setMem] = (0, import_react.useState)(16);
	(0, import_react.useEffect)(() => setReady(true), []);
	const input = (0, import_react.useMemo)(() => {
		return {
			alkynes: homo ? [
				alkynes[0],
				alkynes[0],
				alkynes[0]
			] : alkynes,
			metal,
			method,
			solvent,
			temperature,
			thermo,
			standardState,
			twoState: twoState && (metal === "CpCo" || metal === "CpStarCo"),
			thermalMode,
			wigner
		};
	}, [
		homo,
		alkynes,
		metal,
		method,
		solvent,
		temperature,
		thermo,
		standardState,
		twoState,
		thermalMode,
		wigner
	]);
	const profile = (0, import_react.useMemo)(() => compute(input), [input]);
	const active = profile.stations.find((s) => s.id === selected) ?? profile.stations[0];
	(0, import_react.useEffect)(() => {
		if (!profile.stations.some((s) => s.id === selected)) setSelected(profile.stations[0]?.id ?? "pre");
	}, [profile, selected]);
	const setAlkyne = (index, id) => {
		const next = [...alkynes];
		next[index] = id;
		setAlkynes(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-mist/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-copper",
						children: "CUADERNO DE RUTA · NIVEL DE POSGRADO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl text-ink md:text-4xl",
						children: "Trímera"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-mist",
						children: "Perfil energético y estados de transición de la cicloadición [2+2+2] de alquinos, simétrica y cruzada."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-mist",
					children: "Las energías están ancladas a literatura y se corrigen con aproximaciones explícitas. No es un SCF en vivo: el input de Gaussian se descarga para el clúster."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[18rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Reacción",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								on: homo,
								onClick: () => setHomo(true),
								label: "Homo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								on: !homo,
								onClick: () => setHomo(false),
								label: "Cruzada"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: homo ? "Alquino" : "Alquino A",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: alkynes[0],
								onChange: (v) => setAlkyne(0, v),
								options: ALKYNE_LIST.map((a) => ({
									value: a.id,
									label: `${a.name} · ${a.formula}`
								}))
							})
						}),
						!homo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alquino B",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: alkynes[1],
								onChange: (v) => setAlkyne(1, v),
								options: ALKYNE_LIST.map((a) => ({
									value: a.id,
									label: `${a.name} · ${a.formula}`
								}))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alquino C, el que entra al final",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: alkynes[2],
								onChange: (v) => setAlkyne(2, v),
								options: ALKYNE_LIST.map((a) => ({
									value: a.id,
									label: `${a.name} · ${a.formula}`
								}))
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-lg border border-mist/50 px-3 text-left text-sm",
								onClick: () => {
									setHomo(true);
									setAlkynes([
										"acetylene",
										"acetylene",
										"acetylene"
									]);
									setMetal("CpCo");
									setMethod("b3lyp");
									setSolvent("gas");
									setTwoState(false);
									setStandardState("atm");
								},
								children: "Ancla Hardesty: 3 HC≡CH, CpCo, B3LYP gas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-lg border border-mist/50 px-3 text-left text-sm",
								onClick: () => {
									setHomo(false);
									setAlkynes([
										"propyne",
										"phac",
										"dmad"
									]);
									setMetal("CpCo");
									setMethod("composite");
									setSolvent("toluene");
								},
								children: "Ejemplo cruzado: propino + PhC≡CH + DMAD"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Modelo",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Catalizador",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: metal,
								onChange: (v) => setMetal(v),
								options: METAL_LIST.map((m) => ({
									value: m.id,
									label: m.name
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Método",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: method,
								onChange: (v) => setMethod(v),
								options: METHOD_LIST.map((m) => ({
									value: m.id,
									label: m.short
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Disolvente",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: solvent,
								onChange: (v) => setSolvent(v),
								options: Object.values(SOLVENTS).map((s) => ({
									value: s.id,
									label: s.name
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: `Temperatura · ${temperature} K`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full accent-copper",
								type: "range",
								min: 250,
								max: 800,
								step: 1,
								value: temperature,
								onChange: (e) => setTemperature(Number(e.target.value))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Entropía vibracional",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: thermo,
								onChange: (v) => setThermo(v),
								options: [
									{
										value: "rrho",
										label: "RRHO estricto"
									},
									{
										value: "truhlar",
										label: "Truhlar, corte a 100 cm⁻¹"
									},
									{
										value: "grimme",
										label: "Grimme, cuasi-RRHO"
									}
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Estado estándar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: standardState,
								onChange: (v) => setStandardState(v),
								options: [{
									value: "molar",
									label: "1 mol/L (disolución)"
								}, {
									value: "atm",
									label: "1 atm (fase gas)"
								}]
							})
						}),
						metal === "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Canal térmico",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: thermalMode,
								onChange: (v) => setThermalMode(v),
								options: [{
									value: "concerted",
									label: "Concertado, D₃h"
								}, {
									value: "biradical",
									label: "Cascada birradical"
								}]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							on: input.twoState,
							disabled: !(metal === "CpCo" || metal === "CpStarCo"),
							onClick: () => setTwoState((v) => !v),
							label: "Reactividad de dos estados (MECP)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							on: wigner,
							onClick: () => setWigner((v) => !v),
							label: "Corrección de túnel de Wigner"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-3",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === t.id,
							onClick: () => setTab(t.id),
							className: `min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${tab === t.id ? "bg-ink text-paper" : "border border-mist/50 text-ink"}`,
							children: t.label
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm text-ink",
						children: profile.headline
					}),
					profile.warnings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mb-4 flex flex-col gap-2",
						children: profile.warnings.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-copper/40 bg-paper px-3 py-2 text-sm text-ink",
							children: w
						}, w))
					}),
					tab === "perfil" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-mist",
										children: "Eje"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
										on: yMode === "dG",
										onClick: () => setYMode("dG"),
										label: standardState === "molar" ? "ΔG (1 M)" : "ΔG (1 atm)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
										on: yMode === "dH",
										onClick: () => setYMode("dH"),
										label: "ΔH"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-80 w-full rounded-card border border-mist/40 p-2",
								children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileChart, {
									stations: profile.stations,
									yMode,
									selected: active.id,
									onPick: setSelected
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StationCard, { station: active }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StructureStrip, {
								metal: input.metal,
								alkynes: input.alkynes,
								geom: active.geom
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StationTable, {
								stations: profile.stations,
								selected: active.id,
								yMode,
								onPick: setSelected
							})
						]
					}),
					tab === "ts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "flex flex-col gap-4",
						children: [
							profile.steps.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "No hay pasos elementales en este canal."
							}),
							profile.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-mist/40 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl",
										children: step.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-3 grid grid-cols-2 gap-3 text-sm md:grid-cols-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												k: "ΔG‡",
												v: `${step.dG.toFixed(1)} kcal/mol`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												k: "k (Eyring)",
												v: fmtK(step.k)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												k: "ν imaginaria",
												v: `${step.imag.toFixed(0)}i cm⁻¹`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												k: "κ Wigner",
												v: step.kappa.toFixed(3)
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-sm text-mist",
										children: [
											"t½ unimolecular = ",
											fmtTime(Math.log(2) / Math.max(step.k, 1e-300)),
											". La constante es de primer orden porque el TS se mide desde el mínimo anterior, no desde fragmentos separados."
										]
									})
								]
							}, step.id)),
							profile.span && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-teal/40 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl",
										children: "Span energético de Kozuch–Shaik"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm",
										children: [
											"δE = ",
											profile.span.deltaE.toFixed(1),
											" kcal/mol. TDTS: ",
											profile.span.tdts,
											". TDI: ",
											profile.span.tdi,
											". ΔG de la reacción en el ciclo: ",
											profile.span.dGr.toFixed(1),
											" kcal/mol. TOF ≈ ",
											profile.span.tof.toExponential(2),
											" s⁻¹ con κ = 1, sin concentración de sustrato."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-mist",
										children: "Si el triplete está activo no entra en este span: es un pozo lateral. Si se convierte en el estado de reposo, el TDI real es el ³MC y el span crece en lo que cueste volver a cruzar."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StationCard, { station: active })
						]
					}),
					tab === "regio" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-mist",
								children: [
									"Control cinético del acoplamiento oxidante más la orientación del tercer alquino. Los grupos voluminosos pagan un coste si quedan en posición α (unidos al metal). Un aceptor en α estabiliza el enlace M–C. El reparto es un Boltzmann a ",
									temperature,
									" K sobre esas barreras de modelo, no un ΔΔG‡ publicado para cada sustituyente."
								]
							}),
							profile.isomers.map((iso) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-mist/40 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg",
											children: iso.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-semibold tabular-nums text-copper",
											children: [(iso.share * 100).toFixed(1), "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-2 overflow-hidden rounded-full bg-mist/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-teal",
											style: { width: `${Math.max(iso.share * 100, 1)}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm",
										children: iso.pattern
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-mist",
										children: [
											"ΔΔG‡ respecto del canal mejor = ",
											iso.dG.toFixed(2),
											" kcal/mol. ",
											iso.channel
										]
									})
								]
							}, iso.pattern + iso.name)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-mist",
								children: "En alquinos terminales el resultado experimental habitual con CpCo es el 1,2,4-trisustituido. El 1,3,5 pide control adicional (plantilla, volumen del ligando, diino anclado). Revisión: Roglans, Pla-Quintana y Solà, Chem. Rev. 2021."
							})
						]
					}),
					tab === "termo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThermoPanel, { input }),
					tab === "strain" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrainPanel, {
						input,
						ready
					}),
					tab === "gauss" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GaussPanel, {
						input,
						stations: profile.stations,
						nproc,
						mem,
						setNproc,
						setMem
					}),
					tab === "fuentes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sources, {})
				]
			})]
		})]
	});
}
function ThermoPanel({ input }) {
	const rows = [
		"rrho",
		"truhlar",
		"grimme"
	].map((thermo) => {
		const p = compute({
			...input,
			thermo
		});
		const ts = p.stations.find((s) => s.kind === "ts");
		return {
			thermo,
			dG: ts ? ts.dG - p.stations[0].dG : 0,
			dS: ts ? ts.dS - p.stations[0].dS : 0
		};
	});
	const scan = methodScan(input);
	const rt = rtLnMolar(input.temperature);
	const parent = input.alkynes.every((a) => a === "acetylene");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-mist/40 p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Qué se está aproximando"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 flex list-disc flex-col gap-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ΔH(298) sale del ancla. ΔH(T) ≈ ΔH(298) + ΔCp·(T − 298), con ΔCp de la termoestadística (Kirchhoff a Cp constante)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ΔS combina Sackur–Tetrode, rotor rígido y los modos bajos de modelo. No son las frecuencias de un Hessiano." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Estado 1 M: ΔG(1 M) = ΔG(1 atm) + Δn·RT·ln(RT/P). A esta T, RT·ln(Vm) = ",
							rt.toFixed(2),
							" kcal/mol. Si Δn es negativo (asociación), el paso se hace más exoérgico."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Escala de frecuencias del método: ",
							METHODS[input.method].scale,
							". Cambia poco ΔG; el cuasi-armónico cambia más."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "S° modelo del acetileno: 48.1 cal/mol·K (experimental ~48.0). Benceno modelo: 61.9 frente a ~64.3. El error de ~2 cal/mol·K son ~0.7 kcal/mol a 298 K." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-mist/40 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "El mismo TS, tres entropías"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-mist",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3",
									children: "Tratamiento"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3",
									children: "ΔG‡ desde el cero"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2",
									children: "ΔS del TS"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-mist/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: r.thermo === "rrho" ? "RRHO" : r.thermo === "truhlar" ? "Truhlar" : "Grimme"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 tabular-nums",
									children: r.dG.toFixed(2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-2 tabular-nums",
									children: [r.dS.toFixed(1), " cal/mol·K"]
								})
							]
						}, r.thermo)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-mist/40 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "El mismo sistema, siete métodos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-mist",
						children: "ΔG‡ del primer TS y ΔG de reacción, con el resto de ajustes fijos. La dispersión de varios kcal/mol es la incertidumbre realista del funcional, no ruido de redondeo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-mist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3",
										children: "Método"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-3",
										children: "ΔG‡"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2",
										children: "ΔG reacción"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: scan.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-mist/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-3",
										children: r.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-3 tabular-nums",
										children: r.dGts.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 tabular-nums",
										children: r.dGr.toFixed(1)
									})
								]
							}, r.id)) })]
						})
					})
				]
			}),
			parent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-teal/40 p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Contraste experimental, 3 HC≡CH → C₆H₆"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2",
					children: [
						"ΔH° = ",
						(-142.8).toFixed(1),
						" kcal/mol a partir de ΔfH°(acetileno) = 54.2 y ΔfH°(benceno) = 19.8 kcal/mol. ΔG° ≈ ",
						(-119.6).toFixed(1),
						" kcal/mol (fase gas, 298 K). El ciclo B3LYP reconstruido cierra en −114.3: faltan ~28.5 kcal/mol, sobre todo correlación del triple enlace y de la aromaticidad, no solo dispersión. Por eso un funcional moderno no se “suma” como una D3 cosmética."
					]
				})]
			})
		]
	});
}
function StrainPanel({ input, ready }) {
	const data = strainCurve(input).map((p) => ({
		...p,
		xi: Number(p.xi.toFixed(3))
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "Modelo de activación-distorsión a lo largo de un IRC analítico del acoplamiento oxidante. La curva de energía pasa por la barrera y por el ΔE de reacción de este perfil. La partición strain / interacción está construida para ilustrar el resultado de Dalla Tiezza, Bickelhaupt y Orian (ChemPhysChem 2018): el Co gana porque la interacción estabiliza más, no porque distorsione menos. No son los puntos publicados del ASA."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-72 w-full rounded-card border border-mist/40 p-2",
				children: ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-mist)",
								strokeOpacity: .25
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "xi",
								tick: {
									fill: "var(--color-ink)",
									fontSize: 12
								},
								label: {
									value: "ξ",
									position: "insideBottom",
									offset: -2,
									fill: "var(--color-mist)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: {
									fill: "var(--color-ink)",
									fontSize: 12
								},
								width: 48
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "var(--color-paper)",
								borderColor: "var(--color-mist)",
								color: "var(--color-ink)"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "e",
								name: "ΔE",
								stroke: "var(--color-ink)",
								dot: false,
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "strain",
								name: "ΔE strain",
								stroke: "var(--color-copper)",
								dot: false,
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "interaction",
								name: "ΔE int",
								stroke: "var(--color-teal)",
								dot: false,
								strokeWidth: 2
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mist",
				children: "Cambia el metal a CpRh o CpIr: la reacción del acoplamiento deja de ser exoérgica y la barrera sube por la relación de Evans–Polanyi (α = 0.45) aplicada a los ΔE B3LYP/TZ2P publicados (−16.5, +4.2 y +1.0 kcal/mol para Co, Rh e Ir)."
			})
		]
	});
}
function GaussPanel({ input, stations, nproc, mem, setNproc, setMem }) {
	const deck = (0, import_react.useMemo)(() => gaussianDeck(input, stations, nproc, mem), [
		input,
		stations,
		nproc,
		mem
	]);
	const preview = deck.split("\n").slice(0, 48).join("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: ["Núcleos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 block min-h-11 rounded-lg border border-mist/50 bg-paper px-2",
							value: nproc,
							onChange: (e) => setNproc(Number(e.target.value)),
							children: [
								8,
								16,
								32,
								64
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: n,
								children: n
							}, n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: ["Memoria (GB)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 block min-h-11 rounded-lg border border-mist/50 bg-paper px-2",
							value: mem,
							onChange: (e) => setMem(Number(e.target.value)),
							children: [
								8,
								16,
								24,
								32,
								64
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: n,
								children: n
							}, n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-lg bg-copper px-4 font-semibold text-paper",
						onClick: () => download("trimera_g16.gjf", deck),
						children: "Descargar baraja .gjf"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: routeCard(input).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-mist/40 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg",
						children: r.step
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-mist",
						children: r.detail
					})]
				}, r.step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
				className: "max-h-80 overflow-auto rounded-card border border-mist/40 bg-ink p-3 text-xs text-paper",
				children: [
					preview,
					"\n",
					"! … el archivo completo va en la descarga."
				]
			})
		]
	});
}
function Sources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mist",
				children: "Cada cifra del perfil lleva una etiqueta: literatura (número publicado), reconstrucción (encadenado de números publicados) o modelo (incremento de esta aplicación). Si una energía no dice literatura, no la cites como resultado de un paper."
			}),
			CITATIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-mist/40 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg",
						children: [
							c.authors,
							" (",
							c.year,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-teal",
						children: c.source
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-mist",
						children: ["doi:", c.doi]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: c.usedFor
					})
				]
			}, c.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-mist/40 p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg",
					children: "Constantes usadas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "R = 1.987204×10⁻³ kcal/mol·K. kB, h y NA de CODATA 2018. Vm(298.15 K, 1 atm) = 24.465 L/mol. Factor de Kirkwood (ε−1)/(2ε+1) para el continuo. ε: tolueno 2.374, THF 7.426, MeCN 35.688."
				})]
			})
		]
	});
}
function ProfileChart({ stations, yMode, selected, onPick }) {
	const data = stations.map((s, i) => ({
		i,
		id: s.id,
		name: s.short,
		y: yMode === "dG" ? s.dG : s.dH,
		uncertainty: s.uncertainty,
		kind: s.kind
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
			data,
			margin: {
				top: 12,
				right: 12,
				left: 0,
				bottom: 8
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					stroke: "var(--color-mist)",
					strokeOpacity: .25
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "name",
					tick: {
						fill: "var(--color-ink)",
						fontSize: 12
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick: {
						fill: "var(--color-ink)",
						fontSize: 12
					},
					width: 48
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					y: 0,
					stroke: "var(--color-mist)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					contentStyle: {
						background: "var(--color-paper)",
						borderColor: "var(--color-mist)",
						color: "var(--color-ink)"
					},
					formatter: (value) => [`${Number(value).toFixed(1)} kcal/mol`, yMode === "dG" ? "ΔG" : "ΔH"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "y",
					stroke: "var(--color-teal)",
					strokeWidth: 2,
					dot: (dot) => {
						const p = dot.payload;
						const fill = p.kind === "ts" ? "var(--color-copper)" : p.kind === "mecp" ? "var(--color-ink)" : "var(--color-teal)";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: dot.cx,
							cy: dot.cy,
							r: p.id === selected ? 7 : 5,
							fill,
							onClick: () => onPick(p.id)
						}, p.id);
					},
					activeDot: { r: 7 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBar, {
						dataKey: "uncertainty",
						stroke: "var(--color-copper)",
						width: 4
					})
				})
			]
		})
	});
}
function StationCard({ station }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-card border border-mist/40 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: station.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { anchor: station.anchor }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-wide text-mist",
						children: station.spin
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-2 gap-3 text-sm md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "ΔH",
						v: `${station.dH.toFixed(1)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "ΔG",
						v: `${station.dG.toFixed(1)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "ΔS",
						v: `${station.dS.toFixed(1)} cal/mol·K`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Incertidumbre",
						v: `±${station.uncertainty.toFixed(1)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: station.note
			}),
			station.kind === "ts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-mist",
				children: [
					"Frecuencia imaginaria de trabajo: ",
					station.imag.toFixed(0),
					"i cm⁻¹. Hay que visualizar el modo; un número solo no identifica el TS."
				]
			})
		]
	});
}
function StationTable({ stations, selected, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "text-mist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-3",
						children: "Punto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-3",
						children: "ΔH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-3",
						children: "ΔG"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2 pr-3",
						children: "ΔS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-2",
						children: "Origen"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stations.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: `border-t border-mist/30 ${s.id === selected ? "bg-teal/10" : ""}`,
				onClick: () => onPick(s.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2 pr-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "min-h-11 text-left font-semibold",
							children: [
								s.short,
								" · ",
								s.kind === "ts" ? "TS" : s.kind === "mecp" ? "MECP" : "mín"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2 pr-3 tabular-nums",
						children: s.dH.toFixed(1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2 pr-3 tabular-nums",
						children: s.dG.toFixed(1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2 pr-3 tabular-nums",
						children: s.dS.toFixed(1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { anchor: s.anchor })
					})
				]
			}, s.id)) })]
		})
	});
}
function Badge({ anchor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rounded-full px-2 py-1 text-xs font-semibold ${anchor === "literatura" ? "bg-teal text-paper" : anchor === "reconstrucción" ? "bg-copper text-paper" : "bg-mist text-paper"}`,
		children: anchor
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 rounded-card border border-mist/40 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg",
			children: title
		}), children]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-mist",
			children: label
		}), children]
	});
}
function Select({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: "min-h-11 rounded-lg border border-mist/50 bg-paper px-2 text-ink",
		value,
		onChange: (e) => onChange(e.target.value),
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: o.value,
			children: o.label
		}, o.value))
	});
}
function Seg({ on, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `min-h-11 rounded-lg px-3 text-sm font-semibold ${on ? "bg-teal text-paper" : "border border-mist/50"}`,
		children: label
	});
}
function Check({ on, onClick, label, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onClick,
		className: "min-h-11 rounded-lg border border-mist/50 px-3 text-left text-sm disabled:opacity-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mr-2 inline-block h-3 w-3 rounded-sm ${on ? "bg-copper" : "border border-mist"}` }), label]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-mist",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "tabular-nums font-semibold",
		children: v
	})] });
}
function fmtK(k) {
	if (!Number.isFinite(k)) return "—";
	if (k < 1e-4 || k >= 1e5) return `${k.toExponential(2)} s⁻¹`;
	return `${k.toPrecision(3)} s⁻¹`;
}
function fmtTime(s) {
	if (!Number.isFinite(s)) return "—";
	if (s < 1e-6) return `${(s * 1e9).toExponential(1)} ns`;
	if (s < 1) return `${(s * 1e3).toFixed(2)} ms`;
	if (s < 120) return `${s.toFixed(2)} s`;
	if (s < 7200) return `${(s / 60).toFixed(1)} min`;
	if (s < 172800) return `${(s / 3600).toFixed(1)} h`;
	return `${(s / 86400).toExponential(2)} d`;
}
function download(filename, text) {
	const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workbench, {});
}
//#endregion
export { Home as component };
