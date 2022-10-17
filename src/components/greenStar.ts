class Star extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {}

  render() {
    const style = document.createElement("style");
    style.innerText = ``;
    const imageURL = require("url:../images/Star.png");
    this.shadow.innerHTML = `
    <img src=${imageURL} alt="">
    `;
    this.shadow.appendChild(style);
  }
}

customElements.define("green-star", Star);
