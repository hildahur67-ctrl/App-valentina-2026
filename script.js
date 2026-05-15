const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

// Base de datos del Taller Teresiano
const taller = [
    { 
        id: 1, 
        titulo: "Distancia y Perímetro",
        desc: "Punto 1: Hallar el perímetro del polígono sumando las distancias entre sus puntos.",
        formula: "d = √((x₂ - x₁)² + (y₂ - y₁)²)",
        p: [{n:'A',x:-4,y:2},{n:'B',x:-5,y:-2},{n:'C',x:1,y:-4},{n:'D',x:3,y:3},{n:'E',x:5,y:-1}]
    },
    { 
        id: 2, 
        titulo: "Punto Medio (Centro)",
        desc: "Punto 2: Para la ecuación de la circunferencia, primero halla el centro (Punto Medio).",
        formula: "Pm = ((x₁+x₂)/2 , (y₁+y₂)/2)",
        p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}]
    },
    { 
        id: 6, 
        titulo: "Clasificación de Triángulos",
        desc: "Punto 6: Calcula las 3 distancias. Si todas son iguales es Equilátero, si hay 2 es Isósceles.",
        formula: "Comparar d(AB), d(BC) y d(CA)",
        p: [{n:'A',x:-1,y:2},{n:'B',x:-2,y:5},{n:'C',x:-4,y:1}]
    },
    { 
        id: 9, 
        titulo: "Trazo de Circunferencia",
        desc: "Punto 9: Ubica el centro y abre el compás según el radio indicado.",
        formula: "(x - h)² + (y - k)² = r²",
        p: [{n:'C',x:-1,y:0}] // Radio 1.6 unidades
    }
];

let ejActual = 0;
let escala, centroX, centroY;

function dibujarPlano() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth * 0.95;
    canvas.height = parent.clientHeight * 0.95;
    centroX = canvas.width / 2; centroY = canvas.height / 2;
    escala = Math.min(canvas.width, canvas.height) / 20;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Cuadrícula y Ejes
    ctx.strokeStyle = '#f0f0f0'; ctx.lineWidth = 1;
    for(let i=-20; i<=20; i++) {
        ctx.beginPath(); ctx.moveTo(centroX+i*escala,0); ctx.lineTo(centroX+i*escala,canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,centroY+i*escala); ctx.lineTo(canvas.width,centroY+i*escala); ctx.stroke();
    }
    ctx.strokeStyle = '#34495e'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX,0); ctx.lineTo(centroX,canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,centroY); ctx.lineTo(canvas.width,centroY); ctx.stroke();

    // Dibujar puntos del ejercicio actual
    taller[ejActual].p.forEach(p => {
        const px = centroX + (p.x * escala); const py = centroY - (p.y * escala);
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#2c3e50'; ctx.font = "bold 12px Arial";
        ctx.fillText(`${p.n}(${p.x},${p.y})`, px+8, py-8);
    });
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    ejActual = parseInt(selector.value);
    const ejercicio = taller[ejActual];

    // Actualizar Panel de Instrucciones con Fórmulas
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#2c3e50; border-bottom: 2px solid #3498db; margin-bottom:10px; padding-bottom:5px;">
            ${ejercicio.titulo}
        </div>
        <p>${ejercicio.desc}</p>
        <div style="background:#e8f4f8; padding:8px; border-radius:5px; font-family: monospace; font-size:12px;">
            <b>Fórmula:</b> ${ejercicio.formula}
        </div>
    `;
    
    document.getElementById('explicacion-zona').style.display = "none";
    dibujarPlano();
}

function verificarRespuesta() {
    // Lógica de validación (se mantiene similar para no confundir)
    const zona = document.getElementById('explicacion-zona');
    zona.style.display = "block";
    document.getElementById('texto-explicativo').innerHTML = `
        <b>¡Valentina!</b> Recuerda usar la fórmula:<br>
        ${taller[ejActual].formula}<br>
        Reemplaza los valores de los puntos rojos que ves en el plano.
    `;
    dibujarAyudaVisual();
}

function dibujarAyudaVisual() {
    dibujarPlano();
    const p1 = taller[ejActual].p[0]; const p2 = taller[ejActual].p[1];
    if(!p2) return;
    const x1 = centroX + p1.x*escala; const y1 = centroY - p1.y*escala;
    const x2 = centroX + p2.x*escala; const y2 = centroY - p2.y*escala;

    ctx.setLineDash([5, 5]); ctx.strokeStyle = "#ff0000"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y1); ctx.lineTo(x2, y2); ctx.stroke();
}

window.onload = cambiarEjercicio;
window.onresize = dibujarPlano;
