import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const style = {
      1: "width-50",
      2: "width-75",
      3: "width-100"
    };
    const { theme } = this.props;
    return (
      <div className={`card ${style[theme]}`}>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
