/*!
 * +AI theme pack "toolkit" — behaviour (packs/toolkit/behaviour.js)
 *
 * The developer toolkit application: theme directory, side-by-side compare,
 * URL builder, QR code, snippets and per-component copy/URL buttons. The
 * theme directory now lists pack codes (index.html?theme=<code>).
 * Bundled qrcodejs v1.0.0 (MIT) — inlined so the QR renders fully offline.
 */
window.PlusAISpecPackScripts = window.PlusAISpecPackScripts || {};
/* NOTE: deliberately non-strict — the bundled qrcodejs library
 * relies on sloppy-mode `this` and strictness propagates through calls. */
window.PlusAISpecPackScripts["toolkit"] = function (api) {

/* Bundled qrcodejs v1.0.0 (MIT) — inlined so the QR code renders fully offline (file://-safe). */
(function () {
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();

  window.QRCode = QRCode;
})();

  var THEMES = [
  {code:"accounting", url:"index.html?theme=accounting", name:"Accounting", description:"Ruled paper ledger with trial-balance tables and a sign-off block.", tags:["corporate", "finance"], stars:2},
  {code:"theme-adobe", url:"index.html?theme=theme-adobe", name:"Adobe", description:"Creative-tool workspace with a checkerboard artboard and panel bars.", tags:["brand", "creative"], stars:3},
  {code:"advertising", url:"index.html?theme=advertising", name:"Advertising", description:"Agency campaign board with moodboard swatches and sticky-note labels.", tags:["creative", "corporate"], stars:2},
  {code:"aerospace", url:"index.html?theme=aerospace", name:"Aerospace", description:"Split-flap departures board with a live clock.", tags:["technical", "industrial"], stars:3},
  {code:"theme-anthropic", url:"index.html?theme=theme-anthropic", name:"Anthropic", description:"Bookish editorial with serif type and a paper vignette.", tags:["brand", "editorial"], stars:2},
  {code:"architecture", url:"index.html?theme=architecture", name:"Architecture", description:"Competition board with drawing-sheet frame and title block.", tags:["technical", "design"], stars:2},
  {code:"banking", url:"index.html?theme=banking", name:"Banking", description:"Retail banking app with an account-card hero.", tags:["corporate", "finance"], stars:2},
  {code:"biotech", url:"index.html?theme=biotech", name:"Biotech", description:"Lab protocol with gel lanes and a DNA sequence strip.", tags:["science", "corporate"], stars:2},
  {code:"bladerunner2049", url:"index.html?theme=bladerunner2049", name:"Blade Runner 2049", description:"Neon-noir megacity archive with drifting fog.", tags:["sci-fi", "cyberpunk"], stars:2},
  {code:"blueprint", url:"index.html?theme=blueprint", name:"Blueprint", description:"Technical drafting sheet with hatched display type and registration marks.", tags:["technical", "design"], stars:3},
  {code:"chemicals", url:"index.html?theme=chemicals", name:"Chemicals", description:"Lab MSDS with an NFPA 704 safety diamond.", tags:["industrial", "science"], stars:3},
  {code:"construction", url:"index.html?theme=construction", name:"Construction", description:"Building site with scaffolding lattice and hazard stripes.", tags:["industrial", "corporate"], stars:2},
  {code:"consulting", url:"index.html?theme=consulting", name:"Consulting", description:"Strategy deck with a 2×2 framework matrix.", tags:["corporate", "minimal"], stars:3},
  {code:"art-cubism", url:"index.html?theme=art-cubism", name:"Cubism", description:"Cubist facets, fractured typography and charcoal keylines.", tags:["art"], stars:2},
  {code:"cyberpunk", url:"index.html?theme=cyberpunk", name:"Cyberpunk", description:"Neon street terminal with a perspective grid horizon and glitch type.", tags:["sci-fi", "cyberpunk"], stars:3},
  {code:"dec-manual", url:"index.html?theme=dec-manual", name:"DEC Manual", description:"1970s DEC field-service handbook with dotted-decimal chapter numbering.", tags:["technical", "retro"], stars:3},
  {code:"dental", url:"index.html?theme=dental", name:"Dental", description:"Dental practice with a smile-arc motif and appointment slip.", tags:["corporate", "minimal"], stars:2},
  {code:"energy", url:"index.html?theme=energy", name:"Energy", description:"Plant control room with status lamps and hazard stripes.", tags:["industrial"], stars:2},
  {code:"occupation-ceo", url:"index.html?theme=occupation-ceo", name:"Executive: CEO", description:"Executive Series boardroom letter, gold embossed seal.", tags:["corporate", "executive"], stars:2},
  {code:"occupation-cfo", url:"index.html?theme=occupation-cfo", name:"Executive: CFO", description:"Executive Series boardroom letter, ledger green.", tags:["corporate", "executive"], stars:1},
  {code:"occupation-cio", url:"index.html?theme=occupation-cio", name:"Executive: CIO", description:"Executive Series boardroom letter, indigo.", tags:["corporate", "executive"], stars:1},
  {code:"occupation-coo", url:"index.html?theme=occupation-coo", name:"Executive: COO", description:"Executive Series boardroom letter, steel blue.", tags:["corporate", "executive"], stars:1},
  {code:"occupation-cto", url:"index.html?theme=occupation-cto", name:"Executive: CTO", description:"Executive Series boardroom letter, azure.", tags:["corporate", "executive"], stars:1},
  {code:"finance", url:"index.html?theme=finance", name:"Finance", description:"Private-bank statement with a ticker and gold rules.", tags:["corporate", "finance"], stars:2},
  {code:"fintech", url:"index.html?theme=fintech", name:"Fintech", description:"Neobank terminal with a masked ticker and status chips.", tags:["corporate", "finance"], stars:2},
  {code:"fitness", url:"index.html?theme=fitness", name:"Fitness", description:"Gym programme with data-driven effort load bars.", tags:["sports", "minimal"], stars:3},
  {code:"games", url:"index.html?theme=games", name:"Games", description:"Arcade cabinet with CRT scanlines and pixel shadows.", tags:["retro", "gaming"], stars:2},
  {code:"theme-github", url:"index.html?theme=theme-github", name:"GitHub", description:"Repository README with a file-tree contents sidebar.", tags:["brand", "technical"], stars:3},
  {code:"theme-google", url:"index.html?theme=theme-google", name:"Google", description:"Material shell with a four-colour section cycle.", tags:["brand", "minimal"], stars:3},
  {code:"hal9000", url:"index.html?theme=hal9000", name:"HAL 9000", description:"HAL-9000 console with a fisheye lens and status line.", tags:["sci-fi", "retro"], stars:2},
  {code:"hr", url:"index.html?theme=hr", name:"HR", description:"Employee handbook with org-ring motifs and warm cards.", tags:["corporate", "minimal"], stars:2},
  {code:"ibm-manual", url:"index.html?theme=ibm-manual", name:"IBM Manual", description:"IBM manual with two-column pages and CSS-counter page numbers.", tags:["technical", "retro"], stars:3},
  {code:"art-impressionist", url:"index.html?theme=art-impressionist", name:"Impressionist", description:"Monet garden with painted brushwork and feathered edges.", tags:["art"], stars:2},
  {code:"insurance", url:"index.html?theme=insurance", name:"Insurance", description:"Insurance policy with a CSS umbrella and coverage notes.", tags:["corporate", "finance"], stars:2},
  {code:"country-ja", url:"index.html?theme=country-ja", name:"Japan", description:"Japanese print with ensō, hanko seal and seigaiha waves.", tags:["country", "minimal"], stars:2},
  {code:"lcars-mono", url:"index.html?theme=lcars-mono", name:"LCARS Mono", description:"Monochrome amber Star Trek console with sounds.", tags:["sci-fi", "retro"], stars:2},
  {code:"legal", url:"index.html?theme=legal", name:"Legal", description:"Correspondence from counsel with engraved letterhead.", tags:["corporate", "legal"], stars:2},
  {code:"luxury", url:"index.html?theme=luxury", name:"Luxury", description:"Haute-luxury atelier: type, space and one champagne.", tags:["minimal", "luxury"], stars:2},
  {code:"manpage", url:"index.html?theme=manpage", name:"Man Page", description:"troff man(1) page with NAME/SYNOPSIS framing.", tags:["technical", "retro"], stars:2},
  {code:"manufacturing", url:"index.html?theme=manufacturing", name:"Manufacturing", description:"Assembly floor with ISO tags and status LEDs.", tags:["industrial"], stars:2},
  {code:"maritime", url:"index.html?theme=maritime", name:"Maritime", description:"Coastal chart with a pure-CSS compass rose and graticule.", tags:["technical", "industrial"], stars:3},
  {code:"medical", url:"index.html?theme=medical", name:"Medical", description:"Clinical document with a reticle and chart readouts.", tags:["corporate", "medical"], stars:2},
  {code:"mentalhealth", url:"index.html?theme=mentalhealth", name:"Mental Health", description:"Quiet reading room with a calm palette.", tags:["minimal", "medical"], stars:2},
  {code:"theme-microsoft", url:"index.html?theme=theme-microsoft", name:"Microsoft", description:"Fluent productivity window with stacked panes.", tags:["brand", "minimal"], stars:2},
  {code:"military-spec", url:"index.html?theme=military-spec", name:"MIL-SPEC", description:"Military standard document with stencil chrome and i18n-aware fallbacks.", tags:["technical", "retro"], stars:3},
  {code:"mining", url:"index.html?theme=mining", name:"Mining", description:"Mining claim with strata bands and claim data.", tags:["industrial"], stars:2},
  {code:"museum", url:"index.html?theme=museum", name:"Museum", description:"Gallery exhibition with spotlit artwork and wall text.", tags:["art", "classic"], stars:2},
  {code:"music", url:"index.html?theme=music", name:"Music", description:"Album sleeve and ticket stub with perforation notches.", tags:["creative", "retro"], stars:2},
  {code:"neogenesis", url:"index.html?theme=neogenesis", name:"Neo Genesis", description:"Mecha manual with clip-path armour and telemetry.", tags:["sci-fi"], stars:2},
  {code:"newsroom", url:"index.html?theme=newsroom", name:"Newsroom", description:"Front-page news with a live locale-aware dateline.", tags:["editorial", "corporate"], stars:3},
  {code:"notary", url:"index.html?theme=notary", name:"Notary", description:"Notarised certificate with a pure-CSS wax seal and filing stamps.", tags:["corporate", "legal"], stars:3},
  {code:"theme-openai", url:"index.html?theme=theme-openai", name:"OpenAI", description:"Minimal lab whitepaper — the basis of this toolkit page.", tags:["brand", "minimal"], stars:2},
  {code:"pharma", url:"index.html?theme=pharma", name:"Pharma", description:"Regulatory monograph with DRUG-FACTS labels.", tags:["corporate", "medical"], stars:2},
  {code:"quantumlab", url:"index.html?theme=quantumlab", name:"Quantum Lab", description:"Research lab notes with annotation callouts.", tags:["sci-fi", "technical"], stars:2},
  {code:"realestate", url:"index.html?theme=realestate", name:"Real Estate", description:"Listing brochure with a CSS-grid floor plan.", tags:["corporate", "design"], stars:3},
  {code:"retro", url:"index.html?theme=retro", name:"Retro", description:"50s diner with checkerboard chrome and neon flicker.", tags:["retro", "classic"], stars:2},
  {code:"sci-fi-1", url:"index.html?theme=sci-fi-1", name:"Sci-Fi I", description:"Orbital HUD with a holo sweep and corner brackets.", tags:["sci-fi"], stars:2},
  {code:"sci-fi-2", url:"index.html?theme=sci-fi-2", name:"Sci-Fi II", description:"Atomic retro-futurism with orbiting electron rings.", tags:["sci-fi", "retro"], stars:3},
  {code:"spaceinvaders", url:"index.html?theme=spaceinvaders", name:"Space Invaders", description:"1978 arcade cabinet with SVG pixel-art sprites.", tags:["retro", "gaming"], stars:3},
  {code:"spaceodyssey", url:"index.html?theme=spaceodyssey", name:"Space Odyssey (2001)", description:"Monolith minimalism with a breathing red light.", tags:["sci-fi", "retro"], stars:2},
  {code:"startrek", url:"index.html?theme=startrek", name:"Star Trek", description:"Full-colour LCARS console with live stardate and sounds.", tags:["sci-fi", "retro"], stars:3},
  {code:"starwars", url:"index.html?theme=starwars", name:"Star Wars", description:"Worn galactic datapad with a twinkling starfield.", tags:["sci-fi", "retro"], stars:2},
  {code:"swiss", url:"index.html?theme=swiss", name:"Swiss", description:"Swiss International Typographic Style poster.", tags:["country", "minimal"], stars:2},
  {code:"the-borg", url:"index.html?theme=the-borg", name:"The Borg", description:"Borg console with a hex hive grid and re-voiced interface copy.", tags:["sci-fi", "cyberpunk"], stars:3},
  {code:"university", url:"index.html?theme=university", name:"University", description:"Faculty handbook with a crest seal.", tags:["corporate", "classic"], stars:2},
  {code:"utilities", url:"index.html?theme=utilities", name:"Utilities", description:"Grid-operator dashboard with a CSS gauge and telemetry.", tags:["technical", "industrial"], stars:3},
  {code:"veterinary", url:"index.html?theme=veterinary", name:"Veterinary", description:"Warm vet clinic with a CSS paw print.", tags:["corporate", "medical"], stars:2},
  {code:"default", url:"index.html", name:"Canonical spec", description:"The canonical +AI specification page every theme derives from.", tags:["minimal", "classic"], stars:3},
  {code:"theme-youtube", url:"index.html?theme=theme-youtube", name:"YouTube", description:"Watch page with a 16:9 player and shimmer title card.", tags:["brand", "media"], stars:3}

  ];

  function $(id) { return document.getElementById(id); }
  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // When the toolkit runs inside a development variant of the site
  // (index-fat.html), themed links stay inside that document.
  function selfIndexUrl(url) {
    var self = (window.location.pathname.split("/").pop() || "index.html");
    if (self === "index.html" || !self.endsWith(".html")) return url;
    return url.indexOf("index.html") === 0 ? url.replace(/^index\.html/, self) : url;
  }

  function buildURL(o) {
    var base = (o.base || "").trim();
    var href;
    if (base) {
      base = base.replace(/\/+$/, "");
      href = base + "/" + selfIndexUrl(o.url);
    } else {
      href = "./" + selfIndexUrl(o.url);
    }
    var p = [];
    if (o.name) p.push("name=" + encodeURIComponent(o.name));
    if (o.company) p.push("company=" + encodeURIComponent(o.company));
    if (o.lang) p.push("lang=" + encodeURIComponent(o.lang));
    if (o.mode && o.mode !== "auto") p.push("mode=" + encodeURIComponent(o.mode));
    if (o.font) p.push("font=" + encodeURIComponent(o.font));
    if (o.highlight) p.push("highlight=" + encodeURIComponent(o.highlight));
    if (p.length) href += "?" + p.join("&");
    return href;
  }

  function readForm() {
    return {
      code: $("f-theme").value,
      url: urlFor($("f-theme").value),
      base: $("f-base").value,
      name: $("f-name").value.trim(),
      company: $("f-company").value.trim(),
      lang: $("f-lang").value.trim(),
      mode: $("f-mode").value,
      font: $("f-font").value.trim(),
      highlight: $("f-highlight").value.trim()
    };
  }

  function qrAvailable() { return typeof window.QRCode === "function"; }

  function showQrFallback() {
    $("qrBox").innerHTML = "";
    $("qrFallback").style.display = "block";
  }

  function renderQR(text) {
    var box = $("qrBox");
    box.innerHTML = "";
    if (qrAvailable()) {
      try {
        new QRCode(box, { text: text, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M });
        $("qrFallback").style.display = "none";
      } catch (e) { showQrFallback(); }
    } else {
      showQrFallback();
    }
  }

  var BADGE_CSS = ".plus-ai{display:inline-block;font:700 13px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#0b1220;background:#10A37F;padding:5px 9px;border-radius:6px;text-decoration:none;letter-spacing:.03em}.plus-ai:hover{filter:brightness(1.08)}";

  function displayName(o) { return o.name || o.company || "Eric Mourant"; }

  function buildSnippets(o, url) {
    var dname = displayName(o);
    var label = dname + " +AI";
    var plain = label;
    var html = '<a href="' + escapeHtml(url) + '">' + escapeHtml(label) + '</a>';
    var md = "[" + label + "](" + url + ")";
    var badge = '<a class="plus-ai" href="' + escapeHtml(url) + '" title="' + escapeHtml(label) + '">+AI</a>\n'
      + "<style>\n" + BADGE_CSS + "\n</style>";
    return { plain: plain, html: html, md: md, badge: badge, label: label, url: url };
  }

  function renderSnippets(o, url) {
    var s = buildSnippets(o, url);
    $("snipPlain").textContent = s.plain;
    $("snipHtml").textContent = s.html;
    $("snipMd").textContent = s.md;
    $("snipBadge").textContent = s.badge;

    $("prevPlain").textContent = s.plain;

    var h = $("prevHtml");
    h.textContent = "";
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.textContent = s.label;
    h.appendChild(a);

    var m = $("prevMd");
    m.textContent = "";
    var a2 = document.createElement("a");
    a2.setAttribute("href", url);
    a2.textContent = s.label;
    m.appendChild(a2);

    var b = $("prevBadge");
    b.textContent = "";
    var styleEl = document.getElementById("badgeStyle");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "badgeStyle";
      styleEl.textContent = BADGE_CSS;
      document.head.appendChild(styleEl);
    }
    var sp = document.createElement("a");
    sp.className = "plus-ai";
    sp.setAttribute("href", url);
    sp.textContent = "+AI";
    b.appendChild(sp);
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function copyText(text, btn) {
    function done() {
      if (btn) {
        var old = btn.textContent;
        btn.textContent = "Copied \u2713";
        setTimeout(function () { btn.textContent = old; }, 1200);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  }

  var currentUrl = "";
  var renderTimer = null;

  function updateAll() {
    var o = readForm();
    currentUrl = buildURL(o);
    $("outUrl").value = currentUrl;
    renderQR(currentUrl);
    renderSnippets(o, currentUrl);
  }

  function schedule() {
    if (renderTimer) clearTimeout(renderTimer);
    renderTimer = setTimeout(updateAll, 120);
  }

  function starsFor(n) {
    var out = "";
    for (var i = 0; i < 3; i++) out += '<span class="' + (i < n ? "" : "dim") + '">\u2605</span>';
    return out;
  }

  function renderGallery() {
    var g = $("gallery");
    g.textContent = "";
    var sorted = THEMES.slice().sort(function (a, b) {
      if (b.stars !== a.stars) return b.stars - a.stars;
      return a.name.localeCompare(b.name);
    });
    sorted.forEach(function (t) {
      var card = document.createElement("div");
      card.className = "tcard";

      var h4 = document.createElement("h4");
      h4.textContent = t.name;
      card.appendChild(h4);

      var fn = document.createElement("div");
      fn.className = "fname";
      fn.textContent = t.code;
      card.appendChild(fn);

      var p = document.createElement("p");
      p.textContent = t.description;
      card.appendChild(p);

      var stars = document.createElement("div");
      stars.className = "stars";
      stars.innerHTML = starsFor(t.stars);
      card.appendChild(stars);

      var tags = document.createElement("div");
      tags.className = "tags";
      t.tags.forEach(function (tag) {
        var s = document.createElement("span");
        s.className = "tag";
        s.textContent = tag;
        tags.appendChild(s);
      });
      card.appendChild(tags);

      var row = document.createElement("div");
      row.className = "row";
      var pb = document.createElement("button");
      pb.type = "button";
      pb.className = "tk-btn small";
      pb.textContent = "Preview";
      pb.addEventListener("click", function () { openPreview(t); });
      var ob = document.createElement("a");
      ob.className = "tk-btn small";
      ob.textContent = "Open \u2197";
      ob.href = "./" + selfIndexUrl(t.url);
      ob.target = "_blank";
      ob.rel = "noopener";
      row.appendChild(pb);
      row.appendChild(ob);
      card.appendChild(row);
      g.appendChild(card);
    });
  }

  function openPreview(t) {
    $("previewTitle").textContent = t.name + " \u2014 " + t.code;
    $("previewFrame").src = "./" + selfIndexUrl(t.url);
    $("previewModal").classList.add("open");
  }

  function closePreview() {
    $("previewModal").classList.remove("open");
    $("previewFrame").src = "about:blank";
  }

  function fillThemeSelect(sel) {
    sel.textContent = "";
    THEMES.slice().sort(function (a, b) { return a.name.localeCompare(b.name); }).forEach(function (t) {
      var opt = document.createElement("option");
      opt.value = t.code;
      opt.textContent = t.name + " (" + t.code + ")";
      sel.appendChild(opt);
    });
  }

  function urlFor(code) {
    var entry = THEMES.find(function (t) { return t.code === code; });
    return entry ? entry.url : "index.html";
  }

  function readCompareParams() {
    return {
      name: $("c-name").value.trim(),
      company: $("c-company").value.trim(),
      lang: $("c-lang").value.trim(),
      mode: $("c-mode").value,
      font: $("c-font").value.trim(),
      highlight: $("c-highlight").value.trim()
    };
  }

  function compareUrlFor(code) {
    var cp = readCompareParams();
    return buildURL({ url: urlFor(code), base: "", name: cp.name, company: cp.company, lang: cp.lang, mode: cp.mode, font: cp.font, highlight: cp.highlight });
  }

  function refreshPane(selId, frameId) {
    var url = compareUrlFor($(selId).value);
    $(frameId).src = url;
  }

  function syncBoth() {
    refreshPane("selA", "frameA");
    refreshPane("selB", "frameB");
  }

  function randomThemes() {
    if (THEMES.length < 2) return;
    var a = THEMES[Math.floor(Math.random() * THEMES.length)];
    var b;
    do {
      b = THEMES[Math.floor(Math.random() * THEMES.length)];
    } while (b.code === a.code);
    $("selA").value = a.code;
    $("selB").value = b.code;
    refreshPane("selA", "frameA");
    refreshPane("selB", "frameB");
  }

  function componentPlainText(el) {
    var clone = el.cloneNode(true);
    var bar = clone.querySelector(".component-bar");
    if (bar) bar.remove();
    var actions = clone.querySelector(".hero-actions");
    if (actions) actions.remove();
    return (clone.innerText || clone.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
  }

  function componentUrl(anchor) {
    var params = new URLSearchParams(window.location.search);
    params.set("lang", document.documentElement.lang || "en");
    var mode = document.documentElement.dataset.theme || "";
    if (mode) params.set("mode", mode);
    var fontSelect = document.querySelector("#fontSelect");
    if (fontSelect && fontSelect.value) params.set("font", fontSelect.value);
    var accent = "";
    try {
      accent = (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "").trim();
    } catch (e) { accent = ""; }
    if (accent) params.set("highlight", accent);
    var base = window.location.href.split("#")[0].split("?")[0];
    return base + "?" + params.toString() + "#" + anchor;
  }

  function makeComponentBar(el, anchor, label) {
    if (!el || el.querySelector(".component-bar")) return;
    var bar = document.createElement("div");
    bar.className = "component-bar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", label + " actions");

    var copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "component-btn";
    copyBtn.textContent = "Copy";
    copyBtn.title = "Copy this " + label.toLowerCase() + " as plain text";
    copyBtn.addEventListener("click", function () { copyText(componentPlainText(el), copyBtn); });

    var urlBtn = document.createElement("button");
    urlBtn.type = "button";
    urlBtn.className = "component-btn";
    urlBtn.textContent = "URL";
    urlBtn.title = "Copy a deep link to this " + label.toLowerCase();
    urlBtn.addEventListener("click", function () { copyText(componentUrl(anchor), urlBtn); });

    bar.append(copyBtn, urlBtn);

    if (el.classList.contains("spec-section")) {
      var h3 = el.querySelector("h3");
      if (h3) h3.after(bar);
      else el.prepend(bar);
    } else {
      el.append(bar);
    }
  }

  function addStaticComponentBars() {
    makeComponentBar(document.querySelector(".hero-copy"), "meaning", "Title and declaration");
    makeComponentBar(document.querySelector(".meaning-card"), "meaning", "What the mark says");
    makeComponentBar(document.querySelector(".plain-meaning"), "plain-meaning", "Plain meaning");
  }

  function addSpecComponentBars() {
    var content = document.getElementById("specContent");
    if (!content) return;
    content.querySelectorAll(".spec-section").forEach(function (s) {
      makeComponentBar(s, s.id, "Section " + (s.dataset.section || ""));
    });
    var end = content.querySelector(".spec-end");
    if (end) {
      if (!end.id) end.id = "spec-end";
      makeComponentBar(end, "spec-end", "End of document");
    }
  }

  function initDivider() {
    var div = $("divider");
    var paneA = $("paneA");
    var paneB = $("paneB");
    var startX, startW;
    div.addEventListener("pointerdown", function (e) {
      if (window.innerWidth < 920) return;
      div.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startW = paneA.getBoundingClientRect().width;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    });
    div.addEventListener("pointermove", function (e) {
      if (startW == null) return;
      var rect = $("compare").getBoundingClientRect();
      var total = rect.width;
      var w = startW + (e.clientX - startX);
      var min = Math.max(180, total * 0.18);
      w = Math.min(Math.max(w, min), total - min - 10);
      paneA.style.flex = "0 0 " + w + "px";
      paneB.style.flex = "1 1 0";
    });
    function stop() { startW = null; document.body.style.cursor = ""; document.body.style.userSelect = ""; }
    div.addEventListener("pointerup", stop);
    div.addEventListener("pointercancel", stop);
  }

  var specObserver = null;

  function initToolkit() {
    fillThemeSelect($("f-theme"));
    fillThemeSelect($("selA"));
    fillThemeSelect($("selB"));

    var sorted = THEMES.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    if (sorted.length > 1) { $("selA").value = sorted[0].code; $("selB").value = sorted[1].code; }

    renderGallery();
    updateAll();

    ["f-theme", "f-base", "f-name", "f-company", "f-lang", "f-mode", "f-font", "f-highlight"].forEach(function (id) {
      $(id).addEventListener("input", schedule);
      $(id).addEventListener("change", schedule);
    });

    $("copyUrl").addEventListener("click", function () { copyText(currentUrl, this); });
    $("testUrl").addEventListener("click", function () {
      window.open(currentUrl, "_blank", "noopener");
    });

    $("copyPlain").addEventListener("click", function () { copyText($("snipPlain").textContent, this); });
    $("copyHtml").addEventListener("click", function () { copyText($("snipHtml").textContent, this); });
    $("copyMd").addEventListener("click", function () { copyText($("snipMd").textContent, this); });
    $("copyBadge").addEventListener("click", function () { copyText($("snipBadge").textContent, this); });

    $("copyAll").addEventListener("click", function () {
      var o = readForm();
      var s = buildSnippets(o, currentUrl);
      var report =
        "+AI Toolkit report\n" +
        "Generated URL:\n" + s.url + "\n\n" +
        "Plain text:\n" + s.plain + "\n\n" +
        "HTML:\n" + s.html + "\n\n" +
        "Markdown:\n" + s.md + "\n\n" +
        "Badge embed:\n" + s.badge + "\n";
      copyText(report, this);
    });

    $("syncBtn").addEventListener("click", syncBoth);
    $("randomBtn").addEventListener("click", randomThemes);
    $("refreshA").addEventListener("click", function () { refreshPane("selA", "frameA"); });
    $("refreshB").addEventListener("click", function () { refreshPane("selB", "frameB"); });
    $("openA").addEventListener("click", function () {
      window.open(compareUrlFor($("selA").value), "_blank", "noopener");
    });
    $("openB").addEventListener("click", function () {
      window.open(compareUrlFor($("selB").value), "_blank", "noopener");
    });
    $("selA").addEventListener("change", function () { refreshPane("selA", "frameA"); });
    $("selB").addEventListener("change", function () { refreshPane("selB", "frameB"); });

    syncBoth();

    $("previewClose").addEventListener("click", closePreview);
    $("previewModal").addEventListener("click", function (e) {
      if (e.target === $("previewModal")) closePreview();
    });
    document.addEventListener("keydown", onDocumentKeydown);

    initDivider();

    addStaticComponentBars();
    addSpecComponentBars();
    var content = document.getElementById("specContent");
    if (content && "MutationObserver" in window) {
      specObserver = new MutationObserver(addSpecComponentBars);
      specObserver.observe(content, { childList: true });
    }
  }

  function onDocumentKeydown(e) {
    if (e.key === "Escape") closePreview();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToolkit);
  } else {
    initToolkit();
  }

  return function cleanup() {
    if (renderTimer) clearTimeout(renderTimer);
    if (specObserver) specObserver.disconnect();
    document.removeEventListener("keydown", onDocumentKeydown);
    var styleEl = document.getElementById("badgeStyle");
    if (styleEl) styleEl.remove();
  };
};
