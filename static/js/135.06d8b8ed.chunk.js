"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{767:function(e,n,i){i.d(n,{Ku:function(){return v},Pg:function(){return c},Ph:function(){return s},W_:function(){return l},z5:function(){return a}});var t=i(294),r="https://api.themoviedb.org/3",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjM4M2ZiNDAyOWM5YmVjZDA0YTFkNWMxMGRiMjVmMSIsInN1YiI6IjY1Njg3MTkwNjgwYmU4MDBjNmUwZGY4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0yBTLZfzHtErfzDPvpPP0-1Yv51vf4xtsFUINYRp_-s"}},a=function(){return t.Z.get("".concat(r,"/trending/all/day?language=en-US"),o)},c=function(e){return t.Z.get("".concat(r,"/movie/").concat(e,"?language=en-US"),o)},s=function(e){return t.Z.get("".concat(r,"/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),o)},v=function(e){return t.Z.get("".concat(r,"/movie/").concat(e,"/credits"),o)},l=function(e){return t.Z.get("".concat(r,"/movie/").concat(e,"/reviews"),o)}},135:function(e,n,i){i.r(n),i.d(n,{default:function(){return h}});var t=i(861),r=i(439),o=i(757),a=i.n(o),c=i(791),s=i(689),v=i(767),l=i(227),u=i(87),d=(i(462),{movieDetailsImg:"MovieDetails_movieDetailsImg__mJ0ic",movieBox:"MovieDetails_movieBox__pi2XS",aditInfoTitle:"MovieDetails_aditInfoTitle__zBW9e",overview:"MovieDetails_overview__U5Vnb",movieDescription:"MovieDetails_movieDescription__Gu3H0",active:"MovieDetails_active__uPNdW",navBox:"MovieDetails_navBox__vIuic",goBack:"MovieDetails_goBack__C8OKE"}),m=i(184),h=function(){var e,n,i=(0,s.UO)().movieId,o=(0,c.useState)(null),h=(0,r.Z)(o,2),f=h[0],p=h[1],x=(0,s.TH)(),_=(0,c.useRef)(null!==(e=null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Pg)(i);case 3:n=e.sent,p(n.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),l.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443"),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]);var g=function(e){var n=e.isActive;return"".concat(n?d.active:"")},j="";return f&&f.genres&&(j=f.genres.map((function(e){return e.name})).join(", ")),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:(0,m.jsx)(u.OL,{className:d.goBack,to:_.current,children:"Go back"})}),(0,m.jsx)(l.Ix,{}),f?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:d.movieBox,children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{className:d.movieDetailsImg,src:f.poster_path?"https://image.tmdb.org/t/p/w500/".concat(f.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",width:250})}),(0,m.jsxs)("div",{className:d.movieDescription,children:[(0,m.jsx)("h2",{className:d.movieTitleId,children:f.title||f.name}),(0,m.jsxs)("p",{children:["User Score: ",Math.round(10*f.vote_average),"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{className:d.overview,children:f.overview}),(0,m.jsx)("h2",{children:"Genre"}),(0,m.jsx)("p",{children:j})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:d.aditInfoTitle,children:"Aditional information"}),(0,m.jsxs)("div",{className:d.navBox,children:[(0,m.jsx)(u.OL,{to:"/movies/".concat(f.id,"/cast"),className:g,children:"Cast"}),(0,m.jsx)(u.OL,{to:"/movies/".concat(f.id,"/reviews"),className:g,children:"Reviews"})]})]}),(0,m.jsx)(s.j3,{})]}):"Loading...."]})}},861:function(e,n,i){function t(e,n,i,t,r,o,a){try{var c=e[o](a),s=c.value}catch(v){return void i(v)}c.done?n(s):Promise.resolve(s).then(t,r)}function r(e){return function(){var n=this,i=arguments;return new Promise((function(r,o){var a=e.apply(n,i);function c(e){t(a,r,o,c,s,"next",e)}function s(e){t(a,r,o,c,s,"throw",e)}c(void 0)}))}}i.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=135.06d8b8ed.chunk.js.map