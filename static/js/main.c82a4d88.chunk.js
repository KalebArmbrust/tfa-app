(this["webpackJsonptfa-app"]=this["webpackJsonptfa-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),d=n(3),a=n.n(d),l=(n(9),n(4)),i=(n(10),n(0));var o=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1];return"true"===n?(document.getElementById("accessGranted").style.display="flex",document.getElementById("accessDenied").style.display="none"):"false"===n&&(document.getElementById("accessDenied").style.display="flex",document.getElementById("accessGranted").style.display="none"),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"body",id:"body",children:[Object(i.jsx)("h1",{className:"body-title",children:"ENTER YOUR CODE..."}),Object(i.jsxs)("div",{className:"tfa",id:"tfa",children:[Object(i.jsx)("input",{type:"text",placeholder:"__ __ __ __ __ __",className:"tfa-input",id:"tfa-input"}),Object(i.jsx)("button",{className:"tfa-button",onClick:function(){var e=document.getElementById("tfa-input").value,t=new Headers;t.append("Content-Type","application/json");var n=JSON.stringify({token:e});fetch("https://mock-2fa-api.azure-api.net/validation",{method:"POST",headers:t,body:n,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e),s(e)})).catch((function(e){return console.log("error",e)})),document.getElementById("body").style.display="none"},children:"ENTER"})]})]}),Object(i.jsxs)("div",{className:"admit",children:[Object(i.jsxs)("div",{className:"accessGranted",id:"accessGranted",children:[Object(i.jsx)("h2",{children:"YOU MAY ENTER"}),Object(i.jsx)("button",{className:"tfa-button",onClick:function(){document.getElementById("body").style.display="flex",document.getElementById("body").style.flexDirection="column",document.getElementById("accessGranted").style.display="none",document.getElementById("tfa-input").value=""},children:"RESET"})]}),Object(i.jsxs)("div",{className:"accessDenied",id:"accessDenied",children:[Object(i.jsx)("h2",{children:"INCORRECT"}),Object(i.jsx)("button",{className:"tfa-button",onClick:function(){document.getElementById("body").style.display="flex",document.getElementById("body").style.flexDirection="column",document.getElementById("accessDenied").style.display="none",document.getElementById("tfa-input").value=""},children:"TRY AGAIN"})]})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,d=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),d(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(o,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.c82a4d88.chunk.js.map