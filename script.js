/* ══════════════════════════════════════════
   HANANE & AMINE — script.js
   19 September 2026
══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initEnvelope();
    initPetalCanvas();
    initScrollProgress();
    initScrollReveal();
    initScrollCueFade();
    initBackToTop();
    initCountdown();
});

/* ══════════════════════════════════════════
   ENVELOPE
══════════════════════════════════════════ */

function initEnvelope() {
    const env     = document.getElementById('env');
    const hint    = document.getElementById('envHint');
    const scene   = document.getElementById('envScene');
    if (!env) return;

    scene.addEventListener('click', () => {
        if (env.classList.contains('opened')) return;
        env.classList.add('opened');

        if (hint) {
            hint.style.opacity = '0';
            hint.style.pointerEvents = 'none';
        }

        // Gentle shake before scroll
        env.style.animation = 'envShake 0.35s ease-in-out';
        setTimeout(() => { env.style.animation = ''; }, 350);

        setTimeout(() => {
            const target = document.querySelector('.s-couple');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 950);
    });
}

/* ══════════════════════════════════════════
   CANVAS ROSE PETALS
══════════════════════════════════════════ */

function initPetalCanvas() {
    const canvas = document.getElementById('petalCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, petals = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Rose & blush petal colours
    const colors = [
        'rgba(196,122,144,0.55)',
        'rgba(212,160,176,0.50)',
        'rgba(176,80,112,0.40)',
        'rgba(228,190,200,0.45)',
        'rgba(160,80, 100,0.35)',
        'rgba(217,185,120,0.25)',  // occasional gold
    ];

    const count = window.innerWidth < 600 ? 18 : 38;

    class Petal {
        constructor(fromTop = false) {
            this.reset(fromTop);
        }

        reset(fromTop = false) {
            this.x    = Math.random() * W;
            this.y    = fromTop ? -20 : Math.random() * H;
            this.w    = 5 + Math.random() * 7;
            this.h    = this.w * (1.3 + Math.random() * 0.5);
            this.rot  = Math.random() * Math.PI * 2;
            this.vx   = -0.5 + Math.random() * 1.2;
            this.vy   = 0.6 + Math.random() * 0.9;
            this.vr   = (Math.random() - 0.5) * 0.025;
            this.osc  = Math.random() * Math.PI * 2;
            this.oscS = 0.008 + Math.random() * 0.008;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = 0;
            this.fadeIn = 0.008 + Math.random() * 0.01;
        }

        update() {
            this.osc += this.oscS;
            this.x  += this.vx + Math.sin(this.osc) * 0.5;
            this.y  += this.vy;
            this.rot += this.vr;
            this.alpha = Math.min(1, this.alpha + this.fadeIn);

            if (this.y > H + 30) this.reset(true);
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rot);
            ctx.globalAlpha = this.alpha;

            ctx.beginPath();
            ctx.ellipse(0, 0, this.w / 2, this.h / 2, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.restore();
        }
    }

    for (let i = 0; i < count; i++) petals.push(new Petal());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        petals.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    }

    loop();
}

/* ══════════════════════════════════════════
   SCROLL PROGRESS
══════════════════════════════════════════ */

function initScrollProgress() {
    const bar = document.getElementById('progressBar');
    if (!bar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const total = document.documentElement.scrollHeight - innerHeight;
                const pct   = total > 0 ? (scrollY / total) * 100 : 0;
                bar.style.width = pct + '%';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ══════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
══════════════════════════════════════════ */

function initScrollReveal() {
    const blocks = document.querySelectorAll('.reveal-block');
    if (!blocks.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10, rootMargin: '0px 0px -50px 0px' });

    blocks.forEach(b => io.observe(b));
}

/* ══════════════════════════════════════════
   SCROLL CUE FADE
══════════════════════════════════════════ */

function initScrollCueFade() {
    const cue = document.getElementById('scrollCue');
    if (!cue) return;

    window.addEventListener('scroll', () => {
        const pct = scrollY / (document.documentElement.scrollHeight - innerHeight);
        cue.style.opacity = pct > 0.06 ? '0' : '1';
    }, { passive: true });
}

/* ══════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════ */

function initBackToTop() {
    const btn = document.getElementById('btt');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ══════════════════════════════════════════
   LIVE COUNTDOWN (with seconds)
══════════════════════════════════════════ */

function initCountdown() {
    const weddingDate = new Date('2026-09-19T18:00:00');

    const dEl = document.getElementById('cdDays');
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMinutes');
    const sEl = document.getElementById('cdSeconds');

    if (!dEl) return;

    function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

    function tick() {
        const diff = weddingDate - new Date();
        if (diff <= 0) {
            [dEl, hEl, mEl, sEl].forEach(el => { if (el) el.textContent = '00'; });
            return;
        }

        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        dEl.textContent = pad(d);
        hEl.textContent = pad(h);
        mEl.textContent = pad(m);
        if (sEl) sEl.textContent = pad(s);
    }

    tick();
    setInterval(tick, 1000);
}

/* ══════════════════════════════════════════
   ENVELOPE SHAKE KEYFRAME (injected)
══════════════════════════════════════════ */

(function injectShake() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes envShake {
            0%,100% { transform: translateX(0) rotate(0deg); }
            20%      { transform: translateX(-4px) rotate(-0.5deg); }
            40%      { transform: translateX( 4px) rotate( 0.5deg); }
            60%      { transform: translateX(-3px) rotate(-0.3deg); }
            80%      { transform: translateX( 3px) rotate( 0.3deg); }
        }
    `;
    document.head.appendChild(style);
})();

/* ── smooth anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});