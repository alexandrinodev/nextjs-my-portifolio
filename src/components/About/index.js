import Title from "../Title";
import Experiences from "./Experiences";
import { AboutContainer, Subtitle, Img, HabilidadesContainer } from "./styles";

function About() {
  return (
    <>
      <Title>Sobre</Title>
      <Subtitle>
        Seja bem-vindo ao meu portifólio. Sou Alex Alexandrino tenho 22 anos,
        estou começando meus estudos em desenvolvimento web, atualmente estou
        focado nas frameworks ReactJS e NexJS, estou diarimente aprimorando meus
        conhecimentos para me tornar desenvolvedor front-end.
      </Subtitle>

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
      </AboutContainer>
      <Title>Experiências</Title>

      
      <Experiences />
    </>
  );
}

export default About;
