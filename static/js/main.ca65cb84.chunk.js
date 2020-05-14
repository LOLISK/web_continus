(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(18),c=a.n(r),s=(a(27),a(28),a(6)),m=a(7),i=a(9),o=a(8),u=a(2),E=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"MenuContainer"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"menu"},n.a.createElement("li",null,n.a.createElement(u.b,{id:"ChoiceMenu",to:"/"},"Projects")),n.a.createElement("li",null,n.a.createElement(u.b,{id:"ChoiceMenu",to:"/about"},"About")))))}}]),a}(l.Component),p=a(10);function g(e){0===e&&(document.getElementById("Tetris").style.opacity=1,document.getElementById("Rpg").style.opacity=0,document.getElementById("_42sh").style.opacity=0),1===e&&(document.getElementById("Rpg").style.opacity=1,document.getElementById("Tetris").style.opacity=0,document.getElementById("_42sh").style.opacity=0),2===e&&(document.getElementById("_42sh").style.opacity=1,document.getElementById("Tetris").style.opacity=0,document.getElementById("Rpg").style.opacity=0)}var b=function(){return n.a.createElement("div",{className:"shadow"},n.a.createElement("img",{id:"Rpg",className:"Illustration",alt:"",src:"./Illustration/rpg.png"}),n.a.createElement("img",{id:"_42sh",className:"Illustration",alt:"",src:"./Illustration/42sh.png"}),n.a.createElement("img",{id:"Tetris",className:"Illustration",alt:"",src:"./Illustration/tetris.jpg"}))},h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={which:0},e.handleEnvent=function(t){e.state.which!==t&&(e.setState({which:t}),g(t))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"home"},n.a.createElement("div",null,n.a.createElement(b,null)),n.a.createElement("ul",{className:"Projects"},n.a.createElement("li",{className:"Selection"},n.a.createElement(u.b,{to:"/Tetris",onMouseEnter:function(){return e.handleEnvent(0)},className:"ProjectTitle",id:"Tetris_id"},"Tetris")),n.a.createElement("li",{className:"Selection"},n.a.createElement(u.b,{to:"/Rpg",onMouseEnter:function(){return e.handleEnvent(1)},className:"ProjectTitle",id:"My_rpg_id"},"My_rpg")),n.a.createElement("li",{className:"Selection"},n.a.createElement(u.b,{to:"/42sh",onMouseEnter:function(){return e.handleEnvent(2)},className:"ProjectTitle",id:"42sh_id"},"42sh"))))}}]),a}(n.a.Component),d=a(21),y=a.n(d),f=function(){return n.a.createElement("div",{className:"About"},n.a.createElement("h1",null,"About Me",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("p",null,"I'm Martin Rougeron, a first-year student at EPITECH Lyon this is",n.a.createElement("a",{href:"https://github.com/MartinRougeron/"}," my github"))),n.a.createElement(y.a,{className:"LINK",style:{textDecorationSkip:0},label:"Download my resume",filename:"CV Martin Rougeron.pdf",exportFile:function(){return"My cached data"}}),n.a.createElement("h2",null,"Passions",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"Passions"},n.a.createElement("p",null,"My main passion is art, and more specifically: street-art.",n.a.createElement("br",null),n.a.createElement("br",null),"One of my favorite works of art is this Nelson Mandela portrait by C215.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{src:"./Illustration/mandela.jpg",alt:""}))),n.a.createElement("h2",null,"Skills",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",null,"C : intermediate",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",null,"Git : intermediate",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",null,"Python : Novice",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",null,"Js : Novice",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",null,"React : Novice (this website)",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("h2",null,"Experience",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",null,"1 week at Thermador Groupe where I learn how an informatic team works.",n.a.createElement("br",null)))},v=function(){return n.a.createElement("div",{className:"text"},n.a.createElement("p",null,"Error: Page does not exist!"))},N=function(){return window.scrollTo(0,0),n.a.createElement("div",{className:"Project"},n.a.createElement("div",{className:"title_project"},n.a.createElement("h1",null,"Tetris"),n.a.createElement("div",{className:"Project_text"},n.a.createElement("img",{id:"Tetris_Project",className:"Project_Illustration",alt:"",src:"./Illustration/tetris.jpg"}))),n.a.createElement("div",{className:"Project_presentation"},n.a.createElement("p",null,n.a.createElement("br",null),"The goal of this project is to recreate the Tetris game in a UNIX terminal,",n.a.createElement("br",null),n.a.createElement("br",null),"with the Gameboy version rules. we have to use ncurses.",n.a.createElement("br",null),n.a.createElement("br",null),"To play, there must be a tetriminos directory, which contains files that describe the game pieces.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{src:"./Illustration/pieces.png",alt:""})),n.a.createElement("p",null,"The goal was not only to make a full Tetris game but also to handle options.",n.a.createElement("br",null),n.a.createElement("br",null),"Such as a keys selection, gameplay options & also a debug mode"),n.a.createElement("img",{src:"./Illustration/options.png",alt:""}),n.a.createElement("p",null,"My game has almost all the features like a scoring system or a difficulty system.",n.a.createElement("br",null),n.a.createElement("br",null),"It looks like this:"),n.a.createElement("img",{src:"./Illustration/Tetris_play.gif",alt:""}),n.a.createElement("p",{className:"WhiteSpace"},"."),n.a.createElement("img",{className:"NextProject",alt:"",src:"./Illustration/rpg.png"}),n.a.createElement(u.b,{to:"/Rpg",className:"NextProject_text"},"My_rpg"),n.a.createElement("p",{className:"WhiteSpace"},".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null))),n.a.createElement("div",{className:"scroll-downs"},n.a.createElement("div",{className:"mousey"},n.a.createElement("div",{className:"scroller"}))))},w=function(){return window.scrollTo(0,0),n.a.createElement("div",{className:"Project"},n.a.createElement("div",{className:"title_project"},n.a.createElement("h1",null,"My_rpg"),n.a.createElement("div",{className:"Project_text"},n.a.createElement("img",{id:"Tetris_Project",className:"Project_Illustration",alt:"",src:"./Illustration/rpg.png"}))),n.a.createElement("div",{className:"Project_presentation"},n.a.createElement("p",null,n.a.createElement("br",null),"My_rpg is a creative project, indeed, the goal is to create a true, RPG game.",n.a.createElement("br",null),n.a.createElement("br",null),'With 3 other people, we create "Ghost of Lies". It happens in a medieval/fantasy world',n.a.createElement("br",null),n.a.createElement("br",null),"This game has a large map:",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/minimap.png",alt:""}),n.a.createElement("p",null,"It also has a dual combat system with a magic system & a melee system.",n.a.createElement("br",null)),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/attack_melee.png",alt:""}),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/fireball.png",alt:""}),n.a.createElement("p",null,"The main menu allows you to load your game or customize your character if you're new.",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/menu.png  ",alt:""}),n.a.createElement("p",null,"Also, Ghost of Lies has an inventory & a skill tree to improve your abilities.",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/Inventroy.png  ",alt:""}),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/skill tree.png  ",alt:""}),n.a.createElement("p",null,"The story is told through main quests. A quest have always 3 parts:",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",{style:{marginLeft:50}},"Talk to pnj to get the quest to get it",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/Talk to pnjs.png",alt:""}),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/quest.png",alt:""}),n.a.createElement("p",{style:{marginLeft:50}},"Do the quest",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/takedamage.png",alt:""}),n.a.createElement("p",{style:{marginLeft:50}},"Receive the quest's item or skill",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/reward.png",alt:""})),n.a.createElement("p",null,"To have a game with life we add 4 types of PNJs",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",{style:{marginLeft:50}},"Quest PNJ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/Talk to pnjs.png",alt:""}),n.a.createElement("p",{style:{marginLeft:50}},"Shop PNJ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/shop.png",alt:""})),n.a.createElement("p",{style:{marginLeft:50}},"Save pnj",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/save.png",alt:""}),n.a.createElement("p",{style:{marginLeft:50}},"Useless PNJ, his role is just to speak",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("img",{style:{marginLeft:175},className:"Rpg_illustration",src:"./Illustration/Rpg/useless.png",alt:""}),n.a.createElement("p",null,"The game has 2 main parts which are the 2 bosses"),n.a.createElement("p",null,"Triviatant which is a bullet hell boss"),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/TRiviatant.png  ",alt:""}),n.a.createElement("p",null,"Sahrotarh which is a new type of boss"),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/Boss2.png  ",alt:""}),n.a.createElement("p",null,"We also add a weather system"),n.a.createElement("img",{className:"Rpg_illustration",src:"./Illustration/Rpg/wheather.png  ",alt:""}),n.a.createElement("p",{className:"WhiteSpace"},"."),n.a.createElement("img",{className:"NextProject",alt:"",src:"./Illustration/42sh.png"}),n.a.createElement(u.b,{to:"/42sh",className:"NextProject_text"},"42sh"),n.a.createElement("p",{className:"WhiteSpace"},".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null))),n.a.createElement("div",{className:"scroll-downs"},n.a.createElement("div",{className:"mousey"},n.a.createElement("div",{className:"scroller"}))))},j=function(){return window.scrollTo(0,0),n.a.createElement("div",{className:"Project"},n.a.createElement("div",{className:"title_project"},n.a.createElement("h1",null,"42sh"),n.a.createElement("div",{className:"Project_text"},n.a.createElement("img",{id:"Tetris_Project",className:"Project_Illustration",alt:"",src:"./Illustration/42sh.png"}))),n.a.createElement("div",{className:"Project_presentation"},n.a.createElement("p",null,n.a.createElement("br",null),"42sh is a project where we have to create a complete shell with ",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 spaces and tabs,",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 $PATH and environment,",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 errors and return value,",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 redirections",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 pipes (\u2018|\u2019),",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 builtins: cd, echo, exit, setenv, unsetenv,",n.a.createElement("br",null),n.a.createElement("br",null),"\u2022 separators: \u2018;\u2019, \u2018&&\u2019, \u2018||\u2019.",n.a.createElement("br",null),n.a.createElement("br",null),"For instance, the shell should be able to execute the following command:",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{style:{marginLeft:50},src:"./Illustration/command.png",alt:""})),n.a.createElement("img",{className:"NextProject",alt:"",src:"./Illustration/tetris.jpg"}),n.a.createElement(u.b,{to:"/Tetris",className:"NextProject_text"},"Tetris"),n.a.createElement("p",{className:"WhiteSpace"},".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null),".",n.a.createElement("br",null))),n.a.createElement("div",{className:"scroll-downs"},n.a.createElement("div",{className:"mousey"},n.a.createElement("div",{className:"scroller"}))))},I=function(){return n.a.createElement(p.a,{render:function(e){var t=e.location;return n.a.createElement(p.c,{location:t},n.a.createElement(p.a,{path:"/",component:h,exact:!0}),n.a.createElement(p.a,{path:"/about",component:f}),n.a.createElement(p.a,{path:"/Tetris",component:N}),n.a.createElement(p.a,{path:"/Rpg",component:w}),n.a.createElement(p.a,{path:"/42sh",component:j}),n.a.createElement(p.a,{component:v}))}})},R=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(u.b,{to:"/",className:"Name"},n.a.createElement("p",null,"Martin Rougeron"))}}]),a}(l.Component),_=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement(E,null),n.a.createElement(R,null),n.a.createElement(I,null))}}]),a}(l.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement("div",{className:"App"},n.a.createElement(_,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var l=a.headers.get("content-type");404===a.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.ca65cb84.chunk.js.map