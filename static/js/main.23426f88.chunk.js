(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),i=n(4),s=n.n(i),a=(n(10),n(3));var u=function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(o.useRef)(null),s=Object(o.useRef)(null),u=function(){var e=Math.round,t=Math.random;return"rgba("+e(255*t())+","+e(255*t())+","+e(255*t())+","+t().toFixed(1)+")"}();console.log(u);var d=Object(o.useState)(u),f=Object(a.a)(d,2),h=f[0],l=f[1];return Object(o.useEffect)((function(){!function(){var e=i.current;e.width=2*window.innerWidth,e.height=2*window.innerHeight,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px");var t=e.getContext("2d");t.scale(2,2),t.lineCap="round",t.strokeStyle="".concat(h),t.lineWidth=5,s.current=t}()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"On mouse drag we can draw some this"}),Object(c.jsx)("canvas",{onMouseDown:function(e){var t=e.nativeEvent,n=t.offsetX,c=t.offsetY;s.current.beginPath(),s.current.moveTo(n,c),r(!0)},onMouseUp:function(){s.current.closePath(),r(!1),l(u),console.log(u)},onMouseMove:function(e){var t=e.nativeEvent;if(n){var c=t.offsetX,o=t.offsetY;s.current.lineTo(c,o),s.current.stroke()}},ref:i})]})};var d=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(u,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),f()}},[[11,1,2]]]);
//# sourceMappingURL=main.23426f88.chunk.js.map