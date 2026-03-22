import { useState } from "react";
import { downloadTriptychHtml } from "@/lib/generateHtml";
import {
  Shield, Smartphone, Receipt, Scale, TrendingUp, Monitor,
  User, Radio, ClipboardList, Users, Handshake, Recycle, Server,
  Building2, Globe, Mail, Phone, Download, Search, MapPin,
  Trash2, CheckCircle2, Clock, AlertTriangle, BarChart3,
  ChevronRight, Leaf, FileSearch, Zap, ArrowRight,
} from "lucide-react";

// ── Palette ─────────────────────────────────────────────
const NEON   = "#00FF41";   // phosphorescent green
const LBLUE  = "#38BDF8";   // light blue
const DGREEN = "#065F46";   // dark green
const DBGD   = "#0A2472";   // dark blue (background)

const glassPanel: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(56,189,248,0.15)",
  borderRadius: "20px",
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  padding: "clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px)",
  gap: "clamp(10px,1.2vw,16px)",
};

const glassCard: React.CSSProperties = {
  background: "rgba(6,95,70,0.18)",
  border: "1px solid rgba(0,255,65,0.2)",
  borderRadius: "12px",
  padding: "12px 14px",
};

const glassBlue: React.CSSProperties = {
  background: "rgba(56,189,248,0.07)",
  border: "1px solid rgba(56,189,248,0.2)",
  borderRadius: "12px",
  padding: "12px 14px",
};

// ── Shared sub-components ────────────────────────────────

function SectionTitle({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: "28px", height: "28px", borderRadius: "8px",
        background: `rgba(0,255,65,0.12)`,
        border: `1px solid rgba(0,255,65,0.25)`,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={14} color={NEON} strokeWidth={2} />
      </div>
      <h2 style={{
        margin: 0, fontWeight: 800,
        fontSize: "clamp(13px,1.45vw,19px)",
        color: "#fff", lineHeight: 1.2,
      }}>
        {children}
      </h2>
    </div>
  );
}

function DevBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "4px",
      fontSize: "9px", fontWeight: 700, padding: "2px 7px",
      borderRadius: "99px",
      background: "rgba(251,191,36,0.12)",
      border: "1px solid rgba(251,191,36,0.35)",
      color: "#FBBF24",
      textTransform: "uppercase", letterSpacing: "0.06em",
    }}>
      <Zap size={8} color="#FBBF24" strokeWidth={2.5} />
      En desarrollo
    </span>
  );
}

function GreenCheck({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <CheckCircle2 size={13} color={NEON} strokeWidth={2.5} />
      <span style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.8)" }}>{label}</span>
    </div>
  );
}

