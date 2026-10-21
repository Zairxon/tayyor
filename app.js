
const APP_VERSION='1.7.1';
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
t_stock:["Омбор","Ombor","Склад","Inventory"],
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
pick_custom:["Бошқа вақт (қўлда)","Boshqa vaqt (qo'lda)","Своё время (вручную)","Custom time (manual)"],
pick_past:["Вақтни тўғри киритинг: у ўтиб кетган","Vaqtni to'g'ri kiriting: u o'tib ketgan","Укажите время: оно уже прошло","Enter a valid time: it has already passed"],
short_a:["{p}: керак {w}, ҳозир тайёр {r}. Қолгани ~{m} дақиқада тайёр бўлади","{p}: kerak {w}, hozir tayyor {r}. Qolgani ~{m} daqiqada tayyor bo'ladi","{p}: нужно {w}, сейчас готово {r}. Остальное будет готово через ~{m} мин","{p}: need {w}, ready now {r}. The rest will be ready in ~{m} min"],
short_b:["{p}: керак {w}, ҳозир тайёр {r}, яна {n} та ~{m} дақиқада. Қолган {k} тани ошпаздан сўраймиз — жавоб иловада чиқади","{p}: kerak {w}, hozir tayyor {r}, yana {n} ta ~{m} daqiqada. Qolgan {k} tani oshpazdan so'raymiz — javob ilovada chiqadi","{p}: нужно {w}, сейчас готово {r}, ещё {n} шт через ~{m} мин. Остальные {k} шт уточним у повара — ответ придёт в приложении","{p}: need {w}, ready now {r}, {n} more in ~{m} min. We'll ask the cook about the other {k} — the answer will appear in the app"],
short_c:["{p}: керак {w}, ҳозир тайёр {r}. Қолган {k} тани ошпаздан сўраймиз — жавоб иловада чиқади","{p}: kerak {w}, hozir tayyor {r}. Qolgan {k} tani oshpazdan so'raymiz — javob ilovada chiqadi","{p}: нужно {w}, сейчас готово {r}. Остальные {k} шт уточним у повара — ответ придёт в приложении","{p}: need {w}, ready now {r}. We'll ask the cook about the other {k} — the answer will appear in the app"],
wait_ask:["Кутаман — брон қилинг ва ошпаздан сўранг","Kutaman — bron qiling va oshpazdan so'rang","Подожду — забронировать и спросить повара","I'll wait — reserve and ask the cook"],
none_now:["Ҳозир тайёр эмас","Hozir tayyor emas","Сейчас нет готовой","None ready right now"],
st_ask:["Ошпаз жавобини кутамиз","Oshpaz javobini kutamiz","Ждём ответа повара","Waiting for the cook's answer"],
declined:["ошпаз {n} тани пиширмайди","oshpaz {n} tani pishirmaydi","повар не будет печь {n} шт","the cook won't bake {n}"],
k_req_title:["Мижозлар сўрови","Mijozlar so'rovi","Запросы клиентов","Customer requests"],
k_req_line:["Буюртма №{no}: {p} — яна {n} та керак","Buyurtma №{no}: {p} — yana {n} ta kerak","Заказ №{no}: {p} — нужно ещё {n} шт","Order #{no}: {p} — {n} more needed"],
k_will:["Пишираман","Pishiraman","Испеку","I'll bake"],
k_wont:["Пиширмайман","Pishirmayman","Не буду печь","Won't bake"],
l_ask:["Буюртма №{no}: {p} яна {n} та — ошпаз жавоби керак","Buyurtma №{no}: {p} yana {n} ta — oshpaz javobi kerak","Заказ №{no}: {p} ещё {n} шт — нужен ответ повара","Order #{no}: {p} {n} more — cook's answer needed"],
l_ans_bake:["Ошпаз: {p} ~{m} дақиқада тайёр","Oshpaz: {p} ~{m} daqiqada tayyor","Повар: {p} будет через ~{m} мин","Cook: {p} will be ready in ~{m} min"],
l_ans_no:["Ошпаз: {p} ({n} та) пишмайди","Oshpaz: {p} ({n} ta) pishmaydi","Повар: {p} ({n} шт) печь не будет","Cook: won't bake {p} ({n})"],
c_new:["Янги буюртма","Yangi buyurtma","Новый заказ","New order"],
c_hist:["Тарих","Tarix","История","History"],
repeat:["Қайтариш","Qaytarish","Повторить","Repeat"],
repeat_ok:["Буюртма саватга қўшилди — текширинг ва юборинг","Buyurtma savatga qo'shildi — tekshiring va yuboring","Заказ добавлен в корзину — проверьте и оформите","Order added to your cart — review and place it"],
no_active:["Фаол буюртмалар йўқ","Faol buyurtmalar yo'q","Активных заказов нет","No active orders"],
no_hist:["Тарих бўш","Tarix bo'sh","История пуста","History is empty"],
cancel_order:["Буюртмани бекор қилиш","Buyurtmani bekor qilish","Отменить заказ","Cancel order"],
inv_receive:["Товар келди","Tovar keldi","Поступление товара","Goods received"],
inv_qty:["Сони","Soni","Количество","Quantity"],
inv_cost:["Харид нархи (1 дона)","Xarid narxi (1 dona)","Закупочная цена (за 1 шт)","Purchase price (per unit)"],
inv_accept:["Товарни қабул қилиш","Tovarni qabul qilish","Принять товар","Receive goods"],
inv_left:["Қолдиқ","Qoldiq","Остаток","In stock"],
inv_cost_s:["Харид","Xarid","Закупка","Cost"],
inv_price:["Сотув","Sotuv","Продажа","Price"],
inv_margin:["Маржа","Marja","Маржа","Margin"],
inv_value:["Омбор қиймати","Ombor qiymati","Стоимость склада","Stock value"],
inv_profit:["Фойда (бугун)","Foyda (bugun)","Прибыль сегодня","Profit today"],
inv_rev:["Қўшимчалар сотуви (бугун)","Qo'shimchalar sotuvi (bugun)","Допы: продано сегодня","Extras sold today"],
inv_log:["Сўнгги кирим","So'nggi kirim","Последние поступления","Recent receipts"],
inv_samsa:["Самса: тайёр сонини тўғрилаш","Samsa: tayyor sonini to'g'rilash","Самса: поправить готовое","Samsa: adjust ready count"],
inv_none:["Ҳисоб юритилмайди — қолдиқни киритинг","Hisob yuritilmaydi — qoldiqni kiriting","Учёт не ведётся — введите остаток","Not tracked — enter the stock"],
rcv_ok:["Қабул қилинди","Qabul qilindi","Принято","Received"],
out_of_stock:["Тугаган","Tugagan","Нет в наличии","Out of stock"],
confirm_cancel:["№{no} буюртмани бекор қилайсизми?","№{no} buyurtmani bekor qilasizmi?","Отменить заказ №{no}?","Cancel order #{no}?"],
l_cancel_c:["Мижоз №{no} буюртмани бекор қилди: {s}","Mijoz №{no} buyurtmani bekor qildi: {s}","Клиент отменил заказ №{no}: {s}","Customer cancelled order #{no}: {s}"],
confirm_del_table:["{n}-столни ўчирасизми?","{n}-stolni o'chirasizmi?","Удалить стол {n}?","Delete table {n}?"],
confirm_del_prod:["«{p}» ўчирилсинми?","«{p}» o'chirilsinmi?","Удалить «{p}»?","Delete “{p}”?"],
confirm_drop_batch:["{p} × {n} партиясини олиб ташлайсизми?","{p} × {n} partiyasini olib tashlaysizmi?","Убрать партию {p} × {n} из духовки?","Remove the batch {p} × {n} from the oven?"],
confirm_reset:["Жорий маълумотлар демо маълумотлар билан алмаштирилади. Давом этасизми?","Joriy ma'lumotlar demo ma'lumotlar bilan almashtiriladi. Davom etasizmi?","Все текущие данные будут заменены демо-данными. Продолжить?","All current data will be replaced with demo data. Continue?"],
phone_bad:["Рақам нотўғри: +998 дан кейин 9 та рақам бўлиши керак","Raqam noto'g'ri: +998 dan keyin 9 ta raqam bo'lishi kerak","Неверный номер: после +998 должно быть 9 цифр","Invalid number: +998 must be followed by 9 digits"],
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
async function pull(force){if(!sb)return false;
  try{let{data,error}=await sb.rpc('tayyor_get',{p_slug:SLUG});if(error)throw error;
    if(!data){await sb.rpc('tayyor_init',{p_slug:SLUG,p_pin:'0000',p_data:(()=>{const s=seed();return s})()});({data,error}=await sb.rpc('tayyor_get',{p_slug:SLUG}));if(error||!data)throw error||new Error('init')}
    if(!force&&(queue.length||syncing))return true;
    S=data.data;S._rev=data.rev;save();setOnline(true);return true}
  catch(e){setOnline(false);return false}}
