import{bk as T,aX as A,G as N,f as s}from"./DqBY2TGQ.js";class _ extends Error{constructor(r){super(r),this.name="ElementPlusError"}}function m(e,r){throw new _("[".concat(e,"] ").concat(r))}function R(e,r){}const Y="update:modelValue",C="change";var p=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(p||{});const u=e=>{const r=T(e)?e:[e],o=[];return r.forEach(E=>{var n;T(E)?o.push(...u(E)):A(E)&&T(E.children)?o.push(...u(E.children)):(o.push(E),A(E)&&((n=E.component)!=null&&n.subTree)&&o.push(...u(E.component.subTree)))}),o},M=({from:e,replacement:r,scope:o,version:E,ref:n,type:D="API"},S)=>{N(()=>s(S),L=>{},{immediate:!0})};export{C,p as P,Y as U,R as d,u as f,m as t,M as u};