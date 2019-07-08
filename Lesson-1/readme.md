Задание, программа минимум:
Создать HTML-страничку/в онлайн-редакторе и подключить Vue с CDN
Создать корневой экземпляр и убедиться что данные из него выводятся на странице
В данных реализовать хранение списка пользователей (пять хватит; у каждого пользователя предусмотреть хранение имени, фамилии, отчества и ссылки на картинку аватарки)
Показать на странице список пользователей в виде таблицы
Для пользователей без аватарки выводить сообщение/показывать аватарку по умолчанию
Добавить заголовок к таблице с указанием общего количества пользователей
Добавить кнопку для скрытия/отображения всего списка пользователей

Задание, если захочется большего:
Подсчитывать количество пользователей не через метод, а через вычисляемое свойство
Создать Vue-фильтр чтобы выводить в таблице данные пользователя в верхнем регистре
Использовать директиву v-copy для кнопок копирования ФИО каждого пользователя
Использовать директиву v-tooltip, чтобы выводить справку для кнопки показать/скрыть список

Материалы для самостоятельного изучения:
Установка Vue (https://ru.vuejs.org/v2/guide/installation.html)
Список директив Vue (https://ru.vuejs.org/v2/api/#Директивы)
Экземпляр Vue (https://ru.vuejs.org/v2/guide/instance.html)
Синтаксис шаблонов (https://ru.vuejs.org/v2/guide/syntax.html)
Работа с классами и стилями (https://ru.vuejs.org/v2/guide/class-and-style.html)
Условный рендеринг (https://ru.vuejs.org/v2/guide/conditional.html)
Рендеринг списков (https://ru.vuejs.org/v2/guide/list.html)
Подробнее про data, локальное состояние компонента (https://ru.vuejs.org/v2/api/#data)

Ссылки по теме:
https://plnkr.co/edit/
Панель инструментов DevTools для Vue (https://github.com/vuejs/vue-devtools)
Возможность изменить разделители при конфликтах (https://ru.vuejs.org/v2/api/#delimiters)
Подробнее о системе реактивности (https://ru.vuejs.org/v2/guide/reactivity.html)
Геттеры и сеттеры свойств (http://learn.javascript.ru/descriptors-getters-setters)
Как создавать собственные директивы (https://ru.vuejs.org/v2/guide/custom-directive.html)
Пример директивы: https://github.com/Akryum/v-tooltip
Пример директивы: https://github.com/egoist/v-copy
Пример директивы: https://github.com/ndelvalle/v-click-outside
Пример директивы: https://github.com/probil/v-mask
Фильтры (https://ru.vuejs.org/v2/guide/filters.html)
Примеры создания фильтров (https://pineco.de/getting-started-with-vue-filters/)
Функция render (https://medium.com/devschacht/функция-render-что-такое-аргумент-h-bfc357a82160)

Что почитать ещё:
Интервью автора фреймворка Vue (https://medium.com/@vvladislavv/vue-js-в-2018-интервью-автора-фреймворка-vue-js-эван-ю-33d8a0b71a2)
Как написать свой виртуальный DOM (https://medium.com/devschacht/how-to-write-your-own-virtual-dom-c166b56cf01f)
Как создать реактивный фреймворк на JavaScript (https://medium.com/@monochromer/как-создать-реактивный-фреймворк-на-javascript-cfa34c63fd52)
Порядок вызова родительских и дочерних хуков жизненного цикла (https://medium.com/@brockreece/vue-parent-and-child-lifecycle-hooks-5d6236bd561f)
Вещи, которые не работают во Vue так как ожидаете (https://winnercrespo.com/things-that-wont-work-using-vue/)
Реактивность в JavaScript: простой и понятный пример (https://habr.com/company/ruvds/blog/418633/)
Какие методы мутируют массив, а какие нет (https://doesitmutate.xyz/)
Наглядное представление работы виртуального DOM (https://illustrated.dev/react-vdom)
Как именовать переменные (https://jenya.me/how-to-name-variables/)

Код реализованный на занятии:
Пример с вариантами подключения: https://plnkr.co/edit/N3NPuwZAlmuSufOxDMMc
Пример с использованием биндингов: https://plnkr.co/edit/u5Vr8MeF17zZtdRuaabz
Пример с экземпляром Vue и списком хуков: https://plnkr.co/edit/Bx46PmS91rBYenvazMPB
Пример со списком, условиями, классами: https://plnkr.co/edit/swIKTTZdOMTik8ud7I3B