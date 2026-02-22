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
