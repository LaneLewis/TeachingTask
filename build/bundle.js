<<<<<<< HEAD
var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s;function c(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}const u="undefined"!=typeof window;let l=u?()=>window.performance.now():()=>Date.now(),p=u?t=>requestAnimationFrame(t):t;const f=new Set;function h(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&p(h)}function d(t){let e;return 0===f.size&&p(h),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=x("style");return function(t,e){m(t.head||t,e)}(g(t),e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function k(){return $(" ")}function T(){return $("")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e){t.value=null==e?"":e}function C(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}const I=new Map;let O,B=0;function j(t,e,n,r,o,i,a,s=0){const c=16.666/r;let u="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*i(t);u+=100*t+`%{${a(r,1-r)}}\n`}const l=u+`100% {${a(n,1-n)}}\n}`,p=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${s}`,f=g(t),{stylesheet:h,rules:d}=I.get(f)||function(t,e){const n={stylesheet:v(e),rules:{}};return I.set(t,n),n}(f,t);d[p]||(d[p]=!0,h.insertRule(`@keyframes ${p} ${l}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${p} ${r}ms linear ${o}ms 1 both`,B+=1,p}function M(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),B-=o,B||p((()=>{B||(I.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),I.clear())})))}function P(t){O=t}const L=[],R=[],D=[],_=[],U=Promise.resolve();let F=!1;function q(t){D.push(t)}const G=new Set;let z,V=0;function H(){const t=O;do{for(;V<L.length;){const t=L[V];V++,P(t),Y(t.$$)}for(P(null),L.length=0,V=0;R.length;)R.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];G.has(e)||(G.add(e),e())}D.length=0}while(L.length);for(;_.length;)_.pop()();F=!1,G.clear(),P(t)}function Y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function X(){return z||(z=Promise.resolve(),z.then((()=>{z=null}))),z}function K(t,e,n){t.dispatchEvent(function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(`${e?"intro":"outro"}${n}`))}const W=new Set;let J;function Z(){J={r:0,c:[],p:J}}function Q(){J.r||o(J.c),J=J.p}function tt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),J.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const nt={duration:0};function rt(n,r,o){let a,s,c=r(n,o),u=!1,p=0;function f(){a&&M(n,a)}function h(){const{delay:r=0,duration:o=300,easing:i=e,tick:h=t,css:m}=c||nt;m&&(a=j(n,0,1,o,r,i,m,p++)),h(0,1);const g=l()+r,v=g+o;s&&s.abort(),u=!0,q((()=>K(n,!0,"start"))),s=d((t=>{if(u){if(t>=v)return h(1,0),K(n,!0,"end"),f(),u=!1;if(t>=g){const e=i((t-g)/o);h(e,1-e)}}return u}))}let m=!1;return{start(){m||(m=!0,M(n),i(c)?(c=c(),X().then(h)):h())},invalidate(){m=!1},end(){u&&(f(),u=!1)}}}function ot(n,r,a){let s,c=r(n,a),u=!0;const p=J;function f(){const{delay:r=0,duration:i=300,easing:a=e,tick:f=t,css:h}=c||nt;h&&(s=j(n,1,0,i,r,a,h));const m=l()+r,g=m+i;q((()=>K(n,!1,"start"))),d((t=>{if(u){if(t>=g)return f(0,1),K(n,!1,"end"),--p.r||o(p.c),!1;if(t>=m){const e=a((t-m)/i);f(1-e,e)}}return u}))}return p.r+=1,i(c)?X().then((()=>{c=c(),f()})):f(),{end(t){t&&c.tick&&c.tick(1,0),u&&(s&&M(n,s),u=!1)}}}const it="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function at(t){t&&t.c()}function st(t,e,r,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:l}=t.$$;s&&s.m(e,r),a||q((()=>{const e=c.map(n).filter(i);u?u.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(q)}function ct(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(L.push(t),F||(F=!0,U.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,i,a,s,c,u,l=[-1]){const p=O;P(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:r(),dirty:l,skip_bound:!1,root:n.target||p.$$.root};u&&u(f.root);let h=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&ut(e,t)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&tt(e.$$.fragment),st(e,n.target,n.anchor,n.customElement),H()}P(p)}class pt{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ft(t,e,n){const r=t.slice();return r[5]=e[n],r}function ht(t,e,n){const r=t.slice();return r[8]=e[n],r}function dt(t){let e,n;return{c(){e=x("div"),A(e,"class","greenDot svelte-1iyuq8d"),A(e,"style",n="left:calc("+2*Math.floor(t[8]/vt)+" * min(2vh,2vw));); top: calc("+2*(vt-t[8]%vt)+" * min(2vh,2vw) + min(7vh,7vw)); position:absolute;")},m(t,n){y(t,e,n)},p(t,r){2&r&&n!==(n="left:calc("+2*Math.floor(t[8]/vt)+" * min(2vh,2vw));); top: calc("+2*(vt-t[8]%vt)+" * min(2vh,2vw) + min(7vh,7vw)); position:absolute;")&&A(e,"style",n)},d(t){t&&w(e)}}}function mt(t){let e;return{c(){e=x("div"),A(e,"class","redDot svelte-1iyuq8d"),C(e,"left","calc("+2*Math.floor(t[5]/vt)+" * min(2vh,2vw))"),C(e,"top","calc("+2*(vt-t[5]%vt)+" * min(2vh,2vw) + min(7vh,7vw))"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){1&n&&C(e,"left","calc("+2*Math.floor(t[5]/vt)+" * min(2vh,2vw))"),1&n&&C(e,"top","calc("+2*(vt-t[5]%vt)+" * min(2vh,2vw) + min(7vh,7vw))")},d(t){t&&w(e)}}}function gt(e){let n,r,o,i,a,s,c,u,l,p,f,h,d,g=e[1],v=[];for(let t=0;t<g.length;t+=1)v[t]=dt(ht(e,g,t));let $=e[0],T=[];for(let t=0;t<$.length;t+=1)T[t]=mt(ft(e,$,t));return{c(){n=x("div"),r=x("div"),o=x("h"),o.textContent="Green Lights",i=k(),a=x("div"),s=k();for(let t=0;t<v.length;t+=1)v[t].c();c=k(),u=x("div"),l=x("div"),p=x("h"),p.textContent="Red Lights",f=k(),h=x("div"),d=k();for(let t=0;t<T.length;t+=1)T[t].c();C(o,"color","black"),C(o,"position","absolute"),C(o,"width","min(20vh,20vw)"),C(o,"left","max(-2vw,-2vh)"),C(o,"font-size","min(2vh,2vw)"),C(o,"text-align","center"),C(o,"top","min(2vh,2vw)"),A(a,"class","ballContainer svelte-1iyuq8d"),A(r,"class","dotContainer svelte-1iyuq8d"),C(r,"left","min(2vw,2vh)"),C(p,"color","black"),C(p,"position","absolute"),C(p,"width","min(20vh,20vw)"),C(p,"left","max(-2vw,-2vh)"),C(p,"font-size","min(2vh,2vw)"),C(p,"text-align","center"),C(p,"top","min(2vh,2vw)"),A(h,"class","ballContainer svelte-1iyuq8d"),A(l,"class","dotContainer svelte-1iyuq8d"),C(l,"left","min(21.5vw,21.5vh)")},m(t,e){y(t,n,e),m(n,r),m(r,o),m(r,i),m(r,a),m(r,s);for(let t=0;t<v.length;t+=1)v[t].m(r,null);y(t,c,e),y(t,u,e),m(u,l),m(l,p),m(l,f),m(l,h),m(l,d);for(let t=0;t<T.length;t+=1)T[t].m(l,null)},p(t,[e]){if(2&e){let n;for(g=t[1],n=0;n<g.length;n+=1){const o=ht(t,g,n);v[n]?v[n].p(o,e):(v[n]=dt(o),v[n].c(),v[n].m(r,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=g.length}if(1&e){let n;for($=t[0],n=0;n<$.length;n+=1){const r=ft(t,$,n);T[n]?T[n].p(r,e):(T[n]=mt(r),T[n].c(),T[n].m(l,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=$.length}},i:t,o:t,d(t){t&&w(n),b(v,t),t&&w(c),t&&w(u),b(T,t)}}}let vt=5;function yt(t,e,n){let r,o,i,{numberGreen:a=0}=e,{clearBoard:s=!1}=e;return r||(r=20-a),t.$$set=t=>{"numberGreen"in t&&n(2,a=t.numberGreen),"clearBoard"in t&&n(3,s=t.clearBoard)},t.$$.update=()=>{12&t.$$.dirty&&n(4,r=s?0:20-a),4&t.$$.dirty&&n(1,o=[...Array(a).keys()]),16&t.$$.dirty&&n(0,i=[...Array(r).keys()])},[i,o,a,s,r]}class wt extends pt{constructor(t){super(),lt(this,t,yt,gt,a,{numberGreen:2,clearBoard:3})}}function bt(t,e,n){const r=t.slice();return r[35]=e[n],r}function xt(t){let e,n,r,o,i,a,s,c,u,l,p;return{c(){e=x("h1"),n=$("Day "),r=$(t[4]),o=$(" of "),i=$(t[1]),a=k(),s=x("h1"),c=$("Month "),u=$(t[2]),l=$(" of "),p=$(t[3]),A(e,"class","points svelte-18y3xrq"),A(s,"class","points svelte-18y3xrq"),C(s,"left","calc(50vw - min(50vw, 50vh))")},m(t,f){y(t,e,f),m(e,n),m(e,r),m(e,o),m(e,i),y(t,a,f),y(t,s,f),m(s,c),m(s,u),m(s,l),m(s,p)},p(t,e){16&e[0]&&N(r,t[4]),2&e[0]&&N(i,t[1]),4&e[0]&&N(u,t[2]),8&e[0]&&N(p,t[3])},d(t){t&&w(e),t&&w(a),t&&w(s)}}}function $t(t){let e;return{c(){e=x("div"),A(e,"class","progressLeft svelte-18y3xrq"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[13]+")"),C(e,"left","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+")"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){8194&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[13]+")"),32770&n[0]&&C(e,"left","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+")")},d(t){t&&w(e)}}}function kt(t){let e,n,r,o=t[13],i=$t(t);return{c(){e=x("div"),n=k(),i.c(),r=T(),A(e,"class","progressGreen svelte-18y3xrq"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+")"),C(e,"position","absolute")},m(t,o){y(t,e,o),y(t,n,o),i.m(t,o),y(t,r,o)},p(t,n){32770&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+")"),8192&n[0]&&a(o,o=t[13])?(i.d(1),i=$t(t),i.c(),i.m(r.parentNode,r)):i.p(t,n)},d(t){t&&w(e),t&&w(n),t&&w(r),i.d(t)}}}function Tt(t){let e;return{c(){e=x("div"),A(e,"class","progressRight svelte-18y3xrq"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[14]+")"),C(e,"left","calc(min(60vh,60vw) - ((min(60vh,60vw) / "+20*t[1]+") * "+t[16]+") + 1px)"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){16386&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[14]+")"),65538&n[0]&&C(e,"left","calc(min(60vh,60vw) - ((min(60vh,60vw) / "+20*t[1]+") * "+t[16]+") + 1px)")},d(t){t&&w(e)}}}function Et(t){let e,n,r,o=t[14],i=Tt(t);return{c(){e=x("div"),n=k(),i.c(),r=T(),A(e,"class","progressRed svelte-18y3xrq"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[16]+")"),C(e,"left","min(60vh,60vw)"),C(e,"position","absolute")},m(t,o){y(t,e,o),y(t,n,o),i.m(t,o),y(t,r,o)},p(t,n){65538&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[16]+")"),16384&n[0]&&a(o,o=t[14])?(i.d(1),i=Tt(t),i.c(),i.m(r.parentNode,r)):i.p(t,n)},d(t){t&&w(e),t&&w(n),t&&w(r),i.d(t)}}}function At(t){let e,n,r,o;const i=[St,Nt],a=[];return e=function(t,e){return 0==t[35]?0:1}(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function Nt(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g;const v=[It,Ct],b=[];function $(t,e){return t[5]?0:1}a=$(t),s=b[a]=v[a](t);let T=t[11]&&Ot();return{c(){e=x("div"),n=x("h1"),n.textContent="New Teaching Move",r=k(),o=x("div"),i=x("div"),s.c(),p=k(),f=x("div"),h=k(),T&&T.c(),d=k(),A(n,"class","teachingMoves svelte-18y3xrq"),C(i,"position","absolute"),A(o,"class","greyBox svelte-18y3xrq"),A(o,"id",c=`box2: ${t[0]}`),A(f,"class","blueLight svelte-18y3xrq"),C(f,"opacity",t[8]?"1":"0"),C(e,"position","absolute"),C(e,"left","calc(50vw + min(5vw, 5vh))"),C(e,"top","min(30vh,30vw)")},m(t,s){y(t,e,s),m(e,n),m(e,r),m(e,o),m(o,i),b[a].m(i,null),m(e,p),m(e,f),m(e,h),T&&T.m(e,null),m(e,d),g=!0},p(n,r){let u=a;a=$(t=n),a===u?b[a].p(t,r):(Z(),et(b[u],1,1,(()=>{b[u]=null})),Q(),s=b[a],s?s.p(t,r):(s=b[a]=v[a](t),s.c()),tt(s,1),s.m(i,null)),(!g||1&r[0]&&c!==(c=`box2: ${t[0]}`))&&A(o,"id",c),(!g||256&r[0])&&C(f,"opacity",t[8]?"1":"0"),t[11]?T||(T=Ot(),T.c(),T.m(e,d)):T&&(T.d(1),T=null)},i(e){g||(tt(s),q((()=>{l&&l.end(1),u=rt(o,t[18],{replaceExploit:t[10]}),u.start()})),g=!0)},o(e){et(s),u&&u.invalidate(),l=ot(o,t[21],{replaceExploit:t[10]}),g=!1},d(t){t&&w(e),b[a].d(),t&&l&&l.end(),T&&T.d()}}}function St(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g;const v=[jt,Bt],b=[];function $(t,e){return t[12]?1:0}c=$(t),u=b[c]=v[c](t);let T=t[11]&&Mt();return{c(){e=x("div"),n=x("h1"),n.textContent="Current Teaching Move",r=k(),o=x("div"),i=k(),a=x("div"),s=x("div"),u.c(),h=k(),T&&T.c(),d=k(),A(n,"class","teachingMoves svelte-18y3xrq"),A(o,"class","blueLight svelte-18y3xrq"),C(o,"opacity",t[9]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),A(a,"class","greyBox svelte-18y3xrq"),A(a,"id",l=`box1: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw - min(45vw, 45vh))"),C(e,"top","min(30vh,30vw)")},m(t,u){y(t,e,u),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),b[c].m(s,null),m(e,h),T&&T.m(e,null),m(e,d),g=!0},p(n,r){t=n,(!g||512&r[0])&&C(o,"opacity",t[9]?"1":"0");let i=c;c=$(t),c===i?b[c].p(t,r):(Z(),et(b[i],1,1,(()=>{b[i]=null})),Q(),u=b[c],u?u.p(t,r):(u=b[c]=v[c](t),u.c()),tt(u,1),u.m(s,null)),(!g||1&r[0]&&l!==(l=`box1: ${t[0]}`))&&A(a,"id",l),t[11]?T||(T=Mt(),T.c(),T.m(e,d)):T&&(T.d(1),T=null)},i(e){g||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[19],{replaceExploit:t[10]}),p.start()})),g=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[20],{replaceExploit:t[10]}),g=!1},d(t){t&&w(e),b[c].d(),t&&f&&f.end(),T&&T.d()}}}function Ct(e){let n;return{c(){n=x("div"),n.textContent="?",C(n,"width","min(40vh,40vw)"),C(n,"height","min(40vh,40vw)"),C(n,"text-align","center"),C(n,"font-size","min(20vh,20vw)"),C(n,"top","min(5vh,5vw)"),C(n,"position","absolute")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function It(t){let e,n;return e=new wt({props:{numberGreen:t[7]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};128&n[0]&&(r.numberGreen=t[7]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Ot(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="arrowKey svelte-18y3xrq">Right Arrow</h2>',A(e,"class","arrowCover svelte-18y3xrq")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Bt(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function jt(t){let e,n;return e=new wt({props:{numberGreen:t[6]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};64&n[0]&&(r.numberGreen=t[6]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Mt(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="arrowKey svelte-18y3xrq">Left Arrow</h2>',A(e,"class","arrowCover svelte-18y3xrq")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Pt(t){let e,n,r=t[0]<t[1]+1&&At(t);return{c(){r&&r.c(),e=T()},m(t,o){r&&r.m(t,o),y(t,e,o),n=!0},p(t,n){t[0]<t[1]+1?r?(r.p(t,n),3&n[0]&&tt(r,1)):(r=At(t),r.c(),tt(r,1),r.m(e.parentNode,e)):r&&(Z(),et(r,1,1,(()=>{r=null})),Q())},i(t){n||(tt(r),n=!0)},o(t){et(r),n=!1},d(t){r&&r.d(t),t&&w(e)}}}function Lt(t){let e,n,r=t[17],o=[];for(let e=0;e<r.length;e+=1)o[e]=Pt(bt(t,r,e));const i=t=>et(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=T()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);y(t,e,r),n=!0},p(t,n){if(139235&n[0]){let a;for(r=t[17],a=0;a<r.length;a+=1){const i=bt(t,r,a);o[a]?(o[a].p(i,n),tt(o[a],1)):(o[a]=Pt(i),o[a].c(),tt(o[a],1),o[a].m(e.parentNode,e))}for(Z(),a=r.length;a<o.length;a+=1)i(a);Q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){b(o,t),t&&w(e)}}}function Rt(e){let n,r,o,i,s,c,u,l,p,f,h,d,g=e[4],v=e[15],b=e[16],$=e[0],N=xt(e),S=kt(e),I=Et(e),O=Lt(e);return{c(){N.c(),n=k(),r=x("h1"),r.textContent="Total Student Understanding",o=k(),i=x("div"),s=x("div"),c=k(),S.c(),u=k(),I.c(),l=k(),O.c(),p=T(),A(r,"class","classUnderstanding svelte-18y3xrq"),A(s,"class","progressBar svelte-18y3xrq"),C(s,"left","max(-.5vw,-.5vh)"),C(i,"left","calc(50vw - min(30vh,30vw))"),C(i,"top","min(10vh,10vw)"),C(i,"position","absolute")},m(t,a){N.m(t,a),y(t,n,a),y(t,r,a),y(t,o,a),y(t,i,a),m(i,s),m(i,c),S.m(i,null),m(i,u),I.m(i,null),y(t,l,a),O.m(t,a),y(t,p,a),f=!0,h||(d=E(window,"keydown",e[22]),h=!0)},p(e,r){16&r[0]&&a(g,g=e[4])?(N.d(1),N=xt(e),N.c(),N.m(n.parentNode,n)):N.p(e,r),32768&r[0]&&a(v,v=e[15])?(S.d(1),S=kt(e),S.c(),S.m(i,u)):S.p(e,r),65536&r[0]&&a(b,b=e[16])?(I.d(1),I=Et(e),I.c(),I.m(i,null)):I.p(e,r),1&r[0]&&a($,$=e[0])?(Z(),et(O,1,1,t),Q(),O=Lt(e),O.c(),tt(O),O.m(p.parentNode,p)):O.p(e,r)},i(t){f||(tt(O),f=!0)},o(t){et(O),f=!1},d(t){N.d(t),t&&w(n),t&&w(r),t&&w(o),t&&w(i),S.d(t),I.d(t),t&&w(l),t&&w(p),O.d(t),h=!1,d()}}}async function Dt(t){return await new Promise((e=>setTimeout(e,t)))}function _t(t,e){return e*function(){for(var t=0,e=0;0===t;)t=Math.random();for(;0===e;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}()+t}function Ut(){return Math.floor(20*Math.random())}function Ft(t,e,n){let{counter:r=0}=e;let{gameString:o=""}=e,{numTrials:i=30}=e,a=1,s=[...Array(2).keys()],c=Date.now(),u=!1,l=Ut(),p=Ut(),f=!1,h=!1,d={truth:!1},m=!0,g=!1,v=0,y=0,w=0,b=0,x=!1,{toNext:$}=e,{server:k}=e,{id:T}=e,{bothInvisible:E=!0}=e,{block:A}=e,{totalBlocks:N}=e;return console.log(o),t.$$set=t=>{"counter"in t&&n(0,r=t.counter),"gameString"in t&&n(23,o=t.gameString),"numTrials"in t&&n(1,i=t.numTrials),"toNext"in t&&n(26,$=t.toNext),"server"in t&&n(27,k=t.server),"id"in t&&n(28,T=t.id),"bothInvisible"in t&&n(24,E=t.bothInvisible),"block"in t&&n(2,A=t.block),"totalBlocks"in t&&n(3,N=t.totalBlocks)},[r,i,A,N,a,u,l,p,f,h,d,m,g,v,y,w,b,s,function(t,{delay:e=0,duration:n=500}){return E?{delay:0,duration:0}:(console.log("migrateLeftExplore:true"),{delay:e,duration:n,css:(t,e)=>`transform: translateX(calc(${100*e}vw)) `})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return E?{delay:0,duration:0}:(console.log(`migrateLeftExploit:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(min(${50*e}vw,${50*e}vh)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return E?{delay:0,duration:0}:(console.log(`migrateOut:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(calc(${-100*e}vw)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return E?{delay:0,duration:0}:(console.log(`invisibleOrDown:${e}`),e.truth?{css:()=>"visibility: hidden;display: none;"}:{delay:n,duration:r,css:(t,e)=>`transform: translateY(calc(${100*e}vh)) `})},async function(t){if(0!=m&&!x){if(x=!0,a>=i&&n(11,m=!1),"ArrowLeft"===t.key||"ArrowRight"===t.key){let e={trial:a.toString(),previousExploit:l,keyPressTime:Date.now(),trialStartTime:c};if(n(24,E=!1),e.Block=A,"ArrowLeft"==t.key){n(15,w+=v),n(16,b+=y),n(13,v=0),n(14,y=0),n(11,m=!1);let t=function(){let t=Math.floor(_t(l,3));return t=Math.min(t,20),t=Math.max(t,0),t}();e.newExploit=t,e.choice="exploit",e.exploreSeen=void 0,n(9,h=!0),await Dt(500),n(9,h=!1),n(12,g=!0),e.exploitBoardClear=Date.now(),await Dt(1e3),n(6,l=t),n(13,v=t),n(14,y=20-t),n(12,g=!1),n(11,m=!0),e.newExploitBoard=Date.now(),c=Date.now(),n(4,a+=1),console.log("done")}if("ArrowRight"==t.key){n(5,u=!0);let t=Ut();e.choice="explore",e.exploreSeen=t,n(15,w+=v),n(16,b+=y),n(13,v=0),n(14,y=0),t>l?(e.newExploit=t,console.log("greater than"),n(11,m=!1),n(7,p=t),n(8,f=!0),e.newExploreVisible=Date.now(),await Dt(500),n(8,f=!1),e.newExploreDeslected=Date.now(),await Dt(500),n(6,l=t),n(5,u=!1),n(10,d.truth=!0,d),n(0,r+=1),e.newExploreMove=Date.now(),await Dt(500),n(13,v=t),n(14,y=20-t),n(11,m=!0),e.exploreFinishedMoving=Date.now(),c=Date.now(),n(4,a+=1)):(console.log("less than"),n(11,m=!1),e.newExploit=null,n(7,p=t),n(8,f=!0),e.newExploreVisible=Date.now(),await Dt(500),n(8,f=!1),e.newExploreDeselected=Date.now(),await Dt(500),e.newExploreMove=Date.now(),n(5,u=!1),n(10,d.truth=!1,d),n(0,r+=1),await Dt(500),n(13,v=t),n(14,y=20-t),n(11,m=!0),e.exploreFinishedMoving=Date.now(),c=Date.now(),n(4,a+=1))}n(24,E=!1),function(t){let e=["trial","previousExploit","keyPressTime","trialStartTime","choice","newExploit","exploreSeen","exploitBoardClear","newExploitBoard","newExploreVisible","newExploreDeselected","newExploreMove","exploreFinishedMoving","Block"],r="";for(const n of e)r+=`${t[n]},`;n(23,o+=r.substring(0,r.length-1)+"\n"),a%5==0&&async function(){console.log("Successfully sent to server: "+String(await k.writeFile("teacher",`TeacherCSV_${T}.csv`,o)))}()}(e),a===i+1&&(n(11,m=!1),n(24,E=!0),await Dt(300),console.log(w),console.log(v),console.log(o),$(o,w+v))}x=!1}},o,E,2,$,k,T]}class qt extends pt{constructor(t){super(),lt(this,t,Ft,Rt,a,{counter:0,viewNumber:25,gameString:23,numTrials:1,toNext:26,server:27,id:28,bothInvisible:24,block:2,totalBlocks:3},null,[-1,-1])}get viewNumber(){return this.$$.ctx[25]}}function Gt(t,e,n){const r=t.slice();return r[37]=e[n],r}function zt(t){let e,n,r,o,i,a,s,c,u,l,p;return{c(){e=x("h1"),n=$("Day "),r=$(t[4]),o=$(" of "),i=$(t[1]),a=k(),s=x("h1"),c=$("Month "),u=$(t[2]),l=$(" of "),p=$(t[3]),A(e,"class","points svelte-1gy9rff"),A(s,"class","points svelte-1gy9rff"),C(s,"left","calc(50vw - min(50vw, 50vh))")},m(t,f){y(t,e,f),m(e,n),m(e,r),m(e,o),m(e,i),y(t,a,f),y(t,s,f),m(s,c),m(s,u),m(s,l),m(s,p)},p(t,e){16&e[0]&&N(r,t[4]),2&e[0]&&N(i,t[1]),4&e[0]&&N(u,t[2]),8&e[0]&&N(p,t[3])},d(t){t&&w(e),t&&w(a),t&&w(s)}}}function Vt(t){let e;return{c(){e=x("div"),A(e,"class","progressLeft svelte-1gy9rff"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[12]+")"),C(e,"left","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[14]+" - 1px)"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){4098&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[12]+")"),16386&n[0]&&C(e,"left","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[14]+" - 1px)")},d(t){t&&w(e)}}}function Ht(t){let e,n,r,o=t[12],i=Vt(t);return{c(){e=x("div"),n=k(),i.c(),r=T(),A(e,"class","progressGreen svelte-1gy9rff"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[14]+")"),C(e,"position","absolute")},m(t,o){y(t,e,o),y(t,n,o),i.m(t,o),y(t,r,o)},p(t,n){16386&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[14]+")"),4096&n[0]&&a(o,o=t[12])?(i.d(1),i=Vt(t),i.c(),i.m(r.parentNode,r)):i.p(t,n)},d(t){t&&w(e),t&&w(n),t&&w(r),i.d(t)}}}function Yt(t){let e;return{c(){e=x("div"),A(e,"class","progressRight svelte-1gy9rff"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[13]+")"),C(e,"left","calc(min(60vh,60vw) - ((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+") + 1px)"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){8194&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[13]+")"),32770&n[0]&&C(e,"left","calc(min(60vh,60vw) - ((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+") + 1px)")},d(t){t&&w(e)}}}function Xt(t){let e,n,r,o=t[13],i=Yt(t);return{c(){e=x("div"),n=k(),i.c(),r=T(),A(e,"class","progressRed svelte-1gy9rff"),C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+")"),C(e,"left","min(60vh,60vw)"),C(e,"position","absolute")},m(t,o){y(t,e,o),y(t,n,o),i.m(t,o),y(t,r,o)},p(t,n){32770&n[0]&&C(e,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[15]+")"),8192&n[0]&&a(o,o=t[13])?(i.d(1),i=Yt(t),i.c(),i.m(r.parentNode,r)):i.p(t,n)},d(t){t&&w(e),t&&w(n),t&&w(r),i.d(t)}}}function Kt(t){let e,n,r,o;const i=[Jt,Wt],a=[];return e=function(t,e){return 0==t[37]?0:1}(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function Wt(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g,v;const b=[Qt,Zt],$=[];function T(t,e){return t[5]?0:1}return c=T(t),u=$[c]=b[c](t),{c(){e=x("div"),n=x("div"),r=k(),o=x("h1"),o.textContent="New Teaching Move",i=k(),a=x("button"),s=x("div"),u.c(),h=k(),A(n,"class","blueLight svelte-1gy9rff"),C(n,"opacity",t[8]?"1":"0"),A(o,"class","teachingMoves svelte-1gy9rff"),C(s,"position","absolute"),C(s,"top","0px"),C(s,"left","-.1vw"),A(a,"class","greyBox svelte-1gy9rff"),A(a,"id",l=`box2: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw + min(5vw, 5vh))"),C(e,"top","min(30vh,30vw)")},m(u,l){y(u,e,l),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),$[c].m(s,null),m(e,h),d=!0,g||(v=E(a,"click",t[29]),g=!0)},p(e,r){t=e,(!d||256&r[0])&&C(n,"opacity",t[8]?"1":"0");let o=c;c=T(t),c===o?$[c].p(t,r):(Z(),et($[o],1,1,(()=>{$[o]=null})),Q(),u=$[c],u?u.p(t,r):(u=$[c]=b[c](t),u.c()),tt(u,1),u.m(s,null)),(!d||1&r[0]&&l!==(l=`box2: ${t[0]}`))&&A(a,"id",l)},i(e){d||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[17],{replaceExploit:t[10]}),p.start()})),d=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[20],{replaceExploit:t[10]}),d=!1},d(t){t&&w(e),$[c].d(),t&&f&&f.end(),g=!1,v()}}}function Jt(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g,v;const b=[ee,te],$=[];function T(t,e){return t[11]?1:0}return c=T(t),u=$[c]=b[c](t),{c(){e=x("div"),n=x("h1"),n.textContent="Current Teaching Move",r=k(),o=x("div"),i=k(),a=x("button"),s=x("div"),u.c(),h=k(),A(n,"class","teachingMoves svelte-1gy9rff"),A(o,"class","blueLight svelte-1gy9rff"),C(o,"opacity",t[9]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),C(s,"left","-.1vw"),A(a,"class","greyBox svelte-1gy9rff"),A(a,"id",l=`box1: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw - min(45vw, 45vh))"),C(e,"top","min(30vh,30vw)")},m(u,l){y(u,e,l),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),$[c].m(s,null),m(e,h),d=!0,g||(v=E(a,"click",t[28]),g=!0)},p(e,n){t=e,(!d||512&n[0])&&C(o,"opacity",t[9]?"1":"0");let r=c;c=T(t),c===r?$[c].p(t,n):(Z(),et($[r],1,1,(()=>{$[r]=null})),Q(),u=$[c],u?u.p(t,n):(u=$[c]=b[c](t),u.c()),tt(u,1),u.m(s,null)),(!d||1&n[0]&&l!==(l=`box1: ${t[0]}`))&&A(a,"id",l)},i(e){d||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[18],{replaceExploit:t[10]}),p.start()})),d=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[19],{replaceExploit:t[10]}),d=!1},d(t){t&&w(e),$[c].d(),t&&f&&f.end(),g=!1,v()}}}function Zt(e){let n;return{c(){n=x("div"),n.textContent="?",C(n,"width","min(40vh,40vw)"),C(n,"height","min(40vh,40vw)"),C(n,"text-align","center"),C(n,"font-size","min(20vh,20vw)"),C(n,"top","min(5vh,5vw)"),C(n,"position","absolute")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function Qt(t){let e,n;return e=new wt({props:{numberGreen:t[7]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};128&n[0]&&(r.numberGreen=t[7]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function te(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function ee(t){let e,n;return e=new wt({props:{numberGreen:t[6]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};64&n[0]&&(r.numberGreen=t[6]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function ne(t){let e,n,r=t[0]<t[1]+1&&Kt(t);return{c(){r&&r.c(),e=T()},m(t,o){r&&r.m(t,o),y(t,e,o),n=!0},p(t,n){t[0]<t[1]+1?r?(r.p(t,n),3&n[0]&&tt(r,1)):(r=Kt(t),r.c(),tt(r,1),r.m(e.parentNode,e)):r&&(Z(),et(r,1,1,(()=>{r=null})),Q())},i(t){n||(tt(r),n=!0)},o(t){et(r),n=!1},d(t){r&&r.d(t),t&&w(e)}}}function re(t){let e,n,r=t[16],o=[];for(let e=0;e<r.length;e+=1)o[e]=ne(Gt(t,r,e));const i=t=>et(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=T()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);y(t,e,r),n=!0},p(t,n){if(2166755&n[0]){let a;for(r=t[16],a=0;a<r.length;a+=1){const i=Gt(t,r,a);o[a]?(o[a].p(i,n),tt(o[a],1)):(o[a]=ne(i),o[a].c(),tt(o[a],1),o[a].m(e.parentNode,e))}for(Z(),a=r.length;a<o.length;a+=1)i(a);Q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){b(o,t),t&&w(e)}}}function oe(e){let n,r,o,i,s,c,u,l,p,f,h=e[4],d=e[14],g=e[15],v=e[0],b=zt(e),$=Ht(e),E=Xt(e),N=re(e);return{c(){b.c(),n=k(),r=x("h1"),r.textContent="Total Student Understanding",o=k(),i=x("div"),s=x("div"),c=k(),$.c(),u=k(),E.c(),l=k(),N.c(),p=T(),A(r,"class","classUnderstanding svelte-1gy9rff"),A(s,"class","progressBar svelte-1gy9rff"),C(s,"left","max(-.5vw,-.5vh)"),C(i,"left","calc(50vw - min(30vh,30vw))"),C(i,"top","min(10vh,10vw)"),C(i,"position","absolute")},m(t,e){b.m(t,e),y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),m(i,s),m(i,c),$.m(i,null),m(i,u),E.m(i,null),y(t,l,e),N.m(t,e),y(t,p,e),f=!0},p(e,r){16&r[0]&&a(h,h=e[4])?(b.d(1),b=zt(e),b.c(),b.m(n.parentNode,n)):b.p(e,r),16384&r[0]&&a(d,d=e[14])?($.d(1),$=Ht(e),$.c(),$.m(i,u)):$.p(e,r),32768&r[0]&&a(g,g=e[15])?(E.d(1),E=Xt(e),E.c(),E.m(i,null)):E.p(e,r),1&r[0]&&a(v,v=e[0])?(Z(),et(N,1,1,t),Q(),N=re(e),N.c(),tt(N),N.m(p.parentNode,p)):N.p(e,r)},i(t){f||(tt(N),f=!0)},o(t){et(N),f=!1},d(t){b.d(t),t&&w(n),t&&w(r),t&&w(o),t&&w(i),$.d(t),E.d(t),t&&w(l),t&&w(p),N.d(t)}}}async function ie(t){return await new Promise((e=>setTimeout(e,t)))}function ae(t,e){return e*function(){for(var t=0,e=0;0===t;)t=Math.random();for(;0===e;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}()+t}function se(){return Math.floor(20*Math.random())}function ce(t,e,n){let{counter:r=0}=e;let{gameString:o=""}=e,{numTrials:i=30}=e,a=1,s=[...Array(2).keys()],c=Date.now(),u=!1,l=se(),p=se(),f=!1,h=!1,d={truth:!1},m=!0,g=!1,v=0,y=0,w=0,b=0,x=!1,{toNext:$}=e,{server:k}=e,{id:T}=e,{bothInvisible:E=!0}=e,{block:A}=e,{totalBlocks:N}=e;async function S(t){if(0==m||x)return;x=!0,a>=i&&(m=!1);let e={trial:a.toString(),previousExploit:l,keyPressTime:Date.now(),trialStartTime:c};if(n(23,E=!1),e.Block=A,"left"==t){n(14,w+=v),n(15,b+=y),n(12,v=0),n(13,y=0),m=!1;let t=function(){let t=Math.floor(ae(l,3));return t=Math.min(t,20),t=Math.max(t,0),t}();e.newExploit=t,e.choice="exploit",e.exploreSeen=void 0,n(9,h=!0),await ie(500),n(9,h=!1),n(11,g=!0),e.exploitBoardClear=Date.now(),await ie(1e3),n(6,l=t),n(12,v=t),n(13,y=20-t),n(11,g=!1),m=!0,e.newExploitBoard=Date.now(),c=Date.now(),n(4,a+=1),console.log("done")}if("right"==t){n(5,u=!0);let t=se();e.choice="explore",e.exploreSeen=t,n(14,w+=v),n(15,b+=y),n(12,v=0),n(13,y=0),t>l?(e.newExploit=t,console.log("greater than"),m=!1,n(7,p=t),n(8,f=!0),e.newExploreVisible=Date.now(),await ie(500),n(8,f=!1),e.newExploreDeslected=Date.now(),await ie(500),n(6,l=t),n(5,u=!1),n(10,d.truth=!0,d),n(0,r+=1),e.newExploreMove=Date.now(),await ie(500),n(12,v=t),n(13,y=20-t),m=!0,e.exploreFinishedMoving=Date.now(),c=Date.now(),n(4,a+=1)):(console.log("less than"),m=!1,e.newExploit=null,n(7,p=t),n(8,f=!0),e.newExploreVisible=Date.now(),await ie(500),n(8,f=!1),e.newExploreDeselected=Date.now(),await ie(500),e.newExploreMove=Date.now(),n(5,u=!1),n(10,d.truth=!1,d),n(0,r+=1),await ie(500),n(12,v=t),n(13,y=20-t),m=!0,e.exploreFinishedMoving=Date.now(),c=Date.now(),n(4,a+=1))}n(23,E=!1),function(t){let e=["trial","previousExploit","keyPressTime","trialStartTime","choice","newExploit","exploreSeen","exploitBoardClear","newExploitBoard","newExploreVisible","newExploreDeselected","newExploreMove","exploreFinishedMoving","Block"],r="";for(const n of e)r+=`${t[n]},`;n(22,o+=r.substring(0,r.length-1)+"\n"),a%5==0&&async function(){console.log("Successfully sent to server: "+String(await k.writeFile("teacher",`TeacherCSV_${T}.csv`,o)))}()}(e),a===i+1&&(m=!1,n(23,E=!0),await ie(300),console.log(w),console.log(v),$(o,w+v)),x=!1}console.log(o);return t.$$set=t=>{"counter"in t&&n(0,r=t.counter),"gameString"in t&&n(22,o=t.gameString),"numTrials"in t&&n(1,i=t.numTrials),"toNext"in t&&n(25,$=t.toNext),"server"in t&&n(26,k=t.server),"id"in t&&n(27,T=t.id),"bothInvisible"in t&&n(23,E=t.bothInvisible),"block"in t&&n(2,A=t.block),"totalBlocks"in t&&n(3,N=t.totalBlocks)},[r,i,A,N,a,u,l,p,f,h,d,g,v,y,w,b,s,function(t,{delay:e=0,duration:n=500}){return E?{delay:0,duration:0}:(console.log("migrateLeftExplore:true"),{delay:e,duration:n,css:(t,e)=>`transform: translateX(calc(${100*e}vw)) `})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return E?{delay:0,duration:0}:(console.log(`migrateLeftExploit:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(min(${50*e}vw,${50*e}vh)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return E?{delay:0,duration:0}:(console.log(`migrateOut:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(calc(${-100*e}vw)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return E?{delay:0,duration:0}:(console.log(`invisibleOrDown:${e}`),e.truth?{css:()=>"visibility: hidden;display: none;"}:{delay:n,duration:r,css:(t,e)=>`transform: translateY(calc(${100*e}vh)) `})},S,o,E,2,$,k,T,()=>{S("left")},()=>{S("right")}]}class ue extends pt{constructor(t){super(),lt(this,t,ce,oe,a,{counter:0,viewNumber:24,gameString:22,numTrials:1,toNext:25,server:26,id:27,bothInvisible:23,block:2,totalBlocks:3},null,[-1,-1])}get viewNumber(){return this.$$.ctx[24]}}function le(t){let e;function n(t,e){return t[1]&&t[2]?he:t[1]?fe:pe}let r=n(t),o=r(t);return{c(){o.c(),e=T()},m(t,n){o.m(t,n),y(t,e,n)},p(t,i){r===(r=n(t))&&o?o.p(t,i):(o.d(1),o=r(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&w(e)}}}function pe(t){let e,n,r;return{c(){e=x("button"),e.textContent="Back",A(e,"class","buttonCover svelte-1n6gxt2"),C(e,"left","calc(50vw - min(10vh,10vw))")},m(o,a){y(o,e,a),n||(r=E(e,"click",(function(){i(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,r()}}}function fe(t){let e,n,r;return{c(){e=x("button"),e.textContent="Next",A(e,"class","buttonCover svelte-1n6gxt2"),C(e,"left","calc(50vw - min(10vh,10vw))")},m(o,a){y(o,e,a),n||(r=E(e,"click",(function(){i(t[1](t[5]))&&t[1](t[5]).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,r()}}}function he(t){let e,n,r,a,s,c,u,l=t[3]&&de(t);return{c(){e=x("button"),e.textContent="Back",n=k(),r=x("button"),r.textContent="Next",a=k(),l&&l.c(),s=T(),A(e,"class","buttonCover svelte-1n6gxt2"),C(e,"left","calc(50vw - min(36vh,36vw))"),A(r,"class","buttonCover svelte-1n6gxt2"),C(r,"left","calc(50vw + min(16vh,16vw))")},m(o,p){y(o,e,p),y(o,n,p),y(o,r,p),y(o,a,p),l&&l.m(o,p),y(o,s,p),c||(u=[E(e,"click",(function(){i(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)})),E(r,"click",(function(){i(t[1](t[5]))&&t[1](t[5]).apply(this,arguments)}))],c=!0)},p(e,n){(t=e)[3]?l?l.p(t,n):(l=de(t),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(t){t&&w(e),t&&w(n),t&&w(r),t&&w(a),l&&l.d(t),t&&w(s),c=!1,o(u)}}}function de(t){let e,n,r;return{c(){e=x("button"),e.textContent="Replay Animation",A(e,"class","buttonCover svelte-1n6gxt2"),C(e,"left","calc(50vw - min(10vh,10vw))")},m(o,a){y(o,e,a),n||(r=E(e,"click",(function(){i(t[3]())&&t[3]().apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,r()}}}function me(e){let n,r=!e[0].truth&&e[6]&&le(e);return{c(){r&&r.c(),n=T()},m(t,e){r&&r.m(t,e),y(t,n,e)},p(t,[e]){!t[0].truth&&t[6]?r?r.p(t,e):(r=le(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&w(n)}}}function ge(t,e,n){let{breakTruth:r={truth:!1}}=e,{nextInstruction:o=null}=e,{previousInstruction:i=null}=e,{replayAnimation:a=null}=e,{backSkip:s=1}=e,{forwardSkip:c=1}=e,{display:u=!0}=e;return t.$$set=t=>{"breakTruth"in t&&n(0,r=t.breakTruth),"nextInstruction"in t&&n(1,o=t.nextInstruction),"previousInstruction"in t&&n(2,i=t.previousInstruction),"replayAnimation"in t&&n(3,a=t.replayAnimation),"backSkip"in t&&n(4,s=t.backSkip),"forwardSkip"in t&&n(5,c=t.forwardSkip),"display"in t&&n(6,u=t.display)},[r,o,i,a,s,c,u]}class ve extends pt{constructor(t){super(),lt(this,t,ge,me,a,{breakTruth:0,nextInstruction:1,previousInstruction:2,replayAnimation:3,backSkip:4,forwardSkip:5,display:6})}}function ye(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function we(t){let e,n;return e=new wt({props:{numberGreen:t[1]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.numberGreen=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function be(t){let e,n,r,o,i,a,s,c,u,l,p,f,h;const d=[we,ye],g=[];function v(t,e){return t[2]?1:0}return p=v(t),f=g[p]=d[p](t),{c(){e=x("h1"),n=$(t[0]),r=k(),o=x("div"),i=x("h1"),i.textContent="Current Teaching Move",a=k(),s=x("div"),c=k(),u=x("div"),l=x("div"),f.c(),A(e,"class","descriptionText svelte-4xysbd"),A(i,"class","teachingMoves svelte-4xysbd"),A(s,"class","blueLight svelte-4xysbd"),C(s,"opacity",t[3]?"1":"0"),C(l,"top","0px"),C(l,"position","absolute"),A(u,"class","greyBox svelte-4xysbd"),C(o,"position","absolute"),C(o,"left","calc(50vw - min(20vw, 20vh))"),C(o,"top","min(30vh,30vw)")},m(t,f){y(t,e,f),m(e,n),y(t,r,f),y(t,o,f),m(o,i),m(o,a),m(o,s),m(o,c),m(o,u),m(u,l),g[p].m(l,null),h=!0},p(t,[e]){(!h||1&e)&&N(n,t[0]),(!h||8&e)&&C(s,"opacity",t[3]?"1":"0");let r=p;p=v(t),p===r?g[p].p(t,e):(Z(),et(g[r],1,1,(()=>{g[r]=null})),Q(),f=g[p],f?f.p(t,e):(f=g[p]=d[p](t),f.c()),tt(f,1),f.m(l,null))},i(t){h||(tt(f),h=!0)},o(t){et(f),h=!1},d(t){t&&w(e),t&&w(r),t&&w(o),g[p].d()}}}function xe(t,e,n){let{passedText:r=""}=e,{exploitMu:o=10}=e,{clearBoard:i=!1}=e,{exploitSelect:a=!0}=e;return t.$$set=t=>{"passedText"in t&&n(0,r=t.passedText),"exploitMu"in t&&n(1,o=t.exploitMu),"clearBoard"in t&&n(2,i=t.clearBoard),"exploitSelect"in t&&n(3,a=t.exploitSelect)},[r,o,i,a]}class $e extends pt{constructor(t){super(),lt(this,t,xe,be,a,{passedText:0,exploitMu:1,clearBoard:2,exploitSelect:3})}}function ke(t,e,n){const r=t.slice();return r[30]=e[n],r}function Te(t){let e,n,r,o,i=Math.round(t[9]/20*100)+"";return{c(){e=x("h1"),n=$("Current Classroom Understanding: "),r=$(i),o=$("%"),C(e,"position","absolute"),C(e,"top","0vh"),C(e,"left","calc(50vw + -400px)"),C(e,"width","800px"),C(e,"height","50px"),C(e,"text-align","center"),C(e,"border","solid black 2px")},m(t,i){y(t,e,i),m(e,n),m(e,r),m(e,o)},p(t,e){512&e[0]&&i!==(i=Math.round(t[9]/20*100)+"")&&N(r,i)},d(t){t&&w(e)}}}function Ee(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g;const v=[Se,Ne],b=[];function $(t,e){return t[1]?0:1}a=$(t),s=b[a]=v[a](t);let T=t[10]&&Ce();return{c(){e=x("div"),n=x("h1"),n.textContent="New Teaching Move",r=k(),o=x("div"),i=x("div"),s.c(),p=k(),f=x("div"),h=k(),T&&T.c(),d=k(),A(n,"class","teachingMoves svelte-kkymw2"),C(i,"top","0px"),C(i,"position","absolute"),A(o,"class","greyBox svelte-kkymw2"),A(o,"id",c=`box2: ${t[0]}`),A(f,"class","blueLight svelte-kkymw2"),C(f,"opacity",t[3]?"1":"0"),C(e,"position","absolute"),C(e,"left","calc(50vw + min(5vw, 5vh))"),C(e,"top","min(30vh,30vw)")},m(t,s){y(t,e,s),m(e,n),m(e,r),m(e,o),m(o,i),b[a].m(i,null),m(e,p),m(e,f),m(e,h),T&&T.m(e,null),m(e,d),g=!0},p(n,r){let u=a;a=$(t=n),a===u?b[a].p(t,r):(Z(),et(b[u],1,1,(()=>{b[u]=null})),Q(),s=b[a],s?s.p(t,r):(s=b[a]=v[a](t),s.c()),tt(s,1),s.m(i,null)),(!g||1&r[0]&&c!==(c=`box2: ${t[0]}`))&&A(o,"id",c),(!g||8&r[0])&&C(f,"opacity",t[3]?"1":"0"),t[10]?T||(T=Ce(),T.c(),T.m(e,d)):T&&(T.d(1),T=null)},i(e){g||(tt(s),q((()=>{l&&l.end(1),u=rt(o,t[12],{replaceExploit:t[5]}),u.start()})),g=!0)},o(e){et(s),u&&u.invalidate(),l=ot(o,t[15],{replaceExploit:t[5]}),g=!1},d(t){t&&w(e),b[a].d(),t&&l&&l.end(),T&&T.d()}}}function Ae(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g;const v=[Oe,Ie],b=[];function $(t,e){return t[6]?1:0}c=$(t),u=b[c]=v[c](t);let T=t[10]&&Be();return{c(){e=x("div"),n=x("h1"),n.textContent="Current Teaching Move",r=k(),o=x("div"),i=k(),a=x("div"),s=x("div"),u.c(),h=k(),T&&T.c(),d=k(),A(n,"class","teachingMoves svelte-kkymw2"),A(o,"class","blueLight svelte-kkymw2"),C(o,"opacity",t[4]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),A(a,"class","greyBox svelte-kkymw2"),A(a,"id",l=`box1: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw - min(45vw, 45vh))"),C(e,"top","min(30vh,30vw)")},m(t,u){y(t,e,u),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),b[c].m(s,null),m(e,h),T&&T.m(e,null),m(e,d),g=!0},p(n,r){t=n,(!g||16&r[0])&&C(o,"opacity",t[4]?"1":"0");let i=c;c=$(t),c===i?b[c].p(t,r):(Z(),et(b[i],1,1,(()=>{b[i]=null})),Q(),u=b[c],u?u.p(t,r):(u=b[c]=v[c](t),u.c()),tt(u,1),u.m(s,null)),(!g||1&r[0]&&l!==(l=`box1: ${t[0]}`))&&A(a,"id",l),t[10]?T||(T=Be(),T.c(),T.m(e,d)):T&&(T.d(1),T=null)},i(e){g||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[13],{replaceExploit:t[5]}),p.start()})),g=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[14],{replaceExploit:t[5]}),g=!1},d(t){t&&w(e),b[c].d(),t&&f&&f.end(),T&&T.d()}}}function Ne(e){let n;return{c(){n=x("div"),n.textContent="?",C(n,"width","min(40vh,40vw)"),C(n,"height","min(40vh,40vw)"),C(n,"text-align","center"),C(n,"font-size","min(20vh,20vw)"),C(n,"top","min(5vh,5vw)"),C(n,"position","absolute")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function Se(t){let e,n;return e=new wt({props:{numberGreen:t[7]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};128&n[0]&&(r.numberGreen=t[7]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Ce(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="arrowKey svelte-kkymw2">Right Arrow</h2>',A(e,"class","arrowCover svelte-kkymw2")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ie(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Oe(t){let e,n;return e=new wt({props:{numberGreen:t[2]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};4&n[0]&&(r.numberGreen=t[2]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Be(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="arrowKey svelte-kkymw2">Left Arrow</h2>',A(e,"class","arrowCover svelte-kkymw2")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function je(t){let e,n,r,o;const i=[Ae,Ee],a=[];return e=function(t,e){return 0==t[30]?0:1}(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function Me(t){let e,n,r,o=t[8]&&Te(t),i=t[11],a=[];for(let e=0;e<i.length;e+=1)a[e]=je(ke(t,i,e));const s=t=>et(a[t],1,1,(()=>{a[t]=null}));return{c(){o&&o.c(),e=k();for(let t=0;t<a.length;t+=1)a[t].c();n=T()},m(t,i){o&&o.m(t,i),y(t,e,i);for(let e=0;e<a.length;e+=1)a[e].m(t,i);y(t,n,i),r=!0},p(t,r){if(t[8]?o?o.p(t,r):(o=Te(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),3327&r[0]){let e;for(i=t[11],e=0;e<i.length;e+=1){const o=ke(t,i,e);a[e]?(a[e].p(o,r),tt(a[e],1)):(a[e]=je(o),a[e].c(),tt(a[e],1),a[e].m(n.parentNode,n))}for(Z(),e=i.length;e<a.length;e+=1)s(e);Q()}},i(t){if(!r){for(let t=0;t<i.length;t+=1)tt(a[t]);r=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)et(a[t]);r=!1},d(t){o&&o.d(t),t&&w(e),b(a,t),t&&w(n)}}}function Pe(e){let n,r,o=e[0],i=Me(e);return{c(){i.c(),n=T()},m(t,e){i.m(t,e),y(t,n,e),r=!0},p(e,r){1&r[0]&&a(o,o=e[0])?(Z(),et(i,1,1,t),Q(),i=Me(e),i.c(),tt(i),i.m(n.parentNode,n)):i.p(e,r)},i(t){r||(tt(i),r=!0)},o(t){et(i),r=!1},d(t){t&&w(n),i.d(t)}}}async function Le(t){return await new Promise((e=>setTimeout(e,t)))}function Re(t,e,n){let{breakNav:r}=e,{counter:o=0}=e;let i=[...Array(2).keys()],{delayGoodExplore:a=!1}=e,{delayBadExplore:s=!1}=e,{delayExploit:c=!1}=e,{viewExplore:u=!1}=e,{exploitMu:l=12}=e,{exploreMu:p=5}=e,{exploitMu2:f=14}=e,{exploreSelect:h=!1}=e,{exploitSelect:d=!1}=e,{replaceExploit:m={truth:!0}}=e,{clearBoard:g=!1}=e,{bothInvisible:v={truth:!0}}=e,{keyDisplay:y=!1}=e,{noReplaceExplore:w=!1}=e,{pointCounter:b=!1}=e,{points:x=14}=e,{delayTime:$=1e3}=e,k=y;return a&&async function(){y&&n(10,k=!1);r(!0),await Le($),n(16,v={truth:!1}),n(1,u=!0),n(3,h=!0),await Le(500),n(3,h=!1),await Le(1e3),n(2,l=p),n(1,u=!1),n(5,m.truth=!0,m),n(0,o+=1),await Le(500),r(!1),y&&n(10,k=!0);n(16,v={truth:!0})}(),s&&async function(){y&&n(10,k=!1);r(!0),await Le($),n(16,v={truth:!1}),n(1,u=!0),n(3,h=!0),await Le(500),n(3,h=!1),await Le(1e3),n(1,u=!1),n(5,m.truth=!1,m),n(0,o+=1),await Le(500),r(!1),y&&n(10,k=!0);n(16,v={truth:!0})}(),c&&async function(){y&&n(10,k=!1);r(!0),await Le($),n(4,d=!0),n(16,v={truth:!1}),await Le(500),n(6,g=!0),n(4,d=!1),await Le(1e3),n(6,g=!1),n(2,l=f),n(0,o+=1),r(!1),y&&n(10,k=!0);n(16,v={truth:!0})}(),t.$$set=t=>{"breakNav"in t&&n(17,r=t.breakNav),"counter"in t&&n(0,o=t.counter),"delayGoodExplore"in t&&n(19,a=t.delayGoodExplore),"delayBadExplore"in t&&n(20,s=t.delayBadExplore),"delayExploit"in t&&n(21,c=t.delayExploit),"viewExplore"in t&&n(1,u=t.viewExplore),"exploitMu"in t&&n(2,l=t.exploitMu),"exploreMu"in t&&n(7,p=t.exploreMu),"exploitMu2"in t&&n(22,f=t.exploitMu2),"exploreSelect"in t&&n(3,h=t.exploreSelect),"exploitSelect"in t&&n(4,d=t.exploitSelect),"replaceExploit"in t&&n(5,m=t.replaceExploit),"clearBoard"in t&&n(6,g=t.clearBoard),"bothInvisible"in t&&n(16,v=t.bothInvisible),"keyDisplay"in t&&n(23,y=t.keyDisplay),"noReplaceExplore"in t&&n(24,w=t.noReplaceExplore),"pointCounter"in t&&n(8,b=t.pointCounter),"points"in t&&n(9,x=t.points),"delayTime"in t&&n(25,$=t.delayTime)},[o,u,l,h,d,m,g,p,b,x,k,i,function(t,{delay:e=0,duration:n=500}){return v.truth?{delay:0,duration:0}:{delay:e,duration:n,css:(t,e)=>`transform: translateX(calc(${100*e}vw)) `}},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return v.truth?{delay:0,duration:0}:e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(min(${50*e}vw,${50*e}vh)) `}:{}},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return v.truth?{delay:0,duration:0}:e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(calc(${-100*e}vw)) `}:{}},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return v.truth?{delay:0,duration:0}:e.truth?{css:()=>"visibility: hidden;display: none;"}:{delay:n,duration:r,css:(t,e)=>`transform: translateY(calc(${100*e}vh)) `}},v,r,2,a,s,c,f,y,w,$]}class De extends pt{constructor(t){super(),lt(this,t,Re,Pe,a,{breakNav:17,counter:0,viewNumber:18,delayGoodExplore:19,delayBadExplore:20,delayExploit:21,viewExplore:1,exploitMu:2,exploreMu:7,exploitMu2:22,exploreSelect:3,exploitSelect:4,replaceExploit:5,clearBoard:6,bothInvisible:16,keyDisplay:23,noReplaceExplore:24,pointCounter:8,points:9,delayTime:25},null,[-1,-1])}get viewNumber(){return this.$$.ctx[18]}}function _e(e){let n,r,o,i,a;return{c(){n=x("h1"),n.textContent="This Experiment is Best Viewed In Fullscreen",r=k(),o=x("button"),o.textContent="Go Fullscreen",A(n,"class","bigText svelte-4u496g"),C(n,"text-align","center"),A(o,"class","buttonCover svelte-4u496g")},m(t,s){y(t,n,s),y(t,r,s),y(t,o,s),i||(a=E(o,"click",e[0]),i=!0)},p:t,i:t,o:t,d(t){t&&w(n),t&&w(r),t&&w(o),i=!1,a()}}}function Ue(t,e,n){let{nextInstruction:r}=e;return t.$$set=t=>{"nextInstruction"in t&&n(1,r=t.nextInstruction)},[async function(){var t=document.documentElement,e=t.requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullScreen;e&&e.call(t),await async function(t){return await new Promise((e=>setTimeout(e,t)))}(100),r(1)},r]}class Fe extends pt{constructor(t){super(),lt(this,t,Ue,_e,a,{nextInstruction:1})}}function qe(t,e,n){const r=t.slice();return r[29]=e[n],r}function Ge(e){let n,r,o,i=e[3],s=e[0],c=ze(e),u=en(e);return{c(){c.c(),n=k(),u.c(),r=T()},m(t,e){c.m(t,e),y(t,n,e),u.m(t,e),y(t,r,e),o=!0},p(e,o){8&o[0]&&a(i,i=e[3])?(c.d(1),c=ze(e),c.c(),c.m(n.parentNode,n)):c.p(e,o),1&o[0]&&a(s,s=e[0])?(Z(),et(u,1,1,t),Q(),u=en(e),u.c(),tt(u),u.m(r.parentNode,r)):u.p(e,o)},i(t){o||(tt(u),o=!0)},o(t){et(u),o=!1},d(t){c.d(t),t&&w(n),t&&w(r),u.d(t)}}}function ze(t){let e,n,r=t[1][t[3]-1]+"";return{c(){e=x("h1"),n=$(r),A(e,"class","descriptionText svelte-5jds4h")},m(t,r){y(t,e,r),m(e,n)},p(t,e){10&e[0]&&r!==(r=t[1][t[3]-1]+"")&&N(n,r)},d(t){t&&w(e)}}}function Ve(t){let e,n,r,o;const i=[Ye,He],a=[];return e=function(t,e){return 0==t[29]?0:1}(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function He(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g;const v=[Ke,Xe],b=[];function $(t,e){return t[4]?0:1}a=$(t),s=b[a]=v[a](t);let T=t[10]&&We();return{c(){e=x("div"),n=x("h1"),n.textContent="New Teaching Move",r=k(),o=x("div"),i=x("div"),s.c(),p=k(),f=x("div"),h=k(),T&&T.c(),d=k(),A(n,"class","teachingMoves svelte-5jds4h"),C(i,"position","absolute"),A(o,"class","greyBox svelte-5jds4h"),A(o,"id",c=`box2: ${t[0]}`),A(f,"class","blueLight svelte-5jds4h"),C(f,"opacity",t[7]?"1":"0"),C(e,"position","absolute"),C(e,"left","calc(50vw + min(5vw, 5vh))"),C(e,"top","min(30vh,30vw)")},m(t,s){y(t,e,s),m(e,n),m(e,r),m(e,o),m(o,i),b[a].m(i,null),m(e,p),m(e,f),m(e,h),T&&T.m(e,null),m(e,d),g=!0},p(n,r){let u=a;a=$(t=n),a===u?b[a].p(t,r):(Z(),et(b[u],1,1,(()=>{b[u]=null})),Q(),s=b[a],s?s.p(t,r):(s=b[a]=v[a](t),s.c()),tt(s,1),s.m(i,null)),(!g||1&r[0]&&c!==(c=`box2: ${t[0]}`))&&A(o,"id",c),(!g||128&r[0])&&C(f,"opacity",t[7]?"1":"0"),t[10]?T||(T=We(),T.c(),T.m(e,d)):T&&(T.d(1),T=null)},i(e){g||(tt(s),q((()=>{l&&l.end(1),u=rt(o,t[13],{replaceExploit:t[9]}),u.start()})),g=!0)},o(e){et(s),u&&u.invalidate(),l=ot(o,t[16],{replaceExploit:t[9]}),g=!1},d(t){t&&w(e),b[a].d(),t&&l&&l.end(),T&&T.d()}}}function Ye(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g;const v=[Ze,Je],b=[];function $(t,e){return t[11]?1:0}c=$(t),u=b[c]=v[c](t);let T=t[10]&&Qe();return{c(){e=x("div"),n=x("h1"),n.textContent="Current Teaching Move",r=k(),o=x("div"),i=k(),a=x("div"),s=x("div"),u.c(),h=k(),T&&T.c(),d=k(),A(n,"class","teachingMoves svelte-5jds4h"),A(o,"class","blueLight svelte-5jds4h"),C(o,"opacity",t[8]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),A(a,"class","greyBox svelte-5jds4h"),A(a,"id",l=`box1: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw - min(45vw, 45vh))"),C(e,"top","min(30vh,30vw)")},m(t,u){y(t,e,u),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),b[c].m(s,null),m(e,h),T&&T.m(e,null),m(e,d),g=!0},p(n,r){t=n,(!g||256&r[0])&&C(o,"opacity",t[8]?"1":"0");let i=c;c=$(t),c===i?b[c].p(t,r):(Z(),et(b[i],1,1,(()=>{b[i]=null})),Q(),u=b[c],u?u.p(t,r):(u=b[c]=v[c](t),u.c()),tt(u,1),u.m(s,null)),(!g||1&r[0]&&l!==(l=`box1: ${t[0]}`))&&A(a,"id",l),t[10]?T||(T=Qe(),T.c(),T.m(e,d)):T&&(T.d(1),T=null)},i(e){g||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[14],{replaceExploit:t[9]}),p.start()})),g=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[15],{replaceExploit:t[9]}),g=!1},d(t){t&&w(e),b[c].d(),t&&f&&f.end(),T&&T.d()}}}function Xe(e){let n;return{c(){n=x("div"),n.textContent="?",C(n,"width","min(40vh,40vw)"),C(n,"height","min(40vh,40vw)"),C(n,"text-align","center"),C(n,"font-size","min(20vh,20vw)"),C(n,"top","min(5vh,5vw)"),C(n,"position","absolute")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function Ke(t){let e,n;return e=new wt({props:{numberGreen:t[6]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};64&n[0]&&(r.numberGreen=t[6]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function We(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="arrowKey svelte-5jds4h">Right Arrow</h2>',A(e,"class","arrowCover svelte-5jds4h")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Je(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Ze(t){let e,n;return e=new wt({props:{numberGreen:t[5]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};32&n[0]&&(r.numberGreen=t[5]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Qe(t){let e;return{c(){e=x("div"),e.innerHTML='<h2 class="arrowKey svelte-5jds4h">Left Arrow</h2>',A(e,"class","arrowCover svelte-5jds4h")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function tn(t){let e,n,r=t[0]<rn+1&&Ve(t);return{c(){r&&r.c(),e=T()},m(t,o){r&&r.m(t,o),y(t,e,o),n=!0},p(t,n){t[0]<rn+1?r?(r.p(t,n),1&n[0]&&tt(r,1)):(r=Ve(t),r.c(),tt(r,1),r.m(e.parentNode,e)):r&&(Z(),et(r,1,1,(()=>{r=null})),Q())},i(t){n||(tt(r),n=!0)},o(t){et(r),n=!1},d(t){r&&r.d(t),t&&w(e)}}}function en(t){let e,n,r=t[12],o=[];for(let e=0;e<r.length;e+=1)o[e]=tn(qe(t,r,e));const i=t=>et(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=T()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);y(t,e,r),n=!0},p(t,n){if(8177&n[0]){let a;for(r=t[12],a=0;a<r.length;a+=1){const i=qe(t,r,a);o[a]?(o[a].p(i,n),tt(o[a],1)):(o[a]=tn(i),o[a].c(),tt(o[a],1),o[a].m(e.parentNode,e))}for(Z(),a=r.length;a<o.length;a+=1)i(a);Q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){b(o,t),t&&w(e)}}}function nn(t){let e,n,r,o,i=!t[2].truth&&Ge(t);return{c(){i&&i.c(),e=T()},m(a,s){i&&i.m(a,s),y(a,e,s),n=!0,r||(o=E(window,"keydown",t[17]),r=!0)},p(t,n){t[2].truth?i&&(Z(),et(i,1,1,(()=>{i=null})),Q()):i?(i.p(t,n),4&n[0]&&tt(i,1)):(i=Ge(t),i.c(),tt(i,1),i.m(e.parentNode,e))},i(t){n||(tt(i),n=!0)},o(t){et(i),n=!1},d(t){i&&i.d(t),t&&w(e),r=!1,o()}}}let rn=4;async function on(t){return await new Promise((e=>setTimeout(e,t)))}function an(t,e){return e*function(){for(var t=0,e=0;0===t;)t=Math.random();for(;0===e;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}()+t}function sn(){return Math.floor(20*Math.random())}function cn(t,e,n){let{counter:r=0}=e;let{gameString:o=""}=e,i=1,a=[...Array(2).keys()],s=Date.now(),c=!1,u=15,l=sn(),p=!1,f=!1,h={truth:!1},d=!0,m=!1,g=0,v=0,{trialDescriptions:y=[]}=e,{toNext:w}=e,{bothInvisible:b=!0}=e,{breakTruth:x={truth:!1}}=e;return t.$$set=t=>{"counter"in t&&n(0,r=t.counter),"gameString"in t&&n(20,o=t.gameString),"trialDescriptions"in t&&n(1,y=t.trialDescriptions),"toNext"in t&&n(21,w=t.toNext),"bothInvisible"in t&&n(18,b=t.bothInvisible),"breakTruth"in t&&n(2,x=t.breakTruth)},[r,y,x,i,c,u,l,p,f,h,d,m,a,function(t,{delay:e=0,duration:n=500}){return b?{delay:0,duration:0}:(console.log("migrateLeftExplore:true"),{delay:e,duration:n,css:(t,e)=>`transform: translateX(calc(${100*e}vw)) `})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return b?{delay:0,duration:0}:(console.log(`migrateLeftExploit:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(min(${50*e}vw,${50*e}vh)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return b?{delay:0,duration:0}:(console.log(`migrateOut:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(calc(${-100*e}vw)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return b?{delay:0,duration:0}:(console.log(`invisibleOrDown:${e}`),e.truth?{css:()=>"visibility: hidden;display: none;"}:{delay:n,duration:r,css:(t,e)=>`transform: translateY(calc(${100*e}vh)) `})},async function(t){if(console.log(t.key),0!=d&&("ArrowLeft"===t.key||"ArrowRight"===t.key)){if(i.toString(),Date.now(),n(18,b=!1),"ArrowLeft"==t.key){v+=g,g=0,n(10,d=!1);let t=function(){let t=Math.floor(an(u,3));return t=Math.min(t,20),t=Math.max(t,0),t}();n(8,f=!0),await on(500),n(8,f=!1),n(11,m=!0),await on(1e3),n(5,u=t),g=t,n(11,m=!1),n(10,d=!0),s=Date.now(),n(3,i+=1),console.log("done")}if("ArrowRight"==t.key){n(4,c=!0);let t=sn();v+=g,g=0,t>u?(console.log("greater than"),n(10,d=!1),n(6,l=t),n(7,p=!0),await on(500),n(7,p=!1),await on(500),n(5,u=t),n(4,c=!1),n(9,h.truth=!0,h),n(0,r+=1),await on(500),g=t,n(10,d=!0),s=Date.now(),n(3,i+=1)):(console.log("less than"),n(10,d=!1),n(6,l=t),n(7,p=!0),await on(500),n(7,p=!1),await on(500),n(4,c=!1),n(9,h.truth=!1,h),n(0,r+=1),await on(500),g=t,n(10,d=!0),s=Date.now(),n(3,i+=1))}n(18,b=i===rn+1),i===rn+1&&(n(10,d=!1),await on(1200),w(o,v+g))}},b,2,o,w]}class un extends pt{constructor(t){super(),lt(this,t,cn,nn,a,{counter:0,viewNumber:19,gameString:20,trialDescriptions:1,toNext:21,bothInvisible:18,breakTruth:2},null,[-1,-1])}get viewNumber(){return this.$$.ctx[19]}}function ln(e){let n,r;return{c:t,m(t,o){n||(r=E(window,"keydown",e[0]),n=!0)},p:t,i:t,o:t,d(t){n=!1,r()}}}function pn(t,e,n){let{breakTruth:r={truth:!1}}=e,{nextInstruction:o=null}=e,{nextArrow:i}=e;return t.$$set=t=>{"breakTruth"in t&&n(1,r=t.breakTruth),"nextInstruction"in t&&n(2,o=t.nextInstruction),"nextArrow"in t&&n(3,i=t.nextArrow)},[async function(t){r.truth||t.key===i&&o()},r,o,i]}class fn extends pt{constructor(t){super(),lt(this,t,pn,ln,a,{breakTruth:1,nextInstruction:2,nextArrow:3})}}function hn(t){let e;return{c(){e=x("div"),A(e,"class","progressLeft svelte-112fypv"),C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[0]+")"),C(e,"left","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[2]+")"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){17&n&&C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[0]+")"),20&n&&C(e,"left","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[2]+")")},d(t){t&&w(e)}}}function dn(t){let e,n,r,o=t[0],i=hn(t);return{c(){e=x("div"),n=k(),i.c(),r=T(),A(e,"class","progressGreen svelte-112fypv"),C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[2]+")"),C(e,"position","absolute")},m(t,o){y(t,e,o),y(t,n,o),i.m(t,o),y(t,r,o)},p(t,n){20&n&&C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[2]+")"),1&n&&a(o,o=t[0])?(i.d(1),i=hn(t),i.c(),i.m(r.parentNode,r)):i.p(t,n)},d(t){t&&w(e),t&&w(n),t&&w(r),i.d(t)}}}function mn(t){let e;return{c(){e=x("div"),A(e,"class","progressRight svelte-112fypv"),C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[1]+")"),C(e,"left","calc(min(60vh,60vw) - ((min(60vh,60vw) / "+20*t[4]+") * "+t[3]+") + 1px)"),C(e,"position","absolute")},m(t,n){y(t,e,n)},p(t,n){18&n&&C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[1]+")"),24&n&&C(e,"left","calc(min(60vh,60vw) - ((min(60vh,60vw) / "+20*t[4]+") * "+t[3]+") + 1px)")},d(t){t&&w(e)}}}function gn(t){let e,n,r,o=t[1],i=mn(t);return{c(){e=x("div"),n=k(),i.c(),r=T(),A(e,"class","progressRed svelte-112fypv"),C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[3]+")"),C(e,"left","min(60vh,60vw)"),C(e,"position","absolute")},m(t,o){y(t,e,o),y(t,n,o),i.m(t,o),y(t,r,o)},p(t,n){24&n&&C(e,"width","calc((min(60vh,60vw) / "+20*t[4]+") * "+t[3]+")"),2&n&&a(o,o=t[1])?(i.d(1),i=mn(t),i.c(),i.m(r.parentNode,r)):i.p(t,n)},d(t){t&&w(e),t&&w(n),t&&w(r),i.d(t)}}}function vn(e){let n,r,o,i,s,c,u=e[2],l=e[3],p=dn(e),f=gn(e);return{c(){n=x("h1"),n.textContent="Total Student Understanding",r=k(),o=x("div"),i=x("div"),s=k(),p.c(),c=k(),f.c(),A(n,"class","classUnderstanding svelte-112fypv"),A(i,"class","progressBar svelte-112fypv"),C(i,"left","max(-.5vw,-.5vh)"),C(o,"left","calc(50vw - min(30vh,30vw))"),C(o,"top","min(50vh,50vw)"),C(o,"position","absolute")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),m(o,i),m(o,s),p.m(o,null),m(o,c),f.m(o,null)},p(t,[e]){4&e&&a(u,u=t[2])?(p.d(1),p=dn(t),p.c(),p.m(o,c)):p.p(t,e),8&e&&a(l,l=t[3])?(f.d(1),f=gn(t),f.c(),f.m(o,null)):f.p(t,e)},i:t,o:t,d(t){t&&w(n),t&&w(r),t&&w(o),p.d(t),f.d(t)}}}function yn(t,e,n){let{lastGreenBar:r=0}=e,{lastRedBar:o=0}=e,{greenBar:i=0}=e,{redBar:a=0}=e,{numTrials:s=30}=e;return t.$$set=t=>{"lastGreenBar"in t&&n(0,r=t.lastGreenBar),"lastRedBar"in t&&n(1,o=t.lastRedBar),"greenBar"in t&&n(2,i=t.greenBar),"redBar"in t&&n(3,a=t.redBar),"numTrials"in t&&n(4,s=t.numTrials)},[r,o,i,a,s]}class wn extends pt{constructor(t){super(),lt(this,t,yn,vn,a,{lastGreenBar:0,lastRedBar:1,greenBar:2,redBar:3,numTrials:4})}}function bn(t){let e;return{c(){e=x("h1"),e.textContent="Great Job! You improved upon your classroom's understanding from the last month! Let's try and do even better in the next month!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function xn(t){let e;return{c(){e=x("h1"),e.textContent="Oh no! It looks like your classroom's understanding dropped from the last month, let's try and beat this score next time!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function $n(t){let e;return{c(){e=x("h1"),e.textContent="Looks like you tied your last score! Let's try and beat that score in the next month!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function kn(e){let n,r,o,i,a,s,c,u,l,p,f,h,d,g,v,b,T,E,S,I,O,B,j,M,P,L,R,D,_,U,F=Math.round(100*e[0]/(20*e[1]))+"",q=Math.round(100*e[2]/(20*e[1]))+"",G=e[0]>e[2]&&bn(),z=e[0]<e[2]&&xn(),V=e[0]==e[2]&&$n();return{c(){n=x("h1"),n.textContent="Total Student Understanding This Month",r=k(),o=x("div"),i=x("div"),a=k(),s=x("div"),c=k(),u=x("div"),l=k(),p=x("h1"),p.textContent="Total Student Understanding Last Month",f=k(),h=x("div"),d=x("div"),g=k(),v=x("div"),b=k(),T=x("div"),E=k(),S=x("div"),I=x("h1"),O=$("Your classroom's understanding at the end of this month was "),B=$(F),j=$("%, and\n    your classroom's understanding last month was "),M=$(q),P=$("%"),L=k(),R=x("div"),D=x("div"),G&&G.c(),_=k(),z&&z.c(),U=k(),V&&V.c(),A(n,"class","classUnderstanding svelte-1f5voqz"),A(i,"class","progressBar svelte-1f5voqz"),C(i,"left","max(-.5vw,-.5vh)"),A(s,"class","progressGreen svelte-1f5voqz"),C(s,"width","calc((min(60vh,60vw) / "+20*e[1]+") * "+e[0]+")"),C(s,"position","absolute"),A(u,"class","progressRed svelte-1f5voqz"),C(u,"width","calc((min(60vh,60vw) / "+20*e[1]+") * "+e[3]+")"),C(u,"left","min(60vh,60vw)"),C(u,"position","absolute"),C(o,"left","calc(50vw - min(30vh,30vw))"),C(o,"top","min(25vh,25vw)"),C(o,"position","absolute"),A(p,"class","classUnderstanding svelte-1f5voqz"),C(p,"top","min(33vh,33vw)"),A(d,"class","progressBar svelte-1f5voqz"),C(d,"left","max(-.5vw,-.5vh)"),A(v,"class","progressGreen svelte-1f5voqz"),C(v,"width","calc((min(60vh,60vw) / "+20*e[1]+") * "+e[2]+")"),C(v,"position","absolute"),A(T,"class","progressRed svelte-1f5voqz"),C(T,"width","calc((min(60vh,60vw) / "+20*e[1]+") * "+e[4]+")"),C(T,"left","min(60vh,60vw)"),C(T,"position","absolute"),C(h,"left","calc(50vw - min(30vh,30vw))"),C(h,"top","min(38vh,38vw)"),C(h,"position","absolute"),A(S,"class","description svelte-1f5voqz"),A(D,"class","performanceBox svelte-1f5voqz")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),m(o,i),m(o,a),m(o,s),m(o,c),m(o,u),y(t,l,e),y(t,p,e),y(t,f,e),y(t,h,e),m(h,d),m(h,g),m(h,v),m(h,b),m(h,T),y(t,E,e),y(t,S,e),m(S,I),m(I,O),m(I,B),m(I,j),m(I,M),m(I,P),y(t,L,e),y(t,R,e),m(R,D),G&&G.m(D,null),m(D,_),z&&z.m(D,null),m(D,U),V&&V.m(D,null)},p(t,[e]){3&e&&C(s,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[0]+")"),2&e&&C(u,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[3]+")"),6&e&&C(v,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[2]+")"),2&e&&C(T,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[4]+")"),3&e&&F!==(F=Math.round(100*t[0]/(20*t[1]))+"")&&N(B,F),6&e&&q!==(q=Math.round(100*t[2]/(20*t[1]))+"")&&N(M,q),t[0]>t[2]?G||(G=bn(),G.c(),G.m(D,_)):G&&(G.d(1),G=null),t[0]<t[2]?z||(z=xn(),z.c(),z.m(D,U)):z&&(z.d(1),z=null),t[0]==t[2]?V||(V=$n(),V.c(),V.m(D,null)):V&&(V.d(1),V=null)},i:t,o:t,d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(l),t&&w(p),t&&w(f),t&&w(h),t&&w(E),t&&w(S),t&&w(L),t&&w(R),G&&G.d(),z&&z.d(),V&&V.d()}}}function Tn(t,e,n){let{greenScore:r=10}=e,{numTrials:o=30}=e,{greenScoreLast:i=10}=e;const a=20*o-r,s=20*o-i;return async function(){await async function(t){return await new Promise((e=>setTimeout(e,t)))}(500)}(),t.$$set=t=>{"greenScore"in t&&n(0,r=t.greenScore),"numTrials"in t&&n(1,o=t.numTrials),"greenScoreLast"in t&&n(2,i=t.greenScoreLast)},[r,o,i,a,s]}class En extends pt{constructor(t){super(),lt(this,t,Tn,kn,a,{greenScore:0,numTrials:1,greenScoreLast:2})}}function An(e){let n,r;return n=new Fe({props:{nextInstruction:e[7]}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Nn(e){let n,r,o,i,a,s;return a=new ve({props:{nextInstruction:e[7]}}),{c(){n=x("h1"),n.innerHTML="The <br/>Teaching Task",r=k(),o=x("h1"),o.textContent="Click Next to Start the Task",i=k(),at(a.$$.fragment),A(n,"class","titleText svelte-1d7ghio"),C(o,"top","70vh"),C(o,"width","min(60vw,60vh)"),C(o,"left","calc(50vw - min(20vw,20vh))"),C(o,"position","absolute"),C(o,"font-size","min(3vh,3vw)")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(a.$$.fragment,t),s=!0)},o(t){et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),ct(a,t)}}}function Sn(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="For this experiment, you will play a teaching task.  Please read through these instructions carefully.\n         Remember that this is an important part of our study. Please give this task adequate time and effort, and try to get the best results.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Cn(t){let e,n,r,o,i,a,s,c;return i=new ve({props:{nextInstruction:t[7],previousInstruction:t[8]}}),{c(){e=x("h1"),e.textContent="To start off, we want you to take a moment to think about and describe your current math warm up in 1 or 2 sentences.",n=k(),r=x("textarea"),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio"),A(r,"rows","4"),A(r,"wrap","soft"),A(r,"placeholder","Input description here..."),A(r,"class","textBox svelte-1d7ghio")},m(u,l){y(u,e,l),y(u,n,l),y(u,r,l),S(r,t[5]),y(u,o,l),st(i,u,l),a=!0,s||(c=E(r,"input",t[13]),s=!0)},p(t,e){32&e&&S(r,t[5])},i(t){a||(tt(i.$$.fragment,t),a=!0)},o(t){et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),t&&w(r),t&&w(o),ct(i,t),s=!1,c()}}}function In(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Now, we want you to imagine that your math coach or colleague has suggested a new approach for your math warm up.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function On(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="In this experiment  - the teaching task - we would like you to choose between two teaching approaches for your math warm up, (1) your current math warm up that seems to be working well or (2) the “new” suggested approach for your math warm up.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Bn(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="For the purposes of this task, we will keep the teaching approaches generic (“current” approach or “new” approach by the coach) but we want you to imagine what those approaches might be (i.e. starting with a group problem, a quick review worksheet, calendar time, or a math discussion).",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function jn(e){let n,r,o,i,a,s,u,l,p,f,h;return f=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="To get feedback on how well the approach worked, your students will display a red light or green light to show their understanding.",r=k(),o=x("div"),i=k(),a=x("h1"),a.textContent="How much did you understand?",s=k(),u=x("img"),p=k(),at(f.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio"),A(o,"class","imageBox svelte-1d7ghio"),A(a,"class","imageText svelte-1d7ghio"),A(u,"class","imageScale svelte-1d7ghio"),c(u.src,l="https://cdn.vox-cdn.com/thumbor/8XjPCHo_W0zCH1YDoR3ST3cN51E=/0x0:6720x4480/920x613/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/64906829/f9c5667541.0.jpeg")||A(u,"src","https://cdn.vox-cdn.com/thumbor/8XjPCHo_W0zCH1YDoR3ST3cN51E=/0x0:6720x4480/920x613/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/64906829/f9c5667541.0.jpeg"),A(u,"alt","temp")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),y(t,u,e),y(t,p,e),st(f,t,e),h=!0},p:t,i(t){h||(tt(f.$$.fragment,t),h=!0)},o(t){et(f.$$.fragment,t),h=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),t&&w(u),t&&w(p),ct(f,t)}}}function Mn(e){let n,r,o,i,a,s,c,u,l,p,f,h,d,m,g,v;return g=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="The response of a student holding up a red or green card after being asked might be like:",r=k(),o=x("div"),i=k(),a=x("h1"),a.textContent="How much did you understand?",s=k(),c=x("div"),c.innerHTML='<h1 style="top:50%;left50%;height:20%;width:20%;margin:0% 25%">R</h1>',u=k(),l=x("div"),l.innerHTML='<h1 style="top:50%;left50%;height:20%;width:20%;margin:2% 20%">G</h1>',p=k(),f=x("h1"),f.textContent="I do not get it! This did not help me.",h=k(),d=x("h1"),d.textContent="I understand!\n            I am happy with how this went.",m=k(),at(g.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio"),A(o,"class","imageBox svelte-1d7ghio"),A(a,"class","imageText svelte-1d7ghio"),A(c,"class","redGreenBall svelte-1d7ghio"),C(c,"background-color","red"),C(c,"top","min(31vh,31vw)"),A(l,"class","redGreenBall svelte-1d7ghio"),C(l,"background-color","green"),C(l,"top","min(51vh,51vw)"),A(f,"class","understandBox svelte-1d7ghio"),C(f,"top","min(30vh,30vw)"),A(d,"class","understandBox svelte-1d7ghio"),C(d,"top","min(50vh,50vw)")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),y(t,c,e),y(t,u,e),y(t,l,e),y(t,p,e),y(t,f,e),y(t,h,e),y(t,d,e),y(t,m,e),st(g,t,e),v=!0},p:t,i(t){v||(tt(g.$$.fragment,t),v=!0)},o(t){et(g.$$.fragment,t),v=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),t&&w(c),t&&w(u),t&&w(l),t&&w(p),t&&w(f),t&&w(h),t&&w(d),t&&w(m),ct(g,t)}}}function Pn(e){let n,r,o,i;return n=new $e({props:{passedText:"You have a class of 20 students. Each student is represented by a circle. A teaching approach, or move, can have different outcomes day to day. On the first day you try it, you might get 12 students showing green and 8 showing red (shown below)",exploitSelect:!1,exploitMu:12}}),o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){at(n.$$.fragment),r=k(),at(o.$$.fragment)},m(t,e){st(n,t,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(n.$$.fragment,t),tt(o.$$.fragment,t),i=!0)},o(t){et(n.$$.fragment,t),et(o.$$.fragment,t),i=!1},d(t){ct(n,t),t&&w(r),ct(o,t)}}}function Ln(e){let n,r,o,i;return n=new $e({props:{passedText:"And the second day you try the same move it might not work so well - 9 students showing green and 11 showing red.",exploitSelect:!1,exploitMu:9}}),o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){at(n.$$.fragment),r=k(),at(o.$$.fragment)},m(t,e){st(n,t,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(n.$$.fragment,t),tt(o.$$.fragment,t),i=!0)},o(t){et(n.$$.fragment,t),et(o.$$.fragment,t),i=!1},d(t){ct(n,t),t&&w(r),ct(o,t)}}}function Rn(e){let n,r,o,i;return n=new $e({props:{passedText:"And on the next day you might try the same move and get slightly better results - 15 students showing green and 5 showing red. As you can see, the same move can get slightly better or worse results over time but stays fairly close to what it was the day before.",exploitSelect:!1,exploitMu:15}}),o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){at(n.$$.fragment),r=k(),at(o.$$.fragment)},m(t,e){st(n,t,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(n.$$.fragment,t),tt(o.$$.fragment,t),i=!0)},o(t){et(n.$$.fragment,t),et(o.$$.fragment,t),i=!1},d(t){ct(n,t),t&&w(r),ct(o,t)}}}function Dn(e){let n,r,o,i,a,s;return o=new De({props:{exploitMu:11}}),a=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="When you play the task, the two teaching approaches will be represented like this.  \n        Your current approach shows the outcome from the last time you used that approach.\n        The outcome from your new approach is unknown until you try it.",r=k(),at(o.$$.fragment),i=k(),at(a.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(o.$$.fragment,t),tt(a.$$.fragment,t),s=!0)},o(t){et(o.$$.fragment,t),et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),ct(a,t)}}}function _n(e){let n,r,o,i,s,c,u=e[6];o=new ve({props:{breakTruth:e[1],nextInstruction:e[7],previousInstruction:e[8],replayAnimation:e[9]}});let l=Un(e);return{c(){n=x("h1"),n.textContent="If you choose to continue with your current teaching approach, it will light up with a blue border and a new outcome will appear.",r=k(),at(o.$$.fragment),i=k(),l.c(),s=T(),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),l.m(t,e),y(t,s,e),c=!0},p(e,n){const r={};2&n&&(r.breakTruth=e[1]),o.$set(r),64&n&&a(u,u=e[6])?(Z(),et(l,1,1,t),Q(),l=Un(e),l.c(),tt(l),l.m(s.parentNode,s)):l.p(e,n)},i(t){c||(tt(o.$$.fragment,t),tt(l),c=!0)},o(t){et(o.$$.fragment,t),et(l),c=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),t&&w(s),l.d(t)}}}function Un(e){let n,r;return n=new De({props:{breakNav:e[10],delayExploit:!0,exploitMu:11}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Fn(t){let e,n,r,o,i,a;return r=new ve({props:{breakTruth:t[1],nextInstruction:t[7],previousInstruction:t[8]}}),i=new De({props:{breakNav:t[10],exploreSelect:!0,viewExplore:!0,exploitMu:11}}),{c(){e=x("h1"),e.textContent="Or if you choose to switch to the new approach, it will light up and show the results like this…",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),r.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function qn(e){let n,r,o,i,s,c,u=e[6];o=new ve({props:{breakTruth:e[1],nextInstruction:e[7],previousInstruction:e[8],replayAnimation:e[9]}});let l=Gn(e);return{c(){n=x("h1"),n.textContent="If the new approach is worse than the current approach, you earn fewer points on the trial. Then, since it is worse, this new approach is discarded.",r=k(),at(o.$$.fragment),i=k(),l.c(),s=T(),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),l.m(t,e),y(t,s,e),c=!0},p(e,n){const r={};2&n&&(r.breakTruth=e[1]),o.$set(r),64&n&&a(u,u=e[6])?(Z(),et(l,1,1,t),Q(),l=Gn(e),l.c(),tt(l),l.m(s.parentNode,s)):l.p(e,n)},i(t){c||(tt(o.$$.fragment,t),tt(l),c=!0)},o(t){et(o.$$.fragment,t),et(l),c=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),t&&w(s),l.d(t)}}}function Gn(e){let n,r;return n=new De({props:{breakNav:e[10],delayBadExplore:!0,exploitMu:11,noReplaceExplore:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function zn(t){let e,n,r,o,i,a;return r=new ve({props:{breakTruth:t[1],nextInstruction:t[7],previousInstruction:t[8]}}),i=new De({props:{breakNav:t[10],exploitMu:11}}),{c(){e=x("h1"),e.textContent="Then another new approach will appear. Now you can choose again from the current approach or another new approach.",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),r.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function Vn(e){let n,r,o,i,s,c,u=e[6];o=new ve({props:{breakTruth:e[1],nextInstruction:e[7],previousInstruction:e[8],replayAnimation:e[9]}});let l=Hn(e);return{c(){n=x("h1"),n.textContent="If you were to try the new approach and it is better than the current approach,  it will replace your current approach for your next choice.",r=k(),at(o.$$.fragment),i=k(),l.c(),s=T(),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),l.m(t,e),y(t,s,e),c=!0},p(e,n){const r={};2&n&&(r.breakTruth=e[1]),o.$set(r),64&n&&a(u,u=e[6])?(Z(),et(l,1,1,t),Q(),l=Hn(e),l.c(),tt(l),l.m(s.parentNode,s)):l.p(e,n)},i(t){c||(tt(o.$$.fragment,t),tt(l),c=!0)},o(t){et(o.$$.fragment,t),et(l),c=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),t&&w(s),l.d(t)}}}function Hn(e){let n,r;return n=new De({props:{breakNav:e[10],delayGoodExplore:!0,exploitMu:11,exploreMu:16,noReplaceExplore:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Yn(t){let e,n,r,o,i,a;return r=new ve({props:{breakTruth:t[1],nextInstruction:t[7],previousInstruction:t[8]}}),i=new De({props:{breakNav:t[10],exploitMu:16}}),{c(){e=x("h1"),e.textContent="Once again, another new approach will appear... and so on...",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),r.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function Xn(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="To recap, you need to choose between you current approach and a new approach.  Choosing you current approach gives you a similar result to what you got last time (slightly better or worse).  Choosing a new approach give you a totally new outcome(that can be a lot better or a lot worse).",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Kn(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Before you begin, to make sure you've got everything, we will walk you through several trials...",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Wn(t){let e,n,r,o,i,a;return r=new De({props:{breakNav:t[10],exploitMu:12,keyDisplay:!0}}),i=new fn({props:{breakTruth:t[1],nextInstruction:t[7],nextArrow:"ArrowLeft"}}),{c(){e=x("h1"),e.textContent="For our first trial we have a current teaching approach that seems to be working fairly well, so we may want to stick with our current approach (press the left arrow)",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),i.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function Jn(t){let e,n,r,o,i,a;return r=new De({props:{breakNav:t[10],keyDisplay:!0,delayExploit:!0,exploitMu:12,exploitMu2:13,delayTime:0}}),i=new fn({props:{breakTruth:t[1],nextInstruction:t[7],nextArrow:"ArrowLeft"}}),{c(){e=x("h1"),e.textContent="We can see that when we tried our current teaching approach it got better! So, we may want to keep trying that approach (press the left arrow)",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),i.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function Zn(t){let e,n,r,o,i,a;return r=new De({props:{breakNav:t[10],keyDisplay:!0,delayExploit:!0,exploitMu:13,exploitMu2:8,delayTime:0}}),i=new fn({props:{breakTruth:t[1],nextInstruction:t[7],nextArrow:"ArrowRight"}}),{c(){e=x("h1"),e.textContent="Oh no! We seem to have gotten a bad outcome that time. Since our current choice is not performing well we may want to switch to a new approach (press the right arrow)",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),i.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function Qn(t){let e,n,r,o,i,a;return r=new De({props:{breakNav:t[10],keyDisplay:!0,delayBadExplore:!0,exploitMu:8,exploreMu:1,delayTime:0}}),i=new fn({props:{breakTruth:t[1],nextInstruction:t[7],nextArrow:"ArrowRight"}}),{c(){e=x("h1"),e.textContent="After trying the new approach, we got a worse outcome than our current approach. We may still think that there are better options out there though, and we decide to try another new approach (press the right arrow)",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1d7ghio")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),i.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function tr(e){let n,r,o,i;return o=new De({props:{breakNav:e[10],keyDisplay:!0,delayGoodExplore:!0,exploitMu:8,exploreMu:15,delayTime:0}}),{c(){n=x("h1"),n.textContent="Great! We seem to have found a much better approach when we tried another new approach. Now it is your turn to try a couple of trials by yourself. Choose either the left or right arrow to make your decision.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function er(t){let e,n;return e=new un({props:{breakTruth:t[1],toNext:t[7],trialDescriptions:["Great! We seem to have found a much better approach when we tried another new approach. Now it is your turn to try a couple of trials by yourself. Choose either the left or right arrow to make your decision.","Lets try another, 3 practice trials left","Lets try another, 2 practice trials left","Lets try another, 1 practice trials left",""]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.breakTruth=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function nr(e){let n,r,o,i,a,s,c,u;return c=new ve({props:{nextInstruction:e[7],previousInstruction:e[8],backSkip:7}}),{c(){n=x("h1"),n.textContent="The game will be organized into days and months, and the current day/month will be displayed at the top of your screen.\n         Every time you choose either your current teaching move or a new teaching move, it will increase your day count. At the end of 30 days, a new month\n        will happen. Here is the display you would see if you were currently on day 5 of the second month.",r=k(),o=x("h1"),o.textContent="Day 5 of 30",i=k(),a=x("h1"),a.textContent="Month 2 of 6",s=k(),at(c.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio"),A(o,"class","points svelte-1d7ghio"),A(a,"class","points svelte-1d7ghio"),C(a,"left","calc(50vw - min(50vw, 50vh))")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),st(c,t,e),u=!0},p:t,i(t){u||(tt(c.$$.fragment,t),u=!0)},o(t){et(c.$$.fragment,t),u=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),ct(c,t)}}}function rr(e){let n,r,o,i,a,s;return o=new wn({props:{lastGreenBar:15,lastRedBar:5,greenBar:250,redBar:210,numTrials:30}}),a=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Your points will be kept track of with a progress bar at the top of your screen. The total bar length represents your total accumulated red and green lights this month. The flashing sections\n        represent the red and green lights that you recieved on your last choice.",r=k(),at(o.$$.fragment),i=k(),at(a.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(o.$$.fragment,t),tt(a.$$.fragment,t),s=!0)},o(t){et(o.$$.fragment,t),et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),ct(a,t)}}}function or(e){let n,r,o,i,a,s,c,u,l,p;return c=new wn({props:{lastGreenBar:15,lastRedBar:5,greenBar:250,redBar:210,numTrials:30}}),l=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="So, all together, the top of your screen will look something like:",r=k(),o=x("h1"),o.textContent="Day 23 of 30",i=k(),a=x("h1"),a.textContent="Month 2 of 6",s=k(),at(c.$$.fragment),u=k(),at(l.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio"),A(o,"class","points svelte-1d7ghio"),A(a,"class","points svelte-1d7ghio"),C(a,"left","calc(50vw - min(50vw, 50vh))")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),st(c,t,e),y(t,u,e),st(l,t,e),p=!0},p:t,i(t){p||(tt(c.$$.fragment,t),tt(l.$$.fragment,t),p=!0)},o(t){et(c.$$.fragment,t),et(l.$$.fragment,t),p=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),ct(c,t),t&&w(u),ct(l,t)}}}function ir(e){let n,r,o,i,a,s;return o=new En({props:{greenScore:380,greenScoreLast:300,numTrials:30}}),a=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="At the end of each month, you will be shown a screen giving your performance that month and the month before. This gives you a chance to \n    improve upon your score between months! If you improved upon your previous, you would see something like:",r=k(),at(o.$$.fragment),i=k(),at(a.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(o.$$.fragment,t),tt(a.$$.fragment,t),s=!0)},o(t){et(o.$$.fragment,t),et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),ct(a,t)}}}function ar(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Now that you've seen all the parts of the game, lets have you do a couple of rounds by yourself. The classroom understanding bar will be added into these trials.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function sr(t){let e,n;return e=new qt({props:{toNext:t[11],gameString:'"trial","previousExploit","keyPressTime","trialStartTime","choice","newExploit","exploreSeen","exploitBoardClear","newExploitBoard","newExploreVisible","newExploreDeselected","newExploreMove","exploreFinishedMoving","Block"\n',id:t[4],totalBlocks:0,block:0,numTrials:10,server:t[3]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};16&n&&(r.id=t[4]),8&n&&(r.server=t[3]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function cr(e){let n,r,o,i;return o=new ve({props:{nextInstruction:e[7],previousInstruction:e[8],backSkip:2}}),{c(){n=x("h1"),n.textContent="At this point you should have a firm understanding of the task. This task will go for 6 months of 30 days each. Remember to maximize your students' understanding, and good luck! To review any of the instructions click back, to continue to the task click next.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1d7ghio")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function ur(t){let e,n=t[2]()+"";return{c(){e=$(n)},m(t,n){y(t,e,n)},p(t,r){4&r&&n!==(n=t[2]()+"")&&N(e,n)},d(t){t&&w(e)}}}function lr(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,m,g,v,b,x,$,E,A,N,S,C,I,O,B,j,M,P,L,R,D,_,U,F=0===t[0]&&An(t),q=1===t[0]&&Nn(t),G=2===t[0]&&Sn(t),z=3===t[0]&&Cn(t),V=4===t[0]&&In(t),H=5===t[0]&&On(t),Y=6===t[0]&&Bn(t),X=7===t[0]&&jn(t),K=8===t[0]&&Mn(t),W=9===t[0]&&Pn(t),J=10===t[0]&&Ln(t),nt=11===t[0]&&Rn(t),rt=12===t[0]&&Dn(t),ot=13===t[0]&&_n(t),it=14===t[0]&&Fn(t),at=15===t[0]&&qn(t),st=16===t[0]&&zn(t),ct=17===t[0]&&Vn(t),ut=18===t[0]&&Yn(t),lt=19===t[0]&&Xn(t),pt=20===t[0]&&Kn(t),ft=21===t[0]&&Wn(t),ht=22===t[0]&&Jn(t),dt=23===t[0]&&Zn(t),mt=24===t[0]&&Qn(t),gt=25===t[0]&&tr(t),vt=26===t[0]&&er(t),yt=27===t[0]&&nr(t),wt=28===t[0]&&rr(t),bt=29===t[0]&&or(t),xt=30===t[0]&&ir(t),$t=31===t[0]&&ar(t),kt=32===t[0]&&sr(t),Tt=33===t[0]&&cr(t),Et=34===t[0]&&ur(t);return{c(){F&&F.c(),e=k(),q&&q.c(),n=k(),G&&G.c(),r=k(),z&&z.c(),o=k(),V&&V.c(),i=k(),H&&H.c(),a=k(),Y&&Y.c(),s=k(),X&&X.c(),c=k(),K&&K.c(),u=k(),W&&W.c(),l=k(),J&&J.c(),p=k(),nt&&nt.c(),f=k(),rt&&rt.c(),h=k(),ot&&ot.c(),d=k(),it&&it.c(),m=k(),at&&at.c(),g=k(),st&&st.c(),v=k(),ct&&ct.c(),b=k(),ut&&ut.c(),x=k(),lt&&lt.c(),$=k(),pt&&pt.c(),E=k(),ft&&ft.c(),A=k(),ht&&ht.c(),N=k(),dt&&dt.c(),S=k(),mt&&mt.c(),C=k(),gt&&gt.c(),I=k(),vt&&vt.c(),O=k(),yt&&yt.c(),B=k(),wt&&wt.c(),j=k(),bt&&bt.c(),M=k(),xt&&xt.c(),P=k(),$t&&$t.c(),L=k(),kt&&kt.c(),R=k(),Tt&&Tt.c(),D=k(),Et&&Et.c(),_=T()},m(t,w){F&&F.m(t,w),y(t,e,w),q&&q.m(t,w),y(t,n,w),G&&G.m(t,w),y(t,r,w),z&&z.m(t,w),y(t,o,w),V&&V.m(t,w),y(t,i,w),H&&H.m(t,w),y(t,a,w),Y&&Y.m(t,w),y(t,s,w),X&&X.m(t,w),y(t,c,w),K&&K.m(t,w),y(t,u,w),W&&W.m(t,w),y(t,l,w),J&&J.m(t,w),y(t,p,w),nt&&nt.m(t,w),y(t,f,w),rt&&rt.m(t,w),y(t,h,w),ot&&ot.m(t,w),y(t,d,w),it&&it.m(t,w),y(t,m,w),at&&at.m(t,w),y(t,g,w),st&&st.m(t,w),y(t,v,w),ct&&ct.m(t,w),y(t,b,w),ut&&ut.m(t,w),y(t,x,w),lt&&lt.m(t,w),y(t,$,w),pt&&pt.m(t,w),y(t,E,w),ft&&ft.m(t,w),y(t,A,w),ht&&ht.m(t,w),y(t,N,w),dt&&dt.m(t,w),y(t,S,w),mt&&mt.m(t,w),y(t,C,w),gt&&gt.m(t,w),y(t,I,w),vt&&vt.m(t,w),y(t,O,w),yt&&yt.m(t,w),y(t,B,w),wt&&wt.m(t,w),y(t,j,w),bt&&bt.m(t,w),y(t,M,w),xt&&xt.m(t,w),y(t,P,w),$t&&$t.m(t,w),y(t,L,w),kt&&kt.m(t,w),y(t,R,w),Tt&&Tt.m(t,w),y(t,D,w),Et&&Et.m(t,w),y(t,_,w),U=!0},p(t,[y]){0===t[0]?F?(F.p(t,y),1&y&&tt(F,1)):(F=An(t),F.c(),tt(F,1),F.m(e.parentNode,e)):F&&(Z(),et(F,1,1,(()=>{F=null})),Q()),1===t[0]?q?(q.p(t,y),1&y&&tt(q,1)):(q=Nn(t),q.c(),tt(q,1),q.m(n.parentNode,n)):q&&(Z(),et(q,1,1,(()=>{q=null})),Q()),2===t[0]?G?(G.p(t,y),1&y&&tt(G,1)):(G=Sn(t),G.c(),tt(G,1),G.m(r.parentNode,r)):G&&(Z(),et(G,1,1,(()=>{G=null})),Q()),3===t[0]?z?(z.p(t,y),1&y&&tt(z,1)):(z=Cn(t),z.c(),tt(z,1),z.m(o.parentNode,o)):z&&(Z(),et(z,1,1,(()=>{z=null})),Q()),4===t[0]?V?(V.p(t,y),1&y&&tt(V,1)):(V=In(t),V.c(),tt(V,1),V.m(i.parentNode,i)):V&&(Z(),et(V,1,1,(()=>{V=null})),Q()),5===t[0]?H?(H.p(t,y),1&y&&tt(H,1)):(H=On(t),H.c(),tt(H,1),H.m(a.parentNode,a)):H&&(Z(),et(H,1,1,(()=>{H=null})),Q()),6===t[0]?Y?(Y.p(t,y),1&y&&tt(Y,1)):(Y=Bn(t),Y.c(),tt(Y,1),Y.m(s.parentNode,s)):Y&&(Z(),et(Y,1,1,(()=>{Y=null})),Q()),7===t[0]?X?(X.p(t,y),1&y&&tt(X,1)):(X=jn(t),X.c(),tt(X,1),X.m(c.parentNode,c)):X&&(Z(),et(X,1,1,(()=>{X=null})),Q()),8===t[0]?K?(K.p(t,y),1&y&&tt(K,1)):(K=Mn(t),K.c(),tt(K,1),K.m(u.parentNode,u)):K&&(Z(),et(K,1,1,(()=>{K=null})),Q()),9===t[0]?W?(W.p(t,y),1&y&&tt(W,1)):(W=Pn(t),W.c(),tt(W,1),W.m(l.parentNode,l)):W&&(Z(),et(W,1,1,(()=>{W=null})),Q()),10===t[0]?J?(J.p(t,y),1&y&&tt(J,1)):(J=Ln(t),J.c(),tt(J,1),J.m(p.parentNode,p)):J&&(Z(),et(J,1,1,(()=>{J=null})),Q()),11===t[0]?nt?(nt.p(t,y),1&y&&tt(nt,1)):(nt=Rn(t),nt.c(),tt(nt,1),nt.m(f.parentNode,f)):nt&&(Z(),et(nt,1,1,(()=>{nt=null})),Q()),12===t[0]?rt?(rt.p(t,y),1&y&&tt(rt,1)):(rt=Dn(t),rt.c(),tt(rt,1),rt.m(h.parentNode,h)):rt&&(Z(),et(rt,1,1,(()=>{rt=null})),Q()),13===t[0]?ot?(ot.p(t,y),1&y&&tt(ot,1)):(ot=_n(t),ot.c(),tt(ot,1),ot.m(d.parentNode,d)):ot&&(Z(),et(ot,1,1,(()=>{ot=null})),Q()),14===t[0]?it?(it.p(t,y),1&y&&tt(it,1)):(it=Fn(t),it.c(),tt(it,1),it.m(m.parentNode,m)):it&&(Z(),et(it,1,1,(()=>{it=null})),Q()),15===t[0]?at?(at.p(t,y),1&y&&tt(at,1)):(at=qn(t),at.c(),tt(at,1),at.m(g.parentNode,g)):at&&(Z(),et(at,1,1,(()=>{at=null})),Q()),16===t[0]?st?(st.p(t,y),1&y&&tt(st,1)):(st=zn(t),st.c(),tt(st,1),st.m(v.parentNode,v)):st&&(Z(),et(st,1,1,(()=>{st=null})),Q()),17===t[0]?ct?(ct.p(t,y),1&y&&tt(ct,1)):(ct=Vn(t),ct.c(),tt(ct,1),ct.m(b.parentNode,b)):ct&&(Z(),et(ct,1,1,(()=>{ct=null})),Q()),18===t[0]?ut?(ut.p(t,y),1&y&&tt(ut,1)):(ut=Yn(t),ut.c(),tt(ut,1),ut.m(x.parentNode,x)):ut&&(Z(),et(ut,1,1,(()=>{ut=null})),Q()),19===t[0]?lt?(lt.p(t,y),1&y&&tt(lt,1)):(lt=Xn(t),lt.c(),tt(lt,1),lt.m($.parentNode,$)):lt&&(Z(),et(lt,1,1,(()=>{lt=null})),Q()),20===t[0]?pt?(pt.p(t,y),1&y&&tt(pt,1)):(pt=Kn(t),pt.c(),tt(pt,1),pt.m(E.parentNode,E)):pt&&(Z(),et(pt,1,1,(()=>{pt=null})),Q()),21===t[0]?ft?(ft.p(t,y),1&y&&tt(ft,1)):(ft=Wn(t),ft.c(),tt(ft,1),ft.m(A.parentNode,A)):ft&&(Z(),et(ft,1,1,(()=>{ft=null})),Q()),22===t[0]?ht?(ht.p(t,y),1&y&&tt(ht,1)):(ht=Jn(t),ht.c(),tt(ht,1),ht.m(N.parentNode,N)):ht&&(Z(),et(ht,1,1,(()=>{ht=null})),Q()),23===t[0]?dt?(dt.p(t,y),1&y&&tt(dt,1)):(dt=Zn(t),dt.c(),tt(dt,1),dt.m(S.parentNode,S)):dt&&(Z(),et(dt,1,1,(()=>{dt=null})),Q()),24===t[0]?mt?(mt.p(t,y),1&y&&tt(mt,1)):(mt=Qn(t),mt.c(),tt(mt,1),mt.m(C.parentNode,C)):mt&&(Z(),et(mt,1,1,(()=>{mt=null})),Q()),25===t[0]?gt?(gt.p(t,y),1&y&&tt(gt,1)):(gt=tr(t),gt.c(),tt(gt,1),gt.m(I.parentNode,I)):gt&&(Z(),et(gt,1,1,(()=>{gt=null})),Q()),26===t[0]?vt?(vt.p(t,y),1&y&&tt(vt,1)):(vt=er(t),vt.c(),tt(vt,1),vt.m(O.parentNode,O)):vt&&(Z(),et(vt,1,1,(()=>{vt=null})),Q()),27===t[0]?yt?(yt.p(t,y),1&y&&tt(yt,1)):(yt=nr(t),yt.c(),tt(yt,1),yt.m(B.parentNode,B)):yt&&(Z(),et(yt,1,1,(()=>{yt=null})),Q()),28===t[0]?wt?(wt.p(t,y),1&y&&tt(wt,1)):(wt=rr(t),wt.c(),tt(wt,1),wt.m(j.parentNode,j)):wt&&(Z(),et(wt,1,1,(()=>{wt=null})),Q()),29===t[0]?bt?(bt.p(t,y),1&y&&tt(bt,1)):(bt=or(t),bt.c(),tt(bt,1),bt.m(M.parentNode,M)):bt&&(Z(),et(bt,1,1,(()=>{bt=null})),Q()),30===t[0]?xt?(xt.p(t,y),1&y&&tt(xt,1)):(xt=ir(t),xt.c(),tt(xt,1),xt.m(P.parentNode,P)):xt&&(Z(),et(xt,1,1,(()=>{xt=null})),Q()),31===t[0]?$t?($t.p(t,y),1&y&&tt($t,1)):($t=ar(t),$t.c(),tt($t,1),$t.m(L.parentNode,L)):$t&&(Z(),et($t,1,1,(()=>{$t=null})),Q()),32===t[0]?kt?(kt.p(t,y),1&y&&tt(kt,1)):(kt=sr(t),kt.c(),tt(kt,1),kt.m(R.parentNode,R)):kt&&(Z(),et(kt,1,1,(()=>{kt=null})),Q()),33===t[0]?Tt?(Tt.p(t,y),1&y&&tt(Tt,1)):(Tt=cr(t),Tt.c(),tt(Tt,1),Tt.m(D.parentNode,D)):Tt&&(Z(),et(Tt,1,1,(()=>{Tt=null})),Q()),34===t[0]?Et?Et.p(t,y):(Et=ur(t),Et.c(),Et.m(_.parentNode,_)):Et&&(Et.d(1),Et=null)},i(t){U||(tt(F),tt(q),tt(G),tt(z),tt(V),tt(H),tt(Y),tt(X),tt(K),tt(W),tt(J),tt(nt),tt(rt),tt(ot),tt(it),tt(at),tt(st),tt(ct),tt(ut),tt(lt),tt(pt),tt(ft),tt(ht),tt(dt),tt(mt),tt(gt),tt(vt),tt(yt),tt(wt),tt(bt),tt(xt),tt($t),tt(kt),tt(Tt),U=!0)},o(t){et(F),et(q),et(G),et(z),et(V),et(H),et(Y),et(X),et(K),et(W),et(J),et(nt),et(rt),et(ot),et(it),et(at),et(st),et(ct),et(ut),et(lt),et(pt),et(ft),et(ht),et(dt),et(mt),et(gt),et(vt),et(yt),et(wt),et(bt),et(xt),et($t),et(kt),et(Tt),U=!1},d(t){F&&F.d(t),t&&w(e),q&&q.d(t),t&&w(n),G&&G.d(t),t&&w(r),z&&z.d(t),t&&w(o),V&&V.d(t),t&&w(i),H&&H.d(t),t&&w(a),Y&&Y.d(t),t&&w(s),X&&X.d(t),t&&w(c),K&&K.d(t),t&&w(u),W&&W.d(t),t&&w(l),J&&J.d(t),t&&w(p),nt&&nt.d(t),t&&w(f),rt&&rt.d(t),t&&w(h),ot&&ot.d(t),t&&w(d),it&&it.d(t),t&&w(m),at&&at.d(t),t&&w(g),st&&st.d(t),t&&w(v),ct&&ct.d(t),t&&w(b),ut&&ut.d(t),t&&w(x),lt&&lt.d(t),t&&w($),pt&&pt.d(t),t&&w(E),ft&&ft.d(t),t&&w(A),ht&&ht.d(t),t&&w(N),dt&&dt.d(t),t&&w(S),mt&&mt.d(t),t&&w(C),gt&&gt.d(t),t&&w(I),vt&&vt.d(t),t&&w(O),yt&&yt.d(t),t&&w(B),wt&&wt.d(t),t&&w(j),bt&&bt.d(t),t&&w(M),xt&&xt.d(t),t&&w(P),$t&&$t.d(t),t&&w(L),kt&&kt.d(t),t&&w(R),Tt&&Tt.d(t),t&&w(D),Et&&Et.d(t),t&&w(_)}}}function pr(t,e,n){let{toGame:r}=e,{i:o=0}=e,{breakTruth:i={truth:!1}}=e,{getData:a}=e,{server:s}=e,{id:c}=e,u=0,l="";async function p(){await async function(t){return await new Promise((e=>setTimeout(e,t)))}(3e3),n(0,o+=1)}return t.$$set=t=>{"toGame"in t&&n(2,r=t.toGame),"i"in t&&n(0,o=t.i),"breakTruth"in t&&n(1,i=t.breakTruth),"getData"in t&&n(12,a=t.getData),"server"in t&&n(3,s=t.server),"id"in t&&n(4,c=t.id)},t.$$.update=()=>{57&t.$$.dirty&&4===o&&(console.log("Sending Response..."),(async()=>{console.log("Successfully sent to server: "+String(await s.writeFile("teacher",`TeacherResponse_${c}.txt`,l)))})()),1&t.$$.dirty&&25===o&&p()},[o,i,r,s,c,l,u,function(t){n(0,o+=t="number"!=typeof t?1:t)},function(t){n(0,o-=t="number"!=typeof t?1:t)},function(){n(6,u+=1)},function(t){n(1,i.truth=t,i)},async function(t){(async()=>{console.log("Successfully sent to server: "+String(await s.writeFile("teacher",`TeacherCSV_${c}.csv`,t)))})(),a(t),n(0,o+=1)},a,function(){l=this.value,n(5,l)}]}class fr extends pt{constructor(t){super(),lt(this,t,pr,lr,a,{toGame:2,i:0,breakTruth:1,getData:12,server:3,id:4})}}function hr(t){let e;function n(t,e){return t[1]&&t[2]?gr:t[1]?mr:dr}let r=n(t),o=r(t);return{c(){o.c(),e=T()},m(t,n){o.m(t,n),y(t,e,n)},p(t,i){r===(r=n(t))&&o?o.p(t,i):(o.d(1),o=r(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&w(e)}}}function dr(t){let e,n,r;return{c(){e=x("button"),e.textContent="Back",A(e,"class","buttonCover svelte-19o8qku"),C(e,"left","0vw")},m(o,a){y(o,e,a),n||(r=E(e,"click",(function(){i(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,r()}}}function mr(t){let e,n,r;return{c(){e=x("button"),e.textContent="Next",A(e,"class","buttonCover svelte-19o8qku"),C(e,"left","95vw")},m(o,a){y(o,e,a),n||(r=E(e,"click",(function(){i(t[1](t[5]))&&t[1](t[5]).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,r()}}}function gr(t){let e,n,r,a,s,c,u,l=t[3]&&vr(t);return{c(){e=x("button"),e.textContent="Back",n=k(),r=x("button"),r.textContent="Next",a=k(),l&&l.c(),s=T(),A(e,"class","buttonCover svelte-19o8qku"),C(e,"left","0vw"),A(r,"class","buttonCover svelte-19o8qku"),C(r,"left","95vw")},m(o,p){y(o,e,p),y(o,n,p),y(o,r,p),y(o,a,p),l&&l.m(o,p),y(o,s,p),c||(u=[E(e,"click",(function(){i(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)})),E(r,"click",(function(){i(t[1](t[5]))&&t[1](t[5]).apply(this,arguments)}))],c=!0)},p(e,n){(t=e)[3]?l?l.p(t,n):(l=vr(t),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(t){t&&w(e),t&&w(n),t&&w(r),t&&w(a),l&&l.d(t),t&&w(s),c=!1,o(u)}}}function vr(t){let e,n,r;return{c(){e=x("button"),e.textContent="Replay Animation",A(e,"class","buttonCover svelte-19o8qku"),C(e,"left","calc(50vw - 10vw)"),C(e,"top","80vh"),C(e,"height","5vh"),C(e,"width","20vw")},m(o,a){y(o,e,a),n||(r=E(e,"click",(function(){i(t[3]())&&t[3]().apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,r()}}}function yr(e){let n,r=!e[0].truth&&e[6]&&hr(e);return{c(){r&&r.c(),n=T()},m(t,e){r&&r.m(t,e),y(t,n,e)},p(t,[e]){!t[0].truth&&t[6]?r?r.p(t,e):(r=hr(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&w(n)}}}function wr(t,e,n){let{breakTruth:r={truth:!1}}=e,{nextInstruction:o=null}=e,{previousInstruction:i=null}=e,{replayAnimation:a=null}=e,{backSkip:s=1}=e,{forwardSkip:c=1}=e,{display:u=!0}=e;return t.$$set=t=>{"breakTruth"in t&&n(0,r=t.breakTruth),"nextInstruction"in t&&n(1,o=t.nextInstruction),"previousInstruction"in t&&n(2,i=t.previousInstruction),"replayAnimation"in t&&n(3,a=t.replayAnimation),"backSkip"in t&&n(4,s=t.backSkip),"forwardSkip"in t&&n(5,c=t.forwardSkip),"display"in t&&n(6,u=t.display)},[r,o,i,a,s,c,u]}class br extends pt{constructor(t){super(),lt(this,t,wr,yr,a,{breakTruth:0,nextInstruction:1,previousInstruction:2,replayAnimation:3,backSkip:4,forwardSkip:5,display:6})}}function xr(t,e,n){const r=t.slice();return r[36]=e[n],r}function $r(t){let e,n,r,o,i=Math.round(t[9]/20*100)+"";return{c(){e=x("h1"),n=$("Current Classroom Understanding: "),r=$(i),o=$("%"),C(e,"position","absolute"),C(e,"top","0vh"),C(e,"left","calc(50vw + -400px)"),C(e,"width","800px"),C(e,"height","50px"),C(e,"text-align","center"),C(e,"border","solid black 2px")},m(t,i){y(t,e,i),m(e,n),m(e,r),m(e,o)},p(t,e){512&e[0]&&i!==(i=Math.round(t[9]/20*100)+"")&&N(r,i)},d(t){t&&w(e)}}}function kr(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g,v;const b=[Ar,Er],$=[];function T(t,e){return t[1]?0:1}return c=T(t),u=$[c]=b[c](t),{c(){e=x("div"),n=x("h1"),n.textContent="New Teaching Move",r=k(),o=x("div"),i=k(),a=x("button"),s=x("div"),u.c(),h=k(),A(n,"class","teachingMoves svelte-1a0zt5v"),A(o,"class","blueLight svelte-1a0zt5v"),C(o,"opacity",t[3]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),C(s,"left","-.1vw"),A(a,"class","greyBox svelte-1a0zt5v"),A(a,"id",l=`box2: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw + min(5vw, 5vh))"),C(e,"top","min(30vh,30vw)")},m(u,l){y(u,e,l),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),$[c].m(s,null),m(e,h),d=!0,g||(v=E(a,"click",t[29]),g=!0)},p(e,n){t=e,(!d||8&n[0])&&C(o,"opacity",t[3]?"1":"0");let r=c;c=T(t),c===r?$[c].p(t,n):(Z(),et($[r],1,1,(()=>{$[r]=null})),Q(),u=$[c],u?u.p(t,n):(u=$[c]=b[c](t),u.c()),tt(u,1),u.m(s,null)),(!d||1&n[0]&&l!==(l=`box2: ${t[0]}`))&&A(a,"id",l)},i(e){d||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[12],{replaceExploit:t[5]}),p.start()})),d=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[15],{replaceExploit:t[5]}),d=!1},d(t){t&&w(e),$[c].d(),t&&f&&f.end(),g=!1,v()}}}function Tr(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g,v;const b=[Sr,Nr],$=[];function T(t,e){return t[6]?1:0}return c=T(t),u=$[c]=b[c](t),{c(){e=x("div"),n=x("h1"),n.textContent="Current Teaching Move",r=k(),o=x("div"),i=k(),a=x("button"),s=x("div"),u.c(),h=k(),A(n,"class","teachingMoves svelte-1a0zt5v"),A(o,"class","blueLight svelte-1a0zt5v"),C(o,"opacity",t[4]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),C(s,"left","-.1vw"),A(a,"class","greyBox svelte-1a0zt5v"),A(a,"id",l=`box1: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw - min(45vw, 45vh))"),C(e,"top","min(30vh,30vw)")},m(u,l){y(u,e,l),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),$[c].m(s,null),m(e,h),d=!0,g||(v=E(a,"click",t[28]),g=!0)},p(e,n){t=e,(!d||16&n[0])&&C(o,"opacity",t[4]?"1":"0");let r=c;c=T(t),c===r?$[c].p(t,n):(Z(),et($[r],1,1,(()=>{$[r]=null})),Q(),u=$[c],u?u.p(t,n):(u=$[c]=b[c](t),u.c()),tt(u,1),u.m(s,null)),(!d||1&n[0]&&l!==(l=`box1: ${t[0]}`))&&A(a,"id",l)},i(e){d||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[13],{replaceExploit:t[5]}),p.start()})),d=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[14],{replaceExploit:t[5]}),d=!1},d(t){t&&w(e),$[c].d(),t&&f&&f.end(),g=!1,v()}}}function Er(e){let n;return{c(){n=x("div"),n.textContent="?",C(n,"width","min(40vh,40vw)"),C(n,"height","min(40vh,40vw)"),C(n,"text-align","center"),C(n,"font-size","min(20vh,20vw)"),C(n,"top","min(5vh,5vw)"),C(n,"position","absolute")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function Ar(t){let e,n;return e=new wt({props:{numberGreen:t[7]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};128&n[0]&&(r.numberGreen=t[7]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Nr(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Sr(t){let e,n;return e=new wt({props:{numberGreen:t[2]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};4&n[0]&&(r.numberGreen=t[2]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Cr(t){let e,n,r,o;const i=[Tr,kr],a=[];return e=function(t,e){return 0==t[36]?0:1}(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function Ir(t){let e,n,r,o=t[8]&&$r(t),i=t[10],a=[];for(let e=0;e<i.length;e+=1)a[e]=Cr(xr(t,i,e));const s=t=>et(a[t],1,1,(()=>{a[t]=null}));return{c(){o&&o.c(),e=k();for(let t=0;t<a.length;t+=1)a[t].c();n=T()},m(t,i){o&&o.m(t,i),y(t,e,i);for(let e=0;e<a.length;e+=1)a[e].m(t,i);y(t,n,i),r=!0},p(t,r){if(t[8]?o?o.p(t,r):(o=$r(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),3327&r[0]){let e;for(i=t[10],e=0;e<i.length;e+=1){const o=xr(t,i,e);a[e]?(a[e].p(o,r),tt(a[e],1)):(a[e]=Cr(o),a[e].c(),tt(a[e],1),a[e].m(n.parentNode,n))}for(Z(),e=i.length;e<a.length;e+=1)s(e);Q()}},i(t){if(!r){for(let t=0;t<i.length;t+=1)tt(a[t]);r=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)et(a[t]);r=!1},d(t){o&&o.d(t),t&&w(e),b(a,t),t&&w(n)}}}function Or(e){let n,r,o=e[0],i=Ir(e);return{c(){i.c(),n=T()},m(t,e){i.m(t,e),y(t,n,e),r=!0},p(e,r){1&r[0]&&a(o,o=e[0])?(Z(),et(i,1,1,t),Q(),i=Ir(e),i.c(),tt(i),i.m(n.parentNode,n)):i.p(e,r)},i(t){r||(tt(i),r=!0)},o(t){et(i),r=!1},d(t){t&&w(n),i.d(t)}}}async function Br(t){return await new Promise((e=>setTimeout(e,t)))}function jr(t,e,n){let{breakNav:r}=e,{counter:o=0}=e;let i=[...Array(2).keys()],{delayGoodExplore:a=!1}=e,{delayBadExplore:s=!1}=e,{delayExploit:c=!1}=e,{viewExplore:u=!1}=e,{exploitMu:l=12}=e,{exploreMu:p=5}=e,{exploitMu2:f=14}=e,{exploreSelect:h=!1}=e,{exploitSelect:d=!1}=e,{replaceExploit:m={truth:!0}}=e,{clearBoard:g=!1}=e,{bothInvisible:v={truth:!0}}=e,{keyDisplay:y=!1}=e,{noReplaceExplore:w=!1}=e,{pointCounter:b=!1}=e,{points:x=14}=e,{delayTime:$=1e3}=e,{nextButton:k=null}=e,{nextInstruction:T=null}=e,E=!1;function A(t){k!=t||E||(E=!0,T())}a&&async function(){r(!0),await Br($),n(16,v={truth:!1}),n(1,u=!0),n(3,h=!0),await Br(500),n(3,h=!1),await Br(1e3),n(2,l=p),n(1,u=!1),n(5,m.truth=!0,m),n(0,o+=1),await Br(500),r(!1),n(16,v={truth:!0})}(),s&&async function(){r(!0),await Br($),n(16,v={truth:!1}),n(1,u=!0),n(3,h=!0),await Br(500),n(3,h=!1),await Br(1e3),n(1,u=!1),n(5,m.truth=!1,m),n(0,o+=1),await Br(500),r(!1),n(16,v={truth:!0})}(),c&&async function(){r(!0),await Br($),n(4,d=!0),n(16,v={truth:!1}),await Br(500),n(6,g=!0),n(4,d=!1),await Br(1e3),n(6,g=!1),n(2,l=f),n(0,o+=1),r(!1),n(16,v={truth:!0})}();return t.$$set=t=>{"breakNav"in t&&n(17,r=t.breakNav),"counter"in t&&n(0,o=t.counter),"delayGoodExplore"in t&&n(19,a=t.delayGoodExplore),"delayBadExplore"in t&&n(20,s=t.delayBadExplore),"delayExploit"in t&&n(21,c=t.delayExploit),"viewExplore"in t&&n(1,u=t.viewExplore),"exploitMu"in t&&n(2,l=t.exploitMu),"exploreMu"in t&&n(7,p=t.exploreMu),"exploitMu2"in t&&n(22,f=t.exploitMu2),"exploreSelect"in t&&n(3,h=t.exploreSelect),"exploitSelect"in t&&n(4,d=t.exploitSelect),"replaceExploit"in t&&n(5,m=t.replaceExploit),"clearBoard"in t&&n(6,g=t.clearBoard),"bothInvisible"in t&&n(16,v=t.bothInvisible),"keyDisplay"in t&&n(23,y=t.keyDisplay),"noReplaceExplore"in t&&n(24,w=t.noReplaceExplore),"pointCounter"in t&&n(8,b=t.pointCounter),"points"in t&&n(9,x=t.points),"delayTime"in t&&n(25,$=t.delayTime),"nextButton"in t&&n(26,k=t.nextButton),"nextInstruction"in t&&n(27,T=t.nextInstruction)},[o,u,l,h,d,m,g,p,b,x,i,A,function(t,{delay:e=0,duration:n=500}){return v.truth?{delay:0,duration:0}:{delay:e,duration:n,css:(t,e)=>`transform: translateX(calc(${100*e}vw)) `}},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return v.truth?{delay:0,duration:0}:e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(min(${50*e}vw,${50*e}vh)) `}:{}},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return v.truth?{delay:0,duration:0}:e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(calc(${-100*e}vw)) `}:{}},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return v.truth?{delay:0,duration:0}:e.truth?{css:()=>"visibility: hidden;display: none;"}:{delay:n,duration:r,css:(t,e)=>`transform: translateY(calc(${100*e}vh)) `}},v,r,2,a,s,c,f,y,w,$,k,T,()=>{A("left")},()=>{A("right")}]}class Mr extends pt{constructor(t){super(),lt(this,t,jr,Or,a,{breakNav:17,counter:0,viewNumber:18,delayGoodExplore:19,delayBadExplore:20,delayExploit:21,viewExplore:1,exploitMu:2,exploreMu:7,exploitMu2:22,exploreSelect:3,exploitSelect:4,replaceExploit:5,clearBoard:6,bothInvisible:16,keyDisplay:23,noReplaceExplore:24,pointCounter:8,points:9,delayTime:25,nextButton:26,nextInstruction:27},null,[-1,-1])}get viewNumber(){return this.$$.ctx[18]}}function Pr(t,e,n){const r=t.slice();return r[31]=e[n],r}function Lr(e){let n,r,o,i=e[3],s=e[0],c=Rr(e),u=Hr(e);return{c(){c.c(),n=k(),u.c(),r=T()},m(t,e){c.m(t,e),y(t,n,e),u.m(t,e),y(t,r,e),o=!0},p(e,o){8&o[0]&&a(i,i=e[3])?(c.d(1),c=Rr(e),c.c(),c.m(n.parentNode,n)):c.p(e,o),1&o[0]&&a(s,s=e[0])?(Z(),et(u,1,1,t),Q(),u=Hr(e),u.c(),tt(u),u.m(r.parentNode,r)):u.p(e,o)},i(t){o||(tt(u),o=!0)},o(t){et(u),o=!1},d(t){c.d(t),t&&w(n),t&&w(r),u.d(t)}}}function Rr(t){let e,n,r=t[1][t[3]-1]+"";return{c(){e=x("h1"),n=$(r),A(e,"class","descriptionText svelte-q6nahy")},m(t,r){y(t,e,r),m(e,n)},p(t,e){10&e[0]&&r!==(r=t[1][t[3]-1]+"")&&N(n,r)},d(t){t&&w(e)}}}function Dr(t){let e,n,r,o;const i=[Ur,_r],a=[];return e=function(t,e){return 0==t[31]?0:1}(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function _r(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g,v;const b=[qr,Fr],$=[];function T(t,e){return t[4]?0:1}return c=T(t),u=$[c]=b[c](t),{c(){e=x("div"),n=x("h1"),n.textContent="New Teaching Move",r=k(),o=x("div"),i=k(),a=x("button"),s=x("div"),u.c(),h=k(),A(n,"class","teachingMoves svelte-q6nahy"),A(o,"class","blueLight svelte-q6nahy"),C(o,"opacity",t[7]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),C(s,"left","-.1vw"),A(a,"class","greyBox svelte-q6nahy"),A(a,"id",l=`box2: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw + min(5vw, 5vh))"),C(e,"top","min(30vh,30vw)")},m(u,l){y(u,e,l),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),$[c].m(s,null),m(e,h),d=!0,g||(v=E(a,"click",t[22]),g=!0)},p(e,n){t=e,(!d||128&n[0])&&C(o,"opacity",t[7]?"1":"0");let r=c;c=T(t),c===r?$[c].p(t,n):(Z(),et($[r],1,1,(()=>{$[r]=null})),Q(),u=$[c],u?u.p(t,n):(u=$[c]=b[c](t),u.c()),tt(u,1),u.m(s,null)),(!d||1&n[0]&&l!==(l=`box2: ${t[0]}`))&&A(a,"id",l)},i(e){d||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[12],{replaceExploit:t[9]}),p.start()})),d=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[15],{replaceExploit:t[9]}),d=!1},d(t){t&&w(e),$[c].d(),t&&f&&f.end(),g=!1,v()}}}function Ur(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,g,v;const b=[zr,Gr],$=[];function T(t,e){return t[10]?1:0}return c=T(t),u=$[c]=b[c](t),{c(){e=x("div"),n=x("h1"),n.textContent="Current Teaching Move",r=k(),o=x("div"),i=k(),a=x("button"),s=x("div"),u.c(),h=k(),A(n,"class","teachingMoves svelte-q6nahy"),A(o,"class","blueLight svelte-q6nahy"),C(o,"opacity",t[8]?"1":"0"),C(s,"top","0px"),C(s,"position","absolute"),C(s,"left","-.1vw"),A(a,"class","greyBox svelte-q6nahy"),A(a,"id",l=`box1: ${t[0]}`),C(e,"position","absolute"),C(e,"left","calc(50vw - min(45vw, 45vh))"),C(e,"top","min(30vh,30vw)")},m(u,l){y(u,e,l),m(e,n),m(e,r),m(e,o),m(e,i),m(e,a),m(a,s),$[c].m(s,null),m(e,h),d=!0,g||(v=E(a,"click",t[21]),g=!0)},p(e,n){t=e,(!d||256&n[0])&&C(o,"opacity",t[8]?"1":"0");let r=c;c=T(t),c===r?$[c].p(t,n):(Z(),et($[r],1,1,(()=>{$[r]=null})),Q(),u=$[c],u?u.p(t,n):(u=$[c]=b[c](t),u.c()),tt(u,1),u.m(s,null)),(!d||1&n[0]&&l!==(l=`box1: ${t[0]}`))&&A(a,"id",l)},i(e){d||(tt(u),q((()=>{f&&f.end(1),p=rt(a,t[13],{replaceExploit:t[9]}),p.start()})),d=!0)},o(e){et(u),p&&p.invalidate(),f=ot(a,t[14],{replaceExploit:t[9]}),d=!1},d(t){t&&w(e),$[c].d(),t&&f&&f.end(),g=!1,v()}}}function Fr(e){let n;return{c(){n=x("div"),n.textContent="?",C(n,"width","min(40vh,40vw)"),C(n,"height","min(40vh,40vw)"),C(n,"text-align","center"),C(n,"font-size","min(20vh,20vw)"),C(n,"top","min(5vh,5vw)"),C(n,"position","absolute")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function qr(t){let e,n;return e=new wt({props:{numberGreen:t[6]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};64&n[0]&&(r.numberGreen=t[6]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Gr(e){let n,r;return n=new wt({props:{numberGreen:0,clearBoard:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function zr(t){let e,n;return e=new wt({props:{numberGreen:t[5]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};32&n[0]&&(r.numberGreen=t[5]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Vr(t){let e,n,r=t[0]<Xr+1&&Dr(t);return{c(){r&&r.c(),e=T()},m(t,o){r&&r.m(t,o),y(t,e,o),n=!0},p(t,n){t[0]<Xr+1?r?(r.p(t,n),1&n[0]&&tt(r,1)):(r=Dr(t),r.c(),tt(r,1),r.m(e.parentNode,e)):r&&(Z(),et(r,1,1,(()=>{r=null})),Q())},i(t){n||(tt(r),n=!0)},o(t){et(r),n=!1},d(t){r&&r.d(t),t&&w(e)}}}function Hr(t){let e,n,r=t[11],o=[];for(let e=0;e<r.length;e+=1)o[e]=Vr(Pr(t,r,e));const i=t=>et(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=T()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);y(t,e,r),n=!0},p(t,n){if(69617&n[0]){let a;for(r=t[11],a=0;a<r.length;a+=1){const i=Pr(t,r,a);o[a]?(o[a].p(i,n),tt(o[a],1)):(o[a]=Vr(i),o[a].c(),tt(o[a],1),o[a].m(e.parentNode,e))}for(Z(),a=r.length;a<o.length;a+=1)i(a);Q()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)tt(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)et(o[t]);n=!1},d(t){b(o,t),t&&w(e)}}}function Yr(t){let e,n,r=!t[2].truth&&Lr(t);return{c(){r&&r.c(),e=T()},m(t,o){r&&r.m(t,o),y(t,e,o),n=!0},p(t,n){t[2].truth?r&&(Z(),et(r,1,1,(()=>{r=null})),Q()):r?(r.p(t,n),4&n[0]&&tt(r,1)):(r=Lr(t),r.c(),tt(r,1),r.m(e.parentNode,e))},i(t){n||(tt(r),n=!0)},o(t){et(r),n=!1},d(t){r&&r.d(t),t&&w(e)}}}let Xr=4;async function Kr(t){return await new Promise((e=>setTimeout(e,t)))}function Wr(t,e){return e*function(){for(var t=0,e=0;0===t;)t=Math.random();for(;0===e;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}()+t}function Jr(){return Math.floor(20*Math.random())}function Zr(t,e,n){let{counter:r=0}=e;let{gameString:o=""}=e,i=1,a=[...Array(2).keys()],s=Date.now(),c=!1,u=15,l=Jr(),p=!1,f=!1,h={truth:!1},d=!0,m=!1,g=0,v=0,{trialDescriptions:y=[]}=e,{toNext:w}=e,{bothInvisible:b=!0}=e,{breakTruth:x={truth:!1}}=e;async function $(t){if(0!=d){if(console.log(t),i.toString(),Date.now(),n(17,b=!1),"left"==t){v+=g,g=0,d=!1;let t=function(){let t=Math.floor(Wr(u,3));return t=Math.min(t,20),t=Math.max(t,0),t}();n(8,f=!0),await Kr(500),n(8,f=!1),n(10,m=!0),await Kr(1e3),n(5,u=t),g=t,n(10,m=!1),d=!0,s=Date.now(),n(3,i+=1),console.log("done")}if("right"==t){n(4,c=!0);let t=Jr();v+=g,g=0,t>u?(console.log("greater than"),d=!1,n(6,l=t),n(7,p=!0),await Kr(500),n(7,p=!1),await Kr(500),n(5,u=t),n(4,c=!1),n(9,h.truth=!0,h),n(0,r+=1),await Kr(500),g=t,d=!0,s=Date.now(),n(3,i+=1)):(console.log("less than"),d=!1,n(6,l=t),n(7,p=!0),await Kr(500),n(7,p=!1),await Kr(500),n(4,c=!1),n(9,h.truth=!1,h),n(0,r+=1),await Kr(500),g=t,d=!0,s=Date.now(),n(3,i+=1))}n(17,b=i===Xr+1),i===Xr+1&&(d=!1,await Kr(1200),w(o,v+g))}}return t.$$set=t=>{"counter"in t&&n(0,r=t.counter),"gameString"in t&&n(19,o=t.gameString),"trialDescriptions"in t&&n(1,y=t.trialDescriptions),"toNext"in t&&n(20,w=t.toNext),"bothInvisible"in t&&n(17,b=t.bothInvisible),"breakTruth"in t&&n(2,x=t.breakTruth)},[r,y,x,i,c,u,l,p,f,h,m,a,function(t,{delay:e=0,duration:n=500}){return b?{delay:0,duration:0}:(console.log("migrateLeftExplore:true"),{delay:e,duration:n,css:(t,e)=>`transform: translateX(calc(${100*e}vw)) `})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return b?{delay:0,duration:0}:(console.log(`migrateLeftExploit:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(min(${50*e}vw,${50*e}vh)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return b?{delay:0,duration:0}:(console.log(`migrateOut:${e}`),e.truth?{delay:n,duration:r,css:(t,e)=>`transform: translateX(calc(${-100*e}vw)) `}:{})},function(t,{replaceExploit:e,delay:n=0,duration:r=500}){return b?{delay:0,duration:0}:(console.log(`invisibleOrDown:${e}`),e.truth?{css:()=>"visibility: hidden;display: none;"}:{delay:n,duration:r,css:(t,e)=>`transform: translateY(calc(${100*e}vh)) `})},$,b,2,o,w,()=>{$("left")},()=>{$("right")}]}class Qr extends pt{constructor(t){super(),lt(this,t,Zr,Yr,a,{counter:0,viewNumber:18,gameString:19,trialDescriptions:1,toNext:20,bothInvisible:17,breakTruth:2},null,[-1,-1])}get viewNumber(){return this.$$.ctx[18]}}function to(e){let n,r;return n=new Fe({props:{nextInstruction:e[7]}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function eo(e){let n,r,o,i,a,s;return a=new br({props:{nextInstruction:e[7]}}),{c(){n=x("h1"),n.innerHTML="The <br/>Teaching Task",r=k(),o=x("h1"),o.textContent="Click Next to Start the Task",i=k(),at(a.$$.fragment),A(n,"class","titleText svelte-1pstvsj"),C(o,"top","70vh"),C(o,"width","min(60vw,60vh)"),C(o,"left","calc(50vw - min(20vw,20vh))"),C(o,"position","absolute"),C(o,"font-size","min(3vh,3vw)")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(a.$$.fragment,t),s=!0)},o(t){et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),ct(a,t)}}}function no(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="For this experiment, you will play a teaching task.  Please read through these instructions carefully.\n         Remember that this is an important part of our study. Please give this task adequate time and effort, and try to get the best results.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function ro(t){let e,n,r,o,i,a,s,c;return i=new br({props:{nextInstruction:t[7],previousInstruction:t[8]}}),{c(){e=x("h1"),e.textContent="To start off, we want you to take a moment to think about and describe your current math warm up in 1 or 2 sentences.",n=k(),r=x("textarea"),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1pstvsj"),A(r,"rows","4"),A(r,"wrap","soft"),A(r,"placeholder","Input description here..."),A(r,"class","textBox svelte-1pstvsj")},m(u,l){y(u,e,l),y(u,n,l),y(u,r,l),S(r,t[6]),y(u,o,l),st(i,u,l),a=!0,s||(c=E(r,"input",t[13]),s=!0)},p(t,e){64&e&&S(r,t[6])},i(t){a||(tt(i.$$.fragment,t),a=!0)},o(t){et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),t&&w(r),t&&w(o),ct(i,t),s=!1,c()}}}function oo(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Now, we want you to imagine that your math coach or colleague has suggested a new approach for your math warm up.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function io(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="In this experiment  - the teaching task - we would like you to choose between two teaching approaches for your math warm up, (1) your current math warm up that seems to be working well or (2) the “new” suggested approach for your math warm up.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function ao(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="For the purposes of this task, we will keep the teaching approaches generic (“current” approach or “new” approach by the coach) but we want you to imagine what those approaches might be (i.e. starting with a group problem, a quick review worksheet, calendar time, or a math discussion).",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function so(e){let n,r,o,i,a,s,u,l,p,f,h;return f=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="To get feedback on how well the approach worked, your students will display a red light or green light to show their understanding.",r=k(),o=x("div"),i=k(),a=x("h1"),a.textContent="How much did you understand?",s=k(),u=x("img"),p=k(),at(f.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj"),A(o,"class","imageBox svelte-1pstvsj"),A(a,"class","imageText svelte-1pstvsj"),A(u,"class","imageScale svelte-1pstvsj"),c(u.src,l="https://cdn.vox-cdn.com/thumbor/8XjPCHo_W0zCH1YDoR3ST3cN51E=/0x0:6720x4480/920x613/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/64906829/f9c5667541.0.jpeg")||A(u,"src","https://cdn.vox-cdn.com/thumbor/8XjPCHo_W0zCH1YDoR3ST3cN51E=/0x0:6720x4480/920x613/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/64906829/f9c5667541.0.jpeg"),A(u,"alt","temp")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),y(t,u,e),y(t,p,e),st(f,t,e),h=!0},p:t,i(t){h||(tt(f.$$.fragment,t),h=!0)},o(t){et(f.$$.fragment,t),h=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),t&&w(u),t&&w(p),ct(f,t)}}}function co(e){let n,r,o,i,a,s,c,u,l,p,f,h,d,m,g,v;return g=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="The response of a student holding up a red or green card after being asked might be like:",r=k(),o=x("div"),i=k(),a=x("h1"),a.textContent="How much did you understand?",s=k(),c=x("div"),c.innerHTML='<h1 style="top:50%;left50%;height:20%;width:20%;margin:0% 25%">R</h1>',u=k(),l=x("div"),l.innerHTML='<h1 style="top:50%;left50%;height:20%;width:20%;margin:2% 20%">G</h1>',p=k(),f=x("h1"),f.textContent="I do not get it! This did not help me.",h=k(),d=x("h1"),d.textContent="I understand!\n            I am happy with how this went.",m=k(),at(g.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj"),A(o,"class","imageBox svelte-1pstvsj"),A(a,"class","imageText svelte-1pstvsj"),A(c,"class","redGreenBall svelte-1pstvsj"),C(c,"background-color","red"),C(c,"top","min(31vh,31vw)"),A(l,"class","redGreenBall svelte-1pstvsj"),C(l,"background-color","green"),C(l,"top","min(51vh,51vw)"),A(f,"class","understandBox svelte-1pstvsj"),C(f,"top","min(30vh,30vw)"),A(d,"class","understandBox svelte-1pstvsj"),C(d,"top","min(50vh,50vw)")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),y(t,c,e),y(t,u,e),y(t,l,e),y(t,p,e),y(t,f,e),y(t,h,e),y(t,d,e),y(t,m,e),st(g,t,e),v=!0},p:t,i(t){v||(tt(g.$$.fragment,t),v=!0)},o(t){et(g.$$.fragment,t),v=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),t&&w(c),t&&w(u),t&&w(l),t&&w(p),t&&w(f),t&&w(h),t&&w(d),t&&w(m),ct(g,t)}}}function uo(e){let n,r,o,i;return n=new $e({props:{passedText:"You have a class of 20 students. Each student is represented by a circle. A teaching approach, or move, can have different outcomes day to day. On the first day you try it, you might get 12 students showing green and 8 showing red (shown below)",exploitSelect:!1,exploitMu:12}}),o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){at(n.$$.fragment),r=k(),at(o.$$.fragment)},m(t,e){st(n,t,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(n.$$.fragment,t),tt(o.$$.fragment,t),i=!0)},o(t){et(n.$$.fragment,t),et(o.$$.fragment,t),i=!1},d(t){ct(n,t),t&&w(r),ct(o,t)}}}function lo(e){let n,r,o,i;return n=new $e({props:{passedText:"And the second day you try the same move it might not work so well - 9 students showing green and 11 showing red.",exploitSelect:!1,exploitMu:9}}),o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){at(n.$$.fragment),r=k(),at(o.$$.fragment)},m(t,e){st(n,t,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(n.$$.fragment,t),tt(o.$$.fragment,t),i=!0)},o(t){et(n.$$.fragment,t),et(o.$$.fragment,t),i=!1},d(t){ct(n,t),t&&w(r),ct(o,t)}}}function po(e){let n,r,o,i;return n=new $e({props:{passedText:"And on the next day you might try the same move and get slightly better results - 15 students showing green and 5 showing red. As you can see, the same move can get slightly better or worse results over time but stays fairly close to what it was the day before.",exploitSelect:!1,exploitMu:15}}),o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){at(n.$$.fragment),r=k(),at(o.$$.fragment)},m(t,e){st(n,t,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(n.$$.fragment,t),tt(o.$$.fragment,t),i=!0)},o(t){et(n.$$.fragment,t),et(o.$$.fragment,t),i=!1},d(t){ct(n,t),t&&w(r),ct(o,t)}}}function fo(e){let n,r,o,i,a,s;return o=new Mr({props:{exploitMu:11}}),a=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="When you play the task, the two teaching approaches will be represented like this.  \n        Your current approach shows the outcome from the last time you used that approach.\n        The outcome from your new approach is unknown until you try it.",r=k(),at(o.$$.fragment),i=k(),at(a.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(o.$$.fragment,t),tt(a.$$.fragment,t),s=!0)},o(t){et(o.$$.fragment,t),et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),ct(a,t)}}}function ho(e){let n,r,o,i,s,c,u=e[5];o=new br({props:{breakTruth:e[1],nextInstruction:e[7],previousInstruction:e[8],replayAnimation:e[9]}});let l=mo(e);return{c(){n=x("h1"),n.textContent="If you choose to continue with your current teaching approach, it will light up with a blue border and a new outcome will appear.",r=k(),at(o.$$.fragment),i=k(),l.c(),s=T(),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),l.m(t,e),y(t,s,e),c=!0},p(e,n){const r={};2&n&&(r.breakTruth=e[1]),o.$set(r),32&n&&a(u,u=e[5])?(Z(),et(l,1,1,t),Q(),l=mo(e),l.c(),tt(l),l.m(s.parentNode,s)):l.p(e,n)},i(t){c||(tt(o.$$.fragment,t),tt(l),c=!0)},o(t){et(o.$$.fragment,t),et(l),c=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),t&&w(s),l.d(t)}}}function mo(e){let n,r;return n=new Mr({props:{breakNav:e[10],delayExploit:!0,exploitMu:11}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function go(t){let e,n,r,o,i,a;return r=new br({props:{breakTruth:t[1],nextInstruction:t[7],previousInstruction:t[8]}}),i=new Mr({props:{breakNav:t[10],exploreSelect:!0,viewExplore:!0,exploitMu:11}}),{c(){e=x("h1"),e.textContent="Or if you choose to switch to the new approach, it will light up and show the results like this…",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1pstvsj")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),r.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function vo(e){let n,r,o,i,s,c,u=e[5];o=new br({props:{breakTruth:e[1],nextInstruction:e[7],previousInstruction:e[8],replayAnimation:e[9]}});let l=yo(e);return{c(){n=x("h1"),n.textContent="If the new approach is worse than the current approach, you earn fewer points on the trial. Then, since it is worse, this new approach is discarded.",r=k(),at(o.$$.fragment),i=k(),l.c(),s=T(),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),l.m(t,e),y(t,s,e),c=!0},p(e,n){const r={};2&n&&(r.breakTruth=e[1]),o.$set(r),32&n&&a(u,u=e[5])?(Z(),et(l,1,1,t),Q(),l=yo(e),l.c(),tt(l),l.m(s.parentNode,s)):l.p(e,n)},i(t){c||(tt(o.$$.fragment,t),tt(l),c=!0)},o(t){et(o.$$.fragment,t),et(l),c=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),t&&w(s),l.d(t)}}}function yo(e){let n,r;return n=new Mr({props:{breakNav:e[10],delayBadExplore:!0,exploitMu:11,noReplaceExplore:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function wo(t){let e,n,r,o,i,a;return r=new br({props:{breakTruth:t[1],nextInstruction:t[7],previousInstruction:t[8]}}),i=new Mr({props:{breakNav:t[10],exploitMu:11}}),{c(){e=x("h1"),e.textContent="Then another new approach will appear. Now you can choose again from the current approach or another new approach.",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1pstvsj")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),r.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function bo(e){let n,r,o,i,s,c,u=e[5];o=new br({props:{breakTruth:e[1],nextInstruction:e[7],previousInstruction:e[8],replayAnimation:e[9]}});let l=xo(e);return{c(){n=x("h1"),n.textContent="If you were to try the new approach and it is better than the current approach,  it will replace your current approach for your next choice.",r=k(),at(o.$$.fragment),i=k(),l.c(),s=T(),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),l.m(t,e),y(t,s,e),c=!0},p(e,n){const r={};2&n&&(r.breakTruth=e[1]),o.$set(r),32&n&&a(u,u=e[5])?(Z(),et(l,1,1,t),Q(),l=xo(e),l.c(),tt(l),l.m(s.parentNode,s)):l.p(e,n)},i(t){c||(tt(o.$$.fragment,t),tt(l),c=!0)},o(t){et(o.$$.fragment,t),et(l),c=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),t&&w(s),l.d(t)}}}function xo(e){let n,r;return n=new Mr({props:{breakNav:e[10],delayGoodExplore:!0,exploitMu:11,exploreMu:16,noReplaceExplore:!0}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function $o(t){let e,n,r,o,i,a;return r=new br({props:{breakTruth:t[1],nextInstruction:t[7],previousInstruction:t[8]}}),i=new Mr({props:{breakNav:t[10],exploitMu:16}}),{c(){e=x("h1"),e.textContent="Once again, another new approach will appear... and so on...",n=k(),at(r.$$.fragment),o=k(),at(i.$$.fragment),A(e,"class","descriptionText svelte-1pstvsj")},m(t,s){y(t,e,s),y(t,n,s),st(r,t,s),y(t,o,s),st(i,t,s),a=!0},p(t,e){const n={};2&e&&(n.breakTruth=t[1]),r.$set(n)},i(t){a||(tt(r.$$.fragment,t),tt(i.$$.fragment,t),a=!0)},o(t){et(r.$$.fragment,t),et(i.$$.fragment,t),a=!1},d(t){t&&w(e),t&&w(n),ct(r,t),t&&w(o),ct(i,t)}}}function ko(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="To recap, you need to choose between you current approach and a new approach.  Choosing you current approach gives you a similar result to what you got last time (slightly better or worse).  Choosing a new approach give you a totally new outcome(that can be a lot better or a lot worse).",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function To(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Before you begin, to make sure you've got everything, we will walk you through several trials...",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Eo(e){let n,r,o,i;return o=new Mr({props:{breakNav:e[10],exploitMu:12,keyDisplay:!0,nextButton:"left",nextInstruction:e[7]}}),{c(){n=x("h1"),n.textContent="For our first trial we have a current teaching approach that seems to be working fairly well, so we may want to stick with our current approach (press the left choice)",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Ao(e){let n,r,o,i;return o=new Mr({props:{breakNav:e[10],keyDisplay:!0,delayExploit:!0,exploitMu:12,exploitMu2:13,delayTime:0,nextButton:"left",nextInstruction:e[7]}}),{c(){n=x("h1"),n.textContent="We can see that when we tried our current teaching approach it got better! So, we may want to keep trying that approach (press the left choice)",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function No(e){let n,r,o,i;return o=new Mr({props:{breakNav:e[10],keyDisplay:!0,delayExploit:!0,exploitMu:13,exploitMu2:8,delayTime:0,nextButton:"right",nextInstruction:e[7]}}),{c(){n=x("h1"),n.textContent="Oh no! We seem to have gotten a bad outcome that time. Since our current choice is not performing well we may want to switch to a new approach (press the right choice)",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function So(e){let n,r,o,i;return o=new Mr({props:{breakNav:e[10],keyDisplay:!0,delayBadExplore:!0,exploitMu:8,exploreMu:1,delayTime:0,nextButton:"right",nextInstruction:e[7]}}),{c(){n=x("h1"),n.textContent="After trying the new approach, we got a worse outcome than our current approach. We may still think that there are better options out there though, and we decide to try another new approach (press the right choice)",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Co(e){let n,r,o,i;return o=new Mr({props:{breakNav:e[10],keyDisplay:!0,delayGoodExplore:!0,exploitMu:8,exploreMu:15,delayTime:0}}),{c(){n=x("h1"),n.textContent="Great! We seem to have found a much better approach when we tried another new approach. Now it is your turn to try a couple of trials by yourself. Choose either the left or right choice to make your decision.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Io(t){let e,n;return e=new Qr({props:{breakTruth:t[1],toNext:t[7],trialDescriptions:["Great! We seem to have found a much better approach when we tried another new approach. Now it is your turn to try a couple of trials by yourself. Choose either the left or right arrow to make your decision.","Lets try another, 3 practice trials left","Lets try another, 2 practice trials left","Lets try another, 1 practice trials left",""]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.breakTruth=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Oo(e){let n,r,o,i,a,s,c,u;return c=new br({props:{nextInstruction:e[7],previousInstruction:e[8],backSkip:7}}),{c(){n=x("h1"),n.textContent="The game will be organized into days and months, and the current day/month will be displayed at the top of your screen.\n         Every time you choose either your current teaching move or a new teaching move, it will increase your day count. At the end of 30 days, a new month\n        will happen. Here is the display you would see if you were currently on day 5 of the second month.",r=k(),o=x("h1"),o.textContent="Day 5 of 30",i=k(),a=x("h1"),a.textContent="Month 2 of 6",s=k(),at(c.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj"),A(o,"class","points svelte-1pstvsj"),A(a,"class","points svelte-1pstvsj"),C(a,"left","calc(50vw - min(50vw, 50vh))")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),st(c,t,e),u=!0},p:t,i(t){u||(tt(c.$$.fragment,t),u=!0)},o(t){et(c.$$.fragment,t),u=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),ct(c,t)}}}function Bo(e){let n,r,o,i,a,s;return o=new wn({props:{lastGreenBar:15,lastRedBar:5,greenBar:250,redBar:210,numTrials:30}}),a=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Your points will be kept track of with a progress bar at the top of your screen. The total bar length represents your total accumulated red and green lights this month. The flashing sections\n        represent the red and green lights that you recieved on your last choice.",r=k(),at(o.$$.fragment),i=k(),at(a.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(o.$$.fragment,t),tt(a.$$.fragment,t),s=!0)},o(t){et(o.$$.fragment,t),et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),ct(a,t)}}}function jo(e){let n,r,o,i,a,s,c,u,l,p;return c=new wn({props:{lastGreenBar:15,lastRedBar:5,greenBar:250,redBar:210,numTrials:30}}),l=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="So, all together, the top of your screen will look something like:",r=k(),o=x("h1"),o.textContent="Day 23 of 30",i=k(),a=x("h1"),a.textContent="Month 2 of 6",s=k(),at(c.$$.fragment),u=k(),at(l.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj"),A(o,"class","points svelte-1pstvsj"),A(a,"class","points svelte-1pstvsj"),C(a,"left","calc(50vw - min(50vw, 50vh))")},m(t,e){y(t,n,e),y(t,r,e),y(t,o,e),y(t,i,e),y(t,a,e),y(t,s,e),st(c,t,e),y(t,u,e),st(l,t,e),p=!0},p:t,i(t){p||(tt(c.$$.fragment,t),tt(l.$$.fragment,t),p=!0)},o(t){et(c.$$.fragment,t),et(l.$$.fragment,t),p=!1},d(t){t&&w(n),t&&w(r),t&&w(o),t&&w(i),t&&w(a),t&&w(s),ct(c,t),t&&w(u),ct(l,t)}}}function Mo(e){let n,r,o,i,a,s;return o=new En({props:{greenScore:380,greenScoreLast:300,numTrials:30}}),a=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="At the end of each month, you will be shown a screen giving your performance that month and the month before. This gives you a chance to \n    improve upon your score between months! If you improved upon your previous, you would see something like:",r=k(),at(o.$$.fragment),i=k(),at(a.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),y(t,i,e),st(a,t,e),s=!0},p:t,i(t){s||(tt(o.$$.fragment,t),tt(a.$$.fragment,t),s=!0)},o(t){et(o.$$.fragment,t),et(a.$$.fragment,t),s=!1},d(t){t&&w(n),t&&w(r),ct(o,t),t&&w(i),ct(a,t)}}}function Po(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8]}}),{c(){n=x("h1"),n.textContent="Now that you've seen all the parts of the game, lets have you do a couple of rounds by yourself. The classroom understanding bar will be added into these trials.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Lo(t){let e,n;return e=new ue({props:{toNext:t[11],gameString:"",writeKey:t[3],id:t[4],totalBlocks:0,block:0,numTrials:10}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};8&n&&(r.writeKey=t[3]),16&n&&(r.id=t[4]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Ro(e){let n,r,o,i;return o=new br({props:{nextInstruction:e[7],previousInstruction:e[8],backSkip:2}}),{c(){n=x("h1"),n.textContent="At this point you should have a firm understanding of the task. This task will go for 6 months of 30 days each. Remember to maximize your students' understanding, and good luck! To review any of the instructions click back, to continue to the task click next.",r=k(),at(o.$$.fragment),A(n,"class","descriptionText svelte-1pstvsj")},m(t,e){y(t,n,e),y(t,r,e),st(o,t,e),i=!0},p:t,i(t){i||(tt(o.$$.fragment,t),i=!0)},o(t){et(o.$$.fragment,t),i=!1},d(t){t&&w(n),t&&w(r),ct(o,t)}}}function Do(t){let e,n=t[2]()+"";return{c(){e=$(n)},m(t,n){y(t,e,n)},p(t,r){4&r&&n!==(n=t[2]()+"")&&N(e,n)},d(t){t&&w(e)}}}function _o(t){let e,n,r,o,i,a,s,c,u,l,p,f,h,d,m,g,v,b,x,$,E,A,N,S,C,I,O,B,j,M,P,L,R,D,_,U,F=0===t[0]&&to(t),q=1===t[0]&&eo(t),G=2===t[0]&&no(t),z=3===t[0]&&ro(t),V=4===t[0]&&oo(t),H=5===t[0]&&io(t),Y=6===t[0]&&ao(t),X=7===t[0]&&so(t),K=8===t[0]&&co(t),W=9===t[0]&&uo(t),J=10===t[0]&&lo(t),nt=11===t[0]&&po(t),rt=12===t[0]&&fo(t),ot=13===t[0]&&ho(t),it=14===t[0]&&go(t),at=15===t[0]&&vo(t),st=16===t[0]&&wo(t),ct=17===t[0]&&bo(t),ut=18===t[0]&&$o(t),lt=19===t[0]&&ko(t),pt=20===t[0]&&To(t),ft=21===t[0]&&Eo(t),ht=22===t[0]&&Ao(t),dt=23===t[0]&&No(t),mt=24===t[0]&&So(t),gt=25===t[0]&&Co(t),vt=26===t[0]&&Io(t),yt=27===t[0]&&Oo(t),wt=28===t[0]&&Bo(t),bt=29===t[0]&&jo(t),xt=30===t[0]&&Mo(t),$t=31===t[0]&&Po(t),kt=32===t[0]&&Lo(t),Tt=33===t[0]&&Ro(t),Et=34===t[0]&&Do(t);return{c(){F&&F.c(),e=k(),q&&q.c(),n=k(),G&&G.c(),r=k(),z&&z.c(),o=k(),V&&V.c(),i=k(),H&&H.c(),a=k(),Y&&Y.c(),s=k(),X&&X.c(),c=k(),K&&K.c(),u=k(),W&&W.c(),l=k(),J&&J.c(),p=k(),nt&&nt.c(),f=k(),rt&&rt.c(),h=k(),ot&&ot.c(),d=k(),it&&it.c(),m=k(),at&&at.c(),g=k(),st&&st.c(),v=k(),ct&&ct.c(),b=k(),ut&&ut.c(),x=k(),lt&&lt.c(),$=k(),pt&&pt.c(),E=k(),ft&&ft.c(),A=k(),ht&&ht.c(),N=k(),dt&&dt.c(),S=k(),mt&&mt.c(),C=k(),gt&&gt.c(),I=k(),vt&&vt.c(),O=k(),yt&&yt.c(),B=k(),wt&&wt.c(),j=k(),bt&&bt.c(),M=k(),xt&&xt.c(),P=k(),$t&&$t.c(),L=k(),kt&&kt.c(),R=k(),Tt&&Tt.c(),D=k(),Et&&Et.c(),_=T()},m(t,w){F&&F.m(t,w),y(t,e,w),q&&q.m(t,w),y(t,n,w),G&&G.m(t,w),y(t,r,w),z&&z.m(t,w),y(t,o,w),V&&V.m(t,w),y(t,i,w),H&&H.m(t,w),y(t,a,w),Y&&Y.m(t,w),y(t,s,w),X&&X.m(t,w),y(t,c,w),K&&K.m(t,w),y(t,u,w),W&&W.m(t,w),y(t,l,w),J&&J.m(t,w),y(t,p,w),nt&&nt.m(t,w),y(t,f,w),rt&&rt.m(t,w),y(t,h,w),ot&&ot.m(t,w),y(t,d,w),it&&it.m(t,w),y(t,m,w),at&&at.m(t,w),y(t,g,w),st&&st.m(t,w),y(t,v,w),ct&&ct.m(t,w),y(t,b,w),ut&&ut.m(t,w),y(t,x,w),lt&&lt.m(t,w),y(t,$,w),pt&&pt.m(t,w),y(t,E,w),ft&&ft.m(t,w),y(t,A,w),ht&&ht.m(t,w),y(t,N,w),dt&&dt.m(t,w),y(t,S,w),mt&&mt.m(t,w),y(t,C,w),gt&&gt.m(t,w),y(t,I,w),vt&&vt.m(t,w),y(t,O,w),yt&&yt.m(t,w),y(t,B,w),wt&&wt.m(t,w),y(t,j,w),bt&&bt.m(t,w),y(t,M,w),xt&&xt.m(t,w),y(t,P,w),$t&&$t.m(t,w),y(t,L,w),kt&&kt.m(t,w),y(t,R,w),Tt&&Tt.m(t,w),y(t,D,w),Et&&Et.m(t,w),y(t,_,w),U=!0},p(t,[y]){0===t[0]?F?(F.p(t,y),1&y&&tt(F,1)):(F=to(t),F.c(),tt(F,1),F.m(e.parentNode,e)):F&&(Z(),et(F,1,1,(()=>{F=null})),Q()),1===t[0]?q?(q.p(t,y),1&y&&tt(q,1)):(q=eo(t),q.c(),tt(q,1),q.m(n.parentNode,n)):q&&(Z(),et(q,1,1,(()=>{q=null})),Q()),2===t[0]?G?(G.p(t,y),1&y&&tt(G,1)):(G=no(t),G.c(),tt(G,1),G.m(r.parentNode,r)):G&&(Z(),et(G,1,1,(()=>{G=null})),Q()),3===t[0]?z?(z.p(t,y),1&y&&tt(z,1)):(z=ro(t),z.c(),tt(z,1),z.m(o.parentNode,o)):z&&(Z(),et(z,1,1,(()=>{z=null})),Q()),4===t[0]?V?(V.p(t,y),1&y&&tt(V,1)):(V=oo(t),V.c(),tt(V,1),V.m(i.parentNode,i)):V&&(Z(),et(V,1,1,(()=>{V=null})),Q()),5===t[0]?H?(H.p(t,y),1&y&&tt(H,1)):(H=io(t),H.c(),tt(H,1),H.m(a.parentNode,a)):H&&(Z(),et(H,1,1,(()=>{H=null})),Q()),6===t[0]?Y?(Y.p(t,y),1&y&&tt(Y,1)):(Y=ao(t),Y.c(),tt(Y,1),Y.m(s.parentNode,s)):Y&&(Z(),et(Y,1,1,(()=>{Y=null})),Q()),7===t[0]?X?(X.p(t,y),1&y&&tt(X,1)):(X=so(t),X.c(),tt(X,1),X.m(c.parentNode,c)):X&&(Z(),et(X,1,1,(()=>{X=null})),Q()),8===t[0]?K?(K.p(t,y),1&y&&tt(K,1)):(K=co(t),K.c(),tt(K,1),K.m(u.parentNode,u)):K&&(Z(),et(K,1,1,(()=>{K=null})),Q()),9===t[0]?W?(W.p(t,y),1&y&&tt(W,1)):(W=uo(t),W.c(),tt(W,1),W.m(l.parentNode,l)):W&&(Z(),et(W,1,1,(()=>{W=null})),Q()),10===t[0]?J?(J.p(t,y),1&y&&tt(J,1)):(J=lo(t),J.c(),tt(J,1),J.m(p.parentNode,p)):J&&(Z(),et(J,1,1,(()=>{J=null})),Q()),11===t[0]?nt?(nt.p(t,y),1&y&&tt(nt,1)):(nt=po(t),nt.c(),tt(nt,1),nt.m(f.parentNode,f)):nt&&(Z(),et(nt,1,1,(()=>{nt=null})),Q()),12===t[0]?rt?(rt.p(t,y),1&y&&tt(rt,1)):(rt=fo(t),rt.c(),tt(rt,1),rt.m(h.parentNode,h)):rt&&(Z(),et(rt,1,1,(()=>{rt=null})),Q()),13===t[0]?ot?(ot.p(t,y),1&y&&tt(ot,1)):(ot=ho(t),ot.c(),tt(ot,1),ot.m(d.parentNode,d)):ot&&(Z(),et(ot,1,1,(()=>{ot=null})),Q()),14===t[0]?it?(it.p(t,y),1&y&&tt(it,1)):(it=go(t),it.c(),tt(it,1),it.m(m.parentNode,m)):it&&(Z(),et(it,1,1,(()=>{it=null})),Q()),15===t[0]?at?(at.p(t,y),1&y&&tt(at,1)):(at=vo(t),at.c(),tt(at,1),at.m(g.parentNode,g)):at&&(Z(),et(at,1,1,(()=>{at=null})),Q()),16===t[0]?st?(st.p(t,y),1&y&&tt(st,1)):(st=wo(t),st.c(),tt(st,1),st.m(v.parentNode,v)):st&&(Z(),et(st,1,1,(()=>{st=null})),Q()),17===t[0]?ct?(ct.p(t,y),1&y&&tt(ct,1)):(ct=bo(t),ct.c(),tt(ct,1),ct.m(b.parentNode,b)):ct&&(Z(),et(ct,1,1,(()=>{ct=null})),Q()),18===t[0]?ut?(ut.p(t,y),1&y&&tt(ut,1)):(ut=$o(t),ut.c(),tt(ut,1),ut.m(x.parentNode,x)):ut&&(Z(),et(ut,1,1,(()=>{ut=null})),Q()),19===t[0]?lt?(lt.p(t,y),1&y&&tt(lt,1)):(lt=ko(t),lt.c(),tt(lt,1),lt.m($.parentNode,$)):lt&&(Z(),et(lt,1,1,(()=>{lt=null})),Q()),20===t[0]?pt?(pt.p(t,y),1&y&&tt(pt,1)):(pt=To(t),pt.c(),tt(pt,1),pt.m(E.parentNode,E)):pt&&(Z(),et(pt,1,1,(()=>{pt=null})),Q()),21===t[0]?ft?(ft.p(t,y),1&y&&tt(ft,1)):(ft=Eo(t),ft.c(),tt(ft,1),ft.m(A.parentNode,A)):ft&&(Z(),et(ft,1,1,(()=>{ft=null})),Q()),22===t[0]?ht?(ht.p(t,y),1&y&&tt(ht,1)):(ht=Ao(t),ht.c(),tt(ht,1),ht.m(N.parentNode,N)):ht&&(Z(),et(ht,1,1,(()=>{ht=null})),Q()),23===t[0]?dt?(dt.p(t,y),1&y&&tt(dt,1)):(dt=No(t),dt.c(),tt(dt,1),dt.m(S.parentNode,S)):dt&&(Z(),et(dt,1,1,(()=>{dt=null})),Q()),24===t[0]?mt?(mt.p(t,y),1&y&&tt(mt,1)):(mt=So(t),mt.c(),tt(mt,1),mt.m(C.parentNode,C)):mt&&(Z(),et(mt,1,1,(()=>{mt=null})),Q()),25===t[0]?gt?(gt.p(t,y),1&y&&tt(gt,1)):(gt=Co(t),gt.c(),tt(gt,1),gt.m(I.parentNode,I)):gt&&(Z(),et(gt,1,1,(()=>{gt=null})),Q()),26===t[0]?vt?(vt.p(t,y),1&y&&tt(vt,1)):(vt=Io(t),vt.c(),tt(vt,1),vt.m(O.parentNode,O)):vt&&(Z(),et(vt,1,1,(()=>{vt=null})),Q()),27===t[0]?yt?(yt.p(t,y),1&y&&tt(yt,1)):(yt=Oo(t),yt.c(),tt(yt,1),yt.m(B.parentNode,B)):yt&&(Z(),et(yt,1,1,(()=>{yt=null})),Q()),28===t[0]?wt?(wt.p(t,y),1&y&&tt(wt,1)):(wt=Bo(t),wt.c(),tt(wt,1),wt.m(j.parentNode,j)):wt&&(Z(),et(wt,1,1,(()=>{wt=null})),Q()),29===t[0]?bt?(bt.p(t,y),1&y&&tt(bt,1)):(bt=jo(t),bt.c(),tt(bt,1),bt.m(M.parentNode,M)):bt&&(Z(),et(bt,1,1,(()=>{bt=null})),Q()),30===t[0]?xt?(xt.p(t,y),1&y&&tt(xt,1)):(xt=Mo(t),xt.c(),tt(xt,1),xt.m(P.parentNode,P)):xt&&(Z(),et(xt,1,1,(()=>{xt=null})),Q()),31===t[0]?$t?($t.p(t,y),1&y&&tt($t,1)):($t=Po(t),$t.c(),tt($t,1),$t.m(L.parentNode,L)):$t&&(Z(),et($t,1,1,(()=>{$t=null})),Q()),32===t[0]?kt?(kt.p(t,y),1&y&&tt(kt,1)):(kt=Lo(t),kt.c(),tt(kt,1),kt.m(R.parentNode,R)):kt&&(Z(),et(kt,1,1,(()=>{kt=null})),Q()),33===t[0]?Tt?(Tt.p(t,y),1&y&&tt(Tt,1)):(Tt=Ro(t),Tt.c(),tt(Tt,1),Tt.m(D.parentNode,D)):Tt&&(Z(),et(Tt,1,1,(()=>{Tt=null})),Q()),34===t[0]?Et?Et.p(t,y):(Et=Do(t),Et.c(),Et.m(_.parentNode,_)):Et&&(Et.d(1),Et=null)},i(t){U||(tt(F),tt(q),tt(G),tt(z),tt(V),tt(H),tt(Y),tt(X),tt(K),tt(W),tt(J),tt(nt),tt(rt),tt(ot),tt(it),tt(at),tt(st),tt(ct),tt(ut),tt(lt),tt(pt),tt(ft),tt(ht),tt(dt),tt(mt),tt(gt),tt(vt),tt(yt),tt(wt),tt(bt),tt(xt),tt($t),tt(kt),tt(Tt),U=!0)},o(t){et(F),et(q),et(G),et(z),et(V),et(H),et(Y),et(X),et(K),et(W),et(J),et(nt),et(rt),et(ot),et(it),et(at),et(st),et(ct),et(ut),et(lt),et(pt),et(ft),et(ht),et(dt),et(mt),et(gt),et(vt),et(yt),et(wt),et(bt),et(xt),et($t),et(kt),et(Tt),U=!1},d(t){F&&F.d(t),t&&w(e),q&&q.d(t),t&&w(n),G&&G.d(t),t&&w(r),z&&z.d(t),t&&w(o),V&&V.d(t),t&&w(i),H&&H.d(t),t&&w(a),Y&&Y.d(t),t&&w(s),X&&X.d(t),t&&w(c),K&&K.d(t),t&&w(u),W&&W.d(t),t&&w(l),J&&J.d(t),t&&w(p),nt&&nt.d(t),t&&w(f),rt&&rt.d(t),t&&w(h),ot&&ot.d(t),t&&w(d),it&&it.d(t),t&&w(m),at&&at.d(t),t&&w(g),st&&st.d(t),t&&w(v),ct&&ct.d(t),t&&w(b),ut&&ut.d(t),t&&w(x),lt&&lt.d(t),t&&w($),pt&&pt.d(t),t&&w(E),ft&&ft.d(t),t&&w(A),ht&&ht.d(t),t&&w(N),dt&&dt.d(t),t&&w(S),mt&&mt.d(t),t&&w(C),gt&&gt.d(t),t&&w(I),vt&&vt.d(t),t&&w(O),yt&&yt.d(t),t&&w(B),wt&&wt.d(t),t&&w(j),bt&&bt.d(t),t&&w(M),xt&&xt.d(t),t&&w(P),$t&&$t.d(t),t&&w(L),kt&&kt.d(t),t&&w(R),Tt&&Tt.d(t),t&&w(D),Et&&Et.d(t),t&&w(_)}}}function Uo(t,e,n){let{toGame:r}=e,{i:o=0}=e,{breakTruth:i={truth:!1}}=e,{getData:a}=e,{writeKey:s}=e,{id:c}=e,u=0,l="";async function p(){await async function(t){return await new Promise((e=>setTimeout(e,t)))}(3e3),n(0,o+=1)}return t.$$set=t=>{"toGame"in t&&n(2,r=t.toGame),"i"in t&&n(0,o=t.i),"breakTruth"in t&&n(1,i=t.breakTruth),"getData"in t&&n(12,a=t.getData),"writeKey"in t&&n(3,s=t.writeKey),"id"in t&&n(4,c=t.id)},t.$$.update=()=>{1&t.$$.dirty&&4===o&&console.log("Sending Response..."),1&t.$$.dirty&&25===o&&p()},[o,i,r,s,c,u,l,function(t){console.log("number"==typeof t),t="number"!=typeof t?1:t,console.log(t),n(0,o+=t)},function(t){t="number"!=typeof t?1:t,console.log(t),n(0,o-=t)},function(){console.log(u),n(5,u+=1)},function(t){n(1,i.truth=t,i),console.log(i.truth)},async function(t){a(t),n(0,o+=1)},a,function(){l=this.value,n(6,l)}]}class Fo extends pt{constructor(t){super(),lt(this,t,Uo,_o,a,{toGame:2,i:0,breakTruth:1,getData:12,writeKey:3,id:4})}}class qo extends pt{constructor(t){super(),lt(this,t,null,null,a,{})}}var Go="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function zo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Vo(t){var e={exports:{}};return t(e,e.exports),e.exports
/*! For license information please see webdav.js.LICENSE.txt */}for(var Ho=Vo((function(t,e){self,t.exports=(()=>{var t={5056:(t,e,n)=>{t.exports=n(203)},3198:(t,e,n)=>{var r=n(3401),o=n(5888),i=n(4963),a=n(8826),s=n(4466),c=n(8418),u=n(6130),l=n(1824),p=n(3570),f=n(4900);t.exports=function(t){return new Promise((function(e,n){var h,d=t.data,m=t.headers,g=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(h),t.signal&&t.signal.removeEventListener("abort",h)}r.isFormData(d)&&delete m["Content-Type"];var y=new XMLHttpRequest;if(t.auth){var w=t.auth.username||"",b=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+b)}var x=s(t.baseURL,t.url);function $(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:t,request:y};o((function(t){e(t),v()}),(function(t){n(t),v()}),i),y=null}}if(y.open(t.method.toUpperCase(),a(x,t.params,t.paramsSerializer),!0),y.timeout=t.timeout,"onloadend"in y?y.onloadend=$:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout($)},y.onabort=function(){y&&(n(l("Request aborted",t,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(l("Network Error",t,null,y)),y=null},y.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||p.transitional;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var k=(t.withCredentials||u(x))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;k&&(m[t.xsrfHeaderName]=k)}"setRequestHeader"in y&&r.forEach(m,(function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete m[e]:y.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(y.withCredentials=!!t.withCredentials),g&&"json"!==g&&(y.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&y.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(h=function(t){y&&(n(!t||t&&t.type?new f("canceled"):t),y.abort(),y=null)},t.cancelToken&&t.cancelToken.subscribe(h),t.signal&&(t.signal.aborted?h():t.signal.addEventListener("abort",h))),d||(d=null),y.send(d)}))}},203:(t,e,n)=>{var r=n(3401),o=n(9366),i=n(1112),a=n(3674),s=function t(e){var n=new i(e),s=o(i.prototype.request,n);return r.extend(s,i.prototype,n),r.extend(s,n),s.create=function(n){return t(a(e,n))},s}(n(3570));s.Axios=i,s.Cancel=n(4900),s.CancelToken=n(4078),s.isCancel=n(1907),s.VERSION=n(8963).version,s.all=function(t){return Promise.all(t)},s.spread=n(7998),s.isAxiosError=n(1720),t.exports=s,t.exports.default=s},4900:t=>{function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},4078:(t,e,n)=>{var r=n(4900);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},1907:t=>{t.exports=function(t){return!(!t||!t.__CANCEL__)}},1112:(t,e,n)=>{var r=n(3401),o=n(8826),i=n(9655),a=n(4412),s=n(3674),c=n(3465),u=c.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&c.assertOptions(e,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(t){i.push(t.fulfilled,t.rejected)})),!r){var l=[a,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(i),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var p=t;n.length;){var f=n.shift(),h=n.shift();try{p=f(p)}catch(t){h(t);break}}try{o=a(p)}catch(t){return Promise.reject(t)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},l.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=l},9655:(t,e,n)=>{var r=n(3401);function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},4466:(t,e,n)=>{var r=n(4206),o=n(7955);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},1824:(t,e,n)=>{var r=n(834);t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},4412:(t,e,n)=>{var r=n(3401),o=n(8092),i=n(1907),a=n(3570),s=n(4900);function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s("canceled")}t.exports=function(t){return c(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return c(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},834:t=>{t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},3674:(t,e,n)=>{var r=n(3401);t.exports=function(t,e){e=e||{};var n={};function o(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(t[n],e[n])}function a(t){if(!r.isUndefined(e[t]))return o(void 0,e[t])}function s(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(void 0,e[n])}function c(n){return n in e?o(t[n],e[n]):n in t?o(void 0,t[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||i,o=e(t);r.isUndefined(o)&&e!==c||(n[t]=o)})),n}},5888:(t,e,n)=>{var r=n(1824);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},8092:(t,e,n)=>{var r=n(3401),o=n(3570);t.exports=function(t,e,n){var i=this||o;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},3570:(t,e,n)=>{var r=n(3401),o=n(5854),i=n(834),a={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(3198)),c),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),function(t,e,n){if(r.isString(t))try{return(0,JSON.parse)(t),r.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||u.transitional,n=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(a){if("SyntaxError"===t.name)throw i(t,this,"E_JSON_PARSE");throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){u.headers[t]=r.merge(a)})),t.exports=u},8963:t=>{t.exports={version:"0.24.0"}},9366:t=>{t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},8826:(t,e,n)=>{var r=n(3401);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},7955:t=>{t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4963:(t,e,n)=>{var r=n(3401);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},4206:t=>{t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},1720:t=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===e(t)&&!0===t.isAxiosError}},6130:(t,e,n)=>{var r=n(3401);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},5854:(t,e,n)=>{var r=n(3401);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},8418:(t,e,n)=>{var r=n(3401),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}})),a):a}},7998:t=>{t.exports=function(t){return function(e){return t.apply(null,e)}}},3465:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(8963).version,i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return r(n)===t||"a"+(e<1?"n ":" ")+t}}));var a={};i.transitional=function(t,e,n){function r(t,e){return"[Axios v"+o+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,o,i){if(!1===t)throw new Error(r(o," has been removed"+(e?" in "+e:"")));return e&&!a[o]&&(a[o]=!0,console.warn(r(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,o,i)}},t.exports={assertOptions:function(t,e,n){if("object"!==r(t))throw new TypeError("options must be an object");for(var o=Object.keys(t),i=o.length;i-- >0;){var a=o[i],s=e[a];if(s){var c=t[a],u=void 0===c||s(c,a,t);if(!0!==u)throw new TypeError("option "+a+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:i}},3401:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(9366),i=Object.prototype.toString;function a(t){return"[object Array]"===i.call(t)}function s(t){return void 0===t}function c(t){return null!==t&&"object"===r(t)}function u(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function l(t){return"[object Function]"===i.call(t)}function p(t,e){if(null!=t)if("object"!==r(t)&&(t=[t]),a(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:c,isPlainObject:u,isUndefined:s,isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:l,isStream:function(t){return c(t)&&l(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function t(){var e={};function n(n,r){u(e[r])&&u(n)?e[r]=t(e[r],n):u(n)?e[r]=t({},n):a(n)?e[r]=n.slice():e[r]=n}for(var r=0,o=arguments.length;r<o;r++)p(arguments[r],n);return e},extend:function(t,e,n){return p(e,(function(e,r){t[r]=n&&"function"==typeof e?o(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},9584:t=>{function e(t,e,o){t instanceof RegExp&&(t=n(t,o)),e instanceof RegExp&&(e=n(e,o));var i=r(t,e,o);return i&&{start:i[0],end:i[1],pre:o.slice(0,i[0]),body:o.slice(i[0]+t.length,i[1]),post:o.slice(i[1]+e.length)}}function n(t,e){var n=e.match(t);return n?n[0]:null}function r(t,e,n){var r,o,i,a,s,c=n.indexOf(t),u=n.indexOf(e,c+1),l=c;if(c>=0&&u>0){for(r=[],i=n.length;l>=0&&!s;)l==c?(r.push(l),c=n.indexOf(t,l+1)):1==r.length?s=[r.pop(),u]:((o=r.pop())<i&&(i=o,a=u),u=n.indexOf(e,l+1)),l=c<u&&c>=0?c:u;r.length&&(s=[i,a])}return s}t.exports=e,e.range=r},9146:function(t,e,n){var r;function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=n.nmd(t),function(i){var a="object"==o(e)&&e,s="object"==o(t)&&t&&t.exports==a&&t,c="object"==(void 0===Go?"undefined":o(Go))&&Go;c.global!==c&&c.window!==c||(i=c);var u=function(t){this.message=t};(u.prototype=new Error).name="InvalidCharacterError";var l=function(t){throw new u(t)},p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=/[\t\n\f\r ]/g,h={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&l("The string to be encoded contains characters outside of the Latin1 range.");for(var e,n,r,o,i=t.length%3,a="",s=-1,c=t.length-i;++s<c;)e=t.charCodeAt(s)<<16,n=t.charCodeAt(++s)<<8,r=t.charCodeAt(++s),a+=p.charAt((o=e+n+r)>>18&63)+p.charAt(o>>12&63)+p.charAt(o>>6&63)+p.charAt(63&o);return 2==i?(e=t.charCodeAt(s)<<8,n=t.charCodeAt(++s),a+=p.charAt((o=e+n)>>10)+p.charAt(o>>4&63)+p.charAt(o<<2&63)+"="):1==i&&(o=t.charCodeAt(s),a+=p.charAt(o>>2)+p.charAt(o<<4&63)+"=="),a},decode:function(t){var e=(t=String(t).replace(f,"")).length;e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&l("Invalid character: the string to be decoded is not correctly encoded.");for(var n,r,o=0,i="",a=-1;++a<e;)r=p.indexOf(t.charAt(a)),n=o%4?64*n+r:r,o++%4&&(i+=String.fromCharCode(255&n>>(-2*o&6)));return i},version:"1.0.0"};if("object"==o(n.amdO)&&n.amdO)void 0===(r=function(){return h}.call(e,n,e,t))||(t.exports=r);else if(a&&!a.nodeType)if(s)s.exports=h;else for(var d in h)h.hasOwnProperty(d)&&(a[d]=h[d]);else i.base64=h}(this)},7562:(t,e,n)=>{var r=n(8824),o=n(9584);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),v(function(t){return t.split("\\\\").join(i).split("\\{").join(a).split("\\}").join(s).split("\\,").join(c).split("\\.").join(u)}(t),!0).map(p)):[]};var i="\0SLASH"+Math.random()+"\0",a="\0OPEN"+Math.random()+"\0",s="\0CLOSE"+Math.random()+"\0",c="\0COMMA"+Math.random()+"\0",u="\0PERIOD"+Math.random()+"\0";function l(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function p(t){return t.split(i).join("\\").split(a).join("{").split(s).join("}").split(c).join(",").split(u).join(".")}function f(t){if(!t)return[""];var e=[],n=o("{","}",t);if(!n)return t.split(",");var r=n.pre,i=n.body,a=n.post,s=r.split(",");s[s.length-1]+="{"+i+"}";var c=f(a);return a.length&&(s[s.length-1]+=c.shift(),s.push.apply(s,c)),e.push.apply(e,s),e}function h(t){return"{"+t+"}"}function d(t){return/^-?0\d/.test(t)}function m(t,e){return t<=e}function g(t,e){return t>=e}function v(t,e){var n=[],i=o("{","}",t);if(!i||/\$$/.test(i.pre))return[t];var a,c=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body),u=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body),p=c||u,y=i.body.indexOf(",")>=0;if(!p&&!y)return i.post.match(/,.*\}/)?v(t=i.pre+"{"+i.body+s+i.post):[t];if(p)a=i.body.split(/\.\./);else if(1===(a=f(i.body)).length&&1===(a=v(a[0],!1).map(h)).length)return(x=i.post.length?v(i.post,!1):[""]).map((function(t){return i.pre+a[0]+t}));var w,b=i.pre,x=i.post.length?v(i.post,!1):[""];if(p){var $=l(a[0]),k=l(a[1]),T=Math.max(a[0].length,a[1].length),E=3==a.length?Math.abs(l(a[2])):1,A=m;k<$&&(E*=-1,A=g);var N=a.some(d);w=[];for(var S=$;A(S,k);S+=E){var C;if(u)"\\"===(C=String.fromCharCode(S))&&(C="");else if(C=String(S),N){var I=T-C.length;if(I>0){var O=new Array(I+1).join("0");C=S<0?"-"+O+C.slice(1):O+C}}w.push(C)}}else w=r(a,(function(t){return v(t,!1)}));for(var B=0;B<w.length;B++)for(var j=0;j<x.length;j++){var M=b+w[B]+x[j];(!e||p||M)&&n.push(M)}return n}},5106:t=>{var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=e},8824:t=>{t.exports=function(t,n){for(var r=[],o=0;o<t.length;o++){var i=n(t[o],o);e(i)?r.push.apply(r,i):r.push(i)}return r};var e=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},3718:t=>{var e,n;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],i=0;i<4;i++)8*r+6*i<=8*t.length?n.push(e.charAt(o>>>6*(3-i)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(r))>>>6-2*o);return n}},t.exports=n},7412:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(6410).buildOptions,i={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},a=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor","rootNodeName"];function s(t){this.options=o(t,i,a),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=g),this.options.cdataTagName?this.isCDATA=v:this.isCDATA=function(){return!1},this.replaceCDATAstr=u,this.replaceCDATAarr=l,this.processTextOrObjNode=c,this.options.format?(this.indentate=m,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=d,this.buildObjNode=f):(this.buildTextNode=h,this.buildObjNode=p),this.buildTextValNode=h,this.buildObjectNode=p}function c(t,e,n){var r=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextNode(r.val,e,r.attrStr,n):this.buildObjNode(r.val,e,r.attrStr,n)}function u(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function l(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(var n in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[n]+"]]>");return t+this.newLine}function p(t,e,n,r){return n&&-1===t.indexOf("<")?this.indentate(r)+"<"+e+n+">"+t+"</"+e+this.tagEndChar:this.indentate(r)+"<"+e+n+this.tagEndChar+t+this.indentate(r)+"</"+e+this.tagEndChar}function f(t,e,n,r){return""!==t?this.buildObjectNode(t,e,n,r):this.indentate(r)+"<"+e+n+"/"+this.tagEndChar}function h(t,e,n,r){return this.indentate(r)+"<"+e+n+">"+this.options.tagValueProcessor(t)+"</"+e+this.tagEndChar}function d(t,e,n,r){return""!==t?this.buildTextValNode(t,e,n,r):this.indentate(r)+"<"+e+n+"/"+this.tagEndChar}function m(t){return this.options.indentBy.repeat(t)}function g(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function v(t){return t===this.options.cdataTagName}s.prototype.parse=function(t){var e,n,r;return Array.isArray(t)&&this.options.rootNodeName&&this.options.rootNodeName.length>1&&(e={},r=t,(n=this.options.rootNodeName)in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,t=e),this.j2x(t,0).val},s.prototype.j2x=function(t,e){var n="",o="";for(var i in t)if(void 0===t[i]);else if(null===t[i])o+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)o+=this.buildTextNode(t[i],i,"",e);else if("object"!==r(t[i])){var a=this.isAttribute(i);a?n+=" "+a+'="'+this.options.attrValueProcessor(""+t[i])+'"':this.isCDATA(i)?t[this.options.textNodeName]?o+=this.replaceCDATAstr(t[this.options.textNodeName],t[i]):o+=this.replaceCDATAstr("",t[i]):i===this.options.textNodeName?t[this.options.cdataTagName]||(o+=this.options.tagValueProcessor(""+t[i])):o+=this.buildTextNode(t[i],i,"",e)}else if(Array.isArray(t[i]))if(this.isCDATA(i))o+=this.indentate(e),t[this.options.textNodeName]?o+=this.replaceCDATAarr(t[this.options.textNodeName],t[i]):o+=this.replaceCDATAarr("",t[i]);else for(var s=t[i].length,c=0;c<s;c++){var u=t[i][c];void 0===u||(null===u?o+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:"object"===r(u)?o+=this.processTextOrObjNode(u,i,e):o+=this.buildTextNode(u,i,"",e))}else if(this.options.attrNodeName&&i===this.options.attrNodeName)for(var l=Object.keys(t[i]),p=l.length,f=0;f<p;f++)n+=" "+l[f]+'="'+this.options.attrValueProcessor(""+t[i][l[f]])+'"';else o+=this.processTextOrObjNode(t[i],i,e);return{attrStr:n,val:o}},t.exports=s},3927:(t,e,n)=>{var r=function(t){return String.fromCharCode(t)},o={nilChar:r(176),missingChar:r(201),nilPremitive:r(175),missingPremitive:r(200),emptyChar:r(178),emptyValue:r(177),boundryChar:r(179),objStart:r(198),arrStart:r(204),arrayEnd:r(185)},i=[o.nilChar,o.nilPremitive,o.missingChar,o.missingPremitive,o.boundryChar,o.emptyChar,o.emptyValue,o.arrayEnd,o.objStart,o.arrStart],a=function t(e,n,r){if("string"==typeof n)return e&&e[0]&&void 0!==e[0].val?s(e[0].val):s(e);var i,a=void 0===(i=e)?o.missingChar:null===i?o.nilChar:!(i.child&&0===Object.keys(i.child).length&&(!i.attrsMap||0===Object.keys(i.attrsMap).length))||o.emptyChar;if(!0===a){var u="";if(Array.isArray(n)){u+=o.arrStart;var l=n[0],p=e.length;if("string"==typeof l)for(var f=0;f<p;f++){var h=s(e[f].val);u=c(u,h)}else for(var d=0;d<p;d++){var m=t(e[d],l,r);u=c(u,m)}u+=o.arrayEnd}else{u+=o.objStart;var g=Object.keys(n);for(var v in Array.isArray(e)&&(e=e[0]),g){var y,w=g[v];y=!r.ignoreAttributes&&e.attrsMap&&e.attrsMap[w]?t(e.attrsMap[w],n[w],r):w===r.textNodeName?t(e.val,n[w],r):t(e.child[w],n[w],r),u=c(u,y)}}return u}return a},s=function(t){switch(t){case void 0:return o.missingPremitive;case null:return o.nilPremitive;case"":return o.emptyValue;default:return t}},c=function(t,e){return u(e[0])||u(t[t.length-1])||(t+=o.boundryChar),t+e},u=function(t){return-1!==i.indexOf(t)},l=n(4369),p=n(6410).buildOptions;e.convert2nimn=function(t,e,n){return n=p(n,l.defaultOptions,l.props),a(t,e,n)}},504:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(6410);e.convertToJson=function t(e,n,i){var a={};if(!n.alwaysCreateTextNode&&(!e.child||o.isEmptyObject(e.child))&&(!e.attrsMap||o.isEmptyObject(e.attrsMap)))return o.isExist(e.val)?e.val:"";if(o.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==n.cdataPositionChar)){var s=o.isTagNameInArrayMode(e.tagname,n.arrayMode,i);a[n.textNodeName]=s?[e.val]:e.val}o.merge(a,e.attrsMap,n.arrayMode);for(var c=Object.keys(e.child),u=0;u<c.length;u++){var l=c[u];if(e.child[l]&&e.child[l].length>1)for(var p in a[l]=[],e.child[l])e.child[l].hasOwnProperty(p)&&a[l].push(t(e.child[l][p],n,l));else{var f=t(e.child[l][0],n,l),h=!0===n.arrayMode&&"object"===r(f)||o.isTagNameInArrayMode(l,n.arrayMode,i);a[l]=h?[f]:f}}return a}},5651:(t,e,n)=>{var r=n(6410),o=n(6410).buildOptions,i=n(4369),a=function t(e,n,o){for(var i,a="{",s=Object.keys(e.child),c=0;c<s.length;c++){var u=s[c];if(e.child[u]&&e.child[u].length>1){for(var l in a+='"'+u+'" : [ ',e.child[u])a+=t(e.child[u][l],n)+" , ";a=a.substr(0,a.length-1)+" ] "}else a+='"'+u+'" : '+t(e.child[u][0],n)+" ,"}return r.merge(a,e.attrsMap),r.isEmptyObject(a)?r.isExist(e.val)?e.val:"":(r.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==n.cdataPositionChar)&&(a+='"'+n.textNodeName+'" : '+(!0!==(i=e.val)&&!1!==i&&isNaN(i)?'"'+i+'"':i)),","===a[a.length-1]&&(a=a.substr(0,a.length-2)),a+"}")};e.convertToJsonString=function(t,e){return(e=o(e,i.defaultOptions,i.props)).indentBy=e.indentBy||"",a(t,e)}},8819:(t,e,n)=>{var r=n(504),o=n(4369),i=n(4369),a=n(6410).buildOptions,s=n(1135);e.parse=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;if(n){!0===n&&(n={});var c=s.validate(t,n);if(!0!==c)throw Error(c.err.msg)}e.parseTrueNumberOnly&&!1!==e.parseNodeValue&&!e.numParseOptions&&(e.numParseOptions={leadingZeros:!1});var u=a(e,i.defaultOptions,i.props),l=o.getTraversalObj(t,u);return r.convertToJson(l,u)},e.convertTonimn=n(3927).convert2nimn,e.getTraversalObj=o.getTraversalObj,e.convertToJson=r.convertToJson,e.convertToJsonString=n(5651).convertToJsonString,e.validate=s.validate,e.j2xParser=n(7412),e.parseToNimn=function(t,n,r){return e.convertTonimn(e.getTraversalObj(t,r),n,r)}},6410:(t,e)=>{var n="[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+n+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,n){if(e)for(var r=Object.keys(e),o=r.length,i=0;i<o;i++)t[r[i]]="strict"===n?[e[r[i]]]:e[r[i]]},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,n){var r={};if(!t)return e;for(var o=0;o<n.length;o++)void 0!==t[n[o]]?r[n[o]]=t[n[o]]:r[n[o]]=e[n[o]];return r},e.isTagNameInArrayMode=function(t,e,n){return!1!==e&&(e instanceof RegExp?e.test(t):"function"==typeof e?!!e(t,n):"strict"===e)},e.isName=function(t){return!(null==r.exec(t))},e.getAllMatches=function(t,e){for(var n=[],r=e.exec(t);r;){var o=[];o.startIndex=e.lastIndex-r[0].length;for(var i=r.length,a=0;a<i;a++)o.push(r[a]);n.push(o),r=e.exec(t)}return n},e.nameRegexp=n},1135:(t,e,n)=>{var r=n(6410),o={allowBooleanAttributes:!1},i=["allowBooleanAttributes"];function a(t,e){for(var n=e;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{var r=t.substr(n,e-n);if(e>5&&"xml"===r)return f("InvalidXml","XML declaration allowed only at the start of the document.",d(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function s(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){var n=1;for(e+=8;e<t.length;e++)if("<"===t[e])n++;else if(">"===t[e]&&0==--n)break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}function c(t,e){for(var n="",r="",o=!1;e<t.length;e++){if('"'===t[e]||"'"===t[e])""===r?r=t[e]:r!==t[e]||(r="");else if(">"===t[e]&&""===r){o=!0;break}n+=t[e]}return""===r&&{value:n,index:e,tagClosed:o}}e.validate=function(t,e){e=r.buildOptions(e,o,i);var n,u=[],h=!1,m=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(var g=0;g<t.length;g++)if("<"===t[g]&&"?"===t[g+1]){if((g=a(t,g+=2)).err)return g}else{if("<"!==t[g]){if(" "===t[g]||"\t"===t[g]||"\n"===t[g]||"\r"===t[g])continue;return f("InvalidChar","char '"+t[g]+"' is not expected.",d(t,g))}var v=g;if("!"===t[++g]){g=s(t,g);continue}var y=!1;"/"===t[g]&&(y=!0,g++);for(var w="";g<t.length&&">"!==t[g]&&" "!==t[g]&&"\t"!==t[g]&&"\n"!==t[g]&&"\r"!==t[g];g++)w+=t[g];if("/"===(w=w.trim())[w.length-1]&&(w=w.substring(0,w.length-1),g--),n=w,!r.isName(n))return f("InvalidTag",0===w.trim().length?"Invalid space after '<'.":"Tag '"+w+"' is an invalid name.",d(t,g));var b=c(t,g);if(!1===b)return f("InvalidAttr","Attributes for '"+w+"' have open quote.",d(t,g));var x=b.value;if(g=b.index,"/"===x[x.length-1]){var $=g-x.length,k=l(x=x.substring(0,x.length-1),e);if(!0!==k)return f(k.err.code,k.err.msg,d(t,$+k.err.line));h=!0}else if(y){if(!b.tagClosed)return f("InvalidTag","Closing tag '"+w+"' doesn't have proper closing.",d(t,g));if(x.trim().length>0)return f("InvalidTag","Closing tag '"+w+"' can't have attributes or invalid starting.",d(t,v));var T=u.pop();if(w!==T.tagName){var E=d(t,T.tagStartPos);return f("InvalidTag","Expected closing tag '"+T.tagName+"' (opened in line "+E.line+", col "+E.col+") instead of closing tag '"+w+"'.",d(t,v))}0==u.length&&(m=!0)}else{var A=l(x,e);if(!0!==A)return f(A.err.code,A.err.msg,d(t,g-x.length+A.err.line));if(!0===m)return f("InvalidXml","Multiple possible root nodes found.",d(t,g));u.push({tagName:w,tagStartPos:v}),h=!0}for(g++;g<t.length;g++)if("<"===t[g]){if("!"===t[g+1]){g=s(t,++g);continue}if("?"!==t[g+1])break;if((g=a(t,++g)).err)return g}else if("&"===t[g]){var N=p(t,g);if(-1==N)return f("InvalidChar","char '&' is not expected.",d(t,g));g=N}"<"===t[g]&&g--}return h?1==u.length?f("InvalidTag","Unclosed tag '"+u[0].tagName+"'.",d(t,u[0].tagStartPos)):!(u.length>0)||f("InvalidXml","Invalid '"+JSON.stringify(u.map((function(t){return t.tagName})),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):f("InvalidXml","Start tag expected.",1)};var u=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function l(t,e){for(var n=r.getAllMatches(t,u),o={},i=0;i<n.length;i++){if(0===n[i][1].length)return f("InvalidAttr","Attribute '"+n[i][2]+"' has no space in starting.",m(n[i]));if(void 0===n[i][3]&&!e.allowBooleanAttributes)return f("InvalidAttr","boolean attribute '"+n[i][2]+"' is not allowed.",m(n[i]));var a=n[i][2];if(!h(a))return f("InvalidAttr","Attribute '"+a+"' is an invalid name.",m(n[i]));if(o.hasOwnProperty(a))return f("InvalidAttr","Attribute '"+a+"' is repeated.",m(n[i]));o[a]=1}return!0}function p(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){var n=/\d/;for("x"===t[e]&&(e++,n=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(n))break}return-1}(t,++e);for(var n=0;e<t.length;e++,n++)if(!(t[e].match(/\w/)&&n<20)){if(";"===t[e])break;return-1}return e}function f(t,e,n){return{err:{code:t,msg:e,line:n.line||n,col:n.col}}}function h(t){return r.isName(t)}function d(t,e){var n=t.substring(0,e).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function m(t){return t.startIndex+t[1].length}},6613:t=>{t.exports=function(t,e,n){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=n,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}}},4369:(t,e,n)=>{var r=n(6410),o=n(6410).buildOptions,i=n(6613),a=n(5512);"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,r.nameRegexp),!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var s={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",numParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(t,e){return t},attrValueProcessor:function(t,e){return t},stopNodes:[],alwaysCreateTextNode:!1};e.defaultOptions=s;var c=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","numParseOptions","stopNodes","alwaysCreateTextNode"];function u(t,e,n){return e&&(n.trimValues&&(e=e.trim()),e=p(e=n.tagValueProcessor(e,t),n.parseNodeValue,n.numParseOptions)),e}function l(t,e){if(e.ignoreNameSpace){var n=t.split(":"),r="/"===t.charAt(0)?"/":"";if("xmlns"===n[0])return"";2===n.length&&(t=r+n[1])}return t}function p(t,e,n){if(e&&"string"==typeof t){var o=t.trim();return"true"===o||"false"!==o&&a(t,n)}return r.isExist(t)?t:""}e.props=c;var f=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function h(t,e){if(!e.ignoreAttributes&&"string"==typeof t){t=t.replace(/\r?\n/g," ");for(var n=r.getAllMatches(t,f),o=n.length,i={},a=0;a<o;a++){var s=l(n[a][1],e);s.length&&(void 0!==n[a][4]?(e.trimValues&&(n[a][4]=n[a][4].trim()),n[a][4]=e.attrValueProcessor(n[a][4],s),i[e.attributeNamePrefix+s]=p(n[a][4],e.parseAttributeValue,e.numParseOptions)):e.allowBooleanAttributes&&(i[e.attributeNamePrefix+s]=!0))}if(!Object.keys(i).length)return;if(e.attrNodeName){var c={};return c[e.attrNodeName]=i,c}return i}}function d(t,e){for(var n,r="",o=e;o<t.length;o++){var i=t[o];if(n)i===n&&(n="");else if('"'===i||"'"===i)n=i;else{if(">"===i)return{data:r,index:o};"\t"===i&&(i=" ")}r+=i}}function m(t,e,n,r){var o=t.indexOf(e,n);if(-1===o)throw new Error(r);return o+e.length-1}e.getTraversalObj=function(t,e){t=t.replace(/\r\n?/g,"\n"),e=o(e,s,c);for(var n=new i("!xml"),a=n,l="",p=0;p<t.length;p++)if("<"===t[p])if("/"===t[p+1]){var f=m(t,">",p,"Closing Tag is not closed."),g=t.substring(p+2,f).trim();if(e.ignoreNameSpace){var v=g.indexOf(":");-1!==v&&(g=g.substr(v+1))}a&&(a.val?a.val=r.getValue(a.val)+""+u(g,l,e):a.val=u(g,l,e)),e.stopNodes.length&&e.stopNodes.includes(a.tagname)&&(a.child=[],null==a.attrsMap&&(a.attrsMap={}),a.val=t.substr(a.startIndex+1,p-a.startIndex-1)),a=a.parent,l="",p=f}else if("?"===t[p+1])p=m(t,"?>",p,"Pi Tag is not closed.");else if("!--"===t.substr(p+1,3))p=m(t,"--\x3e",p,"Comment is not closed.");else if("!D"===t.substr(p+1,2)){var y=m(t,">",p,"DOCTYPE is not closed.");p=t.substring(p,y).indexOf("[")>=0?t.indexOf("]>",p)+1:y}else if("!["===t.substr(p+1,2)){var w=m(t,"]]>",p,"CDATA is not closed.")-2,b=t.substring(p+9,w);if(l&&(a.val=r.getValue(a.val)+""+u(a.tagname,l,e),l=""),e.cdataTagName){var x=new i(e.cdataTagName,a,b);a.addChild(x),a.val=r.getValue(a.val)+e.cdataPositionChar,b&&(x.val=b)}else a.val=(a.val||"")+(b||"");p=w+2}else{var $=d(t,p+1),k=$.data,T=$.index,E=k.indexOf(" "),A=k,N=!0;if(-1!==E&&(A=k.substr(0,E).replace(/\s\s*$/,""),k=k.substr(E+1)),e.ignoreNameSpace){var S=A.indexOf(":");-1!==S&&(N=(A=A.substr(S+1))!==$.data.substr(S+1))}if(a&&l&&"!xml"!==a.tagname&&(a.val=r.getValue(a.val)+""+u(a.tagname,l,e)),k.length>0&&k.lastIndexOf("/")===k.length-1){k="/"===A[A.length-1]?A=A.substr(0,A.length-1):k.substr(0,k.length-1);var C=new i(A,a,"");A!==k&&(C.attrsMap=h(k,e)),a.addChild(C)}else{var I=new i(A,a);e.stopNodes.length&&e.stopNodes.includes(I.tagname)&&(I.startIndex=T),A!==k&&N&&(I.attrsMap=h(k,e)),a.addChild(I),a=I}l="",p=T}else l+=t[p];return n}},2519:t=>{t.exports={sequence:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Failed creating sequence: No functions provided");return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var o=n,i=this;e.length>0;)o=[e.shift().apply(i,o)];return o[0]}}}},9254:(t,e,n)=>{function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=n(2519).sequence,a="@@HOTPATCHER",s=function(){};function c(t){return{original:t,methods:[t],final:!1}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._configuration={registry:{},getEmptyAction:"null"},this.__type__=a}var e,n;return e=t,(n=[{key:"configuration",get:function(){return this._configuration}},{key:"getEmptyAction",get:function(){return this.configuration.getEmptyAction},set:function(t){this.configuration.getEmptyAction=t}},{key:"control",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t||t.__type__!==a)throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");return Object.keys(t.configuration.registry).forEach((function(r){e.configuration.registry.hasOwnProperty(r)?n&&(e.configuration.registry[r]=Object.assign({},t.configuration.registry[r])):e.configuration.registry[r]=Object.assign({},t.configuration.registry[r])})),t._configuration=this.configuration,this}},{key:"execute",value:function(t){for(var e=this.get(t)||s,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e.apply(void 0,r)}},{key:"get",value:function(t){var e,n=this.configuration.registry[t];if(!n)switch(this.getEmptyAction){case"null":return null;case"throw":throw new Error("Failed handling method request: No method provided for override: ".concat(t));default:throw new Error("Failed handling request which resulted in an empty method: Invalid empty-action specified: ".concat(this.getEmptyAction))}return i.apply(void 0,function(t){if(Array.isArray(t))return r(t)}(e=n.methods)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"isPatched",value:function(t){return!!this.configuration.registry[t]}},{key:"patch",value:function(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).chain,r=void 0!==n&&n;if(this.configuration.registry[t]&&this.configuration.registry[t].final)throw new Error("Failed patching '".concat(t,"': Method marked as being final"));if("function"!=typeof e)throw new Error("Failed patching '".concat(t,"': Provided method is not a function"));if(r)this.configuration.registry[t]?this.configuration.registry[t].methods.push(e):this.configuration.registry[t]=c(e);else if(this.isPatched(t)){var o=this.configuration.registry[t].original;this.configuration.registry[t]=Object.assign(c(e),{original:o})}else this.configuration.registry[t]=c(e);return this}},{key:"patchInline",value:function(t,e){this.isPatched(t)||this.patch(t,e);for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return this.execute.apply(this,[t].concat(r))}},{key:"plugin",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((function(n){e.patch(t,n,{chain:!0})})),this}},{key:"restore",value:function(t){if(!this.isPatched(t))throw new Error("Failed restoring method: No method present for key: ".concat(t));if("function"!=typeof this.configuration.registry[t].original)throw new Error("Failed restoring method: Original method not found or of invalid type for key: ".concat(t));this.configuration.registry[t].methods=[this.configuration.registry[t].original]}},{key:"setFinal",value:function(t){if(!this.configuration.registry.hasOwnProperty(t))throw new Error("Failed marking '".concat(t,"' as final: No method found for key"));return this.configuration.registry[t].final=!0,this}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=u},163:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},6893:(t,e)=>{function n(t){return"[object Error]"===(e=t,Object.prototype.toString.call(e))||t instanceof Error;var e}Object.defineProperty(e,"__esModule",{value:!0}),e.isError=e.inherit=e.assertError=void 0,e.assertError=function(t){if(!n(t))throw new Error("Parameter was not an error")},e.inherit=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})},e.isError=n},9104:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.Layerr=void 0;var i=n(2248);Object.defineProperty(e,"Layerr",{enumerable:!0,get:function(){return i.Layerr}}),o(n(8646),e)},2248:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Layerr=void 0;var o=n(6893),i=n(7235);function a(t,e){var n=Array.prototype.slice.call(arguments);if(this instanceof a==0)throw new Error("Cannot invoke 'Layerr' like a function: It must be called with 'new'");var o=i.parseArguments(n),s=o.options,c=o.shortMessage;this.name="Layerr",s.name&&"string"==typeof s.name&&(this.name=s.name);var u=c;if(s.cause&&(Object.defineProperty(this,"_cause",{value:s.cause}),u="".concat(u,": ").concat(s.cause.message)),this.message=u,Object.defineProperty(this,"_info",{value:{}}),s.info&&"object"===r(s.info)&&Object.assign(this._info,s.info),Error.call(this,u),Error.captureStackTrace){var l=s.constructorOpt||this.constructor;Error.captureStackTrace(this,l)}return this}e.Layerr=a,o.inherit(a,Error),a.prototype.cause=function(){return a.cause(this)||void 0},a.prototype.toString=function(){var t=this.name||this.constructor.name||this.constructor.prototype.name;return this.message&&(t="".concat(t,": ").concat(this.message)),t},a.cause=function(t){return o.assertError(t),o.isError(t._cause)?t._cause:null},a.fullStack=function(t){o.assertError(t);var e=a.cause(t);return e?"".concat(t.stack,"\ncaused by: ").concat(a.fullStack(e)):t.stack},a.info=function(t){o.assertError(t);var e={},n=a.cause(t);return n&&Object.assign(e,a.info(n)),t._info&&Object.assign(e,t._info),e}},7235:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.parseArguments=void 0;var o=n(6893);e.parseArguments=function(t){var e,n="";if(0===t.length)e={};else if(o.isError(t[0]))e={cause:t[0]},n=t.slice(1).join(" ")||"";else if(t[0]&&"object"===r(t[0]))e=Object.assign({},t[0]),n=t.slice(1).join(" ")||"";else{if("string"!=typeof t[0])throw new Error("Invalid arguments passed to Layerr");e={},n=n=t.join(" ")||""}return{options:e,shortMessage:n}}},8646:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},9243:(t,e,n)=>{var r,o,i,a,s;r=n(3718),o=n(5106).utf8,i=n(163),a=n(5106).bin,(s=function t(e,n){e.constructor==String?e=n&&"binary"===n.encoding?a.stringToBytes(e):o.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var s=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,p=-1732584194,f=271733878,h=0;h<s.length;h++)s[h]=16711935&(s[h]<<8|s[h]>>>24)|4278255360&(s[h]<<24|s[h]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var d=t._ff,m=t._gg,g=t._hh,v=t._ii;for(h=0;h<s.length;h+=16){var y=u,w=l,b=p,x=f;u=d(u,l,p,f,s[h+0],7,-680876936),f=d(f,u,l,p,s[h+1],12,-389564586),p=d(p,f,u,l,s[h+2],17,606105819),l=d(l,p,f,u,s[h+3],22,-1044525330),u=d(u,l,p,f,s[h+4],7,-176418897),f=d(f,u,l,p,s[h+5],12,1200080426),p=d(p,f,u,l,s[h+6],17,-1473231341),l=d(l,p,f,u,s[h+7],22,-45705983),u=d(u,l,p,f,s[h+8],7,1770035416),f=d(f,u,l,p,s[h+9],12,-1958414417),p=d(p,f,u,l,s[h+10],17,-42063),l=d(l,p,f,u,s[h+11],22,-1990404162),u=d(u,l,p,f,s[h+12],7,1804603682),f=d(f,u,l,p,s[h+13],12,-40341101),p=d(p,f,u,l,s[h+14],17,-1502002290),u=m(u,l=d(l,p,f,u,s[h+15],22,1236535329),p,f,s[h+1],5,-165796510),f=m(f,u,l,p,s[h+6],9,-1069501632),p=m(p,f,u,l,s[h+11],14,643717713),l=m(l,p,f,u,s[h+0],20,-373897302),u=m(u,l,p,f,s[h+5],5,-701558691),f=m(f,u,l,p,s[h+10],9,38016083),p=m(p,f,u,l,s[h+15],14,-660478335),l=m(l,p,f,u,s[h+4],20,-405537848),u=m(u,l,p,f,s[h+9],5,568446438),f=m(f,u,l,p,s[h+14],9,-1019803690),p=m(p,f,u,l,s[h+3],14,-187363961),l=m(l,p,f,u,s[h+8],20,1163531501),u=m(u,l,p,f,s[h+13],5,-1444681467),f=m(f,u,l,p,s[h+2],9,-51403784),p=m(p,f,u,l,s[h+7],14,1735328473),u=g(u,l=m(l,p,f,u,s[h+12],20,-1926607734),p,f,s[h+5],4,-378558),f=g(f,u,l,p,s[h+8],11,-2022574463),p=g(p,f,u,l,s[h+11],16,1839030562),l=g(l,p,f,u,s[h+14],23,-35309556),u=g(u,l,p,f,s[h+1],4,-1530992060),f=g(f,u,l,p,s[h+4],11,1272893353),p=g(p,f,u,l,s[h+7],16,-155497632),l=g(l,p,f,u,s[h+10],23,-1094730640),u=g(u,l,p,f,s[h+13],4,681279174),f=g(f,u,l,p,s[h+0],11,-358537222),p=g(p,f,u,l,s[h+3],16,-722521979),l=g(l,p,f,u,s[h+6],23,76029189),u=g(u,l,p,f,s[h+9],4,-640364487),f=g(f,u,l,p,s[h+12],11,-421815835),p=g(p,f,u,l,s[h+15],16,530742520),u=v(u,l=g(l,p,f,u,s[h+2],23,-995338651),p,f,s[h+0],6,-198630844),f=v(f,u,l,p,s[h+7],10,1126891415),p=v(p,f,u,l,s[h+14],15,-1416354905),l=v(l,p,f,u,s[h+5],21,-57434055),u=v(u,l,p,f,s[h+12],6,1700485571),f=v(f,u,l,p,s[h+3],10,-1894986606),p=v(p,f,u,l,s[h+10],15,-1051523),l=v(l,p,f,u,s[h+1],21,-2054922799),u=v(u,l,p,f,s[h+8],6,1873313359),f=v(f,u,l,p,s[h+15],10,-30611744),p=v(p,f,u,l,s[h+6],15,-1560198380),l=v(l,p,f,u,s[h+13],21,1309151649),u=v(u,l,p,f,s[h+4],6,-145523070),f=v(f,u,l,p,s[h+11],10,-1120210379),p=v(p,f,u,l,s[h+2],15,718787259),l=v(l,p,f,u,s[h+9],21,-343485551),u=u+y>>>0,l=l+w>>>0,p=p+b>>>0,f=f+x>>>0}return r.endian([u,l,p,f])})._ff=function(t,e,n,r,o,i,a){var s=t+(e&n|~e&r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._gg=function(t,e,n,r,o,i,a){var s=t+(e&r|n&~r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._hh=function(t,e,n,r,o,i,a){var s=t+(e^n^r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._ii=function(t,e,n,r,o,i,a){var s=t+(n^(e|~r))+(o>>>0)+a;return(s<<i|s>>>32-i)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(s(t,e));return e&&e.asBytes?n:e&&e.asString?a.bytesToString(n):r.bytesToHex(n)}},3e3:(t,e,n)=>{t.exports=f,f.Minimatch=h;var r={sep:"/"};try{r=n(67)}catch(t){}var o=f.GLOBSTAR=h.GLOBSTAR={},i=n(7562),a={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},s="[^/]",c="[^/]*?",u="().*{}+?[]^$\\!".split("").reduce((function(t,e){return t[e]=!0,t}),{}),l=/\/+/;function p(t,e){t=t||{},e=e||{};var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function f(t,e,n){if("string"!=typeof e)throw new TypeError("glob pattern string required");return n||(n={}),!(!n.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new h(e,n).match(t))}function h(t,e){if(!(this instanceof h))return new h(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==r.sep&&(t=t.split(r.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function d(t,e){if(e||(e=this instanceof h?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:i(t)}f.filter=function(t,e){return e=e||{},function(n,r,o){return f(n,t,e)}},f.defaults=function(t){if(!t||!Object.keys(t).length)return f;var e=f,n=function(n,r,o){return e.minimatch(n,r,p(t,o))};return n.Minimatch=function(n,r){return new e.Minimatch(n,p(t,r))},n},h.defaults=function(t){return t&&Object.keys(t).length?f.defaults(t).Minimatch:h},h.prototype.debug=function(){},h.prototype.make=function(){if(!this._made){var t=this.pattern,e=this.options;if(e.nocomment||"#"!==t.charAt(0))if(t){this.parseNegate();var n=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error),this.debug(this.pattern,n),n=this.globParts=n.map((function(t){return t.split(l)})),this.debug(this.pattern,n),n=n.map((function(t,e,n){return t.map(this.parse,this)}),this),this.debug(this.pattern,n),n=n.filter((function(t){return-1===t.indexOf(!1)})),this.debug(this.pattern,n),this.set=n}else this.empty=!0;else this.comment=!0}},h.prototype.parseNegate=function(){var t=this.pattern,e=!1,n=0;if(!this.options.nonegate){for(var r=0,o=t.length;r<o&&"!"===t.charAt(r);r++)e=!e,n++;n&&(this.pattern=t.substr(n)),this.negate=e}},f.braceExpand=function(t,e){return d(t,e)},h.prototype.braceExpand=d,h.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var n=this.options;if(!n.noglobstar&&"**"===t)return o;if(""===t)return"";var r,i="",l=!!n.nocase,p=!1,f=[],h=[],d=!1,g=-1,v=-1,y="."===t.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",w=this;function b(){if(r){switch(r){case"*":i+=c,l=!0;break;case"?":i+=s,l=!0;break;default:i+="\\"+r}w.debug("clearStateChar %j %j",r,i),r=!1}}for(var x,$=0,k=t.length;$<k&&(x=t.charAt($));$++)if(this.debug("%s\t%s %s %j",t,$,i,x),p&&u[x])i+="\\"+x,p=!1;else switch(x){case"/":return!1;case"\\":b(),p=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,$,i,x),d){this.debug("  in class"),"!"===x&&$===v+1&&(x="^"),i+=x;continue}w.debug("call clearStateChar %j",r),b(),r=x,n.noext&&b();continue;case"(":if(d){i+="(";continue}if(!r){i+="\\(";continue}f.push({type:r,start:$-1,reStart:i.length,open:a[r].open,close:a[r].close}),i+="!"===r?"(?:(?!(?:":"(?:",this.debug("plType %j %j",r,i),r=!1;continue;case")":if(d||!f.length){i+="\\)";continue}b(),l=!0;var T=f.pop();i+=T.close,"!"===T.type&&h.push(T),T.reEnd=i.length;continue;case"|":if(d||!f.length||p){i+="\\|",p=!1;continue}b(),i+="|";continue;case"[":if(b(),d){i+="\\"+x;continue}d=!0,v=$,g=i.length,i+=x;continue;case"]":if($===v+1||!d){i+="\\"+x,p=!1;continue}if(d){var E=t.substring(v+1,$);try{RegExp("["+E+"]")}catch(t){var A=this.parse(E,m);i=i.substr(0,g)+"\\["+A[0]+"\\]",l=l||A[1],d=!1;continue}}l=!0,d=!1,i+=x;continue;default:b(),p?p=!1:!u[x]||"^"===x&&d||(i+="\\"),i+=x}for(d&&(E=t.substr(v+1),A=this.parse(E,m),i=i.substr(0,g)+"\\["+A[0],l=l||A[1]),T=f.pop();T;T=f.pop()){var N=i.slice(T.reStart+T.open.length);this.debug("setting tail",i,T),N=N.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,n){return n||(n="\\"),e+e+n+"|"})),this.debug("tail=%j\n   %s",N,N,T,i);var S="*"===T.type?c:"?"===T.type?s:"\\"+T.type;l=!0,i=i.slice(0,T.reStart)+S+"\\("+N}b(),p&&(i+="\\\\");var C=!1;switch(i.charAt(0)){case".":case"[":case"(":C=!0}for(var I=h.length-1;I>-1;I--){var O=h[I],B=i.slice(0,O.reStart),j=i.slice(O.reStart,O.reEnd-8),M=i.slice(O.reEnd-8,O.reEnd),P=i.slice(O.reEnd);M+=P;var L=B.split("(").length-1,R=P;for($=0;$<L;$++)R=R.replace(/\)[+*?]?/,"");var D="";""===(P=R)&&e!==m&&(D="$"),i=B+j+P+D+M}if(""!==i&&l&&(i="(?=.)"+i),C&&(i=y+i),e===m)return[i,l];if(!l)return t.replace(/\\(.)/g,"$1");var _=n.nocase?"i":"";try{var U=new RegExp("^"+i+"$",_)}catch(t){return new RegExp("$.")}return U._glob=t,U._src=i,U};var m={};f.makeRe=function(t,e){return new h(t,e||{}).makeRe()},h.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,n=e.noglobstar?c:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",r=e.nocase?"i":"",i=t.map((function(t){return t.map((function(t){return t===o?n:"string"==typeof t?t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):t._src})).join("\\/")})).join("|");i="^(?:"+i+")$",this.negate&&(i="^(?!"+i+").*$");try{this.regexp=new RegExp(i,r)}catch(t){this.regexp=!1}return this.regexp},f.match=function(t,e,n){var r=new h(e,n=n||{});return t=t.filter((function(t){return r.match(t)})),r.options.nonull&&!t.length&&t.push(e),t},h.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var n=this.options;"/"!==r.sep&&(t=t.split(r.sep).join("/")),t=t.split(l),this.debug(this.pattern,"split",t);var o,i,a=this.set;for(this.debug(this.pattern,"set",a),i=t.length-1;i>=0&&!(o=t[i]);i--);for(i=0;i<a.length;i++){var s=a[i],c=t;if(n.matchBase&&1===s.length&&(c=[o]),this.matchOne(c,s,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate},h.prototype.matchOne=function(t,e,n){var r=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var i=0,a=0,s=t.length,c=e.length;i<s&&a<c;i++,a++){this.debug("matchOne loop");var u,l=e[a],p=t[i];if(this.debug(e,l,p),!1===l)return!1;if(l===o){this.debug("GLOBSTAR",[e,l,p]);var f=i,h=a+1;if(h===c){for(this.debug("** at the end");i<s;i++)if("."===t[i]||".."===t[i]||!r.dot&&"."===t[i].charAt(0))return!1;return!0}for(;f<s;){var d=t[f];if(this.debug("\nglobstar while",t,f,e,h,d),this.matchOne(t.slice(f),e.slice(h),n))return this.debug("globstar found match!",f,s,d),!0;if("."===d||".."===d||!r.dot&&"."===d.charAt(0)){this.debug("dot detected!",t,f,e,h);break}this.debug("globstar swallow a segment, and continue"),f++}return!(!n||(this.debug("\n>>> no match, partial?",t,f,e,h),f!==s))}if("string"==typeof l?(u=r.nocase?p.toLowerCase()===l.toLowerCase():p===l,this.debug("string match",l,p,u)):(u=p.match(l),this.debug("pattern match",l,p,u)),!u)return!1}if(i===s&&a===c)return!0;if(i===s)return n;if(a===c)return i===s-1&&""===t[i];throw new Error("wtf?")}},2421:t=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){var e="function"==typeof Map?new Map:void 0;return(n=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,a(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)})(t)}function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=".",c=function(t){function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=function(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,a(n).call(this,t))).name="ObjectPrototypeMutationError",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t),n}(n(Error));function u(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.split(s),i=o.length,a=function(e){var n=o[e];if(!t)return{v:void 0};if("+"===n){if(Array.isArray(t))return{v:t.map((function(n,i){var a=o.slice(e+1);return a.length>0?u(n,a.join(s),r):r(t,i,o,e)}))};var i=o.slice(0,e).join(s);throw new Error("Object at wildcard (".concat(i,") is not an array"))}t=r(t,n,o,e)},c=0;c<i;c++){var l=a(c);if("object"===e(l))return l.v}return t}function l(t,e){return t.length===e+1}t.exports={set:function(t,n,r){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n]=r,t[n];try{return u(t,n,(function(t,e,n,o){if(t===Reflect.getPrototypeOf({}))throw new c("Attempting to mutate Object.prototype");if(!t[e]){var i=Number.isInteger(Number(n[o+1])),a="+"===n[o+1];t[e]=i||a?[]:{}}return l(n,o)&&(t[e]=r),t[e]}))}catch(e){if(e instanceof c)throw e;return t}},get:function(t,n){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n];try{return u(t,n,(function(t,e){return t[e]}))}catch(e){return t}},has:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;if("number"==typeof n)return n in t;try{var o=!1;return u(t,n,(function(t,e,n,i){if(!l(n,i))return t&&t[e];o=r.own?t.hasOwnProperty(e):e in t})),o}catch(t){return!1}},hasOwn:function(t,e,n){return this.has(t,e,n||{own:!0})},isIn:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;try{var i=!1,a=!1;return u(t,n,(function(t,n,o,s){return i=i||t===r||!!t&&t[n]===r,a=l(o,s)&&"object"===e(t)&&n in t,t&&t[n]})),o.validPath?i&&a:i}catch(t){return!1}},ObjectPrototypeMutationError:c}},1441:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(6930),i=function(t){return"string"==typeof t};function a(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o))}return n}var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,c={};function u(t){return s.exec(t).slice(1)}c.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var r=n>=0?arguments[n]:process.cwd();if(!i(r))throw new TypeError("Arguments to path.resolve must be strings");r&&(t=r+"/"+t,e="/"===r.charAt(0))}return(e?"/":"")+(t=a(t.split("/"),!e).join("/"))||"."},c.normalize=function(t){var e=c.isAbsolute(t),n="/"===t.substr(-1);return(t=a(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},c.isAbsolute=function(t){return"/"===t.charAt(0)},c.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!i(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n)}return c.normalize(t)},c.relative=function(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n+1)}t=c.resolve(t).substr(1),e=c.resolve(e).substr(1);for(var r=n(t.split("/")),o=n(e.split("/")),i=Math.min(r.length,o.length),a=i,s=0;s<i;s++)if(r[s]!==o[s]){a=s;break}var u=[];for(s=a;s<r.length;s++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},c._makeLong=function(t){return t},c.dirname=function(t){var e=u(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},c.basename=function(t,e){var n=u(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},c.extname=function(t){return u(t)[3]},c.format=function(t){if(!o.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+r(t));var e=t.root||"";if(!i(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+r(t.root));return(t.dir?t.dir+c.sep:"")+(t.base||"")},c.parse=function(t){if(!i(t))throw new TypeError("Parameter 'pathString' must be a string, not "+r(t));var e=u(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,e[1].length-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},c.sep="/",c.delimiter=":",t.exports=c},1361:(t,e)=>{var n=Object.prototype.hasOwnProperty;function r(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}function o(t){try{return encodeURIComponent(t)}catch(t){return null}}e.stringify=function(t,e){e=e||"";var r,i,a=[];for(i in"string"!=typeof e&&(e="?"),t)if(n.call(t,i)){if((r=t[i])||null!=r&&!isNaN(r)||(r=""),i=o(i),r=o(r),null===i||null===r)continue;a.push(i+"="+r)}return a.length?e+a.join("&"):""},e.parse=function(t){for(var e,n=/([^=?#&]+)=?([^&]*)/g,o={};e=n.exec(t);){var i=r(e[1]),a=r(e[2]);null===i||null===a||i in o||(o[i]=a)}return o}},4095:t=>{t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},5512:t=>{var e=/^[-+]?0x[a-fA-F0-9]+$/,n=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var r={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function o(t){return t&&-1!==t.indexOf(".")?("."===(t=t.replace(/0+$/,""))?t="0":"."===t[0]?t="0"+t:"."===t[t.length-1]&&(t=t.substr(0,t.length-1)),t):t}t.exports=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i=Object.assign({},r,i),!t||"string"!=typeof t)return t;var a=t.trim();if(void 0!==i.skipLike&&i.skipLike.test(a))return t;if(i.hex&&e.test(a))return Number.parseInt(a,16);var s=n.exec(a);if(s){var c=s[1],u=s[2],l=o(s[3]),p=s[4]||s[6];if(!i.leadingZeros&&u.length>0&&c&&"."!==a[2])return t;if(!i.leadingZeros&&u.length>0&&!c&&"."!==a[1])return t;var f=Number(a),h=""+f;return-1!==h.search(/[eE]/)||p?i.eNotation?f:t:-1!==a.indexOf(".")?"0"===h&&""===l||h===l||c&&h==="-"+l?f:t:u?l===h||c+l===h?f:t:a===h||a===c+h?f:t}return t}},5842:function(t,e,n){var r,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=function(){function t(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var o=t[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),e.push(o))}var i=e.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return t("object"===a(arguments[0])?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=i():void 0===(o="function"==typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o)},1095:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(4095),i=n(1361),a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,c=/^[a-zA-Z]:/,u=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function l(t){return(t||"").toString().replace(u,"")}var p=[["#","hash"],["?","query"],function(t,e){return d(e.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],f={hash:1,query:1};function h(t){var e,n=("undefined"!=typeof window?window:void 0!==Go?Go:"undefined"!=typeof self?self:{}).location||{},o={},i=r(t=t||n);if("blob:"===t.protocol)o=new g(unescape(t.pathname),{});else if("string"===i)for(e in o=new g(t,{}),f)delete o[e];else if("object"===i){for(e in t)e in f||(o[e]=t[e]);void 0===o.slashes&&(o.slashes=a.test(t.href))}return o}function d(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function m(t,e){t=l(t),e=e||{};var n,r=s.exec(t),o=r[1]?r[1].toLowerCase():"",i=!!r[2],a=!!r[3],c=0;return i?a?(n=r[2]+r[3]+r[4],c=r[2].length+r[3].length):(n=r[2]+r[4],c=r[2].length):a?(n=r[3]+r[4],c=r[3].length):n=r[4],"file:"===o?c>=2&&(n=n.slice(2)):d(o)?n=r[4]:o?i&&(n=n.slice(2)):c>=2&&d(e.protocol)&&(n=r[4]),{protocol:o,slashes:i||d(o),slashesCount:c,rest:n}}function g(t,e,n){if(t=l(t),!(this instanceof g))return new g(t,e,n);var a,s,u,f,v,y,w=p.slice(),b=r(e),x=this,$=0;for("object"!==b&&"string"!==b&&(n=e,e=null),n&&"function"!=typeof n&&(n=i.parse),a=!(s=m(t||"",e=h(e))).protocol&&!s.slashes,x.slashes=s.slashes||a&&e.slashes,x.protocol=s.protocol||e.protocol||"",t=s.rest,("file:"===s.protocol&&(2!==s.slashesCount||c.test(t))||!s.slashes&&(s.protocol||s.slashesCount<2||!d(x.protocol)))&&(w[3]=[/(.*)/,"pathname"]);$<w.length;$++)"function"!=typeof(f=w[$])?(u=f[0],y=f[1],u!=u?x[y]=t:"string"==typeof u?~(v=t.indexOf(u))&&("number"==typeof f[2]?(x[y]=t.slice(0,v),t=t.slice(v+f[2])):(x[y]=t.slice(v),t=t.slice(0,v))):(v=u.exec(t))&&(x[y]=v[1],t=t.slice(0,v.index)),x[y]=x[y]||a&&f[3]&&e[y]||"",f[4]&&(x[y]=x[y].toLowerCase())):t=f(t,x);n&&(x.query=n(x.query)),a&&e.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==e.pathname)&&(x.pathname=function(t,e){if(""===t)return e;for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),r=n.length,o=n[r-1],i=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(i=!0),n.splice(r,1),a--);return i&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}(x.pathname,e.pathname)),"/"!==x.pathname.charAt(0)&&d(x.protocol)&&(x.pathname="/"+x.pathname),o(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(f=x.auth.split(":"),x.username=f[0],x.password=f[1]||""),x.origin="file:"!==x.protocol&&d(x.protocol)&&x.host?x.protocol+"//"+x.host:"null",x.href=x.toString()}g.prototype={set:function(t,e,n){var r=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||i.parse)(e)),r[t]=e;break;case"port":r[t]=e,o(e,r.protocol)?e&&(r.host=r.hostname+":"+e):(r.host=r.hostname,r[t]="");break;case"hostname":r[t]=e,r.port&&(e+=":"+r.port),r.host=e;break;case"host":r[t]=e,/:\d+$/.test(e)?(e=e.split(":"),r.port=e.pop(),r.hostname=e.join(":")):(r.hostname=e,r.port="");break;case"protocol":r.protocol=e.toLowerCase(),r.slashes=!n;break;case"pathname":case"hash":if(e){var a="pathname"===t?"/":"#";r[t]=e.charAt(0)!==a?a+e:e}else r[t]=e;break;case"username":case"password":r[t]=encodeURIComponent(e);break;case"auth":var s=e.split(":");r.username=s[0],r.password=2===s.length?s[1]:""}for(var c=0;c<p.length;c++){var u=p[c];u[4]&&(r[u[1]]=r[u[1]].toLowerCase())}return r.auth=r.password?r.username+":"+r.password:r.username,r.origin="file:"!==r.protocol&&d(r.protocol)&&r.host?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},toString:function(t){t&&"function"==typeof t||(t=i.stringify);var e,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var a=o+(n.protocol&&n.slashes||d(n.protocol)?"//":"");return n.username?(a+=n.username,n.password&&(a+=":"+n.password),a+="@"):n.password&&(a+=":"+n.password,a+="@"),a+=n.host+n.pathname,(e="object"===r(n.query)?t(n.query):n.query)&&(a+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(a+=n.hash),a}},g.extractProtocol=m,g.location=h,g.trimLeft=l,g.qs=i,t.exports=g},67:()=>{},6930:()=>{},9227:()=>{}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.amdO={},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var r={};return(()=>{n.r(r),n.d(r,{AuthType:()=>x,ErrorCode:()=>$,createClient:()=>$e,getPatcher:()=>B,parseStat:()=>st,parseXML:()=>it});var t=n(1095),e=n.n(t),o=n(5842),i=n.n(o),a=n(1441),s=n.n(a),c="__PATH_SEPARATOR_POSIX__",u="__PATH_SEPARATOR_WINDOWS__";function l(t){var e=t.replace(/\//g,c).replace(/\\\\/g,u);return encodeURIComponent(e).split(u).join("\\\\").split(c).join("/")}function p(t){if(!t||"/"===t)return[];var e=t,n=[];do{n.push(e),e=(0,a.dirname)(e)}while(e&&"/"!==e);return n}function f(t){var e=t;return"/"!==e[0]&&(e="/"+e),/^.+\/$/.test(e)&&(e=e.substr(0,e.length-1)),e}function h(t){var n=new(e())(t).pathname;return n.length<=0&&(n="/"),f(n)}function d(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i()(e.reduce((function(t,e,n){return(0===n||"/"!==e||"/"===e&&"/"!==t[t.length-1])&&t.push(e),t}),[]))}function m(t){return t.replace(/^https?:\/\/[^\/]+/,"")}var g=n(9104),v=n(9243),y=n.n(v),w="abcdef0123456789";function b(t,e){var n=t.url.replace("//",""),r=-1==n.indexOf("/")?"/":n.slice(n.indexOf("/")),o=t.method?t.method.toUpperCase():"GET",i=!!/(^|,)\s*auth\s*($|,)/.test(e.qop)&&"auth",a="00000000".concat(e.nc).slice(-8),s=function(t,e,n,r,o,i){var a=y()("".concat(e,":").concat(n,":").concat(r));return t&&"md5-sess"===t.toLowerCase()?y()("".concat(a,":").concat(o,":").concat(i)):a}(e.algorithm,e.username,e.realm,e.password,e.nonce,e.cnonce),c=y()("".concat(o,":").concat(r)),u=i?y()("".concat(s,":").concat(e.nonce,":").concat(a,":").concat(e.cnonce,":").concat(i,":").concat(c)):y()("".concat(s,":").concat(e.nonce,":").concat(c)),l={username:e.username,realm:e.realm,nonce:e.nonce,uri:r,qop:i,response:u,nc:a,cnonce:e.cnonce,algorithm:e.algorithm,opaque:e.opaque},p=[];for(var f in l)l[f]&&("qop"===f||"nc"===f||"algorithm"===f?p.push("".concat(f,"=").concat(l[f])):p.push("".concat(f,'="').concat(l[f],'"')));return"Digest ".concat(p.join(", "))}var x,$,k=n(9146);function T(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}function E(t){return(0,k.decode)(t)}function A(t,e,n,r){switch(t.authType){case x.Digest:t.digest=function(t,e){return{username:t,password:e,nc:0,algorithm:"md5",hasDigestAuth:!1}}(e,n);break;case x.None:break;case x.Password:t.headers.Authorization=function(t,e){var n,r=(n="".concat(t,":").concat(e),(0,k.encode)(n));return"Basic ".concat(r)}(e,n);break;case x.Token:t.headers.Authorization="".concat((o=r).token_type," ").concat(o.access_token);break;default:throw new g.Layerr({info:{code:$.InvalidAuthType}},"Invalid auth type: ".concat(t.authType))}var o}!function(t){t.Digest="digest",t.None="none",t.Password="password",t.Token="token"}(x||(x={})),function(t){t.DataTypeNoLength="data-type-no-length",t.InvalidAuthType="invalid-auth-type",t.InvalidOutputFormat="invalid-output-format",t.LinkUnsupportedAuthType="link-unsupported-auth"}($||($={}));var N=n(5056),S=n.n(N),C=n(9254),I=n.n(C),O=null;function B(){return O||(O=new(I())),O}function j(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t){return function(t){if("object"!==P(t)||null===t||"[object Object]"!=Object.prototype.toString.call(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t)?Object.assign({},t):Object.setPrototypeOf(Object.assign({},t),Object.getPrototypeOf(t))}function R(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=null,o=[].concat(e);o.length>0;){var i=o.shift();r=r?D(r,i):L(i)}return r}function D(t,e){var n=L(t);return Object.keys(e).forEach((function(t){n.hasOwnProperty(t)?Array.isArray(e[t])?n[t]=Array.isArray(n[t])?[].concat(j(n[t]),j(e[t])):j(e[t]):"object"===P(e[t])&&e[t]?n[t]="object"===P(n[t])&&n[t]?D(n[t],e[t]):L(e[t]):n[t]=e[t]:n[t]=e[t]})),n}function _(t){return B().patchInline("request",(function(t){return S()(t)}),t)}function U(t,e,n){var r=L(t);return r.headers=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return{};var r={};return e.reduce((function(t,e){return Object.keys(e).forEach((function(n){var o=n.toLowerCase();r.hasOwnProperty(o)?t[r[o]]=e[n]:(r[o]=n,t[n]=e[n])})),t}),{})}(e.headers,r.headers||{},n.headers||{}),void 0!==n.data&&(r.data=n.data),n.signal&&(r.signal=n.signal),e.httpAgent&&(r.httpAgent=e.httpAgent),e.httpsAgent&&(r.httpsAgent=e.httpsAgent),e.digest&&(r._digest=e.digest),"boolean"==typeof e.withCredentials&&(r.withCredentials=e.withCredentials),e.maxContentLength&&(r.maxContentLength=e.maxContentLength),e.maxBodyLength&&(r.maxBodyLength=e.maxBodyLength),n.hasOwnProperty("onUploadProgress")&&(r.onUploadProgress=n.onUploadProgress),n.hasOwnProperty("onDownloadProgress")&&(r.onDownloadProgress=n.onDownloadProgress),r.validateStatus=function(){return!0},r}function F(t){if(!t._digest)return _(t);var e=t._digest;return delete t._digest,e.hasDigestAuth&&(t=R(t,{headers:{Authorization:b(t,e)}})),_(t).then((function(n){if(401==n.status){if(e.hasDigestAuth=function(t,e){var n=t.headers["www-authenticate"]||"";if("digest"!==n.split(/\s/)[0].toLowerCase())return!1;for(var r=/([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;;){var o=r.exec(n);if(!o)break;e[o[1]]=o[2]||o[3]}return e.nc+=1,e.cnonce=function(){for(var t="",e=0;e<32;++e)t="".concat(t).concat(w[Math.floor(Math.random()*w.length)]);return t}(),!0}(n,e),e.hasDigestAuth)return _(t=R(t,{headers:{Authorization:b(t,e)}})).then((function(t){return 401==t.status?e.hasDigestAuth=!1:e.nc++,t}))}else e.nc++;return n}))}var q=n(3e3),G=n.n(q);function z(t){var e=new Error("".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"","Invalid response: ").concat(t.status," ").concat(t.statusText));return e.status=t.status,e.response=t,e}function V(t,e){var n=e.status;if(401===n&&t.digest)return e;if(n>=400)throw z(e);return e}function H(t,e){return t.filter((function(t){return G()(t.filename,e,{matchBase:!0})}))}function Y(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{data:e,headers:t.headers||{},status:t.status,statusText:t.statusText}:e}function X(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var K,W,J=(K=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return X(F(U({url:d(t.remoteURL,l(e)),method:"COPY",headers:{Destination:d(t.remoteURL,l(n))}},t,r)),(function(e){V(t,e)}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(K.apply(this,t))}catch(t){return Promise.reject(t)}}),Z=n(8819),Q=n(2421),tt=n.n(Q);function et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?nt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W.Original,r=tt().get(t,e);return"array"===n&&!1===Array.isArray(r)?[r]:"object"===n&&Array.isArray(r)?r[0]:r}function it(t){return new Promise((function(e){e(function(t){var e=t.multistatus;if(""===e)return{multistatus:{response:[]}};if(!e)throw new Error("Invalid response: No root multistatus found");var n={multistatus:Array.isArray(e)?e[0]:e};return tt().set(n,"multistatus.response",ot(n,"multistatus.response",W.Array)),tt().set(n,"multistatus.response",tt().get(n,"multistatus.response").map((function(t){return function(t){var e=Object.assign({},t);return tt().set(e,"propstat",ot(e,"propstat",W.Object)),tt().set(e,"propstat.prop",ot(e,"propstat.prop",W.Object)),e}(t)}))),n}(Z.parse(t,{arrayMode:!1,ignoreNameSpace:!0})))}))}function at(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.getlastmodified,o=void 0===r?null:r,i=t.getcontentlength,a=void 0===i?"0":i,c=t.resourcetype,u=void 0===c?null:c,l=t.getcontenttype,p=void 0===l?null:l,f=t.getetag,h=void 0===f?null:f,d=u&&"object"===rt(u)&&void 0!==u.collection?"directory":"file",m=T(e),g={filename:m,basename:s().basename(m),lastmod:o,size:parseInt(a,10),type:d,etag:"string"==typeof h?h.replace(/"/g,""):null};return"file"===d&&(g.mime=p&&"string"==typeof p?p.split(";")[0]:""),n&&(g.props=t),g}function st(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=null;try{r=t.multistatus.response[0]}catch(t){}if(!r)throw new Error("Failed getting item stat: bad response");var o=r.propstat,i=o.prop,a=et(o.status.split(" ",3),3),s=(a[0],a[1]),c=a[2],u=parseInt(s,10);if(u>=400){var l=new Error("Invalid response: ".concat(u," ").concat(c));throw l.status=u,l}return at(i,f(e),n)}function ct(t){switch(t.toString()){case"-3":return"unlimited";case"-2":case"-1":return"unknown";default:return parseInt(t,10)}}function ut(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}!function(t){t.Array="array",t.Object="object",t.Original="original"}(W||(W={}));var lt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.details,o=void 0!==r&&r;return ut(F(U({url:d(t.remoteURL,l(e)),method:"PROPFIND",headers:{Accept:"text/plain,application/xml",Depth:"0"},responseType:"text"},t,n)),(function(n){return V(t,n),ut(it(n.data),(function(t){var r=st(t,e,o);return Y(n,r,o)}))}))}));function pt(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function ft(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function ht(){}function dt(t,e){if(!e)return t&&t.then?t.then(ht):Promise.resolve()}function mt(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}function gt(t,e){var n=t();return n&&n.then?n.then(e):e(n)}var vt="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function yt(t,e,n){if(!t.s){if(n instanceof wt){if(!n.s)return void(n.o=yt.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(yt.bind(null,t,e),yt.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var wt=function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{yt(r,1,i(this.v))}catch(t){yt(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?yt(r,1,e?e(o):o):n?yt(r,1,n(o)):yt(r,2,o)}catch(t){yt(r,2,t)}},r},t}();function bt(t){return t instanceof wt&&1&t.s}function xt(t,e,n){if("function"==typeof t[vt]){var r,o,i,a=t[vt]();function l(t){try{for(;!((r=a.next()).done||n&&n());)if((t=e(r.value))&&t.then){if(!bt(t))return void t.then(l,i||(i=yt.bind(null,o=new wt,2)));t=t.v}o?yt(o,1,t):o=t}catch(t){yt(o||(o=new wt),2,t)}}if(l(),a.return){var s=function(t){try{r.done||a.return()}catch(t){}return t};if(o&&o.then)return o.then(s,(function(t){throw s(t)}));s()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var c=[],u=0;u<t.length;u++)c.push(t[u]);return function(t,e,n){var r,o,i=-1;return function a(s){try{for(;++i<t.length&&(!n||!n());)if((s=e(i))&&s.then){if(!bt(s))return void s.then(a,o||(o=yt.bind(null,r=new wt,2)));s=s.v}r?yt(r,1,s):r=s}catch(t){yt(r||(r=new wt),2,t)}}(),r}(c,(function(t){return e(c[t])}),n)}function $t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$t(Object(n),!0).forEach((function(e){Tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Et=ft((function(t,e){var n=!1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=p(f(e));o.sort((function(t,e){return t.length>e.length?1:e.length>t.length?-1:0}));var i=!1;return xt(o,(function(n){return gt((function(){if(i)return dt(At(t,n,kt(kt({},r),{},{recursive:!1})))}),(function(){return mt((function(){return pt(lt(t,n),(function(t){if("directory"!==t.type)throw new Error("Path includes a file: ".concat(e))}))}),(function(e){var o=e;return function(){if(404===o.status)return i=!0,dt(At(t,n,kt(kt({},r),{},{recursive:!1})));throw e}()}))}))}),(function(){return n}))})),At=ft((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!0===n.recursive?Et(t,e,n):pt(F(U({url:d(t.remoteURL,Nt(l(e))),method:"MKCOL"},t,n)),(function(e){V(t,e)}))}));function Nt(t){return t.endsWith("/")?t:t+"/"}var St=n(9227),Ct=n.n(St);function It(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Bt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={};if("object"===Ot(n.range)&&"number"==typeof n.range.start){var o="bytes=".concat(n.range.start,"-");"number"==typeof n.range.end&&(o="".concat(o).concat(n.range.end)),r.Range=o}return It(F(U({url:d(t.remoteURL,l(e)),method:"GET",headers:r,responseType:"stream"},t,n)),(function(e){if(V(t,e),r.Range&&206!==e.status){var o=new Error("Invalid response code for partial request: ".concat(e.status));throw o.status=e.status,o}return n.callback&&setTimeout((function(){n.callback(e)}),0),e.data}))})),jt=function(){};function Mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new(0,Ct().PassThrough);return Bt(t,e,n).then((function(t){t.pipe(r)})).catch((function(t){r.emit("error",t)})),r}function Pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:jt,o=new(0,Ct().PassThrough),i={};return!1===n.overwrite&&(i["If-None-Match"]="*"),F(U({url:d(t.remoteURL,l(e)),method:"PUT",headers:i,data:o,maxRedirects:0},t,n)).then((function(e){return V(t,e)})).then((function(t){setTimeout((function(){r(t)}),0)})).catch((function(t){o.emit("error",t)})),o}var Lt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e,n){var r,o;return n.url||(n.url=d(t.remoteURL,l(e))),o=function(e){return V(t,e),e},(r=F(U(n,t,{})))&&r.then||(r=Promise.resolve(r)),o?r.then(o):r}));function Rt(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var Dt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Rt(F(U({url:d(t.remoteURL,l(e)),method:"DELETE"},t,n)),(function(e){V(t,e)}))}));function _t(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Ut(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}var Ft=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Ut((function(){return _t(lt(t,e,n),(function(){return!0}))}),(function(t){if(404===t.status)return!1;throw t}))}));function qt(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var Gt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return qt(F(U({url:d(t.remoteURL,l(e),"/"),method:"PROPFIND",headers:{Accept:"text/plain",Depth:n.deep?"infinity":"1"},responseType:"text"},t,n)),(function(r){return V(t,r),qt(it(r.data),(function(o){var i=zt(o,t.remotePath,e,n.details);return n.glob&&(i=H(i,n.glob)),Y(r,i,n.details)}))}))}));function zt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=s().join(e,"/");return t.multistatus.response.map((function(t){var e=m(t.href);return at(t.propstat.prop,"/"===o?decodeURIComponent(f(e)):decodeURIComponent(f(s().relative(o,e))),r)})).filter((function(t){return t.basename&&("file"===t.type||t.filename!==n.replace(/\/$/,""))}))}function Vt(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}var Ht=Vt((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Yt(F(U({url:d(t.remoteURL,l(e)),method:"GET",responseType:"text",transformResponse:[Wt]},t,n)),(function(e){return V(t,e),Y(e,e.data,n.details)}))}));function Yt(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var Xt=Vt((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Yt(F(U({url:d(t.remoteURL,l(e)),method:"GET",responseType:"arraybuffer"},t,n)),(function(e){return V(t,e),Y(e,e.data,n.details)}))})),Kt=Vt((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.format,o=void 0===r?"binary":r;if("binary"!==o&&"text"!==o)throw new g.Layerr({info:{code:$.InvalidOutputFormat}},"Invalid output format: ".concat(o));return"text"===o?Ht(t,e,n):Xt(t,e,n)})),Wt=function(t){return t};function Jt(t,e){var n=d(t.remoteURL,l(e)),r=/^https:/i.test(n)?"https":"http";switch(t.authType){case x.None:break;case x.Password:var o=E(t.headers.Authorization.replace(/^Basic /i,"").trim());n=n.replace(/^https?:\/\//,"".concat(r,"://").concat(o,"@"));break;default:throw new g.Layerr({info:{code:$.LinkUnsupportedAuthType}},"Unsupported auth type for file link: ".concat(t.authType))}return n}function Zt(t){return(Zt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t){return new Z.j2xParser({attributeNamePrefix:"@_",format:!0,ignoreAttributes:!1,supressEmptyNode:!0}).parse(ne({lockinfo:{"@_xmlns:d":"DAV:",lockscope:{exclusive:{}},locktype:{write:{}},owner:{href:t}}},"d"))}function ne(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Qt(Object(n),!0).forEach((function(e){te(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t);for(var r in n)n.hasOwnProperty(r)&&(n[r]&&"object"===Zt(n[r])&&-1===r.indexOf(":")?(n["".concat(e,":").concat(r)]=ne(n[r],e),delete n[r]):!1===/^@_/.test(r)&&(n["".concat(e,":").concat(r)]=n[r],delete n[r]));return n}function re(t){return Z.parse(t,{arrayMode:!1,ignoreNameSpace:!0,parseAttributeValue:!0,parseNodeValue:!0})}function oe(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function ie(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}var ae=ie((function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return oe(F(U({url:d(t.remoteURL,l(e)),method:"UNLOCK",headers:{"Lock-Token":n}},t,r)),(function(e){if(V(t,e),204!==e.status&&200!==e.status)throw z(e)}))})),se=ie((function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.refreshToken,o=n.timeout,i={Accept:"text/plain,application/xml",Timeout:void 0===o?ce:o};return r&&(i.If=r),oe(F(U({url:d(t.remoteURL,l(e)),method:"LOCK",headers:i,data:ee(t.contactHref),responseType:"text"},t,n)),(function(e){V(t,e);var n=re(e.data),r=tt().get(n,"prop.lockdiscovery.activelock.locktoken.href"),o=tt().get(n,"prop.lockdiscovery.activelock.timeout");if(!r)throw z(e,"No lock token received: ");return{token:r,serverTimeout:o}}))})),ce="Infinite, Second-4100000000";function ue(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function le(t){try{var e=(o=t.multistatus.response,i=1,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(o,i)||function(t,e){if(t){if("string"==typeof t)return ue(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].propstat.prop,n=e["quota-used-bytes"],r=e["quota-available-bytes"];return void 0!==n&&void 0!==r?{used:parseInt(n,10),available:ct(r)}:null}catch(t){}var o,i;return null}function pe(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var fe=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return pe(F(U({url:d(t.remoteURL,"/"),method:"PROPFIND",headers:{Accept:"text/plain",Depth:"0"},responseType:"text"},t,e)),(function(n){return V(t,n),pe(it(n.data),(function(t){var r=le(t);return Y(n,r,e.details)}))}))}));function he(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var de=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return he(F(U({url:d(t.remoteURL,l(e)),method:"MOVE",headers:{Destination:d(t.remoteURL,l(n))}},t,r)),(function(e){V(t,e)}))})),me="function"==typeof ArrayBuffer,ge=Object.prototype.toString;function ve(t){if(e=t,me&&(e instanceof ArrayBuffer||"[object ArrayBuffer]"===ge.call(e)))return t.byteLength;if(function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}(t))return t.length;if("string"==typeof t)return t.length;var e;throw new g.Layerr({info:{code:$.DataTypeNoLength}},"Cannot calculate data length: Invalid type")}function ye(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}var we=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.contentLength,i=void 0===o||o,a=r.overwrite,s=void 0===a||a,c={"Content-Type":"application/octet-stream"};return!1===i||(c["Content-Length"]="".concat("number"==typeof i?i:ve(n))),s||(c["If-None-Match"]="*"),ye(F(U({url:d(t.remoteURL,l(e)),method:"PUT",headers:c,data:n},t,r)),(function(e){try{V(t,e)}catch(t){var n=t;if(412!==n.status||s)throw n;return!1}return!0}))}));function be(t,e){var n="".concat(d(t.remoteURL,l(e)),"?Content-Type=application/octet-stream"),r=/^https:/i.test(n)?"https":"http";switch(t.authType){case x.None:break;case x.Password:var o=E(t.headers.Authorization.replace(/^Basic /i,"").trim());n=n.replace(/^https?:\/\//,"".concat(r,"://").concat(o,"@"));break;default:throw new g.Layerr({info:{code:$.LinkUnsupportedAuthType}},"Unsupported auth type for file link: ".concat(t.authType))}return n}var xe="https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";function $e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.authType,r=void 0===n?null:n,o=e.contactHref,i=void 0===o?xe:o,a=e.headers,s=void 0===a?{}:a,c=e.httpAgent,u=e.httpsAgent,l=e.maxBodyLength,p=e.maxContentLength,f=e.password,d=e.token,m=e.username,g=e.withCredentials,v=r;v||(v=m||f?x.Password:x.None);var y={authType:v,contactHref:i,headers:Object.assign({},s),httpAgent:c,httpsAgent:u,maxBodyLength:l,maxContentLength:p,remotePath:h(t),remoteURL:t,password:f,token:d,username:m,withCredentials:g};return A(y,m,f,d),{copyFile:function(t,e,n){return J(y,t,e,n)},createDirectory:function(t,e){return At(y,t,e)},createReadStream:function(t,e){return Mt(y,t,e)},createWriteStream:function(t,e,n){return Pt(y,t,e,n)},customRequest:function(t,e){return Lt(y,t,e)},deleteFile:function(t,e){return Dt(y,t,e)},exists:function(t,e){return Ft(y,t,e)},getDirectoryContents:function(t,e){return Gt(y,t,e)},getFileContents:function(t,e){return Kt(y,t,e)},getFileDownloadLink:function(t){return Jt(y,t)},getFileUploadLink:function(t){return be(y,t)},getHeaders:function(){return Object.assign({},y.headers)},getQuota:function(t){return fe(y,t)},lock:function(t,e){return se(y,t,e)},moveFile:function(t,e,n){return de(y,t,e,n)},putFileContents:function(t,e,n){return we(y,t,e,n)},setHeaders:function(t){y.headers=Object.assign({},t)},stat:function(t,e){return lt(y,t,e)},unlock:function(t,e,n){return ae(y,t,e,n)}}}})(),r})()})),Yo=zo(Ho),Xo=function(t){var e=ri(t),n=e[0],r=e[1];return 3*(n+r)/4-r},Ko=function(t){var e,n,r=ri(t),o=r[0],i=r[1],a=new Qo(function(t,e,n){return 3*(e+n)/4-n}(0,o,i)),s=0,c=i>0?o-4:o;for(n=0;n<c;n+=4)e=Zo[t.charCodeAt(n)]<<18|Zo[t.charCodeAt(n+1)]<<12|Zo[t.charCodeAt(n+2)]<<6|Zo[t.charCodeAt(n+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=255&e;2===i&&(e=Zo[t.charCodeAt(n)]<<2|Zo[t.charCodeAt(n+1)]>>4,a[s++]=255&e);1===i&&(e=Zo[t.charCodeAt(n)]<<10|Zo[t.charCodeAt(n+1)]<<4|Zo[t.charCodeAt(n+2)]>>2,a[s++]=e>>8&255,a[s++]=255&e);return a},Wo=function(t){for(var e,n=t.length,r=n%3,o=[],i=16383,a=0,s=n-r;a<s;a+=i)o.push(oi(t,a,a+i>s?s:a+i));1===r?(e=t[n-1],o.push(Jo[e>>2]+Jo[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],o.push(Jo[e>>10]+Jo[e>>4&63]+Jo[e<<2&63]+"="));return o.join("")},Jo=[],Zo=[],Qo="undefined"!=typeof Uint8Array?Uint8Array:Array,ti="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ei=0,ni=ti.length;ei<ni;++ei)Jo[ei]=ti[ei],Zo[ti.charCodeAt(ei)]=ei;function ri(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function oi(t,e,n){for(var r,o,i=[],a=e;a<n;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),i.push(Jo[(o=r)>>18&63]+Jo[o>>12&63]+Jo[o>>6&63]+Jo[63&o]);return i.join("")}Zo["-".charCodeAt(0)]=62,Zo["_".charCodeAt(0)]=63;var ii={byteLength:Xo,toByteArray:Ko,fromByteArray:Wo},ai=function(t,e,n,r,o){var i,a,s=8*o-r-1,c=(1<<s)-1,u=c>>1,l=-7,p=n?o-1:0,f=n?-1:1,h=t[e+p];for(p+=f,i=h&(1<<-l)-1,h>>=-l,l+=s;l>0;i=256*i+t[e+p],p+=f,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=r;l>0;a=256*a+t[e+p],p+=f,l-=8);if(0===i)i=1-u;else{if(i===c)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,r),i-=u}return(h?-1:1)*a*Math.pow(2,i-r)},si=function(t,e,n,r,o,i){var a,s,c,u=8*i-o-1,l=(1<<u)-1,p=l>>1,f=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,d=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),(e+=a+p>=1?f/c:f*Math.pow(2,1-p))*c>=2&&(a++,c/=2),a+p>=l?(s=0,a=l):a+p>=1?(s=(e*c-1)*Math.pow(2,o),a+=p):(s=e*Math.pow(2,p-1)*Math.pow(2,o),a=0));o>=8;t[n+h]=255&s,h+=d,s/=256,o-=8);for(a=a<<o|s,u+=o;u>0;t[n+h]=255&a,h+=d,a/=256,u-=8);t[n+h-d]|=128*m},ci=Vo((function(t,e){const n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=i,e.SlowBuffer=function(t){+t!=t&&(t=0);return i.alloc(+t)},e.INSPECT_MAX_BYTES=50;const r=2147483647;function o(t){if(t>r)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return a(t,e,n)}function a(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|f(t,e);let r=o(n);const a=r.write(t,e);a!==n&&(r=r.slice(0,a));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(H(t,Uint8Array)){const e=new Uint8Array(t);return l(e.buffer,e.byteOffset,e.byteLength)}return u(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(H(t,ArrayBuffer)||t&&H(t.buffer,ArrayBuffer))return l(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(H(t,SharedArrayBuffer)||t&&H(t.buffer,SharedArrayBuffer)))return l(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return i.from(r,e,n);const a=function(t){if(i.isBuffer(t)){const e=0|p(t.length),n=o(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Y(t.length)?o(0):u(t);if("Buffer"===t.type&&Array.isArray(t.data))return u(t.data)}(t);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return i.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return s(t),o(t<0?0:0|p(t))}function u(t){const e=t.length<0?0:0|p(t.length),n=o(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function l(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,i.prototype),r}function p(t){if(t>=r)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r.toString(16)+" bytes");return 0|t}function f(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||H(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return G(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return z(t).length;default:if(o)return r?-1:G(t).length;e=(""+e).toLowerCase(),o=!0}}function h(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return N(this,e,n);case"utf8":case"utf-8":return k(this,e,n);case"ascii":return E(this,e,n);case"latin1":case"binary":return A(this,e,n);case"base64":return $(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function d(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function m(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Y(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=i.from(e,r)),i.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,o){let i,a=1,s=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;a=2,s/=2,c/=2,n/=2}function u(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){let r=-1;for(i=n;i<s;i++)if(u(t,i)===u(e,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===c)return r*a}else-1!==r&&(i-=i-r),r=-1}else for(n+c>s&&(n=s-c),i=n;i>=0;i--){let n=!0;for(let r=0;r<c;r++)if(u(t,i+r)!==u(e,r)){n=!1;break}if(n)return i}return-1}function v(t,e,n,r){n=Number(n)||0;const o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;const i=e.length;let a;for(r>i/2&&(r=i/2),a=0;a<r;++a){const r=parseInt(e.substr(2*a,2),16);if(Y(r))return a;t[n+a]=r}return a}function y(t,e,n,r){return V(G(e,t.length-n),t,n,r)}function w(t,e,n,r){return V(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function b(t,e,n,r){return V(z(e),t,n,r)}function x(t,e,n,r){return V(function(t,e){let n,r,o;const i=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)n=t.charCodeAt(a),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function $(t,e,n){return 0===e&&n===t.length?ii.fromByteArray(t):ii.fromByteArray(t.slice(e,n))}function k(t,e,n){n=Math.min(t.length,n);const r=[];let o=e;for(;o<n;){const e=t[o];let i=null,a=e>239?4:e>223?3:e>191?2:1;if(o+a<=n){let n,r,s,c;switch(a){case 1:e<128&&(i=e);break;case 2:n=t[o+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(i=c));break;case 3:n=t[o+1],r=t[o+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:n=t[o+1],r=t[o+2],s=t[o+3],128==(192&n)&&128==(192&r)&&128==(192&s)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&s,c>65535&&c<1114112&&(i=c))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=a}return function(t){const e=t.length;if(e<=T)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=T));return n}(r)}e.kMaxLength=r,i.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),i.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.buffer}}),Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.byteOffset}}),i.poolSize=8192,i.from=function(t,e,n){return a(t,e,n)},Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array),i.alloc=function(t,e,n){return function(t,e,n){return s(t),t<=0?o(t):void 0!==e?"string"==typeof n?o(t).fill(e,n):o(t).fill(e):o(t)}(t,e,n)},i.allocUnsafe=function(t){return c(t)},i.allocUnsafeSlow=function(t){return c(t)},i.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==i.prototype},i.compare=function(t,e){if(H(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),H(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=i.allocUnsafe(e);let o=0;for(n=0;n<t.length;++n){let e=t[n];if(H(e,Uint8Array))o+e.length>r.length?(i.isBuffer(e)||(e=i.from(e)),e.copy(r,o)):Uint8Array.prototype.set.call(r,e,o);else{if(!i.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,o)}o+=e.length}return r},i.byteLength=f,i.prototype._isBuffer=!0,i.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)d(this,e,e+1);return this},i.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},i.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},i.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?k(this,0,t):h.apply(this,arguments)},i.prototype.toLocaleString=i.prototype.toString,i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){let t="";const n=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},n&&(i.prototype[n]=i.prototype.inspect),i.prototype.compare=function(t,e,n,r,o){if(H(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),!i.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(this===t)return 0;let a=(o>>>=0)-(r>>>=0),s=(n>>>=0)-(e>>>=0);const c=Math.min(a,s),u=this.slice(r,o),l=t.slice(e,n);for(let t=0;t<c;++t)if(u[t]!==l[t]){a=u[t],s=l[t];break}return a<s?-1:s<a?1:0},i.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},i.prototype.indexOf=function(t,e,n){return m(this,t,e,n,!0)},i.prototype.lastIndexOf=function(t,e,n){return m(this,t,e,n,!1)},i.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return v(this,t,e,n);case"utf8":case"utf-8":return y(this,t,e,n);case"ascii":case"latin1":case"binary":return w(this,t,e,n);case"base64":return b(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const T=4096;function E(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function A(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function N(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let r=e;r<n;++r)o+=X[t[r]];return o}function S(t,e,n){const r=t.slice(e,n);let o="";for(let t=0;t<r.length-1;t+=2)o+=String.fromCharCode(r[t]+256*r[t+1]);return o}function C(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,n,r,o,a){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<a)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function O(t,e,n,r,o){_(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i>>=8,t[n++]=i,i>>=8,t[n++]=i,i>>=8,t[n++]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,a>>=8,t[n++]=a,n}function B(t,e,n,r,o){_(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i>>=8,t[n+6]=i,i>>=8,t[n+5]=i,i>>=8,t[n+4]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=a,a>>=8,t[n+2]=a,a>>=8,t[n+1]=a,a>>=8,t[n]=a,n+8}function j(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function M(t,e,n,r,o){return e=+e,n>>>=0,o||j(t,0,n,4),si(t,e,n,r,23,4),n+4}function P(t,e,n,r,o){return e=+e,n>>>=0,o||j(t,0,n,8),si(t,e,n,r,52,8),n+8}i.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,i.prototype),r},i.prototype.readUintLE=i.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||C(t,e,this.length);let r=this[t],o=1,i=0;for(;++i<e&&(o*=256);)r+=this[t+i]*o;return r},i.prototype.readUintBE=i.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||C(t,e,this.length);let r=this[t+--e],o=1;for(;e>0&&(o*=256);)r+=this[t+--e]*o;return r},i.prototype.readUint8=i.prototype.readUInt8=function(t,e){return t>>>=0,e||C(t,1,this.length),this[t]},i.prototype.readUint16LE=i.prototype.readUInt16LE=function(t,e){return t>>>=0,e||C(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUint16BE=i.prototype.readUInt16BE=function(t,e){return t>>>=0,e||C(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUint32LE=i.prototype.readUInt32LE=function(t,e){return t>>>=0,e||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUint32BE=i.prototype.readUInt32BE=function(t,e){return t>>>=0,e||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readBigUInt64LE=K((function(t){U(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||F(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(o)<<BigInt(32))})),i.prototype.readBigUInt64BE=K((function(t){U(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||F(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(o)})),i.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||C(t,e,this.length);let r=this[t],o=1,i=0;for(;++i<e&&(o*=256);)r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},i.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||C(t,e,this.length);let r=e,o=1,i=this[t+--r];for(;r>0&&(o*=256);)i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return t>>>=0,e||C(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){t>>>=0,e||C(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt16BE=function(t,e){t>>>=0,e||C(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt32LE=function(t,e){return t>>>=0,e||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return t>>>=0,e||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readBigInt64LE=K((function(t){U(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||F(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),i.prototype.readBigInt64BE=K((function(t){U(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||F(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),i.prototype.readFloatLE=function(t,e){return t>>>=0,e||C(t,4,this.length),ai(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return t>>>=0,e||C(t,4,this.length),ai(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return t>>>=0,e||C(t,8,this.length),ai(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return t>>>=0,e||C(t,8,this.length),ai(this,t,!1,52,8)},i.prototype.writeUintLE=i.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){I(this,t,e,n,Math.pow(2,8*n)-1,0)}let o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},i.prototype.writeUintBE=i.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){I(this,t,e,n,Math.pow(2,8*n)-1,0)}let o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},i.prototype.writeUint8=i.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,1,255,0),this[e]=255&t,e+1},i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},i.prototype.writeBigUInt64LE=K((function(t,e=0){return O(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),i.prototype.writeBigUInt64BE=K((function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),i.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);I(this,t,e,n,r-1,-r)}let o=0,i=1,a=0;for(this[e]=255&t;++o<n&&(i*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/i>>0)-a&255;return e+n},i.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);I(this,t,e,n,r-1,-r)}let o=n-1,i=1,a=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/i>>0)-a&255;return e+n},i.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},i.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},i.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},i.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},i.prototype.writeBigInt64LE=K((function(t,e=0){return O(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),i.prototype.writeBigInt64BE=K((function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),i.prototype.writeFloatLE=function(t,e,n){return M(this,t,e,!0,n)},i.prototype.writeFloatBE=function(t,e,n){return M(this,t,e,!1,n)},i.prototype.writeDoubleLE=function(t,e,n){return P(this,t,e,!0,n)},i.prototype.writeDoubleBE=function(t,e,n){return P(this,t,e,!1,n)},i.prototype.copy=function(t,e,n,r){if(!i.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const o=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),o},i.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{const a=i.isBuffer(t)?t:i.from(t,r),s=a.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-e;++o)this[o+e]=a[o%s]}return this};const L={};function R(t,e,n){L[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function D(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function _(t,e,n,r,o,i){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(i+1)}${r}`:`>= -(2${r} ** ${8*(i+1)-1}${r}) and < 2 ** ${8*(i+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new L.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,n){U(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||F(e,t.length-(n+1))}(r,o,i)}function U(t,e){if("number"!=typeof t)throw new L.ERR_INVALID_ARG_TYPE(e,"number",t)}function F(t,e,n){if(Math.floor(t)!==t)throw U(t,n),new L.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new L.ERR_BUFFER_OUT_OF_BOUNDS;throw new L.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}R("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),R("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),R("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=D(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=D(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function G(t,e){let n;e=e||1/0;const r=t.length;let o=null;const i=[];for(let a=0;a<r;++a){if(n=t.charCodeAt(a),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function z(t){return ii.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function H(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Y(t){return t!=t}const X=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();function K(t){return"undefined"==typeof BigInt?W:t}function W(){throw new Error("BigInt not supported")}}));
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */class ui{constructor(t,e){this.url=t,this.key=e,this.addKey=this.addKey.bind(this),this.deleteKey=this.deleteKey.bind(this),this.getChildKeys=this.getChildKeys.bind(this),this.mkDir=this.mkDir.bind(this),this.readFile=this.readFile.bind(this),this.copyFile=this.copyFile.bind(this),this.moveFile=this.moveFile.bind(this),this.deleteFile=this.deleteFile.bind(this),this.lsDir=this.lsDir.bind(this),this.doesResourceExist=this.doesResourceExist.bind(this),this.writeFile=this.writeFile.bind(this),this.checkEndpoint=this.checkEndpoint.bind(this),this.client=Yo.createClient(t+"/files/",{username:"",password:e.KeyValue})}static async init(t,e){try{let n=await async function(t,e){try{let n=await fetch(t+"/getKey",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Basic "+ci.Buffer.from(":"+e,"utf8").toString("base64")}});if(201==n.status||200==n.status)return await n.json();throw Error(n.status)}catch(t){throw"404"==t.message?Error("Server Not Found: Check that your server is up and \n            you entered the server in correctly in your config"):"401"==t.message?Error("Invalid Credentials: Make sure that your config \n            key is valid, that the key you are trying to access exists, \n            and that it has less permissions than the key you are trying to \n            access it with"):t}}(t,e);return new ui(t,n)}catch(t){throw t}}async addKey(t){try{let e=await fetch(this.url+"/addKey",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Basic "+ci.Buffer.from(":"+this.key.KeyValue,"utf8").toString("base64")},body:JSON.stringify(t)});if(201==e.status||200==e.status)return await e.json();throw Error(e.status)}catch(t){li(t)}}async deleteKey(){try{let t=await fetch(this.url+"/deleteKey",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Basic "+ci.Buffer.from(":"+this.passcode,"utf8").toString("base64")}});if(200==t.status)return!0;throw Error(t.status)}catch(t){li(t)}}async getChildKeys(){try{let t=await fetch(this.url+"/getChildKeys",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Basic "+ci.Buffer.from(":"+this.key.KeyValue,"utf8").toString("base64")}});if(200==t.status||201==t.status)return t.json();throw Error(t.status)}catch(t){li(t)}}async mkDir(t,e){try{return this.checkEndpoint(t),await this.client.createDirectory("/"+t+"/"+e,{recursive:!0}),!0}catch(t){li(t)}}async readFile(t,e){try{return this.checkEndpoint(t),await this.client.getFileContents("/"+t+"/"+e)}catch(t){li(t)}}async copyFile(t,e,n){try{return this.checkEndpoint(t),await this.client.copyFile("/"+t+"/"+e,"/"+t+"/"+n),!0}catch(t){li(t)}}async moveFile(t,e){try{return this.checkEndpoint(endpoint),await this.client.moveFile("/"+endpoint+"/"+t,"/"+endpoint+"/"+e),!0}catch(t){li(t)}}async deleteFile(t,e){try{return this.checkEndpoint(t),await this.client.deleteFile("/"+t+"/"+e)}catch(t){li(t)}}async lsDir(t,e){try{return this.checkEndpoint(t),await this.client.getDirectoryContents("/"+t+"/"+e)}catch(t){li(t)}}async doesResourceExist(t,e){try{return this.checkEndpoint(t),await this.client.exists("/"+t+"/"+e)}catch(t){li(t)}}async writeFile(t,e,n){try{return this.checkEndpoint(t),await this.client.putFileContents("/"+t+"/"+e,n,{contentLength:!1,overwrite:!0})}catch(t){li(t)}}async checkEndpoint(t){if(!Object.keys(this.key.Endpoints).includes(t))throw Error("endpoint not in key endpoints");return!0}}function li(t){throw"404"==t.message?Error("Server Not Found: Check that your server is up and \n        you entered the server in correctly in your config"):"401"==t.message?Error("Invalid Credentials: Make sure that your config \n        key is valid, that the key you are trying to access exists, \n        and that it has less permissions than the key you are trying to \n        access it with"):t}const pi="https://exius.fly.dev";function fi(t){let e;return{c(){e=x("h1"),e.textContent="Checking Credentials..."},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function hi(t){let e,n,r;return{c(){e=x("h1"),n=$("Error:"),r=$(t[2])},m(t,o){y(t,e,o),m(e,n),m(e,r)},p(t,e){4&e&&N(r,t[2])},d(t){t&&w(e)}}}function di(e){let n,r,o=e[0]&&fi(),i=e[1]&&hi(e);return{c(){o&&o.c(),n=k(),i&&i.c(),r=T()},m(t,e){o&&o.m(t,e),y(t,n,e),i&&i.m(t,e),y(t,r,e)},p(t,[e]){t[0]?o||(o=fi(),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),t[1]?i?i.p(t,e):(i=hi(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i:t,o:t,d(t){o&&o.d(t),t&&w(n),i&&i.d(t),t&&w(r)}}}function mi(t,e,n){let{getServer:r}=e,o=!1,i=!1;const a=pi;let s=Object.fromEntries([...new URLSearchParams(window.location.search)]),c=s.id,u=s.key,l=s.archive,p="";return l?(console.log("Accessing archived version"),r({KeyValue:"0",writeFile:()=>{}},0)):c&&u?(console.log("Accessing live version"),o=!0,async function(t){try{let e=await ui.init(a,u);for(const n of t)await e.writeFile(n.endpoint,n.fname,n.data);r(e,c)}catch(t){console.log(t),n(1,i=!0),n(2,p="Access denied. Make sure the key you entered has the correct permissions")}}([{endpoint:"teacher",fname:`TeacherCSV_${c}.csv`,data:""},{endpoint:"teacher",fname:`TeacherResponse_${c}.txt`,data:""}])):(i=!0,p="id and key must be present in query string of url"),t.$$set=t=>{"getServer"in t&&n(3,r=t.getServer)},[o,i,p,r]}class gi extends pt{constructor(t){super(),lt(this,t,mi,di,a,{getServer:3})}}function vi(t){let e,n,r,o,a,s,c,u,l,p,f,h,d,g,v=!t[2]&&yi(t);function b(t,e){return t[2]?xi:t[3]?bi:wi}let $=b(t),T=$(t);return{c(){e=x("h1"),e.textContent="Total Student Understanding This Month",n=k(),r=x("div"),o=x("div"),a=k(),s=x("div"),c=k(),u=x("div"),l=k(),v&&v.c(),p=k(),T.c(),f=k(),h=x("button"),h.innerHTML="<h1>Start Next Month</h1>",A(e,"class","classUnderstanding svelte-1pk8o6r"),A(o,"class","progressBar svelte-1pk8o6r"),C(o,"left","max(-.5vw,-.5vh)"),A(s,"class","progressGreen svelte-1pk8o6r"),C(s,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[0]+")"),C(s,"position","absolute"),A(u,"class","progressRed svelte-1pk8o6r"),C(u,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[7]+")"),C(u,"left","min(60vh,60vw)"),C(u,"position","absolute"),C(r,"left","calc(50vw - min(30vh,30vw))"),C(r,"top","min(10vh,10vw)"),C(r,"position","absolute"),A(h,"class","fancyButton svelte-1pk8o6r")},m(w,b){y(w,e,b),y(w,n,b),y(w,r,b),m(r,o),m(r,a),m(r,s),m(r,c),m(r,u),y(w,l,b),v&&v.m(w,b),y(w,p,b),T.m(w,b),y(w,f,b),y(w,h,b),d||(g=E(h,"click",(function(){i(t[5]())&&t[5]().apply(this,arguments)})),d=!0)},p(e,n){t=e,3&n&&C(s,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[0]+")"),2&n&&C(u,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[7]+")"),t[2]?v&&(v.d(1),v=null):v?v.p(t,n):(v=yi(t),v.c(),v.m(p.parentNode,p)),$===($=b(t))&&T?T.p(t,n):(T.d(1),T=$(t),T&&(T.c(),T.m(f.parentNode,f)))},d(t){t&&w(e),t&&w(n),t&&w(r),t&&w(l),v&&v.d(t),t&&w(p),T.d(t),t&&w(f),t&&w(h),d=!1,g()}}}function yi(t){let e,n,r,o,i,a,s,c;return{c(){e=x("h1"),e.textContent="Total Student Understanding Last Month",n=k(),r=x("div"),o=x("div"),i=k(),a=x("div"),s=k(),c=x("div"),A(e,"class","classUnderstanding svelte-1pk8o6r"),C(e,"top","min(15vh,15vw)"),A(o,"class","progressBar svelte-1pk8o6r"),C(o,"left","max(-.5vw,-.5vh)"),A(a,"class","progressGreen svelte-1pk8o6r"),C(a,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[4]+")"),C(a,"position","absolute"),A(c,"class","progressRed svelte-1pk8o6r"),C(c,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[8]+")"),C(c,"left","min(60vh,60vw)"),C(c,"position","absolute"),C(r,"left","calc(50vw - min(30vh,30vw))"),C(r,"top","min(20vh,20vw)"),C(r,"position","absolute")},m(t,u){y(t,e,u),y(t,n,u),y(t,r,u),m(r,o),m(r,i),m(r,a),m(r,s),m(r,c)},p(t,e){18&e&&C(a,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[4]+")"),2&e&&C(c,"width","calc((min(60vh,60vw) / "+20*t[1]+") * "+t[8]+")")},d(t){t&&w(e),t&&w(n),t&&w(r)}}}function wi(t){let e,n,r,o,i,a,s,c,u,l,p,f,h=Math.round(100*t[0]/(20*t[1]))+"",d=Math.round(100*t[4]/(20*t[1]))+"",g=t[0]>t[4]&&$i(),v=t[0]<t[4]&&ki(),b=t[0]==t[4]&&Ti();return{c(){e=x("div"),n=x("h1"),r=$("Your classroom's understanding at the end of this month was "),o=$(h),i=$("%, and\n            your classroom's understanding last month was "),a=$(d),s=$("%"),c=k(),u=x("div"),l=x("div"),g&&g.c(),p=k(),v&&v.c(),f=k(),b&&b.c(),A(e,"class","description svelte-1pk8o6r"),A(l,"class","clearfix performanceBox svelte-1pk8o6r")},m(t,h){y(t,e,h),m(e,n),m(n,r),m(n,o),m(n,i),m(n,a),m(n,s),y(t,c,h),y(t,u,h),m(u,l),g&&g.m(l,null),m(l,p),v&&v.m(l,null),m(l,f),b&&b.m(l,null)},p(t,e){3&e&&h!==(h=Math.round(100*t[0]/(20*t[1]))+"")&&N(o,h),18&e&&d!==(d=Math.round(100*t[4]/(20*t[1]))+"")&&N(a,d),t[0]>t[4]?g||(g=$i(),g.c(),g.m(l,p)):g&&(g.d(1),g=null),t[0]<t[4]?v||(v=ki(),v.c(),v.m(l,f)):v&&(v.d(1),v=null),t[0]==t[4]?b||(b=Ti(),b.c(),b.m(l,null)):b&&(b.d(1),b=null)},d(t){t&&w(e),t&&w(c),t&&w(u),g&&g.d(),v&&v.d(),b&&b.d()}}}function bi(t){let e,n,r,o,i,a,s,c,u,l,p,f,h=Math.round(100*t[0]/(20*t[1]))+"",d=Math.round(100*t[4]/(20*t[1]))+"",g=t[0]>t[4]&&Ei(),v=t[0]<t[4]&&Ai(),b=t[0]==t[4]&&Ni();return{c(){e=x("div"),n=x("h1"),r=$("Your classroom's understanding at the end of this month was "),o=$(h),i=$("%, and\n            your classroom's understanding last month was "),a=$(d),s=$("%"),c=k(),u=x("div"),l=x("div"),g&&g.c(),p=k(),v&&v.c(),f=k(),b&&b.c(),A(e,"class","description svelte-1pk8o6r"),A(l,"class","clearfix performanceBox svelte-1pk8o6r")},m(t,h){y(t,e,h),m(e,n),m(n,r),m(n,o),m(n,i),m(n,a),m(n,s),y(t,c,h),y(t,u,h),m(u,l),g&&g.m(l,null),m(l,p),v&&v.m(l,null),m(l,f),b&&b.m(l,null)},p(t,e){3&e&&h!==(h=Math.round(100*t[0]/(20*t[1]))+"")&&N(o,h),18&e&&d!==(d=Math.round(100*t[4]/(20*t[1]))+"")&&N(a,d),t[0]>t[4]?g||(g=Ei(),g.c(),g.m(l,p)):g&&(g.d(1),g=null),t[0]<t[4]?v||(v=Ai(),v.c(),v.m(l,f)):v&&(v.d(1),v=null),t[0]==t[4]?b||(b=Ni(),b.c(),b.m(l,null)):b&&(b.d(1),b=null)},d(t){t&&w(e),t&&w(c),t&&w(u),g&&g.d(),v&&v.d(),b&&b.d()}}}function xi(t){let e,n,r,o,i,a,s,c=Math.round(100*t[0]/(20*t[1]))+"";return{c(){e=x("div"),n=x("h1"),r=$("Your classroom's understanding at the end of this semester was "),o=$(c),i=$("%"),a=k(),s=x("div"),s.innerHTML="<h1>Good job on your first month! Let&#39;s try and do even better next month!</h1>",A(e,"class","description svelte-1pk8o6r"),A(s,"class","clearfix performanceBox svelte-1pk8o6r")},m(t,c){y(t,e,c),m(e,n),m(n,r),m(n,o),m(n,i),y(t,a,c),y(t,s,c)},p(t,e){3&e&&c!==(c=Math.round(100*t[0]/(20*t[1]))+"")&&N(o,c)},d(t){t&&w(e),t&&w(a),t&&w(s)}}}function $i(t){let e;return{c(){e=x("h1"),e.textContent="Great Job! You improved upon your classroom's understanding from the last month! Let's try and do even better in the next month!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function ki(t){let e;return{c(){e=x("h1"),e.textContent="Oh no! It looks like your classroom's understanding dropped from the last month, let's try and beat this score next time!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ti(t){let e;return{c(){e=x("h1"),e.textContent="Looks like you tied your last score! Let's try and beat that score in the next month!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ei(t){let e;return{c(){e=x("h1"),e.textContent="Great Job! You improved upon your classroom's understanding from the last month! Click the button below to finish the experiment!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ai(t){let e;return{c(){e=x("h1"),e.textContent="Oh no! It looks like your classroom's understanding dropped from the last month! Click the button below to finish the experiment!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ni(t){let e;return{c(){e=x("h1"),e.textContent="Looks like you tied your last score! Click the button below to finish the experiment!"},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Si(e){let n,r=e[6]&&vi(e);return{c(){r&&r.c(),n=T()},m(t,e){r&&r.m(t,e),y(t,n,e)},p(t,[e]){t[6]?r?r.p(t,e):(r=vi(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&w(n)}}}function Ci(t,e,n){let{greenScore:r=10}=e,{numTrials:o=30}=e,{firstBlock:i=!1}=e,{lastBlock:a=!1}=e,{greenScoreLast:s=10}=e,{nextYear:c}=e;const u=20*o-r,l=20*o-s;let p=!1;return async function(){await async function(t){return await new Promise((e=>setTimeout(e,t)))}(500),n(6,p=!0)}(),t.$$set=t=>{"greenScore"in t&&n(0,r=t.greenScore),"numTrials"in t&&n(1,o=t.numTrials),"firstBlock"in t&&n(2,i=t.firstBlock),"lastBlock"in t&&n(3,a=t.lastBlock),"greenScoreLast"in t&&n(4,s=t.greenScoreLast),"nextYear"in t&&n(5,c=t.nextYear)},[r,o,i,a,s,c,p,u,l]}class Ii extends pt{constructor(t){super(),lt(this,t,Ci,Si,a,{greenScore:0,numTrials:1,firstBlock:2,lastBlock:3,greenScoreLast:4,nextYear:5})}}const{window:Oi}=it;function Bi(e){let n,r,o,i;return{c(){n=x("h1"),r=$(e[0])},m(t,a){y(t,n,a),m(n,r),o||(i=E(Oi,"resize",e[1]),o=!0)},p(t,[e]){1&e&&N(r,t[0])},i:t,o:t,d(t){t&&w(n),o=!1,i()}}}function ji(t,e,n){let{getMobile:r}=e,o="",i=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&"ontouchend"in document,a=!1;function s(t){console.log("fired"),a=window.innerWidth>window.innerHeight,i?a?r(!0):n(0,o="We have detected that you are on a mobile device. Please orient your screen to landscape to continue."):a?r(!1):n(0,o="We have detected that you are on a desktop device. Please orient your screen to landscape to continue.")}return a=s(),t.$$set=t=>{"getMobile"in t&&n(2,r=t.getMobile)},[o,s,r]}class Mi extends pt{constructor(t){super(),lt(this,t,ji,Bi,a,{getMobile:2})}}function Pi(e){let n,r;return n=new Mi({props:{getMobile:e[16]}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Li(e){let n,r;return n=new gi({props:{getServer:e[14]}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Ri(t){let e,n,r,o;const i=[_i,Di],a=[];function s(t,e){return t[8]?0:1}return e=s(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,o){let c=e;e=s(t),e===c?a[e].p(t,o):(Z(),et(a[c],1,1,(()=>{a[c]=null})),Q(),n=a[e],n?n.p(t,o):(n=a[e]=i[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function Di(t){let e,n;return e=new fr({props:{toGame:t[11],getData:t[13],server:t[9],id:t[3]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};512&n&&(r.server=t[9]),8&n&&(r.id=t[3]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function _i(t){let e,n;return e=new Fo({props:{toGame:t[11],getData:t[13],server:t[9],id:t[3]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};512&n&&(r.server=t[9]),8&n&&(r.id=t[3]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Ui(t){let e,n,r,o;const i=[Gi,qi,Fi],a=[];function s(t,e){return t[6]?0:t[8]?1:2}return e=s(t),n=a[e]=i[e](t),{c(){n.c(),r=T()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,o){let c=e;e=s(t),e===c?a[e].p(t,o):(Z(),et(a[c],1,1,(()=>{a[c]=null})),Q(),n=a[e],n?n.p(t,o):(n=a[e]=i[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&w(r)}}}function Fi(t){let e,n;return e=new qt({props:{toNext:t[12],gameString:t[5],id:t[3],totalBlocks:Hi,block:t[7],server:t[9]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};32&n&&(r.gameString=t[5]),8&n&&(r.id=t[3]),128&n&&(r.block=t[7]),512&n&&(r.server=t[9]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function qi(t){let e,n;return e=new ue({props:{toNext:t[12],gameString:t[5],id:t[3],totalBlocks:Hi,block:t[7],server:t[9]}}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};32&n&&(r.gameString=t[5]),8&n&&(r.id=t[3]),128&n&&(r.block=t[7]),512&n&&(r.server=t[9]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Gi(e){let n,r;return n=new Ii({props:{greenScore:e[10][e[10].length-1],greenScoreLast:e[10].length>1?e[10][e[10].length-2]:null,firstBlock:!(e[10].length>1),nextYear:e[15],lastBlock:e[10].length===Hi}}),{c(){at(n.$$.fragment)},m(t,e){st(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function zi(t){let e,n;return e=new qo({}),{c(){at(e.$$.fragment)},m(t,r){st(e,t,r),n=!0},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Vi(t){let e,n,r,o,i,a,s=!t[4]&&Pi(t),c=!t[2]&&t[4]&&Li(t),u=t[2]&&!1===t[0]&&Ri(t),l=t[0]&&!t[1]&&Ui(t),p=t[1]&&zi();return{c(){s&&s.c(),e=k(),c&&c.c(),n=k(),u&&u.c(),r=k(),l&&l.c(),o=k(),p&&p.c(),i=T()},m(t,f){s&&s.m(t,f),y(t,e,f),c&&c.m(t,f),y(t,n,f),u&&u.m(t,f),y(t,r,f),l&&l.m(t,f),y(t,o,f),p&&p.m(t,f),y(t,i,f),a=!0},p(t,[a]){t[4]?s&&(Z(),et(s,1,1,(()=>{s=null})),Q()):s?(s.p(t,a),16&a&&tt(s,1)):(s=Pi(t),s.c(),tt(s,1),s.m(e.parentNode,e)),!t[2]&&t[4]?c?(c.p(t,a),20&a&&tt(c,1)):(c=Li(t),c.c(),tt(c,1),c.m(n.parentNode,n)):c&&(Z(),et(c,1,1,(()=>{c=null})),Q()),t[2]&&!1===t[0]?u?(u.p(t,a),5&a&&tt(u,1)):(u=Ri(t),u.c(),tt(u,1),u.m(r.parentNode,r)):u&&(Z(),et(u,1,1,(()=>{u=null})),Q()),t[0]&&!t[1]?l?(l.p(t,a),3&a&&tt(l,1)):(l=Ui(t),l.c(),tt(l,1),l.m(o.parentNode,o)):l&&(Z(),et(l,1,1,(()=>{l=null})),Q()),t[1]?p?2&a&&tt(p,1):(p=zi(),p.c(),tt(p,1),p.m(i.parentNode,i)):p&&(Z(),et(p,1,1,(()=>{p=null})),Q())},i(t){a||(tt(s),tt(c),tt(u),tt(l),tt(p),a=!0)},o(t){et(s),et(c),et(u),et(l),et(p),a=!1},d(t){s&&s.d(t),t&&w(e),c&&c.d(t),t&&w(n),u&&u.d(t),t&&w(r),l&&l.d(t),t&&w(o),p&&p.d(t),t&&w(i)}}}let Hi=6;function Yi(t,e,n){let r,o,i=!1,a=!1,s=!1,c=!1,u='"trial","previousExploit",\n            "keyPressTime",\n            "trialStartTime",\n            "choice",\n            "newExploit",\n            "exploreSeen",\n            "exploitBoardClear",\n            "newExploitBoard",\n            "newExploreVisible",\n            "newExploreDeselected",\n            "newExploreMove",\n            "exploreFinishedMoving",\n            "Block"\n',l=!1,p=[],f=1,h=!0;return[i,a,s,r,c,u,l,f,h,o,p,function(){n(0,i=!0)},function(t,e){f<Hi?(n(6,l=!0),n(5,u=t),p.push(e),n(7,f+=1)):n(1,a=!0)},function(t){n(5,u+=t),console.log(t)},function(t,e){console.log("back to page"),n(9,o=t),n(2,s=!0),n(3,r=e),console.log(o)},function(){n(6,l=!1)},function(t){n(8,h=t),n(4,c=!0)}]}return new class extends pt{constructor(t){super(),lt(this,t,Yi,Vi,a,{})}}({target:document.body,props:{}})}();
=======

(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    const identity = x => x;
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    const active_docs = new Set();
    let active = 0;
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        const doc = node.ownerDocument;
        active_docs.add(doc);
        const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
        const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
        if (!current_rules[name]) {
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = previous.filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active)
                clear_rules();
        }
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            active_docs.forEach(doc => {
                const stylesheet = doc.__svelte_stylesheet;
                let i = stylesheet.cssRules.length;
                while (i--)
                    stylesheet.deleteRule(i);
                doc.__svelte_rules = {};
            });
            active_docs.clear();
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
        let config = fn(node, params);
        let running = false;
        let animation_name;
        let task;
        let uid = 0;
        function cleanup() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
                task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, 'start'));
            task = loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(1, 0);
                        dispatch(node, true, 'end');
                        cleanup();
                        return running = false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(t, 1 - t);
                    }
                }
                return running;
            });
        }
        let started = false;
        return {
            start() {
                if (started)
                    return;
                delete_rule(node);
                if (is_function(config)) {
                    config = config();
                    wait().then(go);
                }
                else {
                    go();
                }
            },
            invalidate() {
                started = false;
            },
            end() {
                if (running) {
                    cleanup();
                    running = false;
                }
            }
        };
    }
    function create_out_transition(node, fn, params) {
        let config = fn(node, params);
        let running = true;
        let animation_name;
        const group = outros;
        group.r += 1;
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, 'start'));
            loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(0, 1);
                        dispatch(node, false, 'end');
                        if (!--group.r) {
                            // this will result in `end()` being called,
                            // so we don't need to clean up here
                            run_all(group.c);
                        }
                        return false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(1 - t, t);
                    }
                }
                return running;
            });
        }
        if (is_function(config)) {
            wait().then(() => {
                // @ts-ignore
                config = config();
                go();
            });
        }
        else {
            go();
        }
        return {
            end(reset) {
                if (reset && config.tick) {
                    config.tick(1, 0);
                }
                if (running) {
                    if (animation_name)
                        delete_rule(node, animation_name);
                    running = false;
                }
            }
        };
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.34.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/RedGreen.svelte generated by Svelte v3.34.0 */

    const file$b = "src/RedGreen.svelte";

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[10] = list[i];
    	return child_ctx;
    }

    // (49:8) {#each rangeGreen as i}
    function create_each_block_1(ctx) {
    	let div;
    	let div_style_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "greenDot svelte-1iyuq8d");
    			attr_dev(div, "style", div_style_value = "left:calc(" + 2 * Math.floor(/*i*/ ctx[10] / /*stackSize*/ ctx[2]) + " * min(2vh,2vw));); top: calc(" + 2 * (/*stackSize*/ ctx[2] - /*i*/ ctx[10] % /*stackSize*/ ctx[2]) + " * min(2vh,2vw) + min(7vh,7vw)); position:absolute;");
    			add_location(div, file$b, 49, 12, 1300);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*rangeGreen*/ 1 && div_style_value !== (div_style_value = "left:calc(" + 2 * Math.floor(/*i*/ ctx[10] / /*stackSize*/ ctx[2]) + " * min(2vh,2vw));); top: calc(" + 2 * (/*stackSize*/ ctx[2] - /*i*/ ctx[10] % /*stackSize*/ ctx[2]) + " * min(2vh,2vw) + min(7vh,7vw)); position:absolute;")) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(49:8) {#each rangeGreen as i}",
    		ctx
    	});

    	return block;
    }

    // (58:8) {#each rangeRed as j}
    function create_each_block$3(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "redDot svelte-1iyuq8d");
    			set_style(div, "left", "calc(" + 2 * Math.floor(/*j*/ ctx[7] / /*stackSize*/ ctx[2]) + " * min(2vh,2vw))");
    			set_style(div, "top", "calc(" + 2 * (/*stackSize*/ ctx[2] - /*j*/ ctx[7] % /*stackSize*/ ctx[2]) + " * min(2vh,2vw) + min(7vh,7vw))");
    			set_style(div, "position", "absolute");
    			add_location(div, file$b, 58, 12, 1856);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*rangeRed*/ 2) {
    				set_style(div, "left", "calc(" + 2 * Math.floor(/*j*/ ctx[7] / /*stackSize*/ ctx[2]) + " * min(2vh,2vw))");
    			}

    			if (dirty & /*rangeRed*/ 2) {
    				set_style(div, "top", "calc(" + 2 * (/*stackSize*/ ctx[2] - /*j*/ ctx[7] % /*stackSize*/ ctx[2]) + " * min(2vh,2vw) + min(7vh,7vw))");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$3.name,
    		type: "each",
    		source: "(58:8) {#each rangeRed as j}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$e(ctx) {
    	let div2;
    	let div1;
    	let h0;
    	let t1;
    	let div0;
    	let t2;
    	let t3;
    	let div5;
    	let div4;
    	let h1;
    	let t5;
    	let div3;
    	let t6;
    	let each_value_1 = /*rangeGreen*/ ctx[0];
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let each_value = /*rangeRed*/ ctx[1];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div1 = element("div");
    			h0 = element("h");
    			h0.textContent = "Green Lights";
    			t1 = space();
    			div0 = element("div");
    			t2 = space();

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t3 = space();
    			div5 = element("div");
    			div4 = element("div");
    			h1 = element("h");
    			h1.textContent = "Red Lights";
    			t5 = space();
    			div3 = element("div");
    			t6 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			set_style(h0, "color", "black");
    			set_style(h0, "position", "absolute");
    			set_style(h0, "width", "min(20vh,20vw)");
    			set_style(h0, "left", "max(-2vw,-2vh)");
    			set_style(h0, "font-size", "min(2vh,2vw)");
    			set_style(h0, "text-align", "center");
    			set_style(h0, "top", "min(2vh,2vw)");
    			add_location(h0, file$b, 46, 8, 1045);
    			attr_dev(div0, "class", "ballContainer svelte-1iyuq8d");
    			add_location(div0, file$b, 47, 8, 1220);
    			attr_dev(div1, "class", "dotContainer svelte-1iyuq8d");
    			set_style(div1, "left", "min(2vw,2vh)");
    			add_location(div1, file$b, 45, 4, 981);
    			add_location(div2, file$b, 44, 4, 971);
    			set_style(h1, "color", "black");
    			set_style(h1, "position", "absolute");
    			set_style(h1, "width", "min(20vh,20vw)");
    			set_style(h1, "left", "max(-2vw,-2vh)");
    			set_style(h1, "font-size", "min(2vh,2vw)");
    			set_style(h1, "text-align", "center");
    			set_style(h1, "top", "min(2vh,2vw)");
    			add_location(h1, file$b, 55, 8, 1607);
    			attr_dev(div3, "class", "ballContainer svelte-1iyuq8d");
    			add_location(div3, file$b, 56, 8, 1780);
    			attr_dev(div4, "class", "dotContainer svelte-1iyuq8d");
    			set_style(div4, "left", "min(21.5vw,21.5vh)");
    			add_location(div4, file$b, 54, 4, 1540);
    			add_location(div5, file$b, 53, 4, 1530);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, h0);
    			append_dev(div1, t1);
    			append_dev(div1, div0);
    			append_dev(div1, t2);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div1, null);
    			}

    			insert_dev(target, t3, anchor);
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div4);
    			append_dev(div4, h1);
    			append_dev(div4, t5);
    			append_dev(div4, div3);
    			append_dev(div4, t6);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div4, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Math, rangeGreen, stackSize*/ 5) {
    				each_value_1 = /*rangeGreen*/ ctx[0];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(div1, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty & /*Math, rangeRed, stackSize*/ 6) {
    				each_value = /*rangeRed*/ ctx[1];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$3(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$3(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div4, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_each(each_blocks_1, detaching);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div5);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let numberRed;
    	let rangeGreen;
    	let rangeRed;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("RedGreen", slots, []);
    	let { numberGreen = 0 } = $$props;
    	let { clearBoard = false } = $$props;

    	if (!numberRed) {
    		numberRed = 20 - numberGreen;
    	}

    	let stackSize = 5;
    	let ballSize = 50;
    	const writable_props = ["numberGreen", "clearBoard"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<RedGreen> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("numberGreen" in $$props) $$invalidate(3, numberGreen = $$props.numberGreen);
    		if ("clearBoard" in $$props) $$invalidate(4, clearBoard = $$props.clearBoard);
    	};

    	$$self.$capture_state = () => ({
    		numberGreen,
    		clearBoard,
    		stackSize,
    		ballSize,
    		numberRed,
    		rangeGreen,
    		rangeRed
    	});

    	$$self.$inject_state = $$props => {
    		if ("numberGreen" in $$props) $$invalidate(3, numberGreen = $$props.numberGreen);
    		if ("clearBoard" in $$props) $$invalidate(4, clearBoard = $$props.clearBoard);
    		if ("stackSize" in $$props) $$invalidate(2, stackSize = $$props.stackSize);
    		if ("ballSize" in $$props) ballSize = $$props.ballSize;
    		if ("numberRed" in $$props) $$invalidate(5, numberRed = $$props.numberRed);
    		if ("rangeGreen" in $$props) $$invalidate(0, rangeGreen = $$props.rangeGreen);
    		if ("rangeRed" in $$props) $$invalidate(1, rangeRed = $$props.rangeRed);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*clearBoard, numberGreen*/ 24) {
    			$$invalidate(5, numberRed = !clearBoard ? 20 - numberGreen : 0);
    		}

    		if ($$self.$$.dirty & /*numberGreen*/ 8) {
    			$$invalidate(0, rangeGreen = [...Array(numberGreen).keys()]);
    		}

    		if ($$self.$$.dirty & /*numberRed*/ 32) {
    			$$invalidate(1, rangeRed = [...Array(numberRed).keys()]);
    		}
    	};

    	return [rangeGreen, rangeRed, stackSize, numberGreen, clearBoard, numberRed];
    }

    class RedGreen extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, { numberGreen: 3, clearBoard: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "RedGreen",
    			options,
    			id: create_fragment$e.name
    		});
    	}

    	get numberGreen() {
    		throw new Error("<RedGreen>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set numberGreen(value) {
    		throw new Error("<RedGreen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get clearBoard() {
    		throw new Error("<RedGreen>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set clearBoard(value) {
    		throw new Error("<RedGreen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Game.svelte generated by Svelte v3.34.0 */

    const { console: console_1$5 } = globals;
    const file$a = "src/Game.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[35] = list[i];
    	return child_ctx;
    }

    // (406:0) {#key trial}
    function create_key_block_5(ctx) {
    	let h10;
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let t4;
    	let h11;
    	let t5;
    	let t6;
    	let t7;
    	let t8;

    	const block_1 = {
    		c: function create() {
    			h10 = element("h1");
    			t0 = text("Day ");
    			t1 = text(/*trial*/ ctx[4]);
    			t2 = text(" of ");
    			t3 = text(/*numTrials*/ ctx[1]);
    			t4 = space();
    			h11 = element("h1");
    			t5 = text("Month ");
    			t6 = text(/*block*/ ctx[2]);
    			t7 = text(" of ");
    			t8 = text(/*totalBlocks*/ ctx[3]);
    			attr_dev(h10, "class", "points svelte-1mam9b6");
    			add_location(h10, file$a, 406, 4, 12312);
    			attr_dev(h11, "class", "points svelte-1mam9b6");
    			set_style(h11, "left", "calc(50vw - min(50vw, 50vh))");
    			add_location(h11, file$a, 407, 4, 12368);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			append_dev(h10, t0);
    			append_dev(h10, t1);
    			append_dev(h10, t2);
    			append_dev(h10, t3);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h11, anchor);
    			append_dev(h11, t5);
    			append_dev(h11, t6);
    			append_dev(h11, t7);
    			append_dev(h11, t8);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*trial*/ 16) set_data_dev(t1, /*trial*/ ctx[4]);
    			if (dirty[0] & /*numTrials*/ 2) set_data_dev(t3, /*numTrials*/ ctx[1]);
    			if (dirty[0] & /*block*/ 4) set_data_dev(t6, /*block*/ ctx[2]);
    			if (dirty[0] & /*totalBlocks*/ 8) set_data_dev(t8, /*totalBlocks*/ ctx[3]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h11);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_key_block_5.name,
    		type: "key",
    		source: "(406:0) {#key trial}",
    		ctx
    	});

    	return block_1;
    }

    // (415:8) {#key lastGreenBar}
    function create_key_block_4(ctx) {
    	let div;

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "progressLeft svelte-1mam9b6");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*lastGreenBar*/ ctx[13] + ")");
    			set_style(div, "left", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenBar*/ ctx[15] + ")");
    			set_style(div, "position", "absolute");
    			add_location(div, file$a, 415, 12, 12880);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*numTrials, lastGreenBar*/ 8194) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*lastGreenBar*/ ctx[13] + ")");
    			}

    			if (dirty[0] & /*numTrials, greenBar*/ 32770) {
    				set_style(div, "left", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenBar*/ ctx[15] + ")");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_key_block_4.name,
    		type: "key",
    		source: "(415:8) {#key lastGreenBar}",
    		ctx
    	});

    	return block_1;
    }

    // (413:4) {#key greenBar}
    function create_key_block_3$1(ctx) {
    	let div;
    	let t;
    	let previous_key = /*lastGreenBar*/ ctx[13];
    	let key_block_anchor;
    	let key_block = create_key_block_4(ctx);

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(div, "class", "progressGreen svelte-1mam9b6");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenBar*/ ctx[15] + ")");
    			set_style(div, "position", "absolute");
    			add_location(div, file$a, 413, 8, 12720);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			insert_dev(target, t, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*numTrials, greenBar*/ 32770) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenBar*/ ctx[15] + ")");
    			}

    			if (dirty[0] & /*lastGreenBar*/ 8192 && safe_not_equal(previous_key, previous_key = /*lastGreenBar*/ ctx[13])) {
    				key_block.d(1);
    				key_block = create_key_block_4(ctx);
    				key_block.c();
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_key_block_3$1.name,
    		type: "key",
    		source: "(413:4) {#key greenBar}",
    		ctx
    	});

    	return block_1;
    }

    // (421:8) {#key lastRedBar}
    function create_key_block_2$2(ctx) {
    	let div;

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "progressRight svelte-1mam9b6");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*lastRedBar*/ ctx[14] + ")");
    			set_style(div, "left", "calc(min(60vh,60vw) - ((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redBar*/ ctx[16] + ") + 1px)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$a, 421, 12, 13291);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*numTrials, lastRedBar*/ 16386) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*lastRedBar*/ ctx[14] + ")");
    			}

    			if (dirty[0] & /*numTrials, redBar*/ 65538) {
    				set_style(div, "left", "calc(min(60vh,60vw) - ((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redBar*/ ctx[16] + ") + 1px)");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_key_block_2$2.name,
    		type: "key",
    		source: "(421:8) {#key lastRedBar}",
    		ctx
    	});

    	return block_1;
    }

    // (419:4) {#key redBar}
    function create_key_block_1$3(ctx) {
    	let div;
    	let t;
    	let previous_key = /*lastRedBar*/ ctx[14];
    	let key_block_anchor;
    	let key_block = create_key_block_2$2(ctx);

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(div, "class", "progressRed svelte-1mam9b6");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redBar*/ ctx[16] + ")");
    			set_style(div, "left", "min(60vh,60vw)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$a, 419, 8, 13116);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			insert_dev(target, t, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*numTrials, redBar*/ 65538) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redBar*/ ctx[16] + ")");
    			}

    			if (dirty[0] & /*lastRedBar*/ 16384 && safe_not_equal(previous_key, previous_key = /*lastRedBar*/ ctx[14])) {
    				key_block.d(1);
    				key_block = create_key_block_2$2(ctx);
    				key_block.c();
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_key_block_1$3.name,
    		type: "key",
    		source: "(419:4) {#key redBar}",
    		ctx
    	});

    	return block_1;
    }

    // (428:8) {#if counter<numTrials+1}
    function create_if_block$9(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block_1$8, create_else_block_1$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*i*/ ctx[35] == 0) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block_1 = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if_block.p(ctx, dirty);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_if_block$9.name,
    		type: "if",
    		source: "(428:8) {#if counter<numTrials+1}",
    		ctx
    	});

    	return block_1;
    }

    // (448:16) {:else}
    function create_else_block_1$2(ctx) {
    	let div3;
    	let h1;
    	let t1;
    	let div1;
    	let div0;
    	let current_block_type_index;
    	let if_block0;
    	let div1_id_value;
    	let div1_intro;
    	let div1_outro;
    	let t2;
    	let div2;
    	let t3;
    	let t4;
    	let current;
    	const if_block_creators = [create_if_block_5$4, create_else_block_2$2];
    	const if_blocks = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*viewExplore*/ ctx[5]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_2(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*keyView*/ ctx[11] && create_if_block_4$5(ctx);

    	const block_1 = {
    		c: function create() {
    			div3 = element("div");
    			h1 = element("h1");
    			h1.textContent = "New Teaching Move";
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			if_block0.c();
    			t2 = space();
    			div2 = element("div");
    			t3 = space();
    			if (if_block1) if_block1.c();
    			t4 = space();
    			attr_dev(h1, "class", "teachingMoves svelte-1mam9b6");
    			add_location(h1, file$a, 449, 16, 14834);
    			set_style(div0, "position", "absolute");
    			add_location(div0, file$a, 451, 20, 15075);
    			attr_dev(div1, "class", "greyBox svelte-1mam9b6");
    			attr_dev(div1, "id", div1_id_value = `box2: ${/*counter*/ ctx[0]}`);
    			add_location(div1, file$a, 450, 16, 14899);
    			attr_dev(div2, "class", "blueLight svelte-1mam9b6");
    			set_style(div2, "opacity", !/*exploreSelect*/ ctx[8] ? "0" : "1");
    			add_location(div2, file$a, 459, 17, 15524);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw + min(5vw, 5vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$a, 448, 16, 14731);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h1);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div1, div0);
    			if_blocks[current_block_type_index].m(div0, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div3, t3);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t4);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div0, null);
    			}

    			if (!current || dirty[0] & /*counter*/ 1 && div1_id_value !== (div1_id_value = `box2: ${/*counter*/ ctx[0]}`)) {
    				attr_dev(div1, "id", div1_id_value);
    			}

    			if (!current || dirty[0] & /*exploreSelect*/ 256) {
    				set_style(div2, "opacity", !/*exploreSelect*/ ctx[8] ? "0" : "1");
    			}

    			if (/*keyView*/ ctx[11]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_4$5(ctx);
    					if_block1.c();
    					if_block1.m(div3, t4);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			add_render_callback(() => {
    				if (div1_outro) div1_outro.end(1);

    				if (!div1_intro) div1_intro = create_in_transition(div1, /*migrateLeftExplore*/ ctx[18], {
    					replaceExploit: /*replaceExploit*/ ctx[10]
    				});

    				div1_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			if (div1_intro) div1_intro.invalidate();

    			div1_outro = create_out_transition(div1, /*InvisibleOrDown*/ ctx[21], {
    				replaceExploit: /*replaceExploit*/ ctx[10]
    			});

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    			if (detaching && div1_outro) div1_outro.end();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_else_block_1$2.name,
    		type: "else",
    		source: "(448:16) {:else}",
    		ctx
    	});

    	return block_1;
    }

    // (429:12) {#if i==0}
    function create_if_block_1$8(ctx) {
    	let div3;
    	let h1;
    	let t1;
    	let div0;
    	let t2;
    	let div2;
    	let div1;
    	let current_block_type_index;
    	let if_block0;
    	let div2_id_value;
    	let div2_intro;
    	let div2_outro;
    	let t3;
    	let t4;
    	let current;
    	const if_block_creators = [create_if_block_3$6, create_else_block$6];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (!/*clearBoard*/ ctx[12]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_1(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*keyView*/ ctx[11] && create_if_block_2$8(ctx);

    	const block_1 = {
    		c: function create() {
    			div3 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Current Teaching Move";
    			t1 = space();
    			div0 = element("div");
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			if_block0.c();
    			t3 = space();
    			if (if_block1) if_block1.c();
    			t4 = space();
    			attr_dev(h1, "class", "teachingMoves svelte-1mam9b6");
    			add_location(h1, file$a, 430, 20, 13750);
    			attr_dev(div0, "class", "blueLight svelte-1mam9b6");
    			set_style(div0, "opacity", !/*exploitSelect*/ ctx[9] ? "0" : "1");
    			add_location(div0, file$a, 431, 20, 13823);
    			set_style(div1, "top", "0px");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$a, 433, 24, 14097);
    			attr_dev(div2, "class", "greyBox svelte-1mam9b6");
    			attr_dev(div2, "id", div2_id_value = `box1: ${/*counter*/ ctx[0]}`);
    			add_location(div2, file$a, 432, 20, 13920);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw - min(45vw, 45vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$a, 429, 16, 13640);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h1);
    			append_dev(div3, t1);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			if_blocks[current_block_type_index].m(div1, null);
    			append_dev(div3, t3);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t4);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (!current || dirty[0] & /*exploitSelect*/ 512) {
    				set_style(div0, "opacity", !/*exploitSelect*/ ctx[9] ? "0" : "1");
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div1, null);
    			}

    			if (!current || dirty[0] & /*counter*/ 1 && div2_id_value !== (div2_id_value = `box1: ${/*counter*/ ctx[0]}`)) {
    				attr_dev(div2, "id", div2_id_value);
    			}

    			if (/*keyView*/ ctx[11]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_2$8(ctx);
    					if_block1.c();
    					if_block1.m(div3, t4);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			add_render_callback(() => {
    				if (div2_outro) div2_outro.end(1);

    				if (!div2_intro) div2_intro = create_in_transition(div2, /*migrateLeftExploit*/ ctx[19], {
    					replaceExploit: /*replaceExploit*/ ctx[10]
    				});

    				div2_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			if (div2_intro) div2_intro.invalidate();

    			div2_outro = create_out_transition(div2, /*migrateOut*/ ctx[20], {
    				replaceExploit: /*replaceExploit*/ ctx[10]
    			});

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    			if (detaching && div2_outro) div2_outro.end();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_if_block_1$8.name,
    		type: "if",
    		source: "(429:12) {#if i==0}",
    		ctx
    	});

    	return block_1;
    }

    // (455:24) {:else}
    function create_else_block_2$2(ctx) {
    	let div;

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "?";
    			set_style(div, "width", "min(40vh,40vw)");
    			set_style(div, "height", "min(40vh,40vw)");
    			set_style(div, "text-align", "center");
    			set_style(div, "font-size", "min(20vh,20vw)");
    			set_style(div, "top", "min(5vh,5vw)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$a, 455, 28, 15275);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_else_block_2$2.name,
    		type: "else",
    		source: "(455:24) {:else}",
    		ctx
    	});

    	return block_1;
    }

    // (453:24) {#if viewExplore}
    function create_if_block_5$4(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploreMu*/ ctx[7] },
    			$$inline: true
    		});

    	const block_1 = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty[0] & /*exploreMu*/ 128) redgreen_changes.numberGreen = /*exploreMu*/ ctx[7];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_if_block_5$4.name,
    		type: "if",
    		source: "(453:24) {#if viewExplore}",
    		ctx
    	});

    	return block_1;
    }

    // (461:12) {#if keyView}
    function create_if_block_4$5(ctx) {
    	let div;
    	let h2;

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Right Arrow";
    			attr_dev(h2, "class", "arrowKey svelte-1mam9b6");
    			add_location(h2, file$a, 462, 20, 15688);
    			attr_dev(div, "class", "arrowCover svelte-1mam9b6");
    			add_location(div, file$a, 461, 17, 15642);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_if_block_4$5.name,
    		type: "if",
    		source: "(461:12) {#if keyView}",
    		ctx
    	});

    	return block_1;
    }

    // (437:28) {:else}
    function create_else_block$6(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: 0, clearBoard: true },
    			$$inline: true
    		});

    	const block_1 = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_else_block$6.name,
    		type: "else",
    		source: "(437:28) {:else}",
    		ctx
    	});

    	return block_1;
    }

    // (435:28) {#if !clearBoard}
    function create_if_block_3$6(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploitMu*/ ctx[6] },
    			$$inline: true
    		});

    	const block_1 = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty[0] & /*exploitMu*/ 64) redgreen_changes.numberGreen = /*exploitMu*/ ctx[6];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_if_block_3$6.name,
    		type: "if",
    		source: "(435:28) {#if !clearBoard}",
    		ctx
    	});

    	return block_1;
    }

    // (442:20) {#if keyView}
    function create_if_block_2$8(ctx) {
    	let div;
    	let h2;

    	const block_1 = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Left Arrow";
    			attr_dev(h2, "class", "arrowKey svelte-1mam9b6");
    			add_location(h2, file$a, 443, 28, 14572);
    			attr_dev(div, "class", "arrowCover svelte-1mam9b6");
    			add_location(div, file$a, 442, 24, 14517);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_if_block_2$8.name,
    		type: "if",
    		source: "(442:20) {#if keyView}",
    		ctx
    	});

    	return block_1;
    }

    // (427:4) {#each range as i}
    function create_each_block$2(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*counter*/ ctx[0] < /*numTrials*/ ctx[1] + 1 && create_if_block$9(ctx);

    	const block_1 = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*counter*/ ctx[0] < /*numTrials*/ ctx[1] + 1) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty[0] & /*counter, numTrials*/ 3) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$9(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(427:4) {#each range as i}",
    		ctx
    	});

    	return block_1;
    }

    // (426:0) {#key counter}
    function create_key_block$4(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*range*/ ctx[17];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block_1 = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*keyView, counter, replaceExploit, exploitMu, clearBoard, exploitSelect, range, exploreSelect, exploreMu, viewExplore, numTrials*/ 139235) {
    				each_value = /*range*/ ctx[17];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_key_block$4.name,
    		type: "key",
    		source: "(426:0) {#key counter}",
    		ctx
    	});

    	return block_1;
    }

    function create_fragment$d(ctx) {
    	let previous_key = /*trial*/ ctx[4];
    	let t0;
    	let h1;
    	let t2;
    	let div1;
    	let div0;
    	let t3;
    	let previous_key_1 = /*greenBar*/ ctx[15];
    	let t4;
    	let previous_key_2 = /*redBar*/ ctx[16];
    	let t5;
    	let previous_key_3 = /*counter*/ ctx[0];
    	let key_block3_anchor;
    	let current;
    	let mounted;
    	let dispose;
    	let key_block0 = create_key_block_5(ctx);
    	let key_block1 = create_key_block_3$1(ctx);
    	let key_block2 = create_key_block_1$3(ctx);
    	let key_block3 = create_key_block$4(ctx);

    	const block_1 = {
    		c: function create() {
    			key_block0.c();
    			t0 = space();
    			h1 = element("h1");
    			h1.textContent = "Total Student Understanding";
    			t2 = space();
    			div1 = element("div");
    			div0 = element("div");
    			t3 = space();
    			key_block1.c();
    			t4 = space();
    			key_block2.c();
    			t5 = space();
    			key_block3.c();
    			key_block3_anchor = empty();
    			attr_dev(h1, "class", "classUnderstanding svelte-1mam9b6");
    			add_location(h1, file$a, 409, 0, 12474);
    			attr_dev(div0, "class", "progressBar svelte-1mam9b6");
    			set_style(div0, "left", "max(-.5vw,-.5vh)");
    			add_location(div0, file$a, 411, 4, 12630);
    			set_style(div1, "left", "calc(50vw - min(30vh,30vw))");
    			set_style(div1, "top", "min(10vh,10vw)");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$a, 410, 0, 12538);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			key_block0.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div1, t3);
    			key_block1.m(div1, null);
    			append_dev(div1, t4);
    			key_block2.m(div1, null);
    			insert_dev(target, t5, anchor);
    			key_block3.m(target, anchor);
    			insert_dev(target, key_block3_anchor, anchor);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(window, "keydown", /*handleKeydown*/ ctx[22], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*trial*/ 16 && safe_not_equal(previous_key, previous_key = /*trial*/ ctx[4])) {
    				key_block0.d(1);
    				key_block0 = create_key_block_5(ctx);
    				key_block0.c();
    				key_block0.m(t0.parentNode, t0);
    			} else {
    				key_block0.p(ctx, dirty);
    			}

    			if (dirty[0] & /*greenBar*/ 32768 && safe_not_equal(previous_key_1, previous_key_1 = /*greenBar*/ ctx[15])) {
    				key_block1.d(1);
    				key_block1 = create_key_block_3$1(ctx);
    				key_block1.c();
    				key_block1.m(div1, t4);
    			} else {
    				key_block1.p(ctx, dirty);
    			}

    			if (dirty[0] & /*redBar*/ 65536 && safe_not_equal(previous_key_2, previous_key_2 = /*redBar*/ ctx[16])) {
    				key_block2.d(1);
    				key_block2 = create_key_block_1$3(ctx);
    				key_block2.c();
    				key_block2.m(div1, null);
    			} else {
    				key_block2.p(ctx, dirty);
    			}

    			if (dirty[0] & /*counter*/ 1 && safe_not_equal(previous_key_3, previous_key_3 = /*counter*/ ctx[0])) {
    				group_outros();
    				transition_out(key_block3, 1, 1, noop);
    				check_outros();
    				key_block3 = create_key_block$4(ctx);
    				key_block3.c();
    				transition_in(key_block3);
    				key_block3.m(key_block3_anchor.parentNode, key_block3_anchor);
    			} else {
    				key_block3.p(ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(key_block3);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(key_block3);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			key_block0.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div1);
    			key_block1.d(detaching);
    			key_block2.d(detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(key_block3_anchor);
    			key_block3.d(detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block: block_1,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block_1;
    }

    async function timer$7(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    async function Send_Data_To_Exius$3(params, templateKey, writeKey) {
    	// [{endpoint:Horizon_CSV,data:data,fname:fname}]
    	try {
    		var fd = new FormData();

    		for (const fileInfo of params) {
    			let URL = new Blob([fileInfo.data], { type: "text/csv;charset=utf-8;" });
    			fd.append(fileInfo.endpoint, URL, fileInfo.fname);
    		}

    		let res = await fetch("https://exius.nrdlab.org/Upload", {
    			headers: {
    				authorization: `templateKey:${templateKey};writeKey:${writeKey}`
    			},
    			method: "POST",
    			body: fd
    		});

    		return await res.json();
    	} catch(e) {
    		throw e;
    	}
    }

    function box_mueller$1() {
    	// all credit to stack exhange
    	var u = 0, v = 0;

    	while (u === 0) u = Math.random();
    	while (v === 0) v = Math.random();
    	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }

    function sample_normal$1(mu, sd) {
    	return sd * box_mueller$1() + mu;
    }

    function random_int$1() {
    	return Math.floor(20 * Math.random());
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Game", slots, []);
    	let { counter = 0 } = $$props;
    	const viewNumber = 2;
    	let { gameString = "" } = $$props;
    	let trialSd = 3;
    	let { numTrials = 30 } = $$props;
    	let trial = 1;
    	let range = [...Array(viewNumber).keys()];
    	let trialStartTime = Date.now();
    	let viewExplore = false;
    	let exploitMu = random_int$1();
    	let exploreMu = random_int$1();
    	let exploreSelect = false;
    	let exploitSelect = false;
    	let replaceExploit = { truth: false };
    	let keyView = true;
    	let clearBoard = false;
    	let currentUnderstanding = exploitMu;
    	let lastGreenBar = 0;
    	let lastRedBar = 0;
    	let greenBar = 0;
    	let redBar = 0;
    	let { toNext } = $$props;
    	let { writeKey } = $$props;
    	let { id } = $$props;
    	let { bothInvisible = true } = $$props;
    	let { block } = $$props;
    	let { totalBlocks } = $$props;
    	console.log(gameString);

    	//$: oldExploit =replaceExploit
    	function migrateLeftExplore(node, { delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`migrateLeftExplore:${true}`);

    		return {
    			delay,
    			duration,
    			css: (t, u) => `transform: translateX(calc(${100 * u}vw)) `
    		};
    	}

    	function migrateLeftExploit(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`migrateLeftExploit:${replaceExploit}`);

    		if (replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateX(min(${50 * u}vw,${50 * u}vh)) `
    			};
    		} else {
    			return {};
    		}
    	}

    	function migrateOut(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`migrateOut:${replaceExploit}`);

    		if (replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateX(calc(${-100 * u}vw)) `
    			};
    		} else {
    			return {};
    		}
    	}

    	function InvisibleOrDown(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`invisibleOrDown:${replaceExploit}`);

    		if (!replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateY(calc(${100 * u}vh)) `
    			};
    		} else {
    			return {
    				css: () => `visibility: hidden;display: none;`
    			};
    		}
    	}

    	async function handleKeydown(event) {
    		console.log(event.key);

    		if (keyView == false) {
    			return;
    		}

    		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    			let singleTrialData = {
    				trial: trial.toString(),
    				previousExploit: exploitMu,
    				keyPressTime: Date.now(),
    				trialStartTime
    			};

    			$$invalidate(24, bothInvisible = false);
    			singleTrialData["Block"] = block;

    			if (event.key == "ArrowLeft") {
    				$$invalidate(15, greenBar += lastGreenBar);
    				$$invalidate(16, redBar += lastRedBar);
    				$$invalidate(13, lastGreenBar = 0);
    				$$invalidate(14, lastRedBar = 0);
    				$$invalidate(11, keyView = false);
    				let newDist = sample_normal_to_twenty();
    				singleTrialData["newExploit"] = newDist;
    				singleTrialData["choice"] = "exploit";
    				singleTrialData["exploreSeen"] = undefined;
    				$$invalidate(9, exploitSelect = true);
    				await timer$7(500);
    				$$invalidate(9, exploitSelect = false);
    				$$invalidate(12, clearBoard = true);
    				singleTrialData["exploitBoardClear"] = Date.now();
    				await timer$7(1000);
    				$$invalidate(6, exploitMu = newDist);
    				$$invalidate(13, lastGreenBar = newDist);
    				$$invalidate(14, lastRedBar = 20 - newDist);
    				$$invalidate(12, clearBoard = false);
    				$$invalidate(11, keyView = true);
    				singleTrialData["newExploitBoard"] = Date.now();
    				trialStartTime = Date.now();
    				currentUnderstanding = newDist;
    				$$invalidate(4, trial += 1);
    				console.log("done");
    			}

    			if (event.key == "ArrowRight") {
    				$$invalidate(5, viewExplore = true);
    				let newDist = random_int$1();
    				singleTrialData["choice"] = "explore";
    				singleTrialData["exploreSeen"] = newDist;
    				$$invalidate(15, greenBar += lastGreenBar);
    				$$invalidate(16, redBar += lastRedBar);
    				$$invalidate(13, lastGreenBar = 0);
    				$$invalidate(14, lastRedBar = 0);

    				if (newDist > exploitMu) {
    					singleTrialData["newExploit"] = newDist;
    					console.log("greater than");
    					$$invalidate(11, keyView = false);
    					$$invalidate(7, exploreMu = newDist);
    					$$invalidate(8, exploreSelect = true);
    					singleTrialData["newExploreVisible"] = Date.now();
    					await timer$7(500);
    					$$invalidate(8, exploreSelect = false);
    					singleTrialData["newExploreDeslected"] = Date.now();
    					await timer$7(500);
    					$$invalidate(6, exploitMu = newDist);
    					$$invalidate(5, viewExplore = false);
    					$$invalidate(10, replaceExploit.truth = true, replaceExploit);
    					$$invalidate(0, counter += 1);
    					singleTrialData["newExploreMove"] = Date.now();
    					await timer$7(500);
    					$$invalidate(13, lastGreenBar = newDist);
    					$$invalidate(14, lastRedBar = 20 - newDist);
    					$$invalidate(11, keyView = true);
    					singleTrialData["exploreFinishedMoving"] = Date.now();
    					trialStartTime = Date.now();
    					currentUnderstanding = newDist;
    					$$invalidate(4, trial += 1);
    				} else {
    					console.log("less than");
    					$$invalidate(11, keyView = false);
    					singleTrialData["newExploit"] = null;
    					$$invalidate(7, exploreMu = newDist);
    					$$invalidate(8, exploreSelect = true);
    					singleTrialData["newExploreVisible"] = Date.now();
    					await timer$7(500);
    					$$invalidate(8, exploreSelect = false);
    					singleTrialData["newExploreDeselected"] = Date.now();
    					await timer$7(500);
    					singleTrialData["newExploreMove"] = Date.now();
    					$$invalidate(5, viewExplore = false);
    					$$invalidate(10, replaceExploit.truth = false, replaceExploit);
    					$$invalidate(0, counter += 1);
    					await timer$7(500);
    					$$invalidate(13, lastGreenBar = newDist);
    					$$invalidate(14, lastRedBar = 20 - newDist);
    					$$invalidate(11, keyView = true);
    					singleTrialData["exploreFinishedMoving"] = Date.now();
    					trialStartTime = Date.now();
    					currentUnderstanding = newDist;
    					$$invalidate(4, trial += 1);
    				}
    			}

    			$$invalidate(24, bothInvisible = false);
    			export_data(singleTrialData);

    			if (trial === numTrials + 1) {
    				$$invalidate(24, bothInvisible = true);
    				await timer$7(300);
    				console.log(greenBar);
    				console.log(lastGreenBar);
    				toNext(gameString, greenBar + lastGreenBar);
    			}
    		}
    	}

    	function sample_normal_to_twenty() {
    		let newNorm = Math.floor(sample_normal$1(exploitMu, trialSd));
    		newNorm = Math.min(newNorm, 20);
    		newNorm = Math.max(newNorm, 0);
    		return newNorm;
    	}

    	function export_data(data) {
    		let iterate_keys = [
    			"trial",
    			"previousExploit",
    			"keyPressTime",
    			"trialStartTime",
    			"choice",
    			"newExploit",
    			"exploreSeen",
    			"exploitBoardClear",
    			"newExploitBoard",
    			"newExploreVisible",
    			"newExploreDeselected",
    			"newExploreMove",
    			"exploreFinishedMoving",
    			"Block"
    		];

    		let trialString = "";

    		for (const key of iterate_keys) {
    			trialString += `${data[key]},`;
    		}

    		$$invalidate(23, gameString += trialString.substring(0, trialString.length - 1) + "\n");

    		if (trial % 5 === 0) {
    			sendData();
    		}
    	}

    	async function sendData() {
    		console.log(await Send_Data_To_Exius$3(
    			[
    				{
    					endpoint: "TeacherCSV",
    					fname: `Subject_${id}.csv`,
    					data: gameString
    				}
    			],
    			"Teacher_Task",
    			writeKey
    		));
    	}

    	const writable_props = [
    		"counter",
    		"gameString",
    		"numTrials",
    		"toNext",
    		"writeKey",
    		"id",
    		"bothInvisible",
    		"block",
    		"totalBlocks"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$5.warn(`<Game> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("counter" in $$props) $$invalidate(0, counter = $$props.counter);
    		if ("gameString" in $$props) $$invalidate(23, gameString = $$props.gameString);
    		if ("numTrials" in $$props) $$invalidate(1, numTrials = $$props.numTrials);
    		if ("toNext" in $$props) $$invalidate(26, toNext = $$props.toNext);
    		if ("writeKey" in $$props) $$invalidate(27, writeKey = $$props.writeKey);
    		if ("id" in $$props) $$invalidate(28, id = $$props.id);
    		if ("bothInvisible" in $$props) $$invalidate(24, bothInvisible = $$props.bothInvisible);
    		if ("block" in $$props) $$invalidate(2, block = $$props.block);
    		if ("totalBlocks" in $$props) $$invalidate(3, totalBlocks = $$props.totalBlocks);
    	};

    	$$self.$capture_state = () => ({
    		RedGreen,
    		counter,
    		viewNumber,
    		gameString,
    		trialSd,
    		numTrials,
    		trial,
    		range,
    		trialStartTime,
    		viewExplore,
    		exploitMu,
    		exploreMu,
    		exploreSelect,
    		exploitSelect,
    		replaceExploit,
    		keyView,
    		clearBoard,
    		currentUnderstanding,
    		lastGreenBar,
    		lastRedBar,
    		greenBar,
    		redBar,
    		toNext,
    		writeKey,
    		id,
    		bothInvisible,
    		block,
    		totalBlocks,
    		migrateLeftExplore,
    		migrateLeftExploit,
    		migrateOut,
    		InvisibleOrDown,
    		timer: timer$7,
    		Send_Data_To_Exius: Send_Data_To_Exius$3,
    		handleKeydown,
    		box_mueller: box_mueller$1,
    		sample_normal: sample_normal$1,
    		sample_normal_to_twenty,
    		random_int: random_int$1,
    		export_data,
    		sendData
    	});

    	$$self.$inject_state = $$props => {
    		if ("counter" in $$props) $$invalidate(0, counter = $$props.counter);
    		if ("gameString" in $$props) $$invalidate(23, gameString = $$props.gameString);
    		if ("trialSd" in $$props) trialSd = $$props.trialSd;
    		if ("numTrials" in $$props) $$invalidate(1, numTrials = $$props.numTrials);
    		if ("trial" in $$props) $$invalidate(4, trial = $$props.trial);
    		if ("range" in $$props) $$invalidate(17, range = $$props.range);
    		if ("trialStartTime" in $$props) trialStartTime = $$props.trialStartTime;
    		if ("viewExplore" in $$props) $$invalidate(5, viewExplore = $$props.viewExplore);
    		if ("exploitMu" in $$props) $$invalidate(6, exploitMu = $$props.exploitMu);
    		if ("exploreMu" in $$props) $$invalidate(7, exploreMu = $$props.exploreMu);
    		if ("exploreSelect" in $$props) $$invalidate(8, exploreSelect = $$props.exploreSelect);
    		if ("exploitSelect" in $$props) $$invalidate(9, exploitSelect = $$props.exploitSelect);
    		if ("replaceExploit" in $$props) $$invalidate(10, replaceExploit = $$props.replaceExploit);
    		if ("keyView" in $$props) $$invalidate(11, keyView = $$props.keyView);
    		if ("clearBoard" in $$props) $$invalidate(12, clearBoard = $$props.clearBoard);
    		if ("currentUnderstanding" in $$props) currentUnderstanding = $$props.currentUnderstanding;
    		if ("lastGreenBar" in $$props) $$invalidate(13, lastGreenBar = $$props.lastGreenBar);
    		if ("lastRedBar" in $$props) $$invalidate(14, lastRedBar = $$props.lastRedBar);
    		if ("greenBar" in $$props) $$invalidate(15, greenBar = $$props.greenBar);
    		if ("redBar" in $$props) $$invalidate(16, redBar = $$props.redBar);
    		if ("toNext" in $$props) $$invalidate(26, toNext = $$props.toNext);
    		if ("writeKey" in $$props) $$invalidate(27, writeKey = $$props.writeKey);
    		if ("id" in $$props) $$invalidate(28, id = $$props.id);
    		if ("bothInvisible" in $$props) $$invalidate(24, bothInvisible = $$props.bothInvisible);
    		if ("block" in $$props) $$invalidate(2, block = $$props.block);
    		if ("totalBlocks" in $$props) $$invalidate(3, totalBlocks = $$props.totalBlocks);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		counter,
    		numTrials,
    		block,
    		totalBlocks,
    		trial,
    		viewExplore,
    		exploitMu,
    		exploreMu,
    		exploreSelect,
    		exploitSelect,
    		replaceExploit,
    		keyView,
    		clearBoard,
    		lastGreenBar,
    		lastRedBar,
    		greenBar,
    		redBar,
    		range,
    		migrateLeftExplore,
    		migrateLeftExploit,
    		migrateOut,
    		InvisibleOrDown,
    		handleKeydown,
    		gameString,
    		bothInvisible,
    		viewNumber,
    		toNext,
    		writeKey,
    		id
    	];
    }

    class Game extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(
    			this,
    			options,
    			instance$d,
    			create_fragment$d,
    			safe_not_equal,
    			{
    				counter: 0,
    				viewNumber: 25,
    				gameString: 23,
    				numTrials: 1,
    				toNext: 26,
    				writeKey: 27,
    				id: 28,
    				bothInvisible: 24,
    				block: 2,
    				totalBlocks: 3
    			},
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Game",
    			options,
    			id: create_fragment$d.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*toNext*/ ctx[26] === undefined && !("toNext" in props)) {
    			console_1$5.warn("<Game> was created without expected prop 'toNext'");
    		}

    		if (/*writeKey*/ ctx[27] === undefined && !("writeKey" in props)) {
    			console_1$5.warn("<Game> was created without expected prop 'writeKey'");
    		}

    		if (/*id*/ ctx[28] === undefined && !("id" in props)) {
    			console_1$5.warn("<Game> was created without expected prop 'id'");
    		}

    		if (/*block*/ ctx[2] === undefined && !("block" in props)) {
    			console_1$5.warn("<Game> was created without expected prop 'block'");
    		}

    		if (/*totalBlocks*/ ctx[3] === undefined && !("totalBlocks" in props)) {
    			console_1$5.warn("<Game> was created without expected prop 'totalBlocks'");
    		}
    	}

    	get counter() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set counter(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewNumber() {
    		return this.$$.ctx[25];
    	}

    	set viewNumber(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get gameString() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set gameString(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get numTrials() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set numTrials(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get toNext() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set toNext(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get writeKey() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set writeKey(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get bothInvisible() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bothInvisible(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get block() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set block(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get totalBlocks() {
    		throw new Error("<Game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set totalBlocks(value) {
    		throw new Error("<Game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/NavigationButtons.svelte generated by Svelte v3.34.0 */

    const file$9 = "src/Instructions/NavigationButtons.svelte";

    // (29:0) {#if !breakTruth.truth && display}
    function create_if_block$8(ctx) {
    	let if_block_anchor;

    	function select_block_type(ctx, dirty) {
    		if (/*nextInstruction*/ ctx[1] && /*previousInstruction*/ ctx[2]) return create_if_block_1$7;
    		if (/*nextInstruction*/ ctx[1]) return create_if_block_3$5;
    		return create_else_block$5;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$8.name,
    		type: "if",
    		source: "(29:0) {#if !breakTruth.truth && display}",
    		ctx
    	});

    	return block;
    }

    // (38:4) {:else}
    function create_else_block$5(ctx) {
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			button.textContent = "Back";
    			attr_dev(button, "class", "buttonCover svelte-1gvzfvl");
    			set_style(button, "left", "calc(50vw - min(10vh,10vw))");
    			add_location(button, file$9, 38, 8, 1434);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*previousInstruction*/ ctx[2](/*backSkip*/ ctx[4]))) /*previousInstruction*/ ctx[2](/*backSkip*/ ctx[4]).apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$5.name,
    		type: "else",
    		source: "(38:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (36:30) 
    function create_if_block_3$5(ctx) {
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			button.textContent = "Next";
    			attr_dev(button, "class", "buttonCover svelte-1gvzfvl");
    			set_style(button, "left", "calc(50vw - min(10vh,10vw))");
    			add_location(button, file$9, 36, 8, 1287);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*nextInstruction*/ ctx[1](/*forwardSkip*/ ctx[5]))) /*nextInstruction*/ ctx[1](/*forwardSkip*/ ctx[5]).apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$5.name,
    		type: "if",
    		source: "(36:30) ",
    		ctx
    	});

    	return block;
    }

    // (30:4) {#if nextInstruction && previousInstruction}
    function create_if_block_1$7(ctx) {
    	let button0;
    	let t1;
    	let button1;
    	let t3;
    	let if_block_anchor;
    	let mounted;
    	let dispose;
    	let if_block = /*replayAnimation*/ ctx[3] && create_if_block_2$7(ctx);

    	const block = {
    		c: function create() {
    			button0 = element("button");
    			button0.textContent = "Back";
    			t1 = space();
    			button1 = element("button");
    			button1.textContent = "Next";
    			t3 = space();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(button0, "class", "buttonCover svelte-1gvzfvl");
    			set_style(button0, "left", "calc(50vw - min(36vh,36vw))");
    			add_location(button0, file$9, 30, 8, 809);
    			attr_dev(button1, "class", "buttonCover svelte-1gvzfvl");
    			set_style(button1, "left", "calc(50vw + min(16vh,16vw))");
    			add_location(button1, file$9, 31, 8, 941);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, button1, anchor);
    			insert_dev(target, t3, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);

    			if (!mounted) {
    				dispose = [
    					listen_dev(
    						button0,
    						"click",
    						function () {
    							if (is_function(/*previousInstruction*/ ctx[2](/*backSkip*/ ctx[4]))) /*previousInstruction*/ ctx[2](/*backSkip*/ ctx[4]).apply(this, arguments);
    						},
    						false,
    						false,
    						false
    					),
    					listen_dev(
    						button1,
    						"click",
    						function () {
    							if (is_function(/*nextInstruction*/ ctx[1](/*forwardSkip*/ ctx[5]))) /*nextInstruction*/ ctx[1](/*forwardSkip*/ ctx[5]).apply(this, arguments);
    						},
    						false,
    						false,
    						false
    					)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (/*replayAnimation*/ ctx[3]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_2$7(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(button1);
    			if (detaching) detach_dev(t3);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$7.name,
    		type: "if",
    		source: "(30:4) {#if nextInstruction && previousInstruction}",
    		ctx
    	});

    	return block;
    }

    // (33:8) {#if replayAnimation}
    function create_if_block_2$7(ctx) {
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			button.textContent = "Replay Animation";
    			attr_dev(button, "class", "buttonCover svelte-1gvzfvl");
    			set_style(button, "left", "calc(50vw - min(10vh,10vw))");
    			add_location(button, file$9, 33, 12, 1108);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*replayAnimation*/ ctx[3]())) /*replayAnimation*/ ctx[3]().apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$7.name,
    		type: "if",
    		source: "(33:8) {#if replayAnimation}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$c(ctx) {
    	let if_block_anchor;
    	let if_block = !/*breakTruth*/ ctx[0].truth && /*display*/ ctx[6] && create_if_block$8(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (!/*breakTruth*/ ctx[0].truth && /*display*/ ctx[6]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$8(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("NavigationButtons", slots, []);
    	let { breakTruth = { truth: false } } = $$props;
    	let { nextInstruction = null } = $$props;
    	let { previousInstruction = null } = $$props;
    	let { replayAnimation = null } = $$props;
    	let { backSkip = 1 } = $$props;
    	let { forwardSkip = 1 } = $$props;
    	let { display = true } = $$props;

    	const writable_props = [
    		"breakTruth",
    		"nextInstruction",
    		"previousInstruction",
    		"replayAnimation",
    		"backSkip",
    		"forwardSkip",
    		"display"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<NavigationButtons> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("breakTruth" in $$props) $$invalidate(0, breakTruth = $$props.breakTruth);
    		if ("nextInstruction" in $$props) $$invalidate(1, nextInstruction = $$props.nextInstruction);
    		if ("previousInstruction" in $$props) $$invalidate(2, previousInstruction = $$props.previousInstruction);
    		if ("replayAnimation" in $$props) $$invalidate(3, replayAnimation = $$props.replayAnimation);
    		if ("backSkip" in $$props) $$invalidate(4, backSkip = $$props.backSkip);
    		if ("forwardSkip" in $$props) $$invalidate(5, forwardSkip = $$props.forwardSkip);
    		if ("display" in $$props) $$invalidate(6, display = $$props.display);
    	};

    	$$self.$capture_state = () => ({
    		breakTruth,
    		nextInstruction,
    		previousInstruction,
    		replayAnimation,
    		backSkip,
    		forwardSkip,
    		display
    	});

    	$$self.$inject_state = $$props => {
    		if ("breakTruth" in $$props) $$invalidate(0, breakTruth = $$props.breakTruth);
    		if ("nextInstruction" in $$props) $$invalidate(1, nextInstruction = $$props.nextInstruction);
    		if ("previousInstruction" in $$props) $$invalidate(2, previousInstruction = $$props.previousInstruction);
    		if ("replayAnimation" in $$props) $$invalidate(3, replayAnimation = $$props.replayAnimation);
    		if ("backSkip" in $$props) $$invalidate(4, backSkip = $$props.backSkip);
    		if ("forwardSkip" in $$props) $$invalidate(5, forwardSkip = $$props.forwardSkip);
    		if ("display" in $$props) $$invalidate(6, display = $$props.display);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		breakTruth,
    		nextInstruction,
    		previousInstruction,
    		replayAnimation,
    		backSkip,
    		forwardSkip,
    		display
    	];
    }

    class NavigationButtons extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {
    			breakTruth: 0,
    			nextInstruction: 1,
    			previousInstruction: 2,
    			replayAnimation: 3,
    			backSkip: 4,
    			forwardSkip: 5,
    			display: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "NavigationButtons",
    			options,
    			id: create_fragment$c.name
    		});
    	}

    	get breakTruth() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set breakTruth(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get nextInstruction() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set nextInstruction(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get previousInstruction() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set previousInstruction(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get replayAnimation() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set replayAnimation(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get backSkip() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set backSkip(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get forwardSkip() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set forwardSkip(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get display() {
    		throw new Error("<NavigationButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set display(value) {
    		throw new Error("<NavigationButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/SingleChoice.svelte generated by Svelte v3.34.0 */
    const file$8 = "src/Instructions/SingleChoice.svelte";

    // (55:12) {:else}
    function create_else_block$4(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: 0, clearBoard: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$4.name,
    		type: "else",
    		source: "(55:12) {:else}",
    		ctx
    	});

    	return block;
    }

    // (53:12) {#if !clearBoard}
    function create_if_block$7(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploitMu*/ ctx[1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty & /*exploitMu*/ 2) redgreen_changes.numberGreen = /*exploitMu*/ ctx[1];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$7.name,
    		type: "if",
    		source: "(53:12) {#if !clearBoard}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$b(ctx) {
    	let h10;
    	let t0;
    	let t1;
    	let div3;
    	let h11;
    	let t3;
    	let div0;
    	let t4;
    	let div2;
    	let div1;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	const if_block_creators = [create_if_block$7, create_else_block$4];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (!/*clearBoard*/ ctx[2]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			t0 = text(/*passedText*/ ctx[0]);
    			t1 = space();
    			div3 = element("div");
    			h11 = element("h1");
    			h11.textContent = "Current Teaching Move";
    			t3 = space();
    			div0 = element("div");
    			t4 = space();
    			div2 = element("div");
    			div1 = element("div");
    			if_block.c();
    			attr_dev(h10, "class", "descriptionText svelte-4xysbd");
    			add_location(h10, file$8, 46, 0, 1158);
    			attr_dev(h11, "class", "teachingMoves svelte-4xysbd");
    			add_location(h11, file$8, 48, 4, 1298);
    			attr_dev(div0, "class", "blueLight svelte-4xysbd");
    			set_style(div0, "opacity", !/*exploitSelect*/ ctx[3] ? "0" : "1");
    			add_location(div0, file$8, 49, 4, 1355);
    			set_style(div1, "top", "0px");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$8, 51, 8, 1466);
    			attr_dev(div2, "class", "greyBox svelte-4xysbd");
    			add_location(div2, file$8, 50, 4, 1436);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw - min(20vw, 20vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$8, 47, 0, 1204);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			append_dev(h10, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h11);
    			append_dev(div3, t3);
    			append_dev(div3, div0);
    			append_dev(div3, t4);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			if_blocks[current_block_type_index].m(div1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*passedText*/ 1) set_data_dev(t0, /*passedText*/ ctx[0]);

    			if (!current || dirty & /*exploitSelect*/ 8) {
    				set_style(div0, "opacity", !/*exploitSelect*/ ctx[3] ? "0" : "1");
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(div1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("SingleChoice", slots, []);
    	let { passedText = "" } = $$props;
    	let { exploitMu = 10 } = $$props;
    	let { clearBoard = false } = $$props;
    	let { exploitSelect = true } = $$props;
    	const writable_props = ["passedText", "exploitMu", "clearBoard", "exploitSelect"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SingleChoice> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("passedText" in $$props) $$invalidate(0, passedText = $$props.passedText);
    		if ("exploitMu" in $$props) $$invalidate(1, exploitMu = $$props.exploitMu);
    		if ("clearBoard" in $$props) $$invalidate(2, clearBoard = $$props.clearBoard);
    		if ("exploitSelect" in $$props) $$invalidate(3, exploitSelect = $$props.exploitSelect);
    	};

    	$$self.$capture_state = () => ({
    		RedGreen,
    		passedText,
    		exploitMu,
    		clearBoard,
    		exploitSelect
    	});

    	$$self.$inject_state = $$props => {
    		if ("passedText" in $$props) $$invalidate(0, passedText = $$props.passedText);
    		if ("exploitMu" in $$props) $$invalidate(1, exploitMu = $$props.exploitMu);
    		if ("clearBoard" in $$props) $$invalidate(2, clearBoard = $$props.clearBoard);
    		if ("exploitSelect" in $$props) $$invalidate(3, exploitSelect = $$props.exploitSelect);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [passedText, exploitMu, clearBoard, exploitSelect];
    }

    class SingleChoice extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {
    			passedText: 0,
    			exploitMu: 1,
    			clearBoard: 2,
    			exploitSelect: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SingleChoice",
    			options,
    			id: create_fragment$b.name
    		});
    	}

    	get passedText() {
    		throw new Error("<SingleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set passedText(value) {
    		throw new Error("<SingleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploitMu() {
    		throw new Error("<SingleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploitMu(value) {
    		throw new Error("<SingleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get clearBoard() {
    		throw new Error("<SingleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set clearBoard(value) {
    		throw new Error("<SingleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploitSelect() {
    		throw new Error("<SingleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploitSelect(value) {
    		throw new Error("<SingleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/DoubleChoice.svelte generated by Svelte v3.34.0 */
    const file$7 = "src/Instructions/DoubleChoice.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[30] = list[i];
    	return child_ctx;
    }

    // (212:4) {#if pointCounter}
    function create_if_block_5$3(ctx) {
    	let h1;
    	let t0;
    	let t1_value = Math.round(/*points*/ ctx[9] / 20 * 100) + "";
    	let t1;
    	let t2;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			t0 = text("Current Classroom Understanding: ");
    			t1 = text(t1_value);
    			t2 = text("%");
    			set_style(h1, "position", "absolute");
    			set_style(h1, "top", "0vh");
    			set_style(h1, "left", "calc(50vw + -400px)");
    			set_style(h1, "width", "800px");
    			set_style(h1, "height", "50px");
    			set_style(h1, "text-align", "center");
    			set_style(h1, "border", "solid black 2px");
    			add_location(h1, file$7, 212, 8, 5665);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			append_dev(h1, t0);
    			append_dev(h1, t1);
    			append_dev(h1, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*points*/ 512 && t1_value !== (t1_value = Math.round(/*points*/ ctx[9] / 20 * 100) + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$3.name,
    		type: "if",
    		source: "(212:4) {#if pointCounter}",
    		ctx
    	});

    	return block;
    }

    // (235:12) {:else}
    function create_else_block_1$1(ctx) {
    	let div3;
    	let h1;
    	let t1;
    	let div1;
    	let div0;
    	let current_block_type_index;
    	let if_block0;
    	let div1_id_value;
    	let div1_intro;
    	let div1_outro;
    	let t2;
    	let div2;
    	let t3;
    	let t4;
    	let current;
    	const if_block_creators = [create_if_block_4$4, create_else_block_2$1];
    	const if_blocks = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*viewExplore*/ ctx[1]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_2(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*keyView*/ ctx[10] && create_if_block_3$4(ctx);

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			h1 = element("h1");
    			h1.textContent = "New Teaching Move";
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			if_block0.c();
    			t2 = space();
    			div2 = element("div");
    			t3 = space();
    			if (if_block1) if_block1.c();
    			t4 = space();
    			attr_dev(h1, "class", "teachingMoves svelte-kkymw2");
    			add_location(h1, file$7, 236, 12, 7017);
    			set_style(div0, "top", "0px");
    			set_style(div0, "position", "absolute");
    			add_location(div0, file$7, 238, 16, 7250);
    			attr_dev(div1, "class", "greyBox svelte-kkymw2");
    			attr_dev(div1, "id", div1_id_value = `box2: ${/*counter*/ ctx[0]}`);
    			add_location(div1, file$7, 237, 12, 7078);
    			attr_dev(div2, "class", "blueLight svelte-kkymw2");
    			set_style(div2, "opacity", !/*exploreSelect*/ ctx[3] ? "0" : "1");
    			add_location(div2, file$7, 246, 16, 7682);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw + min(5vw, 5vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$7, 235, 12, 6918);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h1);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div1, div0);
    			if_blocks[current_block_type_index].m(div0, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div3, t3);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t4);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div0, null);
    			}

    			if (!current || dirty[0] & /*counter*/ 1 && div1_id_value !== (div1_id_value = `box2: ${/*counter*/ ctx[0]}`)) {
    				attr_dev(div1, "id", div1_id_value);
    			}

    			if (!current || dirty[0] & /*exploreSelect*/ 8) {
    				set_style(div2, "opacity", !/*exploreSelect*/ ctx[3] ? "0" : "1");
    			}

    			if (/*keyView*/ ctx[10]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_3$4(ctx);
    					if_block1.c();
    					if_block1.m(div3, t4);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			add_render_callback(() => {
    				if (div1_outro) div1_outro.end(1);

    				if (!div1_intro) div1_intro = create_in_transition(div1, /*migrateLeftExplore*/ ctx[12], {
    					replaceExploit: /*replaceExploit*/ ctx[5]
    				});

    				div1_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			if (div1_intro) div1_intro.invalidate();

    			div1_outro = create_out_transition(div1, /*InvisibleOrDown*/ ctx[15], {
    				replaceExploit: /*replaceExploit*/ ctx[5]
    			});

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    			if (detaching && div1_outro) div1_outro.end();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$1.name,
    		type: "else",
    		source: "(235:12) {:else}",
    		ctx
    	});

    	return block;
    }

    // (216:8) {#if i==0}
    function create_if_block$6(ctx) {
    	let div3;
    	let h1;
    	let t1;
    	let div0;
    	let t2;
    	let div2;
    	let div1;
    	let current_block_type_index;
    	let if_block0;
    	let div2_id_value;
    	let div2_intro;
    	let div2_outro;
    	let t3;
    	let t4;
    	let current;
    	const if_block_creators = [create_if_block_2$6, create_else_block$3];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (!/*clearBoard*/ ctx[6]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_1(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*keyView*/ ctx[10] && create_if_block_1$6(ctx);

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Current Teaching Move";
    			t1 = space();
    			div0 = element("div");
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			if_block0.c();
    			t3 = space();
    			if (if_block1) if_block1.c();
    			t4 = space();
    			attr_dev(h1, "class", "teachingMoves svelte-kkymw2");
    			add_location(h1, file$7, 217, 12, 6033);
    			attr_dev(div0, "class", "blueLight svelte-kkymw2");
    			set_style(div0, "opacity", !/*exploitSelect*/ ctx[4] ? "0" : "1");
    			add_location(div0, file$7, 218, 12, 6098);
    			set_style(div1, "top", "0px");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$7, 220, 20, 6364);
    			attr_dev(div2, "class", "greyBox svelte-kkymw2");
    			attr_dev(div2, "id", div2_id_value = `box1: ${/*counter*/ ctx[0]}`);
    			add_location(div2, file$7, 219, 16, 6191);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw - min(45vw, 45vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$7, 216, 12, 5931);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h1);
    			append_dev(div3, t1);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			if_blocks[current_block_type_index].m(div1, null);
    			append_dev(div3, t3);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t4);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (!current || dirty[0] & /*exploitSelect*/ 16) {
    				set_style(div0, "opacity", !/*exploitSelect*/ ctx[4] ? "0" : "1");
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div1, null);
    			}

    			if (!current || dirty[0] & /*counter*/ 1 && div2_id_value !== (div2_id_value = `box1: ${/*counter*/ ctx[0]}`)) {
    				attr_dev(div2, "id", div2_id_value);
    			}

    			if (/*keyView*/ ctx[10]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_1$6(ctx);
    					if_block1.c();
    					if_block1.m(div3, t4);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			add_render_callback(() => {
    				if (div2_outro) div2_outro.end(1);

    				if (!div2_intro) div2_intro = create_in_transition(div2, /*migrateLeftExploit*/ ctx[13], {
    					replaceExploit: /*replaceExploit*/ ctx[5]
    				});

    				div2_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			if (div2_intro) div2_intro.invalidate();

    			div2_outro = create_out_transition(div2, /*migrateOut*/ ctx[14], {
    				replaceExploit: /*replaceExploit*/ ctx[5]
    			});

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    			if (detaching && div2_outro) div2_outro.end();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(216:8) {#if i==0}",
    		ctx
    	});

    	return block;
    }

    // (242:20) {:else}
    function create_else_block_2$1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "?";
    			set_style(div, "width", "min(40vh,40vw)");
    			set_style(div, "height", "min(40vh,40vw)");
    			set_style(div, "text-align", "center");
    			set_style(div, "font-size", "min(20vh,20vw)");
    			set_style(div, "top", "min(5vh,5vw)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$7, 242, 24, 7443);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2$1.name,
    		type: "else",
    		source: "(242:20) {:else}",
    		ctx
    	});

    	return block;
    }

    // (240:20) {#if viewExplore}
    function create_if_block_4$4(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploreMu*/ ctx[7] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty[0] & /*exploreMu*/ 128) redgreen_changes.numberGreen = /*exploreMu*/ ctx[7];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$4.name,
    		type: "if",
    		source: "(240:20) {#if viewExplore}",
    		ctx
    	});

    	return block;
    }

    // (248:8) {#if keyView}
    function create_if_block_3$4(ctx) {
    	let div;
    	let h2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Right Arrow";
    			attr_dev(h2, "class", "arrowKey svelte-kkymw2");
    			add_location(h2, file$7, 249, 16, 7837);
    			attr_dev(div, "class", "arrowCover svelte-kkymw2");
    			add_location(div, file$7, 248, 16, 7795);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$4.name,
    		type: "if",
    		source: "(248:8) {#if keyView}",
    		ctx
    	});

    	return block;
    }

    // (224:24) {:else}
    function create_else_block$3(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: 0, clearBoard: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$3.name,
    		type: "else",
    		source: "(224:24) {:else}",
    		ctx
    	});

    	return block;
    }

    // (222:24) {#if !clearBoard}
    function create_if_block_2$6(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploitMu*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty[0] & /*exploitMu*/ 4) redgreen_changes.numberGreen = /*exploitMu*/ ctx[2];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$6.name,
    		type: "if",
    		source: "(222:24) {#if !clearBoard}",
    		ctx
    	});

    	return block;
    }

    // (229:12) {#if keyView}
    function create_if_block_1$6(ctx) {
    	let div;
    	let h2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Left Arrow";
    			attr_dev(h2, "class", "arrowKey svelte-kkymw2");
    			add_location(h2, file$7, 230, 20, 6787);
    			attr_dev(div, "class", "arrowCover svelte-kkymw2");
    			add_location(div, file$7, 229, 16, 6740);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$6.name,
    		type: "if",
    		source: "(229:12) {#if keyView}",
    		ctx
    	});

    	return block;
    }

    // (215:4) {#each range as i}
    function create_each_block$1(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$6, create_else_block_1$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*i*/ ctx[30] == 0) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if_block.p(ctx, dirty);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(215:4) {#each range as i}",
    		ctx
    	});

    	return block;
    }

    // (211:0) {#key counter}
    function create_key_block$3(ctx) {
    	let t;
    	let each_1_anchor;
    	let current;
    	let if_block = /*pointCounter*/ ctx[8] && create_if_block_5$3(ctx);
    	let each_value = /*range*/ ctx[11];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*pointCounter*/ ctx[8]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_5$3(ctx);
    					if_block.c();
    					if_block.m(t.parentNode, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty[0] & /*keyView, counter, replaceExploit, exploitMu, clearBoard, exploitSelect, range, exploreSelect, exploreMu, viewExplore*/ 3327) {
    				each_value = /*range*/ ctx[11];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block$3.name,
    		type: "key",
    		source: "(211:0) {#key counter}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$a(ctx) {
    	let previous_key = /*counter*/ ctx[0];
    	let key_block_anchor;
    	let current;
    	let key_block = create_key_block$3(ctx);

    	const block = {
    		c: function create() {
    			key_block.c();
    			key_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*counter*/ 1 && safe_not_equal(previous_key, previous_key = /*counter*/ ctx[0])) {
    				group_outros();
    				transition_out(key_block, 1, 1, noop);
    				check_outros();
    				key_block = create_key_block$3(ctx);
    				key_block.c();
    				transition_in(key_block);
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(key_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(key_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function timer$6(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("DoubleChoice", slots, []);
    	let { breakNav } = $$props;
    	let { counter = 0 } = $$props;
    	const viewNumber = 2;
    	let range = [...Array(viewNumber).keys()];
    	let { delayGoodExplore = false } = $$props;
    	let { delayBadExplore = false } = $$props;
    	let { delayExploit = false } = $$props;
    	let { viewExplore = false } = $$props;
    	let { exploitMu = 12 } = $$props;
    	let { exploreMu = 5 } = $$props;
    	let { exploitMu2 = 14 } = $$props;
    	let { exploreSelect = false } = $$props;
    	let { exploitSelect = false } = $$props;
    	let { replaceExploit = { truth: true } } = $$props;
    	let { clearBoard = false } = $$props;
    	let { bothInvisible = { truth: true } } = $$props;
    	let { keyDisplay = false } = $$props;
    	let { noReplaceExplore = false } = $$props;
    	let { pointCounter = false } = $$props;
    	let { points = 14 } = $$props;
    	let { delayTime = 1000 } = $$props;
    	let invisibleExplore = false;
    	let keyView = keyDisplay;

    	if (delayGoodExplore) {
    		delayedGoodExplore();
    	}

    	if (delayBadExplore) {
    		delayedBadExplore();
    	}

    	if (delayExploit) {
    		delayedExploit();
    	}

    	function migrateLeftExplore(node, { delay = 0, duration = 500 }) {
    		if (bothInvisible.truth) {
    			return { delay: 0, duration: 0 };
    		}

    		return {
    			delay,
    			duration,
    			css: (t, u) => `transform: translateX(calc(${100 * u}vw)) `
    		};
    	}

    	function migrateLeftExploit(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible.truth) {
    			return { delay: 0, duration: 0 };
    		}

    		if (replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateX(min(${50 * u}vw,${50 * u}vh)) `
    			};
    		} else {
    			return {};
    		}
    	}

    	function migrateOut(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible.truth) {
    			return { delay: 0, duration: 0 };
    		}

    		if (replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateX(calc(${-100 * u}vw)) `
    			};
    		} else {
    			return {};
    		}
    	}

    	function InvisibleOrDown(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible.truth) {
    			return { delay: 0, duration: 0 };
    		}

    		if (!replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateY(calc(${100 * u}vh)) `
    			};
    		} else {
    			return {
    				css: () => `visibility: hidden;display: none;`
    			};
    		}
    	}

    	async function delayedGoodExplore() {
    		if (keyDisplay) $$invalidate(10, keyView = false);
    		breakNav(true);
    		await timer$6(delayTime);
    		$$invalidate(16, bothInvisible = { truth: false });
    		$$invalidate(1, viewExplore = true);
    		$$invalidate(3, exploreSelect = true);
    		await timer$6(500);
    		$$invalidate(3, exploreSelect = false);
    		await timer$6(1000);
    		$$invalidate(2, exploitMu = exploreMu);
    		$$invalidate(1, viewExplore = false);
    		$$invalidate(5, replaceExploit.truth = true, replaceExploit);
    		$$invalidate(0, counter += 1);
    		if (noReplaceExplore) invisibleExplore = true;
    		await timer$6(500);
    		breakNav(false);
    		if (keyDisplay) $$invalidate(10, keyView = true);
    		$$invalidate(16, bothInvisible = { truth: true });
    	}

    	async function delayedBadExplore() {
    		if (keyDisplay) $$invalidate(10, keyView = false);
    		breakNav(true);
    		await timer$6(delayTime);
    		$$invalidate(16, bothInvisible = { truth: false });
    		$$invalidate(1, viewExplore = true);
    		$$invalidate(3, exploreSelect = true);
    		await timer$6(500);
    		$$invalidate(3, exploreSelect = false);
    		await timer$6(1000);
    		$$invalidate(1, viewExplore = false);
    		$$invalidate(5, replaceExploit.truth = false, replaceExploit);
    		$$invalidate(0, counter += 1);
    		if (noReplaceExplore) invisibleExplore = true;
    		await timer$6(500);
    		breakNav(false);
    		if (keyDisplay) $$invalidate(10, keyView = true);
    		$$invalidate(16, bothInvisible = { truth: true });
    	}

    	async function delayedExploit() {
    		if (keyDisplay) $$invalidate(10, keyView = false);
    		breakNav(true);
    		await timer$6(delayTime);
    		$$invalidate(4, exploitSelect = true);
    		$$invalidate(16, bothInvisible = { truth: false });
    		await timer$6(500);
    		$$invalidate(6, clearBoard = true);
    		$$invalidate(4, exploitSelect = false);
    		await timer$6(1000);
    		$$invalidate(6, clearBoard = false);
    		$$invalidate(2, exploitMu = exploitMu2);
    		$$invalidate(0, counter += 1);
    		breakNav(false);
    		if (keyDisplay) $$invalidate(10, keyView = true);
    		$$invalidate(16, bothInvisible = { truth: true });
    	}

    	const writable_props = [
    		"breakNav",
    		"counter",
    		"delayGoodExplore",
    		"delayBadExplore",
    		"delayExploit",
    		"viewExplore",
    		"exploitMu",
    		"exploreMu",
    		"exploitMu2",
    		"exploreSelect",
    		"exploitSelect",
    		"replaceExploit",
    		"clearBoard",
    		"bothInvisible",
    		"keyDisplay",
    		"noReplaceExplore",
    		"pointCounter",
    		"points",
    		"delayTime"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DoubleChoice> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("breakNav" in $$props) $$invalidate(17, breakNav = $$props.breakNav);
    		if ("counter" in $$props) $$invalidate(0, counter = $$props.counter);
    		if ("delayGoodExplore" in $$props) $$invalidate(19, delayGoodExplore = $$props.delayGoodExplore);
    		if ("delayBadExplore" in $$props) $$invalidate(20, delayBadExplore = $$props.delayBadExplore);
    		if ("delayExploit" in $$props) $$invalidate(21, delayExploit = $$props.delayExploit);
    		if ("viewExplore" in $$props) $$invalidate(1, viewExplore = $$props.viewExplore);
    		if ("exploitMu" in $$props) $$invalidate(2, exploitMu = $$props.exploitMu);
    		if ("exploreMu" in $$props) $$invalidate(7, exploreMu = $$props.exploreMu);
    		if ("exploitMu2" in $$props) $$invalidate(22, exploitMu2 = $$props.exploitMu2);
    		if ("exploreSelect" in $$props) $$invalidate(3, exploreSelect = $$props.exploreSelect);
    		if ("exploitSelect" in $$props) $$invalidate(4, exploitSelect = $$props.exploitSelect);
    		if ("replaceExploit" in $$props) $$invalidate(5, replaceExploit = $$props.replaceExploit);
    		if ("clearBoard" in $$props) $$invalidate(6, clearBoard = $$props.clearBoard);
    		if ("bothInvisible" in $$props) $$invalidate(16, bothInvisible = $$props.bothInvisible);
    		if ("keyDisplay" in $$props) $$invalidate(23, keyDisplay = $$props.keyDisplay);
    		if ("noReplaceExplore" in $$props) $$invalidate(24, noReplaceExplore = $$props.noReplaceExplore);
    		if ("pointCounter" in $$props) $$invalidate(8, pointCounter = $$props.pointCounter);
    		if ("points" in $$props) $$invalidate(9, points = $$props.points);
    		if ("delayTime" in $$props) $$invalidate(25, delayTime = $$props.delayTime);
    	};

    	$$self.$capture_state = () => ({
    		RedGreen,
    		breakNav,
    		counter,
    		viewNumber,
    		range,
    		delayGoodExplore,
    		delayBadExplore,
    		delayExploit,
    		viewExplore,
    		exploitMu,
    		exploreMu,
    		exploitMu2,
    		exploreSelect,
    		exploitSelect,
    		replaceExploit,
    		clearBoard,
    		bothInvisible,
    		keyDisplay,
    		noReplaceExplore,
    		pointCounter,
    		points,
    		delayTime,
    		invisibleExplore,
    		keyView,
    		migrateLeftExplore,
    		migrateLeftExploit,
    		migrateOut,
    		InvisibleOrDown,
    		timer: timer$6,
    		delayedGoodExplore,
    		delayedBadExplore,
    		delayedExploit
    	});

    	$$self.$inject_state = $$props => {
    		if ("breakNav" in $$props) $$invalidate(17, breakNav = $$props.breakNav);
    		if ("counter" in $$props) $$invalidate(0, counter = $$props.counter);
    		if ("range" in $$props) $$invalidate(11, range = $$props.range);
    		if ("delayGoodExplore" in $$props) $$invalidate(19, delayGoodExplore = $$props.delayGoodExplore);
    		if ("delayBadExplore" in $$props) $$invalidate(20, delayBadExplore = $$props.delayBadExplore);
    		if ("delayExploit" in $$props) $$invalidate(21, delayExploit = $$props.delayExploit);
    		if ("viewExplore" in $$props) $$invalidate(1, viewExplore = $$props.viewExplore);
    		if ("exploitMu" in $$props) $$invalidate(2, exploitMu = $$props.exploitMu);
    		if ("exploreMu" in $$props) $$invalidate(7, exploreMu = $$props.exploreMu);
    		if ("exploitMu2" in $$props) $$invalidate(22, exploitMu2 = $$props.exploitMu2);
    		if ("exploreSelect" in $$props) $$invalidate(3, exploreSelect = $$props.exploreSelect);
    		if ("exploitSelect" in $$props) $$invalidate(4, exploitSelect = $$props.exploitSelect);
    		if ("replaceExploit" in $$props) $$invalidate(5, replaceExploit = $$props.replaceExploit);
    		if ("clearBoard" in $$props) $$invalidate(6, clearBoard = $$props.clearBoard);
    		if ("bothInvisible" in $$props) $$invalidate(16, bothInvisible = $$props.bothInvisible);
    		if ("keyDisplay" in $$props) $$invalidate(23, keyDisplay = $$props.keyDisplay);
    		if ("noReplaceExplore" in $$props) $$invalidate(24, noReplaceExplore = $$props.noReplaceExplore);
    		if ("pointCounter" in $$props) $$invalidate(8, pointCounter = $$props.pointCounter);
    		if ("points" in $$props) $$invalidate(9, points = $$props.points);
    		if ("delayTime" in $$props) $$invalidate(25, delayTime = $$props.delayTime);
    		if ("invisibleExplore" in $$props) invisibleExplore = $$props.invisibleExplore;
    		if ("keyView" in $$props) $$invalidate(10, keyView = $$props.keyView);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		counter,
    		viewExplore,
    		exploitMu,
    		exploreSelect,
    		exploitSelect,
    		replaceExploit,
    		clearBoard,
    		exploreMu,
    		pointCounter,
    		points,
    		keyView,
    		range,
    		migrateLeftExplore,
    		migrateLeftExploit,
    		migrateOut,
    		InvisibleOrDown,
    		bothInvisible,
    		breakNav,
    		viewNumber,
    		delayGoodExplore,
    		delayBadExplore,
    		delayExploit,
    		exploitMu2,
    		keyDisplay,
    		noReplaceExplore,
    		delayTime
    	];
    }

    class DoubleChoice extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(
    			this,
    			options,
    			instance$a,
    			create_fragment$a,
    			safe_not_equal,
    			{
    				breakNav: 17,
    				counter: 0,
    				viewNumber: 18,
    				delayGoodExplore: 19,
    				delayBadExplore: 20,
    				delayExploit: 21,
    				viewExplore: 1,
    				exploitMu: 2,
    				exploreMu: 7,
    				exploitMu2: 22,
    				exploreSelect: 3,
    				exploitSelect: 4,
    				replaceExploit: 5,
    				clearBoard: 6,
    				bothInvisible: 16,
    				keyDisplay: 23,
    				noReplaceExplore: 24,
    				pointCounter: 8,
    				points: 9,
    				delayTime: 25
    			},
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DoubleChoice",
    			options,
    			id: create_fragment$a.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*breakNav*/ ctx[17] === undefined && !("breakNav" in props)) {
    			console.warn("<DoubleChoice> was created without expected prop 'breakNav'");
    		}
    	}

    	get breakNav() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set breakNav(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get counter() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set counter(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewNumber() {
    		return this.$$.ctx[18];
    	}

    	set viewNumber(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get delayGoodExplore() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set delayGoodExplore(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get delayBadExplore() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set delayBadExplore(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get delayExploit() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set delayExploit(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewExplore() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set viewExplore(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploitMu() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploitMu(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploreMu() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploreMu(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploitMu2() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploitMu2(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploreSelect() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploreSelect(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exploitSelect() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exploitSelect(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get replaceExploit() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set replaceExploit(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get clearBoard() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set clearBoard(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get bothInvisible() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bothInvisible(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get keyDisplay() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set keyDisplay(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get noReplaceExplore() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set noReplaceExplore(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get pointCounter() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pointCounter(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get points() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set points(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get delayTime() {
    		throw new Error("<DoubleChoice>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set delayTime(value) {
    		throw new Error("<DoubleChoice>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/FullScreen.svelte generated by Svelte v3.34.0 */

    const file$6 = "src/Instructions/FullScreen.svelte";

    function create_fragment$9(ctx) {
    	let h1;
    	let t1;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "This Experiment is Best Viewed In Fullscreen";
    			t1 = space();
    			button = element("button");
    			button.textContent = "Go Fullscreen";
    			attr_dev(h1, "class", "bigText svelte-1r8zpd");
    			set_style(h1, "text-align", "center");
    			add_location(h1, file$6, 42, 0, 1084);
    			attr_dev(button, "class", "buttonCover svelte-1r8zpd");
    			add_location(button, file$6, 43, 0, 1181);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*requestFullScreen*/ ctx[0], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function timer$5(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("FullScreen", slots, []);
    	let { nextInstruction } = $$props;

    	async function requestFullScreen() {
    		var elem = document.documentElement;
    		var requestMethod = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen || elem.msRequestFullScreen;

    		if (requestMethod) {
    			requestMethod.call(elem);
    		}

    		await timer$5(100);
    		nextInstruction(1);
    	}

    	const writable_props = ["nextInstruction"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FullScreen> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("nextInstruction" in $$props) $$invalidate(1, nextInstruction = $$props.nextInstruction);
    	};

    	$$self.$capture_state = () => ({
    		nextInstruction,
    		timer: timer$5,
    		requestFullScreen
    	});

    	$$self.$inject_state = $$props => {
    		if ("nextInstruction" in $$props) $$invalidate(1, nextInstruction = $$props.nextInstruction);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [requestFullScreen, nextInstruction];
    }

    class FullScreen extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, { nextInstruction: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FullScreen",
    			options,
    			id: create_fragment$9.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*nextInstruction*/ ctx[1] === undefined && !("nextInstruction" in props)) {
    			console.warn("<FullScreen> was created without expected prop 'nextInstruction'");
    		}
    	}

    	get nextInstruction() {
    		throw new Error("<FullScreen>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set nextInstruction(value) {
    		throw new Error("<FullScreen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/PracticeGame.svelte generated by Svelte v3.34.0 */

    const { console: console_1$4 } = globals;
    const file$5 = "src/Instructions/PracticeGame.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[31] = list[i];
    	return child_ctx;
    }

    // (281:0) {#if !breakTruth.truth}
    function create_if_block$5(ctx) {
    	let previous_key = /*trial*/ ctx[3];
    	let t;
    	let previous_key_1 = /*counter*/ ctx[0];
    	let key_block1_anchor;
    	let current;
    	let key_block0 = create_key_block_1$2(ctx);
    	let key_block1 = create_key_block$2(ctx);

    	const block = {
    		c: function create() {
    			key_block0.c();
    			t = space();
    			key_block1.c();
    			key_block1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			key_block0.m(target, anchor);
    			insert_dev(target, t, anchor);
    			key_block1.m(target, anchor);
    			insert_dev(target, key_block1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*trial*/ 8 && safe_not_equal(previous_key, previous_key = /*trial*/ ctx[3])) {
    				key_block0.d(1);
    				key_block0 = create_key_block_1$2(ctx);
    				key_block0.c();
    				key_block0.m(t.parentNode, t);
    			} else {
    				key_block0.p(ctx, dirty);
    			}

    			if (dirty[0] & /*counter*/ 1 && safe_not_equal(previous_key_1, previous_key_1 = /*counter*/ ctx[0])) {
    				group_outros();
    				transition_out(key_block1, 1, 1, noop);
    				check_outros();
    				key_block1 = create_key_block$2(ctx);
    				key_block1.c();
    				transition_in(key_block1);
    				key_block1.m(key_block1_anchor.parentNode, key_block1_anchor);
    			} else {
    				key_block1.p(ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(key_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(key_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			key_block0.d(detaching);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(key_block1_anchor);
    			key_block1.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(281:0) {#if !breakTruth.truth}",
    		ctx
    	});

    	return block;
    }

    // (282:4) {#key trial}
    function create_key_block_1$2(ctx) {
    	let h1;
    	let t_value = /*trialDescriptions*/ ctx[1][/*trial*/ ctx[3] - 1] + "";
    	let t;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			t = text(t_value);
    			attr_dev(h1, "class", "descriptionText svelte-5jds4h");
    			add_location(h1, file$5, 282, 8, 8431);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			append_dev(h1, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*trialDescriptions, trial*/ 10 && t_value !== (t_value = /*trialDescriptions*/ ctx[1][/*trial*/ ctx[3] - 1] + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block_1$2.name,
    		type: "key",
    		source: "(282:4) {#key trial}",
    		ctx
    	});

    	return block;
    }

    // (287:12) {#if counter<numTrials+1}
    function create_if_block_1$5(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block_2$5, create_else_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*i*/ ctx[31] == 0) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if_block.p(ctx, dirty);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$5.name,
    		type: "if",
    		source: "(287:12) {#if counter<numTrials+1}",
    		ctx
    	});

    	return block;
    }

    // (307:20) {:else}
    function create_else_block_1(ctx) {
    	let div3;
    	let h1;
    	let t1;
    	let div1;
    	let div0;
    	let current_block_type_index;
    	let if_block0;
    	let div1_id_value;
    	let div1_intro;
    	let div1_outro;
    	let t2;
    	let div2;
    	let t3;
    	let t4;
    	let current;
    	const if_block_creators = [create_if_block_6$2, create_else_block_2];
    	const if_blocks = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*viewExplore*/ ctx[4]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_2(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*keyView*/ ctx[10] && create_if_block_5$2(ctx);

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			h1 = element("h1");
    			h1.textContent = "New Teaching Move";
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			if_block0.c();
    			t2 = space();
    			div2 = element("div");
    			t3 = space();
    			if (if_block1) if_block1.c();
    			t4 = space();
    			attr_dev(h1, "class", "teachingMoves svelte-5jds4h");
    			add_location(h1, file$5, 308, 20, 9908);
    			set_style(div0, "position", "absolute");
    			add_location(div0, file$5, 310, 24, 10157);
    			attr_dev(div1, "class", "greyBox svelte-5jds4h");
    			attr_dev(div1, "id", div1_id_value = `box2: ${/*counter*/ ctx[0]}`);
    			add_location(div1, file$5, 309, 20, 9977);
    			attr_dev(div2, "class", "blueLight svelte-5jds4h");
    			set_style(div2, "opacity", !/*exploreSelect*/ ctx[7] ? "0" : "1");
    			add_location(div2, file$5, 318, 20, 10636);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw + min(5vw, 5vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$5, 307, 20, 9802);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h1);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div1, div0);
    			if_blocks[current_block_type_index].m(div0, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div3, t3);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t4);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div0, null);
    			}

    			if (!current || dirty[0] & /*counter*/ 1 && div1_id_value !== (div1_id_value = `box2: ${/*counter*/ ctx[0]}`)) {
    				attr_dev(div1, "id", div1_id_value);
    			}

    			if (!current || dirty[0] & /*exploreSelect*/ 128) {
    				set_style(div2, "opacity", !/*exploreSelect*/ ctx[7] ? "0" : "1");
    			}

    			if (/*keyView*/ ctx[10]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_5$2(ctx);
    					if_block1.c();
    					if_block1.m(div3, t4);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			add_render_callback(() => {
    				if (div1_outro) div1_outro.end(1);

    				if (!div1_intro) div1_intro = create_in_transition(div1, /*migrateLeftExplore*/ ctx[14], {
    					replaceExploit: /*replaceExploit*/ ctx[9]
    				});

    				div1_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			if (div1_intro) div1_intro.invalidate();

    			div1_outro = create_out_transition(div1, /*InvisibleOrDown*/ ctx[17], {
    				replaceExploit: /*replaceExploit*/ ctx[9]
    			});

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    			if (detaching && div1_outro) div1_outro.end();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(307:20) {:else}",
    		ctx
    	});

    	return block;
    }

    // (288:16) {#if i==0}
    function create_if_block_2$5(ctx) {
    	let div3;
    	let h1;
    	let t1;
    	let div0;
    	let t2;
    	let div2;
    	let div1;
    	let current_block_type_index;
    	let if_block0;
    	let div2_id_value;
    	let div2_intro;
    	let div2_outro;
    	let t3;
    	let t4;
    	let current;
    	const if_block_creators = [create_if_block_4$3, create_else_block$2];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (!/*clearBoard*/ ctx[11]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_1(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*keyView*/ ctx[10] && create_if_block_3$3(ctx);

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Current Teaching Move";
    			t1 = space();
    			div0 = element("div");
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			if_block0.c();
    			t3 = space();
    			if (if_block1) if_block1.c();
    			t4 = space();
    			attr_dev(h1, "class", "teachingMoves svelte-5jds4h");
    			add_location(h1, file$5, 289, 24, 8749);
    			attr_dev(div0, "class", "blueLight svelte-5jds4h");
    			set_style(div0, "opacity", !/*exploitSelect*/ ctx[8] ? "0" : "1");
    			add_location(div0, file$5, 290, 24, 8826);
    			set_style(div1, "top", "0px");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$5, 292, 28, 9108);
    			attr_dev(div2, "class", "greyBox svelte-5jds4h");
    			attr_dev(div2, "id", div2_id_value = `box1: ${/*counter*/ ctx[0]}`);
    			add_location(div2, file$5, 291, 24, 8927);
    			set_style(div3, "position", "absolute");
    			set_style(div3, "left", "calc(50vw - min(45vw, 45vh))");
    			set_style(div3, "top", "min(30vh,30vw)");
    			add_location(div3, file$5, 288, 20, 8635);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, h1);
    			append_dev(div3, t1);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			if_blocks[current_block_type_index].m(div1, null);
    			append_dev(div3, t3);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t4);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (!current || dirty[0] & /*exploitSelect*/ 256) {
    				set_style(div0, "opacity", !/*exploitSelect*/ ctx[8] ? "0" : "1");
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div1, null);
    			}

    			if (!current || dirty[0] & /*counter*/ 1 && div2_id_value !== (div2_id_value = `box1: ${/*counter*/ ctx[0]}`)) {
    				attr_dev(div2, "id", div2_id_value);
    			}

    			if (/*keyView*/ ctx[10]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_3$3(ctx);
    					if_block1.c();
    					if_block1.m(div3, t4);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			add_render_callback(() => {
    				if (div2_outro) div2_outro.end(1);

    				if (!div2_intro) div2_intro = create_in_transition(div2, /*migrateLeftExploit*/ ctx[15], {
    					replaceExploit: /*replaceExploit*/ ctx[9]
    				});

    				div2_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			if (div2_intro) div2_intro.invalidate();

    			div2_outro = create_out_transition(div2, /*migrateOut*/ ctx[16], {
    				replaceExploit: /*replaceExploit*/ ctx[9]
    			});

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if_blocks[current_block_type_index].d();
    			if (detaching && div2_outro) div2_outro.end();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$5.name,
    		type: "if",
    		source: "(288:16) {#if i==0}",
    		ctx
    	});

    	return block;
    }

    // (314:28) {:else}
    function create_else_block_2(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "?";
    			set_style(div, "width", "min(40vh,40vw)");
    			set_style(div, "height", "min(40vh,40vw)");
    			set_style(div, "text-align", "center");
    			set_style(div, "font-size", "min(20vh,20vw)");
    			set_style(div, "top", "min(5vh,5vw)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$5, 314, 32, 10373);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2.name,
    		type: "else",
    		source: "(314:28) {:else}",
    		ctx
    	});

    	return block;
    }

    // (312:28) {#if viewExplore}
    function create_if_block_6$2(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploreMu*/ ctx[6] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty[0] & /*exploreMu*/ 64) redgreen_changes.numberGreen = /*exploreMu*/ ctx[6];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6$2.name,
    		type: "if",
    		source: "(312:28) {#if viewExplore}",
    		ctx
    	});

    	return block;
    }

    // (320:16) {#if keyView}
    function create_if_block_5$2(ctx) {
    	let div;
    	let h2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Right Arrow";
    			attr_dev(h2, "class", "arrowKey svelte-5jds4h");
    			add_location(h2, file$5, 321, 24, 10811);
    			attr_dev(div, "class", "arrowCover svelte-5jds4h");
    			add_location(div, file$5, 320, 20, 10761);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$2.name,
    		type: "if",
    		source: "(320:16) {#if keyView}",
    		ctx
    	});

    	return block;
    }

    // (296:32) {:else}
    function create_else_block$2(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: 0, clearBoard: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(296:32) {:else}",
    		ctx
    	});

    	return block;
    }

    // (294:32) {#if !clearBoard}
    function create_if_block_4$3(ctx) {
    	let redgreen;
    	let current;

    	redgreen = new RedGreen({
    			props: { numberGreen: /*exploitMu*/ ctx[5] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(redgreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redgreen, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const redgreen_changes = {};
    			if (dirty[0] & /*exploitMu*/ 32) redgreen_changes.numberGreen = /*exploitMu*/ ctx[5];
    			redgreen.$set(redgreen_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redgreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redgreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redgreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$3.name,
    		type: "if",
    		source: "(294:32) {#if !clearBoard}",
    		ctx
    	});

    	return block;
    }

    // (301:24) {#if keyView}
    function create_if_block_3$3(ctx) {
    	let div;
    	let h2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Left Arrow";
    			attr_dev(h2, "class", "arrowKey svelte-5jds4h");
    			add_location(h2, file$5, 302, 32, 9623);
    			attr_dev(div, "class", "arrowCover svelte-5jds4h");
    			add_location(div, file$5, 301, 28, 9564);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$3.name,
    		type: "if",
    		source: "(301:24) {#if keyView}",
    		ctx
    	});

    	return block;
    }

    // (286:8) {#each range as i}
    function create_each_block(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*counter*/ ctx[0] < /*numTrials*/ ctx[12] + 1 && create_if_block_1$5(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*counter*/ ctx[0] < /*numTrials*/ ctx[12] + 1) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty[0] & /*counter*/ 1) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block_1$5(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(286:8) {#each range as i}",
    		ctx
    	});

    	return block;
    }

    // (285:4) {#key counter}
    function create_key_block$2(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*range*/ ctx[13];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*keyView, counter, replaceExploit, exploitMu, clearBoard, exploitSelect, range, exploreSelect, exploreMu, viewExplore, numTrials*/ 16369) {
    				each_value = /*range*/ ctx[13];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block$2.name,
    		type: "key",
    		source: "(285:4) {#key counter}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$8(ctx) {
    	let if_block_anchor;
    	let current;
    	let mounted;
    	let dispose;
    	let if_block = !/*breakTruth*/ ctx[2].truth && create_if_block$5(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(window, "keydown", /*handleKeydown*/ ctx[18], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (!/*breakTruth*/ ctx[2].truth) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty[0] & /*breakTruth*/ 4) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$5(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function timer$4(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    async function Send_Data_To_Exius$2(params, templateKey, writeKey) {
    	// [{endpoint:Horizon_CSV,data:data,fname:fname}]
    	try {
    		var fd = new FormData();

    		for (const fileInfo of params) {
    			let URL = new Blob([fileInfo.data], { type: "text/csv;charset=utf-8;" });
    			fd.append(fileInfo.endpoint, URL, fileInfo.fname);
    		}

    		let res = await fetch("https://exius.nrdlab.org/Upload", {
    			headers: {
    				authorization: `templateKey:${templateKey};writeKey:${writeKey}`
    			},
    			method: "POST",
    			body: fd
    		});

    		return await res.json();
    	} catch(e) {
    		throw e;
    	}
    }

    function box_mueller() {
    	// all credit to stack exhange
    	var u = 0, v = 0;

    	while (u === 0) u = Math.random();
    	while (v === 0) v = Math.random();
    	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }

    function sample_normal(mu, sd) {
    	return sd * box_mueller() + mu;
    }

    function random_int() {
    	return Math.floor(20 * Math.random());
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PracticeGame", slots, []);
    	let { counter = 0 } = $$props;
    	const viewNumber = 2;
    	let { gameString = "" } = $$props;
    	let trialSd = 3;
    	let numTrials = 4;
    	let trial = 1;
    	let range = [...Array(viewNumber).keys()];
    	let trialStartTime = Date.now();
    	let viewExplore = false;
    	let exploitMu = 15;
    	let exploreMu = random_int();
    	let exploreSelect = false;
    	let exploitSelect = false;
    	let replaceExploit = { truth: false };
    	let keyView = true;
    	let clearBoard = false;
    	let currentUnderstanding = exploitMu;
    	let lastGreenBar = 0;
    	let lastRedBar = 0;
    	let greenBar = 0;
    	let redBar = 0;
    	let { trialDescriptions = [] } = $$props;
    	let { toNext } = $$props;
    	let { bothInvisible = true } = $$props;
    	let { breakTruth = false } = $$props;
    	console.log(gameString);

    	function migrateLeftExplore(node, { delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`migrateLeftExplore:${true}`);

    		return {
    			delay,
    			duration,
    			css: (t, u) => `transform: translateX(calc(${100 * u}vw)) `
    		};
    	}

    	function migrateLeftExploit(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`migrateLeftExploit:${replaceExploit}`);

    		if (replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateX(min(${50 * u}vw,${50 * u}vh)) `
    			};
    		} else {
    			return {};
    		}
    	}

    	function migrateOut(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`migrateOut:${replaceExploit}`);

    		if (replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateX(calc(${-100 * u}vw)) `
    			};
    		} else {
    			return {};
    		}
    	}

    	function InvisibleOrDown(node, { replaceExploit, delay = 0, duration = 500 }) {
    		if (bothInvisible) {
    			return { delay: 0, duration: 0 };
    		}

    		console.log(`invisibleOrDown:${replaceExploit}`);

    		if (!replaceExploit.truth) {
    			return {
    				delay,
    				duration,
    				css: (t, u) => `transform: translateY(calc(${100 * u}vh)) `
    			};
    		} else {
    			return {
    				css: () => `visibility: hidden;display: none;`
    			};
    		}
    	}

    	async function handleKeydown(event) {
    		console.log(event.key);

    		if (keyView == false) {
    			return;
    		}

    		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    			({
    				trial: trial.toString(),
    				previousExploit: exploitMu,
    				keyPressTime: Date.now(),
    				trialStartTime
    			});

    			$$invalidate(19, bothInvisible = false);

    			if (event.key == "ArrowLeft") {
    				greenBar += lastGreenBar;
    				redBar += lastRedBar;
    				lastGreenBar = 0;
    				lastRedBar = 0;
    				$$invalidate(10, keyView = false);
    				let newDist = sample_normal_to_twenty();
    				$$invalidate(8, exploitSelect = true);
    				await timer$4(500);
    				$$invalidate(8, exploitSelect = false);
    				$$invalidate(11, clearBoard = true);
    				await timer$4(1000);
    				$$invalidate(5, exploitMu = newDist);
    				lastGreenBar = newDist;
    				lastRedBar = 20 - newDist;
    				$$invalidate(11, clearBoard = false);
    				$$invalidate(10, keyView = true);
    				trialStartTime = Date.now();
    				currentUnderstanding = newDist;
    				$$invalidate(3, trial += 1);
    				console.log("done");
    			}

    			if (event.key == "ArrowRight") {
    				$$invalidate(4, viewExplore = true);
    				let newDist = random_int();
    				greenBar += lastGreenBar;
    				redBar += lastRedBar;
    				lastGreenBar = 0;
    				lastRedBar = 0;

    				if (newDist > exploitMu) {
    					console.log("greater than");
    					$$invalidate(10, keyView = false);
    					$$invalidate(6, exploreMu = newDist);
    					$$invalidate(7, exploreSelect = true);
    					await timer$4(500);
    					$$invalidate(7, exploreSelect = false);
    					await timer$4(500);
    					$$invalidate(5, exploitMu = newDist);
    					$$invalidate(4, viewExplore = false);
    					$$invalidate(9, replaceExploit.truth = true, replaceExploit);
    					$$invalidate(0, counter += 1);
    					await timer$4(500);
    					lastGreenBar = newDist;
    					lastRedBar = 20 - newDist;
    					$$invalidate(10, keyView = true);
    					trialStartTime = Date.now();
    					currentUnderstanding = newDist;
    					$$invalidate(3, trial += 1);
    				} else {
    					console.log("less than");
    					$$invalidate(10, keyView = false);
    					$$invalidate(6, exploreMu = newDist);
    					$$invalidate(7, exploreSelect = true);
    					await timer$4(500);
    					$$invalidate(7, exploreSelect = false);
    					await timer$4(500);
    					$$invalidate(4, viewExplore = false);
    					$$invalidate(9, replaceExploit.truth = false, replaceExploit);
    					$$invalidate(0, counter += 1);
    					await timer$4(500);
    					lastGreenBar = newDist;
    					lastRedBar = 20 - newDist;
    					$$invalidate(10, keyView = true);
    					trialStartTime = Date.now();
    					currentUnderstanding = newDist;
    					$$invalidate(3, trial += 1);
    				}
    			}

    			$$invalidate(19, bothInvisible = false);

    			if (trial === numTrials + 1) {
    				$$invalidate(19, bothInvisible = true);
    				await timer$4(300);
    				console.log(greenBar);
    				console.log(lastGreenBar);
    				toNext(gameString, greenBar + lastGreenBar);
    			}
    		}
    	}

    	function sample_normal_to_twenty() {
    		let newNorm = Math.floor(sample_normal(exploitMu, trialSd));
    		newNorm = Math.min(newNorm, 20);
    		newNorm = Math.max(newNorm, 0);
    		return newNorm;
    	}

    	const writable_props = [
    		"counter",
    		"gameString",
    		"trialDescriptions",
    		"toNext",
    		"bothInvisible",
    		"breakTruth"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$4.warn(`<PracticeGame> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("counter" in $$props) $$invalidate(0, counter = $$props.counter);
    		if ("gameString" in $$props) $$invalidate(21, gameString = $$props.gameString);
    		if ("trialDescriptions" in $$props) $$invalidate(1, trialDescriptions = $$props.trialDescriptions);
    		if ("toNext" in $$props) $$invalidate(22, toNext = $$props.toNext);
    		if ("bothInvisible" in $$props) $$invalidate(19, bothInvisible = $$props.bothInvisible);
    		if ("breakTruth" in $$props) $$invalidate(2, breakTruth = $$props.breakTruth);
    	};

    	$$self.$capture_state = () => ({
    		RedGreen,
    		counter,
    		viewNumber,
    		gameString,
    		trialSd,
    		numTrials,
    		trial,
    		range,
    		trialStartTime,
    		viewExplore,
    		exploitMu,
    		exploreMu,
    		exploreSelect,
    		exploitSelect,
    		replaceExploit,
    		keyView,
    		clearBoard,
    		currentUnderstanding,
    		lastGreenBar,
    		lastRedBar,
    		greenBar,
    		redBar,
    		trialDescriptions,
    		toNext,
    		bothInvisible,
    		breakTruth,
    		migrateLeftExplore,
    		migrateLeftExploit,
    		migrateOut,
    		InvisibleOrDown,
    		timer: timer$4,
    		Send_Data_To_Exius: Send_Data_To_Exius$2,
    		handleKeydown,
    		box_mueller,
    		sample_normal,
    		sample_normal_to_twenty,
    		random_int
    	});

    	$$self.$inject_state = $$props => {
    		if ("counter" in $$props) $$invalidate(0, counter = $$props.counter);
    		if ("gameString" in $$props) $$invalidate(21, gameString = $$props.gameString);
    		if ("trialSd" in $$props) trialSd = $$props.trialSd;
    		if ("numTrials" in $$props) $$invalidate(12, numTrials = $$props.numTrials);
    		if ("trial" in $$props) $$invalidate(3, trial = $$props.trial);
    		if ("range" in $$props) $$invalidate(13, range = $$props.range);
    		if ("trialStartTime" in $$props) trialStartTime = $$props.trialStartTime;
    		if ("viewExplore" in $$props) $$invalidate(4, viewExplore = $$props.viewExplore);
    		if ("exploitMu" in $$props) $$invalidate(5, exploitMu = $$props.exploitMu);
    		if ("exploreMu" in $$props) $$invalidate(6, exploreMu = $$props.exploreMu);
    		if ("exploreSelect" in $$props) $$invalidate(7, exploreSelect = $$props.exploreSelect);
    		if ("exploitSelect" in $$props) $$invalidate(8, exploitSelect = $$props.exploitSelect);
    		if ("replaceExploit" in $$props) $$invalidate(9, replaceExploit = $$props.replaceExploit);
    		if ("keyView" in $$props) $$invalidate(10, keyView = $$props.keyView);
    		if ("clearBoard" in $$props) $$invalidate(11, clearBoard = $$props.clearBoard);
    		if ("currentUnderstanding" in $$props) currentUnderstanding = $$props.currentUnderstanding;
    		if ("lastGreenBar" in $$props) lastGreenBar = $$props.lastGreenBar;
    		if ("lastRedBar" in $$props) lastRedBar = $$props.lastRedBar;
    		if ("greenBar" in $$props) greenBar = $$props.greenBar;
    		if ("redBar" in $$props) redBar = $$props.redBar;
    		if ("trialDescriptions" in $$props) $$invalidate(1, trialDescriptions = $$props.trialDescriptions);
    		if ("toNext" in $$props) $$invalidate(22, toNext = $$props.toNext);
    		if ("bothInvisible" in $$props) $$invalidate(19, bothInvisible = $$props.bothInvisible);
    		if ("breakTruth" in $$props) $$invalidate(2, breakTruth = $$props.breakTruth);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		counter,
    		trialDescriptions,
    		breakTruth,
    		trial,
    		viewExplore,
    		exploitMu,
    		exploreMu,
    		exploreSelect,
    		exploitSelect,
    		replaceExploit,
    		keyView,
    		clearBoard,
    		numTrials,
    		range,
    		migrateLeftExplore,
    		migrateLeftExploit,
    		migrateOut,
    		InvisibleOrDown,
    		handleKeydown,
    		bothInvisible,
    		viewNumber,
    		gameString,
    		toNext
    	];
    }

    class PracticeGame extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(
    			this,
    			options,
    			instance$8,
    			create_fragment$8,
    			safe_not_equal,
    			{
    				counter: 0,
    				viewNumber: 20,
    				gameString: 21,
    				trialDescriptions: 1,
    				toNext: 22,
    				bothInvisible: 19,
    				breakTruth: 2
    			},
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PracticeGame",
    			options,
    			id: create_fragment$8.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*toNext*/ ctx[22] === undefined && !("toNext" in props)) {
    			console_1$4.warn("<PracticeGame> was created without expected prop 'toNext'");
    		}
    	}

    	get counter() {
    		throw new Error("<PracticeGame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set counter(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewNumber() {
    		return this.$$.ctx[20];
    	}

    	set viewNumber(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get gameString() {
    		throw new Error("<PracticeGame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set gameString(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get trialDescriptions() {
    		throw new Error("<PracticeGame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set trialDescriptions(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get toNext() {
    		throw new Error("<PracticeGame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set toNext(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get bothInvisible() {
    		throw new Error("<PracticeGame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bothInvisible(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get breakTruth() {
    		throw new Error("<PracticeGame>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set breakTruth(value) {
    		throw new Error("<PracticeGame>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/NavigationArrows.svelte generated by Svelte v3.34.0 */

    const { console: console_1$3 } = globals;

    function create_fragment$7(ctx) {
    	let mounted;
    	let dispose;

    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (!mounted) {
    				dispose = listen_dev(window, "keydown", /*handleKeydown*/ ctx[0], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function timer$3(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("NavigationArrows", slots, []);
    	let { breakTruth = { truth: false } } = $$props;
    	let { nextInstruction = null } = $$props;
    	let { nextArrow } = $$props;

    	async function handleKeydown(event) {
    		if (!breakTruth.truth) {
    			if (event.key === nextArrow) {
    				console.log("hi");
    				nextInstruction();
    			}
    		}
    	}

    	const writable_props = ["breakTruth", "nextInstruction", "nextArrow"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$3.warn(`<NavigationArrows> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("breakTruth" in $$props) $$invalidate(1, breakTruth = $$props.breakTruth);
    		if ("nextInstruction" in $$props) $$invalidate(2, nextInstruction = $$props.nextInstruction);
    		if ("nextArrow" in $$props) $$invalidate(3, nextArrow = $$props.nextArrow);
    	};

    	$$self.$capture_state = () => ({
    		breakTruth,
    		nextInstruction,
    		nextArrow,
    		timer: timer$3,
    		handleKeydown
    	});

    	$$self.$inject_state = $$props => {
    		if ("breakTruth" in $$props) $$invalidate(1, breakTruth = $$props.breakTruth);
    		if ("nextInstruction" in $$props) $$invalidate(2, nextInstruction = $$props.nextInstruction);
    		if ("nextArrow" in $$props) $$invalidate(3, nextArrow = $$props.nextArrow);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [handleKeydown, breakTruth, nextInstruction, nextArrow];
    }

    class NavigationArrows extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
    			breakTruth: 1,
    			nextInstruction: 2,
    			nextArrow: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "NavigationArrows",
    			options,
    			id: create_fragment$7.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*nextArrow*/ ctx[3] === undefined && !("nextArrow" in props)) {
    			console_1$3.warn("<NavigationArrows> was created without expected prop 'nextArrow'");
    		}
    	}

    	get breakTruth() {
    		throw new Error("<NavigationArrows>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set breakTruth(value) {
    		throw new Error("<NavigationArrows>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get nextInstruction() {
    		throw new Error("<NavigationArrows>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set nextInstruction(value) {
    		throw new Error("<NavigationArrows>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get nextArrow() {
    		throw new Error("<NavigationArrows>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set nextArrow(value) {
    		throw new Error("<NavigationArrows>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/ProgressBar.svelte generated by Svelte v3.34.0 */

    const file$4 = "src/Instructions/ProgressBar.svelte";

    // (80:8) {#key lastGreenBar}
    function create_key_block_3(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "progressLeft svelte-1mnp72f");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*lastGreenBar*/ ctx[0] + ")");
    			set_style(div, "left", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*greenBar*/ ctx[2] + ")");
    			set_style(div, "position", "absolute");
    			add_location(div, file$4, 80, 12, 2245);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*numTrials, lastGreenBar*/ 17) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*lastGreenBar*/ ctx[0] + ")");
    			}

    			if (dirty & /*numTrials, greenBar*/ 20) {
    				set_style(div, "left", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*greenBar*/ ctx[2] + ")");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block_3.name,
    		type: "key",
    		source: "(80:8) {#key lastGreenBar}",
    		ctx
    	});

    	return block;
    }

    // (78:4) {#key greenBar}
    function create_key_block_2$1(ctx) {
    	let div;
    	let t;
    	let previous_key = /*lastGreenBar*/ ctx[0];
    	let key_block_anchor;
    	let key_block = create_key_block_3(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(div, "class", "progressGreen svelte-1mnp72f");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*greenBar*/ ctx[2] + ")");
    			set_style(div, "position", "absolute");
    			add_location(div, file$4, 78, 8, 2085);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			insert_dev(target, t, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*numTrials, greenBar*/ 20) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*greenBar*/ ctx[2] + ")");
    			}

    			if (dirty & /*lastGreenBar*/ 1 && safe_not_equal(previous_key, previous_key = /*lastGreenBar*/ ctx[0])) {
    				key_block.d(1);
    				key_block = create_key_block_3(ctx);
    				key_block.c();
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block_2$1.name,
    		type: "key",
    		source: "(78:4) {#key greenBar}",
    		ctx
    	});

    	return block;
    }

    // (86:8) {#key lastRedBar}
    function create_key_block_1$1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "progressRight svelte-1mnp72f");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*lastRedBar*/ ctx[1] + ")");
    			set_style(div, "left", "calc(min(60vh,60vw) - ((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*redBar*/ ctx[3] + ") + 1px)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$4, 86, 12, 2656);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*numTrials, lastRedBar*/ 18) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*lastRedBar*/ ctx[1] + ")");
    			}

    			if (dirty & /*numTrials, redBar*/ 24) {
    				set_style(div, "left", "calc(min(60vh,60vw) - ((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*redBar*/ ctx[3] + ") + 1px)");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block_1$1.name,
    		type: "key",
    		source: "(86:8) {#key lastRedBar}",
    		ctx
    	});

    	return block;
    }

    // (84:4) {#key redBar}
    function create_key_block$1(ctx) {
    	let div;
    	let t;
    	let previous_key = /*lastRedBar*/ ctx[1];
    	let key_block_anchor;
    	let key_block = create_key_block_1$1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(div, "class", "progressRed svelte-1mnp72f");
    			set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*redBar*/ ctx[3] + ")");
    			set_style(div, "left", "min(60vh,60vw)");
    			set_style(div, "position", "absolute");
    			add_location(div, file$4, 84, 8, 2481);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			insert_dev(target, t, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*numTrials, redBar*/ 24) {
    				set_style(div, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[4] * 20 + ") * " + /*redBar*/ ctx[3] + ")");
    			}

    			if (dirty & /*lastRedBar*/ 2 && safe_not_equal(previous_key, previous_key = /*lastRedBar*/ ctx[1])) {
    				key_block.d(1);
    				key_block = create_key_block_1$1(ctx);
    				key_block.c();
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block$1.name,
    		type: "key",
    		source: "(84:4) {#key redBar}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let h1;
    	let t1;
    	let div1;
    	let div0;
    	let t2;
    	let previous_key = /*greenBar*/ ctx[2];
    	let t3;
    	let previous_key_1 = /*redBar*/ ctx[3];
    	let key_block0 = create_key_block_2$1(ctx);
    	let key_block1 = create_key_block$1(ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Total Student Understanding";
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			t2 = space();
    			key_block0.c();
    			t3 = space();
    			key_block1.c();
    			attr_dev(h1, "class", "classUnderstanding svelte-1mnp72f");
    			add_location(h1, file$4, 74, 0, 1839);
    			attr_dev(div0, "class", "progressBar svelte-1mnp72f");
    			set_style(div0, "left", "max(-.5vw,-.5vh)");
    			add_location(div0, file$4, 76, 4, 1995);
    			set_style(div1, "left", "calc(50vw - min(30vh,30vw))");
    			set_style(div1, "top", "min(50vh,50vw)");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$4, 75, 0, 1903);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div1, t2);
    			key_block0.m(div1, null);
    			append_dev(div1, t3);
    			key_block1.m(div1, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*greenBar*/ 4 && safe_not_equal(previous_key, previous_key = /*greenBar*/ ctx[2])) {
    				key_block0.d(1);
    				key_block0 = create_key_block_2$1(ctx);
    				key_block0.c();
    				key_block0.m(div1, t3);
    			} else {
    				key_block0.p(ctx, dirty);
    			}

    			if (dirty & /*redBar*/ 8 && safe_not_equal(previous_key_1, previous_key_1 = /*redBar*/ ctx[3])) {
    				key_block1.d(1);
    				key_block1 = create_key_block$1(ctx);
    				key_block1.c();
    				key_block1.m(div1, null);
    			} else {
    				key_block1.p(ctx, dirty);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			key_block0.d(detaching);
    			key_block1.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ProgressBar", slots, []);
    	let { lastGreenBar = 0 } = $$props;
    	let { lastRedBar = 0 } = $$props;
    	let { greenBar = 0 } = $$props;
    	let { redBar = 0 } = $$props;
    	let { numTrials = 30 } = $$props;
    	const writable_props = ["lastGreenBar", "lastRedBar", "greenBar", "redBar", "numTrials"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ProgressBar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("lastGreenBar" in $$props) $$invalidate(0, lastGreenBar = $$props.lastGreenBar);
    		if ("lastRedBar" in $$props) $$invalidate(1, lastRedBar = $$props.lastRedBar);
    		if ("greenBar" in $$props) $$invalidate(2, greenBar = $$props.greenBar);
    		if ("redBar" in $$props) $$invalidate(3, redBar = $$props.redBar);
    		if ("numTrials" in $$props) $$invalidate(4, numTrials = $$props.numTrials);
    	};

    	$$self.$capture_state = () => ({
    		lastGreenBar,
    		lastRedBar,
    		greenBar,
    		redBar,
    		numTrials
    	});

    	$$self.$inject_state = $$props => {
    		if ("lastGreenBar" in $$props) $$invalidate(0, lastGreenBar = $$props.lastGreenBar);
    		if ("lastRedBar" in $$props) $$invalidate(1, lastRedBar = $$props.lastRedBar);
    		if ("greenBar" in $$props) $$invalidate(2, greenBar = $$props.greenBar);
    		if ("redBar" in $$props) $$invalidate(3, redBar = $$props.redBar);
    		if ("numTrials" in $$props) $$invalidate(4, numTrials = $$props.numTrials);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [lastGreenBar, lastRedBar, greenBar, redBar, numTrials];
    }

    class ProgressBar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
    			lastGreenBar: 0,
    			lastRedBar: 1,
    			greenBar: 2,
    			redBar: 3,
    			numTrials: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ProgressBar",
    			options,
    			id: create_fragment$6.name
    		});
    	}

    	get lastGreenBar() {
    		throw new Error("<ProgressBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set lastGreenBar(value) {
    		throw new Error("<ProgressBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get lastRedBar() {
    		throw new Error("<ProgressBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set lastRedBar(value) {
    		throw new Error("<ProgressBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get greenBar() {
    		throw new Error("<ProgressBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greenBar(value) {
    		throw new Error("<ProgressBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get redBar() {
    		throw new Error("<ProgressBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set redBar(value) {
    		throw new Error("<ProgressBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get numTrials() {
    		throw new Error("<ProgressBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set numTrials(value) {
    		throw new Error("<ProgressBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/MonthProgress.svelte generated by Svelte v3.34.0 */

    const file$3 = "src/Instructions/MonthProgress.svelte";

    // (90:4) {#if greenScore>greenScoreLast}
    function create_if_block_2$4(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Great Job! You improved upon your classroom's understanding from the last month! Let's try and do even better in the next month!";
    			add_location(h1, file$3, 90, 8, 3172);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$4.name,
    		type: "if",
    		source: "(90:4) {#if greenScore>greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (93:4) {#if greenScore<greenScoreLast}
    function create_if_block_1$4(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Oh no! It looks like your classroom's understanding dropped from the last month, let's try and beat this score next time!";
    			add_location(h1, file$3, 93, 8, 3364);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$4.name,
    		type: "if",
    		source: "(93:4) {#if greenScore<greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (96:4) {#if greenScore == greenScoreLast}
    function create_if_block$4(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Looks like you tied your last score! Let's try and beat that score in the next month!";
    			add_location(h1, file$3, 96, 12, 3556);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(96:4) {#if greenScore == greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let h10;
    	let t1;
    	let div3;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let h11;
    	let t6;
    	let div7;
    	let div4;
    	let t7;
    	let div5;
    	let t8;
    	let div6;
    	let t9;
    	let div8;
    	let h12;
    	let t10;
    	let t11_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t11;
    	let t12;
    	let t13_value = Math.round(100 * /*greenScoreLast*/ ctx[2] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t13;
    	let t14;
    	let t15;
    	let div10;
    	let div9;
    	let t16;
    	let t17;
    	let if_block0 = /*greenScore*/ ctx[0] > /*greenScoreLast*/ ctx[2] && create_if_block_2$4(ctx);
    	let if_block1 = /*greenScore*/ ctx[0] < /*greenScoreLast*/ ctx[2] && create_if_block_1$4(ctx);
    	let if_block2 = /*greenScore*/ ctx[0] == /*greenScoreLast*/ ctx[2] && create_if_block$4(ctx);

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			h10.textContent = "Total Student Understanding This Month";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			t2 = space();
    			div1 = element("div");
    			t3 = space();
    			div2 = element("div");
    			t4 = space();
    			h11 = element("h1");
    			h11.textContent = "Total Student Understanding Last Month";
    			t6 = space();
    			div7 = element("div");
    			div4 = element("div");
    			t7 = space();
    			div5 = element("div");
    			t8 = space();
    			div6 = element("div");
    			t9 = space();
    			div8 = element("div");
    			h12 = element("h1");
    			t10 = text("Your classroom's understanding at the end of this month was ");
    			t11 = text(t11_value);
    			t12 = text("%, and\n    your classroom's understanding last month was ");
    			t13 = text(t13_value);
    			t14 = text("%");
    			t15 = space();
    			div10 = element("div");
    			div9 = element("div");
    			if (if_block0) if_block0.c();
    			t16 = space();
    			if (if_block1) if_block1.c();
    			t17 = space();
    			if (if_block2) if_block2.c();
    			attr_dev(h10, "class", "classUnderstanding svelte-1f5voqz");
    			add_location(h10, file$3, 70, 4, 1736);
    			attr_dev(div0, "class", "progressBar svelte-1f5voqz");
    			set_style(div0, "left", "max(-.5vw,-.5vh)");
    			add_location(div0, file$3, 72, 8, 1911);
    			attr_dev(div1, "class", "progressGreen svelte-1f5voqz");
    			set_style(div1, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScore*/ ctx[0] + ")");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file$3, 73, 8, 1981);
    			attr_dev(div2, "class", "progressRed svelte-1f5voqz");
    			set_style(div2, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScore*/ ctx[3] + ")");
    			set_style(div2, "left", "min(60vh,60vw)");
    			set_style(div2, "position", "absolute");
    			add_location(div2, file$3, 74, 8, 2111);
    			set_style(div3, "left", "calc(50vw - min(30vh,30vw))");
    			set_style(div3, "top", "min(25vh,25vw)");
    			set_style(div3, "position", "absolute");
    			add_location(div3, file$3, 71, 4, 1815);
    			attr_dev(h11, "class", "classUnderstanding svelte-1f5voqz");
    			set_style(h11, "top", "min(33vh,33vw)");
    			add_location(h11, file$3, 76, 4, 2265);
    			attr_dev(div4, "class", "progressBar svelte-1f5voqz");
    			set_style(div4, "left", "max(-.5vw,-.5vh)");
    			add_location(div4, file$3, 78, 8, 2467);
    			attr_dev(div5, "class", "progressGreen svelte-1f5voqz");
    			set_style(div5, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScoreLast*/ ctx[2] + ")");
    			set_style(div5, "position", "absolute");
    			add_location(div5, file$3, 79, 8, 2537);
    			attr_dev(div6, "class", "progressRed svelte-1f5voqz");
    			set_style(div6, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScoreLast*/ ctx[4] + ")");
    			set_style(div6, "left", "min(60vh,60vw)");
    			set_style(div6, "position", "absolute");
    			add_location(div6, file$3, 80, 8, 2671);
    			set_style(div7, "left", "calc(50vw - min(30vh,30vw))");
    			set_style(div7, "top", "min(38vh,38vw)");
    			set_style(div7, "position", "absolute");
    			add_location(div7, file$3, 77, 4, 2371);
    			add_location(h12, file$3, 83, 4, 2855);
    			attr_dev(div8, "class", "description svelte-1f5voqz");
    			add_location(div8, file$3, 82, 0, 2825);
    			attr_dev(div9, "class", "performanceBox svelte-1f5voqz");
    			add_location(div9, file$3, 88, 4, 3098);
    			add_location(div10, file$3, 87, 0, 3087);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h11, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div4);
    			append_dev(div7, t7);
    			append_dev(div7, div5);
    			append_dev(div7, t8);
    			append_dev(div7, div6);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div8, anchor);
    			append_dev(div8, h12);
    			append_dev(h12, t10);
    			append_dev(h12, t11);
    			append_dev(h12, t12);
    			append_dev(h12, t13);
    			append_dev(h12, t14);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, div10, anchor);
    			append_dev(div10, div9);
    			if (if_block0) if_block0.m(div9, null);
    			append_dev(div9, t16);
    			if (if_block1) if_block1.m(div9, null);
    			append_dev(div9, t17);
    			if (if_block2) if_block2.m(div9, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*numTrials, greenScore*/ 3) {
    				set_style(div1, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScore*/ ctx[0] + ")");
    			}

    			if (dirty & /*numTrials*/ 2) {
    				set_style(div2, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScore*/ ctx[3] + ")");
    			}

    			if (dirty & /*numTrials, greenScoreLast*/ 6) {
    				set_style(div5, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScoreLast*/ ctx[2] + ")");
    			}

    			if (dirty & /*numTrials*/ 2) {
    				set_style(div6, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScoreLast*/ ctx[4] + ")");
    			}

    			if (dirty & /*greenScore, numTrials*/ 3 && t11_value !== (t11_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t11, t11_value);
    			if (dirty & /*greenScoreLast, numTrials*/ 6 && t13_value !== (t13_value = Math.round(100 * /*greenScoreLast*/ ctx[2] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t13, t13_value);

    			if (/*greenScore*/ ctx[0] > /*greenScoreLast*/ ctx[2]) {
    				if (if_block0) ; else {
    					if_block0 = create_if_block_2$4(ctx);
    					if_block0.c();
    					if_block0.m(div9, t16);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*greenScore*/ ctx[0] < /*greenScoreLast*/ ctx[2]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_1$4(ctx);
    					if_block1.c();
    					if_block1.m(div9, t17);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*greenScore*/ ctx[0] == /*greenScoreLast*/ ctx[2]) {
    				if (if_block2) ; else {
    					if_block2 = create_if_block$4(ctx);
    					if_block2.c();
    					if_block2.m(div9, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h11);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(div7);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div8);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(div10);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function timer$2(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("MonthProgress", slots, []);
    	let { greenScore = 10 } = $$props;
    	let { numTrials = 30 } = $$props;
    	let { greenScoreLast = 10 } = $$props;
    	const redScore = numTrials * 20 - greenScore;
    	const redScoreLast = numTrials * 20 - greenScoreLast;
    	let transitionOffBlank = false;

    	async function blankToOn() {
    		await timer$2(500);
    		transitionOffBlank = true;
    	}

    	blankToOn();
    	const writable_props = ["greenScore", "numTrials", "greenScoreLast"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MonthProgress> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("greenScore" in $$props) $$invalidate(0, greenScore = $$props.greenScore);
    		if ("numTrials" in $$props) $$invalidate(1, numTrials = $$props.numTrials);
    		if ("greenScoreLast" in $$props) $$invalidate(2, greenScoreLast = $$props.greenScoreLast);
    	};

    	$$self.$capture_state = () => ({
    		greenScore,
    		numTrials,
    		greenScoreLast,
    		redScore,
    		redScoreLast,
    		transitionOffBlank,
    		timer: timer$2,
    		blankToOn
    	});

    	$$self.$inject_state = $$props => {
    		if ("greenScore" in $$props) $$invalidate(0, greenScore = $$props.greenScore);
    		if ("numTrials" in $$props) $$invalidate(1, numTrials = $$props.numTrials);
    		if ("greenScoreLast" in $$props) $$invalidate(2, greenScoreLast = $$props.greenScoreLast);
    		if ("transitionOffBlank" in $$props) transitionOffBlank = $$props.transitionOffBlank;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [greenScore, numTrials, greenScoreLast, redScore, redScoreLast];
    }

    class MonthProgress extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
    			greenScore: 0,
    			numTrials: 1,
    			greenScoreLast: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "MonthProgress",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get greenScore() {
    		throw new Error("<MonthProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greenScore(value) {
    		throw new Error("<MonthProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get numTrials() {
    		throw new Error("<MonthProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set numTrials(value) {
    		throw new Error("<MonthProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get greenScoreLast() {
    		throw new Error("<MonthProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greenScoreLast(value) {
    		throw new Error("<MonthProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Instructions/Instructions.svelte generated by Svelte v3.34.0 */

    const { console: console_1$2 } = globals;
    const file$2 = "src/Instructions/Instructions.svelte";

    // (161:0) {#if i===0}
    function create_if_block_34(ctx) {
    	let fullscreen;
    	let current;

    	fullscreen = new FullScreen({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(fullscreen.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(fullscreen, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(fullscreen.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(fullscreen.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(fullscreen, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_34.name,
    		type: "if",
    		source: "(161:0) {#if i===0}",
    		ctx
    	});

    	return block;
    }

    // (164:0) {#if i===1}
    function create_if_block_33(ctx) {
    	let h10;
    	let t0;
    	let br;
    	let t1;
    	let t2;
    	let h11;
    	let t4;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			t0 = text("The ");
    			br = element("br");
    			t1 = text("Teaching Task");
    			t2 = space();
    			h11 = element("h1");
    			h11.textContent = "Click Next to Start the Task";
    			t4 = space();
    			create_component(navigationbuttons.$$.fragment);
    			add_location(br, file$2, 164, 30, 4955);
    			attr_dev(h10, "class", "titleText svelte-1d7ghio");
    			add_location(h10, file$2, 164, 4, 4929);
    			set_style(h11, "top", "70vh");
    			set_style(h11, "width", "min(60vw,60vh)");
    			set_style(h11, "left", "calc(50vw - min(20vw,20vh))");
    			set_style(h11, "position", "absolute");
    			set_style(h11, "font-size", "min(3vh,3vw)");
    			add_location(h11, file$2, 165, 4, 4983);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			append_dev(h10, t0);
    			append_dev(h10, br);
    			append_dev(h10, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h11, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h11);
    			if (detaching) detach_dev(t4);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_33.name,
    		type: "if",
    		source: "(164:0) {#if i===1}",
    		ctx
    	});

    	return block;
    }

    // (169:0) {#if i ===2}
    function create_if_block_32(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "For this experiment, you will play a teaching task.  Please read through these instructions carefully.\n         Remember that this is an important part of our study. Please give this task adequate time and effort, and try to get the best results.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 169, 4, 5217);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_32.name,
    		type: "if",
    		source: "(169:0) {#if i ===2}",
    		ctx
    	});

    	return block;
    }

    // (176:0) {#if i ===3}
    function create_if_block_31(ctx) {
    	let h1;
    	let t1;
    	let textarea;
    	let t2;
    	let navigationbuttons;
    	let current;
    	let mounted;
    	let dispose;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "To start off, we want you to take a moment to think about and describe your current math warm up in 1 or 2 sentences.";
    			t1 = space();
    			textarea = element("textarea");
    			t2 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 176, 0, 5641);
    			attr_dev(textarea, "rows", "4");
    			attr_dev(textarea, "wrap", "soft");
    			attr_dev(textarea, "placeholder", "Input description here...");
    			attr_dev(textarea, "class", "textBox svelte-1d7ghio");
    			add_location(textarea, file$2, 179, 4, 5806);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, textarea, anchor);
    			set_input_value(textarea, /*warmUp*/ ctx[5]);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[13]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*warmUp*/ 32) {
    				set_input_value(textarea, /*warmUp*/ ctx[5]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(textarea);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationbuttons, detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_31.name,
    		type: "if",
    		source: "(176:0) {#if i ===3}",
    		ctx
    	});

    	return block;
    }

    // (183:0) {#if i ===4}
    function create_if_block_30(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Now, we want you to imagine that your math coach or colleague has suggested a new approach for your math warm up.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 183, 0, 6044);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_30.name,
    		type: "if",
    		source: "(183:0) {#if i ===4}",
    		ctx
    	});

    	return block;
    }

    // (189:0) {#if i ===5}
    function create_if_block_29(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "In this experiment  - the teaching task - we would like you to choose between two teaching approaches for your math warm up, (1) your current math warm up that seems to be working well or (2) the “new” suggested approach for your math warm up.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 189, 0, 6314);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_29.name,
    		type: "if",
    		source: "(189:0) {#if i ===5}",
    		ctx
    	});

    	return block;
    }

    // (194:0) {#if i ===6}
    function create_if_block_28(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "For the purposes of this task, we will keep the teaching approaches generic (“current” approach or “new” approach by the coach) but we want you to imagine what those approaches might be (i.e. starting with a group problem, a quick review worksheet, calendar time, or a math discussion).";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 194, 4, 6721);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_28.name,
    		type: "if",
    		source: "(194:0) {#if i ===6}",
    		ctx
    	});

    	return block;
    }

    // (200:0) {#if i ===7}
    function create_if_block_27(ctx) {
    	let h10;
    	let t1;
    	let div;
    	let t2;
    	let h11;
    	let t4;
    	let img;
    	let img_src_value;
    	let t5;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			h10.textContent = "To get feedback on how well the approach worked, your students will display a red light or green light to show their understanding.";
    			t1 = space();
    			div = element("div");
    			t2 = space();
    			h11 = element("h1");
    			h11.textContent = "How much did you understand?";
    			t4 = space();
    			img = element("img");
    			t5 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h10, "class", "descriptionText svelte-1d7ghio");
    			add_location(h10, file$2, 200, 4, 7179);
    			attr_dev(div, "class", "imageBox svelte-1d7ghio");
    			add_location(div, file$2, 203, 4, 7364);
    			attr_dev(h11, "class", "imageText svelte-1d7ghio");
    			add_location(h11, file$2, 204, 4, 7398);
    			attr_dev(img, "class", "imageScale svelte-1d7ghio");
    			if (img.src !== (img_src_value = "https://cdn.vox-cdn.com/thumbor/8XjPCHo_W0zCH1YDoR3ST3cN51E=/0x0:6720x4480/920x613/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/64906829/f9c5667541.0.jpeg")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "temp");
    			add_location(img, file$2, 205, 4, 7460);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h11, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, img, anchor);
    			insert_dev(target, t5, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h11);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t5);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_27.name,
    		type: "if",
    		source: "(200:0) {#if i ===7}",
    		ctx
    	});

    	return block;
    }

    // (209:0) {#if i ===8}
    function create_if_block_26(ctx) {
    	let h10;
    	let t1;
    	let div0;
    	let t2;
    	let h11;
    	let t4;
    	let div1;
    	let h12;
    	let t6;
    	let div2;
    	let h13;
    	let t8;
    	let h14;
    	let t10;
    	let h15;
    	let t12;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			h10.textContent = "The response of a student holding up a red or green card after being asked might be like:";
    			t1 = space();
    			div0 = element("div");
    			t2 = space();
    			h11 = element("h1");
    			h11.textContent = "How much did you understand?";
    			t4 = space();
    			div1 = element("div");
    			h12 = element("h1");
    			h12.textContent = "R";
    			t6 = space();
    			div2 = element("div");
    			h13 = element("h1");
    			h13.textContent = "G";
    			t8 = space();
    			h14 = element("h1");
    			h14.textContent = "I do not get it! This did not help me.";
    			t10 = space();
    			h15 = element("h1");
    			h15.textContent = "I understand!\n            I am happy with how this went.";
    			t12 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h10, "class", "descriptionText svelte-1d7ghio");
    			add_location(h10, file$2, 209, 4, 7814);
    			attr_dev(div0, "class", "imageBox svelte-1d7ghio");
    			add_location(div0, file$2, 212, 4, 7955);
    			attr_dev(h11, "class", "imageText svelte-1d7ghio");
    			add_location(h11, file$2, 213, 4, 7988);
    			attr_dev(h12, "style", "top:50%;left50%;height:20%;width:20%;margin:0% 25%");
    			add_location(h12, file$2, 215, 12, 8141);
    			attr_dev(div1, "class", "redGreenBall svelte-1d7ghio");
    			set_style(div1, "background-color", "red");
    			set_style(div1, "top", "min(31vh,31vw)");
    			add_location(div1, file$2, 214, 8, 8054);
    			attr_dev(h13, "style", "top:50%;left50%;height:20%;width:20%;margin:2% 20%");
    			add_location(h13, file$2, 218, 12, 8325);
    			attr_dev(div2, "class", "redGreenBall svelte-1d7ghio");
    			set_style(div2, "background-color", "green");
    			set_style(div2, "top", "min(51vh,51vw)");
    			add_location(div2, file$2, 217, 8, 8234);
    			attr_dev(h14, "class", "understandBox svelte-1d7ghio");
    			set_style(h14, "top", "min(30vh,30vw)");
    			add_location(h14, file$2, 220, 8, 8418);
    			attr_dev(h15, "class", "understandBox svelte-1d7ghio");
    			set_style(h15, "top", "min(50vh,50vw)");
    			add_location(h15, file$2, 223, 8, 8545);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h11, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h12);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, h13);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, h14, anchor);
    			insert_dev(target, t10, anchor);
    			insert_dev(target, h15, anchor);
    			insert_dev(target, t12, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h11);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div1);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(h14);
    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(h15);
    			if (detaching) detach_dev(t12);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_26.name,
    		type: "if",
    		source: "(209:0) {#if i ===8}",
    		ctx
    	});

    	return block;
    }

    // (229:0) {#if i ===9}
    function create_if_block_25(ctx) {
    	let singlechoice;
    	let t;
    	let navigationbuttons;
    	let current;

    	singlechoice = new SingleChoice({
    			props: {
    				passedText: "You have a class of 20 students. Each student is represented by a circle. A teaching approach, or move, can have different outcomes day to day. On the first day you try it, you might get 12 students showing green and 8 showing red (shown below)",
    				exploitSelect: false,
    				exploitMu: 12
    			},
    			$$inline: true
    		});

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(singlechoice.$$.fragment);
    			t = space();
    			create_component(navigationbuttons.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(singlechoice, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(singlechoice.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(singlechoice.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(singlechoice, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_25.name,
    		type: "if",
    		source: "(229:0) {#if i ===9}",
    		ctx
    	});

    	return block;
    }

    // (233:0) {#if i ===10}
    function create_if_block_24(ctx) {
    	let singlechoice;
    	let t;
    	let navigationbuttons;
    	let current;

    	singlechoice = new SingleChoice({
    			props: {
    				passedText: "And the second day you try the same move it might not work so well - 9 students showing green and 11 showing red.",
    				exploitSelect: false,
    				exploitMu: 9
    			},
    			$$inline: true
    		});

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(singlechoice.$$.fragment);
    			t = space();
    			create_component(navigationbuttons.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(singlechoice, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(singlechoice.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(singlechoice.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(singlechoice, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_24.name,
    		type: "if",
    		source: "(233:0) {#if i ===10}",
    		ctx
    	});

    	return block;
    }

    // (237:0) {#if i ===11}
    function create_if_block_23(ctx) {
    	let singlechoice;
    	let t;
    	let navigationbuttons;
    	let current;

    	singlechoice = new SingleChoice({
    			props: {
    				passedText: "And on the next day you might try the same move and get slightly better results - 15 students showing green and 5 showing red. As you can see, the same move can get slightly better or worse results over time but stays fairly close to what it was the day before.",
    				exploitSelect: false,
    				exploitMu: 15
    			},
    			$$inline: true
    		});

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(singlechoice.$$.fragment);
    			t = space();
    			create_component(navigationbuttons.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(singlechoice, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(singlechoice.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(singlechoice.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(singlechoice, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_23.name,
    		type: "if",
    		source: "(237:0) {#if i ===11}",
    		ctx
    	});

    	return block;
    }

    // (241:0) {#if i === 12}
    function create_if_block_22(ctx) {
    	let h1;
    	let t1;
    	let doublechoice;
    	let t2;
    	let navigationbuttons;
    	let current;
    	doublechoice = new DoubleChoice({ props: { exploitMu: 11 }, $$inline: true });

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "When you play the task, the two teaching approaches will be represented like this.  \n        Your current approach shows the outcome from the last time you used that approach.\n        The outcome from your new approach is unknown until you try it.";
    			t1 = space();
    			create_component(doublechoice.$$.fragment);
    			t2 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 241, 4, 9999);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(doublechoice, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(doublechoice, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_22.name,
    		type: "if",
    		source: "(241:0) {#if i === 12}",
    		ctx
    	});

    	return block;
    }

    // (249:0) {#if i ===13}
    function create_if_block_21(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let t2;
    	let previous_key = /*animationCounter*/ ctx[6];
    	let key_block_anchor;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8],
    				replayAnimation: /*replayAnimation*/ ctx[9]
    			},
    			$$inline: true
    		});

    	let key_block = create_key_block_2(ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "If you choose to continue with your current teaching approach, it will light up with a blue border and a new outcome will appear.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			t2 = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 249, 4, 10445);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			insert_dev(target, t2, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationbuttons_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationbuttons_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationbuttons.$set(navigationbuttons_changes);

    			if (dirty & /*animationCounter*/ 64 && safe_not_equal(previous_key, previous_key = /*animationCounter*/ ctx[6])) {
    				group_outros();
    				transition_out(key_block, 1, 1, noop);
    				check_outros();
    				key_block = create_key_block_2(ctx);
    				key_block.c();
    				transition_in(key_block);
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			transition_in(key_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			transition_out(key_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_21.name,
    		type: "if",
    		source: "(249:0) {#if i ===13}",
    		ctx
    	});

    	return block;
    }

    // (253:4) {#key animationCounter}
    function create_key_block_2(ctx) {
    	let doublechoice;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				delayExploit: true,
    				exploitMu: 11
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(doublechoice.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block_2.name,
    		type: "key",
    		source: "(253:4) {#key animationCounter}",
    		ctx
    	});

    	return block;
    }

    // (257:0) {#if i ===14}
    function create_if_block_20(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let t2;
    	let doublechoice;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				exploreSelect: true,
    				viewExplore: true,
    				exploitMu: 11
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Or if you choose to switch to the new approach, it will light up and show the results like this…";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			t2 = space();
    			create_component(doublechoice.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 257, 0, 10912);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationbuttons_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationbuttons_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationbuttons.$set(navigationbuttons_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_20.name,
    		type: "if",
    		source: "(257:0) {#if i ===14}",
    		ctx
    	});

    	return block;
    }

    // (263:0) {#if i === 15}
    function create_if_block_19(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let t2;
    	let previous_key = /*animationCounter*/ ctx[6];
    	let key_block_anchor;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8],
    				replayAnimation: /*replayAnimation*/ ctx[9]
    			},
    			$$inline: true
    		});

    	let key_block = create_key_block_1(ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "If the new approach is worse than the current approach, you earn fewer points on the trial. Then, since it is worse, this new approach is discarded.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			t2 = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 263, 4, 11280);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			insert_dev(target, t2, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationbuttons_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationbuttons_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationbuttons.$set(navigationbuttons_changes);

    			if (dirty & /*animationCounter*/ 64 && safe_not_equal(previous_key, previous_key = /*animationCounter*/ ctx[6])) {
    				group_outros();
    				transition_out(key_block, 1, 1, noop);
    				check_outros();
    				key_block = create_key_block_1(ctx);
    				key_block.c();
    				transition_in(key_block);
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			transition_in(key_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			transition_out(key_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_19.name,
    		type: "if",
    		source: "(263:0) {#if i === 15}",
    		ctx
    	});

    	return block;
    }

    // (267:4) {#key animationCounter}
    function create_key_block_1(ctx) {
    	let doublechoice;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				delayBadExplore: true,
    				exploitMu: 11,
    				noReplaceExplore: true
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(doublechoice.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block_1.name,
    		type: "key",
    		source: "(267:4) {#key animationCounter}",
    		ctx
    	});

    	return block;
    }

    // (271:0) {#if i === 16}
    function create_if_block_18(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let t2;
    	let doublechoice;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				exploitMu: 11
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Then another new approach will appear. Now you can choose again from the current approach or another new approach.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			t2 = space();
    			create_component(doublechoice.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 271, 4, 11796);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationbuttons_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationbuttons_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationbuttons.$set(navigationbuttons_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_18.name,
    		type: "if",
    		source: "(271:0) {#if i === 16}",
    		ctx
    	});

    	return block;
    }

    // (277:0) {#if i === 17}
    function create_if_block_17(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let t2;
    	let previous_key = /*animationCounter*/ ctx[6];
    	let key_block_anchor;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8],
    				replayAnimation: /*replayAnimation*/ ctx[9]
    			},
    			$$inline: true
    		});

    	let key_block = create_key_block(ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "If you were to try the new approach and it is better than the current approach,  it will replace your current approach for your next choice.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			t2 = space();
    			key_block.c();
    			key_block_anchor = empty();
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 277, 4, 12154);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			insert_dev(target, t2, anchor);
    			key_block.m(target, anchor);
    			insert_dev(target, key_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationbuttons_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationbuttons_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationbuttons.$set(navigationbuttons_changes);

    			if (dirty & /*animationCounter*/ 64 && safe_not_equal(previous_key, previous_key = /*animationCounter*/ ctx[6])) {
    				group_outros();
    				transition_out(key_block, 1, 1, noop);
    				check_outros();
    				key_block = create_key_block(ctx);
    				key_block.c();
    				transition_in(key_block);
    				key_block.m(key_block_anchor.parentNode, key_block_anchor);
    			} else {
    				key_block.p(ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			transition_in(key_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			transition_out(key_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(key_block_anchor);
    			key_block.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_17.name,
    		type: "if",
    		source: "(277:0) {#if i === 17}",
    		ctx
    	});

    	return block;
    }

    // (281:4) {#key animationCounter}
    function create_key_block(ctx) {
    	let doublechoice;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				delayGoodExplore: true,
    				exploitMu: 11,
    				exploreMu: 16,
    				noReplaceExplore: true
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(doublechoice.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block.name,
    		type: "key",
    		source: "(281:4) {#key animationCounter}",
    		ctx
    	});

    	return block;
    }

    // (285:0) {#if i === 18}
    function create_if_block_16(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let t2;
    	let doublechoice;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				exploitMu: 16
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Once again, another new approach will appear... and so on...";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			t2 = space();
    			create_component(doublechoice.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 285, 4, 12679);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationbuttons_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationbuttons_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationbuttons.$set(navigationbuttons_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_16.name,
    		type: "if",
    		source: "(285:0) {#if i === 18}",
    		ctx
    	});

    	return block;
    }

    // (291:0) {#if i === 19}
    function create_if_block_15(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "To recap, you need to choose between you current approach and a new approach.  Choosing you current approach gives you a similar result to what you got last time (slightly better or worse).  Choosing a new approach give you a totally new outcome(that can be a lot better or a lot worse).";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 291, 4, 12983);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_15.name,
    		type: "if",
    		source: "(291:0) {#if i === 19}",
    		ctx
    	});

    	return block;
    }

    // (296:0) {#if i === 20}
    function create_if_block_14(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Before you begin, to make sure you've got everything, we will walk you through several trials...";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 296, 4, 13435);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_14.name,
    		type: "if",
    		source: "(296:0) {#if i === 20}",
    		ctx
    	});

    	return block;
    }

    // (301:0) {#if i === 21}
    function create_if_block_13(ctx) {
    	let h1;
    	let t1;
    	let doublechoice;
    	let t2;
    	let navigationarrows;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				exploitMu: 12,
    				keyDisplay: true
    			},
    			$$inline: true
    		});

    	navigationarrows = new NavigationArrows({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				nextArrow: "ArrowLeft"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "For our first trial we have a current teaching approach that seems to be working fairly well, so we may want to stick with our current approach (press the left arrow)";
    			t1 = space();
    			create_component(doublechoice.$$.fragment);
    			t2 = space();
    			create_component(navigationarrows.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 301, 4, 13696);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(doublechoice, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationarrows, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationarrows_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationarrows_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationarrows.$set(navigationarrows_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			transition_in(navigationarrows.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			transition_out(navigationarrows.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(doublechoice, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationarrows, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_13.name,
    		type: "if",
    		source: "(301:0) {#if i === 21}",
    		ctx
    	});

    	return block;
    }

    // (306:0) {#if i=== 22}
    function create_if_block_12(ctx) {
    	let h1;
    	let t1;
    	let doublechoice;
    	let t2;
    	let navigationarrows;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				keyDisplay: true,
    				delayExploit: true,
    				exploitMu: 12,
    				exploitMu2: 13,
    				delayTime: 0
    			},
    			$$inline: true
    		});

    	navigationarrows = new NavigationArrows({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				nextArrow: "ArrowLeft"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "We can see that when we tried our current teaching approach it got better! So, we may want to keep trying that approach (press the left arrow)";
    			t1 = space();
    			create_component(doublechoice.$$.fragment);
    			t2 = space();
    			create_component(navigationarrows.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 306, 4, 14099);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(doublechoice, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationarrows, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationarrows_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationarrows_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationarrows.$set(navigationarrows_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			transition_in(navigationarrows.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			transition_out(navigationarrows.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(doublechoice, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationarrows, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_12.name,
    		type: "if",
    		source: "(306:0) {#if i=== 22}",
    		ctx
    	});

    	return block;
    }

    // (311:0) {#if i=== 23}
    function create_if_block_11(ctx) {
    	let h1;
    	let t1;
    	let doublechoice;
    	let t2;
    	let navigationarrows;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				keyDisplay: true,
    				delayExploit: true,
    				exploitMu: 13,
    				exploitMu2: 8,
    				delayTime: 0
    			},
    			$$inline: true
    		});

    	navigationarrows = new NavigationArrows({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				nextArrow: "ArrowRight"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Oh no! We seem to have gotten a bad outcome that time. Since our current choice is not performing well we may want to switch to a new approach (press the right arrow)";
    			t1 = space();
    			create_component(doublechoice.$$.fragment);
    			t2 = space();
    			create_component(navigationarrows.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 311, 4, 14528);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(doublechoice, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationarrows, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationarrows_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationarrows_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationarrows.$set(navigationarrows_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			transition_in(navigationarrows.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			transition_out(navigationarrows.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(doublechoice, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationarrows, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_11.name,
    		type: "if",
    		source: "(311:0) {#if i=== 23}",
    		ctx
    	});

    	return block;
    }

    // (316:0) {#if i=== 24}
    function create_if_block_10(ctx) {
    	let h1;
    	let t1;
    	let doublechoice;
    	let t2;
    	let navigationarrows;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				keyDisplay: true,
    				delayBadExplore: true,
    				exploitMu: 8,
    				exploreMu: 1,
    				delayTime: 0
    			},
    			$$inline: true
    		});

    	navigationarrows = new NavigationArrows({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				nextArrow: "ArrowRight"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "After trying the new approach, we got a worse outcome than our current approach. We may still think that there are better options out there though, and we decide to try another new approach (press the right arrow)";
    			t1 = space();
    			create_component(doublechoice.$$.fragment);
    			t2 = space();
    			create_component(navigationarrows.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 316, 4, 14981);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(doublechoice, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationarrows, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const navigationarrows_changes = {};
    			if (dirty & /*breakTruth*/ 2) navigationarrows_changes.breakTruth = /*breakTruth*/ ctx[1];
    			navigationarrows.$set(navigationarrows_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			transition_in(navigationarrows.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			transition_out(navigationarrows.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(doublechoice, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationarrows, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_10.name,
    		type: "if",
    		source: "(316:0) {#if i=== 24}",
    		ctx
    	});

    	return block;
    }

    // (321:0) {#if i=== 25}
    function create_if_block_9$1(ctx) {
    	let h1;
    	let t1;
    	let doublechoice;
    	let current;

    	doublechoice = new DoubleChoice({
    			props: {
    				breakNav: /*breakNav*/ ctx[10],
    				keyDisplay: true,
    				delayGoodExplore: true,
    				exploitMu: 8,
    				exploreMu: 15,
    				delayTime: 0
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Great! We seem to have found a much better approach when we tried another new approach. Now it is your turn to try a couple of trials by yourself. Choose either the left or right arrow to make your decision.";
    			t1 = space();
    			create_component(doublechoice.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 321, 4, 15482);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(doublechoice, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(doublechoice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(doublechoice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(doublechoice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9$1.name,
    		type: "if",
    		source: "(321:0) {#if i=== 25}",
    		ctx
    	});

    	return block;
    }

    // (325:0) {#if i === 26}
    function create_if_block_8$1(ctx) {
    	let practicegame;
    	let current;

    	practicegame = new PracticeGame({
    			props: {
    				breakTruth: /*breakTruth*/ ctx[1],
    				toNext: /*nextInstruction*/ ctx[7],
    				trialDescriptions: [
    					"Great! We seem to have found a much better approach when we tried another new approach. Now it is your turn to try a couple of trials by yourself. Choose either the left or right arrow to make your decision.",
    					"Lets try another, 3 practice trials left",
    					"Lets try another, 2 practice trials left",
    					"Lets try another, 1 practice trials left",
    					""
    				]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(practicegame.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(practicegame, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const practicegame_changes = {};
    			if (dirty & /*breakTruth*/ 2) practicegame_changes.breakTruth = /*breakTruth*/ ctx[1];
    			practicegame.$set(practicegame_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(practicegame.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(practicegame.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(practicegame, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8$1.name,
    		type: "if",
    		source: "(325:0) {#if i === 26}",
    		ctx
    	});

    	return block;
    }

    // (334:0) {#if i ===27}
    function create_if_block_7$1(ctx) {
    	let h10;
    	let t1;
    	let h11;
    	let t6;
    	let h12;
    	let t11;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8],
    				backSkip: 7
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			h10.textContent = "The game will be organized into days and months, and the current day/month will be displayed at the top of your screen.\n         Every time you choose either your current teaching move or a new teaching move, it will increase your day count. At the end of 30 days, a new month\n        will happen. Here is the display you would see if you were currently on day 5 of the second month.";
    			t1 = space();
    			h11 = element("h1");
    			h11.textContent = `Day ${5} of ${30}`;
    			t6 = space();
    			h12 = element("h1");
    			h12.textContent = `Month ${2} of ${6}`;
    			t11 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h10, "class", "descriptionText svelte-1d7ghio");
    			add_location(h10, file$2, 334, 4, 16349);
    			attr_dev(h11, "class", "points svelte-1d7ghio");
    			add_location(h11, file$2, 337, 4, 16771);
    			attr_dev(h12, "class", "points svelte-1d7ghio");
    			set_style(h12, "left", "calc(50vw - min(50vw, 50vh))");
    			add_location(h12, file$2, 338, 4, 16816);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h11, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h12, anchor);
    			insert_dev(target, t11, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h11);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h12);
    			if (detaching) detach_dev(t11);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7$1.name,
    		type: "if",
    		source: "(334:0) {#if i ===27}",
    		ctx
    	});

    	return block;
    }

    // (342:0) {#if i ===28}
    function create_if_block_6$1(ctx) {
    	let h1;
    	let t1;
    	let progressbar;
    	let t2;
    	let navigationbuttons;
    	let current;

    	progressbar = new ProgressBar({
    			props: {
    				lastGreenBar: 15,
    				lastRedBar: 5,
    				greenBar: 250,
    				redBar: 210,
    				numTrials: 30
    			},
    			$$inline: true
    		});

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Your points will be kept track of with a progress bar at the top of your screen. The total bar length represents your total accumulated red and green lights this month. The flashing sections\n        represent the red and green lights that you recieved on your last choice.";
    			t1 = space();
    			create_component(progressbar.$$.fragment);
    			t2 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 342, 4, 17039);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(progressbar, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(progressbar.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(progressbar.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(progressbar, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6$1.name,
    		type: "if",
    		source: "(342:0) {#if i ===28}",
    		ctx
    	});

    	return block;
    }

    // (348:0) {#if i === 29}
    function create_if_block_5$1(ctx) {
    	let h10;
    	let t1;
    	let h11;
    	let t6;
    	let h12;
    	let t11;
    	let progressbar;
    	let t12;
    	let navigationbuttons;
    	let current;

    	progressbar = new ProgressBar({
    			props: {
    				lastGreenBar: 15,
    				lastRedBar: 5,
    				greenBar: 250,
    				redBar: 210,
    				numTrials: 30
    			},
    			$$inline: true
    		});

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			h10.textContent = "So, all together, the top of your screen will look something like:";
    			t1 = space();
    			h11 = element("h1");
    			h11.textContent = `Day ${23} of ${30}`;
    			t6 = space();
    			h12 = element("h1");
    			h12.textContent = `Month ${2} of ${6}`;
    			t11 = space();
    			create_component(progressbar.$$.fragment);
    			t12 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h10, "class", "descriptionText svelte-1d7ghio");
    			add_location(h10, file$2, 348, 4, 17569);
    			attr_dev(h11, "class", "points svelte-1d7ghio");
    			add_location(h11, file$2, 349, 4, 17673);
    			attr_dev(h12, "class", "points svelte-1d7ghio");
    			set_style(h12, "left", "calc(50vw - min(50vw, 50vh))");
    			add_location(h12, file$2, 350, 4, 17719);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h11, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h12, anchor);
    			insert_dev(target, t11, anchor);
    			mount_component(progressbar, target, anchor);
    			insert_dev(target, t12, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(progressbar.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(progressbar.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h11);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h12);
    			if (detaching) detach_dev(t11);
    			destroy_component(progressbar, detaching);
    			if (detaching) detach_dev(t12);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$1.name,
    		type: "if",
    		source: "(348:0) {#if i === 29}",
    		ctx
    	});

    	return block;
    }

    // (355:0) {#if i ===30}
    function create_if_block_4$2(ctx) {
    	let h1;
    	let t1;
    	let monthprogress;
    	let t2;
    	let navigationbuttons;
    	let current;

    	monthprogress = new MonthProgress({
    			props: {
    				greenScore: 380,
    				greenScoreLast: 300,
    				numTrials: 30
    			},
    			$$inline: true
    		});

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "At the end of each month, you will be shown a screen giving your performance that month and the month before. This gives you a chance to \n    improve upon your score between months! If you improved upon your previous, you would see something like:";
    			t1 = space();
    			create_component(monthprogress.$$.fragment);
    			t2 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 355, 0, 18022);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(monthprogress, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(monthprogress.$$.fragment, local);
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(monthprogress.$$.fragment, local);
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(monthprogress, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$2.name,
    		type: "if",
    		source: "(355:0) {#if i ===30}",
    		ctx
    	});

    	return block;
    }

    // (362:0) {#if i === 31}
    function create_if_block_3$2(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Now that you've seen all the parts of the game, lets have you do a couple of rounds by yourself. The classroom understanding bar will be added into these trials.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 362, 4, 18504);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$2.name,
    		type: "if",
    		source: "(362:0) {#if i === 31}",
    		ctx
    	});

    	return block;
    }

    // (367:0) {#if i ===32}
    function create_if_block_2$3(ctx) {
    	let game;
    	let current;

    	game = new Game({
    			props: {
    				toNext: /*sendGameUpstream*/ ctx[11],
    				gameString: "",
    				writeKey: /*writeKey*/ ctx[3],
    				id: /*id*/ ctx[4],
    				totalBlocks: 6,
    				block: 0,
    				numTrials: 10
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(game.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(game, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const game_changes = {};
    			if (dirty & /*writeKey*/ 8) game_changes.writeKey = /*writeKey*/ ctx[3];
    			if (dirty & /*id*/ 16) game_changes.id = /*id*/ ctx[4];
    			game.$set(game_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(game.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(game.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(game, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$3.name,
    		type: "if",
    		source: "(367:0) {#if i ===32}",
    		ctx
    	});

    	return block;
    }

    // (370:0) {#if i === 33}
    function create_if_block_1$3(ctx) {
    	let h1;
    	let t1;
    	let navigationbuttons;
    	let current;

    	navigationbuttons = new NavigationButtons({
    			props: {
    				nextInstruction: /*nextInstruction*/ ctx[7],
    				previousInstruction: /*previousInstruction*/ ctx[8],
    				backSkip: 2
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "At this point you should have a firm understanding of the task. This task will go for 6 months of 30 days each. Remember to maximize your students' understanding, and good luck! To review any of the instructions click back, to continue to the task click next.";
    			t1 = space();
    			create_component(navigationbuttons.$$.fragment);
    			attr_dev(h1, "class", "descriptionText svelte-1d7ghio");
    			add_location(h1, file$2, 370, 4, 18973);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(navigationbuttons, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navigationbuttons.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navigationbuttons.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(navigationbuttons, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$3.name,
    		type: "if",
    		source: "(370:0) {#if i === 33}",
    		ctx
    	});

    	return block;
    }

    // (375:0) {#if i === 34}
    function create_if_block$3(ctx) {
    	let t_value = /*toGame*/ ctx[2]() + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*toGame*/ 4 && t_value !== (t_value = /*toGame*/ ctx[2]() + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(375:0) {#if i === 34}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let t4;
    	let t5;
    	let t6;
    	let t7;
    	let t8;
    	let t9;
    	let t10;
    	let t11;
    	let t12;
    	let t13;
    	let t14;
    	let t15;
    	let t16;
    	let t17;
    	let t18;
    	let t19;
    	let t20;
    	let t21;
    	let t22;
    	let t23;
    	let t24;
    	let t25;
    	let t26;
    	let t27;
    	let t28;
    	let t29;
    	let t30;
    	let t31;
    	let t32;
    	let t33;
    	let if_block34_anchor;
    	let current;
    	let if_block0 = /*i*/ ctx[0] === 0 && create_if_block_34(ctx);
    	let if_block1 = /*i*/ ctx[0] === 1 && create_if_block_33(ctx);
    	let if_block2 = /*i*/ ctx[0] === 2 && create_if_block_32(ctx);
    	let if_block3 = /*i*/ ctx[0] === 3 && create_if_block_31(ctx);
    	let if_block4 = /*i*/ ctx[0] === 4 && create_if_block_30(ctx);
    	let if_block5 = /*i*/ ctx[0] === 5 && create_if_block_29(ctx);
    	let if_block6 = /*i*/ ctx[0] === 6 && create_if_block_28(ctx);
    	let if_block7 = /*i*/ ctx[0] === 7 && create_if_block_27(ctx);
    	let if_block8 = /*i*/ ctx[0] === 8 && create_if_block_26(ctx);
    	let if_block9 = /*i*/ ctx[0] === 9 && create_if_block_25(ctx);
    	let if_block10 = /*i*/ ctx[0] === 10 && create_if_block_24(ctx);
    	let if_block11 = /*i*/ ctx[0] === 11 && create_if_block_23(ctx);
    	let if_block12 = /*i*/ ctx[0] === 12 && create_if_block_22(ctx);
    	let if_block13 = /*i*/ ctx[0] === 13 && create_if_block_21(ctx);
    	let if_block14 = /*i*/ ctx[0] === 14 && create_if_block_20(ctx);
    	let if_block15 = /*i*/ ctx[0] === 15 && create_if_block_19(ctx);
    	let if_block16 = /*i*/ ctx[0] === 16 && create_if_block_18(ctx);
    	let if_block17 = /*i*/ ctx[0] === 17 && create_if_block_17(ctx);
    	let if_block18 = /*i*/ ctx[0] === 18 && create_if_block_16(ctx);
    	let if_block19 = /*i*/ ctx[0] === 19 && create_if_block_15(ctx);
    	let if_block20 = /*i*/ ctx[0] === 20 && create_if_block_14(ctx);
    	let if_block21 = /*i*/ ctx[0] === 21 && create_if_block_13(ctx);
    	let if_block22 = /*i*/ ctx[0] === 22 && create_if_block_12(ctx);
    	let if_block23 = /*i*/ ctx[0] === 23 && create_if_block_11(ctx);
    	let if_block24 = /*i*/ ctx[0] === 24 && create_if_block_10(ctx);
    	let if_block25 = /*i*/ ctx[0] === 25 && create_if_block_9$1(ctx);
    	let if_block26 = /*i*/ ctx[0] === 26 && create_if_block_8$1(ctx);
    	let if_block27 = /*i*/ ctx[0] === 27 && create_if_block_7$1(ctx);
    	let if_block28 = /*i*/ ctx[0] === 28 && create_if_block_6$1(ctx);
    	let if_block29 = /*i*/ ctx[0] === 29 && create_if_block_5$1(ctx);
    	let if_block30 = /*i*/ ctx[0] === 30 && create_if_block_4$2(ctx);
    	let if_block31 = /*i*/ ctx[0] === 31 && create_if_block_3$2(ctx);
    	let if_block32 = /*i*/ ctx[0] === 32 && create_if_block_2$3(ctx);
    	let if_block33 = /*i*/ ctx[0] === 33 && create_if_block_1$3(ctx);
    	let if_block34 = /*i*/ ctx[0] === 34 && create_if_block$3(ctx);

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			t2 = space();
    			if (if_block3) if_block3.c();
    			t3 = space();
    			if (if_block4) if_block4.c();
    			t4 = space();
    			if (if_block5) if_block5.c();
    			t5 = space();
    			if (if_block6) if_block6.c();
    			t6 = space();
    			if (if_block7) if_block7.c();
    			t7 = space();
    			if (if_block8) if_block8.c();
    			t8 = space();
    			if (if_block9) if_block9.c();
    			t9 = space();
    			if (if_block10) if_block10.c();
    			t10 = space();
    			if (if_block11) if_block11.c();
    			t11 = space();
    			if (if_block12) if_block12.c();
    			t12 = space();
    			if (if_block13) if_block13.c();
    			t13 = space();
    			if (if_block14) if_block14.c();
    			t14 = space();
    			if (if_block15) if_block15.c();
    			t15 = space();
    			if (if_block16) if_block16.c();
    			t16 = space();
    			if (if_block17) if_block17.c();
    			t17 = space();
    			if (if_block18) if_block18.c();
    			t18 = space();
    			if (if_block19) if_block19.c();
    			t19 = space();
    			if (if_block20) if_block20.c();
    			t20 = space();
    			if (if_block21) if_block21.c();
    			t21 = space();
    			if (if_block22) if_block22.c();
    			t22 = space();
    			if (if_block23) if_block23.c();
    			t23 = space();
    			if (if_block24) if_block24.c();
    			t24 = space();
    			if (if_block25) if_block25.c();
    			t25 = space();
    			if (if_block26) if_block26.c();
    			t26 = space();
    			if (if_block27) if_block27.c();
    			t27 = space();
    			if (if_block28) if_block28.c();
    			t28 = space();
    			if (if_block29) if_block29.c();
    			t29 = space();
    			if (if_block30) if_block30.c();
    			t30 = space();
    			if (if_block31) if_block31.c();
    			t31 = space();
    			if (if_block32) if_block32.c();
    			t32 = space();
    			if (if_block33) if_block33.c();
    			t33 = space();
    			if (if_block34) if_block34.c();
    			if_block34_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block2) if_block2.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			if (if_block3) if_block3.m(target, anchor);
    			insert_dev(target, t3, anchor);
    			if (if_block4) if_block4.m(target, anchor);
    			insert_dev(target, t4, anchor);
    			if (if_block5) if_block5.m(target, anchor);
    			insert_dev(target, t5, anchor);
    			if (if_block6) if_block6.m(target, anchor);
    			insert_dev(target, t6, anchor);
    			if (if_block7) if_block7.m(target, anchor);
    			insert_dev(target, t7, anchor);
    			if (if_block8) if_block8.m(target, anchor);
    			insert_dev(target, t8, anchor);
    			if (if_block9) if_block9.m(target, anchor);
    			insert_dev(target, t9, anchor);
    			if (if_block10) if_block10.m(target, anchor);
    			insert_dev(target, t10, anchor);
    			if (if_block11) if_block11.m(target, anchor);
    			insert_dev(target, t11, anchor);
    			if (if_block12) if_block12.m(target, anchor);
    			insert_dev(target, t12, anchor);
    			if (if_block13) if_block13.m(target, anchor);
    			insert_dev(target, t13, anchor);
    			if (if_block14) if_block14.m(target, anchor);
    			insert_dev(target, t14, anchor);
    			if (if_block15) if_block15.m(target, anchor);
    			insert_dev(target, t15, anchor);
    			if (if_block16) if_block16.m(target, anchor);
    			insert_dev(target, t16, anchor);
    			if (if_block17) if_block17.m(target, anchor);
    			insert_dev(target, t17, anchor);
    			if (if_block18) if_block18.m(target, anchor);
    			insert_dev(target, t18, anchor);
    			if (if_block19) if_block19.m(target, anchor);
    			insert_dev(target, t19, anchor);
    			if (if_block20) if_block20.m(target, anchor);
    			insert_dev(target, t20, anchor);
    			if (if_block21) if_block21.m(target, anchor);
    			insert_dev(target, t21, anchor);
    			if (if_block22) if_block22.m(target, anchor);
    			insert_dev(target, t22, anchor);
    			if (if_block23) if_block23.m(target, anchor);
    			insert_dev(target, t23, anchor);
    			if (if_block24) if_block24.m(target, anchor);
    			insert_dev(target, t24, anchor);
    			if (if_block25) if_block25.m(target, anchor);
    			insert_dev(target, t25, anchor);
    			if (if_block26) if_block26.m(target, anchor);
    			insert_dev(target, t26, anchor);
    			if (if_block27) if_block27.m(target, anchor);
    			insert_dev(target, t27, anchor);
    			if (if_block28) if_block28.m(target, anchor);
    			insert_dev(target, t28, anchor);
    			if (if_block29) if_block29.m(target, anchor);
    			insert_dev(target, t29, anchor);
    			if (if_block30) if_block30.m(target, anchor);
    			insert_dev(target, t30, anchor);
    			if (if_block31) if_block31.m(target, anchor);
    			insert_dev(target, t31, anchor);
    			if (if_block32) if_block32.m(target, anchor);
    			insert_dev(target, t32, anchor);
    			if (if_block33) if_block33.m(target, anchor);
    			insert_dev(target, t33, anchor);
    			if (if_block34) if_block34.m(target, anchor);
    			insert_dev(target, if_block34_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*i*/ ctx[0] === 0) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_34(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t0.parentNode, t0);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 1) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block_33(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(t1.parentNode, t1);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 2) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block2, 1);
    					}
    				} else {
    					if_block2 = create_if_block_32(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(t2.parentNode, t2);
    				}
    			} else if (if_block2) {
    				group_outros();

    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 3) {
    				if (if_block3) {
    					if_block3.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block3, 1);
    					}
    				} else {
    					if_block3 = create_if_block_31(ctx);
    					if_block3.c();
    					transition_in(if_block3, 1);
    					if_block3.m(t3.parentNode, t3);
    				}
    			} else if (if_block3) {
    				group_outros();

    				transition_out(if_block3, 1, 1, () => {
    					if_block3 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 4) {
    				if (if_block4) {
    					if_block4.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block4, 1);
    					}
    				} else {
    					if_block4 = create_if_block_30(ctx);
    					if_block4.c();
    					transition_in(if_block4, 1);
    					if_block4.m(t4.parentNode, t4);
    				}
    			} else if (if_block4) {
    				group_outros();

    				transition_out(if_block4, 1, 1, () => {
    					if_block4 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 5) {
    				if (if_block5) {
    					if_block5.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block5, 1);
    					}
    				} else {
    					if_block5 = create_if_block_29(ctx);
    					if_block5.c();
    					transition_in(if_block5, 1);
    					if_block5.m(t5.parentNode, t5);
    				}
    			} else if (if_block5) {
    				group_outros();

    				transition_out(if_block5, 1, 1, () => {
    					if_block5 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 6) {
    				if (if_block6) {
    					if_block6.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block6, 1);
    					}
    				} else {
    					if_block6 = create_if_block_28(ctx);
    					if_block6.c();
    					transition_in(if_block6, 1);
    					if_block6.m(t6.parentNode, t6);
    				}
    			} else if (if_block6) {
    				group_outros();

    				transition_out(if_block6, 1, 1, () => {
    					if_block6 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 7) {
    				if (if_block7) {
    					if_block7.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block7, 1);
    					}
    				} else {
    					if_block7 = create_if_block_27(ctx);
    					if_block7.c();
    					transition_in(if_block7, 1);
    					if_block7.m(t7.parentNode, t7);
    				}
    			} else if (if_block7) {
    				group_outros();

    				transition_out(if_block7, 1, 1, () => {
    					if_block7 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 8) {
    				if (if_block8) {
    					if_block8.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block8, 1);
    					}
    				} else {
    					if_block8 = create_if_block_26(ctx);
    					if_block8.c();
    					transition_in(if_block8, 1);
    					if_block8.m(t8.parentNode, t8);
    				}
    			} else if (if_block8) {
    				group_outros();

    				transition_out(if_block8, 1, 1, () => {
    					if_block8 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 9) {
    				if (if_block9) {
    					if_block9.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block9, 1);
    					}
    				} else {
    					if_block9 = create_if_block_25(ctx);
    					if_block9.c();
    					transition_in(if_block9, 1);
    					if_block9.m(t9.parentNode, t9);
    				}
    			} else if (if_block9) {
    				group_outros();

    				transition_out(if_block9, 1, 1, () => {
    					if_block9 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 10) {
    				if (if_block10) {
    					if_block10.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block10, 1);
    					}
    				} else {
    					if_block10 = create_if_block_24(ctx);
    					if_block10.c();
    					transition_in(if_block10, 1);
    					if_block10.m(t10.parentNode, t10);
    				}
    			} else if (if_block10) {
    				group_outros();

    				transition_out(if_block10, 1, 1, () => {
    					if_block10 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 11) {
    				if (if_block11) {
    					if_block11.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block11, 1);
    					}
    				} else {
    					if_block11 = create_if_block_23(ctx);
    					if_block11.c();
    					transition_in(if_block11, 1);
    					if_block11.m(t11.parentNode, t11);
    				}
    			} else if (if_block11) {
    				group_outros();

    				transition_out(if_block11, 1, 1, () => {
    					if_block11 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 12) {
    				if (if_block12) {
    					if_block12.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block12, 1);
    					}
    				} else {
    					if_block12 = create_if_block_22(ctx);
    					if_block12.c();
    					transition_in(if_block12, 1);
    					if_block12.m(t12.parentNode, t12);
    				}
    			} else if (if_block12) {
    				group_outros();

    				transition_out(if_block12, 1, 1, () => {
    					if_block12 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 13) {
    				if (if_block13) {
    					if_block13.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block13, 1);
    					}
    				} else {
    					if_block13 = create_if_block_21(ctx);
    					if_block13.c();
    					transition_in(if_block13, 1);
    					if_block13.m(t13.parentNode, t13);
    				}
    			} else if (if_block13) {
    				group_outros();

    				transition_out(if_block13, 1, 1, () => {
    					if_block13 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 14) {
    				if (if_block14) {
    					if_block14.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block14, 1);
    					}
    				} else {
    					if_block14 = create_if_block_20(ctx);
    					if_block14.c();
    					transition_in(if_block14, 1);
    					if_block14.m(t14.parentNode, t14);
    				}
    			} else if (if_block14) {
    				group_outros();

    				transition_out(if_block14, 1, 1, () => {
    					if_block14 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 15) {
    				if (if_block15) {
    					if_block15.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block15, 1);
    					}
    				} else {
    					if_block15 = create_if_block_19(ctx);
    					if_block15.c();
    					transition_in(if_block15, 1);
    					if_block15.m(t15.parentNode, t15);
    				}
    			} else if (if_block15) {
    				group_outros();

    				transition_out(if_block15, 1, 1, () => {
    					if_block15 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 16) {
    				if (if_block16) {
    					if_block16.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block16, 1);
    					}
    				} else {
    					if_block16 = create_if_block_18(ctx);
    					if_block16.c();
    					transition_in(if_block16, 1);
    					if_block16.m(t16.parentNode, t16);
    				}
    			} else if (if_block16) {
    				group_outros();

    				transition_out(if_block16, 1, 1, () => {
    					if_block16 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 17) {
    				if (if_block17) {
    					if_block17.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block17, 1);
    					}
    				} else {
    					if_block17 = create_if_block_17(ctx);
    					if_block17.c();
    					transition_in(if_block17, 1);
    					if_block17.m(t17.parentNode, t17);
    				}
    			} else if (if_block17) {
    				group_outros();

    				transition_out(if_block17, 1, 1, () => {
    					if_block17 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 18) {
    				if (if_block18) {
    					if_block18.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block18, 1);
    					}
    				} else {
    					if_block18 = create_if_block_16(ctx);
    					if_block18.c();
    					transition_in(if_block18, 1);
    					if_block18.m(t18.parentNode, t18);
    				}
    			} else if (if_block18) {
    				group_outros();

    				transition_out(if_block18, 1, 1, () => {
    					if_block18 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 19) {
    				if (if_block19) {
    					if_block19.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block19, 1);
    					}
    				} else {
    					if_block19 = create_if_block_15(ctx);
    					if_block19.c();
    					transition_in(if_block19, 1);
    					if_block19.m(t19.parentNode, t19);
    				}
    			} else if (if_block19) {
    				group_outros();

    				transition_out(if_block19, 1, 1, () => {
    					if_block19 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 20) {
    				if (if_block20) {
    					if_block20.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block20, 1);
    					}
    				} else {
    					if_block20 = create_if_block_14(ctx);
    					if_block20.c();
    					transition_in(if_block20, 1);
    					if_block20.m(t20.parentNode, t20);
    				}
    			} else if (if_block20) {
    				group_outros();

    				transition_out(if_block20, 1, 1, () => {
    					if_block20 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 21) {
    				if (if_block21) {
    					if_block21.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block21, 1);
    					}
    				} else {
    					if_block21 = create_if_block_13(ctx);
    					if_block21.c();
    					transition_in(if_block21, 1);
    					if_block21.m(t21.parentNode, t21);
    				}
    			} else if (if_block21) {
    				group_outros();

    				transition_out(if_block21, 1, 1, () => {
    					if_block21 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 22) {
    				if (if_block22) {
    					if_block22.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block22, 1);
    					}
    				} else {
    					if_block22 = create_if_block_12(ctx);
    					if_block22.c();
    					transition_in(if_block22, 1);
    					if_block22.m(t22.parentNode, t22);
    				}
    			} else if (if_block22) {
    				group_outros();

    				transition_out(if_block22, 1, 1, () => {
    					if_block22 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 23) {
    				if (if_block23) {
    					if_block23.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block23, 1);
    					}
    				} else {
    					if_block23 = create_if_block_11(ctx);
    					if_block23.c();
    					transition_in(if_block23, 1);
    					if_block23.m(t23.parentNode, t23);
    				}
    			} else if (if_block23) {
    				group_outros();

    				transition_out(if_block23, 1, 1, () => {
    					if_block23 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 24) {
    				if (if_block24) {
    					if_block24.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block24, 1);
    					}
    				} else {
    					if_block24 = create_if_block_10(ctx);
    					if_block24.c();
    					transition_in(if_block24, 1);
    					if_block24.m(t24.parentNode, t24);
    				}
    			} else if (if_block24) {
    				group_outros();

    				transition_out(if_block24, 1, 1, () => {
    					if_block24 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 25) {
    				if (if_block25) {
    					if_block25.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block25, 1);
    					}
    				} else {
    					if_block25 = create_if_block_9$1(ctx);
    					if_block25.c();
    					transition_in(if_block25, 1);
    					if_block25.m(t25.parentNode, t25);
    				}
    			} else if (if_block25) {
    				group_outros();

    				transition_out(if_block25, 1, 1, () => {
    					if_block25 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 26) {
    				if (if_block26) {
    					if_block26.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block26, 1);
    					}
    				} else {
    					if_block26 = create_if_block_8$1(ctx);
    					if_block26.c();
    					transition_in(if_block26, 1);
    					if_block26.m(t26.parentNode, t26);
    				}
    			} else if (if_block26) {
    				group_outros();

    				transition_out(if_block26, 1, 1, () => {
    					if_block26 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 27) {
    				if (if_block27) {
    					if_block27.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block27, 1);
    					}
    				} else {
    					if_block27 = create_if_block_7$1(ctx);
    					if_block27.c();
    					transition_in(if_block27, 1);
    					if_block27.m(t27.parentNode, t27);
    				}
    			} else if (if_block27) {
    				group_outros();

    				transition_out(if_block27, 1, 1, () => {
    					if_block27 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 28) {
    				if (if_block28) {
    					if_block28.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block28, 1);
    					}
    				} else {
    					if_block28 = create_if_block_6$1(ctx);
    					if_block28.c();
    					transition_in(if_block28, 1);
    					if_block28.m(t28.parentNode, t28);
    				}
    			} else if (if_block28) {
    				group_outros();

    				transition_out(if_block28, 1, 1, () => {
    					if_block28 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 29) {
    				if (if_block29) {
    					if_block29.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block29, 1);
    					}
    				} else {
    					if_block29 = create_if_block_5$1(ctx);
    					if_block29.c();
    					transition_in(if_block29, 1);
    					if_block29.m(t29.parentNode, t29);
    				}
    			} else if (if_block29) {
    				group_outros();

    				transition_out(if_block29, 1, 1, () => {
    					if_block29 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 30) {
    				if (if_block30) {
    					if_block30.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block30, 1);
    					}
    				} else {
    					if_block30 = create_if_block_4$2(ctx);
    					if_block30.c();
    					transition_in(if_block30, 1);
    					if_block30.m(t30.parentNode, t30);
    				}
    			} else if (if_block30) {
    				group_outros();

    				transition_out(if_block30, 1, 1, () => {
    					if_block30 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 31) {
    				if (if_block31) {
    					if_block31.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block31, 1);
    					}
    				} else {
    					if_block31 = create_if_block_3$2(ctx);
    					if_block31.c();
    					transition_in(if_block31, 1);
    					if_block31.m(t31.parentNode, t31);
    				}
    			} else if (if_block31) {
    				group_outros();

    				transition_out(if_block31, 1, 1, () => {
    					if_block31 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 32) {
    				if (if_block32) {
    					if_block32.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block32, 1);
    					}
    				} else {
    					if_block32 = create_if_block_2$3(ctx);
    					if_block32.c();
    					transition_in(if_block32, 1);
    					if_block32.m(t32.parentNode, t32);
    				}
    			} else if (if_block32) {
    				group_outros();

    				transition_out(if_block32, 1, 1, () => {
    					if_block32 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 33) {
    				if (if_block33) {
    					if_block33.p(ctx, dirty);

    					if (dirty & /*i*/ 1) {
    						transition_in(if_block33, 1);
    					}
    				} else {
    					if_block33 = create_if_block_1$3(ctx);
    					if_block33.c();
    					transition_in(if_block33, 1);
    					if_block33.m(t33.parentNode, t33);
    				}
    			} else if (if_block33) {
    				group_outros();

    				transition_out(if_block33, 1, 1, () => {
    					if_block33 = null;
    				});

    				check_outros();
    			}

    			if (/*i*/ ctx[0] === 34) {
    				if (if_block34) {
    					if_block34.p(ctx, dirty);
    				} else {
    					if_block34 = create_if_block$3(ctx);
    					if_block34.c();
    					if_block34.m(if_block34_anchor.parentNode, if_block34_anchor);
    				}
    			} else if (if_block34) {
    				if_block34.d(1);
    				if_block34 = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(if_block2);
    			transition_in(if_block3);
    			transition_in(if_block4);
    			transition_in(if_block5);
    			transition_in(if_block6);
    			transition_in(if_block7);
    			transition_in(if_block8);
    			transition_in(if_block9);
    			transition_in(if_block10);
    			transition_in(if_block11);
    			transition_in(if_block12);
    			transition_in(if_block13);
    			transition_in(if_block14);
    			transition_in(if_block15);
    			transition_in(if_block16);
    			transition_in(if_block17);
    			transition_in(if_block18);
    			transition_in(if_block19);
    			transition_in(if_block20);
    			transition_in(if_block21);
    			transition_in(if_block22);
    			transition_in(if_block23);
    			transition_in(if_block24);
    			transition_in(if_block25);
    			transition_in(if_block26);
    			transition_in(if_block27);
    			transition_in(if_block28);
    			transition_in(if_block29);
    			transition_in(if_block30);
    			transition_in(if_block31);
    			transition_in(if_block32);
    			transition_in(if_block33);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(if_block2);
    			transition_out(if_block3);
    			transition_out(if_block4);
    			transition_out(if_block5);
    			transition_out(if_block6);
    			transition_out(if_block7);
    			transition_out(if_block8);
    			transition_out(if_block9);
    			transition_out(if_block10);
    			transition_out(if_block11);
    			transition_out(if_block12);
    			transition_out(if_block13);
    			transition_out(if_block14);
    			transition_out(if_block15);
    			transition_out(if_block16);
    			transition_out(if_block17);
    			transition_out(if_block18);
    			transition_out(if_block19);
    			transition_out(if_block20);
    			transition_out(if_block21);
    			transition_out(if_block22);
    			transition_out(if_block23);
    			transition_out(if_block24);
    			transition_out(if_block25);
    			transition_out(if_block26);
    			transition_out(if_block27);
    			transition_out(if_block28);
    			transition_out(if_block29);
    			transition_out(if_block30);
    			transition_out(if_block31);
    			transition_out(if_block32);
    			transition_out(if_block33);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(t1);
    			if (if_block2) if_block2.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (if_block3) if_block3.d(detaching);
    			if (detaching) detach_dev(t3);
    			if (if_block4) if_block4.d(detaching);
    			if (detaching) detach_dev(t4);
    			if (if_block5) if_block5.d(detaching);
    			if (detaching) detach_dev(t5);
    			if (if_block6) if_block6.d(detaching);
    			if (detaching) detach_dev(t6);
    			if (if_block7) if_block7.d(detaching);
    			if (detaching) detach_dev(t7);
    			if (if_block8) if_block8.d(detaching);
    			if (detaching) detach_dev(t8);
    			if (if_block9) if_block9.d(detaching);
    			if (detaching) detach_dev(t9);
    			if (if_block10) if_block10.d(detaching);
    			if (detaching) detach_dev(t10);
    			if (if_block11) if_block11.d(detaching);
    			if (detaching) detach_dev(t11);
    			if (if_block12) if_block12.d(detaching);
    			if (detaching) detach_dev(t12);
    			if (if_block13) if_block13.d(detaching);
    			if (detaching) detach_dev(t13);
    			if (if_block14) if_block14.d(detaching);
    			if (detaching) detach_dev(t14);
    			if (if_block15) if_block15.d(detaching);
    			if (detaching) detach_dev(t15);
    			if (if_block16) if_block16.d(detaching);
    			if (detaching) detach_dev(t16);
    			if (if_block17) if_block17.d(detaching);
    			if (detaching) detach_dev(t17);
    			if (if_block18) if_block18.d(detaching);
    			if (detaching) detach_dev(t18);
    			if (if_block19) if_block19.d(detaching);
    			if (detaching) detach_dev(t19);
    			if (if_block20) if_block20.d(detaching);
    			if (detaching) detach_dev(t20);
    			if (if_block21) if_block21.d(detaching);
    			if (detaching) detach_dev(t21);
    			if (if_block22) if_block22.d(detaching);
    			if (detaching) detach_dev(t22);
    			if (if_block23) if_block23.d(detaching);
    			if (detaching) detach_dev(t23);
    			if (if_block24) if_block24.d(detaching);
    			if (detaching) detach_dev(t24);
    			if (if_block25) if_block25.d(detaching);
    			if (detaching) detach_dev(t25);
    			if (if_block26) if_block26.d(detaching);
    			if (detaching) detach_dev(t26);
    			if (if_block27) if_block27.d(detaching);
    			if (detaching) detach_dev(t27);
    			if (if_block28) if_block28.d(detaching);
    			if (detaching) detach_dev(t28);
    			if (if_block29) if_block29.d(detaching);
    			if (detaching) detach_dev(t29);
    			if (if_block30) if_block30.d(detaching);
    			if (detaching) detach_dev(t30);
    			if (if_block31) if_block31.d(detaching);
    			if (detaching) detach_dev(t31);
    			if (if_block32) if_block32.d(detaching);
    			if (detaching) detach_dev(t32);
    			if (if_block33) if_block33.d(detaching);
    			if (detaching) detach_dev(t33);
    			if (if_block34) if_block34.d(detaching);
    			if (detaching) detach_dev(if_block34_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function Send_Data_To_Exius$1(params, templateKey, writeKey) {
    	// [{endpoint:Horizon_CSV,data:data,fname:fname}]
    	try {
    		var fd = new FormData();

    		for (const fileInfo of params) {
    			//console.log(fileInfo)
    			let URL = new Blob([fileInfo.data], { type: "text/csv;charset=utf-8;" });

    			fd.append(fileInfo.endpoint, URL, fileInfo.fname);
    		}

    		let res = await fetch("https://exius.nrdlab.org/Upload", {
    			headers: {
    				authorization: `templateKey:${templateKey};writeKey:${writeKey}`
    			},
    			method: "POST",
    			body: fd
    		});

    		return await res.json();
    	} catch(e) {
    		console.log(e);
    		throw e;
    	}
    }

    async function timer$1(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Instructions", slots, []);
    	let { toGame } = $$props;
    	let { i = 24 } = $$props;
    	let { breakTruth = { truth: false } } = $$props;
    	let { getData } = $$props;
    	let { writeKey } = $$props;
    	let { id } = $$props;
    	let animationCounter = 0;
    	let practiceData = undefined;
    	let warmUp = "";

    	function nextInstruction(n) {
    		console.log(typeof n == "number");
    		!(typeof n == "number") ? n = 1 : n = n;
    		console.log(n);
    		$$invalidate(0, i += n);
    	}

    	function previousInstruction(n) {
    		!(typeof n == "number") ? n = 1 : n = n;
    		console.log(n);
    		$$invalidate(0, i -= n);
    	}

    	function replayAnimation() {
    		console.log(animationCounter);
    		$$invalidate(6, animationCounter += 1);
    	}

    	function breakNav(value) {
    		$$invalidate(1, breakTruth.truth = value, breakTruth);
    		console.log(breakTruth.truth);
    	}

    	async function sendGameUpstream(data) {
    		getData(data);

    		console.log(await Send_Data_To_Exius$1(
    			[
    				{
    					endpoint: "TeacherCSV",
    					fname: `Subject_${id}.csv`,
    					data
    				}
    			],
    			"Teacher_Task",
    			writeKey
    		));

    		$$invalidate(0, i += 1);
    	}

    	async function iterate_i() {
    		await timer$1(3000);
    		$$invalidate(0, i += 1);
    	}

    	const writable_props = ["toGame", "i", "breakTruth", "getData", "writeKey", "id"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$2.warn(`<Instructions> was created with unknown prop '${key}'`);
    	});

    	function textarea_input_handler() {
    		warmUp = this.value;
    		$$invalidate(5, warmUp);
    	}

    	$$self.$$set = $$props => {
    		if ("toGame" in $$props) $$invalidate(2, toGame = $$props.toGame);
    		if ("i" in $$props) $$invalidate(0, i = $$props.i);
    		if ("breakTruth" in $$props) $$invalidate(1, breakTruth = $$props.breakTruth);
    		if ("getData" in $$props) $$invalidate(12, getData = $$props.getData);
    		if ("writeKey" in $$props) $$invalidate(3, writeKey = $$props.writeKey);
    		if ("id" in $$props) $$invalidate(4, id = $$props.id);
    	};

    	$$self.$capture_state = () => ({
    		NavigationButtons,
    		SingleChoice,
    		DoubleChoice,
    		FullScreen,
    		PracticeGame,
    		NavigationArrows,
    		ProgressBar,
    		MonthProgress,
    		Game,
    		toGame,
    		i,
    		breakTruth,
    		getData,
    		writeKey,
    		id,
    		animationCounter,
    		practiceData,
    		warmUp,
    		nextInstruction,
    		previousInstruction,
    		replayAnimation,
    		breakNav,
    		sendGameUpstream,
    		Send_Data_To_Exius: Send_Data_To_Exius$1,
    		timer: timer$1,
    		iterate_i
    	});

    	$$self.$inject_state = $$props => {
    		if ("toGame" in $$props) $$invalidate(2, toGame = $$props.toGame);
    		if ("i" in $$props) $$invalidate(0, i = $$props.i);
    		if ("breakTruth" in $$props) $$invalidate(1, breakTruth = $$props.breakTruth);
    		if ("getData" in $$props) $$invalidate(12, getData = $$props.getData);
    		if ("writeKey" in $$props) $$invalidate(3, writeKey = $$props.writeKey);
    		if ("id" in $$props) $$invalidate(4, id = $$props.id);
    		if ("animationCounter" in $$props) $$invalidate(6, animationCounter = $$props.animationCounter);
    		if ("practiceData" in $$props) practiceData = $$props.practiceData;
    		if ("warmUp" in $$props) $$invalidate(5, warmUp = $$props.warmUp);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*i, id, warmUp, writeKey*/ 57) {
    			{
    				if (i === 4) {
    					console.log("Sending Response...");

    					Send_Data_To_Exius$1(
    						[
    							{
    								endpoint: "TeacherResponse",
    								fname: `Response_${id}.txt`,
    								data: warmUp
    							}
    						],
    						"Teacher_Task",
    						writeKey
    					);
    				}
    			}
    		}

    		if ($$self.$$.dirty & /*i*/ 1) {
    			{
    				if (i === 25) {
    					iterate_i();
    				}
    			}
    		}
    	};

    	return [
    		i,
    		breakTruth,
    		toGame,
    		writeKey,
    		id,
    		warmUp,
    		animationCounter,
    		nextInstruction,
    		previousInstruction,
    		replayAnimation,
    		breakNav,
    		sendGameUpstream,
    		getData,
    		textarea_input_handler
    	];
    }

    class Instructions extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
    			toGame: 2,
    			i: 0,
    			breakTruth: 1,
    			getData: 12,
    			writeKey: 3,
    			id: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Instructions",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*toGame*/ ctx[2] === undefined && !("toGame" in props)) {
    			console_1$2.warn("<Instructions> was created without expected prop 'toGame'");
    		}

    		if (/*getData*/ ctx[12] === undefined && !("getData" in props)) {
    			console_1$2.warn("<Instructions> was created without expected prop 'getData'");
    		}

    		if (/*writeKey*/ ctx[3] === undefined && !("writeKey" in props)) {
    			console_1$2.warn("<Instructions> was created without expected prop 'writeKey'");
    		}

    		if (/*id*/ ctx[4] === undefined && !("id" in props)) {
    			console_1$2.warn("<Instructions> was created without expected prop 'id'");
    		}
    	}

    	get toGame() {
    		throw new Error("<Instructions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set toGame(value) {
    		throw new Error("<Instructions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get i() {
    		throw new Error("<Instructions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set i(value) {
    		throw new Error("<Instructions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get breakTruth() {
    		throw new Error("<Instructions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set breakTruth(value) {
    		throw new Error("<Instructions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getData() {
    		throw new Error("<Instructions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set getData(value) {
    		throw new Error("<Instructions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get writeKey() {
    		throw new Error("<Instructions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set writeKey(value) {
    		throw new Error("<Instructions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Instructions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Instructions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Redirect.svelte generated by Svelte v3.34.0 */

    function create_fragment$3(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Redirect", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Redirect> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Redirect extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Redirect",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/Password.svelte generated by Svelte v3.34.0 */

    const { Object: Object_1, console: console_1$1 } = globals;
    const file$1 = "src/Password.svelte";

    // (63:0) {#if preflightInitiated}
    function create_if_block_2$2(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Checking Credentials...";
    			add_location(h1, file$1, 63, 4, 2337);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$2.name,
    		type: "if",
    		source: "(63:0) {#if preflightInitiated}",
    		ctx
    	});

    	return block;
    }

    // (66:0) {#if preflightError}
    function create_if_block_1$2(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Error in preflight";
    			add_location(h1, file$1, 66, 4, 2401);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$2.name,
    		type: "if",
    		source: "(66:0) {#if preflightError}",
    		ctx
    	});

    	return block;
    }

    // (69:0) {#if Object.keys(preflightFileFail).length !== 0}
    function create_if_block$2(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "preflightFileFail";
    			add_location(h1, file$1, 69, 4, 2489);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(69:0) {#if Object.keys(preflightFileFail).length !== 0}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let t0;
    	let t1;
    	let show_if = Object.keys(/*preflightFileFail*/ ctx[1]).length !== 0;
    	let if_block2_anchor;
    	let if_block0 = /*preflightInitiated*/ ctx[0] && create_if_block_2$2(ctx);
    	let if_block1 = /*preflightError*/ ctx[2] && create_if_block_1$2(ctx);
    	let if_block2 = show_if && create_if_block$2(ctx);

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			if_block2_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block2) if_block2.m(target, anchor);
    			insert_dev(target, if_block2_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*preflightInitiated*/ ctx[0]) {
    				if (if_block0) ; else {
    					if_block0 = create_if_block_2$2(ctx);
    					if_block0.c();
    					if_block0.m(t0.parentNode, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*preflightError*/ ctx[2]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_1$2(ctx);
    					if_block1.c();
    					if_block1.m(t1.parentNode, t1);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (dirty & /*preflightFileFail*/ 2) show_if = Object.keys(/*preflightFileFail*/ ctx[1]).length !== 0;

    			if (show_if) {
    				if (if_block2) ; else {
    					if_block2 = create_if_block$2(ctx);
    					if_block2.c();
    					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(t1);
    			if (if_block2) if_block2.d(detaching);
    			if (detaching) detach_dev(if_block2_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function createWriteKey(templateKey, password, metaData) {
    	try {
    		let res = await fetch("https://exius.nrdlab.org/WriteKey/createWriteKey", {
    			headers: {
    				"Content-Type": "application/json",
    				authorization: `templateKey:${templateKey};password:${password}`
    			},
    			method: "POST",
    			body: JSON.stringify({ metaData })
    		});

    		return await res.json();
    	} catch(e) {
    		throw e;
    	}
    }

    async function Send_Data_To_Exius(params, templateKey, writeKey) {
    	// [{endpoint:Horizon_CSV,data:data,fname:fname}]
    	try {
    		var fd = new FormData();

    		for (const fileInfo of params) {
    			//console.log(fileInfo)
    			let URL = new Blob([fileInfo.data], { type: "text/csv;charset=utf-8;" });

    			fd.append(fileInfo.endpoint, URL, fileInfo.fname);
    		}

    		let res = await fetch("https://exius.nrdlab.org/Upload", {
    			headers: {
    				authorization: `templateKey:${templateKey};writeKey:${writeKey}`
    			},
    			method: "POST",
    			body: fd
    		});

    		return await res.json();
    	} catch(e) {
    		throw e;
    	}
    }

    function getQuery() {
    	return Object.fromEntries([...new URLSearchParams(window.location.search)]);
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Password", slots, []);
    	let { writeKeyPass } = $$props;
    	let preflightInitiated = false;
    	let preflightFileFail = {};
    	let preflightError = false;
    	let queryNotFound = false;

    	async function submitPreflight(id, password) {
    		try {
    			$$invalidate(0, preflightInitiated = true);
    			let writeKey = await createWriteKey("Teacher_Task", password, "test_data");

    			let dataPreflight = await Send_Data_To_Exius(
    				[
    					{
    						endpoint: "TeacherCSV",
    						fname: `Subject_${id}.csv`,
    						data: ""
    					},
    					{
    						endpoint: "TeacherResponse",
    						fname: `Response_${id}.txt`,
    						data: ""
    					}
    				],
    				"Teacher_Task",
    				writeKey.writeKey
    			);

    			//console.log(writeKey.writeKey)
    			console.log(dataPreflight);

    			if (Object.keys(dataPreflight.failedFiles).length == 0) {
    				writeKeyPass(writeKey.writeKey, id);
    			} else {
    				$$invalidate(1, preflightFileFail = dataPreflight);
    			}
    		} catch(e) {
    			console.log(e);
    			$$invalidate(2, preflightError = true);
    		}
    	}

    	let queryData = getQuery();
    	submitPreflight(queryData.id ? queryData.id : 1234, queryData.pwd);
    	const writable_props = ["writeKeyPass"];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Password> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("writeKeyPass" in $$props) $$invalidate(3, writeKeyPass = $$props.writeKeyPass);
    	};

    	$$self.$capture_state = () => ({
    		writeKeyPass,
    		preflightInitiated,
    		preflightFileFail,
    		preflightError,
    		queryNotFound,
    		createWriteKey,
    		Send_Data_To_Exius,
    		submitPreflight,
    		getQuery,
    		queryData
    	});

    	$$self.$inject_state = $$props => {
    		if ("writeKeyPass" in $$props) $$invalidate(3, writeKeyPass = $$props.writeKeyPass);
    		if ("preflightInitiated" in $$props) $$invalidate(0, preflightInitiated = $$props.preflightInitiated);
    		if ("preflightFileFail" in $$props) $$invalidate(1, preflightFileFail = $$props.preflightFileFail);
    		if ("preflightError" in $$props) $$invalidate(2, preflightError = $$props.preflightError);
    		if ("queryNotFound" in $$props) queryNotFound = $$props.queryNotFound;
    		if ("queryData" in $$props) queryData = $$props.queryData;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [preflightInitiated, preflightFileFail, preflightError, writeKeyPass];
    }

    class Password extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { writeKeyPass: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Password",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*writeKeyPass*/ ctx[3] === undefined && !("writeKeyPass" in props)) {
    			console_1$1.warn("<Password> was created without expected prop 'writeKeyPass'");
    		}
    	}

    	get writeKeyPass() {
    		throw new Error("<Password>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set writeKeyPass(value) {
    		throw new Error("<Password>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/BlockEnd.svelte generated by Svelte v3.34.0 */

    const file = "src/BlockEnd.svelte";

    // (85:0) {#if transitionOffBlank}
    function create_if_block$1(ctx) {
    	let h10;
    	let t1;
    	let div3;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let t5;
    	let t6;
    	let button;
    	let h11;
    	let mounted;
    	let dispose;
    	let if_block0 = !/*firstBlock*/ ctx[2] && create_if_block_9(ctx);

    	function select_block_type(ctx, dirty) {
    		if (/*firstBlock*/ ctx[2]) return create_if_block_1$1;
    		if (/*lastBlock*/ ctx[3]) return create_if_block_2$1;
    		return create_else_block$1;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			h10 = element("h1");
    			h10.textContent = "Total Student Understanding This Month";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			t2 = space();
    			div1 = element("div");
    			t3 = space();
    			div2 = element("div");
    			t4 = space();
    			if (if_block0) if_block0.c();
    			t5 = space();
    			if_block1.c();
    			t6 = space();
    			button = element("button");
    			h11 = element("h1");
    			h11.textContent = "Start Next Month";
    			attr_dev(h10, "class", "classUnderstanding svelte-1pk8o6r");
    			add_location(h10, file, 85, 4, 2073);
    			attr_dev(div0, "class", "progressBar svelte-1pk8o6r");
    			set_style(div0, "left", "max(-.5vw,-.5vh)");
    			add_location(div0, file, 87, 8, 2248);
    			attr_dev(div1, "class", "progressGreen svelte-1pk8o6r");
    			set_style(div1, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScore*/ ctx[0] + ")");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file, 88, 8, 2318);
    			attr_dev(div2, "class", "progressRed svelte-1pk8o6r");
    			set_style(div2, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScore*/ ctx[7] + ")");
    			set_style(div2, "left", "min(60vh,60vw)");
    			set_style(div2, "position", "absolute");
    			add_location(div2, file, 89, 8, 2448);
    			set_style(div3, "left", "calc(50vw - min(30vh,30vw))");
    			set_style(div3, "top", "min(10vh,10vw)");
    			set_style(div3, "position", "absolute");
    			add_location(div3, file, 86, 4, 2152);
    			add_location(h11, file, 146, 8, 5700);
    			attr_dev(button, "class", "fancyButton svelte-1pk8o6r");
    			add_location(button, file, 145, 4, 5641);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h10, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			insert_dev(target, t4, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t5, anchor);
    			if_block1.m(target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, button, anchor);
    			append_dev(button, h11);

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*nextYear*/ ctx[5]())) /*nextYear*/ ctx[5]().apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty & /*numTrials, greenScore*/ 3) {
    				set_style(div1, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScore*/ ctx[0] + ")");
    			}

    			if (dirty & /*numTrials*/ 2) {
    				set_style(div2, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScore*/ ctx[7] + ")");
    			}

    			if (!/*firstBlock*/ ctx[2]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_9(ctx);
    					if_block0.c();
    					if_block0.m(t5.parentNode, t5);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
    				if_block1.p(ctx, dirty);
    			} else {
    				if_block1.d(1);
    				if_block1 = current_block_type(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(t6.parentNode, t6);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h10);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t4);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t5);
    			if_block1.d(detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(85:0) {#if transitionOffBlank}",
    		ctx
    	});

    	return block;
    }

    // (92:4) {#if !firstBlock}
    function create_if_block_9(ctx) {
    	let h1;
    	let t1;
    	let div3;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let div2;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Total Student Understanding Last Month";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			t2 = space();
    			div1 = element("div");
    			t3 = space();
    			div2 = element("div");
    			attr_dev(h1, "class", "classUnderstanding svelte-1pk8o6r");
    			set_style(h1, "top", "min(15vh,15vw)");
    			add_location(h1, file, 92, 8, 2628);
    			attr_dev(div0, "class", "progressBar svelte-1pk8o6r");
    			set_style(div0, "left", "max(-.5vw,-.5vh)");
    			add_location(div0, file, 94, 12, 2838);
    			attr_dev(div1, "class", "progressGreen svelte-1pk8o6r");
    			set_style(div1, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScoreLast*/ ctx[4] + ")");
    			set_style(div1, "position", "absolute");
    			add_location(div1, file, 95, 12, 2912);
    			attr_dev(div2, "class", "progressRed svelte-1pk8o6r");
    			set_style(div2, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScoreLast*/ ctx[8] + ")");
    			set_style(div2, "left", "min(60vh,60vw)");
    			set_style(div2, "position", "absolute");
    			add_location(div2, file, 96, 12, 3050);
    			set_style(div3, "left", "calc(50vw - min(30vh,30vw))");
    			set_style(div3, "top", "min(20vh,20vw)");
    			set_style(div3, "position", "absolute");
    			add_location(div3, file, 93, 8, 2738);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div3, t2);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*numTrials, greenScoreLast*/ 18) {
    				set_style(div1, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*greenScoreLast*/ ctx[4] + ")");
    			}

    			if (dirty & /*numTrials*/ 2) {
    				set_style(div2, "width", "calc((min(60vh,60vw) / " + /*numTrials*/ ctx[1] * 20 + ") * " + /*redScoreLast*/ ctx[8] + ")");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9.name,
    		type: "if",
    		source: "(92:4) {#if !firstBlock}",
    		ctx
    	});

    	return block;
    }

    // (126:4) {:else}
    function create_else_block$1(ctx) {
    	let div0;
    	let h1;
    	let t0;
    	let t1_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t1;
    	let t2;
    	let t3_value = Math.round(100 * /*greenScoreLast*/ ctx[4] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t3;
    	let t4;
    	let t5;
    	let div2;
    	let div1;
    	let t6;
    	let t7;
    	let if_block0 = /*greenScore*/ ctx[0] > /*greenScoreLast*/ ctx[4] && create_if_block_8(ctx);
    	let if_block1 = /*greenScore*/ ctx[0] < /*greenScoreLast*/ ctx[4] && create_if_block_7(ctx);
    	let if_block2 = /*greenScore*/ ctx[0] == /*greenScoreLast*/ ctx[4] && create_if_block_6(ctx);

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			h1 = element("h1");
    			t0 = text("Your classroom's understanding at the end of this month was ");
    			t1 = text(t1_value);
    			t2 = text("%, and\n            your classroom's understanding last month was ");
    			t3 = text(t3_value);
    			t4 = text("%");
    			t5 = space();
    			div2 = element("div");
    			div1 = element("div");
    			if (if_block0) if_block0.c();
    			t6 = space();
    			if (if_block1) if_block1.c();
    			t7 = space();
    			if (if_block2) if_block2.c();
    			add_location(h1, file, 127, 12, 4669);
    			attr_dev(div0, "class", "description svelte-1pk8o6r");
    			add_location(div0, file, 126, 8, 4631);
    			attr_dev(div1, "class", "clearfix performanceBox svelte-1pk8o6r");
    			add_location(div1, file, 132, 12, 4952);
    			add_location(div2, file, 131, 8, 4933);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, h1);
    			append_dev(h1, t0);
    			append_dev(h1, t1);
    			append_dev(h1, t2);
    			append_dev(h1, t3);
    			append_dev(h1, t4);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			if (if_block0) if_block0.m(div1, null);
    			append_dev(div1, t6);
    			if (if_block1) if_block1.m(div1, null);
    			append_dev(div1, t7);
    			if (if_block2) if_block2.m(div1, null);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*greenScore, numTrials*/ 3 && t1_value !== (t1_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*greenScoreLast, numTrials*/ 18 && t3_value !== (t3_value = Math.round(100 * /*greenScoreLast*/ ctx[4] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t3, t3_value);

    			if (/*greenScore*/ ctx[0] > /*greenScoreLast*/ ctx[4]) {
    				if (if_block0) ; else {
    					if_block0 = create_if_block_8(ctx);
    					if_block0.c();
    					if_block0.m(div1, t6);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*greenScore*/ ctx[0] < /*greenScoreLast*/ ctx[4]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_7(ctx);
    					if_block1.c();
    					if_block1.m(div1, t7);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*greenScore*/ ctx[0] == /*greenScoreLast*/ ctx[4]) {
    				if (if_block2) ; else {
    					if_block2 = create_if_block_6(ctx);
    					if_block2.c();
    					if_block2.m(div1, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div2);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(126:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (107:24) 
    function create_if_block_2$1(ctx) {
    	let div0;
    	let h1;
    	let t0;
    	let t1_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t1;
    	let t2;
    	let t3_value = Math.round(100 * /*greenScoreLast*/ ctx[4] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t3;
    	let t4;
    	let t5;
    	let div2;
    	let div1;
    	let t6;
    	let t7;
    	let if_block0 = /*greenScore*/ ctx[0] > /*greenScoreLast*/ ctx[4] && create_if_block_5(ctx);
    	let if_block1 = /*greenScore*/ ctx[0] < /*greenScoreLast*/ ctx[4] && create_if_block_4$1(ctx);
    	let if_block2 = /*greenScore*/ ctx[0] == /*greenScoreLast*/ ctx[4] && create_if_block_3$1(ctx);

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			h1 = element("h1");
    			t0 = text("Your classroom's understanding at the end of this month was ");
    			t1 = text(t1_value);
    			t2 = text("%, and\n            your classroom's understanding last month was ");
    			t3 = text(t3_value);
    			t4 = text("%");
    			t5 = space();
    			div2 = element("div");
    			div1 = element("div");
    			if (if_block0) if_block0.c();
    			t6 = space();
    			if (if_block1) if_block1.c();
    			t7 = space();
    			if (if_block2) if_block2.c();
    			add_location(h1, file, 108, 12, 3644);
    			attr_dev(div0, "class", "description svelte-1pk8o6r");
    			add_location(div0, file, 107, 8, 3606);
    			attr_dev(div1, "class", "clearfix performanceBox svelte-1pk8o6r");
    			add_location(div1, file, 113, 12, 3927);
    			add_location(div2, file, 112, 8, 3908);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, h1);
    			append_dev(h1, t0);
    			append_dev(h1, t1);
    			append_dev(h1, t2);
    			append_dev(h1, t3);
    			append_dev(h1, t4);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			if (if_block0) if_block0.m(div1, null);
    			append_dev(div1, t6);
    			if (if_block1) if_block1.m(div1, null);
    			append_dev(div1, t7);
    			if (if_block2) if_block2.m(div1, null);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*greenScore, numTrials*/ 3 && t1_value !== (t1_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*greenScoreLast, numTrials*/ 18 && t3_value !== (t3_value = Math.round(100 * /*greenScoreLast*/ ctx[4] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t3, t3_value);

    			if (/*greenScore*/ ctx[0] > /*greenScoreLast*/ ctx[4]) {
    				if (if_block0) ; else {
    					if_block0 = create_if_block_5(ctx);
    					if_block0.c();
    					if_block0.m(div1, t6);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*greenScore*/ ctx[0] < /*greenScoreLast*/ ctx[4]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_4$1(ctx);
    					if_block1.c();
    					if_block1.m(div1, t7);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*greenScore*/ ctx[0] == /*greenScoreLast*/ ctx[4]) {
    				if (if_block2) ; else {
    					if_block2 = create_if_block_3$1(ctx);
    					if_block2.c();
    					if_block2.m(div1, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div2);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(107:24) ",
    		ctx
    	});

    	return block;
    }

    // (100:4) {#if firstBlock}
    function create_if_block_1$1(ctx) {
    	let div0;
    	let h10;
    	let t0;
    	let t1_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "";
    	let t1;
    	let t2;
    	let t3;
    	let div1;
    	let h11;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			h10 = element("h1");
    			t0 = text("Your classroom's understanding at the end of this semester was ");
    			t1 = text(t1_value);
    			t2 = text("%");
    			t3 = space();
    			div1 = element("div");
    			h11 = element("h1");
    			h11.textContent = "Good job on your first month! Let's try and do even better next month!";
    			add_location(h10, file, 101, 12, 3285);
    			attr_dev(div0, "class", "description svelte-1pk8o6r");
    			add_location(div0, file, 100, 8, 3247);
    			add_location(h11, file, 104, 12, 3477);
    			attr_dev(div1, "class", "clearfix performanceBox svelte-1pk8o6r");
    			add_location(div1, file, 103, 8, 3426);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, h10);
    			append_dev(h10, t0);
    			append_dev(h10, t1);
    			append_dev(h10, t2);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h11);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*greenScore, numTrials*/ 3 && t1_value !== (t1_value = Math.round(100 * /*greenScore*/ ctx[0] / (/*numTrials*/ ctx[1] * 20)) + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(100:4) {#if firstBlock}",
    		ctx
    	});

    	return block;
    }

    // (134:12) {#if greenScore>greenScoreLast}
    function create_if_block_8(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Great Job! You improved upon your classroom's understanding from the last month! Let's try and do even better in the next month!";
    			add_location(h1, file, 134, 16, 5051);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8.name,
    		type: "if",
    		source: "(134:12) {#if greenScore>greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (137:12) {#if greenScore<greenScoreLast}
    function create_if_block_7(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Oh no! It looks like your classroom's understanding dropped from the last month, let's try and beat this score next time!";
    			add_location(h1, file, 137, 16, 5267);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7.name,
    		type: "if",
    		source: "(137:12) {#if greenScore<greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (140:12) {#if greenScore == greenScoreLast}
    function create_if_block_6(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Looks like you tied your last score! Let's try and beat that score in the next month!";
    			add_location(h1, file, 140, 20, 5483);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6.name,
    		type: "if",
    		source: "(140:12) {#if greenScore == greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (115:12) {#if greenScore>greenScoreLast}
    function create_if_block_5(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Great Job! You improved upon your classroom's understanding from the last month! Click the button below to finish the experiment!";
    			add_location(h1, file, 115, 16, 4026);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(115:12) {#if greenScore>greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (118:12) {#if greenScore<greenScoreLast}
    function create_if_block_4$1(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Oh no! It looks like your classroom's understanding dropped from the last month! Click the button below to finish the experiment!";
    			add_location(h1, file, 118, 16, 4243);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$1.name,
    		type: "if",
    		source: "(118:12) {#if greenScore<greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    // (121:12) {#if greenScore == greenScoreLast}
    function create_if_block_3$1(ctx) {
    	let h1;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Looks like you tied your last score! Click the button below to finish the experiment!";
    			add_location(h1, file, 121, 20, 4467);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$1.name,
    		type: "if",
    		source: "(121:12) {#if greenScore == greenScoreLast}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let if_block_anchor;
    	let if_block = /*transitionOffBlank*/ ctx[6] && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*transitionOffBlank*/ ctx[6]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function timer(time) {
    	return await new Promise(r => setTimeout(r, time));
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("BlockEnd", slots, []);
    	let { greenScore = 10 } = $$props;
    	let { numTrials = 30 } = $$props;
    	let { firstBlock = false } = $$props;
    	let { lastBlock = false } = $$props;
    	let { greenScoreLast = 10 } = $$props;
    	let { nextYear } = $$props;
    	const redScore = numTrials * 20 - greenScore;
    	const redScoreLast = numTrials * 20 - greenScoreLast;
    	let transitionOffBlank = false;

    	async function blankToOn() {
    		await timer(500);
    		$$invalidate(6, transitionOffBlank = true);
    	}

    	blankToOn();

    	const writable_props = [
    		"greenScore",
    		"numTrials",
    		"firstBlock",
    		"lastBlock",
    		"greenScoreLast",
    		"nextYear"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BlockEnd> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("greenScore" in $$props) $$invalidate(0, greenScore = $$props.greenScore);
    		if ("numTrials" in $$props) $$invalidate(1, numTrials = $$props.numTrials);
    		if ("firstBlock" in $$props) $$invalidate(2, firstBlock = $$props.firstBlock);
    		if ("lastBlock" in $$props) $$invalidate(3, lastBlock = $$props.lastBlock);
    		if ("greenScoreLast" in $$props) $$invalidate(4, greenScoreLast = $$props.greenScoreLast);
    		if ("nextYear" in $$props) $$invalidate(5, nextYear = $$props.nextYear);
    	};

    	$$self.$capture_state = () => ({
    		greenScore,
    		numTrials,
    		firstBlock,
    		lastBlock,
    		greenScoreLast,
    		nextYear,
    		redScore,
    		redScoreLast,
    		transitionOffBlank,
    		timer,
    		blankToOn
    	});

    	$$self.$inject_state = $$props => {
    		if ("greenScore" in $$props) $$invalidate(0, greenScore = $$props.greenScore);
    		if ("numTrials" in $$props) $$invalidate(1, numTrials = $$props.numTrials);
    		if ("firstBlock" in $$props) $$invalidate(2, firstBlock = $$props.firstBlock);
    		if ("lastBlock" in $$props) $$invalidate(3, lastBlock = $$props.lastBlock);
    		if ("greenScoreLast" in $$props) $$invalidate(4, greenScoreLast = $$props.greenScoreLast);
    		if ("nextYear" in $$props) $$invalidate(5, nextYear = $$props.nextYear);
    		if ("transitionOffBlank" in $$props) $$invalidate(6, transitionOffBlank = $$props.transitionOffBlank);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		greenScore,
    		numTrials,
    		firstBlock,
    		lastBlock,
    		greenScoreLast,
    		nextYear,
    		transitionOffBlank,
    		redScore,
    		redScoreLast
    	];
    }

    class BlockEnd extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			greenScore: 0,
    			numTrials: 1,
    			firstBlock: 2,
    			lastBlock: 3,
    			greenScoreLast: 4,
    			nextYear: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BlockEnd",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*nextYear*/ ctx[5] === undefined && !("nextYear" in props)) {
    			console.warn("<BlockEnd> was created without expected prop 'nextYear'");
    		}
    	}

    	get greenScore() {
    		throw new Error("<BlockEnd>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greenScore(value) {
    		throw new Error("<BlockEnd>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get numTrials() {
    		throw new Error("<BlockEnd>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set numTrials(value) {
    		throw new Error("<BlockEnd>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get firstBlock() {
    		throw new Error("<BlockEnd>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set firstBlock(value) {
    		throw new Error("<BlockEnd>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get lastBlock() {
    		throw new Error("<BlockEnd>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set lastBlock(value) {
    		throw new Error("<BlockEnd>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get greenScoreLast() {
    		throw new Error("<BlockEnd>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greenScoreLast(value) {
    		throw new Error("<BlockEnd>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get nextYear() {
    		throw new Error("<BlockEnd>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set nextYear(value) {
    		throw new Error("<BlockEnd>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Control.svelte generated by Svelte v3.34.0 */

    const { console: console_1 } = globals;

    // (44:0) {#if !passedKey}
    function create_if_block_4(ctx) {
    	let password;
    	let current;

    	password = new Password({
    			props: { writeKeyPass: /*getWriteKey*/ ctx[13] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(password.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(password, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(password.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(password.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(password, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(44:0) {#if !passedKey}",
    		ctx
    	});

    	return block;
    }

    // (47:0) {#if passedKey && instructionsDone===false}
    function create_if_block_3(ctx) {
    	let instructions;
    	let current;

    	instructions = new Instructions({
    			props: {
    				toGame: /*toGame*/ ctx[10],
    				getData: /*getData*/ ctx[12],
    				writeKey: /*writeKey*/ ctx[3],
    				id: /*id*/ ctx[4]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(instructions.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(instructions, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const instructions_changes = {};
    			if (dirty & /*writeKey*/ 8) instructions_changes.writeKey = /*writeKey*/ ctx[3];
    			if (dirty & /*id*/ 16) instructions_changes.id = /*id*/ ctx[4];
    			instructions.$set(instructions_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(instructions.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(instructions.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(instructions, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(47:0) {#if passedKey && instructionsDone===false}",
    		ctx
    	});

    	return block;
    }

    // (50:0) {#if (instructionsDone && !gameEnd)}
    function create_if_block_1(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block_2, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*yearEnd*/ ctx[6]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(50:0) {#if (instructionsDone && !gameEnd)}",
    		ctx
    	});

    	return block;
    }

    // (53:4) {:else}
    function create_else_block(ctx) {
    	let game;
    	let current;

    	game = new Game({
    			props: {
    				toNext: /*toNext*/ ctx[11],
    				gameString: /*gameData*/ ctx[5],
    				writeKey: /*writeKey*/ ctx[3],
    				id: /*id*/ ctx[4],
    				totalBlocks: /*years*/ ctx[8],
    				block: /*yearCounter*/ ctx[7]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(game.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(game, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const game_changes = {};
    			if (dirty & /*gameData*/ 32) game_changes.gameString = /*gameData*/ ctx[5];
    			if (dirty & /*writeKey*/ 8) game_changes.writeKey = /*writeKey*/ ctx[3];
    			if (dirty & /*id*/ 16) game_changes.id = /*id*/ ctx[4];
    			if (dirty & /*yearCounter*/ 128) game_changes.block = /*yearCounter*/ ctx[7];
    			game.$set(game_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(game.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(game.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(game, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(53:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (51:4) {#if yearEnd}
    function create_if_block_2(ctx) {
    	let blockend;
    	let current;

    	blockend = new BlockEnd({
    			props: {
    				greenScore: /*greenArray*/ ctx[9][/*greenArray*/ ctx[9].length - 1],
    				greenScoreLast: /*greenArray*/ ctx[9].length > 1
    				? /*greenArray*/ ctx[9][/*greenArray*/ ctx[9].length - 2]
    				: null,
    				firstBlock: /*greenArray*/ ctx[9].length > 1 ? false : true,
    				nextYear: /*nextYear*/ ctx[14],
    				lastBlock: /*greenArray*/ ctx[9].length === /*years*/ ctx[8]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(blockend.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(blockend, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(blockend.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(blockend.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(blockend, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(51:4) {#if yearEnd}",
    		ctx
    	});

    	return block;
    }

    // (59:0) {#if gameEnd}
    function create_if_block(ctx) {
    	let redirect;
    	let current;
    	redirect = new Redirect({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(redirect.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(redirect, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(redirect.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(redirect.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(redirect, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(59:0) {#if gameEnd}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let t0;
    	let t1;
    	let t2;
    	let if_block3_anchor;
    	let current;
    	let if_block0 = !/*passedKey*/ ctx[2] && create_if_block_4(ctx);
    	let if_block1 = /*passedKey*/ ctx[2] && /*instructionsDone*/ ctx[0] === false && create_if_block_3(ctx);
    	let if_block2 = /*instructionsDone*/ ctx[0] && !/*gameEnd*/ ctx[1] && create_if_block_1(ctx);
    	let if_block3 = /*gameEnd*/ ctx[1] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			t2 = space();
    			if (if_block3) if_block3.c();
    			if_block3_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, t1, anchor);
    			if (if_block2) if_block2.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			if (if_block3) if_block3.m(target, anchor);
    			insert_dev(target, if_block3_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!/*passedKey*/ ctx[2]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);

    					if (dirty & /*passedKey*/ 4) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_4(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t0.parentNode, t0);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (/*passedKey*/ ctx[2] && /*instructionsDone*/ ctx[0] === false) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*passedKey, instructionsDone*/ 5) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block_3(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(t1.parentNode, t1);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			if (/*instructionsDone*/ ctx[0] && !/*gameEnd*/ ctx[1]) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);

    					if (dirty & /*instructionsDone, gameEnd*/ 3) {
    						transition_in(if_block2, 1);
    					}
    				} else {
    					if_block2 = create_if_block_1(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(t2.parentNode, t2);
    				}
    			} else if (if_block2) {
    				group_outros();

    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});

    				check_outros();
    			}

    			if (/*gameEnd*/ ctx[1]) {
    				if (if_block3) {
    					if (dirty & /*gameEnd*/ 2) {
    						transition_in(if_block3, 1);
    					}
    				} else {
    					if_block3 = create_if_block(ctx);
    					if_block3.c();
    					transition_in(if_block3, 1);
    					if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
    				}
    			} else if (if_block3) {
    				group_outros();

    				transition_out(if_block3, 1, 1, () => {
    					if_block3 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(if_block2);
    			transition_in(if_block3);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(if_block2);
    			transition_out(if_block3);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(t1);
    			if (if_block2) if_block2.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (if_block3) if_block3.d(detaching);
    			if (detaching) detach_dev(if_block3_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Control", slots, []);
    	let instructionsDone = false;
    	let gameEnd = false;
    	let passedKey = false;
    	let writeKey = undefined;
    	let id = undefined;
    	let gameData = "";
    	let years = 6;
    	let yearEnd = false;
    	let greenArray = [];
    	let yearCounter = 1;

    	function toGame() {
    		$$invalidate(0, instructionsDone = true);
    	}

    	function toNext(data, greens) {
    		if (yearCounter < years) {
    			$$invalidate(6, yearEnd = true);
    			$$invalidate(5, gameData = data);
    			greenArray.push(greens);
    			$$invalidate(7, yearCounter += 1);
    		} else {
    			$$invalidate(1, gameEnd = true);
    		}
    	}

    	function getData(data) {
    		$$invalidate(5, gameData = data);
    		console.log(data);
    	}

    	function getWriteKey(writeKey_d, id_d) {
    		$$invalidate(2, passedKey = true);
    		$$invalidate(4, id = id_d);
    		$$invalidate(3, writeKey = writeKey_d);
    	}

    	function nextYear() {
    		$$invalidate(6, yearEnd = false);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Control> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Game,
    		Instructions,
    		Redirect,
    		Password,
    		BlockEnd,
    		instructionsDone,
    		gameEnd,
    		passedKey,
    		writeKey,
    		id,
    		gameData,
    		years,
    		yearEnd,
    		greenArray,
    		yearCounter,
    		toGame,
    		toNext,
    		getData,
    		getWriteKey,
    		nextYear
    	});

    	$$self.$inject_state = $$props => {
    		if ("instructionsDone" in $$props) $$invalidate(0, instructionsDone = $$props.instructionsDone);
    		if ("gameEnd" in $$props) $$invalidate(1, gameEnd = $$props.gameEnd);
    		if ("passedKey" in $$props) $$invalidate(2, passedKey = $$props.passedKey);
    		if ("writeKey" in $$props) $$invalidate(3, writeKey = $$props.writeKey);
    		if ("id" in $$props) $$invalidate(4, id = $$props.id);
    		if ("gameData" in $$props) $$invalidate(5, gameData = $$props.gameData);
    		if ("years" in $$props) $$invalidate(8, years = $$props.years);
    		if ("yearEnd" in $$props) $$invalidate(6, yearEnd = $$props.yearEnd);
    		if ("greenArray" in $$props) $$invalidate(9, greenArray = $$props.greenArray);
    		if ("yearCounter" in $$props) $$invalidate(7, yearCounter = $$props.yearCounter);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		instructionsDone,
    		gameEnd,
    		passedKey,
    		writeKey,
    		id,
    		gameData,
    		yearEnd,
    		yearCounter,
    		years,
    		greenArray,
    		toGame,
    		toNext,
    		getData,
    		getWriteKey,
    		nextYear
    	];
    }

    class Control extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Control",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new Control({
    	target: document.body,
    	props: {
    	}
    });

    return app;

}());
>>>>>>> 7322cee7b994e96b30bb24dc262db972f38960b6
//# sourceMappingURL=bundle.js.map
