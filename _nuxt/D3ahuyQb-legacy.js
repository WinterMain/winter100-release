System.register(["./D4FVC1K7-legacy.js","./DqTgHRfE-legacy.js","./9wYt_QiW-legacy.js"],(function(t,e){"use strict";var i,s,n,o,a,l,d,r,p,c,u,g,m,x,h,b,f,w;return{setters:[t=>{i=t.A,s=t.r,n=t._},t=>{o=t._},t=>{a=t.v,l=t.o,d=t.c,r=t.a,p=t.t,c=t.S,u=t.T,g=t.f,m=t.u,x=t.b,h=t.w,b=t.e,f=t.U,w=t.d}],execute:function(){var e=document.createElement("style");e.textContent=".question-list{border-radius:4px;width:282px;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}@media (max-width:767px){.question-list{width:100%}}.question-list .title{border-bottom-width:1px;border-color:#eff1f5;color:#22262a;font-weight:600;padding:12px 16px}.question-list .image{margin-right:8px;width:60px}.question-list .image .image-slot{padding-left:20px;padding-right:20px}.question-list .body{padding-left:16px;padding-right:16px}.question-list .body .a-list-item{border-bottom-width:1px;border-color:#eff1f5;font-size:12px;line-height:20px;padding-bottom:8px;padding-top:8px}.question-list .body .a-list-item .inner-item{align-items:flex-start;display:flex}.question-list .body .a-list-item:last-child{border-bottom-width:0}\n",document.head.appendChild(e);const y={en_US:{"回答":"Answer","最新问答":"Newest Answer"},zh_Hans_CN:{"回答":"回答","最新问答":"最新问答"},zh_Hant_HK:{"回答":"回答","最新问答":"最新問答"}},_={class:"question-list"},q={class:"title"},v={class:"body"},z={class:"inner-item"},C={class:"flex-1"},H={class:"text-12 text-theme mt-4"};t("_",{__name:"NewList",setup(t){const e=t=>{const e=m().$lang.value||"zh_Hans_CN",i=y[e]||y.zh_Hans_CN||{};return void 0===i[t]?t:i[t]},N=a((()=>i.map((t=>s(t))))),j=a((()=>N.value.concat().filter((t=>"question"===t.c)).sort(((t,e)=>new Date(e.ti).getTime()-new Date(t.ti).getTime())).slice(0,5)));return(t,i)=>{const s=n,a=o;return l(),d("div",_,[r("p",q,p(e("最新问答")),1),r("div",v,[(l(!0),d(c,null,u(g(j),((t,i)=>(l(),d("div",{key:i,class:"a-list-item"},[x(a,{to:`/question/${t.id}`},{default:h((()=>[r("div",z,[t.pi?(l(),b(s,{key:0,class:"image",src:t.pi},null,8,["src"])):f("",!0),r("span",C,p(t.t),1)]),r("div",H,[w(p(t.di)+" ",1),r("span",null,p(e("回答")),1)])])),_:2},1032,["to"])])))),128))])])}}})}}}));