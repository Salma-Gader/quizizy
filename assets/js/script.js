//variables***
let pageInfo = document.getElementById("information-page");
let pageQuestion = document.getElementById("question-quiz");
let startButton = document.getElementById("start");
let randomQuestion, currentQustionIndex;
const questionElement = document.getElementById("question")
const answrsElement = document.getElementById("answers-btn")
const nextButton = document.getElementById("next")
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
    resetOptions()
    showQuestuion(randomQuestion[currentQustionIndex])
}

function showQuestuion(question) {
    questionElement.innerText = question.question
    question.options.forEach(option => {
        const button = document.createElement('li')
        button.innerText = option.text
        button.classList.add('selected')
        if (option.correct) {
            button.dataset.correct = option.correct
        }
        // button.addEventListener('click',selectAnswer)
        answrsElement.appendChild(button)
    });
}

function resetOptions() {
    nextButton.classList.add('hide')

}