// Datos para las secretarías
const secretariasData = [
    {
        id: 1,
        siglas: "SEGOB",
        nombre: "Secretaría de Gobernación",
        funcion: "Preservar el orden constitucional, garantizar la seguridad interior y conducir las relaciones del Poder Ejecutivo con los otros poderes de la Unión.",
        imagen: "building",
        categoria: "seguridad"
    },
    {
        id: 2,
        siglas: "SRE",
        nombre: "Secretaría de Relaciones Exteriores",
        funcion: "Conducir la política exterior de México, promover el comercio internacional y proteger a los mexicanos en el extranjero.",
        imagen: "globe-americas",
        categoria: "social"
    },
    {
        id: 3,
        siglas: "SEDENA",
        nombre: "Secretaría de la Defensa Nacional",
        funcion: "Organizar, administrar y preparar al Ejército y Fuerza Aérea Mexicanos para la defensa del territorio nacional.",
        imagen: "shield-alt",
        categoria: "seguridad"
    },
    {
        id: 4,
        siglas: "SEMAR",
        nombre: "Secretaría de Marina",
        funcion: "Ejercer la soberanía en mar territorial, vigilancia costera y protección de puertos y vías navegables.",
        imagen: "ship",
        categoria: "seguridad"
    },
    {
        id: 5,
        siglas: "SHCP",
        nombre: "Secretaría de Hacienda y Crédito Público",
        funcion: "Proyectar y calcular los ingresos de la Federación, manejar la deuda pública y controlar el sistema bancario.",
        imagen: "chart-line",
        categoria: "economica"
    },
    {
        id: 6,
        siglas: "SE",
        nombre: "Secretaría de Economía",
        funcion: "Formular y conducir las políticas de industria, comercio exterior e interior, abasto y precios del país.",
        imagen: "exchange-alt",
        categoria: "economica"
    },
    {
        id: 7,
        siglas: "SENER",
        nombre: "Secretaría de Energía",
        funcion: "Conducir la política energética del país en petróleo, electricidad, gas natural y energías renovables.",
        imagen: "bolt",
        categoria: "economica"
    },
    {
        id: 8,
        siglas: "SECTUR",
        nombre: "Secretaría de Turismo",
        funcion: "Fomentar, promover y regular el desarrollo de la actividad turística en México.",
        imagen: "umbrella-beach",
        categoria: "economica"
    },
    {
        id: 9,
        siglas: "SEP",
        nombre: "Secretaría de Educación Pública",
        funcion: "Organizar, vigilar y desarrollar en las escuelas oficiales la enseñanza preescolar, primaria, secundaria y normal.",
        imagen: "graduation-cap",
        categoria: "social"
    },
    {
        id: 10,
        siglas: "SALUD",
        nombre: "Secretaría de Salud",
        funcion: "Organizar, administrar y supervisar la prestación de servicios de atención médica en el país.",
        imagen: "heartbeat",
        categoria: "social"
    },
    {
        id: 11,
        siglas: "STPS",
        nombre: "Secretaría del Trabajo y Previsión Social",
        funcion: "Fomentar el empleo, proteger las capacidades de los trabajadores y vigilar el cumplimiento de las normas laborales.",
        imagen: "briefcase",
        categoria: "social"
    },
    {
        id: 12,
        siglas: "SADER",
        nombre: "Secretaría de Agricultura y Desarrollo Rural",
        funcion: "Fomentar la productividad en el sector agropecuario, pesquero y alimentario.",
        imagen: "tractor",
        categoria: "economica"
    }
];

