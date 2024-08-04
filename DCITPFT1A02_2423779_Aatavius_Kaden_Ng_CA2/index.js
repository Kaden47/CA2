// script.js
document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti');

    function createConfettiPiece() {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.backgroundColor = getRandomColor();
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.top = `-${Math.random() * 10}vh`;
        piece.style.width = `${Math.random() * 10 + 5}px`;
        piece.style.height = piece.style.width;
        confettiContainer.appendChild(piece);

        // Remove the piece after animation ends
        piece.addEventListener('animationend', () => {
            piece.remove();
        });
    }

    function getRandomColor() {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#F3FF33', '#FF33F3'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Generate confetti pieces at intervals
    function generateConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(createConfettiPiece, i * 50);
        }
    }

    // Trigger confetti generation
    generateConfetti();
});
