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
var questions = [
    ["What is the method that finds elements by element id called?", "document.getElementById(id)","document.getElement(id)", "document.getTheElementById(id)", "document.getElementBy#(id)"], //1
    ["Which CSS external link tag is correct?","<link href=''stylesheet'' rel=''geeks.css''/>", "<link rel=''stylesheet'' href=''geeks.css''></link>", "<link =''stylesheet'' href=''geeks.css''/>", "<link rel=''stylesheet'' href=''geeks.css''/>"], //4
    ["Fill the blank: body{________: lightblue}","color","main-color","background-color", "default"], //3
    ["Which element is positioned relative to the viewport?","Fixed","Absolute","Relative","Static"],//1
    ["______  is used to create space around an element's content, inside of any defined borders.", "Margin", "Padding", "Space", "Borders"],//2
];
let questionNum = 0, answerNum;
let temporaryScore = 0;
const answerText = document.getElementById('answer');
const questionText = document.getElementById("question");
const tempScore = [];

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
            igContent.style.opacity = seconds - 1;
            seconds = seconds - 0.03;
        if (seconds < 0) {
            igContent.style.opacity = 0;
            body.innerHTML = leaderBoards;
            
           
            clearInterval(timer);
            startQuiz();
            changeQuiz();
            console.log("Timer out");
        }
    }, 50);
    } else{return "Error"}
}

function gameOver(){
    var finalScoreArray = tempScore.map(str =>{
        return Number(str);
    }); 
    
    let finalScore = 0;
    let numTempScore = tempScore.map(Number);

    for(let i=0; i < 5; i++){
        finalScore = finalScore + numTempScore[i];
    }

    // = tempScore[0].parseInt() + tempScore[1].parseInt() + tempScore[2].parseInt()+ tempScore[3].parseInt() + tempScore[4].parseInt();

    console.log("You lost! Final Score: " + temporaryScore);
    
}

function gameTimer(e){
    const modifyTimer = document.getElementById("game-timer");
    let temporaryScore = 0;
    let seconds = e;
    if(e>1 && e<100){
        var timer = setInterval(function(){
            console.log("e" + seconds + questionNum);
            modifyTimer.innerText = Math.round(seconds);
            seconds = seconds - 0.1;
            temporaryScore = temporaryScore + seconds;
        if (modifyTimer.style.backgroundColor=='red'){
            seconds = seconds - 7;
            modifyTimer.style.backgroundColor='#4484CE'
        }
        if (seconds < 0) {
            seconds = 0;
            modifyTimer.innerText = Math.round(seconds)
            console.log("You lost! Final Score: " + temporaryScore);
            clearInterval(timer);
            gameOver();
            console.log("Game over");
            let text;
                if (confirm("Final Score: "+ temporaryScore +". Tap OK to reload the page.") == true) {
                    text = "Confirmed";
                    location.reload();
                    } else {
                    text = "Canceled!";
            }
        }else{return "Error"}
    }, 100);}
    } 


const body = document.body;
const igContent = document.createElement("div");
igContent.innerHTML = "<section id='intro-greetings'><article><h1>Project Cerulean.</h1><div id='button-start' onclick='startQuizAnim()'>Start Quiz</div></article></section>";
const questionContent=document.createElement("div");
questionContent.innerHTML="<section id='quiz-content'><article id = 'question-container'><h1 id='question'></h1><div class='answer' id='one' onclick='checkAnswer(1)'></div><div class='answer' id='two' onclick='checkAnswer(2)'></div><div class='answer'id='three' onclick='checkAnswer(3)'></div><div class='answer' id='four' onclick='checkAnswer(4)'></div><div id='game-timer'>1</div></article></section>"

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

function startTimer(){
    // let aTime = 30;
    // const modifyTimer = document.getElementById("game-timer");
    // modifyTimer.innerText = aTime;
    gameTimer(30);
}

function startQuiz(){
    console.log(questionText);
    body.append(questionContent);
    startTimer()
}



function changeQuiz(){
    const questionText = document.getElementById("question");
    const answerTextOne = document.getElementById("one");
    const answerTextTwo = document.getElementById('two');
    const answerTextThree = document.getElementById('three');
    const answerTextFour = document.getElementById('four');
    
    questionText.innerText = questions[questionNum][0];
    answerTextOne.innerText = questions[questionNum][1];
    answerTextTwo.innerText = questions[questionNum][2];
    answerTextThree.innerText = questions[questionNum][3];
    answerTextFour.innerText = questions[questionNum][4];
    if (questionNum==5){
        gameOver();
    }
}

function checkAnswer(z){
    const modifyTimer = document.getElementById("game-timer");
    // tempScore[questionNum] = modifyTimer.innerText;
    var isFalse = 0;
    switch (z){
        case 1:
            if(questions[questionNum][1]==questions[0][1] || questions[questionNum][1]==questions[3][1] ){
                console.log("Hi1" + questionNum);
                // tempScore[questionNum] = modifyTimer.innerText;
                questionNum++;
                
                changeQuiz();
                break;}
                isFalse++;
                
                break;
        case 2:
            if(questions[questionNum][2]==questions[4][2] ){
                console.log("Hi2"+ questionNum);
                // tempScore[questionNum] = modifyTimer.innerText;
                questionNum++;
                
                changeQuiz();
                break;}
                isFalse++;
                break;
        case 3:
            if(questions[questionNum][3]==questions[2][3] ){
                console.log("Hi3"+questionNum);
                // tempScore[questionNum] = modifyTimer.innerText;
                questionNum++;
                
                changeQuiz();
                break;}
                isFalse++;
                break;
        case 4:
            if(questions[questionNum][4]==questions[1][4] ){
                console.log("Hi4"+questionNum);
                // tempScore[questionNum] = modifyTimer.innerText;
                 questionNum++;
                 
                changeQuiz();
                break;}
                isFalse++;
                break;
        default:
            console.log("bye");
            modifyTimer.style.backgroundColor = 'red' ;
            break;
    }
    if(isFalse){
        console.log("bye");
        modifyTimer.style.backgroundColor = 'red' ;
        isFalse--;
    }
}
wipePage();
onloadPage();
console.log(document.getElementsByTagName('h1').id);