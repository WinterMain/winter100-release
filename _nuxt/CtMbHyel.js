import{i as m}from"./CYZCswX4.js";function p(o){const f=()=>{if(!o)return;const e=o.value||o;if(console.log(),!e||!e.getElementsByClassName||e.clientWidth<767)return;const n=e.getElementsByClassName("c-aside")[0],s=e.getElementsByClassName("c-outer")[0],t=n.getElementsByClassName("fixed-area")[0],l=80;if(t&&t.clientHeight&&t.clientWidth>0)if(s.offsetHeight-50>t.offsetHeight){const i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),c=i.top,a=t.clientHeight+c;if(c<0&&a<window.innerHeight){const g=r.width;t.setAttribute("fixed",!0),t.style.width=g+"px";const d=()=>Math.min(i.bottom,window.innerHeight)-l>r.height?(t.style.bottom="auto",t.style.top=l+"px",!0):!1;i.bottom<window.innerHeight?d()||(t.style.top="auto",t.style.bottom=window.innerHeight-i.bottom+"px"):d()||(t.style.top="auto",t.style.bottom="10px")}else t.removeAttribute("fixed")}else s.offsetHeight-50<=t.offsetHeight&&t.removeAttribute("fixed")};m(()=>{document.addEventListener("scroll",f)})}export{p as u};
