import React, { Component } from "react";
import Icon from "../icon";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {Icon("fas fa-check", "library-course__icon")}
        {/*arrow component*/}
        {/*action button component*/}
        {Icon("fas fa-plus-circle", "library-course__action")}

        <div className="library-course__description">
          <label>Course Description</label>
          <p>A very long paragraph that is detailed and such.</p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
