
const APP_VERSION='2.2.0';
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
l_done:["Духовкадан олинди: {p} × {n} — омборда","Pechdan olindi: {p} × {n} — omborda","Из духовки: {p} × {n} — теперь в наличии","Out of the oven: {p} × {n} — now in stock"],
timer_k:["Вақт тугади: {p} × {n} — духовкадан олиш вақти","Vaqt tugadi: {p} × {n} — pechdan olish vaqti","Время вышло: {p} × {n} — пора вынимать из духовки","Time's up: {p} × {n} — take it out of the oven"],
timer_d:["Духовкада {p} × {n} пишди — ошпаз олишини кутамиз","Pechda {p} × {n} pishdi — oshpaz olishini kutamiz","В духовке испеклась партия {p} × {n} — ждём, пока повар её вынет","The batch {p} × {n} is baked — waiting for the cook to take it out"],
l_cancel_k:["Буюртма №{no} бекор қилинди — сўров олинди: {s}","Buyurtma №{no} bekor qilindi — so'rov olindi: {s}","Заказ №{no} отменён — запрос снят: {s}","Order #{no} cancelled — request withdrawn: {s}"],
l_new_k:["Буюртма №{no} духовкадаги партияни кутяпти: {s}","Buyurtma №{no} pechdagi partiyani kutyapti: {s}","Заказ №{no} ждёт партию из духовки: {s}","Order #{no} is waiting for the oven batch: {s}"],
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
zoom_out:["Кичрайтириш","Kichraytirish","Уменьшить","Smaller"],
zoom_in:["Катталаштириш","Kattalashtirish","Увеличить","Larger"],
back:["Орқага","Orqaga","Назад","Back"],
do_it:["Ҳа, бажариш","Ha, bajarish","Да, выполнить","Yes, do it"],
time_ph:["СС:ДД","SS:DD","ЧЧ:ММ","HH:MM"],
time_bad:["Вақтни СС:ДД кўринишида киритинг, масалан 18:30","Vaqtni SS:DD ko'rinishida kiriting, masalan 18:30","Введите время как ЧЧ:ММ, например 18:30","Enter the time as HH:MM, for example 18:30"],
inv_new:["Янги товар","Yangi tovar","Новый товар","New item"],
inv_need_name:["Товар номини киритинг","Tovar nomini kiriting","Введите название товара","Enter the item name"],
inv_need_price:["Сотув нархини киритинг","Sotuv narxini kiriting","Введите цену продажи","Enter the selling price"],
inv_added:["«{p}» қўшилди ва омборга қабул қилинди","«{p}» qo'shildi va omborga qabul qilindi","Товар «{p}» добавлен и принят на склад","Item “{p}” added and received"],
rcv_ok2:["Қабул қилинди: {p} × {n}, нархи {c}","Qabul qilindi: {p} × {n}, narxi {c}","Принято: {p} × {n} по {c}","Received: {p} × {n} at {c}"],
menu_edit:["Таом номлари ва нархлари","Taom nomlari va narxlari","Названия и цены блюд","Dish names and prices"],
g_code:["Логин","Login","Логин","Login"],
g_pass:["Парол","Parol","Пароль","Password"],
g_pass2:["Паролни такрорланг","Parolni takrorlang","Повторите пароль","Repeat the password"],
g_login:["Кириш","Kirish","Войти","Sign in"],
g_create:["Столовая яратиш","Stolovaya yaratish","Создать столовую","Create a canteen"],
g_make:["Яратиш","Yaratish","Создать","Create"],
g_name:["Столовая номи","Stolovaya nomi","Название столовой","Canteen name"],
g_have:["Столовам бор — кириш","Stolovam bor — kirish","У меня уже есть столовая — войти","I already have a canteen — sign in"],
g_bad:["Код ёки парол нотўғри","Kod yoki parol noto'g'ri","Неверный код или пароль","Wrong code or password"],
g_locked:["Жуда кўп уриниш. 10 дақиқа кутинг","Juda ko'p urinish. 10 daqiqa kuting","Слишком много попыток. Подождите 10 минут","Too many attempts. Wait 10 minutes"],
g_taken:["Бу код банд — бошқасини танланг","Bu kod band — boshqasini tanlang","Этот код уже занят — выберите другой","This code is taken — choose another"],
g_pass_short:["Парол камида 4 белгидан иборат бўлсин","Parol kamida 4 belgidan iborat bo'lsin","Пароль — не короче 4 символов","The password must be at least 4 characters"],
g_pass_diff:["Паролла бир хил эмас","Parollar bir xil emas","Пароли не совпадают","Passwords don't match"],
g_code_bad:["Код: лотин ҳарфлари, рақам ва дефис, 3–40 белги","Kod: lotin harflari, raqam va defis, 3–40 belgi","Код: латиница, цифры и дефис, от 3 до 40 символов","Code: Latin letters, digits and hyphen, 3–40 characters"],
g_name_need:["Столовая номини киритинг","Stolovaya nomini kiriting","Введите название столовой","Enter the canteen name"],
g_code_hint:["Код — мижозлар ҳаволасининг қисми, масалан samsa-aka","Kod — mijozlar havolasining qismi, masalan samsa-aka","Код войдёт в ссылку для клиентов, например samsa-aka","The code becomes part of the customer link, e.g. samsa-aka"],
g_fail:["Уланиб бўлмади — алоқани текширинг","Ulanib bo'lmadi — aloqani tekshiring","Не удалось подключиться — проверьте связь","Couldn't connect — check your connection"],
c_code_title:["Столовая кодини киритинг","Stolovaya kodini kiriting","Введите код столовой","Enter the canteen code"],
c_code_hint:["Код столовадан олинган ҳаволада бор","Kod stolovadan olingan havolada bor","Код указан в ссылке, которую дала столовая","The code is in the link you got from the canteen"],
c_code_btn:["Очиш","Ochish","Открыть","Open"],
c_none:["Бундай кодли столовая топилмади","Bunday kodli stolovaya topilmadi","Столовая с таким кодом не найдена","No canteen found with this code"],
sent:["Буюртма юборилди — тасдиқланишини кутамиз","Buyurtma yuborildi — tasdiqlanishini kutamiz","Заказ отправлен — ждём подтверждения","Order sent — waiting for confirmation"],
send_fail:["Буюртмани юбориб бўлмади — алоқани текширинг","Buyurtmani yuborib bo'lmadi — aloqani tekshiring","Не удалось отправить заказ — проверьте связь","Couldn't send the order — check your connection"],
order_sent:["Юборилган буюртма","Yuborilgan buyurtma","Отправленный заказ","Sent order"],
st_pending:["Юборилди, тасдиқланишини кутяпмиз","Yuborildi, tasdiqlanishini kutyapmiz","Отправлен, ждём подтверждения","Sent, waiting for confirmation"],
order_accepted:["Буюртма №{no} қабул қилинди","Buyurtma №{no} qabul qilindi","Заказ №{no} принят","Order #{no} accepted"],
cancel_sent:["№{no} буюртмани бекор қилиш сўрови юборилди","№{no} buyurtmani bekor qilish so'rovi yuborildi","Запрос на отмену заказа №{no} отправлен","Cancellation request for order #{no} sent"],
confirm_cancel2:["Юборилган буюртмани бекор қилайсизми?","Yuborilgan buyurtmani bekor qilasizmi?","Отменить отправленный заказ?","Cancel the order you sent?"],
cancelling:["Бекор қилинмоқда…","Bekor qilinmoqda…","Отмена…","Cancelling…"],
set_name:["Столовая номи","Stolovaya nomi","Название столовой","Canteen name"],
set_pass:["Паролни ўзгартириш","Parolni o'zgartirish","Сменить пароль","Change password"],
set_old:["Жорий парол","Joriy parol","Текущий пароль","Current password"],
set_new:["Янги парол","Yangi parol","Новый пароль","New password"],
set_save:["Сақлаш","Saqlash","Сохранить","Save"],
set_pass_ok:["Парол ўзгартирилди. Бошқа қурилмалар қайта киради","Parol o'zgartirildi. Boshqa qurilmalar qayta kiradi","Пароль изменён. Остальные устройства войдут заново","Password changed. Other devices will sign in again"],
set_pass_bad:["Парол ўзгармади: жорий паролни текширинг","Parol o'zgarmadi: joriy parolni tekshiring","Пароль не изменён: проверьте текущий пароль","Password not changed: check the current password"],
set_name_ok:["Номи сақланди","Nomi saqlandi","Название сохранено","Name saved"],
r_admin:["Админ","Admin","Админ","Admin"],
g_origin:["Бу нусха базага уланмаган: сайт манзили рухсат этилмаган","Bu nusxa bazaga ulanmagan: sayt manzili ruxsat etilmagan","Эта копия программы не подключена к базе: адрес сайта не разрешён","This copy isn't connected to the database: the site address isn't allowed"],
g_disabled:["Кириш администратор томонидан ўчирилган","Kirish administrator tomonidan o'chirilgan","Доступ отключён администратором","Access was disabled by the administrator"],
set_retain:["Маълумотлар {n} кун сақланади (администратор белгилайди)","Ma'lumotlar {n} kun saqlanadi (administrator belgilaydi)","Данные хранятся {n} дн. (устанавливает администратор)","Data is kept for {n} days (set by the administrator)"],
a_pass_admin:["Администратор пароли","Administrator paroli","Пароль администратора","Administrator password"],
a_bad:["Администратор пароли нотўғри","Administrator paroli noto'g'ri","Неверный пароль администратора","Wrong administrator password"],
a_locked:["Жуда кўп уриниш. 15 дақиқа кутинг","Juda ko'p urinish. 15 daqiqa kuting","Слишком много попыток. Подождите 15 минут","Too many attempts. Wait 15 minutes"],
a_add:["+ Столовая қўшиш","+ Stolovaya qo'shish","+ Добавить столовую","+ Add a canteen"],
a_days:["Маълумот сақлаш (кун)","Ma'lumot saqlash (kun)","Хранить данные (дней)","Keep data (days)"],
a_gen:["Парол ўйлаб топиш","Parol o'ylab topish","Придумать пароль","Generate a password"],
a_active:["Фаол","Faol","Активна","Active"],
a_off:["Ўчирилган","O'chirilgan","Отключена","Disabled"],
a_created:["Яратилган","Yaratilgan","Создана","Created"],
a_size:["Маълумот","Ma'lumot","Данные","Data"],
a_upd:["Охирги фаоллик","Oxirgi faollik","Последняя активность","Last activity"],
a_inbox:["Навбатдаги буюртма","Navbatdagi buyurtma","Заказов в очереди","Orders in queue"],
a_links:["Ҳаволалар","Havolalar","Ссылки","Links"],
a_link_client:["Мижоз","Mijoz","Клиент","Customer"],
a_link_desk:["Қабулхона","Qabulxona","Ресепшен","Reception"],
a_link_kitchen:["Ошпаз","Oshpaz","Повар","Kitchen"],
a_copied:["Нусха олинди: {x}","Nusxa olindi: {x}","Ссылка скопирована: {x}","Link copied: {x}"],
a_rename:["Номини ўзгартириш","Nomini o'zgartirish","Название","Rename"],
a_setpass:["Парол","Parol","Пароль","Password"],
a_disable:["Ўчириш","O'chirish","Отключить","Disable"],
a_enable:["Ёқиш","Yoqish","Включить","Enable"],
a_rename_t:["«{n}» учун янги ном","«{n}» uchun yangi nom","Новое название для «{n}»","New name for “{n}”"],
a_pass_t:["«{n}» учун янги парол","«{n}» uchun yangi parol","Новый пароль для «{n}»","New password for “{n}”"],
a_c_disable:["«{n}» ўчирилсинми? Кириш ва мижозлар буюртмалари тўхтайди","«{n}» o'chirilsinmi? Kirish va mijozlar buyurtmalari to'xtaydi","Отключить «{n}»? Вход и заказы клиентов остановятся","Disable “{n}”? Sign-in and customer orders will stop"],
a_c_enable:["«{n}» ёқилсинми?","«{n}» yoqilsinmi?","Включить «{n}»?","Enable “{n}”?"],
a_c_del:["«{n}» столоваяни барча маълумотлари билан ўчирасизми? Буни қайтариб бўлмайди","«{n}» stolovayani barcha ma'lumotlari bilan o'chirasizmi? Buni qaytarib bo'lmaydi","Удалить столовую «{n}» вместе со всеми данными? Это нельзя отменить","Delete the canteen “{n}” with all its data? This can't be undone"],
a_created_ok:["«{n}» яратилди. Логин: {l}","«{n}» yaratildi. Login: {l}","Столовая «{n}» создана. Логин: {l}","Canteen “{n}” created. Login: {l}"],
a_saved:["Сақланди","Saqlandi","Сохранено","Saved"],
a_days_ok:["«{n}»: маълумотлар {d} кун сақланади","«{n}»: ma'lumotlar {d} kun saqlanadi","«{n}»: данные хранятся {d} дн.","“{n}”: data is kept for {d} days"],
a_off_ok:["«{n}» ўчирилди","«{n}» o'chirildi","Столовая «{n}» отключена","Canteen “{n}” disabled"],
a_on_ok:["«{n}» ёқилди","«{n}» yoqildi","Столовая «{n}» включена","Canteen “{n}” enabled"],
a_del_ok:["«{n}» ўчирилди","«{n}» o'chirildi","Столовая «{n}» удалена","Canteen “{n}” deleted"],
a_pass_ok:["«{n}» пароли ўзгартирилди","«{n}» paroli o'zgartirildi","Пароль столовой «{n}» изменён","Password of “{n}” changed"],
a_name_ok:["Номи ўзгартирилди: «{n}»","Nomi o'zgartirildi: «{n}»","Название изменено: «{n}»","Name changed: “{n}”"],
a_days_bad:["Сақлаш муддати: 1 дан 365 кунгача","Saqlash muddati: 1 dan 365 kungacha","Срок хранения: от 1 до 365 дней","Retention: 1 to 365 days"],
a_none:["Ҳали столоваялар йўқ","Hali stolovayalar yo'q","Столовых пока нет","No canteens yet"],
a_refresh:["Янгилаш","Yangilash","Обновить список","Refresh"],
a_newpass8:["Администратор пароли камида 8 белги бўлсин","Administrator paroli kamida 8 belgi bo'lsin","Пароль администратора — не короче 8 символов","The administrator password must be at least 8 characters"],
a_origins:["Рухсат этилган сайт манзиллари (вергул билан)","Ruxsat etilgan sayt manzillari (vergul bilan)","Разрешённые адреса сайта (через запятую)","Allowed site addresses (comma-separated)"],
a_origins_hint:["Дастур фақат шу манзилларда базага уланади. Бошқа сайтдаги нусха ишламайди.","Dastur faqat shu manzillarda bazaga ulanadi. Boshqa saytdagi nusxa ishlamaydi.","Программа подключается к базе только на этих адресах. Копия на другом сайте работать не будет.","The program connects to the database only on these addresses. A copy on another site won't work."],
a_origins_ok:["Манзиллар сақланди","Manzillar saqlandi","Адреса сохранены","Addresses saved"],
a_pass_changed:["Администратор пароли ўзгартирилди","Administrator paroli o'zgartirildi","Пароль администратора изменён","Administrator password changed"],
role_client:["Буюртма","Buyurtma","Заказ","Order"],
bill_soon:["Tayyor тўлов муддати: {d} ({n} кундан кейин)","Tayyor to'lov muddati: {d} ({n} kundan keyin)","Срок оплаты Tayyor: {d} (через {n} дн.)","Tayyor payment due: {d} (in {n} days)"],
bill_today:["Tayyor тўлов муддати — бугун ({d})","Tayyor to'lov muddati — bugun ({d})","Срок оплаты Tayyor — сегодня ({d})","Tayyor payment is due today ({d})"],
bill_late:["Tayyor тўлов муддати {n} кун олдин ўтди ({d})","Tayyor to'lov muddati {n} kun oldin o'tdi ({d})","Срок оплаты Tayyor прошёл {n} дн. назад ({d})","Tayyor payment is {n} days overdue ({d})"],
bill_amount:["Тўлаш: {a}","To'lash: {a}","К оплате: {a}","Amount due: {a}"],
a_fee:["Ойлик тўлов","Oylik to'lov","Оплата в месяц","Monthly fee"],
a_paid_until:["Тўланган муддат","To'langan muddat","Оплачено до","Paid until"],
a_not_set:["Белгиланмаган","Belgilanmagan","Не задано","Not set"],
a_left:["{n} кун қолди","{n} kun qoldi","осталось {n} дн.","{n} days left"],
a_overdue:["{n} кун кечикди","{n} kun kechikdi","просрочено на {n} дн.","{n} days overdue"],
a_today:["бугун","bugun","сегодня","today"],
a_pay:["Тўланди","To'landi","Оплачено","Paid"],
a_pay_c:["«{n}» тўловини қабул қиласизми: {a}? Муддат {d} гача узаяди","«{n}» to'lovini qabul qilasizmi: {a}? Muddat {d} gacha uzayadi","Принять оплату «{n}»: {a}? Срок продлится до {d}","Accept the payment from “{n}”: {a}? Paid until {d}"],
a_pay_ok:["«{n}» тўлови қабул қилинди: {a}, муддат {d} гача","«{n}» to'lovi qabul qilindi: {a}, muddat {d} gacha","Оплата «{n}» принята: {a}, оплачено до {d}","Payment from “{n}” received: {a}, paid until {d}"],
a_date_btn:["Муддат","Muddat","Срок","Due date"],
a_fee_btn:["Сумма","Summa","Сумма","Amount"],
a_date_t:["«{n}» учун тўлов муддати (КК.ОО.ЙЙЙЙ)","«{n}» uchun to'lov muddati (KK.OO.YYYY)","Оплачено до для «{n}» (ДД.ММ.ГГГГ)","Paid-until date for “{n}” (DD.MM.YYYY)"],
a_date_bad:["Санани КК.ОО.ЙЙЙЙ кўринишида киритинг","Sanani KK.OO.YYYY ko'rinishida kiriting","Введите дату как ДД.ММ.ГГГГ","Enter the date as DD.MM.YYYY"],
a_fee_t:["«{n}» учун ойлик тўлов (сўм)","«{n}» uchun oylik to'lov (so'm)","Оплата в месяц для «{n}» (сум)","Monthly fee for “{n}” (UZS)"],
a_fee_bad:["Суммани рақам билан киритинг","Summani raqam bilan kiriting","Введите сумму числом","Enter the amount as a number"],
a_notify:["Огоҳлантириш (кун олдин)","Ogohlantirish (kun oldin)","Предупреждать за (дн.)","Remind before (days)"],
a_pays:["Сўнгги тўловлар","So'nggi to'lovlar","Последние оплаты","Recent payments"],
k_due_total:["Ойига тушум","Oyiga tushum","Оплат в месяц","Monthly income"],
k_soon:["Муддат яқин","Muddat yaqin","Скоро срок","Due soon"],
k_late:["Кечиккан","Kechikkan","Просрочено","Overdue"],
a_al_soon:["«{n}»: тўлов муддати {d} кундан кейин ({date})","«{n}»: to'lov muddati {d} kundan keyin ({date})","«{n}»: срок оплаты через {d} дн. ({date})","“{n}”: payment due in {d} days ({date})"],
a_al_today:["«{n}»: тўлов муддати бугун","«{n}»: to'lov muddati bugun","«{n}»: срок оплаты сегодня","“{n}”: payment is due today"],
a_al_late:["«{n}»: тўлов муддати {d} кун олдин ўтди","«{n}»: to'lov muddati {d} kun oldin o'tdi","«{n}»: срок оплаты прошёл {d} дн. назад","“{n}”: payment is {d} days overdue"],
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
const NOCAP={sum:1,min:1,pcs:1};
const t=(k,a)=>{let s=(T[k]||[k,k,k,k])[LI[lang]];if(a)for(const x in a)s=s.split('{'+x+'}').join(a[x]);return NOCAP[k]?s:s.charAt(0).toUpperCase()+s.slice(1)};
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
const SLUG=((new URLSearchParams(location.search).get('s')||(()=>{try{return localStorage.getItem('tl.slug')}catch(e){return ''}})()||'')+'').toLowerCase().replace(/[^a-z0-9-]/g,'').slice(0,40);
const KEY='tayyor.'+SLUG,MK='tl.mine.'+SLUG,HK='tl.hist.'+SLUG,TK='tl.tok.'+SLUG;
const TOK=()=>{try{return localStorage.getItem(TK)}catch(e){return null}};
let MBASE=null,mName='';
async function setManifest(name){if(!SLUG)return;
  try{const l=document.querySelector('link[rel=manifest]');if(!MBASE){const u=l.href;MBASE={m:await(await fetch(u)).json(),b:new URL('.',u).href}}
    const m=JSON.parse(JSON.stringify(MBASE.m)),b=MBASE.b;m.start_url=b+'?s='+SLUG;m.id=b+'?s='+SLUG;m.scope=b;m.icons=m.icons.map(i=>({...i,src:new URL(i.src,b).href}));
    if(name){m.name=name;m.short_name=name}
    l.href=URL.createObjectURL(new Blob([JSON.stringify(m)],{type:'application/manifest+json'}))}catch(e){}}
