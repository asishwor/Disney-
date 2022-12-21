import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  width: 100%;
  position: relative;
`;
export const Background = styled.div`
  position: fixed;
  opacity: 0.4; // to make little bit darker
  top: 0;
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  img {
    height: 100%;
    z-index: 2;
    object-fit: contain;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;
export const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 24px;
  height: 44px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  border: 1px solid rgb(249, 249, 249);
  cursor: pointer;
  background-color: rgba(249, 249, 249);
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
export const TrailerButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  background-color: #0004;
  cursor: pointer;
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
  letter-spacing: 1.8px;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background-color: #0006;
  span {
    font-size: 30px;
    color: #fff;
  }
`;
export const GroupButton = styled(AddButton)`
  margin-left: 30px;
`;

export const Subtitle = styled.div`
  margin-top: 22px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
`;
export const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`;
