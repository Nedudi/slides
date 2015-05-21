[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-logo-text.svg" alt="nwjs-logo-text" class="alignleft size-full wp-image-2286" width="100px" style="margin-right:40px" />][1]

**nw.js** - это платформа, которая позволяет создавать кроссплатформенные десктопные приложения для windows, mac os и linux, используя веб-технологии. При этом javascript, html и css используются для построения интерфейса, а node.js(io.js) - для описания основной логики. Кроме того, Вам предоставляется высокоуровневый JS API для доступа ко многим элементам операционных систем (настройкам окна, меню, буферу обмена, системному трею и др.)

## Почему браузера может быть мало?

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-connect-web-api-and-native-api.svg" alt="nwjs-connect-web-api-and-native-api" class="alignright size-full wp-image-2230" width="300px" />][2]

Мы все любим веб-приложения! При этом большинство софта, который мы используем на ноутбуках для работы и развлечений, - это десктопные приложения. Да-да, те самые, с иконкой на рабочем столе, которые могут висеть в памяти целыми днями или неделями (файловые менеджеры, системные утилиты, фото, аудио и видео редакторы, IDE, чаты и др.).

Что же не позволяет веб-приложениям выйти на уровень десктопных?

Я приведу всего несколько ограничений, которые есть у всех веб-приложений и которые можно преодолеть, разрабатывая десктопный софт с nw.js. Итак, я хочу, чтобы мое приложение:

*   Имело полный доступ к файловой системе, системным процессам, могло выполнять команды в командной оболочке той машины, на которой запущено.
*   Могло работать в фоне, запускаться при старте системы и оффлайн.
*   Не спрашивало подтверждения доступа при использовании камеры и микрофона.
*   Могло использовать Web Gl, Web Audio, Web RTC и т.д. в той версии браузера, которая определена мной.
*   Могло создавать элементы управления на уровне операционной системы: меню, окна, иконки в трее (менюбаре), управлять ими.
*   Могло создавать несколько окон.
*   Могло делать скриншоты.
*   Имело доступ к буферу обмена на запись и чтение.
*   Могло подписываться на системные сочетания клавиш (в том числе, когда приложение не в фокусе)
*   Могло пользоваться системной нотификацией.
*   Могло делать кроссдоменные запросы.
*   Могло изменять UserAgent
*   Могло загружать любые сайты во фрейм, который они не считали бы фреймом.
*   Могло включать полноценный полноэкранный режим kiosk-mode (как в десктопных играх).
*   Я хочу распространять и рекламировать приложение через магазины приложений.
*   И просто, но важно... Я хочу запускать приложение нажатием на иконку!

nw.js позволяет реализовать вышеописанные задумки.

### Похожие подходы и их недостатки

На данный момент существует несколько различных технологий для создания десктопных приложений на базе веб-технологий. Вот их неполный список:

*   [Adobe flash][3]
*   [Tide SDK (ex. Titanium Desktop)][4]
*   [App.js][5]
*   [Brackets Shell][6]
*   [Tint][7]
*   И другие...

На мой субъективный взгляд, основным недостатком этих технологий является то, что обычному веб-разработчику придется немало помучиться, осваивая все тонкости API и внутренней философии любой из них. Вам нужно будет перелопатить тонны документации и примеров, чтобы просто начать что-то делать и увидеть первый результат.

С nw.js все намного проще. Если вы разрабатываете веб-приложения и имеете немного опыта работы с node.js, то уже через несколько часов вы поймете как писать и собирать десктопные приложения под mac, windows и linux.

### От node-webkit к nw.js. Немного истории

<img src="http://html5.by/wp-content/uploads/2015/05/roger-wang-150x150.jpg" alt="roger-wang" width="150" height="150" class="alignright size-thumbnail wp-image-2223" />

В 2011 году разработчик из Китая [Roger Wang][8] основал проект node-webkit, основной задумкой которого стало использование веб-технологий для написания полнофункциональных кроссплатформенных десктопных приложений. Как уже понятно из названия, основными составляющими проекта стали Node.js и Webkit (Chromium).

Шли годы и в апреле 2013-го Chromium, а вместе с ним и проект node-webkit [переехал][9] на новый движок Blink (форк Webkit-а). В добавок к этому с января 2015 проект [начал использовать io.js][10] вместо node.js.

В итоге изначальное название "node-webkit" стало совсем не актуальным и [было принято решение][10] переименовать проект в nw.js. Бытует мнение, что теперь в буквах NW заложен новый смысл - "Native Web".

Основными спонсорами проекта до сих пор являются [intel][11] и [Gnor Tech][1].

<img src="http://html5.by/wp-content/uploads/2015/05/intel-gnor-logos.svg" alt="intel-gnor-logos" class="aligncenter size-full wp-image-2219" width="300px" />

### Основная идея. Зачем “скрещивать” Chromium c node.js?

Когда мы говорим о десктопных приложениях, мы представляем себе некий графический интерфейс, взаимодействуя с которым мы осуществляем изменения на системном уровне операционной системы (например, копируем файлы, запускаем процессы, выполняем системные команды и т.п.)

Для того, чтобы понять всю мощь идеи nw.js, давайте коротко рассмотрим основные составляющие nwjs.

**Chromium** - браузер с открытым исходным кодом, который разрабатывается силами Google, Opera Software, Яндекс, NVIDIA и других компаний. В качестве движка для отображения веб-страниц в Chromium используется Blink (форк Webkit). В качестве движка для обработки JavaScript используется v8.

**node.js(io.js)** - это JavaScript runtime на основе движка v8, изначально используемого в Chromium. Он написан на С++ и работает на уровне протоколов прикладного уровня, где ему доступны множество различных API операционных систем, таких как файловая система и сетевые взаимодействия. В силу этого, node чаще всего используется для построения системных приложений и серверов.

[<img src="http://html5.by/wp-content/uploads/2015/05/iojs-and-chromium-logo-1024x362.png" alt="iojs-and-chromium-logo" width="550" height="194" class="aligncenter size-large wp-image-2225" />][12]

Основной идеей nw.js является объединение Chromium и node.js в единый контекст, используя один и тот же v8. Если сказать точнее, node.js использует v8 Chromium-a. Т.е. при помощи Chromium мы можем создать графический интерфейс на основе html, css, js, как и в любом веб-браузере. Но, в отличие от обычного браузера, nw.js позволяет из этого же контекста вызывать функции node.js для работы с системными API операционной системы.

Давайте разберем простейший пример. При помощи модуля fs для io.js мы будем следить за изменениями какого-нибудь файла в системе. В случае, если файл изменился, отобразим его содержимое в div-e c id="log".

#### js

    var fs = require('fs');
    var path = '/usr/local/var/log/nginx/error.log';
    fs.watchFile(path, function(a){
      document.getElementById('log').innerHTML = fs.readFileSync(path, {encoding:'utf8'});
    });
    

Как мы видим, здесь нет сервера и клиента, нет ajax, нет сокетов, нет http, нет обмена данными по сети. Как мы говорили, вся прелесть nwjs заключается в возможности работы с node.js из контекста Chromium.

### Как они это сделали

Разработчики nw.js приложили немало усилий для обеспечения единого event loop и построения “моста" между контекстами node.js и chromium. [Здесь можно почитать подробнее][13] о технических деталях и проблемах, возникших при реализации этой задумки.

* * *

## Начинаем погружение

Для начала скачайте и установите [последнюю версию nw.js][14] для Вашей платформы. Далее следуйте указаниям документации для настройки командной строки и алиасов для Вашей операционной системы.

### Структура приложения nw.js

Приложение для nw.js состоит из обычных html, css, js файлов, структурированных произвольно. Нет никаких дополнительных правил и условностей по их компоновке.

[<img src="http://html5.by/wp-content/uploads/2015/05/project-structure-nwjs.svg" alt="project-structure-nwjs" class="aligncenter size-full wp-image-2229" width="500px" />][15]

При запуске nw.js ищет файл манифеста `package.json`.

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
    

Этот файл ничем не отличается от обычного `package.json` в node.js, за исключением того, что он содержит дополнительные параметры: `window`, `user-agent`, `chromium-args`, `js-flags` и другие. Они позволяют nw.js настраивать и контролировать поведение Chromium и его окружения, добавлять флаги при запуске node.js, менять режим отображения, размеры окна, иконки, точку входа в приложение и множество других установок.

Для примера мы создадим файл `index.html` и добавим немного CSS.

#### index.html

    <div class="hello">
      Привет, NW.JS!
    </div>
    

Затем откроем консоль и наберем:

    $ nw my/lovely/app
    

где `my/lovely/app` - путь к папке с приложением, а `nw` - [правильно настроенный алиас][16] для nw.js

И все! В результате запустится десктопное приложение, которое выглядит примерно так:

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-frame-toolbar-263x300.png" alt="nwjs-window-frame-toolbar" width="263" height="300" class="aligncenter size-medium wp-image-2247" />][17]

* * *

## Настройка отображения окна

Результат, который мы видим очень похож на обычный браузер с адресной строкой. В принципе, это и есть браузер! Да-да, тот самый Chromium, о котором мы говорили.

Однако, в большинстве случаев хочется, чтобы наше творение не выглядело как браузер, а больше походило на привычное десктопное приложение.

Для этого существует целый ряд настроек, доступных в `package.json`. Давайте подробнее остановимся на некоторых из них.

Для начала можем **убрать тулбар**.

#### package.json

    ...
    "window": {
      "toolbar": false
    }
    ...
    

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-frame-284x300.png" alt="nwjs-window-frame" width="284" height="300" class="aligncenter size-medium wp-image-2250" />][18]

При желании можно **скрыть фрейм окна**.

#### package.json

    ...
    "window": {
      "toolbar": false,
      "frame": false
    }
    ...
    

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-300x300.png" alt="nwjs-window" width="300" height="300" class="aligncenter size-medium wp-image-2248" />][19]

Или вообще **убрать фон окна, оставив только контент**.

#### package.json

    ...
    "window": {
      "toolbar": false,
      "frame": false,
      "transparent": true
    }
    ...
    

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-transparent-300x300.png" alt="nwjs-window-transparent" width="300" height="300" class="aligncenter size-medium wp-image-2252" />][20]

### Kiosk-mode

Еще одной мощной опцией является возможность запуска приложений в Kiosk-mode. Этот режим часто используется в десктопных играх, а также на экранах в публичных местах (например, для показа рекламы на больших мониторах). Выйти из приложения, запущенного в Кiosk-mode не так просто как из браузерного fullscreen. Это можно сделать только при помощи методов API nw.js, Alt-Tab или Ctrl-Alt-Del(Windows), поэтому, разрабатывая приложения, работающие в этом режиме, Вы сами должны позаботиться о наличии в интерфейсе некоторой кнопки "Выход", которая поможет пользователю его закрыть.

#### package.json

    ... 
    "window": {
      "kiosk": true
    }
    ...
    

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-macbook-kiosk-1024x622.png" alt="nwjs-macbook-kiosk" width="550" height="334" class="aligncenter size-large wp-image-2254" />][21]

Ну и, наконец, мы просто можем **скрыть окно**, оставив приложение в фоновом режиме

    "window": {
       "kiosk": true
    }
    

* * *

## Элементы интерфейса операционной системы.

Nw.js позволяет создавать и управлять элементами интерфейса операционной системы, характерными для десктопных приложений (меню окна, трей, контекстные меню). Также Вы можете получить доступ к буферу обмена, сочетаниям системных клавиш и т.п.

Для этого потребуется всего лишь подключить модуль `nw.gui`, который уже есть в стандартной поставке. Он дает возможность абстрагироваться от реализации элементов интерфейса в конкретной операционной системе, предоставляя общий API.

    var gui = require('nw.gui');
    
    gui.Window.get(); //окно
    gui.Shell(); //оболочка
    gui.Tray // трей
    gui.Menu // менюшки
    gui.Clipboard // буффер обмена
    gui.Shortcut // сочетания клавиш
    // ...и другие элементы
    

А теперь давайте посмотрим подробнее на некоторые из вышеописанных возможностей.

### Создание системных контекстных меню

#### js

    // Создать пустое меню
    var menu = new gui.Menu();
    // Добавить в него пункты или разделители
    menu.append(new gui.MenuItem({ label: 'Ничего не делать' }));
    menu.append(new gui.MenuItem({ type: 'separator' }));
    // .. и повесить на них обработчики
    menu.append(new gui.MenuItem({
      label: 'Сказать "Привет!"',
      click: function() {
        alert('Привет!')
      }
    }));
    
    // Показывать в виде контекстного меню
    document.body.addEventListener('contextmenu', function(e) { 
      e.preventDefault();
      // В том месте, где мы кликнули
      menu.popup(e.x, e.y);
      return false;
    }, false);
    

Вот что мы получим в итоге при клике правой клавишей на окне:

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-cmenu1-284x300.png" alt="nwjs-window-cmenu" width="284" height="300" class="aligncenter size-medium wp-image-2256" />][22]

### Создание меню окна

#### js

    // Создать верхнее меню
    var menubar = new gui.Menu({ type: 'menubar', title: 'Menu Title' });
    
    // В качестве вложенных меню используем такой же код, как в примере c контекстным меню.
    menubar.append(new gui.MenuItem({ label: 'Главное', submenu: menu}));
    menubar.append(new gui.MenuItem({ label: 'О нас', submenu: menu}));
    
    //Получить текущее окно и подключить к нему верхнее меню
    gui.Window.get().menu = menubar;
    

Результат:

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-menubar-e1432238635285.png" alt="nwjs-window-menubar" width="400" height="378" class="aligncenter size-full wp-image-2251" />][23]

### Создание иконок и меню в трее (менюбаре)

#### js

    // Создаем иконку в трее (менюбаре)
    var tray = new gui.Tray({ 
      title: 'ololo', 
      icon: 'icon.png',  
      alticon: 'icon.png'
    });
    
    // Добавляем меню при клике на иконке в трее
    var traymenu = new gui.Menu();
    traymenu.append(new gui.MenuItem({label: 'Тот', type: 'checkbox'}));
    traymenu.append(new gui.MenuItem({label: 'Этот', type: 'checkbox' }));
    traymenu.append(new gui.MenuItem({label: 'Другой', type: 'checkbox'}));
    traymenu.append(new gui.MenuItem({type: 'separator' }));
    // В качестве вложенных меню используем такой-же код как в примере c контекстным меню.
    traymenu.append(new gui.MenuItem({label: 'или ...',   submenu: menu}));
    
    tray.menu = menu;  
    

Результат:

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-tray1-e1432239144989.png" alt="nwjs-window-tray" width="460" height="420" class="aligncenter size-full wp-image-2262" />][24]

### Обработка сочетаний клавиш

#### js

    var shortcut = new gui.Shortcut({
      key : "Ctrl+Shift+L",
      active : function() {
        console.log('Нажато сочетание клавиш', this.key)
      },
      failed : function(msg) {
        // невозможно зарегистрировать такое сочетание клавиш
        // возможно, оно уже занято
        console.log(msg);
      }
    });
    
    // регистрируем сочетание клавиш в системе
    gui.App.registerGlobalHotKey(shortcut);
    
    // отписываемся от сочетания клавиш в системе
    gui.App.unregisterGlobalHotKey(shortcut);
    

### Работа с буфером обмена

#### js

    var clipboard = gui.Clipboard.get();
    
    // получить значение
    var text = clipboard.get('text');
    
    // установить значение
    clipboard.set('Привет', 'text');
    
    // очистить буфер
    clipboard.clear();
    

* * *

## Хранение данных и ресурсов в приложениях на nw.js

Многим десктопным приложениям необходимо хранить временные данные между перезапусками и во время работы. Например, это могут быть результаты игры, список последних проектов, фото, видео и тп.

Эту задачу можно разделить на 2 части:

1) Хранение структурированных данных 2) Хранение локальных статических ресурсов (фото, видео и других файлов)

