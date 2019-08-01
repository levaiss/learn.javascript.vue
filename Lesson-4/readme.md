Задание, программа минимум:
Реализовать полное взаимодействие по REST API (получение списка пользователей, создание пользователя, редактирование и удаление пользователя)
Доработать компонент формы для отображения всех свойств фейковых данных разными типами полей (список полей, не нужно универсального определения типа поля)
Доработать компонент-форму пользователя для работы через v-model

+Реализовать компонент пагинации для таблицы (группа кнопок с возможностью перейти на выбранный номер страницы) + работающий через v-model
+Реализовать компонент выбора количества строк в таблице (select с несколькими вариантами количества строк на странице) + работающий через v-model
Создать компонент «умной» таблицы, внутри которой будут компоненты управления  (пагинация, количество элементов на строку и итоговый список) (https://www.dropbox.com/s/ui31mhko2x7rcla/Smart%20table%20example.png?dl=0)
+Реализовать асинхронную подгрузку компонентов-страниц и переиспользуемых компонентов

Задание, если хочется большего:
Добавить на странице редактирования пользователя ссылки перехода к следующему/предыдущему пользователю (ID больше/меньше на 1) и доработать обновление данных
+Добавить в компонент пагинации кнопки перехода на следующую/предыдущую страницы
Добавить в компонент таблицы компонент поиска по фамилии
Добавить в компонент формы реализованную отдельным компонентом загрузки аватарки на сервис IMGUR (не плагином, а через обычное поле и логику) + работающий через v-model
Dropbox
Smart table example.png
Shared with Dropbox
Материалы для самостоятельного изучения:
Документация Vue-router (https://router.vuejs.org/ru/)
Опции конструктора Vue-router (https://router.vuejs.org/ru/api/#опции-конструктора-router)
Добавляемые Vue-router компоненты (https://router.vuejs.org/ru/api/#router-link и https://router.vuejs.org/ru/api/#router-view)
Интеграция vue-router в компоненты (https://router.vuejs.org/ru/api/#интеграция-в-компоненты)
Динамические пути (https://router.vuejs.org/ru/guide/essentials/dynamic-matching.html)
Программная навигация (https://router.vuejs.org/ru/guide/essentials/navigation.html)
Навигационные хуки (https://router.vuejs.org/ru/guide/advanced/navigation-guards.html)
Метаданные маршрутов (https://router.vuejs.org/ru/guide/advanced/meta.html)
Возможности по разделению кода в Webpack (https://webpack.js.org/guides/code-splitting/)
Динамические и асинхронные компоненты (https://ru.vuejs.org/v2/guide/components-dynamic-async.html)
Ленивая загрузка маршрутов (https://router.vuejs.org/ru/guide/advanced/lazy-loading.html)
Компоненты. Настройка v-model (https://ru.vuejs.org/v2/guide/components-custom-events.html#Настройка-v-model-у-компонента)
Атрибут ref (https://ru.vuejs.org/v2/api/#ref)

Что почитать ещё:
Три способа разделения кода в приложении на Vue (https://medium.com/js-dojo/3-code-splitting-patterns-for-vuejs-and-webpack-b8fff1ea0ba4)
Создание прозрачных компонентов-обёрток (https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html)
Компоненты. Обработка крайних случаев (https://ru.vuejs.org/v2/guide/components-edge-cases.html)
Доступ к экземплярам дочерних компонентов & элементов (https://ru.vuejs.org/v2/guide/components-edge-cases.html#Доступ-к-экземплярам-дочерних-компонентов-amp-элементов)
JWT (https://jwt.io/)
Ссылки по теме:
https://github.com/axios/axios
https://github.com/github/fetch
https://apidocs.imgur.com/#authorization-and-oauth
https://github.com/rtivital/proschet
Пример компонентов: https://github.com/alexjoverm/v-lazy-image
Пример развернутого проекта: https://github.com/zmts/vuejs-boilerplate

Репозиторий с кодом сделанным на занятии:
Пример с развёрнутым проектом из шаблона: https://github.com/Alex-Sokolov/vue-course-app/tree/02-vue-cli-template