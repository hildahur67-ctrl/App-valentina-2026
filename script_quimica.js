const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const tallerQuimica = [
    {
        id: 1,
        t: "Punto 1: Capa de Valencia y Distribución",
        incisos: [
            { 
                elemento: "Carbono (C)", 
                ecuacion: "1s² 2s² 2p²", 
                pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Carbono?", 
                r: "2", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Los electrones se organizan en niveles de energía (pisos). La Capa de Valencia es el número de nivel más alto al que logró llegar el elemento.<br><br>
                    <b>🛠️ 2. La Estrategia:</b> Busca el número grande más alto que aparezca al inicio de las letras en la distribución.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si fuera el Oxígeno ($1s^{2}2s^{2}2p^{4}$):</i> El nivel grande más alto es el 2. Capa de valencia = <b>2</b>.<br><br>
                    <b>✏️ TU RETO:</b> Sigue el mismo orden para el <b>Carbono (C)</b>. Digita solo el número.`,
                pista: "Mira la distribución: 1s² 2s² 2p². El número grande más alto es el 2.", 
                tipo: "bohr" 
            },
            { 
                elemento: "Aluminio (Al)", 
                ecuacion: "1s² 2s² 2p⁶ 3s² 3p¹", 
                pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Aluminio?", 
                r: "3", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Volvemos a mirar hasta qué piso de energía se construyó el átomo.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si fuera el Cloro ($1s^{2}2s^{2}2p^{6}3s^{2}3p^{5}$):</i> El número grande máximo es el 3. Capa de valencia = <b>3</b>.<br><br>
                    <b>✏️ TU RETO:</b> Aplica la lógica para el <b>Aluminio (Al)</b>. Digita solo el número.`,
                pista: "Busca el número grande máximo. Llegó hasta el nivel 3.", 
                tipo: "bohr" 
            },
            { 
                elemento: "Fósforo (P)", 
                ecuacion: "1s² 2s² 2p⁶ 3s² 3p³", 
                pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Fósforo?", 
                r: "3", 
                d: `<b>👁️ 1. El Mapa Visual:</b> El piso de valencia es la última frontera del átomo.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si fuera el Azufre ($1s^{2}2s^{2}2p^{6}3s^{2}3p^{4}$):</i> El número máximo es el 3. Capa de valencia = <b>3</b>.<br><br>
                    <b>✏️ TU RETO:</b> Sigue los pasos para el <b>Fósforo (P)</b>.`,
                pista: "El nivel mayor que aparece al inicio de sus letras externas es el 3.", 
                tipo: "bohr" 
            }
        ]
    },
    {
        id: 2,
        t: "Punto 1.2: Comportamiento Atómico (Regla del Octeto)",
        incisos: [
            { 
                elemento: "Sodio (Na)", 
                ecuacion: "Último nivel: 3s¹ (1 electrón)", 
                pregunta: "El Sodio tiene solo 1 electrón afuera. ¿Para estabilizarse este elemento <b>cede</b> o <b>recibe</b>?", 
                r: "cede", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Los átomos buscan la estabilidad teniendo 8 electrones afuera. Si tienen muy poquitos (1, 2 o 3), prefieren regalarlos.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si fuera el Potasio (con 1 electrón externo):</i> Le conviene donarlo para quedar estable. El Potasio <b>cede</b>.<br><br>
                    <b>✏️ TU RETO:</b> Analiza el <b>Sodio (Na)</b> con sus pasajeros externos. (Responde: cede / recibe)`,
                pista: "Le cuesta menos energía regalar ese único electrón suelto. Escribe: cede", 
                tipo: "bohr" 
            },
            { 
                elemento: "Oxígeno (O)", 
                ecuacion: "Último nivel: 2s² 2p⁴ (6 electrones)", 
                pregunta: "El Oxígeno tiene 6 electrones externos. ¿Este elemento <b>cede</b> o <b>recibe</b>?", 
                r: "recibe", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Si un átomo tiene bastantes pasajeros afuera (5, 6 o 7), prefiere capturar los que le faltan.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si fuera el Flúor (con 7 electrones externos):</i> Le falta solo 1 para llegar a 8. El Flúor <b>recibe</b>.<br><br>
                    <b>✏️ TU RETO:</b> Evalúa al <b>Oxígeno (O)</b>. (Responde: cede / recibe)`,
                pista: "Tiene 6 pasajeros en el último piso. Le faltan solo 2 para llegar a 8. Escribe: recibe", 
                tipo: "bohr" 
            }
        ]
    },
    {
        id: 3,
        t: "Punto 2: Moléculas Diatómicas (Fuerzas Intramoleculares)",
        incisos: [
            { 
                elemento: "Gas Hidrógeno (H₂)", 
                ecuacion: "H - H", 
                pregunta: "¿Qué tipo de enlace intramolecular presenta el Hidrógeno (<b>H2</b>)?", 
                r: "covalente apolar", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Cuando dos no metales idénticos se unen, se dan la mano compartiendo electrones con la misma fuerza exacta.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si analizamos el gas Yodo ($I_{2}$):</i> Son dos gemelos no metales unidos. Su enlace es <b>covalente apolar</b>.<br><br>
                    <b>✏️ TU RETO:</b> ¿Qué fuerza intramolecular une al <b>Hidrógeno (H2)</b>? (Responde: covalente apolar)`,
                pista: "Dos no metales idénticos comparten electrones con la misma fuerza. Escribe: covalente apolar", 
                tipo: "enlace" 
            },
            { 
                elemento: "Gas Cloro (Cl₂)", 
                ecuacion: "Cl - Cl", 
                pregunta: "¿Qué tipo de enlace une a la molécula de Cloro (<b>Cl2</b>)?", 
                r: "covalente apolar", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si analizamos el gas Bromo ($Br_{2}$):</i> La diferencia de electronegatividad es cero. Enlace = <b>covalente apolar</b>.<br><br>
                    <b>✏️ TU RETO:</b> Sigue el mismo patrón para el gas <b>Cloro (Cl2)</b>.`,
                pista: "Dos átomos idénticos de cloro compartiendo de forma simétrica. Escribe: covalente apolar", 
                tipo: "enlace" 
            }
        ]
    },
    {
        id: 4,
        t: "Punto 3: Clasificación de Reacciones Químicas",
        incisos: [
            { 
                elemento: "Inciso a", 
                ecuacion: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)", 
                pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", 
                r: "sintesis", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Si dos sustancias independientes se unen para formar un solo producto grande, es una **Síntesis** (A + B → AB).<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si tenemos: $2H_{2} + O_{2} \rightarrow 2H_{2}O$:</i> Dos reactivos se convirtieron en uno solo a la derecha. Es una <b>sintesis</b>.<br><br>
                    <b>✏️ TU RETO:</b> Clasifica la reacción del Hierro y el Oxígeno de tu taller.`,
                pista: "Dos reactivos separados se unieron en un único producto. Escribe: sintesis", 
                tipo: "tubo" 
            },
            { 
                elemento: "Inciso e", 
                ecuacion: "C₄H₈(g) + 6O₂(g) → 4CO₂(g) + 4H₂O(g)", 
                pregunta: "Al liberar CO₂ y H₂O fijos con oxígeno, ¿qué reacción es?", 
                r: "combustion", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Si al lado derecho de la flecha ves como productos fijos $CO_{2} + H_{2}O$ acompañados de energía, la reacción es de combustión.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si tenemos la quema de gas metano ($CH_{4} + 2O_{2} \rightarrow CO_{2} + 2H_{2}O$):</i> Produce gas carbónico y agua. Es <b>combustion</b>.<br><br>
                    <b>✏️ TU RETO:</b> Sigue el mismo orden para clasificar la reacción del butano.`,
                pista: "Libera gas carbónico y agua en presencia de fuego. Escribe: combustion", 
                tipo: "fuego" 
            }
        ]
    },
    {
        id: 5,
        t: "Punto 4 y 5: Conteo y Verificación de Balanzas",
        incisos: [
            { 
                elemento: "Conteo 4.a", 
                ecuacion: "2NO(g) + O₂(g) → 2NO₂(g)", 
                pregunta: "¿Cuántos átomos de Oxígeno (O) totales hay en los PRODUCTOS (2NO₂)?", 
                r: "4", 
                d: `<b>👁️ 1. El Mapa Visual:</b> El número grande de adelante (coeficiente) multiplica a todos los subíndices de la molécula.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Si tuviéramos $2SO_{3}$:</i> Multiplicamos el 2 grande por el 3 pequeño del Oxígeno -> 2 * 3 = <b>6 átomos</b>.<br><br>
                    <b>✏️ TU RETO:</b> Cuenta los Oxígenos para los productos de tu taller: <b>2NO₂</b>.`,
                pista: "Multiplica el 2 grande del inicio por el 2 pequeño del oxígeno: 2 x 2 = 4.", 
                tipo: "balanza" 
            },
            { 
                elemento: "Verificación 5.a", 
                ecuacion: "S(s) + O₂(g) → SO₃(g)", 
                pregunta: "¿Esta ecuación se encuentra balanceada correctamente? (si / no)", 
                r: "no", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Una ecuación está balanceada si el número total de átomos de cada elemento es idéntico a la izquierda y a la derecha.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Evaluemos $CH_{4} + O_{2} \rightarrow CO_{2} + H_{2}O$:</i> A la izquierda hay 4 Hidrógenos y a la derecha solo 2. <b>no</b> está balanceada.<br><br>
                    <b>✏️ TU RETO:</b> Cuenta los Oxígenos a ambos lados de tu ecuación de Azufre. (si / no)`,
                pista: "Cuenta los Oxígenos: hay 2 a la izquierda y 3 a la derecha. No está igualada. Escribe: no", 
                tipo: "balanza" 
            }
        ]
    },
    {
        id: 6,
        t: "Punto 6: Balanceo por Tanteo (Coeficientes)",
        incisos: [
            { 
                elemento: "Reacción Oxígeno", 
                ecuacion: "___ Fe + 3O₂ → 2Fe₂O₃", 
                pregunta: "¿Qué coeficiente grande debe ir frente al Hierro (Fe)?", 
                r: "4", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Ajustamos los números grandes de adelante hasta que los platos de la balanza queden con el mismo peso.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Balanceando: ___ Al + 3O₂ → 2Al₂O₃:</i> A la derecha hay 2 * 2 = 4 Aluminios. Por tanto, colocamos un <b>4</b> al inicio.<br><br>
                    <b>✏️ TU RETO:</b> Haz el mismo conteo para el caso de tu receta del Hierro.`,
                pista: "A la derecha tienes 2 x 2 = 4 Hierros totales. Coloca un 4 a la izquierda.", 
                tipo: "balanza" 
            }
        ]
    },
    {
        id: 7,
        t: "Punto 7: Estados de Oxidación y Redox",
        incisos: [
            { 
                elemento: "Ácido Nítrico", 
                ecuacion: "HNO₃", 
                pregunta: "¿Con qué estado de oxidación trabaja el Nitrógeno (N)?", 
                r: "+5", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Las moléculas deben ser neutras y sumar cero. El Hidrógeno aporta siempre +1 y cada Oxígeno vale -2.<br><br>
                    <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
                    <i>Buscando el Cloro en el HClO₃:</i> H aporta +1, tres Oxígenos valen -6. Para neutralizar: +1 + X - 6 = 0, por ende trabaja con <b>+5</b>.<br><br>
                    <b>✏️ TU RETO:</b> Sigue los pasos algebraicos para hallar el estado del Nitrógeno en el <b>HNO3</b>.`,
                pista: "+1 + X - 6 = 0. Despejando la X te da +5. Recuerda poner el signo +", 
                tipo: "recta" 
            }
        ]
    }
];

let puntoActual = 0;
let incisoActual = 0;

function contarIncisosTotales() {
    return tallerQuimica.reduce((acc, p) => acc + p.incisos.length, 0);
}

function calcularProgresoActual() {
    let completados = 0;
    for (let i = 0; i < puntoActual; i++) {
        completados += tallerQuimica[i].incisos.length;
    }
    completados += incisoActual;
    return Math.max(5, (completados / contarIncisosTotales()) * 100);
}

function dibujarEsquemaQuimico() {
    if (!canvas || !canvas.offsetWidth) return;
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h); ctx.lineWidth = 3; ctx.font = "bold 12px Arial";

    const tipoGrafico = tallerQuimica[puntoActual].incisos[incisoActual].tipo;

    if (tipoGrafico === "bohr") {
        ctx.strokeStyle = "#14b8a6"; ctx.beginPath(); ctx.arc(w/2, h/2, 15, 0, Math.PI*2); ctx.fillStyle = "#ccfbf1"; ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#115e59"; ctx.fillText("Núcleo", w/2 - 20, h/2 + 4);
        ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.strokeStyle = "#94a3b8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 35, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
    } 
    else if (tipoGrafico === "enlace") {
        ctx.strokeStyle = "#0d9488";
        ctx.beginPath(); ctx.arc(w/2 - 25, h/2, 25, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2 + 25, h/2, 25, 0, Math.PI*2); ctx.stroke();
    } 
    else if (tipoGrafico === "tubo" || tipoGrafico === "fuego") {
        ctx.strokeStyle = "#475569";
        ctx.beginPath(); ctx.moveTo(w/2 - 15, h*0.25); ctx.lineTo(w/2 - 15, h*0.65);
        ctx.arc(w/2, h*0.65, 15, Math.PI, 0, true); ctx.lineTo(w/2 + 15, h*0.25); ctx.stroke();
        ctx.fillStyle = tipoGrafico === "fuego" ? "#f43f5e" : "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h*0.65, 13, Math.PI, 0, true); ctx.closePath(); fill();
    } 
    else {
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w/2, h*0.35); ctx.lineTo(w/2, h*0.75); ctx.stroke();
        ctx.lineWidth = 4; ctx.strokeStyle = "#0d9488"; ctx.beginPath(); ctx.moveTo(w*0.3, h*0.4); ctx.lineTo(w*0.7, h*0.4); ctx.stroke();
    }
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    if(!selector) return;
    puntoActual = parseInt(selector.value);
    incisoActual = 0;
    cargarContenidoInciso();
}

function cargarContenidoInciso() {
    const p = tallerQuimica[puntoActual];
    const inc = p.incisos[incisoActual];
    
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0d9488; font-size:14px; font-weight:bold; margin-bottom:2px;">
            ${p.t}
        </div>
        <div style="color:#94a3b8; font-size:11px; font-weight:bold; margin-bottom:6px; text-transform: uppercase;">
            Inciso Actual: ${inc.elemento}
        </div>
        <div style="background:#1e293b; color:#2dd4bf; padding:6px; border-radius:5px; font-family:monospace; text-align:center; font-size:14px; margin-bottom:10px;">
            ${inc.ecuacion}
        </div>
        <div style="font-size:13px; color:#334155; line-height:1.45; text-align:left;">
            ${inc.d}
        </div>
    `;
    
    document.getElementById('zona-solucion-reto').style.display = "none";
    document.getElementById('btn-entendido').style.display = "block";
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    
    document.getElementById('avance').style.width = calcularProgresoActual() + "%";
    
    setTimeout(dibujarEsquemaQuimico, 5);
}

function activarModoReto() {
    document.getElementById('btn-entendido').style.display = "none";
    document.getElementById('zona-solucion-reto').style.display = "block";
}

function verificarRespuesta() {
    const rU = document.getElementById('resultado-usuario').value.trim().toLowerCase();
    const p = tallerQuimica[puntoActual];
    const inc = p.incisos[incisoActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (rU === inc.r) {
        incisoActual++;
        
        if (incisoActual < p.incisos.length) {
            alert("¡Excelente Valentina! Inciso completado. Pasamos al siguiente elemento del mismo punto.");
            cargarContenidoInciso();
        } else {
            puntoActual++;
            incisoActual = 0;
            
            if (puntoActual < tallerQuimica.length) {
                alert("¡Fabuloso! Has completado todos los incisos de este bloque. Pasamos automáticamente al siguiente punto del taller.");
                document.getElementById('selector-ejercicio').value = puntoActual;
                cargarContenidoInciso();
            } else {
                alert("¡Felicidades Valentina! Completaste toda la preparación de Química.");
                puntoActual = 0; incisoActual = 0;
                document.getElementById('selector-ejercicio').value = 0;
                cargarContenidoInciso();
            }
        }
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista del Laboratorio:</b><br>
            El dato no coincide. Revisa la ayuda de arriba: ${inc.pista}
        `;
    }
}

window.addEventListener('load', () => {
    cargarContenidoInciso();
    window.addEventListener('resize', dibujarEsquemaQuimico);
});
