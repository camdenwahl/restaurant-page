(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,"body {\n    background-color: #FFC0BE;\n    margin: 0;\n    padding: 0;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n#grid-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr;\n}\n\n#flex-nav {\n    color: white;\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    background-color: #000000;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n#flex-nav h1 {\n    font-size: 40px;\n    padding-left: 10px;\n}\n\n#flex-nav h1:hover {\n    font-size: 40px;\n    padding-left: 10px;\n    color: greenyellow;\n}\n\n#flex-nav ul {\n    padding-right: 100px;\n    list-style-type: none;\n}\n\n#flex-nav ul button {\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    margin: 10px;\n}\n\n#flex-nav ul button:hover {\n    transition: 0.15s;\n    background-color: greenyellow;\n    transform: scale(1.15);\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    margin: 10px;\n}\n\n\n#middlecontent {\n    background-color: #FFC0BE;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n}\n\n#middlecontent img {\n    width: 65%;\n    border-radius: 25px;\n    box-shadow: 10px 10px #FFEBE7;\n    grid-column: 2;\n    margin-top: 10%;\n\n}\n\n#middlecontent h2 {\n    width: 100%;\n    margin-left: 15%;\n    color: #FFEBE7;\n    font-size: 50px;\n    text-shadow: 5px 2px #7F95D1;\n    grid-row: 1;\n    grid-column: 1;\n}\n\n#middlecontent p {\n    width: 70%;\n    color: black;\n    padding: 20px;\n    grid-column: 1;\n    grid-row: 1;\n    margin-top: 15%;\n    margin-left: 12%;\n    font-weight: 900;\n    font-size: 18px;\n    line-height: 25px;\n    text-align: left;\n}\n\n#menumiddlecontent {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    margin: 50px;\n}\n\n#menumiddlecontent h2 {\n    color: #FFEBE7;\n    font-size: 50px;\n    text-shadow: 5px 2px #7F95D1;\n}\n\n\n#menumiddlecontent p {\n    text-align: center;\n    width: 30%;\n}\n\n#menumiddlecontent img {\n    width: 20%;\n    border-radius: 25px;\n}\n\n#signinmiddlecontent {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n\n#signinmiddlecontent label, #signinmiddlecontent input {\n    padding: 10px;\n    margin: 10px;\n    border-radius: 25px;\n    border: none;\n}\n\n#signinmiddlecontent label {\n    color: #FFEBE7;\n    font-size: 25px;\n}\n\n#signinmiddlecontent input:hover {\n    transform: scale(1.15);\n    transition: 0.15s;\n}\n\n#signinmiddlecontent button {\n    padding: 15px;\n    width: 10%;\n    margin: 20px;\n    border-radius: 25px;\n    background-color: white;\n    border: none;\n}\n\n#signinmiddlecontent button:hover {\n    transform: scale(1.15);\n    transition: 0.15s;\n    padding: 15px;\n    width: 10%;\n    margin: 20px;\n    border-radius: 25px;\n    background-color: greenyellow;\n    border: none;\n}\n",""]);const d=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=i(m,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=t(a[o]);n[d].references--}for(var s=r(e,i),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),a=t(569),o=t.n(a),d=t(565),s=t.n(d),c=t(216),l=t.n(c),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h=["About us","Menu","Sign in"];const g=document.createElement("content");g.setAttribute("id","grid-container");const b=document.createElement("div");b.setAttribute("id","flex-nav");const v=document.createElement("h1");v.textContent="Restaurant King",v.addEventListener("click",C),b.appendChild(v);const x=document.createElement("div"),y=document.createElement("ul");for(let e=0;e<3;e++){let n=document.createElement("button"),t=document.createElement("li");t.textContent=h[e],n.addEventListener("click",C),n.appendChild(t),y.appendChild(n)}function w(){const e=document.createElement("div"),n=document.createElement("h2");n.textContent="Food that inspires.",e.appendChild(n);const t=document.createElement("img");t.setAttribute("src","images/food.jpg"),e.appendChild(t),e.setAttribute("class","middlecontent");const r=document.createElement("p");return r.textContent="Welcome to Restaurant King, where culinary dreams become a tantalizing reality! Nestled in the heart of the gastronomic scene, our restaurant is a beacon of fine dining, offering an experience that is nothing short of royal. At Restaurant King, we believe that every meal should be a feast, and every guest, a king or queen. Our majestic dining hall is adorned with elegant decor, creating a setting that invites you to dine in sheer luxury. Menu & Culinary Delights: Our expert chefs craft dishes that are a symphony of flavors, textures, and artful presentation. With a menu that spans across global cuisines, we offer a selection that satisfies every palate. From exquisite appetizers to decadent desserts, every dish is a masterpiece that pays homage to the culinary traditions we adore.",e.appendChild(r),e.setAttribute("id","middlecontent"),g.appendChild(b),g.appendChild(e),g}function C(e){document.querySelector(".middlecontent").remove();let n=e.target.textContent;console.log(n),"Menu"===n?function(){let e=["King's Crown Steak:","Queen's Bounty Seafood Platter:","Knight's Armor Pasta","Duchess's Delight Salad:","Royal Banquet Dessert Tower:"],n=["A majestic cut of prime rib-eye steak, grilled to perfection and served with a crown of roasted garlic and herb-infused butter. Accompanied by truffled mashed potatoes and seasonal grilled vegetables, this dish is a tribute to the finest in carnivorous delights.","A lavish spread of the ocean's finest treasures including lobster tails, jumbo shrimp, oysters, and seared scallops. Served on a bed of saffron-infused risotto and accompanied by a tangy lemon-caper sauce, this dish is a celebration of seafood opulence.","Hand-crafted pappardelle pasta intertwined with wild mushrooms, roasted chestnuts, and tender pieces of braised short rib. Finished with a rich burgundy wine reduction and garnished with shaved Parmigiano-Reggiano, this dish is a comforting embrace in a luxurious setting.","A delicate and refreshing salad made from baby spinach, candied pecans, fresh berries, and crumbled goat cheese. Drizzled with a champagne vinaigrette and garnished with edible flowers, this salad is a light and sophisticated choice for the health-conscious diner.","A breathtaking tower of sweetness that includes mini tiramisus, chocolate truffles, berry tartlets, and gold-dusted macarons. Served with a side of rich raspberry coulis and freshly whipped cream, this dessert is a magnificent conclusion to a meal fit for royalty."],t=["images/steak.jpg","images/seafood.jpg","images/pasta.jpg","images/salad.jpg","images/dessert.jpg"],r=document.getElementById("grid-container"),i=document.createElement("div");i.setAttribute("id","menumiddlecontent"),i.setAttribute("class","middlecontent");for(let r=0;r<5;r++){let a=document.createElement("h2");a.textContent=e[r];let o=document.createElement("img");o.setAttribute("src",`/restaurant-page/${t[r]}`);let d=document.createElement("p");d.textContent=n[r],i.appendChild(a),i.appendChild(o),i.appendChild(d)}r.appendChild(i)}():"About us"===n?w():"Sign in"===n?function(){let e=document.getElementById("grid-container"),n=document.createElement("div");n.setAttribute("id","signinmiddlecontent");let t=["Email","Password","Confirm Password"];n.setAttribute("class","middlecontent");for(let e=0;e<3;e++){let r=document.createElement("label");r.textContent=t[e],n.appendChild(r);let i=document.createElement("input");n.appendChild(i)}let r=document.createElement("button");r.textContent="Submit",n.appendChild(r),e.appendChild(n)}():"Restaurant King"===n&&w()}x.appendChild(y),b.appendChild(x),document.body.appendChild(w())})()})();