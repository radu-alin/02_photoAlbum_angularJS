angularApp.controller('AlbumViewController', [
  '$scope',
  '$log',
  '$routeParams',
  'albumService',
  function ($scope, $log, $routeParams, albumService) {
    $scope.getLog = albumService.getLog();

    $scope.albumName = $routeParams.id;
    $scope.loadErrorMessage = '';

    try {
      $scope.photos = albumService.getAlbumByName($scope.albumName);
    } catch (err) {
      $scope.loadErrorMessage = "Couldn't find that album.";
    }
  },
]);
