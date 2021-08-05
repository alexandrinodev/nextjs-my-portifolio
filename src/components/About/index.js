import Title from "../Title";
import {
  Description,
  Container,
  Eu,
  Info,
  ContainerAbout
} from "./styles";

function About() {
  return (
    <>
      <ContainerAbout>
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
              Desde meu primeiro contato com um computador, soube que meu
              destino estaria de alguma forma ligado àquela máquina e hoje,
              graduado em Ciência da Computação, sei que muito mais que uma
              profissão, tenho uma paixão.
            </Description>
            <Description>
              E esta paixão me impulsionou para ajudar várias de empresas e
              profissionais no desenvolvimento de sites, lojas virtuais e outras
              soluções para divulgar seus serviços e produtos.
            </Description>
          </Info>
        </Container>
      </ContainerAbout>
    </>
  );
}

export default About;
