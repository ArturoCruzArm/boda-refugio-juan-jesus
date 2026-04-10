// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c💍 ¡Bienvenido a nuestra invitación de boda! 💍',
        'font-size: 20px; color: #4A6B54; font-weight: bold;');

    // Inicializar loading screen
    initLoadingScreen();

    initMusic();
    initCountdown();
    initContentTransitions();
    initScrollAnimations();
    initSmoothScroll();
    initNavigationDots();
    initScrollIndicators();
});

// ===================================
// LOADING SCREEN
// ===================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;

    // Ocultar loading screen después de que todo cargue
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
        }, 1500); // 1.5 segundos de loading
    });

    // Fallback por si load no se dispara
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
    }, 3000);
}

// ===================================
// MÚSICA DE FONDO
// ===================================
function initMusic() {
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');

    if (!music || !musicToggle || !musicIcon) {
        console.log('Elementos de música no encontrados');
        return;
    }

    let isPlaying = false;
    let hasInteracted = false;

    // Función para intentar reproducir música
    function startMusic() {
        if (!hasInteracted) {
            const playPromise = music.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    musicIcon.className = 'fas fa-volume-up';
                    hasInteracted = true;
                    console.log('Música iniciada automáticamente');
                }).catch(e => {
                    console.log('Autoplay bloqueado, esperando interacción del usuario:', e);
                    isPlaying = false;
                    musicIcon.className = 'fas fa-volume-mute';
                });
            }
        }
    }

    // Intentar reproducir con diferentes eventos (importante para Android)
    ['click', 'touchstart', 'touchend', 'scroll'].forEach(event => {
        document.addEventListener(event, startMusic, { once: true, passive: true });
    });

    // Manejar clicks en el botón de música
    function toggleMusic(e) {
        e.preventDefault();
        e.stopPropagation();

        hasInteracted = true;

        if (music.paused || !isPlaying) {
            // Intentar reproducir
            const playPromise = music.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    musicIcon.className = 'fas fa-volume-up';
                    console.log('Música reproduciendo');
                }).catch(e => {
                    console.log('Error al reproducir:', e);
                    isPlaying = false;
                    musicIcon.className = 'fas fa-volume-mute';
                });
            }
        } else {
            // Pausar
            music.pause();
            isPlaying = false;
            musicIcon.className = 'fas fa-volume-mute';
            console.log('Música pausada');
        }
    }

    // Agregar listeners para click y touch
    musicToggle.addEventListener('click', toggleMusic);
    musicToggle.addEventListener('touchend', toggleMusic);

    // Sincronizar el estado cuando el audio cambia
    music.addEventListener('play', function() {
        isPlaying = true;
        musicIcon.className = 'fas fa-volume-up';
    });

    music.addEventListener('pause', function() {
        isPlaying = false;
        musicIcon.className = 'fas fa-volume-mute';
    });
}

