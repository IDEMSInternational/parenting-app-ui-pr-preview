(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"6foE":function(t,e,s){"use strict";s.r(e),s.d(e,"scopeCss",function(){return S});const o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),r=new RegExp("(-shadowcsscontext"+o,"gim"),n=new RegExp("(-shadowcssslotted"+o,"gim"),l=/-shadowcsshost-no-combinator([^\s]*)/,a=[/::shadow/g,/::content/g],i=/-shadowcsshost/gim,h=/:host/gim,p=/::slotted/gim,d=/:host-context/gim,u=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,f=(t,e)=>{const s=x(t);let o=0;return s.escapedString.replace(m,(...t)=>{const c=t[2];let r="",n=t[4],l="";n&&n.startsWith("{%BLOCK%")&&(r=s.blocks[o++],n=n.substring("%BLOCK%".length+1),l="{");const a=e({selector:c,content:r});return`${t[1]}${a.selector}${t[3]}${l}${a.content}${n}`})},x=t=>{const e=t.split(w),s=[],o=[];let c=0,r=[];for(let n=0;n<e.length;n++){const t=e[n];"}"===t&&c--,c>0?r.push(t):(r.length>0&&(o.push(r.join("")),s.push("%BLOCK%"),r=[]),s.push(t)),"{"===t&&c++}return r.length>0&&(o.push(r.join("")),s.push("%BLOCK%")),{escapedString:s.join(""),blocks:o}},$=(t,e,s)=>t.replace(e,(...t)=>{if(t[2]){const e=t[2].split(","),o=[];for(let c=0;c<e.length;c++){const r=e[c].trim();if(!r)break;o.push(s("-shadowcsshost-no-combinator",r,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}),_=(t,e,s)=>t+e.replace("-shadowcsshost","")+s,b=(t,e,s)=>e.indexOf("-shadowcsshost")>-1?_(t,e,s):t+e+s+", "+e+" "+t+s,O=(t,e,s,o,c)=>f(t,t=>{let c=t.selector,r=t.content;return"@"!==t.selector[0]?c=((t,e,s,o)=>t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():((t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t))(t,e)?((t,e,s)=>{const o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(t,...e)=>e[0])),c=t=>{let c=t.trim();if(!c)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)c=((t,e,s)=>{if(i.lastIndex=0,i.test(t)){const e=`.${s}`;return t.replace(l,(t,s)=>s.replace(/([^:]*)(:*)(.*)/,(t,s,o,c)=>s+e+o+c)).replace(i,e+" ")}return e+" "+t})(t,e,s);else{const e=t.replace(i,"");if(e.length>0){const t=e.match(/([^:]*)(:*)(.*)/);t&&(c=t[1]+o+t[2]+t[3])}}return c},r=(t=>{const e=[];let s,o=0;return s=(t=t.replace(/(\[[^\]]*\])/g,(t,s)=>{const c=`__ph-${o}__`;return e.push(s),o++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,s,c)=>{const r=`__ph-${o}__`;return e.push(c),o++,s+r}),{content:s,placeholders:e}})(t);let n,a="",h=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=r.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(n=p.exec(t));){const e=n[1],s=t.slice(h,n.index).trim();d=d||s.indexOf("-shadowcsshost-no-combinator")>-1,a+=`${d?c(s):s} ${e} `,h=p.lastIndex}const u=t.substring(h);return d=d||u.indexOf("-shadowcsshost-no-combinator")>-1,a+=d?c(u):u,g=r.placeholders,a.replace(/__ph-(\d+)__/g,(t,e)=>g[+e]);var g})(t,e,s).trim():t.trim()).join(", "))(t.selector,e,s,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(r=O(t.content,e,s,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:r}}),S=(t,e,s)=>{const o=e+"-h",l=e+"-s",i=t.match(g)||[];t=t.replace(u,"");const m=[];if(s){const e=t=>{const e=`/*!@___${m.length}___*/`;return m.push({placeholder:e,comment:`/*!@${t.selector}*/`}),t.selector=e+t.selector,t};t=f(t,t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=f(t.content,e),t):t)}const w=((t,e,s,o,l)=>{const i=((t,e)=>{const s="."+e+" > ",o=[];return t=t.replace(n,(...t)=>{if(t[2]){const e=t[2].trim(),c=s+e+t[3];let r="";for(let s=t[4]-1;s>=0;s--){const e=t[5][s];if("}"===e||","===e)break;r=e+r}const n=r+c,l=`${r.trimRight()}${c.trim()}`;return n.trim()!==l.trim()&&o.push({orgSelector:n,updatedSelector:`${l}, ${n}`}),c}return"-shadowcsshost-no-combinator"+t[3]}),{selectors:o,cssText:t}})(t=(t=>$(t,r,b))(t=(t=>$(t,c,_))(t=t.replace(d,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(p,"-shadowcssslotted"))),o);return t=(t=>a.reduce((t,e)=>t.replace(e," "),t))(t=i.cssText),e&&(t=O(t,e,s,o)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}})(t,e,o,l);return t=[w.cssText,...i].join("\n"),s&&m.forEach(({placeholder:e,comment:s})=>{t=t.replace(e,s)}),w.slottedSelectors.forEach(e=>{t=t.replace(e.orgSelector,e.updatedSelector)}),t}}}]);