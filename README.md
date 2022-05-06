# Harry Potter Trivia


### Description

This is a trivia for all the Potterheads to test if they are Pure-blood, Half- Blood, or a Squib. This game is full of sounds effects and background songs. The player is shown a Harry Potter related question and 4 different possible answers on screen. There are a total of 10 questions and each correct answer awards 10 points. If the player gets 80 points or more, they're a Pure-Blood Potterhead, 50 to 70 points, they're considered a Half-Blood Potterhead, and 40 points or less they're a Squib. 


### Screenshot of the game

<IMG SRC = "./images/ReadmePics/Start Page of Trivia.png">
<IMG SRC = "./images/ReadmePics/Questions page of trivia.png">
<IMG SRC = "./images/ReadmePics/Eng page of trivia - High Score.png">
<IMG SRC = "./images/ReadmePics/End page of trivia - Medium Score.png">
<IMG SRC = "./images/ReadmePics/End page of trivia - Low Score.png">


### Technologies Used
- HTML
- CSS
- JavaScript


### Getting Started

https://justaples.github.io/project-js-game/

- Instructions to player:
    - Once the main page loads, hit start;
    - You will see a total of 10 questions as you go through the next pages;
    - Think before choosing an answer, once you select it, you can't change it;
    - Each correct answer will award 10 points;
    - The final result will be displayed at the final page;


### User Stories

- MVP Goals: 

    - As a player, I want to get as many answers correct as I can so that I can win the trivia game.
    -	As a player, I want to see a question displayed on the top of the screen
    -	As a player, I want to have different answers displayed on screen so that I can choose the one I think it’s correct.
    -	As a player, I want to see what number question I am on out of how many questions, so that I know how far I am in the game.
    -	As a player, I want to see my score so that I can tell how well I am doing in this game.
    -	As a player, I want to know if I got an answer right or wrong, so that I can learn from my mistakes.


- Stretch Goals:

    - As a player, I want each option of answers displayed with the colors of each Hogwarts house, so that I can have a full Harry Potter experience
    -	As a player, I want to hear sounds effects after getting an answer correct or incorrect.
    -	As a player, I want to hear Hedwig’s Theme playing in the background of the game.
    -   As a player, I want to be able to play from my mobile phone, so that I can play this game wherever I am.
    -	As a player, I want to see the instructions of the game, so that I know how to play the game.
    -	As a player, I want to have up to 3 hints in the whole game, so that I can have a higher chance to win.
    -	As a player, with disability, I want to hear the questions and answers out loud as I hover over them with the mouse, so that I can play the game.


### Planned Future Enhacements

- Add a button to turn sound effects on and off;
- Disable the ability to focus on the answers after first answer is selected, so that another one doesn't get focused when clicked.
- Add a button to the first page to show instructions;
- Add difficulty level, so the player can choose between, easy, medium and hard;
- Add a timer to each question;
- Add the possibility to get hints to each question. A maximum of 3 hints per game;
- Add accessibility for people with disability to the game, so the questions and answers are read out loud;


### Wireframes

<IMG SRC = "./images/ReadmePics/UPLOAD THIS First Page - Trivia Question.png">


### Unsolved problems 

- Randomizing questions when hitting "next" button


### Major hurdles

- Disabling all the answer buttons after an answer has been selected. So the player can't cheat and get extra points or select the right answer after choosing the wrong one. Problem was fixed by adding a "removeEventListener" to the handleClick() function after a button is clicked.
    
