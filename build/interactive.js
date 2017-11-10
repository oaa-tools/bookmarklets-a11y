!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,r){"use strict";function n(e){function t(e){if(e.nodeType===Node.DOCUMENT_NODE)return!0;var r=window.getComputedStyle(e,null),n=r.getPropertyValue("display"),o=r.getPropertyValue("visibility"),a=e.getAttribute("hidden"),l=e.getAttribute("aria-hidden");return"none"!==n&&"hidden"!==o&&null===a&&"true"!==l&&t(e.parentNode)}return t(e)}function o(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function a(e,t){return"function"==typeof e.closest&&t.some(function(t){return null!==e.closest(t)})}function l(e,t){var r=e.parentElement.tagName.toLowerCase();return!!r&&t.some(function(e){return r===e})}function i(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r||("optgroup"===r&&"select"===n||"datalist"===r)}function c(e){for(var t=e.split(" "),r=0;r<t.length;r++){var n=function(e){var r=t[e].toLowerCase(),n=z.find(function(e){return e===r});if(n)return{v:n}}(r);if("object"===(void 0===n?"undefined":q(n)))return n.v}return null}function u(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return c(x(e,"role"));switch(t){case"a":case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!a(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"heading";case"header":if(!a(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!O(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(l(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(i(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":case"tfoot":case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function s(e){var t=u(e);return null!==t&&void 0!==["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"].find(function(e){return e===t})}function f(e){return w(e.value)}function d(e){var t=void 0;return t=x(e,"aria-valuetext"),t.length?t:(t=x(e,"aria-valuenow"),t.length?t:f(e))}function b(e){var t=["email","password","search","tel","text","url"],r=e.tagName.toLowerCase(),n=e.type;return"input"===r&&-1!==t.indexOf(n)?f(e):"textarea"===r?f(e):""}function m(e){var t=["email","search","tel","text","url"],r=e.tagName.toLowerCase(),n=e.type;return"input"===r&&-1!==t.indexOf(n)?f(e):""}function p(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"range"===r?d(e):""}function g(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"number"===r?d(e):""}function h(e){if("select"===e.tagName.toLowerCase()){for(var t=[],r=e.selectedOptions,n=0;n<r.length;n++){var o=r[n],a=w(o.value);a.length&&t.push(a)}if(t.length)return t.join(" ")}return""}function v(e){var t=["textbox","combobox","listbox","slider","spinbutton"],r=u(e);return-1!==t.indexOf(r)}function y(e){switch(u(e)){case"textbox":return b(e);case"combobox":return m(e);case"listbox":return h(e);case"slider":return p(e);case"spinbutton":return g(e)}return""}function w(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function x(e,t){var r=e.getAttribute(t);return null===r?"":w(r)}function N(e){switch(e.tagName.toLowerCase()){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function O(e){var t=e.getAttribute("alt");return null!==t&&0===w(t).length}function E(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function L(e,t){var r=t,n=getComputedStyle(e,":before").content,o=getComputedStyle(e,":after").content;return"none"!==n&&(r=n+r),"none"!==o&&(r+=o),r}function C(e,t){var r="";if(e===t)return"";switch(e.nodeType){case Node.ELEMENT_NODE:if(N(e))r=x(e,"alt");else if(v(e))r=y(e);else if(e.hasChildNodes()){for(var n=e.childNodes,o=[],a=0;a<n.length;a++){var l=C(n[a],t);l.length&&o.push(l)}r=o.length?o.join(" "):""}r=L(e,r);break;case Node.TEXT_NODE:r=w(e.textContent)}return r}function j(e,t){var r="";if(e.hasChildNodes()){for(var n=e.childNodes,o=[],a=0;a<n.length;a++){var l=C(n[a],t);l.length&&o.push(l)}r=o.length?o.join(" "):""}return L(e,r)}function k(e,t){var r=[],n=void 0;return Array.prototype.forEach.call(e.childNodes,function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(n=j(e),n.length&&r.push(n));break;case Node.TEXT_NODE:n=w(e.textContent),n.length&&r.push(n)}}),r.length?r.join(" "):""}function A(e,t){var r=void 0;return r=x(e,t),r.length?{name:r,source:t}:null}function T(e){var t=e.getAttribute("alt");return null!==t?(t=w(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function S(e){var t=void 0;return t=j(e),t.length?{name:t,source:"contents"}:null}function I(e){return e.length?{name:e,source:"default"}:null}function M(e,t){var r=e.querySelector(t);if(r){var n=j(r);if(n.length)return{name:n,source:t+" element"}}return null}function P(e){var t=void 0,r=void 0;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'))&&(t=j(r,e),t.length)?{name:t,source:"label reference"}:"function"==typeof e.closest&&(r=e.closest("label"))&&(t=j(r,e),t.length)?{name:t,source:"label encapsulation"}:null}function F(e){var t=void 0,r=void 0;if(r=e.querySelector("summary"),r&&(t=j(r)),function(e){return e.hasAttribute("open")}(e)){if(t+=k(e,function(e){return"summary"!==e.tagName.toLowerCase()}),t.length)return{name:t,source:"contents"}}else if(t.length)return{name:t,source:"summary element"};return null}function D(e){function t(e,r){var n=e.closest("fieldset");if(n){var o=n.querySelector("legend");if(o){var a=j(o);a.length&&r.push({name:a,source:"fieldset/legend"})}t(n.parentNode,r)}}var r=[];return"function"!=typeof e.closest?r:(t(e,r),r)}function R(e){return E(e)?D(e):[]}function _(e,t){var r=e.tagName.toLowerCase(),n=u(e),o=null;if(n&&("presentation"===n||"none"===n))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(o=P(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":o=P(e),null===o&&(o=A(e,"placeholder"));break;case"button":o=A(e,"value");break;case"reset":o=A(e,"value"),null===o&&(o=I("Reset"));break;case"submit":o=A(e,"value"),null===o&&(o=I("Submit"));break;case"image":o=T(e),null===o&&(o=A(e,"value"));break;default:o=P(e)}break;case"button":case"label":o=S(e);break;case"keygen":case"meter":case"output":case"progress":case"select":o=P(e);break;case"textarea":o=P(e),null===o&&(o=A(e,"placeholder"));break;case"audio":case"embed":o={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":o=A(e,"title");break;case"img":case"area":o=T(e);break;case"object":o={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":o=M(e,"title");break;case"video":o={name:"NOT YET IMPLEMENTED",source:""};break;case"a":o=S(e);break;case"details":o=F(e);break;case"figure":o=M(e,"figcaption");break;case"table":o=M(e,"caption");break;default:(s(e)||t)&&(o=S(e))}return null===o&&(o=A(e,"title")),o}function B(e,t){var r=x(e,t),n=void 0,o=void 0,a=void 0,l=void 0,i=[];if(r.length)for(n=r.split(" "),o=0;o<n.length;o++)(a=document.getElementById(n[o]))&&(l=G(a,!0))&&l.name.length&&i.push(l.name);return i.length?{name:i.join(" "),source:t}:null}function G(e,t){var r=null;return t||(r=B(e,"aria-labelledby")),null===r&&(r=A(e,"aria-label")),null===r&&(r=_(e,t)),r}function H(e,t){var r=null;return t||(r=B(e,"aria-describedby")),null===r&&(r=A(e,"title")),r}r.d(t,"f",function(){return R}),r.d(t,"c",function(){return G}),r.d(t,"b",function(){return H}),r.d(t,"e",function(){return x}),r.d(t,"h",function(){return E}),r.d(t,"d",function(){return u}),r.d(t,"i",function(){return n}),r.d(t,"a",function(){return o}),r.d(t,"g",function(){return a});var Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q="function"==typeof Symbol&&"symbol"===Y(Symbol.iterator)?function(e){return void 0===e?"undefined":Y(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":Y(e)},z=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"]},function(e,t,r){"use strict";function n(){var e=void 0;return{x:void 0===window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,y:void 0===window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset}}function o(e,t,r){function o(t){t||(t=window.event);var r=n();e.style.left=t.clientX+r.x-f+"px",e.style.top=t.clientY+r.y-d+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",o,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",o),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var l=n(),i=r.clientX+l.x,c=r.clientY+l.y,u=e.offsetLeft,s=e.offsetTop,f=i-u,d=c-s;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",o),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),r.stopPropagation?r.stopPropagation():r.cancelBubble=!0,r.preventDefault?r.preventDefault():r.returnValue=!1}function a(){Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,r=Object(this),n=r.length>>>0,o=arguments[1],a=0;a<n;a++)if(t=r[a],e.call(o,t,a,r))return t}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})}r.d(t,"c",function(){return n}),r.d(t,"b",function(){return o}),r.d(t,"a",function(){return a})},function(e,t,r){"use strict";function n(e){var t=i.classPrefix;switch(e){case"Forms":return t+"0";case"Headings":return t+"1";case"Images":return t+"2";case"Landmarks":return t+"3";case"Lists":return t+"4";case"Interactive":return t+"5"}return"unrecognizedName"}function o(e){return i.globalPrefix+e}function a(){return i.title}function l(){return i.version}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return l});var i={};Object.defineProperty(i,"classPrefix",{value:"a11yGfdXALm"}),Object.defineProperty(i,"globalPrefix",{value:"a11y"}),Object.defineProperty(i,"title",{value:"oaa-tools/bookmarklets"}),Object.defineProperty(i,"version",{value:"0.3.0"})},function(e,t,r){"use strict";function n(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var o=Object(a.e)(e,"for");o.length&&(r+=' [for="'+o+'"]')}if(Object(a.h)(e)){var l=e.id;l&&l.length&&(r+=' [id="'+l+'"]')}if(e.hasAttribute("role")){var i=Object(a.e)(e,"role");i.length&&(r+=' [role="'+i+'"]')}return r}function o(e){var t="",r=e.title,n=e.element,o=e.grpLabels,a=e.accName,l=e.accDesc,i=e.role,c=e.props;if(t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),o&&o.length)for(var u=o.length-1;u>=0;u--)t+="\nGRP. LABEL: "+o[u].name+"\nFROM: "+o[u].source;return a&&(t+="\nACC. NAME: "+a.name+"\nFROM: "+a.source),l&&(t+="\nACC. DESC: "+l.name+"\nFROM: "+l.source),i&&(t+="\nROLE: "+i),c&&(t+="\nPROPERTIES: "+c),t}r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});var a=r(0)},function(e,t,r){"use strict";function n(){function e(e,t){return new s.a(e,"FORM INFO")}Object(d.a)();var t=[{selector:"button",color:"purple",label:"button"},{selector:"input",color:"navy",label:"input"},{selector:"keygen",color:"gray",label:"keygen"},{selector:"meter",color:"maroon",label:"meter"},{selector:"output",color:"teal",label:"output"},{selector:"progress",color:"olive",label:"progress"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"brown",label:"textarea"}],r=t.map(function(e){return"<li>"+e.selector+"</li>"}).join(""),n={appName:"Forms",cssClass:Object(f.a)("Forms"),msgText:"No form-related elements found: <ul>"+r+"</ul>",targetList:t,getInfo:e,dndFlag:!0};return new u.a(n)}function o(){function e(e,t){var r=new s.a(e,"HEADING INFO");return r.addProps("level "+t.label.substring(1)),r}Object(d.a)();var t=[{selector:"h1",color:"navy",label:"h1"},{selector:"h2",color:"olive",label:"h2"},{selector:"h3",color:"purple",label:"h3"},{selector:"h4",color:"green",label:"h4"},{selector:"h5",color:"gray",label:"h5"},{selector:"h6",color:"brown",label:"h6"}],r=t.map(function(e){return e.selector}).join(", "),n={appName:"Headings",cssClass:Object(f.a)("Headings"),msgText:"No heading elements ("+r+") found.",targetList:t,getInfo:e,dndFlag:!0};return new u.a(n)}function a(){function e(e,t){return new s.a(e,"IMAGE INFO")}Object(d.a)();var t=[{selector:"area",color:"teal",label:"area"},{selector:"img",color:"olive",label:"img"},{selector:"svg",color:"purple",label:"svg"}],r=t.map(function(e){return e.selector}).join(", "),n={appName:"Images",cssClass:Object(f.a)("Images"),msgText:"No image elements ("+r+") found.",targetList:t,getInfo:e,dndFlag:!0};return new u.a(n)}function l(){function e(e,t){return new s.a(e,"INTERACTIVE INFO")}function t(e,t){t.color=null===e.accName?"maroon":"#008080"}Object(d.a)();var r=[{selector:"a",color:"olive",label:"a"},{selector:"audio[controls]",color:"olive",label:"audio"},{selector:"button",color:"olive",label:"button"},{selector:"embed",color:"purple",label:"embed"},{selector:"iframe",color:"teal",label:"iframe"},{selector:"img[usemap]",color:"maroon",label:"img"},{selector:"input",color:"navy",label:"input"},{selector:"keygen",color:"teal",label:"keygen"},{selector:"label",color:"purple",label:"label"},{selector:"object[usemap]",color:"gray",label:"object"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"navy",label:"textarea"},{selector:"video[controls]",color:"navy",label:"video"},{selector:"meter",color:"maroon",label:"meter"},{selector:"output",color:"brown",label:"output"},{selector:"progress",color:"gray",label:"progress"},{selector:"area",color:"brown",label:"area"},{selector:"details",color:"purple",label:"details"},{selector:"svg",color:"green",label:"svg"},{selector:"[tabindex]",color:"teal",label:"tabindex"}],n=r.map(function(e){return e.selector}).join(", "),o={appName:"Interactive",cssClass:Object(f.a)("Interactive"),msgText:"No interactive elements ("+n+") found.",targetList:r,getInfo:e,evalInfo:t,dndFlag:!0};return new u.a(o)}function i(){function e(e){return"footer"!==e.tagName.toLowerCase()||!Object(b.g)(e,["article","section"])}function t(e){return"header"!==e.tagName.toLowerCase()||!Object(b.g)(e,["article","section"])}function r(e,t){return new s.a(e,"LANDMARK INFO")}Object(d.a)();var n=[{selector:'aside:not([role]), [role~="complementary"], [role~="COMPLEMENTARY"]',color:"maroon",label:"complementary"},{selector:'footer, [role~="contentinfo"], [role~="CONTENTINFO"]',filter:e,color:"olive",label:"contentinfo"},{selector:'[role~="application"], [role~="APPLICATION"]',color:"black",label:"application"},{selector:'nav, [role~="navigation"], [role~="NAVIGATION"]',color:"green",label:"navigation"},{selector:'[role~="region"][aria-labelledby], [role~="REGION"][aria-labelledby]',color:"teal",label:"region"},{selector:'[role~="region"][aria-label], [role~="REGION"][aria-label]',color:"teal",label:"region"},{selector:"section[aria-labelledby], section[aria-label]",color:"teal",label:"region"},{selector:'header, [role~="banner"], [role~="BANNER"]',filter:t,color:"gray",label:"banner"},{selector:'[role~="search"], [role~="SEARCH"]',color:"purple",label:"search"},{selector:'main, [role~="main"], [role~="MAIN"]',color:"navy",label:"main"}],o=n.map(function(e){return"<li>"+e.selector+"</li>"}).join(""),a={appName:"Landmarks",cssClass:Object(f.a)("Landmarks"),msgText:"No elements with ARIA Landmark roles found: <ul>"+o+"</ul>",targetList:n,getInfo:r,dndFlag:!0};return new u.a(a)}function c(){function e(e,t){var r=void 0;switch(t.label){case"dl":r=Object(b.a)(e,["DT","DD"]);break;case"ol":case"ul":r=Object(b.a)(e,["LI"])}var n=new s.a(e,"LIST INFO");return n.addProps(r+" items"),n}Object(d.a)();var t=[{selector:"dl",color:"olive",label:"dl"},{selector:"ol",color:"purple",label:"ol"},{selector:"ul",color:"navy",label:"ul"}],r=t.map(function(e){return e.selector}).join(", "),n={appName:"Lists",cssClass:Object(f.a)("Lists"),msgText:"No list elements ("+r+") found.",targetList:t,getInfo:e,dndFlag:!0};return new u.a(n)}t.a=n,t.b=o,t.c=a,t.d=l,t.e=i,t.f=c;var u=r(5),s=r(9),f=r(2),d=r(1),b=r(0)},function(e,t,r){"use strict";function n(e){console.log(Object(a.c)()+" : v"+Object(a.d)()+" : "+e)}function o(e){var t=this,r=Object(a.b)(e.appName);if("object"===c(window[r]))return window[r];this.appName=e.appName,this.cssClass=e.cssClass,this.msgText=e.msgText,this.params=e,this.show=!1;var o=new i.a;window.addEventListener("resize",function(e){Object(l.b)(t.cssClass),o.resize(),t.show=!1}),window[r]=this,n(this.appName)}r.d(t,"a",function(){return o});var a=r(2),l=r(6),i=r(8),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o.prototype.run=function(){var e=new i.a;e.hide(),this.show=!this.show,this.show?0===Object(l.a)(this.params)&&(e.show(this.appName,this.msgText),this.show=!1):Object(l.b)(this.cssClass)}},function(e,t,r){"use strict";function n(e){var t=e.targetList,r=e.cssClass,n=e.getInfo,o=e.evalInfo,c=e.dndFlag,u=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){if(Object(a.i)(t)){var s=n(t,e);o&&o(s,e);var f=t.getBoundingClientRect(),d=Object(i.b)(e,f,r);c&&Object(i.a)(d);d.firstChild.title=Object(l.a)(s),document.body.appendChild(d),u+=1}})}),u}function o(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){document.body.removeChild(e)})}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});var a=r(0),l=r(3),i=r(7)},function(e,t,r){"use strict";function n(e,t,r){var n=Object(a.c)(),o=document.createElement("div");o.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),o.startLeft=t.left+n.x+"px",o.startTop=t.top+n.y+"px",o.style.left=o.startLeft,o.style.top=o.startTop,o.style.width=Math.max(t.width,68)+"px",o.style.height=Math.max(t.height,27)+"px",o.style.borderColor=e.color,o.style.zIndex=l;var i=document.createElement("div");return i.setAttribute("class","oaa-overlay-label"),i.style.backgroundColor=e.color,i.innerHTML=e.label,o.appendChild(i),o}function o(e){function t(e){e.style.zIndex=l+=100}function r(e){e.style.left=e.startLeft,e.style.top=e.startTop}var n=e.firstChild;n.onmousedown=function(e){Object(a.b)(this.parentNode,t,e)},n.ondblclick=function(e){r(this.parentNode)}}r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});var a=r(1),l=1e5},function(e,t,r){"use strict";function n(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=Object(i.c)();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function o(e,t){var r=document.createElement("div"),o=document.createElement("button");return r.className=e,n(r),o.onclick=t,r.appendChild(o),document.body.appendChild(r),r}function a(e){e&&document.body.removeChild(e)}function l(){this.GLOBAL_NAME="a11yMessageDialog",this.CSS_CLASS="oaa-message-dialog"}r.d(t,"a",function(){return l});var i=r(1);l.prototype.show=function(e,t){var r=this,n=this.GLOBAL_NAME,a=void 0,l=void 0;window[n]||(window[n]=o(this.CSS_CLASS,function(e){return r.hide()})),a=document.createElement("h2"),a.innerHTML=e,window[n].appendChild(a),l=document.createElement("div"),l.innerHTML=t,window[n].appendChild(l)},l.prototype.hide=function(){var e=this.GLOBAL_NAME;window[e]&&(a(window[e]),delete window[e])},l.prototype.resize=function(){var e=this.GLOBAL_NAME;window[e]&&n(window[e])}},function(e,t,r){"use strict";function n(e,t){if(null===e||null===t)return!1;var r=e.name,n=t.name;return"string"==typeof r&&"string"==typeof n&&r.toLowerCase().includes(n.toLowerCase())}function o(e,t){this.title=t,this.element=Object(l.b)(e),this.grpLabels=Object(a.f)(e),this.accName=Object(a.c)(e),this.accDesc=Object(a.b)(e),this.role=Object(a.d)(e),n(this.accName,this.accDesc)&&(this.accDesc=null)}r.d(t,"a",function(){return o});var a=r(0),l=r(3);o.prototype.addProps=function(e){this.props=e}},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);Object(n.d)().run()}]);