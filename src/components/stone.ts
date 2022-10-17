class Stone extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {}

  render() {
    const style = document.createElement("style");
    style.innerText = ``;
    const imageURL = require("url:../images/piedra.png");
    this.shadow.innerHTML = `
    <div>
      <img class="img" src=${imageURL} alt="">
    </div>
    `;
    this.shadow.appendChild(style);
  }
}

customElements.define("custom-stone", Stone);
