"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[345],{6242:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s)().create({baseURL:"https://api.themoviedb.org/3/trending/movie/day"}),o=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}return e.next=3,i.get("https://api.themoviedb.org/3/".concat(t),{params:{api_key:"2e46478410a3b7ef74a24e2b089ec9d3"}});case 3:r=e.sent;case 4:if(!n){e.next=8;break}return e.next=7,i.get("https://api.themoviedb.org/3/".concat(t),{params:{api_key:"2e46478410a3b7ef74a24e2b089ec9d3",query:n}});case 7:r=e.sent;case 8:return console.log(r),e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.Z=o},3345:function(e,t,n){n.r(t);var r=n(5861),a=n(8152),c=n(7757),s=n.n(c),i=n(2791),o=n(6871),u=n(6242),l=n(1346),p=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],h=n[1];(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("movie/".concat(e,"/reviews"));case 3:n=t.sent,r=n.results,h(r),console.log(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var f=0===c.length?(0,p.jsx)("p",{children:"There is no reviews yet"}):(0,p.jsx)("div",{className:l.Z.list__item,children:c.map((function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Author ".concat(e.author)}),(0,p.jsx)("p",{className:l.Z.margin,children:e.content})]})}))});return console.log(c),(0,p.jsx)("div",{className:l.Z.list,children:f})}},1346:function(e,t){t.Z={list:"Outlet_list__hO6y7",list__item:"Outlet_list__item__CDafY",margin:"Outlet_margin__AWWcl"}}}]);
//# sourceMappingURL=345.2d16dffc.chunk.js.map