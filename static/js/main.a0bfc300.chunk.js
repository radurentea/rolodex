(this.webpackJsonprolodex=this.webpackJsonprolodex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),r=n.n(c),s=n(3),a=n.n(s),i=(n(13),n(4)),h=n(5),l=n(7),u=n(6),d=(n(14),n(15),function(e){return Object(o.jsxs)("div",{className:"card-container",children:[Object(o.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.robot.id,"?set=set1&size=180x180")}),Object(o.jsx)("h2",{children:e.robot.name}),Object(o.jsx)("p",{children:e.robot.email})]})}),b=function(e){return Object(o.jsx)("div",{className:"card-list",children:e.robots.map((function(e){return Object(o.jsx)(d,{robot:e},e.id)}))})},j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(o.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Monsters Rolodex"}),Object(o.jsx)(j,{placeholder:"Search robots",handleChange:this.handleChange}),Object(o.jsx)(b,{robots:c})]})}}]),n}(r.a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),r(e),s(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.a0bfc300.chunk.js.map