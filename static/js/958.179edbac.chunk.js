"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{6242:function(e,n,t){var r=t(5861),i=t(7757),s=t.n(i),a=t(4569),o=t.n(a)().create({baseURL:"https://api.themoviedb.org/3/trending/movie/day"}),c=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,o.get("https://api.themoviedb.org/3/".concat(n),{params:{api_key:"2e46478410a3b7ef74a24e2b089ec9d3"}});case 3:r=e.sent;case 4:if(!t){e.next=8;break}return e.next=7,o.get("https://api.themoviedb.org/3/".concat(n),{params:{api_key:"2e46478410a3b7ef74a24e2b089ec9d3",query:t}});case 7:r=e.sent;case 8:return e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();n.Z=c},3958:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(5861),i=t(885),s=t(7757),a=t.n(s),o=t(2791),c=t(501),l=t(6871),d=t(6242),v="MovieDetails_conteiner__XXxXe",u="MovieDetails_second__conteiner__BkOZy",h="MovieDetails_bottom__section__5kgRO",p=t(184),m=function(e){var n,t,s,m=e.hesh,x=(0,l.UO)().movieId,f=(0,o.useState)({}),j=(0,i.Z)(f,2),_=j[0],b=j[1],k=(0,l.TH)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Z)("movie/".concat(x));case 3:n=e.sent,b(n),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);var g="https://image.tmdb.org/t/p/w500".concat(null===_||void 0===_?void 0:_.backdrop_path),w=null!==(n=null===(t=k.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies",y=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("button",{children:["home"===m&&(0,p.jsx)(c.rU,{to:"/",children:"Go back"}),"movies"===m&&(0,p.jsx)(c.rU,{to:w,children:"Go back"})]}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("img",{src:g,alt:null===_||void 0===_?void 0:_.title}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("h2",{children:null===_||void 0===_?void 0:_.title}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*(null===_||void 0===_?void 0:_.vote_average))]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:_.overview}),(0,p.jsx)("h3",{children:"Genres"}),null===_||void 0===_||null===(s=_.genres)||void 0===s?void 0:s.map((function(e){return(0,p.jsx)("p",{children:e.name})}))]})]}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("p",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(x,"/cast"),children:"Cast"})},"1"),(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(x,"/reviews"),children:"Reviews"})},"2")]})]}),(0,p.jsx)(l.j3,{})]});return(0,p.jsx)("div",{children:y})}}}]);
//# sourceMappingURL=958.179edbac.chunk.js.map