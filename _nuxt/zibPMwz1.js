import{g as R,h as B,r as _,u as q,i as N,j as T,k as E,l as U,m as D,n as A,p as k,q as F,s as I,v as b,x as O,y as w,z as V,A as z,B as H,C as M,D as $}from"./DbLb0Jbh.js";async function j(t,n=R()){const{path:v,matched:p}=n.resolve(t);if(!p.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(v)))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>j(t,n));n._routePreloaded.add(v);const r=p.map(c=>{var i;return(i=c.components)==null?void 0:i.default}).filter(c=>typeof c=="function");for(const c of r){const i=Promise.resolve(c()).catch(()=>{}).finally(()=>e.splice(e.indexOf(i)));e.push(i)}await Promise.all(e)}const Q=(...t)=>t.find(n=>n!==void 0);function W(t){const n=t.componentName||"NuxtLink";function v(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return L(e,t.trailingSlash);const c="path"in e&&e.path!==void 0?e.path:r(e).path;return{...e,name:void 0,path:L(c,t.trailingSlash)}}function p(e){var S,C,x;const r=R(),c=H(),i=b(()=>!!e.target&&e.target!=="_self"),d=b(()=>{const a=e.to||e.href||"";return typeof a=="string"&&O(a,{acceptRelative:!0})}),y=k("RouterLink"),g=y&&typeof y!="string"?y.useLink:void 0,h=b(()=>{if(e.external)return!0;const a=e.to||e.href||"";return typeof a=="object"?!1:a===""||d.value}),s=b(()=>{const a=e.to||e.href||"";return h.value?a:v(a,r.resolve)}),f=h.value||g==null?void 0:g({...e,to:s}),m=b(()=>{var a,u;if(!s.value||d.value)return s.value;if(h.value){const l=typeof s.value=="object"&&"path"in s.value?w(s.value):s.value,o=typeof l=="object"?r.resolve(l).href:l;return v(o,r.resolve)}return typeof s.value=="object"?(u=(a=r.resolve(s.value))==null?void 0:a.href)!=null?u:null:v(V(c.app.baseURL,s.value),r.resolve)});return{to:s,hasTarget:i,isAbsoluteUrl:d,isExternal:h,href:m,isActive:(S=f==null?void 0:f.isActive)!=null?S:b(()=>s.value===r.currentRoute.value.path),isExactActive:(C=f==null?void 0:f.isExactActive)!=null?C:b(()=>s.value===r.currentRoute.value.path),route:(x=f==null?void 0:f.route)!=null?x:b(()=>r.resolve(s.value)),async navigate(){await z(m.value,{replace:e.replace,external:h.value||i.value})}}}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:p,setup(e,{slots:r}){const c=R(),{to:i,href:d,navigate:y,isExternal:g,hasTarget:h,isAbsoluteUrl:s}=p(e),f=_(!1),m=_(null),S=a=>{var u;m.value=e.custom?(u=a==null?void 0:a.$el)==null?void 0:u.nextElementSibling:a==null?void 0:a.$el};function C(a){var u,l,o,P;return!f.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===a:(o=(u=e.prefetchOn)==null?void 0:u[a])!=null?o:(l=t.prefetchOn)==null?void 0:l[a])&&((P=e.prefetch)!=null?P:t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()}async function x(a=q()){if(f.value)return;f.value=!0;const u=typeof i.value=="string"?i.value:g.value?w(i.value):c.resolve(i.value).fullPath;await Promise.all([a.hooks.callHook("link:prefetch",u).catch(()=>{}),!g.value&&!h.value&&j(i.value,c).catch(()=>{})])}if(C("visibility")){const a=q();let u,l=null;N(()=>{const o=G();T(()=>{u=E(()=>{var P;(P=m==null?void 0:m.value)!=null&&P.tagName&&(l=o.observe(m.value,async()=>{l==null||l(),l=null,await x(a)}))})})}),U(()=>{u&&D(u),l==null||l(),l=null})}return()=>{var l;if(!g.value&&!h.value){const o={ref:S,to:i.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(C("interaction")&&(o.onPointerenter=x.bind(null,void 0),o.onFocus=x.bind(null,void 0)),f.value&&(o.class=e.prefetchedClass||t.prefetchedClass),o.rel=e.rel||void 0),A(k("RouterLink"),o,r.default)}const a=e.target||null,u=Q(e.noRel?"":e.rel,t.externalRelAttribute,s.value||h.value?"noopener noreferrer":"")||null;return e.custom?r.default?r.default({href:d.value,navigate:y,prefetch:x,get route(){if(!d.value)return;const o=new URL(d.value,window.location.href);return{path:o.pathname,fullPath:o.pathname,get query(){return F(o.search)},hash:o.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d.value}},rel:u,target:a,isExternal:g.value||h.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:m,href:d.value||null,rel:u,target:a},(l=r.default)==null?void 0:l.call(r))}}})}const X=W(I);function L(t,n){const v=n==="append"?M:$;return O(t)&&!t.startsWith("http")?t:v(t,!0)}function G(){const t=q();if(t._observer)return t._observer;let n=null;const v=new Map,p=(r,c)=>(n||(n=new IntersectionObserver(i=>{for(const d of i){const y=v.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&y&&y()}})),v.set(r,c),n.observe(r),()=>{v.delete(r),n.unobserve(r),v.size===0&&(n.disconnect(),n=null)});return t._observer={observe:p}}function J(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{X as _};