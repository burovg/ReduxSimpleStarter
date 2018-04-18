
import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';
import VideoDetails from '../src/components/video_detail';

import YTSearch from 'youtube-api-search';
import VideDetails from '../src/components/video_detail';

const API_KEY = "AIzaSyCuEufIKKAmEG-0VUwyutn9eDfMlcMQdMw";



/*const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    );
}*/

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo : null
        };

       this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term:term},
        (videos) => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        }
        );
    }

    render(){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return(
            <div>
                <SearchBar onSearchTermChanged={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />                
            </div>
        );
    }
}



ReactDOM.render(<App/>,document.querySelector('.container'));