(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"8fAO":function(e,t,n){var o=n("d6US");"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,a);o.locals&&(e.exports=o.locals)},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(a=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:o+s.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=(i=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(s).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(o[s]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},"aET+":function(e,t,n){var o,a,s={},i=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=o.apply(this,arguments)),a}),r=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,l=0,d=[],u=n("9tPo");function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=s[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(b(o.parts[i],t))}else{var r=[];for(i=0;i<o.parts.length;i++)r.push(b(o.parts[i],t));s[o.id]={id:o.id,refs:1,parts:r}}}}function f(e,t){for(var n=[],o={},a=0;a<e.length;a++){var s=e[a],i=t.base?s[0]+t.base:s[0],r={css:s[1],media:s[2],sourceMap:s[3]};o[i]?o[i].parts.push(r):n.push(o[i]={id:i,parts:[r]})}return n}function g(e,t){var n=r(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=r(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,a)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),g(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,o,a,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var i=l++;n=c||(c=m(t)),o=x.bind(null,n,i,!1),a=x.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),g(e,t),t}(t),o=function(e,t,n){var o=n.css,a=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||s)&&(o=u(o));a&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([o],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}.bind(null,n,t),a=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){h(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(r=s[i.id]).refs--,o.push(r)}e&&p(f(e,t),t);for(a=0;a<o.length;a++){var r;if(0===(r=o[a]).refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete s[r.id]}}}};var w,k=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},ai4s:function(e,t,n){"use strict";const o="__canvas__demo__storage__".toUpperCase();t.a={get(e){try{return JSON.parse(window.sessionStorage.getItem(o+e.toUpperCase()+"__"))}catch(e){return null}},set(e,t){try{window.sessionStorage.setItem(o+e.toUpperCase()+"__",JSON.stringify(t))}catch(e){}}}},d6US:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}body,html{height:100%;margin:0;box-sizing:content-box}code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;padding:1em;margin:0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}",""])},i3AA:function(e,t,n){var o={"./axes":["ZF4W",1,0,17],"./axes/":["ZF4W",1,0,17],"./axes/canvas":["+jL+",1,18],"./axes/canvas/":["+jL+",1,18],"./axes/canvas/axes":["6397",1,38],"./axes/canvas/axes.ts":["6397",1,38],"./axes/canvas/grid":["sgtT",1,37],"./axes/canvas/grid.ts":["sgtT",1,37],"./axes/canvas/index":["+jL+",1,18],"./axes/canvas/index.ts":["+jL+",1,18],"./axes/index":["ZF4W",1,0,17],"./axes/index.ts":["ZF4W",1,0,17],"./clock":["sl1b",1,0,15],"./clock/":["sl1b",1,0,15],"./clock/canvas":["jJnk",1,16],"./clock/canvas/":["jJnk",1,16],"./clock/canvas/index":["jJnk",1,16],"./clock/canvas/index.ts":["jJnk",1,16],"./clock/index":["sl1b",1,0,15],"./clock/index.ts":["sl1b",1,0,15],"./collide_01":["mEuQ",1,0,13],"./collide_01/":["mEuQ",1,0,13],"./collide_01/canvas":["/Jkk",1,14],"./collide_01/canvas/":["/Jkk",1,14],"./collide_01/canvas/collide":["lLY/",1,36],"./collide_01/canvas/collide.ts":["lLY/",1,36],"./collide_01/canvas/index":["/Jkk",1,14],"./collide_01/canvas/index.ts":["/Jkk",1,14],"./collide_01/canvas/sprite":["JaKB",1,35],"./collide_01/canvas/sprite.ts":["JaKB",1,35],"./collide_01/index":["mEuQ",1,0,13],"./collide_01/index.ts":["mEuQ",1,0,13],"./collide_02":["hVpf",0,12],"./collide_02/":["hVpf",0,12],"./collide_02/canvas/collide":["PAOK",0,34],"./collide_02/canvas/collide.ts":["PAOK",0,34],"./collide_02/index":["hVpf",0,12],"./collide_02/index.ts":["hVpf",0,12],"./collide_03":["F2gT",0,11],"./collide_03/":["F2gT",0,11],"./collide_03/canvas/collide":["JS/M",0,33],"./collide_03/canvas/collide.ts":["JS/M",0,33],"./collide_03/index":["F2gT",0,11],"./collide_03/index.ts":["F2gT",0,11],"./collide_04":["C6UM",0,10],"./collide_04/":["C6UM",0,10],"./collide_04/canvas/collide":["UuTF",0,32],"./collide_04/canvas/collide.ts":["UuTF",0,32],"./collide_04/index":["C6UM",0,10],"./collide_04/index.ts":["C6UM",0,10],"./collide_05":["sy1G",0,9],"./collide_05/":["sy1G",0,9],"./collide_05/canvas/collide":["8X/g",0,31],"./collide_05/canvas/collide.ts":["8X/g",0,31],"./collide_05/index":["sy1G",0,9],"./collide_05/index.ts":["sy1G",0,9],"./cutout":["7X/A",1,0,8],"./cutout/":["7X/A",1,0,8],"./cutout/canvas/circle":["bxh+",1,30],"./cutout/canvas/circle.ts":["bxh+",1,30],"./cutout/index":["7X/A",1,0,8],"./cutout/index.ts":["7X/A",1,0,8],"./editor":["l6y/",1,0,7],"./editor/":["l6y/",1,0,7],"./editor/canvas/cursor":["w69y",1,29],"./editor/canvas/cursor.ts":["w69y",1,29],"./editor/canvas/editor":["Dd8r",1,28],"./editor/canvas/editor.ts":["Dd8r",1,28],"./editor/index":["l6y/",1,0,7],"./editor/index.ts":["l6y/",1,0,7],"./loading":["UwLk",1,6],"./loading/":["UwLk",1,6],"./loading/index":["UwLk",1,6],"./loading/index.ts":["UwLk",1,6],"./main":["BZV0",1,0,1,2],"./main/":["BZV0",1,0,1,2],"./main/index":["BZV0",1,0,1,2],"./main/index.ts":["BZV0",1,0,1,2],"./sh":["TOb9",1,0,1],"./sh/":["TOb9",1,0,1],"./sh/audio/bgm.mp3":["ctPg",0,73],"./sh/canvas":["qJqN",1,5],"./sh/canvas/":["qJqN",1,5],"./sh/canvas/apologizeCanvas":["bMxf",1,27],"./sh/canvas/apologizeCanvas.ts":["bMxf",1,27],"./sh/canvas/bgCanvas":["LGf6",1,26],"./sh/canvas/bgCanvas.ts":["LGf6",1,26],"./sh/canvas/imgCanvas":["K2/Z",1,25],"./sh/canvas/imgCanvas.ts":["K2/Z",1,25],"./sh/canvas/index":["qJqN",1,5],"./sh/canvas/index.ts":["qJqN",1,5],"./sh/canvas/loadingCanvas":["ReMq",1,24],"./sh/canvas/loadingCanvas.ts":["ReMq",1,24],"./sh/canvas/meteorCanvas":["HYut",1,23],"./sh/canvas/meteorCanvas.ts":["HYut",1,23],"./sh/canvas/star":["d4kT",1,22],"./sh/canvas/star.ts":["d4kT",1,22],"./sh/canvas/word":["QmmR",1,21],"./sh/canvas/word.ts":["QmmR",1,21],"./sh/img/1.jpg":["Q/K1",0,72],"./sh/img/10.jpg":["DoPr",0,71],"./sh/img/11.jpg":["sQL6",0,70],"./sh/img/12.jpg":["RIS0",0,69],"./sh/img/13.jpg":["e+Dm",0,68],"./sh/img/14.jpg":["70nu",0,67],"./sh/img/15.jpg":["gOSJ",0,66],"./sh/img/16.jpg":["Pcl3",0,65],"./sh/img/17.jpg":["+o/5",0,64],"./sh/img/18.jpg":["icJf",0,63],"./sh/img/19.jpg":["hWNC",0,62],"./sh/img/2.jpg":["ekPa",0,61],"./sh/img/20.jpg":["rjXB",0,60],"./sh/img/21.jpg":["4cLG",0,59],"./sh/img/22.jpg":["ow/0",0,58],"./sh/img/23.jpg":["Xg+O",0,57],"./sh/img/24.jpg":["WSPY",0,56],"./sh/img/25.jpg":["2C+m",0,55],"./sh/img/26.jpg":["rtUp",0,54],"./sh/img/27.jpg":["nQqT",0,53],"./sh/img/28.jpg":["io3w",0,52],"./sh/img/29.jpg":["o1tX",0,51],"./sh/img/3.jpg":["ePGt",0,50],"./sh/img/30.jpg":["hS7P",0,49],"./sh/img/31.jpg":["6BM6",0,48],"./sh/img/32.jpg":["uy+u",0,47],"./sh/img/33.jpg":["lWpA",0,46],"./sh/img/4.jpg":["iwPU",0,45],"./sh/img/5.jpg":["2mwZ",0,44],"./sh/img/6.jpg":["X6iU",0,43],"./sh/img/7.jpg":["Iqvv",0,42],"./sh/img/8.jpg":["9d0C",0,41],"./sh/img/9.jpg":["Rn/i",0,40],"./sh/index":["TOb9",1,0,1],"./sh/index.ts":["TOb9",1,0,1],"./shape":["dpfr",1,0,4],"./shape/":["dpfr",1,0,4],"./shape/canvas/shape":["1atV",1,20],"./shape/canvas/shape.ts":["1atV",1,20],"./shape/index":["dpfr",1,0,4],"./shape/index.ts":["dpfr",1,0,4],"./zoom":["Y14n",1,0,3],"./zoom/":["Y14n",1,0,3],"./zoom/canvas/zoom":["Anus",1,19],"./zoom/canvas/zoom.ts":["Anus",1,19],"./zoom/img/1.jpeg":["/aIi",0,39],"./zoom/index":["Y14n",1,0,3],"./zoom/index.ts":["Y14n",1,0,3]};function a(e){var t=o[e];return t?Promise.all(t.slice(2).map(n.e)).then(function(){var e=n(t[0]);return 1===t[1]?e:t[1]?Object.assign({},"object"==typeof e&&e,{default:e}):"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(o)},a.id="i3AA",e.exports=a},qVkA:function(e,t,n){"use strict";n.r(t);var o=n("ysz4");n("8fAO");!async function(){let e=Object(o.b)().module||"main";"main"===e?await Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"BZV0")):await n("i3AA")(`./${e}`)}(),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})})},ysz4:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"g",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"d",function(){return d});var o=n("ai4s");function a(){let e=window.location.search,t=Object.create(null);if(!e)return t;let n=/\?(\w+)=(\w+)/g,o=null;for(;o=n.exec(e);)t[o[1]]=o[2];return t}function s(e){let t=a();return t&&t.module===e}function i(e,t,n){let o=e.getBoundingClientRect();return{x:t-o.left*(e.width/o.width),y:n-o.top*(e.height/o.height)}}function r(e,t){return Math.random()*(t-e)+e}function c(e,t,n,o){let a=Math.abs(e-n),s=Math.abs(t-o);return Math.sqrt(Math.pow(a,2)+Math.pow(s,2))}function l(e,t){let n=Date.now(),o=null;return function(...a){let s=Date.now();s-n>t&&(window.clearTimeout(o),e.apply(null,a),n=s),window.clearTimeout(o),o=setTimeout(()=>{e.apply(null,a),n=s},t)}}const d=function(){let e=o.a.get("IS_SUPPORT_PASSIVE");if(null!=e)return e;try{let t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return o.a.set("IS_SUPPORT_PASSIVE",e),e}()}},[["qVkA",74]]]);