### Хранение структурированных данных

На сегодняшний день в арсенале разработчика есть несколько встроенных браузерных API. Все они есть в Chromium, который является частью nw.js

*   [Web SQL database][25]
*   [Indexed DB][26]
*   [Local storage][27]
*   [Session storage][28]
*   [Application cache][29]

Мы не будем останавливаться на каждом из них. Подробнее об удобных плагинах для работы с этими API можно почитать [здесь][30].

### Хранение локальных статических ресурсов

Для хранения файлов нужно использовать специально предусмотренную директорию [App.dataPath][31]. Её расположение будет зависеть от операционной системы и имени проекта

*   **Windows** `%LOCALAPPDATA%/<name>` 
*   **Linux** `~/.config/<name>` 
*   **OSX** `~/Library/Application Support/<name>` 

где `<name>` - это поле, заданное в package.json

Используя эту директорию, Вы можете быть уверены, что файлы будут храниться в надежном месте, вне зависимости от операционной системы.

* * *

## Отладка

Для отладки можно использовать кнопку на верхней панели.

[<img src="http://html5.by/wp-content/uploads/2015/05/nwjs-window-debugger1-300x90.png" alt="nwjs-window-debugger" width="300" height="90" class="aligncenter size-medium wp-image-2284" />][32]

Она запустит привычный отладчик (в точности такой же, как в браузере Chrome).

