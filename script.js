/* ═══════════════════════════════════════════════
   HANANE & AMINE — script.js
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initEnvelope();
    initPetals();
    initProgress();
    initReveal();
    initScrollCueFade();
    initBackToTop();
    initCountdown();

    /* ── Smooth anchors ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior:'smooth', block:'start' });
        });
    });
});

/* ── ENVELOPE ── */
function initEnvelope() {
    const scene = document.getElementById('envScene');
    const env   = document.getElementById('env');
    const hint  = document.getElementById('envHint');
    if (!env) return;

    scene.addEventListener('click', () => {
        if (env.classList.contains('opened')) return;

        // Subtle shake before flap opens
        env.style.animation = 'envShake .4s ease-in-out';
        setTimeout(() => env.style.animation = '', 400);

        // Open flap
        setTimeout(() => {
            env.classList.add('opened');
        }, 200);

        // Scroll to next section after flap fully opens
        setTimeout(() => {
            const next = document.querySelector('.page-section');
            if (next) next.scrollIntoView({ behavior:'smooth' });
        }, 1100);
    });

    // Inject shake keyframe
    const s = document.createElement('style');
    s.textContent = `
      @keyframes envShake {
        0%,100%{transform:translateX(0)rotate(0);}
        20%{transform:translateX(-5px)rotate(-.6deg);}
        40%{transform:translateX(5px)rotate(.6deg);}
        60%{transform:translateX(-3px)rotate(-.3deg);}
        80%{transform:translateX(3px)rotate(.3deg);}
      }`;
    document.head.appendChild(s);
}

/* ── CANVAS PETALS ── */
function initPetals() {
    const canvas = document.getElementById('petalCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, petals = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive:true });

    const colors = [
        'rgba(196,120,148,.52)', 'rgba(210,155,175,.46)',
        'rgba(168,77,106,.38)',  'rgba(228,188,202,.42)',
        'rgba(217,185,120,.22)',
    ];

    const total = window.innerWidth < 600 ? 18 : 34;

    class Petal {
        constructor() { this.reset(true); }
        reset(init = false) {
            this.x   = Math.random() * W;
            this.y   = init ? Math.random() * H : -20;
            this.w   = 4 + Math.random() * 7;
            this.h   = this.w * (1.3 + Math.random() * .5);
            this.rot = Math.random() * Math.PI * 2;
            this.vx  = -.4 + Math.random() * 1.1;
            this.vy  = .55 + Math.random() * .85;
            this.vr  = (Math.random() - .5) * .022;
            this.osc = Math.random() * Math.PI * 2;
            this.oscS= .007 + Math.random() * .007;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = init ? Math.random() * .8 : 0;
            this.fadein= .009 + Math.random() * .009;
        }
        update() {
            this.osc += this.oscS;
            this.x += this.vx + Math.sin(this.osc) * .45;
            this.y += this.vy;
            this.rot += this.vr;
            this.alpha = Math.min(.85, this.alpha + this.fadein);
            if (this.y > H + 30) this.reset();
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

    for (let i = 0; i < total; i++) petals.push(new Petal());

    (function loop() {
        ctx.clearRect(0, 0, W, H);
        petals.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    })();
}

/* ── SCROLL PROGRESS ── */
function initProgress() {
    const bar = document.getElementById('progressBar');
    if (!bar) return;
    let t = false;
    window.addEventListener('scroll', () => {
        if (!t) {
            t = true;
            requestAnimationFrame(() => {
                const tot = document.documentElement.scrollHeight - window.innerHeight;
                bar.style.width = (tot > 0 ? window.scrollY / tot * 100 : 0) + '%';
                t = false;
            });
        }
    }, { passive:true });
}

/* ── SCROLL REVEAL ── */
function initReveal() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold:.1, rootMargin:'0px 0px -48px 0px' });

    document.querySelectorAll('.reveal-block').forEach(b => io.observe(b));
}

/* ── SCROLL CUE FADE ── */
function initScrollCueFade() {
    const cue = document.getElementById('scrollCue');
    if (!cue) return;
    window.addEventListener('scroll', () => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        cue.style.opacity = pct > .07 ? '0' : '1';
    }, { passive:true });
}

/* ── BACK TO TOP ── */
function initBackToTop() {
    const btn = document.getElementById('btt');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', scrollY > 450), { passive:true });
    btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/* ── LIVE COUNTDOWN ── */
function initCountdown() {
    const wedding = new Date('2026-09-11T18:00:00');
    const els = {
        d: document.getElementById('cdDays'),
        h: document.getElementById('cdHours'),
        m: document.getElementById('cdMinutes'),
        s: document.getElementById('cdSeconds'),
    };
    const pad = n => String(Math.max(0,n)).padStart(2,'0');

    function tick() {
        const diff = wedding - new Date();
        if (diff <= 0) {
            Object.values(els).forEach(el => { if(el) el.textContent = '00'; });
            return;
        }
        if(els.d) els.d.textContent = pad(Math.floor(diff / 86400000));
        if(els.h) els.h.textContent = pad(Math.floor(diff % 86400000 / 3600000));
        if(els.m) els.m.textContent = pad(Math.floor(diff % 3600000 / 60000));
        if(els.s) els.s.textContent = pad(Math.floor(diff % 60000 / 1000));
    }
    tick();
    setInterval(tick, 1000);
}


