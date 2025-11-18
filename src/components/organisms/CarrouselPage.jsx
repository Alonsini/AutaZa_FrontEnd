import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/img1.webp";
import img2 from "../../assets/img/img2.webp";
import img3 from "../../assets/img/img3.webp";

function CarrouselPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={supra-3}
          alt="Primer slide"
          style={{height:'60vh'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={volvo1}
          alt="Segundo slide"
          style={{height:'60vh'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wrx2}
          alt="Tercer slide"
          style={{height:'60vh'}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselPage;