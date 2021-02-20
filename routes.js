angularApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', { redirectTo: '/albums' })
    .when('/albums', {
      controller: 'AlbumListController',
      templateUrl: './partials/albumListPartial.html',
    })
    .when('/albums/:id', {
      controller: 'AlbumViewController',
      templateUrl: './partials/albumViewPartial.html',
    })
    .when('/404_page', {
      templateUrl: './partials/404_page_partial.html',
    })
    .otherwise({ redirectTo: '/' });
});

angularApp.filter('toUppercaseFilter', function () {
  return function (str) {
    if (typeof str !== 'string') return str;
    return str.toUpperCase();
  };
});
