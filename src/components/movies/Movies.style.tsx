import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
export const Wrap = styled.div`
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden; // for image border radius
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0 40px 58px -16px #0008, 0 30px 22px -10px #0007;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 40px 58px -16px #000800, 0 30px 22px -10px #0007;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
