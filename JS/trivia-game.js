const questions = [
  {
    question: "¿Quién es el creador de JavaScript?",
    choices: [
      "Douglas Crockford",
      "Brendan Eich",
      "Sheryl Sandberg",
      "James Gosling",
    ],
    answer: "Brendan Eich",
  },
  {
    question: "¿Cuándo se creó Javascript?",
    choices: ["1995", "2004", "2012", "1987"],
    answer: "1995",
  },
  {
    question:
      "¿Cuál de las siguientes no es una forma de declarar una variable en JavaScript?",
    choices: ["var", "let", "const", "set"],
    answer: "set",
  },
  {
    question: "¿Para qué navegador se creó el lenguaje JavaScript?",
    choices: [
      "Internet Explorer (de Microsoft)",
      "Chrome (de Google)",
      "Netscape (de Mozilla)",
      "Safari (de Apple)",
    ],
    answer: "Netscape (de Mozilla)",
  },
  {
    question: "¿Qué ficheros están relacionados con JavaScript?",
    choices: [
      '".HTML", ".CSS", y ".JS"',
      '".DOCX", "XLSX", y "PPTX"',
      '".PSD" y ".PDD"',
      '".JPG" y ".PNG"',
    ],
    answer: '".HTML", ".CSS", y ".JS"',
  },
  {
    question: "¿Qué tipo de dato es un objeto?",
    choices: ["Arreglo", "Objeto", "Función", "Tupla"],
    answer: "Objeto",
  },
  {
    question: "¿Cuál es la forma correcta de declarar una variable?",
    choices: [
      'var mi nombre = "Juan"',
      "var 25años = mi edad",
      'var mi_apellido = "Pérez"',
      'var "ciudad" = "Madrid"',
    ],
    answer: 'var mi_apellido = "Pérez"',
  },
  {
    question: "¿Cómo accedemos al primer valor de un arreglo?",
    choices: ["arreglo.first_value", "arreglo[0]", "arreglo[1]", "arreglo{1}"],
    answer: "arreglo[0]",
  },
  {
    question: '¿Cuál es el resultado de "2"+3?',
    choices: ["5", "23", "Da error", '"23"'],
    answer: '"23"',
  },
];

let currentQuestion = 0;
let score = 0;

const introContainer = document.getElementById("intro-container");
const startButton = document.getElementById("start-button");
const triviaGameWrapper = document.getElementById("trivia-game-wrapper");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function startGame() {
  introContainer.style.display = "none";
  triviaGameWrapper.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerText = question.question;

  choicesContainer.innerHTML = "";
  question.choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("choice");
    choiceElement.innerText = choice;
    choiceElement.addEventListener("click", () => {
      const selectedChoice = document.querySelector(".selected");
      if (selectedChoice) {
        selectedChoice.classList.remove("selected");
      }
      choiceElement.classList.add("selected");
      nextButton.disabled = false;
    });
    choicesContainer.appendChild(choiceElement);
  });

  nextButton.disabled = true;
}

function showNextQuestion() {
  const selectedChoice = document.querySelector(".selected");
  if (selectedChoice) {
    const answer = questions[currentQuestion].answer;
    if (selectedChoice.innerText === answer) {
      score++;
    }
    selectedChoice.classList.remove("selected");
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endGame();
  } else {
    showQuestion();
  }
}

function endGame() {
  triviaGameWrapper.style.display = "none";

  if (score >= 5) {
    resultContainer.innerHTML = `<div id="result-container"> <img class="joy-GIF" src="./IMG/Joy.gif" alt="GIF del winstate">
    <h2>Obtuviste <span>${score}</span> de <span>${questions.length}</span> puntos. ¡Felicitaciones!</h2></div>`;
    resultContainer.style.display = "block";
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  } else {
    resultContainer.innerHTML = `<div id="result-container"><img class="joy-GIF" src="./IMG/Joy2.gif" alt="GIF del failstate"><h2>Obtuviste <span>${score}</span> de <span>${questions.length}</span> puntos 🙁<br>
        pero... ¡puedes intentarlo de nuevo!</h2></div>`;
    resultContainer.style.display = "block";
  }
  setTimeout(() => {
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("button");
    playAgainButton.innerText = "¿Jugar de nuevo?";
    playAgainButton.addEventListener("click", resetGame);
    resultContainer.appendChild(playAgainButton);
  }, 3000);
}

function resetGame() {
  currentQuestion = 0;
  score = 0;
  resultContainer.innerHTML = "";
  triviaGameWrapper.style.display = "block";
  showQuestion();
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", showNextQuestion);
