
const APP_VERSION='1.3.0';
const LANGS=[['uzc','Ўзбекча'],['uzl',"O'zbekcha"],['ru','Русский'],['en','English']];
const LI={uzc:0,uzl:1,ru:2,en:3};
let lang=localStorage.getItem('tl.lang')||'ru';
const T={
tagline:["Самса буюртмаси ва заҳираси","Samsa buyurtmasi va zaxirasi","Заказы и запасы самсы","Samsa orders & stock"],
r_client:["Буюртма бериш","Buyurtma berish","Сделать заказ","Place an order"],
r_desk:["Қабулхона","Qabulxona","Ресепшен","Reception"],
r_kitchen:["Ошпаз","Oshpaz","Повар","Kitchen"],
pin:["ПИН-код","PIN-kod","ПИН-код","PIN code"],
pin_ok:["Кириш","Kirish","Войти","Enter"],
pin_bad:["ПИН нотўғри","PIN noto'g'ri","Неверный ПИН","Wrong PIN"],
exit:["Чиқиш","Chiqish","Выйти","Exit"],
ready:["Тайёр","Tayyor","Готово","Ready"],
reserved:["Бронда","Bronda","В брони","Reserved"],
free:["Бўш","Bo'sh","Свободно","Free"],
baking:["Духовкада","Pechda","В духовке","In oven"],
min:["дақ","daq","мин","min"],
sum:["сўм","so'm","сум","UZS"],
in_stock:["Тайёр: {n} та","Tayyor: {n} ta","Готово: {n} шт","Ready: {n}"],
next_batch:["{n} та ~{m} дақиқада тайёр","{n} ta ~{m} daqiqada tayyor","{n} шт будет через ~{m} мин","{n} ready in ~{m} min"],
not_cooking:["Ҳозирча тайёрланмаяпти","Hozircha tayyorlanmayapti","Сейчас нет, пока не готовится","None now, not cooking yet"],
pickup_when:["Қачон оласиз","Qachon olasiz","Когда заберёте","Pickup time"],
now:["Ҳозир","Hozir","Сейчас","Now"],
in_min:["{n} дақиқадан кейин","{n} daqiqadan keyin","Через {n} мин","In {n} min"],
in_hour:["1 соатдан кейин","1 soatdan keyin","Через час","In 1 hour"],
name:["Исмингиз","Ismingiz","Ваше имя","Your name"],
phone:["Телефон","Telefon","Телефон","Phone"],
total:["Жами","Jami","Итого","Total"],
do_order:["Буюртма бериш","Buyurtma berish","Заказать","Place order"],
cart_empty:["Таом танланг","Taom tanlang","Выберите блюда","Pick items first"],
short_title:["Ҳаммаси тайёр эмас","Hammasi tayyor emas","Не всё готово","Not everything is ready"],
short_line:["{p}: керак {w}, тайёр {r}","{p}: kerak {w}, tayyor {r}","{p}: нужно {w}, готово {r}","{p}: need {w}, ready {r}"],
short_wait:["яна {n} та ~{m} дақиқада","yana {n} ta ~{m} daqiqada","ещё {n} шт через ~{m} мин","{n} more in ~{m} min"],
short_none:["яна {n} тани тайёрлаш режалаштирилмаган","yana {n} tani tayyorlash rejalashtirilmagan","ещё {n} шт пока не запланировано","{n} more not planned yet"],
wait_all:["Кутаман — брон қилинг","Kutaman — bron qiling","Подожду — забронировать","I'll wait — reserve it"],
take_ready:["Фақат тайёрини оламан","Faqat tayyorini olaman","Взять только готовое","Take only what's ready"],
nothing:["Ҳозир ҳеч нарса йўқ","Hozir hech narsa yo'q","Сейчас ничего нет","Nothing available now"],
cancel:["Бекор қилиш","Bekor qilish","Отмена","Cancel"],
my_orders:["Буюртмаларим","Buyurtmalarim","Мои заказы","My orders"],
order_no:["Буюртма №{n}","Buyurtma №{n}","Заказ №{n}","Order #{n}"],
st_wait:["Тайёрланмоқда, ~{m} дақ","Tayyorlanmoqda, ~{m} daq","Готовится, ~{m} мин","Cooking, ~{m} min"],
st_ready:["Тайёр! Олиб кетишингиз мумкин","Tayyor! Olib ketishingiz mumkin","Готово! Можно забирать","Ready! Come and pick up"],
st_done:["Топширилди","Topshirildi","Выдан","Handed over"],
st_cancel:["Бекор қилинди","Bekor qilindi","Отменён","Cancelled"],
ord_placed:["Буюртма қабул қилинди","Buyurtma qabul qilindi","Заказ принят","Order placed"],
t_orders:["Буюртмалар","Buyurtmalar","Заказы","Orders"],
t_hall:["Зал","Zal","Зал","Hall"],
t_stock:["Қолдиқ","Qoldiq","Остатки","Stock"],
t_set:["Созламалар","Sozlamalar","Настройки","Settings"],
give:["Бериш","Berish","Выдать","Hand over"],
give_part:["Тайёрини бериш","Tayyorini berish","Выдать готовое","Hand over ready part"],
no_orders:["Очиқ буюртма йўқ","Ochiq buyurtma yo'q","Нет открытых заказов","No open orders"],
at_time:["соат {t} да","soat {t} da","к {t}","at {t}"],
table:["Стол {n}","Stol {n}","Стол {n}","Table {n}"],
close_table:["Столни ёпиш (тўланди)","Stolni yopish (to'landi)","Закрыть стол (оплачен)","Close table (paid)"],
table_empty:["Бўш","Bo'sh","Свободен","Free"],
add_ready:["Тайёр сонини тузатиш","Tayyor sonini tuzatish","Поправить готовое","Adjust ready count"],
k_put:["Духовкага қўйдим","Pechga qo'ydim","Поставил в духовку","Put in the oven"],
k_qty:["Нечта","Nechta","Сколько штук","How many"],
k_time:["Неча дақиқа","Necha daqiqa","Сколько минут","Minutes"],
k_take:["Олдим ✓","Oldim ✓","Вынул ✓","Taken out ✓"],
k_done_now:["ТАЙЁР — олинг!","TAYYOR — oling!","ГОТОВО — вынимай!","DONE — take out!"],
k_none:["Духовка бўш","Pech bo'sh","Духовка пустая","Oven is empty"],
k_demand:["Сўралган, лекин тайёрланмаяпти: {n}","So'ralgan, lekin tayyorlanmayapti: {n}","Просят, но не готовится: {n} шт","Requested but not cooking: {n}"],
k_del:["Хато — олиб ташлаш","Xato — olib tashlash","Ошибка — убрать","Mistake — remove"],
l_new:["Янги буюртма №{no}: {s}","Yangi buyurtma №{no}: {s}","Новый заказ №{no}: {s}","New order #{no}: {s}"],
l_batch:["Духовкага қўйилди: {p} × {n}, ~{m} дақ","Pechga qo'yildi: {p} × {n}, ~{m} daq","В духовке: {p} × {n}, ~{m} мин","In oven: {p} × {n}, ~{m} min"],
l_done:["Тайёр: {p} × {n}","Tayyor: {p} × {n}","Готово: {p} × {n}","Ready: {p} × {n}"],
l_ordready:["Буюртма №{no} тўлиқ тайёр","Buyurtma №{no} to'liq tayyor","Заказ №{no} полностью готов","Order #{no} is fully ready"],
l_cancel:["Буюртма №{no} бекор қилинди","Buyurtma №{no} bekor qilindi","Заказ №{no} отменён","Order #{no} cancelled"],
price:["Нарх","Narx","Цена","Price"],
what_order:["Нима буюртма берасиз?","Nima buyurtma berasiz?","Что закажете?","What would you like to order?"],
k_sold:["Бугун сотилди","Bugun sotildi","Продано сегодня","Sold today"],
k_rev:["Тушум","Tushum","Выручка","Revenue"],
k_ready:["Ҳозир тайёр","Hozir tayyor","Готово сейчас","Ready now"],
k_accept:["Қабул қилиш мумкин","Qabul qilish mumkin","Можно принять","Can accept now"],
k_open:["Очиқ буюртмалар","Ochiq buyurtmalar","Открытых заказов","Open orders"],
k_hall:["Банд столлар","Band stollar","Занято столов","Tables busy"],
k_resv:["Бронда жами","Bronda jami","Всего в брони","Total reserved"],
d_title:["Ҳозирги ҳолат","Hozirgi holat","Сейчас в наличии","Live stock"],
d_later:["+{n} ~{m} дақиқадан кейин","+{n} ~{m} daqiqadan keyin","+{n} через ~{m} мин","+{n} in ~{m} min"],
d_nobake:["духовкада йўқ","pechda yo'q","в духовке нет","nothing in oven"],
d_low:["тугаяпти","tugayapti","заканчивается","running low"],
d_out:["йўқ","yo'q","нет","sold out"],
d_ok:["етарли","yetarli","достаточно","in stock"],
d_sold:["сотилди","sotildi","продано","sold"],
d_week:["Сўнгги 7 кун тушуми","So'nggi 7 kun tushumi","Выручка за 7 дней","Revenue, last 7 days"],
d_orders:["Буюртмалар","Buyurtmalar","Заказы","Orders"],
pcs:["та","ta","шт","pcs"],
add_table:["+ Стол қўшиш","+ Stol qo'shish","+ Добавить стол","+ Add table"],
del_table:["Столни ўчириш","Stolni o'chirish","Удалить стол","Delete table"],
table_busy:["Стол банд — аввал ёпинг","Stol band — avval yoping","Стол занят — сначала закройте","Table is busy — close it first"],
tracked:["Захира ҳисобида","Zaxira hisobida","Учёт остатка","Track stock"],
add_prod:["+ Таом қўшиш","+ Taom qo'shish","+ Добавить блюдо","+ Add item"],
del:["Ўчириш","O'chirish","Удалить","Delete"],
link:["Мижоз ҳаволаси / QR","Mijoz havolasi / QR","Ссылка для клиентов / QR","Client link / QR"],
reset:["Демо маълумотни тиклаш","Demo ma'lumotni tiklash","Сбросить демо-данные","Reset demo data"],
tables_n:["Столлар сони","Stollar soni","Количество столов","Number of tables"],
new_pin:["Янги ПИН","Yangi PIN","Новый ПИН","New PIN"],
version:["Версия","Versiya","Версия","Version"],
update:["Янгиланиш бор","Yangilanish bor","Есть обновление","Update available"],
update_btn:["Янгилаш","Yangilash","Обновить","Update"],
asked:["Сўралган {w}, брон {q}","So'ralgan {w}, bron {q}","Хотел {w}, в заказе {q}","Wanted {w}, in order {q}"],
sure:["Ишончингиз комилми?","Ishonchingiz komilmi?","Вы уверены?","Are you sure?"],
waiting:["кутяпти {n}","kutyapti {n}","ждёт {n}","waiting {n}"],
no_stock:["Тайёр йўқ","Tayyor yo'q","Нет готовых","None ready"],
nm_uz:["Номи","Nomi","Название","Name"],
on_line:["уланган","ulangan","онлайн","online"],
off_line:["алоқа йўқ","aloqa yo'q","нет связи","offline"],
loading:["Юкланмоқда…","Yuklanmoqda…","Загрузка…","Loading…"],
install:["Телефонга ўрнатиш","Telefonga o'rnatish","Установить на телефон","Install on phone"],
ios_hint:["Safari: «Улашиш» → «Бош экранга қўшиш»","Safari: «Ulashish» → «Bosh ekranga qo'shish»","Safari: «Поделиться» → «На экран Домой»","Safari: Share → Add to Home Screen"]
};
const t=(k,a)=>{let s=(T[k]||[k,k,k,k])[LI[lang]];if(a)for(const x in a)s=s.split('{'+x+'}').join(a[x]);return s};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fm=n=>Number(n||0).toLocaleString('ru-RU')+' '+t('sum');

