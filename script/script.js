// Lista de frases para el botón "No"
const frasesNo = [
    "¿En serio Carmen?",
    "¿Ya no me quieres?",
    "No me esperaba esto...",
    "¡Piénsalo bien!",
    "¡No me hagas esto!",
    "¡Vamos, di que sí!",
    "¡No te rindas!",
    "¡Inténtalo de nuevo!",
    "¡Por favor! 😢"
];

let indiceFrase = 0; // Índice para recorrer las frases
const noBtn = document.getElementById('noBtn');
const siBtn = document.getElementById('siBtn');

// Función para cambiar el texto del botón "No"
noBtn.addEventListener('click', function () {
    // Cambiar el texto del botón "No"
    noBtn.textContent = frasesNo[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frasesNo.length; // Avanzar al siguiente texto


});

// Redirigir al hacer clic en "Sí"
siBtn.addEventListener('click', function () {
    window.location.href = 'sabia-que-querias.html';
});