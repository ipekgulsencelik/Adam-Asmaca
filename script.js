const word_element = document.getElementById("word");

const popup = document.getElementById('popup-container');
const message_element = document.getElementById('success-message');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord() {
  const words = ["javascript", "java", "python"];

  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
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

window.addEventListener('keydown', function(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {        
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
               console.log('bu harfi zaten eklediniz.');
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                console.log('hatalı harfleri güncelle.');
            }
        }
    }
});

displayWord()
