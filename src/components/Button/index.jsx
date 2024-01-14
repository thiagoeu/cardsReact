import React, { Component } from 'react'
import "../../css/button.css"

export default class  Button extends Component {
  render() {
    const {text, onClick} = this.props;
    return (
      <button onClick={onClick} >
        {text}
        {onClick}
      </button>
    )
  }
}