/* ---------- state ---------- */
let S=null;
const uid=()=>Math.random().toString(36).slice(2,9);
function seed(){
  const now=Date.now();
  const mk=(id,e,uzc,uzl,ru,en,price,stock,bake)=>({id,emoji:e,names:{uzc,uzl,ru,en},price,stock,bake,on:true});
  return{settings:{tables:12},next:101,fid:0,feed:[],demand:{},
  products:[
   mk('meat','🥟','Гўштли','Go\'shtli','С мясом','Meat',9000,true,25),
   mk('pot','🥔','Картошкали','Kartoshkali','С картошкой','Potato',7000,true,25),
   mk('herb','🌿','Кўкатли','Ko\'katli','С зеленью','Herbs',7000,true,22),
   mk('pump','🎃','Қовоқли','Qovoqli','С тыквой','Pumpkin',7000,true,25),
   mk('sauce','🥫','Соус','Sous','Соус','Sauce',2000,false,0),
   mk('tea','🍵','Чой','Choy','Чай','Tea',3000,false,0),
   mk('non','🫓','Нон','Non','Лепёшка','Flatbread',3000,false,0),
   mk('cola','🥤','Кола','Kola','Кола','Cola',8000,false,0)],
  ready:{meat:12,pot:8,herb:5,pump:0},
  batches:[{id:uid(),pid:'pump',qty:30,start:now,end:now+12*60000}],
  orders:[]};
}
/* ---------- sync with Supabase (state per tenant, optimistic + retry on conflict) ---------- */
const SB_URL='https://tzxflegbfqqdbzdnhbnz.supabase.co';
const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eGZsZWdiZnFxZGJ6ZG5oYm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNTI3MDgsImV4cCI6MjEwMDYyODcwOH0.Ln_Sh3JsdVrOapGxJ-BdzmagMJg7I53riyHrAxCDhcw';
(function(){const q=new URLSearchParams(location.search).get('s');if(q)try{localStorage.setItem('tl.slug',q)}catch(e){}})();
const SLUG=((new URLSearchParams(location.search).get('s')||localStorage.getItem('tl.slug')||'demo')+'').toLowerCase().replace(/[^a-z0-9-]/g,'').slice(0,40)||'demo';
const KEY='tayyor.'+SLUG;
(async()=>{if(SLUG==='demo')return;try{const l=document.querySelector('link[rel=manifest]'),u=l.href,m=await(await fetch(u)).json(),b=new URL('.',u).href;
  m.start_url=b+'?s='+SLUG;m.id=b+'?s='+SLUG;m.scope=b;m.icons=m.icons.map(i=>({...i,src:new URL(i.src,b).href}));
  l.href=URL.createObjectURL(new Blob([JSON.stringify(m)],{type:'application/manifest+json'}))}catch(e){}})();
