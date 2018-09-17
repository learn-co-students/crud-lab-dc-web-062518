import React, { Component } from 'react';
import {cuidFn} from '../../reducers/manageRestaurant'

class RestaurantInput extends Component {
  state={
    text: ''
  }

  handleChange = (e)=>{
    this.setState({text: e.target.value})
  }

  handleSubmit = e=>{
    e.preventDefault()
    this.props.addRestaurant({name: this.state.text, id: cuidFn()})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant name</label>
          <input type='text' placeholder='Name' value={this.state.text} onChange={this.handleChange} />
          <button>Create</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
