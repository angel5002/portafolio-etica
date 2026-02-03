/**
 * =====================================================
 * PORTAFOLIO DE ÉTICA PROFESIONAL
 * JavaScript - Funcionalidades Interactivas
 * =====================================================
 */

// ===== Configuración Global =====
const CONFIG = {
    // IDs de videos de YouTube (reemplazar con los reales)
    podcastVideoId: 'VIDEO_ID_PODCAST',
    reaccionVideoId: 'VIDEO_ID_REACCION',

    // Animaciones
    animationThreshold: 0.1,
    scrollOffset: 80,

    // Contadores
    counterDuration: 2000,
    counterStep: 50
};

// ===== Inicialización =====
document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    initNavigation();
    initManifiestoTabs();
    initVideoPlayers();
    initScrollAnimations();
    initCounterAnimation();
    initScrollToTop();
    initSmoothScroll();
    initParallaxEffects();
});

// ===== Iconos Lucide =====
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===== Navegación =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menú móvil
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Cambiar estilo del navbar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        // Actualizar link activo según sección visible
        updateActiveNavLink();
    });
}

// Actualizar enlace activo en navegación
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== Tabs del Manifiesto =====
function initManifiestoTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Desactivar todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activar el botón y contenido seleccionado
            button.classList.add('active');
            document.getElementById(targetTab)?.classList.add('active');

            // Re-inicializar iconos en el nuevo contenido
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });
}

// ===== Reproductores de Video =====
function initVideoPlayers() {
    const podcastBtn = document.getElementById('load-podcast-btn');
    const reaccionBtn = document.getElementById('load-reaccion-btn');

    podcastBtn?.addEventListener('click', () => {
        loadYouTubeVideo('podcast-video-container', podcastBtn.dataset.videoId || CONFIG.podcastVideoId);
        podcastBtn.style.display = 'none';
    });

    reaccionBtn?.addEventListener('click', () => {
        loadYouTubeVideo('reaccion-video-container', reaccionBtn.dataset.videoId || CONFIG.reaccionVideoId);
        reaccionBtn.style.display = 'none';
    });
}

// Cargar video de YouTube
function loadYouTubeVideo(containerId, videoId) {
    const container = document.getElementById(containerId);

    if (!container || !videoId || videoId === 'VIDEO_ID_PODCAST' || videoId === 'VIDEO_ID_REACCION') {
        showVideoError(container, 'Por favor, configura el ID del video de YouTube');
        return;
    }

    // Crear iframe de YouTube
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    iframe.title = 'Video de YouTube';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    // Limpiar placeholder y agregar iframe
    container.innerHTML = '';
    container.appendChild(iframe);

    // Agregar animación de entrada
    iframe.style.opacity = '0';
    iframe.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        iframe.style.opacity = '1';
    }, 100);
}

// Mostrar error en video
function showVideoError(container, message) {
    if (container) {
        container.innerHTML = `
            <div class="placeholder-content" style="color: var(--accent-rose);">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>${message}</span>
                <small>Edita el archivo HTML para agregar el ID del video</small>
            </div>
        `;
    }
}

// ===== Animaciones al Scroll =====
function initScrollAnimations() {
    // Agregar clase de animación a elementos
    const animatedElements = document.querySelectorAll(
        '.section-header, .tab-content, .rostro-card, .valor-item, ' +
        '.pillar, .miembro-card, .analysis-point, .ods-item'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        // Agregar delay escalonado
        const delayClass = `delay-${(index % 5) + 1}`;
        el.classList.add(delayClass);
    });

    // Observer para detectar elementos visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: CONFIG.animationThreshold,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== Animación de Contadores =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Animar contador individual
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = CONFIG.counterDuration;
    const step = CONFIG.counterStep;
    const increment = target / (duration / step);

    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, step);
}

// ===== Botón Scroll to Top =====
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn?.classList.add('visible');
        } else {
            scrollTopBtn?.classList.remove('visible');
        }
    });

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Smooth Scroll para Enlaces =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;

                // Scroll suave con animación easing personalizada
                smoothScrollTo(offsetTop, 1200);
            }
        });
    });
}

