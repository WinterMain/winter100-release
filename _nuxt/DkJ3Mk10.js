import{h as F,n as z,r as T,bd as V,i as x,o as I,c as L,b,bO as j,e as ee,w as K,a as R,f as Q,ae as te,bP as re,u as ne,ag as oe,v as ae,Q as ie,R as se,t as Y}from"./D745Jq54.js";import{k as ue}from"./Bak1wwwv.js";import{u as le}from"./LXsn4Jrn.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var y=function(){return y=Object.assign||function(c){for(var l,u=1,f=arguments.length;u<f;u++){l=arguments[u];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(c[d]=l[d])}return c},y.apply(this,arguments)};var N;(function(s){var c=function(){function n(e,t,r,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],i=0;i<this.size;i++)a.push(!1);for(var i=0;i<this.size;i++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var h=this.addEccAndInterleave(r);if(this.drawCodewords(h),o==-1)for(var v=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var g=this.getPenaltyScore();g<v&&(o=i,v=g),this.applyMask(i)}f(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return n.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,o,a,i){if(r===void 0&&(r=1),o===void 0&&(o=40),a===void 0&&(a=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=o&&o<=n.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var h,v;for(h=r;;h++){var g=n.getNumDataCodewords(h,t)*8,C=d.getTotalBits(e,h);if(C<=g){v=C;break}if(h>=o)throw new RangeError("Data too long")}for(var p=0,E=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];p<E.length;p++){var w=E[p];i&&v<=n.getNumDataCodewords(h,w)*8&&(t=w)}for(var m=[],M=0,A=e;M<A.length;M++){var _=A[M];l(_.mode.modeBits,4,m),l(_.numChars,_.mode.numCharCountBits(h),m);for(var S=0,B=_.getData();S<B.length;S++){var Z=B[S];m.push(Z)}}f(m.length==v);var D=n.getNumDataCodewords(h,t)*8;f(m.length<=D),l(0,Math.min(4,D-m.length),m),l(0,(8-m.length%8)%8,m),f(m.length%8==0);for(var H=236;m.length<D;H^=253)l(H,8,m);for(var O=[];O.length*8<m.length;)O.push(0);return m.forEach(function(q,$){return O[$>>>3]|=q<<7-($&7)}),new n(h,t,O,a)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var o=0;o<r;o++)e==0&&o==0||e==0&&o==r-1||e==r-1&&o==0||this.drawAlignmentPattern(t[e],t[o]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,o=0;o<10;o++)r=r<<1^(r>>>9)*1335;var a=(t<<10|r)^21522;f(a>>>15==0);for(var o=0;o<=5;o++)this.setFunctionModule(8,o,u(a,o));this.setFunctionModule(8,7,u(a,6)),this.setFunctionModule(8,8,u(a,7)),this.setFunctionModule(7,8,u(a,8));for(var o=9;o<15;o++)this.setFunctionModule(14-o,8,u(a,o));for(var o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,u(a,o));for(var o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,u(a,o));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;f(r>>>18==0);for(var t=0;t<18;t++){var o=u(r,t),a=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(a,i,o),this.setFunctionModule(i,a,o)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var o=-4;o<=4;o++){var a=Math.max(Math.abs(o),Math.abs(r)),i=e+o,h=t+r;0<=i&&i<this.size&&0<=h&&h<this.size&&this.setFunctionModule(i,h,a!=2&&a!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,Math.max(Math.abs(o),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),h=o-i%o,v=Math.floor(i/o),g=[],C=n.reedSolomonComputeDivisor(a),p=0,E=0;p<o;p++){var w=e.slice(E,E+v-a+(p<h?0:1));E+=w.length;var m=n.reedSolomonComputeRemainder(w,C);p<h&&w.push(0),g.push(w.concat(m))}for(var M=[],A=function(_){g.forEach(function(S,B){(_!=v-a||B>=h)&&M.push(S[_])})},p=0;p<g[0].length;p++)A(p);return f(M.length==i),M},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var o=0;o<this.size;o++)for(var a=0;a<2;a++){var i=r-a,h=(r+1&2)==0,v=h?this.size-1-o:o;!this.isFunction[v][i]&&t<e.length*8&&(this.modules[v][i]=u(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var o=void 0;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,o=0,a=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(o++,o==5?e+=n.PENALTY_N1:o>5&&e++):(this.finderPenaltyAddHistory(o,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,a)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,h=0,a=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(h++,h==5?e+=n.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],h=1);e+=this.finderPenaltyTerminateAndCount(r,h,a)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var v=this.modules[t][i];v==this.modules[t][i+1]&&v==this.modules[t+1][i]&&v==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var g=0,C=0,p=this.modules;C<p.length;C++){var E=p[C];g=E.reduce(function(M,A){return M+(A?1:0)},g)}var w=this.size*this.size,m=Math.ceil(Math.abs(g*20-w*10)/w)-1;return f(0<=m&&m<=9),e+=m*n.PENALTY_N4,f(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var o=1,r=0;r<e;r++){for(var a=0;a<t.length;a++)t[a]=n.reedSolomonMultiply(t[a],o),a+1<t.length&&(t[a]^=t[a+1]);o=n.reedSolomonMultiply(o,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),o=function(v){var g=v^r.shift();r.push(0),t.forEach(function(C,p){return r[p]^=n.reedSolomonMultiply(C,g)})},a=0,i=e;a<i.length;a++){var h=i[a];o(h)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(t>>>o&1)*e;return f(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];f(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();s.QrCode=c;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function u(n,e){return(n>>>e&1)!=0}function f(n){if(!n)throw new Error("Assertion error")}var d=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var a=o[r];l(a,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var o=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+o),10),o*3+1,t),r+=o}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var o=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;o+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(o,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,o=0,a=e;o<a.length;o++){var i=a[o],h=i.mode.numCharCountBits(t);if(i.numChars>=1<<h)return 1/0;r+=4+h+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();s.QrSegment=d})(N||(N={}));(function(s){(function(c){var l=function(){function u(f,d){this.ordinal=f,this.formatBits=d}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();c.Ecc=l})(s.QrCode||(s.QrCode={}))})(N||(N={}));(function(s){(function(c){var l=function(){function u(f,d){this.modeBits=f,this.numBitsCharCount=d}return u.prototype.numCharCountBits=function(f){return this.numBitsCharCount[Math.floor((f+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();c.Mode=l})(s.QrSegment||(s.QrSegment={}))})(N||(N={}));var P=N,W="H",U={L:P.QrCode.Ecc.LOW,M:P.QrCode.Ecc.MEDIUM,Q:P.QrCode.Ecc.QUARTILE,H:P.QrCode.Ecc.HIGH},ce=function(){try{new Path2D().addPath(new Path2D)}catch(s){return!1}return!0}();function X(s){return s in U}function J(s,c){c===void 0&&(c=0);var l=[];return s.forEach(function(u,f){var d=null;u.forEach(function(n,e){if(!n&&d!==null){l.push("M".concat(d+c," ").concat(f+c,"h").concat(e-d,"v1H").concat(d+c,"z")),d=null;return}if(e===u.length-1){if(!n)return;d===null?l.push("M".concat(e+c,",").concat(f+c," h1v1H").concat(e+c,"z")):l.push("M".concat(d+c,",").concat(f+c," h").concat(e+1-d,"v1H").concat(d+c,"z"));return}n&&d===null&&(d=e)})}),l.join("")}var k={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:W,validator:function(s){return X(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},fe=y(y({},k),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),he=F({name:"QRCodeSvg",props:k,setup:function(s){var c=T(0),l=T(""),u=function(){var f=s.value,d=s.level,n=s.margin,e=P.QrCode.encodeText(f,U[d]).getModules();c.value=e.length+n*2,l.value=J(e,n)};return u(),V(u),function(){return z("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c.value," ").concat(c.value)},[z("path",{fill:s.background,d:"M0,0 h".concat(c.value,"v").concat(c.value,"H0z")}),z("path",{fill:s.foreground,d:l.value})])}}}),de=F({name:"QRCodeCanvas",props:k,setup:function(s){var c=T(null),l=function(){var u=s.value,f=s.level,d=s.size,n=s.margin,e=s.background,t=s.foreground,r=c.value;if(r){var o=r.getContext("2d");if(o){var a=P.QrCode.encodeText(u,U[f]).getModules(),i=a.length+n*2,h=window.devicePixelRatio||1,v=d/i*h;r.height=r.width=d*h,o.scale(v,v),o.fillStyle=e,o.fillRect(0,0,i,i),o.fillStyle=t,ce?o.fill(new Path2D(J(a,n))):a.forEach(function(g,C){g.forEach(function(p,E){p&&o.fillRect(E+n,C+n,1,1)})})}}};return x(l),V(l),function(){return z("canvas",{ref:c,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),ve=F({name:"Qrcode",render:function(){var s=this.$props,c=s.renderAs,l=s.value,u=s.size,f=s.margin,d=s.level,n=s.background,e=s.foreground,t=u>>>0,r=f>>>0,o=X(d)?d:W;return z(c==="svg"?he:de,{value:l,size:t,margin:r,level:o,background:n,foreground:e})},props:fe});const me={class:"c-common-qrcode"},pe={__name:"Qrcode",props:{value:{type:String,default:""},size:{type:Number,default:124}},setup(s){return(c,l)=>(I(),L("div",me,[b(ve,{value:s.value,size:s.size},null,8,["value","size"])]))}},ge={已复制:"Copied"},Ce={已复制:"已复制"},Ee={已复制:"已復制"},G={en_US:ge,zh_Hans_CN:Ce,zh_Hant_HK:Ee},we={__name:"Copy",props:{msg:{type:String,default:""},className:{type:String,default:""}},setup(s){const c=u=>{const d=ne().$lang.value||"zh_Hans_CN",n=G[d]||G.zh_Hans_CN||{};return n[u]===void 0?u:n[u]},{copy:l}=j();return(u,f)=>{const d=oe,n=ue;return I(),ee(n,{content:c("已复制"),manual:"",placement:"top",trigger:"click","auto-close":2e3},{default:K(()=>[R("span",{class:"c-copy",onClick:f[0]||(f[0]=e=>Q(l)(s.msg))},[b(d,{class:te(s.className)},{default:K(()=>[b(Q(re))]),_:1},8,["class"])])]),_:1},8,["content"])}}},Me={class:"donate-list"},_e={class:"ml-12"},Re={class:"flex items-center mt-4"},Ne=["src"],Ae={class:"ml-8 text-primary font-w500 text-16 flex-1"},Pe={class:"mt-12 text-addr"},Se={class:""},Be={__name:"Donate",props:{length:{type:Number,default:2}},setup(s){const c=s,{donateCoins:l}=le(),u=ae(()=>l.slice(0,c.length));return(f,d)=>{const n=pe,e=we;return I(),L("div",Me,[(I(!0),L(ie,null,se(Q(u),(t,r)=>(I(),L("div",{key:r,class:"donate-item"},[b(n,{value:t.address,size:60},null,8,["value"]),R("div",_e,[R("div",Re,[R("img",{src:t.icon,height:"30",class:"h-20"},null,8,Ne),R("span",Ae,Y(t.coin),1),b(e,{msg:t.address,"class-name":"text-12"},null,8,["msg"])]),R("p",Pe,[R("span",Se,Y(t.address),1)])])]))),128))])}}};export{Be as _};
