(this["webpackJsonpmath-calculator"]=this["webpackJsonpmath-calculator"]||[]).push([[0],{173:function(t,e){},177:function(t,e,n){"use strict";n.r(e);var r=n(13),a=n.n(r),c=n(101),s=n.n(c),o=n(3),i=n(102),l=n.n(i);var u=function(t){t.graphToPlot;var e={target:"#root",width:600,height:400,data:[{fn:t.graphToPlot,color:"red"}],grid:!0,yAxis:{domain:[-1,1]},xAxis:{domain:[-4,4]}};return l()(e),console.log("Function"),null},j=n(182),b=n(4);var h=function(t){var e=Object(r.useState)(""),n=Object(o.a)(e,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],h=/(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/,d=/\b(sin|cos|tan)\b/,O=/\b(x)\b/;function v(t){if(h.test(t))return Object(b.jsx)("h1",{children:Object(j.a)(t)})}return Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)("label",{children:"Enter graph: "}),Object(b.jsx)("input",{type:"text",name:"func",onChange:function(t){c(document.querySelector("input").value)},value:a}),Object(b.jsx)("input",{type:"submit",value:"Plot",onClick:function(e){e.preventDefault(),t.plot(a),c(""),u(a)}}),Object(b.jsxs)("div",{children:[" ",/[a-z]/.test(l)?function(t){0==O.test(t)&&1==d.test(t)&&v(t)}(l):v(l)]})]})},d=n(40),O=n(41),v=n(104),x=n(107),p=function(t){Object(v.a)(n,t);var e=Object(x.a)(n);function n(t){var r;return Object(d.a)(this,n),(r=e.call(this,t)).state={hasError:!1},r}return Object(O.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Something went wrong. Enter Valid Input."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),n}(a.a.Component);var f=function(){return Object(b.jsx)("nav",{className:"navbar navbar-light bg-light ",children:Object(b.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Math-Calculator"})})};var m=function(){var t=Object(r.useState)("0"),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(f,{})}),Object(b.jsxs)(p,{children:[Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(h,{plot:function(t){a(t),console.log(n)}})}),Object(b.jsx)("div",{className:"content-1",children:Object(b.jsx)(u,{graphToPlot:n})})]})]})};s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.105363eb.chunk.js.map