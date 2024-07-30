let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userscr = document.querySelector("#user");
const comscr = document.querySelector("#com");

const getComChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const msg = document.querySelector("#your");


const Draw = () =>{
    console.log("Game is Draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "rgb(32, 30, 30)";
};
const winner = (userWin, userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userscr.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win Your ${userChoice} Beats Computer ${compChoice}`;
        msg.style.backgroundColor = "blue";
    }
    else{
        compScore++;
        comscr.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose Computer ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const play = (userChoice) => {
    console.log("User Choice: ", userChoice);
    const compChoice = getComChoice();
    console.log("Comp Choice: ", compChoice);
    // Add the game logic here to compare userChoice and compChoice
    if (userChoice == compChoice){
        Draw()
    }
    else{
        userWin = true;
        if(userChoice == "Rock"){
            userWin = compChoice == "Paper" ? false : true;
        }
        else if(userChoice == "Paper"){
            userWin = compChoice == "Scissor" ? false: true;
        }
        else{
            userWin = compChoice == "Rock" ? false : true;
        }
    winner(userWin ,userChoice, compChoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    });
});
