/*=======================================================================
Retrieving HTML elements using DOM manipulation
=======================================================================*/

let getScore = document.querySelector('.score');
let getScoreDiv = document.querySelector('.score-div');
let getQuestionCounter = document.querySelector('.counter');
let getQuestion = document.querySelector('.question');
let getAnswers = document.querySelectorAll('.option');
let getAnswer1 = document.querySelector('.option1');
let getAnswer2 = document.querySelector('.option2');
let getAnswer3 = document.querySelector('.option3');
let getAnswer4 = document.querySelector('.option4');
let getNext = document.querySelector('.next');
let getResultContainer = document.querySelector('.result-container');
let showResult = document.querySelector('#result');
let getEndPage = document.querySelector('.end-page');
let getMainTop = document.querySelector('.main-top');
let getMainTitle = document.querySelector('.main-title');
let getFinalMessage = document.querySelector('.final-message');
let getStartPage = document.querySelector('.start-page');
let getStartBtn = document.querySelector('.start');
let getHPTitle = document.querySelector('.hp-title');
let getPlayAgain = document.querySelector('.play-again');

/*=======================================================================
Entering trivia's questions and answers into an array of objects
=======================================================================*/
let questionsAndAnswers = [
    {
        question:'Who teaches Harry how to play Wizard’s chess?',
        options: ['Hermione','Ron','Hagrid','Dudley'],
        correctAnswer: 'Ron'
    },   
    {
        question:'When is Harry Potter’s birthday?',
        options: ['December 31st','January 31st','July 31st','October 31st'],
        correctAnswer: 'July 31st'
    },   
    {
        question:'Who teaches History of Magic at Hogwarts?',
        options: ['Professor Flitwick','Professor Sprout','Professor Trelawney','Professor Binns'],
        correctAnswer: 'Professor Binns'
    },   
    {
        question:'Who said this?\n“I am good looking enough for both of us"',
        options: ['Fleur Delacour', 'Draco Malfoy','Ron Weasley','Ginny Weasley'],
        correctAnswer: 'Fleur Delacour'
    },   
    {
        question:'Which of these is NOT one of Albus Dumbledore’s middle names?',
        options: ['Wulfric','Aurelius','Percival','Brian'],
        correctAnswer: 'Aurelius'
    },   
    {
        question:'Which dragon does Harry Potter face in the first task of the Triwizard Tournament?',
        options: ['Swedish Short-Snout','Chinese Fireball','Common Welsh Green','Hungarian Horntail'],
        correctAnswer: 'Hungarian Horntail'
    },   
    {
        question:"What is Neville's Boggart?",
        options: ['A snake','Snape','The Full Moon','His Grandmother'],
        correctAnswer: 'Snape'
    },   
    {
        question: "What is the name of Hagrid's Hippogriff?",
        options: ['Buckbeak','Scabbers','Pickett','Teddy'],
        correctAnswer: 'Buckbeak'
    },   
    {
        question:"What was Lupin's nickname when he was a student?",
        options: ['Padfoot','Moony','Prongs','Wormtail'],
        correctAnswer: 'Moony'
    },   
    {
        question:'What house is Cedric Diggory in?',
        options: ['Gryffindor','Slytherin','Ravenclaw','Hufflepuff'],
        correctAnswer: 'Hufflepuff'
    },   
    {
        question:'',
        options: ['','','',''],
        correctAnswer: ''
    }   
]

/*=======================================================================
Adding variables for the audios and setting up a volume

- Video referencing how to add audio to the code:
    https://www.youtube.com/watch?v=IlnZxLeQezI 
- Link referencing how to set up loop() to an audio:
    https://www.w3schools.com/jsref/prop_audio_loop.asp 
- Sound effects downloaded from:
    https://www.101soundboards.com/boards/26424-harry-potter-and-the-sorcerers-stone-soundboard 
=======================================================================*/

const audioStart = new Audio("./Sound effect/Hedwig-theme.mp3");
audioStart.volume = 0.04;
/* Allowing main song play in a loop */
audioStart.loop = true;
const audioAlohomora = new Audio('./Sound effect/Alohomora1.mp3');
audioAlohomora.volume = 0.05
const audioRight = new Audio('./Sound effect/10-points to gryffindor.mp3');
audioRight.volume= 0.05;
const audioWrong = new Audio('./Sound effect/Olivander.mp3');
audioWrong.volume= 0.02;
const audioGoodEnd = new Audio('./Sound effect/End.mp3');
audioGoodEnd.volume = 0.1;
const audioBadEnd = new Audio('./Sound effect/Squib-result.mp3');
audioBadEnd.volume = 0.1;

/*=======================================================================
Adding a function so that when the start button is clicked on the first page, 
audio starts playing and the first page gets a class of .hide added to it 
and the main trivia has the class of .hide removed

- Video referencing how to code using hide class:
    https://www.youtube.com/watch?v=riDzcEQbX6k
=======================================================================*/

