import Title from "../Title";
import Experiences from "./Experiences";
import {
  AboutContainer,
  Description,
  Img,
  HabilidadesContainer,
  Container,
  Eu,
  Info,
} from "./styles";

function About() {
  return (
    <>
      <Title>Sobre</Title>
      <Container>
        <Eu src="/eu.jpeg" alt="" />
        <Info>
          <Description>
            Seja bem-vindo ao meu portifólio. Sou Alex Alexandrino, tenho 22
            anos, estou começando meus estudos em desenvolvimento web e mobile
            atualmente estou focado nas frameworks ReactJS, React Native e
            NexJS, estou diarimente aprimorando meus conhecimentos para me
            tornar desenvolvedor front-end.
          </Description>
          <Description>
            Desde meu primeiro contato com um computador, soube que meu destino
            estaria de alguma forma ligado àquela máquina e hoje, graduado em
            Ciência da Computação, sei que muito mais que uma profissão, tenho
            uma paixão.
          </Description>
          <Description>
            E esta paixão me impulsionou para ajudar várias de empresas e
            profissionais no desenvolvimento de sites, lojas virtuais e outras
            soluções para divulgar seus serviços e produtos.
          </Description>
        </Info>
      </Container>

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
