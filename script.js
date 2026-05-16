const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { 
        id: 1, 
        t: "1. De Radianes a Grados (Pasteles y Porciones)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina que un pastel completo de cumpleaños equivale a un ángulo de 180° en geometría, y los matemáticos llaman a ese pastel completo con el nombre de <b>π (Pi)</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como el taller nos pide calcular 17π/3[cite: 88, 89], significa que tenemos 17 tercios de pastel. Para descubrir cuántos grados son en total, el truco mágico es quitar la letra <b>π</b> y poner en su lugar su valor en grados: <b>180°</b>.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Multiplica el número de arriba (17) por 180. -> 17 * 180 = 3060.<br>
            • Paso B: Divide ese resultado entre el número de abajo (3). -> 3060 / 3.`, 
        f: "Grados = (17 * 180) / 3", 
        r: 1020 
    },
    { 
        id: 2, 
        t: "2. El Reloj de la Rueda Mecánica", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina una aguja que da vueltas en un reloj. Cada vez que da una sola vuelta completa, los matemáticos dicen que recorrió un camino llamado <b>2π radianes</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Si la rueda gira a 110 vueltas en un solo minuto [cite: 94], primero debemos averiguar cuántas vueltas dará en total en 5 minutos[cite: 94]. Después, multiplicamos esa cantidad de vueltas por lo que mide un círculo completo (2π).<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Halla las vueltas totales en los 5 minutos -> 110 vueltas * 5 = 550 vueltas[cite: 94].<br>
            • Paso B: Multiplica esas vueltas por un círculo completo (2 * 3.14159) -> 550 * 2 * 3.14159.`, 
        f: "Radianes = 550 * 2 * 3.14159", 
        r: 3455.75 
    },
    { 
        id: 3, 
        t: "3. La Rampa de las Cajas (Banda Transportadora)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Una banda transportadora mide 12 metros de largo (<b>Hipotenusa</b>) [cite: 102] y sube las cajas hasta una altura de 1.5 metros (<b>Cateto Opuesto</b>)[cite: 102].<br><br>
            <b>🛠️ 2. La Estrategia:</b> El profesor te pide la <b>Tangente</b>[cite: 103]. La fórmula necesita la altura y la distancia del suelo (cateto adyacente). Como no conocemos el suelo, usamos el teorema de Pitágoras para hallarlo restando los cuadrados, y luego dividimos[cite: 90].<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Distancia del suelo -> √(12² - 1.5²) = √(144 - 2.25) = √141.75 ≈ 11.90 metros.<br>
            • Paso B: Calcula la Tangente dividiendo la altura entre el suelo -> 1.5 / 11.90.`, 
        f: "Tan(θ) = 1.5 / √(12² - 1.5²)", 
        r: 0.13 
    },
    { 
        id: 4, 
        t: "4. El Observador en la Azotea (Ángulo de Depresión)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Desde la azotea de un edificio de 45 metros miras un carro abajo en la calle con un ángulo de depresión de 20°[cite: 109]. Por líneas paralelas, el ángulo interno allá abajo en las llantas del carro también mide <b>20°</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Se forma un triángulo rectángulo donde conoces la altura (45 m) [cite: 109] y el ángulo de abajo (20°). Queremos hallar la distancia horizontal (X)[cite: 110]. Usamos la función Tangente porque relaciona la altura con la base.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: La relación dice que Tan(20°) = 45 / X.<br>
            • Paso B: Al despejar la X, esta pasa a multiplicar y la tangente a dividir -> X = 45 / Tan(20°).<br>
            • Paso C: Divide 45 entre el decimal de Tan(20°).`, 
        f: "Distancia X = 45 / Tan(20°)", 
        r: 123.63 
    },
    { 
        id: 5, 
        t: "5. El Rompecabezas del Cuadrilátero ABCD", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Mira la Figura 1 de tu taller[cite: 100]. Son dos triángulos rectángulos pegados compartiendo una pared interna (diagonal)[cite: 91]. Los lados exteriores conocidos miden 1 cm[cite: 96, 97, 100].<br><br>
            <b>🛠️ 2. La Estrategia:</b> Para hallar el perímetro total de la figura externa [cite: 92] necesitamos la rampa superior. Primero aplicamos Pitágoras abajo para descubrir la pared del medio[cite: 91]. Con ese dato, hacemos otro Pitágoras arriba para hallar el último borde[cite: 91].<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Pared del medio -> √(1² + 1²) = √2 ≈ 1.41 cm.<br>
            • Paso B: Lado de arriba -> √((√2)² + 1²) = √(2 + 1) = √3 ≈ 1.73 cm.<br>
            • Paso C: Suma los bordes externos -> 1cm + 1cm + 1.41cm + 1cm.`, 
        f: "Perímetro = 1 + 1 + 1.41 + 1", 
        r: 4.14 
    },
    { 
        id: 6, 
        t: "6. El Terreno Dividido (Área de la Figura 3)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Son dos triángulos diferentes unidos espalda con espalda[cite: 119]. Uno tiene un ángulo de 45° y otro de 60°[cite: 114, 117]. Sus lados inclinados miden 10 y 8[cite: 115, 116].<br><br>
            <b>🛠️ 2. La Estrategia:</b> El área es (Base * Altura) / 2[cite: 104]. Usamos Seno y Coseno con los ángulos de 60° y 45° para proyectar cuánto mide la altura vertical de la mitad y las bases del suelo de cada uno [cite: 104], luego calculamos las áreas y las sumamos[cite: 104].<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Altura central compartida -> Lado * Sen(ángulo).<br>
            • Paso B: Bases de cada triángulo -> Lado * Cos(ángulo).<br>
            • Paso C: Se calculan las áreas de ambos y se suman, lo que da un área total de 41.57.`, 
        f: "Área Total = 41.57", 
        r: 41.57 
    },
    { 
        id: 7, 
        t: "7. El Estudiante que Camina (Doble Elevación)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Miras el techo de un edificio con un ángulo de 30° desde un punto A[cite: 120]. Te caminas 20 metros hacia adelante al punto B y ahora el ángulo subió a 60°[cite: 120].<br><br>
            <b>🛠️ 2. La Estrategia:</b> Este problema mezcla dos posiciones[cite: 120]. Pero hay una fórmula directa de división que usa la distancia caminada (20 m) y las tangentes de ambos ángulos para hallar la altura 'h' de inmediato[cite: 120, 121].<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Multiplica la distancia caminada por las dos tangentes -> 20 * Tan(30°) * Tan(60°).<br>
            • Paso B: Resta las dos tangentes abajo -> Tan(60°) - Tan(30°).<br>
            • Paso C: Divide el resultado de arriba entre el de abajo.`, 
        f: "h = (20 * Tan(30°) * Tan(60°)) / (Tan(60°) - Tan(30°))", 
        r: 17.32 
    },
    { 
        id: 8, 
        t: "8. El Avión Perdido (Ley de Coseno)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Un avión va de Bogotá a Cartagena (1073 km)[cite: 137]. El piloto se desvía 10° por error[cite: 137]. Vuela así durante 10 minutos a una velocidad de 600 km/h antes de corregir[cite: 138].<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como vuela a 600 km/h, en 10 minutos avanzó 100 km por el camino errado[cite: 138]. Se forma un triángulo abierto donde conocemos dos lados (100 km y 1073 km) y el ángulo de error (10°)[cite: 137, 138]. Usamos la Ley de Coseno para saber cuánta distancia le falta para llegar a Cartagena[cite: 136, 138].<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Eleva al cuadrado los dos caminos conocidos -> 100² + 1073² = 1,161,329.<br>
            • Paso B: Multiplica 2 * 100 * 1073 * Coseno(10°) = 211,338.<br>
            • Paso C: Resta los resultados anteriores y sácale la raíz cuadrada -> √(1,161,329 - 211,338).`, 
        f: "Distancia = √(100² + 1073² - 2*100*1073*Cos(10°))", 
        r: 974.25 
    },
    { 
        id: 9, 
        t: "9. Terapia Física (Altura de la Pierna)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Un paciente levanta la pierna rígida formando un ángulo de 60°[cite: 124]. Su pierna mide 30 pulgadas de largo (esta es la Hipotenusa)[cite: 125, 126]. Queremos saber a qué altura vertical quedó el pie del suelo[cite: 125].<br><br>
            <b>🛠️ 2. La Estrategia:</b> Buscamos la altura vertical (Cateto Opuesto) teniendo la longitud de la pierna (Hipotenusa)[cite: 125]. Como la función que conecta al cateto opuesto con la hipotenusa es el <b>SENO</b>, multiplicamos la longitud por el seno del ángulo.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Plantea la operación -> Altura = Longitud pierna * Seno(60°).<br>
            • Paso B: Busca en tu calculadora el Seno de 60° (es 0.8660).<br>
            • Paso C: Multiplica 30 * 0.8660.`, 
        f: "Altura = 30 * Seno(60°)", 
        r: 25.98 
    },
    { 
        id: 10, 
        t: "10. El Triángulo Torcido ABC (Ley de Seno)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> En el triángulo ABC, el lado c mide 6 metros, el ángulo de su frente (C) mide 105° y el ángulo del frente del lado b (B) mide 45°[cite: 132, 134, 139, 140].<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como el triángulo no tiene esquinas rectas de 90° pero conocemos parejas de 'lado y su ángulo del frente', aplicamos la <b>Ley de Seno</b>[cite: 136]. Multiplicamos el lado conocido por el seno del ángulo del frente del lado que buscas, y lo dividimos por el seno de su propio ángulo[cite: 132].<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Plantea la ley -> Lado b = (Lado c * Seno(B)) / Seno(C)[cite: 132].<br>
            • Paso B: Reemplaza por números -> Lado b = (6 * Seno(45°)) / Seno(105°).<br>
            • Paso C: Multiplica arriba (6 * 0.7071) y divide entre el seno de 105° (0.9659).`, 
        f: "b = (6 * Seno(45°)) / Seno(105°)", 
        r: 4.39 
    }
];

