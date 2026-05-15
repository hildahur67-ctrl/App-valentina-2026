// ... (mantenemos la base de datos de los 10 puntos igual que en la v=8) ...

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    document.getElementById('instruccion').innerHTML = `
        <div style="font-weight:bold; color:#3498db; font-size:15px;">${e.t}</div>
        <p>${e.d}</p>
        <div style="background:#f1f5f9; padding:5px; border-radius:4px; font-family:monospace; font-size:12px;">Fórmula: ${e.f}</div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    dibujarPlano();
}

function verificarRespuesta() {
    const zona = document.getElementById('explicacion-zona');
    zona.style.display = "block";
    
    // Generar la explicación basada en el taller
    document.getElementById('texto-explicativo').innerHTML = `
        <b>Guía para el Hito:</b><br>
        Valentina, para este punto usa: <b>${taller[ejActual].f}</b>.<br><br>
        Observa los puntos rojos. La línea punteada te muestra la base y la altura para Pitágoras.
    `;

    // AUTO-SCROLL: Esto obliga al celular a bajar hasta la zona amarilla
    setTimeout(() => {
        const contenedor = document.getElementById('interaccion');
        contenedor.scrollTo({
            top: contenedor.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);

    dibujarAyudaVisual();
}

// Aseguramos que el inicio sea limpio
window.onload = () => {
    cambiarEjercicio();
    setTimeout(dibujarPlano, 200);
};
window.onresize = dibujarPlano;