// ===================================
// CUENTA REGRESIVA - CORREGIDA
// ===================================
function initCountdown() {
    // Fecha: 18 de abril de 2026, 12:00 hrs — ceremonia
    const weddingYear = 2026;
    const weddingMonth = 3; // Abril (0=enero, 3=abril)
    const weddingDay = 18;
    const weddingHour = 12;
    const weddingMinute = 0;

    const weddingDate = new Date(weddingYear, weddingMonth, weddingDay, weddingHour, weddingMinute, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            const countdown = document.getElementById('countdown');
            if (countdown) {
                countdown.innerHTML = '<div style="text-align: center; font-size: 2rem; color: var(--verde-eucalipto); font-family: var(--font-serif);">¡Es hoy! 🎉</div>';
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    console.log('✅ Cuenta regresiva inicializada');
}

// ===================================
// TRANSICIONES DE CONTENIDO - NUEVO
// ===================================
function initContentTransitions() {
    const contentSections = document.querySelectorAll('.content-section');

    if (contentSections.length === 0) {
        console.log('No se encontraron secciones de contenido');
        return;
    }

    // Calcular el rootMargin basado en la posición del marco geométrico (40px desde los bordes)
    const observerOptions = {
        threshold: 0.1, // Trigger cuando 10% de la sección es visible
        rootMargin: '-80px 0px -80px 0px' // Ajustado para coincidir con el marco del fondo (40px + margen)
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger letter animations for ALL sections
                const sectionType = entry.target.dataset.section;

                // Aplicar animación letra por letra según el tipo de sección
                if (sectionType === 'parents') {
                    animateParentsLetters(entry.target);
                } else if (sectionType === 'quote') {
                    animateQuoteLetters(entry.target);
                } else if (sectionType === 'initial') {
                    animateInitialSection(entry.target);
                } else if (sectionType === 'countdown') {
                    animateCountdownLabels(entry.target);
                } else if (sectionType === 'ceremony' || sectionType === 'reception') {
                    animateEventSection(entry.target);
                } else if (sectionType === 'dresscode') {
                    animateDressCodeSection(entry.target);
                } else if (sectionType === 'gifts') {
                    animateGiftsSection(entry.target);
                } else if (sectionType === 'social') {
                    animateSocialSection(entry.target);
                } else if (sectionType === 'rsvp') {
                    animateRSVPSection(entry.target);
                } else if (sectionType === 'info') {
                    animateInfoSection(entry.target);
                }
            }
        });
    }, observerOptions);

    contentSections.forEach(section => {
        observer.observe(section);
    });

    console.log('✅ Transiciones de contenido inicializadas');

    // Observar también el footer
    const footer = document.querySelector('.footer');
    if (footer) {
        const footerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateFooter(entry.target);
                }
            });
        }, observerOptions);

        footerObserver.observe(footer);
    }
}

// Función para animar letra por letra de forma aleatoria - Padres
function animateParentsLetters(parentsSection) {
    // Verificar si ya fue animado para evitar duplicación
    if (parentsSection.dataset.animated === 'true') return;
    parentsSection.dataset.animated = 'true';

    // Obtener todos los elementos de texto
    const textElements = parentsSection.querySelectorAll('.parents-hero-label, .parents-hero-names p, .parents-hero-memory');

    textElements.forEach((element, elementIndex) => {
        // Verificar si el elemento tiene un icono (como la cruz memorial)
        const specialIcon = element.querySelector('.memorial-cross');

        // Si tiene elementos especiales, guardarlos antes de procesar
        let savedSpecialHTML = null;
        if (specialIcon) {
            savedSpecialHTML = specialIcon.outerHTML;
        }

        // Guardar el innerHTML original para preservar <br>
        const originalHTML = element.innerHTML;

        // Si tiene <br>, reemplazar con marcador especial para preservar
        let htmlWithMarkers = originalHTML;
        if (specialIcon) {
            htmlWithMarkers = htmlWithMarkers.replace(specialIcon.outerHTML, '');
        }

        // Obtener solo el texto visible
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlWithMarkers;
        const text = tempDiv.textContent.trim();

        // Crear contenedor para las letras
        element.innerHTML = '';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';

        // Crear array de letras con sus índices
        const letters = [];
        for (let i = 0; i < text.length; i++) {
            // Si encontramos el marcador de BR
            if (text.substring(i, i + 9) === '|||BR|||') {
                const br = document.createElement('br');
                element.appendChild(br);
                i += 8; // Saltar el resto del marcador
                continue;
            }

            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.display = 'inline';
            span.style.transition = 'opacity 0.3s ease-out';

            // Hacer visibles los espacios inmediatamente
            if (text[i] === ' ') {
                span.style.opacity = '1';
            }

            element.appendChild(span);

            // Solo animar letras visibles (no espacios)
            if (text[i].trim() !== '') {
                letters.push({ span, index: i });
            }
        }

        // Mezclar aleatoriamente el orden de aparición
        const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);

        // Animar cada letra con delay progresivo aleatorio
        const baseDelay = elementIndex * 300; // Delay base por elemento
        shuffledLetters.forEach((letter, i) => {
            setTimeout(() => {
                letter.span.style.opacity = '1';
            }, baseDelay + (i * 30)); // 30ms entre cada letra
        });

        // Restaurar elementos especiales al final si los había (solo una vez)
        if (savedSpecialHTML) {
            setTimeout(() => {
                element.insertAdjacentHTML('beforeend', ' ' + savedSpecialHTML);
            }, baseDelay + (letters.length * 30));
        }
    });
}

