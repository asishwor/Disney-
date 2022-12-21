import React from "react";
import { Carousel } from "../Banner/Banner.style";

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      {" "}
      <Carousel {...settings}>
        <img src="/Images/slider-badging.jpg" alt="" />
        <img src="/Images/slider-badag.jpg" alt="" />
        <img src="/Images/slider-badging.jpg" alt="" />
      </Carousel>
    </>
  );
};

export default ImageSlider;
