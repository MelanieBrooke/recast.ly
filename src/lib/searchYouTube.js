var searchYouTube = (options, callback) => {
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   data: options,
  //   success: callback,
  //   dataType: dataType
  // });
  $.get('https://www.googleapis.com/youtube/v3/search', {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    videoEmbeddable: true,
  });
};

export default searchYouTube;



