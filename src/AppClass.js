import React, { Component } from 'react'

export default class AppClass extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
        <p>Using Classes</p>
      </div>  
    )        
  }
}