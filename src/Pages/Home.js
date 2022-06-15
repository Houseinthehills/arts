import React, { Component } from "react";
import image_01 from "../Gallery/01.jpg";
import image_02 from "../Gallery/02.jpg";
import image_03 from "../Gallery/03.jpg";
import image_05 from "../Gallery/05.jpg";
class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-3 padding-0 relative_div">
              <div className="gallery_overlay"></div>
              <img src={image_01} className="gallery" alt="01" />
            </div>
            <div class="col-lg-3 padding-0 relative_div">
              <div className="gallery_overlay"></div>
              <img src={image_03} className="gallery" alt="02" />
            </div>
            <div class="col-lg-3 padding-0 relative_div">
              <div className="gallery_overlay"></div>
              <img src={image_02} className="gallery" alt="04" />
            </div>
            <div class="col-lg-3 padding-0 relative_div">
              <div className="gallery_overlay"></div>
              <img src={image_05} className="gallery" alt="05" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
