const word_element = document.getElementById("word");

const popup = document.getElementById('popup-container');
const message_element = document.getElementById('success-message');

const correctLetters = ["j", "a", "v", "s", "t"];
const wrongLetters = [];

function getRandomWord() {
  const words = ["javascript", "java", "python"];

  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  const selectedWord = getRandomWord();

  word_element.innerHTML = `
        ${selectedWord.split("").map((letter) => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `).join("")}
    `;

  const enteredWord = word_element.innerText.replace(/\n/g, "");
  if (enteredWord === selectedWord) {
    popup.style.display = 'flex';
    message_element.innerText = 'Tebrikler kazandınız.';
  }
}

displayWord();
