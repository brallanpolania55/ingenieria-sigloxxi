const cardData = {
    physics: [
        { title: "Leyes del Movimiento de Newton", description: "Los tres principios fundamentales que describen la relación entre el movimiento de un objeto y las fuerzas que actúan sobre él. Forman la base de la mecánica clásica.", tag: "Mecánica" },
        { title: "Mecánica Cuántica", description: "Describe el comportamiento de partículas subatómicas donde las reglas de la física clásica ya no aplican. Introduce conceptos como superposición y entrelazamiento cuántico.", tag: "Moderna" },
        { title: "Teoría de la Relatividad", description: "Formulada por Einstein, revolucionó nuestra comprensión del espacio, tiempo y gravedad. Demostró que la masa y la energía son equivalentes.", tag: "Relatividad" },
        { title: "Electromagnetismo", description: "Unifica la electricidad y el magnetismo en una sola teoría. Describe cómo las cargas eléctricas generan campos que ejercen fuerzas sobre otras cargas.", tag: "Campos" },
        { title: "Termodinámica", description: "Estudia las leyes que gobiernan la energía, el calor y el trabajo. La segunda ley establece que la entropía del universo siempre aumenta.", tag: "Energía" },
        { title: "Física Nuclear", description: "Estudia la estructura, comportamiento e interacciones del núcleo atómico. A través de la fisión y fusión nuclear se libera energía monumental.", tag: "Nuclear" },
        { title: "Óptica y Luz", description: "Estudia el comportamiento de la luz, incluyendo reflexión, refracción, difracción e interferencia. Define cómo percibimos el mundo visual.", tag: "Luz" },
        { title: "Física de Partículas", description: "Explora los componentes fundamentales de la materia y sus interacciones. El Modelo Estándar describe quarks, leptones y bosones.", tag: "Subatómico" },
        { title: "Gravedad y Órbitas", description: "La fuerza de atracción entre masas que mantiene a los planetas en órbita alrededor del sol y determina la estructura del universo a gran escala.", tag: "Celeste" },
        { title: "Ondas y Vibraciones", description: "Estudia la propagación de perturbaciones a través de medios materiales o vacío. El sonido, la luz y las olas son ejemplos de ondas.", tag: "Ondas" },
        { title: "Electricidad y Circuitos", description: "El flujo de electrones a través de conductores permite el funcionamiento de todos los dispositivos electrónicos modernos.", tag: "Circuito" },
        { title: "Magnetismo", description: "Fenómeno causado por cargas eléctricas en movimiento. Los imanes y los campos magnéticos terrestres son fundamentales para la tecnología.", tag: "Magnético" },
        { title: "Acústica", description: "Rama de la física que estudia el sonido, su producción, transmisión y efectos. Aplica principios de ondas mecánicas.", tag: "Sonido" },
        { title: "Física del Estado Sólido", description: "Estudia las propiedades de la materia en estado sólido, incluyendo semiconductores, superconductores y cristales.", tag: "Sólidos" },
        { title: "Astrofísica", description: "Aplica los principios de la física al estudio de los cuerpos celestes, las estrellas, galaxias y el origen del universo.", tag: "Espacio" },
        { title: "Física de Fluidos", description: "Estudia el comportamiento de líquidos y gases en reposo y en movimiento. Incluye hidrostática y hidrodinámica.", tag: "Fluidos" },
        { title: "Física Térmica", description: "Estudia la temperatura, el calor y sus efectos sobre la materia. Incluye la transferencia de energía térmica.", tag: "Calor" },
        { title: "Óptica Avanzada", description: "Láseres, fibras ópticas, holografía y tecnologías fotónicas que aprovechan las propiedades de la luz coherente.", tag: "Láser" },
        { title: "Física del Plasma", description: "El cuarto estado de la materia consistente en gas ionizado. Se encuentra en estrellas y aplicaciones de fusión nuclear.", tag: "Plasma" },
        { title: "Estadística y Termodinámica", description: "Conecta las propiedades microscópicas de la materia con las observadas macroscópicamente mediante promedios estadísticos.", tag: "Estadística" }
    ],
    chemistry: [
        { title: "Tabla Periódica", description: "Organización de los 118 elementos conocidos según sus propiedades. Cada elemento tiene un número atómico único que define su estructura electrónica.", tag: "Elementos" },
        { title: "Reacciones Químicas", description: "Transformaciones donde sustancias se convierten en otras mediante el rearranjo de átomos. Involucran rompimiento y formación de enlaces químicos.", tag: "Transformación" },
        { title: "Química Orgánica", description: "Estudia los compuestos del carbono y sus reacciones. La base de la vida y de millones de materiales sintéticos que usamos diariamente.", tag: "Carbono" },
        { title: "Equilibrio Químico", description: "Estado donde las velocidades de reacción directa e inversa son iguales. Las concentraciones de reactivos y productos permanecen constantes.", tag: "Balance" },
        { title: "Electroquímica", description: "Relación entre electricidad y reacciones químicas. Permite crear baterías, celdas solares y procesos de galvanoplastia.", tag: "Electricidad" },
        { title: "Química Analítica", description: "Técnicas para identificar y cuantificar sustancias químicas. Incluye métodos como cromatografía, espectroscopía y titulación.", tag: "Análisis" },
        { title: "Bioquímica", description: "Estudia los procesos químicos en organismos vivos. Las enzimas catalizan reacciones, el ADN almacena información, las proteínas ejecutan funciones.", tag: "Vida" },
        { title: "Química de Materiales", description: "Diseño y síntesis de nuevos materiales con propiedades específicas. Desde polímeros hasta semiconductores y materiales superconductores.", tag: "Materiales" },
        { title: "Estequiometría", description: "Cálculo de las cantidades de reactivos y productos en reacciones químicas basado en las leyes de la conservación de la masa.", tag: "Cálculo" },
        { title: "Cinética Química", description: "Estudia la velocidad de las reacciones químicas y los factores que la afectan como temperatura, concentración y catalizadores.", tag: "Velocidad" },
        { title: "Química Inorgánica", description: "Estudia los elementos y compuestos que no contienen carbono. Incluye metales, no metales y sus propiedades periódicas.", tag: "Inorgánico" },
        { title: "Química Ambiental", description: "Estudia los procesos químicos en el medio ambiente, incluyendo la contaminación atmosférica, agua y suelos.", tag: "Ambiente" },
        { title: "Química Computacional", description: "Uso de simulaciones por computadora para predecir el comportamiento de moléculas y diseñar nuevos compuestos.", tag: "Simulación" },
        { title: "Química Farmacéutica", description: "Diseño y desarrollo de fármacos, desde la síntesis de compuestos hasta los ensayos clínicos y aprobación regulatoria.", tag: "Fármacos" },
        { title: "Química de Alimentos", description: "Estudia los componentes químicos de los alimentos, reacciones durante cocción y métodos de conservación.", tag: "Alimentos" },
        { title: "Polímeros y Plásticos", description: "Materiales formados por cadenas largas de moléculas repetitivas. Incluyen plásticos, elastómeros y fibras sintéticas.", tag: "Polímeros" },
        { title: "Catálisis", description: "Aceleración de reacciones químicas mediante sustancias que no se consumen. Los catalizadores son esenciales en la industria.", tag: "Catalizadores" },
        { title: "Química Verde", description: "Diseño de procesos químicos que reducen o eliminan el uso de sustancias peligrosas para el medio ambiente.", tag: "Sostenible" },
        { title: "Química Superficial", description: "Estudio de fenómenos químicos en las superficies de materiales, incluyendo adhesión, corrosión y recubrimientos.", tag: "Superficies" },
        { title: "Química de Nanoestructuras", description: "Manipulación de materiales a escala nanométrica con propiedades únicas. Aplicaciones en electrónica y medicina.", tag: "Nano" },
        { title: "Química del Agua", description: "Propiedades únicas del agua como disolvente universal. Incluye soluciones, pH, dureza y tratamiento de aguas.", tag: "Agua" },
        { title: "Enlace Químico", description: "Fuerzas que mantienen unidos a los átomos en moléculas y cristales. Incluye enlaces iónicos, covalentes y metálicos.", tag: "Enlace" },
        { title: "Espectroscopía", description: "Técnicas que estudian la interacción de la radiación electromagnética con la materia para identificar compuestos.", tag: "Identificación" },
        { title: "Química de Superficies", description: "Fenómenos en las interfases entre fases, fundamentales para catálisis, corrosión y ciencia de recubrimientos.", tag: "Interfases" }
    ],
    engineering: [
        { title: "Ingeniería Mecánica", description: "Diseño y manufacture de máquinas y sistemas mecánicos. Aplica principios de física y materiales para crear soluciones funcionales.", tag: "Máquinas" },
        { title: "Ingeniería Electrónica", description: "Diseño de circuitos y sistemas que controlan el flujo de electrones. Desde microchips hasta sistemas de potencia y comunicaciones.", tag: "Circuitos" },
        { title: "Ingeniería Civil", description: "Planificación y construcción de infraestructura: puentes, edificios, carreteras y sistemas de agua. Moldea el entorno construido.", tag: "Infraestructura" },
        { title: "Ingeniería Aeroespacial", description: "Diseño de aeronaves y vehículos espaciales. Combina aerodinámica, ciencia de materiales y sistemas de propulsión para desafiar la gravedad.", tag: "Aeroespacial" },
        { title: "Ingeniería de Software", description: "Desarrollo de sistemas computacionales mediante metodologías estructuradas. Creación de aplicaciones desde código fuente hasta producto final.", tag: "Software" },
        { title: "Ingeniería de Sistemas", description: "Enfoque interdisciplinario para diseñar y gestionar sistemas complejos. Considera todas las partes y sus interacciones como un todo.", tag: "Sistemas" },
        { title: "Ingeniería Biomédica", description: "Aplicación de principios de ingeniería a la medicina. Diseño de implantes, dispositivos de diagnóstico y terapias avanzadas.", tag: "Biomedicina" },
        { title: "Ingeniería de Materiales", description: "Desarrollo de nuevos materiales con propiedades optimizadas. Metales, cerámicos, polímeros y compuestos para aplicaciones específicas.", tag: "Materiales" },
        { title: "Ingeniería Mecatrónica", description: "Integración de mecánica, electrónica e informática para diseñar productos inteligentes y sistemas automatizados.", tag: "Automatización" },
        { title: "Ingeniería Química", description: "Diseño de procesos para transformar materias primas en productos útiles mediante reacciones químicas y operaciones de separación.", tag: "Procesos" },
        { title: "Ingeniería de Telecomunicaciones", description: "Diseño y gestión de sistemas de comunicación, incluyendo redes de datos, radio, televisión y satélites.", tag: "Comunicaciones" },
        { title: "Ingeniería de Producción", description: "Optimización de procesos de manufacture, gestión de cadenas de suministro y mejora continua de la eficiencia.", tag: "Manufactura" },
        { title: "Ingeniería de Control", description: "Diseño de sistemas que regulan el comportamiento de otros sistemas. Incluye automatización y robótica industrial.", tag: "Control" },
        { title: "Ingeniería de Petróleos", description: "Exploración, extracción y procesamiento de hidrocarburos. Incluye perforación, refinación y gestión de yacimientos.", tag: "Petróleo" },
        { title: "Ingeniería Ambiental", description: "Soluciones para problemas ambientales, tratamiento de aguas residuales, gestión de residuos y energía renovable.", tag: "Ambiente" },
        { title: "Ingeniería Industrial", description: "Optimización de sistemas complejos de producción y servicios. Incluye logística, calidad y gestión de operaciones.", tag: "Industrial" },
        { title: "Ingeniería de Minas", description: "Extracción segura y eficiente de recursos minerales. Incluye diseño de minas, voladura y procesamiento de minerales.", tag: "Minas" },
        { title: "Ingeniería Naval", description: "Diseño y construcción de barcos, submarinos y estructuras marinas. Estudia hidrostática, hidrodinámica y estabilidad.", tag: "Naval" },
        { title: "Ingeniería Geológica", description: "Aplicación de geología para proyectos de ingeniería civil. Incluye estudios de suelos, cimentaciones y tunnels.", tag: "Geología" },
        { title: "Ingeniería de Transporte", description: "Planificación y diseño de sistemas de transporte. Carreteras, aeropuertos y movilidad urbana.", tag: "Transporte" },
        { title: "Ingeniería Acústica", description: "Diseño de sistemas de sonido, aislamiento acústico y ambientes. Aplica principios de propagación de ondas.", tag: "Acústica" },
        { title: "Ingeniería de Seguridad", description: "Prevención de accidentes y protección en entornos laborales. Normativas, equipos de protección y ergonomía.", tag: "Seguridad" },
        { title: "Ingeniería de Datos", description: "Diseño de sistemas para almacenar, procesar y analizar grandes volúmenes de datos. Big data y machine learning.", tag: "Datos" },
        { title: "Ingeniería de Refrigeración", description: "Sistemas de climatización, refrigeración industrial y cadena de frío. Aplicaciones médicas, alimentarias e industriales.", tag: "Climatización" },
        { title: "Ingeniería de soldadura", description: "Técnicas de unión de materiales metálicos y no metálicos. Soldadura por arco, láser, TIG, MIG y procesos especiales.", tag: "Soldadura" },
        { title: "Ingeniería de Plásticos", description: "Desarrollo y procesamiento de materiales poliméricos. Inyección, extrusión, soplado y termoformado.", tag: "Plásticos" }
    ],
    geography: [
        { title: "Lago Baikal", description: "El lago más profundo y antiguo del mundo, contendo más agua dulce que cualquier otro lago. Se encuentra en Siberia y tiene más de 25 millones de años.", tag: "Asia" },
        { title: "Monte Everest", description: "La montaña más alta del mundo con 8.849 metros sobre el nivel del mar. Su cima está cubierta de nieve durante todo el año.", tag: "Asia" },
        { title: "Océano Pacífico", description: "El océano más grande y profundo del planeta, cubriendo más de 165 millones de kilómetros cuadrados, más que todos los continentes juntos.", tag: "Océanos" },
        { title: "Desierto del Sahara", description: "El desierto caliente más grande del mundo, con más de 9 millones de kilómetros cuadrados. Tiene tormentas de arena que pueden durar días.", tag: "África" },
        { title: "Río Amazonas", description: "El río más largo y caudaloso del mundo, con más de 7.000 kilómetros de longitud. Su cuenca drena más agua que cualquier otro río.", tag: "América del Sur" },
        { title: "Antártida", description: "El continente más frío, seco y ventoso de la Tierra. Contiene el 70% del agua dulce del planeta en forma de hielo.", tag: "Polo Sur" },
        { title: "Gran Barrera de Coral", description: "La estructura viviente más grande del mundo, visible desde el espacio. Alberga más de 1.500 especies de peces.", tag: "Oceanía" },
        { title: "Cañón del Colorado", description: "Una de las formaciones geológicas más impresionantes, con más de 446 kilómetros de longitud y 1.600 metros de profundidad.", tag: "América del Norte" },
        { title: "Montañas Himalayas", description: "La cordillera más alta del mundo, con más de 110 picos que superan los 7.300 metros. El Monte Everest es el más alto.", tag: "Asia" },
        { title: "Volcán Mauna Loa", description: "El volcano activo más grande del mundo en volumen. Su base está en el fondo del océano y se eleva 4.169 metros sobre el nivel del mar.", tag: "Oceanía" },
        { title: "Lago Titicaca", description: "El lago navegable más alto del mundo, a 3.812 metros sobre el nivel del mar. Se comparte entre Perú y Bolivia.", tag: "América del Sur" },
        { title: "Cascadas del Iguazú", description: "Un sistema de 275 cascadas que forman una de las caídas de agua más espectaculares del planeta, en la frontera entre Argentina y Brasil.", tag: "América del Sur" },
        { title: "Monte Kilimanjaro", description: "La montaña más alta de África con 5.895 metros. Es un volcano inactivo cubierto de nieve en su cima despite su ubicación tropical.", tag: "África" },
        { title: "Mar Muerto", description: "El punto más bajo de la superficie terrestre, a 430 metros bajo el nivel del mar. Su salinidad es 10 veces mayor que la del océano.", tag: "Asia" },
        { title: "Islandia", description: "Una isla volcánica con más de 130 volcanes activos. Es el único país del mundo donde se puede observar la dorsal mediooceánica sobre tierra.", tag: "Europa" },
        { title: "Amazonía", description: "La selva tropical más grande del mundo, con más de 5,5 millones de kilómetros cuadrados. Produce el 20% del oxígeno mundial.", tag: "América del Sur" },
        { title: "Groenlandia", description: "La isla más grande del mundo, cubierta por una capa de hielo que contiene el 10% del agua dulce del planeta.", tag: "América del Norte" },
        { title: "Fosa de las Marianas", description: "El punto más profundo de la Tierra, con 11.034 metros bajo el nivel del mar. Es más profundo que la altura del Monte Everest.", tag: "Océanos" },
        { title: "Valles de Yosemite", description: "Un valle glaciar famoso por sus acantilados de granito giant, cascadas y secuoyas gigantes. Declarado Patrimonio de la Humanidad.", tag: "América del Norte" },
        { title: "Cueva de los Cristales", description: "Una cueva de cristales de yeso gigantes en México, con cristales de hasta 3 metros de largo. La temperatura interior supera los 50°C.", tag: "América del Norte" }
    ],
    history: [
        { title: "Imperio Romano", description: "Una de las civilizaciones más influyentes de la historia, que duró más de 1.000 años y gobernó a más de 70 millones de personas.", tag: "Antiguo" },
        { title: "Antiguo Egipto", description: "Una de las civilizaciones más antiguas, conocida por sus pirámides, faraones y avances en medicina, matemáticas y escritura.", tag: "Antiguo" },
        { title: "Revolución Industrial", description: "Una transformación económica y tecnológica que comenzó en Gran Bretaña en el siglo XVIII, cambiando la producción y el transporte.", tag: "Moderno" },
        { title: "Guerras Mundiales", description: "Dos conflictos globales que involucraron a la mayoría de las naciones del mundo, causando más de 80 millones de muertes.", tag: "Contemporáneo" },
        { title: "Imperio Bizantino", description: "Una continuación del Imperio Romano de Oriente que duró más de 1.000 años, con capital en Constantinopla.", tag: "Medieval" },
        { title: "Civilización Maya", description: "Una civilización mesoamericana avanzada conocida por sus pirámides, astronomía precisa y sistema de escritura sofisticada.", tag: "Precolombino" },
        { title: "Imperio Mongol", description: "El imperio terrestre más grande de la historia, fundado por Gengis Khan en el siglo XIII y que se extendía de Asia a Europa.", tag: "Medieval" },
        { title: "Revolución Francesa", description: "Un evento pivotal que terminó con la monarquía francesa en 1789 y proclamó los ideales de libertad, igualdad y fraternidad.", tag: "Moderno" },
        { title: "Roma Antigua", description: "Fundada según la leyenda en 753 a.C., Roma creció hasta convertirse en un imperio que abarcaba tres continentes.", tag: "Antiguo" },
        { title: "Descubrimiento de América", description: "En 1492, Cristóbal Colón llegó a las Américas, iniciando un período de exploración europea y colonización.", tag: "Moderno" },
        { title: "Imperio Otomano", description: "Un imperio que duró más de 600 años, controlando el sureste de Europa, Asia Menor y partes de África del Norte.", tag: "Medieval" },
        { title: "Gran Muralla China", description: "Una serie de fortificaciones construidas durante siglos para proteger China de invasiones. Mide más de 21.000 kilómetros.", tag: "Antiguo" },
        { title: "Revolución Americana", description: "La guerra de independencia de las trece colonias británicas en América del Norte, culminando en la creación de Estados Unidos.", tag: "Moderno" },
        { title: "Antigua Grecia", description: "La civilización que sentó las bases de la democracia, la filosofía occidental, los Juegos Olímpicos y el arte clásico.", tag: "Antiguo" },
        { title: "Revolución China", description: "La transición de China de un imperio millenario a una república, y luego a una potencia communist under Mao Zedong.", tag: "Contemporáneo" },
        { title: "Civilización Inca", description: "El imperio más grande de América precolombina, conocido por sus caminos extensos, arquitectura en piedra y sistema de gobierno centralizado.", tag: "Precolombino" },
        { title: "Edad Media", description: "Un período de aproximadamente 1.000 años en Europa, marcado por el feudalismo, la iglesia como institución dominante y las cruzada.", tag: "Medieval" },
        { title: "Independencia de Latinoamérica", description: "Una serie de guerras e insurreciones en el siglo XIX que liberaron a los países latinoamericanos del dominio español y portugués.", tag: "Moderno" },
        { title: "Imperio Persa", description: "Uno de los imperios más antiguos y poderosos del mundo antiguo, conocido por su sistema de gobierno único y sus guerras épicas con Grecia.", tag: "Antiguo" },
        { title: "Revolución Rusa", description: "Un evento que cambió el curso del siglo XX, reemplazando la monarquía zarista con el gobierno Soviet y marcando el inicio de la Guerra Fría.", tag: "Contemporáneo" },
        { title: "Civilización Sumeria", description: "Considerada la civilización urbana más antigua del mundo, responsable de inventar la escritura cuneiforme y la rueda.", tag: "Antiguo" },
        { title: "Primer Guerra Mundial", description: "Un conflicto global que duró de 1914 a 1918, marcando el fin de los imperios europeos y el inicio de nuevas tensiones.", tag: "Contemporáneo" },
        { title: "Era de los Descubrimientos", description: "Un período de exploración europea global desde el siglo XV al XVII, que conectó todos los continentes del mundo.", tag: "Moderno" },
        { title: "Construcción de las Pirámides", description: "Las pirámides de Giza fueron construidas hace más de 4.500 años y siguen siendo una de las maravillas más mystérieuses del mundo antiguo.", tag: "Antiguo" }
    ]
};

