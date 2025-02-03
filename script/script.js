// Lista de frases para el botón "No"
const frasesNo = [
    "¿Estás segura?",
    "¿Ya no me quieres?",
    "¿En serio?",
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

    // Aumentar el tamaño del botón "Sí"
    let currentSize = parseFloat(window.getComputedStyle(siBtn).fontSize);
    siBtn.style.fontSize = (currentSize + 10) + 'px';

    // Si el botón "Sí" ocupa más del 90% del ancho de la pantalla, redirigir
    if (currentSize > window.innerWidth * 0.9) {
        window.location.href = 'sabia-que-querias.html';
    }
});

// Redirigir al hacer clic en "Sí"
siBtn.addEventListener('click', function () {
    window.location.href = 'sabia-que-querias.html';
});