const C='tayyor-2.5.9';
const SHELL=['./','index.html','style.css','app.js','vendor/supabase.js','vendor/qrcode.min.js','assets/logo-client.png','assets/emblem-client.png','assets/emblem-desk.png','assets/emblem-kitchen.png','assets/emblem-admin.png'];
for(const a of ['client','desk','kitchen','admin'])SHELL.push(a+'/',a+'/index.html',a+'/manifest.json',a+'/icon-192.png');
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request)))});
