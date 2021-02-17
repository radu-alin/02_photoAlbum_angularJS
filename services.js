angularApp.service('albumService', [
  '$log',
  '$http',
  function ($log, $http) {
    var albums;
    var _url =
      'https://angularjs-dummydb-default-rtdb.europe-west1.firebasedatabase.app';

    this.getAlbums = function (callback) {
      $log.log('fetching albums...');
      $http({
        method: 'GET',
        url: _url + '/albums.json',
      })
        .success(function (data, status, headers, conf) {
          callback(null, data);
        })
        .error(function (data, status, headers, conf) {
          callback(data, null);
        });
    };

    this.getAlbumByName = function (albumName, callback) {
      $log.log('fetching albumByname...');
      $http({
        method: 'GET',
        url: _url + '/albums.json?orderBy="name"&equalTo="' + albumName + '"',
      })
        .success(function (data, status, headers, conf) {
          callback(null, data);
        })
        .error(function (data, status, headers, conf) {
          callback(data, null);
        });
    };

    this.isValidDate = function (valueDate) {
      if (valueDate.match(/[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}/)) {
        var d = new Date(valueDate);
        return !isNaN(d.getTime());
      }
      return false;
    };

    this.addAlbum = function (albumData, callback) {
      if (!albumData.name) return callback({ code: 'Missing name.' });
      if (!albumData.title) return callback({ code: 'Missing title.' });
      if (!this.isValidDate(albumData.date))
        return callback({ code: 'Date not valid.' });
      if (!albumData.description) return callback({ code: 'Missing description.' });
      $log.log('adding album...');
      $http({
        method: 'POST',
        url: _url + '/albums.json',
        data: albumData,
      })
        .success(function (data, status, headers, conf) {
          callback(null, data);
        })
        .error(function (data, status, headers, conf) {
          callback(data, null);
        });
    };

    //devFunction- console.log from html
    this.getLog = function () {
      return function (messageTitle, messageContent) {
        $log.log(messageTitle, messageContent);
      };
    };
  },
]);
