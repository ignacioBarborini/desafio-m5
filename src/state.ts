type Play = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Play;
  myPlay: Play;
};

export const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: {
      vos: 0,
      maquina: 0,
    },
    callbacks: [],
  },
  init() {
    const localData: any = localStorage.getItem("history-saved");
    this.data.history = JSON.parse(localData);
  },

  setSate(newState) {
    this.data = newState;
  },

  getState() {
    return this.data;
  },

  pushToHistory(game: Game) {
    const currentState = this.getState();
    const myPlay = currentState.history.vos;
    const computerPlay = currentState.history.maquina;
    const result = this.whoWins(game.computerPlay, game.myPlay);
    if (result == "win") {
      this.setSate({
        ...currentState,
        history: {
          vos: myPlay + 1,
          maquina: computerPlay,
        },
      });
    }
    if (result == "lose") {
      this.setSate({
        ...currentState,
        history: {
          vos: myPlay,
          maquina: computerPlay + 1,
        },
      });
    }
    if (result == "empate") {
    }
    this.saveHistory();
  },

  saveHistory() {
    const currentState = this.getState().history;
    localStorage.setItem("history-saved", JSON.stringify(currentState));
  },

  setMove(move: Play) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
  },

  setPcMove() {
    const moves = ["piedra", "papel", "tijera"];
    const currentState = this.getState();
    const move = this.randomNumber(0, 3);
    currentState.currentGame.computerPlay = moves[move];
  },

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  whoWins(computerPlay, myPlay) {
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
    const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
    const gane = [ganeConPapel, ganeConPiedra, ganeConTijera].includes(true);
    if (gane == true) {
      return "win";
    }

    const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
    const perdiConTijera = myPlay == "tijera" && computerPlay == "piedra";
    const perdiConPapel = myPlay == "papel" && computerPlay == "tijera";
    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijera].includes(
      true
    );
    if (perdi == true) {
      return "lose";
    }

    const empateConPiedra = myPlay == "piedra" && computerPlay == "piedra";
    const empateConTijera = myPlay == "tijera" && computerPlay == "tijera";
    const empateConPapel = myPlay == "papel" && computerPlay == "papel";
    const empate = [empateConPapel, empateConPiedra, empateConTijera].includes(
      true
    );
    if (empate == true) {
      return "draw";
    }
  },
};