// Función para animar quote letra por letra
function animateQuoteLetters(quoteSection) {
    // Verificar si ya fue animado
    if (quoteSection.dataset.animated === 'true') return;
    quoteSection.dataset.animated = 'true';

    const quoteMessage = quoteSection.querySelector('.quote-message');
    if (!quoteMessage) return;

    const text = quoteMessage.textContent.trim();
    quoteMessage.innerHTML = '';
    quoteMessage.style.opacity = '1';

    const letters = [];
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.display = 'inline';
        span.style.transition = 'opacity 0.3s ease-out';

        // Hacer visibles los espacios inmediatamente
        if (text[i] === ' ') {
            span.style.opacity = '1';
        }

        quoteMessage.appendChild(span);

        // Solo agregar letras no-espacios al array de animación
        if (text[i].trim() !== '') {
            letters.push({ span, index: i });
        }
    }

    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);

    shuffledLetters.forEach((letter, i) => {
        setTimeout(() => {
            letter.span.style.opacity = '1';
        }, i * 25); // 25ms entre cada letra para efecto más fluido
    });
}

// Función genérica para animar cualquier texto letra por letra
function animateTextLetterByLetter(element, baseDelay = 0, speed = 25) {
    if (element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';

    const text = element.textContent.trim();
    element.innerHTML = '';
    element.style.opacity = '1';

    const letters = [];
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.display = 'inline';
        span.style.transition = 'opacity 0.3s ease-out';

        // Hacer visibles los espacios inmediatamente
        if (text[i] === ' ') {
            span.style.opacity = '1';
        }

        element.appendChild(span);

        // Solo agregar letras no-espacios al array de animación
        if (text[i].trim() !== '') {
            letters.push({ span, index: i });
        }
    }

    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);

    shuffledLetters.forEach((letter, i) => {
        setTimeout(() => {
            letter.span.style.opacity = '1';
        }, baseDelay + (i * speed));
    });
}

// Animación para sección inicial
function animateInitialSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const coupleNames = section.querySelector('.couple-names');
    const dateMonth = section.querySelector('.date-month');
    const dateDay = section.querySelector('.date-day');
    const dateNumber = section.querySelector('.date-number');
    const dateTime = section.querySelector('.date-time');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);
    if (coupleNames) animateTextLetterByLetter(coupleNames, 600, 40);
    if (dateMonth) animateTextLetterByLetter(dateMonth, 1200, 25);
    if (dateDay) animateTextLetterByLetter(dateDay, 1400, 25);
    if (dateNumber) animateTextLetterByLetter(dateNumber, 1600, 50);
    if (dateTime) animateTextLetterByLetter(dateTime, 1800, 25);
}

// Animación para sección de cuenta regresiva
function animateCountdownLabels(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const labels = section.querySelectorAll('.countdown-label');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);

    labels.forEach((label, index) => {
        animateTextLetterByLetter(label, 600 + (index * 100), 20);
    });
}

// Animación para secciones de eventos (ceremonia/recepción)
function animateEventSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const eventTime = section.querySelector('.event-time');
    const eventLocation = section.querySelector('.event-location');
    const eventAddress = section.querySelector('.event-address');
    const eventNote = section.querySelector('.event-note');
    const eventSuggestion = section.querySelector('.event-suggestion');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);
    if (eventTime) animateTextLetterByLetter(eventTime, 600, 25);
    if (eventLocation) animateTextLetterByLetter(eventLocation, 800, 25);
    if (eventAddress) animateTextLetterByLetter(eventAddress, 1000, 20);
    if (eventNote) animateTextLetterByLetter(eventNote, 1200, 20);
    if (eventSuggestion) animateTextLetterByLetter(eventSuggestion, 1400, 20);
}

