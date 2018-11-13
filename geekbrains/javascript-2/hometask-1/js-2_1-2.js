// Переменные классов по БЭМ
var itemClassName = 'menu__list-items',
    itemAnchorsClassName = 'menu__list-items-anchors';    

// Базовый класс, от которого всё наследуется
function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
}

// Метод, который будет выводить HTML код
Container.prototype.render = function () {
    return this.htmlCode;
};

// Удаление пункта меню
Container.prototype.removeItem = function (item) {
    document.getElementById(item.id).parentNode.removeChild(item);
};

// Класс - Меню
function Menu(menuId, menuClass, menuItems) {
    // Наследование от Container
    Container.call(this);
    this.id = menuId;
    this.className = menuClass;
    this.items = menuItems;
}

// Полноценное наследование от Container
Menu.prototype = Object.create(Container.prototype);
// Обратно возвращаем стёртый конструктор Menu
Menu.prototype.constructor = Menu;

// Генерация HTML кода всего меню
Menu.prototype.render = function () {
    var resList = '<ul class="' + this.className + '">',
        res = resList,
        resSub = 0; // для реализации вложености тегов (колхоз)
    // Перебираем items
    for (var item in this.items) {
        // Проверяем пункт ли этого меню или нет, instanceof - принадлежит ли классу
        if (this.items[item] instanceof SubMenuItem) {
            if (resSub == 0) { res += resList; resSub = 1; }
            res += this.items[item].render() + '</li>';
        } else if (this.items[item] instanceof MenuItem) {
            if (resSub == 1) {
                res += '</ul></li>'; resSub = 0;
            } else if (item > 0) {
                res += '</li>';
            }
            res += this.items[item].render();
        }
    }
    if (resSub == 1) { res += '</ul>'; resSub = 0; }
    res += '</li></ul>';
    return res;
};

// Вставка HTML кода меню в элемент с конкретным id
Menu.prototype.insert = function (id) {
    document.getElementById(id).innerHTML = menu.render();
};

// Класс - Пункты меню
function MenuItem(itemId, itemHref, itemName) {
    Container.call(this);
    this.id = itemId;
    this.className = itemClassName;
    this.href = itemHref;
    this.hrefClassName = itemAnchorsClassName;
    this.name = itemName;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

// Отрисовка пункта меню
MenuItem.prototype.render = function () {
    var menuItemHtml = '<li id="' + this.id
        + '" class="' + this.className
        + '"><a href="' + this.href
        + '" class="' + this.hrefClassName
        + '">' + this.name + '</a>'; // </li> в конце убираем, т.к. возможно вложение
    return menuItemHtml;
};

// Подменю
function SubMenuItem(itemId, itemHref, itemName) {
    MenuItem.call(this);
    this.id = itemId;
    this.className = itemClassName;
    this.href = itemHref;
    this.hrefClassName = itemAnchorsClassName;
    this.name = itemName;
}

SubMenuItem.prototype = Object.create(MenuItem.prototype);
SubMenuItem.prototype.constructor = SubMenuItem;

// Наполнение меню
var menu = new Menu('menu__list-id', 'menu__list', [
    new MenuItem('search', '#', 'Search'),
    new SubMenuItem('google', '#', 'Google'),
    new SubMenuItem('yandex', '#', 'Yandex'),
    new SubMenuItem('mailru', '#', 'Mail.ru'),
    new SubMenuItem('rambler', '#', 'Rambler'),
    new SubMenuItem('yahooo', '#', 'Yahoo'),
    new MenuItem('social', '#', 'Social'),
    new SubMenuItem('facebook', '#', 'FaceBook'),
    new SubMenuItem('twitter', '#', 'Twitter'),
    new SubMenuItem('vk', '#', 'VK'),
    new MenuItem('vesti24', '#', 'Vesti24'),
    new MenuItem('geekbrains', '#', 'GeekBrains'),
    new MenuItem('youtube', '#', 'YouTube'),
])

// Вставка меню после загрузки <body>
var body = document.querySelector('body');
body.onload = menu.insert('menu-id');

// Обработка по клику
body.onclick = function (e) {
    var event = e.target;
    // клик по ссылке меню (имитация)
    if (event.className == itemAnchorsClassName) {
        event.parentNode.click();
    }
    // клик по пункту меню
    if (event.className == itemClassName) {
        menu.removeItem(event);
    }
};