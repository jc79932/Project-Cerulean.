/*
 
Greeting/Start: Top-left: Leaderboards. Center: "Welcome to Project Cerulean." Prompt to start game [DONE?]
--> 
Countdown replacing Center. "Game starts in: 5". 
-->  
Questions begin: Top-left: Leaderboards back. Top-right: Counter (round timer?). Center: Huge container in (Light). Body bg-color in (Primary). Question with clear bg-color. 
Answer choices in (Primary - Selected, on hover). Wrong takes off 25% of starting time. When answer is correct or time finishes, time takes over center, turns into points. Z-index, 
background of either blur or opaque color.
-->
Finishes, leaderboards appear. Prompts to save score  with initials or retry
TODO Add transition-bg to igContent, h1 and div-button
*/
function timer(x,y){
    let seconds = x;
    if(x>1 && x<100 &! y==1){
        var timer = setInterval(function(){
            console.log(seconds);
            seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            console.log("Timer out");
        }
    }, 1000);} else if(y==1 && x>1 && x<100){
        var timer = setInterval(function(){
            console.log("x" + seconds);
            igContent.style.opacity = seconds / 2;
            seconds = seconds - 0.1;
        if (seconds < 0) {
            igContent.style.opacity = 0;
            body.innerHTML = leaderBoards;
            startQuiz();
            clearInterval(timer);
            console.log("Timer out");
        }
    }, 50);
    } else{return "Error"}
}

const body = document.body;
const igContent = document.createElement("div");
igContent.innerHTML = "<section id='intro-greetings'><article><h1>Project Cerulean.</h1><div id='button-start' onclick='startQuizAnim()'>Start Quiz</div></article></section>";

const leaderBoards = "<header><nav><h1><a href='#'>Leaderboards</a></h1></nav></header>"

function wipePage(){
    // body.innerHTML = " ";
    body.innerHTML = leaderBoards;
    
}
function onloadPage(){
    body.append(igContent);
}

function startQuizAnim(){
   body.id = 'transition-bg';
   timer(2,1);
    console.log("Done");
    
}

function startQuiz(){
    console.log("test hi");
   
}

wipePage();
onloadPage();
console.log(document.getElementsByTagName('h1').id);