Более того, Вы можете запустить nw.js c флагом `--remote-debugging-port`:

    $ nw --remote-debugging-port=1234 app
    

После этого отладчик будет доступен по ссылке `http://localhost:1234`

Кроме этого, есть возможность делать Livereload приложения при каждом изменении в коде. Почитать об этом подробнее можно [здесь][33].

* * *

## Сборка приложений на nw.js

Подробный мануал по сборке приложений под разные платформы есть [здесь][34]. Но, если честно, читать его при написании собственного приложения в первый раз я бы не советовал. Он понадобится Вам при работе со специфическими решениями и подходами.

В стандартных же случаях лучше использовать готовый плагин [node-webkit-builder][35].

Все что нужно сделать, это установить node-webkit-builder и запустить команду `nwbuild` с указанием пути к папке приложения.

    $  npm i -g node-webkit-builder
    $  nwbuild ./
    

Если требуется собрать приложение под конкретные операционные системы, их список можно задать с помощью флага `-p`

    $  nwbuild ./ -p win32,win64,osx32,osx64,linux32,linux64
    

При этом nwbuild сам скачает последние версии nw.js и сделает сборки для всех указанных платформ (каждую в отдельной папке).

Вот что получилось у меня после открытия собранного тестового приложения в различных ОС:

### Mac OS

