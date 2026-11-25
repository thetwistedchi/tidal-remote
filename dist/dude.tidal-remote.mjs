var xe=Object.create;var Ft=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var ke=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var at=(t,r)=>()=>{try{return r||t((r={exports:{}}).exports,r),r.exports}catch(h){throw r=0,h}};var Ae=(t,r,h,k)=>{if(r&&typeof r=="object"||typeof r=="function")for(let S of ke(r))!Te.call(t,S)&&S!==h&&Ft(t,S,{get:()=>r[S],enumerable:!(k=ye(r,S))||k.enumerable});return t};var V=(t,r,h)=>(h=t!=null?xe(we(t)):{},Ae(r||!t||!t.__esModule?Ft(h,"default",{value:t,enumerable:!0}):h,t));var wt=at((He,kt)=>{kt.exports=luna?.core?.modules?.["@luna/core"];if(kt.exports===void 0)throw new Error("Cannot find module @luna/core in luna.core.modules");luna.core.LunaPlugin.getByName("@luna/core")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var At=at((Ue,Tt)=>{Tt.exports=luna?.core?.modules?.["@luna/lib"];if(Tt.exports===void 0)throw new Error("Cannot find module @luna/lib in luna.core.modules");luna.core.LunaPlugin.getByName("@luna/lib")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var oe=at((Qe,It)=>{It.exports=luna?.core?.modules?.react;if(It.exports===void 0)throw new Error("Cannot find module react in luna.core.modules");luna.core.LunaPlugin.getByName("react")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var se=at((Ve,Bt)=>{Bt.exports=luna?.core?.modules?.["@luna/ui"];if(Bt.exports===void 0)throw new Error("Cannot find module @luna/ui in luna.core.modules");luna.core.LunaPlugin.getByName("@luna/ui")?.addDependant(luna.core.LunaPlugin.getByName("@dude/tidal-remote"))});var ce=at((de,ue)=>{var le=(function(){var t=function(b,x){var v=236,g=17,i=b,f=h[x],n=null,e=0,c=null,l=[],p={},C=function(o,s){e=i*4+17,n=(function(a){for(var d=new Array(a),u=0;u<a;u+=1){d[u]=new Array(a);for(var m=0;m<a;m+=1)d[u][m]=null}return d})(e),M(0,0),M(e-7,0),M(0,e-7),R(),B(),U(o,s),i>=7&&H(o),c==null&&(c=me(i,f,l)),F(c,s)},M=function(o,s){for(var a=-1;a<=7;a+=1)if(!(o+a<=-1||e<=o+a))for(var d=-1;d<=7;d+=1)s+d<=-1||e<=s+d||(0<=a&&a<=6&&(d==0||d==6)||0<=d&&d<=6&&(a==0||a==6)||2<=a&&a<=4&&2<=d&&d<=4?n[o+a][s+d]=!0:n[o+a][s+d]=!1)},$=function(){for(var o=0,s=0,a=0;a<8;a+=1){C(!0,a);var d=S.getLostPoint(p);(a==0||o>d)&&(o=d,s=a)}return s},B=function(){for(var o=8;o<e-8;o+=1)n[o][6]==null&&(n[o][6]=o%2==0);for(var s=8;s<e-8;s+=1)n[6][s]==null&&(n[6][s]=s%2==0)},R=function(){for(var o=S.getPatternPosition(i),s=0;s<o.length;s+=1)for(var a=0;a<o.length;a+=1){var d=o[s],u=o[a];if(n[d][u]==null)for(var m=-2;m<=2;m+=1)for(var w=-2;w<=2;w+=1)m==-2||m==2||w==-2||w==2||m==0&&w==0?n[d+m][u+w]=!0:n[d+m][u+w]=!1}},H=function(o){for(var s=S.getBCHTypeNumber(i),a=0;a<18;a+=1){var d=!o&&(s>>a&1)==1;n[Math.floor(a/3)][a%3+e-8-3]=d}for(var a=0;a<18;a+=1){var d=!o&&(s>>a&1)==1;n[a%3+e-8-3][Math.floor(a/3)]=d}},U=function(o,s){for(var a=f<<3|s,d=S.getBCHTypeInfo(a),u=0;u<15;u+=1){var m=!o&&(d>>u&1)==1;u<6?n[u][8]=m:u<8?n[u+1][8]=m:n[e-15+u][8]=m}for(var u=0;u<15;u+=1){var m=!o&&(d>>u&1)==1;u<8?n[8][e-u-1]=m:u<9?n[8][15-u-1+1]=m:n[8][15-u-1]=m}n[e-8][8]=!o},F=function(o,s){for(var a=-1,d=e-1,u=7,m=0,w=S.getMaskFunction(s),y=e-1;y>0;y-=2)for(y==6&&(y-=1);;){for(var I=0;I<2;I+=1)if(n[d][y-I]==null){var P=!1;m<o.length&&(P=(o[m]>>>u&1)==1);var L=w(d,y-I);L&&(P=!P),n[d][y-I]=P,u-=1,u==-1&&(m+=1,u=7)}if(d+=a,d<0||e<=d){d-=a,a=-a;break}}},K=function(o,s){for(var a=0,d=0,u=0,m=new Array(s.length),w=new Array(s.length),y=0;y<s.length;y+=1){var I=s[y].dataCount,P=s[y].totalCount-I;d=Math.max(d,I),u=Math.max(u,P),m[y]=new Array(I);for(var L=0;L<m[y].length;L+=1)m[y][L]=255&o.getBuffer()[L+a];a+=I;var N=S.getErrorCorrectPolynomial(P),O=Q(m[y],N.getLength()-1),qt=O.mod(N);w[y]=new Array(N.getLength()-1);for(var L=0;L<w[y].length;L+=1){var Ht=L+qt.getLength()-w[y].length;w[y][L]=Ht>=0?qt.getAt(Ht):0}}for(var Ut=0,L=0;L<s.length;L+=1)Ut+=s[L].totalCount;for(var yt=new Array(Ut),vt=0,L=0;L<d;L+=1)for(var y=0;y<s.length;y+=1)L<m[y].length&&(yt[vt]=m[y][L],vt+=1);for(var L=0;L<u;L+=1)for(var y=0;y<s.length;y+=1)L<w[y].length&&(yt[vt]=w[y][L],vt+=1);return yt},me=function(o,s,a){for(var d=lt.getRSBlocks(o,s),u=dt(),m=0;m<a.length;m+=1){var w=a[m];u.put(w.getMode(),4),u.put(w.getLength(),S.getLengthInBits(w.getMode(),o)),w.write(u)}for(var y=0,m=0;m<d.length;m+=1)y+=d[m].dataCount;if(u.getLengthInBits()>y*8)throw"code length overflow. ("+u.getLengthInBits()+">"+y*8+")";for(u.getLengthInBits()+4<=y*8&&u.put(0,4);u.getLengthInBits()%8!=0;)u.putBit(!1);for(;!(u.getLengthInBits()>=y*8||(u.put(v,8),u.getLengthInBits()>=y*8));)u.put(g,8);return K(u,d)};p.addData=function(o,s){s=s||"Byte";var a=null;switch(s){case"Numeric":a=W(o);break;case"Alphanumeric":a=Z(o);break;case"Byte":a=tt(o);break;case"Kanji":a=et(o);break;default:throw"mode:"+s}l.push(a),c=null},p.isDark=function(o,s){if(o<0||e<=o||s<0||e<=s)throw o+","+s;return n[o][s]},p.getModuleCount=function(){return e},p.make=function(){if(i<1){for(var o=1;o<40;o++){for(var s=lt.getRSBlocks(o,f),a=dt(),d=0;d<l.length;d++){var u=l[d];a.put(u.getMode(),4),a.put(u.getLength(),S.getLengthInBits(u.getMode(),o)),u.write(a)}for(var m=0,d=0;d<s.length;d++)m+=s[d].dataCount;if(a.getLengthInBits()<=m*8)break}i=o}C(!1,$())},p.createTableTag=function(o,s){o=o||2,s=typeof s>"u"?o*4:s;var a="";a+='<table style="',a+=" border-width: 0px; border-style: none;",a+=" border-collapse: collapse;",a+=" padding: 0px; margin: "+s+"px;",a+='">',a+="<tbody>";for(var d=0;d<p.getModuleCount();d+=1){a+="<tr>";for(var u=0;u<p.getModuleCount();u+=1)a+='<td style="',a+=" border-width: 0px; border-style: none;",a+=" border-collapse: collapse;",a+=" padding: 0px; margin: 0px;",a+=" width: "+o+"px;",a+=" height: "+o+"px;",a+=" background-color: ",a+=p.isDark(d,u)?"#000000":"#ffffff",a+=";",a+='"/>';a+="</tr>"}return a+="</tbody>",a+="</table>",a},p.createSvgTag=function(o,s,a,d){var u={};typeof arguments[0]=="object"&&(u=arguments[0],o=u.cellSize,s=u.margin,a=u.alt,d=u.title),o=o||2,s=typeof s>"u"?o*4:s,a=typeof a=="string"?{text:a}:a||{},a.text=a.text||null,a.id=a.text?a.id||"qrcode-description":null,d=typeof d=="string"?{text:d}:d||{},d.text=d.text||null,d.id=d.text?d.id||"qrcode-title":null;var m=p.getModuleCount()*o+s*2,w,y,I,P,L="",N;for(N="l"+o+",0 0,"+o+" -"+o+",0 0,-"+o+"z ",L+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',L+=u.scalable?"":' width="'+m+'px" height="'+m+'px"',L+=' viewBox="0 0 '+m+" "+m+'" ',L+=' preserveAspectRatio="xMinYMin meet"',L+=d.text||a.text?' role="img" aria-labelledby="'+Y([d.id,a.id].join(" ").trim())+'"':"",L+=">",L+=d.text?'<title id="'+Y(d.id)+'">'+Y(d.text)+"</title>":"",L+=a.text?'<description id="'+Y(a.id)+'">'+Y(a.text)+"</description>":"",L+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',L+='<path d="',I=0;I<p.getModuleCount();I+=1)for(P=I*o+s,w=0;w<p.getModuleCount();w+=1)p.isDark(I,w)&&(y=w*o+s,L+="M"+y+","+P+N);return L+='" stroke="transparent" fill="black"/>',L+="</svg>",L},p.createDataURL=function(o,s){o=o||2,s=typeof s>"u"?o*4:s;var a=p.getModuleCount()*o+s*2,d=s,u=a-s;return xt(a,a,function(m,w){if(d<=m&&m<u&&d<=w&&w<u){var y=Math.floor((m-d)/o),I=Math.floor((w-d)/o);return p.isDark(I,y)?0:1}else return 1})},p.createImgTag=function(o,s,a){o=o||2,s=typeof s>"u"?o*4:s;var d=p.getModuleCount()*o+s*2,u="";return u+="<img",u+=' src="',u+=p.createDataURL(o,s),u+='"',u+=' width="',u+=d,u+='"',u+=' height="',u+=d,u+='"',a&&(u+=' alt="',u+=Y(a),u+='"'),u+="/>",u};var Y=function(o){for(var s="",a=0;a<o.length;a+=1){var d=o.charAt(a);switch(d){case"<":s+="&lt;";break;case">":s+="&gt;";break;case"&":s+="&amp;";break;case'"':s+="&quot;";break;default:s+=d;break}}return s},be=function(o){var s=1;o=typeof o>"u"?s*2:o;var a=p.getModuleCount()*s+o*2,d=o,u=a-o,m,w,y,I,P,L={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},N={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},O="";for(m=0;m<a;m+=2){for(y=Math.floor((m-d)/s),I=Math.floor((m+1-d)/s),w=0;w<a;w+=1)P="\u2588",d<=w&&w<u&&d<=m&&m<u&&p.isDark(y,Math.floor((w-d)/s))&&(P=" "),d<=w&&w<u&&d<=m+1&&m+1<u&&p.isDark(I,Math.floor((w-d)/s))?P+=" ":P+="\u2588",O+=o<1&&m+1>=u?N[P]:L[P];O+=`
`}return a%2&&o>0?O.substring(0,O.length-a-1)+Array(a+1).join("\u2580"):O.substring(0,O.length-1)};return p.createASCII=function(o,s){if(o=o||1,o<2)return be(s);o-=1,s=typeof s>"u"?o*2:s;var a=p.getModuleCount()*o+s*2,d=s,u=a-s,m,w,y,I,P=Array(o+1).join("\u2588\u2588"),L=Array(o+1).join("  "),N="",O="";for(m=0;m<a;m+=1){for(y=Math.floor((m-d)/o),O="",w=0;w<a;w+=1)I=1,d<=w&&w<u&&d<=m&&m<u&&p.isDark(y,Math.floor((w-d)/o))&&(I=0),O+=I?P:L;for(y=0;y<o;y+=1)N+=O+`
`}return N.substring(0,N.length-1)},p.renderTo2dContext=function(o,s){s=s||2;for(var a=p.getModuleCount(),d=0;d<a;d++)for(var u=0;u<a;u++)o.fillStyle=p.isDark(d,u)?"black":"white",o.fillRect(d*s,u*s,s,s)},p};t.stringToBytesFuncs={default:function(b){for(var x=[],v=0;v<b.length;v+=1){var g=b.charCodeAt(v);x.push(g&255)}return x}},t.stringToBytes=t.stringToBytesFuncs.default,t.createStringToBytes=function(b,x){var v=(function(){for(var i=rt(b),f=function(){var B=i.read();if(B==-1)throw"eof";return B},n=0,e={};;){var c=i.read();if(c==-1)break;var l=f(),p=f(),C=f(),M=String.fromCharCode(c<<8|l),$=p<<8|C;e[M]=$,n+=1}if(n!=x)throw n+" != "+x;return e})(),g=63;return function(i){for(var f=[],n=0;n<i.length;n+=1){var e=i.charCodeAt(n);if(e<128)f.push(e);else{var c=v[i.charAt(n)];typeof c=="number"?(c&255)==c?f.push(c):(f.push(c>>>8),f.push(c&255)):f.push(g)}}return f}};var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},k={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},S=(function(){var b=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],x=1335,v=7973,g=21522,i={},f=function(n){for(var e=0;n!=0;)e+=1,n>>>=1;return e};return i.getBCHTypeInfo=function(n){for(var e=n<<10;f(e)-f(x)>=0;)e^=x<<f(e)-f(x);return(n<<10|e)^g},i.getBCHTypeNumber=function(n){for(var e=n<<12;f(e)-f(v)>=0;)e^=v<<f(e)-f(v);return n<<12|e},i.getPatternPosition=function(n){return b[n-1]},i.getMaskFunction=function(n){switch(n){case k.PATTERN000:return function(e,c){return(e+c)%2==0};case k.PATTERN001:return function(e,c){return e%2==0};case k.PATTERN010:return function(e,c){return c%3==0};case k.PATTERN011:return function(e,c){return(e+c)%3==0};case k.PATTERN100:return function(e,c){return(Math.floor(e/2)+Math.floor(c/3))%2==0};case k.PATTERN101:return function(e,c){return e*c%2+e*c%3==0};case k.PATTERN110:return function(e,c){return(e*c%2+e*c%3)%2==0};case k.PATTERN111:return function(e,c){return(e*c%3+(e+c)%2)%2==0};default:throw"bad maskPattern:"+n}},i.getErrorCorrectPolynomial=function(n){for(var e=Q([1],0),c=0;c<n;c+=1)e=e.multiply(Q([1,E.gexp(c)],0));return e},i.getLengthInBits=function(n,e){if(1<=e&&e<10)switch(n){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw"mode:"+n}else if(e<27)switch(n){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw"mode:"+n}else if(e<41)switch(n){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw"mode:"+n}else throw"type:"+e},i.getLostPoint=function(n){for(var e=n.getModuleCount(),c=0,l=0;l<e;l+=1)for(var p=0;p<e;p+=1){for(var C=0,M=n.isDark(l,p),$=-1;$<=1;$+=1)if(!(l+$<0||e<=l+$))for(var B=-1;B<=1;B+=1)p+B<0||e<=p+B||$==0&&B==0||M==n.isDark(l+$,p+B)&&(C+=1);C>5&&(c+=3+C-5)}for(var l=0;l<e-1;l+=1)for(var p=0;p<e-1;p+=1){var R=0;n.isDark(l,p)&&(R+=1),n.isDark(l+1,p)&&(R+=1),n.isDark(l,p+1)&&(R+=1),n.isDark(l+1,p+1)&&(R+=1),(R==0||R==4)&&(c+=3)}for(var l=0;l<e;l+=1)for(var p=0;p<e-6;p+=1)n.isDark(l,p)&&!n.isDark(l,p+1)&&n.isDark(l,p+2)&&n.isDark(l,p+3)&&n.isDark(l,p+4)&&!n.isDark(l,p+5)&&n.isDark(l,p+6)&&(c+=40);for(var p=0;p<e;p+=1)for(var l=0;l<e-6;l+=1)n.isDark(l,p)&&!n.isDark(l+1,p)&&n.isDark(l+2,p)&&n.isDark(l+3,p)&&n.isDark(l+4,p)&&!n.isDark(l+5,p)&&n.isDark(l+6,p)&&(c+=40);for(var H=0,p=0;p<e;p+=1)for(var l=0;l<e;l+=1)n.isDark(l,p)&&(H+=1);var U=Math.abs(100*H/e/e-50)/5;return c+=U*10,c},i})(),E=(function(){for(var b=new Array(256),x=new Array(256),v=0;v<8;v+=1)b[v]=1<<v;for(var v=8;v<256;v+=1)b[v]=b[v-4]^b[v-5]^b[v-6]^b[v-8];for(var v=0;v<255;v+=1)x[b[v]]=v;var g={};return g.glog=function(i){if(i<1)throw"glog("+i+")";return x[i]},g.gexp=function(i){for(;i<0;)i+=255;for(;i>=256;)i-=255;return b[i]},g})();function Q(b,x){if(typeof b.length>"u")throw b.length+"/"+x;var v=(function(){for(var i=0;i<b.length&&b[i]==0;)i+=1;for(var f=new Array(b.length-i+x),n=0;n<b.length-i;n+=1)f[n]=b[n+i];return f})(),g={};return g.getAt=function(i){return v[i]},g.getLength=function(){return v.length},g.multiply=function(i){for(var f=new Array(g.getLength()+i.getLength()-1),n=0;n<g.getLength();n+=1)for(var e=0;e<i.getLength();e+=1)f[n+e]^=E.gexp(E.glog(g.getAt(n))+E.glog(i.getAt(e)));return Q(f,0)},g.mod=function(i){if(g.getLength()-i.getLength()<0)return g;for(var f=E.glog(g.getAt(0))-E.glog(i.getAt(0)),n=new Array(g.getLength()),e=0;e<g.getLength();e+=1)n[e]=g.getAt(e);for(var e=0;e<i.getLength();e+=1)n[e]^=E.gexp(E.glog(i.getAt(e))+f);return Q(n,0).mod(i)},g}var lt=(function(){var b=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],x=function(i,f){var n={};return n.totalCount=i,n.dataCount=f,n},v={},g=function(i,f){switch(f){case h.L:return b[(i-1)*4+0];case h.M:return b[(i-1)*4+1];case h.Q:return b[(i-1)*4+2];case h.H:return b[(i-1)*4+3];default:return}};return v.getRSBlocks=function(i,f){var n=g(i,f);if(typeof n>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+f;for(var e=n.length/3,c=[],l=0;l<e;l+=1)for(var p=n[l*3+0],C=n[l*3+1],M=n[l*3+2],$=0;$<p;$+=1)c.push(x(C,M));return c},v})(),dt=function(){var b=[],x=0,v={};return v.getBuffer=function(){return b},v.getAt=function(g){var i=Math.floor(g/8);return(b[i]>>>7-g%8&1)==1},v.put=function(g,i){for(var f=0;f<i;f+=1)v.putBit((g>>>i-f-1&1)==1)},v.getLengthInBits=function(){return x},v.putBit=function(g){var i=Math.floor(x/8);b.length<=i&&b.push(0),g&&(b[i]|=128>>>x%8),x+=1},v},W=function(b){var x=r.MODE_NUMBER,v=b,g={};g.getMode=function(){return x},g.getLength=function(n){return v.length},g.write=function(n){for(var e=v,c=0;c+2<e.length;)n.put(i(e.substring(c,c+3)),10),c+=3;c<e.length&&(e.length-c==1?n.put(i(e.substring(c,c+1)),4):e.length-c==2&&n.put(i(e.substring(c,c+2)),7))};var i=function(n){for(var e=0,c=0;c<n.length;c+=1)e=e*10+f(n.charAt(c));return e},f=function(n){if("0"<=n&&n<="9")return n.charCodeAt(0)-48;throw"illegal char :"+n};return g},Z=function(b){var x=r.MODE_ALPHA_NUM,v=b,g={};g.getMode=function(){return x},g.getLength=function(f){return v.length},g.write=function(f){for(var n=v,e=0;e+1<n.length;)f.put(i(n.charAt(e))*45+i(n.charAt(e+1)),11),e+=2;e<n.length&&f.put(i(n.charAt(e)),6)};var i=function(f){if("0"<=f&&f<="9")return f.charCodeAt(0)-48;if("A"<=f&&f<="Z")return f.charCodeAt(0)-65+10;switch(f){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+f}};return g},tt=function(b){var x=r.MODE_8BIT_BYTE,v=b,g=t.stringToBytes(b),i={};return i.getMode=function(){return x},i.getLength=function(f){return g.length},i.write=function(f){for(var n=0;n<g.length;n+=1)f.put(g[n],8)},i},et=function(b){var x=r.MODE_KANJI,v=b,g=t.stringToBytesFuncs.SJIS;if(!g)throw"sjis not supported.";(function(n,e){var c=g(n);if(c.length!=2||(c[0]<<8|c[1])!=e)throw"sjis not supported."})("\u53CB",38726);var i=g(b),f={};return f.getMode=function(){return x},f.getLength=function(n){return~~(i.length/2)},f.write=function(n){for(var e=i,c=0;c+1<e.length;){var l=(255&e[c])<<8|255&e[c+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(c+1)+"/"+l;l=(l>>>8&255)*192+(l&255),n.put(l,13),c+=2}if(c<e.length)throw"illegal char at "+(c+1)},f},nt=function(){var b=[],x={};return x.writeByte=function(v){b.push(v&255)},x.writeShort=function(v){x.writeByte(v),x.writeByte(v>>>8)},x.writeBytes=function(v,g,i){g=g||0,i=i||v.length;for(var f=0;f<i;f+=1)x.writeByte(v[f+g])},x.writeString=function(v){for(var g=0;g<v.length;g+=1)x.writeByte(v.charCodeAt(g))},x.toByteArray=function(){return b},x.toString=function(){var v="";v+="[";for(var g=0;g<b.length;g+=1)g>0&&(v+=","),v+=b[g];return v+="]",v},x},ut=function(){var b=0,x=0,v=0,g="",i={},f=function(e){g+=String.fromCharCode(n(e&63))},n=function(e){if(!(e<0)){if(e<26)return 65+e;if(e<52)return 97+(e-26);if(e<62)return 48+(e-52);if(e==62)return 43;if(e==63)return 47}throw"n:"+e};return i.writeByte=function(e){for(b=b<<8|e&255,x+=8,v+=1;x>=6;)f(b>>>x-6),x-=6},i.flush=function(){if(x>0&&(f(b<<6-x),b=0,x=0),v%3!=0)for(var e=3-v%3,c=0;c<e;c+=1)g+="="},i.toString=function(){return g},i},rt=function(b){var x=b,v=0,g=0,i=0,f={};f.read=function(){for(;i<8;){if(v>=x.length){if(i==0)return-1;throw"unexpected end of file./"+i}var e=x.charAt(v);if(v+=1,e=="=")return i=0,-1;if(e.match(/^\s$/))continue;g=g<<6|n(e.charCodeAt(0)),i+=6}var c=g>>>i-8&255;return i-=8,c};var n=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(e==43)return 62;if(e==47)return 63;throw"c:"+e};return f},ct=function(b,x){var v=b,g=x,i=new Array(b*x),f={};f.setPixel=function(l,p,C){i[p*v+l]=C},f.write=function(l){l.writeString("GIF87a"),l.writeShort(v),l.writeShort(g),l.writeByte(128),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(255),l.writeByte(255),l.writeByte(255),l.writeString(","),l.writeShort(0),l.writeShort(0),l.writeShort(v),l.writeShort(g),l.writeByte(0);var p=2,C=e(p);l.writeByte(p);for(var M=0;C.length-M>255;)l.writeByte(255),l.writeBytes(C,M,255),M+=255;l.writeByte(C.length-M),l.writeBytes(C,M,C.length-M),l.writeByte(0),l.writeString(";")};var n=function(l){var p=l,C=0,M=0,$={};return $.write=function(B,R){if(B>>>R)throw"length over";for(;C+R>=8;)p.writeByte(255&(B<<C|M)),R-=8-C,B>>>=8-C,M=0,C=0;M=B<<C|M,C=C+R},$.flush=function(){C>0&&p.writeByte(M)},$},e=function(l){for(var p=1<<l,C=(1<<l)+1,M=l+1,$=c(),B=0;B<p;B+=1)$.add(String.fromCharCode(B));$.add(String.fromCharCode(p)),$.add(String.fromCharCode(C));var R=nt(),H=n(R);H.write(p,M);var U=0,F=String.fromCharCode(i[U]);for(U+=1;U<i.length;){var K=String.fromCharCode(i[U]);U+=1,$.contains(F+K)?F=F+K:(H.write($.indexOf(F),M),$.size()<4095&&($.size()==1<<M&&(M+=1),$.add(F+K)),F=K)}return H.write($.indexOf(F),M),H.write(C,M),H.flush(),R.toByteArray()},c=function(){var l={},p=0,C={};return C.add=function(M){if(C.contains(M))throw"dup key:"+M;l[M]=p,p+=1},C.size=function(){return p},C.indexOf=function(M){return l[M]},C.contains=function(M){return typeof l[M]<"u"},C};return f},xt=function(b,x,v){for(var g=ct(b,x),i=0;i<x;i+=1)for(var f=0;f<b;f+=1)g.setPixel(f,i,v(f,i));var n=nt();g.write(n);for(var e=ut(),c=n.toByteArray(),l=0;l<c.length;l+=1)e.writeByte(c[l]);return e.flush(),"data:image/gif;base64,"+e};return t})();(function(){le.stringToBytesFuncs["UTF-8"]=function(t){function r(h){for(var k=[],S=0;S<h.length;S++){var E=h.charCodeAt(S);E<128?k.push(E):E<2048?k.push(192|E>>6,128|E&63):E<55296||E>=57344?k.push(224|E>>12,128|E>>6&63,128|E&63):(S++,E=65536+((E&1023)<<10|h.charCodeAt(S)&1023),k.push(240|E>>18,128|E>>12&63,128|E>>6&63,128|E&63))}return k}return r(t)}})();(function(t){typeof define=="function"&&define.amd?define([],t):typeof de=="object"&&(ue.exports=t())})(function(){return le})});var he=V(wt(),1),bt=V(At(),1);var T=V(At(),1),it=(t,r=320)=>t?`https://resources.tidal.com/images/${t.replace(/-/g,"/")}/${r}x${r}.jpg`:void 0,Qt=(t,r)=>r&&!t?.includes(r)?`${t} (${r})`:t??"Unknown",Vt=(t,r)=>t?.length?t.map(h=>h.name).filter(Boolean).join(", "):r?.name??"Unknown artist",G=t=>({kind:"track",id:String(t.id),title:Qt(t.title,t.version),artist:Vt(t.artists,t.artist),album:t.album?.title,albumId:t.album?.id!==void 0?String(t.album.id):void 0,cover:it(t.album?.cover,160),duration:t.duration,explicit:t.explicit}),pt=t=>({kind:"album",id:String(t.id),title:Qt(t.title,t.version),artist:Vt(t.artists,t.artist),cover:it(t.cover),year:t.releaseDate?.slice(0,4),tracks:t.numberOfTracks}),St=t=>({kind:"playlist",id:String(t.uuid),title:t.title??"Playlist",subtitle:t.creator?.name||(t.type==="EDITORIAL"?"TIDAL":void 0),cover:it(t.squareImage,320)??it(t.image,320),tracks:t.numberOfTracks}),jt=t=>({kind:"artist",id:String(t.id),title:t.name??"Artist",cover:it(t.picture)}),j=async t=>{let r=t.includes("?")?"&":"?",h=await fetch(`https://desktop.tidal.com/v1/${t}${r}${T.TidalApi.queryArgs()}`,{headers:await T.TidalApi.getAuthHeaders()});if(!h.ok)throw new Error(`TIDAL API ${h.status} on ${t.split("?")[0]}`);return h.json()},Ct=()=>T.redux.store.getState().session.userId,zt=async(t,r,h)=>{let k=r.includes("?")?"&":"?",S={...await T.TidalApi.getAuthHeaders()};h&&(S["Content-Type"]="application/x-www-form-urlencoded");let E=await fetch(`https://desktop.tidal.com/v1/${r}${k}${T.TidalApi.queryArgs()}`,{method:t,headers:S,body:h?new URLSearchParams(h).toString():void 0});if(!E.ok)throw new Error(`TIDAL API ${E.status} on ${t} ${r.split("?")[0]}`)},Se=()=>T.redux.store.getState().favorites?.tracks??[],Le=t=>t!==void 0&&Se().some(r=>String(r)===String(t)),Ce=async(t,r)=>{let h=Ct();r?await zt("POST",`users/${h}/favorites/tracks`,{trackIds:t,onArtifactNotFound:"FAIL"}):await zt("DELETE",`users/${h}/favorites/tracks/${t}`);let k=T.redux.store.getState().favorites,S=k.tracks.filter(E=>String(E)!==t);r&&S.unshift(Number(t)),T.redux.actions["favorites/SET_FAVORITE_IDS"]({...k,tracks:S})},ft=(t=[])=>t.filter(r=>(r.type??"track").toLowerCase()==="track").map(r=>r.item??r),Gt=async t=>{if(t===void 0)return null;let r=T.redux.store.getState().content.mediaItems[String(t)]?.item;if(r)return G(r);let h=await T.MediaItem.fromId(t).catch(()=>{});return h?G(h.tidalItem):null},J={track:null},Mt=async()=>{let t=T.PlayState.playbackControls,r=T.PlayState.playQueue,h=t.playbackContext?.actualProductId??r.elements[r.currentIndex]?.mediaItemId;return String(h)!==J.id&&(J={id:String(h),track:await Gt(h)}),J.track&&(J.track.duration??=t.playbackContext?.actualDuration),{online:!0,playing:T.PlayState.playing,favorite:Le(J.track?.id),track:J.track,position:T.PlayState.currentTime||T.PlayState.playTime||0,ts:Date.now(),volume:t.volume,muted:t.muted,shuffle:T.PlayState.shuffle,repeat:T.PlayState.repeatMode,queueIndex:r.currentIndex,queueLength:r.elements.length,source:r.sourceName||void 0,quality:t.playbackContext&&[t.playbackContext.bitDepth&&`${t.playbackContext.bitDepth}-bit`,t.playbackContext.sampleRate&&`${t.playbackContext.sampleRate/1e3} kHz`,t.playbackContext.codec].filter(Boolean).join(" \xB7 ")||void 0}},Et=(t,r,h)=>Math.min(h,Math.max(r,t)),Lt=(t,r,h)=>{if(t.length===0)throw new Error("Nothing to play");T.redux.actions["playQueue/ADD_NOW"]({context:h,mediaItemIds:t,fromIndex:Et(r,0,t.length-1),overwritePlayQueue:!0}),T.redux.actions["playbackControls/PLAY"]()},Wt={state:()=>Mt(),favorite:({id:t,on:r})=>Ce(String(t),!!r),play:()=>T.PlayState.play(),pause:()=>T.PlayState.pause(),toggle:()=>T.PlayState.playing?T.PlayState.pause():T.PlayState.play(),next:()=>T.PlayState.next(),previous:()=>{(T.PlayState.currentTime||T.PlayState.playTime)>4?T.PlayState.seek(0):T.PlayState.previous()},seek:({seconds:t})=>T.PlayState.seek(Math.max(0,Number(t)||0)),volume:({value:t})=>T.redux.actions["playbackControls/SET_VOLUME"]({volume:Et(Math.round(Number(t)),0,100)}),shuffle:({on:t})=>t?T.PlayState.setShuffle(!0,!0):T.PlayState.setShuffle(!1,!0),repeat:({mode:t})=>T.PlayState.setRepeatMode(Et(Number(t),0,2)),queue:async()=>{let t=T.PlayState.playQueue,r=Math.max(0,t.currentIndex-3),h=t.elements.slice(r,t.currentIndex+60),k=await Promise.all(h.map(S=>Gt(S.mediaItemId)));return{current:t.currentIndex,items:k.map((S,E)=>S?{...S,index:r+E}:null).filter(Boolean)}},jump:({index:t})=>{T.PlayState.moveTo(Number(t)),T.redux.actions["playbackControls/PLAY"]()},addNext:({id:t})=>T.PlayState.playNext(t),addLast:({id:t})=>T.redux.actions["playQueue/ADD_LAST"]({mediaItemIds:[t],context:{type:"UNKNOWN"}}),playTracks:({ids:t,index:r=0,context:h})=>Lt(t,r,h??{type:"UNKNOWN"}),playAlbum:async({id:t,index:r=0})=>{let{items:h}=await j(`albums/${t}/items?limit=100&offset=0`);Lt(ft(h).map(k=>k.id),r,{type:"album",id:t})},playPlaylist:async({id:t,index:r=0})=>{let h=await T.TidalApi.playlistItems(t);Lt(ft(h?.items).map(k=>k.id),r,{type:"playlist",id:t})},search:async({query:t})=>{let r=String(t??"").trim();if(!r)return{tracks:[],albums:[],playlists:[],artists:[]};let h=await j(`search?query=${encodeURIComponent(r)}&limit=12&offset=0&types=ARTISTS,ALBUMS,TRACKS,PLAYLISTS&includeContributors=true`);return{tracks:(h.tracks?.items??[]).map(G),albums:(h.albums?.items??[]).map(pt),playlists:(h.playlists?.items??[]).map(St),artists:(h.artists?.items??[]).map(jt)}},album:async({id:t})=>{let[r,h]=await Promise.all([T.TidalApi.album(t),j(`albums/${t}/items?limit=100&offset=0`)]);if(!r)throw new Error("Album not found");return{...pt(r),items:ft(h.items).map(G)}},playlist:async({id:t})=>{let[r,h]=await Promise.all([T.TidalApi.playlist(t),T.TidalApi.playlistItems(t)]);if(!r)throw new Error("Playlist not found");return{...St(r),items:ft(h?.items).map(G)}},artist:async({id:t})=>{let[r,h,k]=await Promise.all([T.TidalApi.artist(t),j(`artists/${t}/toptracks?limit=10&offset=0`),j(`artists/${t}/albums?limit=50&offset=0`)]);if(!r)throw new Error("Artist not found");return{...jt(r),top:(h.items??[]).map(G),albums:(k.items??[]).map(pt)}},library:async()=>{let t=Ct(),[r,h]=await Promise.all([j(`users/${t}/playlistsAndFavoritePlaylists?limit=50&offset=0&order=DATE_UPDATED&orderDirection=DESC`).catch(()=>j(`users/${t}/playlists?limit=50&offset=0`).then(k=>({items:(k.items??[]).map(S=>({playlist:S}))}))),j(`users/${t}/favorites/albums?limit=50&offset=0&order=DATE&orderDirection=DESC`).catch(()=>({items:[]}))]);return{playlists:(r.items??[]).map(k=>St(k.playlist??k)),albums:(h.items??[]).map(k=>pt(k.item??k))}},favorites:async()=>({items:((await j(`users/${Ct()}/favorites/tracks?limit=300&offset=0&order=DATE&orderDirection=DESC`)).items??[]).map(r=>G(r.item??r))})};var z=await __ipcRenderer.invoke("__Luna.registerNative","@dude/tidal-remote/remote.native.ts",`"use strict";var M=Object.create;var u=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var R=(t,e)=>{for(var n in e)u(t,n,{get:e[n],enumerable:!0})},b=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of A(e))!P.call(t,i)&&i!==n&&u(t,i,{get:()=>e[i],enumerable:!(a=C(e,i))||a.enumerable});return t};var f=(t,e,n)=>(n=t!=null?M(z(t)):{},b(e||!t||!t.__esModule?u(n,"default",{value:t,enumerable:!0}):n,t)),q=t=>b(u({},"__esModule",{value:!0}),t);var K={};R(K,{getAddresses:()=>X,getLastSeen:()=>F,nextCommands:()=>D,pushState:()=>j,respond:()=>S,setTokens:()=>G,start:()=>Y,stop:()=>L});module.exports=q(K);var y=require("crypto"),w=f(require("http"),1),T=f(require("os"),1);var x=\`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">
<meta name="theme-color" content="#0b0b0d">
<meta name="color-scheme" content="dark">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="/manifest.json">
<title>TIDAL Remote</title>
<style>
:root{color-scheme:dark;--bg:#0b0b0d;--panel:#16161a;--panel2:#1f1f25;--line:#2a2a31;--text:#f2f2f4;--dim:#9a9aa5;--accent:#33ffee;--accent-ink:#00201d;--danger:#ff6b6b;--r:14px}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;height:100%;background:var(--bg);color:var(--text);font:15px/1.35 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
body{display:flex;flex-direction:column;padding:env(safe-area-inset-top) 0 0}
button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}
input{font:inherit}
main{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 16px}
.hidden{display:none!important}
#banner{background:var(--danger);color:#200;font-weight:600;text-align:center;padding:8px 12px;font-size:13px}

/* Now playing */
#view-np{overflow:hidden;padding-bottom:0}
#np{display:flex;flex-direction:column;align-items:center;gap:clamp(10px,2.2vh,22px);padding:clamp(12px,2.5vh,28px) 0 clamp(12px,3vh,32px);height:100%;max-width:640px;margin:0 auto}
.coverWrap{flex:1 1 auto;min-height:120px;width:100%;container-type:size;display:flex;align-items:center;justify-content:center}
#cover{width:min(100cqw,100cqh);height:min(100cqw,100cqh);border-radius:14px;background:var(--panel2) center/cover;box-shadow:0 18px 50px #000a}
.meta{width:100%;display:flex;align-items:center;gap:12px}
.meta .txt{flex:1;min-width:0}
#title{font-size:clamp(20px,5.6vw,28px);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#artist{color:var(--dim);font-size:clamp(15px,4.2vw,19px);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#quality{color:var(--accent);font-size:12px;letter-spacing:.06em;margin-top:6px;text-transform:uppercase;min-height:14px}
#btnFav{width:52px;height:52px;display:grid;place-items:center;border-radius:50%;color:var(--dim);flex:none}
#btnFav svg{width:30px;height:30px;fill:currentColor}
#btnFav.on{color:var(--accent)}
#btnFav:active{background:var(--panel2)}
#btnFav.pop svg{animation:pop .3s ease}
@keyframes pop{50%{transform:scale(1.3)}}
.seek{width:100%;flex:none}
.times{display:flex;justify-content:space-between;color:var(--dim);font-size:12px;font-variant-numeric:tabular-nums;margin-top:2px}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:28px;background:transparent;margin:0}
input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:4px;background:linear-gradient(var(--text),var(--text)) 0/var(--p,0%) 100% no-repeat,var(--line)}
input[type=range]::-moz-range-track{height:4px;border-radius:4px;background:var(--line)}
input[type=range]::-moz-range-progress{height:4px;border-radius:4px;background:var(--text)}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--text);margin-top:-6px}
input[type=range]::-moz-range-thumb{width:16px;height:16px;border:0;border-radius:50%;background:var(--text)}
.transport{display:flex;align-items:center;justify-content:space-between;width:100%;flex:none}
.transport button{width:56px;height:56px;display:grid;place-items:center;border-radius:50%}
.transport button:active{background:var(--panel2)}
.transport svg{width:28px;height:28px;fill:currentColor}
#btnPlay{width:clamp(72px,20vw,88px);height:clamp(72px,20vw,88px);background:var(--text);color:var(--bg)}
#btnPlay:active{transform:scale(.96);background:var(--text)}
#btnPlay svg{width:34px;height:34px}
.toggle{color:var(--dim);position:relative}
.toggle.on{color:var(--accent)}
.toggle .one{position:absolute;font-size:10px;font-weight:800;top:12px;right:10px}
.vol{display:flex;align-items:center;gap:10px;width:100%;color:var(--dim);flex:none}
.vol svg{width:20px;height:20px;fill:currentColor;flex:none}
#source{color:var(--dim);font-size:12px;flex:none;min-height:15px;text-align:center}

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
#toast{position:fixed;left:50%;top:calc(env(safe-area-inset-top) + 16px);transform:translateX(-50%);background:var(--text);color:var(--bg);padding:9px 16px;border-radius:999px;font-size:14px;font-weight:600;z-index:20;opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw;text-align:center}
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
		<div class="coverWrap"><div id="cover"></div></div>
		<div class="meta">
			<div class="txt">
				<div id="title">Nothing playing</div>
				<div id="artist">Start something from Search or Library</div>
				<div id="quality"></div>
			</div>
			<button id="btnFav" class="hidden" aria-label="Add to favorites"><svg viewBox="0 0 24 24"><path id="favIcon" d=""/></svg></button>
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
const HEART_FULL = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
const HEART_EMPTY = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z";
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
	$("btnFav").classList.toggle("hidden", !t);
	$("btnFav").classList.toggle("on", !!state?.favorite);
	$("btnFav").setAttribute("aria-label", state?.favorite ? "Remove from favorites" : "Add to favorites");
	$("favIcon").setAttribute("d", state?.favorite ? HEART_FULL : HEART_EMPTY);
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
$("btnFav").onclick = () => {
	if (!state?.track) return;
	vibrate();
	const on = !state.favorite;
	state.favorite = on; render();
	const b = $("btnFav"); b.classList.remove("pop"); void b.offsetWidth; if (on) b.classList.add("pop");
	cmd("favorite", { id: state.track.id, on }).then(() => toast(on ? "Added to favorites" : "Removed from favorites")).catch((e) => {
		if (state?.track) { state.favorite = !on; render(); }
		if (e.message !== "Unauthorized") toast(e.message);
	});
};
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
</html>\`;var B=2e4,H=25e3,E=64*1024,v=null,c=null,m=0,I=1,h="null",l=[],p=new Map,s=new Map,$=new Map,o=null,V=()=>{if(!o||l.length===0)return;let{resolve:t,timer:e}=o;o=null,clearTimeout(e),t(l.splice(0))},D=t=>t!==m?Promise.resolve(null):l.length>0?Promise.resolve(l.splice(0)):(o&&(clearTimeout(o.timer),o.resolve([])),new Promise(e=>{let n=setTimeout(()=>{o?.resolve===e&&(o=null),e([])},H);o={gen:t,resolve:e,timer:n}})),S=(t,e,n)=>{let a=p.get(t);a&&(p.delete(t),clearTimeout(a.timer),a.resolve({ok:e,data:n}))},_=(t,e)=>new Promise(n=>{let a=I++,i=setTimeout(()=>{p.delete(a),n({ok:!1,data:"Timed out waiting for TIDAL"})},B);p.set(a,{resolve:n,timer:i}),l.push({id:a,cmd:t,args:e}),V()}),j=t=>{h=JSON.stringify(t);let e=\`data: \${h}

\`;for(let n of s.keys())n.write(e)},N=(t,e)=>{let n=Buffer.from(t),a=Buffer.from(e);return n.length===a.length&&(0,y.timingSafeEqual)(n,a)},O=(t,e)=>{if(!c?.requireToken)return null;let n=t.headers["x-remote-token"]??e.searchParams.get("token")??"",a=c.tokens.find(i=>N(n,i));return a===void 0?!1:($.set(a,Date.now()),a)},G=t=>{if(c){c.tokens=t;for(let[e,n]of s)n!==null&&!t.includes(n)&&(e.end(),s.delete(e))}},F=()=>Object.fromEntries($),r=(t,e,n)=>{t.writeHead(e,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"}),t.end(JSON.stringify(n))},U=t=>new Promise((e,n)=>{let a=0,i=[];t.on("data",d=>{a+=d.length,a>E?(n(new Error("Body too large")),t.destroy()):i.push(d)}),t.on("end",()=>e(Buffer.concat(i).toString("utf8"))),t.on("error",n)}),W=async(t,e)=>{let n=new URL(t.url??"/","http://localhost");if(t.method==="GET"&&(n.pathname==="/"||n.pathname==="/index.html"))return e.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store","Referrer-Policy":"no-referrer"}),e.end(x);if(t.method==="GET"&&n.pathname==="/manifest.json")return r(e,200,{name:"TIDAL Remote",short_name:"Remote",start_url:"/",display:"standalone",background_color:"#0b0b0d",theme_color:"#0b0b0d"});if(!n.pathname.startsWith("/api/"))return r(e,404,{error:"Not found"});let a=O(t,n);if(a===!1)return r(e,401,{error:"Invalid or missing token"});if(t.method==="GET"&&n.pathname==="/api/state")return e.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"}),e.end(h);if(t.method==="GET"&&n.pathname==="/api/events"){e.writeHead(200,{"Content-Type":"text/event-stream","Cache-Control":"no-store",Connection:"keep-alive","X-Accel-Buffering":"no"}),e.write(\`retry: 2000
data: \${h}

\`),s.set(e,a);let i=setInterval(()=>e.write(\`: ping

\`),15e3);t.on("close",()=>{clearInterval(i),s.delete(e)});return}if(t.method==="POST"&&n.pathname==="/api/cmd"){let i;try{i=JSON.parse(await U(t)||"{}")}catch{return r(e,400,{error:"Invalid JSON"})}if(typeof i.cmd!="string")return r(e,400,{error:"Missing cmd"});let{ok:d,data:g}=await _(i.cmd,i.args??{});return r(e,d?200:500,d?{data:g}:{error:String(g)})}return r(e,404,{error:"Not found"})},L=async()=>{m++,o&&(clearTimeout(o.timer),o.resolve(null),o=null),l.length=0;for(let[t]of p)S(t,!1,"Remote stopped");for(let t of s.keys())t.end();if(s.clear(),v){let t=v;v=null,t.closeAllConnections?.(),await new Promise(e=>t.close(()=>e()))}},Y=async t=>{await L(),c=t;let e=w.default.createServer((n,a)=>{W(n,a).catch(i=>{console.error("[TidalRemote.native]",i),a.headersSent?a.end():r(a,500,{error:"Internal error"})})});return await new Promise((n,a)=>{e.once("error",a),e.listen(t.port,t.bindAll?"0.0.0.0":"127.0.0.1",()=>{e.off("error",a),n()})}),v=e,m},Q=/vEthernet|VirtualBox|VMware|docker|^br-|veth|WSL|Hyper-V|Loopback/i,J=/VPN|WireGuard|^wg|^tun|^tap|TAP-|OpenVPN|Tailscale|ZeroTier|NordLynx|Mullvad|utun|^ppp|Wintun/i,k=({address:t,name:e})=>{let n=0;return t.startsWith("192.168.")?n+=30:/^172\\.(1[6-9]|2\\d|3[01])\\./.test(t)?n+=20:t.startsWith("10.")&&(n+=10),/^(Ethernet|eth|en)/i.test(e)&&(n+=2),/Wi-?Fi|WLAN|wl/i.test(e)&&(n+=1),n},X=()=>{let t=[];for(let[e,n]of Object.entries(T.default.networkInterfaces()))if(!(Q.test(e)||J.test(e)))for(let a of n??[])a.family!=="IPv4"||a.internal||a.address.startsWith("169.254.")||t.push({address:a.address,name:e});return t.sort((e,n)=>k(n)-k(e))};0&&(module.exports={getAddresses,getLastSeen,nextCommands,pushState,respond,setTokens,start,stop});
`);if(z===void 0)throw new Error("Failed to register native module @dude/tidal-remote/remote.native.ts");var Kt=(...t)=>__ipcRenderer.invoke(z,"getAddresses",...t),Yt=(...t)=>__ipcRenderer.invoke(z,"getLastSeen",...t),Jt=(...t)=>__ipcRenderer.invoke(z,"nextCommands",...t),Xt=(...t)=>__ipcRenderer.invoke(z,"pushState",...t),gt=(...t)=>__ipcRenderer.invoke(z,"respond",...t),Zt=(...t)=>__ipcRenderer.invoke(z,"setTokens",...t),te=(...t)=>__ipcRenderer.invoke(z,"start",...t),ee=(...t)=>__ipcRenderer.invoke(z,"stop",...t);var ne=V(wt(),1),_t=t=>{let r=new Uint8Array(t);return crypto.getRandomValues(r),Array.from(r,h=>h.toString(16).padStart(2,"0")).join("")},_=await ne.ReactiveStore.getPluginStorage("TidalRemote",{port:24680,bindAll:!0,requireToken:!0,token:"",devices:[],preferredAddress:""});_.devices??=[];_.token&&(_.devices=[..._.devices,{id:_t(6),name:"My phone",token:_.token,created:Date.now()}],_.token="");var $t=()=>_.devices.map(t=>t.token),re=t=>{let r={id:_t(6),name:t.trim()||`Device ${_.devices.length+1}`,token:_t(12),created:Date.now()};return _.devices=[..._.devices,r],r},ae=t=>_.devices=_.devices.filter(r=>r.id!==t),ie=t=>{let r=!1,h=_.devices.map(k=>{let S=t[k.token];return S&&S!==k.lastSeen?(r=!0,{...k,lastSeen:S}):k});r&&(_.devices=h)};var A=V(oe(),1),D=V(se(),1),pe=V(ce(),1);var Ee=(t,r)=>`http://${t}:${_.port}/${_.requireToken&&r?`#token=${r}`:""}`,Me=t=>{if(!t)return"never";let r=Math.round((Date.now()-t)/1e3);return r<60?"just now":r<3600?`${Math.floor(r/60)} min ago`:r<86400?`${Math.floor(r/3600)} h ago`:new Date(t).toLocaleDateString()},_e=({text:t})=>{let r=A.default.useMemo(()=>{let h=(0,pe.default)(0,"M");return h.addData(t),h.make(),h.createSvgTag({cellSize:4,margin:3,scalable:!0})},[t]);return A.default.createElement("div",{style:{width:180,height:180,background:"#fff",borderRadius:8,padding:4,flex:"none"},dangerouslySetInnerHTML:{__html:r}})},ve,ht=(t=600)=>{clearTimeout(ve),ve=setTimeout(Dt,t)},$e={border:"1px solid rgba(255,255,255,.12)",borderRadius:10,padding:14},Ie={flex:1,minWidth:0,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.15)",borderRadius:8,color:"inherit",padding:"8px 10px",font:"inherit",outline:"none"},Be=()=>{let[,t]=A.default.useReducer(e=>e+1,0);A.default.useEffect(()=>fe(t),[]);let[r,h]=A.default.useState(_.port),[k,S]=A.default.useState(_.bindAll),[E,Q]=A.default.useState(_.requireToken),[lt,dt]=A.default.useState(_.preferredAddress),[W,Z]=A.default.useState(_.devices),[tt,et]=A.default.useState(_.devices.at(-1)?.id),[nt,ut]=A.default.useState(""),[rt,ct]=A.default.useState(),[xt,b]=A.default.useState();A.default.useEffect(()=>{let e=()=>Rt().then(()=>Z(_.devices)).catch(()=>{});e();let c=setInterval(e,5e3);return()=>clearInterval(c)},[]);let x=q.addresses,v=x.find(e=>e.address===lt)??x[0],g=W.find(e=>e.id===tt),i=v&&(!E||g)?Ee(v.address,g?.token):void 0,f=()=>{let e=re(nt);Z(_.devices),et(e.id),ut(""),Pt()},n=e=>{if(rt!==e)return ct(e);ae(e),Z(_.devices),ct(void 0),tt===e&&et(void 0),Pt()};return A.default.createElement(D.LunaSettings,null,A.default.createElement("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",padding:"8px 0 16px"}},q.running&&i&&A.default.createElement(_e,{text:i}),A.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6,minWidth:0}},A.default.createElement("div",{style:{fontWeight:600,color:q.running?"#4ade80":"#f87171"}},q.running?"Remote is running":`Remote is stopped${q.error?`: ${q.error}`:""}`),q.running&&!v&&A.default.createElement("div",{style:{opacity:.75}},"No LAN address found. Check your network connection."),q.running&&v&&E&&!g&&A.default.createElement("div",{style:{opacity:.75}},W.length?"Pick a device below to show its QR code.":"Add a device below to get a QR code."),q.running&&i&&A.default.createElement(A.default.Fragment,null,A.default.createElement("div",{style:{opacity:.75}},g?A.default.createElement(A.default.Fragment,null,"Pairing code for ",A.default.createElement("b",null,g.name),". Scan it or open the link on that device:"):"Scan the code or open this link on your phone:"),A.default.createElement("code",{title:"Click to copy",style:{cursor:"pointer",wordBreak:"break-all",userSelect:"all"},onClick:()=>navigator.clipboard.writeText(i).then(()=>b(i))},i," ",xt===i?"\u2713 copied":"")))),E&&A.default.createElement("div",{style:{...$e,display:"flex",flexDirection:"column",gap:10,marginBottom:12}},A.default.createElement("div",{style:{fontWeight:600}},"Paired devices"),W.length===0&&A.default.createElement("div",{style:{opacity:.7}},"No devices yet."),W.map(e=>A.default.createElement("div",{key:e.id,style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}},A.default.createElement("div",{style:{flex:1,minWidth:160}},A.default.createElement("div",{style:{fontWeight:500}},e.name,tt===e.id&&A.default.createElement("span",{style:{color:"#33ffee",fontSize:12,marginLeft:8}},"QR shown")),A.default.createElement("div",{style:{opacity:.6,fontSize:12}},"Added ",new Date(e.created).toLocaleDateString()," \xB7 last used ",Me(e.lastSeen))),A.default.createElement(D.LunaButton,{variant:"outlined",size:"small",onClick:()=>et(e.id)},"Show QR"),A.default.createElement(D.LunaButton,{variant:rt===e.id?"contained":"outlined",color:"error",size:"small",onClick:()=>n(e.id)},rt===e.id?"Confirm revoke":"Revoke"))),A.default.createElement("div",{style:{display:"flex",gap:10,marginTop:4}},A.default.createElement("input",{style:Ie,placeholder:"Device name, e.g. Pixel 8",value:nt,maxLength:40,onChange:e=>ut(e.target.value),onKeyDown:e=>e.key==="Enter"&&f()}),A.default.createElement(D.LunaButton,{onClick:f},"Add device"))),x.length>1&&A.default.createElement(D.LunaSelectSetting,{title:"Address for QR code",desc:"Pick the IP your phone can reach (usually your router's 192.168.x.x range).",value:v?.address??"",onChange:e=>dt(_.preferredAddress=e.target.value)},x.map(e=>A.default.createElement(D.LunaSelectItem,{key:e.address,value:e.address},e.address," (",e.name,")"))),A.default.createElement(D.LunaNumberSetting,{title:"Port",desc:"TCP port the remote listens on. Allow it in your firewall for private networks.",min:1024,max:65535,value:r,onNumber:e=>{h(_.port=e),ht(900)}}),A.default.createElement(D.LunaSwitchSetting,{title:"Allow other devices",desc:"Listen on your local network. Turn off to only allow this PC (127.0.0.1).",checked:k,onChange:(e,c)=>{S(_.bindAll=c),ht(0)}}),A.default.createElement(D.LunaSwitchSetting,{title:"Require access token",desc:"Strongly recommended. Each paired device gets its own token that you can revoke.",checked:E,onChange:(e,c)=>{Q(_.requireToken=c),ht(0)}}),A.default.createElement(D.LunaButtonSetting,{title:"Restart server",desc:"Use after network changes.",onClick:()=>ht(0)},"Restart"))};var{trace:ot,errSignal:Pe}=(0,he.Tracer)("[TidalRemote]"),X=new Set,q={running:!1,error:void 0,addresses:[]},Nt=new Set,fe=t=>(Nt.add(t),()=>Nt.delete(t)),ge=t=>{Object.assign(q,t),Pe._=q.error,Nt.forEach(r=>r())},Ot,st=()=>{clearTimeout(Ot),Ot=setTimeout(async()=>{try{await Xt(await Mt())}catch(t){ot.warn.withContext("publish")(t)}},120)};bt.redux.intercept(["playbackControls/SET_PLAYBACK_STATE","playbackControls/SEEK","playbackControls/SET_VOLUME","playbackControls/TOGGLE_MUTE","playbackControls/MEDIA_PRODUCT_TRANSITION","playQueue/MOVE_TO","playQueue/MOVE_NEXT","playQueue/MOVE_PREVIOUS","playQueue/ADD_NOW","playQueue/ADD_NEXT","playQueue/ADD_LAST","playQueue/RESET","playQueue/SET_REPEAT_MODE","playQueue/TOGGLE_REPEAT_MODE","playQueue/ENABLE_SHUFFLE_MODE","playQueue/DISABLE_SHUFFLE_MODE","playQueue/ENABLE_SHUFFLE_MODE_AND_SHUFFLE_ITEMS","playQueue/DISABLE_SHUFFLE_MODE_AND_UNSHUFFLE_ITEMS","playQueue/TOGGLE_SHUFFLE","favorites/SET_FAVORITE_IDS","content/ADD_ITEMS_TO_FAVORITES_SUCCESS","content/REMOVE_ITEMS_FROM_FAVORITES_SUCCESS"],X,st);bt.MediaItem.onMediaTransition(X,st);var De=setInterval(st,5e3);X.add(()=>clearInterval(De));X.add(()=>clearTimeout(Ot));var mt=-1,Re=async({id:t,cmd:r,args:h})=>{let k=Wt[r];if(!k)return gt(t,!1,`Unknown command "${r}"`);try{let S=await k(h??{});await gt(t,!0,S??null),st()}catch(S){ot.warn.withContext(`command ${r}`)(S),await gt(t,!1,S instanceof Error?S.message:String(S))}},Ne=async t=>{for(;t===mt;){let r;try{r=await Jt(t)}catch(h){ot.warn.withContext("poll")(h),await new Promise(k=>setTimeout(k,1e3));continue}if(r===null)return;for(let h of r)Re(h)}},Dt=async()=>{mt=-1;try{let t=await te({port:_.port,bindAll:_.bindAll,tokens:$t(),requireToken:_.requireToken});mt=t,ge({running:!0,error:void 0,addresses:_.bindAll?await Kt():[{address:"127.0.0.1",name:"This PC"}]}),Ne(t),st(),ot.log(`Remote listening on port ${_.port}`)}catch(t){let r=t?.code==="EADDRINUSE"?`Port ${_.port} is already in use`:t?.message??String(t);ge({running:!1,error:r}),ot.err.withContext("start")(t)}},Rt=async()=>ie(await Yt()),Oe=setInterval(()=>{Rt().catch(()=>{})},6e4);X.add(()=>clearInterval(Oe));var Pt=()=>Zt($t());X.add(()=>{mt=-1,ee()});Dt();export{Be as Settings,Pe as errSignal,fe as onStatus,Rt as refreshLastSeen,Dt as restart,q as status,Pt as syncTokens,ot as trace,X as unloads};
//# sourceMappingURL=dude.tidal-remote.mjs.map
