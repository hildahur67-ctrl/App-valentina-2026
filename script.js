const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { id: 1, t: "Distancia", d: "Punto 1: Perímetro del Polígono. Calcula d(AB), d(BC), d(CD), d(DE) y d(EA).", f: "d = √((x₂-x₁)² + (y₂-y₁)²)", p: [{n:'A',x:-4,y:2},{n:'B',x:-5,y:-2},{n:'C',x:1,y:-4},{n:'D',x:3,y:3},{n:'E',x:5,y:-1}] },
    { id: 2, t: "Punto Medio", d: "Punto 2: Halla el centro de la circunferencia con diámetro A(1,6) y B(13,8).", f: "M = ((x₁+x₂)/2 , (y₁+y₂)/2)", p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}] },
    { id: 3, t: "Completar Cuadrados", d: "Punto 3: Pasa x²+y²-10x-12y+20=0 a canónica.", f: "(x-h)² + (y-k)² = r²", p: [{n:'C',x:5,y:6}] },
    { id: 4, t: "Distancia AD", d: "Punto 4: Según el plano, calcula la longitud del segmento AD.", f: "d = √((x₂-x₁)² + (y₂-y₁)²)", p: [{n:'D',x:-2,y:2},{n:'A',x:3,y:3}] },
    { id: 5, t: "Ec. Canónica", d: "Punto 5: Halla la ecuación con C(-3,8) y r=2.5.", f: "(x-h)² + (y-k)² = r²", p: [{n:'C',x:-3,y:8}] },
    { id: 6, t: "Triángulos", d: "Punto 6: ¿Es Isósceles o Equilátero? Calcula AB, BC y CA.", f: "Distancias Iguales = Tipo", p: [{n:'A',x:-1,y:2},{n:'B',x:-2,y:5},{n:'C',x:-4,y:1}] },
    { id: 7, t: "Perímetro DEF", d: "Punto 7: Determina el perímetro de D(6,5), E(3,7) y F(2,-1).", f: "P = d(DE)+d(EF)+d(FD)", p: [{n:'D',x:6,y:5},{n:'E',x:3,y:7},{n:'F',x:2,y:-1}] },
    { id: 8, t: "Radio", d: "Punto 8: Escribe el radio de (x-8)²+(y-1)² = √156.", f: "r² = Valor final", p: [{n:'C',x:8,y:1}] },
    { id: 9, t: "Trazo 1.6", d: "Punto 9: Traza la circunferencia con Centro (-1,0) y radio 1.6.", f: "Radio = 1.6 cm", p: [{n:'C',x:-1,y:0}] },
    { id: 10, t: "Trazo 2.0", d: "Punto 10: Centro (-5,-2.5) y radio 2 unidades.", f: "Radio = 2.0 cm", p: [{n:'C',x:-5,y:-2.5}] }
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
    ctx.strokeStyle = '#f0f0f0';
    for(let i=-20; i<=20; i++) {
        ctx.beginPath(); ctx.moveTo(centroX+i*escala,0); ctx.lineTo(centroX+i*escala,canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,centroY+i*escala); ctx.lineTo(canvas.width,centroY+i*escala); ctx.stroke();
    }
    ctx.strokeStyle = '#2c3e50'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX,0); ctx.lineTo(centroX,canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,centroY); ctx.lineTo(canvas.width,centroY); ctx.stroke();

    taller[ejActual].p.forEach(p => {
        const px = centroX + (p.x * escala); const py = centroY - (p.y * escala);
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#2c3e50'; ctx.font = "bold 12px Arial";
        ctx.fillText(`${p.n}(${p.x},${p.y})`, px+8, py-8);
    });
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    document.getElementById('instruccion').innerHTML = `
        <div style="font-weight:bold; color:#3498db;">${e.t}</div>
        <p style="font-size:13px;">${e.d}</p>
        <div style="background:#f4f7f6; padding:8px; border-radius:4px; font-family:monospace;">Fórmula: ${e.f}</div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    dibujarPlano();
}

function verificarRespuesta() {
    const zona = document.getElementById('explicacion-zona');
    zona.style.display = "block";
    document.getElementById('texto-explicativo').innerHTML = `
        <b>Guía Visual:</b><br>
        Usa los puntos rojos para aplicar: ${taller[ejActual].f}.<br>
        Recuerda que para el colegio debes mostrar el procedimiento completo.
    `;
    // Dibujar ayuda visual (triángulo de Pitágoras) entre los primeros dos puntos
    if(taller[ejActual].p.length >= 2) {
        const p1 = taller[ejActual].p[0]; const p2 = taller[ejActual].p[1];
        ctx.setLineDash([5, 5]); ctx.strokeStyle = "#ff0000"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(centroX+p1.x*escala, centroY-p1.y*escala);
        ctx.lineTo(centroX+p2.x*escala, centroY-p1.y*escala);
        ctx.lineTo(centroX+p2.x*escala, centroY-p2.y*escala); ctx.stroke();
    }
}

window.onload = cambiarEjercicio;
window.onresize = dibujarPlano;
