import React, { Component } from "react";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {/*icon component*/}
        {/*arrow component*/}
        {/*action button component*/}

        <div className="library-course__description">
          <label>Course Description</label>
          <p>A very long paragraph that is detailed and such.</p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;