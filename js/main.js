// ==========================================================
// Sample "About Me" website — main JavaScript
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initSkillBars();
  initContactForm();
  initCurrentYear();
  initHeaderShadowOnScroll();
  initCarousels(); // Added for carousel functionality
});

/* ---------- Mobile navigation toggle ---------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    toggleBtn.innerHTML = isHidden
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* ---------- Reveal-on-scroll animation ---------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}

/* ---------- Animate skill bars when visible ---------- */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute('data-level') || '0';
        const fill = bar.querySelector('.skill-fill');
        if (fill) {
          requestAnimationFrame(() => {
            fill.style.width = level + '%';
          });
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
}

/* ---------- Contact form (front-end only demo) ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in your name, email and message.';
      status.className = 'text-sm mt-3 text-red-400';
      return;
    }

    // NOTE: This is a static, front-end only demo.
    // Connect this form to your own email service (e.g. Formspree, EmailJS)
    // or a backend endpoint to actually deliver messages.
    status.textContent = `Thanks, ${name}! This is a demo form — no message was actually sent.`;
    status.className = 'text-sm mt-3 text-emerald-400';
    form.reset();
  });
}

/* ---------- Footer current year ---------- */
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ---------- Header background intensifies on scroll ---------- */
function initHeaderShadowOnScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const applyShadow = () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg', 'shadow-black/30');
    } else {
      header.classList.remove('shadow-lg', 'shadow-black/30');
    }
  };

  applyShadow();
  window.addEventListener('scroll', applyShadow, { passive: true });
}

/* ---------- Project Carousel / Slider (NEW) ---------- */
function initCarousels() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach((container) => {
    let slideIndex = 0;
    const slides = container.querySelectorAll('.carousel-slide');
    const dots = container.querySelectorAll('.dot');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    if (!slides.length) return;
    
    function showSlide(index) {
      if (index >= slides.length) slideIndex = 0;
      if (index < 0) slideIndex = slides.length - 1;
      
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === slideIndex);
      });
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        slideIndex--;
        showSlide(slideIndex);
        resetAutoPlay();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        slideIndex++;
        showSlide(slideIndex);
        resetAutoPlay();
      });
    }
    
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        slideIndex = i;
        showSlide(slideIndex);
        resetAutoPlay();
      });
    });
    
    let autoPlayInterval;
    
    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
      }, 3000);
    }
    
    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }
    
    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }
    
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);
    
    showSlide(0);
    startAutoPlay();
  });
}