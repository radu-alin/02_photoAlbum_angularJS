// CONTROLLERS
angularApp.controller('AlbumListController', [
  '$scope',
  '$log',
  'albumService',
  function ($scope, $log, albumService) {
    $scope.getLog = albumService.getLog();

    $scope.addingAlbum = {};
    $scope.addAlbumFormError = '';
    $scope.albums = albumService.getAlbums();

    $scope.addAlbum = function (newAlbum) {
      try {
        albumService.addAlbum(newAlbum);
        $scope.addingAlbum = {};
        $scope.addAlbumFormError = '';
      } catch (err) {
        $scope.addAlbumFormError = err.message;
      }
    };
  },
]);
