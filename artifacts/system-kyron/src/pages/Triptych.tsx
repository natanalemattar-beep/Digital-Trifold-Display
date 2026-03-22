import { useState, useRef, useCallback, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import pptxgen from "pptxgenjs";
import {
  Shield, Smartphone, Receipt, Scale,
  User, Radio, ClipboardList, Users, Handshake, Recycle, Server,
  Building2, Globe, Mail, Phone, Download, MapPin,
  Trash2, CheckCircle2, Clock, AlertTriangle, BarChart3,
  ChevronRight, Leaf, FileSearch, Zap, ArrowRight, Sparkles,
  FileText, Presentation, FileDown, Image, Palette, X, ChevronDown,
} from "lucide-react";

// ── Design Tokens ──────────────────────────────────────────────────────────
const NEON    = "#00D633";
const NEONLT  = "rgba(0,214,51,0.12)";
const NEONBRD = "rgba(0,214,51,0.22)";
const LBLUE   = "#38BDF8";
const LBLUELT = "rgba(56,189,248,0.09)";
const LBLUEBRD= "rgba(56,189,248,0.22)";
const AMBER   = "#FBBF24";
const WHITE85 = "rgba(255,255,255,0.85)";
const WHITE55 = "rgba(255,255,255,0.55)";
const WHITE30 = "rgba(255,255,255,0.30)";
const WHITE10 = "rgba(255,255,255,0.10)";

const T = {
  xs:   "clamp(8px,0.72vw,10px)",
  sm:   "clamp(9px,0.82vw,11px)",
  base: "clamp(10px,0.9vw,12.5px)",
  md:   "clamp(11px,1vw,14px)",
  lg:   "clamp(13px,1.3vw,17px)",
  xl:   "clamp(15px,1.6vw,21px)",
  "2xl":"clamp(20px,2.2vw,30px)",
  "3xl":"clamp(26px,3vw,42px)",
};

// ── Base Panel ─────────────────────────────────────────────────────────────
const panel: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  borderRadius: "18px",
  padding: "clamp(14px,1.5vw,22px) clamp(12px,1.3vw,20px)",
  gap: "clamp(9px,1vw,14px)",
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(56,189,248,0.13)",
  boxSizing: "border-box",
};

// ── Shared Components ──────────────────────────────────────────────────────

function Divider() {
  return <div style={{ height: "1px", background: "rgba(56,189,248,0.1)", flexShrink: 0 }} />;
}

function Tag({ children, color = NEON }: { children: React.ReactNode; color?: string }) {
  const alpha = color === NEON ? NEONLT : LBLUELT;
  const border = color === NEON ? NEONBRD : LBLUEBRD;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "3px",
      fontSize: T.xs, fontWeight: 700, padding: "2px 8px",
      borderRadius: "99px",
      background: alpha, border: `1px solid ${border}`,
      color, letterSpacing: "0.05em", textTransform: "uppercase",
    }}>
      {children}
    </span>
  );
}

function DevBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "3px",
      fontSize: T.xs, fontWeight: 700, padding: "2px 8px",
      borderRadius: "99px",
      background: "rgba(251,191,36,0.10)",
      border: "1px solid rgba(251,191,36,0.28)",
      color: AMBER, letterSpacing: "0.05em", textTransform: "uppercase",
    }}>
      <Zap size={7} color={AMBER} strokeWidth={2.5} />
      En desarrollo
    </span>
  );
}

