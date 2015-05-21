
## Десктопные приложения 
## на веб-технологиях


**by [@nedudi](http://twitter.com/nedudi) [@html5by](http://twitter.com/html5by)**

![](http://localhost:2233/shower/cover.png  =800x) {cover}

---

![](http://localhost:2233/shower/logo-xbsoftware.png  =280x) {center}

<br>
![](http://localhost:2233/shower/logo-webix.png  =280x) {center next}

<br>
![](http://localhost:2233/shower/html5by.png  =240x) {center next}

---

## Почему браузера может быть мало?

 - Я хочу, чтобы веб-приложение имело доступ к файловой системе, системным процессам, буферу обмена, сочетаниям клавиш и др. {next}
 - Работало в фоне, могло запускаться при старте системы и офлайн. {next}
 - Не спрашивало доступ к камере и микрофону. {next}
 - Я хочу использовать в приложении Web Gl, Web Audio, Web RTC и другие ништячки и быть уверенным, что все работает одинаково и везде. {next}
  - Могло создавать системные меню, окна, иконки в трее, управлять ими. {next}

---

 ## Почему браузера может быть мало?

 - Делать скриншоты. {next}
 - Пользоваться нотифиацией. {next}
 - Делать кроссдоменные запросы, менять UserAgent, загружать Google во фрейме {next}
 - Полноценный полноэкранный режим (kiosk-mode) {next}
 - Распространять и рекламировать приложение через магазины приложений. {next}
 - И просто, но важно... Запускалось нажатием на иконку! {next}

---

## Возможно ли все это<br>в десктопных приложениях,<br>написанных используя<br>веб-технологии?  {cover center}

---

![](http://localhost:2233/shower/awesome.gif =1280x) {cover}

---

## Есть какие-то решения ...

  - [Adobe Flash](http://www.adobe.com/products/flash.html)
  - [Chrome apps](https://www.google.com/chrome/webstore/apps-games.html)
  - [Tide SDK (ex. Titanium Desktop)](http://www.tidesdk.org)
  - [App.js](http://appjs.com)
  - [Brackets Shell](https://github.com/adobe/brackets-shell)
  - [Tint](https://www.trueinteractions.com/tint2/docs)
  - И еще ... 

---

![](http://localhost:2233/shower/yaw.gif =1050x) {cover}

----

## Есть<br>достойные<br>решения! {shout grow}

---

![](http://localhost:2233/shower/nwjs-logo-text.svg =300x) {center}

<div class="center">
 <a href="http://nwjs.io">ссылка на сайт</a>
</div>

---

<div style="height:120px"></div>

![](http://localhost:2233/shower/electron-logo.svg =800x) {center}


<div class="center">
 <a href="http://electron.atom.io/">ссылка на сайт</a>
</div>

---

![](http://localhost:2233/shower/stars.jpg =1024x) {cover}

----

![](http://localhost:2233/shower/nwjs-connect-web-api-and-native-api.svg =660x) {cover}

---

## От node-webkit <br> к nw.js {shout grow}

---

## [@ Roger Wang](https://twitter.com/wwr) {center}
![](http://localhost:2233/shower/roger-wang.jpg =300x) {center}
<br>
 2011 - Начало проекта Node-webkit {center}

---

## Node? WebKit?
 
1. В апреле 2013-го Chromium, а вместе с ним и проект node-webkit <br> [переехал  на новый движок Blink](http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html)<br>(форк Webkit-а) {next}
2. С января 2015-го проект <br>[начал использовать io.js](https://groups.google.com/forum/#!msg/nwjs-general/V1FhvfaFIzQ/720xKVd0jNkJ)<br>вместо node.js.  {next}

---

![](http://localhost:2233/shower/crossed-node-webkit.svg =800x) {place center}

---

![](http://localhost:2233/shower/nwjs-logo-text.svg =400x) {cover}

---

![](http://localhost:2233/shower/intel-gnor-logos.svg =800x) {cover}

---

## Основная идея {shout grow}

----

## Десктопные приложения {center}
![](http://localhost:2233/shower/crossplatform-app.png =800x) {center}

---

![](http://localhost:2233/shower/iojs-and-chromium-logo.png =800x) {cover}

---

## Почему V8 называется V8?{center}

![](http://localhost:2233/shower/v8.gif =500x) {center next}

---

![](http://localhost:2233/shower/arionette1.jpg =1050x) {cover}

---

## 1902 {shout  grow white shadow}
![](http://localhost:2233/shower/arionette2.jpg =1050x) {cover}

---

## 2015 {shout  grow white shadow}
![](http://localhost:2233/shower/camaro.jpeg =1050x) {cover}

---

![](http://localhost:2233/shower/iojs-and-chromium-logo.png =800x) {cover}

---

## Единый контекст {center}

![](http://localhost:2233/shower/iojs-and-chromium-logo.png =200x) {center}

```js
    var fs = require('fs');
    fs.watchFile('access.log', function(a){
      document.getElementById('log').innerHTML =
      fs.readFileSync('access.log', {encoding:'utf8'});
    });
```

---

## Как они это сделали? {center}

![](http://localhost:2233/shower/alive.gif =500x) {center}

---

## Как они это сделали? {center}
<br>
1. Единый event loop
2. Единый контекст

<br>

[Здесь можно почитать подрбнее](https://github.com/nwjs/nw.js/wiki/How-node.js-is-integrated-with-chromium) {center}

---

## Начинаем погружение! {shout grow}

---

## [nwjs.io](http://nwjs.io) {shout}

---

![](http://localhost:2233/shower/project-structure-nwjs.svg =950x) {cover}

---

## package.json
```js
"name": "dummydemo",
"version": "0.0.1",
"main": "index.html",
"window": {"width": 400,"height": 400},
"dependencies": {
  "moment": "2.10.2",
  "handlebars": "^2.0.0"
}
```

---

## index.html
```html
<div class="hello">
  Привет, NW.JS!
</div>
```
... добавим немного CSS и запустим 

<div style="background:black; color:white; padding:20px">
    $ nw app
</div>

---

![](http://localhost:2233/shower/nwjs-window-frame-toolbar.png =500x) {place center}

---
## package.json {center}

```js
    ...
    "window": {
      "toolbar": false
    }
    ...
````

---

![](http://localhost:2233/shower/nwjs-window-frame.png =540x) {cover}

---

## package.json {center}


    
```js
    ...
    "window": {
      "toolbar": false,
      "frame": false
    }
    ...
````

---

![](http://localhost:2233/shower/nwjs-window.png =560x) {cover}

----

## package.json {center}


    
```js
    ...
    "window": {
      "toolbar": false,
      "frame": false,
      "transparent": true
    }
    ...
````

---

![](http://localhost:2233/shower/nwjs-window-transparent.png =560x) {cover}

---

## package.json {center}


    
```js
    ...
    "window": {
       "kiosk": true
    }
    ...
````

---

![](http://localhost:2233/shower/nwjs-macbook-kiosk.png =760x) {center}

---

## package.json {center}


    
```js
    ...
    "window": {
       "show": false
    }
    ...
````

---



---
## Элементы интерфейса ОС {center}

```js
            var gui = require('nw.gui');
            gui.Window.get(); //окно
            gui.Shell(); //оболочка
            gui.Tray // трей
            gui.Menu // менюшки
            gui.Clipboard // буффер обмена
            gui.Shortcut // сочетания клавиш
            // ...и другие элементы
```

---

## Контекстные меню {shout grow}

---

```js
var menu = new gui.Menu();
// Добавить пунктов меню или разделителей
menu.append(new gui.MenuItem({label: 'Ничего'}));
menu.append(new gui.MenuItem({type: 'separator'}));
// .. и повесить на них обработчики
menu.append(new gui.MenuItem({
  label: 'Сказать "Привет!"',
  click: function() {alert('Привет!');}
}));
```

---

![](http://localhost:2233/shower/nwjs-window-cmenu.png =560x) {place center}

---

## Оконные меню {shout grow}

---

```js
var menubar = new gui.Menu({ type: 'menubar'});
// Подменю
menubar.append(new gui.MenuItem({ label: 'Главное'}));
menubar.append(new gui.MenuItem({ label: 'О нас',   
  submenu: menu
}));
//Получить текущее окно и подключить к нему верхнее меню
gui.Window.get().menu = menubar;
```

---

![](http://localhost:2233/shower/nwjs-window-menubar.png =740x) {place top center}

---

## Трей (менюбар)  {shout grow}

---

```js
var tray = new gui.Tray({ 
  title: 'Привет', 
  icon: 'icon.png' 
});

var menu = new gui.Menu();
// .. наполняем меню пунктами
tray.menu = menu;
```

---

![](http://localhost:2233/shower/nwjs-window-tray.png =760x) {place top center}

---

## Сочетания<br>клавиш  {shout grow}

---

```js

var shortcut = new gui.Shortcut({
  key : "Ctrl+Shift+A",
  active : function() {...},
  failed : function(msg) {...}
});
// регистрируем сочетание клавиш в системе
gui.App.registerGlobalHotKey(shortcut);
```

---

## Буффер<br>обмена  {shout grow}

---

```js
var clipboard = gui.Clipboard.get();
// получить значение
var text = clipboard.get('text');
// установить значение
clipboard.set('Привет', 'text');
// очистить буффер
clipboard.clear();
```

---

## Хранение <br>данных  {shout grow}

---

## Локальные ресурсы приложения {center}
## [App.dataPath](https://github.com/nwjs/nw.js/wiki/App) {center}

 - **Windows**    `%LOCALAPPDATA%/<name>`  
 - **Linux**  `~/.config/<name>`  
 - **OSX**  `~/Library/Application Support/<name>`  

где `<name>` - это поле, заданное в package.json {center}


---

## Базы данных и хранилища {center}

- Web SQL Database
- IndexedDB
- Web Storage
- Application Cache

---

## Отладка {shout grow}

---

![](http://localhost:2233/shower/nwjs-window-debugger.png =600x) {center}

<div style="background:black; color:white; padding:20px">
$ nw --remote-debugging-port=1234 app
</div>
<br>

## http://localhost:1234 {center}

---

## [Livereload](https://github.com/nwjs/nw.js/wiki/Livereload-nw.js-on-changes)   {shout grow}

----

## [Сборка](https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps) {shout grow}

---

![](http://localhost:2233/shower/how-to-build-nwjs.gif =900x) {cover}

---

![](http://localhost:2233/shower/no.gif =1050x) {cover}

---

## [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder) {center}

<div style="background:black; color:white; padding:20px">
    $   npm i -g node-webkit-builder
</div>
<br>
<div style="background:black; color:white; padding:20px">
    $  nwbuild ./
</div>
<br>
<div style="background:black; color:white; padding:20px">
    $  nwbuild ./ -p win32,win64,osx32,osx64,linux32,linux64
</div>

---

![](http://localhost:2233/shower/osx-nwjs.png  =1024x) {place center}

---

![](http://localhost:2233/shower/windows-nwjs.png =1024x) {place center}

---

![](http://localhost:2233/shower/ubuntu-nwjs.png  =1024x) {place center}

---

![](http://localhost:2233/shower/vs.gif  =1024x) {cover}
## nw.js vs Electron {shout white shadow}

---

## Отличия {center}

1) Точка входа (html vs js)
2) Разный принцип построения билдов.
3) Измененный vs оригинальный Хромиум
4) Контекст

[Подробнее с точки зрения разработчиков Electron](https://github.com/atom/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md)  {center}


---

## Хорошие примеры {shout grow}

---

![](http://localhost:2233/shower/popcorntime.gif =1000x) {cover}

---

![](http://localhost:2233/shower/mong-management-studio.png =1000x) {cover}

---

![](http://localhost:2233/shower/lighttable.png =1000x) {cover}

---

![](http://localhost:2233/shower/spreaker.png =1000x) {cover}

---

![](http://localhost:2233/shower/sizechecker.png =600x) {cover}

---

![](http://localhost:2233/shower/vokabbuilber.jpg =1000x) {cover}

---

![](http://localhost:2233/shower/sdalzamig.png =750x) {cover}

---

## ... и еще очень много приложений {center}
## [здесь](https://github.com/nwjs/nw.js/wiki/List-of-apps-and-companies-using-nw.js) {shout}

---

## Выводы {shout grow}

---

## Почему  nw.js и веб-технологии </br> для десктопных приложений? {center}

1) Легкая кроссплатформенность (Mac, Linux, Windows, ...). {next}
2) Работает достаточно быстро. {next}
3) Нарастающий тренд ;) {next}
4) Просто писать прилодения для себя {next}
5) Дешево во всех отношениях! {next}


---

## Вопросы? {white shadow}

![](http://localhost:2233/shower/questions.gif =1150x) {cover}

---
## Блог  [html5.by](http://html5.by) 
## Твиттер  [@html5by](http://twitter.com/html5by) и [@nedudi](http://twitter.com/nedudi) 
## Статья [html5.by/blog/nwjs](http://html5.by/blog/nwjs) 
## Слайды [html5.by/slides/nwjs](http://html5.by/slides/nwjs)  
## Группа ВК [vk.com/html5by](http://vk.com/html5by) 
## Группа FB [facebook.com/html5by](http://facebook.com/html5by) 

----

![](http://localhost:2233/shower/nobody-perfect.gif  =760x) {place center}