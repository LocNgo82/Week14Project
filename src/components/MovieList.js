import React from "react";
import Movie from './Movie';
import {movieApi} from '../rest/MoviesApi'

export class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            name: "",
            synopsis: ""
            
        }
        this.addNewReview = props.addNewReview;                
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSynopsisChange = this.handleSynopsisChange.bind(this);
        this.handleClick = this.handleClick.bind(this);        
    }

    // state = {
    //     movies: [],
    //     name: "",
    //     synopsis: ""        
    // };


componentDidMount() {
    this.fetchMovie();
}

fetchMovie = async () => {
    const movies = await movieApi.get();
    this.setState({movies});
}

updateMovie = async (updateMovie) => {
    console.log("update movie");
    await movieApi.put(updateMovie);
    this.fetchMovie();
}

//this function create a new movie title and its synopsis
createMovie = async (name, synopsis) => {
    await movieApi.post(name,synopsis);
    this.fetchMovie();
    
    // document.getElementById("new-movie-name").value = "";
    // document.getElementById("new-synopsis").value = "";
    this.setState({name: '', synopsis: ''});

}

// delete movie from the server
deleteMovie = async (movieId) => {
    await movieApi.delete(movieId);
    this.fetchMovie();
}

// change the name to the input box value
handleNameChange(e) {
    this.setState({name: e.target.value});
}

// change the synopsis to the input box value
handleSynopsisChange(e) {
    this.setState({synopsis: e.target.value})
}

// when user clicks on the create button, add the movie to the server
handleClick(e) {
    this.createMovie(this.state.name, this.state.synopsis);        
    this.setState({name: '', synopsis: ''});
}
// render the movies to the website
// allow user to create a movie and its synopsis 
render() {
    
    return (       
        <div className="movie-list">
            <h1>Add New Movie</h1>
            <input type="text" placeholder="name" onChange={this.handleNameChange} value={this.state.name} />
            <input type="text" placeholder="synopsis" onChange={this.handleSynopsisChange} value={this.state.synopsis} />
            <button onClick={(e) => this.handleClick(e)}>Add Movie</button>
              
            {this.state.movies.map((movie) => (
                <Movie
                    movie={movie} 
                    key={movie.id}
                    updateMovie={this.updateMovie}
                    deleteMovie={this.deleteMovie}
                    />
            ))}
        </div>
    )
}
} // MovieList

