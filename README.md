# Поиск съёмного жилья в Москве
Алексеева Ирина, 162 группа
https://bizzzarre.github.io/

# Актуальность
Мне, как студентке, к тому же интроверту, надоело жить в шумном общежитии, где царит дух коммуналки(зачёркнуто) коммунизма. Хочется найти свой маленький съёмный угол в громадной и беспощадной Москве. При этом не хочется тратить на дорогу до вуза 2 часа, живя в Бутово (да простят меня жители этого славного района) или вообще ближайшем Подмосковье, но смотреть всё же придётся по финансам. Надеюсь, проект поможет мне найти "идеальную квартиру", пусть и съёмную.

Также в нашем вузе функционирует риэлторский центр, который уже не первый год готов помочь в нахождении соседей. Раз в год они проводят акцию для студентов старших курсов. Она состоит в том, что среди поданных заявок выбираются первые n (цифры могут разниться, от 500 до 800), и подходящим по критериям студентам частично спонсируют переезд в квартиру. Однако квартиры студентам предлагается искать самостоятельно. Возможно, мой проект сможет помочь студентам моего любимого вуза быстрее и качественнее находить съёмное жильё.

Для начала я решила рассмотреть квартиры в относительной близости к корпусу факультета компьютерных наук.

# Предполагаемый вид продукта
Карта района с приблизительными ценами на съёмные квартиры

# Вопросы
1. Какие критерии существуют при выборе квартиры? (для меня это цена до 40к, близость к корпусу, Интернет, относительно свежий ремонт, сделанный хотя бы после развала СССР)
2. Какая конкретно близость? (для фильтра я выбрала следующие станции метро: АЭРОПОРТ(самый приоритетный вариант), Динамо, Сокол, Войковская)
3. Сколько каждый критерий добавляет к арендной плате?
4. Какие квартиры есть в радиусе получаса (езды, ходьбы и др.) от корпуса ФКН?
5. Какая средняя цена квартир в этой окрестности?
6. Как цена зависит от станции метро? 
7. Как цена зависит от близости к станции?
8. Во сколько раз двухкомнатные квартиры дороже однокомнатных в том же районе?
9. Как зависит стоимость от площади?
# Выгрузка данных
Для сбора данных я выбрала 2 самых популярных (и открытых для получения информации через "средства разработчика" в браузере) Avito.ru и Domofond.ru
1. Avito
Непосредственно сам процесс сбора и небольшой корректировки данных можно видеть в файле data_collecting.ipynb. Текстовая таблица с данными представлена в файле Avito.txt
2. Domofond
Непосредственно сам процесс сбора и небольшой корректировки данных можно видеть также в файле data_collecting.ipynb. Текстовая таблица с данными представлена в файле Domofond.txt
# Создание html-страницы в github pages
Ссылка на страницу: [Table of data](https://bizzzarre.github.io/DataJournalism/table_of_data.html)
# Ответы на вопросы 
Ответы на вопросы 6-9 содержатся в файле data_collecting.ipynb
# Источники
1. [https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=1"](https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=1")
2. [https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=2"](https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=2")
3. [https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=3"](https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=3")
4. [https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=4"](https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=4")
5. [https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=5"](https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=5")
6. [https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=6"](https://www.domofond.ru/arenda-nedvizhimosti/search?MetroIds=21%2C44%2C124%2C39&PropertyTypeDescription=kvartiry&PriceTo=40000&RentalRate=Month&Rooms=One%2CTwo&Page=7")
7. [https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?p=1&pmax=40000&pmin=0&metro=7-25-30-110&f=550_5702-5703-5704](https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?p=1&pmax=40000&pmin=0&metro=7-25-30-110&f=550_5702-5703-5704)
8. [https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?p=2&pmax=40000&pmin=0&metro=7-25-30-110&f=550_5702-5703-5704](https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?p=2&pmax=40000&pmin=0&metro=7-25-30-110&f=550_5702-5703-5704)
9. [https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?p=3&pmax=40000&pmin=0&metro=7-25-30-110&f=550_5702-5703-5704](https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?p=3&pmax=40000&pmin=0&metro=7-25-30-110&f=550_5702-5703-5704)
