<link rel="stylesheet" href="./css/style.css">
    
const modal = document.getElementById("contactModal");
const openModal = document.getElementById("openModal");
const openModalFooter = document.getElementById("openModalFooter");
const form = document.getElementById("contactForm");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

openModalFooter.addEventListener("click", () => {
    modal.style.display = "flex";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    alert("Ihre Nachricht wurde erfolgreich gesendet");
});

<script src="./js/script.js"></script>