function mutate(fn){const r=fn();queue.push(fn);save();afterChange();flush();return r}
async function flush(){if(syncing||!queue.length||!sb||!S)return;syncing=true;
  try{while(queue.length){const n=queue.length,base=S._rev??0;
    const{data,error}=await sb.rpc('tayyor_put',{p_slug:SLUG,p_data:strip(),p_rev:base});if(error)throw error;
    if(data>=0){S._rev=data;queue.splice(0,n);save();setOnline(true)}
    else if(data===-1){const pend=queue.slice();queue=[];if(!await pull(true))throw new Error('pull');for(const f of pend){f();queue.push(f)}afterChange()}
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
function cartAdd(pid,d){const p=P(pid);if(d>0&&p&&!p.stock&&invTracked(pid)&&(UI.cart[pid]||0)+d>invFree(pid))return toast(t('out_of_stock'));UI.cart[pid]=Math.max(0,(UI.cart[pid]||0)+d);render()}
const fmtPh=d=>[(d||'').slice(0,2),(d||'').slice(2,5),(d||'').slice(5,7),(d||'').slice(7,9),(d||'').slice(9)].filter(Boolean).join(' ');
const phoneView=d=>d?'+998 '+fmtPh(d):'';
const phoneOk=d=>!d||d.length===9;
const phoneShowErr=()=>!phoneOk(UI.phone)&&(UI.phone.length>9||UI.phTouched);
function phoneErr(){return`<div id="phErr" class="perr" style="display:${phoneShowErr()?'block':'none'}">${t('phone_bad')}</div>`}
function phUpd(){const e=document.getElementById('phErr');if(e)e.style.display=phoneShowErr()?'block':'none';const i=document.getElementById('ph');if(i)i.style.borderColor=phoneShowErr()?'var(--bad)':''}
function onPhone(el){let d=el.value.replace(/\D/g,'').slice(3);if(d.length>9&&d.startsWith('998'))d=d.slice(3);d=d.slice(0,15);UI.phone=d;el.value=d?phoneView(d):'+998 ';phUpd()}
function phBlur(el){UI.phTouched=true;if(!UI.phone)el.value='';phUpd()}
function pickSel(v){UI.pick=+v;const e=document.getElementById('pt');if(e){e.style.display=UI.pick===-1?'block':'none';if(UI.pick===-1)e.focus()}}
function pickAt(){if(UI.pick!==-1)return Date.now()+UI.pick*60000;const m=(UI.pickTime||'').split(':').map(Number);if(m.length<2||isNaN(m[0]))return null;const d=new Date();d.setHours(m[0],m[1],0,0);return d.getTime()}
function tryOrder(){if(UI.pick===-1){const at=pickAt();if(at===null||at<Date.now()-60000){toast(t('pick_past'));const e=document.getElementById('pt');if(e)e.focus();return}}
  if(!phoneOk(UI.phone)){UI.phTouched=true;phUpd();toast(t('phone_bad'));const i=document.getElementById('ph');if(i)i.focus();return}
  const a=analyze(UI.cart);if(!a.length)return toast(t('cart_empty'));
  if(a.some(x=>x.stock&&x.take<x.want))UI.modal=a;else placeOrder('all');render()}
function placeOrder(mode){UI.modal=null;let oid=null;
  const cart={...UI.cart},cname=UI.name.trim(),cphone=UI.phone?'+998 '+fmtPh(UI.phone):'',cat=pickAt()||Date.now(),coid='o'+uid();
  mutate(()=>{const lines=[];oid=null;
    for(const a of analyze(cart)){
      if(!a.stock){const q=Math.min(a.want,invFree(a.pid));if(q>0)lines.push({pid:a.pid,qty:q,rr:q,rb:0,want:a.want});continue}
      const rb=mode==='all'?a.wait:0,ask=mode==='all'?a.none:0,qty=a.take+rb+ask;
      if(qty>0)lines.push({pid:a.pid,qty,rr:a.take,rb,ask,want:a.want})}
    if(!lines.length){return}
    const no=S.next++;oid=coid;
    S.orders.push({id:oid,no,type:'pickup',name:cname,phone:cphone,pickupAt:cat,created:Date.now(),status:'open',lines});
    feed('l_new',{no,oid});for(const l of lines)if(l.ask>0)feed('l_ask',{no,oid,pid:l.pid,n:l.ask})});
  if(oid){const mine=JSON.parse(localStorage.getItem('tl.mine')||'[]');mine.unshift(oid);localStorage.setItem('tl.mine',JSON.stringify(mine.slice(0,60)));
    {const od=S.orders.find(x=>x.id===oid),hh=histLoad();hh.unshift({id:oid,no:od?od.no:0,t:Date.now(),items:Object.entries(cart).filter(([,q])=>q>0),sum:Object.entries(cart).reduce((a,[pid,q])=>a+(P(pid)?P(pid).price*q:0),0)});try{localStorage.setItem('tl.hist',JSON.stringify(hh.slice(0,60)))}catch(e){}}
    UI.cart={};UI.ctab='mine';toast(t('ord_placed'));try{window.Notification&&Notification.permission==='default'&&Notification.requestPermission()}catch(e){}}
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
function dropBatch(bid){const b0=S.batches.find(x=>x.id===bid);if(!b0||!confirm(t('confirm_drop_batch',{p:pn(P(b0.pid)),n:b0.qty})))return;mutate(()=>{const b=S.batches.find(x=>x.id===bid);if(!b)return;S.batches=S.batches.filter(x=>x!==b);
  let over=resv(b.pid).b-bakeTot(b.pid);
  for(const o of openP().sort((a,b)=>b.created-a.created))for(const l of o.lines)if(l.pid===b.pid&&over>0){const m=Math.min(l.rb,over);l.rb-=m;l.qty-=m;over-=m;S.demand[b.pid]=(S.demand[b.pid]||0)+m}})}
const dayKey=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function recSale(lines){S.sold=S.sold||{};const k=dayKey(),d=S.sold[k]=S.sold[k]||{};
  for(const l of lines){const p=P(l.pid);if(!p||l.qty<=0)continue;const e=d[l.pid]=d[l.pid]||{q:0,s:0};e.q+=l.qty;e.s+=l.qty*p.price;e.c=(e.c||0)+(!p.stock&&invOf(l.pid)?invOf(l.pid).cost*l.qty:0)}
  for(const key of Object.keys(S.sold).sort().slice(0,-35))delete S.sold[key]}
const askN=pid=>openP().reduce((a,o)=>a+o.lines.filter(l=>l.pid===pid).reduce((b,l)=>b+(l.ask||0),0),0);
function askAnswer(oid,pid,bake){const el=document.getElementById('am-'+oid+'-'+pid),m=Math.max(1,+(el&&el.value)||(S.lastMin&&S.lastMin[pid])||25),bid=uid();
  mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o||o.status!=='open')return;const l=o.lines.find(x=>x.pid===pid);if(!l||!(l.ask>0))return;const n=l.ask;
    if(bake){S.batches.push({id:bid,pid,qty:n,start:Date.now(),end:Date.now()+m*60000});l.rb+=n;l.ask=0;S.lastMin=S.lastMin||{};S.lastMin[pid]=m;feed('l_batch',{pid,n,m});feed('l_ans_bake',{no:o.no,oid,pid,m})}
    else{l.qty-=n;l.ask=0;l.declined=(l.declined||0)+n;feed('l_ans_no',{no:o.no,oid,pid,n});o.lines=o.lines.filter(x=>x.qty>0);if(!o.lines.length){o.status='cancelled';feed('l_cancel',{no:o.no})}}})}
function giveOrder(oid,partial){mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o)return;
  for(const l of o.lines){if(P(l.pid)&&P(l.pid).stock)S.ready[l.pid]=Math.max(0,rdy(l.pid)-l.rr);else if(P(l.pid))invDeduct(l.pid,l.rr);if(partial){l.qty=l.rr;l.rb=0;l.ask=0}}
  o.lines=o.lines.filter(l=>l.qty>0);recSale(o.lines);o.status='done'})}
