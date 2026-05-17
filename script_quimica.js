const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const tallerQuimica = [
    {
        id: 1,
        t: "Bloque 1: Capa de Valencia y Distribución Electrónica",
        incisos: [
            { elemento: "Carbono (C)", ecuacion: "1s² 2s² 2p²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Carbono?", r: "2", d: "<b>👁️ 1. El Mapa Visual:</b> La Capa de Valencia es el nivel más alto al que logró llegar el elemento.<br><br><b>🛠️ 2. La Estrategia:</b> Busca el número grande más alto al inicio de las letras.<br><br><b>📋 EJEMPLO:</b> <i>Para el Oxígeno (1s² 2s² 2p⁴):</i> El número máximo es 2. Capa = <b>2</b>.<br><br><b>✏️ TU RETO:</b> Resuelve para el <b>Carbono (C)</b>.", pista: "Mira la distribución: 1s² 2s² 2p². El número grande más alto es el 2.", tipo: "bohr" },
            { elemento: "Aluminio (Al)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Aluminio?", r: "3", d: "<b>📋 EJEMPLO:</b> <i>Para el Cloro (1s² 2s² 2p⁶ 3s² 3p⁵):</i> El número grande máximo es 3. Capa = <b>3</b>.<br><br><b>✏️ TU RETO:</b> Resuelve para el <b>Aluminio (Al)</b>.", pista: "Busca el número grande máximo. Llegó hasta el nivel 3.", tipo: "bohr" },
            { elemento: "Fósforo (P)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p³", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Fósforo?", r: "3", d: "<b>📋 EJEMPLO:</b> <i>Para el Azufre (1s² 2s² 2p⁶ 3s² 3p⁴):</i> El número máximo es 3. Capa = <b>3</b>.<br><br><b>✏️ TU RETO:</b> Resuelve para el <b>Fósforo (P)</b>.", pista: "El nivel mayor que aparece al inicio de sus letras externas es el 3.", tipo: "bohr" }
        ]
    },
    {
        id: 2,
        t: "Bloque 2: Comportamiento Atómico (Regla del Octeto)",
        incisos: [
            { elemento: "Sodio (Na)", ecuacion: "Capa externa: 3s¹ (1 e-)", pregunta: "¿Para estabilizarse este elemento <b>cede</b>, <b>recibe</b> o comparte?", r: "cede", d: "<b>👁️ 1. El Mapa Visual:</b> Si tienen poquitos electrones afuera (1, 2 o 3), prefieren regalarlos.<br><br><b>📋 EJEMPLO:</b> <i>El Potasio (1 e- externo):</i> Le conviene donarlo. El Potasio <b>cede</b>.<br><br><b>✏️ TU RETO:</b> Analiza el <b>Sodio (Na)</b>. (Responde: cede / recibe / comparte)", pista: "Le cuesta menos energía regalar ese único electrón suelto. Escribe: cede", tipo: "bohr" },
            { elemento: "Carbono (C)", ecuacion: "Capa externa: 2s² 2p² (4 e-)", pregunta: "Al estar en la mitad (4 e-), ¿este elemento cede, recibe o <b>comparte</b>?", r: "comparte", d: "<b>📋 EJEMPLO:</b> <i>El Silicio (4 e- externos):</i> No gana ni pierde, se asocia. El Silicio <b>comparte</b>.<br><br><b>✏️ TU RETO:</b> Analiza al <b>Carbono (C)</b>.", pista: "Los elementos del grupo 4A forman enlaces covalentes donde se asocian. Escribe: comparte", tipo: "bohr" }
        ]
    },
    {
        id: 3,
        t: "Bloque 3: Moléculas Diatómicas (Fuerzas Intramoleculares)",
        incisos: [
            { elemento: "Gas Hidrógeno (H₂)", ecuacion: "H - H", pregunta: "¿Qué tipo de enlace presenta el Hidrógeno (<b>H2</b>)?", r: "covalente apolar", d: "<b>👁️ 1. El Mapa Visual:</b> Cuando dos no metales idénticos se unen, comparten electrones con la misma fuerza exacta.<br><br><b>📋 EJEMPLO:</b> <i>El gas Yodo (I₂):</i> Son dos gemelos no metales. Su enlace es <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> ¿Qué fuerza une al <b>Hidrógeno (H2)</b>? (Puedes escribir solo: covalente / apolar / covalente apolar)", pista: "Dos no metales idénticos comparten electrones por igual. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Cloro (Cl₂)", ecuacion: "Cl - Cl", pregunta: "¿Qué tipo de enlace une al gas Cloro (<b>Cl2</b>)?", r: "covalente apolar", d: "<b>📋 EJEMPLO:</b> <i>El gas Bromo (Br₂):</i> Comparten de forma simétrica. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Sigue el mismo patrón para el gas <b>Cloro (Cl2)</b>.", pista: "Dos átomos idénticos de cloro compartiendo de forma simétrica. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Oxígeno (O₂)", ecuacion: "O = O", pregunta: "¿Qué tipo de enlace une al gas Oxígeno (<b>O2</b>)?", r: "covalente apolar", d: "<b>📋 EJEMPLO:</b> Dos Oxígenos comparten electrones por igual. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Resuelve para el <b>Oxígeno (O2)</b>.", pista: "Aunque es un enlace doble, las fuerzas son iguales. Escribe: covalente apolar", tipo: "enlace" }
        ]
    },
    {
        id: 4,
        t: "Bloque 4: Clasificación de Reacciones Químicas",
        incisos: [
            { elemento: "Reacción a", ecuacion: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sintesis", d: "<b>👁️ 1. El Mapa Visual:</b> Dos sustancias separadas se fusionan en un solo producto grande (A + B → AB).<br><br><b>📋 EJEMPLO:</b> <i>2H₂ + O₂ → 2H₂O:</i> Dos reactivos se volvieron uno solo. Es una <b>sintesis</b>.<br><br><b>✏️ TU RETO:</b> Clasifica la reacción del Hierro y Oxígeno.", pista: "Dos reactivos separados se unieron en un único producto. Escribe: sintesis", tipo: "tubo" },
            { elemento: "Reacción c", ecuacion: "CuCO₃(s) → CuO(s) + CO₂(g)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "descomposicion", d: "<b>👁️ 1. El Mapa Visual:</b> Una sola molécula compleja se rompe debido al calor en partes sencillas.<br><br><b>📋 EJEMPLO:</b> <i>2H₂O₂ → 2H₂O + O₂:</i> Una sola sustancia se dividió. Es <b>descomposicion</b>.<br><br><b>✏️ TU RETO:</b> Clasifica el carbonato de cobre.", pista: "Una sustancia se fragmentó en dos productos independientes. Escribe: descomposicion", tipo: "tubo" },
            { elemento: "Reacción e", ecuacion: "C₄H₈(g) + 6O₂(g) → 4CO₂(g) + 4H₂O(g)", pregunta: "Al liberar CO₂ y H₂O fijos con oxígeno, ¿qué reacción es?", r: "combustion", d: "<b>👁️ 1. El Mapa Visual:</b> Un combustible se quema con Oxígeno desprendiendo gas carbónico ($CO_{2}$) y vapor de agua ($H_{2}O$).<br><br><b>📋 EJEMPLO:</b> <i>CH₄ + 2O₂ → CO₂ + 2H₂O:</i> Produce humo carbónico y agua. Es <b>combustion</b>.<br><br><b>✏️ TU RETO:</b> Clasifica el inciso e.", pista: "Libera gas carbónico y agua en presencia de fuego. Escribe: combustion", tipo: "fuego" }
        ]
    },
    {
        id: 5,
        t: "Bloque 5: Conteo y Verificación de Balanzas",
        incisos: [
            { elemento: "Conteo 4.a", ecuacion: "2NO(g) + O₂(g) → 2NO₂(g)", pregunta: "¿Cuántos átomos de Oxígeno (O) totales hay en los PRODUCTOS (2NO₂)?", r: "4", d: "<b>👁️ 1. El Mapa Visual:</b> El número de adelante multiplica a los subíndices pequeños de la molécula.<br><br><b>📋 EJEMPLO:</b> <i>En 2SO₃:</i> Coeficiente 2 por el 3 del Oxígeno -> 2 * 3 = <b>6 átomos</b>.<br><br><b>✏️ TU RETO:</b> Cuenta los Oxígenos para los productos de: <b>2NO₂</b>.", pista: "Multiplica el 2 grande del inicio por el 2 pequeño del oxígeno: 2 x 2 = 4.", tipo: "balanza" },
            { elemento: "Verificación 5.a", ecuacion: "S(s) + O₂(g) → SO₃(g)", pregunta: "¿Esta ecuación se encuentra balanceada correctamente? (si / no)", r: "no", d: "<b>👁️ 1. El Mapa Visual:</b> Una ecuación está balanceada si el número total de átomos es idéntico a ambos lados.<br><br><b>📋 EJEMPLO:</b> <i>CH₄ + O₂ → CO₂ + H₂O:</i> Hay 4 Hidrógenos a la izquierda y 2 a la derecha. <b>no</b> está balanceada.<br><br><b>✏️ TU RETO:</b> Cuenta los Oxígenos a ambos lados de tu ecuación de Azufre. (si / no)", pista: "Cuenta los Oxígenos: hay 2 a la izquierda y 3 a la derecha. Escribe: no", tipo: "balanza" }
        ]
    },
    {
        id: 6,
        t: "Bloque 6: Balanceo por Tanteo (Coeficientes)",
        incisos: [
            { elemento: "Reacción Fe", ecuacion: "___ Fe + 3O₂ → 2Fe₂O₃", pregunta: "¿Qué coeficiente grande debe ir frente al Hierro (Fe)?", r: "4", d: "<b>👁️ 1. El Mapa Visual:</b> Ajustamos los números grandes de adelante hasta que los reactivos pesen igual a los productos.<br><br><b>📋 EJEMPLO:</b> <i>___ Al + 3O₂ → 2Al₂O₃:</i> A la derecha hay 2 * 2 = 4 Aluminios. Colocamos un <b>4</b> al inicio.<br><br><b>✏️ TU RETO:</b> Haz el mismo conteo para tu receta del Hierro.", pista: "A la derecha tienes 2 x 2 = 4 Hierros totales. Coloca un 4 a la izquierda.", tipo: "balanza" },
            { elemento: "Reacción Na", ecuacion: "___ Na + Cl₂ → 2NaCl", pregunta: "¿Qué coeficiente debe ir frente al Sodio (Na)?", r: "2", d: "<b>📋 EJEMPLO:</b> <i>___ K + F₂ → 2KF:</i> Se formaron 2 Potasios. Necesitamos un <b>2</b> al inicio a la izquierda.<br><br><b>✏️ TU RETO:</b> Ajusta el coeficiente del Sodio metálico.", pista: "A la derecha el coeficiente grande 2 afecta a toda la molécula de NaCl. Necesitas 2 Sodios a la izquierda.", tipo: "balanza" }
        ]
    },
    {
        id: 7,
        t: "Bloque 7: Estados de Oxidación y Redox",
        incisos: [
            { elemento: "Ácido Nítrico", ecuacion: "HNO₃", pregunta: "¿Con qué estado de oxidación trabaja el Nitrógeno (N)?", r: "+5", d: "<b>👁️ 1. El Mapa Visual:</b> Las cargas deben sumar cero. El Hidrógeno aporta +1 y cada Oxígeno vale -2.<br><br><b>📋 EJEMPLO:</b> <i>Buscando el Cloro en el HClO₃:</i> H=+1, tres O=-6. Neutralizar: +1 + X - 6 = 0, por ende trabaja con <b>+5</b>.<br><br><b>✏️ TU RETO:</b> Halla el estado del Nitrógeno en el <b>HNO3</b>.", pista: "+1 + X - 6 = 0. Despejando la X te da +5. Recuerda poner el signo +", tipo: "recta" },
            { elemento: "Manganeso", ecuacion: "Mn⁺⁴ → Mn⁺²", pregunta: "Si el Manganeso disminuye su estado de +4 a +2, ¿se <b>oxida</b> o se <b>reduce</b>?", r: "reduce", d: "<b>👁️ 1. El Mapa Visual:</b> Si el estado de carga disminuye (baja hacia la izquierda), el átomo gana electrones.<br><br><b>📋 EJEMPLO:</b> <i>Si el Azufre pasa de S⁺⁶ a S⁺⁴:</i> Su número disminuyó. Decimos que el Azufre se <b>reduce</b>.<br><br><b>✏️ TU RETO:</b> Evalúa la transición del Manganeso. (Responde: oxida / reduce)", pista: "Al disminuir su número en la recta Redox significa que ganó electrones. Escribe: reduce", tipo: "recta" }
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
    else if (tipoGrafico === "tubo" || tipoGrafico === "fuego") {
        ctx.strokeStyle = "#475569";
        ctx.beginPath(); ctx.moveTo(w/2 - 15, h*0.25); ctx.lineTo(w/2 - 15, h*0.65);
        ctx.arc(w/2, h*0.65, 15, Math.PI, 0, true); ctx.lineTo(w/2 + 15, h*0.25); ctx.stroke();
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

    // VALIDACIÓN INTELIGENTE MEJORADA
    if (rU === inc.r || (inc.r === "covalente apolar" && (rU.includes("covalente") || rU.includes("apolar"))) || rU.includes(inc.r)) {
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
