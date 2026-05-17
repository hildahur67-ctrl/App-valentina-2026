const canvas = document.getElementById('plano');
const ctx = canvas.getContext('2d');

const tallerQuimica = [
    {
        id: 1,
        t: "Punto 1: Capa de Valencia y Distribución Electrónica",
        incisos: [
            { 
                elemento: "Carbono (C)", ecuacion: "1s² 2s² 2p²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Carbono?", r: "2", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Los electrones se organizan en niveles de energía (pisos). La Capa de Valencia es el nivel más alto al que logró llegar el elemento.<br><br><b>🛠️ 2. La Estrategia:</b> Busca el número grande más alto al inicio de las letras.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Oxígeno ($1s^{2}2s^{2}2p^{4}$):</i> El nivel grande más alto es el 2. Capa de valencia = <b>2</b>.<br><br><b>✏️ TU RETO:</b> Sigue el orden para el <b>Carbono (C)</b>. Digita solo el número.`,
                pista: "Mira la distribución: 1s² 2s² 2p². El número grande más alto es el 2.", tipo: "bohr" 
            },
            { 
                elemento: "Aluminio (Al)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Aluminio?", r: "3", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Cloro ($1s^{2}2s^{2}2p^{6}3s^{2}3p^{5}$):</i> El número grande máximo es el 3. Capa de valencia = <b>3</b>.<br><br><b>✏️ TU RETO:</b> Aplica la lógica para el <b>Aluminio (Al)</b>. Digita el número.`,
                pista: "Busca el número grande máximo. Llegó hasta el nivel 3.", tipo: "bohr" 
            },
            { 
                elemento: "Fósforo (P)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p³", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Fósforo?", r: "3", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Azufre ($1s^{2}2s^{2}2p^{6}3s^{2}3p^{4}$):</i> El número máximo es el 3. Capa de valencia = <b>3</b>.<br><br><b>✏️ TU RETO:</b> Sigue los pasos para el <b>Fósforo (P)</b>.`,
                pista: "El nivel mayor que aparece al inicio de sus letras externas es el 3.", tipo: "bohr" 
            },
            { 
                elemento: "Sodio (Na)", ecuacion: "1s² 2s² 2p⁶ 3s¹", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Sodio?", r: "3", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Potasio ($1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}4s^{1}$):</i> El número grande mayor es 4. Capa de valencia = <b>4</b>.<br><br><b>✏️ TU RETO:</b> Sigue el orden para el <b>Sodio (Na)</b>.`,
                pista: "El último piso de energía alcanzado tiene el número grande 3.", tipo: "bohr" 
            },
            { 
                elemento: "Calcio (Ca)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Calcio?", r: "4", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Titanio ($1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}4s^{2}3d^{2}$):</i> El nivel más alto de la superficie sigue siendo el grande 4. Capa de valencia = <b>4</b>.<br><br><b>✏️ TU RETO:</b> Descubre la capa del <b>Calcio (Ca)</b>.`,
                pista: "Mira el final de la cadena: llegó hasta el nivel grande 4.", tipo: "bohr" 
            },
            { 
                elemento: "Argón (Ar)", ecuacion: "1s² 2s² 2p⁶ 3s² 3p⁶", pregunta: "¿Cuál es la <b>Capa de Valencia</b> para el Argón?", r: "3", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Para el Neón ($1s^{2}2s^{2}2p^{6}$):</i> El número grande máximo es el 2. Capa de valencia = <b>2</b>.<br><br><b>✏️ TU RETO:</b> Aplica el patrón en el gas noble <b>Argón (Ar)</b>.`,
                pista: "Su configuración externa cierra en el nivel principal de energía 3.", tipo: "bohr" 
            }
        ]
    },
    {
        id: 2,
        t: "Punto 1.2: Comportamiento Atómico (Regla del Octeto)",
        incisos: [
            { 
                elemento: "Sodio (Na)", ecuacion: "Capa externa: 3s¹ (1 e-)", pregunta: "¿Para estabilizarse este elemento <b>cede</b>, <b>recibe</b> o comparte?", r: "cede", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Los átomos buscan tener 8 electrones afuera. Si tienen muy poquitos (1, 2 o 3), prefieren regalarlos.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El Potasio (1 e- externo):</i> Le conviene donarlo para quedar estable. El Potasio <b>cede</b>.<br><br><b>✏️ TU RETO:</b> Analiza el <b>Sodio (Na)</b>. (Responde: cede / recibe / comparte)`,
                pista: "Le cuesta menos energía regalar ese único electrón suelto. Escribe: cede", tipo: "bohr" 
            },
            { 
                elemento: "Carbono (C)", ecuacion: "Capa externa: 2s² 2p² (4 e-)", pregunta: "Al estar justo en la mitad (4 electrones), ¿este elemento cede, recibe o <b>comparte</b>?", r: "comparte", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El Silicio (4 e- externos):</i> No le es fácil ganar 4 ni perder 4, así que se asocia. El Silicio <b>comparte</b>.<br><br><b>✏️ TU RETO:</b> Analiza el comportamiento del <b>Carbono (C)</b>.`,
                pista: "Los elementos del grupo 4A forman enlaces covalentes donde se asocian. Escribe: comparte", tipo: "bohr" 
            },
            { 
                elemento: "Aluminio (Al)", ecuacion: "Capa externa: 3s² 3p¹ (3 e-)", pregunta: "El Aluminio tiene 3 electrones de valencia. ¿Este metal cede, recibe o comparte?", r: "cede", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El Magnesio (2 e- externos):</i> Al ser un metal con pocos electrones, los regala. El Magnesio <b>cede</b>.<br><br><b>✏️ TU RETO:</b> ¿Qué hace el <b>Aluminio (Al)</b>?`,
                pista: "Tiene menos de 4 electrones, es un metal electropositivo. Escribe: cede", tipo: "bohr" 
            }
        ]
    },
    {
        id: 3,
        t: "Punto 2: Moléculas Diatómicas (Fuerzas Intramoleculares)",
        incisos: [
            { 
                elemento: "Gas Hidrógeno (H₂)", ecuacion: "H - H", pregunta: "¿Qué tipo de enlace presenta la molécula de Hidrógeno (<b>H2</b>)?", r: "covalente apolar", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Cuando dos no metales idénticos se unen, comparten electrones con la misma fuerza exacta.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El gas Yodo ($I_{2}$):</i> Son dos gemelos no metales unidos. Su enlace es <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> ¿Qué fuerza une al <b>Hidrógeno (H2)</b>? (Responde: covalente apolar / covalente polar / ionico)`,
                pista: "Dos no metales idénticos comparten electrones con la misma fuerza. Escribe: covalente apolar", tipo: "enlace" 
            },
            { 
                elemento: "Gas Cloro (Cl₂)", ecuacion: "Cl - Cl", pregunta: "¿Qué tipo de enlace une al gas Cloro (<b>Cl2</b>)?", r: "covalente apolar", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>El gas Bromo ($Br_{2}$):</i> Comparten de forma simétrica. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Sigue el mismo patrón para el gas <b>Cloro (Cl2)</b>.`,
                pista: "Dos átomos idénticos de cloro compartiendo de forma simétrica. Escribe: covalente apolar", tipo: "enlace" 
            },
            { 
                elemento: "Gas Oxígeno (O₂)", ecuacion: "O = O", pregunta: "¿Qué tipo de enlace une al gas Oxígeno (<b>O2</b>)?", r: "covalente apolar", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Unión O=O:</i> Siguen siendo dos hermanos gemelos compartiendo electrones. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Resuelve para el <b>Oxígeno (O2)</b>.`,
                pista: "Aunque es un enlace doble, las fuerzas son iguales a ambos lados. Escribe: covalente apolar", tipo: "enlace" 
            },
            { 
                elemento: "Gas Nitrógeno (N₂)", ecuacion: "N ≡ N", pregunta: "¿Qué tipo de enlace une al gas Nitrógeno (<b>N2</b>)?", r: "covalente apolar", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Dos átomos del mismo elemento:</i> La resta de electronegatividad da 0. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Resuelve para el <b>Nitrógeno (N2)</b>.`,
                pista: "Unión de dos no metales idénticos compartiendo tres pares de electrones. Escribe: covalente apolar", tipo: "enlace" 
            },
            { 
                elemento: "Gas Flúor (F₂)", ecuacion: "F - F", pregunta: "¿Qué tipo de enlace une al gas Flúor (<b>F2</b>)?", r: "covalente apolar", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Toda molécula homonuclear diatómica:</i> Tiene fuerzas equilibradas. Enlace = <b>covalente apolar</b>.<br><br><b>✏️ TU RETO:</b> Completa el bloque con el <b>Flúor (F2)</b>.`,
                pista: "Mismo elemento compartiendo de forma equitativa. Escribe: covalente apolar", tipo: "enlace" 
            }
        ]
    },
    {
        id: 4,
        t: "Punto 3: Clasificación de Reacciones Químicas",
        incisos: [
            { 
                elemento: "Reacción a", ecuacion: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sintesis", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Dos sustancias separadas se fusionan en un solo producto grande (A + B → AB).<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$2H_{2} + O_{2} \rightarrow 2H_{2}O$:</i> Dos reactivos se convirtieron en uno solo. Es una <b>sintesis</b>.<br><br><b>✏️ TU RETO:</b> Clasifica el inciso a.`,
                pista: "Dos reactivos separados se unieron en un único producto. Escribe: sintesis", tipo: "tubo" 
            },
            { 
                elemento: "Reacción b", ecuacion: "Mg(s) + 2AgNO₃(ac) → Mg(NO₃)₂(ac) + 2Ag(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sustitucion", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Un elemento fuerte llega y desplaza a otro de su compuesto original tomando su lugar.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$Zn + 2HCl \rightarrow ZnCl_{2} + H_{2}$:</i> El Zinc desplazó al Hidrógeno. Es una <b>sustitucion</b> simple.<br><br><b>✏️ TU RETO:</b> Clasifica el inciso b.`,
                pista: "El Magnesio desplazó y tomó el lugar de la Plata. Es una sustitución. Escribe: sustitucion", tipo: "tubo" 
            },
            { 
                elemento: "Reacción c", ecuacion: "CuCO₃(s) → CuO(s) + CO₂(g)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "descomposicion", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Una sola molécula compleja se rompe debido al calor en dos o más partes sencillas.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$2H_{2}O_{2} \rightarrow 2H_{2}O + O_{2}$:</i> Una sola sustancia se dividió. Es una <b>descomposicion</b>.<br><br><b>✏️ TU RETO:</b> Clasifica el inciso c.`,
                pista: "Una sola molécula grande se rompió en dos partes más pequeñas. Escribe: descomposicion", tipo: "tubo" 
            },
            { 
                elemento: "Reacción d", ecuacion: "NaOH(ac) + HCl(ac) → NaCl(ac) + H₂O(l)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sustitucion", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Dos compuestos intercambian parejas entre sí (Doble sustitución o metátesis).<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$AgNO_{3} + NaCl \rightarrow AgCl + NaNO_{3}$:</i> Intercambiaron extremos. Sigue siendo una <b>sustitucion</b>.<br><br><b>✏️ TU RETO:</b> Clasifica la reacción del inciso d.`,
                pista: "Intercambio de parejas entre el sodio y el hidrógeno. Escribe: sustitucion", tipo: "tubo" 
            },
            { 
                elemento: "Reacción e", ecuacion: "C₄H₈(g) + 6O₂(g) → 4CO₂(g) + 4H₂O(g)", pregunta: "Al liberar CO₂ y H₂O fijos con oxígeno, ¿qué reacción es?", r: "combustion", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Un combustible se quema con Oxígeno desprendiendo gas carbónico ($CO_{2}$) y vapor de agua ($H_{2}O$).<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$CH_{4} + 2O_{2} \rightarrow CO_{2} + 2H_{2}O$:</i> Produce fuego, humo carbónico y agua. Es <b>combustion</b>.<br><br><b>✏️ TU RETO:</b> Sigue el mismo orden para clasificar el inciso e.`,
                pista: "Libera gas carbónico y agua en presencia de fuego. Escribe: combustion", tipo: "fuego" 
            },
            { 
                elemento: "Reacción f", ecuacion: "ZnCO₃(s) → CO₂(g) + ZnO(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "descomposicion", 
                d: `<b>📋 EJEMPLO GUÍA
                
