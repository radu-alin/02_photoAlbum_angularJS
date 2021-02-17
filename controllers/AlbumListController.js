// CONTROLLERS
angularApp.controller('AlbumListController', [
  '$log',
  '$scope',
  '$location',
  'albumService',
  function ($log, $scope, $location, albumService) {
    $scope.getLog = albumService.getLog();
    $scope.addingAlbum = {};
    $scope.albumsFetchError = '';
    $scope.isDoneLoading = false;

    albumService.getAlbums(function (err, albums) {
      if (err) {
        $scope.albumsFetchError = 'Unexpected error albums occured.';
      }
      $scope.isDoneLoading = true;
      $scope.albums = albums;
    });

    $scope.addAlbum = function (newAlbum) {
      albumService.addAlbum(newAlbum, function (err, data) {
        if (err) {
          $scope.addAlbumFormError = err.code;
        }
        $location.path('/albums/' + newAlbum.name);
        $scope.addAlbumFormError = '';
        $scope.addingAlbum = {};
      });
    };
  },
]);
