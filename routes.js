angularApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', { redirectTo: '/albums' })
    .when('/albums', {
      controller: 'AlbumListController',
      templateUrl: './partials/album_list_partial.html',
    })
    .when('/albums/:id', {
      controller: 'AlbumViewController',
      templateUrl: './partials/album_view_partial.html',
    })
    .when('/404_page', {
      templateUrl: './partials/404_page_partial.html',
    })
    .otherwise({ redirectTo: '/' });
});
