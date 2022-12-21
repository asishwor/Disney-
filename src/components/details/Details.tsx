import React from "react";
import {
  AddButton,
  Background,
  Container,
  Controls,
  Description,
  GroupButton,
  ImageTitle,
  PlayButton,
  Subtitle,
  TrailerButton,
} from "./Detail.style";

const Details = () => {
  return (
    <div>
      <Container>
        <Background>
          <img src="/Images/bgdetails.jpg" alt="" />
        </Background>
        <ImageTitle>
          <img src="/Images/title.png" alt="" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/Images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/Images/play-icon-white.png" alt="trailer" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupButton>
            <AddButton>
              <img src="/Images/group-icon.png" alt="" />
            </AddButton>
          </GroupButton>
        </Controls>

        <Subtitle>2018 7m Family ,Fantasy , Kids ,Animation</Subtitle>
        <Description>
          A Chinese mom who's sad when her grown son leaves Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nesciunt, minus? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Delectus, ratione
          consectetur quae a quia atque.
        </Description>
      </Container>
    </div>
  );
};

export default Details;
