import { Container, Content, Wrap } from "./Movies.style";

const Movies = () => {
  return (
    <Container>
      <h4>Reccommended for you</h4>
      <Content>
        <Wrap>
          <img src="/Images/movie1.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie2.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie3.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie4.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie5.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie6.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie7.jpg" alt="movies" />
        </Wrap>
        <Wrap>
          <img src="/Images/movie8.jpg" alt="movies" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;
