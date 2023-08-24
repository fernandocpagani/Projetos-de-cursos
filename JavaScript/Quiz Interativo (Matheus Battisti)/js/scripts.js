const questions = [
    {
        question: "Qual é a capitado do Brasil?",
        choices:["Brasilia", "Rio de Janeiro", "São Paulo", "Salvador"],
        answer: "Brasilia",
    },
    {
        question: "Qual é a capitado da Argentina?",
        choices:["Buenos Aires", "Brasília", "Lisboa", "Paris"],
        answer: "Buenos Aires",
    },
    {
        question: "Qual é a capitado da França?",
        choices:["Roma", "Madri", "Paris", "Londres"],
        answer: "Paris",
    },
    {
        question: "Qual é a capitado da Espanha?",
        choices:["Lisboa", "Madri", "Barcelona", "Valência"],
        answer: "Madri",
    },
    {
        question: "Qual é a capitado da Itália?",
        choices:["Veneza", "Milão", "Roma", "Nápoles"],
        answer: "Roma",
    },
    {
        question: "Qual é a capitado do Canadá?",
        choices:["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa",
    },
    {
        question: "Qual é a capitado dos Estados Unidos?",
        choices:["NOva Yokr", "Los Angeles", "Chicago", "Washington D.C."],
        answer: "Washington D.C.",
    },
    {
        question: "Qual é a capitado do Reino Unido?",
        choices:["Liverpool", "Manchester", "Edimburgo", "Londres"],
        answer: "Londres",
    },
]

const questionElement = document.querySelector("#question");
const choiceElements = document.querySelectorAll(".choice");
const nextButton = document.querySelector("#next");
const scoreElement = document.querySelector("#score");
const wrongElement = document.querySelector("#wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;

    const choices = shuffleArray(currentQuestionData.choices);

    for (let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerText = choices[i];
    }

    answerChosen = false;
}

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

        return array;
    }
}

function checkAnswer(e) {
    if(answerChosen) return;

    answerChosen = true;

    if (e.target.innerText === questions[currentQuestion].answer) {
        score++;
        scoreElement.innerText = `Pontuação: ${score}`;
        alert("Correto!");
    } else {
        wrong++;
        wrongElement.innerText = `Erros: ${wrong}`;
        alert(`Errado! A resposta correta é:
         ${questions[currentQuestion].answer}`);
    }
}

choiceElements.forEach((btn) => { 
    btn.addEventListener("click", checkAnswer);
})

nextButton.addEventListener("click", () => {
    if(!answerChosen) {
        alert("Por favor, responda a pergunta!");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(`Fim de jogo! Você acertou ${score} de ${questions .length} perguntas.`
        );
        restartQuiz();
    }
})

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = `Pontuação: 0`;
    wrongElement.innerText = `Erros: 0`;
    loadQuestion();
}

loadQuestion();