// Datos para los derechos humanos (30 completos)
const derechosData = [
    {
        id: 1,
        articulo: "Artículo 1",
        derecho: "Todos los seres humanos nacen libres e iguales en dignidad y derechos",
        ejemplo: "En México se prohíbe la esclavitud y la discriminación.",
        imagen: "user-friends"
    },
    {
        id: 2,
        articulo: "Artículo 2",
        derecho: "Toda persona tiene todos los derechos y libertades proclamados en esta Declaración",
        ejemplo: "Los derechos humanos aplican para todas las personas sin distinción.",
        imagen: "balance-scale"
    },
    {
        id: 3,
        articulo: "Artículo 3",
        derecho: "Derecho a la vida, libertad y seguridad de su persona",
        ejemplo: "La Constitución protege la vida y libertad de todas las personas.",
        imagen: "shield-alt"
    },
    {
        id: 4,
        articulo: "Artículo 4",
        derecho: "Prohibición de la esclavitud y la servidumbre",
        ejemplo: "La trata de personas es delito grave en México.",
        imagen: "unlock"
    },
    {
        id: 5,
        articulo: "Artículo 5",
        derecho: "Prohibición de torturas y tratos crueles",
        ejemplo: "México cuenta con mecanismos contra la tortura.",
        imagen: "hand-paper"
    },
    {
        id: 6,
        articulo: "Artículo 6",
        derecho: "Reconocimiento de la personalidad jurídica",
        ejemplo: "Todas las personas pueden ser registradas legalmente al nacer.",
        imagen: "id-card"
    },
    {
        id: 7,
        articulo: "Artículo 7",
        derecho: "Igualdad ante la ley",
        ejemplo: "Todas las personas tienen los mismos derechos legales.",
        imagen: "gavel"
    },
    {
        id: 8,
        articulo: "Artículo 8",
        derecho: "Derecho a un recurso efectivo",
        ejemplo: "Cualquier persona puede acudir a los tribunales en defensa de sus derechos.",
        imagen: "balance-scale-left"
    },
    {
        id: 9,
        articulo: "Artículo 9",
        derecho: "Prohibición de detención arbitraria",
        ejemplo: "Se requiere orden judicial para detener a una persona.",
        imagen: "lock-open"
    },
    {
        id: 10,
        articulo: "Artículo 10",
        derecho: "Derecho a un juicio justo",
        ejemplo: "México garantiza la defensa adecuada y tribunales imparciales.",
        imagen: "microphone"
    },
    {
        id: 11,
        articulo: "Artículo 11",
        derecho: "Presunción de inocencia",
        ejemplo: "Toda persona es inocente hasta que se pruebe lo contrario.",
        imagen: "scale-balanced"
    },
    {
        id: 12,
        articulo: "Artículo 12",
        derecho: "Protección contra injerencias arbitrarias en su vida privada",
        ejemplo: "La privacidad y protección de datos están garantizadas por ley.",
        imagen: "user-shield"
    },
    {
        id: 13,
        articulo: "Artículo 13",
        derecho: "Libertad de circulación",
        ejemplo: "Las personas pueden viajar libremente dentro del país.",
        imagen: "route"
    },
    {
        id: 14,
        articulo: "Artículo 14",
        derecho: "Derecho de asilo",
        ejemplo: "México otorga asilo por razones humanitarias.",
        imagen: "door-open"
    },
    {
        id: 15,
        articulo: "Artículo 15",
        derecho: "Derecho a una nacionalidad",
        ejemplo: "Toda persona nacida en México tiene derecho a la nacionalidad mexicana.",
        imagen: "flag"
    },
    {
        id: 16,
        articulo: "Artículo 16",
        derecho: "Derecho al matrimonio y a fundar una familia",
        ejemplo: "En México, cualquier persona puede casarse por decisión libre.",
        imagen: "heart"
    },
    {
        id: 17,
        articulo: "Artículo 17",
        derecho: "Derecho a la propiedad",
        ejemplo: "La propiedad privada es protegida por la Constitución.",
        imagen: "home"
    },
    {
        id: 18,
        articulo: "Artículo 18",
        derecho: "Libertad de pensamiento, conciencia y religión",
        ejemplo: "México es un Estado laico que garantiza la libertad religiosa.",
        imagen: "church"
    },
    {
        id: 19,
        articulo: "Artículo 19",
        derecho: "Libertad de opinión y expresión",
        ejemplo: "La Constitución protege la libertad de prensa y expresión.",
        imagen: "comment"
    },
    {
        id: 20,
        articulo: "Artículo 20",
        derecho: "Libertad de reunión y asociación pacíficas",
        ejemplo: "Las personas pueden formar asociaciones civiles y protestar pacíficamente.",
        imagen: "users"
    },
    {
        id: 21,
        articulo: "Artículo 21",
        derecho: "Participación en el gobierno y elecciones",
        ejemplo: "Las y los mexicanos tienen derecho al voto desde los 18 años.",
        imagen: "vote-yea"
    },
    {
        id: 22,
        articulo: "Artículo 22",
        derecho: "Derecho a la seguridad social",
        ejemplo: "El IMSS e ISSSTE brindan servicios de seguridad social.",
        imagen: "hands-helping"
    },
    {
        id: 23,
        articulo: "Artículo 23",
        derecho: "Derecho al trabajo y a condiciones justas",
        ejemplo: "La ley mexicana regula salario mínimo y jornadas laborales.",
        imagen: "briefcase"
    },
    {
        id: 24,
        articulo: "Artículo 24",
        derecho: "Derecho al descanso y al tiempo libre",
        ejemplo: "La Ley Federal del Trabajo garantiza vacaciones pagadas.",
        imagen: "bed"
    },
    {
        id: 25,
        articulo: "Artículo 25",
        derecho: "Derecho a un nivel de vida adecuado",
        ejemplo: "Incluye alimentación, vivienda y atención médica.",
        imagen: "utensils"
    },
    {
        id: 26,
        articulo: "Artículo 26",
        derecho: "Derecho a la educación",
        ejemplo: "En México la educación básica es obligatoria y gratuita.",
        imagen: "book"
    },
    {
        id: 27,
        articulo: "Artículo 27",
        derecho: "Derecho a participar en la vida cultural",
        ejemplo: "Las comunidades pueden conservar y promover su cultura.",
        imagen: "palette"
    },
    {
        id: 28,
        articulo: "Artículo 28",
        derecho: "Derecho a un orden social e internacional justo",
        ejemplo: "México participa en organismos internacionales para promover derechos humanos.",
        imagen: "globe"
    },
    {
        id: 29,
        articulo: "Artículo 29",
        derecho: "Los derechos solo pueden limitarse para proteger a otros",
        ejemplo: "Las restricciones deben ser legales y justificadas.",
        imagen: "exclamation-circle"
    },
    {
        id: 30,
        articulo: "Artículo 30",
        derecho: "Nada en esta Declaración puede interpretarse para suprimir derechos",
        ejemplo: "La autoridad no puede usar la ley para violar los derechos humanos.",
        imagen: "shield-virus"
    }
];


