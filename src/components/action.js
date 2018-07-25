import React, { Component } from "react";
import Icon from "./icon";

class Action extends Component {
  handleAction = function() {
    this.props.onClick();

    // document.getElementById('action').classList.add()
  }.bind(this);

  render() {
    return (
      <a
        id="action"
        onClick={() => this.handleAction()}
        className={`${this.props.className} action`}
      />

      // return (
      //   <button
      //     onClick={() => this.props.onClick()}
      //     className={`${this.props.className} action`}
      //   >
      //     {Icon("fas fa-plus-circle")}
      //     {/*Icon("fas fa-times-circle")*/}
      //   </button>
    );
  }
}

export default Action;
