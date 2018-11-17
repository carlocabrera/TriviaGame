//JS Trivia Game Variables
var qnum = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;

//Questions, Choices & Ansswers Array
var questions = [
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
    ["Q?", "A", "B", "C", "D", "Answer"],
];

function get(x) {
    return document.getElementById(x);
}

//Next Questions Function
function nextQuestion(){
  test = get("test");
  if(qnum >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // Reset Triva Game Score
    qnum = 0;
    correct = 0;
    // Stop next question function when trivia is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(qnum+1)+" of "+questions.length;
  question = questions[qnum][0];
  chA = questions[qnum][1];
  chB = questions[qnum][2];
  chC = questions[qnum][3];
  chD = questions[qnum][4];
  test.innerHTML = "<h3>"+question+"</h3>";
  // Append Data
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

//Check Answer Function
function checkAnswer(){
    // use getElementsByName and loop through array
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // Check if answer is correct
    if(choice == questions[qnum][5]){
      //increment correct answers
      correct++;
    }
    // change queston number
    qnum++;
    // Display next question.
    nextQuestion();
  }

  //Load Quiz
  window.addEventListener("load", nextQuestion, false);