[<img src="http://html5.by/wp-content/uploads/2015/05/macnwjs-1024x699.png" alt="macnwjs" width="550" height="375" class="aligncenter size-large wp-image-2273" />][36]

### Windows

[<img src="http://html5.by/wp-content/uploads/2015/05/windows-nwjs-1024x699.png" alt="windows-nwjs" width="550" height="375" class="aligncenter size-large wp-image-2269" />][37]

### Ubuntu

[<img src="http://html5.by/wp-content/uploads/2015/05/ubuntu-nwjs-1024x699.png" alt="ubuntu-nwjs" width="550" height="375" class="aligncenter size-large wp-image-2268" />][38]

### Примеры приложений

### Popcorn time

Original and Great team

http://getpopcornti.me/ Follower team (holds the original project)

https://popcorntime.io/ To allow any computer user to watch movies easily streaming from torrents, without any particular knowledge.

[<img src="http://html5.by/wp-content/uploads/2015/05/popcorn-time-1024x557.jpg" alt="popcorn-time" width="550" height="299" class="aligncenter size-large wp-image-2280" />][39]

### Mongo management studio

Mongo Management Studio is the best way to work with MongoDB the easy way. Because of the clean and light user interface, you can execute the typical MongoDB commands fast and effective, without using the MongoDB shell.