function nameApp(name){if(!name||name===mName)return;mName=name;try{localStorage.setItem('tl.cname.'+SLUG,name)}catch(e){}
  setManifest(name);document.title=name;const m=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(m)m.content=name}
setManifest((()=>{try{return window.ROLE==='client'||!window.ROLE?localStorage.getItem('tl.cname.'+SLUG):null}catch(e){return null}})());
let sb=null,online=false,queue=[],syncing=false,PUB=null,pubIds='',ackQ=[],ingested=new Set(),inboxBusy=false;
try{sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:false}})}catch(e){}
function load(){try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}if(!S||!S.products)S=null}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
const strip=()=>{const d=JSON.parse(JSON.stringify(S));delete d._rev;delete d.retain;delete d.bill;const keep=(S.retain||10)*864e5,now=Date.now();
  d.orders=d.orders.filter(o=>o.status==='open'||now-o.created<keep).map(o=>(o.status==='open'||now-o.created<216e5)?o:{id:o.id,no:o.no,type:o.type,table:o.table,status:o.status,created:o.created,lines:[]}).slice(-3000);return d};
function setOnline(v){if(online!==v){online=v;render()}}
const mineIds=()=>{try{return JSON.parse(localStorage.getItem(MK)||'[]')}catch(e){return[]}};
function authLost(){try{localStorage.removeItem(TK);localStorage.removeItem(KEY)}catch(e){}S=null;queue=[];UI.gate='login';render()}
async function pull(force){if(!sb||!TOK())return false;
  try{const{data,error}=await sb.rpc('tayyor_state_get',{p_slug:SLUG,p_token:TOK()});if(error)throw error;
    if(!data){authLost();return false}
    if(!force&&(queue.length||syncing))return true;
    S=data.data;S._rev=data.rev;S.retain=data.retain;S.bill=data.bill;if(data.name)S.name=data.name;save();setOnline(true);return true}
  catch(e){setOnline(false);return false}}
