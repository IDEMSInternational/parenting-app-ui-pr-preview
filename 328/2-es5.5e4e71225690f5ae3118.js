!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){a=function(e,t){return new s(e,void 0,t)};var r=i(RegExp),n=RegExp.prototype,u=new WeakMap;function s(e,t,n){var a=r.call(this,e,t);return u.set(a,n||u.get(e)),a}function c(e,t){var r=u.get(t);return Object.keys(r).reduce(function(t,n){return t[n]=e[r[n]],t},Object.create(null))}return o(s,r),s.prototype.exec=function(e){var t=n.exec.call(this,e);return t&&(t.groups=c(t,this)),t},s.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var r=u.get(this);return n[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,t){return"$"+r[t]}))}if("function"==typeof t){var a=this;return n[Symbol.replace].call(this,e,function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(c(e,a)),t.apply(this,e)})}return n[Symbol.replace].call(this,e,t)},a.apply(this,arguments)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return u(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)})(e)}function u(e,t,r){return(u=s()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&c(a,r.prototype),a}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"42Ma":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("mrSG"),a=r("iFvM"),o=r("qe0H"),i=r("JLHU"),u=r("8Y7J"),s=function(){var e=function(){function e(t){f(this,e),this.dbService=t}return d(e,[{key:"getHabitWeeklyCount",value:function(e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r,n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=new Date((new Date).getTime()-6048e5),n=0,i=Object(a.a)(o.d[0].rows,"task_id"),t.next=5,this.dbService.table("task_actions").toArray();case 5:return t.sent.forEach(function(t){var a=new Date(t._created);t._completed&&a>r&&i.hasOwnProperty(t.task_id)&&i[t.task_id].id===e&&n++}),t.abrupt("return",n);case 7:case"end":return t.stop()}},t,this)}))}},{key:"setHabitWeeklyAim",value:function(e,t){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.dbService.table("habits").put({habitId:e,weeklyAim:t},"habitId"));case 1:case"end":return r.stop()}},r,this)}))}},{key:"getHabitWeeklyAim",value:function(e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.dbService.table("habits").where("habitId").equals(e).first();case 3:if(!(r=t.sent)){t.next=6;break}return t.abrupt("return",r.weeklyAim);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.warn("No habit found for id",e,t.t0);case 11:return t.abrupt("return",null);case 12:case"end":return t.stop()}},t,this,[[0,8]])}))}},{key:"getUserHabitActivityIdeas",value:function(e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.dbService.table("habit_activity_ideas").where("flowName").equals(e).toArray();case 3:return t.abrupt("return",t.sent.map(function(e){return e.ideaTitle}));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",(console.log("No habit ideas for flow name ",e,t.t0),[]));case 9:case"end":return t.stop()}},t,this,[[0,6]])}))}},{key:"addUserHabitActivityIdea",value:function(e,t){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.abrupt("return",this.dbService.table("habit_activity_ideas").add({flowName:e,ideaTitle:t}));case 4:return r.prev=4,r.t0=r.catch(0),r.abrupt("return",void console.log("Error adding habit activity idea for flow name: ",e,r.t0));case 7:case"end":return r.stop()}},r,this,[[0,4]])}))}},{key:"deleteUserHabitActivityIdea",value:function(e,t){try{return this.dbService.table("habit_activity_ideas").where("flowName").equals(e).and(function(e){return e.ideaTitle===t}).delete()}catch(r){console.log("Could not delete habit activity idea with title ".concat(t," for flow name ").concat(e)),console.log(r)}}},{key:"markHabitOccurrence",value:function(e){try{return this.dbService.table("habit_occurrence").add({id:null,created:new Date,habitId:e})}catch(t){console.log("Could not mark habit occurrence")}}},{key:"deleteLastHabitOccurrence",value:function(e){try{return this.dbService.table("habit_occurrence").add({id:null,created:new Date,habitId:e})}catch(t){console.log("Could not mark habit occurrence")}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Vb(i.a))},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"5Lyb":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r("mrSG"),a=r("Ii2O"),o=r("sZfP"),i=r("c3dF"),u=r("8Y7J"),s=r("iInd"),c=r("sZkV"),l=function(){var e=function(){function e(t,r,n,a,o){f(this,e),this.router=t,this.localStorageService=r,this.remindersService=n,this.modalCtrl=a,this.taskActionService=o}return d(e,[{key:"logActionToDB",value:function(e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.taskActionService.recordFlowTaskAction(e);case 1:case"end":return t.stop()}},t,this)}))}},{key:"executeChatAction",value:function(e){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=(console.log("%cChatAction: ".concat(e.type),"color: #9c9c9c"),e.type),t.next="UNLOCK_TOOLBOX_TOPIC"===t.t0?3:"NAVIGATE"===t.t0?4:"FINISH_WELCOME"===t.t0?5:"CREATE_REMINDER"===t.t0?6:7;break;case 3:return t.abrupt("return",this.unlockToolboxTopic(e.params));case 4:return t.abrupt("return",this.navigate(e.params));case 5:return t.abrupt("return",this.localStorageService.setBoolean("welcome_finished",!0));case 6:return t.abrupt("return",this.createReminder(e.params));case 7:return t.abrupt("return");case 8:case"end":return t.stop()}},t,this)}))}},{key:"unlockToolboxTopic",value:function(e){console.error("TODO - toolbox unlocking")}},{key:"createReminder",value:function(e){var t=new Date,r=new Date(t.getTime()+864e5);e.due&&(r=new Date(e.due));var n={_created:t.toISOString(),_modified:t.toISOString(),due:r.toISOString(),type:e.type,complete:!1,data:{},notify:"true"===e.notify,repeats:null,notifications:[]};this.remindersService.setReminder(n)}},{key:"navigate",value:function(e){var t=this,r=e.path;e.query&&(r+="?"+e.query),e.fragment&&(r+="#"+e.fragment),this.router.navigateByUrl(r),this.modalCtrl.getTop().then(function(e){e&&t.modalCtrl.dismiss()})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Vb(s.h),u.Vb(a.a),u.Vb(o.a),u.Vb(c.G),u.Vb(i.a))},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},IHle:function(e,r,n){"use strict";n.d(r,"a",function(){return s});var o=n("mrSG"),i=n("AytR"),u=n("SAju");function s(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var n,s,f,h,d,p,m,v;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n=[],Array.isArray(e.quick_replies))n=e.quick_replies;else try{n=JSON.parse(e.quick_replies)}catch(y){n=[]}return s=function(e){for(var t,r=a(/(https?):\/\/([\.0-9A-Z\\_a-z]*)(?::?([0-9]*))(\/(?:(?![\t-\r #\?\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)?\??(?:((?:(?![\t-\r #\?\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*))?#?((?:(?![\t-\r #\?\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)?/gm,{protocol:1,domain:2,port:3,path:4,query:5,fragment:6}),n=[];t=r.exec(e);){var o={url:t[0],protocol:t.groups.protocol,domain:t.groups.domain,path:t.groups.path,query:t.groups.query,fragment:t.groups.fragment};t.groups.port&&(o.port=Number.parseInt(t.groups.port)),n.push(o)}return n}(e.message),f=(f=e.attachments?e.attachments:[]).concat(function(e){return e.filter(function(e){return e.path.startsWith("/media/attachments/")}).map(function(e){switch(/\.[a-z0-9]*$/m.exec(e.path)[0]){case".mp3":case".ogg":return"audio:"+e.url;case".mp4":case".avi":case".mkv":case".webm":return"video:"+e.url;default:return"image:"+e.url}})}(s)),r.next=6,function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e?Promise.all(e.map(function(e){return Object(o.a)(r,void 0,void 0,regeneratorRuntime.mark(function t(){var r,n,o,u,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("attachmentString",e),r=a(/([a-z]*)\/?[\+a-z]*:(.*)/gm,{type:1,url:2}).exec(e),n="other",t.t0=(console.log("results",r),r.groups.type),t.next="image"===t.t0?5:"video"===t.t0?7:"audio"===t.t0?9:11;break;case 5:return n="image",t.abrupt("break",12);case 7:return n="video",t.abrupt("break",12);case 9:return n="audio",t.abrupt("break",12);case 11:n="other";case 12:if(o=r.groups.url,u=a(/https?:\/\/([\.0-9A-Z\\_a-z]*)\/([\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]*)/,{domain:1,path:2}).exec(o)){t.next=15;break}return t.abrupt("return",(o.startsWith("assets/plh_assets/")||(o="assets/plh_assets/".concat(o)),{type:n,url:o}));case 15:if(!u.groups){t.next=31;break}if(s=u.groups.path,!i.a.domains.includes(u.groups.domain)){t.next=30;break}return t.prev=18,t.next=21,fetch(s,{method:"HEAD"});case 21:if(t.t1=t.sent.status,t.t2=200===t.t1,!t.t2){t.next=25;break}o=s;case 25:t.next=30;break;case 27:t.prev=27,t.t3=t.catch(18),console.log("HEAD request excetpion ",t.t3);case 30:return t.abrupt("return",{type:n,url:o});case 31:case"end":return t.stop()}},t,null,[[18,27]])}))})):[]);case 1:case"end":return t.stop()}},t)}))}(f);case 6:return h=r.sent,d=function(e,r){var n,a=""+e,o=t(r);try{for(o.s();!(n=o.n()).done;){var i=n.value;l(i)&&(a=a.replace(i.url,""))}}catch(u){o.e(u)}finally{o.f()}return a}(e.message,s),p=function(e){var t=e.filter(function(e){return i.a.domains.indexOf(e.domain)>-1}).filter(function(e){return i.a.chatNonNavigatePaths.findIndex(function(t){return e.path.startsWith(t)})<0}).map(function(e){return{executed:!1,type:u.a.NAVIGATE,params:e}}),r=e.filter(function(e){return e.path&&e.path.toLowerCase().startsWith("/chat/action")}).map(function(e){return c(e.query)}).filter(function(e){return e.type&&u.a[e.type]}).map(function(e){return{executed:!1,type:e.type,params:e}});return[].concat(r,t)}(s),m=n.map(function(e){return{text:e}}),v={text:d,sender:"bot",dateReceived:new Date,responseOptions:m,attachments:h,actions:p},r.abrupt("return",((v=function(e,r){var n=e.find(function(e){return e.path.startsWith("/chat/msg-info")});if(n){var a,o=c(n.query),i=t(u.b);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(o.hasOwnProperty(s.key)){var l=decodeURIComponent(o[s.key]);switch(s.type){case"boolean":r[s.key]="true"===l;break;case"float":r[s.key]=Number.parseFloat(l);break;case"integer":r[s.key]=Number.parseInt(l);break;case"array":case"object":r[s.key]=JSON.parse(l);break;default:r[s.key]=l}}}}catch(f){i.e(f)}finally{i.f()}}return r}(s,v)).choiceMediaUrls&&v.responseOptions.forEach(function(e,t){e.imageUrl="assets/plh_assets/"+v.choiceMediaUrls[t],e.hideText="media"===v.choiceMediaDisplay}),v));case 12:case"end":return r.stop()}},r)}))}function c(e){var t=new URLSearchParams(e),r={};return t.forEach(function(e,t){r[t]=e}),r}function l(e){return!!e.path.startsWith("/media/attachments/")||i.a.domains.indexOf(e.domain.toLowerCase())>-1}},Qpa5:function(r,n,a){"use strict";a.d(n,"a",function(){return S});var o=a("mrSG"),i=a("7zx7"),u=a("GJmQ"),s=a("Tesu"),c=(a("SAju"),a("zkLc")),l=a("IHle");function h(e,r){switch(e.type){case"has_only_phrase":return e.arguments[0].toLowerCase()===r.toLowerCase();case"has_any_word":return function(e,r){var n,a=[],o=t(e.arguments);try{for(o.s();!(n=o.n()).done;){var i=n.value;a=a.concat(i.toLowerCase().split(" "))}}catch(l){o.e(l)}finally{o.f()}var u,s=t(a);try{for(s.s();!(u=s.n()).done;){var c=u.value;if(r.toLowerCase()===c)return!0}}catch(l){s.e(l)}finally{s.f()}}(e,r);case"has_number_between":return function(e,t){var r=e.arguments.map(function(e){return Number.parseFloat(e)}).sort(function(e,t){return e-t}),n=Number.parseFloat(t);return NaN!==r[0]&&NaN!==r[1]&&NaN!==n&&n>r[0]&&n<r[1]}(e,r);case"has_number_gt":return function(e,t){var r=Number.parseFloat(e.arguments[0]),n=Number.parseFloat(t);return NaN!==r&&NaN!==n&&n>r}(e,r);case"has_number_lt":return function(e,t){var r=Number.parseFloat(e.arguments[0]),n=Number.parseFloat(t);return NaN!==r&&NaN!==n&&n<r}(e,r);default:return!1}}var p,m=function(){function e(t,r,n,a,i,u){var s=this;f(this,e),this.flowObject=t,this.messages$=r,this.flowStatus$=n,this.contactFieldService=a,this.botTyping$=i,this.habitService=u,this.nodesById={},this.childFlowName=null,this.running=!1,this.flowStepDelay=50,this.sendMessageDelay=1e3,this.flowResults={},this.parseMessageTemplate=function(e){return Object(o.a)(s,void 0,void 0,regeneratorRuntime.mark(function t(){var r,n,a,o,i,u,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("template",e),n=""+e,a=/@([a-z]+)\.([0-9a-zA-Z\_]+)([\.]*[0-9a-zA-Z\_]*)/gm;case 2:if(null===(r=a.exec(e))){t.next=27;break}o=r[0],i=r[1],u=r[2],s=r[3]?r[3].substring(1):null,t.t0=i,t.next="contact"===t.t0||"fields"===t.t0?7:"results"===t.t0?14:"habit"===t.t0?16:25;break;case 7:return t.t1=n,t.t2=o,t.next=11,this.contactFieldService.getContactField(u);case 11:return t.t3=t.sent,n=t.t1.replace.call(t.t1,t.t2,t.t3),t.abrupt("break",25);case 14:return n=n.replace(o,this.flowResults[u]),t.abrupt("break",25);case 16:if(t.t4="weekly_count"===s,!t.t4){t.next=25;break}return t.t5=n,t.t6=o,t.next=22,this.habitService.getHabitWeeklyCount(u);case 22:t.t7=t.sent,t.t8=""+t.t7,n=t.t5.replace.call(t.t5,t.t6,t.t8);case 25:t.next=2;break;case 27:return t.abrupt("return",n);case 28:case"end":return t.stop()}},t,this)}))},console.log("flowObject",t),this.name=t.name,this.flowObject.nodes.forEach(function(e){s.nodesById[e.uuid]=e})}return d(e,[{key:"start",value:function(){this.running?console.warn("Attempted to start flow that is already running ",this.flowObject.name,this.flowObject.uuid):(this.running=!0,this.enterNode(this.flowObject.nodes[0],null))}},{key:"continue",value:function(e){console.log("Continuing parent flow",this.flowObject.name,"child status",e),this.childFlowName=null,this.currentNode&&this.currentNode.router?this.useSwitchRouter(this.currentNode,e):this.exitWithoutRouter(this.currentNode)}},{key:"reset",value:function(){this.running=!1}},{key:"emitFlowCompletion",value:function(){var e=this.flowStatus$.getValue();e.push({uuid:this.flowObject.uuid,name:this.flowObject.name,status:"completed"}),this.running=!1,this.flowStatus$.next(e)}},{key:"enterNode",value:function(e,r){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var a,o,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.currentNode=e,console.log("Entered from ",r),console.log("Entered node id ",e),a=t(e.actions),n.prev=2,a.s();case 4:if((o=a.n()).done){n.next=10;break}return i=o.value,n.next=8,this.handleNodeAction(i,e);case 8:n.next=4;break;case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),a.e(n.t0);case 15:return n.prev=15,a.f(),n.finish(15);case 18:return n.next=20,this.wait();case 20:if(!e.router){n.next=27;break}if(n.t1=e.router.operand&&e.router.operand.indexOf("@input.")>-1,n.t1){n.next=25;break}return n.next=25,this.useRouter(e);case 25:n.next=28;break;case 27:this.exitWithoutRouter(e);case 28:case"end":return n.stop()}},n,this,[[2,12,15,18]])}))}},{key:"exitWithoutRouter",value:function(e){var t=e.exits.filter(function(e){return e.destination_uuid})[0];t?(console.log("Entered node by exiting from node with no router"),this.enterNode(this.getNodeById(t.destination_uuid),e)):(console.log("This should be flow completion"),this.emitFlowCompletion())}},{key:"handleNodeAction",value:function(e,t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var n,a,o,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=(console.log("%cAction: ".concat(e.type),"color: #9c9c9c"),e.type),r.next="enter_flow"===r.t0?3:"send_msg"===r.t0?5:"set_contact_field"===r.t0?6:"set_contact_name"===r.t0?7:8;break;case 3:return e.flow?(this.childFlowName=e.flow.name,(n=this.flowStatus$.getValue()).length>0&&n[n.length-1].name!==e.flow.name&&(a=e.flow,o=a.name,i=a.uuid,n.push({name:o,uuid:i,status:"start"}),console.log("Next on BS: child flow"),this.flowStatus$.next(n))):console.error("Action was to enter_flow however no object for which flow to enter"),r.abrupt("return");case 5:return r.abrupt("return",e.text?(this.botTyping$.next(!0),this.doSendMessageAction(e,t)):void 0);case 6:return r.abrupt("return",this.doSetContactFieldAction(e));case 7:return r.abrupt("return",this.doSetContactNameAction(e));case 8:console.warn("no node action handler for: [".concat(e.type,"]"));case 9:case"end":return r.stop()}},r,this)}))}},{key:"wait",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.flowStepDelay;return new Promise(function(t,r){setTimeout(t,e)})}},{key:"convertToVariableName",value:function(e){return e.toLowerCase().replace(" ","_")}},{key:"useUserInputRouter",value:function(e,r){if(e.router.result_name){var n=this.convertToVariableName(e.router.result_name);this.flowResults[n]=r}var a,o,i=t(e.router.cases);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(h(u,r)){a=u.category_uuid;break}}}catch(s){i.e(s)}finally{i.f()}a?this.exitUsingCategoryId(e,a):e.router.default_category_uuid?this.exitUsingCategoryId(e,e.router.default_category_uuid):console.warn("Nothing matches for node ",e.uuid)}},{key:"useSwitchRouter",value:function(e,r){var n,a,o=t(e.router.cases);try{for(o.s();!(a=o.n()).done;){var i=a.value;if(h(i,r)){n=i.category_uuid;break}}}catch(u){o.e(u)}finally{o.f()}n?this.exitUsingCategoryId(e,n):e.router.default_category_uuid?this.exitUsingCategoryId(e,e.router.default_category_uuid):console.warn("Nothing matches for node ",e.uuid)}},{key:"useRouter",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("random"!==e.router.type){t.next=4;break}this.exitAtRandom(e),t.next=12;break;case 4:if("@child.run.status"!==e.router.operand){t.next=8;break}console.log("We'll come back here later..."),t.next=12;break;case 8:return t.next=10,this.parseMessageTemplate(e.router.operand);case 10:(r=t.sent).startsWith("@")&&console.warn("Switch router operand starts with @ ",e.router.operand,"This is likely a mistake and this operand type isn't supported"),this.useSwitchRouter(e,r);case 12:case"end":return t.stop()}},t,this)}))}},{key:"exitAtRandom",value:function(e){var t=this.getRandomInt(0,e.router.categories.length-1);this.exitUsingCategoryId(e,e.router.categories[t].uuid)}},{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}},{key:"exitUsingCategoryId",value:function(e,t){var r=e.router.categories.find(function(e){return e.uuid===t}),n=e.exits.find(function(e){return e.uuid===r.exit_uuid});n.destination_uuid?(console.log("Entered node via router category ",r),this.enterNode(this.getNodeById(n.destination_uuid),e)):(console.log("Reached flow completion via router"),this.emitFlowCompletion())}},{key:"messageHasTextInput",value:function(e,t){if(e.quick_replies&&e.quick_replies.length>0)return!1;if(t.router)return"@input.text"===t.router.operand;var r=t.exits.find(function(e){return e.destination_uuid});if(r){var n=this.nodesById[r.destination_uuid];if(n.router&&"@input.text"===n.router.operand)return!0}}},{key:"doSendMessageAction",value:function(e,t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var n,a,o,i,u,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=this.messages$.getValue(),r.next=3,this.parseMessageTemplate(e.text);case 3:return a=r.sent,r.next=6,Promise.all(e.attachments.map(this.parseMessageTemplate));case 6:if(o=r.sent,i=[],r.t0=e.quick_replies&&e.quick_replies.length>0,!r.t0){r.next=13;break}return r.next=12,Promise.all(e.quick_replies.map(this.parseMessageTemplate));case 12:i=r.sent;case 13:return u={message:a,message_id:e.uuid,title:"",type:"rapidpro",quick_replies:JSON.stringify(i),attachments:o,wasTapped:!1},r.next=16,Object(l.a)(u);case 16:if((s=r.sent).showTextInput=this.messageHasTextInput(e,t),n.push(s),r.t1=s.isStory,r.t1){r.next=23;break}return r.next=23,this.wait(this.sendMessageDelay);case 23:this.messages$.next(n),this.botTyping$.next(!1);case 25:case"end":return r.stop()}},r,this)}))}},{key:"doSetContactNameAction",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.name){t.next=5;break}return t.next=3,this.parseMessageTemplate(e.name);case 3:r=t.sent,this.contactFieldService.setContactField("name",r);case 5:case"end":return t.stop()}},t,this)}))}},{key:"doSetContactFieldAction",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.field||!e.field.key){t.next=5;break}return t.next=3,this.parseMessageTemplate(e.value);case 3:r=t.sent,this.contactFieldService.setContactField(e.field.key,r);case 5:case"end":return t.stop()}},t,this)}))}},{key:"getNodeById",value:function(e){return this.nodesById[e]}},{key:"sendMessage",value:function(e){var t=this;return this.currentNode&&this.currentNode.router&&"@input.text"===this.currentNode.router.operand&&setTimeout(function(){return t.useUserInputRouter(t.currentNode,e.text)},1e3),Object(c.a)(!0)}}]),e}(),v=a("Jr/a"),y=a("qe0H"),g=a("vuwy"),b=a("5Lyb"),w=a("42Ma"),k=a("8Y7J"),x=a("IheW"),S=((p=function(){function r(e,t,n,a,o){f(this,r),this.http=e,this.contactFieldService=t,this.settingsService=n,this.chatActions=a,this.habitService=o,this.type="offline",this.rpFlowsByName={},this.flowsStack=[],this.flowStatus$=new i.a([]),this.ready$=new i.a(!1),this.messages$=new i.a([]),this.botTyping$=new i.a(!1),this.init()}return d(r,[{key:"ready",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.ready$.pipe(Object(u.a)(function(e){return!1===e})).toPromise());case 1:case"end":return e.stop()}},e,this)}))}},{key:"init",value:function(){this.loadFlowData(),this.subscribeToFlowStatusChanges(),this.ready$.next(!0)}},{key:"loadFlowData",value:function(){var e=this;y.b.forEach(function(t){t.flows.forEach(function(t){return e.rpFlowsByName[t.name]=t})})}},{key:"startFlowByName",value:function(t){this.messages$=new i.a([]);var r=this.rpFlowsByName[t];if(this.flowsStack=[],r){var n=r.name,a=r.uuid;this.flowStatus$.next([].concat(e(this.flowStatus$.value),[{name:n,uuid:a,status:"start"}]))}else console.error("flow does not exist",t,this.rpFlowsByName)}},{key:"getFlowNames",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ready();case 2:return e.abrupt("return",Object.keys(this.rpFlowsByName));case 3:case"end":return e.stop()}},e,this)}))}},{key:"sendMessage",value:function(e){if(this.flowsStack.length>0){var t=this.flowsStack[this.flowsStack.length-1];return console.log("Sending message to current flow ",e,t.name),this.chatActions.logActionToDB({flow_name:t.name,type:"new_message",meta:e}),t.sendMessage(e)}return Object(g.a)("No active flows to send a message to")}},{key:"handleFlowsEnded",value:function(){console.log("all flows have ended",this.flowsStack)}},{key:"subscribeToFlowStatusChanges",value:function(){var e=this;this.flowStatus$.subscribe(function(t){try{if(console.log("Flow status change",t),t.length>0){console.log("Flow stacks before event:",e.flowsStack.length);var r=t[t.length-1];console.log("latest status:",r.status);var n=e.rpFlowsByName[r.name];if("start"===r.status){e.chatActions.logActionToDB({flow_name:n.name,type:"started"}),console.log("%c".concat(n.name," START"),"background: white; color: green");var a=new m(n,e.messages$,e.flowStatus$,e.contactFieldService,e.botTyping$,e.habitService);e.flowsStack.push(a),e.settingsService.getUserSetting("CHAT_DELAY").subscribe(function(e){a.sendMessageDelay=Number.parseInt(e)}),a.start()}"completed"===r.status&&(e.chatActions.logActionToDB({flow_name:n.name,type:"completed"}),e.flowsStack=e.flowsStack.filter(function(e){return e.name!=n.name}),e.flowsStack.length>0?e.flowsStack[e.flowsStack.length-1].continue("completed"):e.handleFlowsEnded()),console.log("Flow stacks after event:",e.flowsStack.length)}}catch(o){console.warn("Flow status change subscribe error. This is likely an error caused by a faulty flow.",o)}})}},{key:"loadExportFile",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var n,a,o,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.http.get(e).toPromise();case 2:if((n=r.sent).flows&&n.flows.length>0){a=t(n.flows);try{for(a.s();!(o=a.n()).done;)i=o.value,this.rpFlowsByName[i.name]=i}catch(u){a.e(u)}finally{a.f()}}else console.warn("No flows in export file ",e);case 4:case"end":return r.stop()}},r,this)}))}}]),r}()).\u0275fac=function(e){return new(e||p)(k.Vb(x.a),k.Vb(v.a),k.Vb(s.a),k.Vb(b.a),k.Vb(w.a))},p.\u0275prov=k.Ib({token:p,factory:p.\u0275fac,providedIn:"root"}),p)},SAju:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a});var n=function(e){return e.UNLOCK_TOOLBOX_TOPIC="UNLOCK_TOOLBOX_TOPIC",e.NAVIGATE="NAVIGATE",e.FINISH_WELCOME="FINISH_WELCOME",e.CREATE_REMINDER="CREATE_REMINDER",e}({}),a=[{key:"character",type:"string"},{key:"isStory",type:"boolean"},{key:"choiceMediaDisplay",type:"string"},{key:"displayAsTick",type:"boolean"},{key:"tickedByDefault",type:"boolean"},{key:"choiceMediaUrls",type:"array"}]},Tesu:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n,a=r("7zx7"),o=r("Y/pK"),i=r("tUPE"),u=r("Ii2O"),s=[{id:"CHAT_DELAY",name:"Chat Message Delay",type:"number",value:"1000",options:[{name:"Slow",value:"5000"},{name:"Medium",value:"3000"},{name:"Fast",value:"1000"}]},{id:"USE_MODAL_FOR_CHAT_RESPONSES",name:"Use Modal For Chat Responses",type:"boolean",value:"false",devOnly:!0},{id:"SHOW_FLOW_NAME",name:"Show Flow Name",type:"boolean",value:"false",devOnly:!0}],c=r("8Y7J"),l=((n=function(){function e(t){var r=this;f(this,e),this.localStorageService=t,this.lsPrefix="user_settings.";var n=s.map(function(e){var n=t.getString(r.lsPrefix+e.id);return Object.assign(Object.assign({},e),{value:null===n?e.value:n})});this.userSettings$=new a.a(n)}return d(e,[{key:"getAllUserSettings",value:function(){return this.userSettings$.asObservable()}},{key:"getUserSetting",value:function(e){return this.userSettings$.pipe(Object(o.a)(function(t){var r=t.find(function(t){return t.id===e});return r?r.value:void 0}),Object(i.a)(function(e){return void 0!==e}))}},{key:"setUserSetting",value:function(e,t){this.localStorageService.setString(this.lsPrefix+e,t);var r=this.userSettings$.getValue().map(function(r){return r.id===e?Object.assign(Object.assign({},r),{value:t}):r});this.userSettings$.next(r)}}]),e}()).\u0275fac=function(e){return new(e||n)(c.Vb(u.a))},n.\u0275prov=c.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n)}}])}();