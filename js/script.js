// js/script.js
console.log("JS підключено ✅");

// Отримуємо елементи (додав перевірку, щоб не було помилок у консолі)
const modal = document.getElementById("modal"); 
const openModal = document.getElementById("openModal");
const openModalFooter = document.getElementById("openModalFooter");
const form = document.querySelector("form");

// Modal logic
if(openModal && modal) {
    openModal.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if(openModalFooter && modal) {
    openModalFooter.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if(modal) {
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

if(form && modal) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.style.display = "none";
        alert("Ihre Nachricht wurde erfolgreich gesendet");
    });
}

// --- SCROLL REVEAL (ОНОВЛЕНО) ---
// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const revealFunc = () => {
  reveals.forEach(el => {
    // Зменшив поріг до -50, щоб анімація спрацьовувала раніше
    if(el.getBoundingClientRect().top < window.innerHeight - 50){
      el.classList.add("active");
    }
  });
};

// 1. Слухаємо скрол (як і було)
window.addEventListener("scroll", revealFunc);

// 2. ДОДАЙТЕ ЦЕЙ РЯДОК: він запустить перевірку відразу при завантаженні сторінки
revealFunc();

// --- COUNTER ANIMATION ---
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    
    // Анімацію цифр теж краще запускати, коли їх видно, 
    // але поки що залишимо як у вас — запуск при старті.
    update();
});
// Автоматичний слайдер для Hero
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length === 0) return; // перевірка на всяк випадок
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Запускаємо інтервал
if (slides.length > 0) {
    setInterval(nextSlide, 4000); 
}
