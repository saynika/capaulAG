// js/script.js
console.log("JS підключено ✅");


// Перевіримо, що елементи існують
if(openModal) {
    openModal.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if(openModalFooter) {
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

if(form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.style.display = "none";
        alert("Ihre Nachricht wurde erfolgreich gesendet");
    });
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if(current < target){
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update,20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
