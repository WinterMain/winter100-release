System.register(["./c55txu2Y-legacy.js"],(function(e,s){"use strict";var t;return{setters:[e=>{t=e.M}],execute:function(){function s(e){return void 0===e||e instanceof Array?e:[e]}e("u",t("main",{state:()=>({category:"browserplugin",nav:"all",likes:[],donateCoins:[{coin:"BTC",address:"1Q6ZDFC3FueXY3JocmeMqgiSsGGtppbvz2",icon:"/images/btc.png"},{coin:"ETH",address:"0xff6FC30033269845d196cB48F6a0660598D218D8",icon:"/images/eth.png"},{coin:"CET",address:"0xff6FC30033269845d196cB48F6a0660598D218D8",icon:"/images/cet.png"}]}),getters:{},actions:{setCategory(e){this.category=e||"browserplugin"},setNav(e){this.nav=e},setLikes(e){this.likes=s(e)||[],localStorage.SUPER_TOOLS_LIKE=JSON.stringify(this.likes)},initLikes(){try{{const e=JSON.parse(localStorage.SUPER_TOOLS_LIKE);this.likes=s(e)||[]}}catch(e){}}}}))}}}));