function mutate(fn){const r=fn();queue.push(fn);save();afterChange();flush();return r}
async function flush(){if(syncing||!queue.length||!sb||!S||!TOK())return;syncing=true;
  try{while(queue.length){const n=queue.length,base=S._rev??0;
    const{data,error}=await sb.rpc('tayyor_state_put',{p_slug:SLUG,p_token:TOK(),p_data:strip(),p_pub:buildPub(),p_rev:base});if(error)throw error;
    if(data>=0){S._rev=data;queue.splice(0,n);save();setOnline(true)}
    else if(data===-3){authLost();return}
    else if(data===-1){const pend=queue.slice();queue=[];if(!await pull(true))throw new Error('pull');for(const f of pend){f();queue.push(f)}afterChange()}
    else{queue=[];throw new Error('too big')}}
    if(ackQ.length){const ids=ackQ.slice();await sb.rpc('tayyor_inbox_ack',{p_slug:SLUG,p_token:TOK(),p_ids:ids});ackQ=ackQ.filter(x=>!ids.includes(x))}}
  catch(e){setOnline(false)}
  finally{syncing=false}}
/* what customers may see: menu, availability, and the status of their own orders (no names, phones or costs) */
function supply(pid){const out=[];let skip=resv(pid).b;for(const b of S.batches.filter(x=>x.pid===pid).sort((a,c)=>a.end-c.end)){let cap=b.qty;const u=Math.min(skip,cap);skip-=u;cap-=u;if(cap>0)out.push([cap,b.end])}return out}
function buildPub(){const fr={},fb={},sup={},iv={};
  for(const p of S.products){if(p.on===false)continue;if(p.stock){fr[p.id]=freeR(p.id);fb[p.id]=freeB(p.id);sup[p.id]=supply(p.id)}else if(invTracked(p.id))iv[p.id]=invFree(p.id)}
  const orders={};for(const o of S.orders)if(o.type==='pickup'&&o.cid&&(o.status==='open'||Date.now()-o.created<2*864e5))
    orders[o.id]={no:o.no,st:o.status,at:o.pickupAt,lines:o.lines.map(l=>({pid:l.pid,qty:l.qty,rr:l.rr,rb:l.rb,ask:l.ask||0,dec:l.declined||0,e:l.rb>0?(etaLine(o,l)||0):0}))};
  return{products:S.products.filter(p=>p.on!==false).map(p=>({id:p.id,emoji:p.emoji,names:p.names,price:p.price,stock:!!p.stock})),fr,fb,sup,iv,orders}}
/* customer side */
async function pullPub(){if(!sb||!SLUG)return false;const mine=mineIds(),key=mine.join(',');
  try{const{data,error}=await sb.rpc('tayyor_pub_get',{p_slug:SLUG,p_since:(PUB&&key===pubIds)?PUB._rev:-1,p_ids:mine});if(error)throw error;
    setOnline(true);
    if(data.none){PUB=null;UI.noTenant=true;render();return false}
    UI.noTenant=false;if(data.same)return true;
    const prev=PUB;PUB={...data.data,orders:data.orders||{},name:data.name,_rev:data.rev};pubIds=key;nameApp(PUB.name);
    if(prev)clientNotify(prev.orders,PUB.orders);render();return true}
  catch(e){setOnline(false);return false}}
function clientNotify(po,no){const rd=o=>o.lines.length&&o.lines.every(l=>l.rr>=l.qty),say=(m,bad,loud)=>{toast(m,bad?'bad':'');if(loud){beep(3);try{navigator.vibrate&&navigator.vibrate(300);window.Notification&&Notification.permission==='granted'&&new Notification(PUB.name||'Tayyor',{body:m})}catch(e){}}};
  for(const id of mineIds()){const n=no[id],p=po[id];if(!n)continue;
    if(!p){say(t('order_accepted',{no:n.no}));continue}
    if(p.st==='open'&&n.st==='cancelled'){say(t('l_cancel',{no:n.no}),true);continue}
    if(n.st==='open'&&!rd(p)&&rd(n)){say(t('l_ordready',{no:n.no}),false,true);continue}
    for(const l of n.lines){const q=p.lines.find(x=>x.pid===l.pid);if(!q||!(q.ask>0)||l.ask>0)continue;
      const nm=pn(P(l.pid));if(l.dec>q.dec)say(t('l_ans_no',{no:n.no,p:nm,n:l.dec-q.dec}),true,true);else if(l.rb>q.rb)say(t('l_ans_bake',{no:n.no,p:nm,m:mins(l.e||Date.now())}),false,true)}}}
/* staff side: customers' orders arrive through the inbox */
function makeOrder(p){if(S.orders.some(o=>o.id===p.id))return null;
  const cart={};for(const it of (p.items||[])){const pid=it[0],q=it[1],pr=P(pid);if(pr&&pr.on!==false){const n=Math.min(200,Math.max(0,Math.floor(+q||0)));if(n>0)cart[pid]=(cart[pid]||0)+n}}
  const mode=p.mode==='ready'?'ready':'all',lines=[];
  for(const a of analyze(cart)){
    if(!a.stock){const q=Math.min(a.want,invFree(a.pid));if(q>0)lines.push({pid:a.pid,qty:q,rr:q,rb:0,want:a.want});continue}
    const rb=mode==='all'?a.wait:0,ask=mode==='all'?a.none:0,qty=a.take+rb+ask;
    if(qty>0)lines.push({pid:a.pid,qty,rr:a.take,rb,ask,want:a.want})}
  const no=S.next++;
  S.orders.push({id:p.id,no,type:'pickup',cid:1,name:String(p.name||'').slice(0,60),phone:String(p.phone||'').slice(0,20),pickupAt:+p.at||Date.now(),created:Date.now(),status:lines.length?'open':'cancelled',lines});
  if(lines.length){feed('l_new',{no,oid:p.id});for(const l of lines)if(l.ask>0)feed('l_ask',{no,oid:p.id,pid:l.pid,n:l.ask})}
  return no}
async function processInbox(){if(!sb||!TOK()||inboxBusy)return;inboxBusy=true;
  try{const{data}=await sb.rpc('tayyor_inbox_get',{p_slug:SLUG,p_token:TOK()});
    for(const it of (data||[])){if(ingested.has(it.id))continue;ingested.add(it.id);const p=it.payload;
      if(it.kind==='order')mutate(()=>{FEEDC='ext';try{makeOrder(p)}finally{FEEDC=CID}});
      else mutate(()=>{FEEDC='ext';try{const o=S.orders.find(x=>x.id===p.id);if(o&&o.status==='open'){o.status='cancelled';feed('l_cancel_c',{no:o.no,oid:o.id})}}finally{FEEDC=CID}});
      ackQ.push(it.id)}}
  catch(e){}finally{inboxBusy=false}}
async function syncTick(){
  if(ROLE==='client'){if(SLUG)await pullPub();return}
  if(ROLE==='admin'){if(ATOK())await adRefresh();return}
  if(!TOK()||!S)return;
  if(queue.length||syncing){flush();return}
  try{const r=await sb.rpc('tayyor_rev',{p_slug:SLUG,p_token:TOK()});if(r.error)throw r.error;
    if(r.data===-3){authLost();return}
    setOnline(true);if(r.data!==S._rev&&await pull())afterChange();billToast();
    await processInbox();flush()}
  catch(e){setOnline(false)}}
function schedule(){setTimeout(async()=>{try{await syncTick()}catch(e){}schedule()},ROLE==='client'?(document.hidden?20000:5000):ROLE==='admin'?30000:(document.hidden?15000:3000))}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncTick()});
const CID=(()=>{try{let c=sessionStorage.getItem('tl.cid');if(!c){c=uid();sessionStorage.setItem('tl.cid',c)}return c}catch(e){return uid()}})();
let FEEDC=CID;
function feed(k,a){S.fid++;S.feed.push({id:S.fid,k,a,c:FEEDC,t:Date.now()});S.feed=S.feed.slice(-40)}

/* ---------- stock model ---------- */
const PRODS=()=>ROLE==='client'?((PUB&&PUB.products)||[]):S.products;
const P=id=>PRODS().find(p=>p.id===id);
const pn=p=>p?(p.names[lang]||p.names.ru):'?';
const openP=()=>S.orders.filter(o=>o.type==='pickup'&&o.status==='open');
function resv(pid){let r=0,b=0;for(const o of openP())for(const l of o.lines)if(l.pid===pid){r+=l.rr;b+=l.rb}return{r,b}}
const rdy=pid=>S.ready[pid]||0;
const freeR=pid=>ROLE==='client'?Math.max(0,((PUB&&PUB.fr)||{})[pid]||0):Math.max(0,rdy(pid)-resv(pid).r);
const bakeTot=pid=>S.batches.filter(b=>b.pid===pid).reduce((a,b)=>a+b.qty,0);
const freeB=pid=>ROLE==='client'?Math.max(0,((PUB&&PUB.fb)||{})[pid]||0):Math.max(0,bakeTot(pid)-resv(pid).b);
function etaAt(pid,need){let acc=0;for(const b of S.batches.filter(b=>b.pid===pid).sort((a,b)=>a.end-b.end)){acc+=b.qty;if(acc>=need)return b.end}return null}
const eta=(pid,n)=>{if(ROLE==='client'){let acc=0;for(const [c,e] of ((PUB&&PUB.sup)||{})[pid]||[]){acc+=c;if(acc>=n)return e}return null}return etaAt(pid,resv(pid).b+n)};
const mins=ts=>Math.max(1,Math.ceil((ts-Date.now())/60000));
const isReady=o=>o.lines.every(l=>l.rr>=l.qty);
function etaLine(o,l){if(ROLE==='client')return l.e||null;let older=0;for(const x of openP())if(x.created<o.created)for(const y of x.lines)if(y.pid===l.pid)older+=y.rb;return etaAt(l.pid,older+l.rb)}
function analyze(cart){return Object.entries(cart).filter(([,q])=>q>0).map(([pid,q])=>{const p=P(pid);
  if(!p.stock)return{pid,want:q,take:q,wait:0,none:0,stock:false};
  const take=Math.min(q,freeR(pid)),rem=q-take,w=Math.min(rem,freeB(pid));
  return{pid,want:q,take,wait:w,none:rem-w,at:w>0?eta(pid,w):null,stock:true}})}
const lineTxt=l=>pn(P(l.pid))+' × '+l.qty;

