"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[107],{6242:function(e,t,r){var n=r(5861),a=r(7757),c=r.n(a),i=r(4569),s=r.n(i)().create({baseURL:"https://api.themoviedb.org/3/trending/movie/day"}),o=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,s.get("https://api.themoviedb.org/3/".concat(t),{params:{api_key:"2e46478410a3b7ef74a24e2b089ec9d3"}});case 3:n=e.sent;case 4:if(!r){e.next=8;break}return e.next=7,s.get("https://api.themoviedb.org/3/".concat(t),{params:{api_key:"2e46478410a3b7ef74a24e2b089ec9d3",query:r}});case 7:n=e.sent;case 8:return e.abrupt("return",n.data);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.Z=o},107:function(e,t,r){r.r(t);var n=r(5861),a=r(885),c=r(7757),i=r.n(c),s=r(2791),o=r(501),u=r(6242),p=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];localStorage.removeItem("query"),(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Z)("trending/movie/day");case 3:t=e.sent,c(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var d=null===r||void 0===r?void 0:r.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}));return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)("ul",{children:d})]})}}}]);
//# sourceMappingURL=107.49cfbce0.chunk.js.map