const messages = [
  "This left wala is YES",
  "Again wrong Bub",
  "Ye na Beba",
  "Majja karu We",
  "Kiti big zhala see",
  "Aap hi my Valentine",
  "Hubby Chubby We",
  "Shweetu My",
  "Beba Teba Come ghe",
  "No",
  "Ye na Pillu",
  "Aap hi my Valentine"
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
  window.location.href = "yes_page.html";
}