let sb=null,online=false,queue=[],syncing=false,staleRemote=false,booted=false;
try{sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:false}})}catch(e){}
function load(){try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}if(!S||!S.products)S=null}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
const strip=()=>{const d=JSON.parse(JSON.stringify(S));delete d._rev;d.orders=d.orders.filter(o=>o.status==='open'||Date.now()-o.created<2*864e5).slice(-300);return d};
function setOnline(v){if(online!==v){online=v;render()}}
async function pull(){if(!sb)return false;
  try{let{data,error}=await sb.rpc('tayyor_get',{p_slug:SLUG});if(error)throw error;
    if(!data){await sb.rpc('tayyor_init',{p_slug:SLUG,p_pin:'0000',p_data:(()=>{const s=seed();return s})()});({data,error}=await sb.rpc('tayyor_get',{p_slug:SLUG}));if(error||!data)throw error||new Error('init')}
    S=data.data;S._rev=data.rev;save();setOnline(true);return true}
  catch(e){setOnline(false);return false}}
function mutate(fn){const r=fn();queue.push(fn);save();afterChange();flush();return r}
async function flush(){if(syncing||!queue.length||!sb||!S)return;syncing=true;
  try{while(queue.length){const n=queue.length,base=S._rev??0;
    const{data,error}=await sb.rpc('tayyor_put',{p_slug:SLUG,p_data:strip(),p_rev:base});if(error)throw error;
    if(data>=0){S._rev=data;queue.splice(0,n);save();setOnline(true)}
    else if(data===-1){const pend=queue.slice();queue=[];if(!await pull())throw new Error('pull');for(const f of pend){f();queue.push(f)}afterChange()}
    else{queue=[];throw new Error('too big')}}}
  catch(e){setOnline(false)}
  finally{syncing=false;if(staleRemote&&!queue.length){staleRemote=false;if(await pull())afterChange()}}}
function startSync(){if(!sb)return;
  sb.channel('tayyor-'+SLUG).on('postgres_changes',{event:'*',schema:'public',table:'tayyor_state',filter:'slug=eq.'+SLUG},p=>{
    const n=p.new;if(!n||!n.data||n.rev<=(S?._rev??-1))return;
    if(queue.length||syncing){staleRemote=true;return}
    S=n.data;S._rev=n.rev;save();afterChange()}).subscribe(s=>{if(s==='SUBSCRIBED')setOnline(true)});
  setInterval(async()=>{if(!queue.length&&!syncing){const old=S?._rev;if(await pull()&&S._rev!==old)afterChange();else if(queue.length===0&&!online)flush()}else flush()},6000)}
function feed(k,a){S.fid++;S.feed.push({id:S.fid,k,a,t:Date.now()});S.feed=S.feed.slice(-40)}

/* ---------- stock model ---------- */
const P=id=>S.products.find(p=>p.id===id);
const pn=p=>p?(p.names[lang]||p.names.ru):'?';
const openP=()=>S.orders.filter(o=>o.type==='pickup'&&o.status==='open');
function resv(pid){let r=0,b=0;for(const o of openP())for(const l of o.lines)if(l.pid===pid){r+=l.rr;b+=l.rb}return{r,b}}
const rdy=pid=>S.ready[pid]||0;
const freeR=pid=>Math.max(0,rdy(pid)-resv(pid).r);
const bakeTot=pid=>S.batches.filter(b=>b.pid===pid).reduce((a,b)=>a+b.qty,0);
const freeB=pid=>Math.max(0,bakeTot(pid)-resv(pid).b);
function etaAt(pid,need){let acc=0;for(const b of S.batches.filter(b=>b.pid===pid).sort((a,b)=>a.end-b.end)){acc+=b.qty;if(acc>=need)return b.end}return null}
const eta=(pid,n)=>etaAt(pid,resv(pid).b+n);
const mins=ts=>Math.max(1,Math.ceil((ts-Date.now())/60000));
const isReady=o=>o.lines.every(l=>l.rr>=l.qty);
function etaLine(o,l){let older=0;for(const x of openP())if(x.created<o.created)for(const y of x.lines)if(y.pid===l.pid)older+=y.rb;return etaAt(l.pid,older+l.rb)}
function analyze(cart){return Object.entries(cart).filter(([,q])=>q>0).map(([pid,q])=>{const p=P(pid);
  if(!p.stock)return{pid,want:q,take:q,wait:0,none:0,stock:false};
  const take=Math.min(q,freeR(pid)),rem=q-take,w=Math.min(rem,freeB(pid));
  return{pid,want:q,take,wait:w,none:rem-w,at:w>0?eta(pid,w):null,stock:true}})}
const lineTxt=l=>pn(P(l.pid))+' × '+l.qty;