http://www.litixsoft.de/english/mms/

[<img src="http://html5.by/wp-content/uploads/2015/05/mong-management-studio-1024x564.png" alt="mong-management-studio" width="550" height="302" class="aligncenter size-large wp-image-2279" />][40]

### Lighttable

Light Table is a new interactive IDE that lets you modify running programs and embed anything from websites to games. It provides the real time feedback.

http://www.lighttable.com/

[<img src="http://html5.by/wp-content/uploads/2015/05/lighttable-e1432245970469.png" alt="lighttable" width="550" height="331" class="aligncenter size-full wp-image-2278" />][41]

### Spreaker

Spreaker Studio is a brand new application for Windows and Mac OS that allows Spreaker users to professionally broadcast live audio. This application has been built with node-webkit, portaudio and lame.

Mac: http://download.spreaker.com/spreaker-osx.dmg Win: http://download.spreaker.com/spreaker-win.exe

[<img src="http://html5.by/wp-content/uploads/2015/05/spreaker-e1432245998338.png" alt="spreaker" width="550" height="371" class="aligncenter size-full wp-image-2277" />][42]

### sizeChecker

sizeChecker is a GUI tool to examine folder/disc usage on your laptop/pc/mac, to let you have a clear view of file usages on your system.

https://github.com/airbob/sizeChecker

