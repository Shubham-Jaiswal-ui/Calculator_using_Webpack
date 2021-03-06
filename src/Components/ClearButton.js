import React, { Component } from "react";
import "./ClearButton.css";
class ClearButton extends Component {

  render() {
    return <div styleName="clear-btn" 
    onClick={()=>this.props.handleClick(this.props.children)}>
        {this.props.children}
        </div>;
  }
}
export default ClearButton;
