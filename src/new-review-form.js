import React from "react";

// create a class new review form for user to enter comment and rating
export default class NewReviewForm extends React.Component {
    constructor(props) {
        super(props);  // pass props to react component
        // store the state of comment and rating
        this.state = {
            commentValue: "",
            rateValue: ""
        };
        // add a review to the current movie
        this.addNewReview = props.addNewReview;
        // bind the change event to the review 
        this.handleCommentChange = this.handleCommentChange.bind(this);
        // bind the change event to the rating 
        this.handleRateChange = this.handleRateChange.bind(this);
        // bind the click event to the add review button
        this.handleClick = this.handleClick.bind(this);        
    }
    // change the state of the comment for the input box
    handleCommentChange(e) {
        this.setState({commentValue: e.target.value});
    }
    // change the state of the rating for the input box
    handleRateChange(e) {
        this.setState({rateValue: e.target.value})
    }
    // when the user click on the add review button
    // add the review and reset the comment and rating to blank
    handleClick(e) {
        this.addNewReview({comment: this.state.commentValue, rate: this.state.rateValue});        
        this.setState({commentValue: '', rateValue: ''});
    }
    // render the input boxes for the comment and rating
    render() {
        return (
            <div>
                <input type="text" placeholder="Comment" onChange={this.handleCommentChange} value={this.state.commentValue} />
                <input type="text" placeholder="Rate" onChange={this.handleRateChange} value={this.state.rateValue} />
                <button onClick={(e) => this.handleClick(e)}>Add Review</button>
                
            </div>
        );
            
    }
}