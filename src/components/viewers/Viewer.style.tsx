import styled from "styled-components";

export const Wrap = styled.div`
border: 3px solid rgba(249,149,149,0.1);
border-radius: 10px;
box-shadow: 0 26px 30px -10px #0007, 0 16px 10px -10px #0007;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
&:hover{
    scale: 1.05;
    border-color: rgba(249,249,249,0.8);
    box-shadow: 0 40px 58px -16px #000800,0 30px 22px -10px #0007;

}
img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: pointer;
}
`;
export const Container = styled.div`
  padding: 30px 0  26px;
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5,minmax(0, 1fr));
`;