// Animación para sección de código de vestimenta
function animateDressCodeSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const dressCodeText = section.querySelector('.dress-code-text');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);
    if (dressCodeText) animateTextLetterByLetter(dressCodeText, 600, 40);
}

// Animación para sección de regalos
function animateGiftsSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const giftsSubtitle = section.querySelector('.gifts-subtitle');
    const giftsH3 = section.querySelector('.gifts-hero-content h3');
    const giftsP = section.querySelector('.gifts-hero-content p');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);
    if (giftsSubtitle) animateTextLetterByLetter(giftsSubtitle, 600, 25);
    if (giftsH3) animateTextLetterByLetter(giftsH3, 900, 30);
    if (giftsP) animateTextLetterByLetter(giftsP, 1200, 20);
}

// Animación para sección social
function animateSocialSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const socialSubtitle = section.querySelector('.social-subtitle');
    const hashtag = section.querySelector('.hashtag');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);
    if (socialSubtitle) animateTextLetterByLetter(socialSubtitle, 600, 25);
    if (hashtag) animateTextLetterByLetter(hashtag, 900, 35);
}

// Animación para sección RSVP
function animateRSVPSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const rsvpSubtitle = section.querySelector('.rsvp-subtitle');
    const whatsappNames = section.querySelectorAll('.whatsapp-name');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);
    if (rsvpSubtitle) animateTextLetterByLetter(rsvpSubtitle, 600, 20);

    whatsappNames.forEach((name, index) => {
        animateTextLetterByLetter(name, 900 + (index * 200), 30);
    });
}

// Animación para sección de información
function animateInfoSection(section) {
    if (section.dataset.animated === 'true') return;
    section.dataset.animated = 'true';

    const heroSubtitle = section.querySelector('.hero-subtitle');
    const heroTitle = section.querySelector('.hero-title');
    const infoCards = section.querySelectorAll('.info-card h3');

    if (heroSubtitle) animateTextLetterByLetter(heroSubtitle, 0, 30);
    if (heroTitle) animateTextLetterByLetter(heroTitle, 300, 30);

    infoCards.forEach((card, index) => {
        animateTextLetterByLetter(card, 600 + (index * 150), 25);
    });

    // Animar también los párrafos de las tarjetas
    const infoParagraphs = section.querySelectorAll('.info-card p');
    infoParagraphs.forEach((p, index) => {
        animateTextLetterByLetter(p, 1200 + (index * 150), 15);
    });
}

// Animación para el footer
function animateFooter(footer) {
    if (footer.dataset.animated === 'true') return;
    footer.dataset.animated = 'true';

    const footerMessage = footer.querySelector('.footer-message');
    const footerNames = footer.querySelector('.footer-names');
    const footerDate = footer.querySelector('.footer-date');
    const footerCredit = footer.querySelector('.footer-credit');

    if (footerMessage) animateTextLetterByLetter(footerMessage, 0, 35);
    if (footerNames) animateTextLetterByLetter(footerNames, 500, 40);
    if (footerDate) animateTextLetterByLetter(footerDate, 900, 50);
    if (footerCredit) animateTextLetterByLetter(footerCredit, 1300, 20);
}

