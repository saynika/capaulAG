<script src="js/script.js"></script>

// ===== HEADER BUTTONS =====
document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Ruft die Firma an!");
    });
});

document.querySelectorAll('.write-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Öffnet das Kontaktformular!");
    });
});
