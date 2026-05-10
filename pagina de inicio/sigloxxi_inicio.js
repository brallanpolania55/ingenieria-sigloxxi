document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.querySelector('.modal-close');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const modalData = {
        '3000 a.C.': {
            title: 'Ingeniería Egipcia',
            text: 'Los antiguos egipcios fueron pioneros en múltiples disciplinas de la ingeniería. Construyeron las pirámides de Giza utilizando técnicas avanzadas de ingeniería estructural, incluyendo sistemas de rampas y poleas. Dominaban la irrigación mediante canales y diques, y sus conocimientos astronómicos les permitieron alinear perfectamente las estructuras con los puntos cardinales. El Imperio Egipcio sentó las bases de la ingeniería civil que utilizamos hoy.'
        },
        '776 a.C.': {
            title: 'Ingeniería Romana',
            text: 'Los romanos transformaron el mundo con sus innovaciones en infraestructura. Construyeron más de 400,000 km de carreteras, acuíferos que aún funcionan después de 2,000 años, y teatros que albergaban a miles de personas. Su invento más significativo fue el concreto romano (opus caementicium), que les permitió crear estructuras耐久性 sin precedentes. El Coliseo, el Acueducto de Segovia y el Panteón de Agripa demuestran su genio engineering.'
        },
        '1450': {
            title: 'La Imprenta de Gutenberg',
            text: 'Johannes Gutenberg desarrolló la imprenta de tipos móviles alrededor de 1450, revolucionando la difusión del conocimiento. Esta invención permitió la producción masiva de libros, reduciendo drásticamente los costos y democratizando el acceso a la información. La imprenta fue precursora de la Revolución de la Información y sentó las bases para el desarrollo de la ingeniería de comunicaciones y medios de comunicación masiva que definiría los siglos posteriores.'
        },
        '1769': {
            title: 'Máquina de Vapor',
            text: 'James Watt mejoró la máquina de vapor de Newcomen, aumentando su eficiencia hasta en un 75%. Esta mejora fue el catalizador de la Revolución Industrial, transformando la manufactura, el transporte y la minería. La máquina de vapor permitió la creación de fábricas modernas, barcos y locomotoras. Fue el primer gran sistema de energía que liberó a la humanidad de la dependencia de músculos humanos y animales.'
        },
        '1804': {
            title: 'Primera Locomotora',
            text: 'Richard Trevithick construyó la primera locomotora de vapor funcional que transportaba carga y pasajeros sobre rieles. Esta innovación transformó el transporte terrestre, permitiendo el movimiento eficiente de bienes y personas a escalas sin precedentes. La revolución del tren conectó ciudades, redujo tiempos de viaje de semanas a días y catalizó el crecimiento económico y urbano que definiría el siglo XIX.'
        },
        '1837': {
            title: 'Telégrafo Eléctrico',
            text: 'Samuel Morse desarrolló el sistema de telégrafo que utilizaba código Morse para transmitir mensajes a través de cables eléctricos. Esta tecnología redujo el tiempo de comunicación de semanas a minutos, conectando continentes y permitiendo coordinación instantánea. La ingeniería eléctrica nació formalmente con esta innovación, sentando las bases para todas las tecnologías de comunicación que seguirían.'
        },
        '1876': {
            title: 'El Teléfono',
            text: 'Alexander Graham Bell patentó el teléfono en 1876, permitiendo la transmisión de voz humana a distancia. Esta tecnología transformó las comunicaciones comerciales y personales, creando una nueva industria de telecomunicaciones. El teléfono democratizó la comunicación verbal, permitiendo conexiones instantáneas entre personas en cualquier parte del mundo y transformando fundamentalmente la sociedad.'
        },
        '1886': {
            title: 'Primer Automóvil',
            text: 'Karl Benz creó el Benz Patent-Motorwagen, generalmente reconocido como el primer automóvil práctico propulsado por un motor de combustión interna. Esta invención marcó el nacimiento de la industria automotriz, transformando el transporte personal y la movilidad. La ingeniería automotriz evolucionaría para convertirse en una de las industrias más grandes del mundo.'
        },
        '1903': {
            title: 'Primer Vuelo',
            text: 'Orville y Wilbur Wright lograron el primer vuelo controlado y sostenido de un avión motorizado el 17 de diciembre de 1903 en Kitty Hawk, Carolina del Norte. Este vuelo de 12 segundos cubrió 120 pies, pero demostró que el vuelo controlado era posible. La ingeniería aeroespacial nació este día, eventualmente permitiendo viajes transcontinentales, exploración espacial y conectividad global aérea.'
        },
        '1947': {
            title: 'Invención del Transistor',
            text: 'Los científicos de Bell Labs, John Bardeen, Walter Brattain y William Shockley, inventaron el transistor, reemplazando las voluminosas válvulas de vacío. Esta breakthrough permitió la miniaturización de la electrónica, reduciendo tamaño, costo y consumo de energía. El transistor es la base de toda la electrónica moderna, desde calculadoras hasta computadoras y smartphones.'
        },
        '1969': {
            title: 'Llegada a la Luna',
            text: 'El 20 de julio de 1969, Neil Armstrong se convirtió en el primer humano en caminar sobre la Luna como parte de la misión Apolo 11. Este achievement requirió los sistemas de ingeniería más avanzados de la época, incluyendo computación, propulsión, materiales y comunicación. El programa espacial impulsó tecnologías que ahora usamos diariamente, desde GPS hasta materiales avanzados.'
        },
        '1989': {
            title: 'World Wide Web',
            text: 'Tim Berners-Lee, trabajando en CERN, propuso el sistema de información mite (World Wide Web), combinando hypertext con Internet. Esta tecnología transformó Internet en una plataforma accesible para el público general. La WWW revolucionó el comercio, la comunicación, la educación y el entretenimiento, creando la economía digital que domina el mundo actual.'
        },
        '2020': {
            title: 'Era de la IA',
            text: 'La inteligencia artificial y el aprendizaje automático están transformando todas las disciplinas de la ingeniería. Los modelos de lenguaje grandes, la visión por computadora y los sistemas autónomos están revolucionando manufactura, salud, transporte y servicios. La IA se convierte en la herramienta más poderosa de la historia, automatizando tareas cognitivas y creando nuevas posibilidades que apenas comienzan a explorarse.'
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    timelineItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('expand-btn') || e.target.closest('.expand-btn')) {
                const year = item.getAttribute('data-year');
                const data = modalData[year];
                if (data) {
                    modalTitle.textContent = data.title;
                    modalText.textContent = data.text;
                    modal.classList.add('active');
                }
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            timelineItems.forEach(item => {
                item.classList.remove('hidden');

                if (filter !== 'all') {
                    const yearStr = item.getAttribute('data-year');
                    const year = parseInt(yearStr);
                    const isBC = yearStr.includes('a.C.');
                    let shouldShow = false;

                    if (filter === 'antigua' && isBC) shouldShow = true;
                    else if (filter === 'industrial' && year >= 1700 && year < 1900 && !isBC) shouldShow = true;
                    else if (filter === 'moderna' && year >= 1900 && year < 1980 && !isBC) shouldShow = true;
                    else if (filter === 'digital' && year >= 1980 && !isBC) shouldShow = true;

                    if (!shouldShow) {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        header.style.backgroundPosition = `center ${scrollY * 0.5}px`;
    });

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.timeline-marker');
            marker.style.transform = 'translateX(-50%) scale(1.4)';
            marker.style.borderColor = '#7c3aed';
        });

        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.timeline-marker');
            marker.style.transform = 'translateX(-50%) scale(1)';
            marker.style.borderColor = '#2563eb';
        });
    });

    let touchStartY = 0;
    const container = document.querySelector('.timeline-container');

    container.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const diff = touchStartY - touchY;

        if (Math.abs(diff) > 10) {
            container.style.cursor = 'grabbing';
        }
    }, { passive: true });

    container.addEventListener('touchend', () => {
        container.style.cursor = 'pointer';
    });
});