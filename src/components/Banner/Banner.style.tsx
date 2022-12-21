import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &::before {
    background: url(/Images/home-background.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
export const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
  }
  ul li button {
    z-index: 20;
    &::before {
      font-size: 5px;
      color: white;
    }
  }
  button {
    z-index: 2;
  }
  li.slick-active button::before {
    color: rgb(150, 158, 171);
  }
  margin-top: 20px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 20px 30px -10px #000600, 0 16px 10px -10px #0007;
    cursor: pointer;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }
`;
export const BannerStyle = styled.div``;