/* ---------- actions ---------- */
let UI={tab:'orders',cart:{},pick:0,name:'',phone:'',modal:null,tbl:null,k:{pid:'meat',qty:20,min:null},upd:false};
function askConfirm(msg,fn){UI.cfm={msg,fn};render()}
function cfmYes(){const f=UI.cfm&&UI.cfm.fn;UI.cfm=null;render();if(f)f()}
function cfmNo(){UI.cfm=null;render()}
function cfmHTML(){return UI.cfm?`<div class="modal" onclick="if(event.target===this)cfmNo()"><div><p class="cfm">${esc(UI.cfm.msg)}</p><div class="row"><button class="btn sec" onclick="cfmNo()">${t('back')}</button><button class="btn bad" onclick="cfmYes()">${t('do_it')}</button></div></div></div>`:''}
function cartAdd(pid,d){const p=P(pid);if(d>0&&p&&!p.stock&&invTracked(pid)&&(UI.cart[pid]||0)+d>invFree(pid))return toast(t('out_of_stock'));UI.cart[pid]=Math.max(0,(UI.cart[pid]||0)+d);render()}
const fmtPh=d=>[(d||'').slice(0,2),(d||'').slice(2,5),(d||'').slice(5,7),(d||'').slice(7,9),(d||'').slice(9)].filter(Boolean).join(' ');
const phoneView=d=>d?'+998 '+fmtPh(d):'';
const phoneOk=d=>!d||d.length===9;
const phoneShowErr=()=>!phoneOk(UI.phone)&&(UI.phone.length>9||UI.phTouched);
function phoneErr(){return`<div id="phErr" class="perr" style="display:${phoneShowErr()?'block':'none'}">${t('phone_bad')}</div>`}
function phUpd(){const e=document.getElementById('phErr');if(e)e.style.display=phoneShowErr()?'block':'none';const i=document.getElementById('ph');if(i)i.style.borderColor=phoneShowErr()?'var(--bad)':''}
function onPhone(el){let d=el.value.replace(/\D/g,'').slice(3);if(d.length>9&&d.startsWith('998'))d=d.slice(3);d=d.slice(0,15);UI.phone=d;el.value=d?phoneView(d):'+998 ';phUpd()}
function phBlur(el){UI.phTouched=true;if(!UI.phone)el.value='';phUpd()}
function pickSel(v){UI.pick=+v;render();if(UI.pick===-1){const e=document.getElementById('pt');if(e)e.focus()}}
function onTime(el){const d=el.value.replace(/\D/g,'').slice(0,4);el.value=d.length>2?d.slice(0,2)+':'+d.slice(2):d;UI.pickTime=el.value}
function pickAt(){if(UI.pick!==-1)return Date.now()+UI.pick*60000;const m=(UI.pickTime||'').split(':').map(Number);if(m.length<2||isNaN(m[0])||isNaN(m[1])||m[0]>23||m[1]>59)return null;const d=new Date();d.setHours(m[0],m[1],0,0);return d.getTime()}
function tryOrder(){if(UI.pick===-1){const at=pickAt();if(at===null||at<Date.now()-60000){toast(t(at===null?'time_bad':'pick_past'));const e=document.getElementById('pt');if(e)e.focus();return}}
  if(!phoneOk(UI.phone)){UI.phTouched=true;phUpd();toast(t('phone_bad'));const i=document.getElementById('ph');if(i)i.focus();return}
  const a=analyze(UI.cart);if(!a.length)return toast(t('cart_empty'));
  if(a.some(x=>x.stock&&x.take<x.want))UI.modal=a;else placeOrder('all');render()}
function newId(){const a=new Uint8Array(10);crypto.getRandomValues(a);return Array.from(a,b=>(b%36).toString(36)).join('')}
function placeOrder(mode){return submitOrder(mode)}
async function submitOrder(mode){UI.modal=null;const cart=Object.entries(UI.cart).filter(([,q])=>q>0);
  if(!cart.length){render();return}
  const id=newId(),payload={id,items:cart,mode,name:UI.name.trim().slice(0,60),phone:UI.phone?'+998 '+fmtPh(UI.phone):'',at:pickAt()||Date.now()};
  let ok=false;try{const{data}=await sb.rpc('tayyor_client_order',{p_slug:SLUG,p_payload:payload});ok=!!(data&&data.ok)}catch(e){}
  if(!ok){toast(t('send_fail'),'bad');render();return}
  const mine=mineIds();mine.unshift(id);try{localStorage.setItem(MK,JSON.stringify(mine.slice(0,60)))}catch(e){}
  const hh=histLoad();hh.unshift({id,no:0,t:Date.now(),items:cart,sum:cart.reduce((a,[pid,q])=>a+(P(pid)?P(pid).price*q:0),0)});try{localStorage.setItem(HK,JSON.stringify(hh.slice(0,60)))}catch(e){}
  UI.cart={};UI.ctab='mine';toast(t('sent'));try{window.Notification&&Notification.permission==='default'&&Notification.requestPermission()}catch(e){}
  render();pullPub()}
function clientCancel(id){const o=pubOrder(id);
  askConfirm(o?t('confirm_cancel',{no:o.no}):t('confirm_cancel2'),async()=>{
    try{const{data}=await sb.rpc('tayyor_client_cancel',{p_slug:SLUG,p_id:id});if(!data||!data.ok)throw 0}catch(e){toast(t('send_fail'),'bad');return}
    UI.canc=UI.canc||{};UI.canc[id]=1;toast(o?t('cancel_sent',{no:o.no}):t('cancelling'));render()})}
function startBatch(){const k=UI.k,p=P(k.pid);if(!p||k.qty<1)return;const m=Math.max(1,+k.min||(S.lastMin&&S.lastMin[k.pid])||25),kp=k.pid,kq=k.qty,bid=uid();
  mutate(()=>{S.batches.push({id:bid,pid:kp,qty:kq,start:Date.now(),end:Date.now()+m*60000});
    S.demand[kp]=Math.max(0,(S.demand[kp]||0)-kq);S.lastMin=S.lastMin||{};S.lastMin[kp]=m;feed('l_batch',{pid:kp,n:kq,m})});UI.k.min=null;render()}
function takeOut(bid){mutate(()=>{const b=S.batches.find(x=>x.id===bid);if(!b)return;
  S.batches=S.batches.filter(x=>x!==b);S.ready[b.pid]=rdy(b.pid)+b.qty;
  const was=new Set(openP().filter(isReady).map(o=>o.id));let left=b.qty;
  for(const o of openP().sort((a,b)=>a.created-b.created))for(const l of o.lines)if(l.pid===b.pid&&l.rb>0&&left>0){const m=Math.min(l.rb,left);l.rb-=m;l.rr+=m;left-=m}
  feed('l_done',{pid:b.pid,n:b.qty});
  for(const o of openP())if(isReady(o)&&!was.has(o.id))feed('l_ordready',{no:o.no,oid:o.id})})}
function dropBatch(bid){const b0=S.batches.find(x=>x.id===bid);if(!b0)return;askConfirm(t('confirm_drop_batch',{p:pn(P(b0.pid)),n:b0.qty}),()=>dropBatchDo(bid))}
function dropBatchDo(bid){mutate(()=>{const b=S.batches.find(x=>x.id===bid);if(!b)return;S.batches=S.batches.filter(x=>x!==b);
  let over=resv(b.pid).b-bakeTot(b.pid);
  for(const o of openP().sort((a,b)=>b.created-a.created))for(const l of o.lines)if(l.pid===b.pid&&over>0){const m=Math.min(l.rb,over);l.rb-=m;l.qty-=m;over-=m;S.demand[b.pid]=(S.demand[b.pid]||0)+m}})}
const dayKey=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function recSale(lines){S.sold=S.sold||{};const k=dayKey(),d=S.sold[k]=S.sold[k]||{};
  for(const l of lines){const p=P(l.pid);if(!p||l.qty<=0)continue;const e=d[l.pid]=d[l.pid]||{q:0,s:0};e.q+=l.qty;e.s+=l.qty*p.price;e.c=(e.c||0)+(!p.stock&&invOf(l.pid)?invOf(l.pid).cost*l.qty:0)}
  for(const key of Object.keys(S.sold))if(key<dayKey(new Date(Date.now()-(S.retain||10)*864e5)))delete S.sold[key]}
const askN=pid=>openP().reduce((a,o)=>a+o.lines.filter(l=>l.pid===pid).reduce((b,l)=>b+(l.ask||0),0),0);
function askAnswer(oid,pid,bake){const el=document.getElementById('am-'+oid+'-'+pid),m=Math.max(1,+(el&&el.value)||(S.lastMin&&S.lastMin[pid])||25),bid=uid();
  mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o||o.status!=='open')return;const l=o.lines.find(x=>x.pid===pid);if(!l||!(l.ask>0))return;const n=l.ask;
    if(bake){S.batches.push({id:bid,pid,qty:n,start:Date.now(),end:Date.now()+m*60000});l.rb+=n;l.ask=0;S.lastMin=S.lastMin||{};S.lastMin[pid]=m;feed('l_batch',{pid,n,m});feed('l_ans_bake',{no:o.no,oid,pid,m})}
    else{l.qty-=n;l.ask=0;l.declined=(l.declined||0)+n;feed('l_ans_no',{no:o.no,oid,pid,n});o.lines=o.lines.filter(x=>x.qty>0);if(!o.lines.length){o.status='cancelled';feed('l_cancel',{no:o.no})}}})}
function giveOrder(oid,partial){mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o)return;
  for(const l of o.lines){if(P(l.pid)&&P(l.pid).stock)S.ready[l.pid]=Math.max(0,rdy(l.pid)-l.rr);else if(P(l.pid))invDeduct(l.pid,l.rr);if(partial){l.qty=l.rr;l.rb=0;l.ask=0}}
  o.lines=o.lines.filter(l=>l.qty>0);recSale(o.lines);o.status='done'})}
function cancelOrder(oid){const o0=S.orders.find(x=>x.id===oid);if(!o0)return;askConfirm(t('confirm_cancel',{no:o0.no}),()=>cancelOrderDo(oid))}
function cancelOrderDo(oid){const o0=S.orders.find(x=>x.id===oid);if(!o0)return;
  mutate(()=>{const o=S.orders.find(x=>x.id===oid);if(!o)return;o.status='cancelled';feed(ROLE==='client'?'l_cancel_c':'l_cancel',{no:o.no,oid:o.id})});
  if(ROLE==='client')toast(t('l_cancel',{no:o0.no}))}
function adj(pid,d){mutate(()=>{S.ready[pid]=Math.max(0,rdy(pid)+d)})}
const tbls=()=>(S.settings.tableIds&&S.settings.tableIds.length?S.settings.tableIds:Array.from({length:S.settings.tables||12},(_,i)=>i+1));
function addTable(){mutate(()=>{const ids=tbls().slice();S.settings.tableIds=[...ids,(ids.length?Math.max(...ids):0)+1]})}
function delTable(n){if(hallOrder(n))return toast(t('table_busy'));askConfirm(t('confirm_del_table',{n}),()=>{mutate(()=>{S.settings.tableIds=tbls().filter(x=>x!==n)});UI.tbl=null;render()})}
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
function delProd(id){askConfirm(t('confirm_del_prod',{p:pn(P(id))}),()=>{mutate(()=>{S.products=S.products.filter(p=>p.id!==id)});render()})}
function resetDemo(){askConfirm(t('confirm_reset'),()=>{localStorage.removeItem(MK);mutate(()=>{const n=seed();for(const k of Object.keys(S))if(k!=='_rev')delete S[k];Object.assign(S,n)})})}

/* ---------- ui helpers ---------- */
function toast(m,k){const d=document.createElement('div');d.className='toast'+(k?' '+k:'');d.textContent=m;document.getElementById('toasts').appendChild(d);setTimeout(()=>d.remove(),4500)}
let actx;function beep(n=2){try{actx=actx||new(window.AudioContext||window.webkitAudioContext)();for(let i=0;i<n;i++){const o=actx.createOscillator(),g=actx.createGain();o.connect(g);g.connect(actx.destination);o.frequency.value=880;g.gain.value=.15;o.start(actx.currentTime+i*.25);o.stop(actx.currentTime+i*.25+.15)}}catch(e){}}
function fmtFeed(f,role){const a=f.a||{};const o=a.oid&&S.orders.find(x=>x.id===a.oid);let k=f.k,L=o?o.lines:[];
  if(role==='kitchen'){if(k==='l_cancel'||k==='l_cancel_c'){k='l_cancel_k';L=L.filter(l=>l.ask>0||l.rb>0)}else if(k==='l_new'){k='l_new_k';L=L.filter(l=>l.rb>0)}}
  return t(k,{no:a.no,s:L.map(lineTxt).join(', '),p:pn(P(a.pid)),n:a.n,m:a.m})}
