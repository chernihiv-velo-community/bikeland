(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"BK/5":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return v}));var n=a("q1tI"),r=a.n(n),l=a("0/Pd"),o=a("54fn"),i=a("vrFN"),c=a("s1jT"),s=a("L+ta"),u=a("vOnD"),g=a("ibEc");function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    padding: 1rem;\n  "]);return d=function(){return e},e}var m=u.c.ul.withConfig({displayName:"styled__PaginationWrapper",componentId:"sc-1t5kq8i-0"})(["align-items:center;border-top:1px solid var(--borders);color:var(--texts);display:flex;padding:1.5rem 3rem;justify-content:space-between;list-style:none;"," a{color:var(--texts);text-decoration:none;transition:color 0.5s;&:hover{color:var(--highlight);}}"],g.a.lessThan("large")(d())),p=function(e){var t=e.isFirst,a=e.isLast,n=e.currentPage,l=e.numPages,o=e.prevPage,i=e.nextPage,u=Object(s.a)(),g=u.next,d=u.prev,p=u.of;return r.a.createElement(m,null,r.a.createElement("li",null,!t&&r.a.createElement(c.a,{to:o},"← ",d)),r.a.createElement("p",null,n," ",p," ",l),r.a.createElement("li",null,!a&&r.a.createElement(c.a,{to:i},g," →")))},f=a("MGku"),v="4091379730";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.pageContext,n=a.currentPage,c=a.numPages,s=1===n,u=n===c,g=n-1==1?"/blog":"/blog/"+(n-1),d="/blog/page/"+(n+1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Blog"}),r.a.createElement(o.a,{text:"Blog"}),r.a.createElement(f.a,null,t.map((function(e){var t=e.node,a=t.frontmatter,n=a.background,o=a.category,i=a.date,c=a.description,s=a.title,u=a.image,g=t.timeToRead,d=t.fields.slug;return r.a.createElement(l.a,{slug:"/blog/"+d,background:n,category:o,date:i,timeToRead:g,title:s,description:c,image:u})}))),r.a.createElement(p,{isFirst:s,isLast:u,currentPage:n,numPages:c,prevPage:g,nextPage:d}))}}}]);
//# sourceMappingURL=component---src-templates-posts-list-js-442ed63a5897404fab7c.js.map