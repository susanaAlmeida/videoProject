angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("basic-edit.html","{{basic.link}}\n  <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" width=\"100%\">\n  <tbody>\n    <tr>\n      <td class=\"mdl-data-table__cell--non-numeric\">\n        <iframe width=\"560\" height=\"315\" ng-src=\"{{basic.link}}\" frameborder=\"0\" autoplay=\"1\" allowfullscreen></iframe>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"mdl-data-table__cell--non-numeric\">\n        <th class=\"mdl-data-table__cell--non-numeric\">{{basic.link}}</th>\n      </td>\n    </tr>\n  </tbody>\n</table>");
$templateCache.put("basic-video.html","\n  <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" width=\"100%\">\n  <tbody>\n    <tr>\n      <td class=\"mdl-data-table__cell--non-numeric\">\n        <iframe width=\"560\" height=\"315\" ng-src=\"{{basic.link}}\" frameborder=\"0\" autoplay=\"1\" allowfullscreen></iframe>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"mdl-data-table__cell--non-numeric\">\n        <th class=\"mdl-data-table__cell--non-numeric\">{{basic.link}}</th>\n      </td>\n    </tr>\n  </tbody>\n</table>");
$templateCache.put("basic.html","<table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" width=\"100%\">\n  <thead>\n    <tr>\n      <th class=\"mdl-data-table__cell--non-numeric\">LISTA DE VÍDEOS JASON!!!</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"item in basic.details\">\n      <td class=\"mdl-data-table__cell--non-numeric\">\n      <img srcset=\"http://img.youtube.com/vi/{{item.url}}/default.jpg\">\n      <a ui-sref=\"basic-edit({id:item.id})\">{{item.firstName}}</a>\n      </td>\n      <td>\n      <a ui-sref=\"editar-form({id:item.id})\">editar</a>\n      </td>\n      <td>\n      <a ng-click=\"basic.deleteBasic(item.id)\">delete</a>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <a ui-sref=\"criar-form\" href=\"\">Create</a>\n      </td>\n    </tr>\n  </tbody>\n</table>");
$templateCache.put("criar.html","criar\n<form action=\"#\" name=\"omeuform\">\n<!-- Simple Textfield -->\n  <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ng-model=\"data.url\" ng-length>\n    <label class=\"mdl-textfield__label\" for=\"sample1\">Insira url do vídeo</label>\n  </div>\n  <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ng-model=\"data.firstName\">\n    <label class=\"mdl-textfield__label\" for=\"sample1\">Insira o nome</label>\n  </div>\n  <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" ng-click=\"basic.verificaFilme(data)\">\n    <i class=\"material-icons\">add</i>\n  </button>\n</form>");
$templateCache.put("editar.html","editar\n<form action=\"#\" >\n  <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ng-model=\"basic.editURL\">\n    <label class=\"mdl-textfield__label\" for=\"sample1\"></label>\n  </div>\n    <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ng-model=\"basic.editFirstName\">\n    <label class=\"mdl-textfield__label\" for=\"sample1\"></label>\n  </div>\n  <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" ng-click=\"basic.alteraBasic()\">\n    <i class=\"material-icons\">add</i>\n  </button>\n</form>");
$templateCache.put("home.html","<h1 class=\"heading -large\">{{ home.title | ExampleFilter }}</h1>\n\n<h3 class=\"heading -medium\">Here is a fancy number served up courtesy of Angular: <span class=\"number-example\">{{ home.number }}</span></h3>\n\n<img src=\"images/angular.png\" height=\"100\" />\n<img src=\"images/gulp.png\" height=\"100\" />\n<img src=\"images/browserify.png\" height=\"100\" />\n\n<hr/>\n<div example-directive title=\"WOW!\" click-message=\"You clicked me!\">Directive is not loaded.</div>\n");
$templateCache.put("new-video.html","<form action=\"#\">\n<!-- Simple Textfield -->\n  <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ng-model=\"data.id\">\n    <label class=\"mdl-textfield__label\" for=\"sample1\">Insira id</label>\n  </div>\n    <div class=\"mdl-textfield mdl-js-textfield\">\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ng-model=\"data.url\">\n    <label class=\"mdl-textfield__label\" for=\"sample1\">Insira url do vídeo</label>\n  </div>\n  <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" ng-click=\"basic.saveForm(data)\">\n    <i class=\"material-icons\">add</i>\n  </button>\n</form>");
$templateCache.put("directives/example.html","<div class=\"example-directive\">\n  <h1>Directive title: {{title}}</h1>\n  <p>This is an example of a directive, click me!</p>\n</div>\n");}]);