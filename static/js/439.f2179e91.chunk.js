"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{767:function(e,t,n){n.d(t,{Ku:function(){return u},Pg:function(){return o},Ph:function(){return s},W_:function(){return l},z5:function(){return i}});var a=n(294),r="https://api.themoviedb.org/3",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjM4M2ZiNDAyOWM5YmVjZDA0YTFkNWMxMGRiMjVmMSIsInN1YiI6IjY1Njg3MTkwNjgwYmU4MDBjNmUwZGY4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0yBTLZfzHtErfzDPvpPP0-1Yv51vf4xtsFUINYRp_-s"}},i=function(){return a.Z.get("".concat(r,"/trending/all/day?language=en-US"),c)},o=function(e){return a.Z.get("".concat(r,"/movie/").concat(e,"?language=en-US"),c)},s=function(e){return a.Z.get("".concat(r,"/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),c)},u=function(e){return a.Z.get("".concat(r,"/movie/").concat(e,"/credits"),c)},l=function(e){return a.Z.get("".concat(r,"/movie/").concat(e,"/reviews"),c)}},161:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(439),r=n(791),c=n(227),i="searchBar_searchForm__nvYam",o="searchBar_searchBtn__vdT9o",s="searchBar_inputForm__SWz7U",u=n(184),l=function(e){var t=e.submit,n=(0,r.useState)(""),l=(0,a.Z)(n,2),m=l[0],h=l[1];return(0,u.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),""!==m.trim()?(t(m),h("")):(0,c.Am)("\u0412\u0438 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438.")},children:[(0,u.jsx)(c.Ix,{}),(0,u.jsx)("input",{name:"query",className:s,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:m,onChange:function(e){return h(e.target.value)}}),(0,u.jsx)("button",{type:"submit",className:o,children:(0,u.jsx)("span",{className:"button-label",children:"Search"})})]})},m=n(767),h=n(87),f=n(689),p="movies_movieList__UNxIB",v="movies_movieItem__ELCkn",_="movies_movieImage__pIktb",d="movies_movieTitle__uYN28",g="movies_searchMoviePageTitle__GckiN",j=(n(462),function(){var e=(0,r.useState)(null),t=(0,a.Z)(e,2),n=t[0],i=t[1],o=(0,h.lr)(),s=(0,a.Z)(o,2),j=s[0],x=s[1],N=j.get("query"),I=(0,f.TH)();(0,r.useEffect)((function(){N&&(0,m.Ph)(N).then((function(e){i(e.data.results)}))}),[N]);return(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{submit:function(e){x({query:e}),(0,m.Ph)(e).then((function(e){i(e.data.results)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0456\u0432",e),c.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443")}))}}),(0,u.jsx)(c.Ix,{}),(0,u.jsx)("h2",{className:g,children:"Search movie"}),(0,u.jsx)("ul",{className:p,children:n&&n.map((function(e){return(0,u.jsx)("li",{className:v,children:(0,u.jsxs)(h.OL,{to:"/movies/".concat(e.id),state:{from:I},children:[(0,u.jsx)("img",{className:_,src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster"}),(0,u.jsx)("h2",{className:d,children:e.title})]})},e.id)}))})]})})}}]);
//# sourceMappingURL=439.f2179e91.chunk.js.map