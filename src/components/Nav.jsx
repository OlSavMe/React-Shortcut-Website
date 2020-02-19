import React from "react";
import "./styles/navStyles.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a className="logo" href="#logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </a>
        <div className="subnav">
          <button href className="subnavbtn">ABOUT</button>
          <div className="subnav-content">
            <a href="#company"><img src={require(".././assets/onelineart-5.png")} className="navimage" />Company</a>
            <a href="#team"><img src={require(".././assets/onelineart-3.png")} className="navimage" />Team</a>
            <a href="#careers"><img src={require(".././assets/onelineart-1.png")} className="navimage" sizes="60px" />Careers</a>
          </div>
        </div>
        <div className="subnav">
          <button href className="subnavbtn">ACTIVITIES</button >
          <div className="subnav-content">
            <a href="#link1"> <img src={require(".././assets/onelineart-2.png")} className="navimage" />Link1</a>
            <a href="#link2"><img src={require(".././assets/onelineart-5.png")} className="navimage" />Link2</a>
            <a href="#link3"><img src={require(".././assets/onelineart-3.png")} className="navimage" />Link3</a>
            <a href="#link4"><img src={require(".././assets/onelineart-4.png")} className="navimage" />Link4</a>
          </div>
        </div>
        <div className="subnav">
          <button href className="subnavbtn">RESOURCES</button >
          <div className="subnav-content">
            <a href="#blog"><img src={require(".././assets/onelineart-1.png")} className="navimage" />Blog</a>
            <a href="#gallery"><img src={require(".././assets/onelineart-5.png")} className="navimage" />Gallery</a>
            <a href="#yearbook"><img src={require(".././assets/onelineart-4.png")} className="navimage" />Yearbook</a>
            <a href="#paper"><img src={require(".././assets/onelineart-7.png")} className="navimage" />WhitePaper</a>
            <a href="#formedia"><img src={require(".././assets/onelineart-3.png")} className="navimage" />For Media</a>
          </div>
        </div>
        <div className="subnav">
          <button href className="subnavbtn">FOR PARTNERS</button >
          <div className="subnav-content">
            <a href="#forpart"><img src={require(".././assets/onelineart-5.png")} className="navimage" />Forpart</a>
            <a href="#partne"><img src={require(".././assets/onelineart-4.png")} className="navimage" />Partne</a>
            <a href="#part"><img src={require(".././assets/onelineart-7.png")} className="navimage" />Part</a>
            <a href="#partn"><img src={require(".././assets/onelineart-2.png")} className="navimage" />Partn</a>

          </div>
        </div>
        <div className="subnav">
          <button href className="subnavbtn">JOIN</button >
        </div>
        <form className="form-inline my-2 my-lg-0 ">
          <input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>

    );
  }
}