const startGame = () =>{
    getStartBtn.addEventListener('click', e =>{
        
        audioAlohomora.play();
        
        /*=======================================================================
        setTimeOut was added so that the answers will show up after a 1.5 s, 
        matching the "Alohomora" sounds effect
        =======================================================================*/
        setTimeout(function(){
            
            /*=======================================================================
            2nd setTimeOut added so that the main song starts playing after "Alohomora" is played
            =======================================================================*/
            setTimeout(function(){
                audioStart.play();
            },1200);
            getStartPage.style.display = "none";
            getStartPage.classList.add('hide');
            getMainTop.classList.remove('hide');
            getEndPage.classList.remove('hide');
        },1500);
    });
}
startGame();

/*=======================================================================
Setting a variable called "turn" starting at 0, so that when it's called later, 
it'll start from the first index of the questionsAndAnswers array
=======================================================================*/

let turn = 0;


/*=======================================================================
Function that handles the logic of the game when an answer is clicked
=======================================================================*/

const handleClick = (e) => {
    if(e.target.innerText === questionsAndAnswers[turn].correctAnswer){
        audioRight.play();
        showResult.innerHTML = "Correct! 10 points to Gryffindor!";
        getScore.innerHTML = `${parseInt(getScore.innerHTML) + 10}`;
        getNext.classList.remove('hide');
        getResultContainer.classList.remove('hide');    
    }else{
        audioWrong.play();
        showResult.innerHTML = "Nope, definitely not!!";
        getResultContainer.style.alignItems = 'center';
    }
    
    getNext.classList.remove('hide');
    getResultContainer.classList.remove('hide');    
    
    /*=======================================================================
    Adding removeEventListener to disable any clicking after choosing an answer, 
    so that once a wrong question is selected, it won't allow you to choose a
    correct one afterwards, or if a correct answer is selected, 
    it won't allow you to keep clicking and getting more point added to the score
    =======================================================================*/
    getAnswers.forEach(item =>{
        item.removeEventListener('click',
        handleClick    
        );
    });
}

/*=======================================================================
Function to bring the questions and answers to the screen according to the turn number
=======================================================================*/

const playTrivia = (turn) => {
    getAnswers.forEach(item => {
        item.addEventListener('click', 
        handleClick
        );
    });
    getQuestionCounter.innerHTML = `<h4>Question ${turn+1} out of 10</h4>`;
    getQuestionCounter.style.margin = "0px";
    getQuestion.innerText = questionsAndAnswers[turn].question;
    getAnswer1.innerHTML = questionsAndAnswers[turn].options[0];
    getAnswer2.innerHTML = questionsAndAnswers[turn].options[1];
    getAnswer3.innerHTML = questionsAndAnswers[turn].options[2];
    getAnswer4.innerHTML = questionsAndAnswers[turn].options[3];
}
playTrivia(turn);


/*=======================================================================
- Function to show next question when the button Next is clicked, invoking the playTrivia() function. 
    - When question is displayed, the class of .hide is added to the "next" button, so it is not displayed until an answer is selected
    - When question is displayed, the class of .hide is also added to the "result container", so it's not displayed until an answers is selected
=======================================================================*/

const showNextQuestion = () =>{
    getNext.addEventListener('click', e =>{
        getNext.classList.add('hide');
        getResultContainer.classList.add('hide');
        turn ++
        playTrivia(turn);
        
        /*=======================================================================
        Adding a conditional to finish the game when question #10 is reached - 11th index of the array
        =======================================================================*/
        if(turn===10){
            audioStart.pause();
            getEndPage.classList.add('hide');
            getFinalMessage.classList.remove('hide');
            getPlayAgain.classList.remove('hide');
            
            /*=======================================================================
            Adding conditionals to display different messages and different songs according to the final score.
            =======================================================================*/
            if(getScore.innerHTML >= 90){
                audioGoodEnd.play();
                getFinalMessage.innerHTML = "<h2>Congratulations<br>You're a Pure-Blood Potterhead!!!</h2>";
            }else if (getScore.innerHTML >=50 && getScore.innerHTML < 90){
                audioGoodEnd.play();
                getFinalMessage.style.fontSize = "15px";
                getFinalMessage.innerHTML = "<h2>You are a Half-Blood Potterhead! <br>Better re-read the books<br>to brush up on your knowledge!!</h2>";
            }else{
                audioBadEnd.play();
                getFinalMessage.innerHTML = "<h2>You're a Squib!<br>Try again.</h2>";
            };
            
            /*=======================================================================
            Styling the end page using DOM manipulation, since all pages were done using the same HTML
            =======================================================================*/
            getMainTop.style.display = "flex";
            getMainTop.style.flexDirection = "column";
            getMainTop.style.alignContent = "center";
            getMainTop.style.alignItems = "center";
            getMainTop.style.height = "730px";
            getScore.style.fontSize = "150px";
            getScoreDiv.style.margin = "100px";
            getScoreDiv.style.marginTop = "60px";
            getMainTitle.style.fontSize = "50px";
            getMainTitle.style.color = "#eeba30";
            getMainTitle.style.textShadow = "3px 3px #946b2d";
            getMainTitle.style.marginTop = "60px";
            getHPTitle.style.fontSize = "65px";
            
        };
    });
}
showNextQuestion();

/*=======================================================================
Function to refresh the page when "Play again" button is clicked

- Link referencing how to use reload()
    https://www.w3schools.com/jsref/met_loc_reload.asp
=======================================================================*/

const reset = () => {
    getPlayAgain.addEventListener('click', e =>{
        location.reload();
    })
}
reset();
