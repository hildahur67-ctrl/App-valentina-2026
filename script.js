const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { 
        id: 1, 
        t: "1. De Radianes a Grados (Pasteles y Porciones)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina que un pastel completo de cumpleaños equivale a un ángulo de 180° en geometría, y los matemáticos llaman a ese pastel completo con el nombre de <b>π (Pi)</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como el taller nos pide calcular 17π/3, significa que tenemos 17 tercios de pastel. Para descubrir cuántos grados son en total, el truco mágico es quitar la letra <b>π</b> y poner en su lugar su valor en grados: <b>180°</b>.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Multiplica el número de arriba (17) por 180. -> 17 * 180 = 3060.<br>
            • Paso B: Divide ese resultado entre el número de abajo (3). -> 3060 / 3.`, 
        f: "Grados = (17 * 180) / 3", 
        r: 1020 
    },
    { 
        id: 2, 
        t: "2. El Reloj de la Rueda Mecánica", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina una aguja que da vueltas en un reloj. Cada vez que da una sola vuelta completa, los matemáticos dicen que recorrió un camino llamado <b>2π radianes</b> (que equivale a multiplicar 2 * 3.1416 = 6.28 unidades de camino).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Si la rueda es súper rápida y da 110 vueltas en un solo minuto, primero debemos averiguar cuántas vueltas dará en total si la dejamos rodar durante 5 minutos. Después, multiplicamos esa cantidad de vueltas por lo que mide cada una (2π).<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Halla las vueltas totales en los 5 minutos -> 110 vueltas * 5 = 550 vueltas.<br>
            • Paso B: Multiplica esas vueltas por un círculo completo (2 * 3.14159) -> 550 * 2 * 3.14159.`, 
        f: "Radianes = 550 * 2 * 3.14159", 
        r: 3455.75 
    },
    { 
        id: 3, 
        t: "3. La Rampa de las Cajas (Banda Transportadora)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina una rampa inclinada por donde suben cajas. La rampa mide 12 metros de largo (esa es nuestra <b>Hipotenusa</b>) y sube las cajas hasta una altura de 1.5 metros (este es nuestro <b>Cateto Opuesto</b>, porque está frente al ángulo).<br><br>
            <b>🛠️ 2. La Estrategia:</b> El profesor te pide la <b>Tangente</b>. La fórmula de la Tangente necesita la altura y la distancia del suelo. ¡Pero no conocemos el suelo! Así que usamos el teorema del abuelo Pitágoras para hallar el suelo primero restando los cuadrados, y luego dividimos.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Halla la distancia del suelo -> √(12² - 1.5²) = √(144 - 2.25) = √141.75 ≈ 11.90 metros.<br>
            • Paso B: Calcula la Tangente dividiendo la altura entre el suelo -> 1.5 / 11.90.`, 
        f: "Tan(θ) = 1.5 / √(12² - 1.5²)", 
        r: 0.13 
    },
    { 
        id: 4, 
        t: "4. El Observador en la Azotea (Ángulo de Depresión)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Estás parada en el techo de un edificio de 45 metros mirando un carro abajo en la calle. Miras hacia abajo con un ángulo de 20°. Por una propiedad de líneas cruzadas, el ángulo allá abajo en las llantas del carro mirando hacia la azotea también mide <b>20°</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Se forma un triángulo rectángulo donde conoces la altura del edificio (45 m) y el ángulo de abajo (20°). Queremos hallar la distancia horizontal (X) desde el carro hasta la base. La función que une altura y base es la Tangente.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: La teoría dice que Tan(20°) = 45 / X.<br>
            • Paso B: Al despejar la X, esta pasa a multiplicar y la tangente a dividir. Te queda -> 45 / Tan(20°).<br>
            • Paso C: Busca en tu calculadora Tan(20°) y divide 45 entre ese decimal.`, 
        f: "Distancia X = 45 / Tan(20°)", 
        r: 123.63 
    },
    { 
        id: 5, 
        t: "5. El Rompecabezas del Cuadrilátero ABCD", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Mira la Figura 1 de tu taller. Son dos triángulos rectángulos pegados compartiendo una pared en la mitad (una diagonal). Los dos lados de abajo miden 1 cm.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Para hallar el perímetro exterior necesitamos medir todo el borde. Nos falta la rampa de arriba. Primero aplicamos Pitágoras en el triángulo de abajo para descubrir cuánto mide la pared del medio. Con esa pared, hacemos otro Pitágoras arriba para hallar el último pedazo de afuera.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Pared del medio -> √(1² + 1²) = √2 ≈ 1.41 cm.<br>
            • Paso B: Lado de arriba usando la pared -> √((√2)² + 1²) = √(2 + 1) = √3 ≈ 1.73 cm.<br>
            • Paso C: Suma los bordes externos -> 1cm + 1cm + 1.41cm (borde superior izquierdo) + 1cm.`, 
        f: "Perímetro = 1 + 1 + 1.41 + 1", 
        r: 4.14 
    },
    { 
        id: 6, 
        t: "6. El Terreno Dividido (Área de la Figura 3)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Son dos triángulos diferentes unidos espalda con espalda. Uno tiene un ángulo cómodo de 45° y el otro uno de 60°. Sus lados inclinados miden 10 y 8.<br><br>
            <b>🛠️ 2. La Estrategia:</b> El área de cualquier triángulo es (Base * Altura) / 2. Usamos las funciones trigonométricas Seno y Coseno como binoculares para proyectar cuánto mide la altura vertical de la mitad y cuánto miden los pedacitos de base de cada uno en el suelo, luego calculamos las áreas y las sumamos.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Altura de la línea central compartida -> Lado * Sen(ángulo).<br>
            • Paso B: Bases del suelo de cada triángulo -> Lado * Cos(ángulo).<br>
            • Paso C: Al aplicar las áreas y sumar ambas partes, el resultado final del área total da 41.57.`, 
        f: "Área Total = 41.57", 
        r: 41.57 
    },
    { 
        id: 7, 
        t: "7. El Estudiante que Camina (Doble Elevación)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Estás lejos de un edificio y miras el techo con un ángulo de 30°. Te caminas 20 metros hacia adelante, te paras de nuevo, miras arriba y ahora el ángulo subió a 60° porque estás más cerca.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Este problema asusta porque mezcla dos posiciones. Pero hay un truco genial: la altura 'h' se puede calcular directamente restando el efecto de las dos miradas (las tangentes) mediante una fórmula directa de división.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Multiplica la distancia que caminaste (20) por las dos tangentes -> 20 * Tan(30°) * Tan(60°).<br>
            • Paso B: Resta las dos tangentes abajo -> Tan(60°) - Tan(30°).<br>
            • Paso C: Divide el resultado del Paso A entre el resultado del Paso B.`, 
        f: "h = (20 * Tan(30°) * Tan(60°)) / (Tan(60°) - Tan(30°))", 
        r: 17.32 
    },
    { 
        id: 8, 
        t: "8. El Avión Perdido (Ley de Coseno)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Un avión va de Bogotá a Cartagena (un viaje recto de 1073 km). Pero el piloto se desvía 10° hacia un lado por error. Vuela así durante 10 minutos a una velocidad de 600 km/h antes de darse cuenta del error.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como vuela a 600 km por hora, en 10 minutos (que es la sexta parte de una hora) avanzó 100 km por el camino equivocado. Se forma un triángulo abierto donde conocemos dos lados (100 km desviados y 1073 km totales) y el ángulo del error (10°). Para hallar la distancia que le falta para llegar a Cartagena, usamos la Ley de Coseno.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Eleva al cuadrado los dos caminos conocidos -> 100² + 1073² = 10,000 + 1,151,329 = 1,161,329.<br>
            • Paso B: Multiplica 2 * 100 * 1073 * Coseno(10°) -> 214,600 * 0.9848 = 211,338.<br>
            • Paso C: Resta los resultados anteriores y sácale la raíz cuadrada -> √(1,161,329 - 211,338) = √949,991.`, 
        f: "Distancia = √(100² + 1073² - 2*100*1073*Cos(10°))", 
        r: 974.25 
    },
    { 
        id: 9, 
        t: "9. Terapia Física (Altura de la Pierna)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Un paciente en el médico levanta la pierna rígida formando un ángulo de 60° con la camilla. Su pierna mide 30 pulgadas de largo de la cadera al pie (esa es nuestra rampa o Hipotenusa). Queremos saber a qué altura vertical quedó el pie del suelo.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Buscamos el lado vertical (Cateto Opuesto) teniendo la longitud de la pierna (Hipotenusa). La función trigonométrica que relaciona el opuesto y la hipotenusa en la escuela se llama <b>SENO</b>. Multiplicamos la longitud por el seno del ángulo.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Escribe la ecuación -> Altura = Longitud pierna * Seno(60°).<br>
            • Paso B: Busca en tu calculadora el Seno de 60° (es 0.8660).<br>
            • Paso C: Multiplica 30 * 0.8660.`, 
        f: "Altura = 30 * Seno(60°)", 
        r: 25.98 
    },
    { 
        id: 10, 
        t: "10. El Triángulo Torcido ABC (Ley de Seno)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Tienes un triángulo donde ninguna esquina es recta (no hay 90°). El lado c mide 6 metros, el ángulo de su frente (C) mide 105° y el ángulo del frente del lado b (B) mide 45°.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Cuando un triángulo está torcido pero conocemos parejas de 'lado y su ángulo del frente', se usa la maravillosa <b>Ley de Seno</b>. Esta ley dice que si multiplicas el lado conocido por el seno del ángulo del frente del lado que buscas, y lo divides por el seno de tu propio ángulo, descubres la medida.<br><br>
            <b>✏️ 3. El Camino Matemático:</b><br>
            • Paso A: Plantea la ley -> Lado b = (Lado c * Seno(B)) / Seno(C).<br>
            • Paso B: Cambia las letras por números -> Lado b = (6 * Seno(45°)) / Seno(105°).<br>
            • Paso C: Calcula arriba (6 * 0.7071 = 4.242) y divide entre el seno de 105° (0.9659) -> 4.242 / 0.9659.`, 
        f: "b = (6 * Seno(45°)) / Seno(105°)", 
        r: 4.39 
    }
];

