// js/script.js
console.log("JS підключено ✅");

document.addEventListener("DOMContentLoaded", () => {

    // --- МОДАЛЬНЕ ВІКНО ---
    const modal = document.getElementById("modal"); 
    const openModal = document.getElementById("openModal");
    const openModalFooter = document.getElementById("openModalFooter");
    const form = document.querySelector("form");

    const showModal = () => { if(modal) modal.style.display = "flex"; };
    const hideModal = () => { if(modal) modal.style.display = "none"; };

    if(openModal) openModal.addEventListener("click", showModal);
    if(openModalFooter) openModalFooter.addEventListener("click", showModal);

    window.addEventListener("click", (e) => {
        if (e.target === modal) hideModal();
    });

    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            hideModal();
            alert("Ihre Nachricht wurde erfolgreich gesendet");
        });
    }

    // --- ПРОФЕСІЙНИЙ HERO СЛАЙДЕР (FADE EFFECT) ---
    // Шукаємо слайди саме всередині блоку hero-slider, щоб не зламати інші галереї
    const heroSlides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    function nextHeroSlide() {
        if (heroSlides.length < 2) return; // Якщо фото одне або немає — нічого не робимо
        
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }

    if (heroSlides.length > 0) {
        // Перемикаємо кожні 5 секунд для плавності (UI/UX стандарт)
        setInterval(nextHeroSlide, 5000); 
    }

    // --- SCROLL REVEAL (Анімація при появі) ---
    const reveals = document.querySelectorAll(".reveal");

    const revealFunc = () => {
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if(elementTop < window.innerHeight - 100){
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealFunc);
    revealFunc(); // Запускаємо відразу для першого екрану

    // --- COUNTER ANIMATION (Цифри, що біжать) ---
    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        const increment = target / 100;

        const update = () => {
            if(current < target){
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };
        update();
    };

    // Запускаємо лічильники тільки коли їх видно на екрані
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                startCounter(entry.target);
                counterObserver.unobserve(entry.target); // Запускаємо лише один раз
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

});