/* ---------- actions ---------- */
let UI={tab:'orders',cart:{},pick:0,name:'',phone:'',modal:null,tbl:null,k:{pid:'meat',qty:20,min:null},upd:false};
function cartAdd(pid,d){UI.cart[pid]=Math.max(0,(UI.cart[pid]||0)+d);render()}
function tryOrder(){const a=analyze(UI.cart);if(!a.length)return toast(t('cart_empty'));
  if(a.some(x=>x.stock&&x.take<x.want))UI.modal=a;else placeOrder('all');render()}
function placeOrder(mode){UI.modal=null;let oid=null;
  const cart={...UI.cart},cname=UI.name.trim(),cphone=UI.phone.trim(),cpick=UI.pick,coid='o'+uid();
  mutate(()=>{const lines=[];oid=null;
    for(const a of analyze(cart)){
      if(!a.stock){lines.push({pid:a.pid,qty:a.want,rr:a.want,rb:0,want:a.want});continue}
      const rb=mode==='all'?a.wait:0,qty=a.take+rb;
      if(a.want>qty)S.demand[a.pid]=(S.demand[a.pid]||0)+(a.want-qty);
      if(qty>0)lines.push({pid:a.pid,qty,rr:a.take,rb,want:a.want})}
    if(!lines.some(l=>P(l.pid).stock)){return}
    const no=S.next++;oid=coid;
    S.orders.push({id:oid,no,type:'pickup',name:cname,phone:cphone,pickupAt:Date.now()+cpick*60000,created:Date.now(),status:'open',lines});
    feed('l_new',{no,oid})});
  if(oid){const mine=JSON.parse(localStorage.getItem('tl.mine')||'[]');mine.unshift(oid);localStorage.setItem('tl.mine',JSON.stringify(mine.slice(0,20)));
    UI.cart={};toast(t('ord_placed'));try{window.Notification&&Notification.permission==='default'&&Notification.requestPermission()}catch(e){}}
  else toast(t('nothing'));
  render()}
function startBatch(){const k=UI.k,p=P(k.pid);if(!p||k.qty<1)return;const m=Math.max(1,+k.min||(S.lastMin&&S.lastMin[k.pid])||25),kp=k.pid,kq=k.qty,bid=uid();
  mutate(()=>{S.batches.push({id:bid,pid:kp,qty:kq,start:Date.now(),end:Date.now()+m*60000});
    S.demand[kp]=Math.max(0,(S.demand[kp]||0)-kq);S.lastMin=S.lastMin||{};S.lastMin[kp]=m;feed('l_batch',{pid:kp,n:kq,m})});UI.k.min=null;render()}
function takeOut(bid){mutate(()=>{const b=S.batches.find(x=>x.id===bid);if(!b)return;
  S.batches=S.batches.filter(x=>x!==b);S.ready[b.pid]=rdy(b.pid)+b.qty;
  const was=new Set(openP().filter(isReady).map(o=>o.id));let left=b.qty;
  for(const o of openP().sort((a,b)=>a.created-b.created))for(const l of o.lines)if(l.pid===b.pid&&l.rb>0&&left>0){const m=Math.min(l.rb,left);l.rb-=m;l.rr+=m;left-=m}
  feed('l_done',{pid:b.pid,n:b.qty});
  for(const o of openP())if(isReady(o)&&!was.has(o.id))feed('l_ordready',{no:o.no,oid:o.id})})}
function dropBatch(bid){if(!confirm(t('sure')))return;mutate(()=>{const b=S.batches.find(x=>x.id===bid);if(!b)return;S.batches=S.batches.filter(x=>x!==b);
  let over=resv(b.pid).b-bakeTot(b.pid);
  for(const o of openP().sort((a,b)=>b.created-a.created))for(const l of o.lines)if(l.pid===b.pid&&over>0){const m=Math.min(l.rb,over);l.rb-=m;l.qty-=m;over-=m;S.demand[b.pid]=(S.demand[b.pid]||0)+m}})}
const dayKey=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function recSale(lines){S.sold=S.sold||{};const k=dayKey(),d=S.sold[k]=S.sold[k]||{};
  for(const l of lines){const p=P(l.pid);if(!p||l.qty<=0)continue;const e=d[l.pid]=d[l.pid]||{q:0,s:0};e.q+=l.qty;e.s+=l.qty*p.price}
  for(const key of Object.keys(S.sold).sort().slice(0,-35))delete S.sold[key]}
function giveOrder(oid,partial){mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o)return;
  for(const l of o.lines){if(P(l.pid)&&P(l.pid).stock)S.ready[l.pid]=Math.max(0,rdy(l.pid)-l.rr);if(partial){l.qty=l.rr;l.rb=0}}
  o.lines=o.lines.filter(l=>l.qty>0);recSale(o.lines);o.status='done'})}
function cancelOrder(oid){if(!confirm(t('sure')))return;mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o)return;o.status='cancelled';feed('l_cancel',{no:o.no})})}
function adj(pid,d){mutate(()=>{S.ready[pid]=Math.max(0,rdy(pid)+d)})}
const tbls=()=>(S.settings.tableIds&&S.settings.tableIds.length?S.settings.tableIds:Array.from({length:S.settings.tables||12},(_,i)=>i+1));
function addTable(){mutate(()=>{const ids=tbls().slice();S.settings.tableIds=[...ids,(ids.length?Math.max(...ids):0)+1]})}
function delTable(n){if(hallOrder(n))return toast(t('table_busy'));if(!confirm(t('sure')))return;mutate(()=>{S.settings.tableIds=tbls().filter(x=>x!==n)});UI.tbl=null;render()}
function hallOrder(n){return S.orders.find(o=>o.type==='hall'&&o.table===n&&o.status==='open')}
function hallAdd(n,pid,d){let fail=false;mutate(()=>{const p=P(pid);if(d>0&&p.stock&&freeR(pid)<d){fail=true;return}
  let o=hallOrder(n);if(!o){if(d<0)return;o={id:'h'+uid(),no:0,type:'hall',table:n,created:Date.now(),status:'open',lines:[]};S.orders.push(o)}
  let l=o.lines.find(x=>x.pid===pid);if(!l){if(d<0)return;l={pid,qty:0,rr:0,rb:0};o.lines.push(l)}
  l.qty+=d;if(p.stock)S.ready[pid]=Math.max(0,rdy(pid)-d);
  if(l.qty<=0)o.lines=o.lines.filter(x=>x!==l);if(!o.lines.length)S.orders=S.orders.filter(x=>x!==o)});
  if(fail)toast(t('no_stock'))}