let ejActual = 0;

function dibujarEsquema() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 3;
    ctx.font = "bold 13px Arial";

    if (ejActual === 0 || ejActual === 1) {
        ctx.strokeStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 40, 0, Math.PI*2); ctx.stroke();
        ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(w/2, h/2, 5, 0, Math.PI*2); ctx.fill();
    } 
    else if (ejActual === 2 || ejActual === 3 || ejActual === 8) {
        ctx.strokeStyle = "#0ea5e9";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.7); ctx.lineTo(w*0.7, h*0.7); ctx.lineTo(w*0.7, h*0.3); ctx.closePath(); ctx.stroke();
        ctx.fillStyle = "#1e293b"; ctx.fillText("θ", w*0.36, h*0.66);
    }
    else if (ejActual === 4) {
        ctx.strokeStyle = "#f43f5e";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.65); ctx.lineTo(w*0.7, h*0.65); ctx.lineTo(w*0.7, h*0.3); ctx.lineTo(w*0.25, h*0.3); ctx.closePath(); ctx.stroke();
        ctx.setLineDash([3, 3]); ctx.strokeStyle = "#cbd5e1";
        ctx.beginPath(); ctx.moveTo(w*0.3, h*0.65); ctx.lineTo(w*0.7, h*0.3); ctx.stroke();
        ctx.setLineDash([]);
    }
    else {
        ctx.strokeStyle = "#10b981";
        ctx.beginPath(); ctx.moveTo(w*0.2, h*0.7); ctx.lineTo(w*0.8, h*0.7); ctx.lineTo(w*0.5, h*0.3); ctx.closePath(); ctx.stroke();
    }
}

