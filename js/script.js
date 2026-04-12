// =============================================
// SOAPLOVE – JAVASCRIPT PRINCIPAL
// =============================================

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// ===== FILTROS CATÁLOGO =====
const filtrosBtns = document.querySelectorAll('.filtro-btn');
const productoCards = document.querySelectorAll('.producto-card');

filtrosBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filtrosBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtro = btn.dataset.filtro;
    productoCards.forEach(card => {
      if (filtro === 'todos' || card.dataset.categoria === filtro) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== QUIZ TIPO DE PIEL =====
const preguntas = [
  {
    pregunta: '¿Cómo se siente tu piel a las pocas horas de lavarte la cara?',
    opciones: [
      { texto: '😩 Tensa y áspera, necesita crema urgente', tipo: 'seca' },
      { texto: '✨ Brilla bastante, sobre todo en frente y nariz', tipo: 'grasa' },
      { texto: '⚖️ Normal, ni muy seca ni muy grasa', tipo: 'normal' },
      { texto: '🔁 Grasa en algunas zonas y seca en otras', tipo: 'mixta' },
    ]
  },
  {
    pregunta: '¿Tu piel reacciona fácilmente a nuevos productos?',
    opciones: [
      { texto: '🚨 Sí, se irrita, enrojece o pica con frecuencia', tipo: 'sensible' },
      { texto: '😊 No, tolera bien la mayoría de productos', tipo: 'normal' },
      { texto: '🤔 A veces, depende del producto', tipo: 'mixta' },
      { texto: '💧 Mi piel es seca y reacciona cuando está deshidratada', tipo: 'seca' },
    ]
  },
  {
    pregunta: '¿Cuál es tu mayor preocupación con tu piel?',
    opciones: [
      { texto: '💧 Hidratación y sequedad', tipo: 'seca' },
      { texto: '🌟 Brillo excesivo y poros dilatados', tipo: 'grasa' },
      { texto: '🌸 Manchas, tono desigual', tipo: 'mixta' },
      { texto: '🛡️ Irritaciones y sensibilidad', tipo: 'sensible' },
    ]
  },
  {
    pregunta: '¿Para qué parte del cuerpo buscas el jabón?',
    opciones: [
      { texto: '😊 Cara / rostro', tipo: 'facial' },
      { texto: '🚿 Cuerpo en general', tipo: 'corporal' },
      { texto: '🌸 Zona íntima', tipo: 'intimo' },
      { texto: '👶 Para niños o piel de bebé', tipo: 'ninos' },
    ]
  }
];

const recomendaciones = {
  seca: {
    emoji: '💧',
    titulo: '¡Tu piel necesita hidratación profunda!',
    descripcion: 'Tu piel seca se beneficiará muchísimo de jabones con aceites nutritivos y mantecas naturales.',
    producto: 'Jabón de Miel + Coco',
    detalle: 'Formulado con aceite de coco y miel pura que sellan la humedad y suavizan desde la primera lavada.',
    precio: 'S/ 12 – S/ 18'
  },
  grasa: {
    emoji: '✨',
    titulo: '¡Tu piel necesita equilibrio y limpieza profunda!',
    descripcion: 'Los jabones con arcilla y carbón activado absorben el exceso de grasa sin resecar la piel.',
    producto: 'Jabón de Carbón Activado o Arcilla',
    detalle: 'Limpieza profunda de poros con ingredientes naturales que regulan la producción de sebo.',
    precio: 'S/ 18 – S/ 25'
  },
  mixta: {
    emoji: '⚖️',
    titulo: '¡Tu piel necesita equilibrio!',
    descripcion: 'Las pieles mixtas responden bien a jabones suaves que limpian sin alterar el equilibrio natural.',
    producto: 'Jabón de Té Verde o Cúrcuma',
    detalle: 'Antioxidante y purificante, ideal para equilibrar zonas grasas y mantener hidratadas las secas.',
    precio: 'S/ 15 – S/ 25'
  },
  normal: {
    emoji: '🌿',
    titulo: '¡Tienes una piel equilibrada, cuídala bien!',
    descripcion: 'Tu piel normal puede disfrutar de cualquier jabón artesanal. Te recomendamos variedad.',
    producto: 'Pack 3 Jabones a tu elección',
    detalle: 'Aprovecha tu tipo de piel saludable y prueba diferentes jabones naturales. ¡El pack es ideal para ti!',
    precio: 'S/ 35 – S/ 50'
  },
  sensible: {
    emoji: '🌸',
    titulo: '¡Tu piel necesita suavidad y cuidado!',
    descripcion: 'Las pieles sensibles necesitan jabones con ingredientes calmantes y sin perfumes artificiales.',
    producto: 'Jabón de Avena + Manzanilla',
    detalle: 'Formulado especialmente para pieles reactivas. Calmante, suave y sin irritantes.',
    precio: 'S/ 14 – S/ 20'
  },
  facial: {
    emoji: '😊',
    titulo: 'Para tu rutina facial',
    descripcion: 'Tenemos una línea completa de jabones faciales artesanales para cada tipo de piel.',
    producto: 'Jabón Facial (avena, carbón, té verde)',
    detalle: 'Elige según tu tipo de piel: avena para sensible, carbón para grasa, té verde para mixta.',
    precio: 'S/ 14 – S/ 25'
  },
  corporal: {
    emoji: '🚿',
    titulo: 'Para tu rutina corporal',
    descripcion: 'Nuestros jabones corporales artesanales te darán una piel suave y perfumada naturalmente.',
    producto: 'Jabones Corporales SoapLove',
    detalle: 'Desde coco y miel hasta cacao y café. Todos elaborados a mano con aceites vegetales peruanos.',
    precio: 'S/ 12 – S/ 22'
  },
  intimo: {
    emoji: '🌸',
    titulo: 'Cuidado íntimo natural',
    descripcion: 'Nuestro jabón íntimo tiene pH balanceado y está formulado con hierbas calmantes.',
    producto: 'Jabón Íntimo Suave',
    detalle: 'Con manzanilla, aceite de coco y sangre de grado. Protección natural sin químicos agresivos.',
    precio: 'S/ 16 – S/ 23'
  },
  ninos: {
    emoji: '👶',
    titulo: 'Suavidad para los más pequeños',
    descripcion: 'Jabones extra suaves sin ingredientes irritantes, perfectos para la piel delicada de los niños.',
    producto: 'Jabón Infantil de Avena y Miel',
    detalle: 'Formulado con avena, miel y aceite de coco. Gentle, sin lágrimas, apto desde bebés.',
    precio: 'S/ 13 – S/ 18'
  }
};

let preguntaActual = 0;
let respuestas = [];

function renderPregunta() {
  const quizContent = document.getElementById('quiz-content');
  const quizStep = document.getElementById('quiz-step');
  const quizProgressBar = document.getElementById('quiz-progress-bar');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  const p = preguntas[preguntaActual];
  quizStep.textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
  quizProgressBar.style.width = `${((preguntaActual + 1) / preguntas.length) * 100}%`;

  quizContent.innerHTML = `
    <p class="quiz-question">${p.pregunta}</p>
    <div class="quiz-options">
      ${p.opciones.map((op, i) => `
        <button class="quiz-option ${respuestas[preguntaActual] === op.tipo ? 'selected' : ''}"
                onclick="seleccionarOpcion('${op.tipo}', this)">
          ${op.texto}
        </button>
      `).join('')}
    </div>
  `;

  btnPrev.style.display = preguntaActual === 0 ? 'none' : 'inline-block';
  btnNext.textContent = preguntaActual === preguntas.length - 1 ? 'Ver mi recomendación ✨' : 'Siguiente →';
}

function seleccionarOpcion(tipo, btn) {
  document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  respuestas[preguntaActual] = tipo;
}

function quizNext() {
  if (!respuestas[preguntaActual]) {
    alert('Por favor selecciona una opción antes de continuar.');
    return;
  }

  if (preguntaActual < preguntas.length - 1) {
    preguntaActual++;
    renderPregunta();
  } else {
    mostrarResultado();
  }
}

function quizPrev() {
  if (preguntaActual > 0) {
    preguntaActual--;
    renderPregunta();
  }
}

function mostrarResultado() {
  // Determinar tipo dominante
  const conteo = {};
  respuestas.forEach(tipo => {
    conteo[tipo] = (conteo[tipo] || 0) + 1;
  });

  // Priorizar la respuesta de la última pregunta (zona del cuerpo) si es específica
  const ultimaRespuesta = respuestas[respuestas.length - 1];
  let tipoDominante;

  if (['facial', 'corporal', 'intimo', 'ninos'].includes(ultimaRespuesta)) {
    tipoDominante = ultimaRespuesta;
  } else {
    tipoDominante = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);
  }

  const rec = recomendaciones[tipoDominante] || recomendaciones['normal'];

  const quizBox = document.getElementById('quiz-box');
  const quizResultado = document.getElementById('quiz-resultado');
  const resultadoContent = document.getElementById('resultado-content');

  quizBox.style.display = 'none';

  resultadoContent.innerHTML = `
    <div class="resultado-emoji">${rec.emoji}</div>
    <h3>${rec.titulo}</h3>
    <p>${rec.descripcion}</p>
    <div class="resultado-producto">
      <h4>🧼 Te recomendamos: ${rec.producto}</h4>
      <p>${rec.detalle}</p>
      <p><strong>Precio: ${rec.precio}</strong></p>
    </div>
    <a href="https://wa.me/51983106899?text=Hola!%20Hice%20el%20quiz%20de%20SoapLove%20y%20me%20recomendaron%3A%20${encodeURIComponent(rec.producto)}%20%F0%9F%A7%BC%20%C2%BFMe%20puedes%20dar%20m%C3%A1s%20info%3F"
       target="_blank" class="btn btn-primary" style="margin-bottom: 16px; display: inline-block;">
      Pedir por WhatsApp 💬
    </a>
    <br/>
  `;

  quizResultado.style.display = 'block';
  quizResultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function reiniciarQuiz() {
  preguntaActual = 0;
  respuestas = [];
  document.getElementById('quiz-box').style.display = 'block';
  document.getElementById('quiz-resultado').style.display = 'none';
  renderPregunta();
  document.getElementById('quiz-box').scrollIntoView({ behavior: 'smooth' });
}

// ===== FORMULARIO CONTACTO → WHATSAPP =====
function enviarConsulta(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const celular = document.getElementById('celular').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !celular || !mensaje) {
    alert('Por favor completa los campos obligatorios.');
    return;
  }

  const texto = `Hola SoapLove! 🧼\n\nNombre: ${nombre}\nCelular: ${celular}\nConsulta: ${mensaje}`;
  const url = `https://wa.me/51983106899?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

// ===== ANIMACIÓN DE APARICIÓN AL HACER SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar quiz
  renderPregunta();

  // Animar tarjetas al hacer scroll
  const animables = document.querySelectorAll('.producto-card, .testimonio-card, .paso, .envio-card, .pago-item');
  animables.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
