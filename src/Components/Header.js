import React, { Component } from "react";
import image from "../Assets/slider.jpg";
import image1 from "../Assets/slider-2.jpg";
import image2 from "../Assets/slider-3.jpg";
class Header extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image}
                className="d-block w-100"
                alt="The work of Art"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image1}
                className="d-block w-100"
                alt="The work of Art"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt="The work of Art"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}
export default Header;
