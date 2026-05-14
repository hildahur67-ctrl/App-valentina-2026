const puntosTaller = [
    { nombre: 'A', x: -4, y: 2 },
    { nombre: 'B', x: -5, y: -2 },
    { nombre: 'C', x: 1, y: -4 },
    { nombre: 'D', x: 3, y: 3 }
];

let nivelActual = 1;

function verificarPuntos() {
    // Aquí la app valida si tu nieta ubicó bien los puntos en el plano
    // Si es correcto:
    actualizarProgreso();
    alert("¡Excelente! Has dominado el nivel inicial. Vamos por la distancia.");
}

function actualizarProgreso() {
    nivelActual++;
    const barra = document.getElementById('avance');
    barra.style.width = (nivelActual * 25) + "%"; // Sube el progreso
}

