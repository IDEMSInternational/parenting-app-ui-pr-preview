!function(){function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{GvPW:function(r,e,n){"use strict";n.r(e),n.d(e,"scopeCss",function(){return O});var o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),s=new RegExp("(-shadowcsscontext"+o,"gim"),a=new RegExp("(-shadowcssslotted"+o,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],l=/-shadowcsshost/gim,h=/:host/gim,f=/::slotted/gim,p=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,r){var e=b(t),n=0;return e.escapedString.replace(m,function(){var t=arguments.length<=2?void 0:arguments[2],o="",c=arguments.length<=4?void 0:arguments[4],s="";c&&c.startsWith("{%BLOCK%")&&(o=e.blocks[n++],c=c.substring("%BLOCK%".length+1),s="{");var a=r({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(a.content).concat(c)})},b=function(t){for(var r=t.split(v),e=[],n=[],o=0,c=[],s=0;s<r.length;s++){var a=r[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(n.push(c.join("")),e.push("%BLOCK%"),c=[]),e.push(a)),"{"===a&&o++}return c.length>0&&(n.push(c.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},x=function(t,r,e){return t.replace(r,function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r[2]){for(var o=r[2].split(","),c=[],s=0;s<o.length;s++){var a=o[s].trim();if(!a)break;c.push(e("-shadowcsshost-no-combinator",a,r[3]))}return c.join(",")}return"-shadowcsshost-no-combinator"+r[3]})},_=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},y=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?_(t,r,e):t+r+e+", "+r+" "+t+e},S=function t(r,e,n,o,c){return w(r,function(r){var c=r.selector,s=r.content;return"@"!==r.selector[0]?c=function(t,r,e,n){return t.split(",").map(function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)}(t,r)?function(t,r,e){for(var n,o="."+(r=r.replace(/\[is=([^\]]*)\]/g,function(t){return arguments.length<=1?void 0:arguments[1]})),c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,r,e){if(l.lastIndex=0,l.test(t)){var n=".".concat(e);return t.replace(i,function(t,r){return r.replace(/([^:]*)(:*)(.*)/,function(t,r,e,o){return r+n+e+o})}).replace(l,n+" ")}return r+" "+t}(t,r,e);else{var c=t.replace(l,"");if(c.length>0){var s=c.match(/([^:]*)(:*)(.*)/);s&&(n=s[1]+o+s[2]+s[3])}}return n},s=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,function(t,n){var o="__ph-".concat(e,"__");return r.push(n),e++,o})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,n,o){var c="__ph-".concat(e,"__");return r.push(o),e++,n+c}),placeholders:r}}(t),a="",u=0,h=/( |>|\+|~(?!=))\s*/g,f=!((t=s.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=h.exec(t));){var p=n[1],d=t.slice(u,n.index).trim();f=f||d.indexOf("-shadowcsshost-no-combinator")>-1,a+="".concat(f?c(d):d," ").concat(p," "),u=h.lastIndex}var g,m=t.substring(u);return a+=(f=f||m.indexOf("-shadowcsshost-no-combinator")>-1)?c(m):m,g=s.placeholders,a.replace(/__ph-(\d+)__/g,function(t,r){return g[+r]})}(t,r,e).trim():t.trim()}).join(", ")}(r.selector,e,n,o):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(s=t(r.content,e,n,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:s}})},O=function(r,e,n){var o=e+"-h",i=e+"-s",l=r.match(g)||[];r=r.replace(d,"");var m=[];if(n){var v=function(t){var r="/*!@___".concat(m.length,"___*/");return m.push({placeholder:r,comment:"/*!@".concat(t.selector,"*/")}),t.selector=r+t.selector,t};r=w(r,function(t){return"@"!==t.selector[0]?v(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,v),t):t})}var b=function(t,r,e,n,o){var i=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(a,function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];if(r[2]){for(var c=r[2].trim(),s=e+c+r[3],a="",i=r[4]-1;i>=0;i--){var u=r[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,h="".concat(a.trimRight()).concat(s.trim());return l.trim()!==h.trim()&&n.push({orgSelector:l,updatedSelector:"".concat(h,", ").concat(l)}),s}return"-shadowcsshost-no-combinator"+r[3]}),{selectors:n,cssText:t}}(t=function(t){return x(t,s,y)}(t=function(t){return x(t,c,_)}(t=t.replace(p,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(f,"-shadowcssslotted"))),n);return t=function(t){return u.reduce(function(t,r){return t.replace(r," ")},t)}(t=i.cssText),r&&(t=S(t,r,e,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(e))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}}(r,e,o,i);return r=[b.cssText].concat(t(l)).join("\n"),n&&m.forEach(function(t){var e=t.placeholder,n=t.comment;r=r.replace(e,n)}),b.slottedSelectors.forEach(function(t){r=r.replace(t.orgSelector,t.updatedSelector)}),r}}}])}();