const questions = [
    {
        question:"What does CPU stand for?" ,
        answers:[
            {text:"Computer Personal Unit", correct:false},
            {text:"Central Processing Unit", correct:true},
            {text:"Central Power Unit", correct:false},
            {text:"Core Processing Utility", correct:false},

        ]
    },
    {
       question:"Which of the following is an example of an Operating System?" ,
        answers:[
            {text:"Linux", correct:true},
            {text:"Microsoft Excel", correct:false},
            {text:"Adobe Photoshop", correct:false},
            {text:"Google Chrome", correct:false},

        ] 
    },
    {
      question:"What is the primary purpose of RAM in a computer?" ,
        answers:[
            {text:"Store permanent files", correct:false},
            {text:" Boost internet speed", correct:false},
            {text:"Run applications temporarily", correct:true},
            {text:"Process graphics", correct:false},

        ]   
    },
    {
      question:"Which language is mainly used for web development?" ,
        answers:[
            {text:"Python", correct:false},
            {text:"C++", correct:false},
            {text:"Java", correct:false},
            {text:"JavaScript", correct:true},

        ]   
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>  {
        const button = document.createElement("button");
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}
startQuiz();








