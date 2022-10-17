class Scissor extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {}

  render() {
    const style = document.createElement("style");
    style.innerText = ``;
    const imageURL = require("url:../images/tijera.png");
    this.shadow.innerHTML = `
    <div>
      <img src=${imageURL} alt="">
    </div>
    `;
    this.shadow.appendChild(style);
  }
}

customElements.define("custom-scissor", Scissor);
