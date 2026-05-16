const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { 
        id: 1, 
        t: "1. De Radianes a Grados (Pasteles y Porciones)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina que un pastel equivale a 180° y los matemáticos lo llaman <b>π (Pi)</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Para pasar a grados, cambiamos la letra <b>π</b> por <b>180°</b>.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el problema fuera convertir 5π/2 rad:</i><br>
            • Paso 1: Cambias π por 180 -> 5 * 180 = 900.<br>
            • Paso 2: Divides entre el de abajo (2) -> 900 / 2 = <b>450°</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Ahora sigue el mismo orden en tu calculadora para <b>17π/3</b>.`, 
        f: "Grados = (17 * 180) / 3", 
        r: 1020 
    },
    { 
        id: 2, 
        t: "2. El Reloj de la Rueda Mecánica", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Una vuelta completa a un círculo mide siempre <b>2π radianes</b> (6.28 unidades).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Hallamos las vueltas de todo el tiempo y las multiplicamos por 2π.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si una rueda diera 50 vueltas/min durante 3 minutos:</i><br>
            • Paso 1: Vueltas totales -> 50 vueltas * 3 min = 150 vueltas.<br>
            • Paso 2: Multiplicas por 2π -> 150 * 2 * 3.14159 = <b>942.47 rad</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden para tu rueda de <b>110 vueltas/min durante 5 minutos</b>.`, 
        f: "Radianes = (110 * 5) * 2 * 3.14159", 
        r: 3455.75 
    },
    { 
        id: 3, 
        t: "3. La Rampa de las Cajas (Banda Transportadora)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Una rampa inclinada (Hipotenusa) y una altura vertical (Cateto Opuesto).<br><br>
            <b>🛠️ 2. La Estrategia:</b> La Tangente necesita la Altura y el Suelo. Usamos Pitágoras para hallar el suelo primero.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si la rampa midiera 10 m y subiera 2 m:</i><br>
            • Paso 1: Hallar el suelo -> √(10² - 2²) = √(100 - 4) = √96 = 9.79 m.<br>
            • Paso 2: Dividir Altura / Suelo -> 2 / 9.79 = <b>0.20</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>Rampa de 12 m y Altura de 1.5 m</b>.`, 
        f: "Tan(θ) = 1.5 / √(12² - 1.5²)", 
        r: 0.13 
    },
    { 
        id: 4, 
        t: "4. El Observador en la Azotea (Ángulo de Depresión)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> El ángulo de mirar hacia abajo (depresión) es igual al ángulo de mirar hacia arriba desde el carro.<br><br>
            <b>🛠️ 2. La Estrategia:</b> La Tangente une la Altura del edificio con la distancia horizontal (X) del suelo.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el edificio midiera 30 m y el ángulo fuera de 15°:</i><br>
            • Paso 1: Planteas -> X = 30 / Tan(15°).<br>
            • Paso 2: Calculas Tan(15°) = 0.2679.<br>
            • Paso 3: Divides -> 30 / 0.2679 = <b>111.98 m</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>Edificio de 45 m y Ángulo de 20°</b>.`, 
        f: "X = 45 / Tan(20°)", 
        r: 123.63 
    },
    { 
        id: 5, 
        t: "5. El Rompecabezas del Cuadrilátero ABCD", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Dos triángulos rectángulos pegados por una pared interna diagonal.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Usamos Pitágoras en cadena para hallar los lados que faltan y sumamos los bordes de afuera.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si los lados conocidos midieran 2 cm en lugar de 1 cm:</i><br>
            • Paso 1: Pared del medio -> √(2² + 2²) = √8 = 2.82 cm.<br>
            • Paso 2: Lado superior -> √((2.82)² + 2²) = √(8 + 4) = √12 = 3.46 cm.<br>
            • Paso 3: Sumar bordes externos -> 2 + 2 + 3.46 + 2 = <b>9.46 cm</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden usando los datos reales de tu hoja donde <b>los lados miden 1 cm</b>.`, 
        f: "Perímetro = 1 + 1 + 1.41 + 1", 
        r: 4.14 
    },
    { 
        id: 6, 
        t: "6. El Terreno Dividido (Área de la Figura 3)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Dos triángulos recostados sobre una misma pared vertical central (la altura).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Calculamos la altura y las bases usando Seno y Coseno, sacamos las áreas y las sumamos.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Imagina que las rampas midieran 12 y 6 con los mismos ángulos:</i><br>
            • Paso 1: Altura central -> Lado * Sen(ángulo).<br>
            • Paso 2: Bases del suelo -> Lado * Cos(ángulo).<br>
            • Paso 3: Área total aplicando (Base * Altura)/2 a cada uno y sumando.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue los pasos con tus datos reales: <b>Rampas de 10 y 8 con ángulos de 60° y 45°</b>.`, 
        f: "Área = 41.57", 
        r: 41.57 
    },
    { 
        id: 7, 
        t: "7. El Estudiante que Camina (Doble Elevación)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Miras un punto alto, caminas hacia adelante y el ángulo de visión aumenta.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Aplicamos la fórmula de división de tangentes usando la distancia que se avanzó.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si caminaras 10 metros y los ángulos fueran de 30° y 45°:</i><br>
            • Paso 1: Arriba -> 10 * Tan(30°) * Tan(45°) = 10 * 0.577 * 1 = 5.77.<br>
            • Paso 2: Abajo -> Tan(45°) - Tan(30°) = 1 - 0.577 = 0.423.<br>
            • Paso 3: Divides -> 5.77 / 0.423 = <b>13.64 m</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>Caminas 20 metros, Ángulos de 30° y 60°</b>.`, 
        f: "h = (20 * Tan(30°) * Tan(60°)) / (Tan(60°) - Tan(30°))", 
        r: 17.32 
    },
    { 
        id: 8, 
        t: "8. El Avión Perdido (Ley de Coseno)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Un triángulo abierto formado por el camino correcto, el desviado y la distancia restante.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Hallamos los km del desvío y aplicamos la Ley de Coseno para cerrar el triángulo.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el avión viajara a 400 km/h y se descubriera el error a los 15 minutos (0.25 horas):</i><br>
            • Paso 1: Km errados -> 400 * 0.25 = 100 km.<br>
            • Paso 2: Aplicas Ley de Coseno con los km errados, la distancia original y el ángulo del error.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el orden: Tu avión va a <b>600 km/h y se descubre a los 10 minutos (100 km errados), con ángulo de 10°</b>.`, 
        f: "Distancia = √(100² + 1073² - 2*100*1073*Cos(10°))", 
        r: 974.25 
    },
    { 
        id: 9, 
        t: "9. Terapia Física (Altura de la Pierna)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> La pierna levantada es la Hipotenusa y el suelo es la base. Buscamos la altura vertical.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como buscamos el Cateto Opuesto, la herramienta correcta es la función <b>SENO</b>.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si la pierna midiera 25 pulgadas y se levantara a 30°:</i><br>
            • Paso 1: Operación -> 25 * Seno(30°).<br>
            • Paso 2: Buscas Seno(30°) en la calculadora (es 0.5).<br>
            • Paso 3: Multiplicas -> 25 * 0.5 = <b>12.5 pulgadas</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>Pierna de 30 pulgadas levantada a 60°</b>.`, 
        f: "Altura = 30 * Seno(60°)", 
        r: 25.98 
    },
    { 
        id: 10, 
        t: "10. El Triángulo Torcido ABC (Ley de Seno)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Un triángulo oblicuángulo donde conocemos ángulos y lados opuestos cruzados.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Usamos la Ley de Seno multiplicando el lado por el seno opuesto y dividiendo.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el lado c midiera 10 m, el ángulo C fuera 80° y el ángulo B fuera 30°:</i><br>
            • Paso 1: Planteas -> Lado b = (10 * Seno(30°)) / Seno(80°).<br>
            • Paso 2: Calculas arriba -> 10 * 0.5 = 5.<br>
            • Paso 3: Divides entre Seno(80°) -> 5 / 0.9848 = <b>5.07 m</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>lado c = 6m, Ángulo B = 45°, Ángulo C = 105°</b>.`, 
        f: "b = (6 * Seno(45°)) / Seno(105°)", 
        r: 4.39 
    }
];

