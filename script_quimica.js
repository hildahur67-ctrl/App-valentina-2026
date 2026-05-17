const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const tallerQuimica = [
    {
        id: 1,
        t: "1. Capa de Valencia y Configuración Electrónica",
        d: `<b>👁️ 1. El Mapa Visual:</b> Los electrones se organizan alrededor del núcleo en pisos o niveles de energía (1, 2, 3...). La <b>Capa de Valencia</b> es simplemente el número del nivel más alto al que logró llegar el elemento.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Busca el número grande más alto que aparezca al inicio de las letras en la distribución electrónica. Ese número representa tu capa externa.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si analizamos el Oxígeno con $1s^{2}2s^{2}2p^{4}$:</i><br>
            • Paso 1: Identificamos los niveles grandes que tiene: nivel 1 y nivel 2.<br>
            • Paso 2: El nivel más alto alcanzado es el 2. Por tanto, su capa de valencia es la número <b>2</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> ¿Cuál es la <b>Capa de Valencia</b> para el Carbono (C) cuya distribución es $1s^{2}2s^{2}2p^{2}$?`,
        r: "2",
        tipo: "texto"
    },
    {
        id: 2,
        t: "1.2. Electrones de Valencia y Comportamiento",
        d: `<b>👁️ 1. El Mapa Visual:</b> Los electrones de valencia son los pasajeros que viajan únicamente en el último piso (capa externa). Todos los átomos quieren parecerse a los gases nobles y tener 8 electrones en su último piso para estar estables (Regla del Octeto).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Si un elemento tiene poquitos electrones en su último piso (como 1, 2 o 3), le queda mucho más fácil <b>cederlos</b> (regalarlos). Si tiene muchos (5, 6, 7), prefiere <b>recibir</b> los que le falten.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si analizamos el Flúor (7 electrones en su último piso):</i><br>
            • Paso 1: Como tiene 7 electrones, le falta solo 1 para llegar a 8.<br>
            • Paso 2: Es mucho más fácil buscar el que le falta que botar los 7. Por ende, el Flúor <b>recibe</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> El Sodio (Na) tiene configuración $1s^{2}2s^{2}2p^{6}3s^{1}$. Solo tiene 1 electrón en su último piso (el 3). ¿Este elemento <b>cede</b>, <b>recibe</b> o <b>comparte</b>?`,
        r: "cede",
        tipo: "texto"
    },
    {
        id: 3,
        t: "2. Moléculas Diatómicas y Fuerzas Intramoleculares",
        d: `<b>👁️ 1. El Mapa Visual:</b> Cuando dos átomos del mismo elemento no metales se unen (como Cl y Cl), ninguno tiene la fuerza para quitarle electrones al otro. Para solucionarlo, se dan la mano y se vuelven una molécula compartiendo electrones.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Como la diferencia de electronegatividad entre dos átomos idénticos es cero ($3.16 - 3.16 = 0$), el enlace que se genera en el interior de la molécula es de un tipo específico.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si analizamos el gas Hidrógeno ($H_{2}$):</i><br>
            • Paso 1: Es la unión de dos no metales idénticos.<br>
            • Paso 2: Al ser idénticos, comparten por igual sus electrones. Su fuerza intramolecular es un enlace <b>covalente apolar</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> ¿Qué tipo de enlace intramolecular presenta la molécula de gas Cloro (<b>Cl2</b>)? (Responde: covalente apolar / covalente polar / ionico)`,
        r: "covalente apolar",
        tipo: "texto"
    },
    {
        id: 4,
        t: "3. Clasificación de Reacciones Químicas",
        d: `<b>👁️ 1. El Mapa Visual:</b> Las reacciones químicas son como interacciones sociales. Si dos sustancias independientes se unen para formar un solo producto final, es una reacción de **Síntesis** o Combinación (A + B → AB).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Observa el lado derecho de la flecha (los productos). Si ves que varios reactivos se encogieron y fusionaron en una sola molécula grande, clasifícala como síntesis.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Analicemos: $2H_{2} + O_{2} \rightarrow 2H_{2}O$:</i><br>
            • Paso 1: A la izquierda hay dos sustancias separadas (Hidrógeno y Oxígeno).<br>
            • Paso 2: A la derecha solo hay una sustancia unida (Agua). Es una <b>sintesis</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> ¿Cómo clasificas la reacción: $4Fe(s) + 3O_{2}(g) \rightarrow 2Fe_{2}O_{3}(s)$? (sintesis / descomposicion / sustitucion / combustion)`,
        r: "sintesis",
        tipo: "texto"
    },
    {
        id: 5,
        t: "3.2. Identificación de Reacciones de Combustión",
        d: `<b>👁️ 1. El Mapa Visual:</b> Una reacción de **Combustión** es un proceso donde un combustible reacciona con el Oxígeno del aire ($O_{2}$) liberando energía de golpe y produciendo de forma fija Dióxido de Carbono ($CO_{2}$) y vapor de Agua ($H_{2}O$).<br><br>
            <b>🛠️ 2. La Estrategia:</b> El truco visual infalible es mirar los productos. Si ves que al final de la flecha los productos son obligatoriamente $CO_{2} + H_{2}O$, la reacción es de combustión.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si tenemos: $CH_{4} + 2O_{2} \rightarrow CO_{2} + 2H_{2}O$:</i><br>
            • Paso 1: Vemos que un hidrocarburo reacciona con el gas oxígeno ($O_{2}$).<br>
            • Paso 2: Los productos liberados son gas carbónico y agua. Es una <b>combustion</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Clasifica la reacción de tu guía: $C_{4}H_{8}(g) + 6O_{2}(g) \rightarrow 4CO_{2}(g) + 4H_{2}O(g)$.`,
        r: "combustion",
        tipo: "texto"
    },
    {
        id: 6,
        t: "4. Conteo de Átomos (Ley de Conservación)",
        d: `<b>👁️ 1. El Mapa Visual:</b> En química, el número grande de la izquierda (coeficiente) multiplica a todos los subíndices de la molécula. Nada se crea ni se destruye, solo se reorganiza.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Multiplica el coeficiente grande por el número pequeño del elemento para contar sus átomos totales.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Contemos los átomos de Oxígeno en los reactivos de: $2NO + O_{2} \rightarrow 2NO_{2}$:</i><br>
            • Paso 1: En el $2NO$, el 2 grande multiplica al Oxígeno invisible (1) -> 2 * 1 = 2 átomos.<br>
            • Paso 2: En el $O_{2}$, tenemos un paquete con 2 átomos directos.<br>
            • Paso 3: Sumamos ambos aportes de reactivos: 2 + 2 = <b>4 átomos de Oxígeno</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> En la ecuación anterior, ¿cuántos átomos de <b>Oxígeno (O)</b> totales hay en el lado de los PRODUCTOS ($2NO_{2}$)?`,
        r: "4",
        tipo: "texto"
    },
    {
        id: 7,
        t: "5. Verificación de Balanceo Químico",
        d: `<b>👁️ 1. El Mapa Visual:</b> Una ecuación está balanceada si el peso y el número de elementos es exactamente igual a ambos lados de la flecha de la balanza.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Cuenta un elemento en reactivos y compáralo con productos. Si un solo elemento no coincide, la ecuación está desbalanceada.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Verifiquemos: $H_{2} + O_{2} \rightarrow H_{2}O$:</i><br>
            • Paso 1: Hidrógenos: 2 a la izquierda y 2 a la derecha. ¡Bien!<br>
            • Paso 2: Oxígenos: 2 a la izquierda pero solo 1 a la derecha. No coincide.<br>
            • Paso 3: Como no son iguales, la ecuación **no** está balanceada.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> Revisa esta ecuación de tu punto 5: $2Al(s) + 3Cl_{2}(g) \rightarrow 2AlCl_{3}(s)$. ¿Está balanceada correctamente? (Responde: si / no)`,
        r: "si",
        tipo: "texto"
    },
    {
        id: 8,
        t: "6. Balanceo por Tanteo (Ensayo y Error)",
        d: `<b>👁️ 1. El Mapa Visual:</b> Balancear por tanteo es como ajustar las cantidades de ingredientes de una receta para que todo cuadre a la perfección.<br><br>
            <b>🛠️ 2. La Estrategia:</b> Modifica únicamente los números grandes del inicio (coeficientes) en orden: Metales, No metales, Hidrógeno y al final Oxígeno.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Balanceemos la receta del óxido: $Fe + O_{2} \rightarrow Fe_{2}O_{3}$:</i><br>
            • Paso 1: A la derecha hay 3 Oxígenos y a la izquierda 2. Buscamos un común múltiplo (6). Colocamos un 3 frente al $O_{2}$ ($3O_{2} = 6$) y un 2 frente al $Fe_{2}O_{3}$ ($2 \times 3 = 6$).<br>
            • Paso 2: El 2 de la derecha cambió los Hierros a 4 ($2 \times 2 = 4$). Colocamos un 4 a la izquierda del Fe solo.<br>
            • Paso 3: La ecuación balanceada limpia es: $4Fe + 3O_{2} \rightarrow 2Fe_{2}O_{3}$.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> ¿Cuál es el coeficiente grande que debe acompañar al Hierro (<b>Fe</b>) al inicio para que la ecuación quede perfectamente balanceada?`,
        r: "4",
        tipo: "texto"
    },
    {
        id: 9,
        t: "7. Estados de Oxidación (Método Redox)",
        d: `<b>👁️ 1. El Mapa Visual:</b> Los estados de oxidación son las cargas eléctricas que toman los elementos al unirse. Las reglas fijas dicen que el Oxígeno casi siempre trabaja con **-2** y el Hidrógeno con **+1**.<br><br>
            <b>🛠️ 2. La Estrategia:</b> La suma de las cargas de una molécula neutra debe ser siempre cero. Multiplica el estado por el subíndice y despeja el elemento del centro.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Hallemos el estado del Azufre (S) en el $H_{2}SO_{4}$:</i><br>
            • Paso 1: Oxígenos aportan: $4 \times (-2) = -8$. Hidrógenos aportan: $2 \times (+1) = +2$.<br>
            • Paso 2: Para que la molécula sume cero: $+2 + X - 8 = 0$, por lo tanto $X = +6$. El Azufre trabaja con <b>+6</b>.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> ¿Con qué estado de oxidación trabaja el Nitrógeno (N) en el Ácido Nítrico (<b>HNO3</b>) del punto 7 sabiendo que H=+1 y O=-2?`,
        r: "+5",
        tipo: "texto"
    },
    {
        id: 10,
        t: "7.2. Oxidación, Reducción y Agentes",
        d: `<b>👁️ 1. El Mapa Visual:</b> En las reacciones Redox hay una transferencia de electrones. El átomo que **pierde electrones** se oxida (su número aumenta) y el que **gana electrones** se reduce (su número disminuye en la recta numérica).<br><br>
            <b>🛠️ 2. La Estrategia:</b> Compara el estado de oxidación de un elemento a la izquierda contra su estado a la derecha. Si el número disminuyó, hubo una reducción.<br><br>
            <b>📋 EJEMPLO GUÍA PASO A PASO:</b><br>
            <i>Si el Hierro pasa de $Fe^{0}$ a $Fe^{+3}$:</i><br>
            • Paso 1: Su número de oxidación subió en la recta de 0 a +3.<br>
            • Paso 2: Subir significa perder electrones de carga negativa. Por lo tanto, el Hierro se **oxida**.<br><br>
            <b>✏️ TU RETO DEL TALLER:</b> En la reacción: $MnO_{2} + 4HCl \rightarrow MnCl_{2} + Cl_{2} + 2H_{2}O$, el Manganeso pasa de **Mn+4** en los reactivos a **Mn+2** en los productos. ¿El Manganeso se <b>oxida</b> o se <b>reduce</b>?`,
        r: "reduce",
        tipo: "texto"
    }
];

