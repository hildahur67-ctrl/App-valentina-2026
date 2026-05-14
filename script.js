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

    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX, 0); ctx.lineTo(centroX, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, centroY); ctx.lineTo(w, centroY); ctx.stroke();

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
    dibujarPlano();
    const a = puntosTaller[0]; 
    const d = puntosTaller[3]; 
    const ax = centroX + (a.x * escala);
    const ay = centroY - (a.y * escala);
    const dx = centroX + (d.x * escala);
    const dy = centroY - (d.y * escala);

    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 5;

    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(dx, ay); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(dx, ay); ctx.lineTo(dx, dy); ctx.stroke();

    ctx.setLineDash([]);
    ctx.strokeStyle = "#2c3e50";
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(dx, dy); ctx.stroke();
}

function verificarRespuesta() {
    const r = parseFloat(document.getElementById('resultado-usuario').value);
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (r >= 7.0 && r <= 7.1) {
        alert("¡Excelente Valentina! Superaste el reto.");
        document.getElementById('avance').style.width = "40%";
        zona.style.display = "none";
        dibujarPlano();
    } else {
        // Mantenemos la zona visible ANTES de dibujar
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista Visual activa:</b><br>
            Mira el triángulo rojo en el plano.<br>
            1. Cuenta los cuadros de la base: son <b>7</b>.<br>
            2. Cuenta los cuadros de la altura: es <b>1</b>.<br>
            3. Tu calculadora debe decir: <b>√(7² + 1²)</b>
        `;
        // Dibujamos el triángulo sin cerrar la zona de texto
        dibujarAyudaVisual();
    }
}

window.onload = dibujarPlano;
window.onresize = dibujarPlano;
