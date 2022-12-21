import React from "react";

import { Carousel, Container } from "../Banner/Banner.style";
import ImageSlider from "../imageSlider/ImageSlider";
import Viewers from "../viewers/Viewers";

const Banner = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
};

export default Banner;
