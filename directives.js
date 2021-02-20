angularApp.directive('paAngryPlus', [
  function () {
    return {
      restrict: 'A',
      template: '&gt;:( &gt;:( &gt;:( <span ng-transclude></span> !!!',
      transclude: true,
      link: function ($scope, element, attrs) {
        element.css({
          'background-color': 'gray',
          'font-weight': 'bold',
          color: 'black',
        });
      },
    };
  },
]);

angularApp.directive('paAlbumOverview', function () {
  return {
    restrict: 'E',
    templateUrl: './partials/albumOverviewPartial.html',
    scope: {
      albumdata: '=',
    },
    link: function ($scope, element, attrs) {},
  };
});
