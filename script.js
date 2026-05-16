const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const taller = [
    { 
        id: 1, 
        t: "1. De Radianes a Grados (Pasteles y Porciones)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Imagina que un pastel equivale a 180° y los matemáticos lo llaman <b>π (Pi)</b>.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Para pasar a grados, cambiamos la letra <b>π</b> por <b>180°</b>.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el problema fuera convertir 5π/2 rad:</i><br>
            • Paso 1: Cambias π por 180 -> 5 * 180 = 900.<br>
            • Paso 2: Divides entre el de abajo (2) -> 900 / 2 = <b>450°</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Ahora sigue el mismo orden en tu calculadora para <b>17π/3</b>.`, 
        f: "Grados = (17 * 180) / 3", 
        r: 1020 
    },
    { 
        id: 2, 
        t: "2. El Reloj de la Rueda Mecánica", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Una vuelta completa a un círculo mide siempre <b>2π radianes</b> (6.28 unidades).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Hallamos las vueltas de todo el tiempo y las multiplicamos por 2π.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si una rueda diera 50 vueltas/min durante 3 minutos:</i><br>
            • Paso 1: Vueltas totales -> 50 vueltas * 3 min = 150 vueltas.<br>
            • Paso 2: Multiplicas por 2π -> 150 * 2 * 3.14159 = <b>942.47 rad</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden para tu rueda de <b>110 vueltas/min durante 5 minutos</b>.`, 
        f: "Radianes = (110 * 5) * 2 * 3.14159", 
        r: 3455.75 
    },
    { 
        id: 3, 
        t: "3. La Rampa de las Cajas (Banda Transportadora)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Una rampa inclinada (Hipotenusa) y una altura vertical (Cateto Opuesto).<br><br>
            <b>🛠️ 2. La Estrategia:</b> La Tangente necesita la Altura y el Suelo. Usamos Pitágoras para hallar el suelo primero.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si la rampa midiera 10 m y subiera 2 m:</i><br>
            • Paso 1: Hallar el suelo -> √(10² - 2²) = √(100 - 4) = √96 = 9.79 m.<br>
            • Paso 2: Dividir Altura / Suelo -> 2 / 9.79 = <b>0.20</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>Rampa de 12 m y Altura de 1.5 m</b>.`, 
        f: "Tan(θ) = 1.5 / √(12² - 1.5²)", 
        r: 0.13 
    },
    { 
        id: 4, 
        t: "4. El Observador en la Azotea (Ángulo de Depresión)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> El ángulo de mirar hacia abajo (depresión) es igual al ángulo de mirar hacia arriba desde el carro.<br><br>
            <b>🛠️ 2. La Estrategia:</b> La Tangente une la Altura del edificio con la distancia horizontal (X) del suelo.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el edificio midiera 30 m y el ángulo fuera de 15°:</i><br>
            • Paso 1: Planteas -> X = 30 / Tan(15°).<br>
            • Paso 2: Calculas Tan(15°) = 0.2679.<br>
            • Paso 3: Divides -> 30 / 0.2679 = <b>111.98 m</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden con tus datos: <b>Edificio de 45 m y Ángulo de 20°</b>.`, 
        f: "X = 45 / Tan(20°)", 
        r: 123.63 
    },
    { 
        id: 5, 
        t: "5. El Rompecabezas del Cuadrilátero ABCD", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Dos triángulos rectángulos pegados por una pared interna diagonal.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Usamos Pitágoras en cadena para hallar los lados que faltan y sumamos los bordes de afuera.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si los lados conocidos midieran 2 cm en lugar de 1 cm:</i><br>
            • Paso 1: Pared del medio -> √(2² + 2²) = √8 = 2.82 cm.<br>
            • Paso 2: Lado superior -> √((2.82)² + 2²) = √(8 + 4) = √12 = 3.46 cm.<br>
            • Paso 3: Sumar bordes externos -> 2 + 2 + 3.46 + 2 = <b>9.46 cm</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue el mismo orden usando los datos reales de tu hoja donde <b>los lados miden 1 cm</b>.`, 
        f: "Perímetro = 1 + 1 + 1.41 + 1", 
        r: 4.14 
    },
    { 
        id: 6, 
        t: "6. El Terreno Dividido (Área de la Figura 3)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Dos triángulos recostados sobre una misma pared vertical central (la altura).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Calculamos la altura y las bases usando Seno y Coseno, sacamos las áreas y las sumamos.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Imagina que las rampas midieran 12 y 6 con los mismos ángulos:</i><br>
            • Paso 1: Altura central -> Lado * Sen(ángulo).<br>
            • Paso 2: Bases del suelo -> Lado * Cos(ángulo).<br>
            • Paso 3: Área total aplicando (Base * Altura)/2 a cada uno y sumando.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Sigue los pasos con tus datos reales: <b>Rampas de 10 y 8 con ángulos de 60° y 45°</b>.`, 
        f: "Área = 41.57", 
        r: 41.57 
    },
    { 
        id: 7, 
        t: "7. El Estudiante que Camina (Doble Elevación)", 
        d: `<b>👁️ 1. El Mapa Visual:</b> Miras un punto alto, caminas hacia adelante y el ángulo de visión aumenta.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Aplicamos la fórmula de división de tangentes usando la distancia que se avanzó.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si caminaras 10 metros y los ángulos fueran de 30° y 45°:</i><br>
            • Paso 1: Arriba -> 10 * Tan(30°) * Tan(45°) = 10 * 0.577 * 1 = 5.77.<br>
            • Paso 2: Abajo -> Tan(45°) - Tan(30°) = 1 - 0.577 = 0.423.<br>
            • Paso 3: Divides -> 5.77 / 0.423 = <b>13.64 m</b>