// Datos para el cuestionario (40 preguntas)
const quizData = [
    {
        id: 1,
        pregunta: "¿Cuál es la forma de gobierno de México según la Constitución?",
        opciones: [
            { texto: "República representativa, democrática, laica y federal", correcta: true },
            { texto: "Monarquía constitucional parlamentaria", correcta: false },
            { texto: "República unitaria centralizada", correcta: false },
            { texto: "Estado socialista", correcta: false }
        ]
    },
    {
        id: 2,
        pregunta: "¿Cuántas entidades federativas conforman México?",
        opciones: [
            { texto: "31 estados", correcta: false },
            { texto: "32 entidades federativas (31 estados + Ciudad de México)", correcta: true },
            { texto: "30 estados y 2 territorios", correcta: false },
            { texto: "28 estados y 4 territorios", correcta: false }
        ]
    },
    {
        id: 3,
        pregunta: "¿Cuál es el poder del Estado encargado de hacer las leyes?",
        opciones: [
            { texto: "Poder Ejecutivo", correcta: false },
            { texto: "Poder Legislativo", correcta: true },
            { texto: "Poder Judicial", correcta: false },
            { texto: "Poder Electoral", correcta: false }
        ]
    },
    {
        id: 4,
        pregunta: "¿Cuántos años dura el Presidente en su cargo?",
        opciones: [
            { texto: "4 años", correcta: false },
            { texto: "5 años", correcta: false },
            { texto: "6 años", correcta: true },
            { texto: "7 años", correcta: false }
        ]
    },
    {
        id: 5,
        pregunta: "¿Cómo se llama el tratado comercial entre México, Estados Unidos y Canadá?",
        opciones: [
            { texto: "TLCAN", correcta: false },
            { texto: "T-MEC", correcta: true },
            { texto: "ALCA", correcta: false },
            { texto: "MERCOSUR", correcta: false }
        ]
    },
    {
        id: 6,
        pregunta: "¿Qué secretaría se encarga de las relaciones exteriores?",
        opciones: [
            { texto: "SEGOB", correcta: false },
            { texto: "SRE", correcta: true },
            { texto: "SHCP", correcta: false },
            { texto: "STPS", correcta: false }
        ]
    },
    {
        id: 7,
        pregunta: "¿Qué artículo constitucional define el territorio nacional?",
        opciones: [
            { texto: "Artículo 27", correcta: false },
            { texto: "Artículo 39", correcta: false },
            { texto: "Artículo 42", correcta: true },
            { texto: "Artículo 115", correcta: false }
        ]
    },
    {
        id: 8,
        pregunta: "¿Cuál es el máximo órgano del Poder Judicial?",
        opciones: [
            { texto: "Tribunal Electoral", correcta: false },
            { texto: "Consejo de la Judicatura Federal", correcta: false },
            { texto: "Suprema Corte de Justicia de la Nación", correcta: true },
            { texto: "Juzgados de Distrito", correcta: false }
        ]
    },
    {
        id: 9,
        pregunta: "¿Qué poder ejerce el Presidente de México?",
        opciones: [
            { texto: "Poder Legislativo", correcta: false },
            { texto: "Poder Judicial", correcta: false },
            { texto: "Poder Ejecutivo", correcta: true },
            { texto: "Poder Moral", correcta: false }
        ]
    },
    {
        id: 10,
        pregunta: "¿En qué año entró en vigor la Constitución actual?",
        opciones: [
            { texto: "1810", correcta: false },
            { texto: "1857", correcta: false },
            { texto: "1917", correcta: true },
            { texto: "1920", correcta: false }
        ]
    },

    // --- 30 PREGUNTAS NUEVAS ---

    {
        id: 11,
        pregunta: "¿Cuántos poderes conforman al Estado Mexicano?",
        opciones: [
            { texto: "2", correcta: false },
            { texto: "3", correcta: true },
            { texto: "4", correcta: false },
            { texto: "5", correcta: false }
        ]
    },
    {
        id: 12,
        pregunta: "¿Quién es el encargado de aplicar la ley?",
        opciones: [
            { texto: "Poder Legislativo", correcta: false },
            { texto: "Poder Ejecutivo", correcta: true },
            { texto: "Poder Judicial", correcta: false },
            { texto: "Fiscalía Nacional", correcta: false }
        ]
    },
    {
        id: 13,
        pregunta: "¿Qué documento es la ley suprema en México?",
        opciones: [
            { texto: "Código Civil", correcta: false },
            { texto: "Constitución Política", correcta: true },
            { texto: "Ley Federal del Trabajo", correcta: false },
            { texto: "Reglamentos Municipales", correcta: false }
        ]
    },
    {
        id: 14,
        pregunta: "¿Qué significa SEDENA?",
        opciones: [
            { texto: "Secretaría de Economía Nacional", correcta: false },
            { texto: "Secretaría de la Defensa Nacional", correcta: true },
            { texto: "Servicio de Energía Nacional", correcta: false },
            { texto: "Secretaría de Desarrollo Nacional", correcta: false }
        ]
    },
    {
        id: 15,
        pregunta: "¿Qué poder interpreta la Constitución?",
        opciones: [
            { texto: "Poder Judicial", correcta: true },
            { texto: "Poder Ejecutivo", correcta: false },
            { texto: "Poder Legislativo", correcta: false },
            { texto: "Instituto Nacional Electoral", correcta: false }
        ]
    },
    {
        id: 16,
        pregunta: "¿Qué institución organiza las elecciones en México?",
        opciones: [
            { texto: "CJF", correcta: false },
            { texto: "INE", correcta: true },
            { texto: "SEGOB", correcta: false },
            { texto: "SRE", correcta: false }
        ]
    },
    {
        id: 17,
        pregunta: "¿Cuántos senadores integran el Senado de la República?",
        opciones: [
            { texto: "64", correcta: false },
            { texto: "128", correcta: true },
            { texto: "200", correcta: false },
            { texto: "300", correcta: false }
        ]
    },
    {
        id: 18,
        pregunta: "¿Cuántos diputados integran la Cámara de Diputados?",
        opciones: [
            { texto: "300", correcta: false },
            { texto: "500", correcta: true },
            { texto: "450", correcta: false },
            { texto: "600", correcta: false }
        ]
    },
    {
        id: 19,
        pregunta: "¿Qué secretaría se encarga de la educación?",
        opciones: [
            { texto: "SEP", correcta: true },
            { texto: "SRE", correcta: false },
            { texto: "STPS", correcta: false },
            { texto: "SHCP", correcta: false }
        ]
    },
    {
        id: 20,
        pregunta: "¿Qué secretaría administra el dinero del país?",
        opciones: [
            { texto: "SEDENA", correcta: false },
            { texto: "SFP", correcta: false },
            { texto: "SHCP", correcta: true },
            { texto: "SECTUR", correcta: false }
        ]
    },
    {
        id: 21,
        pregunta: "¿Quién elige a los senadores y diputados?",
        opciones: [
            { texto: "El Presidente", correcta: false },
            { texto: "El Congreso", correcta: false },
            { texto: "El pueblo mediante voto", correcta: true },
            { texto: "La SCJN", correcta: false }
        ]
    },
    {
        id: 22,
        pregunta: "¿De qué poder forma parte la Suprema Corte?",
        opciones: [
            { texto: "Legislativo", correcta: false },
            { texto: "Ejecutivo", correcta: false },
            { texto: "Judicial", correcta: true },
            { texto: "Municipal", correcta: false }
        ]
    },
    {
        id: 23,
        pregunta: "¿Qué establece el Artículo 3°?",
        opciones: [
            { texto: "La organización municipal", correcta: false },
            { texto: "El derecho a la educación", correcta: true },
            { texto: "La propiedad de la nación", correcta: false },
            { texto: "La libertad de expresión", correcta: false }
        ]
    },
    {
        id: 24,
        pregunta: "¿Qué establece el Artículo 27?",
        opciones: [
            { texto: "El derecho a la vida", correcta: false },
            { texto: "La propiedad de tierras y aguas", correcta: true },
            { texto: "La libertad de trabajo", correcta: false },
            { texto: "La organización del Congreso", correcta: false }
        ]
    },
    {
        id: 25,
        pregunta: "¿Qué secretaría se encarga de la seguridad pública?",
        opciones: [
            { texto: "SSPC", correcta: true },
            { texto: "SEP", correcta: false },
            { texto: "SEMAR", correcta: false },
            { texto: "INSABI", correcta: false }
        ]
    },
    {
        id: 26,
        pregunta: "¿Quién puede proponer reformas constitucionales?",
        opciones: [
            { texto: "Solo el Presidente", correcta: false },
            { texto: "Diputados y Senadores", correcta: false },
            { texto: "Presidente, Legisladores y Legislaturas Estatales", correcta: true },
            { texto: "Gobernadores", correcta: false }
        ]
    },
    {
        id: 27,
        pregunta: "¿Cuántos municipios tiene México aproximadamente?",
        opciones: [
            { texto: "1000", correcta: false },
            { texto: "2446", correcta: true },
            { texto: "4300", correcta: false },
            { texto: "800", correcta: false }
        ]
    },
    {
        id: 28,
        pregunta: "¿Qué institución protege los derechos humanos en México?",
        opciones: [
            { texto: "INAI", correcta: false },
            { texto: "CNDH", correcta: true },
            { texto: "INEGI", correcta: false },
            { texto: "SCJN", correcta: false }
        ]
    },
    {
        id: 29,
        pregunta: "¿Qué poder aprueba el presupuesto de egresos?",
        opciones: [
            { texto: "Poder Judicial", correcta: false },
            { texto: "Poder Ejecutivo", correcta: false },
            { texto: "Poder Legislativo", correcta: true },
            { texto: "INE", correcta: false }
        ]
    },
    {
        id: 30,
        pregunta: "¿Qué rama del gobierno administra los bienes públicos?",
        opciones: [
            { texto: "Judicial", correcta: false },
            { texto: "Ejecutivo", correcta: true },
            { texto: "Legislativo", correcta: false },
            { texto: "Fiscal", correcta: false }
        ]
    },
    {
        id: 31,
        pregunta: "¿Qué artículo garantiza la libertad de expresión?",
        opciones: [
            { texto: "Artículo 6", correcta: true },
            { texto: "Artículo 31", correcta: false },
            { texto: "Artículo 40", correcta: false },
            { texto: "Artículo 3", correcta: false }
        ]
    },
    {
        id: 32,
        pregunta: "¿Qué artículo garantiza la libertad de tránsito?",
        opciones: [
            { texto: "Artículo 11", correcta: true },
            { texto: "Artículo 21", correcta: false },
            { texto: "Artículo 27", correcta: false },
            { texto: "Artículo 33", correcta: false }
        ]
    },
    {
        id: 33,
        pregunta: "¿Qué secretaría administra el turismo en México?",
        opciones: [
            { texto: "SECTUR", correcta: true },
            { texto: "SEDENA", correcta: false },
            { texto: "SCT", correcta: false },
            { texto: "SEP", correcta: false }
        ]
    },
    {
        id: 34,
        pregunta: "¿Qué secretaría regula el trabajo y la previsión social?",
        opciones: [
            { texto: "STPS", correcta: true },
            { texto: "SEGOB", correcta: false },
            { texto: "SRE", correcta: false },
            { texto: "SE", correcta: false }
        ]
    },
    {
        id: 35,
        pregunta: "¿Qué documento establece los derechos humanos en México?",
        opciones: [
            { texto: "Declaración de París", correcta: false },
            { texto: "Constitución Política de los Estados Unidos Mexicanos", correcta: true },
            { texto: "Ley Federal del Trabajo", correcta: false },
            { texto: "Código Penal", correcta: false }
        ]
    },
    {
        id: 36,
        pregunta: "¿Qué poder puede declarar la invalidez de una ley por violar la Constitución?",
        opciones: [
            { texto: "Poder Legislativo", correcta: false },
            { texto: "Poder Ejecutivo", correcta: false },
            { texto: "Poder Judicial (SCJN)", correcta: true },
            { texto: "INE", correcta: false }
        ]
    },
    {
        id: 37,
        pregunta: "¿Qué secretaría gestiona los programas sociales?",
        opciones: [
            { texto: "SEDESOL / Bienestar", correcta: true },
            { texto: "SE", correcta: false },
            { texto: "SEP", correcta: false },
            { texto: "SHCP", correcta: false }
        ]
    },
    {
        id: 38,
        pregunta: "¿Qué artículo define la soberanía nacional?",
        opciones: [
            { texto: "Artículo 40", correcta: false },
            { texto: "Artículo 39", correcta: true },
            { texto: "Artículo 2", correcta: false },
            { texto: "Artículo 133", correcta: false }
        ]
    },
    {
        id: 39,
        pregunta: "¿Qué guarda la SEMAR?",
        opciones: [
            { texto: "La seguridad aérea", correcta: false },
            { texto: "La seguridad marítima", correcta: true },
            { texto: "La seguridad terrestre", correcta: false },
            { texto: "La seguridad interna", correcta: false }
        ]
    },
    {
        id: 40,
        pregunta: "¿Qué poder se divide en cámaras?",
        opciones: [
            { texto: "Ejecutivo", correcta: false },
            { texto: "Judicial", correcta: false },
            { texto: "Legislativo", correcta: true },
            { texto: "Todos los anteriores", correcta: false }
        ]
    }
];