// ── Panel 1 – Portada ────────────────────────────────────
function Panel1() {
  return (
    <div style={{
      ...glassPanel,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: "clamp(14px,1.6vw,24px)",
      background: `linear-gradient(160deg, rgba(6,95,70,0.22) 0%, rgba(10,36,114,0.35) 100%)`,
      border: `1px solid rgba(0,255,65,0.2)`,
    }}>
      {/* Logo */}
      <div style={{
        width: "clamp(90px,9vw,128px)",
        height: "clamp(90px,9vw,128px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        filter: `drop-shadow(0 0 28px rgba(0,255,65,0.45))`,
      }}>
        <img src="/logo-kyron.png" alt="System Kyron" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>

      <div>
        <h1 style={{
          fontSize: "clamp(24px,2.8vw,44px)", fontWeight: 900,
          color: "#fff", letterSpacing: "-0.03em", margin: 0,
          lineHeight: 1.05,
        }}>
          System{" "}
          <span style={{ color: NEON, textShadow: `0 0 32px ${NEON}` }}>Kyron</span>
        </h1>
        <p style={{
          fontSize: "clamp(11px,1.05vw,15px)",
          color: LBLUE, margin: "10px 0 0", fontWeight: 500, lineHeight: 1.4,
        }}>
          La línea de teléfono que protege tu negocio
        </p>
      </div>

      <div style={{
        width: "100%",
        background: `linear-gradient(135deg, rgba(0,255,65,0.12), rgba(0,255,65,0.04))`,
        border: `1px solid rgba(0,255,65,0.3)`,
        borderRadius: "10px", padding: "10px 16px",
        display: "flex", alignItems: "center", gap: "8px", justifyContent: "center",
      }}>
        <Shield size={14} color={NEON} strokeWidth={2} />
        <p style={{ margin: 0, fontSize: "clamp(10px,0.88vw,12px)", color: NEON, fontWeight: 700 }}>
          Todo homologado: desde el IMEI hasta la contabilidad
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(56,189,248,0.15)", paddingTop: "12px", width: "100%" }}>
        <p style={{ margin: 0, fontSize: "clamp(9px,0.8vw,11px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          Colegio Gabriela Mistral · Catia la Mar, La Guaira
          <br />
          <span style={{ color: LBLUE, fontWeight: 600 }}>Demo Day Kurios × EY 2026</span>
        </p>
      </div>
    </div>
  );
}

// ── Panel 2 – El Problema ────────────────────────────────
function Panel2() {
  const stats = [
    { num: "21M+", label: "Líneas expuestas a bloqueo CONATEL", icon: Smartphone, color: LBLUE },
    { num: "1.000×", label: "Multas de hasta 1.000 veces el BCV", icon: AlertTriangle, color: "#FB923C" },
    { num: "134 h", label: "Horas perdidas al año en papeleo (OCDE)", icon: Clock, color: LBLUE },
    { num: "61%", label: "PyMEs con incumplimiento laboral", icon: BarChart3, color: NEON },
  ];

  return (
    <div style={glassPanel}>
      <SectionTitle icon={AlertTriangle}>
        El caos regulatorio{" "}
        <span style={{ color: NEON }}>venezolano</span>
      </SectionTitle>

      <p style={{ margin: 0, fontSize: "clamp(10px,0.88vw,12px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.55 }}>
        Las empresas venezolanas enfrentan un laberinto de regulaciones que frena su crecimiento y las expone a sanciones severas sin herramientas de cumplimiento accesibles.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(6px,0.8vw,10px)", flex: 1 }}>
        {stats.map(({ num, label, icon: Icon, color }) => (
          <div key={num} style={{
            ...glassCard,
            textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            padding: "12px 8px",
          }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "9px",
              background: `${color}18`,
              border: `1px solid ${color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={16} color={color} strokeWidth={1.8} />
            </div>
            <div style={{
              fontSize: "clamp(18px,1.9vw,26px)", fontWeight: 900,
              color, lineHeight: 1, textShadow: `0 0 14px ${color}66`,
            }}>
              {num}
            </div>
            <div style={{ fontSize: "clamp(9px,0.82vw,11px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.35 }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Panel 3 – Solución ───────────────────────────────────
function Panel3() {
  const modules = [
    { name: "Cuenta Personal",       icon: User },
    { name: "Mi Línea 5G",           icon: Radio },
    { name: "Contabilidad + Permisos", icon: ClipboardList },
    { name: "Asesoría Legal",        icon: Scale },
    { name: "Facturación TPV",       icon: Receipt },
    { name: "RRHH",                  icon: Users },
    { name: "Socios",                icon: Handshake },
    { name: "Sostenibilidad",        icon: Recycle },
    { name: "Ingeniería IT",         icon: Server },
  ];

  return (
    <div style={glassPanel}>
      <SectionTitle icon={Globe}>
        Ecosistema{" "}
        <span style={{ color: NEON }}>integral</span>
      </SectionTitle>

      <p style={{ margin: 0, fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
        La primera línea telefónica que homologa tu negocio desde el chip hasta la contabilidad.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(5px,0.6vw,8px)", flex: 1 }}>
        {modules.map(({ name, icon: Icon }) => (
          <div
            key={name}
            style={{
              background: "rgba(6,95,70,0.14)",
              border: "1px solid rgba(0,255,65,0.16)",
              borderRadius: "10px",
              padding: "10px 6px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
              textAlign: "center",
              transition: "transform 0.15s, border-color 0.15s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(0,255,65,0.4)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "none";
              (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(0,255,65,0.16)`;
            }}
          >
            <div style={{
              width: "28px", height: "28px", borderRadius: "8px",
              background: "rgba(0,255,65,0.1)",
              border: "1px solid rgba(0,255,65,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={13} color={NEON} strokeWidth={1.8} />
            </div>
            <span style={{ fontSize: "clamp(9px,0.82vw,10.5px)", color: "rgba(255,255,255,0.8)", fontWeight: 600, lineHeight: 1.3 }}>
              {name}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        background: `linear-gradient(90deg, rgba(6,95,70,0.3), transparent)`,
        borderLeft: `2px solid ${NEON}`,
        borderRadius: "6px",
        padding: "8px 12px",
        display: "flex", flexDirection: "column", gap: "4px",
      }}>
        <GreenCheck label="100% homologado" />
        <GreenCheck label="Soporte 24/7" />
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Globe size={13} color={LBLUE} strokeWidth={2.5} />
          <span style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.8)" }}>Multi‑lenguaje (ES / EN)</span>
        </div>
      </div>
    </div>
  );
}

// ── Panel 4 – Kyron Shield ───────────────────────────────
function Panel4() {
  const shields = [
    { icon: Smartphone, text: "Reposición de equipo por robo o daño" },
    { icon: FileSearch, text: "Perito forense SENIAT en fiscalizaciones" },
    { icon: Scale,      text: "Abogado en menos de 1 hora" },
  ];

  return (
    <div style={{ ...glassPanel, border: `1px solid rgba(0,255,65,0.2)` }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <Shield size={20} color={NEON} strokeWidth={1.8} style={{ filter: `drop-shadow(0 0 8px ${NEON}88)` }} />
          <h2 style={{ margin: 0, fontSize: "clamp(14px,1.5vw,20px)", fontWeight: 800, color: "#fff" }}>
            KYRON SHIELD
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: "clamp(10px,0.9vw,12px)", color: NEON, fontWeight: 600 }}>
          La única SIM con 3 seguros
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        {shields.map(({ icon: Icon, text }) => (
          <div
            key={text}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "9px 12px",
              background: "rgba(6,95,70,0.18)",
              border: "1px solid rgba(0,255,65,0.15)",
              borderRadius: "10px",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,65,0.4)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,65,0.15)")}
          >
            <div style={{
              width: "26px", height: "26px", borderRadius: "7px",
              background: "rgba(0,255,65,0.1)",
              border: "1px solid rgba(0,255,65,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Icon size={13} color={NEON} strokeWidth={1.8} />
            </div>
            <span style={{ fontSize: "clamp(10px,0.88vw,12px)", color: "rgba(255,255,255,0.85)" }}>{text}</span>
          </div>
        ))}
      </div>

      <div style={{
        ...glassBlue,
        fontStyle: "italic",
        fontSize: "clamp(10px,0.88vw,12px)",
        color: "rgba(255,255,255,0.85)",
        lineHeight: 1.55,
        borderLeft: `3px solid ${LBLUE}`,
        background: "rgba(56,189,248,0.06)",
      }}>
        "Otros venden minutos. Nosotros proponemos vender{" "}
        <strong style={{ color: NEON }}>cumplimiento</strong>."
      </div>

      <div style={{ borderTop: "1px solid rgba(56,189,248,0.12)", paddingTop: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
          <Leaf size={14} color={NEON} strokeWidth={2} />
          <h3 style={{ margin: 0, fontSize: "clamp(11px,1.05vw,14px)", fontWeight: 700, color: "#fff" }}>
            Sostenibilidad inteligente
          </h3>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{
            width: "clamp(44px,4.5vw,58px)", height: "clamp(44px,4.5vw,58px)",
            border: "1px dashed rgba(0,255,65,0.35)", borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            background: "rgba(6,95,70,0.15)",
          }}>
            <Trash2 size={20} color={NEON} strokeWidth={1.6} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", justifyContent: "center" }}>
            <p style={{ margin: 0, fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
              Smart Bins · inducción magnética
              <br />
              <span style={{ color: LBLUE, fontWeight: 600 }}>Alianza Ameru.AI</span>
              {" — "}Eco‑Créditos por reciclar.
            </p>
            <DevBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Panel 5 – Aliados + Roadmap ──────────────────────────
function Panel5() {
  const allies = ["SAMSUNG", "XIAOMI", "MOTOROLA", "APPLE", "HKA FACTORY", "AMERU.AI"];
  const roadmap = [
    { year: "2026", text: "Validación Caracas / La Guaira · Plataforma bilingüe (ES/EN)" },
    { year: "2027", text: "Expansión Colombia / Panamá" },
    { year: "2028+", text: "Evaluación México / EE.UU." },
  ];

  return (
    <div style={glassPanel}>
      <SectionTitle icon={Handshake}>Aliados estratégicos</SectionTitle>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(5px,0.6vw,8px)" }}>
        {allies.map((name) => (
          <div
            key={name}
            style={{
              ...glassBlue,
              display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
              padding: "10px 6px", textAlign: "center",
              transition: "transform 0.15s",
              cursor: "default",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "none")}
          >
            <Building2 size={16} color={LBLUE} strokeWidth={1.7} />
            <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>{name}</span>
            <DevBadge />
          </div>
        ))}
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
          <MapPin size={13} color={LBLUE} strokeWidth={2} />
          <h3 style={{ margin: 0, fontSize: "clamp(11px,1.05vw,13px)", fontWeight: 700, color: LBLUE }}>
            Hoja de ruta
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {roadmap.map(({ year, text }) => (
            <div key={year} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div style={{
                minWidth: "48px", padding: "3px 8px",
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.3)",
                borderRadius: "6px",
                fontSize: "clamp(9px,0.85vw,11px)", fontWeight: 800,
                color: LBLUE, textAlign: "center", flexShrink: 0,
              }}>
                {year}
              </div>
              <span style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(56,189,248,0.12)", paddingTop: "10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {["500K PyMEs · Venezuela", "8.5M · Latam", "21M+ consumidores"].map((d) => (
          <span key={d} style={{
            fontSize: "clamp(9px,0.85vw,10.5px)",
            padding: "3px 10px",
            background: "rgba(0,255,65,0.08)",
            border: "1px solid rgba(0,255,65,0.25)",
            borderRadius: "99px",
            color: NEON, fontWeight: 600,
          }}>
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Panel 6 – Equipo + Contacto ──────────────────────────
function Panel6() {
  const team = [
    { name: "Carlos Mattar",    role: "Co-CEO & Lead Architecture" },
    { name: "Sebastián Garrido", role: "Co-CEO & Network Slicing" },
    { name: "Marcos Sousa",     role: "Co-CEO & Operational Flow" },
  ];
  const contact = [
    { icon: Mail,       text: "contacto@systemkyron.com" },
    { icon: Phone,      text: "+58 XXX-XXX-XXXX" },
    { icon: Globe,      text: "www.systemkyron.com" },
  ];

  return (
    <div style={glassPanel}>
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(13px,1.35vw,18px)", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
          Hecho en{" "}
          <span style={{ color: NEON }}>Catia la Mar</span>,
          <br />para el mundo
        </h2>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", gap: "8px" }}>
        {team.map(({ name, role }) => (
          <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "clamp(48px,4.8vw,66px)",
              height: "clamp(48px,4.8vw,66px)",
              borderRadius: "50%",
              background: "rgba(6,95,70,0.2)",
              border: `1.5px solid rgba(0,255,65,0.3)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 18px rgba(0,255,65,0.12)`,
            }}>
              <User size={22} color={NEON} strokeWidth={1.5} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "clamp(9px,0.88vw,12px)", color: "#fff" }}>{name}</div>
              <div style={{ fontSize: "clamp(8px,0.75vw,10.5px)", color: LBLUE, marginTop: "2px", lineHeight: 1.3 }}>{role}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        borderLeft: `2px solid ${NEON}`,
        paddingLeft: "10px",
        fontStyle: "italic",
        fontSize: "clamp(9px,0.85vw,11px)",
        color: "rgba(255,255,255,0.55)",
        lineHeight: 1.6,
      }}>
        "Crecimos donde los apagones borran datos y la humedad destruye papeles. Por eso creamos esta propuesta."
      </div>

      <div style={{
        background: `linear-gradient(135deg, rgba(0,255,65,0.1), rgba(6,95,70,0.12))`,
        border: `1px solid rgba(0,255,65,0.25)`,
        borderRadius: "12px", padding: "12px 14px", textAlign: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "8px" }}>
          <ArrowRight size={14} color={NEON} strokeWidth={2.5} />
          <p style={{ margin: 0, fontSize: "clamp(11px,1vw,14px)", fontWeight: 700, color: "#fff" }}>
            ¿Quieres ser parte del pilotaje 2026?
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {contact.map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <Icon size={11} color={LBLUE} strokeWidth={2} />
              <span style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.65)" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div style={{
          width: "clamp(48px,4.5vw,62px)", height: "clamp(48px,4.5vw,62px)",
          border: "1px dashed rgba(56,189,248,0.35)",
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          background: "rgba(56,189,248,0.05)",
        }}>
          <Smartphone size={22} color={LBLUE} strokeWidth={1.5} />
        </div>
        <p style={{ margin: 0, fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.4)" }}>
          Código QR — Escanea para más información
        </p>
      </div>

      <div style={{
        borderTop: "1px solid rgba(56,189,248,0.1)", paddingTop: "8px",
        textAlign: "center",
        fontSize: "clamp(8px,0.75vw,10px)", color: "rgba(255,255,255,0.3)", lineHeight: 1.5,
      }}>
        System Kyron · Propuesta en desarrollo · Colegio Gabriela Mistral · Kurios × EY Demo Day 2026
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────
export function Triptych() {
  const [face, setFace] = useState<"front" | "back">("front");

  return (
    <div style={{
      minHeight: "100vh",
      background: `radial-gradient(ellipse at 15% 15%, #0d3494 0%, ${DBGD} 45%, #040c1e 100%)`,
      fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
      padding: "clamp(12px,1.5vw,24px)",
      display: "flex", flexDirection: "column",
      gap: "clamp(10px,1.2vw,18px)",
      boxSizing: "border-box",
    }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px,1vw,14px)" }}>
          <img
            src="/logo-kyron.png" alt="System Kyron"
            style={{
              width: "clamp(36px,3.8vw,50px)", height: "clamp(36px,3.8vw,50px)",
              objectFit: "contain",
              filter: `drop-shadow(0 0 10px rgba(0,255,65,0.5))`,
            }}
          />
          <div>
            <div style={{
              fontSize: "clamp(17px,2.1vw,30px)", fontWeight: 900,
              color: "#fff", letterSpacing: "-0.02em",
            }}>
              System <span style={{ color: NEON, textShadow: `0 0 22px ${NEON}` }}>Kyron</span>
            </div>
            <div style={{ fontSize: "clamp(9px,0.82vw,11px)", color: "rgba(255,255,255,0.4)", marginTop: "1px" }}>
              Tríptico Digital · Demo Day Kurios × EY 2026
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {/* Download buttons */}
          {(["front", "back"] as const).map((f) => {
            const isGreen = f === "front";
            const clr = isGreen ? NEON : LBLUE;
            const bg = isGreen ? "rgba(0,255,65,0.08)" : "rgba(56,189,248,0.07)";
            const bgHover = isGreen ? "rgba(0,255,65,0.16)" : "rgba(56,189,248,0.14)";
            const brd = isGreen ? "rgba(0,255,65,0.3)" : "rgba(56,189,248,0.3)";
            const brdHover = isGreen ? "rgba(0,255,65,0.55)" : "rgba(56,189,248,0.55)";
            const label = f === "front" ? "Frontal" : "Trasera";
            return (
              <button
                key={f}
                onClick={() => downloadTriptychHtml(f)}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  padding: "7px clamp(9px,1.1vw,14px)",
                  borderRadius: "8px",
                  border: `1px solid ${brd}`,
                  cursor: "pointer",
                  fontSize: "clamp(10px,0.88vw,12px)", fontWeight: 600,
                  fontFamily: "inherit",
                  background: bg, color: clr,
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = bgHover;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = brdHover;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = bg;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = brd;
                }}
              >
                <Download size={12} strokeWidth={2} />
                {label}
              </button>
            );
          })}

          {/* Face toggle */}
          <div style={{
            display: "flex",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(56,189,248,0.2)",
            borderRadius: "10px", padding: "3px", gap: "3px",
          }}>
            {(["front", "back"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFace(f)}
                style={{
                  padding: "6px clamp(10px,1.3vw,18px)",
                  borderRadius: "7px", border: "none", cursor: "pointer",
                  fontSize: "clamp(10px,0.9vw,12px)", fontWeight: 700,
                  fontFamily: "inherit",
                  transition: "all 0.22s ease",
                  background: face === f
                    ? face === "front" ? DGREEN : DBGD
                    : "transparent",
                  color: face === f ? (face === "front" ? NEON : LBLUE) : "rgba(255,255,255,0.5)",
                  boxShadow: face === f
                    ? face === "front" ? `0 0 14px rgba(0,255,65,0.3)` : `0 0 14px rgba(56,189,248,0.3)`
                    : "none",
                }}
              >
                {f === "front" ? "Cara Frontal" : "Cara Trasera"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Face label ── */}
      <div style={{
        display: "inline-flex", alignSelf: "flex-start",
        alignItems: "center", gap: "8px",
        padding: "7px 14px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(56,189,248,0.15)",
        borderRadius: "12px",
      }}>
        <ChevronRight size={13} color={LBLUE} strokeWidth={2.5} />
        <span style={{ fontSize: "clamp(10px,0.88vw,12px)", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
          {face === "front"
            ? "Cara Frontal: Portada · El Problema · La Solución"
            : "Cara Trasera: Kyron Shield · Aliados + Roadmap · Equipo + Contacto"}
        </span>
      </div>

      {/* ── Panels ── */}
      <div style={{ display: "flex", gap: "clamp(8px,1vw,14px)", flex: 1, minHeight: 0 }}>
        {face === "front" ? (
          <>
            <Panel1 />
            <Panel2 />
            <Panel3 />
          </>
        ) : (
          <>
            <Panel4 />
            <Panel5 />
            <Panel6 />
          </>
        )}
      </div>
    </div>
  );
}
