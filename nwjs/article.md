nw.js эта платформа, которая позволяет Вам создавать кроссплатформенные десктопные приложения для windows, mac os и linux используя веб-технологии. При этом javascript, html, css используются для построения интерфейса, а io.js (в прошлом node.js) для описания основной логики. Так-же вам предоставляется высокоуровневый JS API для доступа ко многим элементам операционных систем (настройкам окна, меню, буфферу обмена, системному трею и др.)

### Похожие подходы

  - [Chrome apps](https://www.google.com/chrome/webstore/apps-games.html)
  - [Tide SDK (ex. Titanium Desktop)](http://www.tidesdk.org)
  - [App.js](http://appjs.com/)
  - [Electron (Atom Shell)](http://electron.atom.io/)

### От node-webkit к nw.js. Немного истории

В 2011 году разработчик из Китая [Roger Wang](https://twitter.com/wwr) основал проект node-webkit, основной задумкой которого стало использование веб-технологий для написания полнофункциональных десктопных приложений. Как уже понятно из названия, основными составляющимии проекта стали Node.js и Webkit (Chromium). 

Шли годы и в апреле 2013-го Chromium, а вместе с ним и проект node-webkit [переехал](http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html) на новый движок Blink (форк Webkit-а). В добавок к этому с января 2015 проект [начал использовать io.js](https://groups.google.com/forum/#!msg/nwjs-general/V1FhvfaFIzQ/720xKVd0jNkJ) вместо node.js.

В итоге изначальное название "node-webkit" стало совсем не актуальным и [было принято решение](https://groups.google.com/forum/#!msg/nwjs-general/V1FhvfaFIzQ/720xKVd0jNkJ) переименовать проект в nw.js. Бытует мнение, что теперь в буквах  NW заложен новый смысл - "Native Web".

Основными спонсорами проекта до сих пор являются [intel](http://www.intel.com/content/www/us/en/homepage.html) и [Gnor Tech](http://gnor.net/).

### Основная идея. Зачем “скрещивать” chromium c io.js?

Когда мы говорим о десктопных приложениях, мы представляем себе некий графический интерфейс, взаимодействуя с которым мы осуществляем изменения на системном уровне операционной системы (например копируем файлы, запускаем процессы, выполняем системные команды и т.п.)

Для того, что-бы понять всю мощь идеи nw.js, давайте коротко рассмотрим основные составляющие nwjs.

Chromium - браузер с открытым исходным кодом, который разрабатывается силами Google, Opera Software, Яндекс, NVIDIA и других компаний. В качестве движка для отображения веб-страниц в Chromium используется Blink (форк Webkit). В качестве движка для обработки JavaScript используется v8.

io.js (форк node.js) - это JavaScript runtime на основе движка v8, изначально используемого в Chromium. Он написан на С++ и работает на уровне протоколов прикладного уровня, где ему доступны множество различных API операционных систем, таких как файловая система и сетевые взаимодействия. В силу этого, io.js(node) чаще всего используется для построения системных приложений и серверов.

Оснойвной идеей nw.js является объединине blink и io.js в единый контекст, используя один и тот-же v8. Если сказать точнее, io.js использует v8 chromium-a. Т.е. при помощи chromium мы можем создать графический интерфейс на оснве html, css, js как и в любом веб-браузере. Но в отличие от обычного браузера, nw.js позволяет из этого-же контекста вызывать функции io.js для работы с системными API операционной системы.

Давайте разберем простейший пример. При помощи модудя fs для io.js мы будем следить за изменениями какого-нибудь файла в системе. В случае, если файл изменился, отобразим его содержимое в div-e c id="log". 

####js

    var fs = require('fs');
    var path = '/usr/local/var/log/nginx/error.log';
    fs.watchFile(path, function(a){
      document.getElementById('log').innerHTML = fs.readFileSync(path, {encoding:'utf8'});
    });

Как мы видим, здесь нет сервера и клиента, нет ajax, нет сокетов, нет http, нет обмена данными по сети. Как мы говорили, вся прелесть nwjs заключается в возможности работы с io.js из контекста Chromium. 

[Здесь можно почитать подрбнее](https://github.com/nwjs/nw.js/wiki/How-node.js-is-integrated-with-chromium) о технических аспектах реализации единого контекста.

---

## Начинаем погружение

Для начала скачайте и устанивите [последнюю версию nw.js](http://nwjs.io) для Вашей платформы

### Структура приложения

Приложение для nw.js состоит из обычных html, css, js файлов, стуруктурированных произвольно. Нет никаких дополнительных правил и условностей по их компановке.

[картинка]

При запуске nw.js ищет файл манифеста package.json. Этот файл очень схож со стандартным package.json в io.js, за исключением того, что он соедержит дополнительные настройки (window, user-agent, chromium-args, js-flags и другие). Эти настройки позволяют nw.js настраивать и контролировать поведение Chromium и его окружения, режим запуска и отображения, размеры окна, иконки, точку входа в приложение и множество других установок.

#### Пример package.json

    {
      "main": "index.html",
      "name": "dummydemo",
      "description": "Dummy demo of nnwjs app",
      "version": "0.0.1",
      "keywords": [ "demo", "nwjs" ],
      "window": {
        "title": "Dummy demo",
        "icon": "icon.png",
        "toolbar": false,
        "frame": true,
        "width": 700,
        "height": 400,
        "position": "mouse",
        "min_width": 400,
        "min_height": 200,
        "max_width": 800,
        "max_height": 600
      },
      "author": "nedudi",
      "license": "MIT",
      "dependencies": {
        "moment": "latest",
        "handlebars": "^2.0.0"
      }
    }

### Примеры приложений

Desktop IDEs such as Light Table
Games such as Brandon Must Die!
Media apps such as Popcorn Time
Tools such as Haroopod
Enterprise apps such as metrics apps
Terminals such as POS terminals

We could see that the apps are diverse and there’s no lack of elegant apps. The full of imagination can be attributed to hardware performance improvements, developments of Web, animations, graphics, audios, videos, 2D, 3D, WebGl, etc.


**Создание и управление системными меню**



	  // Создать пустое контекстное меню
	  var menu = new gui.Menu();
	  // Добавить в него пунктов или разделителей
	  menu.append(new gui.MenuItem({ label: 'Ничего не делать' }));
	  menu.append(new gui.MenuItem({ type: 'separator' }));
	  // .. и повесить на них обработчики
	  menu.append(new gui.MenuItem({
	  	label: 'Сказать "Привет!"',
	  	click: function() {
	  	  alert('Привет!')
	  	}
	  }));


**Единый контекст**






allow mic without user approvement (manifest.json) 




Что еще почитать?

Шорткаты

Очень толковый вики - xx§ https://github.com/nwjs/nw.js/wiki
Задать вопросы комьюнити в Гиттере - https://gitter.im/nwjs/nw.js