export class Button extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {}

  render() {
    const style = document.createElement("style");
    style.innerText = `
    .button{
        font-family: 'Odibee Sans';
        box-sizing: border-box;
        min-width: 322px;
        min-height: 87px;
        font-size: 45px;
        background-color: rgba(0, 108, 252, 1);
        color: rgba(216, 252, 252, 1);
        border: solid 10px;
        border-color: rgba(0, 25, 151, 1);
        border-radius: 10px;

    }
    `;
    this.shadow.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
    </style>
    <button class="button"></button>
    `;
    const button = this.shadow.querySelector(".button") as any;
    button.textContent = this.getAttribute("label");
    this.shadow.appendChild(style);
  }
}

customElements.define("custom-button", Button);
