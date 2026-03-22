import { useState } from "react";

const ACCENT = "#00FF00";
const BG_DARK = "#0A2472";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(0,255,0,0.18)",
  borderRadius: "18px",
};

const cardGlass: React.CSSProperties = {
  background: "rgba(0,255,0,0.07)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(0,255,0,0.25)",
  borderRadius: "12px",
  padding: "14px",
};

const Badge = ({ children, dev }: { children: React.ReactNode; dev?: boolean }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "10px",
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: "99px",
      background: dev ? "rgba(255,180,0,0.15)" : "rgba(0,255,0,0.15)",
      border: `1px solid ${dev ? "rgba(255,180,0,0.4)" : "rgba(0,255,0,0.4)"}`,
      color: dev ? "#FFB400" : ACCENT,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    }}
  >
    {dev ? "🔧 EN DESARROLLO" : children}
  </span>
);

const StatCard = ({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: string;
}) => (
  <div style={{ ...cardGlass, textAlign: "center" }}>
    <div style={{ fontSize: "26px", marginBottom: "4px" }}>{icon}</div>
    <div
      style={{
        fontSize: "24px",
        fontWeight: 900,
        color: ACCENT,
        lineHeight: 1.1,
        textShadow: `0 0 12px ${ACCENT}88`,
      }}
    >
      {number}
    </div>
    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", marginTop: "4px", lineHeight: 1.3 }}>
      {label}
    </div>
  </div>
);

const ModuleCell = ({ name, icon }: { name: string; icon: string }) => (
  <div
    style={{
      ...cardGlass,
      textAlign: "center",
      padding: "10px 6px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    }}
  >
    <span style={{ fontSize: "20px" }}>{icon}</span>
    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)", fontWeight: 600, lineHeight: 1.3 }}>
      {name}
    </span>
  </div>
);

const AllyBadge = ({ name }: { name: string }) => (
  <div
    style={{
      ...cardGlass,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      padding: "10px 8px",
    }}
  >
    <span style={{ fontSize: "18px" }}>🏢</span>
    <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>{name}</span>
    <Badge dev>EN DESARROLLO</Badge>
  </div>
);

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
    <div
      style={{
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: "rgba(0,255,0,0.1)",
        border: "2px solid rgba(0,255,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "26px",
      }}
    >
      👤
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontWeight: 700, fontSize: "12px", color: "rgba(255,255,255,0.95)" }}>{name}</div>
      <div style={{ fontSize: "10px", color: ACCENT, marginTop: "2px" }}>{role}</div>
    </div>
  </div>
);

// ────────────── PANELS ──────────────

function Panel1() {
  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px 20px",
        gap: "18px",
        textAlign: "center",
      }}
    >
      {/* Shield logo */}
      <div
        style={{
          width: "90px",
          height: "90px",
          background: `radial-gradient(circle at 40% 40%, rgba(0,255,0,0.25), rgba(0,255,0,0.05))`,
          border: `2px solid ${ACCENT}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "42px",
          boxShadow: `0 0 32px ${ACCENT}44`,
        }}
      >
        🛡️
      </div>

      <div>
        <h1
          style={{
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0,
            textShadow: `0 0 20px ${ACCENT}66`,
          }}
        >
          System{" "}
          <span style={{ color: ACCENT, textShadow: `0 0 24px ${ACCENT}` }}>
            Kyron
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(12px, 1.4vw, 16px)",
            color: "rgba(255,255,255,0.8)",
            margin: "8px 0 0",
            fontWeight: 500,
          }}
        >
          La línea de teléfono que protege tu negocio
        </p>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${ACCENT}22, ${ACCENT}08)`,
          border: `1px solid ${ACCENT}55`,
          borderRadius: "10px",
          padding: "10px 16px",
        }}
      >
        <p style={{ margin: 0, fontSize: "11px", color: ACCENT, fontWeight: 700, letterSpacing: "0.02em" }}>
          ✅ Todo homologado: desde el IMEI hasta la contabilidad
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,255,0,0.2)", paddingTop: "14px", width: "100%" }}>
        <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
          Colegio Gabriela Mistral · Catia la Mar, La Guaira
          <br />
          Demo Day Kurios x EY 2026
        </p>
      </div>
    </div>
  );
}

