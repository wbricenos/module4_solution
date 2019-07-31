//This component is used in categories.template to render category list
(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuapp/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();