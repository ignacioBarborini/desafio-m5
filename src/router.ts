import { initInstructions } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initPlays } from "./pages/plays";
import { initWelcome } from "./pages/welcome";
import { initResults } from "./pages/results";

const routes = [
  {
    path: /\/instructions/,
    component: initInstructions,
  },
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/game/,
    component: initGame,
  },
  {
    path: /\/plays/,
    component: initPlays,
  },
  {
    path: /\/results/,
    component: initResults,
  },
];

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("ignaciobarborini.github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const div = r.component({ go: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(div);
      }
    }
  }
  if (location.pathname == "/" || location.pathname == "/desafio-m5/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
