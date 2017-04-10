 
////Variables.

var counter = 30;
var timeKeeper = setInterval('timer()', 1000);
var questions = [{
    "question": "1.What planet are the transformers from?",
    "option1": "Pluto",
    "option2": "Earth",
    "option3": "Uranus",
    "option4": "Cybertron",
    "answer": "4"
}, 

 {
     "question": "2.What did Optimus Prime pass onto Ultra Magnus?",
    "option1": "Hotdogs",
    "option2": "Fried Chicken",
    "option3": "Matrix",
    "option4": "Donuts",
    "answer": "3"
},  

{
    "question": "3.What did Optimus Prime say to Megatron at the great battle?",
    "option1": "Hello?is it me you're looking for?",
    "option2": "one shall stand, one shall fall",
    "option3": "lets hug this out",
    "option4": "autobots,roll out",
    "answer": "2"
}, 

 {
     "question": "4.Who destroyed Starscream?",
    "option1": "Astrotrain",
    "option2": "Soundwave",
    "option3": "Galvatron",
    "option4":"Megatron",
    "answer": "3"
}];
var currentQuestion = 0;
var score = 0;
var toQuestions = questions.length;
var start = $("#start")[0];
console.log(start);
$(start).on("click", function(){
    console.log("I have been clicked")
});
var container = document.getElementById('quizContainer');
console.log(container)
console.log(container.innerHTML)
var questionEl = document.getElementById('question');
console.log(questionEl)
var ch1 = document.getElementById('opt1');
var ch2 = document.getElementById('opt2');
var ch3 = document.getElementById('opt3');
var ch3 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


////Globalfunctions

function timer() {
    if (counter == 0) {
        clearInterval(timeKeeper);
        alert("INCORRECT ANSWER!")
    }
    console.log(timer);
    counter--;
    $('#counter').text(counter);
}
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('YOU HAVE NOT SELECTED AN ANSWER!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score+= 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == toQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == toQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
