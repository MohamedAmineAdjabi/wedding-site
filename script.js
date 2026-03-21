/* ============================================
   WEDDING INVITATION - VANILLA JAVASCRIPT
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initEnvelope();
    initBalloons();
    initParticles();
    initScrollProgress();
    initBackToTop();
    initScrollIndicator();
    initConfetti();
});

// ============================================
// ENVELOPE INTERACTION
// ============================================

function initEnvelope() {
    const envelope = document.getElementById('envelope');
    const clickHint = document.getElementById('clickHint');

    if (!envelope) return;

    envelope.addEventListener('click', function(e) {
        e.preventDefault();
        envelope.classList.toggle('opened');
        
        if (envelope.classList.contains('opened')) {
            clickHint.style.opacity = '0';
            clickHint.style.pointerEvents = 'none';
            
            // Trigger confetti when envelope opens
            triggerConfetti();
            
            // Scroll to wedding info after a delay
            setTimeout(() => {
                const weddingSection = document.querySelector('.section-couple');
                if (weddingSection) {
                    weddingSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 800);
        }
    });

    // Hover effect
    envelope.addEventListener('mouseenter', function() {
        if (!envelope.classList.contains('opened')) {
            envelope.style.transform = 'scale(1.05)';
        }
    });

    envelope.addEventListener('mouseleave', function() {
        envelope.style.transform = 'scale(1)';
    });
}

// ============================================
// BALLOONS
// ============================================

function initBalloons() {
    const container = document.getElementById('balloonsContainer');
    if (!container) return;

    const balloonColors = ['balloon-pink', 'balloon-gold', 'balloon-rose'];
    const balloonCount = 12;

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = `balloon ${balloonColors[i % balloonColors.length]}`;
        
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 6 + Math.random() * 4;
        
        balloon.style.left = randomLeft + '%';
        balloon.style.animationDelay = randomDelay + 's';
        balloon.style.animationDuration = randomDuration + 's';
        balloon.style.bottom = Math.random() * 20 - 60 + 'px';
        
        container.appendChild(balloon);
    }
}

// ============================================
// PARTICLES (SPARKLES)
// ============================================

function initParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle particle-sparkle';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 4 + 2;
    const duration = 4 + Math.random() * 4;
    const delay = Math.random() * 2;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    container.appendChild(particle);
    
    // Animate particle
    animateParticle(particle, duration, delay);
}

function animateParticle(particle, duration, delay) {
    const startTime = Date.now() + delay * 1000;
    
    function animate() {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = (elapsed % duration) / duration;
        
        const opacity = Math.sin(progress * Math.PI) * 0.6 + 0.3;
        const scale = Math.sin(progress * Math.PI);
        
        particle.style.opacity = opacity;
        particle.style.transform = `scale(${scale})`;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ============================================
// SCROLL PROGRESS
// ============================================

function initScrollProgress() {
    window.addEventListener('scroll', updateScrollProgress);
}

function updateScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SCROLL INDICATOR
// ============================================

function initScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;

    window.addEventListener('scroll', function() {
        const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollProgress > 15) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ============================================
// CONFETTI
// ============================================

function initConfetti() {
    // Initialize confetti container
    const container = document.getElementById('confettiContainer');
    if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'confettiContainer';
        newContainer.className = 'confetti-container';
        document.body.appendChild(newContainer);
    }
}

function triggerConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;

    const confettiCount = 50;
    const colors = ['#E94B7E', '#F4D03F', '#D4346B', '#F5D5E3'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti confetti-piece';
        
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight / 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 0.2;
        const duration = 2 + Math.random() * 1;
        
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.background = color;
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';
        
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all ornate frames
    document.querySelectorAll('.ornate-frame').forEach(frame => {
        observer.observe(frame);
    });
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

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

// ============================================
// FLOATING ELEMENTS ANIMATION
// ============================================

function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-emoji');
    
    floatingElements.forEach((element, index) => {
        const delay = parseFloat(element.style.getPropertyValue('--delay')) || 0;
        const duration = parseFloat(element.style.getPropertyValue('--duration')) || 5;
        
        const randomLeft = Math.random() * 80 + 10;
        element.style.left = randomLeft + '%';
        element.style.top = '100%';
    });
}

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

function handleResize() {
    // Adjust particle count based on screen size
    if (window.innerWidth < 768) {
        const particles = document.querySelectorAll('.particle');
        if (particles.length > 20) {
            for (let i = 20; i < particles.length; i++) {
                particles[i].remove();
            }
        }
    }
}

window.addEventListener('resize', handleResize);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
        updateScrollProgress();
    });
}, { passive: true });

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ============================================
// MOBILE TOUCH SUPPORT
// ============================================

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchStartY - touchEndY > 50) {
        // Swiped up
        const envelope = document.getElementById('envelope');
        if (envelope && !envelope.classList.contains('opened')) {
            envelope.click();
        }
    }
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🎉 Wedding Invitation Website 🎉', 'font-size: 20px; color: #E94B7E; font-weight: bold;');
console.log('%cHanane & Amine - 19.09.2026', 'font-size: 14px; color: #F4D03F; font-weight: bold;');
console.log('%cElbouni, Annaba', 'font-size: 12px; color: #D4346B;');