// ===================================
// ANIMACIONES AL HACER SCROLL
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(`
        .section-title,
        .parent-group,
        .romantic-quote,
        .countdown-item,
        .event-card,
        .gift-card,
        .hashtag-content,
        .whatsapp-item,
        .info-card,
        .footer-message,
        .footer-names,
        .footer-date,
        .rsvp-subtitle,
        .gifts-subtitle,
        .event-icon,
        .whatsapp-contact > p,
        .event-hero-details,
        .dresscode-content,
        .gifts-hero-content,
        .social-subtitle,
        .hashtag,
        .social-links
    `);

    animatedElements.forEach((element, index) => {
        if (element.classList.contains('section-title')) {
            element.classList.add('fade-in-up');
        } else if (element.classList.contains('parent-group')) {
            element.classList.add(index % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
        } else if (element.classList.contains('countdown-item')) {
            element.classList.add('scale-in');
            element.classList.add(`delay-${(index % 4) + 1}`);
        } else if (element.classList.contains('event-card')) {
            element.classList.add('fade-in-up');
        } else if (element.classList.contains('gift-card')) {
            element.classList.add('scale-in');
        } else if (element.classList.contains('info-card')) {
            element.classList.add('fade-in-up');
            element.classList.add(`delay-${(index % 4) + 1}`);
        } else if (element.classList.contains('whatsapp-item')) {
            element.classList.add(index % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
        } else {
            element.classList.add('fade-in-up');
        }

        observer.observe(element);
    });

    const parentParagraphs = document.querySelectorAll('.parent-group p, .parent-group h3');
    parentParagraphs.forEach((p, index) => {
        p.classList.add('fade-in-up');
        p.classList.add(`delay-${Math.min(index + 1, 3)}`);
        observer.observe(p);
    });

    const quoteText = document.querySelector('.romantic-quote p');
    if (quoteText) {
        quoteText.classList.add('fade-in-up');
        observer.observe(quoteText);
    }

    const mapButtons = document.querySelectorAll('.btn-map');
    mapButtons.forEach((btn, index) => {
        btn.classList.add('fade-in-up');
        btn.classList.add(`delay-${index + 1}`);
        observer.observe(btn);
    });

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.classList.add('scale-in');
        link.classList.add(`delay-${index + 1}`);
        observer.observe(link);
    });

    const hashtag = document.querySelector('.hashtag');
    if (hashtag) {
        hashtag.classList.add('scale-in');
        observer.observe(hashtag);
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// EFECTO PARALLAX SUAVE (Ya no necesario para fondo fijo)
// ===================================
// El parallax ya no se aplica al fondo porque está fijo
// Se mantiene por compatibilidad pero no hace nada

let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // El fondo es fijo, por lo que ya no necesitamos parallax
            // Este código se mantiene por compatibilidad
            ticking = false;
        });
        ticking = true;
    }
});

// ===================================
// ANIMACIONES CSS ADICIONALES
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
        }
    }
`;
document.head.appendChild(style);

console.log('%c✨ Invitación cargada exitosamente ✨', 'font-size: 14px; color: #D4AF37; font-weight: bold;');

// ===================================
// NAVIGATION DOTS
// ===================================
function initNavigationDots() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.content-section');

    if (navDots.length === 0 || sections.length === 0) return;

    // Click en dots para navegar
    navDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            const target = document.querySelector(`[data-section="${targetSection}"]`);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Actualizar dot activo al hacer scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.dataset.section;

                // Remover active de todos los dots
                navDots.forEach(dot => dot.classList.remove('active'));

                // Agregar active al dot correspondiente
                const activeDot = document.querySelector(`.nav-dot[data-section="${sectionName}"]`);
                if (activeDot) {
                    activeDot.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    console.log('✅ Navegación con dots inicializada');
}

// ===================================
// SCROLL INDICATORS (Click to scroll)
// ===================================
function initScrollIndicators() {
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');

    scrollIndicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const currentSection = this.closest('.content-section');
            if (currentSection) {
                const nextSection = currentSection.nextElementSibling;
                if (nextSection && nextSection.classList.contains('content-section')) {
                    nextSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                } else {
                    // Si no hay siguiente sección, ir al footer
                    const footer = document.querySelector('.footer');
                    if (footer) {
                        footer.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    });

    console.log('✅ Indicadores de scroll inicializados');
}

// ===================================
// TOGGLE MÚSICA - Clase para tooltip
// ===================================
const musicBtn = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

if (musicBtn && backgroundMusic) {
    backgroundMusic.addEventListener('play', function() {
        musicBtn.classList.add('playing');
    });

    backgroundMusic.addEventListener('pause', function() {
        musicBtn.classList.remove('playing');
    });
}
