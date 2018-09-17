import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  restaurantReviews = ()=>{
    return this.props.reviews.filter(reviews=> reviews.restaurantId === this.props.restaurant.id)
  }

  render() {

    return (
      <div>
        <ReviewInput
          restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews
          reviews={this.restaurantReviews()} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch=>{
  return {addReview: review=>dispatch({type: 'ADD_REVIEW', review}),
          deleteReview: id=>dispatch({type: 'DELETE_REVIEW', id})
          }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
