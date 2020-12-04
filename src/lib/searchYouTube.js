var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    contentType: 'application/json',
    data: {q: options.query, maxResults: options.max, key: options.key, videoEmbeddable: true, type: 'video', part: 'snippet'},
    success: (data) => {
      callback(data.items);
    },
    error: function(error) {
      console.error('failed', error);
    }

  });


  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   q: options.query,
  //   maxResults: options.max,
  //   key: options.key,
  //   videoEmbeddable: true,
  // },
};

export default searchYouTube;



