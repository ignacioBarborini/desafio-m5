class RedStar extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    const imageURL = require("url:../images/Star2.png");
    const style = document.createElement("style");
    style.innerText = ``;

    this.shadow.innerHTML = `
    <img src=${imageURL} alt="">
    `;
    this.shadow.appendChild(style);
  }
}

customElements.define("red-star", RedStar);
