(this.webpackJsonprobofraninds=this.webpackJsonprobofraninds||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))}),a=n(3),l=n(0),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:c})]})]})},j=function(e){var t=e.robots;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},h=function(e){var t=e.searchchanges;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})})},d=function(e){var t=e.children;return Object(l.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:t})},u=n(5),g=n(6),f=n(8),O=n(7),x=(c.Component,function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(a.a)(s,2),i=o[0],b=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]);var u=i.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(i),console.log(u),i.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(l.jsx)(h,{searchchanges:function(e){r(e.target.value),console.log(n)}}),Object(l.jsx)(d,{children:Object(l.jsx)(j,{robots:u})})]}):Object(l.jsx)("h1",{children:"Loading..."})});o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),i()}},[[15,1,2]]]);
//# sourceMappingURL=main.e89a1720.chunk.js.map