(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a.n(n),i=a(4),l=a(1);a(10);function r(e,t){for(var a=[],n=e;n<=t;n+=1)a.push(n);return a}var s=a(2),o=a.n(s),j=a(0),h=function(e){var t=e.total,a=e.perPage,n=e.currentPage,c=e.onPageChange,i=e.items,l=r(1,Math.ceil(t/a)),s=function(e){e>=1&&e<=l.length?c(e):c(1)},h=i.filter((function(e,c){return c+1>=(n-1)*a+1&&c+1<=Math.min(n*a,t)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===n}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:function(){return s(1===n?n:n-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:n>0&&n<=l.length?e===n:1===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return s(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:n===l.length}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===l.length,onClick:function(){return s(n===l.length?l.length:n+1)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:h.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},d=r(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(5),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=d.length;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat((s-1)*a+1," - ").concat(Math.min(s*a,u)," of ").concat(u,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){n(+e.target.value)},value:a,children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(h,{total:+u,perPage:+a,currentPage:+s,onPageChange:function(e){o(e)},items:d})]})};c.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9408e75c.chunk.js.map