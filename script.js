const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const clearGamer = document.querySelector(".clear")

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + "Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu Empate!";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = " Voce Ganhou!";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você Perdeu para a Alexa!";
  }
};
 const clearTheGame = () => {
    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
    humanScoreNumber = 0
    machineScoreNumber = 0

 }