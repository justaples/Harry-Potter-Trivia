let getScore = document.querySelector('.score');
let getQuestion = document.querySelector('.question');
let getAnswers = document.querySelectorAll('.option');
let getAnswer1 = document.querySelector('.option1');
let getAnswer2 = document.querySelector('.option2');
let getAnswer3 = document.querySelector('.option3');
let getAnswer4 = document.querySelector('.option4');
let getNext = document.querySelector('.next');

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
        question:'Who said this?: “I am good looking enough for both of us.',
        options: ['Draco Malfoy','Ros Weasley','Fleur Delacour','Ginny Weasley'],
        correctAnswer: 'Fleur Delacour'
    }   
]

let turn = 0;
let removed = false;
const handleClick = (e) => {
    console.log(e.target.innerText)
            console.log(questionsAndAnswers[turn].correctAnswer)
            if(e.target.innerText === questionsAndAnswers[turn].correctAnswer){
                getScore.innerHTML = `${parseInt(getScore.innerHTML) + 100}`;
                // turn ++
            }
            getAnswers.forEach(item =>{
                item.removeEventListener('click',
                handleClick,false    
                 )
                })
            // removed = true;
        }

const startTrivia = (turn) => {
    getAnswers.forEach(item => {
        item.addEventListener('click', 
            handleClick
            // },{once:true} ) 
            
        ,{once:true})
    })
    if(removed){
        getAnswers.forEach(item =>{
                item.removeEventListener('click',
                handleClick,false    
                 )
                })
    }
        // console.log('wrong')

    getQuestion.innerText = questionsAndAnswers[turn].question;
    getAnswer1.innerHTML = questionsAndAnswers[turn].options[0];
    getAnswer2.innerHTML = questionsAndAnswers[turn].options[1];
    getAnswer3.innerHTML = questionsAndAnswers[turn].options[2];
    getAnswer4.innerHTML = questionsAndAnswers[turn].options[3];
    }
startTrivia(turn);
console.log(turn)

const showNextQuestion = () =>{
    getNext.addEventListener('click', e =>{
        turn ++
        startTrivia(turn)
        console.log('clicked')
    })
}
showNextQuestion();



