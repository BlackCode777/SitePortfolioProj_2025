import{B as O,E as _,F as b,G as i,H as r,I as x,J as M,K as y,L as u,M as a,N as P,S as I,T as k,U as w,_ as E,aa as A,ba as S,ca as m,fa as T,ga as D,ha as F,ja as H,ka as B,n as C,o as h,q as v,t as p,u as s,w as l,x as c}from"./chunk-CQNC4NB7.js";var j=[{path:"",loadComponent:()=>import("./chunk-C46YPUZB.js").then(o=>o.HOMEComponent)}];var L={providers:[w({eventCoalescing:!0}),B(j),F(D())]};var d=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["app-footer"]],decls:25,vars:0,consts:[[1,"footer"],[1,"social"],["href","https://x.com/Ander32663638",1,"icon","brands","fa-twitter"],[1,"label"],["href","https://github.com/BlackCode777",1,"icon","brands","fa-github"],["href","https://www.linkedin.com/in/anderson-martins-06a316239/",1,"icon","brands","fa-linkedin-in"],["href","https://api.whatsapp.com/send?phone=5521969180363&text=Ol%C3%A1%2C%20Anderson%2C%20tudo%20bem%3F",1,"icon","brands","fa-whatsapp"],[1,"copyright"],["href","https://github.com/BlackCode777"]],template:function(e,n){e&1&&(i(0,"footer",0)(1,"ul",1)(2,"li")(3,"a",2)(4,"span",3),a(5,"X.com"),r()()(),i(6,"li")(7,"a",4)(8,"span",3),a(9,"GitHub"),r()()(),i(10,"li")(11,"a",5)(12,"span",3),a(13,"LinkedIn"),r()()(),i(14,"li")(15,"a",6)(16,"span",3),a(17,"WhatsApp"),r()()()(),i(18,"ul",7)(19,"li"),a(20,"\xA9 Anderson Martins"),r(),i(21,"li"),a(22," Template: "),i(23,"a",8),a(24,"Anderson Martins - BlackcCode77"),r()()()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#fff;padding:2em 1em;text-align:center}.footer-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1em}.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:flex;gap:1em;justify-content:center;padding:0;margin:0}.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;color:#555}ul.copyright[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}"]})};function z(o,t){if(o&1){let e=M();i(0,"li")(1,"a",2),y("click",function(){let V=C(e).$implicit,G=u();return h(G.scrollTo(V))}),a(2),I(3,"titlecase"),r()()}if(o&2){let e=t.$implicit,n=u();s(),b("active",n.activeSection===e),s(),P(" ",k(3,3,e)," ")}}var f=class o{constructor(t){this.platformId=t}lgpdClick=new v;activeSection="Topo";sections=["Topo","Sobre","Contato","LGPD"];ngOnInit(){}ngAfterViewInit(){if(m(this.platformId)){let t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(this.activeSection=n.target.id)})},{threshold:.6});this.sections.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)})}}scrollTo(t){if(t==="LGPD"){this.lgpdClick.emit();return}let e=document.getElementById(t);e?e.scrollIntoView({behavior:"smooth",block:"start"}):setTimeout(()=>{let n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100)}static \u0275fac=function(e){return new(e||o)(l(p))};static \u0275cmp=c({type:o,selectors:[["app-header"]],outputs:{lgpdClick:"lgpdClick"},decls:3,vars:1,consts:[["id","nav"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,n){e&1&&(i(0,"nav",0)(1,"ul"),O(2,z,4,5,"li",1),r()()),e&2&&(s(2),_("ngForOf",n.sections))},dependencies:[S,E,A],styles:["#nav[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;background:#282828;color:#fff;text-align:center;z-index:10000;height:3.5em;line-height:3.5em}#nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:0 1.25em;text-decoration:none;display:inline-block}#nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#484848}#nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#383838}"]})};var g=class o{constructor(t){this.platformId=t}title="SitePortifolio2025";ngOnInit(){m(this.platformId)&&setTimeout(()=>{document.querySelectorAll("#nav a").forEach(e=>{e.addEventListener("click",n=>{})})},100)}static \u0275fac=function(e){return new(e||o)(l(p))};static \u0275cmp=c({type:o,selectors:[["app-root"]],decls:3,vars:0,template:function(e,n){e&1&&x(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[H,d,f],encapsulation:2})};T(g,L).catch(o=>console.error(o));
