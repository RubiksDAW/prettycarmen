// Lista de frases para el botón "No"
const frasesNo = [
    "¿Estás segura?",
    "¿Ya no me quieres?",
    "¿En serio?",
    "¡Piénsalo bien!",
    "¡No me hagas esto!",
    "¡Vamos, di que sí!",
    "¡Eres mi única opción!",
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

    // Ajustar el tamaño del botón "No" para que quepa el texto
    noBtn.style.width = "auto";
    noBtn.style.padding = "10px 20px";
});

// Función para hacer crecer el botón "Sí"
noBtn.addEventListener('click', function () {
    // Aumentar el tamaño del botón "Sí"
    let currentSize = parseFloat(window.getComputedStyle(siBtn).fontSize);
    siBtn.style.fontSize = (currentSize + 10) + 'px';

    // Ajustar posición y tamaño para que ocupe toda la pantalla
    siBtn.style.position = "fixed";
    siBtn.style.top = "50%";
    siBtn.style.left = "50%";
    siBtn.style.transform = "translate(-50%, -50%)";
    siBtn.style.width = "100%";
    siBtn.style.height = "100%";
    siBtn.style.borderRadius = "0";

    // Si el botón "Sí" ocupa toda la pantalla, redirigir
    if (currentSize > window.innerWidth * 0.9) {
        window.location.href = 'sabia-que-querias.html';
    }
});

// Redirigir al hacer clic en "Sí"
siBtn.addEventListener('click', function () {
    window.location.href = 'sabia-que-querias.html';
});