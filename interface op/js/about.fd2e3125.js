"use strict";(self["webpackChunktest0"]=self["webpackChunktest0"]||[]).push([[443],{7108:function(t,e,s){s.r(e),s.d(e,{default:function(){return S}});var l=s(3396);const o={class:"about"};function i(t,e,s,i,a,n){const h=(0,l.up)("AboutUser");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(h)])}var a=s(7139);const n=["onClick"],h=(0,l._)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1),r=[h],c={class:"ch"},u=["onClick"],d=(0,l._)("hr",null,null,-1),g=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})],-1),p={class:"suyt"},v=["onClick"];function w(t,e,s,o,i,h){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.$store.state.ch,(t=>((0,l.wg)(),(0,l.iD)("h1",{key:t},[(0,l.Uk)((0,a.zw)(t.value)+" ",1),((0,l.wg)(),(0,l.iD)("svg",{onClick:e=>h.suppr(t.id),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},r,8,n))])))),128))]),(0,l._)("div",null,[(0,l._)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.lol,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t,onClick:e=>h.charge2(t.idTag,t.libTag),class:"us"},(0,a.zw)(t.libTag),9,u)))),128))]),d]),g,(0,l._)("div",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.app,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:t,onClick:s=>h.charge(e,t),class:"yt"},(0,a.zw)(t.libStar),9,v)))),128))])])}var m={data(){return{app:{},lol:{}}},methods:{suppr(t){if(this.$store.commit("del",t),this.$store.state.ab=Object.keys(this.$store.state.ch).length,0===Object.keys(this.$store.state.ch).length)window.location.href="/#/";else{let t=this.$store.state.ch,e="{";for(let l=0;l<t.length;l++)l==t.length-1?e+='"'+l+'":{"value":'+t[l].id+"}":e+='"'+l+'":{"value":'+t[l].id+"}, ";e+="}";let s=JSON.stringify(e);console.log(s),fetch("http://localhost/test/about.php",{method:"POST",body:s}).then((t=>t.json())).then((t=>{console.log(t),this.app=t})),t=this.app,console.log(t),e="{";for(let l=0;l<t.length;l++)l==t.length-1?e+='"'+l+'":{"value":'+t[l].idStar+"}":e+='"'+l+'":{"value":'+t[l].idStar+"}, ";e+="}",s=JSON.stringify(e),fetch("http://localhost/test/about2.php",{method:"POST",body:s}).then((t=>t.json())).then((t=>{console.log(t);for(let e=0;e<t.length;e++)for(let s=0;s<this.$store.state.ch.length;s++)console.log(this.$store.state.ch[s].value+"//"+t[e].libTag),this.$store.state.ch[s].value==t[e].libTag&&t.splice(e,1);this.lol=t}))}},charge(t,e){this.$store.state.wa=e,this.$store.state.in=Object.keys(this.$store.state.wa).length,window.location.href="/#/wankil"},charge2(t,e){this.$store.commit("add",{id:t,value:e}),this.$store.state.ab=Object.keys(this.$store.state.ch).length;let s=this.$store.state.ch,l="{";for(let i=0;i<s.length;i++)i==s.length-1?l+='"'+i+'":{"value":'+s[i].id+"}":l+='"'+i+'":{"value":'+s[i].id+"}, ";l+="}";let o=JSON.stringify(l);console.log(o),fetch("http://localhost/test/about.php",{method:"POST",body:o}).then((t=>t.json())).then((t=>{console.log(t),this.app=t})),s=this.app,console.log(s),l="{";for(let i=0;i<s.length;i++)i==s.length-1?l+='"'+i+'":{"value":'+s[i].idStar+"}":l+='"'+i+'":{"value":'+s[i].idStar+"}, ";l+="}",o=JSON.stringify(l),fetch("http://localhost/test/about2.php",{method:"POST",body:o}).then((t=>t.json())).then((t=>{console.log(t);for(let e=0;e<t.length;e++)for(let s=0;s<this.$store.state.ch.length;s++)console.log(this.$store.state.ch[s].value+"//"+t[e].libTag),this.$store.state.ch[s].value==t[e].libTag&&t.splice(e,1);this.lol=t}))}},async mounted(){let t=this.$store.state.ch;console.log(t);let e="{";for(let l=0;l<t.length;l++)l==t.length-1?e+='"'+l+'":{"value":'+t[l].id+"}":e+='"'+l+'":{"value":'+t[l].id+"}, ";e+="}";let s=JSON.stringify(e);console.log(s),await fetch("http://localhost/test/about.php",{method:"POST",body:s}).then((t=>t.json())).then((t=>{console.log(t),this.app=t})),t=this.app,console.log(t),e="{";for(let l=0;l<t.length;l++)l==t.length-1?e+='"'+l+'":{"value":'+t[l].idStar+"}":e+='"'+l+'":{"value":'+t[l].idStar+"}, ";e+="}",s=JSON.stringify(e),await fetch("http://localhost/test/about2.php",{method:"POST",body:s}).then((t=>t.json())).then((t=>{console.log(t);for(let e=0;e<t.length;e++)for(let s=0;s<this.$store.state.ch.length;s++)this.$store.state.ch[s].value==t[e].libTag&&t.splice(e,1);this.lol=t}))}},f=s(89);const b=(0,f.Z)(m,[["render",w]]);var _=b,k={components:{AboutUser:_}};const y=(0,f.Z)(k,[["render",i]]);var S=y},4437:function(t,e,s){s.r(e),s.d(e,{default:function(){return T}});var l=s(3396);const o={class:"game"};function i(t,e,s,i,a,n){const h=(0,l.up)("HelloGame");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(h)])}var a=s(7139),n=s(9242);const h={class:"boss"},r={class:"suboss"},c={class:"susuboss"},u=(0,l._)("br",null,null,-1),d=(0,l.Uk)("="),g=(0,l._)("hr",null,null,-1),p={class:"susuboss"},v=(0,l._)("br",null,null,-1),w=(0,l.Uk)("="),m=(0,l._)("hr",null,null,-1);function f(t,e,s,o,i,f){return(0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",r,[(0,l._)("div",c,[(0,l._)("h1",null,[(0,l.Uk)((0,a.zw)(this.app2Tag.libTag),1),u,d]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"star","onUpdate:modelValue":e[0]||(e[0]=t=>i.repStar=t)},null,512),[[n.nr,i.repStar]])]),g,(0,l._)("div",p,[(0,l._)("h1",null,[(0,l.Uk)((0,a.zw)(this.app2Star.libStar),1),v,w]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"tag","onUpdate:modelValue":e[1]||(e[1]=t=>i.repTag=t)},null,512),[[n.nr,i.repTag]])]),m,(0,l._)("button",{type:"button",class:"btn btn-success",onClick:e[2]||(e[2]=t=>f.launch())},"Success")])])}var b={data(){return{app2Tag:{},app2Star:{},repStar:this.repStar,repTag:this.repTag}},async mounted(){await fetch("http://localhost/test/game.php",{}).then((t=>t.json())).then((t=>{console.log(t),this.app2Tag=t.tag,this.app2Star=t.star}))},methods:{launch(){let t=this.app2Star.idStar,e=this.repStar,s=this.app2Tag.idTag,l=this.repTag,o=JSON.stringify({star:{idStar:t,repTag:l},tag:{idTag:s,repStar:e}});console.log(o),fetch("http://localhost/test/launch.php",{method:"POST",body:o}).then((t=>console.log(t))),this.repStar="",this.repTag="",this.$router.push({name:"home"})}}},_=s(89);const k=(0,_.Z)(b,[["render",f]]);var y=k,S={components:{HelloGame:y}};const $=(0,_.Z)(S,[["render",i]]);var T=$},4996:function(t,e,s){s.r(e),s.d(e,{default:function(){return J}});var l=s(3396);const o={class:"wankil"};function i(t,e,s,i,a,n){const h=(0,l.up)("HelloWankil"),r=(0,l.up)("HelloLink");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(h),(0,l.Wm)(r)])}var a=s(7139);const n={class:"su"},h={class:"bo"},r={key:0},c={class:"image"},u=["src"],d=(0,l._)("br",null,null,-1),g={class:"tag2"},p={class:"ch"},v=(0,l._)("div",null,[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})])],-1),w=["onClick"],m={key:0,class:"such"},f={class:"lescom"},b=(0,l._)("hr",null,null,-1),_={class:"sulescom"},k=["src"],y=(0,l._)("br",null,null,-1);function S(t,e,s,o,i,S){return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",h,[i.wan?((0,l.wg)(),(0,l.iD)("h1",r,(0,a.zw)(i.wan.libStar),1)):(0,l.kq)("",!0),(0,l._)("div",c,[(0,l._)("img",{src:this.de.im},null,8,u)]),(0,l._)("div",null,[(0,l._)("p",null,(0,a.zw)(this.de.text),1)]),d,(0,l._)("div",g,[(0,l._)("div",p,[v,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.lol,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t,onClick:e=>S.com(t[0],t[1]),class:"us"},(0,a.zw)(t[1]),9,w)))),128))]),this.co.id?((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("h2",null,"Article : "+(0,a.zw)(this.co.txt),1),(0,l._)("div",f,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.comm,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[b,(0,l._)("div",_,[(0,l._)("p",null,(0,a.zw)(e),1),(0,l._)("img",{class:"susules",src:this.de.im},null,8,k),(0,l._)("p",null,(0,a.zw)(t),1)])])))),128))])])):(0,l.kq)("",!0)]),y])])}var $={data(){return{wan:this.$store.state.wa,lol:this.$store.state.film,de:{text:"Imaginez qu'un notaire vous convoque pour vous faire la lecture d'un document très important et que, le moment venu, dans son bureau, il renverse maladroitement toute une bouteille d'encre sur ledit document. Ça commence donc",im:"https://cdn.pixabay.com/photo/2022/03/18/02/54/flower-7075771_1280.jpg"},co:{id:!1,txt:!1},comm:this.$store.state.avis}},watch:{"$store.state.avis":{deep:!0,handler(t){this.comm=t}}},mounted(){this.loadFilm(this.wan.libStar),this.testURL(),this.$store.state.wa||(window.location.href="/#/")},methods:{async testURL(){let t=window.location.href,e=t.split("#");console.log(e),e[2]&&(e[2]=5,await fetch("http://localhost/test/url.php?id="+e[2],{}).then((t=>t.json())).then((t=>{console.log(t),this.$store.state.wa=t,this.$store.state.in=!0})))},async starterpack(){let t="{value:"+this.$store.state.wa.idStar+"}",e=JSON.stringify(t);console.log(e),this.$store.state.wa?await fetch("http://localhost/test/wankil1.php",{method:"POST",body:e}).then((t=>t.json())).then((t=>{console.log(t),this.app=t})):window.location.href="/#/"},async loadFilm(t){let e=t.split(" "),s="https://api.themoviedb.org/3/search/person?api_key=7d575ffaee2c834502719c85b5ba5b6c&query=";e.forEach(((t,l)=>{l+1>=e.length?s+=t:s+=t+"+"})),console.log(s),await fetch(s,{method:"GET"}).then((t=>t.json())).then((t=>{if(this.lol={},0==t.total_pages)return void(this.lol={1:"rand film",2:"gaming",6:"defi",12:"rand film"});let e=[];this.$store.state.film,t.results[0].known_for.forEach((t=>{this.lol[t.id]=t.title,e.push([t.id,t.title])})),console.log(e),this.$store.state.film=e,this.lol=e,console.log(this.lol)}))},async com(t,e){this.co.id=t,this.co.txt=e;let s=t;await fetch("https://api.themoviedb.org/3/movie/"+s+"/reviews?api_key=7d575ffaee2c834502719c85b5ba5b6c&language=en-US&page=1",{method:"GET"}).then((t=>t.json())).then((t=>{console.log(t),0!=t.total_pages?(this.comm={},t.results.forEach((t=>{this.comm[t.author]=t.content}))):this.comm={1:"AUCUN AVIS",2:"AUCUN AVIS",6:"defi",12:"AUCUN AVIS"}})),this.$store.state.avis=this.comm}}},T=s(89);const D=(0,T.Z)($,[["render",S]]);var x=D;const O={class:"tag2"},j=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},[(0,l._)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})],-1);function z(t,e,s,o,i,n){return(0,l.wg)(),(0,l.iD)("div",O,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.end,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t},[(0,l._)("h3",null,(0,a.zw)(t.site),1),(0,l._)("p",null,(0,a.zw)(t.link),1)])))),128)),j])}var C={data(){return{end:{0:{site:"twitter",link:"https://vuex.vuejs.org/guide/#the-simplest-store"},1:{site:"twitter",link:"https://vuex.vuejs.org/guide/#the-simplest-store"},2:{site:"twitter",link:"https://vuex.vuejs.org/guide/#the-simplest-store"}}}}};const U=(0,T.Z)(C,[["render",z]]);var A=U,H={components:{HelloWankil:x,HelloLink:A}};const N=(0,T.Z)(H,[["render",i]]);var J=N}}]);
//# sourceMappingURL=about.fd2e3125.js.map