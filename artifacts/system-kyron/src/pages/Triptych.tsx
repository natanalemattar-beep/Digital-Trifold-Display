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

function Badge({ children, dev }: { children: React.ReactNode; dev?: boolean }) {
  return (
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
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: string }) {
  return (
    <div style={{ ...cardGlass, textAlign: "center" }}>
      <div style={{ fontSize: "clamp(20px,2.5vw,28px)", marginBottom: "4px" }}>{icon}</div>
      <div
        style={{
          fontSize: "clamp(20px,2vw,28px)",
          fontWeight: 900,
          color: ACCENT,
          lineHeight: 1.1,
          textShadow: `0 0 12px ${ACCENT}88`,
        }}
      >
        {number}
      </div>
      <div style={{ fontSize: "clamp(9px,0.9vw,12px)", color: "rgba(255,255,255,0.75)", marginTop: "4px", lineHeight: 1.3 }}>
        {label}
      </div>
    </div>
  );
}

function ModuleCell({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      style={{
        ...cardGlass,
        textAlign: "center",
        padding: "10px 6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 20px ${ACCENT}22`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "none";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <span style={{ fontSize: "clamp(16px,1.8vw,22px)" }}>{icon}</span>
      <span style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.85)", fontWeight: 600, lineHeight: 1.3 }}>
        {name}
      </span>
    </div>
  );
}

function AllyBadge({ name }: { name: string }) {
  return (
    <div
      style={{
        ...cardGlass,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        padding: "10px 8px",
        transition: "transform 0.15s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "none")}
    >
      <span style={{ fontSize: "18px" }}>🏢</span>
      <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>{name}</span>
      <Badge dev>EN DESARROLLO</Badge>
    </div>
  );
}

function TeamMember({ name, role }: { name: string; role: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "clamp(52px,5vw,72px)",
          height: "clamp(52px,5vw,72px)",
          borderRadius: "50%",
          background: "rgba(0,255,0,0.1)",
          border: `2px solid rgba(0,255,0,0.35)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(22px,2.5vw,30px)",
          boxShadow: `0 0 20px rgba(0,255,0,0.15)`,
        }}
      >
        👤
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: 700, fontSize: "clamp(10px,0.9vw,13px)", color: "rgba(255,255,255,0.95)" }}>{name}</div>
        <div style={{ fontSize: "clamp(9px,0.75vw,11px)", color: ACCENT, marginTop: "2px" }}>{role}</div>
      </div>
    </div>
  );
}

/* ─────────── PANELS ─────────── */

function Panel1() {
  return (
    <div
      style={{
        ...glassStyle,
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px,2vw,32px) clamp(14px,1.5vw,24px)",
        gap: "clamp(12px,1.5vw,22px)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "clamp(70px,7vw,100px)",
          height: "clamp(70px,7vw,100px)",
          background: `radial-gradient(circle at 40% 40%, rgba(0,255,0,0.25), rgba(0,255,0,0.05))`,
          border: `2px solid ${ACCENT}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(32px,4vw,48px)",
          boxShadow: `0 0 40px ${ACCENT}44`,
        }}
      >
        🛡️
      </div>

      <div>
        <h1
          style={{
            fontSize: "clamp(22px,2.8vw,42px)",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0,
            textShadow: `0 0 24px ${ACCENT}66`,
            lineHeight: 1.1,
          }}
        >
          System{" "}
          <span style={{ color: ACCENT, textShadow: `0 0 28px ${ACCENT}` }}>Kyron</span>
        </h1>
        <p style={{ fontSize: "clamp(11px,1.1vw,16px)", color: "rgba(255,255,255,0.8)", margin: "10px 0 0", fontWeight: 500, lineHeight: 1.4 }}>
          La línea de teléfono que protege tu negocio
        </p>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${ACCENT}22, ${ACCENT}08)`,
          border: `1px solid ${ACCENT}55`,
          borderRadius: "10px",
          padding: "10px 18px",
          width: "100%",
        }}
      >
        <p style={{ margin: 0, fontSize: "clamp(10px,0.9vw,13px)", color: ACCENT, fontWeight: 700, letterSpacing: "0.02em" }}>
          ✅ Todo homologado: desde el IMEI hasta la contabilidad
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,255,0,0.2)", paddingTop: "14px", width: "100%" }}>
        <p style={{ margin: 0, fontSize: "clamp(9px,0.8vw,11px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
          Colegio Gabriela Mistral · Catia la Mar, La Guaira
          <br />
          <strong style={{ color: "rgba(255,255,255,0.75)" }}>Demo Day Kurios x EY 2026</strong>
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
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px)",
        gap: "clamp(10px,1.2vw,16px)",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(14px,1.6vw,22px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2 }}>
          🌪️ El caos regulatorio
          <br />
          <span style={{ color: ACCENT }}>venezolano</span>
        </h2>
        <p style={{ margin: "6px 0 0", fontSize: "clamp(10px,0.9vw,12px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
          Las empresas venezolanas enfrentan un laberinto de regulaciones que frena su crecimiento y las expone a sanciones severas sin herramientas de cumplimiento accesibles.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(6px,0.8vw,12px)", flex: 1 }}>
        {stats.map((s) => <StatCard key={s.number} {...s} />)}
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
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px)",
        gap: "clamp(8px,1vw,14px)",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(13px,1.5vw,20px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2 }}>
          🧩 System Kyron –
          <br />
          <span style={{ color: ACCENT }}>Ecosistema integral</span>
        </h2>
        <p style={{ margin: "5px 0 0", fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>
          La primera línea telefónica que homologa tu negocio desde el chip hasta la contabilidad.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(5px,0.7vw,10px)", flex: 1 }}>
        {modules.map((m) => <ModuleCell key={m.name} {...m} />)}
      </div>

      <div
        style={{
          background: `linear-gradient(90deg, ${ACCENT}18, transparent)`,
          borderLeft: `3px solid ${ACCENT}`,
          borderRadius: "6px",
          padding: "8px 12px",
          fontSize: "clamp(9px,0.85vw,11px)",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.7,
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
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px)",
        gap: "clamp(10px,1.2vw,16px)",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "clamp(14px,1.5vw,20px)", fontWeight: 800, color: "#FFFFFF" }}>
          🛡️ KYRON SHIELD
        </h2>
        <p style={{ margin: "3px 0 0", fontSize: "clamp(10px,0.9vw,13px)", color: ACCENT, fontWeight: 600 }}>
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
              padding: "9px 12px",
              background: "rgba(0,255,0,0.06)",
              borderRadius: "8px",
              border: "1px solid rgba(0,255,0,0.15)",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = `rgba(0,255,0,0.4)`)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = `rgba(0,255,0,0.15)`)}
          >
            <span style={{ fontSize: "clamp(16px,1.5vw,20px)" }}>{item.icon}</span>
            <span style={{ fontSize: "clamp(10px,0.9vw,12px)", color: "rgba(255,255,255,0.85)" }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, rgba(0,255,0,0.12), rgba(0,255,0,0.04))`,
          border: `1px solid ${ACCENT}44`,
          borderRadius: "10px",
          padding: "10px 14px",
          fontStyle: "italic",
          fontSize: "clamp(10px,0.9vw,12px)",
          color: "rgba(255,255,255,0.9)",
          lineHeight: 1.5,
        }}
      >
        "Otros venden minutos. Nosotros proponemos vender{" "}
        <strong style={{ color: ACCENT }}>cumplimiento</strong>."
      </div>

      <div style={{ borderTop: "1px solid rgba(0,255,0,0.2)", paddingTop: "12px" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: "clamp(11px,1.1vw,14px)", fontWeight: 700, color: "#FFFFFF" }}>
          ♻️ Sostenibilidad inteligente
        </h3>
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              width: "clamp(46px,4.5vw,60px)",
              height: "clamp(46px,4.5vw,60px)",
              border: "2px dashed rgba(0,255,0,0.35)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(18px,2vw,26px)",
              flexShrink: 0,
            }}
          >
            🗑️
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", justifyContent: "center" }}>
            <p style={{ margin: 0, fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
              Smart Bins con inducción magnética (alianza{" "}
              <strong style={{ color: ACCENT }}>Ameru.AI</strong>).
              <br />
              Eco‑Créditos: puntos que acumulas por reciclar.
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
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px)",
        gap: "clamp(10px,1.2vw,16px)",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "clamp(14px,1.5vw,20px)", fontWeight: 800, color: "#FFFFFF" }}>
        🤝 Aliados estratégicos
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(6px,0.7vw,10px)" }}>
        {allies.map((a) => <AllyBadge key={a} name={a} />)}
      </div>

      <div>
        <h3 style={{ margin: "0 0 8px", fontSize: "clamp(11px,1.1vw,14px)", fontWeight: 700, color: ACCENT }}>
          🗺️ Hoja de ruta
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {roadmap.map((r) => (
            <div key={r.year} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div
                style={{
                  minWidth: "48px",
                  padding: "3px 8px",
                  background: `${ACCENT}22`,
                  border: `1px solid ${ACCENT}55`,
                  borderRadius: "6px",
                  fontSize: "clamp(9px,0.85vw,11px)",
                  fontWeight: 800,
                  color: ACCENT,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                {r.year}
              </div>
              <span style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
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
          gap: "6px",
          flexWrap: "wrap",
        }}
      >
        {["500K PyMEs en Venezuela", "8.5M en Latam", "21M+ consumidores"].map((d) => (
          <span
            key={d}
            style={{
              fontSize: "clamp(9px,0.85vw,11px)",
              padding: "4px 10px",
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
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px)",
        gap: "clamp(8px,1vw,14px)",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "clamp(12px,1.3vw,18px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2 }}>
        🌎 Hecho en <span style={{ color: ACCENT }}>Catia la Mar</span>,
        <br />para el mundo
      </h2>

      <div style={{ display: "flex", justifyContent: "space-around", gap: "8px" }}>
        {team.map((m) => <TeamMember key={m.name} {...m} />)}
      </div>

      <div
        style={{
          fontStyle: "italic",
          fontSize: "clamp(9px,0.85vw,11px)",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.55,
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
          padding: "12px 14px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 6px", fontSize: "clamp(11px,1vw,14px)", fontWeight: 700, color: "#FFFFFF" }}>
          ¿Quieres ser parte del pilotaje 2026?
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {[
            { icon: "✉️", text: "contacto@systemkyron.com" },
            { icon: "📞", text: "+58 XXX-XXX-XXXX" },
            { icon: "🌐", text: "www.systemkyron.com" },
          ].map((c) => (
            <span key={c.text} style={{ fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.7)" }}>
              {c.icon} {c.text}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <div
          style={{
            width: "clamp(48px,4.5vw,64px)",
            height: "clamp(48px,4.5vw,64px)",
            border: "2px dashed rgba(0,255,0,0.4)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(20px,2vw,28px)",
            flexShrink: 0,
          }}
        >
          📱
        </div>
        <p style={{ margin: 0, fontSize: "clamp(9px,0.85vw,11px)", color: "rgba(255,255,255,0.5)" }}>
          QR Code – Escanea para más información
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0,255,0,0.15)",
          paddingTop: "8px",
          textAlign: "center",
          fontSize: "clamp(8px,0.75vw,10px)",
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.5,
        }}
      >
        System Kyron · Propuesta en desarrollo · Colegio Gabriela Mistral · Kurios x EY Demo Day 2026
      </div>
    </div>
  );
}

/* ─────────── MAIN PAGE ─────────── */

export function Triptych() {
  const [face, setFace] = useState<"front" | "back">("front");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 20% 20%, #0d3080 0%, ${BG_DARK} 40%, #050e2e 100%)`,
        fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
        padding: "clamp(12px,1.5vw,24px)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(10px,1.2vw,18px)",
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
              fontSize: "clamp(18px,2.2vw,32px)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            System{" "}
            <span style={{ color: ACCENT, textShadow: `0 0 24px ${ACCENT}` }}>Kyron</span>
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(9px,0.85vw,12px)", color: "rgba(255,255,255,0.5)" }}>
            Tríptico Digital Interactivo · Demo Day Kurios x EY 2026
          </p>
        </div>

        {/* Toggle */}
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
                padding: "7px clamp(12px,1.5vw,20px)",
                borderRadius: "7px",
                border: "none",
                cursor: "pointer",
                fontSize: "clamp(11px,1vw,13px)",
                fontWeight: 700,
                fontFamily: "inherit",
                transition: "all 0.25s ease",
                background: face === f ? ACCENT : "transparent",
                color: face === f ? BG_DARK : "rgba(255,255,255,0.7)",
                boxShadow: face === f ? `0 0 18px ${ACCENT}66` : "none",
              }}
            >
              {f === "front" ? "🔵 Cara Frontal" : "🔴 Cara Trasera"}
            </button>
          ))}
        </div>
      </div>

      {/* Face label */}
      <div
        style={{
          ...glassStyle,
          padding: "8px 16px",
          display: "inline-flex",
          alignSelf: "flex-start",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "clamp(12px,1.2vw,16px)" }}>{face === "front" ? "📋" : "📊"}</span>
        <span style={{ fontSize: "clamp(10px,0.9vw,13px)", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
          {face === "front"
            ? "Cara Frontal: Portada · El Problema · La Solución"
            : "Cara Trasera: Shield + Sostenibilidad · Aliados + Roadmap · Equipo + Contacto"}
        </span>
      </div>

      {/* Panels */}
      <div
        style={{
          display: "flex",
          gap: "clamp(8px,1vw,14px)",
          flex: 1,
          minHeight: 0,
        }}
      >
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
