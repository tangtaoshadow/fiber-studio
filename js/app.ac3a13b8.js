(function(t){function e(e){for(var n,a,c=e[0],p=e[1],d=e[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var p=o[a];0!==i[p]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},r=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e385b771"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=n);var r,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=a(t);var d=new Error;r=function(e){p.onerror=p.onload=null,clearTimeout(s);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}i[t]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:p})}),12e4);p.onerror=p.onload=r,document.head.appendChild(p)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://tangtaoshadow.github.io/fiber-studio/",c.oe=function(t){throw console.error(t),t};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],d=p.push.bind(p);p.push=e,p=p.slice();for(var s=0;s<p.length;s++)e(p[s]);var l=d;r.push([0,"chunk.1014180e83c24","chunk.92718f7d9c9f","vendors-app"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"90a6":function(t,e,o){},b684:function(t,e,o){"use strict";o("90a6")},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),i={id:"nav"},r=Object(n["g"])("Home"),a=Object(n["g"])(" | "),c=Object(n["g"])("About");function p(t,e){var o=Object(n["v"])("router-link"),p=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",i,[Object(n["h"])(o,{to:"/"},{default:Object(n["A"])((function(){return[r]})),_:1}),a,Object(n["h"])(o,{to:"/about"},{default:Object(n["A"])((function(){return[c]})),_:1})]),Object(n["h"])(p)],64)}o("b684");const d={};d.render=p;var s=d,l=o("9483");Object(l["a"])("".concat("https://tangtaoshadow.github.io/fiber-studio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7"),o("3ca3"),o("ddb0");var f=o("6c02"),u={style:{background:"#000",color:"#52c41a","text-align":"left","border-radius":"8px",padding:"10px 32px"}},h={style:{padding:"10px 0px"}},g=Object(n["h"])("div",{style:{"margin-top":"30px","font-size":"20px","font-weight":"600","border-left":"4px solid #fa541c","padding-left":"5px",color:"#fa541c"}},[Object(n["h"])("span",{style:{padding:"4px 4px","border-radius":"4px",background:"#fa541c",color:"#fff"}}," STEP1 "),Object(n["h"])("span",{style:{padding:"4px 4px 4px 10px"}}," 绘制随机实心图分布 ")],-1),b={style:{"text-align":"left",width:"100%",padding:"20px 0px 30px"}},x=Object(n["h"])("div",{style:{"font-size":"20px","font-weight":"600","border-left":"4px solid #52c41a","padding-left":"5px"}}," 生成报告 ",-1),m={style:{padding:"10px 0px"}},v=Object(n["h"])("br",null,null,-1),j=Object(n["h"])("div",{style:{padding:"10px 0px"}},"随机圆分布如下:",-1),O={style:{padding:"10px 0px"}},y=Object(n["h"])("div",{style:{"margin-top":"60px","font-size":"20px","font-weight":"600","border-left":"4px solid #fa541c","padding-left":"5px",color:"#fa541c"}},[Object(n["h"])("span",{style:{padding:"4px 4px","border-radius":"4px",background:"#fa541c",color:"#fff"}}," STEP2 "),Object(n["h"])("span",{style:{padding:"4px 4px 4px 10px"}}," 选出边界实心圆 ")],-1),w={style:{"text-align":"left",width:"100%",padding:"20px 0px 30px"}},P=Object(n["h"])("div",{style:{"font-size":"20px","font-weight":"600","border-left":"4px solid #52c41a","padding-left":"5px"}}," 生成报告 ",-1),k={style:{padding:"10px 0px"}},L=Object(n["h"])("div",{style:{padding:"10px 0px"}},"边界圆分布如下:",-1),A={style:{padding:"10px 0px"}},S=Object(n["f"])('<div style="margin-top:60px;font-size:20px;font-weight:600;border-left:4px solid #fa541c;padding-left:5px;color:#fa541c;"><span style="padding:4px 4px;border-radius:4px;background:#fa541c;color:#fff;"> STEP3 </span><span style="padding:4px 4px 4px 10px;"> 保留边界实心圆,绘制真实边界分布图 </span></div><div style="padding:20px 0px;"><div style="color:;"> 注意: 边界圆与边界圆冲突颜色可能不能准确标记 </div><div style="color:#722ed1;padding-top:5px;"> 移除圆: 被移除的圆 </div><div style="color:#f5222d;padding-top:5px;"> 冲突圆: 被移除的圆与该圆产生冲突,冲突圆是保留圆 </div></div>',2),M={style:{"text-align":"left",width:"100%",padding:"20px 0px 30px"}},C=Object(n["h"])("div",{style:{"font-size":"20px","font-weight":"600","border-left":"4px solid #52c41a","padding-left":"5px"}}," 生成报告 ",-1),z={style:{padding:"10px 0px"}},B=Object(n["h"])("div",{style:{padding:"10px 0px"}},"最终保留的边界圆分布如下:",-1),E={style:{padding:"10px 0px"}},T=Object(n["h"])("div",{style:{"margin-top":"60px","font-size":"20px","font-weight":"600","border-left":"4px solid #fa541c","padding-left":"5px",color:"#fa541c"}},[Object(n["h"])("span",{style:{padding:"4px 4px","border-radius":"4px",background:"#fa541c",color:"#fff"}}," STEP4 "),Object(n["h"])("span",{style:{padding:"4px 4px 4px 10px"}}," 最终合成图 ")],-1),D={style:{"text-align":"left",width:"100%",padding:"20px 0px 30px"}},R=Object(n["h"])("div",{style:{"font-size":"20px","font-weight":"600","border-left":"4px solid #52c41a","padding-left":"5px"}}," 生成报告 ",-1),_={style:{padding:"10px 0px"}},F=Object(n["h"])("div",{style:{padding:"10px 0px"}},"随机圆分布如下:",-1),N={style:{padding:"10px 0px"}};function q(t,e,o,i,r,a){var c=Object(n["v"])("json-viewer");return Object(n["q"])(),Object(n["d"])("div",u,[Object(n["h"])("div",h,[Object(n["h"])("button",{style:{background:"#fa541c",padding:"16px 20px",border:"none","font-size":"20px",color:"#fff","border-radius":"8px"},onClick:e[1]||(e[1]=function(){return i.goRefresh&&i.goRefresh.apply(i,arguments)})}," 重新运行 ")]),g,Object(n["h"])("div",b,[Object(n["h"])("canvas",{id:"chart-step1",width:i.form.config.width,height:i.form.config.height},null,8,["width","height"])]),x,Object(n["h"])("div",m,[Object(n["g"])(" 矩形区域 X "+Object(n["x"])(i.form.config.width)+" , Y "+Object(n["x"])(i.form.config.height)+" , 圆的半径 "+Object(n["x"])(i.form.config.pointRadius)+" , 间距为 [ "+Object(n["x"])(i.form.config.minDistance)+", "+Object(n["x"])(i.form.config.maxDistance)+" ] , ",1),v,Object(n["g"])(" 共生成 "+Object(n["x"])(i.form.step1.totalPoint)+" 个圆 , 耗时"+Object(n["x"])(i.form.step1.timeConsuming)+" ms , 面积占比 "+Object(n["x"])(i.form.step1.coverAreaPercent)+"% ",1)]),j,Object(n["h"])("div",O,[Object(n["h"])(c,{value:i.form.step1.pointList,style:{background:"#95de64"},copyable:"",boxed:"",sort:""},null,8,["value"])]),y,Object(n["h"])("div",w,[Object(n["h"])("canvas",{id:"chart-step2",width:i.form.config.width,height:i.form.config.height},null,8,["width","height"])]),P,Object(n["h"])("div",k," 共找到 "+Object(n["x"])(i.form.step2.pointBoundaryList.length)+" 个圆分布在边界上 , 耗时"+Object(n["x"])(i.form.step2.timeConsuming)+" ms ",1),L,Object(n["h"])("div",A,[Object(n["h"])(c,{value:i.form.step2.pointBoundaryList,style:{background:"#95de64"},copyable:"",boxed:"",sort:""},null,8,["value"])]),S,Object(n["h"])("div",M,[Object(n["h"])("canvas",{id:"chart-step3",width:i.form.config.width,height:i.form.config.height},null,8,["width","height"])]),C,Object(n["h"])("div",z," 移除边界点的概率为 "+Object(n["x"])(100*i.form.removeBoundaryPercent)+" % , 共移除 "+Object(n["x"])(i.form.step2.pointBoundaryList.length-i.form.step3.retainList.length)+" 个边界圆 , 最终保留的圆共 "+Object(n["x"])(i.form.step3.retainList.length)+" 个 ",1),B,Object(n["h"])("div",E,[Object(n["h"])(c,{value:i.form.step3.retainList,style:{background:"#95de64"},copyable:"",boxed:"",sort:""},null,8,["value"])]),T,Object(n["h"])("div",D,[Object(n["h"])("canvas",{id:"chart-step4",width:i.form.config.width,height:i.form.config.height},null,8,["width","height"])]),R,Object(n["h"])("div",_," 共生成 "+Object(n["x"])(i.form.step4.pointAllList.length)+" 个圆 , 耗时"+Object(n["x"])(i.form.step4.timeConsuming)+" ms ",1),F,Object(n["h"])("div",N,[Object(n["h"])(c,{value:i.form.step4.pointAllList,style:{background:"#95de64"},copyable:"",boxed:"",sort:""},null,8,["value"])])])}var I=o("1da1"),J=(o("96cf"),o("b680"),o("d81d"),o("cb29"),{});J.log=window.console.log;var H=J,X={name:"home",components:{},setup:function(){var t=Object(n["s"])({step1:{pointList:[],timeConsuming:0,totalPoint:0,coverAreaPercent:"0"},removeBoundaryPercent:.2,step2:{pointBoundaryList:[],pointHoldList:[],timeConsuming:0},step3:{removeList:[],retainList:[],timeConsuming:0},step4:{pointAllList:[],timeConsuming:0},config:{width:350,height:350,decimal:0,minPointNum:8,minDistance:1,maxDistance:3,pointRadius:35}});setTimeout(Object(I["a"])(regeneratorRuntime.mark((function e(){var o,n,i,r,a,c,p,d,s,l,f,u,h,g,b,x,m,v,j,O,y,w,P,k,L;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o=t.config,n=o.width,i=o.height,r=o.decimal,o.minPointNum,a=o.minDistance,c=o.maxDistance,p=o.pointRadius,d=0,s=.4,t.removeBoundaryPercent=s,Math.pow(2*p,2),H.log("\r\n==== start ====="),l=Date.now(),f=document.getElementById("chart-step1"),u=f.getContext("2d"),u.strokeStyle="#fa541c",u.rect(0,0,n,i),u.stroke(),u.closePath(),u.fillStyle="#1890ff",h=n/p,g=new Array(h),b=0;b<h;b++)g[b]=[];for(x=i/p,m=new Array(x),v=0;v<x;v++)m[v]=[];for(j=[],O=0,y=function(t,e){if(t<0||e<0||t>n||e>i)return-1;for(var o=Math.pow(a+Math.random()*(c-a)+2*p,2),r=parseInt(t/p+""),s=parseInt(e/p+""),l=[],f=r-2;f<=r+2;f++)if(!(f<0||f>=h)){l=g[f];for(var u=0,b=l.length;u<b;u++){var x=Math.pow(l[u].x-t,2)+Math.pow(l[u].y-e,2)-o;if(0>x)return-2}}var v={x:t,y:e,id:O++};try{j.push(v),m[s].push(v),g[r].push(v),d++}catch(y){}return 0},w=0;w<=i;w+=p)for(H.log("正在尝试",w,w+2*c+p),P=Math.pow(n/a,2);0<P;P--)k=parseFloat((Math.random()*n).toFixed(r)),L=parseFloat((w+Math.random()*(2*c+p)).toFixed(r)),y(k,L);u.fillStyle="#1890ff",g.map((function(t){t.map((function(t){u.beginPath(),u.arc(t.x,t.y,p,0,360,!1),u.fill(),u.closePath()}))})),H.log(j,g,m),H.log("==== end ====="),H.log("=============="),t.step1.coverAreaPercent=(Math.PI*Math.pow(p,2)*d/(n*i)*100).toFixed(4),t.step1.totalPoint=d,t.step1.pointList=JSON.parse(JSON.stringify(j)),t.step1.timeConsuming=Date.now()-l,H.log(t);case 34:case"end":return e.stop()}}),e)}))),300);var e=function(){window.location.href="https://tangtaoshadow.github.io/fiber-studio/"};return{form:t,goRefresh:e}}};X.render=q;var Y=X,G=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/:catchAll(.*)",redirect:"/",component:function(){return null}}],K=Object(f["a"])({history:Object(f["b"])("https://tangtaoshadow.github.io/fiber-studio/"),routes:G}),Q=K,U=o("5502"),V=Object(U["a"])({state:{},mutations:{},actions:{},modules:{}}),W=o("1aa3");Object(n["c"])(s).use(V).use(Q).use(W["a"]).mount("#app")}});