const categoryLabels = {
    physics: "Física",
    chemistry: "Química",
    engineering: "Ingeniería",
    geography: "Geografía",
    history: "Historia"
};

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getRandomCards(count = 4) {
    const categories = Object.keys(cardData);
    const allCards = [];
    
    categories.forEach(category => {
        cardData[category].forEach(card => {
            allCards.push({ ...card, category });
        });
    });
    
    const shuffled = shuffleArray(allCards);
    return shuffled.slice(0, count);
}

function renderCards(containerId, cards) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `random-card ${card.category} entering`;
        cardElement.style.animationDelay = `${index * 100}ms`;
        
        cardElement.innerHTML = `
            <span class="card-category">${categoryLabels[card.category]}</span>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <div class="card-footer">
                <span class="card-tag">${card.tag}</span>
            </div>
        `;
        
        container.appendChild(cardElement);
    });
}

function initRandomCards(containerId = 'random-cards-container', shuffleBtnId = 'shuffle-btn') {
    const container = document.getElementById(containerId);
    const shuffleBtn = document.getElementById(shuffleBtnId);
    
    if (!container) return;
    
    renderCards(containerId, getRandomCards(4));
    
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            renderCards(containerId, getRandomCards(4));
        });
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cardData, getRandomCards, renderCards, initRandomCards };
}
