(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

/**
* Service to retrieve menu categories and items from a specific category
* Promises and http == >http://stackoverflow.com/questions/12505760/processing-http-response-in-service
*
*/
MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  /**
  * Get list item that match to searchTerm
  * 
  */
  //FIXME: URL in constants
  service.getAllCategories = function () {
	// $http returns a promise, which has a then function, which also returns a promise
	var promise = $http({
		 // The then function here is an opportunity to modify the response
		method: "GET",
		url: (ApiBasePath + "/categories.json")
	})
	.then(function (response) {
		// Update the response ?
		console.log("getAllCategories response:");
		//console.log(response);
		 // The return value gets picked up by the then in the controller.
		return response.data;
	});
	// Return the promise to the controller
	return promise;
  };

  /**
  * Get items from a specific categoryShortName
  *
  */
  service.getItemsForCategory = function(categoryShortName) {
	// $http returns a promise, which has a then function, which also returns a promise
	var promise = $http({
		 // The then function here is an opportunity to modify the response
		url: (ApiBasePath + "/menu_items.json"),
		method: "GET",
		params: {
			category: categoryShortName
		}
	})
	.then(function (response) {
		// Update the response ?
		//console.log("getItemsForCategory response:");
		//console.log(response);
		 // The return value gets picked up by the then in the controller.
		return response.data.menu_items;
	});
	// Return the promise to the controller
	return promise;
  };
}

})();



