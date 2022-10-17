import { state } from "../state";

export function initGame(functionG) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const paperURL = require("url:../images/papel.png");
  const stoneURL = require("url:../images/piedra.png");
  const scissorURL = require("url:../images/tijera.png");

  style.innerText = `
  .page{
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  @media(min-width: 767px){
    .page{
      padding-top: 40px;
    }
  }
  
  .plays-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
  }

  @media(min-width: 767px){
    .plays-container{
      padding-top: 60px;
    }
  }
  
  .piedra{
    width: 80px;
    height: 185px;  
  }
  .papel{
    width: 80px;
    height: 185px;
  }
  .tijera{
    width: 80px;
    height: 185px;
  }

  @keyframes move {
    100% {
       transform: translate(0px, -80px);
    }
  }

  .counter{
    font-size: 100px;
    font-family: 'Odibee Sans';
  }

  .counter-container{
    display: flex;
    justify-content: center;
    align-items:center;
    width: 243px;
    height: 243px;
    border: solid 25px;
    border-radius: 50%;
  }
  `;
  div.innerHTML = `
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
  </style>
  
  <div class="page">
    <div class="counter-container">
      <span class="counter"></span>
    </div>
    <div class="plays-container">
      <img class="piedra" src="${stoneURL}" alt="">
      <img class="papel" src="${paperURL}" alt="">
      <img class="tijera" src="${scissorURL}" alt="">
    </div>
  <div>
  `;
  div.appendChild(style);

  function updateCounter() {
    const p = div.querySelector(".counter") as any;
    p.textContent = 5;
    const intervalId = setInterval(() => {
      p.textContent -= 1;
      if (p.textContent == 0) {
        clearInterval(intervalId);
      }
      if (p.textContent == 0 && state.getState().currentGame.myPlay != "") {
        functionG.go("/plays");
      }
      if (p.textContent == 0 && state.getState().currentGame.myPlay == "") {
        functionG.go("/instructions");
      }
    }, 1000);
  }

  function stoneMove() {
    const stone = div.querySelector(".piedra") as any;
    stone?.addEventListener("click", () => {
      stone.style.animation = "move 0.5s 1";
      stone.style.animationFillMode = "forwards";
      state.setMove("piedra");
      state.setPcMove();
      console.log(state.getState());
    });
  }

  function paperMove() {
    const stone = div.querySelector(".papel") as any;
    stone?.addEventListener("click", () => {
      stone.style.animation = "move 0.5s 1";
      stone.style.animationFillMode = "forwards";
      state.setMove("papel");
      state.setPcMove();
      console.log(state.getState());
    });
  }

  function scissorMove() {
    const stone = div.querySelector(".tijera") as any;
    stone?.addEventListener("click", () => {
      stone.style.animation = "move 0.5s 1";
      stone.style.animationFillMode = "forwards";
      state.setMove("tijera");
      state.setPcMove();
      console.log(state.getState());
    });
  }
  stoneMove();
  paperMove();
  scissorMove();
  updateCounter();

  return div;
}