let lastFid=null;
function relevant(f,r,mine){const o=f.a&&f.a.oid&&S.orders.find(x=>x.id===f.a.oid),need=o&&o.lines.some(l=>l.ask>0||l.rb>0);
  if(r==='desk')return true;
  if(r==='kitchen'){if(f.k==='l_ask')return true;if(f.k==='l_new')return !!o&&o.lines.some(l=>l.rb>0)&&!o.lines.some(l=>l.ask>0);return(f.k==='l_cancel'||f.k==='l_cancel_c')&&!!need}
  if(r==='order')return['l_ordready','l_ans_bake','l_ans_no'].includes(f.k)&&mine.includes(f.a.oid);
  return false}
function feedToasts(){if(lastFid===null){lastFid=S.fid;return}
  const mine=JSON.parse(localStorage.getItem(MK)||'[]');const r=route(),role=r==='order'?'client':r;
  for(const f of S.feed.filter(x=>x.id>lastFid)){
    if(f.c===CID||!relevant(f,r,mine))continue;
    const txt=fmtFeed(f,role);toast(txt,f.k.startsWith('l_cancel')?'bad':'');beep(f.k==='l_ask'?4:f.k==='l_new'||f.k==='l_ordready'?3:1);
    if(r==='order'){try{navigator.vibrate&&navigator.vibrate(300);window.Notification&&Notification.permission==='granted'&&new Notification('Tayyor',{body:txt})}catch(e){}}}
  lastFid=S.fid}
let pendingRender=false;
function afterChange(){if(ROLE!=='client')feedToasts();render()}
const ROLE=window.ROLE||'client',ROOT=new URL('../',location.href).href,route=()=>ROLE==='client'?'order':ROLE;
const clientLink=()=>ROOT+'client/?s='+SLUG;
let zoomV=1;try{zoomV=Math.min(1.4,Math.max(0.6,+localStorage.getItem('tl.zoom')||1))}catch(e){}
function applyZoom(){document.body.style.zoom=zoomV===1?'':zoomV}
function zoomBy(d){zoomV=Math.round(Math.min(1.4,Math.max(0.6,zoomV+d))*10)/10;try{localStorage.setItem('tl.zoom',zoomV)}catch(e){}applyZoom();render()}
const LCODE={uzc:'ЎЗ',uzl:'UZ',ru:'RU',en:'EN'};
document.addEventListener('click',e=>{if(UI.langOpen&&!e.target.closest('.langs')){UI.langOpen=false;render()}});
function setLang(l){lang=l;localStorage.setItem('tl.lang',l);document.documentElement.lang=l==='en'?'en':l==='ru'?'ru':'uz';render()}
const TR={а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'j',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'h',ц:'ts',ч:'ch',ш:'sh',щ:'sh',ъ:'',ы:'i',ь:'',э:'e',ю:'yu',я:'ya',ў:'u',қ:'q',ғ:'g',ҳ:'h'};
const slugify=s=>String(s||'').toLowerCase().split('').map(c=>TR[c]!==undefined?TR[c]:c).join('').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,40);
UI.g=UI.g||{name:'',code:'',pass:'',pass2:'',codeEdited:false};
function reloadAs(code){location.replace(location.pathname+'?s='+code)}
async function doLogin(){const g=UI.g,code=slugify(g.code||SLUG);
  if(code.length<3)return toast(t('g_code_bad'),'bad');
  let r;try{const x=await sb.rpc('tayyor_login',{p_slug:code,p_pass:g.pass||''});if(x.error)throw x.error;r=x.data}catch(e){return toast(t('g_fail'),'bad')}
  if(!r||!r.ok)return toast(t(r&&r.err==='locked'?'g_locked':r&&r.err==='origin'?'g_origin':r&&r.err==='disabled'?'g_disabled':'g_bad'),'bad');
  try{localStorage.setItem('tl.tok.'+code,r.token);localStorage.setItem('tl.slug',code)}catch(e){}
  g.pass='';reloadAs(code)}
async function logout(){try{await sb.rpc('tayyor_logout',{p_slug:SLUG,p_token:TOK()})}catch(e){}authLost()}
async function savePwd(){const n=UI.pwNew||'';if(n.length<4)return toast(t('g_pass_short'),'bad');let ok=false;
  try{const x=await sb.rpc('tayyor_set_password',{p_slug:SLUG,p_token:TOK(),p_old:UI.pwOld||'',p_new:n});ok=x.data===true}catch(e){}
  if(ok){UI.pwOld=UI.pwNew='';toast(t('set_pass_ok'));render()}else toast(t('set_pass_bad'),'bad')}

const ATK='tl.atok';
const ATOK=()=>{try{return localStorage.getItem(ATK)}catch(e){return null}};
let AD={list:null,origins:[],form:false,f:null,pass:'',old:'',nw:'',orig:null,alerted:false};
function adOut(){try{localStorage.removeItem(ATK)}catch(e){}AD.list=null;render()}
async function adLogin(){let r;try{const x=await sb.rpc('tayyor_admin_login',{p_pass:AD.pass||''});if(x.error)throw x.error;r=x.data}catch(e){return toast(t('g_fail'),'bad')}
  if(!r||!r.ok)return toast(t(r&&r.err==='locked'?'a_locked':r&&r.err==='origin'?'g_origin':'a_bad'),'bad');
  try{localStorage.setItem(ATK,r.token)}catch(e){}AD.pass='';render();adRefresh()}
async function adLogout(){try{await sb.rpc('tayyor_admin_logout',{p_token:ATOK()})}catch(e){}adOut()}
async function adRefresh(){const tk=ATOK();if(!tk)return;
  try{const x=await sb.rpc('tayyor_admin_list',{p_token:tk});if(x.error)throw x.error;if(!x.data||!x.data.ok){adOut();return}
    AD.list=x.data.list;AD.origins=x.data.origins||[];if(AD.orig===null)AD.orig=AD.origins.join(', ');if(!AD.f)AD.f=newForm();setOnline(true);render();adAlertsToast()}
  catch(e){setOnline(false)}}
function adGen(){const a='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789',r=new Uint8Array(10);crypto.getRandomValues(r);AD.f.pass=Array.from(r,b=>a[b%a.length]).join('');render()}
function adName(el){AD.f.name=el.value;if(!AD.f.edited){AD.f.code=slugify(el.value);const c=document.getElementById('acode');if(c)c.value=AD.f.code}}
const parseDMY=s=>{const m=/^(\d{2})\.(\d{2})\.(\d{4})$/.exec((s||'').trim());if(!m)return null;const d=new Date(+m[3],+m[2]-1,+m[1]);return d.getFullYear()==+m[3]&&d.getMonth()==+m[2]-1&&d.getDate()==+m[1]?m[3]+'-'+m[2]+'-'+m[1]:null};
function addMonthYmd(ymd){const y=+ymd.slice(0,4),m=+ymd.slice(5,7),d=+ymd.slice(8,10),ny=m===12?y+1:y,nm=m===12?1:m+1,dim=new Date(ny,nm,0).getDate();return ny+'-'+String(nm).padStart(2,'0')+'-'+String(Math.min(d,dim)).padStart(2,'0')}
function maskDate(el){const d=el.value.replace(/\D/g,'').slice(0,8);el.value=d.length>4?d.slice(0,2)+'.'+d.slice(2,4)+'.'+d.slice(4):d.length>2?d.slice(0,2)+'.'+d.slice(2):d}
async function adCreate(){const f=AD.f,name=(f.name||'').trim(),code=slugify(f.code||name),days=Math.floor(+f.days||10),fee=Math.floor(+String(f.fee||0).replace(/\s/g,'')),until=parseDMY(f.until);
  if(!name)return toast(t('g_name_need'),'bad');if(code.length<3)return toast(t('g_code_bad'),'bad');if((f.pass||'').length<4)return toast(t('g_pass_short'),'bad');if(days<1||days>365)return toast(t('a_days_bad'),'bad');
  if(!(fee>=0))return toast(t('a_fee_bad'),'bad');if(!until)return toast(t('a_date_bad'),'bad');
  const s0=seedFresh(name),keep=S;S=s0;const pub=buildPub();S=keep;let r;
  try{const x=await sb.rpc('tayyor_admin_create',{p_token:ATOK(),p_slug:code,p_name:name,p_pass:f.pass,p_days:days,p_state:s0,p_pub:pub,p_fee:fee,p_paid_until:until});if(x.error)throw x.error;r=x.data}catch(e){return toast(t('g_fail'),'bad')}
  if(!r||!r.ok){if(r&&r.err==='auth'){adOut();return}return toast(t(r&&r.err==='taken'?'g_taken':r&&r.err==='pass'?'g_pass_short':r&&r.err==='fee'?'a_fee_bad':'g_code_bad'),'bad')}
  toast(t('a_created_ok',{n:name,l:code}));AD.f=newForm();AD.form=false;adRefresh()}
async function adUpdate(slug,o,okKey,okArgs){let r;
  try{const x=await sb.rpc('tayyor_admin_update',{p_token:ATOK(),p_slug:slug,p_name:o.name??null,p_pass:o.pass??null,p_days:o.days??null,p_disabled:o.disabled??null,p_fee:o.fee??null,p_paid_until:o.until??null,p_notify:o.notify??null});if(x.error)throw x.error;r=x.data}catch(e){return toast(t('g_fail'),'bad')}
  if(!r||!r.ok){if(r&&r.err==='auth'){adOut();return}return toast(t(r&&r.err==='days'?'a_days_bad':r&&r.err==='pass'?'g_pass_short':r&&r.err==='fee'?'a_fee_bad':'g_fail'),'bad')}
  toast(t(okKey,okArgs));adRefresh()}
function adFee(slug){const c=adItem(slug);askInput(t('a_fee_t',{n:c.name}),String(c.fee||0),'text',v=>{const n=Math.floor(+v.replace(/\s/g,''));if(!(n>=0))return toast(t('a_fee_bad'),'bad');adUpdate(slug,{fee:n},'a_saved')})}
function adUntil(slug){const c=adItem(slug);askInput(t('a_date_t',{n:c.name}),dMY(c.until)||'','text',v=>{const d=parseDMY(v);if(!d)return toast(t('a_date_bad'),'bad');adUpdate(slug,{until:d},'a_saved')},'date')}
function adNotify(slug,v){const n=Math.floor(+v);if(!(n>=0&&n<=60)){toast(t('a_days_bad'),'bad');render();return}adUpdate(slug,{notify:n},'a_saved')}
function adPay(slug){const c=adItem(slug),today=dayKey(),base=c.until&&c.until>=today?c.until:today,nu=addMonthYmd(base);
  askConfirm(t('a_pay_c',{n:c.name,a:fm(c.fee),d:dMY(nu)}),async()=>{let r;
    try{const x=await sb.rpc('tayyor_admin_pay',{p_token:ATOK(),p_slug:slug,p_amount:null});if(x.error)throw x.error;r=x.data}catch(e){return toast(t('g_fail'),'bad')}
    if(r&&r.ok){toast(t('a_pay_ok',{n:c.name,a:fm(r.amount),d:dMY(r.until)}));adRefresh()}else toast(t('g_fail'),'bad')})}
