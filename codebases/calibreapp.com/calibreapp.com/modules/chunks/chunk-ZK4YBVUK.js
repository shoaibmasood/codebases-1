import{a as v}from"./chunk-5ZVMZG6E.js";import{f as l,i as d}from"./chunk-ORNWO27Z.js";var s=l(d()),x=l(v());function c(){return c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},c.apply(this,arguments)}function h(n,t){if(n==null)return{};var r={},e=Object.keys(n),a,o;for(o=0;o<e.length;o++)a=e[o],!(t.indexOf(a)>=0)&&(r[a]=n[a]);return r}var y=(0,s.forwardRef)(function(t,r){var e=t.as,a=e===void 0?"span":e,o=t.style,p=o===void 0?{}:o,u=h(t,["as","style"]);return(0,s.createElement)(a,Object.assign({ref:r,style:c({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},p)},u))}),E=y;var g=["bottom","height","left","right","top","width"],m=function(t,r){return t===void 0&&(t={}),r===void 0&&(r={}),g.some(function(e){return t[e]!==r[e]})},i=new Map,f,b=function n(){var t=[];i.forEach(function(r,e){var a=e.getBoundingClientRect();m(a,r.rect)&&(r.rect=a,t.push(r))}),t.forEach(function(r){r.callbacks.forEach(function(e){return e(r.rect)})}),f=window.requestAnimationFrame(n)};function w(n,t){return{observe:function(){var e=i.size===0;i.has(n)?i.get(n).callbacks.push(t):i.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),e&&b()},unobserve:function(){var e=i.get(n);if(e){var a=e.callbacks.indexOf(t);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||i.delete(n),i.size||cancelAnimationFrame(f)}}}}var V=w;export{y as a,E as b,V as c};
//# sourceMappingURL=chunk-ZK4YBVUK.js.map