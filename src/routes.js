(function () {

//angular.module('MenuApp',['ui.router']);

angular.module('MenuApp',['ui.router','Data'])
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');


  // Set up UI states  
  $stateProvider
	// Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
	})
	
	.state('categoriesState', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
	  controller: 'CategoriesController as categoriesCtrl',
	  resolve: {
		items: ['MenuDataService', function (MenuDataService) {
			var items = MenuDataService.getAllCategories();
			return items;
		
		}]
	  }
    })
	
	.state('itemsState', {
	  url: '/items/{categoryShortName}',
      templateUrl: 'src/menuapp/templates/items.template.html',
	  controller: 'ItemsController as itemsCtrl',
	  resolve: {
		items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
			//console.log($stateParams);
			//console.log("stateParams:" + $stateParams.categoryShortName);
            var items =  MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            return items;
        }]
	  }
    });
}


})();
