(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    var url = "https://davids-restaurant.herokuapp.com/categories.json";

    return $http.get(url)
      .then(function(results) {
        service.categories = results.data;
        return service.categories;
      });
  }

  service.getItemsForCategory = function(categoryShortName) {
    var url = `https://davids-restaurant.herokuapp.com/menu_items.json?category=${categoryShortName}`;

    return $http.get(url)
      .then(function(result) {
        service.items = result.data;
        return service.items;
      });
  }
}
})();
