import React from "react";
import {
  Container,
  CTA,
  CtaLogo1,
  CtaLogo2,
  Description,
  SignUp,
} from "./Login.style";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CtaLogo1 src="/Images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ad
          error nostrum nulla necessitatibus. Illum cupiditate praesentium
          voluptatibus laboriosam dolorem dolore, facere assumenda, facilis quia
          non quaerat id exercitationem nihil.
        </Description>
        <CtaLogo2 src="/Images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;
