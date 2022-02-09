import React from "react";
import { Carousel } from "react-bootstrap";
import Image1 from "../images/slider/avalon-park-1.png"

const MainSlider = () => {
  const SlidingImages = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 3,
      ImageUrl: Image1,
      alt: "",
    },
  ];
  return (
    <Carousel>
      {SlidingImages.map((image) => (
        <Carousel.Item interval={1000} key={image.id}>
          <img
            className="d-block w-100"
            src={image.ImageUrl}
            alt={image.alt}
          />
          {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainSlider;
