
## Дестопные приложения 
## на веб-технологиях


**by [@nedudi](http://twitter.com/nedudi) [@html5by](http://twitter.com/html5by)**

![](http://localhost:2233/cover.png  =800x) {cover}

---

## Почему браузера может быть мало?

 - Я хочу, что-бы веб-приложение имело доступ к файловой системе, системным процессам, буфферу обмена, сочетаниям клавиш и др. {next}
 - Работало в фоне, могло запускаться при старте системы. {next}
 - Не спрашивало доступ к камере и микрофону. {next}
 - Я хочу использовать в приложении Web Gl, Web Audio, Web RTC и другие ништячки и быть уверенным, что все работает одинаково и везде. {next}
  - Могло создавать системные меню, окна, иконки в трее, управлять ими. {next}

---

 ## Почему браузера может быть мало?

 - Распространять и рекламировать приложение через магазины приложений. {next}
 - Делать скриншоты. {next}
 - Пользоваться нотифиацией. {next}
 - Делать кроссдоменные запросы, менять UserAgent {next}
 - Полноценный полноэкранный режим (kiosk-mode) {next}
 - И просто, но важно... Запускалось нажатием на иконку! {next}

---

## Почему веб-технологии <br>для десктопных приложений?

1) Легкая кроссплатформенность (Mac, Linux, Windows, ...). {next}
2) Работает достаточно быстро. {next}
3) Нарастающий тренд ;) {next}
4) Дешево во всех отношениях! {next}


---

