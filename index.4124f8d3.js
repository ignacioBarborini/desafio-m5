function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=n.parcelRequire9acc;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequire9acc=s),s.register("27Lyk",(function(n,t){var a,s;e(n.exports,"register",(()=>a),(e=>a=e)),e(n.exports,"resolve",(()=>s),(e=>s=e));var i={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},s=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s.register("ewLBD",(function(e,n){e.exports=new URL(s("27Lyk").resolve("kuZ4t"),import.meta.url).toString()})),s.register("iLJZL",(function(e,n){e.exports=new URL(s("27Lyk").resolve("hqVYS"),import.meta.url).toString()})),s.register("4I1fB",(function(e,n){e.exports=new URL(s("27Lyk").resolve("h5stw"),import.meta.url).toString()})),s.register("bjgDL",(function(e,n){e.exports=new URL(s("27Lyk").resolve("lRs8l"),import.meta.url).toString()})),s.register("57u4o",(function(e,n){e.exports=new URL(s("27Lyk").resolve("cMkYS"),import.meta.url).toString()})),s.register("9wWYO",(function(e,n){e.exports=new URL(s("27Lyk").resolve("kBfVt"),import.meta.url).toString()})),s.register("cKL0p",(function(e,n){e.exports=new URL(s("27Lyk").resolve("boZwv"),import.meta.url).toString()})),s("27Lyk").register(JSON.parse('{"dZpbI":"index.4124f8d3.js","kuZ4t":"tijera.00169574.png","hqVYS":"papel.5f334517.png","h5stw":"piedra.7de8c9a2.png","lRs8l":"Star.f5db7922.png","cMkYS":"Star2.9f10fab8.png","kBfVt":"instructions.5eee7455.png","boZwv":"title.2c8bd2fa.png"}'));class i extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}connectedCallback(){}render(){const e=document.createElement("style");e.innerText="\n    .button{\n        font-family: 'Odibee Sans';\n        box-sizing: border-box;\n        min-width: 322px;\n        min-height: 87px;\n        font-size: 45px;\n        background-color: rgba(0, 108, 252, 1);\n        color: rgba(216, 252, 252, 1);\n        border: solid 10px;\n        border-color: rgba(0, 25, 151, 1);\n        border-radius: 10px;\n\n    }\n    ",this.shadow.innerHTML="\n    <style>\n      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n    </style>\n    <button class=\"button\"></button>\n    ";this.shadow.querySelector(".button").textContent=this.getAttribute("label"),this.shadow.appendChild(e)}}customElements.define("custom-button",i);class o extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}connectedCallback(){}render(){const e=document.createElement("style");e.innerText="";const n=s("ewLBD");this.shadow.innerHTML=`\n    <div>\n      <img src=${n} alt="">\n    </div>\n    `,this.shadow.appendChild(e)}}customElements.define("custom-scissor",o);class r extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}connectedCallback(){}render(){const e=document.createElement("style");e.innerText="";const n=s("iLJZL");this.shadow.innerHTML=`\n    <div>\n      <img src=${n} alt="">\n    </div>  \n    `,this.shadow.appendChild(e)}}customElements.define("custom-paper",r);class l extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}connectedCallback(){}render(){const e=document.createElement("style");e.innerText="";const n=s("4I1fB");this.shadow.innerHTML=`\n    <div>\n      <img class="img" src=${n} alt="">\n    </div>\n    `,this.shadow.appendChild(e)}}customElements.define("custom-stone",l);class c extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}connectedCallback(){}render(){const e=document.createElement("style");e.innerText="";const n=s("bjgDL");this.shadow.innerHTML=`\n    <img src=${n} alt="">\n    `,this.shadow.appendChild(e)}}customElements.define("green-star",c);class d extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=s("57u4o"),n=document.createElement("style");n.innerText="",this.shadow.innerHTML=`\n    <img src=${e} alt="">\n    `,this.shadow.appendChild(n)}}customElements.define("red-star",d);const p={data:{currentGame:{computerPlay:"",myPlay:""},history:{vos:0,maquina:0},callbacks:[]},init(){const e=localStorage.getItem("history-saved");if(!e)return console.log("Init State");this.data.history=JSON.parse(e)},setSate(e){this.data=e},getState(){return this.data},pushToHistory(e){const n=this.getState(),t=n.history.vos,a=n.history.maquina,s=this.whoWins(e.computerPlay,e.myPlay);"win"==s&&this.setSate({...n,history:{vos:t+1,maquina:a}}),"lose"==s&&this.setSate({...n,history:{vos:t,maquina:a+1}}),this.saveHistory()},saveHistory(){const e=this.getState().history;localStorage.setItem("history-saved",JSON.stringify(e))},setMove(e){this.getState().currentGame.myPlay=e},setPcMove(){const e=this.getState(),n=this.randomNumber(0,3);e.currentGame.computerPlay=["piedra","papel","tijera"][n]},randomNumber:(e,n)=>Math.floor(Math.random()*(n-e))+e,whoWins(e,n){if(1==["papel"==n&&"piedra"==e,"piedra"==n&&"tijera"==e,"tijera"==n&&"papel"==e].includes(!0))return"win";if(1==["papel"==n&&"tijera"==e,"piedra"==n&&"papel"==e,"tijera"==n&&"piedra"==e].includes(!0))return"lose";return 1==["papel"==n&&"papel"==e,"piedra"==n&&"piedra"==e,"tijera"==n&&"tijera"==e].includes(!0)?"draw":void 0}};const m=[{path:/\/instructions/,component:function(e){const n=document.createElement("div"),t=document.createElement("style"),a=s("iLJZL"),i=s("4I1fB"),o=s("ewLBD"),r=s("9wWYO");return t.innerText="\n  .page{\n    width: 100%;\n    height: 90vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  \n  .plays-container{\n    margin: 0 auto;\n    width: 270px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n  ",n.innerHTML=`\n  <style>\n    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n  </style>\n  <div class="page">\n    <div class="instructions-container">\n      <img class="instructions" src="${r}" alt="">  \n    </div>\n    <div class="button-container">\n      <custom-button label="¡Jugar!" class="button"></custom-button>\n    </div>\n    <div class="plays-container">\n      <img class="piedra" src="${i}" alt="">\n      <img class="papel" src="${a}" alt="">\n      <img class="tijera" src="${o}" alt="">\n    </div>\n  </div>\n  `,n.appendChild(t),n.querySelector(".button")?.addEventListener("click",(()=>{e.go("/game")})),n}},{path:/\/welcome/,component:function(e){const n=document.createElement("div"),t=document.createElement("style"),a=s("iLJZL"),i=s("4I1fB"),o=s("ewLBD"),r=s("cKL0p");return t.innerText="\n  .page{\n    width: 100%;\n    height: 90vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .plays-container{\n    margin: 0 auto;\n    width: 270px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  ",n.innerHTML=`\n  <style>\n    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n  </style>\n  <div class="page">\n  <div class="title-container">\n    <img class="title" src="${r}" alt="">\n  </div>\n  <div class="button-container">\n    <custom-button label="Empezar" class="button"></custom-button>\n  </div>\n  <div class="plays-container">\n    <img class="piedra" src="${i}" alt="">\n    <img class="papel" src="${a}" alt="">\n    <img class="tijera" src="${o}" alt="">\n  </div>\n  </div>\n  `,n.appendChild(t),n.querySelector(".button")?.addEventListener("click",(()=>{e.go("/instructions")})),n}},{path:/\/game/,component:function(e){const n=document.createElement("div"),t=document.createElement("style"),a=s("iLJZL"),i=s("4I1fB"),o=s("ewLBD");return t.innerText="\n  .page{\n    width: 100%;\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  @media(min-width: 767px){\n    .page{\n      padding-top: 40px;\n    }\n  }\n  \n  .plays-container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 350px;\n  }\n\n  @media(min-width: 767px){\n    .plays-container{\n      padding-top: 60px;\n    }\n  }\n  \n  .piedra{\n    width: 80px;\n    height: 185px;  \n  }\n  .papel{\n    width: 80px;\n    height: 185px;\n  }\n  .tijera{\n    width: 80px;\n    height: 185px;\n  }\n\n  @keyframes move {\n    100% {\n       transform: translate(0px, -80px);\n    }\n  }\n\n  .counter{\n    font-size: 100px;\n    font-family: 'Odibee Sans';\n  }\n\n  .counter-container{\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    width: 243px;\n    height: 243px;\n    border: solid 25px;\n    border-radius: 50%;\n  }\n  ",n.innerHTML=`\n  <style>\n      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n  </style>\n  \n  <div class="page">\n    <div class="counter-container">\n      <span class="counter"></span>\n    </div>\n    <div class="plays-container">\n      <img class="piedra" src="${i}" alt="">\n      <img class="papel" src="${a}" alt="">\n      <img class="tijera" src="${o}" alt="">\n    </div>\n  <div>\n  `,n.appendChild(t),function(){const e=n.querySelector(".piedra");e?.addEventListener("click",(()=>{e.style.animation="move 0.5s 1",e.style.animationFillMode="forwards",p.setMove("piedra"),p.setPcMove(),console.log(p.getState())}))}(),function(){const e=n.querySelector(".papel");e?.addEventListener("click",(()=>{e.style.animation="move 0.5s 1",e.style.animationFillMode="forwards",p.setMove("papel"),p.setPcMove(),console.log(p.getState())}))}(),function(){const e=n.querySelector(".tijera");e?.addEventListener("click",(()=>{e.style.animation="move 0.5s 1",e.style.animationFillMode="forwards",p.setMove("tijera"),p.setPcMove(),console.log(p.getState())}))}(),function(){const t=n.querySelector(".counter");t.textContent=5;const a=setInterval((()=>{t.textContent-=1,0==t.textContent&&clearInterval(a),0==t.textContent&&""!=p.getState().currentGame.myPlay&&e.go("/plays"),0==t.textContent&&""==p.getState().currentGame.myPlay&&e.go("/instructions")}),1e3)}(),n}},{path:/\/plays/,component:function(e){const n=document.createElement("div"),t=document.createElement("style"),a=s("iLJZL"),i=s("4I1fB"),o=s("ewLBD"),r=p.getState();return t.innerText="\n  .my-play-container{\n    display: flex;\n  }\n\n  .my-play{\n    margin: 0 auto;\n    width: 157px;\n    height: 354px;\n  }\n\n  .computer-play-container{\n    display: flex;\n    transform: rotate(180deg);\n    position: relative;\n    top: -55px;\n  }\n\n  .computer-play{\n    margin: 0 auto;\n    width: 157px;\n    height: 354px;\n  }\n  ",function(){var n=5;const t=setInterval((()=>{0==(n-=1)&&clearInterval(t),0==n&&""!=p.getState().currentGame.myPlay&&e.go("/results")}),1e3)}(),function(){if("piedra"==r.currentGame.computerPlay){const e=document.createElement("img"),t=document.createElement("div");t.className="computer-play-container",e.className="computer-play",e.src=i,t.appendChild(e),n.appendChild(t)}if("papel"==r.currentGame.computerPlay){const e=document.createElement("img"),t=document.createElement("div");t.className="computer-play-container",e.className="computer-play",e.src=a,t.appendChild(e),n.appendChild(t)}if("tijera"==r.currentGame.computerPlay){const e=document.createElement("img"),t=document.createElement("div");t.className="computer-play-container",e.className="computer-play",e.src=o,t.appendChild(e),n.appendChild(t)}if("piedra"==r.currentGame.myPlay){const e=document.createElement("img"),t=document.createElement("div");t.className="my-play-container",e.className="my-play",e.src=i,t.appendChild(e),n.appendChild(t)}if("papel"==r.currentGame.myPlay){const e=document.createElement("img"),t=document.createElement("div");t.className="my-play-container",e.className="my-play",e.src=a,t.appendChild(e),n.appendChild(t)}if("tijera"==r.currentGame.myPlay){const e=document.createElement("img"),t=document.createElement("div");t.className="my-play-container",e.className="my-play",e.src=o,t.appendChild(e),n.appendChild(t)}}(),n.appendChild(t),p.pushToHistory(r.currentGame),n}},{path:/\/results/,component:function(e){const n=p.getState(),t=document.createElement("style");t.innerText="\n  .page{\n    width: 100%;\n    height: 90vh;\n    padding-top: 30px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  @media(min-width: 767px){\n    .page{\n      height: 100vh;\n    }\n  }\n\n  .star-text{\n    margin:0 auto;\n    height: 0px;\n    width: 0px;\n    font-family: 'Odibee Sans';\n    position: relative;\n    top: 100px;\n    right: 40px;\n  }\n\n  .star{\n    width: 254px;\n    height: 254px;\n    margin: 0 auto;\n  }\n\n  .resultados-container{\n    display: flex;\n    flex-direction: column;\n    align-items:flex-end;\n    margin: 0 auto;\n    padding: 15px 0;\n    border: solid 10px;\n    border-radius: 10px;\n    max-width: 259px;\n    max-height: 217px;\n  }\n\n  .resultados-title{\n    font-family: 'Odibee Sans';\n    font-size: 55px;\n    margin: 0 auto 13px; \n  }\n\n  .resultados-player{\n    font-family: 'Odibee Sans';\n    font-size: 45px;\n    margin: 0 30px;\n  }\n\n  .button{\n    margin: 0 auto;\n  }\n  ";const a=document.createElement("div"),i=p.data.currentGame,o=p.whoWins(i.computerPlay,i.myPlay);if("win"==o){const i=function(){const a=document.createElement("div"),i=s("bjgDL");return a.innerHTML=`\n    <style>\n      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n    </style>\n    <div class="page">\n      <div>    \n        <h1 class="star-text">Ganaste</h1>\n        <img class="star" src="${i}" alt="">\n      </div> \n      <div class="resultados-container">\n        <h2 class="resultados-title">Score</h2>\n        <p class="resultados-player">Vos:${n.history.vos} </p>\n        <p class="resultados-player">Maquina:${n.history.maquina} </p>\n      </div>\n      <custom-button label="Volver a Jugar" class="button"></custom-button>\n    </div>  \n    `,a.style.backgroundColor="rgba(136, 137, 73, 0.9)",a.style.height="110vh",a.querySelector(".button")?.addEventListener("click",(()=>{e.go("/instructions"),p.getState().currentGame={computerPlay:"",myPlay:""}})),a.appendChild(t),a}();a.appendChild(i)}if("lose"==o){const i=function(){const a=document.createElement("div"),i=s("57u4o");return a.innerHTML=`\n    <style>\n      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n    </style>\n    <div class="page">\n      <div>    \n        <h1 class="star-text">Perdiste</h1>\n        <img class="star" src="${i}" alt="">\n      </div> \n      <div class="resultados-container">\n        <h2 class="resultados-title">Score</h2>\n        <p class="resultados-player">Vos:${n.history.vos} </p>\n        <p class="resultados-player">Maquina:${n.history.maquina} </p>\n      </div>\n      <custom-button label="Volver a Jugar" class="button"></custom-button>\n    </div>  \n    `,a.style.backgroundColor="rgba(137, 73, 73, 0.9)",a.style.height="110vh",a.querySelector(".button")?.addEventListener("click",(()=>{e.go("/instructions"),p.getState().currentGame={computerPlay:"",myPlay:""}})),a.appendChild(t),a}();a.appendChild(i)}if("draw"==o){const i=function(){const a=document.createElement("div"),i=s("bjgDL");return a.innerHTML=`\n    <style>\n      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\n    </style>\n    <div class="page">\n    <div>    \n      <h1 class="star-text">Empate</h1>\n      <img class="star" src="${i}" alt="">\n    </div>  \n      <div class="resultados-container">\n        <h2 class="resultados-title">Score</h2>\n        <p class="resultados-player">Vos:${n.history.vos} </p>\n        <p class="resultados-player">Maquina:${n.history.maquina} </p>\n      </div>\n      <custom-button label="Volver a Jugar" class="button"></custom-button>\n    </div>  \n    `,a.querySelector(".button")?.addEventListener("click",(()=>{e.go("/instructions"),p.getState().currentGame={computerPlay:"",myPlay:""}})),a.appendChild(t),a}();a.appendChild(i)}return a}}];function u(){return location.host.includes("ignaciobarborini.github.io")}function h(e){function n(e){const n=u()?"/desafio-m5"+e:e;history.pushState({},"",n),t(n)}function t(t){const a=u()?t.replace("/desafio-m5",""):t;for(const t of m)if(t.path.test(a)){const a=t.component({go:n});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}"/"==location.pathname||"/desafio-m5/"==location.pathname?n("/welcome"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}!function(){const e=document.querySelector(".container");p.init(),h(e)}();
//# sourceMappingURL=index.4124f8d3.js.map
