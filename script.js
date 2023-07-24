const playButton = document.querySelector("#playButton");
const board = document.querySelectorAll(".boardSquare");
const boardContainer = document.querySelector(".board_container");
const restartButton = document.createElement("button");
const currentPlayer = document.querySelector("#currentPlayer");
let playerChange = 1;
const space1 = document.querySelector("#space1")
const space2 = document.querySelector("#space2")
const space3 = document.querySelector("#space3")
const space4 = document.querySelector("#space4")
const space5 = document.querySelector("#space5")
const space6 = document.querySelector("#space6")
const space7 = document.querySelector("#space7")
const space8 = document.querySelector("#space8")
const space9 = document.querySelector("#space9")
let running = true;


 
playButton.addEventListener("click", () => {
  const playerX = document.querySelector("#name1").value;
  const playerO = document.querySelector("#name2").value;
  playButton.parentNode.remove()
  
  boardContainer.style.display = "flex"
  currentPlayer.innerText = "É a vez de: " + playerX

  board.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.innerText === ""){
      playerChange++;
      if (playerChange % 2 === 0){element.innerText = "X"; element.dataset.space = "X"; currentPlayer.innerText = "É a vez de: " + playerO};
      if (playerChange % 2 === 1){element.innerText = "O"; element.dataset.space = "O"; currentPlayer.innerText = "É a vez de: " + playerX};
      if (space1.dataset.space === "X" && space2.dataset.space === "X" && space3.dataset.space === "X" ) {
        endGame(playerX,space1,space2,space3) //finalizaJogo( ganhador )
      } else if (space4.dataset.space === "X" && space5.dataset.space === "X" && space6.dataset.space === "X" ) {
        endGame(playerX,space4,space5,space6)
      } else if (space7.dataset.space === "X" && space8.dataset.space === "X" && space9.dataset.space === "X" ) {
        endGame(playerX,space7,space8,space9)
      } else if (space1.dataset.space === "X" && space4.dataset.space === "X" && space7.dataset.space === "X" ) {
        endGame(playerX,space1,space4,space7)
      } else if (space2.dataset.space === "X" && space5.dataset.space === "X" && space8.dataset.space === "X" ) {
        endGame(playerX,space2,space5,space8)
      } else if (space3.dataset.space === "X" && space6.dataset.space === "X" && space9.dataset.space === "X" ) {
        endGame(playerX,space3,space6,space9)
      } else if (space1.dataset.space === "X" && space5.dataset.space === "X" && space9.dataset.space === "X" ) {
        endGame(playerX,space1,space5,space9)
      } else if (space3.dataset.space === "X" && space5.dataset.space === "X" && space7.dataset.space === "X" ) {
        endGame(playerX,space3,space5,space7)
      } else if (space1.dataset.space === "O" && space2.dataset.space === "O" && space3.dataset.space === "O" ) {
        endGame(playerO,space1,space2,space3) //finalizaJogo( ganhador )
      } else if (space4.dataset.space === "O" && space5.dataset.space === "O" && space6.dataset.space === "O" ) {
        endGame(playerO,space4,space5,space6)
      } else if (space7.dataset.space === "O" && space8.dataset.space === "O" && space9.dataset.space === "O" ) {
        endGame(playerO,space7,space8,space9)
      } else if (space1.dataset.space === "O" && space4.dataset.space === "O" && space7.dataset.space === "O" ) {
        endGame(playerO,space1,space4,space7)
      } else if (space2.dataset.space === "O" && space5.dataset.space === "O" && space8.dataset.space === "O" ) {
        endGame(playerO,space2,space5,space8)
      } else if (space3.dataset.space === "O" && space6.dataset.space === "O" && space9.dataset.space === "O" ) {
        endGame(playerO,space3,space6,space9)
      } else if (space1.dataset.space === "O" && space5.dataset.space === "O" && space9.dataset.space === "O" ) {
        endGame(playerO,space1,space5,space9)
      } else if (space3.dataset.space === "O" && space5.dataset.space === "O" && space7.dataset.space === "O" ) {
        endGame(playerO,space3,space5,space7)
      }
      }
      verificarEmpate()
    })
  }) 
})



function endGame(winner,space1,space2,space3){
currentPlayer.style.display = "none"
document.querySelector(".winnerText").innerText = "O vencedor é: " + winner;
board.forEach((element) => {
  element.disabled = true;
})

space1.classList.add("markLine")
space2.classList.add("markLine")
space3.classList.add("markLine")

const restartLi = document.querySelector(".restartButton");
restartButton.innerText = "Jogar novamente"
restartButton.id = "restartButtonId"
restartLi.append(restartButton)

running = false;
}


function verificarEmpate(){
  for(let i=1; i < 10; i++){
    if( document.querySelector("#space" + i).dataset.space === "" ){
      return false;
    }
  }
  if(running === true){
    currentPlayer.style.display = "none"
    document.querySelector("#currentPlayer").classList.add("hideLine");
    document.querySelector(".winnerText").innerText = "É um empate!";
    board.forEach((element) => {
    element.disabled = true;
    })
    const restartLi = document.querySelector(".restartButton");
    restartButton.innerText = "Jogar novamente"
    restartButton.id = "restartButtonId"
    restartLi.append(restartButton)
    running= false;
    return true;
  }
}

restartButton.addEventListener("click",restartGame)

function restartGame(){
  currentPlayer.style.display = "inline"
  currentPlayer.classList.add("p");
  document.querySelector(".winnerText").innerText = "";

  board.forEach((element) => {
    element.classList.remove("markLine");
    element.disabled = false;
    element.innerText = "";
    element.dataset.space = "";
  })
   
  restartButton.remove();

  running = true;
}
