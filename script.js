const phrases = ["World!!", "Dunia!!", "世界!!"];
let currentPhraseIndex = 0;

function typeWriterEffect(text, element) {
    const dynamicTextElement = document.getElementById('dynamicText');
    dynamicTextElement.textContent = ''; // Clear previous dynamic text

    let charIndex = 0;
    const typingInterval = setInterval(() => {
        dynamicTextElement.textContent += text[charIndex];
        charIndex++;
        if (charIndex >= text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                eraseText(text, dynamicTextElement);
            }, 1000); // Delay before erasing text
        }
    }, 100); // Typing speed (adjust as needed)
}

function eraseText(text, element) {
    const eraseInterval = setInterval(() => {
        const dynamicText = element.textContent;
        element.textContent = dynamicText.substring(0, dynamicText.length - 1);
        if (element.textContent === '') {
            clearInterval(eraseInterval);
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(() => {
                typeWriterEffect(phrases[currentPhraseIndex], element);
            }, 500); // Delay before typing new text
        }
    }, 50); // Erasing speed (adjust as needed)
}

document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.querySelector('.typewriter');
    typeWriterEffect(phrases[currentPhraseIndex], typewriterElement);
});

