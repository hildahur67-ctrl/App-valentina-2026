const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { 
        id: 1, 
        t: "1. Conversión de Ángulos", 
        d: "<b>Explicación paso a paso:</b> Un círculo completo equivale a 360° o a 2π radianes. Por lo tanto, un solo π equivale a media vuelta (180°). Para pasar de radianes a grados, simplemente cambiamos el símbolo π por 180° y hacemos la multiplicación.", 
        f: "Grados = (Numerador * 180) / Denominador", 
        r: 1020 
    },
    { 
        id: 2, 
        t: "2. Movimiento Circular (Rueda)", 
        d: "<b>Explicación paso a paso:</b> Cada vez que una rueda da una vuelta completa, recorre un ángulo de 2π radianes (aproximadamente 6.28). Si conocemos cuántas vueltas da en un minuto, multiplicamos por los 5 minutos totales para saber las vueltas de todo el viaje, y luego multiplicamos por 2π.", 
        f: "Radianes totales = Vueltas por minuto * Minutos * 2 * 3.1416", 
        r: 3455.75 
    },
    { 
        id: 3, 
        t: "3. Rampa de la Banda Transportadora", 
        d: "<b>Explicación paso a paso:</b> La banda forma un triángulo rectángulo con el suelo. La longitud de la rampa (12 m) es la hipotenusa y la altura (1.5 m) es el cateto opuesto. Para hallar la TANGENTE, primero necesitamos descubrir el cateto adyacente (el suelo) usando el Teorema de Pitágoras.", 
        f: "1° Suelo = √(12² - 1.5²) | 2° Tangente = Altura / Suelo", 
        r: 0.13 
    },
    { 
        id: 4, 
        t: "4. Ángulo de Depresión (Edificio y Carro)", 
        d: "<b>Explicación paso a paso:</b> El ángulo de depresión se mide desde los ojos del observador hacia abajo. Por una regla geométrica llamada 'ángulos alternos internos', el ángulo de depresión desde la azotea (20°) es exactamente igual al ángulo de elevación si miráramos desde el carro hacia arriba. Usamos la tangente para hallar la distancia horizontal X.", 
        f: "Distancia X = Altura del edificio / Tan(20°)", 
        r: 123.63 
    },
    { 
        id: 5, 
        t: "5. Perímetro del Cuadrilátero ABCD", 
        d: "<b>Explicación paso a paso:</b> Esta figura está armada por dos triángulos rectángulos unidos por una pared interna (diagonal). Primero aplicamos Pitágoras en el triángulo de abajo para hallar esa pared interna. Con ese dato, aplicamos Pitágoras en el triángulo de arriba para hallar el último lado exterior. Al final, sumamos los 4 lados de afuera.", 
        f: "Hipotenusa = √(Lado₁² + Lado₂²) | Perímetro = Suma de los 4 lados exteriores", 
        r: 4.14 
    },
    { 
        id: 6, 
        t: "6. Área con Ángulos Especiales", 
        d: "<b>Explicación paso a paso:</b> Para hallar el área total de esta figura, la dividimos en dos triángulos separados por la línea recta del medio (la altura). Usamos las razones de Seno y Coseno con los ángulos de 60° y 45° para hallar las bases y alturas de ambos, y luego calculamos sus áreas.", 
        f: "Área de cada triángulo = (Base * Altura) / 2", 
        r: 41.57 
    },
    { 
        id: 7, 
        t: "7. Altura del Edificio (Doble Ángulo)", 
        d: "<b>Explicación paso a paso:</b> El estudiante mira el techo desde dos distancias diferentes. Al avanzar 20 metros, el ángulo cambia de 30° a 60°. Esto genera un sistema de dos triángulos donde la altura 'h' es compartida. Aplicamos una fórmula directa derivada de las tangentes para encontrar la altura exacta.", 
        f: "Altura h = (Distancia caminada * Tan(30°) * Tan(60°)) / (Tan(60°) - Tan(30°))", 
        r: 17.32 
    },
    { 
        id: 8, 
        t: "8. Error de Curso en el Vuelo", 
        d: "<b>Explicación paso a paso:</b> El avión vuela en línea recta durante 10 minutos a 600 km/h antes de notar el error, lo que significa que recorrió 100 km en la dirección equivocada. Esto forma un triángulo 'torcido' (oblicuángulo) donde conocemos dos lados (100 km y 1073 km) y el ángulo del error (10°). Usamos la Ley de Coseno para hallar la distancia que falta.", 
        f: "Distancia² = Lado₁² + Lado₂² - (2 * Lado₁ * Lado₂ * Cos(10°))", 
        r: 974.25 
    },
    { 
        id: 9, 
        t: "9. Altura de la Pierna del Paciente", 
        d: "<b>Explicación paso a paso:</b> La pierna levantada forma una rampa (hipotenusa de 30 pulgadas). El suelo es la base y la altura del pie es el cateto opuesto al ángulo de 60°. Como la relación que conecta al cateto opuesto con la hipotenusa es el SENO, usamos esta función para despejar la altura.", 
        f: "Altura del pie = Longitud de la pierna * Seno(60°)", 
        r: 25.98 
    },
    { 
        id: 10, 
        t: "10. Lado 'b' del Triángulo ABC (Ley de Seno)", 
        d: "<b>Explicación paso a paso:</b> En este ejercicio tenemos un triángulo donde no hay esquinas rectas de 90°. Cuando conocemos dos ángulos y un lado, la herramienta matemática perfecta es la Ley de Seno, que nos dice que cada lado es proporcional al seno de su ángulo opuesto.", 
        f: "Lado b = (Lado c * Seno(B)) / Seno(C)", 
        r: 4.39 
    }
];

