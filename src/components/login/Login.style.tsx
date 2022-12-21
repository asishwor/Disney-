import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-image: url("/Images/login-background.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: top center;
    z-index: -1;
  }
`;
export const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 80%;
  padding: 80px 40px;
`;
export const CtaLogo1 = styled.img``;

export const SignUp = styled.a`
  width: 100%;
  display: inline-block;
  cursor: pointer;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  padding: 8px 0;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  font-family: "Source Code Pro";
  font-family: "Source Code Pro", monospace;
  text-align: center;
`;
export const CtaLogo2 = styled.img`
  margin-top: 25px;
`;