function closeTable(n){mutate(()=>{const o=hallOrder(n);if(o){recSale(o.lines);o.status='closed'}});UI.tbl=null;render()}
function setP(id,f,v){mutate(()=>{const p=P(id);if(!p)return;if(f==='price')p[f]=Math.max(0,+v||0);else if(f==='stock')p.stock=!!v;else if(f.startsWith('n_'))p.names[f.slice(2)]=v})}
function addProd(){mutate(()=>{const id='p'+uid();S.products.push({id,emoji:'🥟',names:{uzc:'Янги',uzl:'Yangi',ru:'Новое',en:'New'},price:5000,stock:true,on:true})})}
function delProd(id){if(!confirm(t('sure')))return;mutate(()=>{S.products=S.products.filter(p=>p.id!==id)});render()}
function resetDemo(){if(!confirm(t('sure')))return;localStorage.removeItem('tl.mine');mutate(()=>{const n=seed();for(const k of Object.keys(S))if(k!=='_rev')delete S[k];Object.assign(S,n)})}

/* ---------- ui helpers ---------- */
function toast(m){const d=document.createElement('div');d.className='toast';d.textContent=m;document.getElementById('toasts').appendChild(d);setTimeout(()=>d.remove(),4500)}
let actx;function beep(n=2){try{actx=actx||new(window.AudioContext||window.webkitAudioContext)();for(let i=0;i<n;i++){const o=actx.createOscillator(),g=actx.createGain();o.connect(g);g.connect(actx.destination);o.frequency.value=880;g.gain.value=.15;o.start(actx.currentTime+i*.25);o.stop(actx.currentTime+i*.25+.15)}}catch(e){}}
function fmtFeed(f){const a=f.a||{};const o=a.oid&&S.orders.find(x=>x.id===a.oid);
  const s=o?o.lines.map(lineTxt).join(', '):'';
  return t(f.k,{no:a.no,s,p:pn(P(a.pid)),n:a.n,m:a.m})}
let lastFid=null;
function feedToasts(){if(lastFid===null){lastFid=S.fid;return}
  const mine=JSON.parse(localStorage.getItem('tl.mine')||'[]');const r=route();
  for(const f of S.feed.filter(x=>x.id>lastFid)){
    const ok=r==='desk'||(r==='kitchen'&&['l_new','l_batch','l_done'].includes(f.k))||(r==='order'&&f.k==='l_ordready'&&mine.includes(f.a.oid));
    if(!ok)continue;toast(fmtFeed(f));beep(f.k==='l_new'||f.k==='l_ordready'?3:1);
    if(r==='order'){try{navigator.vibrate&&navigator.vibrate(300);window.Notification&&Notification.permission==='granted'&&new Notification('Tayyor',{body:fmtFeed(f)})}catch(e){}}}
  lastFid=S.fid}
let pendingRender=false;
function afterChange(){feedToasts();render()}
const ROLE=window.ROLE||'client',ROOT=new URL('../',location.href).href,route=()=>ROLE==='client'?'order':ROLE;
const clientLink=()=>ROOT+'client/'+(SLUG!=='demo'?'?s='+SLUG:'');
function setLang(l){lang=l;localStorage.setItem('tl.lang',l);document.documentElement.lang=l==='en'?'en':l==='ru'?'ru':'uz';render()}
const authed=()=>sessionStorage.getItem('tl.auth')==='1';
async function login(){const v=document.getElementById('pin').value;let ok=false;
  try{const{data}=await sb.rpc('tayyor_check_pin',{p_slug:SLUG,p_pin:v});ok=data===true}catch(e){}
  if(ok){sessionStorage.setItem('tl.auth','1');sessionStorage.setItem('tl.pin',v);render()}else toast(t('pin_bad'))}
async function setPin(v){v=v.trim();let ok=false;
  try{const{data}=await sb.rpc('tayyor_set_pin',{p_slug:SLUG,p_old:sessionStorage.getItem('tl.pin')||'',p_new:v});ok=data===true}catch(e){}
  if(ok){sessionStorage.setItem('tl.pin',v);toast('✓')}else toast(t('pin_bad'))}
