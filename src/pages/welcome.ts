export function initWelcome(functionG) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const paperURL = require("url:../images/papel.png");
  const stoneURL = require("url:../images/piedra.png");
  const scissorURL = require("url:../images/tijera.png");
  const titleURL = require("url:../images/title.png");

  style.innerText = `
  .page{
    width: 100%;
    height: 90vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .plays-container{
    margin: 0 auto;
    width: 270px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  `;

  div.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
  </style>
  <div class="page">
  <div class="title-container">
    <img class="title" src="${titleURL}" alt="">
  </div>
  <div class="button-container">
    <custom-button label="Empezar" class="button"></custom-button>
  </div>
  <div class="plays-container">
    <img class="piedra" src="${stoneURL}" alt="">
    <img class="papel" src="${paperURL}" alt="">
    <img class="tijera" src="${scissorURL}" alt="">
  </div>
  </div>
  `;
  div.appendChild(style);

  const button = div.querySelector(".button");
  button?.addEventListener("click", () => {
    functionG.go("/instructions");
  });

  return div;
}
