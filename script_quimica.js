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
                pista: "Mira the final de la cadena: llegó hasta el nivel grande 4.", tipo: "bohr" 
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
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$2KClO_{3} \rightarrow 2KCl + 3O_{2}$:</i> Una sola molécula reactiva se fragmentó en dos productos independientes. Es una <b>descomposicion</b>.<br><br><b>✏️ TU RETO:</b> Clasifica el inciso f.`,
                pista: "Un carbonato que al calentarse se rompe en un óxido y gas carbónico. Escribe: descomposicion", tipo: "tubo" 
            },
            { 
                elemento: "Reacción g", ecuacion: "Al₂(SO₄)₃(ac) + 6KOH(ac) → 2Al(OH)₃(s) + 3K₂SO₄(ac)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sustitucion", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$BaCl_{2} + Na_{2}SO_{4} \rightarrow BaSO_{4} + 2NaCl$:</i> Los metales cambiaron de posición mutua. Es una <b>sustitucion</b>.<br><br><b>✏️ TU RETO:</b> Clasifica el inciso g.`,
                pista: "El Aluminio y el Potasio intercambian sus radicales. Escribe: sustitucion", tipo: "tubo" 
            },
            { 
                elemento: "Reacción h", ecuacion: "Pb(s) + O₂(g) → PbO₂(s)", pregunta: "Clasifica esta reacción: (sintesis / descomposicion / sustitucion / combustion)", r: "sintesis", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$2Mg + O_{2} \rightarrow 2MgO$:</i> Dos elementos puros se combinan para armar un compuesto. Es una <b>sintesis</b>.<br><br><b>✏️ TU RETO:</b> Cierra el punto clasificando el inciso h.`,
                pista: "Plomo más Oxígeno forman Dióxido de plomo, una unión directa. Escribe: sintesis", tipo: "tubo" 
            }
        ]
    },
    {
        id: 5,
        t: "Punto 4 y 5: Conteo y Verificación de Balanzas",
        incisos: [
            { 
                elemento: "Conteo 4.a", ecuacion: "2NO(g) + O₂(g) → 2NO₂(g)", pregunta: "¿Cuántos átomos de Oxígeno (O) totales hay en los PRODUCTOS (2NO₂)?", r: "4", 
                d: `<b>👁️ 1. El Mapa Visual:</b> El número de adelante multiplica a los subíndices pequeños de la molécula.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>En la molécula $2SO_{3}$:</i> Multiplicamos el coeficiente 2 por el 3 del Oxígeno -> 2 * 3 = <b>6 átomos</b>.<br><br><b>✏️ TU RETO:</b> Cuenta los Oxígenos para los productos de tu taller: <b>2NO₂</b>.`,
                pista: "Multiplica el 2 grande del inicio por el 2 pequeño del oxígeno: 2 x 2 = 4.", tipo: "balanza" 
            },
            { 
                elemento: "Reactivos 4.b", ecuacion: "5C(s) + 2SO₂(g) → CS₂(g) + 4CO(g)", pregunta: "¿Cuántos átomos de Oxígeno (O) totales hay en los REACTIVOS (2SO₂)?", r: "4", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>En los reactivos $3O_{2}$:</i> Multiplicamos el 3 de adelante por el 2 de abajo -> 3 * 2 = <b>6 átomos</b>.<br><br><b>✏️ TU RETO:</b> Cuenta los Oxígenos presentes en los reactivos del inciso b: <b>2SO₂</b>.`,
                pista: "Multiplica el coeficiente 2 de adelante por el subíndice 2 del Oxígeno. 2 x 2 = 4.", tipo: "balanza" 
            },
            { 
                elemento: "Verificación 5.a", ecuacion: "S(s) + O₂(g) → SO₃(g)", pregunta: "¿Esta ecuación se encuentra balanceada correctamente? (si / no)", r: "no", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Una ecuación está balanceada si el número total de átomos de cada elemento es idéntico a ambos lados de la flecha.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$CH_{4} + O_{2} \rightarrow CO_{2} + H_{2}O$:</i> A la izquierda hay 4 Hidrógenos y a la derecha solo 2. <b>no</b> está balanceada.<br><br><b>✏️ TU RETO:</b> Cuenta los Oxígenos a ambos lados de tu ecuación de Azufre. (si / no)`,
                pista: "Cuenta los Oxígenos: hay 2 a la izquierda y 3 a la derecha. No está igualada. Escribe: no", tipo: "balanza" 
            },
            { 
                elemento: "Verificación 5.b", ecuacion: "2Al(s) + 3Cl₂(g) → 2AlCl₃(s)", pregunta: "¿Esta ecuación del Aluminio está balanceada? (si / no)", r: "si", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>$2H_{2} + O_{2} \rightarrow 2H_{2}O$:</i> Hay 4 Hidrógenos y 2 Oxígenos en cada lado. La balanza da <b>si</b>.<br><br><b>✏️ TU RETO:</b> Revisa los átomos a ambos lados para el Aluminio y el Cloro.`,
                pista: "Hay 2 Aluminios y 6 Cloros en cada lado de la balanza. Todo coincide. Escribe: si", tipo: "balanza" 
            }
        ]
    },
    {
        id: 6,
        t: "Punto 6: Balanceo por Tanteo (Coeficientes)",
        incisos: [
            { 
                elemento: "Reacción Fe", ecuacion: "___ Fe + 3O₂ → 2Fe₂O₃", pregunta: "¿Qué coeficiente grande debe ir frente al Hierro (Fe)?", r: "4", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Ajustamos los números grandes de adelante hasta que las esferas de reactivos pesen igual a las de productos.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Balanceando: ___ Al + 3O₂ → 2Al₂O₃:</i> A la derecha hay 2 * 2 = 4 Aluminios. Colocamos un <b>4</b> al inicio.<br><br><b>✏️ TU RETO:</b> Haz el mismo conteo para el caso de tu receta del Hierro.`,
                pista: "A la derecha tienes 2 x 2 = 4 Hierros totales. Coloca un 4 a la izquierda.", tipo: "balanza" 
            },
            { 
                elemento: "Reacción Na", ecuacion: "___ Na + Cl₂ → 2NaCl", pregunta: "¿Qué coeficiente debe ir frente al Sodio (Na)?", r: "2", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>___ K + F₂ → 2KF:</i> A la derecha se formaron 2 Potasios. Necesitamos un <b>2</b> al inicio a la izquierda.<br><br><b>✏️ TU RETO:</b> Ajusta el coeficiente del Sodio metálico.`,
                pista: "A la derecha el coeficiente grande 2 afecta a toda la molécula de NaCl. Necesitas 2 Sodios a la izquierda.", tipo: "balanza" 
            },
            { 
                elemento: "Reacción Ca", ecuacion: "Ca + Br₂ → ___ CaBr₂", pregunta: "¿Qué coeficiente invisible (número) equilibra el producto CaBr₂?", r: "1", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Mg + I₂ → ___ MgI₂:</i> Un Magnesio y dos Yodos a la izquierda calzan exacto con un paquete a la derecha. Coeficiente = <b>1</b>.<br><br><b>✏️ TU RETO:</b> Descubre el coeficiente del producto para el Calcio.`,
                pista: "Compara: ya hay 1 Calcio y 2 Bromos en ambos lados. El número neutro multiplicador es 1.", tipo: "balanza" 
            }
        ]
    },
    {
        id: 7,
        t: "Punto 7: Estados de Oxidación y Redox",
        incisos: [
            { 
                elemento: "Ácido Nítrico", ecuacion: "HNO₃", pregunta: "¿Con qué estado de oxidación trabaja el Nitrógeno (N)?", r: "+5", 
                d: `<b>👁️ 1. El Mapa Visual:</b> Las cargas de una molécula neutra deben sumar cero. El Hidrógeno aporta +1 y cada Oxígeno vale -2.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Buscando el Cloro en el HClO₃:</i> H aporta +1, tres Oxígenos valen -6. Para neutralizar: +1 + X - 6 = 0, por ende trabaja con <b>+5</b>.<br><br><b>✏️ TU RETO:</b> Sigue los pasos algebraicos para hallar el estado del Nitrógeno en el <b>HNO3</b>.`,
                pista: "+1 + X - 6 = 0. Despejando la X te da +5. Recuerda poner el signo +", tipo: "recta" 
            },
            { 
                elemento: "Manganeso", ecuacion: "Mn⁺⁴ → Mn⁺²", pregunta: "Si el Manganeso disminuye su estado de +4 a +2, ¿se <b>oxida</b> o se <b>reduce</b>?", r: "reduce", 
                d: `<b>👁️ 1. El Mapa Visual:</b> En la recta numérica Redox, si el estado de carga disminuye (baja hacia la izquierda), el átomo está ganando electrones negativos.<br><br><b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Si el Azufre pasa de $S^{+6}$ a $S^{+4}$:</i> Su número disminuyó en la recta. Decimos que el Azufre se <b>reduce</b>.<br><br><b>✏️ TU RETO:</b> Evalúa la transición del Manganeso. (Responde: oxida / reduce)`,
                pista: "Al disminuir su número en la recta Redox significa que ganó electrones. Escribe: reduce", tipo: "recta" 
            },
            { 
                elemento: "Cobre Puro", ecuacion: "Cu⁰ → Cu⁺²", pregunta: "Si el Cobre libre aumenta su carga de 0 a +2 en los productos, ¿se <b>oxida</b> o se <b>reduce</b>?", r: "oxida", 
                d: `<b>📋 EJEMPLO GUÍA PASO A PASO:</b><br><i>Si el Zinc pasa de $Zn^{0}$ a $Zn^{+2}$:</i> Su número escaló hacia la derecha de la recta por perder electrones. El Zinc se <b>oxida</b>.<br><br><b>✏️ TU RETO:</b> Evalúa el comportamiento del Cobre de la ecuación 7.e.`,
                pista: "Aumentar el número de oxidación significa perder electrones de carga negativa. Escribe: oxida", tipo: "recta" 
            }
        ]
    }
];

let puntoActual = 0;
let incisoActual = 0;

function contarIncisosTotales() {
    return tallerQuimica.reduce((acc, p) => acc + p.incisos.length, 0);
}

function calcularProgresoActual() {
    let completados = 0;
    for (let i = 0; i < puntoActual; i++) {
        completados += tallerQuimica[i].incisos.length;
    }
    completados += incisoActual;
    return Math.max(5, (completados / contarIncisosTotales()) * 100);
}

function dibujarEsquemaQuimico() {
    if (!canvas || !canvas.offsetWidth) return;
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const w = canvas.width; const h = canvas.height;
    ctx.clearRect(0, 0, w, h); ctx.lineWidth = 3; ctx.font = "bold 12px Arial";

    const tipoGrafico = tallerQuimica[puntoActual].incisos[incisoActual].tipo;

    if (tipoGrafico === "bohr") {
        ctx.strokeStyle = "#14b8a6"; ctx.beginPath(); ctx.arc(w/2, h/2, 15, 0, Math.PI*2); ctx.fillStyle = "#ccfbf1"; ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#115e59"; ctx.fillText("Núcleo", w/2 - 20, h/2 + 4);
        ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.strokeStyle = "#94a3b8";
        ctx.beginPath(); ctx.arc(w/2, h/2, 35, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
    } 
    else if (tipoGrafico === "enlace") {
        ctx.strokeStyle = "#0d9488";
        ctx.beginPath(); ctx.arc(w/2 - 25, h/2, 25, 0, Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2 + 25, h/2, 25, 0, Math.PI*2); ctx.stroke();
    } 
    else if (tipoGrafico === "tubo" || tipoGrafico === "fuego") {
        ctx.strokeStyle = "#475569";
        ctx.beginPath(); ctx.moveTo(w/2 - 15, h*0.25); ctx.lineTo(w/2 - 15, h*0.65);
        ctx.arc(w/2, h*0.65, 15, Math.PI, 0, true); ctx.lineTo(w/2 + 15, h*0.25); ctx.stroke();
        ctx.fillStyle = tipoGrafico === "fuego" ? "#f43f5e" : "#38bdf8";
        ctx.beginPath(); ctx.arc(w/2, h*0.65, 13, Math.PI, 0, true); ctx.closePath(); ctx.fill();
    } 
    else {
        ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(w/2, h*0.35); ctx.lineTo(w/2, h*0.75); ctx.stroke();
        ctx.lineWidth = 4; ctx.strokeStyle = "#0d9488"; ctx.beginPath(); ctx.moveTo(w*0.3, h*0.4); ctx.lineTo(w*0.7, h*0.4); ctx.stroke();
    }
}

function cambiarEjercicio() {
    const selector = document.getElementById('selector-ejercicio');
    if(!selector) return;
    puntoActual = parseInt(selector.value);
    incisoActual = 0;
    cargarContenidoInciso();
}

function cargarContenidoInciso() {
    const p = tallerQuimica[puntoActual];
    const inc = p.incisos[incisoActual];
    
    document.getElementById('instruccion').innerHTML = `
        <div style="color:#0d9488; font-size:14px; font-weight:bold; margin-bottom:2px;">
            ${p.t}
        </div>
        <div style="color:#94a3b8; font-size:11px; font-weight:bold; margin-bottom:6px; text-transform: uppercase;">
            Inciso Actual: ${inc.elemento}
        </div>
        <div style="background:#1e293b; color:#2dd4bf; padding:6px; border-radius:5px; font-family:monospace; text-align:center; font-size:14px; margin-bottom:10px;">
            ${inc.ecuacion}
        </div>
        <div style="font-size:13px; color:#334155; line-height:1.45; text-align:left;">
            ${inc.d}
        </div>
    `;
    
    document.getElementById('zona-solucion-reto').style.display = "none";
    document.getElementById('btn-entendido').style.display = "block";
    document.getElementById('explicacion-zona').style.display = "none";
    document.getElementById('resultado-usuario').value = "";
    
    document.getElementById('avance').style.width = calcularProgresoActual() + "%";
    
    setTimeout(dibujarEsquemaQuimico, 5);
}

function activarModoReto() {
    document.getElementById('btn-entendido').style.display = "none";
    document.getElementById('zona-solucion-reto').style.display = "block";
}

function verificarRespuesta() {
    const rU = document.getElementById('resultado-usuario').value.trim().toLowerCase();
    const p = tallerQuimica[puntoActual];
    const inc = p.incisos[incisoActual];
    const zona = document.getElementById('explicacion-zona');
    const texto = document.getElementById('texto-explicativo');

    if (rU === inc.r) {
        incisoActual++;
        
        if (incisoActual < p.incisos.length) {
            alert("¡Excelente Valentina! Inciso completado. Pasamos al siguiente elemento del mismo punto.");
            cargarContenidoInciso();
        } else {
            puntoActual++;
            incisoActual = 0;
            
            if (puntoActual < tallerQuimica.length) {
                alert("¡Fabuloso! Has completado todos los incisos de este bloque. Pasamos automáticamente al siguiente punto del taller.");
                document.getElementById('selector-ejercicio').value = puntoActual;
                cargarContenidoInciso();
            } else {
                alert("¡Felicidades Valentina! Completaste toda la preparación de Química.");
                puntoActual = 0; incisoActual = 0;
                document.getElementById('selector-ejercicio').value = 0;
                cargarContenidoInciso();
            }
        }
    } else {
        zona.style.display = "block";
        texto.innerHTML = `
            <b>Pista del Laboratorio:</b><br>
            El dato no coincide. Revisa la ayuda de arriba: ${inc.pista}
        `;
    }
}

window.addEventListener('load', () => {
    cargarContenidoInciso();
    window.addEventListener('resize', dibujarEsquemaQuimico);
});
