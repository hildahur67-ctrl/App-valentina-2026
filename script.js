const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { 
        id: 1, 
        titulo: "Puntos 1, 4, 6 y 7: Distancia y Perímetro",
        desc: "Halla la distancia entre puntos para calcular perímetros o tipos de triángulos[cite: 9, 51, 52].",
        formula: "d = √((x₂ - x₁)² + (y₂ - y₁)²)",
        p: [{n:'A',x:-4,y:2},{n:'D',x:3,y:3}]
    },
    { 
        id: 3, 
        titulo: "Punto 3: Ecuación General a Canónica",
        desc: "Transforma x² + y² + Dx + Ey + F = 0 para hallar el Centro (h, k) y el Radio (r)[cite: 25].",
        formula: "(x - h)² + (y - k)² = r²",
        p: [{n:'Centro',x:5,y:6}] // Ejemplo de la ecuación 3.a
    },
    { 
        id: 2, 
        titulo: "Puntos 2, 5, 8 y 10: Ecuación de la Circunferencia",
        desc: "Encuentra la ecuación usando el centro y el radio o el diámetro[cite: 23, 43, 64, 75].",
        formula: "(x - h)² + (y - k)² = r²",
        p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}]
    }
];

let ejActual = 0;
let escala, centroX, centroY;

function dibujarPlano() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth * 0.95;
    canvas.height = parent.clientHeight * 0.95;
    centroX = canvas.width / 2; centroY = canvas.height / 2;
    escala = Math.min(canvas.width, canvas.height) / 22;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Cuadrícula y Ejes
    ctx.strokeStyle = '#f0f0f0'; ctx.lineWidth = 1;
    for(let i=-20; i<=20; i++) {
        ctx.beginPath(); ctx.moveTo(centroX+i*escala,0); ctx.lineTo(centroX+i*escala,canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,centroY+i*escala); ctx.lineTo(canvas.width,centroY+i*escala); ctx.stroke();
    }
    ctx.strokeStyle = '#34495e'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX,0); ctx.lineTo(centroX,canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,centroY,canvas.width,centroY); ctx.stroke();

    // Puntos
    taller[ejActual].p.forEach(p => {
        const px = centroX + (p.x * escala); const py = centroY - (p.y * escala);
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#2c3e50'; ctx.font = "bold 12px Arial";
        ctx.fillText(`${p.n}(${p.x},${p.y})`, px+10, py-10);
    });

    // Si es ejercicio de circunferencia, dibujar el círculo guía
    if(ejActual === 1) {
        ctx.strokeStyle = 'rgba(52, 152, 219, 0.3)';
        ctx.beginPath();
        ctx.arc(centroX + (5 * escala), centroY - (6 * escala), 9 * escala, 0, Math.PI*2);
        ctx.stroke();
    }
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    ejActual = parseInt(selector.value);
    const ejercicio = taller[ejActual];

    document.getElementById('instruccion').innerHTML = `
        <div style="color:#2c3e50; font-weight:bold; border-bottom: 2px solid #3498db; margin-bottom:8px;">${ejercicio.titulo}</div>
        <p style="font-size:13px; margin:5px 0;">${ejercicio.desc}</p>
        <div style="background:#e8f4f8; padding:10px; border-radius:5px; font-family: 'Courier New', monospace; font-size:14px; text-align:center;">
            ${ejercicio.formula}
        </div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    dibujarPlano();
}

function verificarRespuesta() {
    const zona = document.getElementById('explicacion-zona');
    zona.style.display = "block";
    const texto = document.getElementById('texto-explicativo');

    if(ejActual === 1) { // Explicación para Punto 3
        texto.innerHTML = `
            <b>Paso a Paso (Punto 3.a):</b><br>
            1. Agrupa: (x² - 10x) + (y² - 12y) = -20<br>
            2. Completa cuadrados: (10/2)² = <b>25</b> y (12/2)² = <b>36</b><br>
            3. Suma a ambos lados: ... = -20 + 25 + 36 = <b>41</b><br>
            4. Ecuación: (x - 5)² + (y - 6)² = 41<br>
            <b>Centro: (5, 6) | Radio: √41 ≈ 6.4</b>
        `;
    } else {
        texto.innerHTML = `Usa la fórmula: <b>${taller[ejActual].formula}</b>. Revisa los puntos en el plano y calcula con cuidado.`;
    }
}

window.onload = cambiarEjercicio;
window.onresize = dibujarPlano;
