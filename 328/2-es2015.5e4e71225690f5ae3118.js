(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"42Ma":function(e,t,o){"use strict";o.d(t,"a",function(){return c});var s=o("mrSG"),i=o("iFvM"),a=o("qe0H"),r=o("JLHU"),n=o("8Y7J");let c=(()=>{class e{constructor(e){this.dbService=e}getHabitWeeklyCount(e){return Object(s.a)(this,void 0,void 0,function*(){const t=new Date((new Date).getTime()-6048e5);let o=0;const s=Object(i.a)(a.d[0].rows,"task_id");return(yield this.dbService.table("task_actions").toArray()).forEach(i=>{const a=new Date(i._created);i._completed&&a>t&&s.hasOwnProperty(i.task_id)&&s[i.task_id].id===e&&o++}),o})}setHabitWeeklyAim(e,t){return Object(s.a)(this,void 0,void 0,function*(){return this.dbService.table("habits").put({habitId:e,weeklyAim:t},"habitId")})}getHabitWeeklyAim(e){return Object(s.a)(this,void 0,void 0,function*(){try{const t=yield this.dbService.table("habits").where("habitId").equals(e).first();if(t)return t.weeklyAim}catch(t){console.warn("No habit found for id",e,t)}return null})}getUserHabitActivityIdeas(e){return Object(s.a)(this,void 0,void 0,function*(){try{return(yield this.dbService.table("habit_activity_ideas").where("flowName").equals(e).toArray()).map(e=>e.ideaTitle)}catch(t){return console.log("No habit ideas for flow name ",e,t),[]}})}addUserHabitActivityIdea(e,t){return Object(s.a)(this,void 0,void 0,function*(){try{return this.dbService.table("habit_activity_ideas").add({flowName:e,ideaTitle:t})}catch(o){return void console.log("Error adding habit activity idea for flow name: ",e,o)}})}deleteUserHabitActivityIdea(e,t){try{return this.dbService.table("habit_activity_ideas").where("flowName").equals(e).and(e=>e.ideaTitle===t).delete()}catch(o){console.log(`Could not delete habit activity idea with title ${t} for flow name ${e}`),console.log(o)}}markHabitOccurrence(e){try{return this.dbService.table("habit_occurrence").add({id:null,created:new Date,habitId:e})}catch(t){console.log("Could not mark habit occurrence")}}deleteLastHabitOccurrence(e){try{return this.dbService.table("habit_occurrence").add({id:null,created:new Date,habitId:e})}catch(t){console.log("Could not mark habit occurrence")}}}return e.\u0275fac=function(t){return new(t||e)(n.Vb(r.a))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"5Lyb":function(e,t,o){"use strict";o.d(t,"a",function(){return u});var s=o("mrSG"),i=o("Ii2O"),a=o("sZfP"),r=o("c3dF"),n=o("8Y7J"),c=o("iInd"),l=o("sZkV");let u=(()=>{class e{constructor(e,t,o,s,i){this.router=e,this.localStorageService=t,this.remindersService=o,this.modalCtrl=s,this.taskActionService=i}logActionToDB(e){return Object(s.a)(this,void 0,void 0,function*(){this.taskActionService.recordFlowTaskAction(e)})}executeChatAction(e){return Object(s.a)(this,void 0,void 0,function*(){switch(console.log(`%cChatAction: ${e.type}`,"color: #9c9c9c"),e.type){case"UNLOCK_TOOLBOX_TOPIC":return this.unlockToolboxTopic(e.params);case"NAVIGATE":return this.navigate(e.params);case"FINISH_WELCOME":return this.localStorageService.setBoolean("welcome_finished",!0);case"CREATE_REMINDER":return this.createReminder(e.params);default:return}})}unlockToolboxTopic(e){console.error("TODO - toolbox unlocking")}createReminder(e){const t=new Date;let o=new Date(t.getTime()+864e5);e.due&&(o=new Date(e.due));const s={_created:t.toISOString(),_modified:t.toISOString(),due:o.toISOString(),type:e.type,complete:!1,data:{},notify:"true"===e.notify,repeats:null,notifications:[]};this.remindersService.setReminder(s)}navigate(e){let t=e.path;e.query&&(t+="?"+e.query),e.fragment&&(t+="#"+e.fragment),this.router.navigateByUrl(t),this.modalCtrl.getTop().then(e=>{e&&this.modalCtrl.dismiss()})}}return e.\u0275fac=function(t){return new(t||e)(n.Vb(c.h),n.Vb(i.a),n.Vb(a.a),n.Vb(l.G),n.Vb(r.a))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},IHle:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var s=o("mrSG"),i=o("AytR"),a=o("SAju");function r(e){return Object(s.a)(this,void 0,void 0,function*(){let t=[];if(Array.isArray(e.quick_replies))t=e.quick_replies;else try{t=JSON.parse(e.quick_replies)}catch(p){t=[]}let o=function(e){let t=/(?<protocol>http[s]?):\/\/(?<domain>[a-zA-Z0-9\.\-\_]*)(?:[\:]?(?<port>[0-9]*))(?<path>\/[^?#\s]*)?[\?]?(?:(?<query>[^?#\s]*))?[#]?(?<fragment>[^?#\s]*)?/gm;const o=[];let s;for(;s=t.exec(e);){let e={url:s[0],protocol:s.groups.protocol,domain:s.groups.domain,path:s.groups.path,query:s.groups.query,fragment:s.groups.fragment};s.groups.port&&(e.port=Number.parseInt(s.groups.port)),o.push(e)}return o}(e.message),r=e.attachments?e.attachments:[];r=r.concat(function(e){return e.filter(e=>e.path.startsWith("/media/attachments/")).map(e=>{switch(/\.[a-z0-9]*$/m.exec(e.path)[0]){case".mp3":case".ogg":return"audio:"+e.url;case".mp4":case".avi":case".mkv":case".webm":return"video:"+e.url;default:return"image:"+e.url}})}(o));let l=yield function(e){return Object(s.a)(this,void 0,void 0,function*(){return e?Promise.all(e.map(e=>Object(s.a)(this,void 0,void 0,function*(){console.log("attachmentString",e);let t=/(?<type>[a-z]*)[\/]?[a-z+]*:(?<url>.*)/gm.exec(e),o="other";switch(console.log("results",t),t.groups.type){case"image":o="image";break;case"video":o="video";break;case"audio":o="audio";break;default:o="other"}let s=t.groups.url,a=/http[s]?:\/\/(?<domain>[a-zA-Z0-9\.\-\_]*)\/(?<path>[\S]*)/.exec(s);if(!a)return s.startsWith("assets/plh_assets/")||(s=`assets/plh_assets/${s}`),{type:o,url:s};if(a.groups){let e=a.groups.path;if(i.a.domains.includes(a.groups.domain))try{200===(yield fetch(e,{method:"HEAD"})).status&&(s=e)}catch(p){console.log("HEAD request excetpion ",p)}return{type:o,url:s}}}))):[]})}(r),u=function(e,t){let o=""+e;for(let s of t)c(s)&&(o=o.replace(s.url,""));return o}(e.message,o),d=function(e){let t=e.filter(e=>i.a.domains.indexOf(e.domain)>-1).filter(e=>i.a.chatNonNavigatePaths.findIndex(t=>e.path.startsWith(t))<0).map(e=>({executed:!1,type:a.a.NAVIGATE,params:e})),o=e.filter(e=>e.path&&e.path.toLowerCase().startsWith("/chat/action")).map(e=>n(e.query)).filter(e=>e.type&&a.a[e.type]).map(e=>({executed:!1,type:e.type,params:e}));return[].concat(o,t)}(o),h=t.map(e=>({text:e})),f={text:u,sender:"bot",dateReceived:new Date,responseOptions:h,attachments:l,actions:d};return f=function(e,t){let o=e.find(e=>e.path.startsWith("/chat/msg-info"));if(o){const e=n(o.query);for(let o of a.b)if(e.hasOwnProperty(o.key)){const s=decodeURIComponent(e[o.key]);switch(o.type){case"boolean":t[o.key]="true"===s;break;case"float":t[o.key]=Number.parseFloat(s);break;case"integer":t[o.key]=Number.parseInt(s);break;case"array":case"object":t[o.key]=JSON.parse(s);break;default:t[o.key]=s}}}return t}(o,f),f.choiceMediaUrls&&f.responseOptions.forEach((e,t)=>{e.imageUrl="assets/plh_assets/"+f.choiceMediaUrls[t],e.hideText="media"===f.choiceMediaDisplay}),f})}function n(e){let t=new URLSearchParams(e),o={};return t.forEach((e,t)=>{o[t]=e}),o}function c(e){return!!e.path.startsWith("/media/attachments/")||i.a.domains.indexOf(e.domain.toLowerCase())>-1}},Qpa5:function(e,t,o){"use strict";o.d(t,"a",function(){return w});var s=o("mrSG"),i=o("7zx7"),a=o("GJmQ"),r=o("Tesu"),n=(o("SAju"),o("zkLc")),c=o("IHle");function l(e,t){switch(e.type){case"has_only_phrase":return e.arguments[0].toLowerCase()===t.toLowerCase();case"has_any_word":return function(e,t){let o=[];for(let s of e.arguments)o=o.concat(s.toLowerCase().split(" "));for(let s of o)if(t.toLowerCase()===s)return!0}(e,t);case"has_number_between":return function(e,t){let o=e.arguments.map(e=>Number.parseFloat(e)).sort((e,t)=>e-t),s=Number.parseFloat(t);return NaN!==o[0]&&NaN!==o[1]&&NaN!==s&&s>o[0]&&s<o[1]}(e,t);case"has_number_gt":return function(e,t){let o=Number.parseFloat(e.arguments[0]),s=Number.parseFloat(t);return NaN!==o&&NaN!==s&&s>o}(e,t);case"has_number_lt":return function(e,t){let o=Number.parseFloat(e.arguments[0]),s=Number.parseFloat(t);return NaN!==o&&NaN!==s&&s<o}(e,t);default:return!1}}class u{constructor(e,t,o,i,a,r){this.flowObject=e,this.messages$=t,this.flowStatus$=o,this.contactFieldService=i,this.botTyping$=a,this.habitService=r,this.nodesById={},this.childFlowName=null,this.running=!1,this.flowStepDelay=50,this.sendMessageDelay=1e3,this.flowResults={},this.parseMessageTemplate=e=>Object(s.a)(this,void 0,void 0,function*(){console.log("template",e);let t,o=""+e,s=/@([a-z]+)\.([0-9a-zA-Z\_]+)([\.]*[0-9a-zA-Z\_]*)/gm;for(;null!==(t=s.exec(e));){let e=t[0],s=t[1],i=t[2],a=t[3]?t[3].substring(1):null;switch(s){case"contact":case"fields":o=o.replace(e,yield this.contactFieldService.getContactField(i));break;case"results":o=o.replace(e,this.flowResults[i]);break;case"habit":"weekly_count"===a&&(o=o.replace(e,""+(yield this.habitService.getHabitWeeklyCount(i))))}}return o}),console.log("flowObject",e),this.name=e.name,this.flowObject.nodes.forEach(e=>{this.nodesById[e.uuid]=e})}start(){this.running?console.warn("Attempted to start flow that is already running ",this.flowObject.name,this.flowObject.uuid):(this.running=!0,this.enterNode(this.flowObject.nodes[0],null))}continue(e){console.log("Continuing parent flow",this.flowObject.name,"child status",e),this.childFlowName=null,this.currentNode&&this.currentNode.router?this.useSwitchRouter(this.currentNode,e):this.exitWithoutRouter(this.currentNode)}reset(){this.running=!1}emitFlowCompletion(){let e=this.flowStatus$.getValue();e.push({uuid:this.flowObject.uuid,name:this.flowObject.name,status:"completed"}),this.running=!1,this.flowStatus$.next(e)}enterNode(e,t){return Object(s.a)(this,void 0,void 0,function*(){this.currentNode=e,console.log("Entered from ",t),console.log("Entered node id ",e);for(let t of e.actions)yield this.handleNodeAction(t,e);yield this.wait(),e.router?e.router.operand&&e.router.operand.indexOf("@input.")>-1||(yield this.useRouter(e)):this.exitWithoutRouter(e)})}exitWithoutRouter(e){let t=e.exits.filter(e=>e.destination_uuid)[0];t?(console.log("Entered node by exiting from node with no router"),this.enterNode(this.getNodeById(t.destination_uuid),e)):(console.log("This should be flow completion"),this.emitFlowCompletion())}handleNodeAction(e,t){return Object(s.a)(this,void 0,void 0,function*(){switch(console.log(`%cAction: ${e.type}`,"color: #9c9c9c"),e.type){case"enter_flow":if(e.flow){this.childFlowName=e.flow.name;let t=this.flowStatus$.getValue();if(t.length>0&&t[t.length-1].name!==e.flow.name){const{name:o,uuid:s}=e.flow;t.push({name:o,uuid:s,status:"start"}),console.log("Next on BS: child flow"),this.flowStatus$.next(t)}}else console.error("Action was to enter_flow however no object for which flow to enter");return;case"send_msg":return e.text?(this.botTyping$.next(!0),this.doSendMessageAction(e,t)):void 0;case"set_contact_field":return this.doSetContactFieldAction(e);case"set_contact_name":return this.doSetContactNameAction(e);default:console.warn(`no node action handler for: [${e.type}]`)}})}wait(e=this.flowStepDelay){return new Promise((t,o)=>{setTimeout(t,e)})}convertToVariableName(e){return e.toLowerCase().replace(" ","_")}useUserInputRouter(e,t){if(e.router.result_name){const o=this.convertToVariableName(e.router.result_name);this.flowResults[o]=t}let o;for(let s of e.router.cases)if(l(s,t)){o=s.category_uuid;break}o?this.exitUsingCategoryId(e,o):e.router.default_category_uuid?this.exitUsingCategoryId(e,e.router.default_category_uuid):console.warn("Nothing matches for node ",e.uuid)}useSwitchRouter(e,t){let o;for(let s of e.router.cases)if(l(s,t)){o=s.category_uuid;break}o?this.exitUsingCategoryId(e,o):e.router.default_category_uuid?this.exitUsingCategoryId(e,e.router.default_category_uuid):console.warn("Nothing matches for node ",e.uuid)}useRouter(e){return Object(s.a)(this,void 0,void 0,function*(){if("random"===e.router.type)this.exitAtRandom(e);else if("@child.run.status"===e.router.operand)console.log("We'll come back here later...");else{let t=yield this.parseMessageTemplate(e.router.operand);t.startsWith("@")&&console.warn("Switch router operand starts with @ ",e.router.operand,"This is likely a mistake and this operand type isn't supported"),this.useSwitchRouter(e,t)}})}exitAtRandom(e){let t=this.getRandomInt(0,e.router.categories.length-1);this.exitUsingCategoryId(e,e.router.categories[t].uuid)}getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}exitUsingCategoryId(e,t){let o=e.router.categories.find(e=>e.uuid===t),s=e.exits.find(e=>e.uuid===o.exit_uuid);s.destination_uuid?(console.log("Entered node via router category ",o),this.enterNode(this.getNodeById(s.destination_uuid),e)):(console.log("Reached flow completion via router"),this.emitFlowCompletion())}messageHasTextInput(e,t){if(e.quick_replies&&e.quick_replies.length>0)return!1;if(t.router)return"@input.text"===t.router.operand;const o=t.exits.find(e=>e.destination_uuid);if(o){const e=this.nodesById[o.destination_uuid];if(e.router&&"@input.text"===e.router.operand)return!0}}doSendMessageAction(e,t){return Object(s.a)(this,void 0,void 0,function*(){const o=this.messages$.getValue(),s=yield this.parseMessageTemplate(e.text);let i=yield Promise.all(e.attachments.map(this.parseMessageTemplate)),a=[];e.quick_replies&&e.quick_replies.length>0&&(a=yield Promise.all(e.quick_replies.map(this.parseMessageTemplate)));const r={message:s,message_id:e.uuid,title:"",type:"rapidpro",quick_replies:JSON.stringify(a),attachments:i,wasTapped:!1},n=yield Object(c.a)(r);n.showTextInput=this.messageHasTextInput(e,t),o.push(n),n.isStory||(yield this.wait(this.sendMessageDelay)),this.messages$.next(o),this.botTyping$.next(!1)})}doSetContactNameAction(e){return Object(s.a)(this,void 0,void 0,function*(){if(e.name){const t=yield this.parseMessageTemplate(e.name);this.contactFieldService.setContactField("name",t)}})}doSetContactFieldAction(e){return Object(s.a)(this,void 0,void 0,function*(){if(e.field&&e.field.key){const t=yield this.parseMessageTemplate(e.value);this.contactFieldService.setContactField(e.field.key,t)}})}getNodeById(e){return this.nodesById[e]}sendMessage(e){return this.currentNode&&this.currentNode.router&&"@input.text"===this.currentNode.router.operand&&setTimeout(()=>this.useUserInputRouter(this.currentNode,e.text),1e3),Object(n.a)(!0)}}var d=o("Jr/a"),h=o("qe0H"),f=o("vuwy"),p=o("5Lyb"),m=o("42Ma"),g=o("8Y7J"),y=o("IheW");let w=(()=>{class e{constructor(e,t,o,s,a){this.http=e,this.contactFieldService=t,this.settingsService=o,this.chatActions=s,this.habitService=a,this.type="offline",this.rpFlowsByName={},this.flowsStack=[],this.flowStatus$=new i.a([]),this.ready$=new i.a(!1),this.messages$=new i.a([]),this.botTyping$=new i.a(!1),this.init()}ready(){return Object(s.a)(this,void 0,void 0,function*(){return this.ready$.pipe(Object(a.a)(e=>!1===e)).toPromise()})}init(){this.loadFlowData(),this.subscribeToFlowStatusChanges(),this.ready$.next(!0)}loadFlowData(){h.b.forEach(e=>{e.flows.forEach(e=>this.rpFlowsByName[e.name]=e)})}startFlowByName(e){this.messages$=new i.a([]);const t=this.rpFlowsByName[e];if(this.flowsStack=[],t){const{name:e,uuid:o}=t;this.flowStatus$.next([...this.flowStatus$.value,{name:e,uuid:o,status:"start"}])}else console.error("flow does not exist",e,this.rpFlowsByName)}getFlowNames(){return Object(s.a)(this,void 0,void 0,function*(){return yield this.ready(),Object.keys(this.rpFlowsByName)})}sendMessage(e){if(this.flowsStack.length>0){let t=this.flowsStack[this.flowsStack.length-1];return console.log("Sending message to current flow ",e,t.name),this.chatActions.logActionToDB({flow_name:t.name,type:"new_message",meta:e}),t.sendMessage(e)}return Object(f.a)("No active flows to send a message to")}handleFlowsEnded(){console.log("all flows have ended",this.flowsStack)}subscribeToFlowStatusChanges(){this.flowStatus$.subscribe(e=>{try{if(console.log("Flow status change",e),e.length>0){console.log("Flow stacks before event:",this.flowsStack.length);let t=e[e.length-1];console.log("latest status:",t.status);const o=this.rpFlowsByName[t.name];if("start"===t.status){this.chatActions.logActionToDB({flow_name:o.name,type:"started"}),console.log(`%c${o.name} START`,"background: white; color: green");let e=new u(o,this.messages$,this.flowStatus$,this.contactFieldService,this.botTyping$,this.habitService);this.flowsStack.push(e),this.settingsService.getUserSetting("CHAT_DELAY").subscribe(t=>{e.sendMessageDelay=Number.parseInt(t)}),e.start()}"completed"===t.status&&(this.chatActions.logActionToDB({flow_name:o.name,type:"completed"}),this.flowsStack=this.flowsStack.filter(e=>e.name!=o.name),this.flowsStack.length>0?this.flowsStack[this.flowsStack.length-1].continue("completed"):this.handleFlowsEnded()),console.log("Flow stacks after event:",this.flowsStack.length)}}catch(t){console.warn("Flow status change subscribe error. This is likely an error caused by a faulty flow.",t)}})}loadExportFile(e){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.http.get(e).toPromise();if(t.flows&&t.flows.length>0)for(let e of t.flows)this.rpFlowsByName[e.name]=e;else console.warn("No flows in export file ",e)})}}return e.\u0275fac=function(t){return new(t||e)(g.Vb(y.a),g.Vb(d.a),g.Vb(r.a),g.Vb(p.a),g.Vb(m.a))},e.\u0275prov=g.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},SAju:function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o.d(t,"b",function(){return i});var s=function(e){return e.UNLOCK_TOOLBOX_TOPIC="UNLOCK_TOOLBOX_TOPIC",e.NAVIGATE="NAVIGATE",e.FINISH_WELCOME="FINISH_WELCOME",e.CREATE_REMINDER="CREATE_REMINDER",e}({});const i=[{key:"character",type:"string"},{key:"isStory",type:"boolean"},{key:"choiceMediaDisplay",type:"string"},{key:"displayAsTick",type:"boolean"},{key:"tickedByDefault",type:"boolean"},{key:"choiceMediaUrls",type:"array"}]},Tesu:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var s=o("7zx7"),i=o("Y/pK"),a=o("tUPE"),r=o("Ii2O");const n=[{id:"CHAT_DELAY",name:"Chat Message Delay",type:"number",value:"1000",options:[{name:"Slow",value:"5000"},{name:"Medium",value:"3000"},{name:"Fast",value:"1000"}]},{id:"USE_MODAL_FOR_CHAT_RESPONSES",name:"Use Modal For Chat Responses",type:"boolean",value:"false",devOnly:!0},{id:"SHOW_FLOW_NAME",name:"Show Flow Name",type:"boolean",value:"false",devOnly:!0}];var c=o("8Y7J");let l=(()=>{class e{constructor(e){this.localStorageService=e,this.lsPrefix="user_settings.";const t=n.map(t=>{const o=e.getString(this.lsPrefix+t.id);return Object.assign(Object.assign({},t),{value:null===o?t.value:o})});this.userSettings$=new s.a(t)}getAllUserSettings(){return this.userSettings$.asObservable()}getUserSetting(e){return this.userSettings$.pipe(Object(i.a)(t=>{const o=t.find(t=>t.id===e);return o?o.value:void 0}),Object(a.a)(e=>void 0!==e))}setUserSetting(e,t){this.localStorageService.setString(this.lsPrefix+e,t);const o=this.userSettings$.getValue().map(o=>o.id===e?Object.assign(Object.assign({},o),{value:t}):o);this.userSettings$.next(o)}}return e.\u0275fac=function(t){return new(t||e)(c.Vb(r.a))},e.\u0275prov=c.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);