const newForm=()=>({name:'',code:'',pass:'',days:10,fee:0,until:(()=>{const d=addMonthYmd(dayKey());return dMY(d)})(),edited:false});
const adItem=slug=>(AD.list||[]).find(x=>x.slug===slug);
function adDays(slug,v){const d=Math.floor(+v);if(!(d>=1&&d<=365)){toast(t('a_days_bad'),'bad');render();return}adUpdate(slug,{days:d},'a_days_ok',{n:adItem(slug).name,d})}
function adRename(slug){const c=adItem(slug);askInput(t('a_rename_t',{n:c.name}),c.name,'text',v=>{v=v.trim();if(!v||v===c.name)return;adUpdate(slug,{name:v},'a_name_ok',{n:v})})}
function adPass(slug){const c=adItem(slug);askInput(t('a_pass_t',{n:c.name}),'', 'text',v=>{if(v.length<4)return toast(t('g_pass_short'),'bad');adUpdate(slug,{pass:v},'a_pass_ok',{n:c.name})})}
function adToggle(slug){const c=adItem(slug),off=!c.disabled;askConfirm(t(off?'a_c_disable':'a_c_enable',{n:c.name}),()=>adUpdate(slug,{disabled:off},off?'a_off_ok':'a_on_ok',{n:c.name}))}
function adDelete(slug){const c=adItem(slug);askConfirm(t('a_c_del',{n:c.name}),async()=>{let r;
  try{const x=await sb.rpc('tayyor_admin_delete',{p_token:ATOK(),p_slug:slug});if(x.error)throw x.error;r=x.data}catch(e){return toast(t('g_fail'),'bad')}
  if(r&&r.ok){toast(t('a_del_ok',{n:c.name}));adRefresh()}else toast(t('g_fail'),'bad')})}
function adCopy(slug,role){const u=ROOT+role+'/?s='+slug;const done=()=>toast(t('a_copied',{x:t('a_link_'+(role==='client'?'client':role==='desk'?'desk':'kitchen'))+' · '+slug}));
  try{navigator.clipboard.writeText(u).then(done,()=>askInput(u,u,'text',()=>{}))}catch(e){askInput(u,u,'text',()=>{})}}
async function adSavePass(){let ok=false;if((AD.nw||'').length<8)return toast(t('a_newpass8'),'bad');
  try{const x=await sb.rpc('tayyor_admin_set_password',{p_token:ATOK(),p_old:AD.old||'',p_new:AD.nw});ok=x.data===true}catch(e){}
  if(ok){AD.old=AD.nw='';toast(t('a_pass_changed'));render()}else toast(t('a_bad'),'bad')}
async function adSaveOrigins(){const arr=(AD.orig||'').split(',').map(s=>s.trim().replace(/\/+$/,'')).filter(Boolean);let ok=false;
  if(arr.length)try{const x=await sb.rpc('tayyor_admin_set_origins',{p_token:ATOK(),p_origins:arr});ok=x.data===true}catch(e){}
  if(ok){toast(t('a_origins_ok'));adRefresh()}else toast(t('g_fail'),'bad')}
function adAlerts(){const out=[];for(const c of (AD.list||[])){if(c.disabled||!c.until)continue;const n=leftDays(c.until);if(n>(c.notify??5))continue;
  out.push({late:n<0,m:n<0?t('a_al_late',{n:c.name,d:-n}):n===0?t('a_al_today',{n:c.name}):t('a_al_soon',{n:c.name,d:n,date:dMY(c.until)})})}return out}
function adAlertsToast(){if(AD.alerted)return;AD.alerted=true;const a=adAlerts();a.slice(0,3).forEach((x,i)=>setTimeout(()=>toast(x.m,x.late?'bad':''),i*700))}
function adLoginHTML(){return head()+`<h2>${t('a_pass_admin')}</h2><div class="card col"><input type="password" autocomplete="current-password" value="${esc(AD.pass)}" oninput="AD.pass=this.value" onkeydown="if(event.key==='Enter')adLogin()"><button class="btn full" style="margin-top:12px" onclick="adLogin()">${t('g_login')}</button></div>${foot()}`}
const kb=n=>n>=1048576?(n/1048576).toFixed(1)+' МБ':Math.max(1,Math.round(n/1024))+' КБ';
function adminHTML(){const f=AD.f;const act=(AD.list||[]).filter(c=>!c.disabled),income=act.reduce((a,c)=>a+(c.fee||0),0),al=adAlerts(),soon=al.filter(x=>!x.late).length,late=al.filter(x=>x.late).length;
  const kpi=(l,v)=>`<div class="kpi"><div class="kl">${l}</div><div class="kv" style="font-size:22px">${v}</div></div>`;
  let h=head()+`<div class="kpis">${kpi(t('k_due_total'),fm(income))}${kpi(t('k_soon'),soon)}${kpi(t('k_late'),late)}</div>`+al.map(x=>`<div class="bill${x.late?' late':''}">${esc(x.m)}</div>`).join('');
  h+=`<div class="row" style="margin:8px 0"><button class="btn" onclick="AD.form=!AD.form;render()">${t('a_add')}</button><button class="btn sec" style="flex:0 0 auto" onclick="adRefresh()">${t('a_refresh')}</button></div>`;
  if(AD.form)h+=`<div class="card col"><div class="sub">${t('g_name')}</div><input value="${esc(f.name)}" oninput="adName(this)">
    <div class="sub" style="margin-top:10px">${t('g_code')}</div><input id="acode" autocapitalize="none" value="${esc(f.code)}" oninput="AD.f.code=this.value;AD.f.edited=true"><div class="sub">${t('g_code_hint')}</div>
    <div class="sub" style="margin-top:10px">${t('g_pass')}</div><div class="row" style="flex-wrap:nowrap"><input value="${esc(f.pass)}" autocomplete="off" oninput="AD.f.pass=this.value"><button class="btn sec sm" style="flex:0 0 auto" onclick="adGen()">${t('a_gen')}</button></div>
    <div class="row" style="margin-top:10px"><div><div class="sub">${t('a_fee')}</div><input inputmode="numeric" value="${esc(f.fee)}" oninput="AD.f.fee=this.value"></div><div><div class="sub">${t('a_paid_until')}</div><input inputmode="numeric" maxlength="10" value="${esc(f.until)}" oninput="maskDate(this);AD.f.until=this.value"></div></div>
    <div class="sub" style="margin-top:10px">${t('a_days')}</div><input type="number" min="1" max="365" value="${esc(f.days)}" oninput="AD.f.days=this.value">
    <button class="btn ok full" style="margin-top:12px" onclick="adCreate()">${t('g_make')}</button></div>`;
  h+=(AD.list&&AD.list.length)?AD.list.map(c=>{const n=c.until?leftDays(c.until):null,nt=c.notify??5,
      st=n===null?['',t('a_not_set')]:n<0?['bad',t('a_overdue',{n:-n})]:n===0?['warn',t('a_today')]:n<=nt?['warn',t('a_left',{n})]:['ok',t('a_left',{n})];
    return`<div class="card col"><div class="line"><b>${esc(c.name)}</b><span class="chip ${c.disabled?'bad':'ok'}">${t(c.disabled?'a_off':'a_active')}</span></div>
    <div class="sub">${t('g_code')}: <b>${esc(c.slug)}</b> · ${t('a_created')} ${dtm(Date.parse(c.created))}</div>
    <div class="sub">${t('a_size')}: ${kb(c.size||0)} · ${t('a_upd')}: ${c.updated?dtm(Date.parse(c.updated)):'—'}${c.inbox?` · ${t('a_inbox')}: ${c.inbox}`:''}</div>
    <div class="billbox"><div class="line" style="align-items:center"><span>${t('a_fee')}: <b>${fm(c.fee)}</b></span><button class="btn sec sm" onclick="adFee('${c.slug}')">${t('a_fee_btn')}</button></div>
      <div class="line" style="align-items:center"><span>${t('a_paid_until')}: <b>${c.until?dMY(c.until):'—'}</b> <span class="chip ${st[0]}">${st[1]}</span></span><button class="btn sec sm" onclick="adUntil('${c.slug}')">${t('a_date_btn')}</button></div>
      <div class="row" style="flex-wrap:nowrap;align-items:center"><span class="sub" style="flex:1">${t('a_notify')}</span><input type="number" min="0" max="60" style="width:80px;flex:0 0 80px" value="${nt}" onchange="adNotify('${c.slug}',this.value)"></div>
      <button class="btn ok full" style="margin-top:6px" onclick="adPay('${c.slug}')">${t('a_pay')}</button>
      ${(c.pays&&c.pays.length)?`<div class="sub" style="margin-top:6px">${t('a_pays')}:</div>`+c.pays.map(p=>`<div class="line sub"><span>${dtm(Date.parse(p.t))} · ${fm(p.a)}</span><span>→ ${dMY(p.u)}</span></div>`).join(''):''}</div>
    <div class="row" style="margin-top:8px;flex-wrap:nowrap;align-items:center"><span class="sub" style="flex:1">${t('a_days')}</span><input type="number" min="1" max="365" style="width:90px;flex:0 0 90px" value="${c.days}" onchange="adDays('${c.slug}',this.value)"></div>
    <div class="sub" style="margin-top:8px">${t('a_links')}</div><div class="chips"><button class="chip2" onclick="adCopy('${c.slug}','client')">${t('a_link_client')}</button><button class="chip2" onclick="adCopy('${c.slug}','desk')">${t('a_link_desk')}</button><button class="chip2" onclick="adCopy('${c.slug}','kitchen')">${t('a_link_kitchen')}</button></div>
    <div class="chips" style="margin-top:10px"><button class="btn sec sm" onclick="adRename('${c.slug}')">${t('a_rename')}</button><button class="btn sec sm" onclick="adPass('${c.slug}')">${t('a_setpass')}</button><button class="btn sec sm" onclick="adToggle('${c.slug}')">${t(c.disabled?'a_enable':'a_disable')}</button><button class="btn bad sm" onclick="adDelete('${c.slug}')">${t('del')}</button></div></div>`}).join(''):`<p class="sub">${t('a_none')}</p>`;
  h+=`<div class="card col"><b>${t('a_origins')}</b><input style="margin-top:8px" value="${esc(AD.orig||'')}" oninput="AD.orig=this.value"><div class="sub" style="margin-top:4px">${t('a_origins_hint')}</div><button class="btn sec full" style="margin-top:8px" onclick="adSaveOrigins()">${t('set_save')}</button></div>
    <div class="card col"><b>${t('a_pass_admin')}</b><div class="sub" style="margin-top:6px">${t('set_old')}</div><input type="password" autocomplete="current-password" value="${esc(AD.old)}" oninput="AD.old=this.value"><div class="sub" style="margin-top:8px">${t('set_new')}</div><input type="password" autocomplete="new-password" value="${esc(AD.nw)}" oninput="AD.nw=this.value"><button class="btn full" style="margin-top:10px" onclick="adSavePass()">${t('set_save')}</button></div>
    <div class="row" style="margin-top:16px"><button class="btn sec sm" onclick="adLogout()">${t('exit')}</button></div>`+foot();
  return h}