let ejActual = 0;

function dibujarEsquema() {
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h); ctx.lineWidth = 3; ctx.font = "bold 13px Arial";

    if (ejActual === 0 || ejActual === 1) {
        ctx.strokeStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 35, 0, Math.PI*2); ctx.stroke();
    } else if (ejActual === 2 || ejActual === 3 || ejActual === 8) {
        ctx.strokeStyle = "#0ea5e9";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.7); ctx.lineTo(w*0.7, h*0.7); ctx.lineTo(w*0.7, h*0.35); ctx.closePath(); ctx.stroke();
    } else if (ejActual === 4) {
        ctx.strokeStyle = "#f43f5e";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.65); ctx.lineTo(w*0.7, h*0.65); ctx.lineTo(w*0.7, h*0.35); ctx.lineTo(w*0.3, h*0.35); ctx.closePath(); ctx.stroke();
    } else {
        ctx.strokeStyle = "#10b981";
        ctx.beginPath(); ctx.moveTo(w*0.2, h*0.7); ctx.lineTo(w*0.8, h*0.7); ctx.lineTo(w*0.5, h*0.35); ctx.closePath(); ctx.stroke();
    }
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    
    // Mostramos la explicación paso a paso de primero y ocultamos la zona de escribir
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0ea5e9; font-size:15px; font-weight:bold; border-bottom: 2px solid #e2e8f0; padding-bottom:4px; margin-bottom:10px;">
            ${e.t}
        </div>
        <div style="font-size:13.5px; color:#334155; line-height:1.5; margin-bottom:12px; text-align:left;">
            ${e.d}
        </div>
    `;
    
    document.getElementById('zona-solucion-reto').style.display = "none";
    document.getElementById('btn-entendido').style.display = "block";
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    dibujarEsquema();
}

function activarModoReto() {
    // Esconde el botón amarillo de leer y muestra la zona para ingresar el dato
    document.getElementById('btn-entendido').style.display = "none";
    document.getElementById('zona-solucion-reto').style.display = "block";
}

function verificarRespuesta() {
    const rU = parseFloat(document.getElementById('resultado-usuario').value);
    const e = taller[ejActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (Math.abs(rU - e.r) < 2.0) {
        alert("¡Excelente Valentina! Comprendiste el concepto y la matemática.");
        document.getElementById('avance').style.width = ((ejActual + 1) * 10) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista de Apoyo:</b><br>
            El resultado no coincide. Dale una mirada rápida a las operaciones del <b>Paso 3</b> que leíste hace un momento y pon los números con cuidado en la calculadora.
        `;
    }
}

window.addEventListener('load', cambiarEjercicio);
window.addEventListener('resize', dibujarEsquema);
