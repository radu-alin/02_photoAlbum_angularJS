// CONTROLLERS
angularApp.controller('AlbumListController', [
  '$scope',
  '$log',
  function ($scope, $log) {
    $scope.addingAlbum = {};
    $scope.addAlbumFormError = '';
    $scope.albums = [
      {
        id: 'madrid20130901',
        title: 'Madrid',
        date: '2013-09-01',
        description: 'My favourite trip.',
      },
      {
        id: 'iceland20140415',
        title: 'Iceland',
        date: '2014-04-15',
        description: 'This place is cold.',
      },
      {
        id: 'thailand20121001',
        title: 'Thailand',
        date: '2012-10-01',
        description: 'So hot!',
      },
      {
        id: 'australia20120731',
        title: 'Australia',
        date: '2012-07-31',
        description: 'So many kangaroos and koalas!',
      },
    ];

    $scope.isValidDate = function (valueDate) {
      if (valueDate.match(/[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}/)) {
        var d = new Date(valueDate);
        return !isNaN(d.getTime());
      }
      return false;
    };

    $scope.addAlbum = function (newAlbum) {
      // validation
      if (!newAlbum.title) {
        return ($scope.addAlbumFormError = 'Missing title.');
      }
      if (!newAlbum.date || !$scope.isValidDate(newAlbum.date)) {
        return ($scope.addAlbumFormError = 'Date not valid.');
      }
      if (!newAlbum.description) {
        return ($scope.addAlbumFormError = 'Missing description.');
      }

      $scope.albums.push(newAlbum);
      $scope.addingAlbum = {};
      $scope.addAlbumFormError = '';
    };
  },
]);
