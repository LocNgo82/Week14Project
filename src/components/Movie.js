import React from "react";
import NewReviewForm from "../new-review-form";

// creat a movie class 
export default class Movie extends React.Component {

    // constructor to retrieve movie, update function, and delete function from the properties
    constructor(props) {
        super(props);        // store the props to the react component
        this.movie = props.movie;
        this.updateMovie = props.updateMovie;
        this.deleteMovie = props.deleteMovie;
    }
    

    
     
    // delete a review based on the array index
    // update the movie on MockApi    
    deleteReview = (reviewId) => {
        this.movie.reviews.splice(reviewId,1);
        this.updateMovie(this.movie);
    }

    // add a review to the movie and update movie on MockApi
    addNewReview = (review) => {
        this.movie.reviews.push(review);        
        this.updateMovie(this.movie);               
    }

    // display the reviews on the web page
    // create a unique index for each review
    // add a delete button to each review
    reviews = () => (
        <ul>
            {this.movie.reviews.map((review, index) => (
                <li key={index}>                    
                    <label>{`Review: ${review.comment}`}</label><br></br>
                    <label>{`Rating: ${review.rating} out of 10`}</label>                
                    <button onClick={(e) => this.deleteReview(index)}>Delete</button>
                </li>
            )                      
            )}
        </ul>
    );

    // render the reviews
    // if reviews are not blank, display all the reviews for the movie and add a button to each review
    render() {
        const reviews = this.movie.reviews 
        ? this.movie.reviews.map((review, index) =>
        <li key={index}>
            Review: {review.comment}<br></br>
            Rate: {review.rate}
            <button onClick={() => 
                this.deleteReview(index)
            }>Delete</button>

        </li>)
        : null;
        return (
            <div>
                <h2>{this.movie.name} </h2>            
            <h3>
                {this.movie.synopsis}
            </h3>
            <button onClick={(e) => this.deleteMovie(this.movie.id)}>Delete</button> 
                <ul>
                    {reviews}
                </ul>
                <NewReviewForm
                    addNewReview={this.addNewReview}                     
                    />
            </div>
        );
    



    }
}