function cancelOrder(oid){const o0=S.orders.find(x=>x.id===oid);if(!o0)return;if(!confirm(t('confirm_cancel',{no:o0.no})))return;
  mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o)return;o.status='cancelled';feed(ROLE==='client'?'l_cancel_c':'l_cancel',{no:o.no,oid:o.id})});
  if(ROLE==='client')toast(t('l_cancel',{no:o0.no}))}
function adj(pid,d){mutate(()=>{S.ready[pid]=Math.max(0,rdy(pid)+d)})}
const tbls=()=>(S.settings.tableIds&&S.settings.tableIds.length?S.settings.tableIds:Array.from({length:S.settings.tables||12},(_,i)=>i+1));
function addTable(){mutate(()=>{const ids=tbls().slice();S.settings.tableIds=[...ids,(ids.length?Math.max(...ids):0)+1]})}
function delTable(n){if(hallOrder(n))return toast(t('table_busy'));if(!confirm(t('confirm_del_table',{n})))return;mutate(()=>{S.settings.tableIds=tbls().filter(x=>x!==n)});UI.tbl=null;render()}
function hallOrder(n){return S.orders.find(o=>o.type==='hall'&&o.table===n&&o.status==='open')}
function hallAdd(n,pid,d){let fail=false;mutate(()=>{const p=P(pid);if(d>0&&((p.stock&&freeR(pid)<d)||(!p.stock&&invTracked(pid)&&invFree(pid)<d))){fail=true;return}
  let o=hallOrder(n);if(!o){if(d<0)return;o={id:'h'+uid(),no:0,type:'hall',table:n,created:Date.now(),status:'open',lines:[]};S.orders.push(o)}
  let l=o.lines.find(x=>x.pid===pid);if(!l){if(d<0)return;l={pid,qty:0,rr:0,rb:0};o.lines.push(l)}
  l.qty+=d;if(p.stock)S.ready[pid]=Math.max(0,rdy(pid)-d);else invDeduct(pid,d);
  if(l.qty<=0)o.lines=o.lines.filter(x=>x!==l);if(!o.lines.length)S.orders=S.orders.filter(x=>x!==o)});
  if(fail)toast(t('no_stock'))}
