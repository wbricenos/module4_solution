//This component is used in items.template to render category list
(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/menuapp/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();