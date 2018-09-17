import React, { Component } from 'react';
import {cuidFn} from '../../reducers/manageRestaurant'
class ReviewInput extends Component {
  state={
    text: ''
  }

  handleChange = (e)=>{
    this.setState({text: e.target.value})
  }

  handleSubmit = e=>{
    e.preventDefault()
    this.props.addReview({comment: this.state.text, id: cuidFn(), restaurantId: this.props.restaurant.id})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review</label>
          <input type='text' placeholder='comment' value={this.state.text} onChange={this.handleChange} />
          <button>Create</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
