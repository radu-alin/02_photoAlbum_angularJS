// CONTROLLERS
angularApp.controller('AlbumListController', [
  '$log',
  '$scope',
  '$location',
  '$cookieStore',
  'albumService',
  function ($log, $scope, $location, $cookieStore, albumService) {
    $scope.getLog = albumService.getLog();
    $scope.addingAlbum = {};
    $scope.albumsFetchError = '';
    $scope.isDoneLoading = false;

    albumService.getAlbums(function (err, albums) {
      if (err) {
        $scope.albumsFetchError = 'Unexpected error albums occured.';
      }
      var d = [];
      for (var key in albums) {
        d.push(albums[key]);
      }
      $scope.isDoneLoading = true;
      $scope.albums = d;
      $log.log(d);
      for (var item of d) {
        var name = item.name;
        $cookieStore.put(name, item.description);
      }
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