[<img src="http://html5.by/wp-content/uploads/2015/05/sizechecker-e1432246033791.png" alt="sizechecker" width="550" height="463" class="aligncenter size-full wp-image-2276" />][43]

Sdal za mig

Sdal za mig is software that used to send tax reports in russian federal tax service. Software available as web app, standalone app (node-webkit) and app for interactive kiosks (node-webkit).

[<img src="http://html5.by/wp-content/uploads/2015/05/sdalzamig-1024x843.png" alt="sdalzamig" width="550" height="452" class="aligncenter size-large wp-image-2275" />][44]

### Что еще почитать?

*   Очень толковый вики - xx§ https://github.com/nwjs/nw.js/wiki 
*   Задать вопросы комьюнити в Гиттере - https://gitter.im/nwjs/nw.js

 [1]: http://gnor.net/
 [2]: http://html5.by/wp-content/uploads/2015/05/nwjs-connect-web-api-and-native-api.svg
 [3]: http://www.adobe.com/products/flash.html
 [4]: http://www.tidesdk.org
 [5]: http://appjs.com
 [6]: https://github.com/adobe/brackets-shell
 [7]: https://www.trueinteractions.com/tint2/docs
 [8]: https://twitter.com/wwr
 [9]: http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html
 [10]: https://groups.google.com/forum/#!msg/nwjs-general/V1FhvfaFIzQ/720xKVd0jNkJ
 [11]: http://www.intel.com/content/www/us/en/homepage.html
 [12]: http://html5.by/wp-content/uploads/2015/05/iojs-and-chromium-logo.png
 [13]: https://github.com/nwjs/nw.js/wiki/How-node.js-is-integrated-with-chromium
 [14]: http://nwjs.io
 [15]: http://html5.by/wp-content/uploads/2015/05/project-structure-nwjs.svg
 [16]: https://github.com/nwjs/nw.js/wiki/How-to-run-apps
 [17]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-frame-toolbar.png
 [18]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-frame.png
 [19]: http://html5.by/wp-content/uploads/2015/05/nwjs-window.png
 [20]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-transparent.png
 [21]: http://html5.by/wp-content/uploads/2015/05/nwjs-macbook-kiosk.png
 [22]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-cmenu1.png
 [23]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-menubar-e1432238635285.png
 [24]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-tray1-e1432239144989.png
 [25]: http://en.wikipedia.org/wiki/Web_SQL_Database
 [26]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 [27]: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
 [28]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 [29]: https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
 [30]: https://github.com/nwjs/nw.js/wiki/Save-persistent-data-in-app
 [31]: https://github.com/nwjs/nw.js/wiki/App
 [32]: http://html5.by/wp-content/uploads/2015/05/nwjs-window-debugger1-e1432246796401.png
 [33]: https://github.com/nwjs/nw.js/wiki/Livereload-nw.js-on-changes
 [34]: https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps
 [35]: https://github.com/mllrsohn/node-webkit-builder
 [36]: http://html5.by/wp-content/uploads/2015/05/macnwjs.png
 [37]: http://html5.by/wp-content/uploads/2015/05/windows-nwjs.png
 [38]: http://html5.by/wp-content/uploads/2015/05/ubuntu-nwjs.png
 [39]: http://html5.by/wp-content/uploads/2015/05/popcorn-time.jpg
 [40]: http://html5.by/wp-content/uploads/2015/05/mong-management-studio.png
 [41]: http://html5.by/wp-content/uploads/2015/05/lighttable-e1432245970469.png
 [42]: http://html5.by/wp-content/uploads/2015/05/spreaker-e1432245998338.png
 [43]: http://html5.by/wp-content/uploads/2015/05/sizechecker-e1432246033791.png
 [44]: http://html5.by/wp-content/uploads/2015/05/sdalzamig.png