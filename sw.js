(function(){"use strict";const[h,b,_,f,B,v,g,I,R]=[["/Bagel-V2/"],["/Bagel-V2/app/immutable/assets/_layout-f0a02bf9.css","/Bagel-V2/app/immutable/assets/_page-95c9df45.css","/Bagel-V2/app/immutable/chunks/0-fcb682f5.js","/Bagel-V2/app/immutable/chunks/1-4f0d6755.js","/Bagel-V2/app/immutable/chunks/2-4b99dace.js","/Bagel-V2/app/immutable/chunks/index-92993a8b.js","/Bagel-V2/app/immutable/chunks/paths-b4419565.js","/Bagel-V2/app/immutable/chunks/singletons-bac03812.js","/Bagel-V2/app/immutable/chunks/_layout-79cb23d1.js","/Bagel-V2/app/immutable/components/error.svelte-f1f10bee.js","/Bagel-V2/app/immutable/components/pages/_layout.svelte-639aa8e1.js","/Bagel-V2/app/immutable/components/pages/_page.svelte-9957cc73.js","/Bagel-V2/app/immutable/modules/pages/_layout.js-5612100c.js","/Bagel-V2/app/immutable/start-19bcf0bc.js","/Bagel-V2/favicon.png","/Bagel-V2/icons/128x128.png","/Bagel-V2/icons/144x144.png","/Bagel-V2/icons/152x152.png","/Bagel-V2/icons/192x192.png","/Bagel-V2/icons/256x256.png","/Bagel-V2/icons/512x512.png","/Bagel-V2/manifest.webmanifest"],[],"Bagel-V2-",0,"sw",10,10,"/Bagel-V2/"],m=f+B,w=Object.create(null,{}),V=e=>{for(const s of e)w[s]=!0};V(h),V(b),V(_);const y=e=>{e=e.split(`\r
`).join(`
`);const s=e.indexOf(`
`),t=e.slice(0,s)==2;let o=null;return t&&(o=e.slice(s+1).split(`

`).map(c=>{let i=c.split(`
`);return i[0]==""?[]:i})),{formatVersion:t?2:-1,updated:o}},j=async e=>{let s=[];const a=await caches.keys();for(const t of a)t.startsWith(f)&&t!=m&&s.push(parseInt(t.slice(f.length)));return s=s.sort((t,o)=>o-t),s},L=async e=>{if(e.length==0)return[null,!0];const s=Math.max(...e);let a=[];const t=[Math.floor((s+1)/g),Math.floor(B/g)];if(t[1]-t[0]+1>I)return[null,!0];for(let n=t[0];n<=t[1];n++)a.push(fetch(`${v}/${n}.txt`));if(a=await Promise.all(a),a=await Promise.all(a.map(n=>n.text())),a=a.map(y),a.find(n=>n.formatVersion==-1))return[null,!0];const c=Math.floor(s/g);let i=new Set;for(let n=0;n<a.length;n++){const u=t[0]+n,r=a[n];let p=0;u==c&&(p=(s+1)%g);for(let d=p;d<r.updated.length;d++)for(const l of r.updated[d])i.add(l)}return[i,!1]};addEventListener("install",e=>{e.waitUntil((async s=>{const a=await j(),[t,o]=await L(a),c=new Set([...h,...b]),i=[];if(!o){const u=await caches.keys();for(const r of u){if(!r.startsWith(f)||r==m)continue;const p=await caches.open(r),d=await Promise.all([...c].map(l=>(async E=>[l,await p.match(l)!==void 0])()));for(const[l,E]of d)E&&!(t.has(l)||h.includes(l))&&(i.push([l,p]),c.delete(l))}}const n=await caches.open(m);await Promise.all([n.addAll(c),...i.map(([u,r])=>(async p=>{await n.put(u,await r.match(u))})())])})())}),addEventListener("activate",e=>{e.waitUntil((async s=>{await clients.claim();const a=await caches.keys();for(const t of a)t.startsWith(f)&&t!=m&&await caches.delete(t)})())}),addEventListener("fetch",e=>{e.respondWith((async s=>{const a=e.request.mode=="navigate"&&e.request.method=="GET",t=new URL(e.request.url).pathname;if(a&&registration.waiting&&(await clients.matchAll()).length<=1)return registration.waiting.postMessage("skipWaiting"),new Response("",{headers:{Refresh:"0"}});let o=await caches.open(m),c=await o.match(e.request);if(c)return c;let i;try{i=await fetch(e.request)}catch{return h.includes(t)&&a?new Response("Something went wrong. Please connect to the internet and try again."):(w[t]&&console.error(`Couldn't fetch or serve file from cache: ${t}`),Response.error())}return w[t]&&e.request.method=="GET"&&e.waitUntil(o.put(e.request,i.clone())),i})())}),addEventListener("message",({data:e})=>{e=="skipWaiting"&&skipWaiting()})})();