let installEv=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEv=e;render()});
async function doInstall(){if(installEv){installEv.prompt();await installEv.userChoice;installEv=null;render()}}
const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent),isStandalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
function go(r){location.hash='#/'+r}
function hm(ts){const d=new Date(ts);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}
function mmss(ms){ms=Math.max(0,ms);const s=Math.ceil(ms/1000);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

/* ---------- views ---------- */
function head(){return`<header><div class="brand">🥟 Tayyor${ROLE!=='client'?` <small style="font-weight:600;color:var(--mut)">${t('r_'+ROLE)}</small>`:''}</div><div class="langs">${LANGS.map(([c,n])=>`<button class="${lang===c?'on':''}" onclick="setLang('${c}')">${n}</button>`).join('')}</div></header>${installBox()}${UI.upd?`<div class="upd"><b>${t('update')}</b><button class="btn sm sec" onclick="doUpdate()">${t('update_btn')}</button></div>`:''}`}
function foot(){return`<div class="foot">${t('version')} ${APP_VERSION} · <span style="color:${online?'var(--ok)':'var(--bad)'}">●</span> ${online?t('on_line'):t('off_line')}${SLUG!=='demo'?' · '+esc(SLUG):''}</div>`}
function installBox(){if(isStandalone)return'';if(installEv)return`<button class="btn full" style="margin:6px 0" onclick="doInstall()">📲 ${t('install')}</button>`;if(isIOS)return`<p class="sub">📲 ${t('ios_hint')}</p>`;return''}
function vPin(){return`${head()}<h2>${t('pin')}</h2><input id="pin" type="password" inputmode="numeric" onkeydown="if(event.key==='Enter')login()" autofocus><div class="row" style="margin-top:10px"><button class="btn" onclick="login()">${t('pin_ok')}</button></div>${foot()}`}

function prodStatus(p){if(!p.stock)return'';const fr=freeR(p.id),fb=freeB(p.id);let h='';
  if(fr>0)h+=`<span class="chip ok">${t('in_stock',{n:fr})}</span>`;
  if(fb>0)h+=`<span class="chip warn">${t('next_batch',{n:fb,m:mins(eta(p.id,fb)||Date.now())})}</span>`;
  else if(fr===0){const e=eta(p.id,1);h+=e?`<span class="chip warn">${t('next_batch',{n:Math.max(1,bakeTot(p.id)-resv(p.id).b),m:mins(e)})}</span>`:`<span class="chip bad">${t('not_cooking')}</span>`}
  return h}
function orderStatus(o){if(o.status==='done')return`<span class="chip">${t('st_done')}</span>`;if(o.status==='cancelled')return`<span class="chip bad">${t('st_cancel')}</span>`;
  if(isReady(o))return`<span class="chip ok">${t('st_ready')}</span>`;
  let at=0;for(const l of o.lines)if(l.rb>0)at=Math.max(at,etaLine(o,l)||0);
  return`<span class="chip warn">${t('st_wait',{m:at?mins(at):'?'})}</span>`}
function vClient(){const items=S.products.filter(p=>p.on!==false);
  const tot=items.reduce((a,p)=>a+(UI.cart[p.id]||0)*p.price,0);
  const mine=(JSON.parse(localStorage.getItem('tl.mine')||'[]')).map(id=>S.orders.find(o=>o.id===id)).filter(Boolean);
  let h=head()+`<h1 class="ask">${t('what_order')}</h1>`;
  if(mine.length)h+=`<h2>${t('my_orders')}</h2>`+mine.map(o=>`<div class="card col"><div class="line"><b>${t('order_no',{n:o.no})}</b><span class="sub">${t('at_time',{t:hm(o.pickupAt)})}</span></div>${o.lines.map(l=>`<div class="line"><span>${esc(pn(P(l.pid)))} × ${l.qty}</span>${l.rb>0?`<span class="sub">${t('waiting',{n:l.rb})}</span>`:''}</div>`).join('')}${orderStatus(o)}</div>`).join('');
  h+=items.map(p=>`<div class="card"><div class="pe">${p.emoji}</div><div class="pi"><b>${esc(pn(p))}</b><div class="sub">${fm(p.price)}</div>${prodStatus(p)}</div><div class="step"><button onclick="cartAdd('${p.id}',-1)">−</button><span>${UI.cart[p.id]||0}</span><button onclick="cartAdd('${p.id}',1)">+</button></div></div>`).join('');
  h+=`<h2>${t('pickup_when')}</h2><select onchange="UI.pick=+this.value">${[[0,t('now')],[30,t('in_min',{n:30})],[60,t('in_hour')],[90,t('in_min',{n:90})],[120,t('in_min',{n:120})]].map(([v,l])=>`<option value="${v}"${UI.pick===v?' selected':''}>${l}</option>`).join('')}</select>
  <div class="row" style="margin-top:8px"><input placeholder="${t('name')}" value="${esc(UI.name)}" oninput="UI.name=this.value"><input placeholder="${t('phone')}" inputmode="tel" value="${esc(UI.phone)}" oninput="UI.phone=this.value"></div>${foot()}
  <div class="bar"><div><div class="sub">${t('total')}</div><b style="font-size:20px">${fm(tot)}</b></div><button class="btn" onclick="tryOrder()">${t('do_order')}</button></div>`;
  if(UI.modal){const a=UI.modal.filter(x=>x.stock&&x.take<x.want),anyW=a.some(x=>x.wait>0),anyT=UI.modal.some(x=>x.take>0&&x.stock);
    h+=`<div class="modal" onclick="if(event.target===this){UI.modal=null;render()}"><div><h2 style="margin-top:0">${t('short_title')}</h2>${a.map(x=>`<div class="card col"><b>${t('short_line',{p:esc(pn(P(x.pid))),w:x.want,r:x.take})}</b>${x.wait>0?`<div class="chip warn">${t('short_wait',{n:x.wait,m:mins(x.at)})}</div>`:''}${x.none>0?`<div class="chip bad">${t('short_none',{n:x.none})}</div>`:''}</div>`).join('')}
    ${anyW?`<button class="btn full" style="margin:6px 0" onclick="placeOrder('all')">${t('wait_all')}</button>`:''}
    ${anyT||UI.modal.some(x=>!x.stock)?`<button class="btn sec full" style="margin:6px 0" onclick="placeOrder('ready')">${t('take_ready')}</button>`:''}
    ${!anyW&&!anyT?`<p>${t('nothing')}</p>`:''}
    <button class="btn sec full" onclick="UI.modal=null;render()">${t('cancel')}</button></div></div>`}
  return h}

function sumDay(k){const d=(S.sold&&S.sold[k])||{};let q=0,s=0;for(const pid in d){const p=P(pid);if(p&&p.stock)q+=d[pid].q;s+=d[pid].s}return{q,s}}
function dashHTML(){
  const st=S.products.filter(p=>p.stock&&p.on!==false);
  const T=st.reduce((a,p)=>{const r=resv(p.id);a.r+=rdy(p.id);a.f+=freeR(p.id);a.v+=r.r+r.b;a.b+=bakeTot(p.id);return a},{r:0,f:0,v:0,b:0});
  const td=sumDay(dayKey()),halls=S.orders.filter(o=>o.type==='hall'&&o.status==='open'),open=openP().length;
  const kpi=(l,v,s,c)=>`<div class="kpi ${c||''}"><div class="kl">${l}</div><div class="kv">${v}</div><div class="ks">${s||'&nbsp;'}</div></div>`;
  let h=`<div class="kpis">${kpi(t('k_accept'),T.f+' <small>'+t('pcs')+'</small>',t('k_ready')+': '+T.r,T.f?'ok':'bad')}${kpi(t('baking'),T.b+' <small>'+t('pcs')+'</small>',t('k_resv')+': '+T.v,'')}${kpi(t('k_sold'),td.q+' <small>'+t('pcs')+'</small>',t('k_rev')+': '+fm(td.s),'')}${kpi(t('k_open'),open,t('k_hall')+': '+halls.length,'')}</div>`;
  h+=`<h2>${t('d_title')}</h2>`+st.map(p=>{const r=resv(p.id),f=freeR(p.id),fb=freeB(p.id),b=bakeTot(p.id),rd=rdy(p.id),tot=Math.max(1,rd+b);
    const bt=S.batches.filter(x=>x.pid===p.id).sort((a,c)=>a.end-c.end)[0],sold=((S.sold&&S.sold[dayKey()])||{})[p.id];
    const lvl=f+fb<=0?['bad',t('d_out')]:f+fb<=3?['warn',t('d_low')]:['ok',t('d_ok')];
    return`<div class="card col dp"><div class="line"><b>${p.emoji} ${esc(pn(p))}</b><span><span class="chip ${lvl[0]}">${lvl[1]}</span><span class="chip">${t('d_sold')} ${sold?sold.q:0}</span></span></div>
    <div class="stack"><i class="sg ok" style="width:${100*f/tot}%"></i><i class="sg warn" style="width:${100*Math.min(r.r,rd)/tot}%"></i><i class="sg oven" style="width:${100*b/tot}%"></i></div>
    <div class="dn"><div><span class="dv ${f>0?'okc':'badc'}">${f}</span><span class="dl">${t('free')}</span></div><div><span class="dv">${r.r}</span><span class="dl">${t('reserved')}</span></div><div><span class="dv">${rd}</span><span class="dl">${t('ready')}</span></div><div><span class="dv ovc">${b}</span><span class="dl">${t('baking')}</span></div></div>
    <div class="sub">${t('k_accept')}: <b>${f}</b>${fb>0?' · '+t('d_later',{n:fb,m:mins(eta(p.id,fb)||Date.now())}):''}${bt?' · '+t('baking')+': '+bt.qty+' (~'+mins(bt.end)+' '+t('min')+')':' · '+t('d_nobake')}</div></div>`}).join('');
  const days=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-(6-i));return{d,s:sumDay(dayKey(d)).s}}),mx=Math.max(1,...days.map(x=>x.s));
  h+=`<h2>${t('d_week')}</h2><div class="card col"><div class="chart">${days.map(x=>`<div class="cb"><span class="cv">${x.s?Math.round(x.s/1000)+'k':''}</span><i style="height:${Math.max(3,100*x.s/mx)}%"></i><span class="cd">${x.d.getDate()}</span></div>`).join('')}</div></div>`;
  return h}
