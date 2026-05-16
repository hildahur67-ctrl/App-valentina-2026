const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { id: 1, t: "1. Conversión de Ángulos", d: "Halla la medida del ángulo 17π/3 rad en grados.", f: "Grados = Radianes * (180 / π)", r: 1020 },
    { id: 2, t: "2. Movimiento Circular", d: "Una rueda gira a 110 vueltas/min. ¿Cuántos radianes gira en 5 minutos?", f: "Rad = Vueltas * 5 min * 2π", r: 3455.75 },
    { id: 3, t: "3. Banda Transportadora", d: "Longitud de 12 m, sube las cajas 1.5 m. Hallar la TANGENTE del ángulo θ.", f: "Tan(θ) = Cateto Opuesto / Cateto Adyacente", r: 0.13 },
    { id: 4, t: "4. Ángulo de Depresión", d: "Edificio de 45 m. Ángulo de depresión de 20°. Hallar distancia horizontal X.", f: "X = 45 / Tan(20°)", r: 123.63 },
    { id: 5, t: "5. Perímetro Cuadrilátero ABCD", d: "Calcula el perímetro total de la figura 1 (ABCD) combinando Pitágoras.", f: "Hipotenusa = √(cateto₁² + cateto₂²)", r: 4.14 },
    { id: 6, t: "6. Área con Ángulos Especiales", d: "Calcula el área de la figura 3 compuesta por dos triángulos.", f: "Área = (Base * Altura) / 2", r: 41.57 },
    { id: 7, t: "7. Altura de Edificio (Doble Elevación)", d: "Ángulo A = 30°, avanza 20 m a Punto B = 60°. Hallar la altura h.", f: "h = 20 * (Tan(30°)*Tan(60°)) / (Tan(60°) - Tan(30°))", r: 17.32 },
    { id: 8, t: "8. Error de Curso (Avión)", d: "Vuelo de 1073 km, desviación de 10° por 10 min a 600 km/h. Distancia restante.", f: "Ley de Coseno: a² = b² + c² - 2bc*Cos(A)", r: 974.25 },
    { id: 9, t: "9. Altura de la Pierna", d: "Pierna de 30 pulgadas levantada a 60°. ¿A qué altura queda el pie?", f: "Altura = 30 * Sin(60°)", r: 25.98 },
    { id: 10, t: "10. Medida del Lado b", d: "En el triángulo ABC, halla el lado b (c=6m, B=45°, C=105°, A=30°).", f: "Ley de Seno: b / Sin(B) = c / Sin(C)", r: 4.39 }
];

let ejActual = 0;

