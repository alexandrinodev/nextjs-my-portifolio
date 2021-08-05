import {
  AboutContainer,
  Img,
  HabilidadesContainer,
  Container,
} from "./styles";
import Title from "../Title";

function Skill() {
  return (
    <>
      <Container>
        <Title>Habilidades</Title>
        <AboutContainer>
          <HabilidadesContainer>
            <Img src="/html5.png"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="/css3.jpg"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="/javaScript.png"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="/node.png"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="/react.png"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="/github.jpg"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="https://www.styled-components.com/atom.png"></Img>
          </HabilidadesContainer>
          <HabilidadesContainer>
            <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/600px-Kotlin_Icon.png"></Img>
          </HabilidadesContainer>
        </AboutContainer>
      </Container>
    </>
  );
}

export default Skill;
