!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"wbe+":function(t,a,l){"use strict";l.r(a),l.d(a,"TemplateTestingPageModule",function(){return O});var i=l("SVse"),c=l("s7LF"),o=l("sZkV"),r=l("iInd"),s=l("qe0H"),p=l("8Y7J"),u=l("lptf");function f(e,t){if(1&e&&(p.Rb(0,"div",3),p.Nb(1,"plh-tmpl-comp",4),p.Qb()),2&e){var n=t.$implicit,a=p.cc();p.Ab(1),p.ic("row",n)("template",a._template)("localVariables",a.localVariables)}}function m(e,t){if(1&e&&(p.Rb(0,"li"),p.Ac(1),p.Qb()),2&e){var n=t.$implicit,a=p.cc();p.Ab(1),p.Dc("",n,": ",a.localVariables[n],"")}}var b,h=((b=function(){function t(n){e(this,t),this.cdRef=n,this.localVariables={}}return n(t,[{key:"keys",value:function(e){return e?Object.keys(e):[]}},{key:"template",set:function(e){var t=this;e._setLocalVariable=function(e,n){t.localVariables=Object.assign(Object.assign({},t.localVariables),function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,n))},this._template=e}}]),t}()).\u0275fac=function(e){return new(e||b)(p.Mb(p.i))},b.\u0275cmp=p.Gb({type:b,selectors:[["plh-template-container"]],inputs:{template:"template"},decls:6,vars:3,consts:[[3,"className"],["class","row",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"row"],[3,"row","template","localVariables"]],template:function(e,t){1&e&&(p.Rb(0,"div",0),p.yc(1,f,2,3,"div",1),p.Rb(2,"h4"),p.Ac(3,"Local Variables"),p.Qb(),p.Rb(4,"ul"),p.yc(5,m,2,2,"li",2),p.Qb(),p.Qb()),2&e&&(p.ic("className","template-container "+(null==t.localVariables?null:t.localVariables.theme_name)),p.Ab(1),p.ic("ngForOf",null==t._template?null:t._template.rows),p.Ab(4),p.ic("ngForOf",t.keys(t.localVariables)))},directives:[i.k,u.a],styles:[".template-container[_ngcontent-%COMP%]{width:100%;height:100%}.template-container.passive[_ngcontent-%COMP%]{background-color:var(--theme-var-templatePassiveBg,#e3f4ff)}.template-container.active[_ngcontent-%COMP%]{background-color:var(--theme-var-templateActiveBg,#fff6d6)}"]}),b);function v(e,t){if(1&e&&p.Nb(0,"plh-template-container",1),2&e){var n=p.cc();p.ic("template",n.testTemplate)}}var g,d,w,y=[{path:":templateName",component:(g=function(){function t(n){e(this,t),this.route=n}return n(t,[{key:"ngOnInit",value:function(){var e=this,t=s.k.find(function(t){return t.flow_name===e.route.snapshot.params.templateName});t?(this.testTemplate=t,console.log("Matched template",this.testTemplate)):(this.testTemplate=s.k[1],console.log("Default template",this.testTemplate))}}]),t}(),g.\u0275fac=function(e){return new(e||g)(p.Mb(r.a))},g.\u0275cmp=p.Gb({type:g,selectors:[["plh-template-testing"]],decls:2,vars:1,consts:[[3,"template",4,"ngIf"],[3,"template"]],template:function(e,t){1&e&&(p.Rb(0,"ion-content"),p.yc(1,v,1,1,"plh-template-container",0),p.Qb()),2&e&&(p.Ab(1),p.ic("ngIf",t.testTemplate))},directives:[o.j,i.l,h],styles:[""]}),g)}],k=((d=function t(){e(this,t)}).\u0275mod=p.Kb({type:d}),d.\u0275inj=p.Jb({factory:function(e){return new(e||d)},imports:[[r.j.forChild(y)],r.j]}),d),V=l("zvin"),O=((w=function t(){e(this,t)}).\u0275mod=p.Kb({type:w}),w.\u0275inj=p.Jb({factory:function(e){return new(e||w)},imports:[[i.c,c.b,o.D,k,V.a]]}),w)}}])}();