let ejActual = 0;

function dibujarEsquemaQuimico() {
    if (!canvas || !canvas.offsetWidth) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 3;
    ctx.font = "bold 12px Arial";

    if (ejActual === 0 || ejActual === 1) { // Representación atómica (Bohr/Lewis)
        ctx.strokeStyle = "#14b8a6"; ctx.beginPath(); ctx.arc(w/2, h/2, 15, 0, Math.PI*2); ctx.fillStyle = "#ccfbf1"; ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#115e59"; ctx.fillText("Núcleo", w/2 - 20, h/2 + 4);
        // Órbitas concéntricas de Bohr
        ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.strokeStyle = "#94a3b8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 40, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2, h/2, 65, 0, Math.PI*2); ctx.stroke();
        ctx.setLineDash([]);
        // Electrones externos
        ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(w/2 + 40, h/2, 5, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(w/2 - 65, h/2, 5, 0, Math.PI*2); ctx.fill();
    } 
    else if (ejActual === 2) { // Enlaces covalentes (Compartir electrones)
        ctx.strokeStyle = "#0d9488";
        ctx.beginPath(); ctx.arc(w/2 - 35, h/2, 35, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2 + 35, h/2, 35, 0, Math.PI*2); ctx.stroke();
        ctx.fillStyle = "#1e293b"; ctx.fillText("Cl", w/2 - 45, h/2 + 4); ctx.fillText("Cl", w/2 + 30, h/2 + 4);
        // Electrones compartidos en la intersección
        ctx.fillStyle = "#ea580c"; ctx.beginPath(); ctx.arc(w/2, h/2 - 8, 4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(w/2, h/2 + 8, 4, 0, Math.PI*2); ctx.fill();
    } 
    else if (ejActual === 3 || ejActual === 4) { // Tubos de ensayo / Matraz de Reacción
        ctx.strokeStyle = "#475569"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(w/2 - 25, h*0.25); ctx.lineTo(w/2 - 25, h*0.65);
        ctx.arc(w/2, h*0.65, 25, Math.PI, 0, true); ctx.lineTo(w/2 + 25, h*0.25); ctx.stroke();
        // Líquido indicador de reacción reactiva
        ctx.fillStyle = ejActual === 4 ? "#f43f5e" : "#38bdf8"; 
        ctx.beginPath(); ctx.arc(w/2, h*0.65, 23, Math.PI, 0, true); ctx.closePath(); ctx.fill();
        ctx.fillStyle = "#1e293b"; ctx.fillText(ejActual === 4 ? "Combustión Δ" : "Síntesis", w/2 - 30, h*0.88);
    } 
    else if (ejActual === 5 || ejActual === 6 || ejActual === 7) { // Tabla Estequiométrica / Balanza de tanteo
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 2;
        // Soporte central de la balanza
        ctx.beginPath(); ctx.moveTo(w/2, h*0.3); ctx.lineTo(w/2, h*0.75); ctx.lineTo(w/2 - 30, h*0.75); ctx.moveTo(w/2, h*0.75); ctx.lineTo(w/2 + 30, h*0.75); ctx.stroke();
        // Brazos estequiométricos
        ctx.lineWidth = 4; ctx.strokeStyle = "#0d9488"; ctx.beginPath(); ctx.moveTo(w*0.25, h*0.35); ctx.lineTo(w*0.75, h*0.35); ctx.stroke();
        // Platillos de Reactivos vs Productos
        ctx.lineWidth = 2; ctx.strokeStyle = "#475569";
        ctx.beginPath(); ctx.moveTo(w*0.25, h*0.35); ctx.lineTo(w*0.2, h*0.55); ctx.lineTo(w*0.3, h*0.55); ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w*0.75, h*0.35); ctx.lineTo(w*0.7, h*0.55); ctx.lineTo(w*0.8, h*0.55); ctx.closePath(); ctx.stroke();
        ctx.fillStyle = "#1e293b"; ctx.fillText("REACTIVOS", w*0.15, h*0.68); ctx.fillText("PRODUCTOS", w*0.68, h*0.68);
    } 
    else { // Recta numérica de estados de transferencia Redox
        ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w*0.15, h/2); ctx.lineTo(w*0.85, h/2); ctx.stroke();
        // Divisiones de la recta Redox (-2 a +4)
        for(let i=0; i<=6; i++) {
            let xPos = w*0.15 + (i * (w*0.7/6));
            ctx.beginPath(); ctx.moveTo(xPos, h/2 - 5); ctx.lineTo(xPos, h/2 + 5); ctx.stroke();
            let val = i - 2; ctx.fillStyle = "#1e293b"; ctx.fillText(val >= 0 ? "+"+val : val, xPos - 8, h/2 + 20);
        }
        // Flechas indicadoras de procesos electrónicos
        ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w*0.35, h/2 - 20); ctx.lineTo(w*0.65, h/2 - 20); ctx.stroke();
        ctx.fillText("Oxidación (Pierde e-)", w/2 - 50, h/2 - 28);
    }
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    if(!selector) return;
    ejActual = parseInt(selector.value);
    const e = tallerQuimica[ejActual];
    
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0d9488; font-size:15px; font-weight:bold; border-bottom: 2px solid #ccfbf1; padding-bottom:4px; margin-bottom:10px;">
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
    
    setTimeout(dibujarEsquemaQuimico, 50);
}

