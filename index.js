///////// Audio Files
var welcome = new Audio("audios/welcome.mp3");
var startGame = new Audio("audios/start the game.mp3");
var restartGame = new Audio("audios/restart the game.mp3");
var youWon = new Audio("audios/you won.mp3");
var youLost = new Audio("audios/you lost.mp3");
var draw = new Audio("audios/draw.mp3");
var pAgain = new Audio("audios/play again.mp3");

///////// Main Menu Variables
var chooseGame = document.querySelector(".choose-game"); // Main Menu Header
var rpsGame = document.querySelector(".rps-game"); // RPS Game Logo in the Main Menu
var rpslsGame = document.querySelector(".rpsls-game"); // RPSLS Game Logo in the Main Menu

///////// Rock Paper Scissors Game Variables
var rpsContainer = document.querySelector(".rps-container"); // RPS Game Container
var rpslsContainer = document.querySelector(".rpsls-container"); // RPS Game Container
var mainMenuBtn = document.querySelector(".mainMenu"); // return Main Menu Button
var mainMenuBtnRpsls = document.querySelector(".mainMenuRpsls"); // return Main Menu Button

var rps = document.querySelector(".rps"); // The Start of RPS Game
var rpsls = document.querySelector(".rpsls"); // The Start of RPSLS Game
var game = document.querySelector(".game"); // The Result of the Game
var gameRpsls = document.querySelector(".gameRpsls"); // The Result of the Game
var randomNu = Math.floor(Math.random() * 3);
var randomNuRpsls = Math.floor(Math.random() * 5);

////// Choose Rock Paper Scissors Game
rpsGame.addEventListener("click", function () {
    rpsContainer.classList.add("showFlex");
    rpsContainer.classList.remove("hide");
    chooseGame.classList.add("hide");
    chooseGame.classList.remove("showFlex");
    startGame.play();
});
////// Choose Rock Paper Scissors Lizard Spock Game
rpslsGame.addEventListener("click", function () {
    rpslsContainer.classList.add("showFlex");
    rpslsContainer.classList.remove("hide");
    chooseGame.classList.add("hide");
    chooseGame.classList.remove("showFlex");
    startGame.play();
});

//////////////////////// The Buttons of RPS Game
////// Restart RPS Game
var restartBtn = document.querySelector(".restartbtn"); // Restart the Game Button
restartBtn.addEventListener("click", function () {
    startGame.play();
    again();
    x = 0;
    score.innerText = x;
});
//////
////// Restart RPSLS Game
var restartBtnRpsls = document.querySelector(".restartbtnRpsls"); // Restart the Game Button
restartBtnRpsls.addEventListener("click", function () {
    startGame.play();
    againRpsls();
    y = 0;
    scoreRpsls.innerText = y;
});
//////
////// Return to Main Menu to choose the Game - RPS
mainMenuBtn.addEventListener("click", function () {
    welcome.play();
    again();
    rpsContainer.classList.add("hide");
    rpsContainer.classList.remove("showFlex");
    chooseGame.classList.add("showFlex");
    chooseGame.classList.remove("hide");
    x = 0;
    score.innerText = x;
});
//////
////// Return to Main Menu to choose the Game - RPSLS
mainMenuBtnRpsls.addEventListener("click", function () {
    welcome.play();
    againRpsls();
    rpslsContainer.classList.add("hide");
    rpslsContainer.classList.remove("showFlex");
    chooseGame.classList.add("showFlex");
    chooseGame.classList.remove("hide");
    y = 0;
    scoreRpsls.innerText = y;
});
//////
////// Rules Variables
var rulesBtn = document.getElementById("rules"); // Rules Button
var closeBtn = document.querySelector(".close"); // Close Button
var rulesBg = document.querySelector(".rules"); // Rules Black Background
var rules = document.querySelector(".rules-content"); // The Rules
//// Open Rules
function openRules() {
    pAgain.play();
    rulesBg.style.opacity = "1";
    rulesBg.style.display = "block";
    rulesBg.style.visibility = "visible";
    rules.style.transform = "translate(-50%, -50%) scale(1)";
    rules.style.opacity = "1";
}
rulesBtn.addEventListener("click", function () {
    openRules();
});
//// Close Rules
function closeRules() {
    rulesBg.style.opacity = "0";
    rulesBg.style.display = "none";
    rulesBg.style.visibility = "hidden";
}
rulesBg.addEventListener("click", function () {
    closeRules();
});
closeBtn.addEventListener("click", function () {
    closeRules();
});
//////
////// Rules Variables - RPSLS
var rulesBtnRpsls = document.getElementById("rulesRpsls"); // Rules Button
var closeBtnRpsls = document.querySelector(".closeRpsls"); // Close Button
var rulesBgRpsls = document.querySelector(".rulesRpsls"); // Rules Black Background
var rulesRpsls = document.querySelector(".rules-content-rpsls"); // The Rules
//// Open Rules Rpsls
function openRulesRpsls() {
    pAgain.play();
    rulesBgRpsls.style.opacity = "1";
    rulesBgRpsls.style.display = "block";
    rulesBgRpsls.style.visibility = "visible";
    rulesRpsls.style.transform = "translate(-50%, -50%) scale(1)";
    rulesRpsls.style.opacity = "1";
}
rulesBtnRpsls.addEventListener("click", function () {
    openRulesRpsls();
});
//// Close Rules Rpsls
function closeRulesRpsls() {
    rulesBgRpsls.style.opacity = "0";
    rulesBgRpsls.style.display = "none";
    rulesBgRpsls.style.visibility = "hidden";
}
rulesBgRpsls.addEventListener("click", function () {
    closeRulesRpsls();
});
closeBtnRpsls.addEventListener("click", function () {
    closeRulesRpsls();
});
//////
//////////////////////////////////////////////////////