function vDesk(){const open=openP().sort((a,b)=>a.pickupAt-b.pickupAt);
  let h=head()+`<div class="tabs">${[['orders',t('t_orders')+(open.length?`<span class="badge">${open.length}</span>`:'')],['hall',t('t_hall')],['stock',t('t_stock')],['set',t('t_set')]].map(([k,l])=>`<button class="${UI.tab===k?'on':''}" onclick="UI.tab='${k}';render()">${l}</button>`).join('')}</div>`;
  if(UI.tab==='orders'){
    h+=dashHTML()+`<h2>${t('d_orders')}</h2>`;
    h+=open.length?open.map(o=>`<div class="card col"><div class="line"><b>${t('order_no',{n:o.no})} ${esc(o.name)}</b><b>${t('at_time',{t:hm(o.pickupAt)})}</b></div>${o.phone?`<div class="sub">☎ ${esc(o.phone)}</div>`:''}
      ${o.lines.map(l=>`<div class="line"><span>${P(l.pid)?P(l.pid).emoji+' '+esc(pn(P(l.pid))):'?'} × ${l.qty}</span><span>${l.rr>=l.qty?`<span class="chip ok">${t('ready')}</span>`:`${l.rr>0?`<span class="chip ok">${t('ready')} ${l.rr}</span>`:''}<span class="chip warn">${t('waiting',{n:l.rb})} · ~${mins(etaLine(o,l)||Date.now())} ${t('min')}</span>`}${l.want>l.qty?`<span class="chip bad">${t('asked',{w:l.want,q:l.qty})}</span>`:''}</span></div>`).join('')}
      <div class="row" style="margin-top:8px">${isReady(o)?`<button class="btn ok sm" onclick="giveOrder('${o.id}')">${t('give')}</button>`:`<button class="btn sm" onclick="giveOrder('${o.id}',true)" ${o.lines.some(l=>l.rr>0)?'':'disabled style="opacity:.4"'}>${t('give_part')}</button>`}<button class="btn bad sm" onclick="cancelOrder('${o.id}')">${t('cancel')}</button></div></div>`).join(''):`<p class="sub">${t('no_orders')}</p>`;
    h+=`<h2>🔔</h2>`+S.feed.slice(-8).reverse().map(f=>`<div class="line sub"><span>${fmtFeed(f)}</span><span>${hm(f.t)}</span></div>`).join('')}
  if(UI.tab==='stock')h+=S.products.filter(p=>p.stock).map(p=>{const r=resv(p.id);return`<div class="card col"><div class="line"><b>${p.emoji} ${esc(pn(p))}</b><span class="big">${rdy(p.id)}</span></div>
    <span class="chip ok">${t('free')} ${freeR(p.id)}</span><span class="chip warn">${t('reserved')} ${r.r}</span><span class="chip">${t('baking')} ${bakeTot(p.id)}${r.b?` (${t('reserved')} ${r.b})`:''}</span>
    <div class="sub" style="margin-top:6px">${t('add_ready')}</div><div class="row">${[-5,-1,1,5,10].map(d=>`<button class="btn sec sm" onclick="adj('${p.id}',${d})">${d>0?'+':''}${d}</button>`).join('')}</div></div>`}).join('');
  if(UI.tab==='hall'){
    h+=`<div class="grid">${tbls().map(i=>`<button class="${hallOrder(i)?'occ':''} ${UI.tbl===i?'sel':''}" onclick="UI.tbl=${i};render()">${i}</button>`).join('')}</div><div class="row" style="margin-top:8px"><button class="btn sec sm" onclick="addTable()">${t('add_table')}</button>${UI.tbl&&!hallOrder(UI.tbl)?`<button class="btn bad sm" onclick="delTable(${UI.tbl})">${t('del_table')} ${UI.tbl}</button>`:''}</div>`;
    if(UI.tbl){const o=hallOrder(UI.tbl),sum=o?o.lines.reduce((a,l)=>a+l.qty*P(l.pid).price,0):0;
      h+=`<h2>${t('table',{n:UI.tbl})}</h2>${o?o.lines.map(l=>`<div class="card"><div class="pi">${P(l.pid).emoji} ${esc(pn(P(l.pid)))}</div><div class="step"><button onclick="hallAdd(${UI.tbl},'${l.pid}',-1)">−</button><span>${l.qty}</span><button onclick="hallAdd(${UI.tbl},'${l.pid}',1)">+</button></div></div>`).join('')+`<div class="line"><b>${t('total')}</b><b>${fm(sum)}</b></div><button class="btn ok full" onclick="closeTable(${UI.tbl})">${t('close_table')}</button>`:`<p class="sub">${t('table_empty')}</p>`}
      <h2>+</h2><div class="grid">${S.products.filter(p=>p.on!==false).map(p=>`<button onclick="hallAdd(${UI.tbl},'${p.id}',1)">${p.emoji}<br><small>${esc(pn(p))}</small>${p.stock?`<br><small>${freeR(p.id)}</small>`:''}</button>`).join('')}</div>`}}
  if(UI.tab==='set'){
    h+=`<div class="card col"><b>${t('link')}</b><div class="sub" style="word-break:break-all">${esc(clientLink())}</div><div id="qr" style="margin-top:8px;max-width:180px"></div></div>
    <div class="row"><div><div class="sub">${t('new_pin')}</div><input placeholder="••••" onchange="setPin(this.value);this.value=''"></div></div>`+
    S.products.map(p=>`<div class="card col"><div class="row">${LANGS.map(([c,n])=>`<input title="${n}" value="${esc(p.names[c])}" onchange="setP('${p.id}','n_${c}',this.value)">`).join('')}</div>
      <div class="row" style="margin-top:6px"><div><div class="sub">${t('price')}</div><input type="number" value="${p.price}" onchange="setP('${p.id}','price',this.value)"></div></div>
      <label class="sub"><input type="checkbox" style="width:auto" ${p.stock?'checked':''} onchange="setP('${p.id}','stock',this.checked);render()"> ${t('tracked')}</label> <button class="btn bad sm" style="float:right" onclick="delProd('${p.id}')">${t('del')}</button></div>`).join('')+
    `<button class="btn sec full" onclick="addProd()">${t('add_prod')}</button><button class="btn sec full" style="margin-top:8px" onclick="resetDemo()">${t('reset')}</button>`}
  return h+`<div class="row" style="margin-top:16px"><button class="btn sec sm" onclick="sessionStorage.removeItem('tl.auth');render()">${t('exit')}</button></div>`+foot()}

