(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t.p+"static/media/logo.6f5790a3.png"},33:function(e,n,t){e.exports=t(47)},44:function(e,n,t){},45:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),o=t(22),c=t.n(o),i=t(19),l=t(13),u=t(16),s={url:"",loading:!1,error:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUESTED_DOG":return{url:"",loading:!0,error:!1};case"REQUESTED_DOG_SUCCEEDED":return{url:n.url,loading:!1,error:!1};case"REQUESTED_DOG_FAILED":return{url:"",loading:!1,error:!0};default:return e}},m=t(14),E=t.n(m),d=t(10),f=function(){return{type:"REQUESTED_DOG"}},g=function(e){return{type:"REQUESTED_DOG_SUCCEEDED",url:e.message}},h=function(){return{type:"REQUESTED_DOG_FAILED"}},v=E.a.mark(w),b=E.a.mark(D);function w(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)("FETCHED_DOG",D);case 2:case"end":return e.stop()}},v,this)}function D(){var e;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(d.b)(f());case 3:return n.next=5,Object(d.a)(function(){return fetch("https://dog.ceo/api/breeds/image/random").then(function(e){return e.json()})});case 5:return e=n.sent,n.next=8,Object(d.b)(g(e));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(d.b)(h());case 14:case"end":return n.stop()}},b,this,[[0,10]])}t(44);var O=t(25),j=t(26),k=t(30),y=t(27),x=t(31),_=t(50),C=t(49),S=function(){return a.a.createElement("div",null," ",a.a.createElement("br",null)," Be happy, baby ")},T=function(e){return a.a.createElement("div",null,e.params.loading?a.a.createElement("p",null,"Loading..."):e.params.error?a.a.createElement("p",null,"Error, try again"):e.params.url?a.a.createElement("p",null,a.a.createElement("img",{src:e.params.url,alt:"Random Dog"})):a.a.createElement("p",null,"Click the button, please"),a.a.createElement("button",{onClick:function(){return e.params.dispatch({type:"FETCHED_DOG"})}},"Show Dog"))},A=t(48),U=function(){return a.a.createElement("div",null,a.a.createElement(A.a,{to:"/"},a.a.createElement("button",null,"Home")),a.a.createElement(A.a,{to:"/about"},a.a.createElement("button",null,"About")))},G=t(28),R=t.n(G),N=(t(45),function(e){function n(){return Object(O.a)(this,n),Object(k.a)(this,Object(y.a)(n).apply(this,arguments))}return Object(x.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(_.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:R.a,className:"App-logo",alt:"logo"}),a.a.createElement("div",{className:"App-info"},a.a.createElement("h1",{className:"App-title"},"Welcome!"),a.a.createElement(U,null))),a.a.createElement("div",null,a.a.createElement(C.a,{exact:!0,path:"/",render:function(){return a.a.createElement(T,{params:e.props})}}),a.a.createElement(C.a,{exact:!0,path:"/about",component:S}))))}}]),n}(r.Component)),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var L=Object(u.a)(),F=Object(l.c)(p,Object(l.a)(L));L.run(w);var B=Object(i.b)(function(e){return console.log(e),e})(N);c.a.render(a.a.createElement(i.a,{store:F},a.a.createElement(B,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/randomdogs",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/randomdogs","/service-worker.js");Q?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):W(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.40ea75d1.chunk.js.map