//// The Score - RPS
var score = document.querySelector(".score-number");
var x = 0;
score.innerText = x;
//// The Score - RPSLS
var scoreRpsls = document.querySelector(".score-number-rpsls");
var y = 0;
scoreRpsls.innerText = y;
///////////////

////// The House Pick
var random = document.querySelector(".random"); // The Circle, the House picked
var randomImg = document.querySelector(".random-img"); // The Icon, the House picked
function randomChoose() {
    if (randomNu === 0) {
        random.classList.add("rock");
        randomImg.setAttribute("src", "images/icon-rock.svg");
    } else if (randomNu === 1) {
        random.classList.add("paper");
        randomImg.setAttribute("src", "images/icon-paper.svg");
    } else {
        random.classList.add("scissors");
        randomImg.setAttribute("src", "images/icon-scissors.svg");
    }
}
//////////////////////
////// The House Pick - RPSLS
var randomRpsls = document.querySelector(".randomRpsls"); // The Circle, the House picked
var randomImgRpsls = document.querySelector(".random-img-rpsls"); // The Icon, the House picked
function randomChooseRpsls() {
    if (randomNuRpsls === 0) {
        randomRpsls.classList.add("rock");
        randomImgRpsls.setAttribute("src", "images/icon-rock.svg");
    } else if (randomNuRpsls === 1) {
        randomRpsls.classList.add("spock");
        randomImgRpsls.setAttribute("src", "images/icon-spock.svg");
    } else if (randomNuRpsls === 2) {
        randomRpsls.classList.add("paper");
        randomImgRpsls.setAttribute("src", "images/icon-paper.svg");
    } else if (randomNuRpsls === 3) {
        randomRpsls.classList.add("lizard");
        randomImgRpsls.setAttribute("src", "images/icon-lizard.svg");
    } else {
        randomRpsls.classList.add("scissors");
        randomImgRpsls.setAttribute("src", "images/icon-scissors.svg");
    }
}
//////////////////////

////// Your Pick
var notPicked = document.getElementsByClassName("not-picked"); // RPS Circles Array [Rock, Paper, Scissors]
var picked = document.querySelector(".picked"); // The Circle you picked
var pickedImg = document.querySelector(".picked-img"); // The Icon you picked
function playGame() {
    rps.style.opacity = "0";
    rps.style.visibility = "hidden";
    game.style.opacity = "1";
    game.style.visibility = "visible";
}

notPicked[0].addEventListener("click", function () {
    playGame();
    picked.classList.add("rock");
    pickedImg.setAttribute("src", "images/icon-rock.svg");
    randomChoose();
    r();
});

notPicked[1].addEventListener("click", function () {
    playGame();
    picked.classList.add("paper");
    pickedImg.setAttribute("src", "images/icon-paper.svg");
    randomChoose();
    p();
});

notPicked[2].addEventListener("click", function () {
    playGame();
    picked.classList.add("scissors");
    pickedImg.setAttribute("src", "images/icon-scissors.svg");
    randomChoose();
    s();
});
//////////////////////

////// Your Pick - RPSLS
var notPickedRpsls = document.getElementsByClassName("not-picked-rpsls"); // RPS Circles Array [Rock, Paper, Scissors]
var pickedRpsls = document.querySelector(".pickedRpsls"); // The Circle you picked
var pickedImgRpsls = document.querySelector(".picked-img-rpsls"); // The Icon you picked
function playGameRpsls() {
    rpsls.style.opacity = "0";
    rpsls.style.visibility = "hidden";
    gameRpsls.style.opacity = "1";
    gameRpsls.style.visibility = "visible";
}

notPickedRpsls[0].addEventListener("click", function () {
    playGameRpsls();
    pickedRpsls.classList.add("rock");
    pickedImgRpsls.setAttribute("src", "images/icon-rock.svg");
    randomChooseRpsls();
    rock();
});

notPickedRpsls[1].addEventListener("click", function () {
    playGameRpsls();
    pickedRpsls.classList.add("spock");
    pickedImgRpsls.setAttribute("src", "images/icon-spock.svg");
    randomChooseRpsls();
    spock();
});

