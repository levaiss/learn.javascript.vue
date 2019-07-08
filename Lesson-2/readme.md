Задание, программа минимум:
Создать репозиторий (GitHub, BitBucket, etc) для проекта
Подключить CSS от Bootstrap (по желанию, просто для стилизации)
Создать файлы под страницы списка пользователей и редактирования пользователя, в них же создавать корневой компонент
Отслеживать момент «загрузки» данных и выводить об этом сообщение в консоль
На странице списка пользователей «загружать» и хранить массив, использовать компонент для отображения списка, который выводит их в виде таблицы (в иерархии компонентов внутри Root → UserList)
На странице редактирования пользователя «загружать» и пока что просто хранить объект с данными пользователя, использовать компонент для отображения «формы» с данными пользователя для редактирования свойств (в иерархии компонентов внутри Root → UserForm)

Задание, если захочется большего:
Сгенерировать JSON-файл с фейковыми данными пользователей
Установить json-server и настроить на выдачу этого JSON-файла
Реализовать загрузку списка пользователей
Реализовать загрузку пользователя на странице редактирования
Переход на страницу редактирования пользователя с ID-пользователя в query и загрузка данных нужного пользователя (можно с помощью плагина vue-async-computed)
Реализовать на одной странице динамическим переключением компонентов смену страниц со списком пользователей и добавления пользователя, реализовать переходы по ссылкам из меню

Материалы для самостоятельного изучения:
Вычисляемые свойства и методы наблюдатели (https://ru.vuejs.org/v2/guide/computed.html)
Варианты записи watch (https://ru.vuejs.org/v2/api/#watch)
Динамическое добавление watch (https://ru.vuejs.org/v2/api/#vm-watch)
Тонкости отслеживания изменений в массивах (https://ru.vuejs.org/v2/guide/list.html#Отслеживание-изменений-в-массивах)
Тонкости отслеживания изменений при изменениях объектов (https://ru.vuejs.org/v2/guide/list.html#Предостережения-об-изменениях-объектов)
События и модификаторы событий (https://ru.vuejs.org/v2/guide/events.html)
Перечень способов отслеживания событий, варианты записи (https://ru.vuejs.org/v2/api/#v-on)
Как создавать собственные псевдонимы для кодов клавиш (https://ru.vuejs.org/v2/api/#keyCodes)
Работа с формами, доступные модификаторы (https://ru.vuejs.org/v2/guide/forms.html)
Основы компонентов (https://ru.vuejs.org/v2/guide/components.html)
Регистрация компонентов (https://ru.vuejs.org/v2/guide/components-registration.html)
Входные параметры компонентов (https://ru.vuejs.org/v2/guide/components-props.html)
Пользовательские события (https://ru.vuejs.org/v2/guide/components-custom-events.html)

Ссылки по теме:
Данные для запроса можно взять тут (http://jsonplaceholder.typicode.com/users)
Генератор фейковых данных (https://next.json-generator.com/)
Шаблон генерации пользователей (https://pastebin.com/96BQ10wF)
JSON-server (https://github.com/typicode/json-server)
Используем axios для доступа к API (https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

Что почитать ещё:
Плагин для вычисляемых свойств с асинхронной логикой (https://github.com/foxbenjaminfox/vue-async-computed)
Плагин для альтернативной записи типов входных параметров (https://github.com/dwightjack/vue-types)
Примеры решения часто встречающихся проблем (https://medium.com/@stijlbreuk/six-random-issues-and-their-solutions-in-vuejs-b16d470a6462)
Подборка допускаемых ошибок (https://itnext.io/how-not-to-vue-18f16fe620b5)
Вещи, которые не работают во Vue (https://winnercrespo.com/things-that-wont-work-using-vue/)

Код реализованный на занятии:
Пример с computed/watch: https://plnkr.co/edit/hzb6SX415L0XRN9jqxso?p=preview
Пример с событиями и формами: https://plnkr.co/edit/6DjaLHAy0vuFIcfw6aXI?p=preview
Пример с компонентом: https://plnkr.co/edit/pgVKotq3BJz8FE3EuLGx?p=preview