// Variables globales
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let derechosMostrados = 10;

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Botón para ir al inicio
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Cargar secretarías
    cargarSecretarias();
    
    // Configurar filtros de secretarías
    configurarFiltrosSecretarias();
    
    // Cargar derechos humanos
    cargarDerechosHumanos();
    
    // Configurar búsqueda de derechos
    const rightsSearch = document.getElementById('rightsSearch');
    if (rightsSearch) {
        rightsSearch.addEventListener('input', function() {
            filtrarDerechos(this.value);
        });
    }
    
    
    // Configurar botón para cargar más derechos
    const loadMoreRightsBtn = document.getElementById('loadMoreRights');
    if (loadMoreRightsBtn) {
        loadMoreRightsBtn.addEventListener('click', function() {
            derechosMostrados += 10;
            cargarDerechosHumanos();
        });
    }
    
    // Configurar cuestionario
    inicializarCuestionario();
    
    // Cargar más noticias
    const loadNewsBtn = document.getElementById('loadNews');
    if (loadNewsBtn) {
        loadNewsBtn.addEventListener('click', function() {
            cargarMasNoticias();
        });
    }
});

// Función para cargar las secretarías
function cargarSecretarias() {
    const container = document.getElementById('secretariasContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    secretariasData.forEach(secretaria => {
        const card = document.createElement('div');
        card.className = `secretaria-card ${secretaria.categoria}`;
        card.innerHTML = `
            <div class="secretaria-image">
                <i class="fas fa-${secretaria.imagen}"></i>
            </div>
            <div class="secretaria-content">
                <span class="secretaria-siglas">${secretaria.siglas}</span>
                <h3>${secretaria.nombre}</h3>
                <p><strong>Función:</strong> ${secretaria.funcion}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para configurar los filtros de secretarías
function configurarFiltrosSecretarias() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const secretariaCards = document.querySelectorAll('.secretaria-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Mostrar/ocultar tarjetas según el filtro
            secretariaCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Función para cargar los derechos humanos
function cargarDerechosHumanos() {
    const container = document.getElementById('rightsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Mostrar solo los primeros derechosMostrados
    const derechosAMostrar = derechosData.slice(0, derechosMostrados);
    
    derechosAMostrar.forEach(derecho => {
        const card = document.createElement('div');
        card.className = 'right-card';
        card.innerHTML = `
            <div class="right-image">
                <i class="fas fa-${derecho.imagen}"></i>
            </div>
            <div class="right-content">
                <span class="right-number">${derecho.articulo}</span>
                <h3>${derecho.derecho}</h3>
                <p><strong>Ejemplo en México:</strong> ${derecho.ejemplo}</p>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Ocultar el botón si ya mostramos todos
    const loadMoreRightsBtn = document.getElementById('loadMoreRights');
    if (loadMoreRightsBtn) {
        if (derechosMostrados >= 30) {
            loadMoreRightsBtn.style.display = 'none';
        } else {
            loadMoreRightsBtn.style.display = 'inline-block';
        }
    }
}

// Función para filtrar derechos humanos
function filtrarDerechos(searchTerm) {
    const container = document.getElementById('rightsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const term = searchTerm.toLowerCase();
    const derechosFiltrados = derechosData.filter(derecho => 
        derecho.derecho.toLowerCase().includes(term) || 
        derecho.articulo.toLowerCase().includes(term) ||
        derecho.ejemplo.toLowerCase().includes(term)
    );
    
    derechosFiltrados.forEach(derecho => {
        const card = document.createElement('div');
        card.className = 'right-card';
        card.innerHTML = `
            <div class="right-image">
                <i class="fas fa-${derecho.imagen}"></i>
            </div>
            <div class="right-content">
                <span class="right-number">${derecho.articulo}</span>
                <h3>${derecho.derecho}</h3>
                <p><strong>Ejemplo en México:</strong> ${derecho.ejemplo}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para mezclar un array (para aleatorizar derechos)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para inicializar el cuestionario
function inicializarCuestionario() {
    const totalQuestions = document.getElementById('totalQuestions');
    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }
    
    mostrarPregunta();
    
    // Configurar botones del cuestionario
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitQuiz');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', preguntaAnterior);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', siguientePregunta);
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', finalizarCuestionario);
    }
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    const questionText = document.getElementById('questionText');
    const quizOptions = document.getElementById('quizOptions');
    const currentQuestionElement = document.getElementById('currentQuestion');
    const progressBar = document.getElementById('progressBar');
    
    if (!questionText || !quizOptions || !currentQuestionElement || !progressBar) return;
    
    // Actualizar número de pregunta
    currentQuestionElement.textContent = currentQuestion + 1;
    
    // Actualizar barra de progreso
    const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Mostrar pregunta
    questionText.textContent = quizData[currentQuestion].pregunta;
    
    // Mostrar opciones
    quizOptions.innerHTML = '';
    
    quizData[currentQuestion].opciones.forEach((opcion, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        
        // Verificar si el usuario ya seleccionó esta opción
        const isChecked = userAnswers[currentQuestion] === index;
        
        optionElement.innerHTML = `
            <input type="radio" id="option${index}" name="quizOption" value="${index}" ${isChecked ? 'checked' : ''}>
            <label for="option${index}">${opcion.texto}</label>
        `;
        
        // Agregar evento para guardar la respuesta
        const radioInput = optionElement.querySelector('input');
        radioInput.addEventListener('change', function() {
            guardarRespuesta(index);
        });
        
        quizOptions.appendChild(optionElement);
    });
    
    // Actualizar estado de los botones
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitQuiz');
    
    if (prevBtn) {
        prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    }
    
    if (nextBtn) {
        nextBtn.style.display = currentQuestion === quizData.length - 1 ? 'none' : 'inline-block';
    }
    
    if (submitBtn) {
        submitBtn.style.display = currentQuestion === quizData.length - 1 ? 'inline-block' : 'none';
    }
}

// Función para guardar la respuesta del usuario
function guardarRespuesta(opcionIndex) {
    userAnswers[currentQuestion] = opcionIndex;
}

// Función para ir a la siguiente pregunta
function siguientePregunta() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        mostrarPregunta();
    }
}

// Función para ir a la pregunta anterior
function preguntaAnterior() {
    if (currentQuestion > 0) {
        currentQuestion--;
        mostrarPregunta();
    }
}

// Función para finalizar el cuestionario
function finalizarCuestionario() {
    // Calcular puntuación
    score = 0;
    
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] !== undefined) {
            if (quizData[i].opciones[userAnswers[i]].correcta) {
                score++;
            }
        }
    }
    
    // Mostrar resultados
    const quizResult = document.getElementById('quizResult');
    const resultScore = document.createElement('div');
    resultScore.className = 'result-score';
    resultScore.textContent = `${score}/${quizData.length}`;
    
    const resultMessage = document.createElement('p');
    
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 90) {
        resultMessage.textContent = '¡Excelente! Tienes un conocimiento excepcional sobre el Estado Mexicano.';
        resultMessage.style.color = 'green';
    } else if (percentage >= 70) {
        resultMessage.textContent = '¡Muy bien! Tienes un buen conocimiento sobre el Estado Mexicano.';
        resultMessage.style.color = '#4CAF50';
    } else if (percentage >= 50) {
        resultMessage.textContent = 'Regular. Podrías mejorar tu conocimiento sobre el Estado Mexicano.';
        resultMessage.style.color = '#FF9800';
    } else {
        resultMessage.textContent = 'Necesitas estudiar más sobre el Estado Mexicano.';
        resultMessage.style.color = '#F44336';
    }
    
    const restartBtn = document.createElement('button');
    restartBtn.className = 'btn';
    restartBtn.textContent = 'Reintentar cuestionario';
    restartBtn.addEventListener('click', function() {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        quizResult.style.display = 'none';
        quizResult.innerHTML = '';
        mostrarPregunta();
    });
    
    quizResult.innerHTML = '';
    quizResult.appendChild(resultScore);
    quizResult.appendChild(resultMessage);
    quizResult.appendChild(restartBtn);
    quizResult.style.display = 'block';
    
    // Desplazar hacia los resultados
    quizResult.scrollIntoView({ behavior: 'smooth' });
}

// Función para cargar más noticias
function cargarMasNoticias() {
    const newsContainer = document.querySelector('.news-container');
    if (!newsContainer) return;
    
    const nuevasNoticias = [
        {
            fecha: "25 de junio, 2023",
            titulo: "Reformas al Sistema de Justicia Penal aprobadas",
            contenido: "El Senado aprobó cambios al sistema de justicia penal que fortalecen los derechos de las víctimas y agilizan procesos.",
            enlace: "#"
        },
        {
            fecha: "22 de junio, 2023",
            titulo: "México incrementa su inversión en ciencia y tecnología",
            contenido: "El Congreso asignó un aumento del 15% al presupuesto para ciencia, tecnología e innovación para 2024.",
            enlace: "#"
        }
    ];
    
    nuevasNoticias.forEach(noticia => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-date">${noticia.fecha}</div>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.contenido}</p>
            <a href="${noticia.enlace}" class="news-link">Leer más <i class="fas fa-arrow-right"></i></a>
        `;
        newsContainer.appendChild(newsCard);
    });
    
    // Ocultar botón después de cargar más noticias
    const loadNewsBtn = document.getElementById('loadNews');
    if (loadNewsBtn) {
        loadNewsBtn.style.display = 'none';
    }
}