function closeTable(n){mutate(()=>{const o=hallOrder(n);if(o){recSale(o.lines);o.status='closed'}});UI.tbl=null;render()}
function setP(id,f,v){mutate(()=>{const p=P(id);if(!p)return;if(f==='price')p[f]=Math.max(0,+v||0);else if(f==='stock')p.stock=!!v;else if(f.startsWith('n_'))p.names[f.slice(2)]=v})}
function addProd(){mutate(()=>{const id='p'+uid();S.products.push({id,emoji:'🥟',names:{uzc:'Янги',uzl:'Yangi',ru:'Новое',en:'New'},price:5000,stock:true,on:true})})}
function delProd(id){if(!confirm(t('confirm_del_prod',{p:pn(P(id))})))return;mutate(()=>{S.products=S.products.filter(p=>p.id!==id)});render()}
function resetDemo(){if(!confirm(t('confirm_reset')))return;localStorage.removeItem('tl.mine');mutate(()=>{const n=seed();for(const k of Object.keys(S))if(k!=='_rev')delete S[k];Object.assign(S,n)})}

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
    const ok=r==='desk'||(r==='kitchen'&&['l_new','l_batch','l_done','l_ask','l_cancel','l_cancel_c'].includes(f.k))||(r==='order'&&['l_ordready','l_ans_bake','l_ans_no'].includes(f.k)&&mine.includes(f.a.oid));
    if(!ok)continue;toast(fmtFeed(f));beep(f.k==='l_ask'?4:f.k==='l_new'||f.k==='l_ordready'?3:1);
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