function cambiarEjercicio() {
    ejActual = parseInt(document.getElementById('selector-ejercicio').value);
    const e = taller[ejActual];
    
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0ea5e9; font-size:15px; font-weight:bold; border-bottom: 2px solid #e2e8f0; padding-bottom:4px; margin-bottom:10px;">
            ${e.t}
        </div>
        <div style="font-size:13.5px; color:#334155; line-height:1.5; margin-bottom:12px; text-align:left;">
            ${e.d}
        </div>
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

    if (Math.abs(rU - e.r) < 2.0) {
        alert("¡Brillante Valentina! Hito superado con éxito. Entendiste el concepto.");
        document.getElementById('avance').style.width = ((ejActual + 1) * 10) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista de Refuerzo Pedagógico:</b><br>
            No te preocupes por el error, Valentina. Vuelve a mirar el <b>Paso 3 (El Camino Matemático)</b> de arriba. Mete los números despacio en tu calculadora.<br><br>
            <i>Recuerda verificar que la pantalla de tu calculadora tenga las letras chiquitas "DEG".</i>
        `;
        
        setTimeout(() => {
            const contenedor = document.getElementById('interaccion');
            contenedor.scrollTo({ top: contenedor.scrollHeight, behavior: 'smooth' });
        }, 80);
    }
}