function askInput(title,value,type,fn,mask){UI.inp={title,value,type,fn,mask};render()}
function inpYes(){const i=UI.inp,v=(document.getElementById('inpv')||{}).value||'';UI.inp=null;render();if(i&&i.fn)i.fn(v)}
function inpNo(){UI.inp=null;render()}
function inputHTML(){return UI.inp?`<div class="modal" onclick="if(event.target===this)inpNo()"><div><p class="cfm">${esc(UI.inp.title)}</p><input id="inpv" type="${UI.inp.type}" value="${esc(UI.inp.value)}" autocapitalize="none" ${UI.inp.mask==='date'?'inputmode="numeric" maxlength="10" oninput="maskDate(this)"':''} onkeydown="if(event.key==='Enter')inpYes()"><div class="row" style="margin-top:14px"><button class="btn sec" onclick="inpNo()">${t('back')}</button><button class="btn" onclick="inpYes()">${t('set_save')}</button></div></div></div>`:''}
let installEv=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEv=e;render()});
async function doInstall(){if(installEv){installEv.prompt();await installEv.userChoice;installEv=null;render()}}
const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent),isStandalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
function go(r){location.hash='#/'+r}
function hm(ts){const d=new Date(ts);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}
function mmss(ms){ms=Math.max(0,ms);const s=Math.ceil(ms/1000);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

/* ---------- views ---------- */
const dMY=ymd=>ymd?ymd.slice(8,10)+'.'+ymd.slice(5,7)+'.'+ymd.slice(0,4):'';
const leftDays=ymd=>Math.round((Date.parse(ymd+'T00:00:00')-Date.parse(dayKey()+'T00:00:00'))/864e5);
function billText(){const b=S&&S.bill;if(!b||!b.until)return null;const n=leftDays(b.until);if(n>(b.notify??5))return null;const d=dMY(b.until);
  let m=n<0?t('bill_late',{d,n:-n}):n===0?t('bill_today',{d}):t('bill_soon',{d,n});if(b.fee>0)m+='. '+t('bill_amount',{a:fm(b.fee)});return{m,late:n<0}}
function billBanner(){if(ROLE!=='desk'&&ROLE!=='kitchen')return'';const b=billText();return b?`<div class="bill${b.late?' late':''}">${esc(b.m)}</div>`:''}
function billToast(){const b=billText();if(!b)return;const k='tl.bill.'+SLUG+'.'+dayKey();try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,'1')}catch(e){}toast(b.m,b.late?'bad':'')}
function head(){return`<header><div class="brand"><img class="logo" src="${ROOT}assets/emblem-${ROLE}.png" alt=""><span class="bn">Tayyor</span>${((ROLE==='client'?(PUB&&PUB.name):ROLE==='admin'?'':(S&&S.name))||'')?`<span class="bc">${esc(ROLE==='client'?PUB.name:S.name)}</span>`:''}<span class="br">${t(ROLE==='client'?'role_client':'r_'+ROLE)}</span></div><div class="langs"><button title="${t('zoom_out')}" onclick="zoomBy(-0.1)">A−</button><button title="${t('zoom_in')}" onclick="zoomBy(0.1)">A+</button><button onclick="UI.langOpen=!UI.langOpen;render()" aria-haspopup="true">🌐 ${LCODE[lang]}</button>${UI.langOpen?`<div class="lmenu">${LANGS.map(([c,n])=>`<button class="${lang===c?'on':''}" onclick="UI.langOpen=false;setLang('${c}')">${n}</button>`).join('')}</div>`:''}</div></header>${installBox()}${billBanner()}${UI.upd?`<div class="upd"><b>${t('update')}</b><button class="btn sm sec" onclick="doUpdate()">${t('update_btn')}</button></div>`:''}`}
function foot(){return`<div class="foot">${t('version')} ${APP_VERSION} · <span style="color:${online?'var(--ok)':'var(--bad)'}">●</span> ${online?t('on_line'):t('off_line')}${SLUG?' · '+esc(SLUG):''} · Tayyor</div>`}
function installBox(){if(isStandalone)return'';if(installEv)return`<button class="btn full" style="margin:6px 0" onclick="doInstall()">📲 ${t('install')}</button>`;if(isIOS)return`<p class="sub">📲 ${t('ios_hint')}</p>`;return''}
function gateHTML(){const g=UI.g;
  return head()+`<h2>${t('r_'+ROLE)}</h2><div class="card col"><div class="sub">${t('g_code')}</div><input id="gcode" autocapitalize="none" autocomplete="username" value="${esc(g.code||SLUG)}" oninput="UI.g.code=this.value">
    <div class="sub" style="margin-top:10px">${t('g_pass')}</div><input type="password" autocomplete="current-password" value="${esc(g.pass)}" oninput="UI.g.pass=this.value" onkeydown="if(event.key==='Enter')doLogin()">
    <button class="btn full" style="margin-top:12px" onclick="doLogin()">${t('g_login')}</button></div>${foot()}`}
function codeHTML(){return head()+`<h2>${t('c_code_title')}</h2>${UI.noTenant?`<p class="perr" style="font-size:14px">${t('c_none')}</p>`:''}<div class="card col"><input id="gcode" autocapitalize="none" placeholder="samsa-aka" value="${esc(UI.g.code||'')}" oninput="UI.g.code=this.value" onkeydown="if(event.key==='Enter')openCode()"><div class="sub" style="margin-top:6px">${t('c_code_hint')}</div><button class="btn full" style="margin-top:10px" onclick="openCode()">${t('c_code_btn')}</button></div>${foot()}`}
function openCode(){const c=slugify(UI.g.code);if(c.length<3)return toast(t('g_code_bad'),'bad');reloadAs(c)}
function seedFresh(name){const s=seed();s.ready={meat:0,pot:0,herb:0,pump:0};s.batches=[];s.name=name;return s}
function prodStatus(p){if(!p.stock)return invTracked(p.id)&&invFree(p.id)<=0?`<span class="chip bad">${t('out_of_stock')}</span>`:'';const fr=freeR(p.id);return fr>0?`<span class="chip ok">${t('in_stock',{n:fr})}</span>`:`<span class="chip bad">${t('none_now')}</span>`}
function orderStatus(o){if(o.status==='done')return`<span class="chip">${t('st_done')}</span>`;if(o.status==='cancelled')return`<span class="chip bad">${t('st_cancel')}</span>`;
  if(isReady(o))return`<span class="chip ok">${t('st_ready')}</span>`;
  if(o.lines.some(l=>l.ask>0))return`<span class="chip warn">${t('st_ask')}</span>`;
  let at=0;for(const l of o.lines)if(l.rb>0)at=Math.max(at,etaLine(o,l)||0);
  return`<span class="chip warn">${t('st_wait',{m:at?mins(at):'?'})}</span>`}
function modalTxt(x){const p=esc(pn(P(x.pid)));
  if(x.none>0)return x.wait>0?t('short_b',{p,w:x.want,r:x.take,n:x.wait,m:mins(x.at),k:x.none}):t('short_c',{p,w:x.want,r:x.take,k:x.none});
  return t('short_a',{p,w:x.want,r:x.take,m:mins(x.at)})}