function prodStatus(p){if(!p.stock)return invTracked(p.id)&&invFree(p.id)<=0?`<span class="chip bad">${t('out_of_stock')}</span>`:'';const fr=freeR(p.id);return fr>0?`<span class="chip ok">${t('in_stock',{n:fr})}</span>`:`<span class="chip bad">${t('none_now')}</span>`}
function orderStatus(o){if(o.status==='done')return`<span class="chip">${t('st_done')}</span>`;if(o.status==='cancelled')return`<span class="chip bad">${t('st_cancel')}</span>`;
  if(isReady(o))return`<span class="chip ok">${t('st_ready')}</span>`;
  if(o.lines.some(l=>l.ask>0))return`<span class="chip warn">${t('st_ask')}</span>`;
  let at=0;for(const l of o.lines)if(l.rb>0)at=Math.max(at,etaLine(o,l)||0);
  return`<span class="chip warn">${t('st_wait',{m:at?mins(at):'?'})}</span>`}
function modalTxt(x){const p=esc(pn(P(x.pid)));
  if(x.none>0)return x.wait>0?t('short_b',{p,w:x.want,r:x.take,n:x.wait,m:mins(x.at),k:x.none}):t('short_c',{p,w:x.want,r:x.take,k:x.none});
  return t('short_a',{p,w:x.want,r:x.take,m:mins(x.at)})}
