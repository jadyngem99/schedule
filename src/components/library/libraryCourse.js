import React, { Component } from "react";
import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        {/*action button component*/}
        <Arrow className="library-course__arrow" />
        <Action className="library-course__action" />
        <div className="library-course__description">
          <label>Course Description</label>
          <p>
            A very long paragraph that is detailed and such.A very long
            paragraph that is detailed and such.A very long paragraph that is
            detailed and such.A very long paragraph that is detailed and such.A
            very long paragraph that is detailed and such.
          </p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
