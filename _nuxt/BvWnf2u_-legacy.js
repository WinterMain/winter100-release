System.register(["./BUrHG7Hw-legacy.js"],(function(t,e){"use strict";var i;return{setters:[t=>{i=t.i}],execute:function(){t("u",(function(t){const e=()=>{if(!t)return;const e=t.value||t;if(console.log(),!e||!e.getElementsByClassName||e.clientWidth<767)return;const i=e.getElementsByClassName("c-aside")[0],n=e.getElementsByClassName("c-outer")[0],o=i.getElementsByClassName("fixed-area")[0];if(o&&o.clientHeight&&o.clientWidth>0)if(n.offsetHeight-50>o.offsetHeight){const t=i.getBoundingClientRect(),e=o.getBoundingClientRect(),n=t.top,s=o.clientHeight+n;if(n<0&&s<window.innerHeight){const i=e.width;o.setAttribute("fixed",!0),o.style.width=i+"px";const n=()=>Math.min(t.bottom,window.innerHeight)-80>e.height&&(o.style.bottom="auto",o.style.top="80px",!0);t.bottom<window.innerHeight?n()||(o.style.top="auto",o.style.bottom=window.innerHeight-t.bottom+"px"):n()||(o.style.top="auto",o.style.bottom="10px")}else o.removeAttribute("fixed")}else n.offsetHeight-50<=o.offsetHeight&&o.removeAttribute("fixed")};i((()=>{document.addEventListener("scroll",e)}))}))}}}));