## Есть какие-то решения ...

  - [Chrome apps](https://www.google.com/chrome/webstore/apps-games.html)
  - [Tide SDK (ex. Titanium Desktop)](http://www.tidesdk.org)
  - [App.js](http://appjs.com)
  - [Brackets Shell](https://github.com/adobe/brackets-shell)
  - [Tint](https://www.trueinteractions.com/tint2/docs)
  - И еще ... 

---

![](http://localhost:2233/yaw.gif =660x) {cover}

----

## Есть достойные решения!

  - [Electron (Atom Shell)](http://electron.atom.io)
  - [NW.js (Node-WebKit)](http://nwjs.io)

---

![](http://localhost:2233/stars.jpg =1024x) {cover}

----

![](http://localhost:2233/nwjs-connect-web-api-and-native-api.svg =660x) {cover}

---

## От node-webkit <br> к nw.js {shout grow}

---

## [@ Roger Wang](https://twitter.com/wwr) {center}
![](http://localhost:2233/roger-wang.jpg =300x) {center}
<br>
 2011 - Начало проекта Node-webkit {center}

---

## Node? WebKit?

1. В апреле 2013-го Chromium, а вместе с ним и проект node-webkit  [переехал  на новый движок Blink](http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html) (форк Webkit-а) {next}
2. С января 2015-го проект [начал использовать io.js](https://groups.google.com/forum/#!msg/nwjs-general/V1FhvfaFIzQ/720xKVd0jNkJ)  вместо node.js. {next}

![](http://localhost:2233/crossed-node-webkit.svg =800x) {center next}

---

![](http://localhost:2233/nwjs-logo-text.svg =400x) {cover}

---

![](http://localhost:2233/intel-gnor-logos.svg =800x) {cover}

---

## Основная идея {shout grow}

----

## Десктопные приложения {center}
![](http://localhost:2233/crossplatform-app.png =800x) {center}

---

![](http://localhost:2233/iojs-and-chromium-logo.png =800x) {cover}

---
## Почему V8 называется V8{center}

![](http://localhost:2233/v8.gif =500x) {center next}

---

![](http://localhost:2233/arionette1.jpg =1050x) {cover}

---

## 1902 {shout  grow white shadow}
![](http://localhost:2233/arionette2.jpg =1050x) {cover}

---

## 2015 {shout  grow white shadow}
![](http://localhost:2233/camaro.jpeg =1050x) {cover}

---

![](http://localhost:2233/iojs-and-chromium-logo.png =800x) {cover}

---

## Единый контекст {center}

![](http://localhost:2233/iojs-and-chromium-logo.png =200x) {center}

```js
    var fs = require('fs');
    fs.watchFile('access.log', function(a){
      document.getElementById('log').innerHTML =
      fs.readFileSync('access.log', {encoding:'utf8'});
    });
```

---

## Как они это сделали? {center}

![](http://localhost:2233/alive.gif =400x) {center}

[Здесь можно почитать подрбнее](https://github.com/nwjs/nw.js/wiki/How-node.js-is-integrated-with-chromium) {center}

---

## Начинаем погружение {shout grow}

---

## [nwjs.io](http://nwjs.io) {shout}

---

![](http://localhost:2233/project-structure-nwjs.svg =900x) {cover}

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
    nw app
</div>

---

![](http://localhost:2233/nwjs-window-frame-toolbar.png =600x) {place center}

---
```js
"toolbar": false
````
![](http://localhost:2233/nwjs-window-frame.png =560x) {place right}

---
```js
"toolbar": false,
"frame": false
````
![](http://localhost:2233/nwjs-window.png =560x) {place right}


----

```js
"toolbar": false,
"frame": false,
"transparent": true
````
![](http://localhost:2233/nwjs-window-transparent.png =560x) {place right}


---


```js
"kiosk": true
````
![](http://localhost:2233/nwjs-macbook-kiosk.png =660x) {center}


---

```js
"show": false
```

---

## Элементы интерфейса ОС {center}

```js
            var gui = require('nw.gui');
            
            gui.Window.get();
            gui.Shell.openItem('test.txt');
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

![](http://localhost:2233/nwjs-window-cmenu.png =600x) {place center}

---

## Меню окна {shout grow}

---

```js
var menubar = new gui.Menu({ type: 'menubar'});
// Под-меню
menubar.append(new gui.MenuItem({ label: 'Главное'}));
menubar.append(new gui.MenuItem({ label: 'О нас',   
  submenu: menu
}));
//Получит текущее окно и подключить к нему верхнее меню
gui.Window.get().menu = menubar;
```

---

![](http://localhost:2233/nwjs-window-menubar.png =500x) {place center}

---

## Трей  {shout grow}

---

## Хранение <br>данных  {shout grow}
Save persistent data in app

---

## Дебаггинг  {shout grow}

You can use the --remote-debugging-port=port command parameter to specify which port the devtools should listen to. For example, by running nw --remote-debugging-port=9222, you can open http://localhost:9222/ to visit the debugger remotely.

---

## Livereload nw.js on changes  {shout grow}

----

## Сборка {shout grow}

---

## Protect JavaScript source code with v8 snapshot {shout grow}

---

## Express? {shout grow}

---

## Хорошие примеры {shout grow}

---

## Выводы {shout grow}

---

## Вопросы {shout grow}

----




## Almost all GFM syntax

**bold text**  
*italic text*  
==marked text==  
~~crossed text~~  
Subscript: H~2~0  
Superscriipt: E=mc^2^  

...

----

 ## And full power of [Shower](http://shwr.me) {shout}

----

## Growing Shout {shout grow}
  ----

 ## Shrinking Shout {shout shrink}

----

##  ... or any custom css class

hello {red center}

----

 ## Lists {shout grow}
  ---

## Unordered list

- sample
- unnoredered
- list
   - with nested
   - items
- **any** *simple* ***formatting***, [link]('link')
- and 

----

## Ordered list

1. sample
2. oredered
3. list
   1. with 
   2. nested
   3. items
4. and **any** *simple* ***formatting*** or [link]('link')

----

~~this~~

----

## List items can also appear on click

1. sample {next}
2. oredered {next}
3. list {next}
4. surprise! fuck you  fuck you  {next}

------

 ## Images {shout grow}

----

 ## Fullsize {shout white shadow}
 ![](http://www.pageresource.com/wallpapers/wallpaper/bodog-ring-girls.jpg) {cover}

----

 ## ...or inline {center}
 ![](http://33.media.tumblr.com/tumblr_lta5dmff8M1r4ghkoo1_500.gif) {center}

---

## .. or, you can even define width

 ![cat](http://www.online-image-editor.com//styles/2014/images/example_image.png =400x)
 ![cat](http://www.online-image-editor.com//styles/2014/images/example_image.png =250x)
 ![cat](http://www.online-image-editor.com//styles/2014/images/example_image.png =150x)

----

## Columns

Echo Park 8-bit sustainable umami deep v Kickstarter. DIY cliche typewriter brunch, Odd Future sriracha pickled aesthetic. Farm-to-table bespoke fingerstache, kale chips umami brunch American Apparel letterpress. Whatever authentic disrupt, you probably haven't heard of them direct trade mlkshk Etsy. Gluten-free roof party plaid American Apparel four loko quinoa. Echo Park 8-bit sustainable umami deep v Kickstarter. {double}

---

## Tables
 
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:--------------------:| -------:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered              |   $12  |
| zebra stripes | are neat           |    $1   |

-----

## hello

sdlkfhgkjshdflkg

1. asakjshdfijs{next}
2. asffgsfdgsdfg{next}
3. sdfgsdfgsdfg{next}
 
-------

## Quotes

>Flannel bicycle rights locavore selfies skateboard. Authentic fanny pack paleo four loko bespoke. Artisan tattooed chia XOXO ennui, lomo disrupt 8-bit art party Tumblr scenester.

>Post-ironic fashion axe flexitarian, Tonx narwhal messenger bag Tumblr. Portland gentrify deep v kale chips literally.

**Yours Truly**

---

## Code with marks

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits;

    function myFunction() {
        fruits.unshift("Lemon");
        document.getElementById("demo").innerHTML = fruits;
    }


---

## Highlighted code

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.unshift("Lemon");
    document.getElementById("demo").innerHTML = fruits;
}
```

---

## Contacts

[link's text here][4]

*by [@nedudi][5]* {bottom-right}


  [1]: 


  [1]: 


  [1]: 


  [1]: 


  [2]: 


  [2]: 


  [1]: 


  [1]: 


  [1]: http://
  [2]: http://
  [3]: http://
  [4]: http://
  [5]: http://