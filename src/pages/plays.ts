import { state } from "../state";

export function initPlays(functionG) {
  const container = document.createElement("div");
  const style = document.createElement("style");
  const paperURL = require("url:../images/papel.png");
  const stoneURL = require("url:../images/piedra.png");
  const scissorURL = require("url:../images/tijera.png");
  const currentState = state.getState();

  function showCurrentGame() {
    if (currentState.currentGame.computerPlay == "piedra") {
      const stone = document.createElement("img");
      const div = document.createElement("div");
      div.className = "computer-play-container";
      stone.className = "computer-play";
      stone.src = stoneURL;
      div.appendChild(stone);
      container.appendChild(div);
    }
    if (currentState.currentGame.computerPlay == "papel") {
      const paper = document.createElement("img");
      const div = document.createElement("div");
      div.className = "computer-play-container";
      paper.className = "computer-play";
      paper.src = paperURL;
      div.appendChild(paper);
      container.appendChild(div);
    }
    if (currentState.currentGame.computerPlay == "tijera") {
      const tijera = document.createElement("img");
      const div = document.createElement("div");
      div.className = "computer-play-container";
      tijera.className = "computer-play";
      tijera.src = scissorURL;
      div.appendChild(tijera);
      container.appendChild(div);
    }
    if (currentState.currentGame.myPlay == "piedra") {
      const stone = document.createElement("img");
      const div = document.createElement("div");
      div.className = "my-play-container";
      stone.className = "my-play";
      stone.src = stoneURL;
      div.appendChild(stone);
      container.appendChild(div);
    }
    if (currentState.currentGame.myPlay == "papel") {
      const paper = document.createElement("img");
      const div = document.createElement("div");
      div.className = "my-play-container";
      paper.className = "my-play";
      paper.src = paperURL;
      div.appendChild(paper);
      container.appendChild(div);
    }
    if (currentState.currentGame.myPlay == "tijera") {
      const tijera = document.createElement("img");
      const div = document.createElement("div");
      div.className = "my-play-container";
      tijera.className = "my-play";
      tijera.src = scissorURL;
      div.appendChild(tijera);
      container.appendChild(div);
    }
  }

  function updateCounter() {
    var seconds = 5;
    const intervalId = setInterval(() => {
      seconds -= 1;
      if (seconds == 0) {
        clearInterval(intervalId);
      }
      if (seconds == 0 && state.getState().currentGame.myPlay != "") {
        functionG.go("/results");
      }
    }, 1000);
  }

  style.innerText = `
  .my-play-container{
    display: flex;
  }

  .my-play{
    margin: 0 auto;
    width: 157px;
    height: 354px;
  }

  .computer-play-container{
    display: flex;
    transform: rotate(180deg);
    position: relative;
    top: -55px;
  }

  .computer-play{
    margin: 0 auto;
    width: 157px;
    height: 354px;
  }
  `;

  updateCounter();
  showCurrentGame();
  container.appendChild(style);
  state.pushToHistory(currentState.currentGame);
  return container;
}
