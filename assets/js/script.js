//variables***
let pageInfo = document.getElementById("information-page");
let pageQuestion = document.getElementById("question-quiz");
let startButton = document.getElementById("start");
let randomQuestion, currentQustionIndex;
const questionElement = document.getElementById("question")
const answrsElement = document.getElementById("answers-btn")
pageQuestion.style.display = "none";
//functions***
function startQuiz() {
    randomQuestion = question.sort(() => Math.random() - .5);
    currentQustionIndex = 0;
    pageQuestion.style.display = "block";
    pageInfo.style.display = "none";
    setNextQuetion();
}

function setNextQuetion() {
    showQuestuion(randomQuestion[currentQustionIndex])
}

function showQuestuion(question) {
    questionElement.innerText = question.question
    question.answrs.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('selected')

    });
}