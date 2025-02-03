document.getElementById('noBtn').addEventListener('click', function() {
    const siBtn = document.getElementById('siBtn');
    let currentSize = parseFloat(window.getComputedStyle(siBtn).fontSize);
    siBtn.style.fontSize = (currentSize + 10) + 'px';
});

document.getElementById('siBtn').addEventListener('click', function() {
    window.location.href = 'sabia-que-querias.html';
});