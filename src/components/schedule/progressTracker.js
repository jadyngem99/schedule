import React, { Component } from "react";

class ProgressTracker extends Component {
  calculateProgress = function() {
    return (this.props.amountEnrolled / this.props.amountPossible) * 100;
  }.bind(this);

  render() {
    return (
      <div className="progress-tracker">
        <label className="progress-tracker__title">Progress Tracker</label>
        <div className="progress-tracker__percentage" />{" "}
        {this.calculateProgress()}%
      </div>
    );
  }
}
export default ProgressTracker;
