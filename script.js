const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { id: 1, t: "Punto 1: Perímetro", d: "Suma las distancias entre A, B, C, D y E.", f: "d = √((x₂-x₁)² + (y₂-y₁)²)", p: [{n:'A',x:-4,y:2},{n:'B',x:-5,y:-2},{n:'C',x:1,y:-4},{n:'D',x:3,y:3},{n:'E',x:5,y:-1}] },
    { id: 2, t: "Punto 2: Ecuación", d: "Encuentra la ecuación con diámetro AB.", f: "Centro = Punto Medio | Radio = d(AB)/2", p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}] },
    { id: 3, t: "Punto 3: Ec. General", d: "Pasa a canónica completando cuadrados.", f: "(x-h)² + (y-k)² = r²", p: [{n:'C',x:5,y:6}] },
    { id: 4, t: "Punto 4: Plano", d: "Calcula la longitud del segmento AD y CA.", f: "d = √((x₂-x₁)² + (y₂-y₁)²)", p: [{n:'D',x:-2,y:2},{n:'A',x:3,y:3},{n:'C',x:2,y:-2}] },
    { id: 5, t: "Punto 5: Canónica", d: "Escribe la ecuación con C(-3,8) y r=2.5.", f: "(x-h)² + (y-k)² = r²", p: [{n:'C',x:-3,y:8}] },
    { id: 6, t: "Punto 6: Triángulos", d: "Demuestra si es Isósceles calculando AB, BC y CA.", f: "Calcula 3 distancias", p: [{n:'A',x:-1,y:2},{n:'B',x:-2,y:5},{n:'C',x:-4,y:1}] },
    { id: 7, t: "Punto 7: Triángulo DEF", d: "Calcula el perímetro y verifica si es rectángulo.", f: "P = d(DE)+d(EF)+d(FD)", p: [{n:'D',x:6,y:5},{n:'E',x:3,y:7},{n:'F',x:2,y:-1}] },
    { id: 8, t: "Punto 8: Centro/Radio", d: "Escribe r y C de: (x+3.5)²+(y+6.9)² = 121", f: "r = √121 = 11", p: [{n:'C',x:-3.5,y:-6.9}] },
    { id: 9, t: "Punto 9: Trazo", d: "Traza centro (-1,0) y radio 1.6 cm.", f: "Dibuja en tu papel con compás", p: [{n:'C',x:-1,y:0}] },
    { id: 10, t: "Punto 10: Trazo", d: "Traza centro (-5,-2.5) y radio 2 cm.", f: "Dibuja en tu papel con compás", p: [{n:'C',x:-5,y:-2.5}] }
];

let ejActual = 0;
let escala, centroX, centroY;

function dibujarPlano() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    centroX = canvas.width / 2; centroY = canvas.height / 2;
    escala = Math.min(canvas.width, canvas.height) / 20;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#eee';
    for(let i=-20; i<=20; i++) {
        ctx.beginPath(); ctx.moveTo(centroX+i*escala,0); ctx.lineTo(centroX+i*escala,canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,centroY+i*escala); ctx.lineTo(canvas.width,centroY+i*escala); ctx.stroke();
    }
    ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX,0); ctx.lineTo(centroX,canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,centroY); ctx.lineTo(canvas.width,centroY); ctx.stroke();

    taller[ejActual].p.forEach(p => {
        const px = centroX + (p.x * escala); const py = centroY - (p.y * escala);
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#333'; ctx.font = "bold 12px Arial";
        ctx.fillText(`${p.n}`, px+8, py-8);
    });
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#3498db; font-size:18px;">${e.t}</div>
        <p>${e.d}</p>
        <div style="background:#f9f9f9; padding:10px; border-radius:5px; font-family:monospace;">${e.f}</div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    dibujarPlano();
}

function verificarRespuesta() {
    const zona = document.getElementById('explicacion-zona');
    zona.style.display = "block";
    document.getElementById('texto-explicativo').innerHTML = `
        <b>Tutorial Visual:</b><br>
        Usa la fórmula ${taller[ejActual].f}.<br><br>
        En el plano puedes ver los puntos estratégicos para tu cálculo. ¡Tú puedes, Valentina!
    `;
    // Scroll automático hacia la explicación
    document.getElementById('interaccion').scrollTop = 100;
}

window.onload = cambiarEjercicio;
window.onresize = dibujarPlano;
