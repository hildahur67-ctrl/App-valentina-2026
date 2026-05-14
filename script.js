const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const puntosTaller = [
    { nombre: 'A', x: -4, y: 2, color: '#e74c3c' },
    { nombre: 'B', x: -5, y: -2, color: '#3498db' },
    { nombre: 'C', x: 1, y: -4, color: '#2ecc71' },
    { nombre: 'D', x: 3, y: 3, color: '#9b59b6' },
    { nombre: 'E', x: 5, y: -1, color: '#f39c12' }
];

function dibujarPlano() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width;
    const h = canvas.height;
    const centroX = w / 2;
    const centroY = h / 2;
    const escala = Math.min(w, h) / 12;

    ctx.clearRect(0, 0, w, h);

    // Dibujar cuadrícula
    ctx.strokeStyle = '#f0f0f0';
    for(let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(centroX + i * escala, 0); ctx.lineTo(centroX + i * escala, h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centroY + i * escala); ctx.lineTo(w, centroY + i * escala);
        ctx.stroke();
    }

    // Ejes
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(centroX, 0); ctx.lineTo(centroX, h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, centroY); ctx.lineTo(w, centroY); ctx.stroke();

    // Puntos del taller
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

function verificarRespuesta() {
    const r = parseFloat(document.getElementById('resultado-usuario').value);
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');
    const barra = document.getElementById('avance');

    // La distancia AD es sqrt(7^2 + 1^2) = sqrt(50) ≈ 7.07
    if (r >= 7.0 && r <= 7.1) {
        alert("¡Excelente Valentina! Has calculado la distancia correctamente.");
        barra.style.width = "60%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>¡Pista para Valentina!</b><br>
            Para hallar la distancia entre A(-4,2) y D(3,3):<br>
            1. Resta las X: 3 - (-4) = <b>7</b><br>
            2. Resta las Y: 3 - 2 = <b>1</b><br>
            3. Eleva al cuadrado: 7² + 1² = <b>50</b><br>
            4. Tu resultado debe ser la <b>raíz de 50</b>.<br>
            <i>(Usa la calculadora y pon el número con decimales)</i>
        `;
    }
}

window.addEventListener('resize', dibujarPlano);
dibujarPlano();
