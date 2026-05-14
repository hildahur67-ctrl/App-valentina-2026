const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const puntosTaller = [
    { nombre: 'A', x: -4, y: 2, color: 'red' },
    { nombre: 'B', x: -5, y: -2, color: 'blue' },
    { nombre: 'C', x: 1, y: -4, color: 'green' },
    { nombre: 'D', x: 3, y: 3, color: 'purple' },
    { nombre: 'E', x: 5, y: -1, color: 'orange' }
];

function dibujarPlano() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width;
    const h = canvas.height;
    const centroX = w / 2;
    const centroY = h / 2;
    
    // Escala dinámica para que quepan todos los puntos en el celular
    const escala = Math.min(w, h) / 12; 

    ctx.clearRect(0, 0, w, h);

    // Dibujar cuadrícula suave
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for(let i = -10; i <= 10; i++) {
        // Líneas verticales
        ctx.beginPath();
        ctx.moveTo(centroX + i * escala, 0);
        ctx.lineTo(centroX + i * escala, h);
        ctx.stroke();
        // Líneas horizontales
        ctx.beginPath();
        ctx.moveTo(0, centroY + i * escala);
        ctx.lineTo(w, centroY + i * escala);
        ctx.stroke();
    }
    
    // Ejes principales más oscuros
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX, 0); ctx.lineTo(centroX, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, centroY); ctx.lineTo(w, centroY); ctx.stroke();

    // Dibujar puntos del taller
    ctx.font = "bold 14px Arial";
    puntosTaller.forEach(p => {
        const px = centroX + (p.x * escala);
        const py = centroY - (p.y * escala);
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.fillStyle = "#333";
        ctx.fillText(`${p.nombre}`, px + 10, py - 10);
    });
}

window.addEventListener('resize', dibujarPlano);
dibujarPlano();

function verificarPuntos() {
    alert("Hito 1: Valentina, ¿cuál es la distancia entre el punto A(-4,2) y el punto D(3,3)?");
}
