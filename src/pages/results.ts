import { state } from "../state";

export function initResults(functionG) {
  const currentState = state.getState();
  const style = document.createElement("style");
  style.innerText = `
  .page{
    width: 100%;
    height: 90vh;
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  @media(min-width: 767px){
    .page{
      height: 100vh;
    }
  }

  .star-text{
    margin:0 auto;
    height: 0px;
    width: 0px;
    font-family: 'Odibee Sans';
    position: relative;
    top: 100px;
    right: 40px;
  }

  .star{
    width: 254px;
    height: 254px;
    margin: 0 auto;
  }

  .resultados-container{
    display: flex;
    flex-direction: column;
    align-items:flex-end;
    margin: 0 auto;
    padding: 15px 0;
    border: solid 10px;
    border-radius: 10px;
    max-width: 259px;
    max-height: 217px;
  }

  .resultados-title{
    font-family: 'Odibee Sans';
    font-size: 55px;
    margin: 0 auto 13px; 
  }

  .resultados-player{
    font-family: 'Odibee Sans';
    font-size: 45px;
    margin: 0 30px;
  }

  .button{
    margin: 0 auto;
  }
  `;
  function initLose() {
    const div = document.createElement("div");
    const redStarURL = require("url:../images/Star2.png");

    div.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
    </style>
    <div class="page">
      <div>    
        <h1 class="star-text">Perdiste</h1>
        <img class="star" src="${redStarURL}" alt="">
      </div> 
      <div class="resultados-container">
        <h2 class="resultados-title">Score</h2>
        <p class="resultados-player">Vos:${currentState.history.vos} </p>
        <p class="resultados-player">Maquina:${currentState.history.maquina} </p>
      </div>
      <custom-button label="Volver a Jugar" class="button"></custom-button>
    </div>  
    `;

    div.style.backgroundColor = "rgba(137, 73, 73, 0.9)";
    div.style.height = "110vh";
    const button = div.querySelector(".button");
    button?.addEventListener("click", () => {
      functionG.go("/instructions");
      state.getState().currentGame = { computerPlay: "", myPlay: "" };
    });
    div.appendChild(style);
    return div;
  }

  function initWins() {
    const div = document.createElement("div");
    const greenStarURL = require("url:../images/Star.png");

    div.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
    </style>
    <div class="page">
      <div>    
        <h1 class="star-text">Ganaste</h1>
        <img class="star" src="${greenStarURL}" alt="">
      </div> 
      <div class="resultados-container">
        <h2 class="resultados-title">Score</h2>
        <p class="resultados-player">Vos:${currentState.history.vos} </p>
        <p class="resultados-player">Maquina:${currentState.history.maquina} </p>
      </div>
      <custom-button label="Volver a Jugar" class="button"></custom-button>
    </div>  
    `;

    div.style.backgroundColor = "rgba(136, 137, 73, 0.9)";
    div.style.height = "110vh";
    const button = div.querySelector(".button");
    button?.addEventListener("click", () => {
      functionG.go("/instructions");
      state.getState().currentGame = { computerPlay: "", myPlay: "" };
    });
    div.appendChild(style);
    return div;
  }

  function initDraw() {
    const div = document.createElement("div");
    const greenStarURL = require("url:../images/Star.png");

    div.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
    </style>
    <div class="page">
    <div>    
      <h1 class="star-text">Empate</h1>
      <img class="star" src="${greenStarURL}" alt="">
    </div>  
      <div class="resultados-container">
        <h2 class="resultados-title">Score</h2>
        <p class="resultados-player">Vos:${currentState.history.vos} </p>
        <p class="resultados-player">Maquina:${currentState.history.maquina} </p>
      </div>
      <custom-button label="Volver a Jugar" class="button"></custom-button>
    </div>  
    `;

    const button = div.querySelector(".button");
    button?.addEventListener("click", () => {
      functionG.go("/instructions");
      state.getState().currentGame = { computerPlay: "", myPlay: "" };
    });
    div.appendChild(style);
    return div;
  }

  const div = document.createElement("div");
  const currentGame = state.data.currentGame;
  const result = state.whoWins(currentGame.computerPlay, currentGame.myPlay);
  if (result == "win") {
    const win = initWins();
    div.appendChild(win);
  }
  if (result == "lose") {
    const lose = initLose();
    div.appendChild(lose);
  }
  if (result == "draw") {
    const draw = initDraw();
    div.appendChild(draw);
  }

  return div;
}
