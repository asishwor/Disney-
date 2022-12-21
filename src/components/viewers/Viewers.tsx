import styled from "styled-components";
import { Container, Wrap } from "./Viewer.style";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/Images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/Images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/Images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/Images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/Images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
};

export default Viewers;
