import styled from "styled-components";
export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;
export const Nav = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
export const HeaderStyle = styled.div`
  height: 70px;
  background-color: #090b13;
`;
export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    padding: 0 12px;
    color: #fff;
    display: flex;
    align-items: center;
    img {
      height: 20px;
      margin-right: 7px;
    }
    span {
      letter-spacing: 1.42px;
      font-size: 13px;
      position: relative;
      &::after {
        content: "";
        height: 2px;
        bottom: 0;
        opacity: 0;
        left: 0;
        width: 100%;
        scale: 0;
        transition:  all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        position: absolute;
        background-color: #fff;
      }
    }
    &:hover {
      span::after {
        scale: 1;
        opacity: 1;
      }
    }
  }
`;
export const Logo = styled.img`
  width: 80px;
`;
export const UserImage = styled.img``;
