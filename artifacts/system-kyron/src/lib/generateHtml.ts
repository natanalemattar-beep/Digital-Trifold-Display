export async function downloadTriptychHtml() {
  // Fetch the logo and convert to base64 so the HTML is fully self-contained
  let logoDataUrl = "";
  try {
    const resp = await fetch("/logo-kyron.png");
    const blob = await resp.blob();
    logoDataUrl = await new Promise<string>((res) => {
      const reader = new FileReader();
      reader.onloadend = () => res(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {
    logoDataUrl = "";
  }

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>System Kyron – Tríptico Digital</title>
  <meta name="description" content="System Kyron – Ecosistema integral: contabilidad, legal, RRHH, facturación TPV, sostenibilidad y más." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;900&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; width: 100%; }
    body {
      font-family: 'Inter', 'Poppins', system-ui, sans-serif;
      background: radial-gradient(ellipse at 20% 20%, #0d3080 0%, #0A2472 40%, #050e2e 100%);
      color: #fff;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Layout ── */
    .app { padding: clamp(12px,1.5vw,24px); display: flex; flex-direction: column; gap: clamp(10px,1.2vw,18px); min-height: 100vh; }
    .header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
    .header-brand { display: flex; align-items: center; gap: clamp(8px,1vw,14px); }
    .header-logo { width: clamp(38px,4vw,52px); height: clamp(38px,4vw,52px); object-fit: contain; filter: drop-shadow(0 0 10px rgba(0,255,0,0.4)); }
    .header-title { font-size: clamp(18px,2.2vw,32px); font-weight: 900; letter-spacing: -0.02em; }
    .header-title .kyron { color: #00FF00; text-shadow: 0 0 24px #00FF00; }
    .header-sub { font-size: clamp(9px,0.85vw,12px); color: rgba(255,255,255,0.5); margin-top: 2px; }

    /* ── Toggle ── */
    .toggle { display: flex; background: rgba(255,255,255,0.06); border: 1px solid rgba(0,255,0,0.25); border-radius: 10px; padding: 4px; gap: 4px; }
    .toggle button { padding: 7px clamp(12px,1.5vw,20px); border-radius: 7px; border: none; cursor: pointer; font-size: clamp(11px,1vw,13px); font-weight: 700; font-family: inherit; transition: all 0.25s ease; background: transparent; color: rgba(255,255,255,0.7); }
    .toggle button.active { background: #00FF00; color: #0A2472; box-shadow: 0 0 18px rgba(0,255,0,0.4); }

    /* ── Face label ── */
    .face-label { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(0,255,0,0.18); border-radius: 18px; font-size: clamp(10px,0.9vw,13px); font-weight: 600; color: rgba(255,255,255,0.9); }

    /* ── Panels ── */
    .panels { display: flex; gap: clamp(8px,1vw,14px); flex: 1; }
    .panel { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: clamp(10px,1.2vw,16px); padding: clamp(16px,1.8vw,28px) clamp(14px,1.5vw,22px); background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(0,255,0,0.18); border-radius: 18px; }
    .panel.center { align-items: center; justify-content: center; text-align: center; }
    .hidden { display: none !important; }

    /* ── Glass card ── */
    .card { background: rgba(0,255,0,0.07); border: 1px solid rgba(0,255,0,0.25); border-radius: 12px; padding: 14px; }
    .card-row { display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: rgba(0,255,0,0.06); border-radius: 8px; border: 1px solid rgba(0,255,0,0.15); transition: border-color 0.15s; }
    .card-row:hover { border-color: rgba(0,255,0,0.4); }

    /* ── Typography ── */
    h1, h2, h3 { color: #fff; }
    .accent { color: #00FF00; }
    .green-glow { color: #00FF00; text-shadow: 0 0 12px rgba(0,255,0,0.53); }
    .dim { color: rgba(255,255,255,0.65); font-size: clamp(9px,0.85vw,11px); line-height: 1.5; }
    .quote { font-style: italic; font-size: clamp(10px,0.9vw,12px); color: rgba(255,255,255,0.9); line-height: 1.5; background: linear-gradient(135deg,rgba(0,255,0,0.12),rgba(0,255,0,0.04)); border: 1px solid rgba(0,255,0,0.27); border-radius: 10px; padding: 10px 14px; }
    .border-left-green { border-left: 2px solid #00FF00; padding-left: 10px; font-style: italic; font-size: clamp(9px,0.85vw,11px); color: rgba(255,255,255,0.65); line-height: 1.55; }
    .footer-text { border-top: 1px solid rgba(0,255,0,0.15); padding-top: 8px; text-align: center; font-size: clamp(8px,0.75vw,10px); color: rgba(255,255,255,0.35); line-height: 1.5; }
    .pill { font-size: clamp(9px,0.85vw,11px); padding: 4px 10px; background: rgba(0,255,0,0.1); border: 1px solid rgba(0,255,0,0.3); border-radius: 99px; color: #00FF00; font-weight: 600; }
    .badge-dev { display: inline-flex; align-items: center; gap: 4px; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 99px; background: rgba(255,180,0,0.15); border: 1px solid rgba(255,180,0,0.4); color: #FFB400; text-transform: uppercase; letter-spacing: 0.05em; }
    .highlight-box { background: linear-gradient(135deg,rgba(0,255,0,0.13),rgba(0,255,0,0.08)); border: 1px solid rgba(0,255,0,0.33); border-radius: 10px; padding: 10px 18px; }
    .cta-box { background: linear-gradient(135deg,rgba(0,255,0,0.13),rgba(0,255,0,0.06)); border: 1px solid rgba(0,255,0,0.33); border-radius: 12px; padding: 12px 14px; text-align: center; }
    .bar-left { background: linear-gradient(90deg,rgba(0,255,0,0.09),transparent); border-left: 3px solid #00FF00; border-radius: 6px; padding: 8px 12px; font-size: clamp(9px,0.85vw,11px); color: rgba(255,255,255,0.85); line-height: 1.7; }

    /* ── Grids ── */
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(6px,0.8vw,12px); flex: 1; }
    .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(5px,0.7vw,10px); }
    .grid-3.allies { gap: clamp(6px,0.7vw,10px); }

    /* ── Stat card ── */
    .stat-card { background: rgba(0,255,0,0.07); border: 1px solid rgba(0,255,0,0.25); border-radius: 12px; padding: 14px; text-align: center; }
    .stat-num { font-size: clamp(20px,2vw,28px); font-weight: 900; color: #00FF00; text-shadow: 0 0 12px rgba(0,255,0,0.53); line-height: 1.1; }
    .stat-icon { font-size: clamp(20px,2.5vw,28px); margin-bottom: 4px; }
    .stat-lbl { font-size: clamp(9px,0.9vw,12px); color: rgba(255,255,255,0.75); margin-top: 4px; line-height: 1.3; }

    /* ── Module cell ── */
    .module-cell { background: rgba(0,255,0,0.07); border: 1px solid rgba(0,255,0,0.25); border-radius: 12px; padding: 10px 6px; display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; transition: transform 0.15s, box-shadow 0.15s; cursor: default; }
    .module-cell:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,255,0,0.13); }
    .module-icon { font-size: clamp(16px,1.8vw,22px); }
    .module-name { font-size: clamp(9px,0.85vw,11px); color: rgba(255,255,255,0.85); font-weight: 600; line-height: 1.3; }

    /* ── Ally badge ── */
    .ally { background: rgba(0,255,0,0.07); border: 1px solid rgba(0,255,0,0.25); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: center; gap: 6px; transition: transform 0.15s; cursor: default; }
    .ally:hover { transform: scale(1.03); }
    .ally-name { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.9); }

    /* ── Team member ── */
    .team { display: flex; justify-content: space-around; gap: 8px; }
    .member { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .avatar { width: clamp(52px,5vw,72px); height: clamp(52px,5vw,72px); border-radius: 50%; background: rgba(0,255,0,0.1); border: 2px solid rgba(0,255,0,0.35); display: flex; align-items: center; justify-content: center; font-size: clamp(22px,2.5vw,30px); box-shadow: 0 0 20px rgba(0,255,0,0.15); }
    .member-name { font-weight: 700; font-size: clamp(10px,0.9vw,13px); color: rgba(255,255,255,0.95); text-align: center; }
    .member-role { font-size: clamp(9px,0.75vw,11px); color: #00FF00; margin-top: 2px; text-align: center; }

    /* ── Panel 1 specifics ── */
    .logo-wrap { width: clamp(90px,9vw,130px); height: clamp(90px,9vw,130px); display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 24px rgba(0,255,0,0.4)); }
    .logo-wrap img { width: 100%; height: 100%; object-fit: contain; }

    /* ── Roadmap ── */
    .roadmap { display: flex; flex-direction: column; gap: 8px; }
    .roadmap-row { display: flex; gap: 10px; align-items: flex-start; }
    .year-tag { min-width: 48px; padding: 3px 8px; background: rgba(0,255,0,0.13); border: 1px solid rgba(0,255,0,0.33); border-radius: 6px; font-size: clamp(9px,0.85vw,11px); font-weight: 800; color: #00FF00; text-align: center; flex-shrink: 0; }
    .roadmap-item { font-size: clamp(9px,0.85vw,11px); color: rgba(255,255,255,0.75); line-height: 1.5; }

    /* ── QR placeholder ── */
    .qr { width: clamp(48px,4.5vw,64px); height: clamp(48px,4.5vw,64px); border: 2px dashed rgba(0,255,0,0.4); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: clamp(20px,2vw,28px); flex-shrink: 0; }

    /* ── Responsive ── */
    @media (max-width: 700px) {
      .panels { flex-direction: column; }
      .grid-3 { grid-template-columns: repeat(2,1fr); }
      .team { flex-wrap: wrap; justify-content: center; }
    }

    /* ── Download button ── */
    .download-btn { display: none; }
  </style>
</head>
<body>
<div class="app">
  <!-- HEADER -->
  <div class="header">
    <div class="header-brand">
      ${logoDataUrl ? `<img src="${logoDataUrl}" alt="System Kyron Logo" class="header-logo" />` : ""}
      <div>
        <div class="header-title">System <span class="kyron">Kyron</span></div>
        <div class="header-sub">Tríptico Digital Interactivo · Demo Day Kurios x EY 2026</div>
      </div>
    </div>
    <div class="toggle">
      <button class="active" onclick="showFace('front',this)">🔵 Cara Frontal</button>
      <button onclick="showFace('back',this)">🔴 Cara Trasera</button>
    </div>
  </div>

  <!-- FACE LABEL -->
  <div class="face-label" id="face-label">
    <span id="face-icon">📋</span>
    <span id="face-text">Cara Frontal: Portada · El Problema · La Solución</span>
  </div>

  <!-- FRONT PANELS -->
  <div class="panels" id="face-front">
    <!-- P1: Portada -->
    <div class="panel center">
      <div class="logo-wrap">${logoDataUrl ? `<img src="${logoDataUrl}" alt="System Kyron Logo" />` : "<span style='font-size:48px'>🛡️</span>"}</div>
      <div>
        <h1 style="font-size:clamp(22px,2.8vw,42px);font-weight:900;letter-spacing:-0.02em;text-shadow:0 0 24px rgba(0,255,0,0.4);line-height:1.1">
          System <span class="accent" style="text-shadow:0 0 28px #00FF00">Kyron</span>
        </h1>
        <p style="font-size:clamp(11px,1.1vw,16px);color:rgba(255,255,255,0.8);margin-top:10px;font-weight:500;line-height:1.4">
          La línea de teléfono que protege tu negocio
        </p>
      </div>
      <div class="highlight-box" style="width:100%">
        <p style="font-size:clamp(10px,0.9vw,13px);color:#00FF00;font-weight:700;letter-spacing:0.02em">
          ✅ Todo homologado: desde el IMEI hasta la contabilidad
        </p>
      </div>
      <div style="border-top:1px solid rgba(0,255,0,0.2);padding-top:14px;width:100%">
        <p style="font-size:clamp(9px,0.8vw,11px);color:rgba(255,255,255,0.5);line-height:1.6">
          Colegio Gabriela Mistral · Catia la Mar, La Guaira<br>
          <strong style="color:rgba(255,255,255,0.75)">Demo Day Kurios x EY 2026</strong>
        </p>
      </div>
    </div>

    <!-- P2: El problema -->
    <div class="panel">
      <div>
        <h2 style="font-size:clamp(14px,1.6vw,22px);font-weight:800;line-height:1.2">
          🌪️ El caos regulatorio<br><span class="accent">venezolano</span>
        </h2>
        <p class="dim" style="margin-top:6px">
          Las empresas venezolanas enfrentan un laberinto de regulaciones que frena su crecimiento y las expone a sanciones severas sin herramientas de cumplimiento accesibles.
        </p>
      </div>
      <div class="grid-2">
        <div class="stat-card"><div class="stat-icon">📱</div><div class="stat-num">21M+</div><div class="stat-lbl">Líneas móviles activas expuestas a bloqueo (CONATEL)</div></div>
        <div class="stat-card"><div class="stat-icon">🧾</div><div class="stat-num">1.000x</div><div class="stat-lbl">Multas de hasta 1.000 veces el BCV</div></div>
        <div class="stat-card"><div class="stat-icon">⚖️</div><div class="stat-num">134h</div><div class="stat-lbl">Horas perdidas al año en papeleo (OCDE)</div></div>
        <div class="stat-card"><div class="stat-icon">📊</div><div class="stat-num">61%</div><div class="stat-lbl">PyMEs con incumplimiento laboral</div></div>
      </div>
    </div>

    <!-- P3: Solución -->
    <div class="panel">
      <div>
        <h2 style="font-size:clamp(13px,1.5vw,20px);font-weight:800;line-height:1.2">
          🧩 System Kyron –<br><span class="accent">Ecosistema integral</span>
        </h2>
        <p class="dim" style="margin-top:5px">La primera línea telefónica que homologa tu negocio desde el chip hasta la contabilidad.</p>
      </div>
      <div class="grid-3" style="flex:1">
        <div class="module-cell"><span class="module-icon">👤</span><span class="module-name">Cuenta Personal</span></div>
        <div class="module-cell"><span class="module-icon">📡</span><span class="module-name">Mi Línea 5G</span></div>
        <div class="module-cell"><span class="module-icon">📋</span><span class="module-name">Contabilidad + Permisos</span></div>
        <div class="module-cell"><span class="module-icon">⚖️</span><span class="module-name">Asesoría Legal</span></div>
        <div class="module-cell"><span class="module-icon">🧾</span><span class="module-name">Facturación TPV</span></div>
        <div class="module-cell"><span class="module-icon">👥</span><span class="module-name">RRHH</span></div>
        <div class="module-cell"><span class="module-icon">🤝</span><span class="module-name">Socios</span></div>
        <div class="module-cell"><span class="module-icon">♻️</span><span class="module-name">Sostenibilidad</span></div>
        <div class="module-cell"><span class="module-icon">💻</span><span class="module-name">Ingeniería IT</span></div>
      </div>
      <div class="bar-left">✅ 100% homologado &nbsp;·&nbsp; ✅ Soporte 24/7 &nbsp;·&nbsp; 🌐 Multi‑lenguaje (ES/EN)</div>
    </div>
  </div>

  <!-- BACK PANELS -->
  <div class="panels hidden" id="face-back">
    <!-- P4: Kyron Shield -->
    <div class="panel">
      <div>
        <h2 style="font-size:clamp(14px,1.5vw,20px);font-weight:800">🛡️ KYRON SHIELD</h2>
        <p style="font-size:clamp(10px,0.9vw,13px);color:#00FF00;font-weight:600;margin-top:3px">La única SIM con 3 seguros</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div class="card-row"><span style="font-size:clamp(16px,1.5vw,20px)">📱</span><span class="dim" style="font-size:clamp(10px,0.9vw,12px)">Reposición de equipo por robo o daño</span></div>
        <div class="card-row"><span style="font-size:clamp(16px,1.5vw,20px)">🔍</span><span class="dim" style="font-size:clamp(10px,0.9vw,12px)">Perito forense SENIAT en fiscalizaciones</span></div>
        <div class="card-row"><span style="font-size:clamp(16px,1.5vw,20px)">⚖️</span><span class="dim" style="font-size:clamp(10px,0.9vw,12px)">Abogado en menos de 1 hora</span></div>
      </div>
      <div class="quote">"Otros venden minutos. Nosotros proponemos vender <strong style="color:#00FF00">cumplimiento</strong>."</div>
      <div style="border-top:1px solid rgba(0,255,0,0.2);padding-top:12px">
        <h3 style="font-size:clamp(11px,1.1vw,14px);font-weight:700;margin-bottom:8px">♻️ Sostenibilidad inteligente</h3>
        <div style="display:flex;gap:12px">
          <div style="width:clamp(46px,4.5vw,60px);height:clamp(46px,4.5vw,60px);border:2px dashed rgba(0,255,0,0.35);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:clamp(18px,2vw,26px);flex-shrink:0">🗑️</div>
          <div style="display:flex;flex-direction:column;gap:6px;justify-content:center">
            <p class="dim">Smart Bins con inducción magnética (alianza <strong style="color:#00FF00">Ameru.AI</strong>).<br>Eco‑Créditos: puntos que acumulas por reciclar.</p>
            <span class="badge-dev">🔧 EN DESARROLLO</span>
          </div>
        </div>
      </div>
    </div>

    <!-- P5: Aliados -->
    <div class="panel">
      <h2 style="font-size:clamp(14px,1.5vw,20px);font-weight:800">🤝 Aliados estratégicos</h2>
      <div class="grid-3 allies">
        <div class="ally"><span style="font-size:18px">🏢</span><span class="ally-name">SAMSUNG</span><span class="badge-dev">🔧 EN DESARROLLO</span></div>
        <div class="ally"><span style="font-size:18px">🏢</span><span class="ally-name">XIAOMI</span><span class="badge-dev">🔧 EN DESARROLLO</span></div>
        <div class="ally"><span style="font-size:18px">🏢</span><span class="ally-name">MOTOROLA</span><span class="badge-dev">🔧 EN DESARROLLO</span></div>
        <div class="ally"><span style="font-size:18px">🏢</span><span class="ally-name">APPLE</span><span class="badge-dev">🔧 EN DESARROLLO</span></div>
        <div class="ally"><span style="font-size:18px">🏢</span><span class="ally-name">HKA FACTORY</span><span class="badge-dev">🔧 EN DESARROLLO</span></div>
        <div class="ally"><span style="font-size:18px">🏢</span><span class="ally-name">AMERU.AI</span><span class="badge-dev">🔧 EN DESARROLLO</span></div>
      </div>
      <div>
        <h3 style="font-size:clamp(11px,1.1vw,14px);font-weight:700;color:#00FF00;margin-bottom:8px">🗺️ Hoja de ruta</h3>
        <div class="roadmap">
          <div class="roadmap-row"><div class="year-tag">2026</div><span class="roadmap-item">Validación Caracas/La Guaira · Plataforma bilingüe (ES/EN)</span></div>
          <div class="roadmap-row"><div class="year-tag">2027</div><span class="roadmap-item">Expansión Colombia / Panamá</span></div>
          <div class="roadmap-row"><div class="year-tag">2028+</div><span class="roadmap-item">Evaluación México / EE.UU.</span></div>
        </div>
      </div>
      <div style="border-top:1px solid rgba(0,255,0,0.2);padding-top:10px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="pill">500K PyMEs en Venezuela</span>
        <span class="pill">8.5M en Latam</span>
        <span class="pill">21M+ consumidores</span>
      </div>
    </div>

    <!-- P6: Equipo -->
    <div class="panel">
      <h2 style="font-size:clamp(12px,1.3vw,18px);font-weight:800;line-height:1.2">🌎 Hecho en <span class="accent">Catia la Mar</span>,<br>para el mundo</h2>
      <div class="team">
        <div class="member"><div class="avatar">👤</div><div class="member-name">Carlos Mattar</div><div class="member-role">Co-CEO & Lead Architecture</div></div>
        <div class="member"><div class="avatar">👤</div><div class="member-name">Sebastián Garrido</div><div class="member-role">Co-CEO & Network Slicing</div></div>
        <div class="member"><div class="avatar">👤</div><div class="member-name">Marcos Sousa</div><div class="member-role">Co-CEO & Operational Flow</div></div>
      </div>
      <div class="border-left-green">"Crecimos donde los apagones borran datos y la humedad destruye papeles. Por eso creamos esta propuesta."</div>
      <div class="cta-box">
        <p style="font-size:clamp(11px,1vw,14px);font-weight:700;margin-bottom:6px">¿Quieres ser parte del pilotaje 2026?</p>
        <div style="display:flex;flex-direction:column;gap:3px">
          <span style="font-size:clamp(9px,0.85vw,11px);color:rgba(255,255,255,0.7)">✉️ contacto@systemkyron.com</span>
          <span style="font-size:clamp(9px,0.85vw,11px);color:rgba(255,255,255,0.7)">📞 +58 XXX-XXX-XXXX</span>
          <span style="font-size:clamp(9px,0.85vw,11px);color:rgba(255,255,255,0.7)">🌐 www.systemkyron.com</span>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:center">
        <div class="qr">📱</div>
        <p style="font-size:clamp(9px,0.85vw,11px);color:rgba(255,255,255,0.5)">QR Code – Escanea para más información</p>
      </div>
      <div class="footer-text">System Kyron · Propuesta en desarrollo · Colegio Gabriela Mistral · Kurios x EY Demo Day 2026</div>
    </div>
  </div>
</div>

<script>
  function showFace(face, btn) {
    document.getElementById('face-front').classList.toggle('hidden', face !== 'front');
    document.getElementById('face-back').classList.toggle('hidden', face !== 'back');
    document.querySelectorAll('.toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('face-icon').textContent = face === 'front' ? '📋' : '📊';
    document.getElementById('face-text').textContent = face === 'front'
      ? 'Cara Frontal: Portada · El Problema · La Solución'
      : 'Cara Trasera: Shield + Sostenibilidad · Aliados + Roadmap · Equipo + Contacto';
  }
</script>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "system-kyron-triptico.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
