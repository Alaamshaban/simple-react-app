import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCl4HVljRxo7cuRh9BNSgxBPRmQMfYFbNo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.YoutubeVideos("surfboards");
  }
  render() {
    const videoSearch = _.debounce((searchTerm)=>{ this.YoutubeVideos(searchTerm) },300)
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }

  YoutubeVideos(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
