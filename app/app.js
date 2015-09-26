//
// App
//

var app = {
  init() {
    data
      .getPodcastFeed()
      .then(() => {
        // ready to go!
        // we have the feed!
        console.log(data.podcastFeed);
      })
      .catch(() => {
        // no data... can't start the app...
      });
  },

  render() {

  }
};
