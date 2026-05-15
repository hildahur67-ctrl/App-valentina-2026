const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');
const selectEj = document.getElementById('selector-ejercicio');

const taller = [
    { id: 1, desc: "Hallar distancia entre P1 y P2", p: [{n:'A',x:-4,y:-2},{n:'D',x:3,y:3}], r: 8.6 }, // Basado en polígono P1 [cite: 9, 11, 20]
    { id: 2, desc: "Ecuación circunferencia diámetro AB", p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}], r: 6.08 }, // Radio del punto 2 [cite: 23]
    { id: 6, desc: "Punto 6: Distancia AB", p: [{n:'A',x:-1,y:2},{n:'B',x:-2,y:5}], r: 3.16 }, // Punto 6 [cite: 50]
    { id: 7, desc: "Punto 7: Distancia DE", p: [{n:'D',x:6,y:5},{n:'E',x:3,y:7}], r: 3.6 } // Punto 7 [cite: 52]
];

let ejActual = 0;
let escala, centroX, centroY;

function dibujarPlano() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    centroX = w / 2; centroY = h / 2;
    escala = Math.min(w, h) / 16;
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#f0f0f0';
    for(let i=-15; i<=15; i++) {
        ctx.beginPath(); ctx.moveTo(centroX+i*escala,0); ctx.lineTo(centroX+i*escala,h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,centroY+i*escala); ctx.lineTo(w,centroY+i*escala); ctx.stroke();
    }
    ctx.strokeStyle = '#2c3e50'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX,0); ctx.lineTo(centroX,h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,centroY); ctx.lineTo(w,centroY); ctx.stroke();

    const puntos = taller[ejActual].p;
    puntos.forEach(p => {
        const px = centroX + (p.x * escala); const py = centroY - (p.y * escala);
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#2c3e50'; ctx.fillText(`${p.n}(${p.x},${p.y})`, px+8, py-8);
    });
}

function cambiarEjercicio() {
    ejActual = selectEj.value;
    document.getElementById('instruccion').innerText = taller[ejActual].desc;
    document.getElementById('explicacion-zona').style.display = "none";
    
    const container = document.getElementById('inputs-coordenadas');
    container.innerHTML = "";
    taller[ejActual].p.forEach((p, i) => {
        container.innerHTML += `
            <div>${p.n} x: <input type="number" class="input-punto" value="${p.x}" onchange="actualizarDato(${i}, 'x', this.value)"></div>
            <div>${p.n} y: <input type="number" class="input-punto" value="${p.y}" onchange="actualizarDato(${i}, 'y', this.value)"></div>
        `;
    });
    dibujarPlano();
}

function actualizarDato(index, eje, valor) {
    taller[ejActual].p[index][eje] = parseFloat(valor);
    dibujarPlano();
}

function dibujarAyudaVisual() {
    dibujarPlano();
    const p1 = taller[ejActual].p[0]; const p2 = taller[ejActual].p[1];
    const x1 = centroX + p1.x*escala; const y1 = centroY - p1.y*escala;
    const x2 = centroX + p2.x*escala; const y2 = centroY - p2.y*escala;

    ctx.setLineDash([5, 5]); ctx.strokeStyle = "#ff0000"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.setLineDash([]); ctx.strokeStyle = "#2c3e50";
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
}

function verificarRespuesta() {
    const rU = parseFloat(document.getElementById('resultado-usuario').value);
    const p1 = taller[ejActual].p[0]; const p2 = taller[ejActual].p[1];
    const distReal = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (Math.abs(rU - distReal) < 0.2) {
        alert("¡Excelente Valentina! Cálculo correcto.");
        document.getElementById('avance').style.width = ((parseInt(ejActual)+1)*25) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        texto.innerHTML = `<b>Pista Visual:</b><br>Base X = |${p2.x} - (${p1.x})| = ${Math.abs(p2.x-p1.x)}<br>Altura Y = |${p2.y} - (${p1.y})| = ${Math.abs(p2.y-p1.y)}<br>Usa: √(${Math.abs(p2.x-p1.x)}² + ${Math.abs(p2.y-p1.y)}²)`;
        dibujarAyudaVisual();
    }
}

window.onload = cambiarEjercicio;
window.onresize = dibujarPlano;
