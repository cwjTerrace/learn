import{r as t,j as o}from"./index.86b19792.js";const n=e=>new Promise(s=>setTimeout(()=>s({id:e,name:`\u7528\u6237${e}`,age:10+e}),3e3)),c=e=>{const[s,r]=t.exports.useState({});return t.exports.useEffect(()=>{n(e.id).then(u=>r(u))},[e.id]),console.log(s),o("div",{children:["\u5F53\u524D\u7528\u6237\u662F: ",s.name]})};export{c as default};