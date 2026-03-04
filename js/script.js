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
const reveals = document.querySelectorAll(".reveal");

const handleReveal = () => {
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Якщо верх елемента вище ніж висота вікна мінус 100px
        if(elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};

// Запускаємо при скролі
window.addEventListener("scroll", handleReveal);

// ВАЖЛИВО: Запускаємо один раз при завантаженні, щоб показати блоки, які вже в екрані
handleReveal();


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
