/* filename: script.js */

const buttons = document.querySelectorAll('.cyber-btn');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const originalText = btn.innerText;
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchText = '';

        for (let i = 0; i < originalText.length; i++) {
            glitchText += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

        btn.innerText = glitchText;

        setTimeout(() => {
            btn.innerText = originalText;
        }, 100);
    });
});