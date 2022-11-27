import React, {Component} from "react";
import {MovieList } from './components/MovieList';

// main app for the movie application
// display the movie list to the website
class App extends Component {
    render() {
        return (
            <div>                
                <MovieList />
            </div>
        )
    }
}

export default App;