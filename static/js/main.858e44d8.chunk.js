(this["webpackJsonpwebsocket-game"]=this["webpackJsonpwebsocket-game"]||[]).push([[0],{17:function(n,e,t){n.exports=t(25)},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(12),i=t.n(a),c=(t(22),t(3)),s=t(4),l=t(7),u=t(5),d=t(6),p=t(1),f=t(2);function b(){var n=Object(p.a)(["\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  padding: 0;\n  background: #ff4655;\n  border: 1px solid #f3f3f3;\n\n  overflow: hidden;\n  cursor: pointer;\n\n  ","\n\n  &.explode {\n    ","\n  }\n\n  &:active,\n  &:focus {\n    outline: none;\n    border: 1px solid #7e7d7d;\n  }\n"]);return b=function(){return n},n}function m(){var n=Object(p.a)(["\n      ","\n    "]);return m=function(){return n},n}function g(){var n=Object(p.a)(["\n      ","\n      color: ",";\n      &::after {\n        content: '","';\n      }\n    "]);return g=function(){return n},n}function h(){var n=Object(p.a)(["\n      ","\n      &::after {\n        content: '\ud83d\udca3';\n      }\n    "]);return h=function(){return n},n}function x(){var n=Object(p.a)(["\n      &::after {\n        content: '\u2620\ufe0f';\n      }\n    "]);return x=function(){return n},n}function v(){var n=Object(p.a)(["\n  z-index: 999;\n  border: 1px solid gray;\n  box-shadow: 0 0 34px 30px rgb(255 0 0 / 40%), 0 0 34px 40px rgb(255 0 0 / 40%),\n    0 0 34px 60px rgb(255 0 0 / 40%), 0 0 34px 80px rgb(255 0 0 / 40%),\n    0 0 34px 150px rgb(255 0 0 / 40%), 0 0 34px 300px rgb(255 0 0 / 40%),\n    0 0 34px 500px rgb(255 0 0 / 40%), 0 0 34px 900px rgb(255 0 0 / 40%);\n  transition: ","s ease-in-out;\n"]);return v=function(){return n},n}var k="\n  background: #e2e1e1;\n  border-radius: 0;\n  user-select: none;\n  pointer-events: none;\n  border: 1px solid gray;\n",w=f.b.div(b(),(function(n){var e=n.content;if(n.flag)return Object(f.a)(x());var t=parseInt(e,10);if("*"===e)return Object(f.a)(h(),k);if(t){var o=1===t?"blue":2===t?"#673AB7":3===t?"green":4===t?"#b409b":"#01ab0e";return Object(f.a)(g(),k,o,e)}return 0===t?Object(f.a)(m(),k):null}),(function(n){var e=n.explodeDuration;return Object(f.a)(v(),e||"0.5")}));function O(){var n=Object(p.a)(["\n  display: grid;\n  column-gap: 0;\n  row-gap: 0;\n  font-size: 16px;\n  background: white;\n  ","\n"]);return O=function(){return n},n}function j(){var n=Object(p.a)(["\n    grid-template-rows: repeat(",", ","rem);\n    grid-template-columns: repeat(",", ","rem);\n\n    "," {\n      ","\n    }\n  "]);return j=function(){return n},n}function y(){var n=Object(p.a)(["\n      &[name='bomb']::after {\n        position: relative;\n        top: -3px !important;\n      }\n    "]);return y=function(){return n},n}function E(){var n=Object(p.a)(["\n      &::after {\n        font-size: 10px;\n        top: -8px;\n        position: relative;\n      }\n      &[name='bomb']::after {\n        font-size: 8px !important;\n        top: -8px;\n      }\n    "]);return E=function(){return n},n}var C=f.b.div(O(),(function(n){var e=n.rows,t=n.columns,o=e<=10?"2":e<=20?"1.5":"1",r=null;return e>=30?r=Object(f.a)(E()):e>=20&&(r=Object(f.a)(y())),Object(f.a)(j(),e,o,t,o,w,r)})),S=t(16),B=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))).shouldComponentUpdate=function(e){return n.props.content!==e.content||n.props.flag!==e.flag},n}return Object(s.a)(t,[{key:"render",value:function(){var n=this.props,e=n.onButtonClick,t=n.x,o=n.y,a=n.flag,i=Object(S.a)(n,["onButtonClick","x","y","flag"]);return r.a.createElement(w,Object.assign({},i,{flag:a,onClick:function(){if(!a)return e(t,o)}}))}}]),t}(r.a.Component),z=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))).flags=[],n.onButtonClick=function(e,t){n.props.onButtonClick("".concat(e," ").concat(t))},n}return Object(s.a)(t,[{key:"render",value:function(){var n=this,e=this.props,t=e.squares,o=e.gameOver;if(o&&(this.flags=[]),!t||0===t.length)return null;var a=t.length,i=0,c=t.reduce((function(e,t,a){var c=Object.assign([],t);return i||(i=c.length),e=e.concat(c.map((function(e,t){n.flags=n.flags||[],n.flags[a]=n.flags[a]||[],n.flags[a][t]=n.flags[a][t]||!1;var i="*"===e;i&&setTimeout((function(){document.getElementsByName("bomb").forEach((function(n){return n.classList.remove("explode")}))}),800);var c=n.flags[a][t];return r.a.createElement(B,{key:"".concat(a,"_").concat(t),x:t,y:a,flag:!o&&c,explodeDuration:1,name:i?"bomb":"cell",className:i?"explode":"",content:e,onButtonClick:n.onButtonClick,onContextMenu:function(e){e.preventDefault(),n.flags[a][t]=!n.flags[a][t],n.forceUpdate()}})})))}),[]);return r.a.createElement(C,{rows:a,columns:i,buttons:c},c)}}]),t}(r.a.Component);function G(){var n=Object(p.a)(["\n  font-size: 1em;\n  color: orange;\n  max-width: 250px;\n"]);return G=function(){return n},n}function L(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  h2 {\n    color: #ff4655;\n  }\n"]);return L=function(){return n},n}function M(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n"]);return M=function(){return n},n}function A(){var n=Object(p.a)(["\n  border: 1px solid #3e3e3e;\n  padding: 2px;\n  background: #3e3e3e;\n"]);return A=function(){return n},n}function N(){var n=Object(p.a)(["\n  background: #3e3e3e;\n  padding: 10px 20px;\n  border-bottom: 1px solid gray;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: ","px;\n\n  button {\n    color: #f44336;\n    font-weight: 600;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n"]);return N=function(){return n},n}function W(){var n=Object(p.a)(["\n  position: absolute;\n  right: 0;\n  padding: 10px;\n  display: flex;\n  span {\n    color: white;\n    line-height: 0.4rem;\n  }\n  .status {\n    height: 0.6rem;\n    width: 0.6rem;\n    margin-right: 3px;\n    border-radius: 50%;\n\n    &.online {\n      background: green;\n    }\n    &.offline {\n      background: red;\n    }\n  }\n"]);return W=function(){return n},n}function D(){var n=Object(p.a)(["\n  border-radius: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  padding: 6px;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #3e3e3e;\n  height: 100%;\n  -webkit-box-shadow: 1px 1px 2008px 17px rgb(255 58 74);\n  -moz-box-shadow: 1px 1px 2008px 17px rgb(255 58 74);\n  box-shadow: 1px 1px 2008px 17px rgb(255 58 74);\n"]);return D=function(){return n},n}var K=f.b.div(D()),Y=f.b.div(W()),P=f.b.div(N(),document.body.clientWidth),I=f.b.div(A()),T=f.b.div(M()),U=f.b.div(L()),q=f.b.span(G());function J(){var n=Object(p.a)(["\n  width: 100%;\n  max-width: 240px;\n  height: ",";\n  padding: 8px;\n  font-size: 0.8rem;\n  font-weight: 900;\n  color: ",";\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  box-shadow: 0 0 0 1px inset rgba(",", 0.3);\n  cursor: pointer;\n\n  &.white:hover > p {\n    color: ",";\n  }\n  &.white > p {\n    background: ",";\n    color: ",";\n    & span.base {\n      border: 1px solid transparent;\n    }\n  }\n  &.transparent:hover > p {\n    color: ",";\n    & span.text {\n      box-shadow: 0 0 0 1px ",";\n    }\n  }\n  &.transparent > p {\n    background: ",";\n    color: ",";\n    & span.base {\n      border: 1px solid ",";\n    }\n  }\n  &:after,\n  &:before {\n    content: '';\n    width: 1px;\n    position: absolute;\n    height: 8px;\n    background: ",";\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  &:before {\n    right: 0;\n    left: initial;\n  }\n  & p {\n    margin: 0;\n    height: ",";\n    line-height: ",";\n    box-sizing: border-box;\n    z-index: 1;\n    left: 0;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    & span.base {\n      box-sizing: border-box;\n      position: absolute;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      border: 1px solid ",";\n      &:before {\n        content: '';\n        width: 2px;\n        height: 2px;\n        left: -1px;\n        top: -1px;\n        background: ",";\n        position: absolute;\n        transition: ",";\n      }\n    }\n    & span.bg {\n      left: -5%;\n      position: absolute;\n      background: ",";\n      width: 0;\n      height: 100%;\n      z-index: 3;\n      transition: ",";\n      transform: skewX(-10deg);\n    }\n    & span.text {\n      z-index: 4;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      &:after {\n        content: '';\n        width: 4px;\n        height: 4px;\n        right: 0;\n        bottom: 0;\n        background: ",";\n        position: absolute;\n        transition: ",";\n        z-index: 5;\n      }\n    }\n  }\n  &:hover {\n    color: ",";\n    & span.bg {\n      width: 110%;\n    }\n    & span.text:after {\n      background: ",";\n    }\n  }\n"]);return J=function(){return n},n}var R="#0f1923",X="#ece8e1",$=f.b.div(J(),"54px","#ff4655",X,X,X,R,X,X,R,X,X,R,"54px","54px","#ff4655",R,"0.3s ease-out all","#ff4655","0.3s ease-out all",R,"0.3s ease-out all",X,X),_=function(n){var e=n.text,t=n.onButtonClick;return r.a.createElement($,{onClick:t},r.a.createElement("p",null,r.a.createElement("span",{className:"bg"}),r.a.createElement("span",{className:"base"}),r.a.createElement("span",{className:"text"},e)))},F="wss://hometask.eg1236.com/game1/",H=function(){function n(){var e=this;Object(c.a)(this,n),this.socket=null,this.debug=!0,this.onOpen=function(){e.debug&&console.log("%c you are online!","color: green")},this.onMessage=function(n){e.debug&&console.log("%cincoming message","color: blue;",n)},this.onClose=function(){e.debug&&console.log("%cbye bye","color: red")},this.disconnect=function(){e.debug&&console.log("%cdisconnecting from ".concat(F),"color: blue;"),e.socket.close()},this.send=function(n){e.debug&&console.log("%csending","color: blue;",n),e.socket.send(n)}}return Object(s.a)(n,[{key:"connect",value:function(){this.debug&&console.log("%copening connection to ".concat(F),"color: blue;"),this.socket=new WebSocket(F),this.socket.onopen=this.onOpen,this.socket.onmessage=this.onMessage,this.socket.onclose=this.onClose}},{key:"on",value:function(n,e){this.socket.addEventListener(n,e)}},{key:"un",value:function(n,e){this.socket.removeEventListener(n,e)}}]),n}(),Q=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))).currentLevel=1,n.gameStarted=!1,n.state={map:[],connectionStatus:"offline",gameOver:!1,message:""},n.componentDidMount=function(){n.connection=new H,n.connection.connect(),n.connection.on("open",n.onOpen),n.connection.on("close",n.onClose),n.connection.on("message",n.onMessage),document.addEventListener("keypress",n.handleKeyPress.bind(Object(l.a)(n)))},n.componentWillUnmount=function(){document.removeEventListener("keypress",n.handleKeyPress.bind(Object(l.a)(n)))},n.handleKeyPress=function(e){114===e.charCode&&n.startGame()},n.onOpen=function(){n.connectionTime=new Date,n.setState({connectionStatus:"online"})},n.onClose=function(){n.setState({connectionStatus:"offline"})},n.onMessage=function(e){var t=e.data,o=(t||"").split(":")[0];switch(o){case"map":n.paintMap(t);break;case"open":t.indexOf("You lose")>=0?(console.log("%c Game Over!","color: red;"),n.setState({gameOver:!0})):t.indexOf("You win")>=0&&(console.log("%c You won!","color: green;",t),n.setState({message:t.substr(6)}));break;case"help":case"new":break;default:console.log("%c warning: command not handled yet","color: orange;",o,t)}},n.paintMap=function(e){if(e.indexOf("Not started")>=0)return n.gameStarted=!1,void n.setState({map:[]});var t=e.trim().substr(5).split("\n");n.setState({map:t})},n.setLevelAndStartGame=function(e){n.currentLevel=e||"1",n.startGame()},n.startGame=function(){var e=n.currentLevel||"1";n.setState({gameOver:!1,map:[],message:""}),n.gameStarted=!0,n.connection.send("new ".concat(e)),n.connection.send("map")},n.onButtonClick=function(e){n.state.gameOver||(n.connection.send("open ".concat(e)),n.connection.send("map"))},n.exitGame=function(){n.gameStarted=!1,n.setState({map:[],gameOver:!1})},n}return Object(s.a)(t,[{key:"render",value:function(){var n=this.state,e=n.map,t=n.gameOver,o=n.connectionStatus,a=n.message;return r.a.createElement("div",null,r.a.createElement(Y,{title:"You are connected since: ".concat(this.connectionTime)},r.a.createElement("div",{className:"status ".concat(o)}),r.a.createElement("span",null,o)),r.a.createElement(T,null,this.gameStarted?r.a.createElement(K,null,r.a.createElement(P,null,r.a.createElement("button",{onClick:this.exitGame},"Main Menu"),r.a.createElement("button",{onClick:this.startGame,hidden:!t},"Restart game (Key: r)"),r.a.createElement(q,{hidden:!t,style:{color:"red"}},"Game Over!"),r.a.createElement(q,{hidden:!a},a)),r.a.createElement(I,null,r.a.createElement(z,{squares:e,onButtonClick:this.onButtonClick,gameOver:t}))):r.a.createElement(U,null,r.a.createElement("h2",null,"Welcome to this WebSocket powered Minesweeper!"),r.a.createElement("h2",null,"Pick your level to start"),r.a.createElement(_,{text:"Beginner",onButtonClick:this.setLevelAndStartGame.bind(this,"1")}),r.a.createElement(_,{text:"Intermediate",onButtonClick:this.setLevelAndStartGame.bind(this,"2")}),r.a.createElement(_,{text:"Master",onButtonClick:this.setLevelAndStartGame.bind(this,"3")}),r.a.createElement(_,{text:"King",onButtonClick:this.setLevelAndStartGame.bind(this,"4")}))))}}]),t}(r.a.Component),V=function(){return r.a.createElement(Q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.858e44d8.chunk.js.map