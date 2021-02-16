angularApp.controller('AlbumViewController', [
  '$scope',
  '$log',
  '$routeParams',
  function ($scope, $log, $routeParams) {
    $scope.albumName = $routeParams.id;
    $scope.loadErrorMessage = '';

    var photos = {
      madrid20130901: [
        {
          filename: 'madrid01.jpg',
          date: '2013-09-01',
          description: 'My favourite trip.',
        },
        {
          filename: 'madrid02.jpg',
          date: '2013-09-01',
          description: 'My favourite trip.',
        },
      ],
      iceland20140415: [
        {
          filename: 'iceland01.jpg',
          date: '2014-04-15',
          description: 'This place is cold.',
        },
        {
          filename: 'iceland02.jpg',
          date: '2014-04-15',
          description: 'This place is cold.',
        },
      ],
      thailand20121001: [
        {
          filename: 'thailand01.jpg',
          date: '2012-10-01',
          description: 'So hot!',
        },
        {
          filename: 'thailand02.jpg',
          date: '2012-10-01',
          description: 'So hot!',
        },
      ],
      australia20120731: [
        {
          filename: 'australia01.jpg',
          date: '2012-07-31',
          description: 'So many kangaroos and koalas!',
        },
        {
          filename: 'australia02.jpg',
          date: '2012-07-31',
          description: 'So many kangaroos and koalas!',
        },
      ],
    };

    $log.log('$scope.photos', $scope.photos);

    if (photos[$scope.albumName]) {
      $scope.photos = photos[$scope.albumName];
    } else {
      $scope.loadErrorMessage = "I can't find any album with that name";
    }
  },
]);