function Panel2() {
  const stats = [
    { number: "21M+", label: "Líneas móviles activas expuestas a bloqueo (CONATEL)", icon: "📱" },
    { number: "1.000x", label: "Multas de hasta 1.000 veces el BCV", icon: "🧾" },
    { number: "134h", label: "Horas perdidas al año en papeleo (OCDE)", icon: "⚖️" },
    { number: "61%", label: "PyMEs con incumplimiento laboral", icon: "📊" },
  ];

  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "22px 18px",
        gap: "14px",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(14px, 1.8vw, 20px)", fontWeight: 800, color: "#FFFFFF" }}>
          🌪️ El caos regulatorio
          <br />
          <span style={{ color: ACCENT }}>venezolano</span>
        </h2>
        <p style={{ margin: "6px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
          Las empresas venezolanas enfrentan un laberinto de regulaciones que frena su crecimiento y las expone a sanciones severas sin herramientas de cumplimiento accesibles.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", flex: 1 }}>
        {stats.map((s) => (
          <StatCard key={s.number} {...s} />
        ))}
      </div>
    </div>
  );
}

function Panel3() {
  const modules = [
    { name: "Cuenta Personal", icon: "👤" },
    { name: "Mi Línea 5G", icon: "📡" },
    { name: "Contabilidad + Permisos", icon: "📋" },
    { name: "Asesoría Legal", icon: "⚖️" },
    { name: "Facturación TPV", icon: "🧾" },
    { name: "RRHH", icon: "👥" },
    { name: "Socios", icon: "🤝" },
    { name: "Sostenibilidad", icon: "♻️" },
    { name: "Ingeniería IT", icon: "💻" },
  ];

  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "22px 18px",
        gap: "12px",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(13px, 1.6vw, 18px)", fontWeight: 800, color: "#FFFFFF" }}>
          🧩 System Kyron –
          <br />
          <span style={{ color: ACCENT }}>Ecosistema integral</span>
        </h2>
        <p style={{ margin: "5px 0 0", fontSize: "10px", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>
          La primera línea telefónica que homologa tu negocio desde el chip hasta la contabilidad.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", flex: 1 }}>
        {modules.map((m) => (
          <ModuleCell key={m.name} {...m} />
        ))}
      </div>

      <div
        style={{
          background: `linear-gradient(90deg, ${ACCENT}18, transparent)`,
          borderLeft: `3px solid ${ACCENT}`,
          borderRadius: "6px",
          padding: "8px 10px",
          fontSize: "10px",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.6,
        }}
      >
        ✅ 100% homologado &nbsp;·&nbsp; ✅ Soporte 24/7 &nbsp;·&nbsp; 🌐 Multi‑lenguaje (ES/EN)
      </div>
    </div>
  );
}

function Panel4() {
  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "22px 18px",
        gap: "14px",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(13px, 1.5vw, 17px)", fontWeight: 800, color: "#FFFFFF" }}>
          🛡️ KYRON SHIELD
        </h2>
        <p style={{ margin: "3px 0 0", fontSize: "11px", color: ACCENT, fontWeight: 600 }}>
          La única SIM con 3 seguros
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          { icon: "📱", text: "Reposición de equipo por robo o daño" },
          { icon: "🔍", text: "Perito forense SENIAT en fiscalizaciones" },
          { icon: "⚖️", text: "Abogado en menos de 1 hora" },
        ].map((item) => (
          <div
            key={item.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 10px",
              background: "rgba(0,255,0,0.06)",
              borderRadius: "8px",
              border: "1px solid rgba(0,255,0,0.15)",
            }}
          >
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)" }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, rgba(0,255,0,0.12), rgba(0,255,0,0.04))`,
          border: `1px solid ${ACCENT}44`,
          borderRadius: "10px",
          padding: "10px 12px",
          fontStyle: "italic",
          fontSize: "11px",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        "Otros venden minutos. Nosotros proponemos vender <strong style={{ color: ACCENT }}>cumplimiento</strong>."
      </div>

      <div style={{ borderTop: "1px solid rgba(0,255,0,0.2)", paddingTop: "10px" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
          ♻️ Sostenibilidad inteligente
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              border: "2px dashed rgba(0,255,0,0.35)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              flexShrink: 0,
            }}
          >
            🗑️
          </div>
          <div>
            <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
              Smart Bins con inducción magnética (alianza <strong style={{ color: ACCENT }}>Ameru.AI</strong>).
              <br />
              Eco‑Créditos: puntos por reciclar.
            </p>
            <Badge dev>EN DESARROLLO</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel5() {
  const allies = ["SAMSUNG", "XIAOMI", "MOTOROLA", "APPLE", "HKA FACTORY", "AMERU.AI"];
  const roadmap = [
    { year: "2026", items: "Validación Caracas/La Guaira · Plataforma bilingüe (ES/EN)" },
    { year: "2027", items: "Expansión Colombia / Panamá" },
    { year: "2028+", items: "Evaluación México / EE.UU." },
  ];

  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "22px 18px",
        gap: "14px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "clamp(13px, 1.5vw, 18px)", fontWeight: 800, color: "#FFFFFF" }}>
        🤝 Aliados estratégicos
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px" }}>
        {allies.map((a) => (
          <AllyBadge key={a} name={a} />
        ))}
      </div>

      <div>
        <h3 style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 700, color: ACCENT }}>
          🗺️ Hoja de ruta
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {roadmap.map((r, i) => (
            <div key={r.year} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div
                style={{
                  minWidth: "46px",
                  padding: "3px 6px",
                  background: `${ACCENT}22`,
                  border: `1px solid ${ACCENT}55`,
                  borderRadius: "6px",
                  fontSize: "10px",
                  fontWeight: 800,
                  color: ACCENT,
                  textAlign: "center",
                }}
              >
                {r.year}
              </div>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                {r.items}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0,255,0,0.2)",
          paddingTop: "10px",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {["500K PyMEs en Venezuela", "8.5M en Latam", "21M+ consumidores"].map((d) => (
          <span
            key={d}
            style={{
              fontSize: "10px",
              padding: "3px 8px",
              background: "rgba(0,255,0,0.1)",
              border: "1px solid rgba(0,255,0,0.3)",
              borderRadius: "99px",
              color: ACCENT,
              fontWeight: 600,
            }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function Panel6() {
  const team = [
    { name: "Carlos Mattar", role: "Co-CEO & Lead Architecture" },
    { name: "Sebastián Garrido", role: "Co-CEO & Network Slicing" },
    { name: "Marcos Sousa", role: "Co-CEO & Operational Flow" },
  ];

  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "22px 18px",
        gap: "12px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "clamp(12px, 1.4vw, 16px)", fontWeight: 800, color: "#FFFFFF" }}>
        🌎 Hecho en <span style={{ color: ACCENT }}>Catia la Mar</span>,<br />para el mundo
      </h2>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {team.map((m) => (
          <TeamMember key={m.name} {...m} />
        ))}
      </div>

      <div
        style={{
          fontStyle: "italic",
          fontSize: "10px",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.5,
          borderLeft: `2px solid ${ACCENT}`,
          paddingLeft: "10px",
        }}
      >
        "Crecimos donde los apagones borran datos y la humedad destruye papeles. Por eso creamos esta propuesta."
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${ACCENT}22, ${ACCENT}06)`,
          border: `1px solid ${ACCENT}55`,
          borderRadius: "12px",
          padding: "12px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: 700, color: "#FFFFFF" }}>
          ¿Quieres ser parte del pilotaje 2026?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "6px" }}>
          {[
            { icon: "✉️", text: "contacto@systemkyron.com" },
            { icon: "📞", text: "+58 XXX-XXX-XXXX" },
            { icon: "🌐", text: "www.systemkyron.com" },
          ].map((c) => (
            <span key={c.text} style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>
              {c.icon} {c.text}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "2px dashed rgba(0,255,0,0.4)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            flexShrink: 0,
          }}
        >
          📱
        </div>
        <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.55)" }}>
          QR Code – Escanea para más información
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0,255,0,0.15)",
          paddingTop: "8px",
          textAlign: "center",
          fontSize: "9px",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        System Kyron · Propuesta en desarrollo · Colegio Gabriela Mistral · Kurios x EY Demo Day 2026
      </div>
    </div>
  );
}

// ────────────── MAIN TRIPTYCH ──────────────

export function Triptych() {
  const [face, setFace] = useState<"front" | "back">("front");

  const panelRow = {
    display: "flex",
    gap: "12px",
    width: "100%",
    flex: 1,
  } as React.CSSProperties;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 20% 20%, #0d3080 0%, ${BG_DARK} 40%, #050e2e 100%)`,
        fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(18px, 2.5vw, 28px)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            System <span style={{ color: ACCENT, textShadow: `0 0 20px ${ACCENT}` }}>Kyron</span>
          </h1>
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
            Tríptico Digital Interactivo · Demo Day Kurios x EY 2026
          </p>
        </div>

        {/* Face Toggle */}
        <div
          style={{
            display: "flex",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(0,255,0,0.25)",
            borderRadius: "10px",
            padding: "4px",
            gap: "4px",
          }}
        >
          {(["front", "back"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFace(f)}
              style={{
                padding: "7px 18px",
                borderRadius: "7px",
                border: "none",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: 700,
                transition: "all 0.25s ease",
                background: face === f ? ACCENT : "transparent",
                color: face === f ? BG_DARK : "rgba(255,255,255,0.7)",
                boxShadow: face === f ? `0 0 16px ${ACCENT}66` : "none",
              }}
            >
              {f === "front" ? "🔵 Cara Frontal" : "🔴 Cara Trasera"}
            </button>
          ))}
        </div>
      </div>

      {/* Face labels */}
      <div
        style={{
          ...glassStyle,
          padding: "8px 16px",
          display: "inline-flex",
          alignSelf: "flex-start",
          gap: "6px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px" }}>{face === "front" ? "📋" : "📊"}</span>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
          {face === "front"
            ? "Cara Frontal: Portada · El Problema · La Solución"
            : "Cara Trasera: Shield + Sostenibilidad · Aliados + Roadmap · Equipo + Contacto"}
        </span>
      </div>

      {/* Panel row */}
      <div style={panelRow}>
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
