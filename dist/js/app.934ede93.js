(function(e){function t(t){for(var o,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},s={app:0},a=[];function i(e){return c.p+"js/"+({projets:"projets"}[e]||e)+"."+{projets:"1dab4dcc"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={projets:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({projets:"projets"}[e]||e)+"."+{projets:"9b33b838"}[e]+".css",s=c.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===o||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],p.parentNode.removeChild(p),n(a)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=s[e]=[t,n]}));t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}s[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"076e":function(e,t,n){"use strict";var o=n("7a23"),r={class:"footer"},s={class:"bg-gray-800 pb-6 mt-12"},a=Object(o["h"])('<h2 class="text-white text-3xl font-serif font-extrabold py-5 pb-5 px-5">Contact </h2><h3 class="text-white md:inline font-bold">Téléphone : </h3><p class="text-white md:inline"><a class="cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">+33 7 88 91 53 60</a></p><div><h3 class="text-white md:inline font-bold">E-mail : </h3><p class="text-white md:inline"><a class="cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">ngadihamza@gmail.com</a></p></div>',4),i={class:"pt-4"},c={href:"https://github.com/HamzaNGADI?tab=repositories",class:"pr-5 text-3xl md:text-4xl text-white cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none"},l={href:"https://www.linkedin.com/in/hamzangadi",class:"text-3xl md:text-4xl text-white cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none"};function u(e,t,n,u,d,p){var f=Object(o["y"])("fa");return Object(o["t"])(),Object(o["f"])("div",r,[Object(o["g"])("div",s,[a,Object(o["g"])("div",i,[Object(o["g"])("a",c,[Object(o["j"])(f,{icon:["fab","github"]})]),Object(o["g"])("a",l,[Object(o["j"])(f,{icon:["fab","linkedin"]})])])])])}var d={name:"footer",props:{}},p=n("6b0d"),f=n.n(p);const b=f()(d,[["render",u]]);t["a"]=b},"3c5b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"sticky top-0 md:px-3 md:py-2 bg-gray-900 bg-opacity-95 md:flex md:justify-between"},s={class:"flex items-center justify-between px-3 py-2 md:p-0"},a=Object(o["g"])("div",{class:"text-white"},"H.NGADI Portfolio",-1),i={class:"md:hidden"},c={class:"h-7 w-7 fill-current",viewBox:"0 0 24 24"},l={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"},u={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},d=Object(o["g"])("span",{class:"mx-1 px-1 py-1 text-white font-semibold rounded hover:bg-gray-600"}," Présentations ",-1),p=Object(o["g"])("span",{class:"mx-1 px-1 py-1 text-white font-semibold rounded hover:bg-gray-600"}," Projets ",-1);function f(e,t,n,f,b,m){var h=Object(o["y"])("router-link"),g=Object(o["y"])("router-view");return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("header",r,[Object(o["g"])("div",s,[a,Object(o["g"])("div",i,[Object(o["g"])("button",{onClick:t[0]||(t[0]=function(){return m.toogle&&m.toogle.apply(m,arguments)}),type:"button",class:"block text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"},[(Object(o["t"])(),Object(o["f"])("svg",c,[b.opening?(Object(o["t"])(),Object(o["f"])("path",l)):Object(o["e"])("",!0),b.opening?Object(o["e"])("",!0):(Object(o["t"])(),Object(o["f"])("path",u))]))])])]),Object(o["g"])("div",{class:Object(o["p"])([b.opening?"block":"hidden","px-1 pt-1 pb-3 md:flex md:p-0"])},[Object(o["j"])(h,{class:"block",to:"/"},{default:Object(o["D"])((function(){return[d]})),_:1}),Object(o["j"])(h,{class:"block mt-3 md:mt-0",to:"/projets"},{default:Object(o["D"])((function(){return[p]})),_:1})],2)]),Object(o["j"])(o["b"],{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:Object(o["D"])((function(){return[Object(o["j"])(g)]})),_:1})],64)}n("ba8c");var b={name:"App",data:function(){return{opening:!1}},methods:{toogle:function(){this.opening=!this.opening}}},m=(n("b625"),n("6b0d")),h=n.n(m);const g=h()(b,[["render",f]]);var j=g,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),x={class:"presentation"},O={class:"flex flex-col items-center"},y=Object(o["h"])('<div class="flex flex-col items-center bg-gray-800 pb-2"><h5 class="text-white text-3xl font-serif font-extrabold py-8 pb-3 px-5">Présentation du portfolio</h5><p class="text-white py-1 px-2 w-5/6 md:w-4/5 text-lg font-semibold leading-loose pb-3">Doctorant en informatique à <a class="underline hover:text-blue-400" href="https://www.univ-brest.fr/ufr-sciences">l’Université de Bretagne Occidentale de Brest</a>, sous le thème de la modélisation d’une plateforme de jumeau numérique pour les villes intelligentes.<br> Ce thème a pour but de modéliser une plateforme de jumeau numérique pour les villes intelligentes, simulant leurs environnements urbains afin de prédire d’éventuels comportements suspects ou d’étudier divers scénarios suite à des modifications sur les données des environnements.<br> Cherchant activement de nouvelles opportunités en ingénierie et développement informatique, je vous présente une sélection de mes projets et prototypes développés. </p></div><h2 class="text-3xl font-serif font-extrabold py-7 pb-5 px-5">Présentation des projets </h2><p class="py-1 px-2 w-5/6 md:w-4/5 text-lg font-semibold leading-loose"> Les projets développés varient entre des programmes desktop, des sites web dynamiques, des prototypes de jeux ou des simulations dans un environnement virtuel.<br> Ces projets, présents dans l&#39;onglet &quot;Projets&quot;, sont développés avec divers langages de programmation, Frameworks, APIs et bibliothèques qui les distinguent, ciblant plus d’autonomie en apprentissage des nouvelles technologies. </p>',3),w=["src"];function k(e,t,n,r,s,a){var i=Object(o["y"])("BR"),c=Object(o["y"])("Footer");return Object(o["t"])(),Object(o["f"])("div",x,[Object(o["g"])("div",O,[y,Object(o["j"])(i),Object(o["g"])("img",{src:s.img},null,8,w)]),Object(o["j"])(c)])}var P=n("7e95"),_=n.n(P),C=n("076e"),q={name:"Presentation",data:function(){return{img:_.a}},components:{Footer:C["a"]}};const A=h()(q,[["render",k]]);var E=A,S=[{path:"/",name:"Presentation",component:E},{path:"/projets",name:"Projets",component:function(){return n.e("projets").then(n.bind(null,"12ac"))}}],B=Object(v["a"])({history:Object(v["b"])("/"),routes:S,scrollBehavior:function(e,t,n){return{left:0,top:0}}}),D=B,T=n("5502"),z=Object(T["a"])({state:{},mutations:{},actions:{},modules:{}}),N=n("ecee"),H=n("c074"),L=n("f2d1"),M=n("ad3d");n("77ed");N["c"].add(H["a"],L["a"]),Object(o["d"])(j).component("fa",M["a"]).use(z).use(D).mount("#app")},"7e95":function(e,t,n){e.exports=n.p+"img/themain.a864e3a9.jpeg"},b625:function(e,t,n){"use strict";n("3c5b")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.934ede93.js.map