System.register(["./Dnz5lO7l-legacy.js","./BXJVplah-legacy.js","./c55txu2Y-legacy.js"],(function(t,e){"use strict";var i,a,l,s,r,o,n,d,c,p,g,m,x,b,h,f,u;return{setters:[t=>{i=t.A,a=t.r,l=t._},t=>{s=t._},t=>{r=t.v,o=t.o,n=t.c,d=t.a,c=t.t,p=t.Q,g=t.R,m=t.f,x=t.u,b=t.b,h=t.w,f=t.e,u=t.S}],execute:function(){var e=document.createElement("style");e.textContent=".article-list{border-radius:4px;width:282px;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}@media (max-width:767px){.article-list{width:100%}}.article-list .title{border-bottom-width:1px;border-color:#eff1f5;color:#22262a;font-weight:600;padding:12px 16px}.article-list .image{margin-right:8px;width:60px}.article-list .image .image-slot{padding-left:20px;padding-right:20px}.article-list .body{padding-left:16px;padding-right:16px}.article-list .body .a-list-item{border-bottom-width:1px;border-color:#eff1f5;font-size:12px;line-height:20px;padding-bottom:8px;padding-top:8px}.article-list .body .a-list-item .inner-item{align-items:flex-start;display:flex}.article-list .body .a-list-item:last-child{border-bottom-width:0}\n",document.head.appendChild(e);const w={en_US:{"最新博客":"Newest Blog"},zh_Hans_CN:{"最新博客":"最新博客"},zh_Hant_HK:{"最新博客":"最新博客"}},y={class:"article-list"},_={class:"title"},v={class:"body"},z={class:"flex-1"};t("_",{__name:"NewList",setup(t){const e=t=>{const e=x().$lang.value||"zh_Hans_CN",i=w[e]||w.zh_Hans_CN||{};return void 0===i[t]?t:i[t]},C=r((()=>i.map((t=>a(t))))),H=r((()=>C.value.concat().filter((t=>"blog"===t.c)).sort(((t,e)=>new Date(e.ti).getTime()-new Date(t.ti).getTime())).slice(0,6)));return(t,i)=>{const a=l,r=s;return o(),n("div",y,[d("p",_,c(e("最新博客")),1),d("div",v,[(o(!0),n(p,null,g(m(H),((t,e)=>(o(),n("div",{key:e,class:"a-list-item"},[b(r,{to:`/blog/${t.id}`,class:"inner-item"},{default:h((()=>[t.pi?(o(),f(a,{key:0,class:"image",src:t.pi},null,8,["src"])):u("",!0),d("span",z,c(t.t),1)])),_:2},1032,["to"])])))),128))])])}}})}}}));
