angularApp.controller('AlbumViewController', [
  '$log',
  '$scope',
  '$routeParams',
  'albumService',
  function ($log, $scope, $routeParams, albumService) {
    $scope.getLog = albumService.getLog();

    $scope.albumName = $routeParams.id;
    $scope.albumFetchError = '';

    albumService.getAlbumByName($scope.albumName, function (err, data) {
      if (err) {
        $scope.albumFetchError = "Couldn't find that album.";
      }
      var d;
      for (var key in data) {
        d = data[key].photos;
      }
      if (!d) {
        $scope.albumFetchError = "Couldn't find that album.";
      }
      $scope.photos = d;
    });
  },
]);
