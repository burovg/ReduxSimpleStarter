import React, {Component} from 'react';

/*const SearchBar = () => {
    return <input />
}*/

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term:''};
    }

    render(){
        return(
            <div className="search-bar">
            <input onChange={event =>  this.onInputChanged(event.target.value)}/>
            Value of input is {this.state.term}
            </div>
        );
    }

    onInputChanged(term){
        this.setState({term});
        this.props.onSearchTermChanged(term);
    }
}

export default SearchBar;