// Función de scroll suave con easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Función de easing (ease-in-out cubic)
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ===== Efectos Parallax =====
function initParallaxEffects() {
    const orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // Efecto de movimiento del mouse en el hero
    const hero = document.querySelector('.hero');

    hero?.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        orbs.forEach((orb, index) => {
            const intensity = 20 + (index * 10);
            orb.style.transform = `translate(${xPercent * intensity}px, ${yPercent * intensity}px)`;
        });
    });
}

// ===== Utilidades =====

// Función para actualizar los IDs de videos
window.updateVideoId = function(type, videoId) {
    if (type === 'podcast') {
        const btn = document.getElementById('load-podcast-btn');
        if (btn) btn.dataset.videoId = videoId;
    } else if (type === 'reaccion') {
        const btn = document.getElementById('load-reaccion-btn');
        if (btn) btn.dataset.videoId = videoId;
    }
    console.log(`Video ${type} actualizado: ${videoId}`);
};

// Función para imprimir el portafolio
window.printPortfolio = function() {
    window.print();
};

// Función para compartir en LinkedIn
window.shareOnLinkedIn = function() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Portafolio de Ética Profesional');
    window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        '_blank',
        'width=600,height=400'
    );
};

// Función para copiar enlace
window.copyLink = function() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('¡Enlace copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
};

// Mostrar notificación
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        padding: 16px 24px;
        background: var(--gradient-primary);
        color: white;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Agregar estilos de animación para notificaciones
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(notificationStyles);

// ===== Datos Editables (para integración con IA) =====

/**
 * Esta sección contiene funciones para actualizar contenido
 * dinámicamente, facilitando la edición por parte de los estudiantes
 * con ayuda de otra IA.
 */

window.PortfolioData = {
    // Actualizar información del equipo
    updateTeamMember: function(index, data) {
        const cards = document.querySelectorAll('.miembro-card');
        if (cards[index]) {
            const card = cards[index];
            if (data.nombre) card.querySelector('h4').textContent = data.nombre;
            if (data.rol) card.querySelector('.miembro-rol').textContent = data.rol;
            if (data.contribucion) card.querySelector('.miembro-contribucion').textContent = data.contribucion;
            if (data.linkedin) card.querySelector('.social-link[href*="linkedin"]')?.setAttribute('href', data.linkedin);
            if (data.email) card.querySelector('.social-link[href*="mailto"]')?.setAttribute('href', `mailto:${data.email}`);
        }
    },

    // Actualizar metáfora del Telos
    updateMetaphor: function(text) {
        const quote = document.querySelector('.metaphor-quote blockquote');
        if (quote) quote.textContent = text;
    },

    // Actualizar valores
    updateValue: function(index, data) {
        const values = document.querySelectorAll('.valor-item');
        if (values[index]) {
            const value = values[index];
            if (data.titulo) value.querySelector('h4').textContent = data.titulo;
            if (data.descripcion) value.querySelector('p').textContent = data.descripcion;
        }
    },

    // Actualizar información del curso
    updateCourseInfo: function(data) {
        const items = document.querySelectorAll('.curso-details ul li');
        if (data.curso && items[0]) items[0].innerHTML = `<strong>Curso:</strong> ${data.curso}`;
        if (data.universidad && items[1]) items[1].innerHTML = `<strong>Universidad:</strong> ${data.universidad}`;
        if (data.carrera && items[2]) items[2].innerHTML = `<strong>Carrera:</strong> ${data.carrera}`;
        if (data.docente && items[3]) items[3].innerHTML = `<strong>Docente:</strong> ${data.docente}`;
        if (data.periodo && items[4]) items[4].innerHTML = `<strong>Período:</strong> ${data.periodo}`;
    },

    // Actualizar firmas del compromiso
    updateSignatures: function(names) {
        const firmas = document.querySelectorAll('.firma-nombre');
        names.forEach((name, index) => {
            if (firmas[index]) firmas[index].textContent = name;
        });
    },

    // Actualizar juramento
    updateOath: function(text) {
        const oath = document.querySelector('.juramento-text p');
        if (oath) oath.innerHTML = text;
    }
};

// ===== Exportar para uso externo =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, PortfolioData: window.PortfolioData };
}

console.log('✅ Portafolio de Ética Profesional cargado correctamente');
console.log('📝 Usa window.PortfolioData para actualizar contenido dinámicamente');
