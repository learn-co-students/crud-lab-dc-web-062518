import React, { Component } from 'react';

class Review extends Component {

  handleClick= (e)=>{
    e.preventDefault()
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.comment}
          <button onClick={e=> this.handleClick(e)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
