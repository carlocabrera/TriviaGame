//JS Trivia Game Variables
var qnum = 0;
var correct = 0;
var trivia, trivia_status, question, choice, choices, chA, chB, chC;

//Questions, Choices & Ansswers Array
var questions = [
    ["How can you get the total number of arguments passed to a function?", "Using args.length property", "Using arguments.length property", "Both of the above.", "None of the above.", "B"],

    ["Which of the following type of variable takes precedence over other if names are same?", "global variable", "local variable", "Both of the above.", "None of the above.", "B"],

    ["Which built-in method returns the characters in a string beginning at the specified location?", "substr()", "getSubstring()", "slice()", "None of the above", "A"],

    ["Which of the following function of Number object returns a string value version of the current number?", "toString()", "toFixed()", "toLocaleString()", "toPrecision()", "A"],

    ["Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?", "slice()", "split()", "replace", "search", "B"],

    ["Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?", "toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()", "A"],

    ["Which of the following function of String object creates an HTML hypertext link that requests another URL?", "link()", "sub()", "sup()", "small()", "A"],

    ["Which of the following function of Array object calls a function for each element in the array?", "concat()", "every()", "filter()", "forEach()", "D"],

    ["Which of the following function of Array object removes the first element from an array and returns that element?", "reverse()", "shift()", "slice()", "some()", "B"],
    
    // ["Q", "A", "B", "C", "D", "Answer"],
];

function get(x) {
    return document.getElementById(x);
}

//Next Questions Function
function nextQuestion(){
  trivia = get("trivia");
  if(qnum >= questions.length){
    trivia.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("trivia_status").innerHTML = "JS Trivia Game Completed!";
    // Reset Triva Game Score
    qnum = 0;
    correct = 0;
    // Stop next question function when trivia is completed
    return false;
  }
  get("trivia_status").innerHTML = "Question "+(qnum+1)+" of "+questions.length;
  question = questions[qnum][0];
  chA = questions[qnum][1];
  chB = questions[qnum][2];
  chC = questions[qnum][3];
  chD = questions[qnum][4];
  trivia.innerHTML = "<h3>"+question+"</h3>";
  // Append Data
  trivia.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  trivia.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  trivia.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  trivia.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  trivia.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
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