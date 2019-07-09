Задание, программа минимум
Установить Node.js (и по желанию Yarn; все можно делать и без него через NPM)
Создать проект с помощью vue-cli 3 (из необходимого: Vue-router, Babel, ESLint, Prettier)
Сгенерировать список пользователей через JSON-generator (пару десятков хватит)
Установить пакет json-server для REST API
Перенести HTML-страницы и компоненты в них в файлы .vue
Реализовать переходы между страницами через vue-router
Реализовать выделение активного пункта в панели меню
Реализовать загрузку списка пользователей и пользователя на редактирование по REST API
Задание, если хочется большего:
Реализовать полное взаимодействие по REST API (получение списка пользователей, создание пользователя, редактирование и удаление пользователя)
Добавить лоадер NProgress при переходе между страницами
Реализовать отправку с каждым AJAX-запросом заголовка Authorization с каким-то значением (которое в реальном проекте будет токеном)
Реализовать проверку перед переходом на страницу списка пользователей, только если в LocalStorage хранится определенный ключ (псевдо-авторизация)
Материалы для самостоятельного изучения:
Документация Vue-cli (https://cli.vuejs.org/) (пока нет русской, в процессе перевода)
Создание проекта через Vue-cli (https://cli.vuejs.org/guide/creating-a-project.html)
Запуск проекта (https://cli.vuejs.org/guide/cli-service.html)
Как расширять конфигурацию Webpack (https://cli.vuejs.org/guide/webpack.html)
Документация Vue-loader (https://vue-loader.vuejs.org/ru/)
Как обрабатываются вложенные URL (https://vue-loader.vuejs.org/ru/guide/asset-url.html)
Использование пре-процессоров (https://vue-loader.vuejs.org/ru/guide/pre-processors.html)
Локальный CSS (https://vue-loader.vuejs.org/ru/guide/scoped-css.html)
CSS модули (https://vue-loader.vuejs.org/ru/guide/css-modules.html)
Горячая перезагрузка модулей (https://vue-loader.vuejs.org/ru/guide/hot-reload.html)
Документация Vue-router (https://router.vuejs.org/ru/)
Опции конструктора Vue-router (https://router.vuejs.org/ru/api/#опции-конструктора-router)
Добавляемые Vue-router компоненты (https://router.vuejs.org/ru/api/#router-link и https://router.vuejs.org/ru/api/#router-view)
Интеграция vue-router в компоненты (https://router.vuejs.org/ru/api/#интеграция-в-компоненты)
Динамические пути (https://router.vuejs.org/ru/guide/essentials/dynamic-matching.html)
Программная навигация (https://router.vuejs.org/ru/guide/essentials/navigation.html)
Навигационные хуки (https://router.vuejs.org/ru/guide/advanced/navigation-guards.html)
Метаданные маршрутов (https://router.vuejs.org/ru/guide/advanced/meta.html)
Однофайловые компоненты (https://ru.vuejs.org/v2/guide/single-file-components.html)
Модули JS (https://learn.javascript.ru/modules)
Руководство по Node.js, часть 4: npm, файлы package.json и package-lock.json (https://habr.com/company/ruvds/blog/423703/)
Что почитать ещё:
Как структурировать проект на Vue (https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb)
Архитектура Vue которая работала для меня в маленьких и больших приложениях (https://medium.com/@ederng/the-vue-architecture-that-worked-for-me-in-small-and-large-apps-9b253cf92951)
Настройка ESLint + Prettier в новом Vue-cli (https://medium.com/@doppelmutzi/kick-starting-a-sophisticated-eslint-and-prettier-workflow-with-vue-cli-3-in-a-few-minutes-76bf10370636)
Пример другого сборщика. Vue + Parcel (https://alligator.io/vuejs/vue-parceljs/)
Пример еще одного шаблона проекта (https://github.com/chrisvfritz/vue-enterprise-boilerplate)
Как реализовать собственный роутер (https://vueschool.io/articles/series/creating-your-own-router/)
Вариация определения роутов (https://github.com/raniesantos/vue-routisan)
Доступ по ролям в роуты (https://github.com/anthonygore/vue-router-user-roles)
Vue Authentication And Route Handling Using Vue-router (https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router)
Structuring a Vue project — Authentication (https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16)
Примеры реализации лоадеров (https://scotch.io/tutorials/add-loading-indicators-to-your-vuejs-application)
Настройка Vue и Webpack вручную, в трех частях:
Первая часть (https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a)
Вторая часть (https://itnext.io/vue-js-and-webpack-4-from-scratch-part-2-5038cc9deffb)
Третья часть (https://itnext.io/vue-js-and-webpack-4-from-scratch-part-3-3f68d2a3c127)
Пять простых шагов для понимания JSON Web Tokens (JWT) (https://habr.com/post/340146/)
Ссылки по теме:
Webpack (https://webpack.js.org/)
Генератор фейковых данных (https://next.json-generator.com/)
Шаблон генерации пользователей (https://pastebin.com/96BQ10wF)
Vue-cli (https://github.com/vuejs/vue-cli)
JSON-server (https://github.com/typicode/json-server)
Репозиторий с кодом сделанным на занятии:
Компоненты в HTML-файлах: https://github.com/Alex-Sokolov/vue-course-app/tree/01-before-webpack
Компоненты во vue-файлах: https://github.com/Alex-Sokolov/vue-course-app/tree/02-vue-cli-template