const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const tallerQuimica = [
    {
        id: 1,
        t: "Punto 1: Capa de Valencia y Distribución Electrónica",
        incisos: [
            { 
                elemento: "Carbono (C)", ecuacion: "1s² 2s² 2p²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Carbono?", r: "2", 
                d: "<b>👁️ 1. El Mapa Visual:</b> Los electrones se organizan en niveles de energía (pisos). La Capa de Valencia es el nivel más alto al que logró llegar el elemento.<br><br><b>🛠️ 2. La Estrategia:</b> Busca el número grande más alto al inicio de las letras.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Oxígeno (1s² 2s² 2p⁴):</i> El nivel grande más alto es el 2. Capa de valencia = <b>2</b>.<br><br><b>✏️ TU RETO:</b> Sigue el orden para el <b>Carbono (C)</b>. Digita solo el número.",
                pista: "Mira la distribución: 1s² 2s² 2p². El número grande más alto es el 2.", tipo: "bohr" 
            },
            { 
                elemento: "Aluminio (Al)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Aluminio?", r: "3", 
                d: "<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Cloro (1s² 2s² 2p⁶ 3s² 3p⁵):</i> El número grande máximo es el 3. Capa de valencia = <b>3</b>.<br><br><b>✏️ TU RETO:</b> Aplica la lógica para el <b>Aluminio (Al)</b>. Digita el número.",
                pista: "Busca el número grande máximo. Llegó hasta el nivel 3.", tipo: "bohr" 
            },
            { 
                elemento: "Fósforo (P)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p³", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Fósforo?", r: "3", 
                d: "<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Azufre (1s² 2s² 2p⁶ 3s² 3p⁴):</i> El número máximo es el 3. Capa de valencia = <b>3</b>.<br><br><b>✏️ TU RETO:</b> Sigue los pasos para el <b>Fósforo (P)</b>.",
                pista: "El nivel mayor que aparece al inicio de sus letras externas es el 3.", tipo: "bohr" 
            }
        ]
    },
    {
        id: 2,
        t: "Punto 1.2: Comportamiento Atómico (Regla del Octeto)",
        incisos: [
            { 
                elemento: "Sodio (Na)", ecuacion: "Capa externa: 3s¹ (1 e-)", pregunta: "¿Para estabilizarse este elemento <b>cede</b>, <b>recibe</b> o comparte?", r: "cede", 
                d: "<b>👁️ 1. El Mapa Visual:</b> Los átomos buscan tener 8 electrones afuera. Si tienen muy poquitos (1, 2 o 3), prefieren regalarlos.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El Potasio (1 e- externo):</i> Le conviene donarlo para quedar estable. El Potasio <b>cede</b>.<br><br><b>✏️ TU RETO:</b> Analiza el <b>Sodio (Na)</b>. (Responde: cede / recibe / comparte)",
                pista: "Le cuesta menos energía regalar ese único electrón suelto. Escribe: cede", tipo: "bohr" 
            },
            { 
                elemento: "Carbono (C)", ecuacion: "Capa externa: 2s² 2p² (4 e-)", pregunta: "Al estar justo en la mitad (4 electrones), ¿este elemento cede, recibe o <b>comparte</b>?", r: "comparte", 
                d: "<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El Silicio (4 e- externos):</i> No le es fácil ganar 4 ni perder 4, así que se asocia. El Silicio <b>comparte</b>.<br><br><b>✏️ TU RETO:</b> Analiza el comportamiento del <b>Carbono (C)</b>.",
                pista: "Los elements del grupo 4A forman enlaces covalentes donde se asocian. Escribe: comparte", tipo: "bohr" 
            }
        ]
    },
    {
        id: 3,
        t: "Punto 2: Moléculas Diatómicas (Fuerzas Intramoleculares)",
        incisos: [
            { 
                elemento: "Gas Hidrógeno (H₂)", ecuacion: "H - H", pregunta: "¿Qué tipo de enlace presenta la molécula de Hidrógeno (<b>H2</b>)?", r: "covalente apolar", 
                d: "<b>👁️ 1. El Mapa Visual:</b> Cuando dos no metales idénticos se unen, comparten electrones con la misma fuerza exacta.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El gas Yodo (I₂):</i> Son dos gemelos no metales unidos. Su enlace es <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> ¿Qué fuerza une al <b>Hidrógeno (H2)</b>? (Responde: covalente apolar)",
                pista: "Dos no metales idénticos comparten electrones con la misma fuerza. Escribe: covalente apolar", tipo: "enlace" 
            },
            { 
                elemento: "Gas Cloro (Cl₂)", ecuacion: "Cl - Cl", pregunta: "¿Qué tipo de enlace une al gas Cloro (<b>Cl2</b>)?", r: "covalente apolar", 
                d: "<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El gas Bromo (Br₂):</i> Comparten de forma simétrica. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Sigue el mismo patrón para el gas <b>Cloro (Cl2)</b>.",
                pista: "Dos átomos idénticos de cloro compartiendo de forma simétrica. Escribe: covalente apolar", tipo: "enlace" 
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
        ctx.beginPath(); ctx.arc(w/2 - 25, h/2, 21, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2 + 25, h/2, 21, 0, Math.PI*2); ctx.stroke();
    } 
    else {
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w/2, h*0.35); ctx.lineTo(w/2, h*0.75); ctx.stroke();
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
            alert("¡Excelente Valentina! Inciso completado. Pasamos al siguiente elemento.");
            cargarContenidoInciso();
        } else {
            puntoActual++;
            incisoActual = 0;
            
            if (puntoActual < tallerQuimica.length) {
                alert("¡Fabuloso! Has completado todos los incisos de este bloque. Pasamos al siguiente punto.");
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
        texto.innerHTML = "<b>Pista del Laboratorio:</b><br>El dato no coincide. Revisa la ayuda de arriba: " + inc.pista;
    }
}

window.addEventListener('load', () => {
    cargarContenidoInciso();
    window.addEventListener('resize', dibujarEsquemaQuimico);
});
