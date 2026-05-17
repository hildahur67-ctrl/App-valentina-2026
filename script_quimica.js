const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const tallerQuimica = [
    {
        id: 1,
        t: "Punto 1: Capa de Valencia y Distribución",
        incisos: [
            { elemento: "Carbono (C)", ecuacion: "1s² 2s² 2p²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> (nivel más alto grande) para el Carbono?", r: "2", pista: "Mira la distribución: 1s² 2s² 2p². El número grande más alto es el 2.", tipo: "bohr" },
            { elemento: "Aluminio (Al)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Aluminio?", r: "3", pista: "Busca el número grande máximo. Llegó hasta el nivel 3.", tipo: "bohr" },
            { elemento: "Fósforo (P)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p³", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Fósforo?", r: "3", pista: "El nivel mayor que aparece al inicio de sus letras externas es el 3.", tipo: "bohr" },
            { elemento: "Sodio (Na)", ecuacion: "1s² 2s² 2p⁶ 3s¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Sodio?", r: "3", pista: "El último piso de energía alcanzado tiene el número grande 3.", tipo: "bohr" },
            { elemento: "Calcio (Ca)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Calcio?", r: "4", pista: "Mira el final de la cadena: llegó hasta el nivel grande 4.", tipo: "bohr" }
        ]
    },
    {
        id: 2,
        t: "Punto 1.2: Comportamiento Atómico e Intercambio",
        incisos: [
            { elemento: "Sodio (Na)", ecuacion: "Último nivel: 3s¹ (1 electrón)", pregunta: "El Sodio tiene solo 1 electrón afuera. ¿Para estabilizarse este elemento <b>cede</b> o <b>recibe</b>?", r: "cede", pista: "Le cuesta menos energía regalar ese único electrón suelto. Escribe: cede", tipo: "bohr" },
            { elemento: "Oxígeno (O)", ecuacion: "Último nivel: 2s² 2p⁴ (6 electrones)", pregunta: "El Oxígeno tiene 6 electrones externos. ¿Este elemento <b>cede</b>, <b>recibe</b> o comparte de forma iónica?", r: "recibe", pista: "Tiene 6 pasajeros en el último piso. Le faltan solo 2 para llegar a 8. Escribe: recibe", tipo: "bohr" }
        ]
    },
    {
        id: 3,
        t: "Punto 2: Moléculas Diatómicas (Fuerzas Intramoleculares)",
        incisos: [
            { elemento: "Gas Hidrógeno (H₂)", ecuacion: "H - H", pregunta: "¿Qué tipo de enlace une a los dos átomos en el Hidrógeno (<b>H2</b>)?", r: "covalente apolar", pista: "Dos no metales idénticos comparten electrones con la misma fuerza. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Cloro (Cl₂)", ecuacion: "Cl - Cl", pregunta: "¿Qué tipo de enlace une a las dos moléculas de Cloro (<b>Cl2</b>)?", r: "covalente apolar", pista: "Dos átomos idénticos de cloro compartiendo de forma simétrica. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Oxígeno (O₂)", ecuacion: "O = O", pregunta: "¿Qué tipo de enlace intramolecular une al gas Oxígeno (<b>O2</b>)?", r: "covalente apolar", pista: "Siguen siendo dos hermanos gemelos compartiendo electrones. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Nitrógeno (N₂)", ecuacion: "N ≡ N", pregunta: "¿Qué tipo de enlace intramolecular une al gas Nitrógeno (<b>N2</b>)?", r: "covalente apolar", pista: "Unión de dos no metales idénticos compartiendo tres pares de electrones. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Flúor (F₂)", ecuacion: "F - F", pregunta: "¿Qué tipo de enlace intramolecular une al gas Flúor (<b>F2</b>)?", r: "covalente apolar", pista: "Mismo elemento compartiendo de forma equitativa. Escribe: covalente apolar", tipo: "enlace" }
        ]
    },
    {
        id: 4,
        t: "Punto 3: Clasificación de Reacciones Químicas",
        incisos: [
            { elemento: "Inciso a", ecuacion: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sintesis", pista: "Dos reactivos separados se unieron en un único producto. Escribe: sintesis", tipo: "tubo" },
            { elemento: "Inciso b", ecuacion: "Mg(s) + 2AgNO₃(ac) → Mg(NO₃)₂(ac) + 2Ag(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sustitucion", pista: "El Magnesio desplazó y tomó el lugar de la Plata. Es una sustitución simple. Escribe: sustitucion", tipo: "tubo" },
            { elemento: "Inciso c", ecuacion: "CuCO₃(s) → CuO(s) + CO₂(g)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "descomposicion", pista: "Una sola molécula grande se rompió en dos partes más pequeñas. Escribe: descomposicion", tipo: "tubo" },
            { elemento: "Inciso d", ecuacion: "NaOH(ac) + HCl(ac) → NaCl(ac) + H₂O(l)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sustitucion", pista: "Intercambio de parejas entre el sodio y el hidrógeno (Doble sustitución). Escribe: sustitucion", tipo: "tubo" },
            { elemento: "Inciso e", ecuacion: "C₄H₈(g) + 6O₂(g) → 4CO₂(g) + 4H₂O(g)", pregunta: "Al reaccionar con Oxígeno liberando CO₂ y H₂O, ¿qué reacción es?", r: "combustion", pista: "Libera gas carbónico y agua en presencia de fuego. Escribe: combustion", tipo: "fuego" }
        ]
    },
    {
        id: 5,
        t: "Punto 4 y 5: Conteo y Verificación de Balanzas",
        incisos: [
            { elemento: "Conteo 4.a", ecuacion: "2NO(g) + O₂(g) → 2NO₂(g)", pregunta: "¿Cuántos átomos de Oxígeno (O) totales hay en los PRODUCTOS ($2NO_{2}$)?", r: "4", pista: "Multiplica el 2 grande del inicio por el 2 pequeño del oxígeno: 2 x 2 = 4.", tipo: "balanza" },
            { elemento: "Verificación 5.a", ecuacion: "S(s) + O₂(g) → SO₃(g)", pregunta: "¿Esta ecuación se encuentra balanceada correctamente? (si / no)", r: "no", pista: "Cuenta los Oxígenos: hay 2 a la izquierda y 3 a la derecha. No está igualada. Escribe: no", tipo: "balanza" },
            { elemento: "Verificación 5.b", ecuacion: "2Al(s) + 3Cl₂(g) → 2AlCl₃(s)", pregunta: "¿Esta ecuación del Aluminio está balanceada? (si / no)", r: "si", pista: "Hay 2 Aluminios y 6 Cloros en cada lado de la balanza. Todo coincide. Escribe: si", tipo: "balanza" }
        ]
    },
    {
        id: 6,
        t: "Punto 6: Balanceo por Tanteo (Coeficientes)",
        incisos: [
            { elemento: "Reacción Oxígeno", ecuacion: "___ Fe + 3O₂ → 2Fe₂O₃", pregunta: "¿Qué coeficiente grande debe ir frente al Hierro (Fe)?", r: "4", pista: "A la derecha tienes 2 x 2 = 4 Hierros totales. Coloca un 4 a la izquierda.", tipo: "balanza" },
            { elemento: "Reacción Sodio", ecuacion: "___ Na + Cl₂ → 2NaCl", pregunta: "¿Qué coeficiente debe ir frente al Sodio (Na) a la izquierda?", r: "2", pista: "A la derecha hay 2 Sodios por el coeficiente grande. Pon un 2 a la izquierda.", tipo: "balanza" }
        ]
    },
    {
        id: 7,
        t: "Punto 7: Estados de Oxidación y Redox",
        incisos: [
            { elemento: "Ácido Nítrico", ecuacion: "HNO₃", pregunta: "¿Con qué estado de oxidación trabaja el Nitrógeno (N) si H=+1 y O=-2?", r: "+5", pista: "+1 + X - 6 = 0. Despejando la X te da +5. Recuerda poner el signo +", tipo: "recta" },
            { elemento: "Manganeso", ecuacion: "Mn⁺⁴ → Mn⁺²", pregunta: "Si el Manganeso disminuye su estado de +4 a +2, ¿se <b>oxida</b> o se <b>reduce</b>?", r: "reduce", pista: "Al disminuir su número en la recta Redox significa que ganó electrones. Escribe: reduce", tipo: "recta" }
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
        ctx.beginPath(); ctx.arc(w/2, h*0.65, 13, Math.PI, 0, true); ctx.closePath(); ctx.fill();
    } 
    else if (tipoGrafico === "balanza") {
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w/2, h*0.35); ctx.lineTo(w/2, h*0.75); ctx.stroke();
        ctx.lineWidth = 4; ctx.strokeStyle = "#0d9488"; ctx.beginPath(); ctx.moveTo(w*0.3, h*0.4); ctx.lineTo(w*0.7, h*0.4); ctx.stroke();
    } 
    else {
        ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(w*0.2, h/2); ctx.lineTo(w*0.8, h/2); ctx.stroke();
    }
}

function cambiarEjercicio() {
    puntoActual = parseInt(document.getElementById('selector-ejercicio').value);
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
        <div style="color:#94a3b8; font-size:12px; font-weight:bold; margin-bottom:6px; text-transform: uppercase;">
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
