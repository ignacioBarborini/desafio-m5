import "./components/button";
import "./components/scissor";
import "./components/paper";
import "./components/stone";
import "./components/greenStar";
import "./components/redStar";
import { initRouter } from "./router";
import { state } from "./state";

function main() {
  const container = document.querySelector(".container") as Element;
  state.init();
  initRouter(container);
}

main();
