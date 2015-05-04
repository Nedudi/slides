// Подключить управление системными элементами интерфейса ОС
var gui = require('nw.gui');
var fs = require('fs');
var path = '/usr/local/var/log/nginx/error.log';
fs.watchFile(path, function(a){
  console.log(fs.readFileSync(path, {encoding:'utf8'}));
  document.getElementById('log').innerHTML = fs.readFileSync(path, {encoding:'utf8'});
});

//---------------------------------------

var getDummyMenu = function () {

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

  return menu;
}


// Показывать в виде контекстного меню
document.body.addEventListener('contextmenu', function(e) { 
  e.preventDefault();
  // В том месте, где мы кликнули
  getDummyMenu().popup(e.x, e.y);
  return false;
}, false);


// Создать верхнее меню
var menubar = new gui.Menu({ type: 'menubar', title: 'Menu Title' });

// Под-меню
menubar.append(new gui.MenuItem({ label: 'Главное', submenu: getDummyMenu()}));
//menubar.append(new gui.MenuItem({ label: 'Опции',   submenu: getDummyMenu()}));
menubar.append(new gui.MenuItem({ label: 'О нас',   submenu: getDummyMenu()}));

//Получит текущее окно и подключить к нему верхнее меню
gui.Window.get().menu = menubar;


var os = require('os')

// document.write('<div><b>Приложение:</b> ' + gui.App.manifest.name + '</div>');
// document.write('<div><b>Платформа:</b>  ' + os.platform() + '</div>');