function vKitchen(){const k=UI.k,stockP=S.products.filter(p=>p.stock&&p.on!==false);if(!P(k.pid))k.pid=stockP[0]&&stockP[0].id;
  const p=P(k.pid);const bs=[...S.batches].sort((a,b)=>a.end-b.end);
  let h=head()+`<h2>${t('k_put')}</h2><div class="grid">${stockP.map(x=>`<button class="${k.pid===x.id?'sel':''}" onclick="UI.k.pid='${x.id}';UI.k.min=null;render()">${x.emoji}<br><small>${esc(pn(x))}</small>${S.demand[x.id]>0?`<br><small style="color:var(--bad)">+${S.demand[x.id]}</small>`:''}</button>`).join('')}</div>`;
  if(p){const dm=S.demand[p.id]||0;
    h+=(dm>0?`<div class="chip bad" style="margin-top:8px">${t('k_demand',{n:dm})}</div>`:'')+`<div class="card col"><div class="sub">${t('k_qty')}</div><div class="step" style="justify-content:space-between"><button onclick="UI.k.qty=Math.max(1,UI.k.qty-5);render()">−</button><span class="big">${k.qty}</span><button onclick="UI.k.qty+=5;render()">+</button></div>
    <div class="row" style="margin:8px 0">${[10,20,30,50].map(n=>`<button class="btn sec sm" onclick="UI.k.qty=${n};render()">${n}</button>`).join('')}</div>
    <div class="sub">${t('k_time')}</div><input type="number" value="${k.min||(S.lastMin&&S.lastMin[p.id])||25}" oninput="UI.k.min=+this.value"><button class="btn full" style="margin-top:10px" onclick="startBatch()">🔥 ${t('k_put')}</button></div>`}
  h+=`<h2>${t('baking')}</h2>`+(bs.length?bs.map(b=>{const q=P(b.pid),left=b.end-Date.now();return`<div class="card col"><div class="line"><b>${q?q.emoji+' '+esc(pn(q)):'?'} × ${b.qty}</b><span class="timer ${left<=0?'late':''}" data-end="${b.end}">${left>0?mmss(left):t('k_done_now')}</span></div>
    <div class="row"><button class="btn ok" onclick="takeOut('${b.id}')">${t('k_take')}</button><button class="btn sec sm" style="flex:0 0 auto" onclick="dropBatch('${b.id}')">${t('k_del')}</button></div></div>`}).join(''):`<p class="sub">${t('k_none')}</p>`);
  h+=`<h2>${t('ready')}</h2>`+stockP.map(x=>`<span class="chip ok">${x.emoji} ${rdy(x.id)}</span>`).join('');
  return h+`<div class="row" style="margin-top:16px"><button class="btn sec sm" onclick="sessionStorage.removeItem('tl.auth');render()">${t('exit')}</button></div>`+foot()}

function render(){if(!S){document.getElementById('app').innerHTML=head()+`<p class="sub" style="margin-top:40px;text-align:center">${t('loading')}</p>`;return}
  const ae=document.activeElement;
  if(ae&&['INPUT','SELECT'].includes(ae.tagName)&&document.getElementById('app').contains(ae)&&ae.type!=='checkbox'){pendingRender=true;return}
  pendingRender=false;const r=route();let h;
  if(r==='order')h=vClient();else if(r==='desk'||r==='kitchen')h=authed()?(r==='desk'?vDesk():vKitchen()):vPin();else h='';
  document.getElementById('app').innerHTML=h;
  const q=document.getElementById('qr');if(q&&window.qrcode){try{const c=qrcode(0,'M');c.addData(clientLink());c.make();q.innerHTML=c.createSvgTag(4)}catch(e){}}}
document.addEventListener('focusout',()=>{if(pendingRender)setTimeout(()=>{if(pendingRender)render()},300)});

/* ---------- ticking, updates ---------- */
const alerted=new Set();let tick=0;
setInterval(()=>{tick++;
  document.querySelectorAll('[data-end]').forEach(e=>{const l=+e.dataset.end-Date.now();if(l>0)e.textContent=mmss(l);else if(!e.classList.contains('late')){render()}});
  if(S)for(const b of S.batches)if(b.end<=Date.now()&&!alerted.has(b.id)){alerted.add(b.id);const r=route();if(r==='kitchen'||r==='desk'){beep(4);toast(t('l_done',{p:pn(P(b.pid)),n:b.qty}));render()}}
  if(tick%20===0)render()},1000);
async function chk(){try{const r=await fetch(ROOT+'version.json?'+Date.now(),{cache:'no-store'});const j=await r.json();if(j.v&&j.v!==APP_VERSION){UI.upd=true;render()}}catch(e){}}
async function doUpdate(){try{const rs=await navigator.serviceWorker.getRegistrations();for(const r of rs)await r.unregister();for(const k of await caches.keys())await caches.delete(k)}catch(e){}location.reload()}
setInterval(chk,60000);chk();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register(ROOT+'sw.js',{scope:ROOT}).catch(()=>{});
load();render();
(async()=>{await pull();if(S){lastFid=S.fid;render()}startSync();booted=true})();
