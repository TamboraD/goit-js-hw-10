import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-Dov3POoy.js";const i=document.querySelector(".form");i.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(i),t=parseInt(s.get("delay"),10),m=s.get("state");new Promise((e,n)=>{setTimeout(()=>{m==="fulfilled"?e(t):n(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