let ejActual = 0;

function dibujarEsquema() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    ctx.lineWidth = 3;
    ctx.font = "bold 13px Arial";

    if (ejActual === 0 || ejActual === 1) { // Circunferencia / Giros
        ctx.strokeStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 45, 0, Math.PI*2); ctx.stroke();
        ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(w/2, h/2, 5, 0, Math.PI*2); ctx.fill();
    } 
    else if (ejActual === 2 || ejActual === 3 || ejActual === 8) { // Triángulos Rectángulos
        ctx.strokeStyle = "#0ea5e9";
        ctx.beginPath();
        ctx.moveTo(w*0.25, h*0.75);
        ctx.lineTo(w*0.75, h*0.75);
        ctx.lineTo(w*0.75, h*0.25);
        ctx.closePath(); ctx.stroke();
        ctx.fillStyle = "#1e293b";
        ctx.fillText("θ", w*0.32, h*0.72);
    }
    else if (ejActual === 4) { // Cuadrilátero ABCD pegado
        ctx.strokeStyle = "#f43f5e";
        ctx.beginPath();
        ctx.moveTo(w*0.25, h*0.65); // D
        ctx.lineTo(w*0.75, h*0.65); // A
        ctx.lineTo(w*0.75, h*0.25); // B
        ctx.lineTo(w*0.2, h*0.25);  // C
        ctx.closePath(); ctx.stroke();
        // Línea divisoria interna (Pared de ayuda)
        ctx.setLineDash([3, 3]); ctx.strokeStyle = "#cbd5e1";
        ctx.beginPath(); ctx.moveTo(w*0.25, h*0.65); ctx.lineTo(w*0.75, h*0.25); ctx.stroke();
        ctx.setLineDash([]);
    }
    else { // Triángulos Oblicuángulos generales (Leyes de Seno/Coseno)
        ctx.strokeStyle = "#10b981";
        ctx.beginPath();
        ctx.moveTo(w*0.2, h*0.7);
        ctx.lineTo(w*0.8, h*0.7);
        ctx.lineTo(w*0.45, h*0.3);
        ctx.closePath(); ctx.stroke();
    }
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    
    // RENDERIZADO PRIORITARIO: Explicación arriba, fórmula abajo
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0ea5e9; font-size:15px; font-weight:bold; border-bottom: 2px solid #e2e8f0; padding-bottom:4px; margin-bottom:8px;">
            ${e.t}
        </div>
        <div style="font-size:13px; color:#334155; line-height:1.45; margin-bottom:10px; text-align:justify;">
            ${e.d}
        </div>
        <div style="background:#f1f5f9; padding:8px; border-radius:6px; font-family:monospace; font-size:12px; color:#0f172a; text-align:center; border: 1px solid #cbd5e1;">
            <b>Fórmula de Trabajo:</b><br>${e.f}
        </div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    dibujarEsquema();
}

function verificarRespuesta() {
    const rU = parseFloat(document.getElementById('resultado-usuario').value);
    const e = taller[ejActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (Math.abs(rU - e.r) < 2.0) {
        alert("¡Excelente Valentina! Comprendes la lógica de este ejercicio.");
        document.getElementById('avance').style.width = ((ejActual + 1) * 10) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>¡Pista de apoyo para el examen!</b><br>
            Lee de nuevo la explicación de arriba con cuidado. Verifica que los datos que pusiste en la calculadora coincidan con la estructura de la fórmula.<br><br>
            <i>Consejo: Realiza las operaciones del paréntesis primero.</i>
        `;
        
        setTimeout(() => {
            const contenedor = document.getElementById('interaccion');
            contenedor.scrollTo({ top: contenedor.scrollHeight, behavior: 'smooth' });
        }, 80);
    }
}

window.addEventListener('load', cambiarEjercicio);
window.addEventListener('resize', dibujarEsquema);
