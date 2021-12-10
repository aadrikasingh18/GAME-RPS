let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score"); // yaha pr compScore_span humne khud se naam diya hai. Eiski jaga aur kuch bhi de skte hai.  
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {           //USER WINS
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    // const smallUserWord = "user".fontsize(3).sub();
    // const smallCompWord = "comp".fontsize(3).sub();
    // result_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) +". You win!"; 
    // TO COMBINE '+' IS USED. THIS IS ES5. WHEN WE USE "TEMPLATE STRING" ie BACKTICK & DOLLAR(below escape) THEN IT IS ES6.
    // result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    result_p.innerHTML = `${convertToWord(userChoice)} (user) beats ${convertToWord(computerChoice)} (comp). You win!`;
    document.getElementById(userChoice).classList.add('green_glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green_glow')}, 500);
}

function lose(userChoice, computerChoice) {         //COMPUTER WINS
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} (user) loses to ${convertToWord(computerChoice)} (comp). You lost!`
    document.getElementById(userChoice).classList.add('red_glow');
    // setTimeout(function(){document.getElementById(userChoice).classList.remove('red_glow')}, 1000); //ES5
    setTimeout(() => document.getElementById(userChoice).classList.remove('red_glow'), 500); //ES6
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} (user) equals ${convertToWord(computerChoice)} (comp). It's a draw.`
    document.getElementById(userChoice).classList.add('blue_glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('blue_glow'), 500); 
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    // rock_div.addEventListener('click', function () {
    //     game("r");
    // }) //ES5

    rock_div.addEventListener('click', () => game("r")); //ES6

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();