function SectionHeader({ icon: Icon, title, accent, blue = false }: {
  icon: React.ElementType; title: string; accent?: string; blue?: boolean;
}) {
  const c = blue ? LBLUE : NEON;
  const bg = blue ? LBLUELT : NEONLT;
  const brd = blue ? LBLUEBRD : NEONBRD;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "9px", flexShrink: 0 }}>
      <div style={{
        width: "30px", height: "30px", borderRadius: "9px",
        background: bg, border: `1px solid ${brd}`,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={14} color={c} strokeWidth={2} />
      </div>
      <h2 style={{ margin: 0, fontWeight: 800, fontSize: T.lg, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
        {title}{accent && <> <span style={{ color: NEON }}>{accent}</span></>}
      </h2>
    </div>
  );
}

// ── Panel 1 – Portada ──────────────────────────────────────────────────────
function Panel1() {
  return (
    <div style={{
      ...panel,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(155deg, rgba(6,95,70,0.18) 0%, rgba(10,36,114,0.28) 60%, rgba(4,12,30,0.4) 100%)",
      border: `1px solid ${NEONBRD}`,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,214,51,0.07) 0%, transparent 70%)`,
      }} />

      {/* Logo */}
      <div style={{
        width: "clamp(80px,8.5vw,118px)", height: "clamp(80px,8.5vw,118px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        filter: `drop-shadow(0 0 32px rgba(0,214,51,0.5)) drop-shadow(0 0 12px rgba(0,214,51,0.3))`,
        flexShrink: 0,
      }}>
        <img src="/logo-kyron.png" alt="System Kyron" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>

      {/* Title block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", zIndex: 1 }}>
        <h1 style={{
          fontSize: T["3xl"], fontWeight: 900,
          color: "#fff", letterSpacing: "-0.03em", margin: 0, lineHeight: 1,
        }}>
          System <span style={{ color: NEON, textShadow: `0 0 40px ${NEON}88` }}>Kyron</span>
        </h1>
        <p style={{ fontSize: T.md, color: LBLUE, margin: 0, fontWeight: 500, letterSpacing: "0.01em", lineHeight: 1.4 }}>
          La línea de teléfono que protege tu negocio
        </p>
      </div>

      {/* Homologado banner */}
      <div style={{
        width: "100%",
        background: `linear-gradient(90deg, ${NEONLT}, rgba(0,214,51,0.04))`,
        border: `1px solid ${NEONBRD}`,
        borderRadius: "10px", padding: "9px 16px",
        display: "flex", alignItems: "center", gap: "8px", justifyContent: "center",
        zIndex: 1,
      }}>
        <Shield size={13} color={NEON} strokeWidth={2} />
        <p style={{ margin: 0, fontSize: T.base, color: NEON, fontWeight: 700, letterSpacing: "0.01em" }}>
          Todo homologado: desde el IMEI hasta la contabilidad
        </p>
      </div>

      {/* Three pillars */}
      <div style={{ display: "flex", gap: "8px", width: "100%", zIndex: 1 }}>
        {[
          { icon: Shield, label: "3 Seguros" },
          { icon: Scale, label: "Legal 24/7" },
          { icon: BarChart3, label: "Cumplimiento" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} style={{
            flex: 1,
            background: WHITE10,
            border: "1px solid rgba(56,189,248,0.13)",
            borderRadius: "10px",
            padding: "8px 6px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",
          }}>
            <Icon size={14} color={LBLUE} strokeWidth={1.8} />
            <span style={{ fontSize: T.xs, fontWeight: 700, color: WHITE55, letterSpacing: "0.04em" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ zIndex: 1 }}>
        <p style={{ margin: 0, fontSize: T.xs, color: WHITE30, lineHeight: 1.7, letterSpacing: "0.01em" }}>
          Colegio Gabriela Mistral · Catia la Mar, La Guaira
          <br />
          <span style={{ color: LBLUE, fontWeight: 600 }}>Demo Day Kurios × EY 2026</span>
        </p>
      </div>
    </div>
  );
}

// ── Panel 2 – El Problema ─────────────────────────────────────────────────
function Panel2() {
  const stats = [
    { num: "21M+",   label: "Líneas venezolanas\nexpuestas a bloqueo CONATEL", icon: Smartphone,    color: LBLUE,     wide: false },
    { num: "1.000×", label: "Multas máximas\nsobre el BCV (LOTEL)",            icon: AlertTriangle, color: "#FB923C", wide: false },
    { num: "134h",   label: "Horas al año perdidas en\ncumplimiento (OCDE)",   icon: Clock,         color: LBLUE,     wide: true  },
  ];

  return (
    <div style={panel}>
      <SectionHeader icon={AlertTriangle} title="El caos regulatorio" accent="venezolano" />

      <p style={{ margin: 0, fontSize: T.sm, color: WHITE55, lineHeight: 1.65, flexShrink: 0 }}>
        Las empresas venezolanas enfrentan un laberinto de regulaciones que las expone a sanciones severas sin herramientas de cumplimiento accesibles.
      </p>

      <Divider />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", flex: 1, minHeight: 0 }}>
        {stats.map(({ num, label, icon: Icon, color, wide }) => (
          <div key={num} style={{
            gridColumn: wide ? "1 / -1" : undefined,
            background: `${color}08`,
            border: `1px solid ${color}22`,
            borderRadius: "12px",
            padding: "12px 10px",
            display: "flex", flexDirection: "column", gap: "6px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "-10px", right: "-10px",
              width: "44px", height: "44px",
              background: `${color}0C`,
              borderRadius: "50%",
            }} />
            <div style={{
              width: "26px", height: "26px", borderRadius: "7px",
              background: `${color}14`,
              border: `1px solid ${color}28`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={13} color={color} strokeWidth={1.8} />
            </div>
            <div style={{
              fontSize: T["2xl"], fontWeight: 900,
              color, lineHeight: 1, letterSpacing: "-0.02em",
              textShadow: `0 0 20px ${color}55`,
            }}>
              {num}
            </div>
            <div style={{ fontSize: T.xs, color: WHITE55, lineHeight: 1.4, whiteSpace: "pre-line" }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Panel 3 – La Solución ─────────────────────────────────────────────────
function Panel3() {
  const modules = [
    { name: "Cuenta Personal",        icon: User },
    { name: "Mi Línea 5G",            icon: Radio },
    { name: "Contabilidad",           icon: ClipboardList },
    { name: "Asesoría Legal",         icon: Scale },
    { name: "Facturación TPV",        icon: Receipt },
    { name: "RRHH",                   icon: Users },
    { name: "Socios",                 icon: Handshake },
    { name: "Sostenibilidad",         icon: Recycle },
    { name: "Ingeniería IT",          icon: Server },
  ];

  const features = [
    { icon: CheckCircle2, text: "100% homologado", color: NEON },
    { icon: Globe, text: "Multi-lenguaje ES / EN", color: LBLUE },
    { icon: Sparkles, text: "Soporte 24 / 7", color: LBLUE },
  ];

  return (
    <div style={panel}>
      <SectionHeader icon={Globe} title="Ecosistema" accent="integral" />

      <p style={{ margin: 0, fontSize: T.sm, color: WHITE55, lineHeight: 1.6, flexShrink: 0 }}>
        La primera SIM que homologa tu negocio desde el chip hasta la contabilidad.
      </p>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3,1fr)",
        gap: "6px", flex: 1, minHeight: 0,
      }}>
        {modules.map(({ name, icon: Icon }) => (
          <div key={name} style={{
            background: NEONLT,
            border: `1px solid ${NEONBRD}`,
            borderRadius: "10px",
            padding: "8px 6px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",
            textAlign: "center",
            transition: "border-color 0.15s, transform 0.15s",
            cursor: "default",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(0,214,51,0.45)`;
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = NEONBRD;
              (e.currentTarget as HTMLDivElement).style.transform = "none";
            }}
          >
            <div style={{
              width: "26px", height: "26px", borderRadius: "7px",
              background: "rgba(0,214,51,0.12)",
              border: "1px solid rgba(0,214,51,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={12} color={NEON} strokeWidth={1.8} />
            </div>
            <span style={{ fontSize: T.xs, color: WHITE85, fontWeight: 600, lineHeight: 1.3 }}>{name}</span>
          </div>
        ))}
      </div>

      <Divider />

      <div style={{ display: "flex", flexDirection: "column", gap: "5px", flexShrink: 0 }}>
        {features.map(({ icon: Icon, text, color }) => (
          <div key={text} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <Icon size={12} color={color} strokeWidth={2.2} />
            <span style={{ fontSize: T.sm, color: WHITE85, fontWeight: 500 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Panel 4 – Kyron Shield ────────────────────────────────────────────────
function Panel4() {
  const shields = [
    { icon: Smartphone, text: "Reposición de equipo por robo o daño" },
    { icon: FileSearch, text: "Perito forense SENIAT en fiscalizaciones" },
    { icon: Scale,      text: "Abogado en menos de 1 hora" },
  ];

  return (
    <div style={{
      ...panel,
      border: `1px solid ${NEONBRD}`,
      background: "linear-gradient(155deg, rgba(6,95,70,0.12) 0%, rgba(5,13,31,0.6) 100%)",
    }}>
      {/* Header */}
      <div style={{ flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "3px" }}>
          <Shield size={20} color={NEON} strokeWidth={1.8}
            style={{ filter: `drop-shadow(0 0 10px ${NEON}88)`, flexShrink: 0 }} />
          <h2 style={{ margin: 0, fontSize: T.xl, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
            KYRON SHIELD
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: T.sm, color: NEON, fontWeight: 700, letterSpacing: "0.04em", paddingLeft: "29px" }}>
          La única SIM con 3 seguros
        </p>
      </div>

      <Divider />

      {/* Shield items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", flexShrink: 0 }}>
        {shields.map(({ icon: Icon, text }, i) => (
          <div key={text} style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "8px 11px",
            background: NEONLT,
            border: `1px solid ${NEONBRD}`,
            borderRadius: "10px",
            transition: "border-color 0.15s",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,214,51,0.4)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = NEONBRD)}
          >
            <div style={{
              width: "24px", height: "24px", borderRadius: "6px",
              background: "rgba(0,214,51,0.12)", border: "1px solid rgba(0,214,51,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Icon size={12} color={NEON} strokeWidth={1.8} />
            </div>
            <span style={{ fontSize: T.base, color: WHITE85, lineHeight: 1.35 }}>{text}</span>
            <div style={{
              marginLeft: "auto", width: "18px", height: "18px", flexShrink: 0,
              borderRadius: "50%", background: "rgba(0,214,51,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: "9px", fontWeight: 800, color: NEON }}>{i + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{
        background: "rgba(56,189,248,0.06)",
        border: `1px solid ${LBLUEBRD}`,
        borderLeft: `3px solid ${LBLUE}`,
        borderRadius: "8px",
        padding: "9px 12px",
        fontStyle: "italic",
        fontSize: T.sm,
        color: WHITE85,
        lineHeight: 1.6,
        flexShrink: 0,
      }}>
        "Otros venden minutos. Nosotros proponemos vender{" "}
        <strong style={{ color: NEON, fontStyle: "normal" }}>cumplimiento</strong>."
      </div>

      <Divider />

      {/* Eco section */}
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", flex: 1, minHeight: 0, overflow: "hidden" }}>
        <div style={{
          width: "42px", height: "42px", flexShrink: 0,
          border: `1px dashed ${NEONBRD}`,
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: NEONLT,
        }}>
          <Trash2 size={18} color={NEON} strokeWidth={1.6} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Leaf size={11} color={NEON} strokeWidth={2} />
            <span style={{ fontSize: T.md, fontWeight: 700, color: "#fff" }}>Sostenibilidad inteligente</span>
          </div>
          <p style={{ margin: 0, fontSize: T.sm, color: WHITE55, lineHeight: 1.5 }}>
            Smart Bins · inducción magnética
            <br />
            <span style={{ color: LBLUE, fontWeight: 600 }}>Alianza Ameru.AI</span>
            {" — "}Eco-Créditos por reciclar.
          </p>
          <DevBadge />
        </div>
      </div>
    </div>
  );
}

// ── Panel 5 – Aliados + Roadmap ───────────────────────────────────────────
function Panel5() {
  const allies = ["SAMSUNG", "XIAOMI", "MOTOROLA", "APPLE", "HKA FACTORY", "AMERU.AI"];
  const roadmap = [
    { year: "2026", text: "Validación Caracas / La Guaira · Plataforma bilingüe ES/EN" },
    { year: "2027", text: "Expansión Colombia / Panamá" },
    { year: "2028+", text: "Evaluación México / EE.UU." },
  ];
  return (
    <div style={panel}>
      <SectionHeader icon={Handshake} title="Aliados" accent="estratégicos" />

      {/* Ally grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "6px", flexShrink: 0 }}>
        {allies.map((name) => (
          <div key={name} style={{
            background: LBLUELT,
            border: `1px solid ${LBLUEBRD}`,
            borderRadius: "10px",
            padding: "8px 6px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",
            textAlign: "center",
            transition: "transform 0.15s, border-color 0.15s",
            cursor: "default",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(56,189,248,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "none";
              (e.currentTarget as HTMLDivElement).style.borderColor = LBLUEBRD;
            }}
          >
            <Building2 size={14} color={LBLUE} strokeWidth={1.7} />
            <span style={{ fontSize: T.xs, fontWeight: 700, color: WHITE85, letterSpacing: "0.03em" }}>{name}</span>
            <DevBadge />
          </div>
        ))}
      </div>

      <Divider />

      {/* Roadmap */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", flex: 1, minHeight: 0, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "7px", flexShrink: 0 }}>
          <MapPin size={12} color={LBLUE} strokeWidth={2} />
          <h3 style={{ margin: 0, fontSize: T.md, fontWeight: 700, color: LBLUE, letterSpacing: "0.01em" }}>
            Hoja de ruta
          </h3>
        </div>
        {roadmap.map(({ year, text }, i) => (
          <div key={year} style={{ display: "flex", gap: "0", alignItems: "stretch", flexShrink: 0 }}>
            {/* Timeline line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0,
                background: LBLUE, boxShadow: `0 0 8px ${LBLUE}88`, marginTop: "3px",
              }} />
              {i < roadmap.length - 1 && (
                <div style={{ width: "1px", flex: 1, background: "rgba(56,189,248,0.2)", minHeight: "14px", marginTop: "2px" }} />
              )}
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", paddingBottom: i < roadmap.length - 1 ? "8px" : "0" }}>
              <div style={{
                padding: "2px 7px", borderRadius: "5px",
                background: "rgba(56,189,248,0.1)", border: `1px solid ${LBLUEBRD}`,
                fontSize: T.xs, fontWeight: 800, color: LBLUE,
                whiteSpace: "nowrap", flexShrink: 0, marginTop: "1px",
              }}>
                {year}
              </div>
              <span style={{ fontSize: T.sm, color: WHITE55, lineHeight: 1.5 }}>{text}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// ── Panel 6 – Equipo + Contacto ───────────────────────────────────────────
function Panel6() {
  const team = [
    { name: "Carlos Mattar",     role: "Co-CEO & Lead Architecture" },
    { name: "Sebastián Garrido", role: "Co-CEO & Network Slicing" },
    { name: "Marcos Sousa",      role: "Co-CEO & Operational Flow" },
  ];
  const contact = [
    { icon: Mail,  text: "contacto@systemkyron.com" },
    { icon: Phone, text: "+58 XXX-XXX-XXXX" },
    { icon: Globe, text: "www.systemkyron.com" },
  ];

  return (
    <div style={panel}>
      {/* Heading */}
      <div style={{ flexShrink: 0 }}>
        <h2 style={{ margin: 0, fontSize: T.xl, fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Hecho en <span style={{ color: NEON }}>Catia la Mar</span>,
          <br />para el mundo
        </h2>
      </div>

      {/* Team */}
      <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
        {team.map(({ name, role }) => (
          <div key={name} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "7px",
            background: NEONLT, border: `1px solid ${NEONBRD}`,
            borderRadius: "11px", padding: "9px 6px",
          }}>
            <div style={{
              width: "clamp(36px,3.8vw,50px)", height: "clamp(36px,3.8vw,50px)",
              borderRadius: "50%",
              background: "rgba(6,95,70,0.25)", border: `1.5px solid rgba(0,214,51,0.35)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 16px rgba(0,214,51,0.12)`,
            }}>
              <User size={18} color={NEON} strokeWidth={1.5} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: T.sm, color: "#fff", lineHeight: 1.2 }}>{name}</div>
              <div style={{ fontSize: T.xs, color: LBLUE, marginTop: "2px", lineHeight: 1.3 }}>{role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{
        borderLeft: `2px solid ${NEON}`,
        paddingLeft: "10px",
        fontStyle: "italic",
        fontSize: T.sm,
        color: WHITE55,
        lineHeight: 1.65,
        flexShrink: 0,
      }}>
        "Crecimos donde los apagones borran datos y la humedad destruye papeles. Por eso creamos esta propuesta."
      </div>

      <Divider />

      {/* CTA */}
      <div style={{
        background: `linear-gradient(135deg, rgba(0,214,51,0.10), rgba(6,95,70,0.10))`,
        border: `1px solid ${NEONBRD}`,
        borderRadius: "12px", padding: "10px 12px",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "7px" }}>
          <ArrowRight size={12} color={NEON} strokeWidth={2.5} />
          <p style={{ margin: 0, fontSize: T.md, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>
            ¿Quieres ser parte del pilotaje 2026?
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {contact.map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Icon size={10} color={LBLUE} strokeWidth={2} />
              <span style={{ fontSize: T.sm, color: WHITE55 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QR placeholder */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: "clamp(42px,4.2vw,56px)", height: "clamp(42px,4.2vw,56px)",
          border: `1px dashed ${LBLUEBRD}`,
          borderRadius: "9px",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          background: LBLUELT,
        }}>
          <Smartphone size={18} color={LBLUE} strokeWidth={1.5} />
        </div>
        <p style={{ margin: 0, fontSize: T.sm, color: WHITE30 }}>
          Código QR — Escanea para más información
        </p>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid rgba(56,189,248,0.1)", paddingTop: "7px",
        textAlign: "center",
        fontSize: T.xs, color: WHITE30, lineHeight: 1.5,
        flexShrink: 0,
      }}>
        System Kyron · Propuesta en desarrollo · Colegio Gabriela Mistral · Kurios × EY Demo Day 2026
      </div>
    </div>
  );
}

// ── Export formats config ──────────────────────────────────────────────────
type ExportFormat = "png" | "pdf" | "pptx" | "word" | "canva";

const FORMATS: { id: ExportFormat; label: string; ext: string; icon: React.ElementType; desc: string; color: string }[] = [
  { id: "pdf",   label: "PDF",         ext: ".pdf",  icon: FileText,     desc: "Alta resolución, imprimible", color: "#EF4444" },
  { id: "pptx",  label: "PowerPoint",  ext: ".pptx", icon: Presentation, desc: "Diapositiva lista para presentar", color: "#EA580C" },
  { id: "word",  label: "Word",        ext: ".docx", icon: FileDown,     desc: "Documento editable con imagen", color: "#2563EB" },
  { id: "png",   label: "PNG",         ext: ".png",  icon: Image,        desc: "Imagen para web · 2×", color: NEON },
  { id: "canva", label: "Para Canva",  ext: ".png",  icon: Palette,      desc: "PNG 3× optimizado para Canva", color: "#7C3AED" },
];

// ── Main Page ──────────────────────────────────────────────────────────────
export function Triptych() {
  const [face, setFace] = useState<"front" | "back">("front");
  const [dlOpen, setDlOpen] = useState(false);
  const [dlFace, setDlFace] = useState<"front" | "back">("front");
  const [isDownloading, setIsDownloading] = useState<ExportFormat | null>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const dlRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dlRef.current && !dlRef.current.contains(e.target as Node)) setDlOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const captureCanvas = useCallback(async (targetFace: "front" | "back", scale = 2) => {
    if (!panelsRef.current) return null;
    const prevFace = face;
    let switched = false;
    if (face !== targetFace) {
      setFace(targetFace);
      switched = true;
      await new Promise(r => setTimeout(r, 380));
    }
    try {
      const c = await html2canvas(panelsRef.current, {
        backgroundColor: "#040c1e",
        scale, useCORS: true, allowTaint: true, logging: false,
      });
      return c;
    } finally {
      if (switched) setFace(prevFace);
    }
  }, [face]);

  const triggerDownload = (dataUrl: string, filename: string) => {
    const a = document.createElement("a");
    a.href = dataUrl; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  const downloadAs = useCallback(async (format: ExportFormat) => {
    if (isDownloading) return;
    setIsDownloading(format);
    const slug = dlFace === "front" ? "cara-frontal" : "cara-trasera";
    try {
      if (format === "png") {
        const c = await captureCanvas(dlFace, 2);
        if (!c) return;
        triggerDownload(c.toDataURL("image/png"), `system-kyron-${slug}.png`);
      }
      if (format === "canva") {
        const c = await captureCanvas(dlFace, 3);
        if (!c) return;
        triggerDownload(c.toDataURL("image/png"), `system-kyron-${slug}-canva.png`);
      }
      if (format === "pdf") {
        const c = await captureCanvas(dlFace, 2);
        if (!c) return;
        const imgData = c.toDataURL("image/png");
        const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [c.width / 2, c.height / 2] });
        pdf.addImage(imgData, "PNG", 0, 0, c.width / 2, c.height / 2);
        pdf.save(`system-kyron-${slug}.pdf`);
      }
      if (format === "pptx") {
        const c = await captureCanvas(dlFace, 2);
        if (!c) return;
        const imgData = c.toDataURL("image/png");
        const prs = new pptxgen();
        prs.layout = "LAYOUT_WIDE";
        const slide = prs.addSlide();
        slide.background = { color: "040c1e" };
        slide.addImage({ data: imgData, x: 0, y: 0, w: "100%", h: "100%" });
        await prs.writeFile({ fileName: `system-kyron-${slug}.pptx` });
      }
      if (format === "word") {
        const c = await captureCanvas(dlFace, 2);
        if (!c) return;
        const imgData = c.toDataURL("image/png");
        const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
          <head><meta charset="utf-8"><title>System Kyron – ${slug}</title>
          <style>body{margin:0;padding:0;background:#040c1e;}img{width:100%;display:block;}</style></head>
          <body><img src="${imgData}" alt="System Kyron ${slug}" /></body></html>`;
        const blob = new Blob([html], { type: "application/msword" });
        triggerDownload(URL.createObjectURL(blob), `system-kyron-${slug}.doc`);
      }
    } finally {
      setIsDownloading(null);
      setDlOpen(false);
    }
  }, [isDownloading, dlFace, captureCanvas]);

  return (
    <div style={{
      height: "100vh",
      overflow: "hidden",
      background: `radial-gradient(ellipse 90% 80% at 15% 10%, #0d3494 0%, #0A2472 40%, #040c1e 100%)`,
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "clamp(10px,1.2vw,18px)",
      display: "flex", flexDirection: "column",
      gap: "clamp(8px,0.9vw,12px)",
      boxSizing: "border-box",
    }}>

      {/* ── Header ── */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexShrink: 0, gap: "10px",
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo-kyron.png" alt="System Kyron" style={{
            width: "clamp(32px,3.4vw,46px)", height: "clamp(32px,3.4vw,46px)",
            objectFit: "contain",
            filter: `drop-shadow(0 0 10px rgba(0,214,51,0.55))`,
          }} />
          <div>
            <div style={{ fontSize: T["2xl"], fontWeight: 900, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1 }}>
              System <span style={{ color: NEON, textShadow: `0 0 22px ${NEON}` }}>Kyron</span>
            </div>
            <div style={{ fontSize: T.xs, color: WHITE30, marginTop: "2px", letterSpacing: "0.02em" }}>
              Tríptico Digital · Demo Day Kurios × EY 2026
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

          {/* ── Download trigger ── */}
          <div ref={dlRef} style={{ position: "relative" }}>
            <button onClick={() => setDlOpen(v => !v)} style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "7px 14px",
              borderRadius: "9px", fontFamily: "inherit",
              border: `1px solid ${NEONBRD}`,
              background: NEONLT,
              color: NEON, cursor: "pointer",
              fontSize: T.sm, fontWeight: 700,
              transition: "all 0.18s",
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,214,51,0.2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = NEONLT)}
            >
              <Download size={12} strokeWidth={2.2} />
              Exportar
              <ChevronDown size={11} strokeWidth={2.5}
                style={{ transform: dlOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {/* ── Download panel ── */}
            {dlOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                width: "310px", zIndex: 999,
                background: "rgba(4,12,30,0.97)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(56,189,248,0.2)",
                borderRadius: "14px",
                padding: "14px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,214,51,0.06)",
                display: "flex", flexDirection: "column", gap: "10px",
              }}>
                {/* Panel header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: T.md, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>
                    Descargar tríptico
                  </span>
                  <button onClick={() => setDlOpen(false)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: WHITE30, padding: "2px", display: "flex", alignItems: "center",
                  }}>
                    <X size={14} strokeWidth={2} />
                  </button>
                </div>

                {/* Face selector */}
                <div>
                  <div style={{ fontSize: T.xs, color: WHITE30, fontWeight: 600, letterSpacing: "0.06em", marginBottom: "6px" }}>
                    CARA
                  </div>
                  <div style={{
                    display: "flex", gap: "5px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(56,189,248,0.13)",
                    borderRadius: "9px", padding: "3px",
                  }}>
                    {(["front", "back"] as const).map((f) => (
                      <button key={f} onClick={() => setDlFace(f)} style={{
                        flex: 1, padding: "5px 8px",
                        borderRadius: "6px", border: "none", cursor: "pointer",
                        fontSize: T.xs, fontWeight: 700, fontFamily: "inherit",
                        transition: "all 0.18s",
                        background: dlFace === f
                          ? (f === "front" ? "rgba(0,214,51,0.18)" : "rgba(56,189,248,0.15)")
                          : "transparent",
                        color: dlFace === f ? (f === "front" ? NEON : LBLUE) : WHITE30,
                      }}>
                        {f === "front" ? "Cara Frontal" : "Cara Trasera"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

                {/* Format list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ fontSize: T.xs, color: WHITE30, fontWeight: 600, letterSpacing: "0.06em", marginBottom: "2px" }}>
                    FORMATO
                  </div>
                  {FORMATS.map(({ id, label, ext, icon: Icon, desc, color }) => {
                    const loading = isDownloading === id;
                    return (
                      <button key={id} onClick={() => downloadAs(id)}
                        disabled={isDownloading !== null}
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          padding: "8px 10px",
                          borderRadius: "9px", fontFamily: "inherit",
                          border: `1px solid ${loading ? color + "44" : "rgba(255,255,255,0.07)"}`,
                          background: loading ? `${color}10` : "rgba(255,255,255,0.03)",
                          cursor: isDownloading !== null ? "wait" : "pointer",
                          transition: "all 0.18s", textAlign: "left", width: "100%",
                          opacity: isDownloading !== null && !loading ? 0.4 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (isDownloading !== null) return;
                          (e.currentTarget as HTMLButtonElement).style.background = `${color}12`;
                          (e.currentTarget as HTMLButtonElement).style.borderColor = `${color}33`;
                        }}
                        onMouseLeave={(e) => {
                          if (isDownloading !== null) return;
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.03)";
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.07)";
                        }}
                      >
                        <div style={{
                          width: "30px", height: "30px", borderRadius: "7px", flexShrink: 0,
                          background: `${color}14`, border: `1px solid ${color}28`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon size={14} color={color} strokeWidth={1.8} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <span style={{ fontSize: T.sm, fontWeight: 700, color: "#fff" }}>{label}</span>
                            <span style={{
                              fontSize: "9px", padding: "1px 5px", borderRadius: "3px",
                              background: `${color}18`, border: `1px solid ${color}28`,
                              color, fontWeight: 700, letterSpacing: "0.04em",
                            }}>{ext}</span>
                          </div>
                          <div style={{ fontSize: T.xs, color: WHITE30, marginTop: "2px" }}>{desc}</div>
                        </div>
                        {loading ? (
                          <div style={{
                            width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                            border: `2px solid ${color}33`, borderTopColor: color,
                            animation: "spin 0.7s linear infinite",
                          }} />
                        ) : (
                          <Download size={12} color={WHITE30} strokeWidth={2} style={{ flexShrink: 0 }} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Canva note */}
                <div style={{
                  background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.18)",
                  borderRadius: "8px", padding: "7px 10px",
                  fontSize: T.xs, color: WHITE30, lineHeight: 1.5,
                }}>
                  <span style={{ color: "#A78BFA", fontWeight: 700 }}>Para Canva:</span>
                  {" "}Descarga el PNG 3× y súbelo a Canva vía Subidas → Agregar imagen.
                </div>
              </div>
            )}
          </div>

          {/* Face toggle */}
          <div style={{
            display: "flex",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(56,189,248,0.18)",
            borderRadius: "10px", padding: "3px", gap: "2px",
          }}>
            {(["front", "back"] as const).map((f) => (
              <button key={f} onClick={() => setFace(f)} style={{
                padding: "5px clamp(9px,1.2vw,16px)",
                borderRadius: "7px", border: "none", cursor: "pointer",
                fontSize: T.sm, fontWeight: 700, fontFamily: "inherit",
                transition: "all 0.2s ease",
                background: face === f
                  ? (face === "front" ? "rgba(0,214,51,0.18)" : "rgba(10,36,114,0.8)")
                  : "transparent",
                color: face === f ? (face === "front" ? NEON : LBLUE) : WHITE30,
                boxShadow: face === f
                  ? (face === "front" ? `0 0 12px rgba(0,214,51,0.25)` : `0 0 12px rgba(56,189,248,0.25)`)
                  : "none",
              }}>
                {f === "front" ? "Cara Frontal" : "Cara Trasera"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spinner keyframes */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* ── Face label ── */}
      <div style={{
        display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "7px",
        padding: "5px 12px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(56,189,248,0.13)",
        borderRadius: "99px", flexShrink: 0,
      }}>
        <div style={{
          width: "6px", height: "6px", borderRadius: "50%",
          background: face === "front" ? NEON : LBLUE,
          boxShadow: `0 0 6px ${face === "front" ? NEON : LBLUE}`,
        }} />
        <span style={{ fontSize: T.sm, fontWeight: 600, color: WHITE55 }}>
          {face === "front"
            ? "Cara Frontal · Portada · El Problema · La Solución"
            : "Cara Trasera · Kyron Shield · Aliados + Roadmap · Equipo + Contacto"}
        </span>
      </div>

      {/* ── Panels ── */}
      <div ref={panelsRef} style={{
        display: "flex", gap: "clamp(8px,1vw,12px)",
        flex: 1, minHeight: 0, overflow: "hidden",
      }}>
        {face === "front" ? (
          <><Panel1 /><Panel2 /><Panel3 /></>
        ) : (
          <><Panel4 /><Panel5 /><Panel6 /></>
        )}
      </div>
    </div>
  );
}
