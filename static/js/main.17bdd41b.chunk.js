(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(11),c=n.n(r),i=(n(27),n(6)),l=n(7),s=n(9),u=n(8),d=n(10),f=(n(29),n(39)),h=n(38),m=n(40),p=(n(31),n(21)),b=n(12),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a("data/projects.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return console.log(this.state.data),o.a.createElement("div",{className:"container"}," My Hackathon Projects",this.state.data.map(function(e,t){return o.a.createElement(b.a,null,o.a.createElement(b.b,null,o.a.createElement(b.d,null,o.a.createElement("a",{href:e.link,key:t},e.name)),o.a.createElement(b.c,null,e.description)))}))}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Welcome to my website!")}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"I'm a junior in the Informatics Major :-)")}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{to:"/"},"Home"),o.a.createElement(h.a,{to:"/about"},"About"),o.a.createElement(h.a,{to:"/projects"},"Projects"),o.a.createElement(m.a,{path:"/about",component:j}),o.a.createElement(m.a,{path:"/projects",component:v}),o.a.createElement(m.a,{exact:!0,path:"/",component:w}))))}}]),t}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/personalwebsite",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/personalwebsite","/service-worker.js");E?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.17bdd41b.chunk.js.map