function dibujarEsquema() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    ctx.lineWidth = 3;
    ctx.font = "bold 13px Arial";

    // RENDERIZADO GRÁFICO SEGÚN EL PUNTO (Identificación visual)
    if (ejActual === 0 || ejActual === 1) { // Círculos / Rotación
        ctx.strokeStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 50, 0, Math.PI*2); ctx.stroke();
        ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(w/2, h/2, 6, 0, Math.PI*2); ctx.fill();
        ctx.lineTo(w/2 + 50, h/2); ctx.stroke();
    } 
    else if (ejActual === 2 || ejActual === 3 || ejActual === 8) { // Triángulos Rectángulos Simples (Banda, Edificio 4, Pierna)
        ctx.strokeStyle = "#0ea5e9";
        ctx.beginPath();
        ctx.moveTo(w*0.3, h*0.7); // Esquina izquierda (Ángulo)
        ctx.lineTo(w*0.7, h*0.7); // Esquina recta abajo
        ctx.lineTo(w*0.7, h*0.3); // Altura
        ctx.closePath(); ctx.stroke();
        ctx.fillStyle = "#64748b";
        ctx.fillText(ejActual === 3 ? "45 m" : (ejActual === 8 ? "30 pulg" : "1.5 m"), w*0.73, h*0.5);
        ctx.fillText("θ", w*0.35, h*0.68);
    }
    else if (ejActual === 4) { // Cuadrilátero ABCD (Figura 1 del PDF)
        ctx.strokeStyle = "#f43f5e";
        ctx.beginPath();
        ctx.moveTo(w*0.3, h*0.6); // D
        ctx.lineTo(w*0.7, h*0.6); // A
        ctx.lineTo(w*0.7, h*0.3); // B
        ctx.lineTo(w*0.2, h*0.3); // C
        ctx.closePath(); ctx.stroke();
        ctx.fillStyle = "#1e293b";
        ctx.fillText("A", w*0.72, h*0.63); ctx.fillText("B", w*0.72, h*0.27);
        ctx.fillText("C", w*0.16, h*0.27); ctx.fillText("D", w*0.26, h*0.63);
    }
    else { // Triángulos Oblicuángulos / Dobles (Puntos 6, 7, 10)
        ctx.strokeStyle = "#10b981";
        ctx.beginPath();
        ctx.moveTo(w*0.2, h*0.7);
        ctx.lineTo(w*0.8, h*0.7);
        ctx.lineTo(w*0.5, h*0.3);
        ctx.closePath(); ctx.stroke();
    }
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0ea5e9; font-size:16px; font-weight:bold; margin-bottom:5px;">${e.t}</div>
        <p style="margin:5px 0; color:#334155;">${e.d}</p>
        <div style="background:#f1f5f9; padding:6px; border-radius:5px; font-family:monospace; font-size:12px; color:#0f172a;"><b>Fórmula sugerida:</b> ${e.f}</div>
    `;
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    dibujarEsquema();
}

function verificarRespuesta() {
    const rU = parseFloat(document.getElementById('resultado-usuario').value);
    const e = taller[ejActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');
    const barra = document.getElementById('avance');

    // Margen de tolerancia decimal admisible para las respuestas de examen de John Fredi
    if (Math.abs(rU - e.r) < 1.5) {
        alert("¡Grandioso Valentina! Has resuelto este indicador matemático con éxito.");
        barra.style.width = ((ejActual + 1) * 10) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        
        // Pistas pedagógicas súper detalladas por punto según el PDF
        let ayuda = "";
        if(ejActual === 0) ayuda = "Multiplica 17 por 180, y luego divide el resultado en 3. ¡El π desaparece! [cite: 88, 89]";
        if(ejActual === 1) ayuda = "En 5 minutos la rueda da 550 vueltas totales[cite: 94]. Cada vuelta vale 2π radianes (6.283)[cite: 94].";
        if(ejActual === 2) ayuda = "Usa Pitágoras para hallar el cateto de abajo primero: √(12² - 1.5²). Luego calcula opuesto dividido adyacente[cite: 102, 103].";
        if(ejActual === 3) ayuda = "El ángulo abajo en el carro también es de 20°[cite: 109, 111]. Usa la tangente: Tan(20°) = 45 / X[cite: 109, 110]. Despeja la X.";
        if(ejActual === 4) ayuda = "Suma los 4 lados[cite: 92]. Dos lados miden 1 cm[cite: 96, 97]. La diagonal interna vale √2[cite: 100]. Úsala para sacar el último lado.";
        if(ejActual === 6) ayuda = "Usa la fórmula de doble ángulo o la relación trigonométrica para hallar el cateto compartido (h = 20 / (1/tan(30°) - 1/tan(60°)))[cite: 120, 128].";
        if(ejActual === 7) ayuda = "A los 10 minutos el avión avanzó 100 km (este es el lado c). El lado b es 1073 km[cite: 137, 138]. Aplica la Ley de Coseno directamente[cite: 136].";
        if(ejActual === 8) ayuda = "El suelo y la altura forman una línea recta[cite: 125]. El cateto opuesto es la altura: usa Seno(60°) = Altura / 30 pulgadas[cite: 124, 126].";
        if(ejActual === 9) ayuda = "Aplica la Ley de Seno: b / Sen(45°) = 6 / Sen(105°)[cite: 132, 134, 139, 140]. Despeja la b multiplicando por Sen(45°).";

        texto.innerHTML = `
            <b>Pista Estratégica para Valentina:</b><br>
            ${ayuda}<br><br>
            <i>Revisa tu calculadora y asegúrate de que esté en modo 'DEG' (Grados).</i>
        `;
        
        // Desplazamiento automático hacia la caja de ayuda
        setTimeout(() => {
            const contenedor = document.getElementById('interaccion');
            contenedor.scrollTo({ top: contenedor.scrollHeight, behavior: 'smooth' });
        }, 80);
    }
}

window.addEventListener('load', cambiarEjercicio);
window.addEventListener('resize', dibujarEsquema);

