const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const puntosTaller = [
    { nombre: 'A', x: -4, y: 2, color: '#e74c3c' },
    { nombre: 'B', x: -5, y: -2, color: '#3498db' },
    { nombre: 'C', x: 1, y: -4, color: '#2ecc71' },
    { nombre: 'D', x: 3, y: 3, color: '#9b59b6' },
    { nombre: 'E', x: 5, y: -1, color: '#f39c12' }
];

let escala, centroX, centroY;

function dibujarPlano() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width;
    const h = canvas.height;
    centroX = w / 2;
    centroY = h / 2;
    escala = Math.min(w, h) / 14;

    ctx.clearRect(0, 0, w, h);

    // Cuadrícula básica
    ctx.setLineDash([]);
    ctx.strokeStyle = '#f0f0f0';
    for(let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(centroX + i * escala, 0); ctx.lineTo(centroX + i * escala, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centroY + i * escala); ctx.lineTo(w, centroY + i * escala);
        ctx.stroke();
    }

    // Ejes principales
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX, 0); ctx.lineTo(centroX, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, centroY); ctx.lineTo(w, centroY); ctx.stroke();

    // Dibujar puntos del taller
    puntosTaller.forEach(p => {
        const px = centroX + (p.x * escala);
        const py = centroY - (p.y * escala);
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI*2); ctx.fill();
        ctx.strokeStyle = "white"; ctx.stroke();
        ctx.fillStyle = "#2c3e50";
        ctx.font = "bold 14px Arial";
        ctx.fillText(p.nombre, px + 10, py - 10);
    });
}

function dibujarAyudaVisual() {
    // Primero limpiamos y dibujamos el plano normal
    dibujarPlano();

    // Dibujamos el triángulo de Pitágoras con líneas gruesas
    const a = puntosTaller[0]; 
    const d = puntosTaller[3]; 
    const ax = centroX + (a.x * escala);
    const ay = centroY - (a.y * escala);
    const dx = centroX + (d.x * escala);
    const dy = centroY - (d.y * escala);

    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#ff0000"; // Rojo puro
    ctx.lineWidth = 5; // Muy grueso para que se vea bien

    // Lado Horizontal
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(dx, ay);
    ctx.stroke();

    // Lado Vertical
    ctx.beginPath();
    ctx.moveTo(dx, ay);
    ctx.lineTo(dx, dy);
    ctx.stroke();

    // Línea de Distancia (Hipotenusa)
    ctx.setLineDash([]);
    ctx.strokeStyle = "#2c3e50";
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(dx, dy);
    ctx.stroke();
}

function verificarRespuesta() {
    const val = document.getElementById('resultado-usuario').value;
    const r = parseFloat(val);
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (r >= 7.0 && r <= 7.1) {
        alert("¡Excelente Valentina! Superaste el reto.");
        document.getElementById('avance').style.width = "40%";
        zona.style.display = "none";
        dibujarPlano();
    } else {
        zona.style.display = "block";
        texto.innerHTML = "<b>¡Atención Valentina!</b> He dibujado el triángulo de Pitágoras en el plano. Cuenta los cuadros rojos para hallar la distancia.";
        dibujarAyudaVisual();
    }
}

window.onload = dibujarPlano;
window.onresize = dibujarPlano;
