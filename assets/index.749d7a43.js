var j=Object.defineProperty;var h=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var u=(e,t,n)=>(h(e,typeof t!="symbol"?t+"":t,n),n);import{j as d,R as O,a as v}from"./vendor.1eb74574.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};E();const f=d.exports.jsx,b=d.exports.jsxs,S=e=>f("div",{className:"layout",children:e.children});function i(e){return Object.prototype.toString.call(e).match(/\[object (\S*)\]/)[1]}function y(e,t=1){const n=[];console.log("\u5165\u53E3\u6570\u7EC4: ",e);const l=(o,r)=>{i(o)==="Array"&&o.forEach(s=>{i(s)==="Array"&&r>0?l(s,r-1):n.push(s)})};return l(e,t),n}function c(e,t=new WeakMap){if(!A(e))return e;if(t.has(e))return t.get(e);let n=["Object","Arguments","Set","Map","Array"].includes(i(e))?new e.constructor:e;return t.set(e,n),["Object","Arguments"].includes(i(e))&&y([Object.keys(e),Object.getOwnPropertySymbols(e)]).forEach(l=>{n[l]=c(e[l])}),i(e)==="Set"&&e.forEach(l=>{n.add(c(l,t))}),i(e)==="Map"&&e.forEach((l,o)=>{n.set(o,c(l,t))}),i(e)==="Array"&&e.forEach(l=>{n.push(c(l,t))}),i(e)==="Symbol"&&console.log(22222222,e),n}function A(e){const t=typeof e;return e!==null&&(t==="object"||t==="function")}const w=(...e)=>{let t=[];function n(o){if(i(o)==="Object"){const r=o;Object.keys(r).forEach(s=>{r[s]&&n(s)})}o&&["String","Number"].includes(i(o))&&t.push(o)}return e.flat(1/0).forEach(o=>{n(o)}),t.join(" ")};class _{constructor(t){u(this,"_callback");t(this._resolve.bind(this),this._reject),this._callback=void 0}_resolve(t){console.log(this,"_resolve"),this._callback&&this._callback(t)}_reject(){console.log(this,"_reject")}then(t){console.log(111,t),this._callback=t}}const g=y([[1,2,3,,,[6666,7777]],[2],3]);console.log("\u7ED3\u679C:",g);const m=Symbol("symbol"),a={[m]:"symbol",symbol:Symbol("symbol"),undefined:void 0,number:1,string:"string",function:()=>console.log(1),map:new Map([["key","value"]]),set:new Set("1"),obj:{a:"b",b:{[m]:"symbol",undefined:void 0,number:1,string:"string",function:()=>console.log(1)}},arr:["1","2","3"]},p=c(a);console.log("\u7ED3\u679C:",p,a.symbol==p.symbol);const k={};Object.assign(k,a);new _((e,t)=>{console.log(Date.now()),setTimeout(()=>{console.log(Date.now()),e("willem")},2e3)}).then(e=>{console.log(e)});O.render(f(v.StrictMode,{children:b(S,{children:[b("div",{children:["new flatArr : ",JSON.stringify(g)]}),f("div",{children:w(a)})]})}),document.getElementById("root"));
