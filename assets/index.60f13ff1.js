var j=Object.defineProperty;var w=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>(w(e,typeof t!="symbol"?t+"":t,r),r);import{j as p,R as O,a as v}from"./vendor.1eb74574.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};k();const l=p.exports.jsx,a=p.exports.jsxs,S=e=>l("div",{className:"layout",children:e.children});function C({color:e}){return l("div",{style:{"--stop-color":e,height:"10em"},className:"svg-demo",children:a("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[a("defs",{children:[a("linearGradient",{id:"geek",children:[l("stop",{offset:"0%",stopColor:"currentColor"}),l("stop",{offset:"50%",stopColor:"currentColor",stopOpacity:"50%"})]}),a("linearGradient",{id:"geek1",children:[l("stop",{offset:"50%",stopColor:"currentColor",stopOpacity:"50%"}),l("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]}),l("circle",{id:"semi-circle",cx:"50",cy:"50",r:"40",strokeWidth:20,strokeDasharray:`${Math.PI*40} 1000`,fill:"none"})]}),l("use",{href:"#semi-circle",stroke:"url('#geek')"}),l("use",{href:"#semi-circle",stroke:"url('#geek1')",transform:"rotate(180)",style:{transformOrigin:"center"}})]})})}function c(e){return Object.prototype.toString.call(e).match(/\[object (\S*)\]/)[1]}const x=(...e)=>{let t=[];function r(o){if(c(o)==="Object"){const n=o;Object.keys(n).forEach(i=>{n[i]&&r(i)})}o&&["String","Number"].includes(c(o))&&t.push(o)}return e.flat(1/0).forEach(o=>{r(o)}),t.join(" ")};function m(e,t=1){const r=[],s=(o,n)=>{c(o)==="Array"&&o.forEach(i=>{c(i)==="Array"&&n>0?s(i,n-1):r.push(i)})};return s(e,t),r}function f(e,t=new WeakMap){if(!A(e))return e;if(t.has(e))return t.get(e);let r=["Object","Arguments","Set","Map","Array"].includes(c(e))?new e.constructor:e;return t.set(e,r),["Object","Arguments"].includes(c(e))&&m([Object.keys(e),Object.getOwnPropertySymbols(e)]).forEach(s=>{r[s]=f(e[s])}),c(e)==="Set"&&e.forEach(s=>{r.add(f(s,t))}),c(e)==="Map"&&e.forEach((s,o)=>{r.set(o,f(s,t))}),c(e)==="Array"&&e.forEach(s=>{r.push(f(s,t))}),c(e)==="Symbol"&&console.log(22222222,e),r}function A(e){const t=typeof e;return e!==null&&(t==="object"||t==="function")}class E{constructor(t){u(this,"_callback");t(this._resolve.bind(this),this._reject),this._callback=void 0}_resolve(t){console.log(this,"_resolve"),this._callback&&this._callback(t)}_reject(){console.log(this,"_reject")}then(t){console.log(111,t),this._callback=t}}const y=async()=>{};Promise.all(new Array(100).fill(1).map(async()=>{const e=performance.now();return{result:await y(),time:(performance.now()-e)/1e3}})).then(e=>{e.forEach(t=>{if(!["completed","error","timeout"].includes(t.result))throw new Error(`tests failed! shoud get "completed" | "error" | "timeout", but got ${JSON.stringify(t)}`)}),console.info("Congratulations! tests passed",e)});y().then(e=>{console.log("promiseRecursive",e)});const g=m([[1,2,3,,,[6666,7777]],[2],3]);console.log("\u7ED3\u679C:",g);const h=Symbol("symbol"),d={[h]:"symbol",symbol:Symbol("symbol"),undefined:void 0,number:1,string:"string",function:()=>console.log(1),map:new Map([["key","value"]]),set:new Set("1"),obj:{a:"b",b:{[h]:"symbol",undefined:void 0,number:1,string:"string",function:()=>console.log(1)}},arr:["1","2","3"]},b=f(d);console.log("\u7ED3\u679C:",b,d.symbol==b.symbol);const _={};Object.assign(_,d);new E((e,t)=>{console.log(Date.now()),setTimeout(()=>{console.log(Date.now()),e("willem")},2e3)}).then(e=>{console.log(e)});O.render(l(v.StrictMode,{children:a(S,{children:[a("div",{children:["new flatArr : ",JSON.stringify(g)]}),l("div",{children:x(d)}),l(C,{color:"yellow"})]})}),document.getElementById("root"));
