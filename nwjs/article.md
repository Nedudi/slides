nw.js эта платформа, которая позволяет Вам создавать кроссплатформенные десктопные приложения для windows, mac os и linux используя веб-технологии. При этом javascript, html, css используются для построения интерфейса, а io.js (в прошлом node.js) для описания основной логики. Так-же вам предоставляется высокоуровневый JS API для доступа ко многим элементам операционных систем (меню, буфферу обмена, файловой системе и др.)

**От node-webkit к nw.js. Немного истории**

В 2011 году разработчик из Китая [Roger Wang](https://twitter.com/wwr) основал проект node-webkit, основной задумкой которого стало использование веб-технологий для написания полнофункциональных десктопных приложений. Как уже понятно из названия, основными составляющимии проекта стали Node.js и Webkit. 

Шли годы и в апреле 2013-го Chromium, а вместе с ним и проект node-webkit [переехал](http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html) на новый движок для отображения Blink (гугловый форк Webkit-а). В добавок к этому с Января 2015 проект начал использовать io.js вместо node.js.

В итоге изначальное название "node-webkit" стало совсем не актуальным и [было принято решение](https://groups.google.com/forum/#!msg/nwjs-general/V1FhvfaFIzQ/720xKVd0jNkJ) переименовать проект в nw.js. Бытует мнение, что теперь в буквах  NW заложен новый смысл - "Native Web".

Основными спонсорами проекта до сих пор являются [intel](http://www.intel.com/content/www/us/en/homepage.html) и [Gnor Tech](http://gnor.net/).


Когда мы говорим о десктопных приложениях, мы представляем себе некий графический интерфейс, взаимодействуя с которым мы осуществляем изменения на системном уровне операционной системы (например копируем файлы, запускаем процессы, выполняем системные команды и т.п.)

Для того, что-бы понять всю мощь идеи, давайте коротко рассмотрим основные составляющие.


Node.js - это JavaScript runtime на основе движка v8, изначально используемого в Google chrome. Он написан на С++ и работает на уровне протоколов прикладного уровня, где ему доступны множество различных API операционных систем, таких как файловая система и сетевые взаимодействия. Всилу этого, node чаще всего используется для построения системных приложений и серверов.

WebKit - это свободный движок для отображения веб-страниц. Т.е. как только веб-страница загружается, весь, написанный нами html, css и javascript парсится в дерево, которое прердается движку WebKit для отображения. 

<!--Let’s take a web page as an example: it’s built with HTML, CSS and JavaScript. After the page is loaded, it will be parsed into a tree and handed off to WebKit for rendering hence forming the page we see in a browser. Node-webkit is based on Blink, which is a rendering engine forked from WebKit and whose JavsScript engine is V8, which is also used in Node.-->



**Примеры приложений**

Desktop IDEs such as Light Table
Games such as Brandon Must Die!
Media apps such as Popcorn Time
Tools such as Haroopod
Enterprise apps such as metrics apps
Terminals such as POS terminals

We could see that the apps are diverse and there’s no lack of elegant apps. The full of imagination can be attributed to hardware performance improvements, developments of Web, animations, graphics, audios, videos, 2D, 3D, WebGl, etc.

**Единый контекст**

https://github.com/nwjs/nw.js/wiki/How-node.js-is-integrated-with-chromium




allow mic without user approvement (manifest.json) 