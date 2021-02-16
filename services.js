angularApp.service('albumService', [
  '$log',
  function ($log) {
    var albums = [
      {
        name: 'madrid1309',
        title: 'Weekend in Madrid',
        date: '2013-09-01',
        description: 'My favourite trip',
        photos: [
          {
            filename: 'madrid01.jpg',
            date: '2013/09/05',
            description: 'I love this place, so much good food.',
          },
          {
            filename: 'madrid02.jpg',
            date: '2013/09/06',
            description: 'The museo del prado we had a wonderful time here.',
          },
        ],
      },
      {
        name: 'iceland1404',
        title: 'Holiday in Iceland',
        date: '2014-04-15',
        description: 'This place is cold',
        photos: [
          {
            filename: 'iceland01.jpg',
            date: '2014/04/14',
            description: 'So cold and so much snow!',
          },
          {
            filename: 'iceland02.jpg',
            date: '2014/04/15',
            description: 'The northern lights are extremely clear here.',
          },
        ],
      },
      {
        name: 'thailand1210',
        title: 'Surfing in Thailand',
        date: '2012-10-01',
        description: 'So hot!',
        photos: [
          {
            filename: 'thailand01.jpg',
            date: '2012/10/01',
            description: 'Getting mah surf on!',
          },
          {
            filename: 'thailand02.jpg',
            date: '2012/10/02',
            description: 'Thai food FTW!!!11!one!1',
          },
        ],
      },
      {
        name: 'australia1207',
        title: 'Wedding in Australia',
        date: '2012-07-31',
        description: 'So many kangaroos and koalas!',
        photos: [
          {
            filename: 'australia01.jpg',
            date: '2012/07/25',
            description: 'The wedding was lovely.',
          },
          {
            filename: 'australia02.jpg',
            date: '2012/07/27',
            description: 'Great Ocean Road.',
          },
        ],
      },
    ];

    this.getAlbums = function () {
      return albums;
    };

    this.getAlbumByName = function (name) {
      for (var item of albums) {
        if (name == item.name) {
          return item.photos;
        }
      }
      throw new Error('album_not_found');
    };

    this.isValidDate = function (valueDate) {
      if (valueDate.match(/[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}/)) {
        var d = new Date(valueDate);
        return !isNaN(d.getTime());
      }
      return false;
    };

    this.addAlbum = function (albumData) {
      if (!albumData.name) throw new Error('Missing name.');
      for (var item of albums) {
        if (albumData.name === item.name) throw new Error('Duplicate album name.');
      }
      if (!albumData.title) throw new Error('Missing title.');
      if (!this.isValidDate(albumData.date)) throw new Error('Date not valid.');
      if (!albumData.description) throw new Error('Missing description.');

      albums.push(albumData);
    };

    this.getLog = function () {
      return function (messageTitle, messageContent) {
        $log.log(messageTitle, messageContent);
      };
    };
  },
]);
