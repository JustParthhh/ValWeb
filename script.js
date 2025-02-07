const messages = [
    "Suno tar Bub?",
    "Please Booku",
    "A g Beba",
    "Ekda Aikto",
    "Listen na Pillu",
    "Come tar ekda",
    "Bub Chub"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "que.html";
}