const histLoad=()=>{try{return JSON.parse(localStorage.getItem(HK)||'[]')}catch(e){return[]}};
const dtm=ts=>{const d=new Date(ts);return String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')+' '+hm(ts)};
function pubOrder(id){const o=PUB&&PUB.orders&&PUB.orders[id];if(!o)return null;return{id,no:o.no,status:o.st,pickupAt:o.at,lines:o.lines.map(l=>({pid:l.pid,qty:l.qty,rr:l.rr,rb:l.rb,ask:l.ask,declined:l.dec,e:l.e}))}}
const isPend=x=>!pubOrder(x.id)&&x.t>Date.now()-600000;
function orderCard(o){return`<div class="card col"><div class="line"><b>${t('order_no',{n:o.no})}</b><span class="sub">${t('at_time',{t:hm(o.pickupAt)})}</span></div>${o.lines.map(l=>`<div class="line"><span>${esc(pn(P(l.pid)))} × ${l.qty}</span>${l.declined>0?`<span class="chip bad">${t('declined',{n:l.declined})}</span>`:''}${l.rb>0?`<span class="sub">${t('waiting',{n:l.rb})}</span>`:''}</div>`).join('')}${orderStatus(o)}${UI.canc&&UI.canc[o.id]?`<div class="sub">${t('cancelling')}</div>`:`<button class="btn bad full" style="margin-top:8px" onclick="clientCancel('${o.id}')">${t('cancel_order')}</button>`}</div>`}
function pendCard(x){return`<div class="card col"><div class="line"><b>${t('order_sent')}</b><span class="sub">${dtm(x.t)}</span></div>${x.items.map(([pid,q])=>`<div class="line"><span>${P(pid)?esc(pn(P(pid))):'?'} × ${q}</span></div>`).join('')}<span class="chip warn">${t('st_pending')}</span>${UI.canc&&UI.canc[x.id]?`<div class="sub">${t('cancelling')}</div>`:`<button class="btn bad full" style="margin-top:8px" onclick="clientCancel('${x.id}')">${t('cancel_order')}</button>`}</div>`}
function repeatOrder(i){const h=histLoad()[i];if(!h)return;UI.cart={};for(const[pid,q]of h.items)if(P(pid)&&P(pid).on!==false)UI.cart[pid]=q;UI.ctab='new';render();toast(t('repeat_ok'));window.scrollTo(0,0)}
function vClient(){const items=PRODS().filter(p=>p.on!==false),tab=UI.ctab||'new';
  const tot=items.reduce((a,p)=>a+(UI.cart[p.id]||0)*p.price,0);
  const hist=histLoad(),ids=mineIds(),pend=hist.filter(x=>ids.includes(x.id)&&isPend(x)),act=ids.map(pubOrder).filter(o=>o&&o.status==='open'),cnt=pend.length+act.length;
  let h=head()+`<div class="tabs">${[['new',t('c_new')],['mine',t('my_orders')+(cnt?`<span class="badge">${cnt}</span>`:'')],['hist',t('c_hist')]].map(([k,l])=>`<button class="${tab===k?'on':''}" onclick="UI.ctab='${k}';render()">${l}</button>`).join('')}</div>`;
  if(tab==='mine')return h+(cnt?pend.map(pendCard).join('')+act.map(orderCard).join(''):`<p class="sub">${t('no_active')}</p><button class="btn full" onclick="UI.ctab='new';render()">${t('c_new')}</button>`)+foot();
  if(tab==='hist'){const hs=hist.map((x,i)=>[x,i]).filter(([x])=>{const o=pubOrder(x.id);return !(o&&o.status==='open')&&!isPend(x)});
    return h+(hs.length?hs.map(([x,i])=>{const o=pubOrder(x.id),no=o?o.no:x.no;return`<div class="card col"><div class="line"><b>${no?t('order_no',{n:no}):t('order_sent')}</b><span class="sub">${dtm(x.t)}</span></div>${x.items.map(([pid,q])=>`<div class="line"><span>${P(pid)?esc(pn(P(pid))):'?'} × ${q}</span></div>`).join('')}<div class="line"><b>${fm(x.sum)}</b>${o?orderStatus(o):''}</div><button class="btn full" style="margin-top:6px" onclick="repeatOrder(${i})">🔁 ${t('repeat')}</button></div>`}).join(''):`<p class="sub">${t('no_hist')}</p>`)+foot()}
  h+=`<h1 class="ask">${t('what_order')}</h1>`;
  h+=items.map(p=>`<div class="card"><div class="pe">${p.emoji}</div><div class="pi"><b>${esc(pn(p))}</b><div class="sub">${fm(p.price)}</div>${prodStatus(p)}</div><div class="step"><button onclick="cartAdd('${p.id}',-1)">−</button><span>${UI.cart[p.id]||0}</span><button onclick="cartAdd('${p.id}',1)">+</button></div></div>`).join('');
  h+=`<h2>${t('pickup_when')}</h2><div class="chips">${[[0,t('now')],[30,t('in_min',{n:30})],[60,t('in_hour')],[90,t('in_min',{n:90})],[120,t('in_min',{n:120})],[-1,t('pick_custom')]].map(([v,l])=>`<button class="chip2${UI.pick===v?' on':''}" onclick="pickSel(${v})">${l}</button>`).join('')}</div><input id="pt" inputmode="numeric" maxlength="5" placeholder="${t('time_ph')}" value="${esc(UI.pickTime||'')}" oninput="onTime(this)" style="margin-top:8px;display:${UI.pick===-1?'block':'none'}">
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
const invTracked=pid=>ROLE==='client'?!!(PUB&&PUB.iv&&PUB.iv[pid]!==undefined):!!invOf(pid);
const invReserved=pid=>openP().reduce((a,o)=>a+o.lines.filter(l=>l.pid===pid).reduce((b,l)=>b+l.qty,0),0);
const invFree=pid=>{if(ROLE==='client')return invTracked(pid)?PUB.iv[pid]:Infinity;const i=invOf(pid);return i?Math.max(0,i.q-invReserved(pid)):Infinity};
function invDeduct(pid,d){const i=invOf(pid);if(i)i.q=Math.max(0,i.q-d)}
function receive(pid,q,cost){mutate(()=>{S.inv=S.inv||{};const i=S.inv[pid]||{q:0,cost:0},nq=i.q+q;
  i.cost=nq>0?Math.round((i.q*i.cost+q*cost)/nq):cost;i.q=nq;S.inv[pid]=i;
  S.inLog=S.inLog||[];S.inLog.unshift({t:Date.now(),pid,q,cost});S.inLog=S.inLog.slice(0,60)})}
function setInv(pid,f,v){mutate(()=>{S.inv=S.inv||{};const i=S.inv[pid]=S.inv[pid]||{q:0,cost:0};i[f]=Math.max(0,+v||0)})}
function rcvSel(pid){UI.rcv={...(UI.rcv||{}),pid,c:pid==='__new'?'':(invOf(pid)||{}).cost||''};render()}
function doReceive(){const r=UI.rcv||{},ex=S.products.filter(p=>!p.stock);let pid=r.pid||(ex[0]&&ex[0].id);const q=Math.floor(+r.q||0),c=Math.max(0,+r.c||0);
  if(pid==='__new'){const nm=(r.nm||'').trim(),pr=Math.max(0,Math.floor(+r.pr||0));
    if(!nm)return toast(t('inv_need_name'));if(!pr)return toast(t('inv_need_price'));if(q<1)return toast(t('inv_qty'));
    const id='p'+uid();mutate(()=>{S.products.push({id,emoji:'📦',names:{uzc:nm,uzl:nm,ru:nm,en:nm},price:pr,stock:false,on:true})});receive(id,q,c);
    UI.rcv={pid:id,q:'',c};toast(t('inv_added',{p:nm}));render();return}
  if(!pid||q<1)return toast(t('inv_qty'));receive(pid,q,c);UI.rcv={pid,q:'',c};toast(t('rcv_ok2',{p:pn(P(pid)),n:q,c:fm(c)}));render()}
function invHTML(){const ex=S.products.filter(p=>!p.stock&&p.on!==false),r=UI.rcv||{},sel=r.pid==='__new'?'__new':(r.pid&&P(r.pid)&&!P(r.pid).stock?r.pid:(ex[0]&&ex[0].id));
  const kpi=(l,v)=>`<div class="kpi"><div class="kl">${l}</div><div class="kv" style="font-size:22px">${v}</div></div>`;
  const val=ex.reduce((a,p)=>a+(invOf(p.id)?invOf(p.id).q*invOf(p.id).cost:0),0),td=(S.sold&&S.sold[dayKey()])||{};let rev=0,prof=0;
  for(const p of ex){const e=td[p.id];if(e){rev+=e.s;prof+=e.s-(e.c||0)}}
  let h=`<div class="kpis">${kpi(t('inv_value'),fm(val))}${kpi(t('inv_rev'),fm(rev))}${kpi(t('inv_profit'),fm(prof))}</div>`;
  h+=`<div class="card col"><b>${t('inv_receive')}</b><div class="chips" style="margin-top:8px">${ex.map(p=>`<button class="chip2${p.id===sel?' on':''}" onclick="rcvSel('${p.id}')">${p.emoji} ${esc(pn(p))}</button>`).join('')}<button class="chip2${sel==='__new'?' on':''}" onclick="rcvSel('__new')">+ ${t('inv_new')}</button></div>${sel==='__new'?`<div class="row" style="margin-top:8px"><div><div class="sub">${t('nm_uz')}</div><input value="${esc(r.nm||'')}" oninput="UI.rcv={...(UI.rcv||{}),pid:'__new',nm:this.value}"></div><div><div class="sub">${t('inv_price')}</div><input type="number" min="0" inputmode="numeric" value="${esc(r.pr||'')}" oninput="UI.rcv={...(UI.rcv||{}),pid:'__new',pr:this.value}"></div></div>`:''}
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
  h+=`<button class="btn sec full" style="margin-top:14px" onclick="UI.menuEdit=!UI.menuEdit;render()">✏️ ${t('menu_edit')}</button>`;
  if(UI.menuEdit)h+=S.products.map(menuCard).join('')+`<button class="btn sec full" onclick="addProd()">${t('add_prod')}</button>`;
  return h}
function menuCard(p){return`<div class="card col"><div class="row">${LANGS.map(([c,n])=>`<input title="${n}" placeholder="${n}" value="${esc(p.names[c])}" onchange="setP('${p.id}','n_${c}',this.value)">`).join('')}</div><div class="row" style="margin-top:6px"><div><div class="sub">${t('price')}</div><input type="number" value="${p.price}" onchange="setP('${p.id}','price',this.value)"></div></div><div class="row" style="margin-top:6px;align-items:center"><label class="sub"><input type="checkbox" style="width:auto" ${p.stock?'checked':''} onchange="setP('${p.id}','stock',this.checked);render()"> ${t('tracked')}</label><button class="btn bad sm" style="flex:0 0 auto" onclick="delProd('${p.id}')">${t('del')}</button></div></div>`}
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
    h+=`<h2>🔔</h2>`+S.feed.slice(-8).reverse().map(f=>`<div class="line sub${f.k.startsWith('l_cancel')?' cancelred':''}"><span>${fmtFeed(f,'desk')}</span><span>${hm(f.t)}</span></div>`).join('')}
  if(UI.tab==='stock')h+=invHTML();
  if(UI.tab==='hall'){
    h+=`<div class="grid tb">${tbls().map(i=>`<button class="${hallOrder(i)?'occ':''} ${UI.tbl===i?'sel':''}" onclick="UI.tbl=${i};render()">${i}</button>`).join('')}</div><div class="row" style="margin-top:8px"><button class="btn sec sm" onclick="addTable()">${t('add_table')}</button>${UI.tbl&&!hallOrder(UI.tbl)?`<button class="btn bad sm" onclick="delTable(${UI.tbl})">${t('del_table')} ${UI.tbl}</button>`:''}</div>`;
    if(UI.tbl){const o=hallOrder(UI.tbl),sum=o?o.lines.reduce((a,l)=>a+l.qty*P(l.pid).price,0):0;
      h+=`<h2>${t('table',{n:UI.tbl})}</h2>${o?o.lines.map(l=>`<div class="card"><div class="pi">${P(l.pid).emoji} ${esc(pn(P(l.pid)))}</div><div class="step"><button onclick="hallAdd(${UI.tbl},'${l.pid}',-1)">−</button><span>${l.qty}</span><button onclick="hallAdd(${UI.tbl},'${l.pid}',1)">+</button></div></div>`).join('')+`<div class="line"><b>${t('total')}</b><b>${fm(sum)}</b></div><button class="btn ok full" onclick="closeTable(${UI.tbl})">${t('close_table')}</button>`:`<p class="sub">${t('table_empty')}</p>`}
      <h2>+</h2><div class="grid">${S.products.filter(p=>p.on!==false).map(p=>`<button onclick="hallAdd(${UI.tbl},'${p.id}',1)">${p.emoji}<br><small>${esc(pn(p))}</small>${p.stock?`<br><small>${freeR(p.id)}</small>`:''}</button>`).join('')}</div>`}}
  if(UI.tab==='set'){
    h+=`<div class="card col"><div class="sub">${t('set_retain',{n:S.retain||10})}</div></div>
    <div class="card col"><b>${t('link')}</b><div class="sub" style="word-break:break-all;margin-top:4px">${esc(clientLink())}</div><div id="qr" style="margin-top:8px;max-width:180px"></div><div class="sub" style="margin-top:6px">${t('g_code')}: <b>${esc(SLUG)}</b></div></div>
    <div class="card col"><b>${t('set_pass')}</b><div class="sub" style="margin-top:6px">${t('set_old')}</div><input type="password" autocomplete="current-password" value="${esc(UI.pwOld||'')}" oninput="UI.pwOld=this.value">
      <div class="sub" style="margin-top:8px">${t('set_new')}</div><input type="password" autocomplete="new-password" value="${esc(UI.pwNew||'')}" oninput="UI.pwNew=this.value"><button class="btn full" style="margin-top:10px" onclick="savePwd()">${t('set_save')}</button></div>`}
  return h+`<div class="row" style="margin-top:16px"><button class="btn sec sm" onclick="logout()">${t('exit')}</button></div>`+foot()}

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
  return h+`<div class="row" style="margin-top:16px"><button class="btn sec sm" onclick="logout()">${t('exit')}</button></div>`+foot()}

function render(){
  const app=document.getElementById('app');let h;
  if(ROLE==='client'){if(!SLUG||UI.noTenant)h=codeHTML();else if(!PUB)h=head()+`<p class="sub" style="margin-top:40px;text-align:center">${t('loading')}</p>`;else h=null}
  else if(ROLE==='admin'){h=!ATOK()?adLoginHTML():(!AD.list?head()+`<p class="sub" style="margin-top:40px;text-align:center">${t('loading')}</p>`:adminHTML())}
  else{if(!SLUG||!TOK())h=gateHTML();else if(!S)h=head()+`<p class="sub" style="margin-top:40px;text-align:center">${t('loading')}</p>`;else h=null}
  const ae=document.activeElement;
  if(ae&&['INPUT','SELECT'].includes(ae.tagName)&&app.contains(ae)&&ae.type!=='checkbox'){pendingRender=true;return}
  pendingRender=false;
  if(h===null)h=ROLE==='client'?vClient():(ROLE==='desk'?vDesk():vKitchen());
  app.innerHTML=h+cfmHTML()+inputHTML();
  const q=document.getElementById('qr');if(q&&window.qrcode){try{const c=qrcode(0,'M');c.addData(clientLink());c.make();q.innerHTML=c.createSvgTag(4)}catch(e){}}}
document.addEventListener('focusout',()=>{if(pendingRender)setTimeout(()=>{if(pendingRender)render()},300)});

/* ---------- ticking, updates ---------- */
const alerted=new Set();let tick=0;
setInterval(()=>{tick++;
  document.querySelectorAll('[data-end]').forEach(e=>{const l=+e.dataset.end-Date.now();if(l>0)e.textContent=mmss(l);else if(!e.classList.contains('late')){render()}});
  if(S)for(const b of S.batches)if(b.end<=Date.now()&&!alerted.has(b.id)){alerted.add(b.id);const r=route();if(r==='kitchen'||r==='desk'){beep(4);toast(t(r==='kitchen'?'timer_k':'timer_d',{p:pn(P(b.pid)),n:b.qty}));render()}}
  if(tick%20===0)render()},1000);
async function chk(){try{const r=await fetch(ROOT+'version.json?'+Date.now(),{cache:'no-store'});const j=await r.json();if(j.v&&j.v!==APP_VERSION){UI.upd=true;render()}}catch(e){}}
async function doUpdate(){try{const rs=await navigator.serviceWorker.getRegistrations();for(const r of rs)await r.unregister();for(const k of await caches.keys())await caches.delete(k)}catch(e){}location.reload()}
setInterval(chk,60000);chk();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register(ROOT+'sw.js',{scope:ROOT}).catch(()=>{});
applyZoom();
if(ROLE==='client'){render();pullPub().then(()=>render())}
else if(ROLE==='admin'){render();adRefresh()}
else{load();render();if(TOK())pull().then(()=>{if(S){lastFid=S.fid;render();billToast()}})}
schedule();
