//variables***
let pageInfo = document.getElementById("information-page");
let pageQuestion = document.getElementById("question-quiz");
let pageResult = document.getElementById("page-result");
let startButton = document.getElementById("start");
let randomQuestion, currentQustionIndex;
const questionElement = document.getElementById("question")
const answrsElement = document.getElementById("answers-btn")
const nextButton = document.getElementById("next")
const explecation = document.getElementById("explecation")
pageQuestion.style.display = "none";

let Circle2 = document.getElementById("Circle2");
let Circle3 = document.getElementById("Circle3");
let steps = document.getElementById("steps");
let score = document.getElementById("score");
let resulthtml = document.getElementById("result");
let progress = document.getElementById("progress");
let comment = document.getElementById("comment");
let explication = document.getElementById("explication");
let ex = []
let result = 0;
let justification = [];
let questions = [];
let questionsObject;
pageResult.style.display = "none"
nextButton.addEventListener('click', () => {
    currentQustionIndex++
    if (currentQustionIndex > 9) {
        pageQuestion.style.display = "none"
        pageResult.style.display = "block"
        Circle3.classList.add('active')
        steps.style.height = 17 + "rem";
        resultAnswers();

    }
    setNextQuetion()

})

function getQuestion() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
        try {
            questionsObject = JSON.parse(this.responseText);
        } catch (err) {
            console.log(err.message)
        }
    }
    myRequest.open("GET", "controllers/data.php", true);
    myRequest.send();
    console.log(questionsObject)
}

getQuestion()


function startQuiz() {

    randomQuestion = questionsObject.sort(() => Math.random() - .5)
    currentQustionIndex = 0;
    pageQuestion.style.display = "block";
    pageInfo.style.display = "none";
    pageResult.style.display = "none";
    setNextQuetion();
    Circle2.classList.add('active')
    steps.style.height = 8.5 + "rem"
}

function setNextQuetion() {

    explication.innerText = '';
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
    const correct = selectBotton.dataset.correct
    if (correct) {

        result++
        resulthtml.innerText = result
        if (result >= 8) {
            comment.innerText = "Great job"
        } else if (result >= 5) {
            comment.innerText = "good job"
        } else {
            comment.innerText = "bad job"
        }
    } else {
        justification.push(questionsObject[currentQustionIndex].explication)
        questions.push(questionsObject[currentQustionIndex].question)

    }
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

function resultAnswers() {

    resultElement = document.querySelector('#you');

    for (let answer of questions) { resultElement.innerText += answer[0] }
    for (let index = 0; index < questions.length; index++) {

        document.querySelector('#parent').innerHTML += `<div class="card mt-5 ">
        <ul class="list-group list-group-flush ex">
          <li class="list-group-item w-q">${questions[index]}</li>
          <li class="list-group-item explication">${justification[index]}</li>
        </ul>
      </div>`

    }
    for (let answer of justification) { resultElement.innerText += answer[0] }
    for (let index = 0; index < justification.length; index++) {

    }
}