let ejActual = 0;

function dibujarEsquema() {
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h); ctx.lineWidth = 3; ctx.font = "bold 13px Arial";

    if (ejActual === 0 || ejActual === 1) {
        ctx.strokeStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 35, 0, Math.PI*2); ctx.stroke();
    } else if (ejActual === 2 || ejActual === 3 || ejActual === 8) {
        ctx.strokeStyle = "#0ea5e9";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.7); ctx.lineTo(w*0.7, h*0.7); ctx.lineTo(w*0.7, h*0.35); ctx.closePath(); ctx.stroke();
    } else if (ejActual === 4) {
        ctx.strokeStyle = "#f43f5e";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.65); ctx.lineTo(w*0.7, h*0.65); ctx.lineTo(w*0.7, h*0.35); ctx.lineTo(w*0.3, h*0.35); ctx.closePath(); ctx.stroke();
    } else {
        ctx.strokeStyle = "#10b981";
        ctx.beginPath(); ctx.moveTo(w*0.2, h*0.7); ctx.lineTo(w*0.8, h*0.7); ctx.lineTo(w*0.5, h*0.35); ctx.closePath(); ctx.stroke();
    }
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0ea5e9; font-size:15px; font-weight:bold; border-bottom: 2px solid #e2e8f0; padding-bottom:4px; margin-bottom:10px;">
            ${e.t}
        </div>
        <div style="font-size:13.5px; color:#334155; line-height:1.5; margin-bottom:12px; text-align:left;">
            ${e.d}
        </div>
    `;
    
    document.getElementById('zona-solucion-reto').style.display = "none";
    document.getElementById('btn-entendido').style.display = "block";
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    dibujarEsquema();
}

function activarModoReto() {
    document.getElementById('btn-entendido').style.display = "none";
    document.getElementById('zona-solucion-reto').style.display = "block";
}

function verificarRespuesta() {
    const rU = parseFloat(document.getElementById('resultado-usuario').value);
    const e = taller[ejActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (Math.abs(rU - e.r) < 2.0) {
        alert("¡Excelente Valentina! Comprendiste el concepto y la matemática.");
        document.getElementById('avance').style.width = ((ejActual + 1) * 10) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista de Apoyo:</b><br>
            El resultado no coincide. Mira de nuevo el <b>Ejemplo Guía</b> de arriba. Sigue exactamente el mismo orden de los pasos pero usando los números de tu reto. ¡Tú puedes!
        `;
    }
}

window.addEventListener('load', cambiarEjercicio);
window.addEventListener('resize', dibujarEsquema);
