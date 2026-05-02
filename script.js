/* ============================================
   WEDDING INVITATION — VANILLA JS
   Hanane & Amine · 19.09.2026
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initEnvelope();
    initPetals();
    initScrollProgress();
    initScrollReveal();
    initScrollIndicator();
    initBackToTop();
    initCountdown();
});

// ============================================
// ENVELOPE
// ============================================

function initEnvelope() {
    const envelope  = document.getElementById('envelope');
    const clickHint = document.getElementById('clickHint');
    if (!envelope) return;

    envelope.addEventListener('click', function () {
        if (envelope.classList.contains('opened')) return;
        envelope.classList.add('opened');

        if (clickHint) {
            clickHint.style.opacity = '0';
            clickHint.style.pointerEvents = 'none';
        }

        setTimeout(() => {
            const target = document.querySelector('.section-couple');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 900);
    });
}

// ============================================
// FALLING PETALS
// ============================================

function initPetals() {
    const container = document.getElementById('petalsContainer');
    if (!container) return;

    // Soft rose & champagne petal colours
    const colors = [
        'rgba(180, 120, 100, 0.55)',
        'rgba(212, 184, 150, 0.50)',
        'rgba(200, 155, 130, 0.45)',
        'rgba(224, 200, 170, 0.40)',
        'rgba(160, 100,  85, 0.35)',
    ];

    const count = window.innerWidth < 600 ? 14 : 28;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';

        const left     = Math.random() * 100;
        const duration = 10 + Math.random() * 14;
        const delay    = Math.random() * 16;
        const size     = 4 + Math.random() * 5;
        const color    = colors[Math.floor(Math.random() * colors.length)];

        petal.style.left              = left + '%';
        petal.style.width             = size + 'px';
        petal.style.height            = (size * 1.5) + 'px';
        petal.style.background        = color;
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay    = '-' + delay + 's'; // start mid-fall
        petal.style.borderRadius      = Math.random() > 0.5 ? '100% 0 100% 0' : '0 100% 0 100%';

        container.appendChild(petal);
    }
}

// ============================================
// SCROLL PROGRESS
// ============================================

function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                const total   = document.documentElement.scrollHeight - window.innerHeight;
                const pct     = total > 0 ? (window.scrollY / total) * 100 : 0;
                bar.style.width = pct + '%';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// SCROLL REVEAL
// ============================================

function initScrollReveal() {
    const frames = document.querySelectorAll('.elegant-frame');
    if (!frames.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    frames.forEach(f => observer.observe(f));
}

// ============================================
// SCROLL INDICATOR FADE
// ============================================

function initScrollIndicator() {
    const indicator = document.getElementById('scrollIndicator');
    if (!indicator) return;

    window.addEventListener('scroll', function () {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        indicator.style.opacity = pct > 8 ? '0' : '1';
        indicator.style.pointerEvents = pct > 8 ? 'none' : 'auto';
    }, { passive: true });
}

// ============================================
// BACK TO TOP
// ============================================

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
        btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// LIVE COUNTDOWN
// ============================================

function initCountdown() {
    const weddingDate = new Date('2026-09-19T18:00:00');

    function update() {
        const now  = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            document.getElementById('days')    && (document.getElementById('days').textContent    = '0');
            document.getElementById('hours')   && (document.getElementById('hours').textContent   = '0');
            document.getElementById('minutes') && (document.getElementById('minutes').textContent = '0');
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');

        if (dEl) dEl.textContent = String(d).padStart(2, '0');
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
    }

    update();
    setInterval(update, 30000);
}

// ============================================
// SMOOTH ANCHOR SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
