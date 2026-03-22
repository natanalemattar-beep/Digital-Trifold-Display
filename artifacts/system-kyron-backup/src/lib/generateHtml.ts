// Inline SVG icon helper — returns an <svg> string for a given Lucide-style icon
function icon(path: string, size = 14, color = "#00FF41"): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0">${path}</svg>`;
}

const ICONS = {
  shield:      `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  smartphone:  `<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
  receipt:     `<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>`,
  scale:       `<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>`,
  globe:       `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  mail:        `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
  phone:       `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.13 1 .39 1.96.78 2.86a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.9.39 1.86.65 2.86.78A2 2 0 0 1 22 16.92z"/>`,
  download:    `<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>`,
  user:        `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  radio:       `<circle cx="12" cy="12" r="2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 6.34l1.41-1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 19.07l-1.41-1.41"/><path d="M7.76 7.76a5 5 0 0 0 0 8.49M16.24 7.76a5 5 0 0 1 0 8.49"/>`,
  clipboard:   `<rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="16" x2="13" y2="16"/>`,
  users:       `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  handshake:   `<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>`,
  recycle:     `<polyline points="1.5 8.5 1.5 3.5 6.5 3.5"/><path d="M1.5 3.5l5 5"/><polyline points="22.5 15.5 22.5 20.5 17.5 20.5"/><path d="M22.5 20.5l-5-5"/><path d="M6.5 3.5c3-3 8-3 11 0s3 8 0 11"/><path d="M17.5 20.5c-3 3-8 3-11 0s-3-8 0-11"/>`,
  server:      `<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>`,
  building:    `<rect x="4" y="2" width="16" height="20"/><path d="M9 22V12h6v10"/><line x1="9" y1="7" x2="9.01" y2="7"/><line x1="9" y1="12" x2="9.01" y2="12"/><line x1="15" y1="7" x2="15.01" y2="7"/><line x1="15" y1="12" x2="15.01" y2="12"/>`,
  mapPin:      `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
  trash:       `<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>`,
  check:       `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
  alert:       `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  bar:         `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
  clock:       `<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>`,
  arrow:       `<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`,
  leaf:        `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>`,
  fileSearch:  `<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="5" cy="17" r="3"/><path d="M9 21l-1.5-1.5"/>`,
  zap:         `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  chevron:     `<polyline points="9 18 15 12 9 6"/>`,
  printer:     `<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>`,
};

// ── Icon box helper ──────────────────────────────────────
function iconBox(iconName: keyof typeof ICONS, color = "#00FF41", size = 13, bg = "rgba(0,255,65,0.1)", border = "rgba(0,255,65,0.2)"): string {
  return `<div style="width:26px;height:26px;border-radius:7px;background:${bg};border:1px solid ${border};display:flex;align-items:center;justify-content:center;flex-shrink:0">${icon(ICONS[iconName], size, color)}</div>`;
}

function sectionTitle(iconName: keyof typeof ICONS, html: string): string {
  return `
    <div style="display:flex;align-items:center;gap:8px">
      ${iconBox(iconName)}
      <h2 style="margin:0;font-weight:800;font-size:clamp(13px,1.45vw,19px);color:#fff;line-height:1.2">${html}</h2>
    </div>`;
}

function devBadge(): string {
  return `<span style="display:inline-flex;align-items:center;gap:4px;font-size:9px;font-weight:700;padding:2px 7px;border-radius:99px;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.35);color:#FBBF24;text-transform:uppercase;letter-spacing:.06em">${icon(ICONS.zap, 8, "#FBBF24")}En desarrollo</span>`;
}

function greenCheck(label: string): string {
  return `<div style="display:flex;align-items:center;gap:6px">${icon(ICONS.check, 13, "#00FF41")}<span style="font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.8)">${label}</span></div>`;
}

function moduleCell(iconName: keyof typeof ICONS, name: string): string {
  return `
    <div style="background:rgba(6,95,70,.14);border:1px solid rgba(0,255,65,.16);border-radius:10px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center">
      <div style="width:28px;height:28px;border-radius:8px;background:rgba(0,255,65,.1);border:1px solid rgba(0,255,65,.2);display:flex;align-items:center;justify-content:center">${icon(ICONS[iconName], 13)}</div>
      <span style="font-size:clamp(9px,.82vw,10.5px);color:rgba(255,255,255,.8);font-weight:600;line-height:1.3">${name}</span>
    </div>`;
}

function allyCell(name: string): string {
  return `
    <div style="background:rgba(56,189,248,.07);border:1px solid rgba(56,189,248,.2);border-radius:12px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center">
      ${icon(ICONS.building, 16, "#38BDF8")}
      <span style="font-size:10px;font-weight:700;color:rgba(255,255,255,.85)">${name}</span>
      ${devBadge()}
    </div>`;
}

// ── Panels HTML builders ──────────────────────────────────

function buildPanel1(logoDataUrl: string): string {
  const logoEl = logoDataUrl
    ? `<img src="${logoDataUrl}" alt="System Kyron" style="width:100%;height:100%;object-fit:contain"/>`
    : icon(ICONS.shield, 48, "#00FF41");

  return `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;padding:clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px);gap:clamp(12px,1.4vw,20px);background:linear-gradient(160deg,rgba(6,95,70,.22) 0%,rgba(10,36,114,.35) 100%);border:1px solid rgba(0,255,65,.2);border-radius:20px;align-items:center;justify-content:center;text-align:center">
      <div style="width:clamp(90px,9vw,128px);height:clamp(90px,9vw,128px);display:flex;align-items:center;justify-content:center;filter:drop-shadow(0 0 28px rgba(0,255,65,.45))">${logoEl}</div>
      <div>
        <h1 style="font-size:clamp(24px,2.8vw,44px);font-weight:900;color:#fff;letter-spacing:-.03em;margin:0;line-height:1.05">
          System <span style="color:#00FF41;text-shadow:0 0 32px #00FF41">Kyron</span>
        </h1>
        <p style="font-size:clamp(11px,1.05vw,15px);color:#38BDF8;margin:10px 0 0;font-weight:500;line-height:1.4">La línea de teléfono que protege tu negocio</p>
      </div>
      <div style="width:100%;background:linear-gradient(135deg,rgba(0,255,65,.12),rgba(0,255,65,.04));border:1px solid rgba(0,255,65,.3);border-radius:10px;padding:10px 16px;display:flex;align-items:center;gap:8px;justify-content:center">
        ${icon(ICONS.shield, 14)}
        <p style="margin:0;font-size:clamp(10px,.88vw,12px);color:#00FF41;font-weight:700">Todo homologado: desde el IMEI hasta la contabilidad</p>
      </div>
      <div style="border-top:1px solid rgba(56,189,248,.15);padding-top:12px;width:100%">
        <p style="margin:0;font-size:clamp(9px,.8vw,11px);color:rgba(255,255,255,.45);line-height:1.7">
          Colegio Gabriela Mistral · Catia la Mar, La Guaira<br>
          <span style="color:#38BDF8;font-weight:600">Demo Day Kurios × EY 2026</span>
        </p>
      </div>
    </div>`;
}

function buildPanel2(): string {
  const stats = [
    { num: "21M+",    label: "Líneas expuestas a bloqueo CONATEL",    ic: "smartphone" as const, c: "#38BDF8" },
    { num: "1.000×",  label: "Multas de hasta 1.000 veces el BCV",    ic: "alert" as const,      c: "#FB923C" },
    { num: "134 h",   label: "Horas perdidas al año en papeleo (OCDE)", ic: "clock" as const,     c: "#38BDF8" },
    { num: "61%",     label: "PyMEs con incumplimiento laboral",        ic: "bar" as const,       c: "#00FF41" },
  ];
  const cards = stats.map(({ num, label, ic, c }) => `
    <div style="background:rgba(6,95,70,.18);border:1px solid rgba(0,255,65,.2);border-radius:12px;padding:12px 8px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px">
      <div style="width:32px;height:32px;border-radius:9px;background:${c}18;border:1px solid ${c}30;display:flex;align-items:center;justify-content:center">${icon(ICONS[ic], 16, c)}</div>
      <div style="font-size:clamp(18px,1.9vw,26px);font-weight:900;color:${c};line-height:1;text-shadow:0 0 14px ${c}66">${num}</div>
      <div style="font-size:clamp(9px,.82vw,11px);color:rgba(255,255,255,.65);line-height:1.35">${label}</div>
    </div>`).join("");

  return `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;padding:clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px);gap:clamp(10px,1.2vw,16px);background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid rgba(56,189,248,.15);border-radius:20px">
      ${sectionTitle("alert", `El caos regulatorio <span style="color:#00FF41">venezolano</span>`)}
      <p style="margin:0;font-size:clamp(10px,.88vw,12px);color:rgba(255,255,255,.55);line-height:1.55">Las empresas venezolanas enfrentan un laberinto de regulaciones que frena su crecimiento y las expone a sanciones severas sin herramientas de cumplimiento accesibles.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(6px,.8vw,10px);flex:1">${cards}</div>
    </div>`;
}

function buildPanel3(): string {
  const mods: Array<[keyof typeof ICONS, string]> = [
    ["user","Cuenta Personal"], ["radio","Mi Línea 5G"], ["clipboard","Contabilidad + Permisos"],
    ["scale","Asesoría Legal"], ["receipt","Facturación TPV"], ["users","RRHH"],
    ["handshake","Socios"], ["recycle","Sostenibilidad"], ["server","Ingeniería IT"],
  ];
  return `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;padding:clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px);gap:clamp(10px,1.2vw,16px);background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid rgba(56,189,248,.15);border-radius:20px">
      ${sectionTitle("globe", `Ecosistema <span style="color:#00FF41">integral</span>`)}
      <p style="margin:0;font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.5);line-height:1.4">La primera línea telefónica que homologa tu negocio desde el chip hasta la contabilidad.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(5px,.6vw,8px);flex:1">${mods.map(([ic, n]) => moduleCell(ic, n)).join("")}</div>
      <div style="background:linear-gradient(90deg,rgba(6,95,70,.3),transparent);border-left:2px solid #00FF41;border-radius:6px;padding:8px 12px;display:flex;flex-direction:column;gap:4px">
        ${greenCheck("100% homologado")}
        ${greenCheck("Soporte 24/7")}
        <div style="display:flex;align-items:center;gap:6px">${icon(ICONS.globe, 13, "#38BDF8")}<span style="font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.8)">Multi‑lenguaje (ES / EN)</span></div>
      </div>
    </div>`;
}

function buildPanel4(): string {
  const shields: Array<[keyof typeof ICONS, string]> = [
    ["smartphone","Reposición de equipo por robo o daño"],
    ["fileSearch","Perito forense SENIAT en fiscalizaciones"],
    ["scale","Abogado en menos de 1 hora"],
  ];
  const rows = shields.map(([ic, t]) => `
    <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(6,95,70,.18);border:1px solid rgba(0,255,65,.15);border-radius:10px">
      ${iconBox(ic)}
      <span style="font-size:clamp(10px,.88vw,12px);color:rgba(255,255,255,.85)">${t}</span>
    </div>`).join("");

  return `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;padding:clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px);gap:clamp(10px,1.2vw,16px);background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid rgba(0,255,65,.2);border-radius:20px">
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          ${icon(ICONS.shield, 20, "#00FF41")}
          <h2 style="margin:0;font-size:clamp(14px,1.5vw,20px);font-weight:800;color:#fff">KYRON SHIELD</h2>
        </div>
        <p style="margin:0;font-size:clamp(10px,.9vw,12px);color:#00FF41;font-weight:600">La única SIM con 3 seguros</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px">${rows}</div>
      <div style="background:rgba(56,189,248,.06);border:1px solid rgba(56,189,248,.2);border-left:3px solid #38BDF8;border-radius:12px;padding:12px 14px;font-style:italic;font-size:clamp(10px,.88vw,12px);color:rgba(255,255,255,.85);line-height:1.55">
        "Otros venden minutos. Nosotros proponemos vender <strong style="color:#00FF41">cumplimiento</strong>."
      </div>
      <div style="border-top:1px solid rgba(56,189,248,.12);padding-top:12px">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
          ${icon(ICONS.leaf, 14, "#00FF41")}
          <h3 style="margin:0;font-size:clamp(11px,1.05vw,14px);font-weight:700;color:#fff">Sostenibilidad inteligente</h3>
        </div>
        <div style="display:flex;gap:12px">
          <div style="width:clamp(44px,4.5vw,58px);height:clamp(44px,4.5vw,58px);border:1px dashed rgba(0,255,65,.35);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:rgba(6,95,70,.15)">${icon(ICONS.trash, 20)}</div>
          <div style="display:flex;flex-direction:column;gap:6px;justify-content:center">
            <p style="margin:0;font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.65);line-height:1.5">Smart Bins · inducción magnética<br><span style="color:#38BDF8;font-weight:600">Alianza Ameru.AI</span> — Eco‑Créditos por reciclar.</p>
            ${devBadge()}
          </div>
        </div>
      </div>
    </div>`;
}

function buildPanel5(): string {
  const allies = ["SAMSUNG","XIAOMI","MOTOROLA","APPLE","HKA FACTORY","AMERU.AI"];
  const roadmap = [
    { y: "2026", t: "Validación Caracas / La Guaira · Plataforma bilingüe (ES/EN)" },
    { y: "2027", t: "Expansión Colombia / Panamá" },
    { y: "2028+", t: "Evaluación México / EE.UU." },
  ];
  const pills = ["500K PyMEs · Venezuela","8.5M · Latam","21M+ consumidores"];

  return `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;padding:clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px);gap:clamp(10px,1.2vw,16px);background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid rgba(56,189,248,.15);border-radius:20px">
      ${sectionTitle("handshake", "Aliados estratégicos")}
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(5px,.6vw,8px)">${allies.map(allyCell).join("")}</div>
      <div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
          ${icon(ICONS.mapPin, 13, "#38BDF8")}
          <h3 style="margin:0;font-size:clamp(11px,1.05vw,13px);font-weight:700;color:#38BDF8">Hoja de ruta</h3>
        </div>
        <div style="display:flex;flex-direction:column;gap:7px">
          ${roadmap.map(({ y, t }) => `
            <div style="display:flex;gap:10px;align-items:flex-start">
              <div style="min-width:48px;padding:3px 8px;background:rgba(56,189,248,.1);border:1px solid rgba(56,189,248,.3);border-radius:6px;font-size:clamp(9px,.85vw,11px);font-weight:800;color:#38BDF8;text-align:center;flex-shrink:0">${y}</div>
              <span style="font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.7);line-height:1.5">${t}</span>
            </div>`).join("")}
        </div>
      </div>
      <div style="border-top:1px solid rgba(56,189,248,.12);padding-top:10px;display:flex;gap:6px;flex-wrap:wrap">
        ${pills.map(d => `<span style="font-size:clamp(9px,.85vw,10.5px);padding:3px 10px;background:rgba(0,255,65,.08);border:1px solid rgba(0,255,65,.25);border-radius:99px;color:#00FF41;font-weight:600">${d}</span>`).join("")}
      </div>
    </div>`;
}

function buildPanel6(): string {
  const team = [
    { name: "Carlos Mattar",    role: "Co-CEO & Lead Architecture" },
    { name: "Sebastián Garrido", role: "Co-CEO & Network Slicing" },
    { name: "Marcos Sousa",     role: "Co-CEO & Operational Flow" },
  ];
  const contact = [
    { ic: "mail" as const,  t: "contacto@systemkyron.com" },
    { ic: "phone" as const, t: "+58 XXX-XXX-XXXX" },
    { ic: "globe" as const, t: "www.systemkyron.com" },
  ];

  return `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;padding:clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px);gap:clamp(10px,1.2vw,16px);background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid rgba(56,189,248,.15);border-radius:20px">
      <h2 style="margin:0;font-size:clamp(13px,1.35vw,18px);font-weight:800;color:#fff;line-height:1.2">
        Hecho en <span style="color:#00FF41">Catia la Mar</span>,<br>para el mundo
      </h2>
      <div style="display:flex;justify-content:space-around;gap:8px">
        ${team.map(({ name, role }) => `
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
            <div style="width:clamp(48px,4.8vw,66px);height:clamp(48px,4.8vw,66px);border-radius:50%;background:rgba(6,95,70,.2);border:1.5px solid rgba(0,255,65,.3);display:flex;align-items:center;justify-content:center;box-shadow:0 0 18px rgba(0,255,65,.12)">
              ${icon(ICONS.user, 22, "#00FF41")}
            </div>
            <div style="text-align:center">
              <div style="font-weight:700;font-size:clamp(9px,.88vw,12px);color:#fff">${name}</div>
              <div style="font-size:clamp(8px,.75vw,10.5px);color:#38BDF8;margin-top:2px;line-height:1.3">${role}</div>
            </div>
          </div>`).join("")}
      </div>
      <div style="border-left:2px solid #00FF41;padding-left:10px;font-style:italic;font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.55);line-height:1.6">
        "Crecimos donde los apagones borran datos y la humedad destruye papeles. Por eso creamos esta propuesta."
      </div>
      <div style="background:linear-gradient(135deg,rgba(0,255,65,.1),rgba(6,95,70,.12));border:1px solid rgba(0,255,65,.25);border-radius:12px;padding:12px 14px;text-align:center">
        <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:8px">
          ${icon(ICONS.arrow, 14)}
          <p style="margin:0;font-size:clamp(11px,1vw,14px);font-weight:700;color:#fff">¿Quieres ser parte del pilotaje 2026?</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${contact.map(({ ic, t }) => `
            <div style="display:flex;align-items:center;justify-content:center;gap:6px">
              ${icon(ICONS[ic], 11, "#38BDF8")}
              <span style="font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.65)">${t}</span>
            </div>`).join("")}
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:center">
        <div style="width:clamp(48px,4.5vw,62px);height:clamp(48px,4.5vw,62px);border:1px dashed rgba(56,189,248,.35);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:rgba(56,189,248,.05)">
          ${icon(ICONS.smartphone, 22, "#38BDF8")}
        </div>
        <p style="margin:0;font-size:clamp(9px,.85vw,11px);color:rgba(255,255,255,.4)">Código QR — Escanea para más información</p>
      </div>
      <div style="border-top:1px solid rgba(56,189,248,.1);padding-top:8px;text-align:center;font-size:clamp(8px,.75vw,10px);color:rgba(255,255,255,.3);line-height:1.5">
        System Kyron · Propuesta en desarrollo · Colegio Gabriela Mistral · Kurios × EY Demo Day 2026
      </div>
    </div>`;
}

// ── Shared CSS for the downloaded file ──────────────────
const BASE_CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html,body{width:100%;height:100%;-webkit-font-smoothing:antialiased}
  body{
    font-family:'Inter','Poppins',system-ui,sans-serif;
    background:radial-gradient(ellipse at 15% 15%,#0d3494 0%,#0A2472 45%,#040c1e 100%);
    color:#fff;
  }
  .panels{
    display:flex;
    gap:clamp(8px,1vw,14px);
    width:100%;height:100%;
    padding:clamp(12px,1.5vw,20px);
  }
  @media print{
    *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
  }
`;

