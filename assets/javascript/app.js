//https://www.sitepoint.com/simple-javascript-quiz/
//https://www.codemahal.com/video/javascript-quiz-tutorial/
//https://gist.github.com/slopeofhope81/9093298

$("#start").on("click",function(){
    //alert("we're linked");
    $("#secondaryContainer").remove();
    window.onload= createQuestion();       
})

//QUIZ Object & Properties
var myjqueryQuestions= [{
    question:  "jQuery is a",
    answers:  ["JavaScript Library", "JavaScript Language", "JavaScript Method", "PHP Method"],
    correctAnswer:  [0]    
},

    {question:  "jQuery uses CSS selectors to select elements?",
    answers:  ["radiogroup", "False", "True"],
    correctAnswer:  [2]
},

    {question: "Which sign does jQuery use as a shortcut for jQuery?",
    answers: ["the % sign", "the ? Sign", "the $ sign"],
    correctAnswer:  [3] 
},
   
];

console.log(myjqueryQuestions[2].question);


var score = 0;
var currentNumber = 0;

function createQuestion(){
    for (var i=0; i < myjqueryQuestions[this.currentNumber].answers.length;i++){
        document.forms.radioAnswers.elements.choice[i].checked=false;
    }
    var question = document.getElementById("question");
    question.innerHTML = myjqueryQuestions[this.currentNumber].question;

    var mainContainer = document.getElementById("mainContainer");
    mainContainer.innerHTML="<span>Score:  "+score+"e</span>";
    createAnswers();
}
console.log(createQuestion);

function createAnswers(){
    for (var i=0; i < myjqueryQuestions[this.currentNumber].answers.length;i++){
        var option = document.getElementById("myjqueryQuestions");
            option.innerHTML = myjqueryQuestions[this.currentNumber].answers[i];
    }
console.log(createAnswers)    
}
function nextQuestion(){
    for (var i =0; i < myjqueryQuestions[this.currentNumber].answers.length; i++){
        if (document.forms.radioAnswers.elements.choice[i].checked == true){
            var userAnswer = document.forms.radioAnswers.elements.choice[i].value;
            if (userAnswer == myjqueryQuestions[this.currentNumber].answers){
            this.score++;
            }
        }
    }
    this.currentNumber++;
    if (this.currentNumber==myjqueryQuestions.length){ 
        showScore();       
    }
    else{
        createQuestion();
    }
}
function showScore(){
    document.forms.radioAnswers.style.display="none";
    var question=document.getElementById("question");
    question.style.display = "";
    var elt=document.getElementById("mainContainer");
    elt.style.display = "block"; 
    var button = document.getElementById("next");
    button.style.display="none";   

}



// Correct Anwers:0
// Incorrect Answers: 4
// Unanswered: 4




// function htmloutputQuiz(questions, container) {
//     var output =[];
//     var answers;

//     for(var i=0; i<questions.length; i++){
//         answers = [];
//         for(letter in questions[i].answers){
//             answers.push(
//                 <label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter] +'
// 				</label>
//             )
//         }
//     }




// }
// {
// {

// { 
// <div id="countdown"></div>



// var timeleft = 30;

// var timeRemaining = setInterval(function(){
//    document.getElementById("countdown").innerHTML = "Time Remaining: " + timeleft; */}
//    timeleft -= 1;
  
//    if(timeleft > 0){
//      clearInterval(downloadTimer);
//      document.getElementById("countdown").innerHTML = "Finished"
//      }
//      }, 1000);
    
//          elseif (timeleft > 0) {

//           }
//      else(timeleft === 0){

//      }

//  for(var i=0; i< myjqueryQuestions.length; i++){
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions [i].answer){

// score++;
//          alert("Correct!");
//      } else {
//          alert("worng!");
//      }    
//     alert ("you got " + score + "/" + questions.length);
//      }
//  }