notPickedRpsls[2].addEventListener("click", function () {
    playGameRpsls();
    pickedRpsls.classList.add("paper");
    pickedImgRpsls.setAttribute("src", "images/icon-paper.svg");
    randomChooseRpsls();
    paper();
});
notPickedRpsls[3].addEventListener("click", function () {
    playGameRpsls();
    pickedRpsls.classList.add("lizard");
    pickedImgRpsls.setAttribute("src", "images/icon-lizard.svg");
    randomChooseRpsls();
    lizard();
});
notPickedRpsls[4].addEventListener("click", function () {
    playGameRpsls();
    pickedRpsls.classList.add("scissors");
    pickedImgRpsls.setAttribute("src", "images/icon-scissors.svg");
    randomChooseRpsls();
    scissors();
});
//////////////////////

////// The Result
var result = document.querySelector(".result-text");
function win() {
    result.innerText = "You Won";
    result.classList.add("you-won");
    youWon.play();
    x++;
    score.innerText = x;
}
function lose() {
    result.innerText = "You Lost";
    result.classList.add("you-lost");
    youLost.play();
    x--;
    score.innerText = x;
}
function itsDraw() {
    draw.play();
    result.innerText = "Draw";
}
function r() {
    if (randomNu == 0) {
        itsDraw();
    } else if (randomNu == 1) {
        lose();
    } else {
        win();
    }
}
function p() {
    if (randomNu == 0) {
        win();
    } else if (randomNu == 1) {
        itsDraw();
    } else {
        lose();
    }
}
function s() {
    if (randomNu == 0) {
        lose();
    } else if (randomNu == 1) {
        win();
    } else {
        itsDraw();
    }
}
////////////////////////////////////

////// The Result - RPSLS
var resultRpsls = document.querySelector(".result-text-rpsls");
function winRpsls() {
    resultRpsls.innerText = "You Won";
    resultRpsls.classList.add("you-won");
    youWon.play();
    y++;
    scoreRpsls.innerText = y;
}
function loseRpsls() {
    resultRpsls.innerText = "You Lost";
    resultRpsls.classList.add("you-lost");
    youLost.play();
    y--;
    scoreRpsls.innerText = y;
}
function itsDrawRpsls() {
    draw.play();
    resultRpsls.innerText = "Draw";
}
function rock() {
    if (randomNuRpsls == 0) {
        itsDrawRpsls();
    } else if (randomNuRpsls == 1 || randomNuRpsls == 2) {
        loseRpsls();
    } else {
        winRpsls();
    }
}
function paper() {
    if (randomNuRpsls == 0 || randomNuRpsls == 1) {
        winRpsls();
    } else if (randomNu == 2) {
        itsDrawRpsls();
    } else {
        loseRpsls();
    }
}
function scissors() {
    if (randomNuRpsls == 0 || randomNuRpsls == 1) {
        loseRpsls();
    } else if (randomNuRpsls == 4) {
        itsDrawRpsls();
    } else {
        winRpsls();
    }
}
function lizard() {
    if (randomNuRpsls == 3) {
        itsDraweRpsls();
    } else if (randomNuRpsls == 1 || randomNuRpsls == 2) {
        winRpsls();
    } else {
        loseRpsls();
    }
}
function spock() {
    if (randomNuRpsls == 1) {
        itsDrawRpsls();
    } else if (randomNuRpsls == 0 || randomNuRpsls == 4) {
        winRpsls();
    } else {
        loseRpsls();
    }
}
////////////////////////////////////

////// Play Again
var playAgainBtn = document.querySelector(".btn-lg"); // Play Again Button
function again() {
    rps.style.opacity = "1";
    rps.style.visibility = "visible";
    game.style.opacity = "0";
    game.style.visibility = "hidden";
    picked.classList.remove("rock", "paper", "scissors");
    random.classList.remove("rock", "paper", "scissors");
    result.classList.remove("you-won", "you-lost", "draw");

    pAgain.play();

    randomNu = Math.floor(Math.random() * 3);
}
playAgainBtn.addEventListener("click", again);
////// Play Again RPSLS
var playAgainBtnRpsls = document.querySelector(".btn-rpsls"); // Play Again Button
function againRpsls() {
    rpsls.style.opacity = "1";
    rpsls.style.visibility = "visible";
    gameRpsls.style.opacity = "0";
    gameRpsls.style.visibility = "hidden";
    pickedRpsls.classList.remove("rock", "paper", "scissors", "lizard", "spock");
    randomRpsls.classList.remove("rock", "paper", "scissors", "lizard", "spock");
    resultRpsls.classList.remove("you-won", "you-lost", "draw");

    pAgain.play();

    randomNuRpsls = Math.floor(Math.random() * 3);
}
playAgainBtnRpsls.addEventListener("click", againRpsls);
////////////////////////////////////