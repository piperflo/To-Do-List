(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"*{\n    margin: 0;\n    /*border: 2px solid red;*/\n}\nhtml, body{\n    height: 100%;\n    margin: 0;\n}\n#header{\n    display: flex;\n    font-size: 30px;\n    align-items: center;\n    padding: 20px;\n    background-image: linear-gradient(to right, rgba(143, 76, 76, 0), rgb(77, 52, 52));\n    width: 100%;\n}\n#content{\n    height: 100%;\n \n}\nspan{\n    font-size: 18px;\n}\n#body{\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    \n}\n\n#side-bar > div > img{\n    width: 20px;\n}\n\n#side-bar > div{\n    display: flex;\n    /*height: 30px;*/\n    padding: 10px;\n    gap: 10px;\n}\n#project-list > div{\n    display: flex;\n    /*height: 30px;*/\n    padding-bottom: 20px;\n    gap: 10px;\n}\n#project-list > div > img{\n    width: 20px;\n}\n.image{\n    width: 400px;\n    height: 200px;\n}\n#project-list{\n    padding: 20px;\n    gap: 15px;\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n}\n#side-bar{\n    background-color: #D8D8D8;\n    padding: 20px;\n    gap: 15px;\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n}\n\n\n.tabs:hover{\n    background-color: #bdafaf;\n    cursor: pointer;\n}\n.project:hover{\n    background-color: #886464;\n    cursor: pointer;\n}\n.modal-form{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    overflow: auto;\n    display: none;\n    align-self: flex-end;\n}\n#taskContainer{\n    display: flex;\n    flex-direction: column;\n    margin: 30px;\n    gap: 20px;\n}\n#modal-form2{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n}\nh2{\n    font-size: 50px;\n}\n#projectHeader{\n    padding-bottom: 20px;\n}\n#addTaskButton{\n    display: flex;\n    font-size: 20px;\n    justify-content: center;\n    align-items: center;\n}\n#addTaskButtonContainer{\n    display: flex;\n    font-size: 20px;\n    justify-content: center;\n    align-items: center;\n}\n#addTaskContainer{\n    display: flex;\n    align-items: center;\n    height: 50px;\n    border-radius: 10px;\n    flex-direction: row;\n}\n#taskList{\n    display: flex;\n    align-items: center;  \n    border-radius: 10px;\n    flex-direction: column;\n    gap: 20px;\n    \n}\n#addTaskContainer > img{\n    display: flex;\n    padding-right: 20px;\n    width: 25px;\n    font-weight: bold;\n}\n#addTaskContainer:hover{\n    background-color: #bdafaf;\n    cursor: pointer;\n}\n#main{\n    height: 100%;\n    display:flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\ninput{\n    height: 30px;\n}\n#projects-heading{\n    font-weight:bold;\n    font-size: 30px;\n}\n#taskList > div{\n    display: flex;\n    background-color: #D8D8D8;\n    font-size: 30px;\n    border-radius: 10px;\n    height: 60px;\n    padding-left: 10px;\n    align-items: center;\n    width: 500px;\n    justify-content:space-between;\n    \n}\n.delete{\n    width: 30px;\n}\n.buttons{\n    display: flex;\n    padding-top: 10px;\n    gap: 18px;\n}\nbutton:hover{\n    cursor: pointer;\n}\nbutton{\n    width: 80px;\n    padding: 10px;\n    border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    -ms-border-radius: 10px;\n    -o-border-radius: 10px;\n}\n\n",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var l=e[d],c=o.base?l[0]+o.base:l[0],s=a[c]||0,p="".concat(c," ").concat(s);a[c]=s+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=r(f,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var l=o(e,r),c=0;c<a.length;c++){var s=t(a[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){const n=document.createElement("div");n.setAttribute("id",e),n.setAttribute("class","project tabs");const t=document.createElement("span");t.textContent=e;const o=document.createElement("img");return o.src="../dist/images/fav.svg",n.appendChild(o),n.appendChild(t),n}function n(e){console.log("Adding a task");const n=document.createElement("div");n.setAttribute("id",e),n.textContent=e;const t=document.createElement("input");return t.setAttribute("type","radio"),t.setAttribute("name","delete"),t.setAttribute("class","delete"),t.setAttribute("value","X"),n.appendChild(t),n}var o=t(379),r=t.n(o),a=t(795),i=t.n(a),d=t(569),l=t.n(d),c=t(565),s=t.n(c),p=t(216),u=t.n(p),f=t(589),m=t.n(f),g=t(426),x={};x.styleTagTransform=m(),x.setAttributes=s(),x.insert=l().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals,document.getElementById("side-bar");const y=document.getElementById("add-project"),h=document.getElementById("add"),v=document.getElementById("cancel"),b=document.getElementsByClassName("modal-form")[0],k=document.getElementById("modal-form2"),E=document.getElementById("project-list"),I=document.getElementById("projectHeader"),C=(document.getElementById("taskList"),document.getElementById("addTaskContainer"));document.querySelectorAll(".project"),document.querySelectorAll(".project");var S,w=[],j=document.getElementById("all"),B=(document.getElementById("incomplete"),document.getElementById("complete"),{title:"",task:[]});function T(e){I.textContent=e}y.addEventListener("click",(function(e){e.preventDefault(),b.style.display="flex"})),v.addEventListener("click",(function(e){e.preventDefault(),b.style.display="none",console.log("Closed Form")})),h.addEventListener("click",(function(n){n.preventDefault();const t=document.getElementById("input").value;var o={title:t,task:[]};if(""==t)return void alert("No input");b.style.display="none",E.appendChild(e(t));document.getElementById("taskList").replaceChildren(),T(t),localStorage.setItem(t,JSON.stringify(o))})),C.addEventListener("click",(function(e){k.style.display="flex"})),j.addEventListener("click",(function(){T("All");const e=document.getElementById("taskList");Object.keys(localStorage).forEach((t=>{S=JSON.parse(localStorage.getItem(t)),w.push(t);for(let t=0;t<S.task.length;t++)e.appendChild(n(S.task[t])),console.log(S.task[t])}))})),b.style.display="none",k.style.display="none",T("Default"),Object.keys(localStorage).forEach((n=>{S=JSON.parse(localStorage.getItem(n)),w.push(n),E.appendChild(e(S.title))}));const L={...localStorage};console.log(L),document.querySelectorAll(".project").forEach((function(e){e.addEventListener("click",(function(){document.querySelectorAll(".project"),T(e.id)}))})),E.addEventListener("click",(e=>{const t=document.getElementById("taskList"),o=e.target.innerText;t.replaceChildren(),S=JSON.parse(localStorage.getItem(o)),console.log(o),console.log(e.target.innerText);for(let e=0;e<S.task.length;e++)t.appendChild(n(S.task[e]));C.addEventListener("click",T(o)),"Default"===o&&console.log("Inside default")})),main.addEventListener("click",(e=>{const t=e.target.innerText;var o=document.getElementById("projectHeader");const r=document.getElementById("taskList");if(console.log("Showing target: "+t),"Add"===t){e.preventDefault();var a=document.getElementById("addT").value;r.append(n(a)),B=JSON.parse(localStorage.getItem(o.textContent)),i=o.textContent,d=document.getElementById("addT").value,B.title=i,B.task.push(d),localStorage.setItem(i,JSON.stringify(B)),k.style.display="none"}var i,d;"Cancel"===t&&(e.preventDefault(),k.style.display="none"),e.target.checked&&function(e,n){console.log(n.task);for(var t=0;t<n.task.length;t++)if(n.task[t]===e){n.task.splice(t,1),localStorage.setItem(n.title,JSON.stringify(n)),document.getElementById(e).outerHTML="";break}}(e.target.parentNode.textContent,JSON.parse(localStorage.getItem(o.textContent)))}))})()})();