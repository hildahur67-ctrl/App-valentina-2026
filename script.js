const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { id: 1, t: "Punto 1: Perímetro", d: "Suma las distancias entre A, B, C, D y E.", f: "d = √((x₂-x₁)² + (y₂-y₁)²)", p: [{n:'A',x:-4,y:2},{n:'B',x:-5,y:-2},{n:'C',x:1,y:-4},{n:'D',x:3,y:3},{n:'E',x:5,y:-1}] },
    { id: 2, t: "Punto 2: Diámetro AB", d: "Halla la ecuación de la circunferencia.", f: "Centro = Punto Medio | Radio = d/2", p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}] },
    { id: 3, t: "Punto 3: Ec. General", d: "Pasa a canónica completando cuadrados.", f: "(x-h)² + (y-k)² = r²", p: [{n:'C',x:5,y:6}] },
    { id: 4, t: "Punto 4: Segmentos", d: "Calcula la longitud de AD y CA.", f: "d = √((x₂-x₁)² + (y₂-y₁)²)", p: [{n:'D',x:-2,y:2},{n:'A',x:3,y:3},{n:'C',x:2,y:-2}] },
    { id: 5, t: "Punto 5: Ec. Canónica", d: "C(-3,8) y r=2.5.", f: "(x-h)² + (y-k)² = r²", p: [{n:'C',x:-3,y:8}] },
    { id: 6, t: "Punto 6: Triángulos", d: "¿Es Isósceles? Calcula AB, BC y CA.", f: "Calcula 3 distancias", p: [{n:'A',x:-1,y:2},{n:'B',x:-2,y:5},{n:'C',x:-4,y:1}] },
    { id: 7, t: "Punto 7: Triángulo DEF", d: "Calcula el perímetro de D, E y F.", f: "P = d(DE)+d(EF)+d(FD)", p: [{n:'D',x:6,y:5},{n:'E',x:3,y:7},{n:'F',x:2,y:-1}] },
    { id: 8, t: "Punto 8: Centro/Radio", d: "(x+3.5)²+(y+6.9)² = 121", f: "Radio = √121 = 11", p: [{n:'C',x:-3.5,y:-6.9}] },
    { id: 9, t: "Punto 9: Trazo 1.6", d: "Centro (-1,0) y radio 1.6 cm.", f: "Dibuja con compás", p: [{n:'C',x:-1,y:0}] },
    { id: 10, t: "Punto 10: Trazo 2.0", d: "Centro (-5,-2.5) y radio 2 cm.", f: "Dibuja con compás", p: [{n:'C',x:-5,y:-2.5}] }
];

let ejActual = 0;
let escala, centroX, centroY;

function dibujarPlano() {
    // Forzamos dimensiones manuales si el contenedor falla
    canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement.clientHeight || 300;
    
    centroX = canvas.width / 2;
    centroY = canvas.height / 2;
    escala = Math.min(canvas.width, canvas.height) / 22;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujo de Cuadrícula
    ctx.setLineDash([]);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for(let i=-20; i<=20; i++) {
        ctx.beginPath(); ctx.moveTo(centroX + i*escala, 0); ctx.lineTo(centroX + i*escala, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, centroY + i*escala); ctx.lineTo(canvas.width, centroY + i*escala); ctx.stroke();
    }
    
    // Ejes
    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX, 0); ctx.lineTo(centroX, canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, centroY); ctx.lineTo(canvas.width, centroY); ctx.stroke();

    // Puntos del Taller
    const puntos = taller[ejActual].p;
    puntos.forEach(p => {
        const px = centroX + (p.x * escala);
        const py = centroY - (p.y * escala);
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#1e293b';
        ctx.font = "bold 11px Arial";
        ctx.fillText(`${p.n}`, px+5, py-5);
    });
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    if (!selector) return;
    ejActual = parseInt(selector.value);
    const e = taller[ejActual];
    
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#3b82f6; font-weight:bold;">${e.t}</div>
        <p style="margin:5px 0;">${e.d}</p>
        <div style="background:#f1f5f9; padding:5px; border-radius:4px; font-family:monospace; font-size:12px;">Fórmula: ${e.f}</div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    dibujarPlano();
}

function verificarRespuesta() {
    document.getElementById('explicacion-zona').style.display = "block";
    document.getElementById('texto-explicativo').innerHTML = `
        <b>Guía Visual:</b> Usa la fórmula ${taller[ejActual].f} con los puntos rojos del plano. 
    `;
    
    // Dibujo de ayuda (Pitágoras)
    if (taller[ejActual].p.length >= 2) {
        const p1 = taller[ejActual].p[0];
        const p2 = taller[ejActual].p[1];
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(centroX + p1.x*escala, centroY - p1.y*escala);
        ctx.lineTo(centroX + p2.x*escala, centroY - p1.y*escala);
        ctx.lineTo(centroX + p2.x*escala, centroY - p2.y*escala);
        ctx.stroke();
    }
}

// Inicialización segura
window.addEventListener('load', () => {
    cambiarEjercicio();
});
window.addEventListener('resize', dibujarPlano);
