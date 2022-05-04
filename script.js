let getScore = document.querySelector('.score');
let getScoreDiv = document.querySelector('.score-div');
let getQuestionCounter = document.querySelector('.counter')
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
        options: ['Draco Malfoy','Ron Weasley','Fleur Delacour','Ginny Weasley'],
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
        options: ['Scabbers','Pickett','Teddy','Buckbeak'],
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
    },   
]

const audioStart = new Audio("./Sound effect/Hedwig-theme.mp3");
audioStart.volume = 0.008;
audioStart.loop = true;
const audioAlohomora = new Audio('./Sound effect/Alohomora1.mp3');
audioAlohomora.volume = 0.05
const audioRight = new Audio('./Sound effect/10-points to gryffindor.mp3');
audioRight.volume= 0.01;
const audioWrong = new Audio('./Sound effect/Olivander.mp3');
audioWrong.volume= 0.01;
const audioEnd = new Audio('./Sound effect/End.mp3');
audioEnd.volume = 0.1;

const startGame = () =>{
    getStartBtn.addEventListener('click', e =>{
        
        audioAlohomora.play();
        setTimeout(function(){
            setTimeout(function(){
                audioStart.play()
            },1200)
            getStartPage.style.display = "none";
            getStartPage.classList.add('hide');
            getMainTop.classList.remove('hide');
            getEndPage.classList.remove('hide');
        },1500)
    })
}
startGame();

let turn = 9;
let removed = false;
const handleClick = (e) => {
    if(e.target.innerText === questionsAndAnswers[turn].correctAnswer){
        audioRight.play();
        showResult.innerHTML = "Correct! 10 points to Gryffindor!";
        getScore.innerHTML = `${parseInt(getScore.innerHTML) + 60}`;
        getNext.classList.remove('hide')
        getResultContainer.classList.remove('hide')    
    }else{
        audioWrong.play();
        showResult.innerHTML = "Nope, definitely not!!";
        getResultContainer.style.alignItems = 'center';
    }
    
    getNext.classList.remove('hide')
    getResultContainer.classList.remove('hide')    
    getAnswers.forEach(item =>{
        item.removeEventListener('click',
        handleClick,false    
        )
    })
}

const playTrivia = (turn) => {
    getAnswers.forEach(item => {
        item.addEventListener('click', 
        handleClick    
        ,{once:true})
    })
    if(removed){
        getAnswers.forEach(item =>{
            item.removeEventListener('click',
            handleClick,false    
            )
        })
    }
    getQuestionCounter.innerHTML = `<h4>Question ${turn+1} out of 10</h4>`
    getQuestionCounter.style.margin = "0px"
    getQuestion.innerText = questionsAndAnswers[turn].question;
    getAnswer1.innerHTML = questionsAndAnswers[turn].options[0];
    getAnswer2.innerHTML = questionsAndAnswers[turn].options[1];
    getAnswer3.innerHTML = questionsAndAnswers[turn].options[2];
    getAnswer4.innerHTML = questionsAndAnswers[turn].options[3];
    }
playTrivia(turn);

const showNextQuestion = () =>{
    getNext.addEventListener('click', e =>{
        getNext.classList.add('hide')
        getResultContainer.classList.add('hide')
        turn ++
        playTrivia(turn)
        console.log(turn)
        if(turn===10){
            audioStart.pause()
            audioEnd.play()
            getEndPage.classList.add('hide')
            getFinalMessage.classList.remove('hide')
            if(getScore.innerHTML >= 80){
                getFinalMessage.innerHTML = "<h2>Congratulations<br>You're a Pure-Blood Potterhead!!!</h2>"
            }else if (getScore.innerHTML >=50 && getScore.innerHTML < 80){
                getFinalMessage.style.fontSize = "15px"
                getFinalMessage.innerHTML = "<h2>You are a Half-Blood Potterhead! <br>This calls for a Harry Potter movie marathon<br>to brush up on your knowledge!!</h2>"
            }else{
                getFinalMessage.innerHTML = "<h2>You're a Squib!<br>Try again.</h2>"
            }
            getMainTop.style.display = "flex"
            getMainTop.style.flexDirection = "column"
            getMainTop.style.alignContent = "center"
            getMainTop.style.alignItems = "center"
            getMainTop.style.height = "730px"
            getScore.style.fontSize = "150px"
            getScoreDiv.style.margin = "100px"
            getScoreDiv.style.marginTop = "60px"
            getMainTitle.style.fontSize = "50px"
            getMainTitle.style.color = "#eeba30"
            getMainTitle.style.textShadow = "3px 3px #946b2d"
            getMainTitle.style.marginTop = "60px"
            getHPTitle.style.fontSize = "65px"

        }
    })
}
showNextQuestion();