function activarModoReto() {
    document.getElementById('btn-entendido').style.display = "none";
    document.getElementById('zona-solucion-reto').style.display = "block";
}

function verificarRespuesta() {
    const rU = document.getElementById('resultado-usuario').value.trim().toLowerCase();
    const e = tallerQuimica[ejActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (rU === e.r) {
        alert("¡Espectacular Valentina! Dominas este concepto químico.");
        document.getElementById('avance').style.width = ((ejActual + 1) * 10) + "%";
        zona.style.display = "none";
    } else {
        zona.style.display = "block";
        
        let pistaLab = "";
        if(ejActual === 0) pistaLab = "Revisa el Carbono ($1s^{2}2s^{2}2p^{2}$). El nivel más alto es el número grande del segundo piso. Digita solo el número.";
        if(ejActual === 1) pistaLab = "Como el Sodio solo tiene un electrón orbitando en su capa 3 ($3s^{1}$), le cuesta menos energía regalarlo. Responde: cede, recibe o comparte.";
        if(ejActual === 2) pistaLab = "Al unirse dos átomos idénticos de Cloro, las fuerzas se anulan y los electrones se reparten al centro por igual. Responde: covalente apolar";
        if(ejActual === 3) pistaLab = "El Hierro y el Oxígeno se fusionaron en un único frasco de óxido de hierro. Escribe: sintesis";
        if(ejActual === 4) pistaLab = "El combustible reacciona con gas oxígeno desprendiendo gas carbónico ($CO_{2}$) y agua ($H_{2}O$). Eso es una combustion.";
        if(ejActual === 5) pistaLab = "Multiplica el 2 grande de los reactivos por el subíndice 2 del Oxígeno en el compuesto $2NO_{2}$. ¡El resultado es 4!";
        if(ejActual === 6) pistaLab = "Cuenta el Cloro: a la izquierda hay $3 \times 2 = 6$ átomos. A la derecha hay $2 \times 3 = 6$ átomos. Los Aluminios también cuadran. Escribe si o no.";
        if(ejActual === 7) pistaLab = "Revisa el paso a paso: para tener 6 Oxígenos a ambos lados, el Hierro a la izquierda necesitó un número grande 4 al inicio.";
        if(ejActual === 8) pistaLab = "Plantea: $+1 (del H) + X + [3 \times (-2) = -6] = 0$. Al resolver $+1 + X - 6 = 0$, tu resultado es +5. Recuerda poner el signo +";
        if(ejActual === 9) pistaLab = "El Manganeso disminuyó su estado de carga de +4 a +2. Al bajar en la recta Redox significa que ganó cargas negativas. Por ende se reduce.";

        texto.innerHTML = `
            <b>Pista del Laboratorio Educativo:</b><br>
            ${pistaLab}<br><br>
            <i>Consejo: Escribe tu respuesta en minúsculas y sin tildes para asegurar la validación del sistema.</i>
        `;
        
        setTimeout(() => {
            const contenedor = document.getElementById('interaccion');
            contenedor.scrollTo({ top: contenedor.scrollHeight, behavior: 'smooth' });
        }, 80);
    }
}

window.addEventListener('load', () => {
    cambiarEjercicio();
    window.addEventListener('resize', dibujarEsquemaQuimico);
});
