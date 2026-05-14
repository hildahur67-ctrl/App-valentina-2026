const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

// Configuración de los puntos del taller real (Grado 10°)
const puntosTaller = [
    { nombre: 'A', x: -4, y: 2, color: 'red' },
    { nombre: 'B', x: -5, y: -2, color: 'blue' },
    { nombre: 'C', x: 1, y: -4, color: 'green' },
    { nombre: 'D', x: 3, y: 3, color: 'purple' },
    { nombre: 'E', x: 5, y: -1, color: 'orange' }
];

function dibujarPlano() {
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;
    const centroX = w / 2;
    const centroY = h / 2;
    const escala = 30; // Tamaño de la cuadrícula

    // Dibujar cuadrícula y ejes
    ctx.strokeStyle = '#ddd';
    for(let i = 0; i < w; i += escala) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,h); ctx.stroke(); }
    for(let i = 0; i < h; i += escala) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(w,i); ctx.stroke(); }
    
    ctx.strokeStyle = '#000'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX, 0); ctx.lineTo(centroX, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, centroY); ctx.lineTo(w, centroY); ctx.stroke();

    // Dibujar los puntos del taller de Valentina
    puntosTaller.forEach(p => {
        const px = centroX + (p.x * escala);
        const py = centroY - (p.y * escala);
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillText(`${p.nombre}(${p.x},${p.y})`, px + 10, py - 10);
    });
}

window.addEventListener('resize', dibujarPlano);
dibujarPlano();

function verificarPuntos() {
    alert("¡Reto de Geometría Teresiano!\nCalcula la distancia entre A y D para avanzar al Hito 2.");
}
