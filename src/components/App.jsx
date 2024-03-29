import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    };

    this.clickedVideo = this.clickedVideo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videoList: videos
      });
    });
  }

  clickedVideo(click) {
    this.setState({
      currentVideo: click
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('cat');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleSearchInputChange={this.getYouTubeVideos.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList clicker={this.clickedVideo} videos={this.state.videoList} /></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


// var search = {
//   query: cats,
//   max: 5,
//   key: YOUTUBE_API_KEY
// }