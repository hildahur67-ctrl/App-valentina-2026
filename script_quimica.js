const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

// Base de datos estructurada por Puntos del Taller y sus respectivos Incisos
const tallerQuimica = [
    {
        id: 1,
        t: "Punto 1: Capa de Valencia y Configuración Electrónica",
        incisos: [
            { elemento: "Carbono (C)", ecuacion: "1s² 2s² 2p²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> (nivel más alto grande) para el Carbono?", r: "2", pista: "Mira la distribución: 1s² 2s² 2p². El número grande más alto es el 2. Digita solo el número.", tipo: "bohr" },
            { elemento: "Aluminio (Al)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> (nivel más alto grande) para el Aluminio?", r: "3", pista: "Busca el número grande máximo al inicio de las letras. En este caso llegó hasta el nivel 3.", tipo: "bohr" }
        ]
    },
    {
        id: 2,
        t: "Punto 1.2: Comportamiento Atómico (Regla del Octeto)",
        incisos: [
            { elemento: "Sodio (Na)", ecuacion: "1s² 2s² 2p⁶ 3s¹", pregunta: "El Sodio solo tiene 1 electrón en su último piso. ¿Para estabilizarse este elemento <b>cede</b> o <b>recibe</b>?", r: "cede", pista: "Como tiene solo 1 electrón afuera, le cuesta menos energía regalarlo que buscar 7. Escribe: cede", tipo: "bohr" },
            { elemento: "Fósforo (P)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p³", pregunta: "El Fósforo tiene 5 electrones en su último piso (nivel 3). ¿Este elemento <b>cede</b> o <b>recibe</b>?", r: "recibe", pista: "Tiene 5 pasajeros en el último piso. Le falta solo 3 para completar los 8 del octeto. Escribe: recibe", tipo: "bohr" }
        ]
    },
    {
        id: 3,
        t: "Punto 2: Moléculas Diatómicas y Fuerzas Intramoleculares",
        incisos: [
            { elemento: "Gas Cloro (Cl₂)", ecuacion: "Cl - Cl", pregunta: "¿Qué tipo de enlace intramolecular presenta el gas Cloro (<b>Cl2</b>)?", r: "covalente apolar", pista: "Al unirse dos no metales idénticos, comparten electrones por igual. Escribe: covalente apolar", tipo: "enlace" },
            { elemento: "Gas Oxígeno (O₂)", ecuacion: "O = O", pregunta: "¿Qué tipo de enlace intramolecular une a los dos átomos en el gas Oxígeno (<b>O2</b>)?", r: "covalente apolar", pista: "Siguen siendo dos hermanos gemelos no metales compartiendo con la misma fuerza. Escribe: covalente apolar", tipo: "enlace" }
        ]
    },
    {
        id: 4,
        t: "Punto 3: Clasificación de Reacciones Químicas",
        incisos: [
            { elemento: "Óxido de Hierro", ecuacion: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)", pregunta: "¿Cómo se clasifica esta reacción donde dos elementos se unen en un solo producto?", r: "sintesis", pista: "Dos reactivos separados se fundieron en una sola molécula grande a la derecha. Escribe: sintesis", tipo: "tubo" },
            { elemento: "Combustión del Butano", ecuacion: "C₄H₈(g) + 6O₂(g) → 4CO₂(g) + 4H₂O(g)", pregunta: "Al liberar CO₂ y H₂O fijos con oxígeno, ¿qué tipo de reacción es?", r: "combustion", pista: "Los productos finales son gas carbónico y agua acompañados de calor. Escribe: combustion", tipo: "fuego" }
        ]
    },
    {
        id: 5,
        t: "Punto 4 y 5: Conteo de Átomos y Balanceo",
        incisos: [
            { elemento: "Conteo de Oxígenos", ecuacion: "2NO(g) + O₂(g) → 2NO₂(g)", pregunta: "¿Cuántos átomos totales de Oxígeno (O) hay en el lado de los PRODUCTOS ($2NO_{2}$)?", r: "4", pista: "Multiplica el coeficiente grande 2 por el subíndice pequeño del oxígeno (2). 2 x 2 = 4.", tipo: "balanza" },
            { elemento: "Verificación de Tanteo", ecuacion: "2Al(s) + 3Cl₂(g) → 2AlCl₃(s)", pregunta: "¿Esta ecuación del Aluminio se encuentra balanceada correctamente? (si / no)", r: "si", pista: "Cuenta: hay 2 Aluminios a cada lado y 6 Cloros a cada lado. Todo está simétrico. Escribe: si", tipo: "balanza" }
        ]
    },
    {
        id: 6,
        t: "Punto 6 y 7: Tanteo Avanzado y Redox",
        incisos: [
            { elemento: "Hierro Oxidado", ecuacion: "___ Fe + 3O₂ → 2Fe₂O₃", pregunta: "¿Qué número grande (coeficiente) debe ir frente al Hierro (Fe) para balancearlo?", r: "4", pista: "A la derecha tienes 2 x 2 = 4 Hierros. Por lo tanto, a la izquierda necesitas un 4. Digita el número.", tipo: "balanza" },
            { elemento: "Estados de Oxidación", ecuacion: "HNO₃ (Ácido Nítrico)", pregunta: "¿Con qué estado de oxidación trabaja el Nitrógeno (N) en el compuesto <b>HNO3</b>?", r: "+5", pista: "H vale +1 y tres Oxígenos valen -6. Para que sume cero, el del centro debe valer +5. Escribe el signo + seguido del número.", tipo: "recta" },
            { elemento: "Proceso de Reducción", ecuacion: "Mn⁺⁴ → Mn⁺²", pregunta: "Si el Manganeso disminuye su número de +4 a +2 en los productos, ¿se <b>oxida</b> o se <b>reduce</b>?", r: "reduce", pista: "Al disminuir su estado en la recta Redox significa que ganó cargas negativas. Escribe: reduce", tipo: "recta" }
        ]
    }
];

