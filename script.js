const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { id: 1, desc: "P1: Hallar distancia entre A y D", p: [{n:'A',x:-4,y:2},{n:'D',x:3,y:3}] },
    { id: 2, desc: "P2: Hallar radio del diámetro AB", p: [{n:'A',x:1,y:6},{n:'B',x:13,y:8}] },
    { id: 6, desc: "P6: Hallar distancia AB", p: [{n:'A',x:-1,y:2},{n:'B',x:-2,y:5}] },
    { id: 7, desc: "P7: Hallar distancia DE", p: [{n:'D',x:6,y:5},{n:'E',x:3,y:7}] }
];

let ejActual = 0;
let escala, centroX, centroY;

function dibujarPlano() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth * 0.95;
    canvas.height = parent.clientHeight * 0.95;
    
    const w = canvas.width; const h = canvas.height;
    centroX = w / 2; centroY = h / 2;
    escala = Math.min(w, h) / 18; // Un poco más pequeño para que quepa mejor centrado
    
    ctx.clearRect(0, 0, w, h);
    
    // Cuadrícula
    ctx.setLineDash([]);
    ctx.strokeStyle = '#f0f0f0';
    for(let i=-20; i<=20; i++) {
        ctx.beginPath(); ctx.moveTo(centroX+i*escala,0); ctx.lineTo(centroX+i*escala,h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,centroY+i*escala); ctx.lineTo(w,centroY+i*escala); ctx.stroke();
    }
    
    // Ejes
    ctx.strokeStyle = '#34495e'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX,0); ctx.lineTo(centroX,h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,centroY); ctx.lineTo(w,centroY); ctx.stroke();

    // Puntos
    taller[ejActual].p.forEach(p => {
        const px = centroX + (p.x * escala); const py = centroY - (p.y * escala);
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#2c3e50'; ctx.font = "bold 13px Arial";
        ctx.fillText(`${p.n}(${p.x},${p.y})`, px+10, py-10);
    });
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    ejActual = parseInt(selector.value);
    document.getElementById('instruccion').innerText = taller[ejActual].desc;
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    
    const container = document.getElementById('inputs-coordenadas');
    container.innerHTML = "";
    taller[ejActual].p.forEach((p, i) => {
        container.innerHTML += `
            <div>${p.n} (x): <input type="number" class="input-punto" value="${p.x}" onchange="actualizarDato(${i}, 'x', this.value)"></div>
            <div>${p.n} (y): <input type="number" class="input-punto" value="${p.y}" onchange="actualizarDato(${i}, 'y', this.value)"></div>
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

    ctx.setLineDash([6, 4]); ctx.strokeStyle = "#ff0000"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y1); ctx.lineTo(x2, y2); ctx.stroke();
}

function verificarRespuesta() {
    const rU = parseFloat(document.getElementById('resultado-usuario').value);
    const p1 = taller[ejActual].p[0]; const p2 = taller[ejActual].p[1];
    const distReal = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (Math.abs(rU - distReal) < 0.2) {
        alert("¡Muy bien Valentina! Reto completado.");
        document.getElementById('avance').style.width = ((ejActual+1)*25) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        const dx = Math.abs(p2.x - p1.x);
        const dy = Math.abs(p2.y - p1.y);
        texto.innerHTML = `<b>Pista Visual:</b><br>Base = ${dx.toFixed(1)} | Altura = ${dy.toFixed(1)}<br>Usa Pitágoras: √(${dx.toFixed(1)}² + ${dy.toFixed(1)}²)`;
        dibujarAyudaVisual();
    }
}

window.onload = () => {
    cambiarEjercicio();
    setTimeout(dibujarPlano, 200);
};
window.onresize = dibujarPlano;
