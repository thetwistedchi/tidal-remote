var ce=Object.create;var $t=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var ve=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var Z=(t,s)=>()=>{try{return s||t((s={exports:{}}).exports,s),s.exports}catch(m){throw s=0,m}};var he=(t,s,m,A)=>{if(s&&typeof s=="object"||typeof s=="function")for(let S of ve(s))!ge.call(t,S)&&S!==m&&$t(t,S,{get:()=>s[S],enumerable:!(A=pe(s,S))||A.enumerable});return t};var G=(t,s,m)=>(m=t!=null?ce(fe(t)):{},he(s||!t||!t.__esModule?$t(m,"default",{value:t,enumerable:!0}):m,t));var ht=Z((Le,gt)=>{gt.exports=luna?.core?.modules?.["@luna/core"];if(gt.exports===void 0)throw new Error("Cannot find module @luna/core in luna.core.modules");luna.core.LunaPlugin.getByName("@luna/core")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var bt=Z((Ce,mt)=>{mt.exports=luna?.core?.modules?.["@luna/lib"];if(mt.exports===void 0)throw new Error("Cannot find module @luna/lib in luna.core.modules");luna.core.LunaPlugin.getByName("@luna/lib")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var Ft=Z((Ee,Tt)=>{Tt.exports=luna?.core?.modules?.react;if(Tt.exports===void 0)throw new Error("Cannot find module react in luna.core.modules");luna.core.LunaPlugin.getByName("react")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var Kt=Z((Be,At)=>{At.exports=luna?.core?.modules?.["@luna/ui"];if(At.exports===void 0)throw new Error("Cannot find module @luna/ui in luna.core.modules");luna.core.LunaPlugin.getByName("@luna/ui")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var Xt=Z((Jt,Wt)=>{var Yt=(function(){var t=function(b,x){var f=236,g=17,a=b,p=m[x],n=null,e=0,v=null,l=[],c={},L=function(i,o){e=a*4+17,n=(function(r){for(var d=new Array(r),u=0;u<r;u+=1){d[u]=new Array(r);for(var h=0;h<r;h+=1)d[u][h]=null}return d})(e),C(0,0),C(e-7,0),C(0,e-7),D(),P(),j(i,o),a>=7&&q(i),v==null&&(v=de(a,p,l)),Q(v,o)},C=function(i,o){for(var r=-1;r<=7;r+=1)if(!(i+r<=-1||e<=i+r))for(var d=-1;d<=7;d+=1)o+d<=-1||e<=o+d||(0<=r&&r<=6&&(d==0||d==6)||0<=d&&d<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=d&&d<=4?n[i+r][o+d]=!0:n[i+r][o+d]=!1)},_=function(){for(var i=0,o=0,r=0;r<8;r+=1){L(!0,r);var d=S.getLostPoint(c);(r==0||i>d)&&(i=d,o=r)}return o},P=function(){for(var i=8;i<e-8;i+=1)n[i][6]==null&&(n[i][6]=i%2==0);for(var o=8;o<e-8;o+=1)n[6][o]==null&&(n[6][o]=o%2==0)},D=function(){for(var i=S.getPatternPosition(a),o=0;o<i.length;o+=1)for(var r=0;r<i.length;r+=1){var d=i[o],u=i[r];if(n[d][u]==null)for(var h=-2;h<=2;h+=1)for(var k=-2;k<=2;k+=1)h==-2||h==2||k==-2||k==2||h==0&&k==0?n[d+h][u+k]=!0:n[d+h][u+k]=!1}},q=function(i){for(var o=S.getBCHTypeNumber(a),r=0;r<18;r+=1){var d=!i&&(o>>r&1)==1;n[Math.floor(r/3)][r%3+e-8-3]=d}for(var r=0;r<18;r+=1){var d=!i&&(o>>r&1)==1;n[r%3+e-8-3][Math.floor(r/3)]=d}},j=function(i,o){for(var r=p<<3|o,d=S.getBCHTypeInfo(r),u=0;u<15;u+=1){var h=!i&&(d>>u&1)==1;u<6?n[u][8]=h:u<8?n[u+1][8]=h:n[e-15+u][8]=h}for(var u=0;u<15;u+=1){var h=!i&&(d>>u&1)==1;u<8?n[8][e-u-1]=h:u<9?n[8][15-u-1+1]=h:n[8][15-u-1]=h}n[e-8][8]=!i},Q=function(i,o){for(var r=-1,d=e-1,u=7,h=0,k=S.getMaskFunction(o),y=e-1;y>0;y-=2)for(y==6&&(y-=1);;){for(var E=0;E<2;E+=1)if(n[d][y-E]==null){var I=!1;h<i.length&&(I=(i[h]>>>u&1)==1);var w=k(d,y-E);w&&(I=!I),n[d][y-E]=I,u-=1,u==-1&&(h+=1,u=7)}if(d+=r,d<0||e<=d){d-=r,r=-r;break}}},J=function(i,o){for(var r=0,d=0,u=0,h=new Array(o.length),k=new Array(o.length),y=0;y<o.length;y+=1){var E=o[y].dataCount,I=o[y].totalCount-E;d=Math.max(d,E),u=Math.max(u,I),h[y]=new Array(E);for(var w=0;w<h[y].length;w+=1)h[y][w]=255&i.getBuffer()[w+r];r+=E;var N=S.getErrorCorrectPolynomial(I),O=V(h[y],N.getLength()-1),_t=O.mod(N);k[y]=new Array(N.getLength()-1);for(var w=0;w<k[y].length;w+=1){var Et=w+_t.getLength()-k[y].length;k[y][w]=Et>=0?_t.getAt(Et):0}}for(var Bt=0,w=0;w<o.length;w+=1)Bt+=o[w].totalCount;for(var ft=new Array(Bt),lt=0,w=0;w<d;w+=1)for(var y=0;y<o.length;y+=1)w<h[y].length&&(ft[lt]=h[y][w],lt+=1);for(var w=0;w<u;w+=1)for(var y=0;y<o.length;y+=1)w<k[y].length&&(ft[lt]=k[y][w],lt+=1);return ft},de=function(i,o,r){for(var d=ot.getRSBlocks(i,o),u=st(),h=0;h<r.length;h+=1){var k=r[h];u.put(k.getMode(),4),u.put(k.getLength(),S.getLengthInBits(k.getMode(),i)),k.write(u)}for(var y=0,h=0;h<d.length;h+=1)y+=d[h].dataCount;if(u.getLengthInBits()>y*8)throw"code length overflow. ("+u.getLengthInBits()+">"+y*8+")";for(u.getLengthInBits()+4<=y*8&&u.put(0,4);u.getLengthInBits()%8!=0;)u.putBit(!1);for(;!(u.getLengthInBits()>=y*8||(u.put(f,8),u.getLengthInBits()>=y*8));)u.put(g,8);return J(u,d)};c.addData=function(i,o){o=o||"Byte";var r=null;switch(o){case"Numeric":r=Y(i);break;case"Alphanumeric":r=R(i);break;case"Byte":r=X(i);break;case"Kanji":r=ae(i);break;default:throw"mode:"+o}l.push(r),v=null},c.isDark=function(i,o){if(i<0||e<=i||o<0||e<=o)throw i+","+o;return n[i][o]},c.getModuleCount=function(){return e},c.make=function(){if(a<1){for(var i=1;i<40;i++){for(var o=ot.getRSBlocks(i,p),r=st(),d=0;d<l.length;d++){var u=l[d];r.put(u.getMode(),4),r.put(u.getLength(),S.getLengthInBits(u.getMode(),i)),u.write(r)}for(var h=0,d=0;d<o.length;d++)h+=o[d].dataCount;if(r.getLengthInBits()<=h*8)break}a=i}L(!1,_())},c.createTableTag=function(i,o){i=i||2,o=typeof o>"u"?i*4:o;var r="";r+='<table style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: "+o+"px;",r+='">',r+="<tbody>";for(var d=0;d<c.getModuleCount();d+=1){r+="<tr>";for(var u=0;u<c.getModuleCount();u+=1)r+='<td style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: 0px;",r+=" width: "+i+"px;",r+=" height: "+i+"px;",r+=" background-color: ",r+=c.isDark(d,u)?"#000000":"#ffffff",r+=";",r+='"/>';r+="</tr>"}return r+="</tbody>",r+="</table>",r},c.createSvgTag=function(i,o,r,d){var u={};typeof arguments[0]=="object"&&(u=arguments[0],i=u.cellSize,o=u.margin,r=u.alt,d=u.title),i=i||2,o=typeof o>"u"?i*4:o,r=typeof r=="string"?{text:r}:r||{},r.text=r.text||null,r.id=r.text?r.id||"qrcode-description":null,d=typeof d=="string"?{text:d}:d||{},d.text=d.text||null,d.id=d.text?d.id||"qrcode-title":null;var h=c.getModuleCount()*i+o*2,k,y,E,I,w="",N;for(N="l"+i+",0 0,"+i+" -"+i+",0 0,-"+i+"z ",w+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',w+=u.scalable?"":' width="'+h+'px" height="'+h+'px"',w+=' viewBox="0 0 '+h+" "+h+'" ',w+=' preserveAspectRatio="xMinYMin meet"',w+=d.text||r.text?' role="img" aria-labelledby="'+W([d.id,r.id].join(" ").trim())+'"':"",w+=">",w+=d.text?'<title id="'+W(d.id)+'">'+W(d.text)+"</title>":"",w+=r.text?'<description id="'+W(r.id)+'">'+W(r.text)+"</description>":"",w+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',w+='<path d="',E=0;E<c.getModuleCount();E+=1)for(I=E*i+o,k=0;k<c.getModuleCount();k+=1)c.isDark(E,k)&&(y=k*i+o,w+="M"+y+","+I+N);return w+='" stroke="transparent" fill="black"/>',w+="</svg>",w},c.createDataURL=function(i,o){i=i||2,o=typeof o>"u"?i*4:o;var r=c.getModuleCount()*i+o*2,d=o,u=r-o;return le(r,r,function(h,k){if(d<=h&&h<u&&d<=k&&k<u){var y=Math.floor((h-d)/i),E=Math.floor((k-d)/i);return c.isDark(E,y)?0:1}else return 1})},c.createImgTag=function(i,o,r){i=i||2,o=typeof o>"u"?i*4:o;var d=c.getModuleCount()*i+o*2,u="";return u+="<img",u+=' src="',u+=c.createDataURL(i,o),u+='"',u+=' width="',u+=d,u+='"',u+=' height="',u+=d,u+='"',r&&(u+=' alt="',u+=W(r),u+='"'),u+="/>",u};var W=function(i){for(var o="",r=0;r<i.length;r+=1){var d=i.charAt(r);switch(d){case"<":o+="&lt;";break;case">":o+="&gt;";break;case"&":o+="&amp;";break;case'"':o+="&quot;";break;default:o+=d;break}}return o},ue=function(i){var o=1;i=typeof i>"u"?o*2:i;var r=c.getModuleCount()*o+i*2,d=i,u=r-i,h,k,y,E,I,w={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},N={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},O="";for(h=0;h<r;h+=2){for(y=Math.floor((h-d)/o),E=Math.floor((h+1-d)/o),k=0;k<r;k+=1)I="\u2588",d<=k&&k<u&&d<=h&&h<u&&c.isDark(y,Math.floor((k-d)/o))&&(I=" "),d<=k&&k<u&&d<=h+1&&h+1<u&&c.isDark(E,Math.floor((k-d)/o))?I+=" ":I+="\u2588",O+=i<1&&h+1>=u?N[I]:w[I];O+=`
`}return r%2&&i>0?O.substring(0,O.length-r-1)+Array(r+1).join("\u2580"):O.substring(0,O.length-1)};return c.createASCII=function(i,o){if(i=i||1,i<2)return ue(o);i-=1,o=typeof o>"u"?i*2:o;var r=c.getModuleCount()*i+o*2,d=o,u=r-o,h,k,y,E,I=Array(i+1).join("\u2588\u2588"),w=Array(i+1).join("  "),N="",O="";for(h=0;h<r;h+=1){for(y=Math.floor((h-d)/i),O="",k=0;k<r;k+=1)E=1,d<=k&&k<u&&d<=h&&h<u&&c.isDark(y,Math.floor((k-d)/i))&&(E=0),O+=E?I:w;for(y=0;y<i;y+=1)N+=O+`
`}return N.substring(0,N.length-1)},c.renderTo2dContext=function(i,o){o=o||2;for(var r=c.getModuleCount(),d=0;d<r;d++)for(var u=0;u<r;u++)i.fillStyle=c.isDark(d,u)?"black":"white",i.fillRect(d*o,u*o,o,o)},c};t.stringToBytesFuncs={default:function(b){for(var x=[],f=0;f<b.length;f+=1){var g=b.charCodeAt(f);x.push(g&255)}return x}},t.stringToBytes=t.stringToBytesFuncs.default,t.createStringToBytes=function(b,x){var f=(function(){for(var a=oe(b),p=function(){var P=a.read();if(P==-1)throw"eof";return P},n=0,e={};;){var v=a.read();if(v==-1)break;var l=p(),c=p(),L=p(),C=String.fromCharCode(v<<8|l),_=c<<8|L;e[C]=_,n+=1}if(n!=x)throw n+" != "+x;return e})(),g=63;return function(a){for(var p=[],n=0;n<a.length;n+=1){var e=a.charCodeAt(n);if(e<128)p.push(e);else{var v=f[a.charAt(n)];typeof v=="number"?(v&255)==v?p.push(v):(p.push(v>>>8),p.push(v&255)):p.push(g)}}return p}};var s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},m={L:1,M:0,Q:3,H:2},A={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},S=(function(){var b=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],x=1335,f=7973,g=21522,a={},p=function(n){for(var e=0;n!=0;)e+=1,n>>>=1;return e};return a.getBCHTypeInfo=function(n){for(var e=n<<10;p(e)-p(x)>=0;)e^=x<<p(e)-p(x);return(n<<10|e)^g},a.getBCHTypeNumber=function(n){for(var e=n<<12;p(e)-p(f)>=0;)e^=f<<p(e)-p(f);return n<<12|e},a.getPatternPosition=function(n){return b[n-1]},a.getMaskFunction=function(n){switch(n){case A.PATTERN000:return function(e,v){return(e+v)%2==0};case A.PATTERN001:return function(e,v){return e%2==0};case A.PATTERN010:return function(e,v){return v%3==0};case A.PATTERN011:return function(e,v){return(e+v)%3==0};case A.PATTERN100:return function(e,v){return(Math.floor(e/2)+Math.floor(v/3))%2==0};case A.PATTERN101:return function(e,v){return e*v%2+e*v%3==0};case A.PATTERN110:return function(e,v){return(e*v%2+e*v%3)%2==0};case A.PATTERN111:return function(e,v){return(e*v%3+(e+v)%2)%2==0};default:throw"bad maskPattern:"+n}},a.getErrorCorrectPolynomial=function(n){for(var e=V([1],0),v=0;v<n;v+=1)e=e.multiply(V([1,M.gexp(v)],0));return e},a.getLengthInBits=function(n,e){if(1<=e&&e<10)switch(n){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:return 8;case s.MODE_KANJI:return 8;default:throw"mode:"+n}else if(e<27)switch(n){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw"mode:"+n}else if(e<41)switch(n){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw"mode:"+n}else throw"type:"+e},a.getLostPoint=function(n){for(var e=n.getModuleCount(),v=0,l=0;l<e;l+=1)for(var c=0;c<e;c+=1){for(var L=0,C=n.isDark(l,c),_=-1;_<=1;_+=1)if(!(l+_<0||e<=l+_))for(var P=-1;P<=1;P+=1)c+P<0||e<=c+P||_==0&&P==0||C==n.isDark(l+_,c+P)&&(L+=1);L>5&&(v+=3+L-5)}for(var l=0;l<e-1;l+=1)for(var c=0;c<e-1;c+=1){var D=0;n.isDark(l,c)&&(D+=1),n.isDark(l+1,c)&&(D+=1),n.isDark(l,c+1)&&(D+=1),n.isDark(l+1,c+1)&&(D+=1),(D==0||D==4)&&(v+=3)}for(var l=0;l<e;l+=1)for(var c=0;c<e-6;c+=1)n.isDark(l,c)&&!n.isDark(l,c+1)&&n.isDark(l,c+2)&&n.isDark(l,c+3)&&n.isDark(l,c+4)&&!n.isDark(l,c+5)&&n.isDark(l,c+6)&&(v+=40);for(var c=0;c<e;c+=1)for(var l=0;l<e-6;l+=1)n.isDark(l,c)&&!n.isDark(l+1,c)&&n.isDark(l+2,c)&&n.isDark(l+3,c)&&n.isDark(l+4,c)&&!n.isDark(l+5,c)&&n.isDark(l+6,c)&&(v+=40);for(var q=0,c=0;c<e;c+=1)for(var l=0;l<e;l+=1)n.isDark(l,c)&&(q+=1);var j=Math.abs(100*q/e/e-50)/5;return v+=j*10,v},a})(),M=(function(){for(var b=new Array(256),x=new Array(256),f=0;f<8;f+=1)b[f]=1<<f;for(var f=8;f<256;f+=1)b[f]=b[f-4]^b[f-5]^b[f-6]^b[f-8];for(var f=0;f<255;f+=1)x[b[f]]=f;var g={};return g.glog=function(a){if(a<1)throw"glog("+a+")";return x[a]},g.gexp=function(a){for(;a<0;)a+=255;for(;a>=256;)a-=255;return b[a]},g})();function V(b,x){if(typeof b.length>"u")throw b.length+"/"+x;var f=(function(){for(var a=0;a<b.length&&b[a]==0;)a+=1;for(var p=new Array(b.length-a+x),n=0;n<b.length-a;n+=1)p[n]=b[n+a];return p})(),g={};return g.getAt=function(a){return f[a]},g.getLength=function(){return f.length},g.multiply=function(a){for(var p=new Array(g.getLength()+a.getLength()-1),n=0;n<g.getLength();n+=1)for(var e=0;e<a.getLength();e+=1)p[n+e]^=M.gexp(M.glog(g.getAt(n))+M.glog(a.getAt(e)));return V(p,0)},g.mod=function(a){if(g.getLength()-a.getLength()<0)return g;for(var p=M.glog(g.getAt(0))-M.glog(a.getAt(0)),n=new Array(g.getLength()),e=0;e<g.getLength();e+=1)n[e]=g.getAt(e);for(var e=0;e<a.getLength();e+=1)n[e]^=M.gexp(M.glog(a.getAt(e))+p);return V(n,0).mod(a)},g}var ot=(function(){var b=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],x=function(a,p){var n={};return n.totalCount=a,n.dataCount=p,n},f={},g=function(a,p){switch(p){case m.L:return b[(a-1)*4+0];case m.M:return b[(a-1)*4+1];case m.Q:return b[(a-1)*4+2];case m.H:return b[(a-1)*4+3];default:return}};return f.getRSBlocks=function(a,p){var n=g(a,p);if(typeof n>"u")throw"bad rs block @ typeNumber:"+a+"/errorCorrectionLevel:"+p;for(var e=n.length/3,v=[],l=0;l<e;l+=1)for(var c=n[l*3+0],L=n[l*3+1],C=n[l*3+2],_=0;_<c;_+=1)v.push(x(L,C));return v},f})(),st=function(){var b=[],x=0,f={};return f.getBuffer=function(){return b},f.getAt=function(g){var a=Math.floor(g/8);return(b[a]>>>7-g%8&1)==1},f.put=function(g,a){for(var p=0;p<a;p+=1)f.putBit((g>>>a-p-1&1)==1)},f.getLengthInBits=function(){return x},f.putBit=function(g){var a=Math.floor(x/8);b.length<=a&&b.push(0),g&&(b[a]|=128>>>x%8),x+=1},f},Y=function(b){var x=s.MODE_NUMBER,f=b,g={};g.getMode=function(){return x},g.getLength=function(n){return f.length},g.write=function(n){for(var e=f,v=0;v+2<e.length;)n.put(a(e.substring(v,v+3)),10),v+=3;v<e.length&&(e.length-v==1?n.put(a(e.substring(v,v+1)),4):e.length-v==2&&n.put(a(e.substring(v,v+2)),7))};var a=function(n){for(var e=0,v=0;v<n.length;v+=1)e=e*10+p(n.charAt(v));return e},p=function(n){if("0"<=n&&n<="9")return n.charCodeAt(0)-48;throw"illegal char :"+n};return g},R=function(b){var x=s.MODE_ALPHA_NUM,f=b,g={};g.getMode=function(){return x},g.getLength=function(p){return f.length},g.write=function(p){for(var n=f,e=0;e+1<n.length;)p.put(a(n.charAt(e))*45+a(n.charAt(e+1)),11),e+=2;e<n.length&&p.put(a(n.charAt(e)),6)};var a=function(p){if("0"<=p&&p<="9")return p.charCodeAt(0)-48;if("A"<=p&&p<="Z")return p.charCodeAt(0)-65+10;switch(p){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+p}};return g},X=function(b){var x=s.MODE_8BIT_BYTE,f=b,g=t.stringToBytes(b),a={};return a.getMode=function(){return x},a.getLength=function(p){return g.length},a.write=function(p){for(var n=0;n<g.length;n+=1)p.put(g[n],8)},a},ae=function(b){var x=s.MODE_KANJI,f=b,g=t.stringToBytesFuncs.SJIS;if(!g)throw"sjis not supported.";(function(n,e){var v=g(n);if(v.length!=2||(v[0]<<8|v[1])!=e)throw"sjis not supported."})("\u53CB",38726);var a=g(b),p={};return p.getMode=function(){return x},p.getLength=function(n){return~~(a.length/2)},p.write=function(n){for(var e=a,v=0;v+1<e.length;){var l=(255&e[v])<<8|255&e[v+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(v+1)+"/"+l;l=(l>>>8&255)*192+(l&255),n.put(l,13),v+=2}if(v<e.length)throw"illegal char at "+(v+1)},p},Mt=function(){var b=[],x={};return x.writeByte=function(f){b.push(f&255)},x.writeShort=function(f){x.writeByte(f),x.writeByte(f>>>8)},x.writeBytes=function(f,g,a){g=g||0,a=a||f.length;for(var p=0;p<a;p+=1)x.writeByte(f[p+g])},x.writeString=function(f){for(var g=0;g<f.length;g+=1)x.writeByte(f.charCodeAt(g))},x.toByteArray=function(){return b},x.toString=function(){var f="";f+="[";for(var g=0;g<b.length;g+=1)g>0&&(f+=","),f+=b[g];return f+="]",f},x},ie=function(){var b=0,x=0,f=0,g="",a={},p=function(e){g+=String.fromCharCode(n(e&63))},n=function(e){if(!(e<0)){if(e<26)return 65+e;if(e<52)return 97+(e-26);if(e<62)return 48+(e-52);if(e==62)return 43;if(e==63)return 47}throw"n:"+e};return a.writeByte=function(e){for(b=b<<8|e&255,x+=8,f+=1;x>=6;)p(b>>>x-6),x-=6},a.flush=function(){if(x>0&&(p(b<<6-x),b=0,x=0),f%3!=0)for(var e=3-f%3,v=0;v<e;v+=1)g+="="},a.toString=function(){return g},a},oe=function(b){var x=b,f=0,g=0,a=0,p={};p.read=function(){for(;a<8;){if(f>=x.length){if(a==0)return-1;throw"unexpected end of file./"+a}var e=x.charAt(f);if(f+=1,e=="=")return a=0,-1;if(e.match(/^\s$/))continue;g=g<<6|n(e.charCodeAt(0)),a+=6}var v=g>>>a-8&255;return a-=8,v};var n=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(e==43)return 62;if(e==47)return 63;throw"c:"+e};return p},se=function(b,x){var f=b,g=x,a=new Array(b*x),p={};p.setPixel=function(l,c,L){a[c*f+l]=L},p.write=function(l){l.writeString("GIF87a"),l.writeShort(f),l.writeShort(g),l.writeByte(128),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(255),l.writeByte(255),l.writeByte(255),l.writeString(","),l.writeShort(0),l.writeShort(0),l.writeShort(f),l.writeShort(g),l.writeByte(0);var c=2,L=e(c);l.writeByte(c);for(var C=0;L.length-C>255;)l.writeByte(255),l.writeBytes(L,C,255),C+=255;l.writeByte(L.length-C),l.writeBytes(L,C,L.length-C),l.writeByte(0),l.writeString(";")};var n=function(l){var c=l,L=0,C=0,_={};return _.write=function(P,D){if(P>>>D)throw"length over";for(;L+D>=8;)c.writeByte(255&(P<<L|C)),D-=8-L,P>>>=8-L,C=0,L=0;C=P<<L|C,L=L+D},_.flush=function(){L>0&&c.writeByte(C)},_},e=function(l){for(var c=1<<l,L=(1<<l)+1,C=l+1,_=v(),P=0;P<c;P+=1)_.add(String.fromCharCode(P));_.add(String.fromCharCode(c)),_.add(String.fromCharCode(L));var D=Mt(),q=n(D);q.write(c,C);var j=0,Q=String.fromCharCode(a[j]);for(j+=1;j<a.length;){var J=String.fromCharCode(a[j]);j+=1,_.contains(Q+J)?Q=Q+J:(q.write(_.indexOf(Q),C),_.size()<4095&&(_.size()==1<<C&&(C+=1),_.add(Q+J)),Q=J)}return q.write(_.indexOf(Q),C),q.write(L,C),q.flush(),D.toByteArray()},v=function(){var l={},c=0,L={};return L.add=function(C){if(L.contains(C))throw"dup key:"+C;l[C]=c,c+=1},L.size=function(){return c},L.indexOf=function(C){return l[C]},L.contains=function(C){return typeof l[C]<"u"},L};return p},le=function(b,x,f){for(var g=se(b,x),a=0;a<x;a+=1)for(var p=0;p<b;p+=1)g.setPixel(p,a,f(p,a));var n=Mt();g.write(n);for(var e=ie(),v=n.toByteArray(),l=0;l<v.length;l+=1)e.writeByte(v[l]);return e.flush(),"data:image/gif;base64,"+e};return t})();(function(){Yt.stringToBytesFuncs["UTF-8"]=function(t){function s(m){for(var A=[],S=0;S<m.length;S++){var M=m.charCodeAt(S);M<128?A.push(M):M<2048?A.push(192|M>>6,128|M&63):M<55296||M>=57344?A.push(224|M>>12,128|M>>6&63,128|M&63):(S++,M=65536+((M&1023)<<10|m.charCodeAt(S)&1023),A.push(240|M>>18,128|M>>12&63,128|M>>6&63,128|M&63))}return A}return s(t)}})();(function(t){typeof define=="function"&&define.amd?define([],t):typeof Jt=="object"&&(Wt.exports=t())})(function(){return Yt})});var re=G(ht(),1),vt=G(bt(),1);var T=G(bt(),1),et=(t,s=320)=>t?`https://resources.tidal.com/images/${t.replace(/-/g,"/")}/${s}x${s}.jpg`:void 0,Dt=(t,s)=>s&&!t?.includes(s)?`${t} (${s})`:t??"Unknown",Rt=(t,s)=>t?.length?t.map(m=>m.name).filter(Boolean).join(", "):s?.name??"Unknown artist",F=t=>({kind:"track",id:String(t.id),title:Dt(t.title,t.version),artist:Rt(t.artists,t.artist),album:t.album?.title,albumId:t.album?.id!==void 0?String(t.album.id):void 0,cover:et(t.album?.cover,160),duration:t.duration,explicit:t.explicit}),dt=t=>({kind:"album",id:String(t.id),title:Dt(t.title,t.version),artist:Rt(t.artists,t.artist),cover:et(t.cover),year:t.releaseDate?.slice(0,4),tracks:t.numberOfTracks}),xt=t=>({kind:"playlist",id:String(t.uuid),title:t.title??"Playlist",subtitle:t.creator?.name||(t.type==="EDITORIAL"?"TIDAL":void 0),cover:et(t.squareImage,320)??et(t.image,320),tracks:t.numberOfTracks}),Pt=t=>({kind:"artist",id:String(t.id),title:t.name??"Artist",cover:et(t.picture)}),z=async t=>{let s=t.includes("?")?"&":"?",m=await fetch(`https://desktop.tidal.com/v1/${t}${s}${T.TidalApi.queryArgs()}`,{headers:await T.TidalApi.getAuthHeaders()});if(!m.ok)throw new Error(`TIDAL API ${m.status} on ${t.split("?")[0]}`);return m.json()},It=()=>T.redux.store.getState().session.userId,ut=(t=[])=>t.filter(s=>(s.type??"track").toLowerCase()==="track").map(s=>s.item??s),Nt=async t=>{if(t===void 0)return null;let s=T.redux.store.getState().content.mediaItems[String(t)]?.item;if(s)return F(s);let m=await T.MediaItem.fromId(t).catch(()=>{});return m?F(m.tidalItem):null},tt={track:null},wt=async()=>{let t=T.PlayState.playbackControls,s=T.PlayState.playQueue,m=t.playbackContext?.actualProductId??s.elements[s.currentIndex]?.mediaItemId;return String(m)!==tt.id&&(tt={id:String(m),track:await Nt(m)}),tt.track&&(tt.track.duration??=t.playbackContext?.actualDuration),{online:!0,playing:T.PlayState.playing,track:tt.track,position:T.PlayState.currentTime||T.PlayState.playTime||0,ts:Date.now(),volume:t.volume,muted:t.muted,shuffle:T.PlayState.shuffle,repeat:T.PlayState.repeatMode,queueIndex:s.currentIndex,queueLength:s.elements.length,source:s.sourceName||void 0,quality:t.playbackContext&&[t.playbackContext.bitDepth&&`${t.playbackContext.bitDepth}-bit`,t.playbackContext.sampleRate&&`${t.playbackContext.sampleRate/1e3} kHz`,t.playbackContext.codec].filter(Boolean).join(" \xB7 ")||void 0}},kt=(t,s,m)=>Math.min(m,Math.max(s,t)),yt=(t,s,m)=>{if(t.length===0)throw new Error("Nothing to play");T.redux.actions["playQueue/ADD_NOW"]({context:m,mediaItemIds:t,fromIndex:kt(s,0,t.length-1),overwritePlayQueue:!0}),T.redux.actions["playbackControls/PLAY"]()},Ot={state:()=>wt(),play:()=>T.PlayState.play(),pause:()=>T.PlayState.pause(),toggle:()=>T.PlayState.playing?T.PlayState.pause():T.PlayState.play(),next:()=>T.PlayState.next(),previous:()=>{(T.PlayState.currentTime||T.PlayState.playTime)>4?T.PlayState.seek(0):T.PlayState.previous()},seek:({seconds:t})=>T.PlayState.seek(Math.max(0,Number(t)||0)),volume:({value:t})=>T.redux.actions["playbackControls/SET_VOLUME"]({volume:kt(Math.round(Number(t)),0,100)}),shuffle:({on:t})=>t?T.PlayState.setShuffle(!0,!0):T.PlayState.setShuffle(!1,!0),repeat:({mode:t})=>T.PlayState.setRepeatMode(kt(Number(t),0,2)),queue:async()=>{let t=T.PlayState.playQueue,s=Math.max(0,t.currentIndex-3),m=t.elements.slice(s,t.currentIndex+60),A=await Promise.all(m.map(S=>Nt(S.mediaItemId)));return{current:t.currentIndex,items:A.map((S,M)=>S?{...S,index:s+M}:null).filter(Boolean)}},jump:({index:t})=>{T.PlayState.moveTo(Number(t)),T.redux.actions["playbackControls/PLAY"]()},addNext:({id:t})=>T.PlayState.playNext(t),addLast:({id:t})=>T.redux.actions["playQueue/ADD_LAST"]({mediaItemIds:[t],context:{type:"UNKNOWN"}}),playTracks:({ids:t,index:s=0,context:m})=>yt(t,s,m??{type:"UNKNOWN"}),playAlbum:async({id:t,index:s=0})=>{let{items:m}=await z(`albums/${t}/items?limit=100&offset=0`);yt(ut(m).map(A=>A.id),s,{type:"album",id:t})},playPlaylist:async({id:t,index:s=0})=>{let m=await T.TidalApi.playlistItems(t);yt(ut(m?.items).map(A=>A.id),s,{type:"playlist",id:t})},search:async({query:t})=>{let s=String(t??"").trim();if(!s)return{tracks:[],albums:[],playlists:[],artists:[]};let m=await z(`search?query=${encodeURIComponent(s)}&limit=12&offset=0&types=ARTISTS,ALBUMS,TRACKS,PLAYLISTS&includeContributors=true`);return{tracks:(m.tracks?.items??[]).map(F),albums:(m.albums?.items??[]).map(dt),playlists:(m.playlists?.items??[]).map(xt),artists:(m.artists?.items??[]).map(Pt)}},album:async({id:t})=>{let[s,m]=await Promise.all([T.TidalApi.album(t),z(`albums/${t}/items?limit=100&offset=0`)]);if(!s)throw new Error("Album not found");return{...dt(s),items:ut(m.items).map(F)}},playlist:async({id:t})=>{let[s,m]=await Promise.all([T.TidalApi.playlist(t),T.TidalApi.playlistItems(t)]);if(!s)throw new Error("Playlist not found");return{...xt(s),items:ut(m?.items).map(F)}},artist:async({id:t})=>{let[s,m,A]=await Promise.all([T.TidalApi.artist(t),z(`artists/${t}/toptracks?limit=10&offset=0`),z(`artists/${t}/albums?limit=50&offset=0`)]);if(!s)throw new Error("Artist not found");return{...Pt(s),top:(m.items??[]).map(F),albums:(A.items??[]).map(dt)}},library:async()=>{let t=It(),[s,m]=await Promise.all([z(`users/${t}/playlistsAndFavoritePlaylists?limit=50&offset=0&order=DATE_UPDATED&orderDirection=DESC`).catch(()=>z(`users/${t}/playlists?limit=50&offset=0`).then(A=>({items:(A.items??[]).map(S=>({playlist:S}))}))),z(`users/${t}/favorites/albums?limit=50&offset=0&order=DATE&orderDirection=DESC`).catch(()=>({items:[]}))]);return{playlists:(s.items??[]).map(A=>xt(A.playlist??A)),albums:(m.items??[]).map(A=>dt(A.item??A))}},favorites:async()=>({items:((await z(`users/${It()}/favorites/tracks?limit=300&offset=0&order=DATE&orderDirection=DESC`)).items??[]).map(s=>F(s.item??s))})};var K=await __ipcRenderer.invoke("__Luna.registerNative","@dude/tidal-remote/remote.native.ts",`"use strict";var $=Object.create;var p=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)p(t,n,{get:e[n],enumerable:!0})},g=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of L(e))!C.call(t,a)&&a!==n&&p(t,a,{get:()=>e[a],enumerable:!(i=S(e,a))||i.enumerable});return t};var b=(t,e,n)=>(n=t!=null?$(M(t)):{},g(e||!t||!t.__esModule?p(n,"default",{value:t,enumerable:!0}):n,t)),P=t=>g(p({},"__esModule",{value:!0}),t);var U={};z(U,{getAddresses:()=>N,nextCommands:()=>I,pushState:()=>D,respond:()=>w,start:()=>G,stop:()=>T});module.exports=P(U);var x=require("crypto"),k=b(require("http"),1),y=b(require("os"),1);var f=\`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">
<meta name="theme-color" content="#0b0b0d">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="/manifest.json">
<title>TIDAL Remote</title>
<style>
:root{--bg:#0b0b0d;--panel:#16161a;--panel2:#1f1f25;--line:#2a2a31;--text:#f2f2f4;--dim:#9a9aa5;--accent:#33ffee;--accent-ink:#00201d;--danger:#ff6b6b;--r:14px}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;height:100%;background:var(--bg);color:var(--text);font:15px/1.35 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
body{display:flex;flex-direction:column;padding:env(safe-area-inset-top) 0 0}
button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}
input{font:inherit}
main{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 16px}
.hidden{display:none!important}
#banner{background:var(--danger);color:#200;font-weight:600;text-align:center;padding:8px 12px;font-size:13px}

/* Now playing */
#np{display:flex;flex-direction:column;align-items:center;gap:18px;padding-top:18px;min-height:100%}
#cover{width:min(78vw,46vh,380px);aspect-ratio:1;border-radius:12px;background:var(--panel2) center/cover;box-shadow:0 18px 50px #000a}
.meta{width:100%;max-width:420px;text-align:center}
#title{font-size:21px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#artist{color:var(--dim);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#quality{color:var(--accent);font-size:11px;letter-spacing:.06em;margin-top:6px;text-transform:uppercase;min-height:14px}
.seek{width:100%;max-width:420px}
.times{display:flex;justify-content:space-between;color:var(--dim);font-size:12px;font-variant-numeric:tabular-nums;margin-top:2px}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:28px;background:transparent;margin:0}
input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:4px;background:linear-gradient(var(--text),var(--text)) 0/var(--p,0%) 100% no-repeat,var(--line)}
input[type=range]::-moz-range-track{height:4px;border-radius:4px;background:var(--line)}
input[type=range]::-moz-range-progress{height:4px;border-radius:4px;background:var(--text)}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--text);margin-top:-6px}
input[type=range]::-moz-range-thumb{width:16px;height:16px;border:0;border-radius:50%;background:var(--text)}
.transport{display:flex;align-items:center;justify-content:space-between;width:100%;max-width:380px}
.transport button{width:52px;height:52px;display:grid;place-items:center;border-radius:50%}
.transport button:active{background:var(--panel2)}
.transport svg{width:28px;height:28px;fill:currentColor}
#btnPlay{width:72px;height:72px;background:var(--text);color:var(--bg)}
#btnPlay:active{transform:scale(.96);background:var(--text)}
#btnPlay svg{width:34px;height:34px}
.toggle{color:var(--dim);position:relative}
.toggle.on{color:var(--accent)}
.toggle .one{position:absolute;font-size:10px;font-weight:800;top:12px;right:10px}
.vol{display:flex;align-items:center;gap:10px;width:100%;max-width:380px;color:var(--dim)}
.vol svg{width:20px;height:20px;fill:currentColor;flex:none}
#source{color:var(--dim);font-size:12px}

/* Lists */
.h{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--dim);margin:22px 0 8px}
.row{display:flex;align-items:center;gap:12px;padding:8px 6px;border-radius:10px;width:100%;text-align:left}
.row:active{background:var(--panel2)}
.row.current{background:var(--panel)}
.row.current .t1{color:var(--accent)}
.row.past{opacity:.45}
.thumb{width:48px;height:48px;border-radius:6px;background:var(--panel2) center/cover;flex:none}
.thumb.round{border-radius:50%}
.txt{min-width:0;flex:1}
.t1{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.t2{color:var(--dim);font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
.e{display:inline-block;font-size:9px;font-weight:800;background:var(--dim);color:var(--bg);border-radius:3px;padding:0 3px;margin-right:5px;vertical-align:1px}
.more{width:40px;height:40px;display:grid;place-items:center;color:var(--dim);flex:none;border-radius:50%}
.more svg{width:20px;height:20px;fill:currentColor}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px}
.card{text-align:left;min-width:0}
.card .art{aspect-ratio:1;border-radius:10px;background:var(--panel2) center/cover}
.card.round .art{border-radius:50%}
.card .t1{margin-top:8px;font-size:14px}
.empty{color:var(--dim);text-align:center;padding:40px 0}

/* Search */
.searchbar{position:sticky;top:0;background:var(--bg);padding:14px 0 8px;z-index:2}
.searchbar input{width:100%;background:var(--panel2);border:1px solid var(--line);color:var(--text);border-radius:12px;padding:12px 14px;outline:none}
.searchbar input:focus{border-color:var(--accent)}

/* Detail */
.back{display:flex;align-items:center;gap:6px;color:var(--dim);padding:14px 0 6px}
.back svg{width:22px;height:22px;fill:currentColor}
.hero{display:flex;gap:16px;align-items:flex-end;margin:6px 0 14px}
.hero .art{width:132px;height:132px;border-radius:10px;background:var(--panel2) center/cover;flex:none}
.hero.round .art{border-radius:50%}
.hero h1{font-size:20px;margin:0 0 4px;line-height:1.2}
.hero .sub{color:var(--dim);font-size:13px}
.actions{display:flex;gap:10px;margin:6px 0 4px}
.pill{background:var(--text);color:var(--bg);font-weight:700;border-radius:999px;padding:10px 20px;display:inline-flex;align-items:center;gap:6px}
.pill.alt{background:var(--panel2);color:var(--text)}
.pill svg{width:18px;height:18px;fill:currentColor}

/* Mini player + tabs */
#mini{display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--panel);border-top:1px solid var(--line)}
#mini .thumb{width:40px;height:40px}
#mini button.mp{width:44px;height:44px;display:grid;place-items:center}
#mini svg{width:26px;height:26px;fill:currentColor}
#miniBar{height:2px;background:var(--line);position:relative}
#miniBar i{position:absolute;inset:0 auto 0 0;background:var(--text);width:0}
nav{display:flex;background:var(--panel);border-top:1px solid var(--line);padding-bottom:env(safe-area-inset-bottom)}
nav button{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px 0 10px;color:var(--dim);font-size:11px}
nav button.on{color:var(--text)}
nav svg{width:24px;height:24px;fill:currentColor}

/* Sheet + toast */
#sheetBg{position:fixed;inset:0;background:#0009;z-index:10}
#sheet{position:fixed;left:0;right:0;bottom:0;background:var(--panel);border-radius:18px 18px 0 0;padding:10px 10px calc(14px + env(safe-area-inset-bottom));z-index:11}
#sheet .grab{width:40px;height:4px;border-radius:2px;background:var(--line);margin:0 auto 10px}
#sheet .sheetHead{padding:0 8px 8px;color:var(--dim);font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#sheet button.opt{display:block;width:100%;text-align:left;padding:14px 12px;border-radius:10px;font-size:16px}
#sheet button.opt:active{background:var(--panel2)}
#toast{position:fixed;left:50%;bottom:150px;transform:translateX(-50%);background:var(--text);color:var(--bg);padding:9px 16px;border-radius:999px;font-size:14px;font-weight:600;z-index:20;opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw;text-align:center}
#toast.show{opacity:1}
#tokenGate{position:fixed;inset:0;background:var(--bg);z-index:30;display:flex;flex-direction:column;justify-content:center;gap:14px;padding:32px}
#tokenGate input{background:var(--panel2);border:1px solid var(--line);color:var(--text);border-radius:12px;padding:12px 14px}
.spin{width:28px;height:28px;border:3px solid var(--line);border-top-color:var(--text);border-radius:50%;animation:s 0.8s linear infinite;margin:40px auto}
@keyframes s{to{transform:rotate(360deg)}}
</style>
</head>
<body>
<div id="banner" class="hidden">Connecting to TIDAL\\u2026</div>

<main id="view-np">
	<section id="np">
		<div id="cover"></div>
		<div class="meta">
			<div id="title">Nothing playing</div>
			<div id="artist">Start something from Search or Library</div>
			<div id="quality"></div>
		</div>
		<div class="seek">
			<input id="seek" type="range" min="0" max="100" step="0.5" value="0" aria-label="Seek">
			<div class="times"><span id="tCur">0:00</span><span id="tDur">0:00</span></div>
		</div>
		<div class="transport">
			<button id="btnShuffle" class="toggle" aria-label="Shuffle"><svg viewBox="0 0 24 24"><path d="M10.6 9.2 5.4 4 4 5.4l5.2 5.2 1.4-1.4zM14.5 4l2 2L4 18.6 5.4 20 18 7.5l2 2V4h-5.5zm.3 9.4-1.4 1.4 3.1 3.1-2 2.1H20v-5.5l-2 2-3.2-3.1z"/></svg></button>
			<button id="btnPrev" aria-label="Previous"><svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg></button>
			<button id="btnPlay" aria-label="Play/Pause"><svg viewBox="0 0 24 24"><path id="playIcon" d="M8 5v14l11-7z"/></svg></button>
			<button id="btnNext" aria-label="Next"><svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
			<button id="btnRepeat" class="toggle" aria-label="Repeat"><svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg><span class="one hidden">1</span></button>
		</div>
		<div class="vol">
			<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>
			<input id="vol" type="range" min="0" max="100" step="1" value="50" aria-label="Volume">
			<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>
		</div>
		<div id="source"></div>
	</section>
</main>

<main id="view-queue" class="hidden"></main>
<main id="view-search" class="hidden">
	<div class="searchbar"><input id="q" type="search" placeholder="Artists, albums, tracks, playlists" autocomplete="off" enterkeyhint="search"></div>
	<div id="results"></div>
</main>
<main id="view-library" class="hidden"></main>
<main id="view-detail" class="hidden"></main>

<div id="miniBar" class="hidden"><i></i></div>
<div id="mini" class="hidden">
	<div class="thumb" id="miniCover"></div>
	<div class="txt"><div class="t1" id="miniTitle"></div><div class="t2" id="miniArtist"></div></div>
	<button class="mp" id="miniPlay" aria-label="Play/Pause"><svg viewBox="0 0 24 24"><path id="miniIcon" d="M8 5v14l11-7z"/></svg></button>
	<button class="mp" id="miniNext" aria-label="Next"><svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
</div>

<nav>
	<button data-tab="np" class="on"><svg viewBox="0 0 24 24"><path d="M12 3v10.6A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>Playing</button>
	<button data-tab="queue"><svg viewBox="0 0 24 24"><path d="M3 6h12v2H3zm0 5h12v2H3zm0 5h8v2H3zm14-5v7.2A3 3 0 1 0 19 21v-8h3v-2h-5z"/></svg>Queue</button>
	<button data-tab="search"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 14 15.5l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>Search</button>
	<button data-tab="library"><svg viewBox="0 0 24 24"><path d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>Library</button>
</nav>

<div id="sheetBg" class="hidden"></div>
<div id="sheet" class="hidden"><div class="grab"></div><div class="sheetHead" id="sheetHead"></div><div id="sheetOpts"></div></div>
<div id="toast"></div>

<div id="tokenGate" class="hidden">
	<h2 style="margin:0">Pair with TIDAL</h2>
	<div style="color:var(--dim)">Scan the QR code in TIDAL \\u2192 Luna Settings \\u2192 TidalRemote, or paste the access token.</div>
	<input id="tokenInput" placeholder="Access token" autocomplete="off">
	<button class="pill" id="tokenSave" style="justify-content:center">Connect</button>
</div>

<script>
(() => {
"use strict";
const $ = (id) => document.getElementById(id);
const ICON_PLAY = "M8 5v14l11-7z", ICON_PAUSE = "M6 19h4V5H6v14zm8-14v14h4V5h-4z";
const MORE_SVG = '<svg viewBox="0 0 24 24"><path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>';
const BACK_SVG = '<svg viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>';
const PLAY_SVG = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
const SHUF_SVG = '<svg viewBox="0 0 24 24"><path d="M10.6 9.2 5.4 4 4 5.4l5.2 5.2 1.4-1.4zM14.5 4l2 2L4 18.6 5.4 20 18 7.5l2 2V4h-5.5zm.3 9.4-1.4 1.4 3.1 3.1-2 2.1H20v-5.5l-2 2-3.2-3.1z"/></svg>';

// #region Token
const hashToken = new URLSearchParams(location.hash.slice(1)).get("token");
if (hashToken) { try { localStorage.setItem("tidalRemoteToken", hashToken); } catch {} history.replaceState(null, "", location.pathname); }
let token = hashToken || (() => { try { return localStorage.getItem("tidalRemoteToken") || ""; } catch { return ""; } })();
const setToken = (t) => { token = t; try { localStorage.setItem("tidalRemoteToken", t); } catch {} };
// #endregion

// #region Helpers
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const bg = (url) => (url ? \\\`style="background-image:url('\\\${esc(url)}')"\\\` : "");
const fmt = (s) => { s = Math.max(0, Math.floor(s || 0)); const m = Math.floor(s / 60), h = Math.floor(m / 60); return h ? \\\`\\\${h}:\\\${String(m % 60).padStart(2, "0")}:\\\${String(s % 60).padStart(2, "0")}\\\` : \\\`\\\${m}:\\\${String(s % 60).padStart(2, "0")}\\\`; };
const setRange = (el, v, max) => { el.max = max || 100; el.value = v; el.style.setProperty("--p", \\\`\\\${max ? (v / max) * 100 : 0}%\\\`); };
let toastTimer;
const toast = (msg) => { const t = $("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 1800); };
const vibrate = () => navigator.vibrate?.(8);

const cmd = async (name, args = {}) => {
	const res = await fetch("/api/cmd", { method: "POST", headers: { "Content-Type": "application/json", "X-Remote-Token": token }, body: JSON.stringify({ cmd: name, args }) });
	if (res.status === 401) { showGate(); throw new Error("Unauthorized"); }
	const body = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(body.error || \\\`HTTP \\\${res.status}\\\`);
	return body.data;
};
const run = (name, args, okMsg) => cmd(name, args).then((d) => { if (okMsg) toast(okMsg); return d; }).catch((e) => { if (e.message !== "Unauthorized") toast(e.message); });
// #endregion

// #region State + SSE
let state = null, receivedAt = 0, dragging = false, volDragging = false, es = null;
const livePos = () => { if (!state) return 0; let p = state.position || 0; if (state.playing) p += (Date.now() - receivedAt) / 1000; const d = state.track?.duration; return d ? Math.min(p, d) : p; };

const render = () => {
	const t = state?.track;
	$("title").textContent = t?.title || "Nothing playing";
	$("artist").textContent = t ? \\\`\\\${t.artist}\\\${t.album ? " \\xB7 " + t.album : ""}\\\` : "Start something from Search or Library";
	$("quality").textContent = state?.quality || "";
	const big = t?.cover?.replace("/160x160.", "/640x640.");
	$("cover").style.backgroundImage = big ? \\\`url('\\\${big}')\\\` : "";
	const icon = state?.playing ? ICON_PAUSE : ICON_PLAY;
	$("playIcon").setAttribute("d", icon); $("miniIcon").setAttribute("d", icon);
	$("btnShuffle").classList.toggle("on", !!state?.shuffle);
	$("btnRepeat").classList.toggle("on", (state?.repeat ?? 0) > 0);
	$("btnRepeat").querySelector(".one").classList.toggle("hidden", state?.repeat !== 2);
	if (!volDragging && state) setRange($("vol"), state.muted ? 0 : state.volume, 100);
	$("source").textContent = state?.source ? \\\`Playing from \\\${state.source}\\\` : "";
	$("miniCover").style.backgroundImage = t?.cover ? \\\`url('\\\${t.cover}')\\\` : "";
	$("miniTitle").textContent = t?.title || ""; $("miniArtist").textContent = t?.artist || "";
	document.title = t ? \\\`\\\${t.title} \\xB7 \\\${t.artist}\\\` : "TIDAL Remote";
	updateMini(); tick();
	if (currentTab === "queue") markQueue();
};
const tick = () => {
	const d = state?.track?.duration || 0, p = livePos();
	if (!dragging) { setRange($("seek"), p, d); $("tCur").textContent = fmt(p); }
	$("tDur").textContent = fmt(d);
	$("miniBar").firstElementChild.style.width = d ? \\\`\\\${(p / d) * 100}%\\\` : "0";
};
setInterval(tick, 500);

const connect = () => {
	es?.close();
	if (!token && needsToken) return showGate();
	es = new EventSource(\\\`/api/events?token=\\\${encodeURIComponent(token)}\\\`);
	es.onmessage = (e) => {
		$("banner").classList.add("hidden");
		const s = JSON.parse(e.data);
		if (!s) { $("banner").textContent = "Waiting for TIDAL\\u2026"; $("banner").classList.remove("hidden"); return; }
		const trackChanged = s.track?.id !== state?.track?.id;
		state = s; receivedAt = Date.now(); render();
		if (trackChanged && currentTab === "queue") loadQueue();
	};
	es.onerror = async () => {
		$("banner").textContent = "Connection lost, retrying\\u2026"; $("banner").classList.remove("hidden");
		// EventSource hides HTTP status; probe to detect a bad token
		const r = await fetch("/api/state", { headers: { "X-Remote-Token": token } }).catch(() => null);
		if (r?.status === 401) { es.close(); showGate(); }
	};
};
let needsToken = true;
document.addEventListener("visibilitychange", () => { if (!document.hidden && es?.readyState === 2) connect(); });
// #endregion

// #region Token gate
const showGate = () => { $("tokenGate").classList.remove("hidden"); $("tokenInput").value = ""; };
window.addEventListener("hashchange", () => {
	const t = new URLSearchParams(location.hash.slice(1)).get("token");
	if (!t) return;
	setToken(t); history.replaceState(null, "", location.pathname);
	$("tokenGate").classList.add("hidden"); connect();
});
$("tokenSave").onclick = () => { const v = $("tokenInput").value.trim(); if (!v) return; setToken(v); $("tokenGate").classList.add("hidden"); connect(); };
// #endregion

// #region Controls
$("btnPlay").onclick = $("miniPlay").onclick = () => { vibrate(); if (state) { state.position = livePos(); receivedAt = Date.now(); state.playing = !state.playing; render(); } run("toggle"); };
$("btnNext").onclick = $("miniNext").onclick = () => { vibrate(); run("next"); };
$("btnPrev").onclick = () => { vibrate(); run("previous"); };
$("btnShuffle").onclick = () => { vibrate(); run("shuffle", { on: !state?.shuffle }); };
$("btnRepeat").onclick = () => { vibrate(); run("repeat", { mode: ((state?.repeat ?? 0) + 1) % 3 }); };

const seek = $("seek");
seek.addEventListener("input", () => { dragging = true; setRange(seek, +seek.value, +seek.max); $("tCur").textContent = fmt(+seek.value); });
seek.addEventListener("change", () => { const v = +seek.value; dragging = false; if (state) { state.position = v; receivedAt = Date.now(); } run("seek", { seconds: v }); });

const vol = $("vol"); let volTimer;
vol.addEventListener("input", () => { volDragging = true; setRange(vol, +vol.value, 100); clearTimeout(volTimer); volTimer = setTimeout(() => run("volume", { value: +vol.value }), 120); });
vol.addEventListener("change", () => { clearTimeout(volTimer); run("volume", { value: +vol.value }).finally(() => setTimeout(() => (volDragging = false), 400)); });
// #endregion

// #region Tabs + views
let currentTab = "np", detailStack = [];
const views = ["np", "queue", "search", "library", "detail"];
const show = (name) => { for (const v of views) $(\\\`view-\\\${v}\\\`).classList.toggle("hidden", v !== name); updateMini(name); };
const updateMini = (name = visibleView()) => { const on = name !== "np" && !!state?.track; $("mini").classList.toggle("hidden", !on); $("miniBar").classList.toggle("hidden", !on); };
const visibleView = () => views.find((v) => !$(\\\`view-\\\${v}\\\`).classList.contains("hidden"));
document.querySelectorAll("nav button").forEach((b) => b.onclick = () => {
	const tab = b.dataset.tab;
	if (tab === currentTab && detailStack.length) { detailStack = []; }
	currentTab = tab; detailStack = [];
	document.querySelectorAll("nav button").forEach((x) => x.classList.toggle("on", x === b));
	show(tab);
	if (tab === "queue") loadQueue();
	if (tab === "library") loadLibrary();
	if (tab === "search") setTimeout(() => $("q").focus(), 50);
});
$("mini").addEventListener("click", (e) => { if (e.target.closest("button")) return; document.querySelector('nav button[data-tab="np"]').click(); });
// #endregion

// #region Row renderers
let rowData = new Map(), rowSeq = 0;
const reg = (o) => { const k = String(++rowSeq); rowData.set(k, o); return k; };
const trackRow = (t, onTap, extraClass = "") => {
	const k = reg({ t, onTap });
	return \\\`<div class="row \\\${extraClass}" data-k="\\\${k}"><div class="thumb" \\\${bg(t.cover)}></div><div class="txt"><div class="t1">\\\${esc(t.title)}</div><div class="t2">\\\${t.explicit ? '<span class="e">E</span>' : ""}\\\${esc(t.artist)}\\\${t.duration ? " \\xB7 " + fmt(t.duration) : ""}</div></div><button class="more" data-more="\\\${k}" aria-label="More">\\\${MORE_SVG}</button></div>\\\`;
};
const card = (o) => {
	const k = reg({ open: o });
	const sub = o.kind === "album" ? [o.artist, o.year].filter(Boolean).join(" \\xB7 ") : o.kind === "playlist" ? (o.subtitle || (o.tracks ? \\\`\\\${o.tracks} tracks\\\` : "Playlist")) : "Artist";
	return \\\`<button class="card \\\${o.kind === "artist" ? "round" : ""}" data-k="\\\${k}"><div class="art" \\\${bg(o.cover)}></div><div class="t1">\\\${esc(o.title)}</div><div class="t2">\\\${esc(sub)}</div></button>\\\`;
};
const listRow = (o) => {
	const k = reg({ open: o });
	const sub = o.kind === "album" ? \\\`Album \\xB7 \\\${o.artist}\\\` : o.kind === "playlist" ? \\\`Playlist\\\${o.subtitle ? " \\xB7 " + o.subtitle : ""}\\\` : "Artist";
	return \\\`<div class="row" data-k="\\\${k}"><div class="thumb \\\${o.kind === "artist" ? "round" : ""}" \\\${bg(o.cover)}></div><div class="txt"><div class="t1">\\\${esc(o.title)}</div><div class="t2">\\\${esc(sub)}</div></div></div>\\\`;
};
document.addEventListener("click", (e) => {
	const more = e.target.closest("[data-more]");
	if (more) { e.stopPropagation(); const d = rowData.get(more.dataset.more); if (d?.t) openSheet(d.t); return; }
	const el = e.target.closest("[data-k]");
	if (!el) return;
	const d = rowData.get(el.dataset.k);
	if (!d) return;
	vibrate();
	if (d.onTap) d.onTap();
	else if (d.open) openDetail(d.open);
});
// Long-press a track row for options
let pressTimer;
document.addEventListener("touchstart", (e) => { const el = e.target.closest(".row[data-k]"); if (!el) return; pressTimer = setTimeout(() => { const d = rowData.get(el.dataset.k); if (d?.t) { vibrate(); openSheet(d.t); } }, 500); }, { passive: true });
["touchend", "touchmove", "touchcancel"].forEach((ev) => document.addEventListener(ev, () => clearTimeout(pressTimer), { passive: true }));
const spinner = '<div class="spin"></div>';
// #endregion

// #region Sheet
const closeSheet = () => { $("sheet").classList.add("hidden"); $("sheetBg").classList.add("hidden"); };
$("sheetBg").onclick = closeSheet;
const openSheet = (t) => {
	$("sheetHead").textContent = \\\`\\\${t.title} \\xB7 \\\${t.artist}\\\`;
	const opts = [
		["Play now", () => run("playTracks", { ids: [t.id] })],
		["Play next", () => run("addNext", { id: t.id }, "Playing next")],
		["Add to queue", () => run("addLast", { id: t.id }, "Added to queue")],
	];
	if (t.albumId) opts.push(["Go to album", () => openDetail({ kind: "album", id: t.albumId, title: t.album })]);
	$("sheetOpts").innerHTML = opts.map(([l], i) => \\\`<button class="opt" data-opt="\\\${i}">\\\${esc(l)}</button>\\\`).join("");
	$("sheetOpts").querySelectorAll("[data-opt]").forEach((b) => b.onclick = () => { closeSheet(); opts[+b.dataset.opt][1](); });
	$("sheet").classList.remove("hidden"); $("sheetBg").classList.remove("hidden");
};
// #endregion

// #region Queue
let queueReq = 0;
const loadQueue = async () => {
	const el = $("view-queue"); const my = ++queueReq;
	if (!el.innerHTML) el.innerHTML = spinner;
	const q = await cmd("queue").catch((e) => { el.innerHTML = \\\`<div class="empty">\\\${esc(e.message)}</div>\\\`; });
	if (!q || my !== queueReq) return;
	if (!q.items.length) { el.innerHTML = '<div class="empty">The queue is empty</div>'; return; }
	el.innerHTML = '<div class="h">Queue</div>' + q.items.map((t) => trackRow(t, () => run("jump", { index: t.index }), t.index < q.current ? "past" : t.index === q.current ? "current" : "").replace('class="row', \\\`data-qi="\\\${t.index}" class="row\\\`)).join("");
	el.querySelector(".current")?.scrollIntoView({ block: "center" });
};
const markQueue = () => { const cur = state?.queueIndex; $("view-queue").querySelectorAll("[data-qi]").forEach((r) => { const i = +r.dataset.qi; r.classList.toggle("current", i === cur); r.classList.toggle("past", i < cur); }); };
// #endregion

// #region Search
let searchTimer, searchReq = 0;
$("q").addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(doSearch, 350); });
$("q").addEventListener("keydown", (e) => { if (e.key === "Enter") { clearTimeout(searchTimer); doSearch(); $("q").blur(); } });
const doSearch = async () => {
	const query = $("q").value.trim(), out = $("results"), my = ++searchReq;
	if (!query) { out.innerHTML = ""; return; }
	out.innerHTML = spinner;
	const r = await cmd("search", { query }).catch((e) => { out.innerHTML = \\\`<div class="empty">\\\${esc(e.message)}</div>\\\`; });
	if (!r || my !== searchReq) return;
	let html = "";
	if (r.tracks.length) { const ids = r.tracks.map((t) => t.id); html += '<div class="h">Tracks</div>' + r.tracks.map((t, i) => trackRow(t, () => run("playTracks", { ids, index: i, context: { type: "search" } }))).join(""); }
	if (r.artists.length) html += '<div class="h">Artists</div>' + r.artists.slice(0, 6).map(listRow).join("");
	if (r.albums.length) html += '<div class="h">Albums</div><div class="grid">' + r.albums.map(card).join("") + "</div>";
	if (r.playlists.length) html += '<div class="h">Playlists</div><div class="grid">' + r.playlists.map(card).join("") + "</div>";
	out.innerHTML = html || '<div class="empty">No results</div>';
};
// #endregion

// #region Library
let libCache = null;
const loadLibrary = async (force) => {
	const el = $("view-library");
	if (libCache && !force) return;
	el.innerHTML = spinner;
	const lib = await cmd("library").catch((e) => { el.innerHTML = \\\`<div class="empty">\\\${esc(e.message)}</div>\\\`; });
	if (!lib) return;
	libCache = lib;
	let html = \\\`<div class="h">Collection</div>\\\` + \\\`<div class="row" data-k="\\\${reg({ open: { kind: "favorites", title: "Favorite tracks" } })}"><div class="thumb" style="background:linear-gradient(135deg,#33ffee,#7c5cff)"></div><div class="txt"><div class="t1">Favorite tracks</div><div class="t2">Your saved tracks</div></div></div>\\\`;
	if (lib.playlists.length) html += '<div class="h">Playlists</div>' + lib.playlists.map(listRow).join("");
	if (lib.albums.length) html += '<div class="h">Albums</div><div class="grid">' + lib.albums.map(card).join("") + "</div>";
	el.innerHTML = html;
};
// #endregion

// #region Detail
const openDetail = async (o) => {
	detailStack.push(o); show("detail");
	const el = $("view-detail"); el.scrollTop = 0;
	const back = \\\`<button class="back" id="backBtn">\\\${BACK_SVG}Back</button>\\\`;
	el.innerHTML = back + spinner; bindBack();
	try {
		if (o.kind === "favorites") {
			const r = await cmd("favorites"); const ids = r.items.map((t) => t.id);
			el.innerHTML = back + hero({ title: "Favorite tracks", sub: \\\`\\\${ids.length} tracks\\\` }) + actions() + r.items.map((t, i) => trackRow(t, () => run("playTracks", { ids, index: i, context: { type: "MY_TRACKS" } }))).join("");
			bindActions(() => run("playTracks", { ids, context: { type: "MY_TRACKS" } }), () => shufflePlay(ids, { type: "MY_TRACKS" }));
		} else if (o.kind === "album" || o.kind === "playlist") {
			const d = await cmd(o.kind, { id: o.id }); const play = o.kind === "album" ? "playAlbum" : "playPlaylist";
			const sub = o.kind === "album" ? [d.artist, d.year, \\\`\\\${d.items.length} tracks\\\`].filter(Boolean).join(" \\xB7 ") : [d.subtitle, \\\`\\\${d.items.length} tracks\\\`].filter(Boolean).join(" \\xB7 ");
			el.innerHTML = back + hero({ title: d.title, sub, cover: d.cover }) + actions() + d.items.map((t, i) => trackRow(t, () => run(play, { id: d.id, index: i }))).join("");
			bindActions(() => run(play, { id: d.id }), () => shufflePlay(d.items.map((t) => t.id), { type: o.kind, id: d.id }));
		} else if (o.kind === "artist") {
			const d = await cmd("artist", { id: o.id }); const ids = d.top.map((t) => t.id);
			el.innerHTML = back + hero({ title: d.title, sub: "Artist", cover: d.cover, round: true }) + actions() + '<div class="h">Top tracks</div>' + d.top.map((t, i) => trackRow(t, () => run("playTracks", { ids, index: i, context: { type: "artist", id: d.id } }))).join("") + (d.albums.length ? '<div class="h">Albums</div><div class="grid">' + d.albums.map(card).join("") + "</div>" : "");
			bindActions(() => run("playTracks", { ids, context: { type: "artist", id: d.id } }), () => shufflePlay(ids, { type: "artist", id: d.id }));
		}
	} catch (e) { el.innerHTML = back + \\\`<div class="empty">\\\${esc(e.message)}</div>\\\`; }
	bindBack();
};
const hero = ({ title, sub, cover, round }) => \\\`<div class="hero \\\${round ? "round" : ""}"><div class="art" \\\${cover ? bg(cover) : 'style="background:linear-gradient(135deg,#33ffee,#7c5cff)"'}></div><div><h1>\\\${esc(title)}</h1><div class="sub">\\\${esc(sub)}</div></div></div>\\\`;
const actions = () => \\\`<div class="actions"><button class="pill" id="actPlay">\\\${PLAY_SVG}Play</button><button class="pill alt" id="actShuffle">\\\${SHUF_SVG}Shuffle</button></div>\\\`;
const bindActions = (play, shuf) => { $("actPlay").onclick = () => { vibrate(); play(); }; $("actShuffle").onclick = () => { vibrate(); shuf(); }; };
const shufflePlay = (ids, context) => { const a = ids.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } run("playTracks", { ids: a, context }); };
const bindBack = () => { const b = $("backBtn"); if (b) b.onclick = goBack; };
const goBack = () => { detailStack.pop(); const prev = detailStack.pop(); if (prev) openDetail(prev); else show(currentTab); };
// #endregion

// Probe once to learn if a token is required, then connect
fetch("/api/state", { headers: { "X-Remote-Token": token } }).then((r) => {
	if (r.status === 401) { needsToken = true; showGate(); }
	else { needsToken = false; connect(); }
}).catch(() => { $("banner").classList.remove("hidden"); setTimeout(() => location.reload(), 3000); });
})();
<\/script>
</body>
</html>\`;var R=2e4,A=25e3,B=64*1024,u=null,h=null,m=0,q=1,v="null",s=[],d=new Map,c=new Set,o=null,H=()=>{if(!o||s.length===0)return;let{resolve:t,timer:e}=o;o=null,clearTimeout(e),t(s.splice(0))},I=t=>t!==m?Promise.resolve(null):s.length>0?Promise.resolve(s.splice(0)):(o&&(clearTimeout(o.timer),o.resolve([])),new Promise(e=>{let n=setTimeout(()=>{o?.resolve===e&&(o=null),e([])},A);o={gen:t,resolve:e,timer:n}})),w=(t,e,n)=>{let i=d.get(t);i&&(d.delete(t),clearTimeout(i.timer),i.resolve({ok:e,data:n}))},E=(t,e)=>new Promise(n=>{let i=q++,a=setTimeout(()=>{d.delete(i),n({ok:!1,data:"Timed out waiting for TIDAL"})},R);d.set(i,{resolve:n,timer:a}),s.push({id:i,cmd:t,args:e}),H()}),D=t=>{v=JSON.stringify(t);let e=\`data: \${v}

\`;for(let n of c)n.write(e)},V=(t,e)=>{let n=Buffer.from(t),i=Buffer.from(e);return n.length===i.length&&(0,x.timingSafeEqual)(n,i)},j=(t,e)=>{if(!h?.requireToken)return!0;let n=t.headers["x-remote-token"]??e.searchParams.get("token")??"";return V(n,h.token)},r=(t,e,n)=>{t.writeHead(e,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"}),t.end(JSON.stringify(n))},_=t=>new Promise((e,n)=>{let i=0,a=[];t.on("data",l=>{i+=l.length,i>B?(n(new Error("Body too large")),t.destroy()):a.push(l)}),t.on("end",()=>e(Buffer.concat(a).toString("utf8"))),t.on("error",n)}),O=async(t,e)=>{let n=new URL(t.url??"/","http://localhost");if(t.method==="GET"&&(n.pathname==="/"||n.pathname==="/index.html"))return e.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store","Referrer-Policy":"no-referrer"}),e.end(f);if(t.method==="GET"&&n.pathname==="/manifest.json")return r(e,200,{name:"TIDAL Remote",short_name:"Remote",start_url:"/",display:"standalone",background_color:"#0b0b0d",theme_color:"#0b0b0d"});if(!n.pathname.startsWith("/api/"))return r(e,404,{error:"Not found"});if(!j(t,n))return r(e,401,{error:"Invalid or missing token"});if(t.method==="GET"&&n.pathname==="/api/state")return e.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"}),e.end(v);if(t.method==="GET"&&n.pathname==="/api/events"){e.writeHead(200,{"Content-Type":"text/event-stream","Cache-Control":"no-store",Connection:"keep-alive","X-Accel-Buffering":"no"}),e.write(\`retry: 2000
data: \${v}

\`),c.add(e);let i=setInterval(()=>e.write(\`: ping

\`),15e3);t.on("close",()=>{clearInterval(i),c.delete(e)});return}if(t.method==="POST"&&n.pathname==="/api/cmd"){let i;try{i=JSON.parse(await _(t)||"{}")}catch{return r(e,400,{error:"Invalid JSON"})}if(typeof i.cmd!="string")return r(e,400,{error:"Missing cmd"});let{ok:a,data:l}=await E(i.cmd,i.args??{});return r(e,a?200:500,a?{data:l}:{error:String(l)})}return r(e,404,{error:"Not found"})},T=async()=>{m++,o&&(clearTimeout(o.timer),o.resolve(null),o=null),s.length=0;for(let[t]of d)w(t,!1,"Remote stopped");for(let t of c)t.end();if(c.clear(),u){let t=u;u=null,t.closeAllConnections?.(),await new Promise(e=>t.close(()=>e()))}},G=async t=>{await T(),h=t;let e=k.default.createServer((n,i)=>{O(n,i).catch(a=>{console.error("[TidalRemote.native]",a),i.headersSent?i.end():r(i,500,{error:"Internal error"})})});return await new Promise((n,i)=>{e.once("error",i),e.listen(t.port,t.bindAll?"0.0.0.0":"127.0.0.1",()=>{e.off("error",i),n()})}),u=e,m},N=()=>{let t=[];for(let[e,n]of Object.entries(y.default.networkInterfaces()))for(let i of n??[])i.family!=="IPv4"||i.internal||/vEthernet|VirtualBox|VMware|docker|br-|veth|WSL|Hyper-V/i.test(e)||t.push(i.address);return t};0&&(module.exports={getAddresses,nextCommands,pushState,respond,start,stop});
`);if(K===void 0)throw new Error("Failed to register native module @dude/tidal-remote/remote.native.ts");var qt=(...t)=>__ipcRenderer.invoke(K,"getAddresses",...t),Ht=(...t)=>__ipcRenderer.invoke(K,"nextCommands",...t),Ut=(...t)=>__ipcRenderer.invoke(K,"pushState",...t),ct=(...t)=>__ipcRenderer.invoke(K,"respond",...t),jt=(...t)=>__ipcRenderer.invoke(K,"start",...t),Qt=(...t)=>__ipcRenderer.invoke(K,"stop",...t);var zt=G(ht(),1),Vt=()=>{let t=new Uint8Array(12);return crypto.getRandomValues(t),Array.from(t,s=>s.toString(16).padStart(2,"0")).join("")},$=await zt.ReactiveStore.getPluginStorage("TidalRemote",{port:24680,bindAll:!0,requireToken:!0,token:""});$.token||($.token=Vt());var Gt=()=>$.token=Vt();var B=G(Ft(),1),U=G(Kt(),1),te=G(Xt(),1);var me=t=>`http://${t}:${$.port}/${$.requireToken?`#token=${$.token}`:""}`,be=({text:t})=>{let s=B.default.useMemo(()=>{let m=(0,te.default)(0,"M");return m.addData(t),m.make(),m.createSvgTag({cellSize:4,margin:3,scalable:!0})},[t]);return B.default.createElement("div",{style:{width:180,height:180,background:"#fff",borderRadius:8,padding:4},dangerouslySetInnerHTML:{__html:s}})},Zt,nt=(t=600)=>{clearTimeout(Zt),Zt=setTimeout(Lt,t)},xe=()=>{let[,t]=B.default.useReducer(R=>R+1,0);B.default.useEffect(()=>ee(t),[]);let[s,m]=B.default.useState($.port),[A,S]=B.default.useState($.bindAll),[M,V]=B.default.useState($.requireToken),[ot,st]=B.default.useState(),Y=H.addresses.map(me);return B.default.createElement(U.LunaSettings,null,B.default.createElement("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 0 16px"}},H.running&&Y[0]&&B.default.createElement(be,{text:Y[0]}),B.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6,minWidth:0}},B.default.createElement("div",{style:{fontWeight:600,color:H.running?"#4ade80":"#f87171"}},H.running?"Remote is running":`Remote is stopped${H.error?`: ${H.error}`:""}`),H.running&&B.default.createElement(B.default.Fragment,null,B.default.createElement("div",{style:{opacity:.75}},"Scan the code or open one of these on your phone (same network):"),Y.length===0&&B.default.createElement("div",{style:{opacity:.75}},"No LAN address found. Check your network connection."),Y.map(R=>B.default.createElement("code",{key:R,title:"Click to copy",style:{cursor:"pointer",wordBreak:"break-all",userSelect:"all"},onClick:()=>navigator.clipboard.writeText(R).then(()=>st(R))},R," ",ot===R?"\u2713 copied":""))))),B.default.createElement(U.LunaNumberSetting,{title:"Port",desc:"TCP port the remote listens on. Allow it in your firewall for private networks.",min:1024,max:65535,value:s,onNumber:R=>{m($.port=R),nt(900)}}),B.default.createElement(U.LunaSwitchSetting,{title:"Allow other devices",desc:"Listen on your local network. Turn off to only allow this PC (127.0.0.1).",checked:A,onChange:(R,X)=>{S($.bindAll=X),nt(0)}}),B.default.createElement(U.LunaSwitchSetting,{title:"Require access token",desc:"Strongly recommended. The token is part of the link and QR code; the phone remembers it.",checked:M,onChange:(R,X)=>{V($.requireToken=X),nt(0)}}),B.default.createElement(U.LunaButtonSetting,{title:"New access token",desc:"Revokes every paired phone. Re-scan the QR code afterwards.",onClick:()=>{Gt(),nt(0)}},"Regenerate"),B.default.createElement(U.LunaButtonSetting,{title:"Restart server",desc:"Use after network changes.",onClick:()=>nt(0)},"Restart"))};var{trace:rt,errSignal:ye}=(0,re.Tracer)("[TidalRemote]"),at=new Set,H={running:!1,error:void 0,addresses:[]},Ct=new Set,ee=t=>(Ct.add(t),()=>Ct.delete(t)),ne=t=>{Object.assign(H,t),ye._=H.error,Ct.forEach(s=>s())},St,it=()=>{clearTimeout(St),St=setTimeout(async()=>{try{await Ut(await wt())}catch(t){rt.warn.withContext("publish")(t)}},120)};vt.redux.intercept(["playbackControls/SET_PLAYBACK_STATE","playbackControls/SEEK","playbackControls/SET_VOLUME","playbackControls/TOGGLE_MUTE","playbackControls/MEDIA_PRODUCT_TRANSITION","playQueue/MOVE_TO","playQueue/MOVE_NEXT","playQueue/MOVE_PREVIOUS","playQueue/ADD_NOW","playQueue/ADD_NEXT","playQueue/ADD_LAST","playQueue/RESET","playQueue/SET_REPEAT_MODE","playQueue/TOGGLE_REPEAT_MODE","playQueue/ENABLE_SHUFFLE_MODE","playQueue/DISABLE_SHUFFLE_MODE","playQueue/ENABLE_SHUFFLE_MODE_AND_SHUFFLE_ITEMS","playQueue/DISABLE_SHUFFLE_MODE_AND_UNSHUFFLE_ITEMS","playQueue/TOGGLE_SHUFFLE"],at,it);vt.MediaItem.onMediaTransition(at,it);var ke=setInterval(it,5e3);at.add(()=>clearInterval(ke));at.add(()=>clearTimeout(St));var pt=-1,we=async({id:t,cmd:s,args:m})=>{let A=Ot[s];if(!A)return ct(t,!1,`Unknown command "${s}"`);try{let S=await A(m??{});await ct(t,!0,S??null),it()}catch(S){rt.warn.withContext(`command ${s}`)(S),await ct(t,!1,S instanceof Error?S.message:String(S))}},Te=async t=>{for(;t===pt;){let s;try{s=await Ht(t)}catch(m){rt.warn.withContext("poll")(m),await new Promise(A=>setTimeout(A,1e3));continue}if(s===null)return;for(let m of s)we(m)}},Lt=async()=>{pt=-1;try{let t=await jt({port:$.port,bindAll:$.bindAll,token:$.token,requireToken:$.requireToken});pt=t,ne({running:!0,error:void 0,addresses:$.bindAll?await qt():["127.0.0.1"]}),Te(t),it(),rt.log(`Remote listening on port ${$.port}`)}catch(t){let s=t?.code==="EADDRINUSE"?`Port ${$.port} is already in use`:t?.message??String(t);ne({running:!1,error:s}),rt.err.withContext("start")(t)}};at.add(()=>{pt=-1,Qt()});Lt();export{xe as Settings,ye as errSignal,ee as onStatus,Lt as restart,H as status,rt as trace,at as unloads};
//# sourceMappingURL=dude.tidal-remote.mjs.map