let puntoActual = 0;
let incisoActual = 0;

// Cuenta cuántos incisos hay en total en toda la app para calcular la barra de progreso
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
        ctx.beginPath(); ctx.arc(w/2, h/2, 40, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2, h/2, 65, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(w/2 + 40, h/2, 5, 0, Math.PI*2); ctx.fill();
    } 
    else if (tipoGrafico === "enlace") {
        ctx.strokeStyle = "#0d9488";
        ctx.beginPath(); ctx.arc(w/2 - 30, h/2, 30, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2 + 30, h/2, 30, 0, Math.PI*2); ctx.stroke();
        ctx.fillStyle = "#1e293b"; ctx.fillText("e-", w/2 - 4, h/2 - 5); ctx.fillText("e-", w/2 - 4, h/2 + 12);
    } 
    else if (tipoGrafico === "tubo" || tipoGrafico === "fuego") {
        ctx.strokeStyle = "#475569";
        ctx.beginPath(); ctx.moveTo(w/2 - 20, h*0.25); ctx.lineTo(w/2 - 20, h*0.65);
        ctx.arc(w/2, h*0.65, 20, Math.PI, 0, true); ctx.lineTo(w/2 + 20, h*0.25); ctx.stroke();
        ctx.fillStyle = tipoGrafico === "fuego" ? "#f43f5e" : "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h*0.65, 18, Math.PI, 0, true); ctx.closePath(); ctx.fill();
    } 
    else if (tipoGrafico === "balanza") {
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w/2, h*0.35); ctx.lineTo(w/2, h*0.75); ctx.stroke();
        ctx.lineWidth = 4; ctx.strokeStyle = "#0d9488"; ctx.beginPath(); ctx.moveTo(w*0.3, h*0.4); ctx.lineTo(w*0.7, h*0.4); ctx.stroke();
        ctx.lineWidth = 2; ctx.fillStyle = "#1e293b"; ctx.fillText("R", w*0.23, h*0.55); ctx.fillText("P", w*0.73, h*0.55);
    } 
    else { // recta Redox
        ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(w*0.15, h/2); ctx.lineTo(w*0.85, h/2); ctx.stroke();
        for(let i=0; i<=4; i++) {
            let xPos = w*0.2 + (i * (w*0.6/4));
            ctx.beginPath(); ctx.moveTo(xPos, h/2 - 5); ctx.lineTo(xPos, h/2 + 5); ctx.stroke();
        }
        ctx.fillStyle = "#ef4444"; ctx.fillText("Reducción ← | → Oxidación", w/2 - 70, h/2 - 20);
    }
}

function cambiarEjercicio() {
    // Al cambiar manualmente el selector superior, reiniciamos el inciso a cero
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
        <div style="color:#94a3b8; font-size:12px; font-weight:bold; margin-bottom:8px; text-transform: uppercase;">
            Inciso: ${inc.elemento}
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
    
    // Actualizar barra de progreso dinámicamente
    document.getElementById('avance').style.width = calcularProgresoActual() + "%";
    
    setTimeout(dibujarEsquemaQuimico, 50);
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
        // ¡RESPUESTA CORRECTA! Pasamos al siguiente estado del flujo
        incisoActual++;
        
        if (incisoActual < p.incisos.length) {
            // Caso A: Quedan más incisos en este mismo punto
            alert("¡Excelente Valentina! Inciso completado. Vamos con la siguiente fila de tu tabla.");
            cargarContenidoInciso();
        } else {
            // Caso B: Completó todos los incisos de este punto. Avanzamos de bloque.
            puntoActual++;
            incisoActual = 0;
            
            if (puntoActual < tallerQuimica.length) {
                alert("¡Fabuloso! Has completado todo este punto de la guía. Pasamos automáticamente al siguiente tema del taller.");
                // Sincronizar el menú desplegable visual de arriba
                document.getElementById('selector-ejercicio').value = puntoActual;
                cargarContenidoInciso();
            } else {
                // Caso C: Terminó todo el taller de química
                alert("¡Felicidades Valentina! Has completado todos los hitos y preparación de Química de tu Taller Teresiano.");
                puntoActual = 0; incisoActual = 0;
                document.getElementById('selector-ejercicio').value = 0;
                cargarContenidoInciso();
            }
        }
    } else {
        // RESPUESTA INCORRECTA: Desplegar pista sin bloquearla
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista de Apoyo de Laboratorio:</b><br>
            El dato no coincide. Revisa la ayuda de arriba: ${inc.pista}<br><br>
            <i>Verifica que no tengas espacios de más en tu respuesta.</i>
        `;
        
        setTimeout(() => {
            const contenedor = document.getElementById('interaccion');
            contenedor.scrollTo({ top: contenedor.scrollHeight, behavior: 'smooth' });
        }, 80);
    }
}

window.addEventListener('load', () => {
    cargarContenidoInciso();
    window.addEventListener('resize', dibujarEsquemaQuimico);
});
