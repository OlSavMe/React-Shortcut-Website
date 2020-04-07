import React, { Component } from "react";
import "./WhitePaper.scss";

export class WhitePaper extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return (
      <div className="whitepaper skewed">
        <div className="layer bottom">
          <div className="content-wrap">
            <div className="body">
              <p>White paper &mdash; November 2019</p>
              <h3>on Diversity & Inclusion in the Tech Industry</h3>
              <a
                href="https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>

            <img
              src={require("../../assets/illustrations/Illustrations_big-group-people.png")}
              alt="illustration"
            />
          </div>
        </div>

        <div className="layer top">
          <div className="content-wrap">
            <div className="body">
              <p>White paper &mdash; November 2019</p>
              <h3>on Diversity & Inclusion in the Tech industry</h3>
              <a
                href="https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
            <img
              src={require("../../assets/illustrations/Illustrations_big-group-people.png")}
              alt="illustration"
            />
          </div>
        </div>
        <div className="handle"></div>
      </div>
    );
  }
}

export default WhitePaper;