const histLoad=()=>{try{return JSON.parse(localStorage.getItem('tl.hist')||'[]')}catch(e){return[]}};
const dtm=ts=>{const d=new Date(ts);return String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')+' '+hm(ts)};
function orderCard(o){return`<div class="card col"><div class="line"><b>${t('order_no',{n:o.no})}</b><span class="sub">${t('at_time',{t:hm(o.pickupAt)})}</span></div>${o.lines.map(l=>`<div class="line"><span>${esc(pn(P(l.pid)))} × ${l.qty}</span>${l.declined>0?`<span class="chip bad">${t('declined',{n:l.declined})}</span>`:''}${l.rb>0?`<span class="sub">${t('waiting',{n:l.rb})}</span>`:''}</div>`).join('')}${orderStatus(o)}<button class="btn bad full" style="margin-top:8px" onclick="cancelOrder('${o.id}')">${t('cancel_order')}</button></div>`}
function repeatOrder(i){const h=histLoad()[i];if(!h)return;UI.cart={};for(const[pid,q]of h.items)if(P(pid)&&P(pid).on!==false)UI.cart[pid]=q;UI.ctab='new';render();toast(t('repeat_ok'));window.scrollTo(0,0)}
function vClient(){const items=S.products.filter(p=>p.on!==false),tab=UI.ctab||'new';
  const tot=items.reduce((a,p)=>a+(UI.cart[p.id]||0)*p.price,0);
  const mineIds=JSON.parse(localStorage.getItem('tl.mine')||'[]'),mine=mineIds.map(id=>S.orders.find(o=>o.id===id)).filter(Boolean),act=mine.filter(o=>o.status==='open');
  let h=head()+`<div class="tabs">${[['new',t('c_new')],['mine',t('my_orders')+(act.length?`<span class="badge">${act.length}</span>`:'')],['hist',t('c_hist')]].map(([k,l])=>`<button class="${tab===k?'on':''}" onclick="UI.ctab='${k}';render()">${l}</button>`).join('')}</div>`;
  if(tab==='mine')return h+(act.length?act.map(orderCard).join(''):`<p class="sub">${t('no_active')}</p><button class="btn full" onclick="UI.ctab='new';render()">${t('c_new')}</button>`)+foot();
  if(tab==='hist'){const hs=histLoad().map((x,i)=>[x,i]).filter(([x])=>{const o=S.orders.find(y=>y.id===x.id);return !o||o.status!=='open'});
    return h+(hs.length?hs.map(([x,i])=>{const o=S.orders.find(y=>y.id===x.id);return`<div class="card col"><div class="line"><b>${t('order_no',{n:x.no})}</b><span class="sub">${dtm(x.t)}</span></div>${x.items.map(([pid,q])=>`<div class="line"><span>${P(pid)?esc(pn(P(pid))):'?'} × ${q}</span></div>`).join('')}<div class="line"><b>${fm(x.sum)}</b>${o?orderStatus(o):''}</div><button class="btn full" style="margin-top:6px" onclick="repeatOrder(${i})">🔁 ${t('repeat')}</button></div>`}).join(''):`<p class="sub">${t('no_hist')}</p>`)+foot()}
  h+=`<h1 class="ask">${t('what_order')}</h1>`;
  h+=items.map(p=>`<div class="card"><div class="pe">${p.emoji}</div><div class="pi"><b>${esc(pn(p))}</b><div class="sub">${fm(p.price)}</div>${prodStatus(p)}</div><div class="step"><button onclick="cartAdd('${p.id}',-1)">−</button><span>${UI.cart[p.id]||0}</span><button onclick="cartAdd('${p.id}',1)">+</button></div></div>`).join('');
  h+=`<h2>${t('pickup_when')}</h2><select onchange="pickSel(this.value)">${[[0,t('now')],[30,t('in_min',{n:30})],[60,t('in_hour')],[90,t('in_min',{n:90})],[120,t('in_min',{n:120})],[-1,t('pick_custom')]].map(([v,l])=>`<option value="${v}"${UI.pick===v?' selected':''}>${l}</option>`).join('')}</select><input type="time" id="pt" value="${esc(UI.pickTime||'')}" onchange="UI.pickTime=this.value" style="margin-top:8px;display:${UI.pick===-1?'block':'none'}">
  <div class="row" style="margin-top:8px"><input placeholder="${t('name')}" value="${esc(UI.name)}" oninput="UI.name=this.value"><div style="flex:1;min-width:140px"><input id="ph" type="tel" placeholder="+998 90 123 45 67" autocomplete="tel" value="${esc(phoneView(UI.phone))}" oninput="onPhone(this)" onfocus="if(!this.value)this.value='+998 '" onblur="phBlur(this)">${phoneErr()}</div></div>${foot()}
  <div class="bar"><div><div class="sub">${t('total')}</div><b style="font-size:20px">${fm(tot)}</b></div><button class="btn" onclick="tryOrder()">${t('do_order')}</button></div>`;
  if(UI.modal){const a=UI.modal.filter(x=>x.stock&&x.take<x.want),anyW=a.some(x=>x.wait>0||x.none>0),anyN=a.some(x=>x.none>0),anyT=UI.modal.some(x=>x.take>0&&x.stock);
    h+=`<div class="modal" onclick="if(event.target===this){UI.modal=null;render()}"><div><h2 style="margin-top:0">${t('short_title')}</h2>${a.map(x=>`<div class="card col">${modalTxt(x)}</div>`).join('')}
    ${anyW?`<button class="btn full" style="margin:6px 0" onclick="placeOrder('all')">${t(anyN?'wait_ask':'wait_all')}</button>`:''}
    ${anyT||UI.modal.some(x=>!x.stock)?`<button class="btn sec full" style="margin:6px 0" onclick="placeOrder('ready')">${t('take_ready')}</button>`:''}
    ${!anyW&&!anyT?`<p>${t('nothing')}</p>`:''}
    <button class="btn sec full" onclick="UI.modal=null;render()">${t('cancel')}</button></div></div>`}
  return h}

const invOf=pid=>(S.inv&&S.inv[pid])||null;
const invTracked=pid=>!!invOf(pid);
const invReserved=pid=>openP().reduce((a,o)=>a+o.lines.filter(l=>l.pid===pid).reduce((b,l)=>b+l.qty,0),0);
const invFree=pid=>{const i=invOf(pid);return i?Math.max(0,i.q-invReserved(pid)):Infinity};
function invDeduct(pid,d){const i=invOf(pid);if(i)i.q=Math.max(0,i.q-d)}
function receive(pid,q,cost){mutate(()=>{S.inv=S.inv||{};const i=S.inv[pid]||{q:0,cost:0},nq=i.q+q;
  i.cost=nq>0?Math.round((i.q*i.cost+q*cost)/nq):cost;i.q=nq;S.inv[pid]=i;
  S.inLog=S.inLog||[];S.inLog.unshift({t:Date.now(),pid,q,cost});S.inLog=S.inLog.slice(0,60)})}
function setInv(pid,f,v){mutate(()=>{S.inv=S.inv||{};const i=S.inv[pid]=S.inv[pid]||{q:0,cost:0};i[f]=Math.max(0,+v||0)})}
function rcvSel(pid){UI.rcv={...(UI.rcv||{}),pid,c:(invOf(pid)||{}).cost||''};const e=document.getElementById('rc');if(e)e.value=UI.rcv.c}
function doReceive(){const r=UI.rcv||{},ex=S.products.filter(p=>!p.stock),pid=r.pid||(ex[0]&&ex[0].id),q=Math.floor(+r.q||0),c=Math.max(0,+r.c||0);
  if(!pid||q<1)return toast(t('inv_qty'));receive(pid,q,c);UI.rcv={pid,q:'',c};toast(t('rcv_ok'));render()}
function invHTML(){const ex=S.products.filter(p=>!p.stock&&p.on!==false),r=UI.rcv||{},sel=r.pid&&P(r.pid)&&!P(r.pid).stock?r.pid:(ex[0]&&ex[0].id);
  const kpi=(l,v)=>`<div class="kpi"><div class="kl">${l}</div><div class="kv" style="font-size:22px">${v}</div></div>`;
  const val=ex.reduce((a,p)=>a+(invOf(p.id)?invOf(p.id).q*invOf(p.id).cost:0),0),td=(S.sold&&S.sold[dayKey()])||{};let rev=0,prof=0;
  for(const p of ex){const e=td[p.id];if(e){rev+=e.s;prof+=e.s-(e.c||0)}}
  let h=`<div class="kpis">${kpi(t('inv_value'),fm(val))}${kpi(t('inv_rev'),fm(rev))}${kpi(t('inv_profit'),fm(prof))}</div>`;
  h+=`<div class="card col"><b>${t('inv_receive')}</b><select style="margin-top:8px" onchange="rcvSel(this.value)">${ex.map(p=>`<option value="${p.id}"${p.id===sel?' selected':''}>${p.emoji} ${esc(pn(p))}</option>`).join('')}</select>
    <div class="row" style="margin-top:8px"><div><div class="sub">${t('inv_qty')}</div><input type="number" min="1" inputmode="numeric" value="${esc(r.q||'')}" oninput="UI.rcv={...(UI.rcv||{}),pid:'${sel}',q:this.value}"></div>
    <div><div class="sub">${t('inv_cost')}</div><input id="rc" type="number" min="0" inputmode="numeric" value="${esc(r.c!==undefined&&r.c!==''?r.c:((invOf(sel)||{}).cost||''))}" oninput="UI.rcv={...(UI.rcv||{}),pid:'${sel}',c:this.value}"></div></div>
    <button class="btn ok full" style="margin-top:10px" onclick="doReceive()">${t('inv_accept')}</button></div>`;
  h+=ex.map(p=>{const i=invOf(p.id),q=i?i.q:'',cost=i?i.cost:'',mg=p.price>0&&cost>0?Math.round((p.price-cost)/p.price*100)+'%':'—';
    const lv=!i?['',t('inv_none')]:i.q<=0?['bad',t('d_out')]:i.q<=3?['warn',t('d_low')]:['ok',t('d_ok')];
    return`<div class="card col"><div class="line"><b>${p.emoji} ${esc(pn(p))}</b><span class="chip ${lv[0]}">${lv[1]}</span></div>
    <div class="row"><div><div class="sub">${t('inv_left')}</div><input type="number" min="0" value="${q}" placeholder="—" onchange="setInv('${p.id}','q',this.value)"></div><div><div class="sub">${t('inv_cost_s')}</div><input type="number" min="0" value="${cost}" placeholder="—" onchange="setInv('${p.id}','cost',this.value)"></div><div><div class="sub">${t('inv_price')}</div><input type="number" min="0" value="${p.price}" onchange="setP('${p.id}','price',this.value)"></div></div>
    <div class="sub">${t('inv_margin')}: <b>${mg}</b> · ${t('inv_value')}: ${fm(i?i.q*i.cost:0)}</div></div>`}).join('');
  const lg=(S.inLog||[]).slice(0,10);
  if(lg.length)h+=`<h2>${t('inv_log')}</h2>`+lg.map(x=>`<div class="line sub"><span>${dtm(x.t)} · ${P(x.pid)?esc(pn(P(x.pid))):'?'} · +${x.q} × ${fm(x.cost)}</span></div>`).join('');
  h+=`<h2>${t('inv_samsa')}</h2>`+S.products.filter(p=>p.stock&&p.on!==false).map(p=>`<div class="line" style="align-items:center"><span>${p.emoji} ${esc(pn(p))}: <b>${rdy(p.id)}</b></span><span>${[-5,-1,1,5].map(d=>`<button class="btn sec sm" onclick="adj('${p.id}',${d})">${d>0?'+':''}${d}</button>`).join(' ')}</span></div>`).join('');
  return h}
function sumDay(k){const d=(S.sold&&S.sold[k])||{};let q=0,s=0;for(const pid in d){const p=P(pid);if(p&&p.stock)q+=d[pid].q;s+=d[pid].s}return{q,s}}
function dashHTML(){
  const st=S.products.filter(p=>p.stock&&p.on!==false);
  const T=st.reduce((a,p)=>{const r=resv(p.id);a.r+=rdy(p.id);a.f+=freeR(p.id);a.v+=r.r+r.b;a.b+=bakeTot(p.id);return a},{r:0,f:0,v:0,b:0});
  const td=sumDay(dayKey()),halls=S.orders.filter(o=>o.type==='hall'&&o.status==='open'),open=openP().length;
  const kpi=(l,v,s,c)=>`<div class="kpi"><div class="kl">${l}</div><div class="kv">${v}</div><div class="ks">${s||'&nbsp;'}</div></div>`;
  let h=`<div class="kpis">${kpi(t('k_accept'),T.f+' <small>'+t('pcs')+'</small>',t('k_ready')+': '+T.r,T.f?'ok':'bad')}${kpi(t('baking'),T.b+' <small>'+t('pcs')+'</small>',t('k_resv')+': '+T.v,'')}${kpi(t('k_sold'),td.q+' <small>'+t('pcs')+'</small>',t('k_rev')+': '+fm(td.s),'')}${kpi(t('k_open'),open,t('k_hall')+': '+halls.length,'')}</div>`;
  h+=`<h2>${t('d_title')}</h2><div class="tiles">`+st.map(p=>{const r=resv(p.id),f=freeR(p.id),fb=freeB(p.id),b=bakeTot(p.id),rd=rdy(p.id);
    const bt=S.batches.filter(x=>x.pid===p.id).sort((a,c)=>a.end-c.end)[0],sold=((S.sold&&S.sold[dayKey()])||{})[p.id];
    const lvl=f+fb<=0?'bad':f+fb<=3?'warn':'ok';
    return`<div class="tile ${lvl}"><div class="th">${p.emoji} ${esc(pn(p))}</div><div class="tv ${f>0?'okc':'badc'}">${f}</div><div class="tl">${t('free')}</div>
    <div class="tr"><span>${t('reserved')}</span><b>${r.r}</b></div><div class="tr"><span>${t('ready')}</span><b>${rd}</b></div><div class="tr"><span>${t('baking')}</span><b class="ovc">${b}</b></div><div class="tr"><span>${t('d_sold')}</span><b>${sold?sold.q:0}</b></div>
    <div class="ts">${bt?(fb>0?t('d_later',{n:fb,m:mins(eta(p.id,fb)||Date.now())}):t('baking')+' ~'+mins(bt.end)+' '+t('min')):t('d_nobake')}</div></div>`}).join('')+'</div>';
  return h}
function vDesk(){const open=openP().sort((a,b)=>a.pickupAt-b.pickupAt);
  let h=head()+`<div class="tabs">${[['orders',t('t_orders')+(open.length?`<span class="badge">${open.length}</span>`:'')],['hall',t('t_hall')],['stock',t('t_stock')],['set',t('t_set')]].map(([k,l])=>`<button class="${UI.tab===k?'on':''}" onclick="UI.tab='${k}';render()">${l}</button>`).join('')}</div>`;
  if(UI.tab==='orders'){
    h+=dashHTML()+`<h2>${t('d_orders')}</h2>`;
    h+=open.length?open.map(o=>`<div class="card col"><div class="line"><b>${t('order_no',{n:o.no})} ${esc(o.name)}</b><b>${t('at_time',{t:hm(o.pickupAt)})}</b></div>${o.phone?`<div class="sub">☎ ${esc(o.phone)}</div>`:''}
      ${o.lines.map(l=>`<div class="line"><span>${P(l.pid)?P(l.pid).emoji+' '+esc(pn(P(l.pid))):'?'} × ${l.qty}</span><span>${l.rr>=l.qty?`<span class="chip ok">${t('ready')}</span>`:`${l.rr>0?`<span class="chip ok">${t('ready')} ${l.rr}</span>`:''}${l.rb>0?`<span class="chip warn">${t('waiting',{n:l.rb})} · ~${mins(etaLine(o,l)||Date.now())} ${t('min')}</span>`:''}${l.ask>0?`<span class="chip bad">${t('st_ask')}: ${l.ask}</span>`:''}${l.declined>0?`<span class="chip bad">${t('declined',{n:l.declined})}</span>`:''}`}${l.want>l.qty?`<span class="chip bad">${t('asked',{w:l.want,q:l.qty})}</span>`:''}</span></div>`).join('')}
      <div class="row" style="margin-top:8px">${isReady(o)?`<button class="btn ok sm" onclick="giveOrder('${o.id}')">${t('give')}</button>`:`<button class="btn sm" onclick="giveOrder('${o.id}',true)" ${o.lines.some(l=>l.rr>0)?'':'disabled style="opacity:.4"'}>${t('give_part')}</button>`}<button class="btn bad sm" onclick="cancelOrder('${o.id}')">${t('cancel')}</button></div></div>`).join(''):`<p class="sub">${t('no_orders')}</p>`;
    h+=`<h2>🔔</h2>`+S.feed.slice(-8).reverse().map(f=>`<div class="line sub"><span>${fmtFeed(f)}</span><span>${hm(f.t)}</span></div>`).join('')}
  if(UI.tab==='stock')h+=invHTML();
  if(UI.tab==='hall'){
    h+=`<div class="grid tb">${tbls().map(i=>`<button class="${hallOrder(i)?'occ':''} ${UI.tbl===i?'sel':''}" onclick="UI.tbl=${i};render()">${i}</button>`).join('')}</div><div class="row" style="margin-top:8px"><button class="btn sec sm" onclick="addTable()">${t('add_table')}</button>${UI.tbl&&!hallOrder(UI.tbl)?`<button class="btn bad sm" onclick="delTable(${UI.tbl})">${t('del_table')} ${UI.tbl}</button>`:''}</div>`;
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

function reqHTML(){const rs=[];for(const o of openP().sort((a,b)=>a.created-b.created))for(const l of o.lines)if(l.ask>0)rs.push([o,l]);
  if(!rs.length)return'';
  return`<h2 style="color:var(--bad)">🔔 ${t('k_req_title')} (${rs.length})</h2>`+rs.map(([o,l])=>`<div class="card col" style="border-color:var(--bad)"><b>${t('k_req_line',{no:o.no,p:esc(pn(P(l.pid))),n:l.ask})}</b><div class="sub">${t('at_time',{t:hm(o.pickupAt)})}</div><div class="row" style="margin-top:6px;flex-wrap:nowrap"><input id="am-${o.id}-${l.pid}" type="number" min="1" value="${(S.lastMin&&S.lastMin[l.pid])||25}"><span class="sub" style="flex:0 0 auto">${t('min')}</span></div><div class="row" style="margin-top:8px"><button class="btn ok" onclick="askAnswer('${o.id}','${l.pid}',true)">🔥 ${t('k_will')}</button><button class="btn bad" onclick="askAnswer('${o.id}','${l.pid}',false)">${t('k_wont')}</button></div></div>`).join('')}
function vKitchen(){const k=UI.k,stockP=S.products.filter(p=>p.stock&&p.on!==false);if(!P(k.pid))k.pid=stockP[0]&&stockP[0].id;
  const p=P(k.pid);const bs=[...S.batches].sort((a,b)=>a.end-b.end);
  let h=head()+reqHTML()+`<h2>${t('k_put')}</h2><div class="grid">${stockP.map(x=>`<button class="${k.pid===x.id?'sel':''}" onclick="UI.k.pid='${x.id}';UI.k.min=null;render()">${x.emoji}<br><small>${esc(pn(x))}</small>${askN(x.id)>0?`<br><small style="color:var(--bad)">!${askN(x.id)}</small>`:''}</button>`).join('')}</div>`;
  if(p){
    h+=`<div class="card col"><div class="sub">${t('k_qty')}</div><div class="step" style="justify-content:space-between"><button onclick="UI.k.qty=Math.max(1,UI.k.qty-5);render()">−</button><span class="big">${k.qty}</span><button onclick="UI.k.qty+=5;render()">+</button></div>
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
