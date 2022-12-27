//variables***
let pageInfo = document.getElementById("information-page");
let pageQuestion = document.getElementById("question-quiz");
let startButton = document.getElementById("start");
let randomQuestion, currentQustionIndex;
const questionElement = document.getElementById("question")
const answrsElement = document.getElementById("answers-btn")
const nextButton = document.getElementById("next")
pageQuestion.style.display = "none";

let Circle2 = document.getElementById("Circle2");
let Circle3 = document.getElementById("Circle3");
let steps = document.getElementById("steps");
let score = document.getElementById("score");
let resulthtml = document.getElementById("result");
let progress = document.getElementById("progress");
// const resultBotton = document.querySelector(".example")
let result = 0;
let justification = [];
nextButton.addEventListener('click', () => {
    currentQustionIndex++
    if (currentQustionIndex > 9) {
        pageQuestion.style.display = "none"
    }
    setNextQuetion()

})

//functions***
function startQuiz() {
    randomQuestion = question.sort(() => Math.random() - .5);
    currentQustionIndex = 0;
    pageQuestion.style.display = "block";
    pageInfo.style.display = "none";

    setNextQuetion();
    Circle2.classList.add('active')
    steps.style.height = 8.5 + "rem"
}

function setNextQuetion() {
    resetOptions()
    showQuestuion(randomQuestion[currentQustionIndex])
    progress.value += 10

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
        button.addEventListener('click', selectAnswer)
        answrsElement.appendChild(button)
    });
    score.innerHTML = currentQustionIndex + 1

}

function resetOptions() {
    nextButton.style.display = "none";
    while (answrsElement.firstChild) {
        answrsElement.removeChild(answrsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectBotton = e.target
        // console.log(selectBotton)
    const correct = selectBotton.dataset.correct
    if (correct) {
        result++
        resulthtml.innerText = result
    } else {
        justification.push()
    }
    // console.log(selectBotton)
    setsStatusclass(document.body, correct)
    Array.from(answrsElement.children).forEach(button => {
        setsStatusclass(button, button.dataset.correct)
    })
    nextButton.style.display = "block";
}

function setsStatusclass(element, correct) {
    clearStatusclass(element)
    if (correct) {
        element.classList.add('correct')


    } else {
        element.classList.add('wrong')


    }
}

function clearStatusclass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function reult() {


}