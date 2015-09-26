//
// Data
//

var data = {
  podcastFeed: {},

  getPodcastFeed() {
    let podcastURL = 'http://www.michaeldsloane.com/music-lovers/?format=json';

    return new Promise(function(resolve, reject) {
      ajax
        .getJSON(podcastURL)
        .then((data) => {
          this.podcastFeed = data;
          resolve();
        })
        .catch(() => {
          console.error('an error occured with getting the podcast feed');
          reject();
        });
    }.bind(this));
  }
};