// ── Internal generator ───────────────────────────────────
function buildHtml(face: "front" | "back", logoDataUrl: string): string {
  const isFront = face === "front";
  const title = isFront
    ? "System Kyron – Cara Frontal"
    : "System Kyron – Cara Trasera";

  const panels = isFront
    ? `${buildPanel1(logoDataUrl)}${buildPanel2()}${buildPanel3()}`
    : `${buildPanel4()}${buildPanel5()}${buildPanel6()}`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;900&display=swap" rel="stylesheet">
  <style>${BASE_CSS}</style>
</head>
<body>
  <div class="panels">
    ${panels}
  </div>
</body>
</html>`;
}

// ── Main export ──────────────────────────────────────────
async function fetchLogo(): Promise<string> {
  try {
    const resp = await fetch("/logo-kyron.png");
    const blob = await resp.blob();
    return new Promise<string>((res) => {
      const reader = new FileReader();
      reader.onloadend = () => res(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {
    return "";
  }
}

function triggerDownload(html: string, filename: string) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function downloadTriptychHtml(face: "front" | "back") {
  const logoDataUrl = await fetchLogo();
  const html = buildHtml(face, logoDataUrl);
  const filename = face === "front"
    ? "system-kyron-cara-frontal.html"
    : "system-kyron-cara-trasera.html";
  triggerDownload(html, filename);
}
